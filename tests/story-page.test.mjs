import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { test } from 'node:test';
import { gzipSync } from 'node:zlib';
import { COPY } from '../src/story3d/schedule.js';

const html = readFileSync(new URL('../site/index.html', import.meta.url), 'utf8');
const story = html.slice(html.indexOf('<section class="hero story"'), html.indexOf('</section>', html.indexOf('<section class="hero story"')));

test('the hero is the studio story with one block per schedule entry', () => {
  assert.ok(story.includes('data-story'), 'story section missing');
  const blocks = story.match(/data-story-copy="\d+"/g) ?? [];
  assert.equal(blocks.length, COPY.length);
  assert.ok(story.includes('id="typedGreeting"'), 'typed greeting must stay for app.js');
  assert.ok(story.includes('class="story-canvas"'));
  assert.ok(story.includes('class="story-poster"'));
});

test('every chapter and the final caption are translated into ru, tg and en', () => {
  for (let i = 1; i < COPY.length; i += 1) {
    const start = story.indexOf(`data-story-copy="${i}"`);
    const end = story.indexOf('data-story-copy', start + 20);
    const block = story.slice(start, end === -1 ? undefined : end);
    for (const lang of ['ru', 'tg', 'en']) assert.ok(block.includes(`class="story-${lang}"`), `copy ${i} lacks ${lang}`);
  }
});

test('the page loads the new scene and nothing from the old one', () => {
  assert.match(html, /<link rel="stylesheet" href="story3d\.css\?v=dev">/);
  assert.match(html, /<script type="module" src="story3d\.js\?v=dev"><\/script>/);
  assert.doesNotMatch(html, /experience\.(js|css)|beyond\.html|data-tech-story/);
});

test('bundle and poster exist and the bundle stays within the 250 KB gzip budget', () => {
  const bundle = new URL('../site/story3d.js', import.meta.url);
  assert.ok(existsSync(bundle), 'run npm run build:story');
  assert.ok(existsSync(new URL('../site/story-poster.jpg', import.meta.url)));
  const gz = gzipSync(readFileSync(bundle), { level: 9 }).length;
  assert.ok(gz <= 250 * 1024, `bundle is ${Math.round(gz / 1024)} KB gzip`);
});

test('the bundle loads nothing from a CDN', () => {
  const bundle = readFileSync(new URL('../site/story3d.js', import.meta.url), 'utf8');
  assert.doesNotMatch(bundle, /https?:\/\/(cdn|unpkg|cdnjs|jsdelivr)/);
});
