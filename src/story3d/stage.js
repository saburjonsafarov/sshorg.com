import {
  AdditiveBlending,
  Box3,
  CanvasTexture,
  CatmullRomCurve3,
  Color,
  Mesh,
  MeshBasicMaterial,
  NeutralToneMapping,
  NormalBlending,
  PerspectiveCamera,
  QuadraticBezierCurve3,
  Scene,
  SRGBColorSpace,
  TubeGeometry,
  Vector3,
  WebGLRenderer,
} from 'three';
import { createDevices } from './devices.js';
import { createLighting } from './lighting.js';
import { createPost } from './post.js';
import { easeInOutCubic, effectsAt, exploreAt, pushAt, railAt, SHOTS, smoothstep } from './schedule.js';

const UP = new Vector3(0, 1, 0);

// Devices stay put in world space; only the camera travels (and the laptop lid opens).
const LAYOUT = {
  laptop: { position: [-7, 0, 0], yaw: -0.3 },
  phone: { position: [-2.1, 0.98, 0.5], yaw: -0.3 },
  tablet: { position: [1.9, 1.16, 0.2], yaw: -0.3 },
  monitor: { position: [8.8, 0, -0.9], yaw: -0.3 },
};

// Camera angle relative to the device's facing direction. Order matches SHOTS.
// Chapters look from the left-front so the previous device is behind the camera and
// the next one is still out of frame: the text column never shares space with a device.
const SHOT_DEFS = {
  intro: { device: 'laptop', box: 'closed', az: 0.05, el: 0.55, fill: 0.9, zone: 'intro' },
  build: { device: 'laptop', box: 'open', az: -0.2, el: 0.12, fill: 0.95, zone: 'chapter' },
  ship: { device: 'phone', box: 'main', az: -0.36, el: 0.04, fill: 0.86, zone: 'chapter' },
  connect: { device: 'tablet', box: 'main', az: -0.28, el: 0.07, fill: 0.93, zone: 'chapter' },
  operate: { device: 'monitor', box: 'main', az: -0.2, el: 0.05, fill: 0.95, zone: 'chapter' },
  final: { device: null, az: -0.82, el: 0.2, azTall: -0.9, elTall: 0.26, fill: 1, zone: 'final' },
};

// Where the device may sit on screen, in NDC: centre (cx, cy) and half extents.
// Text owns the rest of the frame (left column on wide screens, bottom on tall ones).
export function zonesFor(aspect) {
  if (aspect >= 1) {
    return {
      intro: { cx: 0.42, cy: -0.04, hw: 0.5, hh: 0.66 },
      chapter: { cx: 0.4, cy: 0, hw: 0.52, hh: 0.7 },
      final: { cx: 0, cy: -0.24, hw: 0.86, hh: 0.56 },
      // Viewer overview: devices to the right of the feature list, under the caption.
      overview: { cx: 0.3, cy: -0.1, hw: 0.62, hh: 0.56 },
    };
  }
  return {
    intro: { cx: 0, cy: 0.54, hw: 0.88, hh: 0.3 },
    chapter: { cx: 0, cy: 0.44, hw: 0.86, hh: 0.4 },
    final: { cx: 0, cy: -0.1, hw: 0.9, hh: 0.5 },
    overview: { cx: 0, cy: 0.12, hw: 0.9, hh: 0.34 },
  };
}

// "Closer look" viewer poses, one per feature pill (plus the overview).
export const FEATURES = {
  overview: { devices: 'all', az: -0.82, el: 0.2, azTall: -0.9, elTall: 0.26, fill: 0.97, zone: 'overview' },
  kmp: { device: 'laptop', box: 'open', az: -0.3, el: 0.22, fill: 0.92, zone: 'chapter' },
  product: { device: 'phone', box: 'main', az: -0.14, el: 0.04, fill: 0.84, zone: 'chapter' },
  graph: { device: 'tablet', box: 'main', az: -0.1, el: 0.06, fill: 0.92, zone: 'chapter' },
  ai: { device: 'monitor', box: 'checks', az: -0.2, el: 0.02, fill: 0.9, zone: 'chapter' },
  delivery: { device: 'monitor', box: 'stages', az: -0.08, el: 0.05, fill: 0.96, zone: 'chapter' },
};

function boxCorners(box, matrix) {
  const { min, max } = box;
  const out = [];
  for (const x of [min.x, max.x]) for (const y of [min.y, max.y]) for (const z of [min.z, max.z]) out.push(new Vector3(x, y, z).applyMatrix4(matrix));
  return out;
}

// Distance along `dir` that fits every point inside the zone (symmetric around the axis).
function fitDistance(points, target, dir, zone, fovY, aspect, fill) {
  const tanY = Math.tan(fovY / 2) * zone.hh * fill;
  const tanX = Math.tan(fovY / 2) * aspect * zone.hw * fill;
  const forward = dir.clone().negate();
  const right = new Vector3().crossVectors(forward, UP).normalize();
  const up = new Vector3().crossVectors(right, forward);
  let distance = 0;
  for (const p of points) {
    const v = p.clone().sub(target);
    const z = v.dot(dir);
    distance = Math.max(distance, z + Math.abs(v.dot(right)) / tanX, z + Math.abs(v.dot(up)) / tanY);
  }
  return distance;
}

// Refines a conservative fit: iterate distance until the projected bounds fill the
// zone, then return the lens shift that centres those bounds in the zone.
function tightFrame(points, target, dir, distance, zone, fill, probe) {
  let d = distance;
  let bounds = null;
  const measure = () => {
    probe.position.copy(target).addScaledVector(dir, d);
    probe.lookAt(target);
    probe.updateMatrixWorld();
    let minX = Infinity;
    let maxX = -Infinity;
    let minY = Infinity;
    let maxY = -Infinity;
    for (const p of points) {
      const v = p.clone().project(probe);
      minX = Math.min(minX, v.x);
      maxX = Math.max(maxX, v.x);
      minY = Math.min(minY, v.y);
      maxY = Math.max(maxY, v.y);
    }
    return { cx: (minX + maxX) / 2, cy: (minY + maxY) / 2, hw: (maxX - minX) / 2, hh: (maxY - minY) / 2 };
  };
  for (let i = 0; i < 6; i += 1) {
    bounds = measure();
    const k = Math.max(bounds.hw / (zone.hw * fill), bounds.hh / (zone.hh * fill));
    if (Math.abs(k - 1) < 0.004) break;
    d *= k;
  }
  bounds = measure();
  return { distance: d, cx: zone.cx - bounds.cx, cy: zone.cy - bounds.cy };
}

// The studio backdrop, painted to match the CSS placeholder gradient (--story-bg).
const BACKDROPS = {
  dark: { stops: ['#1c1d21', '#0c0d0f', '#040405'], glow: 'rgba(255,255,255,0.045)' },
  light: { stops: ['#ffffff', '#f2f3f5', '#e3e5e9'], glow: 'rgba(0,0,0,0.05)' },
};

function ellipse(ctx, W, H, cx, cy, rx, ry, stops) {
  ctx.save();
  ctx.translate(cx * W, cy * H);
  ctx.scale(rx * W, ry * H);
  const g = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
  stops.forEach(([at, color]) => g.addColorStop(at, color));
  ctx.fillStyle = g;
  ctx.fillRect(-cx / rx, -cy / ry, 1 / rx, 1 / ry);
  ctx.restore();
}

function paintBackdrop(canvas, theme, aspect) {
  const W = 512;
  const H = Math.max(256, Math.min(1024, Math.round(W / aspect)));
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  const b = BACKDROPS[theme];
  ellipse(ctx, W, H, 0.58, 0.26, 1.2, 0.95, [[0, b.stops[0]], [0.5, b.stops[1]], [1, b.stops[2]]]);
  ellipse(ctx, W, H, 0.58, 0.74, 0.6, 0.4, [[0, b.glow], [0.7, 'rgba(0,0,0,0)']]);
}

const direction = (angle, elevation) => new Vector3(Math.sin(angle) * Math.cos(elevation), Math.sin(elevation), Math.cos(angle) * Math.cos(elevation));

// options.bloom: render through the bloom composer (fine pointers only).
export function createStage(canvas, { bloom = false } = {}) {
  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.outputColorSpace = SRGBColorSpace;
  // Neutral keeps product and screen colours faithful (made for product rendering).
  renderer.toneMapping = NeutralToneMapping;
  renderer.setClearColor(0x000000, 0);

  const scene = new Scene();
  const backdropCanvas = document.createElement('canvas');
  const backdrop = new CanvasTexture(backdropCanvas);
  backdrop.colorSpace = SRGBColorSpace;
  scene.background = backdrop;

  const camera = new PerspectiveCamera(28, 1, 0.1, 200);
  const devices = createDevices(renderer.capabilities.getMaxAnisotropy());
  const deviceList = ['laptop', 'phone', 'tablet', 'monitor'];
  for (const name of deviceList) {
    const { position, yaw } = LAYOUT[name];
    const group = devices[name].group;
    group.position.set(...position);
    group.rotation.y = yaw;
    scene.add(group);
    group.updateMatrixWorld(true);
  }
  const lighting = createLighting(renderer, scene, devices.laptop.group.position);
  let post = bloom ? createPost(renderer, scene, camera) : null;
  let theme = 'dark';

  // Light trails from the tablet ("the system") to every other device; drawn in the final shot.
  const linkMaterial = new MeshBasicMaterial({ color: 0x3d9bff, transparent: true, opacity: 0.9, toneMapped: false, depthWrite: false, blending: AdditiveBlending });
  const hub = new Vector3(0, 0, 0.08).applyMatrix4(devices.tablet.group.matrixWorld);
  const links = [
    new Vector3(0, 1.2, -1.2).applyMatrix4(devices.laptop.group.matrixWorld),
    new Vector3(0, 0, 0.05).applyMatrix4(devices.phone.group.matrixWorld),
    new Vector3(0, 2.3, 0).applyMatrix4(devices.monitor.group.matrixWorld),
  ].map((end) => {
    const mid = hub.clone().lerp(end, 0.5).add(new Vector3(0, 1.1 + hub.distanceTo(end) * 0.12, 0.4));
    const geometry = new TubeGeometry(new QuadraticBezierCurve3(hub.clone(), mid, end), 120, 0.012, 8, false);
    const mesh = new Mesh(geometry, linkMaterial);
    mesh.visible = false;
    scene.add(mesh);
    return mesh;
  });

  let rail = { positions: null, targets: null, zones: [] };
  let poses = {};
  // Viewer state: pose we fly from (snapshot at selection) and the feature we fly to.
  const explore = { from: null, to: 'overview', finish: null, last: null, fade: 0, fadeFrom: 0 };
  let size = { width: 1, height: 1 };
  let lidOpen = 0;
  const view = { position: new Vector3(), target: new Vector3(), zone: { cx: 0, cy: 0 } };

  function computeRail() {
    const aspect = size.width / size.height;
    const tall = aspect < 1;
    camera.fov = tall ? 36 : 28;
    camera.aspect = aspect;
    const fovY = (camera.fov * Math.PI) / 180;
    const zones = zonesFor(aspect);
    const probe = new PerspectiveCamera(camera.fov, aspect, 0.1, 400);
    const allPoints = [];
    for (const name of deviceList) {
      const d = devices[name];
      const box = d.boxes.main ?? d.boxes.open;
      allPoints.push(...boxCorners(box, d.group.matrixWorld));
    }
    const frame = (def) => {
      const zone = zones[def.zone];
      let points;
      let yaw;
      if (def.device) {
        const d = devices[def.device];
        points = boxCorners(d.boxes[def.box], d.group.matrixWorld);
        yaw = LAYOUT[def.device].yaw;
      } else {
        points = allPoints;
        yaw = 0;
      }
      const target = new Box3().setFromPoints(points).getCenter(new Vector3());
      const dir = direction(yaw + (tall && def.azTall !== undefined ? def.azTall : def.az), tall && def.elTall !== undefined ? def.elTall : def.el);
      const rough = fitDistance(points, target, dir, zone, fovY, aspect, def.fill);
      const framed = tightFrame(points, target, dir, rough, zone, def.fill, probe);
      return { position: target.clone().addScaledVector(dir, framed.distance), target, cx: framed.cx, cy: framed.cy };
    };
    const positions = [];
    const targets = [];
    const zoneList = [];
    for (const shotName of SHOTS) {
      const pose = frame(SHOT_DEFS[shotName]);
      positions.push(pose.position);
      targets.push(pose.target);
      zoneList.push({ cx: pose.cx, cy: pose.cy });
    }
    poses = Object.fromEntries(Object.entries(FEATURES).map(([name, def]) => [name, frame(def)]));
    rail = {
      positions: new CatmullRomCurve3(positions, false, 'centripetal'),
      targets: new CatmullRomCurve3(targets, false, 'centripetal'),
      zones: zoneList,
    };
  }

  let pixelRatio = 1;
  function resize(width, height, ratio) {
    size = { width: Math.max(1, width), height: Math.max(1, height) };
    pixelRatio = ratio;
    renderer.setPixelRatio(ratio);
    renderer.setSize(size.width, size.height, false);
    post?.setSize(size.width, size.height, ratio);
    paintBackdrop(backdropCanvas, theme, size.width / size.height);
    backdrop.needsUpdate = true;
    computeRail();
  }

  // Fly from wherever the viewer camera is now to a feature pose (unknown → overview).
  function selectFeature(name) {
    explore.from = explore.last ? { ...explore.last } : null;
    explore.to = name && poses[name] ? name : 'overview';
    explore.fadeFrom = explore.fade;
  }

  // Finish swatches override the theme's finish until the theme changes.
  function setFinish(finish) {
    explore.finish = finish;
    devices.setFinish(finish ?? theme);
  }

  // Screen rectangle (CSS px) of the selected feature's box, for layout checks.
  function featureRect() {
    const def = FEATURES[explore.to];
    if (!def?.device) return null;
    const d = devices[def.device];
    camera.updateMatrixWorld();
    const pts = boxCorners(d.boxes[def.box], d.group.matrixWorld).map((v) => v.project(camera));
    const xs = pts.map((v) => ((v.x + 1) / 2) * size.width);
    const ys = pts.map((v) => ((1 - v.y) / 2) * size.height);
    return { left: Math.min(...xs), right: Math.max(...xs), top: Math.min(...ys), bottom: Math.max(...ys) };
  }

  function setBloom(enabled) {
    if (enabled && !post) {
      post = createPost(renderer, scene, camera);
      post.setTheme(theme);
      post.setSize(size.width, size.height, pixelRatio);
    } else if (!enabled && post) {
      post.dispose();
      post = null;
    }
  }

  function setTheme(next) {
    theme = next === 'light' ? 'light' : 'dark';
    const light = theme === 'light';
    explore.finish = null;
    devices.setFinish(theme);
    lighting.setTheme(theme);
    post?.setTheme(theme);
    paintBackdrop(backdropCanvas, theme, size.width / size.height);
    backdrop.needsUpdate = true;
    renderer.toneMappingExposure = light ? 1 : 1.05;
    linkMaterial.color = new Color(light ? 0x0071e3 : 0x3d9bff);
    linkMaterial.blending = light ? NormalBlending : AdditiveBlending;
    linkMaterial.needsUpdate = true;
  }

  // p: smoothed scroll progress; intro: 0..1 load reveal; time in seconds.
  // exploreT: 0..1 progress of the flight to the selected viewer pose; orbit: drag yaw.
  function update(p, { intro = 1, time = 0, pointerX = 0, pointerY = 0, exploreT = 1, orbit = 0 } = {}) {
    const fx = effectsAt(p);
    const r = railAt(p);
    const segments = SHOTS.length - 1;
    const t = r / segments;
    rail.positions.getPoint(t, view.position);
    rail.targets.getPoint(t, view.target);
    const i = Math.min(segments - 1, Math.floor(r));
    const f = r - i;
    const a = rail.zones[i];
    const b = rail.zones[i + 1];
    view.zone.cx = a.cx + (b.cx - a.cx) * f;
    view.zone.cy = a.cy + (b.cy - a.cy) * f;

    // Slow push-in while a chapter holds (at most 4.5 % of the distance).
    view.position.lerp(view.target, 0.045 * pushAt(p));

    // "Closer look" viewer: past the story, blend from the rail onto the viewer pose.
    const ex = exploreAt(p);
    if (ex > 0 && poses.overview) {
      const to = poses[explore.to] ?? poses.overview;
      const from = explore.from ?? to;
      const k = easeInOutCubic(exploreT);
      const pose = {
        position: from.position.clone().lerp(to.position, k),
        target: from.target.clone().lerp(to.target, k),
        cx: from.cx + (to.cx - from.cx) * k,
        cy: from.cy + (to.cy - from.cy) * k,
      };
      explore.last = pose;
      // Light trails belong to the overview; close-ups fade them out.
      const fadeTo = explore.to === 'overview' ? 0 : 1;
      explore.fade = explore.fadeFrom + (fadeTo - explore.fadeFrom) * k;
      view.position.lerp(pose.position, ex);
      view.target.lerp(pose.target, ex);
      view.zone.cx += (pose.cx - view.zone.cx) * ex;
      view.zone.cy += (pose.cy - view.zone.cy) * ex;
      if (orbit) {
        const around = view.position.clone().sub(view.target).applyAxisAngle(UP, orbit * ex);
        view.position.copy(view.target).add(around);
      }
    } else {
      explore.last = null;
      explore.fade = 0;
      explore.fadeFrom = 0;
    }
    const trailsLevel = 1 - explore.fade * ex;
    linkMaterial.opacity = 0.9 * trailsLevel;
    const offset = view.position.clone().sub(view.target);
    const distance = offset.length();
    // Load reveal: start a little further out and higher, then settle.
    const reveal = 1 - intro;
    view.position.addScaledVector(offset, 0.22 * reveal).addScaledVector(UP, distance * 0.08 * reveal);
    // Pointer parallax: a small orbit around the target.
    const forward = offset.clone().negate().normalize();
    const right = new Vector3().crossVectors(forward, UP).normalize();
    view.position.addScaledVector(right, pointerX * distance * 0.035).addScaledVector(UP, -pointerY * distance * 0.02);

    camera.position.copy(view.position);
    camera.lookAt(view.target);
    camera.setViewOffset(size.width, size.height, (-view.zone.cx * size.width) / 2, (view.zone.cy * size.height) / 2, size.width, size.height);

    // Studio light: hero beam until the story starts, then the whole room; it turns
    // slowly with the scroll and follows the mouse so highlights glide over the metal.
    lighting.setReveal(smoothstep(p / 0.1), intro);
    lighting.setRotation(Math.round((p * 0.4 + pointerX * 0.3) * 2000) / 2000);

    devices.laptop.setLid(fx.lid);
    lidOpen = fx.lid;
    devices.laptop.screens[0].setPower(fx.power);
    let screensChanged = devices.laptop.update({ typing: fx.typing, caret: fx.typing > 0 && fx.typing < 1 ? Math.floor(time * 2.4) % 2 === 0 : false });
    [['phone', 2], ['tablet', 3], ['monitor', 4]].forEach(([name, index]) => {
      devices[name].screens[0].setPower(smoothstep((r - (index - 0.85)) / 0.55));
    });
    devices.laptop.setBacklight(theme === 'light' ? 0 : fx.power);
    screensChanged = devices.phone.update({ reveal: smoothstep((r - 1.55) / 0.45) }) || screensChanged;
    screensChanged = devices.tablet.update({ links: fx.links }) || screensChanged;
    screensChanged = devices.monitor.update({ pipeline: fx.pipeline, pulse: fx.pipeline > 0 && fx.pipeline < 1 ? (time * 1.4) % 1 : 0 }) || screensChanged;

    links.forEach((mesh, index) => {
      const k = Math.min(1, Math.max(0, fx.trails * 1.3 - index * 0.15));
      const segmentsCount = mesh.geometry.parameters.tubularSegments;
      const radial = mesh.geometry.parameters.radialSegments;
      mesh.visible = k > 0 && trailsLevel > 0.01;
      mesh.geometry.setDrawRange(0, Math.floor(k * segmentsCount) * radial * 6);
    });
    return { rail: r, cue: fx.cue, screensChanged };
  }

  // The light studio renders direct: bloom barely shows on white, and the composer's
  // tone mapping would grey the white backdrop.
  const bloomActive = () => Boolean(post) && theme !== 'light';

  function render() {
    if (bloomActive()) post.render();
    else renderer.render(scene, camera);
  }

  // Compiles every material before the first frame. With KHR_parallel_shader_compile the
  // driver links programs off the main thread and this resolves once they are ready, so the
  // first render does not stall on shader linking. Hidden meshes (trails, beam) are
  // included; lights keep their state because the light count is part of each program.
  function warmup() {
    const hidden = [];
    scene.traverse((object) => {
      if (!object.visible && !object.isLight) {
        hidden.push(object);
        object.visible = true;
      }
    });
    // Programs differ between the screen and an offscreen target (tone mapping, colour
    // space): compile for the target the first frame will draw into.
    const previous = renderer.getRenderTarget();
    renderer.setRenderTarget(bloomActive() ? post.target : null);
    const ready = renderer.compileAsync(scene, camera);
    renderer.setRenderTarget(previous);
    hidden.forEach((object) => {
      object.visible = false;
    });
    return ready;
  }

  // Screen-space rectangles (CSS px) of each device, for layout checks.
  function deviceRects() {
    camera.updateMatrixWorld();
    const out = {};
    for (const name of deviceList) {
      const d = devices[name];
      const box = name === 'laptop' ? (lidOpen > 0.5 ? d.boxes.open : d.boxes.closed) : d.boxes.main;
      const pts = boxCorners(box, d.group.matrixWorld).map((p) => p.project(camera));
      if (pts.some((p) => p.z > 1 || p.z < -1)) continue;
      const xs = pts.map((p) => ((p.x + 1) / 2) * size.width);
      const ys = pts.map((p) => ((1 - p.y) / 2) * size.height);
      out[name] = { left: Math.min(...xs), right: Math.max(...xs), top: Math.min(...ys), bottom: Math.max(...ys) };
    }
    return out;
  }

  // Fraction of opaque pixels on three sampled rows, read right after a render.
  function coverage() {
    // Measure the devices, not the painted backdrop.
    const background = scene.background;
    scene.background = null;
    renderer.render(scene, camera);
    scene.background = background;
    const gl = renderer.getContext();
    const w = gl.drawingBufferWidth;
    const h = gl.drawingBufferHeight;
    const row = new Uint8Array(w * 4);
    let lit = 0;
    for (const y of [0.3, 0.5, 0.7]) {
      gl.readPixels(0, Math.floor(h * y), w, 1, gl.RGBA, gl.UNSIGNED_BYTE, row);
      for (let i = 3; i < row.length; i += 4) if (row[i] > 8) lit += 1;
    }
    return lit / (w * 3);
  }

  function dispose() {
    lighting.dispose();
    post?.dispose();
    backdrop.dispose();
    renderer.dispose();
    scene.traverse((object) => {
      object.geometry?.dispose();
      const materials = Array.isArray(object.material) ? object.material : object.material ? [object.material] : [];
      materials.forEach((m) => {
        m.map?.dispose();
        m.dispose();
      });
    });
  }

  return {
    renderer,
    camera,
    resize,
    setTheme,
    setBloom,
    selectFeature,
    setFinish,
    featureRect,
    get bloom() {
      return bloomActive();
    },
    get light() {
      return lighting.state;
    },
    update,
    render,
    warmup,
    deviceRects,
    coverage,
    dispose,
  };
}
