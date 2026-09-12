const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const test = require('node:test');
const path = require('node:path');
const base = path.join(__dirname, '..', 'site') + path.sep;

function element() {
  const classes = new Set();
  const listeners = {};
  return {
    dataset: {}, hidden: false, naturalWidth: 1200, complete: true,
    classList: { add: (...cs) => cs.forEach(c => classes.add(c)), remove: (...cs) => cs.forEach(c => classes.delete(c)), contains: c => classes.has(c), toggle: (c, on) => on ? classes.add(c) : classes.delete(c) },
    style: { setProperty(k, v) { this[k] = v; } },
    setAttribute(k, v) { this[k] = v; }, removeAttribute(k) { delete this[k]; },
    addEventListener(k, f) { (listeners[k] ||= []).push(f); },
    emit(k, e = {}) { for (const f of listeners[k] || []) f(e); },
    getBoundingClientRect: () => ({ left: 80, top: 20, width: 44, height: 44 }),
    querySelector: () => null, querySelectorAll: () => [], closest: () => null,
  };
}

function setup() {
  const root = element(), theme = element(), motion = element();
  motion.matches = false;
  const one = new Map(), many = new Map();
  const observers = [], timers = new Map();
  const document = Object.assign(element(), {
    documentElement: root, hidden: false, querySelector: s => one.get(s) || null,
    querySelectorAll: s => many.get(s) || [], getElementById: id => id === 'themeToggle' ? theme : null,
    getAnimations: () => [],
  });
  let fine = true;
  let counter = 0;
  const storage = new Map();
  const sandbox = { document, history: {}, navigator: {}, innerWidth: 1000, innerHeight: 800,
    localStorage: { getItem: k => storage.get(k), setItem: (k, v) => storage.set(k, v) },
    matchMedia: q => q.includes('reduced-motion') ? motion : { matches: q.includes('hover') ? fine : false },
    addEventListener: () => {}, scrollTo: () => {},
    setTimeout: (f, delay) => { timers.set(++counter, { f, delay }); return counter; }, clearTimeout: id => timers.delete(id),
    requestAnimationFrame: f => { timers.set(++counter, { f, delay: 0 }); return counter; }, cancelAnimationFrame: id => timers.delete(id),
    IntersectionObserver: class { constructor(f) { this.cb = f; observers.push(this); } observe() {} unobserve() {} disconnect() { this.disconnected = true; } },
    MutationObserver: class { observe() {} },
  };
  sandbox.window = sandbox;
  const context = vm.createContext(sandbox);
  vm.runInContext(fs.readFileSync(base + 'enhancement-copy.js', 'utf8'), context);
  const app = fs.readFileSync(base + 'app.js', 'utf8');
  vm.runInContext(app.slice(0, app.indexOf('const savedTheme =')), context);
  const enhancements = fs.readFileSync(base + 'enhancements.js', 'utf8');
  vm.runInContext(enhancements.slice(0, enhancements.lastIndexOf('initAmbientMotion();')), context);
  return { root, theme, motion, document, one, many, observers, timers, storage, context, setFine: f => { fine = f; }, run: s => vm.runInContext(s, context) };
}

test('theme switches and persists without View Transitions, including reduced motion', async () => {
  const s = setup();
  await s.run('toggleTheme()');
  assert.equal(s.root.dataset.theme, 'dark');
  assert.equal(s.storage.get('sshorg.theme'), 'dark');
  s.motion.matches = true;
  s.document.startViewTransition = () => { throw Error('must not animate'); };
  await s.run('toggleTheme()');
  assert.equal(s.root.dataset.theme, 'light');
});

test('theme snapshot lifecycle rejects duplicate work and skips on a live reduced-motion change', async () => {
  const s = setup();
  let finish, calls = 0, skipped = false;
  s.document.startViewTransition = apply => {
    calls++; apply();
    return { ready: Promise.resolve(), finished: new Promise(resolve => { finish = resolve; }), skipTransition() { skipped = true; finish(); } };
  };
  const first = s.run('toggleTheme()');
  await s.run('toggleTheme()');
  assert.equal(calls, 1);
  assert.equal(s.root.style['--theme-x'], '102px');
  assert.equal(s.root.classList.contains('theme-reveal'), true);
  s.motion.matches = true; s.motion.emit('change');
  await first;
  assert.equal(skipped, true);
  assert.equal(s.root.classList.contains('theme-reveal'), false);
  assert.equal(s.theme['aria-busy'], undefined);
});

test('failed snapshot still applies theme and cleans transition state', async () => {
  const s = setup();
  s.document.startViewTransition = apply => { apply(); return { ready: Promise.reject(Error('skip')), finished: Promise.resolve() }; };
  await s.run('toggleTheme()');
  assert.equal(s.root.dataset.theme, 'dark');
  assert.equal(s.root.classList.contains('theme-reveal'), false);
});

function peek(s) {
  const preview = element(), images = element(), alternate = element(), button = element(), settled = element(), early = element();
  preview.querySelector = key => ({ '.project-peek-images': images, '.project-preview-alternate': alternate, '.preview-toggle': button, '[data-peek-settled]': settled, '[data-peek-early]': early }[key]);
  s.many.set('.project-peek', [preview]); s.run('initProjectPeeks()');
  return { preview, images, alternate, button, settled, early };
}

test('preview supports hover, explicit touch/keyboard selection, and live reduced motion', () => {
  const s = setup(); const p = peek(s);
  p.images.emit('pointerenter', { pointerType: 'mouse' });
  assert.equal(p.preview.classList.contains('is-alternate'), true);
  p.images.emit('pointerleave');
  assert.equal(p.preview.classList.contains('is-alternate'), false);
  s.setFine(false);
  p.images.emit('pointerenter', { pointerType: 'touch' });
  assert.equal(p.preview.classList.contains('is-alternate'), false);
  p.button.emit('click');
  assert.equal(p.button['aria-pressed'], 'true');
  s.motion.matches = true; s.motion.emit('change');
  assert.equal(p.preview.classList.contains('is-alternate'), true);
  assert.equal(p.settled.hidden, true);
  p.button.emit('click');
  assert.equal(p.preview.classList.contains('is-alternate'), false);
});

test('missing alternate image disables its control and keeps original visible', () => {
  const s = setup(); const p = peek(s);
  p.button.emit('click'); p.alternate.emit('error');
  assert.equal(p.button.hidden, true);
  assert.equal(p.preview.classList.contains('is-alternate'), false);
  assert.equal(p.settled.hidden, false);
});

test('ambient motion pauses outside viewport, in hidden tab, and with reduced motion', () => {
  const s = setup(); const hero = element(); s.one.set('.hero', hero); s.run('initAmbientMotion()');
  s.observers[0].cb([{ isIntersecting: true }]);
  assert.equal(hero.classList.contains('ambient-running'), true);
  s.document.hidden = true; s.document.emit('visibilitychange');
  assert.equal(hero.classList.contains('ambient-running'), false);
  s.document.hidden = false; s.document.emit('visibilitychange');
  assert.equal(hero.classList.contains('ambient-running'), true);
  s.observers[0].cb([{ isIntersecting: false }]);
  assert.equal(hero.classList.contains('ambient-running'), false);
  s.motion.matches = true; s.motion.emit('change');
  s.observers[0].cb([{ isIntersecting: true }]);
  assert.equal(hero.classList.contains('ambient-running'), false);
});

test('reveal delays are bounded, keyboard focus reveals immediately, preference changes clear timers', () => {
  const s = setup(); const blocks = Array.from({ length: 10 }, element); s.many.set('.reveal', blocks); s.run('revealOnScroll()');
  s.observers[0].cb(blocks.map((target, i) => ({ target, isIntersecting: true, boundingClientRect: { top: i * 20 } })));
  assert.ok(Math.max(...[...s.timers.values()].map(t => t.delay)) <= 195);
  s.document.emit('focusin', { target: { closest: () => blocks[9] } });
  assert.equal(blocks[9].classList.contains('in'), true);
  s.motion.matches = true; s.motion.emit('change');
  assert.equal(s.timers.size, 0);
  assert.ok(blocks.every(b => b.classList.contains('in')));
});

test('spotlight batches pointer events and cancels pending motion', () => {
  const s = setup(); const card = element(); s.many.set('.card', [card]); s.run('initCardSpotlight()');
  for (let i = 0; i < 20; i++) card.emit('pointermove', { clientX: 100 + i, clientY: 50, pointerType: 'mouse' });
  assert.equal(s.timers.size, 1);
  [...s.timers.values()][0].f(); s.timers.clear();
  assert.equal(card.style['--mx'], '39px');
  assert.equal(card.classList.contains('spotlight-on'), true);
  s.motion.matches = true; s.motion.emit('change');
  assert.equal(card.classList.contains('spotlight-on'), false);
  card.emit('pointermove', { pointerType: 'mouse' });
  assert.equal(s.timers.size, 0);
});

test('all markup translations exist in ru/tg/en and IDs are unique', () => {
  const s = setup(); const html = fs.readFileSync(base + 'index.html', 'utf8');
  const keys = [...html.matchAll(/data-i18n="([^"]+)"/g)].map(m => m[1]);
  for (const lang of ['ru', 'tg', 'en']) for (const key of keys) assert.ok(s.run(`translations[${JSON.stringify(lang)}][${JSON.stringify(key)}]`), `${lang}:${key}`);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(new Set(ids).size, ids.length);
  for (const src of [...html.matchAll(/(?:src|href)="([^"#]+)"/g)].map(m => m[1])) {
    if (/^(https?:|data:|mailto:)/.test(src)) continue;
    assert.ok(fs.existsSync(base + src.split('?')[0]), src);
  }
});
