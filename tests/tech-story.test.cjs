
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const test = require('node:test');

const site = path.join(__dirname, '..', 'site');
const html = fs.readFileSync(path.join(site, 'index.html'), 'utf8');
const css = fs.readFileSync(path.join(site, 'experience.css'), 'utf8');
const js = fs.readFileSync(path.join(site, 'experience.js'), 'utf8');

test('cinematic story contains laptop, phone, tablet and monitor', () => {
  for (const device of ['laptop', 'phone', 'tablet', 'monitor']) {
    assert.match(html, new RegExp('data-device=["\\']' + device + '["\\']'));
  }
});

test('story contains five scroll narrative chapters', () => {
  const chapters = [...html.matchAll(/data-tech-copy="(\d+)"/g)].map((match) => match[1]);
  assert.deepEqual(chapters, ['0', '1', '2', '3', '4']);
});

test('experience assets are wired into the page', () => {
  assert.match(html, /experience\.css\?v=dev/);
  assert.match(html, /experience\.js\?v=dev/);
  assert.match(html, /data-tech-story/);
});

test('motion has an accessible fallback', () => {
  assert.match(css, /prefers-reduced-motion:reduce/);
  assert.match(js, /prefers-reduced-motion: reduce/);
});

test('device scene stays dependency-free', () => {
  assert.doesNotMatch(js, /\brequire\s*\(/);
  assert.doesNotMatch(js, /\bimport\s*\(/);
  assert.doesNotMatch(html, /three(?:\.min)?\.js|react-three|gsap/i);
});

test('all new localized copy has ru, tg and en variants', () => {
  const ru = (html.match(/class="tech-copy-ru"/g) || []).length;
  const tg = (html.match(/class="tech-copy-tg"/g) || []).length;
  const en = (html.match(/class="tech-copy-en"/g) || []).length;
  assert.ok(ru >= 8);
  assert.equal(ru, tg);
  assert.equal(ru, en);
});
