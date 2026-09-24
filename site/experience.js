/* A single inverse camera transform; device roots never move during scrolling. */
(() => {
  'use strict';
  const clamp = (n, min = 0, max = 1) => Math.min(max, Math.max(min, n));
  const mix = (a, b, t) => a + (b - a) * t;
  const ease = n => { const t = clamp(n); return t * t * t * (t * (t * 6 - 15) + 10); };
  const ramp = (p, a, b) => ease((p - a) / (b - a));
  const damp = (value, target, dt, tau = 115) => mix(value, target, 1 - Math.exp(-Math.max(0, dt) / tau));
  const radians = degrees => degrees * Math.PI / 180;

  function makeLayout(width, height) {
    const mobile = width < 920;
    const perspective = mobile ? 1100 : 1500;
    const gap = mobile ? 900 : Math.max(1450, width * 1.06);
    const scale = mobile ? Math.min(width * .90 / 690, height * .32 / 460) : Math.min(1.10, width * .43 / 690, height * .64 / 460);
    const devices = [
      { name: 'laptop', x: 0, z: 0, width: 660, height: 416, scale, rx: 3, ry: -12, rz: -2 },
      { name: 'phone', x: gap, z: 90, width: 216, height: 448, scale: mobile ? Math.min(scale * 1.52, height * .36 / 448) : scale * 1.13, rx: -3, ry: 14, rz: -5 },
      { name: 'tablet', x: gap * 2, z: -70, width: 520, height: 355, scale: scale * 1.10, rx: 5, ry: -13, rz: 2 },
      { name: 'monitor', x: gap * 3, z: 0, width: 690, height: 460, scale, rx: 0, ry: 10, rz: 0 },
    ].map(Object.freeze);
    const sceneY = mobile ? height * .655 : height * .53;
    const poses = devices.map((d, i) => {
      const z = i === 1 ? 100 : 30;
      const side = i % 2 === 0 ? 1 : -1;
      const offset = mobile ? 0 : side * width * .24;
      return { x: d.x - offset * (perspective + z - d.z) / perspective, y: 0, z, yaw: 0 };
    });
    const finalZ = perspective * ((gap * 3 + 800 * scale) / (width * .87) - 1);
    const final = { x: gap * 1.5, y: mobile ? 0 : -height * .05, z: finalZ, yaw: 0 };
    const keys = [
      [0, { ...poses[0], z: 180 }], [.14, poses[0]], [.225, poses[0]],
      [.365, poses[1]], [.465, poses[1]], [.605, poses[2]], [.705, poses[2]],
      [.845, poses[3]], [.902, poses[3]], [1, final],
    ];
    return Object.freeze({ width, height, mobile, perspective, gap, sceneY, scale, devices: Object.freeze(devices), keys });
  }

  function cameraAt(progress, layout) {
    const p = clamp(progress);
    let index = layout.keys.findIndex(([at]) => at >= p);
    if (index <= 0) return { ...layout.keys[0][1] };
    const [a, from] = layout.keys[index - 1];
    const [b, to] = layout.keys[index];
    const t = ease((p - a) / (b - a));
    const camera = {};
    for (const key of ['x', 'y', 'z', 'yaw']) camera[key] = mix(from[key], to[key], t);
    // A restrained pan during transit, zero at both stations and the wide shot.
    if (index > 1 && index < 9 && from.x !== to.x) camera.yaw += Math.sin(t * Math.PI) * .75;
    return camera;
  }

  function project(point, camera, layout) {
    const angle = radians(camera.yaw);
    const x = point.x - camera.x;
    const z = point.z - camera.z;
    const viewX = x * Math.cos(angle) + z * Math.sin(angle);
    const viewZ = -x * Math.sin(angle) + z * Math.cos(angle);
    const scale = layout.perspective / Math.max(1, layout.perspective - viewZ);
    return { x: layout.width / 2 + viewX * scale, y: layout.sceneY + (point.y - camera.y) * scale, scale, z: viewZ };
  }

  function deviceBounds(d, camera, layout) {
    const corners = [];
    for (const dx of [-.5, .5]) for (const dy of [-.5, .5]) {
      let x = dx * d.width * d.scale, y = dy * d.height * d.scale, z = 0;
      const rz = radians(d.rz), ry = radians(d.ry), rx = radians(d.rx);
      [x, y] = [x * Math.cos(rz) - y * Math.sin(rz), x * Math.sin(rz) + y * Math.cos(rz)];
      [x, z] = [x * Math.cos(ry) + z * Math.sin(ry), -x * Math.sin(ry) + z * Math.cos(ry)];
      [y, z] = [y * Math.cos(rx) - z * Math.sin(rx), y * Math.sin(rx) + z * Math.cos(rx)];
      corners.push(project({ x: x + d.x, y, z: z + d.z }, camera, layout));
    }
    return { left: Math.min(...corners.map(p => p.x)), right: Math.max(...corners.map(p => p.x)), top: Math.min(...corners.map(p => p.y)), bottom: Math.max(...corners.map(p => p.y)) };
  }

  function copyOpacity(p, index) {
    const windows = [[-.04, .102], [.126, .218], [.367, .46], [.607, .70], [.847, .90]];
    const [a, b] = windows[index];
    return ramp(p, a, a + .018) * (1 - ramp(p, b - .018, b));
  }

  const overlaps = (a, b, padding = 12) => a.left < b.right + padding && a.right > b.left - padding && a.top < b.bottom + padding && a.bottom > b.top - padding;
  const api = { clamp, ease, damp, makeLayout, cameraAt, project, deviceBounds, copyOpacity };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (typeof document === 'undefined') return;
  const story = document.querySelector('[data-tech-story]');
  if (!story) return;
  const stage = story.querySelector('.tech-stage');
  const world = story.querySelector('.tech-world');
  if (!stage || !world) return;

  // Keep the existing content, language switcher, analytics and project dialogs.
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
  const copies = [...story.querySelectorAll('[data-tech-copy]')];
  const devices = [...story.querySelectorAll('[data-device]')];
  const finale = story.querySelector('.tech-final-caption');
  const viewport = document.createElement('div');
  viewport.className = 'tech-viewport';
  world.before(viewport);
  viewport.append(world);
  const canvas = story.querySelector('.tech-stars');
  if (canvas) { canvas.className = 'tech-space'; canvas.setAttribute('aria-hidden', 'true'); }
  story.querySelector('.tech-ambient-graph')?.remove();
  story.querySelector('.tech-floor')?.remove();
  story.querySelector('.tech-ring')?.remove();
  story.querySelector('.tech-progress-rail')?.remove();
  story.querySelector('.tech-scroll-cue')?.remove();
  const veil = document.createElement('div');
  veil.className = 'tech-atmosphere'; veil.setAttribute('aria-hidden', 'true');
  stage.append(veil);

  if (typeof stopTyping === 'function') stopTyping();
  const greeting = story.querySelector('#typedGreeting');
  if (greeting) {
    greeting.removeAttribute('data-i18n');
    greeting.classList.remove('typing-caret');
    greeting.innerHTML = 'Saburjon<span class="tech-name-line">Safarov.</span>';
  }
  copies.forEach((copy, i) => { copy.dataset.copySide = i === 2 || i === 4 ? 'right' : 'left'; });

  const hud = document.createElement('nav');
  hud.className = 'tech-chapters';
  hud.innerHTML = ['01', '02', '03', '04'].map((n, i) => `<button type="button" data-station="${i}"><span>${n}</span><i></i></button>`).join('');
  const skip = document.createElement('a');
  skip.className = 'tech-skip'; skip.href = '#projects';
  const coordinates = document.createElement('div');
  coordinates.className = 'tech-coordinates'; coordinates.setAttribute('aria-hidden', 'true');
  stage.append(hud, skip, coordinates);

  const laptopScreen = story.querySelector('.tech-laptop-screen');
  if (laptopScreen) laptopScreen.innerHTML = `<div class="tech-windowbar"><i></i><i></i><i></i><span>sshorg.com</span><b>↗</b></div><div class="screen-site"><div class="screen-nav"><b>S.</b><span>WORK / ABOUT / CONTACT</span></div><span class="screen-kicker">ENGINEERING, BEYOND BOUNDARIES.</span><strong>One idea.<br><em>Every screen.</em></strong><p>Saburjon Safarov · Kotlin Multiplatform</p><div class="screen-pills"><span>Android</span><span>iOS</span><span>Desktop</span></div><div class="screen-orbit"><i></i><i></i><i></i><b>K</b></div><div class="screen-code"><span>sharedMain / Product.kt</span><code>product {<br>&nbsp; android()<br>&nbsp; ios()<br>&nbsp; desktop()<br>}</code></div></div>`;
  const graph = story.querySelector('.tech-graph-grid');
  if (graph) graph.insertAdjacentHTML('afterbegin', `<div class="screen-graph-label">compose-graph <span>CONNECTED SYSTEMS</span></div><svg class="screen-edges" viewBox="0 0 520 355" aria-hidden="true"><path d="M260 176L110 94M260 176L397 91M260 176L124 272M260 176L389 271M110 94L124 272M397 91L389 271" fill="none" stroke="currentColor" stroke-width="1.2"/></svg>`);
  const pipeline = story.querySelector('.tech-pipeline');
  if (pipeline) pipeline.insertAdjacentHTML('beforeend', `<div class="screen-telemetry"><div><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><span>BUILD → VERIFY → RELEASE<br><b>One continuous delivery system.</b></span></div>`);
  const mobileKicker = story.querySelector('.tech-mobile-kicker');
  if (mobileKicker) mobileKicker.textContent = 'PRODUCT PREVIEW · DEMO';

  const text = {
    ru: { skip: 'Сразу к проектам ↗', chapters: 'Сцены портфолио', names: ['Разработка', 'Мобильные продукты', 'Архитектура', 'Продакшен'], end: 'Один код. Целая экосистема.', sub: 'Android · iOS · Desktop · Web', intro: 'ИНЖЕНЕР · СОЗДАТЕЛЬ ПРОДУКТОВ' },
    tg: { skip: 'Ба лоиҳаҳо ↗', chapters: 'Саҳнаҳои портфолио', names: ['Таҳия', 'Маҳсулоти мобилӣ', 'Меъморӣ', 'Продакшен'], end: 'Як код. Як экосистема.', sub: 'Android · iOS · Desktop · Web', intro: 'МУҲАНДИС · СОЗАНДАИ МАҲСУЛОТ' },
    en: { skip: 'Skip to projects ↗', chapters: 'Portfolio scenes', names: ['Development', 'Mobile products', 'Architecture', 'Production'], end: 'One codebase. An entire ecosystem.', sub: 'Android · iOS · Desktop · Web', intro: 'ENGINEER · PRODUCT BUILDER' },
  };

  let layout, backdrop, copyRects = [], frame = 0, previousTime = 0;
  let progress = 0, target = 0, pointerX = 0, pointerY = 0, aimX = 0, aimY = 0;
  let visible = true, staticMode = false, startY = 0, distance = 1, destroyed = false;
  const controller = new AbortController();
  const on = (node, type, fn, options = {}) => node.addEventListener(type, fn, { ...options, signal: controller.signal });

  function localize() {
    const t = text[document.documentElement.lang] || text.en;
    skip.textContent = t.skip; hud.setAttribute('aria-label', t.chapters);
    hud.querySelectorAll('button').forEach((button, i) => { button.setAttribute('aria-label', t.names[i]); button.title = t.names[i]; });
    const eyebrow = copies[0]?.querySelector('.tech-eyebrow');
    if (eyebrow) eyebrow.textContent = t.intro;
    if (finale) { finale.querySelector('strong').textContent = t.end; finale.querySelector('span').textContent = t.sub; }
  }

  function measureCopy() {
    const bounds = stage.getBoundingClientRect();
    copyRects = copies.map(copy => {
      const r = copy.getBoundingClientRect();
      return { left: r.left - bounds.left, right: r.right - bounds.left, top: r.top - bounds.top, bottom: r.bottom - bounds.top };
    });
  }

  function resize() {
    staticMode = motion.matches || window.innerHeight < 560;
    story.classList.toggle('is-static', staticMode);
    layout = makeLayout(stage.clientWidth, stage.clientHeight);
    world.style.top = layout.sceneY + 'px';
    viewport.style.perspective = layout.perspective + 'px';
    viewport.style.perspectiveOrigin = `50% ${layout.sceneY}px`;
    devices.forEach((element, i) => {
      const d = layout.devices[i];
      if (!d) return;
      element.style.width = d.width + 'px'; element.style.height = d.height + 'px';
      element.style.transform = `translate3d(${d.x}px,0,${d.z}px) rotateX(${d.rx}deg) rotateY(${d.ry}deg) rotateZ(${d.rz}deg) scale(${d.scale}) translate(-50%,-50%)`;
    });
    startY = story.getBoundingClientRect().top + window.scrollY;
    distance = Math.max(1, story.offsetHeight - stage.clientHeight);
    measureCopy();
    backdrop?.resize(layout);
    readScroll();
    if (staticMode) progress = .16;
    requestFrame();
  }

  function readScroll() { target = staticMode ? .16 : clamp((window.scrollY - startY) / distance); }
  function requestFrame() {
    if (!frame && visible && !document.hidden && !destroyed) frame = requestAnimationFrame(tick);
  }
  function stopFrame() { cancelAnimationFrame(frame); frame = 0; previousTime = 0; }

  function render() {
    const camera = cameraAt(progress, layout);
    if (!staticMode) { camera.x += pointerX * 12; camera.y += pointerY * 8; camera.yaw += pointerX * .18; }
    world.style.transform = `rotateY(${camera.yaw.toFixed(5)}deg) translate3d(${-camera.x.toFixed(4)}px,${-camera.y.toFixed(4)}px,${-camera.z.toFixed(4)}px)`;
    story.style.setProperty('--lid-angle', mix(-103, -4, ramp(progress, .006, .145)).toFixed(3) + 'deg');
    story.style.setProperty('--screen-power', ramp(progress, .015, .115).toFixed(3));
    story.style.setProperty('--scan', (progress * 230).toFixed(3) + '%');
    const bounds = layout.devices.map(d => deviceBounds(d, camera, layout));
    copies.forEach((copy, i) => {
      let opacity = staticMode ? (i === 0 ? 1 : 0) : copyOpacity(progress, i);
      if (!staticMode && opacity > 0 && copyRects[i] && bounds.some(b => overlaps(b, copyRects[i]))) opacity = 0;
      copy.style.opacity = opacity.toFixed(4);
      const inactive = opacity < .25;
      copy.inert = inactive;
      copy.setAttribute('aria-hidden', String(inactive));
    });
    const finalOpacity = staticMode ? 0 : ramp(progress, .95, .99);
    if (finale) { finale.style.opacity = finalOpacity.toFixed(4); finale.setAttribute('aria-hidden', String(finalOpacity < .25)); }
    const station = progress < .29 ? 0 : progress < .53 ? 1 : progress < .77 ? 2 : 3;
    hud.querySelectorAll('button').forEach((button, i) => {
      if (i === station) button.setAttribute('aria-current', 'step'); else button.removeAttribute('aria-current');
    });
    coordinates.textContent = `FIELD NOTES / ${String(station + 1).padStart(2, '0')} — 04`;
    story.dataset.progress = progress.toFixed(5);
    backdrop?.draw(camera);
  }

  function tick(time) {
    frame = 0;
    const dt = previousTime ? Math.min(250, time - previousTime) : 16.667;
    previousTime = time;
    progress = staticMode ? .16 : damp(progress, target, dt);
    pointerX = damp(pointerX, aimX, dt, 190); pointerY = damp(pointerY, aimY, dt, 190);
    if (Math.abs(progress - target) < .00002) progress = target;
    render();
    if (!staticMode && (Math.abs(progress - target) > .00002 || Math.abs(pointerX - aimX) > .002 || Math.abs(pointerY - aimY) > .002)) requestFrame();
    else previousTime = 0;
  }

  function createSpace(targetCanvas) {
    let ctx;
    try { ctx = targetCanvas?.getContext('2d', { alpha: false }); } catch (_) { return null; }
    if (!ctx) return null;
    let view, stars = [], faces = [], sky, planet, grain;
    const random = seed => () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
    function noise2(x, y) {
      const ix = Math.floor(x), iy = Math.floor(y), tx = x - ix, ty = y - iy;
      const hash = (a, b) => { let n = Math.imul(a, 374761393) + Math.imul(b, 668265263); n = Math.imul(n ^ n >>> 13, 1274126177); return ((n ^ n >>> 16) >>> 0) / 4294967295; };
      const u = tx * tx * (3 - 2 * tx), v = ty * ty * (3 - 2 * ty);
      return mix(mix(hash(ix, iy), hash(ix + 1, iy), u), mix(hash(ix, iy + 1), hash(ix + 1, iy + 1), u), v);
    }
    function makePlanet() {
      const image = document.createElement('canvas'); image.width = image.height = 420;
      const c = image.getContext('2d'); const pixels = c.createImageData(420, 420);
      for (let y = 0; y < 420; y++) for (let x = 0; x < 420; x++) {
        const nx = (x - 210) / 206, ny = (y - 210) / 206, r2 = nx * nx + ny * ny;
        if (r2 > 1) continue;
        const nz = Math.sqrt(1 - r2);
        const u = Math.atan2(nx, nz) * 4 + 30, v = Math.asin(ny) * 4 + 30;
        let surface = 0, weight = .5;
        for (let octave = 0; octave < 6; octave++) { const f = 2 ** octave; surface += noise2(u * f, v * f) * weight; weight *= .5; }
        const grain = noise2(x * 1.7, y * 1.7) * 4;
        const light = Math.max(0, nx * -.42 + ny * -.55 + nz * .50);
        const rim = Math.pow(1 - nz, 5) * Math.max(.08, light) * 140;
        const shade = 6 + light * (surface * surface * 290 + grain);
        const i = (y * 420 + x) * 4;
        pixels.data[i] = shade * .75 + rim * .4;
        pixels.data[i + 1] = shade * .88 + rim * .75;
        pixels.data[i + 2] = shade + rim;
        pixels.data[i + 3] = clamp((1 - Math.sqrt(r2)) * 206) * 255;
      }
      c.putImageData(pixels, 0, 0); return image;
    }
    function cliff({ x, z, height, radius, seed }) {
      const rand = random(seed); const rings = [], count = 10, layers = 11;
      for (let layer = 0; layer < layers; layer++) {
        const t = layer / (layers - 1), ring = [];
        for (let j = 0; j < count; j++) {
          const angle = j / count * Math.PI * 2;
          const r = radius * (1 - t * .69) * (.72 + rand() * .51);
          ring.push({ x: x + Math.cos(angle) * r + t * radius * .15, y: view.height * 1.16 - height * t + (rand() - .5) * height * .06, z: z + Math.sin(angle) * r * .65 });
        }
        rings.push(ring);
      }
      const add = points => {
        const [a, b, c] = points;
        const u = { x: b.x - a.x, y: b.y - a.y, z: b.z - a.z }, v = { x: c.x - a.x, y: c.y - a.y, z: c.z - a.z };
        const n = { x: u.y * v.z - u.z * v.y, y: u.z * v.x - u.x * v.z, z: u.x * v.y - u.y * v.x };
        const length = Math.hypot(n.x, n.y, n.z) || 1;
        const light = Math.abs((n.x * -.48 + n.y * -.70 + n.z * .42) / length);
        const tone = 6 + light * 18 + rand() * 3;
        faces.push({ points, depth: (a.z + b.z + c.z) / 3, color: `rgb(${tone * .72},${tone * .83},${tone * 1.15})` });
      };
      for (let l = 0; l < layers - 1; l++) for (let j = 0; j < count; j++) {
        const k = (j + 1) % count;
        add([rings[l][j], rings[l][k], rings[l + 1][j]]);
        add([rings[l][k], rings[l + 1][k], rings[l + 1][j]]);
      }
      for (let j = 1; j < count - 1; j++) add([rings[layers - 1][0], rings[layers - 1][j], rings[layers - 1][j + 1]]);
    }
    function resize(next) {
      view = next;
      const ratio = Math.min(window.devicePixelRatio || 1, view.mobile ? 1.5 : 1.75);
      targetCanvas.width = Math.round(view.width * ratio); targetCanvas.height = Math.round(view.height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      const rand = random(82317);
      stars = Array.from({ length: view.mobile ? 160 : 350 }, () => ({ x: (rand() - .25) * 33000, y: (rand() - .5) * 21000, z: -2200 - rand() * 12000, radius: 1 + rand() * 3.5, alpha: .12 + rand() * .58 }));
      faces = [];
      for (let i = -2; i < 11; i++) cliff({ x: i * view.gap * .51, z: -2000 - rand() * 2200, height: 460 + rand() * 670, radius: 230 + rand() * 250, seed: i + 718 });
      // Near silhouettes frame the products, rather than filling the reading area.
      for (let i = -1; i < 5; i++) cliff({ x: i * view.gap + view.gap * .62, z: -500 - rand() * 350, height: 380 + rand() * 430, radius: 210 + rand() * 110, seed: 800 + i });
      faces.sort((a, b) => a.depth - b.depth);
      planet ||= makePlanet();
      if (!grain) {
        const tile = document.createElement('canvas'); tile.width = tile.height = 128;
        const g = tile.getContext('2d'), data = g.createImageData(128, 128);
        for (let i = 0; i < data.data.length; i += 4) { const n = rand() * 255; data.data[i] = data.data[i + 1] = data.data[i + 2] = n; data.data[i + 3] = 10; }
        g.putImageData(data, 0, 0); grain = ctx.createPattern(tile, 'repeat');
      }
      sky = document.createElement('canvas'); sky.width = view.width; sky.height = view.height;
      const s = sky.getContext('2d'); s.fillStyle = '#050711'; s.fillRect(0, 0, view.width, view.height);
      const haze = s.createRadialGradient(view.width * .67, view.height * .30, 0, view.width * .67, view.height * .30, view.width * .70);
      haze.addColorStop(0, '#202345'); haze.addColorStop(.45, '#11182c'); haze.addColorStop(1, '#050711'); s.fillStyle = haze; s.fillRect(0, 0, view.width, view.height);
    }
    function draw(camera) {
      if (!view) return;
      const { width, height } = view;
      ctx.drawImage(sky, 0, 0);
      for (const star of stars) {
        const p = project({ ...star, y: star.y }, camera, view);
        if (p.x < 0 || p.x > width || p.y < 0 || p.y > height) continue;
        ctx.fillStyle = `rgba(190,209,255,${star.alpha})`; ctx.beginPath(); ctx.arc(p.x, p.y, Math.max(.35, star.radius * p.scale), 0, Math.PI * 2); ctx.fill();
      }
      const planetPosition = { x: view.mobile ? 1050 : 2400, y: view.mobile ? -1750 : -2450, z: view.mobile ? -5200 : -7600 };
      const p = project(planetPosition, camera, view), radius = (view.mobile ? 1450 : 2300) * p.scale;
      const glow = ctx.createRadialGradient(p.x, p.y, radius * .93, p.x, p.y, radius * 1.2);
      glow.addColorStop(0, '#5976a537'); glow.addColorStop(.55, '#486bb515'); glow.addColorStop(1, '#486bb500');
      ctx.fillStyle = glow; ctx.fillRect(p.x - radius * 1.2, p.y - radius * 1.2, radius * 2.4, radius * 2.4);
      ctx.drawImage(planet, p.x - radius, p.y - radius, radius * 2, radius * 2);
      const moon = project({ x: -800, y: -1500, z: -9200 }, camera, view), mr = 245 * moon.scale;
      ctx.globalAlpha = .64; ctx.drawImage(planet, moon.x - mr, moon.y - mr, mr * 2, mr * 2); ctx.globalAlpha = 1;
      for (const face of faces) {
        const points = face.points.map(point => project(point, camera, view));
        if (points.every(p => p.x < -5) || points.every(p => p.x > width + 5) || points.every(p => p.y > height + 5)) continue;
        ctx.fillStyle = face.color; ctx.beginPath(); ctx.moveTo(points[0].x, points[0].y); ctx.lineTo(points[1].x, points[1].y); ctx.lineTo(points[2].x, points[2].y); ctx.closePath(); ctx.fill();
      }
      const trace = clamp((camera.z - 300) / 1800);
      if (trace > 0) {
        ctx.strokeStyle = `rgba(149,215,233,${trace * .44})`; ctx.lineWidth = 1;
        ctx.beginPath();
        view.devices.forEach((d, i) => {
          const p = project({ x: d.x, y: 260, z: d.z }, camera, view);
          if (i === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y);
        });
        ctx.stroke();
        view.devices.forEach(d => {
          const p = project({ x: d.x, y: 260, z: d.z }, camera, view);
          ctx.fillStyle = `rgba(183,224,244,${trace * .75})`; ctx.beginPath(); ctx.arc(p.x, p.y, 2, 0, Math.PI * 2); ctx.fill();
        });
      }
      const mist = ctx.createLinearGradient(0, height * .52, 0, height);
      mist.addColorStop(0, '#0b142200'); mist.addColorStop(.50, '#1827484a'); mist.addColorStop(1, '#03050b'); ctx.fillStyle = mist; ctx.fillRect(0, height * .52, width, height * .48);
      ctx.fillStyle = grain; ctx.fillRect(0, 0, width, height);
    }
    return { resize, draw };
  }

  localize();
  story.classList.add('tech-ready');
  document.documentElement.classList.add('in-tech-story');
  try { backdrop = createSpace(canvas); } catch (_) { backdrop = null; }
  resize(); progress = target; render();
  on(window, 'scroll', () => { readScroll(); requestFrame(); }, { passive: true });
  let resizeFrame = 0;
  on(window, 'resize', () => { cancelAnimationFrame(resizeFrame); resizeFrame = requestAnimationFrame(resize); }, { passive: true });
  on(stage, 'pointermove', event => {
    if (!fine.matches || staticMode || event.pointerType === 'touch') return;
    aimX = clamp(event.clientX / layout.width * 2 - 1, -1, 1);
    aimY = clamp((event.clientY - stage.getBoundingClientRect().top) / layout.height * 2 - 1, -1, 1);
    requestFrame();
  }, { passive: true });
  on(stage, 'pointerleave', () => { aimX = aimY = 0; requestFrame(); });
  on(document, 'visibilitychange', () => { if (document.hidden) stopFrame(); else { readScroll(); requestFrame(); } });
  on(motion, 'change', () => { stopFrame(); aimX = aimY = pointerX = pointerY = 0; resize(); });
  on(hud, 'click', event => {
    const button = event.target.closest('[data-station]'); if (!button) return;
    const points = [.18, .405, .65, .86];
    window.scrollTo({ top: startY + distance * points[Number(button.dataset.station)], behavior: staticMode ? 'instant' : 'smooth' });
  });
  const languageObserver = new MutationObserver(() => { localize(); measureCopy(); requestFrame(); });
  languageObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  const sizeObserver = typeof ResizeObserver === 'function' ? new ResizeObserver(() => { measureCopy(); requestFrame(); }) : null;
  copies.forEach(copy => sizeObserver?.observe(copy));
  const intersection = typeof IntersectionObserver === 'function' ? new IntersectionObserver(entries => {
    visible = entries.some(entry => entry.isIntersecting);
    document.documentElement.classList.toggle('in-tech-story', visible);
    if (!visible) stopFrame(); else { readScroll(); requestFrame(); }
  }) : null;
  intersection?.observe(story);
  on(window, 'pagehide', event => {
    stopFrame(); cancelAnimationFrame(resizeFrame);
    if (!event.persisted) { destroyed = true; controller.abort(); intersection?.disconnect(); languageObserver.disconnect(); sizeObserver?.disconnect(); }
  });
  on(window, 'pageshow', () => { readScroll(); requestFrame(); });
})();
