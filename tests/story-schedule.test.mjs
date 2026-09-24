import assert from 'node:assert/strict';
import { test } from 'node:test';
import { activeShot, COPY, copyOpacity, EFFECTS, effectsAt, MOVES, railAt, SHOTS } from '../src/story3d/schedule.js';

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
