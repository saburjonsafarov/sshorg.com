
(() => {
  const story = document.querySelector('[data-tech-story]');
  if (!story) return;

  const stage = story.querySelector('.tech-stage');
  const world = story.querySelector('.tech-world');
  const stars = story.querySelector('.tech-stars');
  const laptop = story.querySelector('[data-device="laptop"]');
  const phone = story.querySelector('[data-device="phone"]');
  const tablet = story.querySelector('[data-device="tablet"]');
  const monitor = story.querySelector('[data-device="monitor"]');
  const ring = story.querySelector('.tech-ring');
  const finalCaption = story.querySelector('.tech-final-caption');
  const copies = Array.from(story.querySelectorAll('[data-tech-copy]'));
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const ctx = stars && stars.getContext ? stars.getContext('2d', { alpha: true }) : null;

  const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
  const lerp = (from, to, amount) => from + (to - from) * amount;
  const smooth = (value) => {
    const t = clamp(value);
    return t * t * (3 - 2 * t);
  };
  const segment = (value, from, to) => smooth((value - from) / (to - from));
  const mix = (from, to, amount) => lerp(from, to, clamp(amount));

  let progress = 0;
  let targetProgress = 0;
  let raf = 0;
  let pointerX = 0;
  let pointerY = 0;
  let targetPointerX = 0;
  let targetPointerY = 0;
  let starsData = [];

  const setDevice = (element, state) => {
    if (!element) return;
    element.style.opacity = String(state.opacity == null ? 1 : state.opacity);
    element.style.transform = [
      'translate3d(-50%, -50%, 0)',
      'translate3d(' + state.x.toFixed(2) + 'px,' + state.y.toFixed(2) + 'px,' + state.z.toFixed(2) + 'px)',
      'rotateX(' + state.rx.toFixed(2) + 'deg)',
      'rotateY(' + state.ry.toFixed(2) + 'deg)',
      'rotateZ(' + state.rz.toFixed(2) + 'deg)',
      'scale(' + state.scale.toFixed(4) + ')',
    ].join(' ');
  };

  const stateBetween = (a, b, amount) => ({
    x: mix(a.x, b.x, amount),
    y: mix(a.y, b.y, amount),
    z: mix(a.z, b.z, amount),
    rx: mix(a.rx, b.rx, amount),
    ry: mix(a.ry, b.ry, amount),
    rz: mix(a.rz, b.rz, amount),
    scale: mix(a.scale, b.scale, amount),
    opacity: mix(a.opacity == null ? 1 : a.opacity, b.opacity == null ? 1 : b.opacity, amount),
  });

  const phaseOpacity = (value, start, end, fade = .055) => {
    const fadeIn = segment(value, start - fade, start);
    const fadeOut = 1 - segment(value, end, end + fade);
    return clamp(Math.min(fadeIn, fadeOut));
  };

  const updateCopy = (value) => {
    const windows = [
      [0, .17],
      [.205, .345],
      [.395, .535],
      [.585, .725],
      [.79, .97],
    ];
    copies.forEach((element, index) => {
      const range = windows[index] || [2, 3];
      const opacity = phaseOpacity(value, range[0], range[1]);
      element.style.opacity = opacity.toFixed(3);
      element.style.transform = 'translate3d(0,' + ((1 - opacity) * 24).toFixed(2) + 'px,0)';
      element.style.pointerEvents = opacity > .55 ? 'auto' : 'none';
    });
  };

  const computeStates = (value) => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const mobile = vw < 700;
    const compact = vw < 980;

    const intro = segment(value, .015, .14);
    const laptopToSide = segment(value, .17, .31);
    const phoneIn = segment(value, .20, .34);
    const phoneToSide = segment(value, .38, .50);
    const tabletIn = segment(value, .40, .54);
    const tabletToSide = segment(value, .56, .67);
    const monitorIn = segment(value, .59, .73);
    const assemble = segment(value, .76, .92);
    const finale = segment(value, .86, .98);

    const laptopStart = {
      x: compact ? 0 : vw * .18, y: compact ? -vh * .04 : vh * .03, z: -220,
      rx: 8, ry: -18, rz: -2, scale: mobile ? .74 : .88, opacity: .25,
    };
    const laptopHero = {
      x: compact ? 0 : vw * .16, y: compact ? -vh * .03 : vh * .03, z: 35,
      rx: 2, ry: -12, rz: -1, scale: mobile ? .84 : 1, opacity: 1,
    };
    const laptopSide = {
      x: mobile ? -vw * .22 : -vw * .28, y: mobile ? -vh * .10 : -vh * .08, z: -260,
      rx: 4, ry: 18, rz: -4, scale: mobile ? .48 : .60, opacity: .55,
    };
    const laptopFinal = {
      x: mobile ? -vw * .18 : -vw * .26, y: mobile ? -vh * .13 : -vh * .10, z: -70,
      rx: 2, ry: 16, rz: -2, scale: mobile ? .42 : .55, opacity: .92,
    };
    let laptopState = stateBetween(laptopStart, laptopHero, intro);
    laptopState = stateBetween(laptopState, laptopSide, laptopToSide);
    laptopState = stateBetween(laptopState, laptopFinal, assemble);

    const phoneStart = {
      x: vw * .55, y: vh * .14, z: -380, rx: -5, ry: -32, rz: 12,
      scale: .58, opacity: 0,
    };
    const phoneHero = {
      x: compact ? vw * .12 : vw * .18, y: compact ? -vh * .05 : 0, z: 110,
      rx: -3, ry: -12, rz: 7, scale: mobile ? .92 : 1.12, opacity: 1,
    };
    const phoneSide = {
      x: mobile ? -vw * .20 : -vw * .22, y: mobile ? vh * .05 : vh * .03, z: -120,
      rx: 1, ry: 16, rz: -5, scale: mobile ? .66 : .78, opacity: .72,
    };
    const phoneFinal = {
      x: mobile ? 0 : -vw * .05, y: mobile ? vh * .04 : vh * .06, z: 25,
      rx: -2, ry: -4, rz: 3, scale: mobile ? .62 : .72, opacity: .98,
    };
    let phoneState = stateBetween(phoneStart, phoneHero, phoneIn);
    phoneState = stateBetween(phoneState, phoneSide, phoneToSide);
    phoneState = stateBetween(phoneState, phoneFinal, assemble);

    const tabletStart = {
      x: -vw * .55, y: vh * .12, z: -360, rx: 15, ry: 28, rz: -12,
      scale: .55, opacity: 0,
    };
    const tabletHero = {
      x: compact ? -vw * .10 : vw * .15, y: compact ? -vh * .02 : vh * .03, z: 70,
      rx: 4, ry: -14, rz: -4, scale: mobile ? .80 : 1, opacity: 1,
    };
    const tabletSide = {
      x: mobile ? vw * .22 : vw * .26, y: mobile ? -vh * .10 : -vh * .08, z: -180,
      rx: 4, ry: -20, rz: 4, scale: mobile ? .52 : .66, opacity: .70,
    };
    const tabletFinal = {
      x: vw * .18, y: mobile ? -vh * .14 : -vh * .09, z: -30,
      rx: 2, ry: -14, rz: 2, scale: mobile ? .48 : .58, opacity: .94,
    };
    let tabletState = stateBetween(tabletStart, tabletHero, tabletIn);
    tabletState = stateBetween(tabletState, tabletSide, tabletToSide);
    tabletState = stateBetween(tabletState, tabletFinal, assemble);

    const monitorStart = {
      x: vw * .48, y: -vh * .02, z: -460, rx: 0, ry: -24, rz: 2,
      scale: .54, opacity: 0,
    };
    const monitorHero = {
      x: compact ? 0 : vw * .15, y: compact ? -vh * .03 : -vh * .01, z: 45,
      rx: 0, ry: -8, rz: 0, scale: mobile ? .76 : .94, opacity: 1,
    };
    const monitorFinal = {
      x: mobile ? 0 : vw * .28, y: mobile ? -vh * .02 : -vh * .08, z: -95,
      rx: 0, ry: -10, rz: 0, scale: mobile ? .52 : .58, opacity: .90,
    };
    let monitorState = stateBetween(monitorStart, monitorHero, monitorIn);
    monitorState = stateBetween(monitorState, monitorFinal, assemble);

    const parallaxScale = mobile ? .32 : 1;
    const px = pointerX * 24 * parallaxScale;
    const py = pointerY * 18 * parallaxScale;
    [laptopState, phoneState, tabletState, monitorState].forEach((state, index) => {
      const depth = 1 - index * .12;
      state.x += px * depth;
      state.y += py * depth;
    });

    setDevice(laptop, laptopState);
    setDevice(phone, phoneState);
    setDevice(tablet, tabletState);
    setDevice(monitor, monitorState);

    story.style.setProperty('--lid-angle', mix(-86, 0, intro).toFixed(2) + 'deg');
    story.style.setProperty('--tech-progress', value.toFixed(4));

    if (ring) {
      ring.style.opacity = (finale * .88).toFixed(3);
      ring.style.transform = 'translate3d(-50%,-50%,-120px) rotateX(74deg) scale(' + mix(.72, 1, finale).toFixed(3) + ')';
    }
    if (finalCaption) {
      finalCaption.style.opacity = finale.toFixed(3);
      finalCaption.style.transform = 'translate3d(-50%,' + ((1 - finale) * 18).toFixed(2) + 'px,0)';
    }

    story.style.setProperty('--tech-glow-x', mix(70, 52, assemble).toFixed(2) + '%');
    story.style.setProperty('--tech-glow-y', mix(42, 55, finale).toFixed(2) + '%');

    if (world) {
      world.style.transform = 'translate3d(0,' + mix(0, -vh * .015, finale).toFixed(2) + 'px,0) scale(' + mix(1, .965, finale).toFixed(4) + ')';
    }
    updateCopy(value);
  };

  const resizeStars = () => {
    if (!stars || !ctx || !stage) return;
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.max(1, stage.clientWidth);
    const height = Math.max(1, stage.clientHeight);
    stars.width = Math.floor(width * ratio);
    stars.height = Math.floor(height * ratio);
    stars.style.width = width + 'px';
    stars.style.height = height + 'px';
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    const count = Math.round(Math.min(150, Math.max(70, width / 9)));
    starsData = Array.from({ length: count }, (_, index) => ({
      x: ((index * 83.17) % width) / width,
      y: ((index * 47.91 + 17) % height) / height,
      z: ((index * 29.47) % 100) / 100,
      r: .45 + ((index * 13) % 11) / 10,
    }));
  };

  const drawStars = () => {
    if (!stars || !ctx || !stage) return;
    const width = stage.clientWidth;
    const height = stage.clientHeight;
    ctx.clearRect(0, 0, width, height);
    const drift = progress * 120;

    starsData.forEach((star) => {
      const depth = .25 + star.z * .75;
      const x = (star.x * width + pointerX * 12 * depth) % width;
      let y = star.y * height - drift * depth;
      while (y < 0) y += height;
      const alpha = .13 + star.z * .47;
      ctx.beginPath();
      ctx.fillStyle = 'rgba(214,226,255,' + alpha.toFixed(3) + ')';
      ctx.arc(x, y, star.r * depth, 0, Math.PI * 2);
      ctx.fill();
    });
  };

  const measureTarget = () => {
    if (reducedMotion.matches) {
      targetProgress = 1;
      return;
    }
    const rect = story.getBoundingClientRect();
    const distance = Math.max(1, story.offsetHeight - window.innerHeight);
    targetProgress = clamp(-rect.top / distance);
  };

  const animate = () => {
    raf = 0;
    pointerX += (targetPointerX - pointerX) * .08;
    pointerY += (targetPointerY - pointerY) * .08;
    progress += (targetProgress - progress) * .11;
    computeStates(progress);
    drawStars();

    const moving = Math.abs(targetProgress - progress) > .0005 ||
      Math.abs(targetPointerX - pointerX) > .002 ||
      Math.abs(targetPointerY - pointerY) > .002;
    if (moving) raf = requestAnimationFrame(animate);
  };

  const schedule = () => {
    measureTarget();
    if (!raf) raf = requestAnimationFrame(animate);
  };

  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', () => {
    resizeStars();
    schedule();
  });
  window.addEventListener('pointermove', (event) => {
    if (reducedMotion.matches) return;
    targetPointerX = clamp((event.clientX / window.innerWidth - .5) * 2, -1, 1);
    targetPointerY = clamp((event.clientY / window.innerHeight - .5) * 2, -1, 1);
    if (!raf) raf = requestAnimationFrame(animate);
  }, { passive: true });

  reducedMotion.addEventListener('change', () => {
    targetPointerX = 0;
    targetPointerY = 0;
    resizeStars();
    schedule();
  });

  resizeStars();
  measureTarget();
  progress = targetProgress;
  computeStates(progress);
  drawStars();
})();
