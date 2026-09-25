// Renders the final studio shot into site/story-poster.jpg (the no-WebGL /
// reduced-motion fallback). Usage: serve site/ on :8765, then
//   node tools/render-poster.mjs
import { chromium } from 'playwright';

const url = process.env.STORY_URL || 'http://localhost:8765/?lang=en';
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 }, colorScheme: 'dark', deviceScaleFactor: 1 });
await page.goto(url, { waitUntil: 'load' });
await page.waitForFunction(() => window.__story?.mode === 'live' && window.__story.frames > 0);
// The final story shot sits at storyEnd; past it is the interactive viewer.
await page.evaluate(() => {
  const story = document.querySelector('[data-story]');
  window.scrollTo(0, story.offsetTop + (story.offsetHeight - window.innerHeight) * window.__story.storyEnd);
});
await page.waitForFunction(() => Math.abs(window.__story.progress - window.__story.storyEnd) < 0.001, null, { timeout: 15000 });
await page.waitForTimeout(800);
await page.addStyleTag({ content: '.story-copy, .story-rail, .story-cue, .story-explore, .topbar, .scroll-progress { visibility: hidden !important; }' });
// The final shot keeps its top third free for the caption; the poster drops it.
await page.screenshot({ path: 'site/story-poster.jpg', type: 'jpeg', quality: 82, clip: { x: 0, y: 300, width: 1600, height: 660 } });
await browser.close();
console.log('wrote site/story-poster.jpg');
