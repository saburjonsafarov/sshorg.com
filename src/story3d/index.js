import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { activeShot, COPY, copyOpacity } from './schedule.js';
import { createStage } from './stage.js';

gsap.registerPlugin(ScrollTrigger);

const root = document.querySelector('[data-story]');
if (root) init(root);

function webglSupported() {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
}

function currentTheme() {
  const explicit = document.documentElement.dataset.theme;
  if (explicit) return explicit;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function setMode(node, mode) {
  node.dataset.storyMode = mode;
  if (mode === 'static') window.__story = { mode: 'static' };
  node.classList.toggle('story-live', mode === 'live');
  node.classList.toggle('story-static', mode === 'static');
  if (mode !== 'live') node.classList.remove('story-ready');
}

function init(node) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const forcedStatic = new URLSearchParams(window.location.search).get('story') === 'static';
  let session = null;
  const fallback = () => {
    session?.destroy();
    session = null;
    setMode(node, 'static');
  };
  const start = () => {
    if (session) return;
    if (forcedStatic || reduce.matches || !webglSupported()) {
      setMode(node, 'static');
      return;
    }
    try {
      session = createSession(node, fallback);
    } catch (error) {
      console.warn('[story] falling back to static scene', error);
      fallback();
    }
  };
  reduce.addEventListener('change', () => (reduce.matches ? fallback() : start()));
  start();
}

function createSession(node, onLost) {
  const stageEl = node.querySelector('.story-stage');
  const canvas = node.querySelector('.story-canvas');
  const copies = Array.from(node.querySelectorAll('[data-story-copy]'));
  const ticks = Array.from(node.querySelectorAll('.story-rail i'));
  const cue = node.querySelector('.story-cue');
  const coarse = window.matchMedia('(pointer: coarse)').matches;
  const fine = window.matchMedia('(pointer: fine)').matches;

  setMode(node, 'live');
  // Bloom only where a mouse suggests a desktop-class GPU; phones render direct.
  const stage = createStage(canvas, { bloom: fine && !coarse });
  const bloomAtStart = stage.bloom;
  stage.setTheme(currentTheme());

  const maxDpr = Math.min(window.devicePixelRatio || 1, coarse ? 1.5 : 2);
  let dpr = maxDpr;
  let dirty = true;
  const measure = () => {
    const rect = stageEl.getBoundingClientRect();
    stage.resize(rect.width, rect.height, dpr);
    dirty = true;
  };
  measure();

  // Smooth, inertial page scroll. Touch keeps native momentum.
  const lenis = new Lenis({ lerp: 0.085, smoothWheel: true, anchors: true, autoRaf: false });
  lenis.on('scroll', ScrollTrigger.update);
  const driveLenis = (time) => lenis.raf(time * 1000);
  gsap.ticker.add(driveLenis);
  gsap.ticker.lagSmoothing(0);

  const state = { p: 0, intro: 0 };
  const scrollTween = gsap.to(state, {
    p: 1,
    ease: 'none',
    scrollTrigger: { trigger: node, start: 'top top', end: 'bottom bottom', scrub: 0.6, invalidateOnRefresh: true },
  });
  const introTween = gsap.to(state, { intro: 1, duration: 2.4, ease: 'expo.out', delay: 0.15 });
  const introCopy = copies[0] ? gsap.from(copies[0].children, { y: 26, autoAlpha: 0, duration: 1.1, ease: 'expo.out', stagger: 0.07, delay: 0.1, clearProps: 'transform,opacity,visibility' }) : null;

  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  const onPointer = (event) => {
    if (event.pointerType !== 'mouse') return;
    pointer.tx = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.ty = (event.clientY / window.innerHeight) * 2 - 1;
  };
  window.addEventListener('pointermove', onPointer, { passive: true });

  let visible = true;
  const io = new IntersectionObserver((entries) => {
    visible = entries.some((entry) => entry.isIntersecting);
    dirty = true;
  });
  io.observe(node);

  const ro = new ResizeObserver(measure);
  ro.observe(stageEl);

  const applyTheme = () => {
    stage.setTheme(currentTheme());
    dirty = true;
  };
  const themeObserver = new MutationObserver(applyTheme);
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  const schemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  schemeQuery.addEventListener('change', applyTheme);

  const onContextLost = (event) => {
    event.preventDefault();
    onLost();
  };
  canvas.addEventListener('webglcontextlost', onContextLost);

  const last = { p: -1, intro: -1, px: 0, py: 0, copies: COPY.map(() => -1), tick: -1 };
  const frameTimes = [];
  let rendered = 0;
  let ready = false;

  function applyCopy(p) {
    copies.forEach((element, index) => {
      const opacity = Math.round(copyOpacity(p, index) * 1000) / 1000;
      if (opacity === last.copies[index]) return;
      last.copies[index] = opacity;
      element.style.opacity = String(opacity);
      element.style.transform = `translate3d(0, ${((1 - opacity) * 18).toFixed(2)}px, 0)`;
      // Only the intro holds links; other chapters stay in the accessibility tree.
      if (index === 0) element.style.visibility = opacity < 0.01 ? 'hidden' : 'visible';
    });
    const shot = activeShot(p);
    if (shot !== last.tick) {
      last.tick = shot;
      ticks.forEach((tick, index) => tick.classList.toggle('is-active', index === shot - 1));
      node.dataset.storyShot = String(shot);
    }
  }

  function adaptQuality(deltaTime) {
    frameTimes.push(deltaTime);
    if (frameTimes.length < 45) return;
    const average = frameTimes.reduce((a, b) => a + b, 0) / frameTimes.length;
    frameTimes.length = 0;
    if (average > 24 && dpr > 1) {
      dpr = Math.max(1, Math.round((dpr - 0.25) * 100) / 100);
      measure();
    } else if (average > 24 && stage.bloom) {
      stage.setBloom(false);
      dirty = true;
    }
  }

  const tick = (time, deltaTime) => {
    if (!visible || document.hidden) {
      frameTimes.length = 0;
      return;
    }
    const k = 1 - Math.exp(-deltaTime / 220);
    pointer.x += (pointer.tx - pointer.x) * k;
    pointer.y += (pointer.ty - pointer.y) * k;
    const pointerMoving = Math.abs(pointer.x - last.px) > 1e-4 || Math.abs(pointer.y - last.py) > 1e-4;
    const moved = dirty || state.p !== last.p || state.intro !== last.intro || pointerMoving;

    const { screensChanged, cue: cueOpacity } = stage.update(state.p, { intro: state.intro, time: time, pointerX: pointer.x, pointerY: pointer.y });
    if (!moved && !screensChanged) {
      frameTimes.length = 0;
      return;
    }
    applyCopy(state.p);
    if (cue) cue.style.opacity = String(cueOpacity);
    stage.render();
    rendered += 1;
    if (!dirty && last.p !== -1) adaptQuality(deltaTime);
    last.p = state.p;
    last.intro = state.intro;
    last.px = pointer.x;
    last.py = pointer.y;
    dirty = false;
    if (!ready) {
      ready = true;
      requestAnimationFrame(() => node.classList.add('story-ready'));
    }
  };
  gsap.ticker.add(tick);

  // Test and debugging hook; read-only.
  window.__story = {
    mode: 'live',
    get progress() {
      return state.p;
    },
    get dpr() {
      return dpr;
    },
    get bloom() {
      return stage.bloom;
    },
    bloomAtStart,
    get light() {
      return stage.light;
    },
    get frames() {
      return rendered;
    },
    rects: () => stage.deviceRects(),
    coverage: () => stage.coverage(),
  };

  return {
    destroy() {
      gsap.ticker.remove(tick);
      gsap.ticker.remove(driveLenis);
      scrollTween.scrollTrigger?.kill();
      scrollTween.kill();
      introTween.kill();
      introCopy?.revert();
      lenis.destroy();
      io.disconnect();
      ro.disconnect();
      themeObserver.disconnect();
      schemeQuery.removeEventListener('change', applyTheme);
      window.removeEventListener('pointermove', onPointer);
      canvas.removeEventListener('webglcontextlost', onContextLost);
      copies.forEach((element) => {
        element.style.opacity = '';
        element.style.transform = '';
        element.style.visibility = '';
      });
      stage.dispose();
      window.__story = { mode: 'static' };
    },
  };
}
