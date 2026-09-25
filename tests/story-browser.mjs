// Browser checks for the studio story. Usage:
//   BROWSER=chromium|webkit node tests/story-browser.mjs
// Serves site/ locally, drives the scroll story and writes screenshots to test-results/.
import assert from 'node:assert/strict';
import { mkdir, readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, normalize } from 'node:path';
import { chromium, webkit } from 'playwright';
import { COPY, STORY_END } from '../src/story3d/schedule.js';

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

async function openPage({ viewport, colorScheme = 'dark', reducedMotion = 'no-preference', lang = 'en', query = '', touch = false }) {
  const context = await browser.newContext({ viewport, colorScheme, reducedMotion, deviceScaleFactor: 1, ...(touch ? { isMobile: true, hasTouch: true } : {}) });
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

// Hold points come from the schedule: the middle of each text block's fully visible window.
const holdAt = (i) => (i === 0 ? 0.005 : i === COPY.length - 1 ? (COPY[i][1] + STORY_END) / 2 : (COPY[i][1] + COPY[i][2]) / 2);
const HOLDS = [['laptop'], ['laptop'], ['phone'], ['tablet'], ['monitor'], ['laptop', 'phone', 'tablet', 'monitor']].map((devices, shot) => ({ p: Math.round(holdAt(shot) * 1e4) / 1e4, shot, devices }));

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

// "Closer look" viewer: pills appear after the story, a pill flies the camera to its
// device without covering the feature list or its card, Escape returns to the overview.
async function checkViewer(page, label) {
  await scrollToProgress(page, 0.92);
  await page.waitForFunction(() => window.__story.explore > 0.99, null, { timeout: 10000 });
  const pills = await page.locator('.story-pill').evaluateAll((els) => els.filter((el) => el.getBoundingClientRect().width > 0 && getComputedStyle(el.closest('.story-explore')).visibility === 'visible').length);
  assert.equal(pills, 6, `expected 6 visible pills, got ${pills}`);
  for (const feature of ['graph', 'ai']) {
    await page.click(`.story-feature[data-feature="${feature}"] .story-pill`);
    await page.waitForFunction(() => window.__story.flight >= 1, null, { timeout: 10000 });
    await page.waitForTimeout(300);
    const state = await page.evaluate((name) => {
      const rect = (el) => {
        const r = el.getBoundingClientRect();
        return { left: r.left, right: r.right, top: r.top, bottom: r.bottom };
      };
      const body = document.querySelector(`#feature-${name}`);
      return {
        active: window.__story.feature,
        device: window.__story.featureRect(),
        body: rect(body),
        bodyText: body.hidden ? '' : body.textContent.trim(),
        list: rect(document.querySelector('.story-features')),
        expanded: document.querySelector(`.story-feature[data-feature="${name}"] .story-pill`).getAttribute('aria-expanded'),
      };
    }, feature);
    assert.equal(state.active, feature);
    assert.equal(state.expanded, 'true');
    assert.ok(state.bodyText.length > 20, `${feature}: card text missing`);
    assert.ok(!overlap(state.device, state.body), `${feature}: device overlaps its card ${JSON.stringify(state)}`);
    if (label === 'desktop') assert.ok(!overlap(state.device, state.list), `${feature}: device overlaps the pills ${JSON.stringify(state)}`);
    await page.screenshot({ path: `${OUT}/${browserName}-${label}-viewer-${feature}.png` });
  }
  await page.keyboard.press('Escape');
  await page.waitForFunction(() => window.__story.feature === null && window.__story.flight >= 1, null, { timeout: 10000 });
  await page.click('.story-feature[data-feature="finish"] .story-pill');
  await page.click('.story-swatch[data-finish="light"]');
  assert.equal(await page.locator('.story-swatch[data-finish="light"]').getAttribute('aria-pressed'), 'true');
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
    // Hero beam: on within 1.8 s of load in the dark studio, then the room lights up by chapter 01.
    await page.waitForTimeout(1800);
    const hero = await page.evaluate(() => ({ ...window.__story.light, bloom: window.__story.bloomAtStart }));
    assert.equal(hero.theme, 'dark');
    assert.ok(hero.spot >= 0.9, `beam not on after 1.8 s (${hero.spot})`);
    assert.ok(hero.reveal < 0.05, `studio already lit on the hero (${hero.reveal})`);
    assert.equal(hero.bloom, true, 'bloom should start on for a fine pointer');
    await checkHolds(page, 'desktop');
    assert.equal(await page.evaluate(() => window.__story.light.reveal), 1, 'studio not lit after the hero');
    await checkViewer(page, 'desktop');
    // Idle: park on the phone hold with the mouse at the centre (zero parallax; browsers
    // send a synthetic mousemove after scrolling), let everything settle, then count frames.
    await page.mouse.move(720, 450);
    await scrollToProgress(page, HOLDS[2].p);
    await page.waitForFunction(() => new Promise((resolve) => {
      const first = window.__story.progress;
      setTimeout(() => resolve(window.__story.progress === first), 250);
    }), null, { timeout: 10000 });
    await page.waitForTimeout(1000);
    const before = await page.evaluate(() => window.__story.frames);
    await page.waitForTimeout(1500);
    const idle = (await page.evaluate(() => window.__story.frames)) - before;
    assert.ok(idle <= 1, `rendered ${idle} frames while idle`);
    assert.deepEqual(errors, []);
    await context.close();
  });

  await scenario('phone portrait: device on top, text below', async () => {
    const { page, context, errors } = await openPage({ viewport: { width: 390, height: 844 }, touch: true });
    assert.equal(await page.evaluate(() => window.__story.bloomAtStart), false, 'touch devices render without bloom');
    await checkHolds(page, 'phone');
    await checkViewer(page, 'phone');
    assert.deepEqual(errors, []);
    await context.close();
  });

  await scenario('light theme in Russian renders', async () => {
    const { page, context, errors } = await openPage({ viewport: { width: 1280, height: 800 }, colorScheme: 'light', lang: 'ru' });
    await scrollToProgress(page, HOLDS[2].p);
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
