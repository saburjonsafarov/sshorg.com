import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { test } from 'node:test';

const root = new URL('../', import.meta.url);
const read = (path) => readFileSync(new URL(path, root), 'utf8');
const html = read('site/index.html');

test('the page describes its owner as structured data and names its canonical URL', () => {
  const block = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  assert.ok(block, 'JSON-LD block missing');
  const person = JSON.parse(block[1]);
  assert.equal(person['@type'], 'Person');
  assert.equal(person.url, 'https://sshorg.com');
  // Every profile the structured data points to is also linked on the page itself.
  for (const link of person.sameAs) assert.ok(html.includes(`href="${link}"`), `${link} is not linked on the page`);
  assert.match(html, /<link rel="canonical" href="https:\/\/sshorg\.com">/);
});

test('crawlers get robots.txt, a sitemap of the home page and a noindex 404 page', () => {
  assert.match(read('site/robots.txt'), /^Sitemap: https:\/\/sshorg\.com\/sitemap\.xml$/m);
  const sitemap = read('site/sitemap.xml');
  assert.match(sitemap, /<loc>https:\/\/sshorg\.com\/<\/loc>/);
  assert.match(sitemap, /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/);
  assert.match(read('site/404.html'), /<meta name="robots" content="noindex">/);
});

test('security.txt carries the RFC 9116 required fields', () => {
  const security = read('site/.well-known/security.txt');
  assert.match(security, /^Contact: mailto:\S+@\S+$/m);
  assert.ok(!Number.isNaN(Date.parse(security.match(/^Expires: (.+)$/m)?.[1])), 'Expires must be a date');
});

test('the open-source cards link to their public repositories', () => {
  for (const repo of ['nav-kit', 'scanner']) assert.ok(html.includes(`href="https://github.com/saburjonsafarov/${repo}"`), repo);
});

test('the stale-file list never includes a file the site still ships', () => {
  const stale = execFileSync('sh', ['tools/stale-files.sh'], { cwd: root, encoding: 'utf8' }).split('\n').filter(Boolean);
  for (const path of stale) assert.ok(!existsSync(new URL(`site/${path}`, root)), `${path} is still in site/`);
  const shallow = execFileSync('git', ['rev-parse', '--is-shallow-repository'], { cwd: root, encoding: 'utf8' }).trim() === 'true';
  // With full history the pages removed from site/ earlier are listed for deletion.
  if (!shallow) assert.ok(stale.includes('beyond.html') && stale.includes('experience.js'), stale.join(', '));
});
