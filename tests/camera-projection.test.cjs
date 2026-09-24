const test = require('node:test');
const assert = require('node:assert/strict');
const { makeLayout, cameraAt, project, cameraProjection } = require('../site/experience.js');

test('factored camera projection matches the world projection throughout the path', () => {
  for (const [w, h] of [[375, 667], [390, 844], [1440, 900], [1920, 1080]]) {
    const layout = makeLayout(w, h);
    for (let p = 0; p <= 1; p += .005) {
      const camera = cameraAt(p, layout), view = cameraProjection(camera, layout);
      assert.ok(view.perspective > 0 && view.scale > 0);
      const angle = view.yaw * Math.PI / 180;
      for (const device of layout.devices) {
        const point = { x: device.x + 100, y: 73, z: device.z + 30 };
        const x = point.x * Math.cos(angle) + point.z * Math.sin(angle) + view.x;
        const z = -point.x * Math.sin(angle) + point.z * Math.cos(angle);
        const scale = view.scale * view.perspective / (view.perspective - z);
        const actual = project(point, camera, layout);
        assert.ok(Math.abs(w / 2 + x * scale - actual.x) < 1e-8);
        assert.ok(Math.abs(layout.sceneY + (point.y + view.y) * scale - actual.y) < 1e-8);
      }
    }
  }
});
