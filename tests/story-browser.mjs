// Browser checks for the studio story. Usage:
//   BROWSER=chromium|webkit node tests/story-browser.mjs
// Serves site/ locally, drives the scroll story and writes screenshots to test-results/.
import assert from 'node:assert/strict';
import { mkdir, readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';
import { chromium, webkit } from 'playwright';

const browserName = process.env.BROWSER || 'chromium';
const OUT = 'test-results';
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.txt': 'text/plain', '.xml': 'application/xml' };
const root = new URL('../site/', import.meta.url).pathname;

const server = createServer(async (req, res) => {
  const path = decodeURIComponent(new URL(req.url, 'http://local').pathname);
  const file = normalize(join(root, path.endsWith('/') ? `${path}index.html` : path));
  if (!file.startsWith(root)) return res.writeHead(403).end();
  try {
    const body = await readFile(file);
    res.writeHead(200, { 'content-type': TYPES[extname(file)] ?? 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404).end();
  }
});
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const base = `http://127.0.0.1:${server.address().port}/`;

const launcher = { chromium, webkit }[browserName];
const browser = await launcher.launch(browserName === 'chromium' && process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {});
await mkdir(OUT, { recursive: true });

const failures = [];
async function scenario(name, fn) {
  try {
    await fn();
    console.log(`ok   ${browserName} ${name}`);
  } catch (error) {
    failures.push(`${name}: ${error.message}`);
    console.log(`FAIL ${browserName} ${name}\n     ${error.message}`);
  }
}

async function openPage({ viewport, colorScheme = 'dark', reducedMotion = 'no-preference', lang = 'en', query = '' }) {
  const context = await browser.newContext({ viewport, colorScheme, reducedMotion, deviceScaleFactor: 1 });
  // Stub third-party analytics: keeps tests hermetic and out of the site's real analytics.
  await context.route((url) => !url.href.startsWith(base), (route) =>
    route.fulfill({ status: 200, headers: { 'access-control-allow-origin': '*' }, contentType: route.request().resourceType() === 'script' ? 'text/javascript' : 'text/plain', body: '' }),
  );
  await context.addInitScript((value) => localStorage.setItem('sshorg.lang', value), lang);
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    // Only this site's errors count; third-party beacons may be blocked in CI.
    if (message.type() === 'error' && (message.location().url || base).startsWith(base)) errors.push(message.text());
  });
  await page.goto(`${base}${query}`, { waitUntil: 'load' });
  await page.waitForFunction(() => window.__story?.mode === 'static' || (window.__story?.mode === 'live' && window.__story.frames > 0), null, { timeout: 20000 });
  return { page, context, errors };
}

async function scrollToProgress(page, p) {
  await page.evaluate((target) => {
    const story = document.querySelector('[data-story]');
    window.scrollTo(0, story.offsetTop + (story.offsetHeight - window.innerHeight) * target);
  }, p);
  await page.waitForFunction((target) => Math.abs(window.__story.progress - target) < 0.003, p, { timeout: 15000 });
  await page.waitForTimeout(250);
}

const overlap = (a, b, tolerance = 4) => a.left < b.right - tolerance && a.right > b.left + tolerance && a.top < b.bottom - tolerance && a.bottom > b.top + tolerance;

const HOLDS = [
  { p: 0.005, shot: 0, devices: ['laptop'] },
  { p: 0.24, shot: 1, devices: ['laptop'] },
  { p: 0.45, shot: 2, devices: ['phone'] },
  { p: 0.66, shot: 3, devices: ['tablet'] },
  { p: 0.855, shot: 4, devices: ['monitor'] },
  { p: 1, shot: 5, devices: ['laptop', 'phone', 'tablet', 'monitor'] },
];

async function checkHolds(page, label) {
  for (const hold of HOLDS) {
    await scrollToProgress(page, hold.p);
    const state = await page.evaluate(() => {
      const canvas = document.querySelector('.story-canvas').getBoundingClientRect();
      const copies = Array.from(document.querySelectorAll('[data-story-copy]')).map((el) => {
        const r = el.getBoundingClientRect();
        return { opacity: Number(getComputedStyle(el).opacity), visibility: getComputedStyle(el).visibility, rect: { left: r.left, right: r.right, top: r.top, bottom: r.bottom } };
      });
      const rects = window.__story.rects();
      Object.values(rects).forEach((r) => {
        r.left += canvas.left;
        r.right += canvas.left;
        r.top += canvas.top;
        r.bottom += canvas.top;
      });
      return { copies, rects, coverage: window.__story.coverage(), overflow: document.documentElement.scrollWidth > window.innerWidth + 1 };
    });
    const shown = state.copies.map((c, i) => (c.opacity > 0.5 && c.visibility === 'visible' ? i : -1)).filter((i) => i >= 0);
    assert.ok(state.copies.every((c, i) => i === 0 || c.visibility === 'visible'), 'chapters must stay in the accessibility tree');
    assert.deepEqual(shown, [hold.shot], `p=${hold.p}: visible copies ${JSON.stringify(shown)}`);
    const copyRect = state.copies[hold.shot].rect;
    for (const device of hold.devices) {
      const rect = state.rects[device];
      assert.ok(rect, `p=${hold.p}: ${device} not in front of the camera`);
      assert.ok(!overlap(copyRect, rect), `p=${hold.p}: text overlaps ${device} ${JSON.stringify({ copyRect, rect })}`);
    }
    assert.ok(state.coverage > 0.004, `p=${hold.p}: canvas looks empty (${state.coverage})`);
    assert.ok(!state.overflow, `p=${hold.p}: horizontal overflow`);
    await page.screenshot({ path: `${OUT}/${browserName}-${label}-${String(hold.p).replace('.', '_')}.png` });
  }
}

const webgl = await (async () => {
  const page = await browser.newPage();
  const ok = await page.evaluate(() => Boolean(document.createElement('canvas').getContext('webgl2') || document.createElement('canvas').getContext('webgl')));
  await page.close();
  return ok;
})();
console.log(`${browserName}: WebGL ${webgl ? 'available' : 'unavailable — live checks skipped'}`);

if (webgl) {
  await scenario('desktop dark: chapters hold, text clear of devices', async () => {
    const { page, context, errors } = await openPage({ viewport: { width: 1440, height: 900 } });
    assert.equal(await page.evaluate(() => window.__story.mode), 'live');
    await checkHolds(page, 'desktop');
    await scrollToProgress(page, 0.45);
    const before = await page.evaluate(() => window.__story.frames);
    await page.waitForTimeout(1500);
    const idle = (await page.evaluate(() => window.__story.frames)) - before;
    assert.ok(idle <= 1, `rendered ${idle} frames while idle`);
    assert.deepEqual(errors, []);
    await context.close();
  });

  await scenario('phone portrait: device on top, text below', async () => {
    const { page, context, errors } = await openPage({ viewport: { width: 390, height: 844 } });
    await checkHolds(page, 'phone');
    assert.deepEqual(errors, []);
    await context.close();
  });

  await scenario('light theme in Russian renders', async () => {
    const { page, context, errors } = await openPage({ viewport: { width: 1280, height: 800 }, colorScheme: 'light', lang: 'ru' });
    await scrollToProgress(page, 0.45);
    assert.ok((await page.evaluate(() => window.__story.coverage())) > 0.004);
    await page.screenshot({ path: `${OUT}/${browserName}-light-ru.png` });
    assert.deepEqual(errors, []);
    await context.close();
  });
}

await scenario('reduced motion: static stacked story with poster', async () => {
  const { page, context, errors } = await openPage({ viewport: { width: 1280, height: 800 }, reducedMotion: 'reduce' });
  const state = await page.evaluate(async () => {
    const story = document.querySelector('[data-story]');
    const poster = story.querySelector('.story-poster');
    poster.scrollIntoView();
    await new Promise((resolve) => (poster.complete ? resolve() : poster.addEventListener('load', resolve, { once: true })));
    return {
      mode: window.__story.mode,
      height: story.offsetHeight / window.innerHeight,
      poster: poster.naturalWidth,
      hidden: Array.from(story.querySelectorAll('[data-story-copy]')).filter((el) => getComputedStyle(el).opacity !== '1' || getComputedStyle(el).visibility !== 'visible').length,
    };
  });
  assert.equal(state.mode, 'static');
  assert.ok(state.height < 3.5, `static story is ${state.height.toFixed(1)} screens tall`);
  assert.ok(state.poster > 0, 'poster did not load');
  assert.equal(state.hidden, 0, 'every chapter must be readable');
  await page.screenshot({ path: `${OUT}/${browserName}-reduced-motion.png`, fullPage: false });
  assert.deepEqual(errors, []);
  await context.close();
});

await scenario('forced static mode via ?story=static', async () => {
  const { page, context, errors } = await openPage({ viewport: { width: 1280, height: 800 }, query: '?story=static' });
  assert.equal(await page.evaluate(() => window.__story.mode), 'static');
  assert.deepEqual(errors, []);
  await context.close();
});

await browser.close();
server.close();
if (failures.length) {
  console.log(`\n${failures.length} failing scenario(s) in ${browserName}`);
  process.exit(1);
}
console.log(`\nall ${browserName} scenarios passed`);
