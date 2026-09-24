import {
  ACESFilmicToneMapping,
  AdditiveBlending,
  Box3,
  CatmullRomCurve3,
  Color,
  DirectionalLight,
  Mesh,
  MeshBasicMaterial,
  NormalBlending,
  PerspectiveCamera,
  PMREMGenerator,
  QuadraticBezierCurve3,
  Scene,
  SRGBColorSpace,
  TubeGeometry,
  Vector3,
  WebGLRenderer,
} from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { createDevices } from './devices.js';
import { effectsAt, railAt, SHOTS, smoothstep } from './schedule.js';

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
  final: { device: null, az: -0.5, el: 0.26, azTall: -0.75, elTall: 0.3, fill: 0.97, zone: 'final' },
};

// Where the device may sit on screen, in NDC: centre (cx, cy) and half extents.
// Text owns the rest of the frame (left column on wide screens, bottom on tall ones).
export function zonesFor(aspect) {
  if (aspect >= 1) {
    return {
      intro: { cx: 0.42, cy: -0.04, hw: 0.5, hh: 0.66 },
      chapter: { cx: 0.4, cy: 0, hw: 0.52, hh: 0.7 },
      final: { cx: 0, cy: -0.24, hw: 0.86, hh: 0.56 },
    };
  }
  return {
    intro: { cx: 0, cy: 0.54, hw: 0.88, hh: 0.3 },
    chapter: { cx: 0, cy: 0.44, hw: 0.86, hh: 0.4 },
    final: { cx: 0, cy: -0.1, hw: 0.9, hh: 0.5 },
  };
}

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

const direction = (angle, elevation) => new Vector3(Math.sin(angle) * Math.cos(elevation), Math.sin(elevation), Math.cos(angle) * Math.cos(elevation));

export function createStage(canvas) {
  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.setClearColor(0x000000, 0);

  const scene = new Scene();
  const pmrem = new PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  scene.environment = pmrem.fromScene(room, 0.035).texture;
  room.dispose?.();
  pmrem.dispose();

  const key = new DirectionalLight(0xffffff, 1.4);
  key.position.set(4, 7, 6);
  const rim = new DirectionalLight(0xbcd4ff, 1.1);
  rim.position.set(-6, 4, -6);
  scene.add(key, rim);

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
  let size = { width: 1, height: 1 };
  const view = { position: new Vector3(), target: new Vector3(), zone: { cx: 0, cy: 0 } };

  function computeRail() {
    const aspect = size.width / size.height;
    const tall = aspect < 1;
    camera.fov = tall ? 36 : 28;
    camera.aspect = aspect;
    const fovY = (camera.fov * Math.PI) / 180;
    const zones = zonesFor(aspect);
    const allPoints = [];
    for (const name of deviceList) {
      const d = devices[name];
      const box = d.boxes.main ?? d.boxes.open;
      allPoints.push(...boxCorners(box, d.group.matrixWorld));
    }
    const positions = [];
    const targets = [];
    const zoneList = [];
    for (const shotName of SHOTS) {
      const def = SHOT_DEFS[shotName];
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
      const distance = fitDistance(points, target, dir, zone, fovY, aspect, def.fill);
      positions.push(target.clone().addScaledVector(dir, distance));
      targets.push(target);
      zoneList.push(zone);
    }
    rail = {
      positions: new CatmullRomCurve3(positions, false, 'centripetal'),
      targets: new CatmullRomCurve3(targets, false, 'centripetal'),
      zones: zoneList,
    };
  }

  function resize(width, height, pixelRatio) {
    size = { width: Math.max(1, width), height: Math.max(1, height) };
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(size.width, size.height, false);
    computeRail();
  }

  function setTheme(theme) {
    const light = theme === 'light';
    devices.setFinish(theme);
    renderer.toneMappingExposure = light ? 1.02 : 0.92;
    scene.environmentIntensity = light ? 0.95 : 0.85;
    key.intensity = light ? 1.6 : 1.1;
    rim.intensity = light ? 0.5 : 1.1;
    linkMaterial.color = new Color(light ? 0x0071e3 : 0x3d9bff);
    linkMaterial.blending = light ? NormalBlending : AdditiveBlending;
    linkMaterial.needsUpdate = true;
  }

  // p: smoothed scroll progress; intro: 0..1 load reveal; time in seconds.
  function update(p, { intro = 1, time = 0, pointerX = 0, pointerY = 0 } = {}) {
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

    devices.laptop.setLid(fx.lid);
    devices.laptop.screens[0].setPower(fx.power);
    let screensChanged = devices.laptop.update({ typing: fx.typing, caret: fx.typing > 0 && fx.typing < 1 ? Math.floor(time * 2.4) % 2 === 0 : false });
    [['phone', 2], ['tablet', 3], ['monitor', 4]].forEach(([name, index]) => {
      devices[name].screens[0].setPower(smoothstep((r - (index - 0.85)) / 0.55));
    });
    screensChanged = devices.phone.update() || screensChanged;
    screensChanged = devices.tablet.update({ links: fx.links }) || screensChanged;
    screensChanged = devices.monitor.update({ pipeline: fx.pipeline, pulse: fx.pipeline > 0 && fx.pipeline < 1 ? (time * 1.4) % 1 : 0 }) || screensChanged;

    links.forEach((mesh, index) => {
      const k = Math.min(1, Math.max(0, fx.trails * 1.3 - index * 0.15));
      const segmentsCount = mesh.geometry.parameters.tubularSegments;
      const radial = mesh.geometry.parameters.radialSegments;
      mesh.visible = k > 0;
      mesh.geometry.setDrawRange(0, Math.floor(k * segmentsCount) * radial * 6);
    });
    return { rail: r, cue: fx.cue, screensChanged };
  }

  function render() {
    renderer.render(scene, camera);
  }

  // Screen-space rectangles (CSS px) of each device, for layout checks.
  function deviceRects() {
    camera.updateMatrixWorld();
    const out = {};
    for (const name of deviceList) {
      const d = devices[name];
      const box = name === 'laptop' ? d.boxes.open : d.boxes.main;
      const pts = boxCorners(box, d.group.matrixWorld).map((p) => p.project(camera));
      if (pts.some((p) => p.z > 1 || p.z < -1)) continue;
      const xs = pts.map((p) => ((p.x + 1) / 2) * size.width);
      const ys = pts.map((p) => ((1 - p.y) / 2) * size.height);
      out[name] = { left: Math.min(...xs), right: Math.max(...xs), top: Math.min(...ys), bottom: Math.max(...ys) };
    }
    return out;
  }

  function dispose() {
    renderer.dispose();
    scene.traverse((object) => {
      object.geometry?.dispose();
      const materials = Array.isArray(object.material) ? object.material : object.material ? [object.material] : [];
      materials.forEach((m) => {
        m.map?.dispose();
        m.dispose();
      });
    });
    scene.environment?.dispose();
  }

  return { renderer, camera, resize, setTheme, update, render, deviceRects, dispose };
}
