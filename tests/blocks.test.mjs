import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const root = new URL('../', import.meta.url);
const read = (path) => readFileSync(new URL(path, root), 'utf8');
const PLAY = 'https://play.google.com/store/apps/details?id=org.sshorg.blocks';

test('the Blocks pages load scripts only from the site and link to Google Play', () => {
  for (const page of ['site/blocks/index.html', 'site/blocks/d/index.html']) {
    const html = read(page);
    assert.match(html, /<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'self';/, page);
    assert.ok(!/<script>/.test(html) && !/ on\w+="/.test(html), `${page} has inline script`);
    assert.ok(html.includes(`href="${PLAY}"`), `${page} has no Play link`);
    assert.ok(html.includes('href="/blocks/privacy.html"'), `${page} has no privacy link`);
    // Every visible string ships in both languages.
    assert.equal((html.match(/<span lang="ru">/g) ?? []).length, (html.match(/<span lang="en">/g) ?? []).length, page);
  }
});

test('the duel fallback is not indexed and does not leak its query in the referrer', () => {
  const html = read('site/blocks/d/index.html');
  assert.match(html, /<meta name="robots" content="noindex">/);
  assert.match(html, /<meta name="referrer" content="no-referrer">/);
});

test('the duel script accepts only a seed and a score and writes them as text', () => {
  const js = read('site/blocks/blocks.js');
  assert.ok(!js.includes('innerHTML'), 'innerHTML in blocks.js');
  assert.match(js, /\/\^\[A-Za-z0-9_-\]\{1,32\}\$\/\.test\(seed\)/);
  assert.match(js, /\/\^\\d\{1,7\}\$\/\.test\(score\)/);
});

test('app-ads.txt has one AdMob line in the IAB format', () => {
  const lines = read('site/app-ads.txt').split('\n').filter((line) => line && !line.startsWith('#'));
  assert.deepEqual(lines.map((line) => line.split(', ').length), [4]);
  assert.match(lines[0], /^google\.com, pub-\d{16}, DIRECT, f08c47fec0942fa0$/);
});

test('the sitemap lists the Blocks landing page', () => {
  assert.match(read('site/sitemap.xml'), /<loc>https:\/\/sshorg\.com\/blocks\/<\/loc>/);
});
