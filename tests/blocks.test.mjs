import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const root = new URL('../', import.meta.url);
const read = (path) => readFileSync(new URL(path, root), 'utf8');
const PLAY = 'https://play.google.com/store/apps/details?id=org.sshorg.blocks';
const HOST = 'https://blocks.sshorg.com';

test('the Blocks pages load scripts only from the site and link to Google Play and the policy', () => {
  for (const page of ['site/blocks/index.html', 'site/blocks/d/index.html']) {
    const html = read(page);
    assert.match(html, /<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'self';/, page);
    assert.ok(!/<script>/.test(html) && !/ on\w+="/.test(html), `${page} has inline script`);
    assert.ok(html.includes(`href="${PLAY}"`), `${page} has no Play link`);
    assert.ok(html.includes(`href="${HOST}/privacy"`), `${page} has no privacy link`);
    // Assets are relative, so the pages also work under sshorg.com/blocks/.
    assert.ok(!/(href|src)="\/blocks\//.test(html), `${page} has a /blocks/ path`);
    // Every visible string ships in both languages.
    assert.equal((html.match(/<span lang="ru">/g) ?? []).length, (html.match(/<span lang="en">/g) ?? []).length, page);
  }
});

test('the addresses built into the game point at the subdomain', () => {
  assert.match(read('site/blocks/index.html'), /<link rel="canonical" href="https:\/\/blocks\.sshorg\.com\/">/);
  assert.match(read('site/blocks/privacy.html'), /<link rel="canonical" href="https:\/\/blocks\.sshorg\.com\/privacy">/);
  assert.ok(read('site/blocks/blocks.js').includes("'intent://blocks.sshorg.com/d?'"));
  const caddy = read('deploy/blocks.Caddyfile');
  assert.match(caddy, /^blocks\.sshorg\.com \{$/m);
  assert.match(caddy, /root \* \/srv\/sshorg\/blocks/);
  assert.match(caddy, /try_files \{path\} \{path\}\.html \{path\}\/index\.html/);
  assert.match(caddy, /frame-ancestors 'none'/);
});

test('the duel fallback is not indexed and does not leak its query in the referrer', () => {
  const html = read('site/blocks/d/index.html');
  assert.match(html, /<meta name="robots" content="noindex">/);
  assert.match(html, /<meta name="referrer" content="no-referrer">/);
  assert.match(read('site/blocks/robots.txt'), /^Disallow: \/d$/m);
});

test('the duel script accepts only a seed and a score and writes them as text', () => {
  const js = read('site/blocks/blocks.js');
  assert.ok(!js.includes('innerHTML'), 'innerHTML in blocks.js');
  assert.match(js, /\/\^\[A-Za-z0-9_-\]\{1,32\}\$\/\.test\(seed\)/);
  assert.match(js, /\/\^\\d\{1,7\}\$\/\.test\(score\)/);
});

test('assetlinks.json declares the game package for App Links', () => {
  const [entry] = JSON.parse(read('site/blocks/.well-known/assetlinks.json'));
  assert.deepEqual(entry.relation, ['delegate_permission/common.handle_all_urls']);
  assert.equal(entry.target.package_name, 'org.sshorg.blocks');
  for (const print of entry.target.sha256_cert_fingerprints) assert.match(print, /^([0-9A-F]{2}:){31}[0-9A-F]{2}$/);
});

test('app-ads.txt has one AdMob line in the IAB format, the same on the apex and the subdomain', () => {
  const apex = read('site/app-ads.txt');
  assert.equal(read('site/blocks/app-ads.txt'), apex);
  const lines = apex.split('\n').filter((line) => line && !line.startsWith('#'));
  assert.deepEqual(lines.map((line) => line.split(', ').length), [4]);
  assert.match(lines[0], /^google\.com, pub-\d{16}, DIRECT, f08c47fec0942fa0$/);
});
