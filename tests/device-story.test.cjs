const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const math = require('../site/beyond.js');
const site = path.join(__dirname, '../site');
const html = fs.readFileSync(path.join(site, 'beyond.html'), 'utf8');
const js = fs.readFileSync(path.join(site, 'beyond.js'), 'utf8');
const css = fs.readFileSync(path.join(site, 'beyond.css'), 'utf8');
const near = (a, b) => assert.ok(Math.abs(a - b) < 1e-6, `${a} != ${b}`);

test('progress clamps at both ends', () => {
  assert.equal(math.clamp(-2), 0);
  assert.equal(math.clamp(3), 1);
  assert.equal(math.clamp(0.43), 0.43);
});
test('smooth transitions are bounded and monotonic', () => {
  let previous = 0;
  for (let x = -0.5; x <= 1.5; x += 0.01) {
    const value = math.smooth(0.15, 0.6, x);
    assert.ok(value >= 0 && value <= 1 && value >= previous);
    previous = value;
  }
});
test('column-major transforms compose translation correctly', () => {
  const matrix = math.multiply(math.translation(1, 2, 3), math.translation(4, 5, 6));
  assert.deepEqual(matrix.slice(12, 15), [5, 7, 9]);
});
test('hinge rotates around X, not around the screen center', () => {
  const m = math.rotationX(Math.PI / 2);
  near(m[5], 0); near(m[6], 1); near(m[9], -1);
  const hinge = math.multiply(math.translation(0, -0.38, -0.99), m);
  near(hinge[13], -0.38); near(hinge[14], -0.99);
});
test('camera matrices remain finite for portrait and landscape', () => {
  for (const aspect of [320 / 640, 390 / 844, 1440 / 900, 1920 / 1080]) {
    const vp = math.multiply(math.perspective(Math.PI / 4.5, aspect), math.lookAt([0, 1, 9], [0, 0, 0]));
    assert.equal(vp.length, 16); assert.ok(vp.every(Number.isFinite));
  }
});
test('five story chapters map to the right scroll intervals', () => {
  assert.deepEqual([0, 0.23, 0.46, 0.70, 0.97].map(math.chapterAt), [0, 1, 2, 3, 4]);
});
test('device geometry is bounded, triangulated and finite', () => {
  const vertices = math.rounded(3.6, 2.28, 0.13, 0.12);
  assert.equal(vertices.length % 24, 0);
  for (let i = 0; i < vertices.length; i += 8) {
    assert.ok(vertices.slice(i, i + 8).every(Number.isFinite));
    assert.ok(Math.abs(vertices[i]) <= 1.800001);
    assert.ok(Math.abs(vertices[i + 1]) <= 1.140001);
    assert.ok(Math.abs(vertices[i + 2]) <= 0.065001);
    near(Math.hypot(...vertices.slice(i + 3, i + 6)), 1);
  }
});
test('screen geometry contains front faces with UVs in range', () => {
  const vertices = math.front(1.049, 2.255, 0.138);
  assert.ok(vertices.length > 0);
  for (let i = 0; i < vertices.length; i += 8) {
    assert.deepEqual(vertices.slice(i + 3, i + 6), [0, 0, 1]);
    assert.ok(vertices[i + 6] >= 0 && vertices[i + 6] <= 1);
    assert.ok(vertices[i + 7] >= 0 && vertices[i + 7] <= 1);
  }
});
test('ecosystem rings are finite closed triangle meshes', () => {
  const vertices = math.torus(3.6);
  assert.equal(vertices.length % 24, 0); assert.ok(vertices.every(Number.isFinite));
});
test('page declares five chapters and unique IDs', () => {
  assert.deepEqual([...html.matchAll(/data-chapter="(\d)"/g)].map(m => m[1]), ['0', '1', '2', '3', '4']);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(new Set(ids).size, ids.length);
});
test('all local resources exist and navigation anchors resolve', () => {
  for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
    if (/^(https?:|data:|mailto:)/.test(match[1])) continue;
    assert.ok(fs.existsSync(path.join(site, match[1].split('?')[0])), match[1]);
  }
  for (const match of html.matchAll(/href="#([^"]+)"/g)) assert.ok(html.includes(`id="${match[1]}"`));
});
test('motion, context-loss and offscreen lifecycle protections exist', () => {
  for (const token of ['prefers-reduced-motion', 'webglcontextlost', 'webglcontextrestored', 'visibilitychange', 'IntersectionObserver', 'cancelAnimationFrame']) assert.ok(js.includes(token), token);
  assert.ok(css.includes('@media(prefers-reduced-motion:reduce)'));
});
test('both renderers consume the same meshes; no CDN or font downloads', () => {
  assert.ok(js.includes("getContext('webgl'")); assert.ok(js.includes('softwareContext(canvas)'));
  assert.doesNotMatch(js, /\bfetch\s*\(|\bimport\s*\(/);
  assert.doesNotMatch(html, /<script[^>]+src="https?:/);
  assert.doesNotMatch(css, /@import|@font-face/);
});
test('demo claims and real contact destinations are explicit', () => {
  assert.ok(html.includes('демонстрационные концепты'));
  assert.ok(html.includes('https://t.me/SaburjonSafarov'));
  assert.ok(html.includes('https://github.com/saburjonsafarov/compose-graph'));
});
