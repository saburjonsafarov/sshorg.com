import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { activeShot, COPY, copyOpacity, exploreAt, STORY_END } from './schedule.js';
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

// Resolves once the browser has painted what is on the page now. A function declaration:
// init() runs at the top of the module, before any const below is initialised.
function afterPaint() {
  return new Promise((resolve) => requestAnimationFrame(() => setTimeout(resolve, 0)));
}

function init(node) {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const forcedStatic = new URLSearchParams(window.location.search).get('story') === 'static';
  let session = null;
  let boot = null;
  const fallback = () => {
    boot?.cancel();
    boot = null;
    session?.destroy();
    session = null;
    setMode(node, 'static');
  };
  const start = () => {
    if (session || boot) return;
    if (forcedStatic || reduce.matches || !webglSupported()) {
      setMode(node, 'static');
      return;
    }
    let cancel;
    const token = { cancelled: false, done: new Promise((resolve) => (cancel = resolve)) };
    token.cancel = () => {
      token.cancelled = true;
      cancel();
    };
    boot = token;
    createSession(node, fallback, token)
      .then((created) => {
        if (token.cancelled) return;
        boot = null;
        session = created;
      })
      .catch((error) => {
        if (token.cancelled) return;
        console.warn('[story] falling back to static scene', error);
        fallback();
      });
  };
  reduce.addEventListener('change', () => (reduce.matches ? fallback() : start()));
  start();
}

// Builds the scene in steps so the hero text paints first and no step holds the main
// thread longer than it must. Resolves to null when `token` is cancelled on the way.
async function createSession(node, onLost, token) {
  const stageEl = node.querySelector('.story-stage');
  const canvas = node.querySelector('.story-canvas');
  const copies = Array.from(node.querySelectorAll('[data-story-copy]'));
  const ticks = Array.from(node.querySelectorAll('.story-rail i'));
  const cue = node.querySelector('.story-cue');
  const coarse = window.matchMedia('(pointer: coarse)').matches;
  const fine = window.matchMedia('(pointer: fine)').matches;

  const onContextLost = (event) => {
    event.preventDefault();
    onLost();
  };
  canvas.addEventListener('webglcontextlost', onContextLost);

  // The intro text rises in with CSS (story3d.css) on the compositor, so it keeps moving
  // while the scene below is built.
  setMode(node, 'live');
  await afterPaint();

  const maxDpr = Math.min(window.devicePixelRatio || 1, coarse ? 1.5 : 2);
  let dpr = maxDpr;
  let dirty = true;
  let stage = null;
  let bloomAtStart = false;
  const measure = () => {
    const rect = stageEl.getBoundingClientRect();
    stage.resize(rect.width, rect.height, dpr);
    dirty = true;
  };
  const abandon = () => {
    canvas.removeEventListener('webglcontextlost', onContextLost);
    stage?.dispose();
    return null;
  };
  const bootTheme = currentTheme();
  try {
    if (token.cancelled) return abandon();
    // Bloom only where a mouse suggests a desktop-class GPU; phones render direct.
    stage = createStage(canvas, { bloom: fine && !coarse });
    bloomAtStart = stage.bloom;
    stage.setTheme(bootTheme);
    measure();
    await afterPaint();
    if (token.cancelled) return abandon();
    await Promise.race([stage.warmup(), token.done]);
    if (token.cancelled) return abandon();
  } catch (error) {
    abandon();
    throw error;
  }
  // The theme observer below starts only now: catch a switch made while the scene loaded.
  if (currentTheme() !== bootTheme) stage.setTheme(currentTheme());

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

  // "Closer look" viewer: pills fly the camera to a feature; drag orbits the view.
  const exploreEl = node.querySelector('[data-story-explore]');
  const features = Array.from(node.querySelectorAll('.story-feature'));
  const swatches = Array.from(node.querySelectorAll('.story-swatch'));
  const viewer = { active: null, t: 1, orbit: 0, orbitTarget: 0, on: false, shown: -1 };
  let flight = null;

  function selectFeature(name) {
    const next = name && name !== viewer.active ? name : null;
    viewer.active = next;
    stage.selectFeature(next === 'finish' ? null : next);
    flight?.kill();
    viewer.t = 0;
    viewer.orbitTarget = 0;
    flight = gsap.to(viewer, { t: 1, duration: 1.25, ease: 'none' });
    features.forEach((feature) => {
      const open = feature.dataset.feature === next;
      feature.classList.toggle('is-open', open);
      feature.querySelector('.story-pill')?.setAttribute('aria-expanded', String(open));
      const body = feature.querySelector('.story-feature-body');
      if (body) body.hidden = !open;
    });
    node.toggleAttribute('data-feature-open', Boolean(next && next !== 'finish'));
    dirty = true;
  }

  const onPill = (event) => {
    const feature = event.currentTarget.closest('.story-feature');
    if (feature) selectFeature(feature.dataset.feature);
  };
  features.forEach((feature) => feature.querySelector('.story-pill')?.addEventListener('click', onPill));
  const onSwatch = (event) => {
    const finish = event.currentTarget.dataset.finish;
    stage.setFinish(finish);
    swatches.forEach((swatch) => swatch.setAttribute('aria-pressed', String(swatch.dataset.finish === finish)));
    dirty = true;
  };
  swatches.forEach((swatch) => swatch.addEventListener('click', onSwatch));
  const onKey = (event) => {
    if (event.key === 'Escape' && viewer.active) selectFeature(null);
  };
  document.addEventListener('keydown', onKey);

  const drag = { id: null, x: 0, start: 0 };
  const onDown = (event) => {
    if (!viewer.on || event.button > 0) return;
    drag.id = event.pointerId;
    drag.x = event.clientX;
    drag.start = viewer.orbitTarget;
    canvas.setPointerCapture?.(event.pointerId);
  };
  const onMove = (event) => {
    if (event.pointerId !== drag.id) return;
    viewer.orbitTarget = Math.max(-0.7, Math.min(0.7, drag.start + (event.clientX - drag.x) * 0.006));
  };
  const onUp = (event) => {
    if (event.pointerId === drag.id) drag.id = null;
  };
  canvas.addEventListener('pointerdown', onDown);
  canvas.addEventListener('pointermove', onMove);
  canvas.addEventListener('pointerup', onUp);
  canvas.addEventListener('pointercancel', onUp);

  function applyExplore(p) {
    const level = Math.round(exploreAt(p) * 1000) / 1000;
    if (level === viewer.shown) return;
    viewer.shown = level;
    exploreEl.style.opacity = String(level);
    exploreEl.style.visibility = level < 0.01 ? 'hidden' : 'visible';
    viewer.on = level > 0.6;
    node.dataset.explore = viewer.on ? 'on' : 'off';
    // Scrolling back into the story closes the viewer.
    if (level < 0.5 && viewer.active) selectFeature(null);
    if (level < 0.5) viewer.orbitTarget = 0;
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
    viewer.orbit += (viewer.orbitTarget - viewer.orbit) * (1 - Math.exp(-deltaTime / 160));
    if (Math.abs(viewer.orbitTarget - viewer.orbit) < 1e-4) viewer.orbit = viewer.orbitTarget;
    const viewerMoving = viewer.t !== last.t || viewer.orbit !== last.orbit;
    const moved = dirty || state.p !== last.p || state.intro !== last.intro || pointerMoving || viewerMoving;
    if (exploreEl) applyExplore(state.p);

    const { screensChanged, cue: cueOpacity } = stage.update(state.p, { intro: state.intro, time: time, pointerX: pointer.x, pointerY: pointer.y, exploreT: viewer.t, orbit: viewer.orbit });
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
    last.t = viewer.t;
    last.orbit = viewer.orbit;
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
    storyEnd: STORY_END,
    get explore() {
      return exploreAt(state.p);
    },
    get feature() {
      return viewer.active;
    },
    get flight() {
      return viewer.t;
    },
    featureRect: () => {
      const r = stage.featureRect();
      if (!r) return null;
      const c = canvas.getBoundingClientRect();
      return { left: r.left + c.left, right: r.right + c.left, top: r.top + c.top, bottom: r.bottom + c.top };
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
      lenis.destroy();
      io.disconnect();
      ro.disconnect();
      themeObserver.disconnect();
      schemeQuery.removeEventListener('change', applyTheme);
      window.removeEventListener('pointermove', onPointer);
      flight?.kill();
      document.removeEventListener('keydown', onKey);
      features.forEach((feature) => feature.querySelector('.story-pill')?.removeEventListener('click', onPill));
      swatches.forEach((swatch) => swatch.removeEventListener('click', onSwatch));
      canvas.removeEventListener('pointerdown', onDown);
      canvas.removeEventListener('pointermove', onMove);
      canvas.removeEventListener('pointerup', onUp);
      canvas.removeEventListener('pointercancel', onUp);
      if (exploreEl) {
        exploreEl.style.opacity = '';
        exploreEl.style.visibility = '';
      }
      node.removeAttribute('data-feature-open');
      delete node.dataset.explore;
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
