const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const test = require('node:test');
const site = path.join(__dirname, '..', 'site');
const html = fs.readFileSync(path.join(site, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(site, 'experience.css'), 'utf8');
const js = fs.readFileSync(path.join(site, 'experience.js'), 'utf8');

test('all four production device anchors remain available', () => {
  for (const name of ['laptop', 'phone', 'tablet', 'monitor']) {
    assert.ok(html.includes(`data-device="${name}"`));
  }
});
test('five original chapters and language variants survive the upgrade', () => {
  assert.deepEqual([...html.matchAll(/data-tech-copy="(\d+)"/g)].map(m => m[1]), ['0', '1', '2', '3', '4']);
  const counts = ['ru', 'tg', 'en'].map(lang => (html.match(new RegExp(`class="tech-copy-${lang}"`, 'g')) || []).length);
  assert.ok(counts[0] >= 8); assert.equal(counts[0], counts[1]); assert.equal(counts[1], counts[2]);
});
test('production loads the new scene assets', () => {
  assert.match(html, /experience\.css\?v=dev/); assert.match(html, /experience\.js\?v=dev/);
});
test('reduced motion and visibility changes are handled', () => {
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(js, /prefers-reduced-motion: reduce/);
  assert.match(js, /visibilitychange/); assert.match(js, /IntersectionObserver/);
});
test('runtime remains self-contained without CDN or package imports', () => {
  assert.doesNotMatch(js, /\b(?:require|import)\s*\(/);
  assert.doesNotMatch(js, /https?:\/\//);
});
