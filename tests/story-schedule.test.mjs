import assert from 'node:assert/strict';
import { test } from 'node:test';
import { activeShot, COPY, copyOpacity, EFFECTS, effectsAt, EXPLORE, exploreAt, MOVES, pushAt, railAt, SHOTS, STORY_END } from '../src/story3d/schedule.js';

const samples = Array.from({ length: 4001 }, (_, i) => i / 4000);

test('the intro is readable on load and the final caption stays at the end', () => {
  assert.equal(copyOpacity(0, 0), 1);
  assert.equal(copyOpacity(1, COPY.length - 1), 1);
  assert.equal(railAt(0), 0);
  assert.equal(railAt(1), SHOTS.length - 1);
});

test('at most one text block is readable at any scroll position', () => {
  for (const p of samples) {
    const visible = COPY.map((_, i) => copyOpacity(p, i)).filter((o) => o > 0.05);
    assert.ok(visible.length <= 1, `p=${p}: ${visible.length} blocks visible`);
  }
});

test('text is only fully shown while the camera holds on its own shot', () => {
  for (const p of samples) {
    COPY.forEach((_, i) => {
      if (copyOpacity(p, i) > 0.5) assert.equal(railAt(p), i, `p=${p}: copy ${i} over a moving camera`);
    });
  }
});

test('the camera rail only moves forward and every shot gets a hold', () => {
  let previous = 0;
  for (const p of samples) {
    const rail = railAt(p);
    assert.ok(rail >= previous - 1e-12, `rail went back at p=${p}`);
    previous = rail;
  }
  MOVES.forEach((move, i) => {
    assert.ok(move.start < move.end);
    if (i > 0) assert.ok(MOVES[i - 1].end < move.start, 'moves overlap');
  });
  for (let shot = 0; shot < SHOTS.length; shot += 1) {
    assert.ok(samples.some((p) => activeShot(p) === shot && Number.isInteger(railAt(p))), `shot ${shot} never holds`);
  }
});

test('the laptop is open and lit before its chapter text is fully shown', () => {
  for (const p of samples) {
    if (copyOpacity(p, 1) > 0.99) {
      const fx = effectsAt(p);
      assert.ok(fx.lid > 0.99 && fx.power > 0.99, `p=${p}: lid ${fx.lid}, power ${fx.power}`);
    }
  }
});

test('effects stay within 0..1 and windows are well formed', () => {
  Object.values(EFFECTS).forEach(([start, end]) => assert.ok(start >= 0 && end <= 1 && start < end));
  for (const p of samples) {
    Object.entries(effectsAt(p)).forEach(([name, value]) => assert.ok(value >= 0 && value <= 1, `${name}=${value} at p=${p}`));
  }
});

test('the hold push-in is continuous, bounded and only grows while the camera holds', () => {
  let previous = pushAt(0);
  for (const p of samples) {
    const push = pushAt(p);
    assert.ok(push >= 0 && push <= 1, `push ${push} at p=${p}`);
    assert.ok(Math.abs(push - previous) < 0.02, `push jumps at p=${p}`);
    if (push > previous + 1e-3) assert.ok(Number.isInteger(railAt(p)), `push grows during a flight at p=${p}`);
    previous = push;
  }
  MOVES.forEach((move) => {
    assert.equal(pushAt(move.end), 0, 'a new hold starts without push');
    assert.ok(pushAt(move.start) > 0.99, 'the hold ends fully pushed');
  });
});

test('the viewer opens only after the story has settled on its final caption', () => {
  const [, captionIn] = COPY[COPY.length - 1];
  assert.ok(captionIn <= STORY_END, 'final caption must be in before the viewer');
  assert.ok(MOVES[MOVES.length - 1].end <= STORY_END, 'last flight must land before the viewer');
  assert.equal(exploreAt(STORY_END - 0.001), 0);
  assert.equal(exploreAt(EXPLORE[1]), 1);
  assert.equal(railAt(STORY_END), SHOTS.length - 1);
  // Story pacing is unchanged: three screens of scroll before the viewer.
  assert.ok(Math.abs(STORY_END - 3 / 3.8) < 1e-12);
});
