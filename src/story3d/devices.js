import {
  AdditiveBlending,
  Box3,
  BoxGeometry,
  CanvasTexture,
  Color,
  ExtrudeGeometry,
  Group,
  Mesh,
  MeshBasicMaterial,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  PlaneGeometry,
  Shape,
  ShapeGeometry,
  SRGBColorSpace,
  Vector3,
} from 'three';
import { createGraphScreen, createIdeScreen, createPhoneScreen, createPipelineScreen, rr } from './screens.js';

// World units are decimetres: a 14" laptop is about 3.1 wide.

function roundedShape(width, height, radius) {
  const x = -width / 2;
  const y = -height / 2;
  const r = Math.min(radius, width / 2, height / 2);
  const shape = new Shape();
  shape.moveTo(x + r, y);
  shape.lineTo(x + width - r, y);
  shape.absarc(x + width - r, y + r, r, -Math.PI / 2, 0, false);
  shape.lineTo(x + width, y + height - r);
  shape.absarc(x + width - r, y + height - r, r, 0, Math.PI / 2, false);
  shape.lineTo(x + r, y + height);
  shape.absarc(x + r, y + height - r, r, Math.PI / 2, Math.PI, false);
  shape.lineTo(x, y + r);
  shape.absarc(x + r, y + r, r, Math.PI, Math.PI * 1.5, false);
  return shape;
}

// Rounded slab in the XY plane, centred, thickness along Z (front face is +Z).
function slab(width, height, depth, radius, bevel) {
  const core = depth - bevel * 2;
  const geometry = new ExtrudeGeometry(roundedShape(width - bevel * 2, height - bevel * 2, Math.max(0.001, radius - bevel)), {
    depth: core,
    bevelEnabled: true,
    bevelThickness: bevel,
    bevelSize: bevel,
    bevelOffset: 0,
    bevelSegments: 6,
    curveSegments: 18,
  });
  geometry.translate(0, 0, -core / 2);
  return geometry;
}

// Rounded flat panel with UVs normalised to 0..1 so canvas textures fill it.
function roundedPlane(width, height, radius) {
  const geometry = new ShapeGeometry(roundedShape(width, height, radius), 18);
  const pos = geometry.attributes.position;
  const uv = geometry.attributes.uv;
  for (let i = 0; i < pos.count; i += 1) {
    uv.setXY(i, pos.getX(i) / width + 0.5, pos.getY(i) / height + 0.5);
  }
  uv.needsUpdate = true;
  return geometry;
}

function canvasTexture(canvas, maxAnisotropy) {
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  texture.anisotropy = maxAnisotropy;
  return texture;
}

function keyboardCanvas() {
  const W = 2048;
  const H = 1444;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  const well = { x: W * 0.085, y: H * 0.07, w: W * 0.83, h: H * 0.44 };
  ctx.fillStyle = 'rgba(8,9,11,0.55)';
  rr(ctx, well.x - 14, well.y - 14, well.w + 28, well.h + 28, 26);
  ctx.fill();
  const rows = [
    { n: 14, h: 0.6 },
    { n: 14, h: 1 },
    { n: 14, h: 1 },
    { n: 13, h: 1 },
    { n: 12, h: 1 },
    { n: 0, h: 1 },
  ];
  const gap = 12;
  const unitH = (well.h - gap * 5) / 5.6;
  let y = well.y;
  rows.forEach((row, r) => {
    const h = unitH * row.h;
    const keys = r === 5 ? [1, 1, 1, 1.3, 5.2, 1.3, 1, 1, 1] : Array.from({ length: row.n }, (_, i) => (row.n === 13 && (i === 0 || i === 12) ? 1.55 : row.n === 12 && (i === 0 || i === 11) ? 2.1 : 1));
    const total = keys.reduce((a, b) => a + b, 0);
    const unitW = (well.w - gap * (keys.length - 1)) / total;
    let x = well.x;
    keys.forEach((k) => {
      const w = unitW * k;
      ctx.fillStyle = '#111215';
      rr(ctx, x, y, w, h, 10);
      ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,0.045)';
      rr(ctx, x + 3, y + 3, w - 6, h * 0.45, 8);
      ctx.fill();
      x += w + gap;
    });
    y += h + gap;
  });
  // Trackpad: a faint recess outline
  const tw = W * 0.4;
  const th = H * 0.33;
  ctx.strokeStyle = 'rgba(0,0,0,0.16)';
  ctx.lineWidth = 5;
  ctx.fillStyle = 'rgba(0,0,0,0.035)';
  rr(ctx, (W - tw) / 2, H * 0.6, tw, th, 34);
  ctx.fill();
  ctx.stroke();
  return canvas;
}

// A faint diagonal sheen: reads as glass without catching direct light over the UI.
function sheenCanvas() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  const g = ctx.createLinearGradient(0, 0, 512, 512);
  g.addColorStop(0, 'rgba(255,255,255,0.9)');
  g.addColorStop(0.32, 'rgba(255,255,255,0.25)');
  g.addColorStop(0.42, 'rgba(255,255,255,0)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 512, 512);
  return canvas;
}

function shadowCanvas() {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(0,0,0,0.62)');
  g.addColorStop(0.45, 'rgba(0,0,0,0.3)');
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return canvas;
}

export function createMaterials(sheen) {
  return {
    reflection: new MeshBasicMaterial({ map: sheen, transparent: true, opacity: 0.07, blending: AdditiveBlending, depthWrite: false, toneMapped: false }),
    aluminium: new MeshPhysicalMaterial({ color: 0xcfd2d8, metalness: 1, roughness: 0.3, clearcoat: 0.15, clearcoatRoughness: 0.4 }),
    titanium: new MeshPhysicalMaterial({ color: 0x8a8b90, metalness: 1, roughness: 0.24, clearcoat: 0.4, clearcoatRoughness: 0.2 }),
    glass: new MeshPhysicalMaterial({ color: 0x040405, metalness: 0, roughness: 0.06, clearcoat: 1, clearcoatRoughness: 0.03 }),
  };
}

function screenPanel(screenApi, width, height, radius, maxAnisotropy) {
  const texture = canvasTexture(screenApi.canvas, maxAnisotropy);
  const material = new MeshBasicMaterial({ map: texture, toneMapped: false, color: new Color(0, 0, 0) });
  const mesh = new Mesh(roundedPlane(width, height, radius), material);
  return {
    mesh,
    setPower(value) {
      material.color.setScalar(value);
    },
    update(state) {
      const changed = screenApi.draw(state);
      if (changed) texture.needsUpdate = true;
      return changed;
    },
  };
}

function contactShadow(texture, width, depth, opacity) {
  const mesh = new Mesh(new PlaneGeometry(width, depth), new MeshBasicMaterial({ map: texture, transparent: true, depthWrite: false, opacity, toneMapped: false }));
  mesh.rotation.x = -Math.PI / 2;
  mesh.renderOrder = -1;
  return mesh;
}

/* ─── Laptop ─── */

function createLaptop(m, tex, aniso) {
  const W = 3.12;
  const D = 2.2;
  const T = 0.085;
  const LT = 0.05;
  const LH = 2.16;
  const group = new Group();

  const base = new Mesh(slab(W, D, T, 0.14, 0.028), m.aluminium);
  base.rotation.x = -Math.PI / 2;
  base.position.y = T / 2;
  group.add(base);

  const deck = new Mesh(roundedPlane(W - 0.04, D - 0.04, 0.13), new MeshStandardMaterial({ map: tex.keyboard, transparent: true, roughness: 0.55, metalness: 0.1, depthWrite: false }));
  deck.rotation.x = -Math.PI / 2;
  deck.position.y = T + 0.0012;
  group.add(deck);

  // Lid pivots on the back edge of the base. Local frame: lid stands up, screen faces +Z.
  const hinge = new Group();
  hinge.position.set(0, T, -D / 2 + 0.02);
  group.add(hinge);
  const lid = new Mesh(slab(W, LH, LT, 0.14, 0.018), m.aluminium);
  lid.position.set(0, LH / 2, -LT / 2);
  hinge.add(lid);
  const bezel = new Mesh(roundedPlane(W - 0.07, LH - 0.07, 0.11), m.glass);
  bezel.position.set(0, LH / 2, 0.0015);
  hinge.add(bezel);
  const display = screenPanel(createIdeScreen(), 2.88, 1.858, 0.03, aniso);
  display.mesh.position.set(0, LH / 2 + 0.035, 0.003);
  hinge.add(display.mesh);
  const cam = new Mesh(new PlaneGeometry(0.018, 0.018), new MeshBasicMaterial({ color: 0x1b1d22 }));
  cam.position.set(0, LH - 0.07, 0.0035);
  hinge.add(cam);
  const gloss = new Mesh(roundedPlane(W - 0.07, LH - 0.07, 0.11), m.reflection);
  gloss.position.set(0, LH / 2, 0.005);
  hinge.add(gloss);

  group.add(contactShadow(tex.shadow, W * 1.25, D * 1.3, 0.75));
  const tight = contactShadow(tex.shadow, W * 1.04, D * 1.06, 0.55);
  tight.position.y = 0.001;
  group.add(tight);

  return {
    group,
    screens: [display],
    setLid(open) {
      // 0 → closed on the keyboard, 1 → ~106° open.
      hinge.rotation.x = Math.PI / 2 - open * (Math.PI / 2 + 0.28);
    },
    update({ typing, caret }) {
      return display.update({ typing: Math.round(typing * 240) / 240, caret });
    },
    boxes: {
      closed: new Box3(new Vector3(-W / 2, 0, -D / 2), new Vector3(W / 2, 0.9, D / 2)),
      open: new Box3(new Vector3(-W / 2, 0, -D / 2 - 0.55), new Vector3(W / 2, 2.16, D / 2)),
    },
  };
}

/* ─── Phone ─── */

function createPhone(m, tex, aniso) {
  const W = 0.72;
  const H = 1.47;
  const T = 0.078;
  const group = new Group();
  const body = new Group();
  group.add(body);
  body.add(new Mesh(slab(W, H, T, 0.118, 0.02), m.titanium));
  const glass = new Mesh(roundedPlane(W - 0.018, H - 0.018, 0.108), m.glass);
  glass.position.z = T / 2 + 0.0008;
  body.add(glass);
  const display = screenPanel(createPhoneScreen(), 0.672, 1.413, 0.094, aniso);
  display.mesh.position.z = T / 2 + 0.0016;
  body.add(display.mesh);
  const gloss = new Mesh(roundedPlane(W - 0.018, H - 0.018, 0.108), m.reflection);
  gloss.position.z = T / 2 + 0.0026;
  body.add(gloss);
  [[-1, 0.33, 0.1], [-1, 0.16, 0.16], [-1, -0.02, 0.16], [1, 0.22, 0.24]].forEach(([side, y, len]) => {
    const button = new Mesh(new BoxGeometry(0.012, len, 0.03), m.titanium);
    button.position.set(side * (W / 2 + 0.003), y, 0);
    body.add(button);
  });
  body.rotation.x = -0.08;
  const shadow = contactShadow(tex.shadow, 1.1, 0.7, 0.42);
  shadow.position.y = -0.97;
  group.add(shadow);
  return {
    group,
    screens: [display],
    update() {
      return display.update({});
    },
    boxes: { main: new Box3(new Vector3(-W / 2, -H / 2, -0.1), new Vector3(W / 2, H / 2, 0.1)) },
  };
}

/* ─── Tablet ─── */

function createTablet(m, tex, aniso) {
  const W = 2.47;
  const H = 1.77;
  const T = 0.058;
  const group = new Group();
  const body = new Group();
  group.add(body);
  body.add(new Mesh(slab(W, H, T, 0.16, 0.016), m.aluminium));
  const glass = new Mesh(roundedPlane(W - 0.02, H - 0.02, 0.15), m.glass);
  glass.position.z = T / 2 + 0.0008;
  body.add(glass);
  const display = screenPanel(createGraphScreen(), 2.33, 1.653, 0.085, aniso);
  display.mesh.position.z = T / 2 + 0.0016;
  body.add(display.mesh);
  const gloss = new Mesh(roundedPlane(W - 0.02, H - 0.02, 0.15), m.reflection);
  gloss.position.z = T / 2 + 0.0026;
  body.add(gloss);
  body.rotation.x = -0.1;
  const shadow = contactShadow(tex.shadow, 3.2, 1.2, 0.38);
  shadow.position.y = -1.14;
  group.add(shadow);
  return {
    group,
    screens: [display],
    update({ links }) {
      return display.update({ links: Math.round(links * 120) / 120 });
    },
    boxes: { main: new Box3(new Vector3(-W / 2, -H / 2, -0.12), new Vector3(W / 2, H / 2, 0.12)) },
  };
}

/* ─── Monitor ─── */

function createMonitor(m, tex, aniso) {
  const W = 4.1;
  const H = 2.42;
  const T = 0.09;
  const group = new Group();
  const panel = new Group();
  panel.position.set(0, 2.3, -0.05);
  group.add(panel);
  panel.add(new Mesh(slab(W, H, T, 0.06, 0.016), m.aluminium));
  const glass = new Mesh(roundedPlane(W - 0.012, H - 0.012, 0.055), m.glass);
  glass.position.z = T / 2 + 0.0008;
  panel.add(glass);
  const display = screenPanel(createPipelineScreen(), 3.94, 2.251, 0.018, aniso);
  display.mesh.position.set(0, 0, T / 2 + 0.0016);
  panel.add(display.mesh);
  const gloss = new Mesh(roundedPlane(W - 0.012, H - 0.012, 0.055), m.reflection);
  gloss.position.z = T / 2 + 0.0026;
  panel.add(gloss);

  const arm = new Mesh(slab(0.95, 2.34, 0.045, 0.03, 0.01), m.aluminium);
  arm.position.set(0, 1.17, -0.36);
  arm.rotation.x = 0.21;
  group.add(arm);
  const foot = new Mesh(slab(0.95, 1.3, 0.03, 0.09, 0.01), m.aluminium);
  foot.rotation.x = -Math.PI / 2;
  foot.position.set(0, 0.015, -0.32);
  group.add(foot);
  const shadow = contactShadow(tex.shadow, 1.8, 1.9, 0.7);
  shadow.position.z = -0.32;
  group.add(shadow);
  const wide = contactShadow(tex.shadow, 4.8, 1.6, 0.25);
  wide.position.z = -0.1;
  group.add(wide);
  return {
    group,
    screens: [display],
    update({ pipeline, pulse }) {
      return display.update({ pipeline: Math.round(pipeline * 60) / 60, pulse: Math.round(pulse * 8) / 8 });
    },
    boxes: { main: new Box3(new Vector3(-W / 2, 0, -0.95), new Vector3(W / 2, 3.52, 0.1)) },
  };
}

export function createDevices(maxAnisotropy) {
  const textures = {
    keyboard: canvasTexture(keyboardCanvas(), maxAnisotropy),
    shadow: canvasTexture(shadowCanvas(), 1),
    sheen: canvasTexture(sheenCanvas(), 1),
  };
  const materials = createMaterials(textures.sheen);
  return {
    materials,
    textures,
    // Space grey in the dark studio, silver in the light one.
    setFinish(theme) {
      const dark = theme !== 'light';
      materials.aluminium.color.set(dark ? 0x8a8d93 : 0xcfd2d8);
      materials.aluminium.roughness = dark ? 0.34 : 0.3;
      materials.titanium.color.set(dark ? 0x74767c : 0x8a8b90);
    },
    laptop: createLaptop(materials, textures, maxAnisotropy),
    phone: createPhone(materials, textures, maxAnisotropy),
    tablet: createTablet(materials, textures, maxAnisotropy),
    monitor: createMonitor(materials, textures, maxAnisotropy),
  };
}
