const test = require('node:test');
const assert = require('node:assert/strict');
const { damp, makeLayout, cameraAt, project, deviceBounds, copyOpacity } = require('../site/experience.js');

test('device roots are immutable; only the camera changes across the journey', () => {
  const layout = makeLayout(1440, 900);
  const before = JSON.stringify(layout.devices);
  for (let p = 0; p <= 1; p += .001) cameraAt(p, layout);
  assert.equal(JSON.stringify(layout.devices), before);
  assert.ok(Object.isFrozen(layout.devices));
  assert.ok(layout.devices.every(Object.isFrozen));
  assert.deepEqual(layout.devices.map(d => d.name), ['laptop', 'phone', 'tablet', 'monitor']);
});

test('damping is time-based, including 60 Hz and 120 Hz displays', () => {
  const integrate = hz => { let n = 0; for (let i = 0; i < hz; i++) n = damp(n, 1, 1000 / hz); return n; };
  assert.ok(Math.abs(integrate(60) - integrate(120)) < 1e-12);
  assert.ok(Math.abs(damp(damp(0, 1, 16), 1, 16) - damp(0, 1, 32)) < 1e-12);
  assert.equal(damp(0, 1, 0), 0);
  assert.equal(damp(0, 1, -1), 0);
});

test('camera stations reserve the opposite side for text, and center mobile devices', () => {
  for (const [w, h] of [[1440, 900], [1024, 768], [390, 844], [375, 667]]) {
    const layout = makeLayout(w, h);
    for (const [i, p] of [.18, .405, .65, .875].entries()) {
      const d = layout.devices[i], camera = cameraAt(p, layout);
      const screen = project({ x: d.x, y: 0, z: d.z }, camera, layout);
      const desired = layout.mobile ? w / 2 : w * (i % 2 === 0 ? .74 : .26);
      assert.ok(Math.abs(screen.x - desired) < 1e-6, `${w}, station ${i}`);
    }
  }
});

test('camera remains finite and continuous at every keyframe and clamps overscroll', () => {
  for (const [w, h] of [[320, 640], [430, 932], [768, 1024], [1920, 1080]]) {
    const layout = makeLayout(w, h);
    for (let p = -.1; p < 1.11; p += .003) {
      assert.ok(Object.values(cameraAt(p, layout)).every(Number.isFinite));
    }
    for (const [p] of layout.keys.slice(1, -1)) {
      const a = cameraAt(p - 1e-7, layout), b = cameraAt(p + 1e-7, layout);
      for (const key of ['x', 'y', 'z', 'yaw']) assert.ok(Math.abs(a[key] - b[key]) < .01);
    }
    assert.deepEqual(cameraAt(-1, layout), cameraAt(0, layout));
    assert.deepEqual(cameraAt(2, layout), cameraAt(1, layout));
  }
});

test('wide shot fits the same fixed world without rearranging devices', () => {
  for (const [w, h] of [[375, 667], [1440, 900], [1920, 1080]]) {
    const layout = makeLayout(w, h), camera = cameraAt(1, layout);
    for (const d of layout.devices) {
      const box = deviceBounds(d, camera, layout);
      assert.ok(box.left > 0 && box.right < w, `${w}: ${d.name}`);
    }
  }
});

test('one reading chapter at a time; transitions and final pullback are uncluttered', () => {
  for (let p = 0; p <= 1; p += .001) {
    const visible = [0, 1, 2, 3, 4].filter(i => copyOpacity(p, i) > .01);
    assert.ok(visible.length <= 1);
  }
  assert.equal(copyOpacity(0, 0), 1);
  for (const p of [.29, .53, .77, 1]) for (let i = 0; i < 5; i++) assert.equal(copyOpacity(p, i), 0);
});
