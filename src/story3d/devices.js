import {
  AdditiveBlending,
  Box3,
  BoxGeometry,
  CanvasTexture,
  Color,
  CylinderGeometry,
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

// MacBook-style deck: legends and speaker grilles on the albedo canvas, legends
// alone on the glow canvas (key backlight). Transparent pixels show the aluminium.
const KEY_ROWS = [
  { h: 0.55, keys: [['esc', 1.5], ...Array.from({ length: 12 }, (_, i) => [`F${i + 1}`, 1]), ['', 1, 'touch']] },
  { h: 1, keys: [['`', 1], ...'1234567890-='.split('').map((c) => [c, 1]), ['delete', 1.5, 'mod-r']] },
  { h: 1, keys: [['tab', 1.5, 'mod'], ...'QWERTYUIOP[]\\'.split('').map((c) => [c, 1])] },
  { h: 1, keys: [['caps lock', 1.8, 'mod'], ...'ASDFGHJKL;\''.split('').map((c) => [c, 1]), ['return', 1.7, 'mod-r']] },
  { h: 1, keys: [['shift', 2.3, 'mod'], ...'ZXCVBNM,./'.split('').map((c) => [c, 1]), ['shift', 2.2, 'mod-r']] },
  { h: 1, keys: [['fn', 1, 'mod'], ['control', 1, 'mod'], ['option', 1, 'mod'], ['command', 1.25, 'mod'], ['', 5], ['command', 1.25, 'mod'], ['option', 1, 'mod'], ['◀', 1], ['▲▼', 1, 'updown'], ['▶', 1]] },
];

function deckCanvases() {
  const W = 2048;
  const H = 1444;
  const make = () => {
    const c = document.createElement('canvas');
    c.width = W;
    c.height = H;
    return c;
  };
  const albedo = make();
  const glow = make();
  const a = albedo.getContext('2d');
  const g = glow.getContext('2d');
  g.fillStyle = '#000';
  g.fillRect(0, 0, W, H);
  const well = { x: W * 0.115, y: H * 0.065, w: W * 0.77, h: H * 0.455 };
  a.fillStyle = 'rgba(6,7,9,0.6)';
  rr(a, well.x - 14, well.y - 14, well.w + 28, well.h + 28, 22);
  a.fill();

  const gap = 11;
  const totalH = KEY_ROWS.reduce((sum, row) => sum + row.h, 0);
  const unitH = (well.h - gap * (KEY_ROWS.length - 1)) / totalH;
  let y = well.y;
  const legend = (ctx, text, x, yy, w, h, kind, color) => {
    ctx.fillStyle = color;
    if (kind === 'touch') {
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(x + w / 2, yy + h / 2, h * 0.28, 0, Math.PI * 2);
      ctx.stroke();
      return;
    }
    if (!text) return;
    if (kind === 'updown') {
      ctx.font = `600 ${Math.round(h * 0.22)}px -apple-system, "Segoe UI", Roboto, Arial, sans-serif`;
      ctx.textAlign = 'center';
      ctx.fillText('▲', x + w / 2, yy + h * 0.36);
      ctx.fillText('▼', x + w / 2, yy + h * 0.86);
      return;
    }
    const small = kind && kind.startsWith('mod');
    ctx.font = `${small ? 500 : 600} ${Math.round(h * (small ? 0.2 : text.length > 1 ? 0.24 : 0.34))}px -apple-system, "Segoe UI", Roboto, Arial, sans-serif`;
    if (small) {
      ctx.textAlign = kind === 'mod-r' ? 'right' : 'left';
      ctx.fillText(text, kind === 'mod-r' ? x + w - 14 : x + 14, yy + h - 14);
    } else {
      ctx.textAlign = 'center';
      ctx.fillText(text, x + w / 2, yy + h * 0.62);
    }
  };
  KEY_ROWS.forEach((row) => {
    const h = unitH * row.h;
    const total = row.keys.reduce((sum, [, u]) => sum + u, 0);
    const unitW = (well.w - gap * (row.keys.length - 1)) / total;
    let x = well.x;
    row.keys.forEach(([text, u, kind]) => {
      const w = unitW * u;
      if (kind === 'updown') {
        // Inverted-T arrows: two half-height keys stacked.
        [0, 1].forEach((i) => {
          a.fillStyle = '#0e0f11';
          rr(a, x, y + (h / 2 + 2) * i, w, h / 2 - 2, 8);
          a.fill();
        });
      } else {
        a.fillStyle = '#0e0f11';
        rr(a, x, y, w, h, 10);
        a.fill();
        a.fillStyle = 'rgba(255,255,255,0.05)';
        rr(a, x + 3, y + 3, w - 6, h * 0.42, 8);
        a.fill();
      }
      legend(a, text, x, y, w, h, kind, 'rgba(208,212,220,0.78)');
      legend(g, text, x, y, w, h, kind, '#ffffff');
      x += w + gap;
    });
    y += h + gap;
  });

  // Speaker grilles: dot perforations either side of the keyboard.
  a.fillStyle = 'rgba(0,0,0,0.62)';
  [W * 0.03, W * 0.9].forEach((gx) => {
    for (let yy = well.y + 8; yy < well.y + well.h; yy += 16) {
      for (let xx = gx; xx < gx + W * 0.07; xx += 16) {
        a.beginPath();
        a.arc(xx, yy, 4.6, 0, Math.PI * 2);
        a.fill();
      }
    }
  });

  // Trackpad outline and the thumb notch on the front edge.
  const tw = W * 0.42;
  const th = H * 0.34;
  a.strokeStyle = 'rgba(0,0,0,0.22)';
  a.lineWidth = 4;
  rr(a, (W - tw) / 2, H * 0.575, tw, th, 30);
  a.stroke();
  const notch = a.createRadialGradient(W / 2, H, 0, W / 2, H, W * 0.07);
  notch.addColorStop(0, 'rgba(0,0,0,0.28)');
  notch.addColorStop(1, 'rgba(0,0,0,0)');
  a.fillStyle = notch;
  a.fillRect(W / 2 - W * 0.08, H - H * 0.05, W * 0.16, H * 0.05);
  return { albedo, glow, trackpad: { w: tw / W, h: th / H, y: 0.575 + th / H / 2 } };
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
    trackpad: new MeshPhysicalMaterial({ color: 0xcfd2d8, metalness: 0.7, roughness: 0.2, clearcoat: 0.6, clearcoatRoughness: 0.15 }),
    hinge: new MeshPhysicalMaterial({ color: 0x1b1c1f, metalness: 0.9, roughness: 0.35 }),
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

  const deckMaterial = new MeshStandardMaterial({ map: tex.keyboard, emissiveMap: tex.keyGlow, emissive: new Color(0x9fb4d8), emissiveIntensity: 0, transparent: true, roughness: 0.55, metalness: 0.1, depthWrite: false });
  const deck = new Mesh(roundedPlane(W - 0.04, D - 0.04, 0.13), deckMaterial);
  deck.rotation.x = -Math.PI / 2;
  deck.position.y = T + 0.0012;
  group.add(deck);

  // Glass trackpad: same colour as the case, a touch glossier.
  const pad = new Mesh(roundedPlane((W - 0.04) * tex.trackpad.w, (D - 0.04) * tex.trackpad.h, 0.06), m.trackpad);
  pad.rotation.x = -Math.PI / 2;
  pad.position.set(0, T + 0.0009, -(D - 0.04) * (0.5 - tex.trackpad.y));
  group.add(pad);

  // Lid pivots on the back edge of the base. Local frame: lid stands up, screen faces +Z.
  const hinge = new Group();
  hinge.position.set(0, T, -D / 2 + 0.02);
  group.add(hinge);
  // Hinge barrel, visible between lid and base once open.
  const barrel = new Mesh(new CylinderGeometry(0.032, 0.032, W - 0.62, 24), m.hinge);
  barrel.rotation.z = Math.PI / 2;
  barrel.position.set(0, T - 0.012, -D / 2 + 0.035);
  group.add(barrel);
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
    // Key backlight, 0..1 (only meaningful in the dark studio).
    setBacklight(level) {
      deckMaterial.emissiveIntensity = 1.4 * level;
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
    update({ reveal }) {
      return display.update({ reveal: Math.round(reveal * 60) / 60 });
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
  const deck = deckCanvases();
  const textures = {
    keyboard: canvasTexture(deck.albedo, maxAnisotropy),
    keyGlow: canvasTexture(deck.glow, maxAnisotropy),
    trackpad: deck.trackpad,
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
      materials.trackpad.color.set(dark ? 0x8f9298 : 0xd3d6dc);
      materials.aluminium.roughness = dark ? 0.34 : 0.3;
      materials.titanium.color.set(dark ? 0x74767c : 0x8a8b90);
    },
    laptop: createLaptop(materials, textures, maxAnisotropy),
    phone: createPhone(materials, textures, maxAnisotropy),
    tablet: createTablet(materials, textures, maxAnisotropy),
    monitor: createMonitor(materials, textures, maxAnisotropy),
  };
}
