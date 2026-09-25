// Scroll choreography as plain data. Progress p runs 0..1 across the pinned section:
// the story takes the first STORY_END of it (3 screens of scroll, as before) and the
// rest is the "closer look" viewer. Windows below are written in story units (0..1)
// and scaled into section progress.
// Camera shots are visited in order; each text block owns a window that never
// overlaps its neighbours, so at most one block is readable during any flight.

export const STORY_SCREENS = 3;
export const EXPLORE_SCREENS = 0.8;
export const STORY_END = STORY_SCREENS / (STORY_SCREENS + EXPLORE_SCREENS);
const scale = (v) => Math.round(v * STORY_END * 1e6) / 1e6;

export const SHOTS = ['intro', 'build', 'ship', 'connect', 'operate', 'final'];

// Camera flights between consecutive shots: rail value moves from `to - 1` to `to`.
const STORY_MOVES = [
  { to: 1, start: 0.05, end: 0.17 },
  { to: 2, start: 0.29, end: 0.39 },
  { to: 3, start: 0.5, end: 0.6 },
  { to: 4, start: 0.71, end: 0.8 },
  { to: 5, start: 0.895, end: 0.965 },
];
export const MOVES = STORY_MOVES.map(({ to, start, end }) => ({ to, start: scale(start), end: scale(end) }));

// Text blocks: [fade-in start, fade-in end, fade-out start, fade-out end].
// Block 0 is the hero intro and is fully visible on load; the last block is the
// final caption and stays on screen through the viewer (index.js hides it while a
// feature is open).
const STORY_COPY = [
  [0, 0, 0.03, 0.06],
  [0.17, 0.2, 0.27, 0.3],
  [0.38, 0.41, 0.48, 0.51],
  [0.59, 0.62, 0.69, 0.72],
  [0.79, 0.82, 0.875, 0.9],
  [0.955, 0.985, 1, 1],
];
export const COPY = STORY_COPY.map((w, i) => (i === STORY_COPY.length - 1 ? [scale(w[0]), scale(w[1]), 1, 1] : w.map(scale)));

// Scene effects driven by progress windows [start, end].
const STORY_EFFECTS = {
  lid: [0.07, 0.185],
  power: [0.14, 0.19],
  typing: [0.18, 0.3],
  links: [0.57, 0.7],
  trails: [0.9, 0.99],
  pipeline: [0.78, 0.9],
  cue: [0, 0.025],
};
export const EFFECTS = Object.fromEntries(Object.entries(STORY_EFFECTS).map(([name, [a, b]]) => [name, [scale(a), scale(b)]]));

// The viewer fades in once the story has settled on its final shot.
export const EXPLORE = [STORY_END, Math.round((STORY_END + 0.035) * 1e6) / 1e6];
export const exploreAt = (p) => smoothstep(windowProgress(p, EXPLORE));

export const clamp01 = (value) => Math.min(1, Math.max(0, value));

export const smoothstep = (value) => {
  const t = clamp01(value);
  return t * t * (3 - 2 * t);
};

export const easeInOutCubic = (value) => {
  const t = clamp01(value);
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

export const windowProgress = (p, [start, end]) => (end <= start ? (p >= end ? 1 : 0) : clamp01((p - start) / (end - start)));

// Continuous rail position 0..SHOTS.length - 1 with eased flights and still holds.
export function railAt(p) {
  let rail = 0;
  for (const move of MOVES) {
    if (p >= move.end) {
      rail = move.to;
    } else if (p > move.start) {
      return move.to - 1 + easeInOutCubic((p - move.start) / (move.end - move.start));
    } else {
      break;
    }
  }
  return rail;
}

export function copyOpacity(p, index) {
  const [inStart, inEnd, outStart, outEnd] = COPY[index];
  const fadeIn = inEnd <= inStart ? (p >= inStart ? 1 : 0) : smoothstep((p - inStart) / (inEnd - inStart));
  const fadeOut = outEnd <= outStart ? (p >= outEnd && outEnd < 1 ? 0 : 1) : 1 - smoothstep((p - outStart) / (outEnd - outStart));
  return Math.min(fadeIn, fadeOut);
}

export function effectsAt(p) {
  return {
    lid: easeInOutCubic(windowProgress(p, EFFECTS.lid)),
    power: smoothstep(windowProgress(p, EFFECTS.power)),
    typing: windowProgress(p, EFFECTS.typing),
    links: easeInOutCubic(windowProgress(p, EFFECTS.links)),
    trails: easeInOutCubic(windowProgress(p, EFFECTS.trails)),
    pipeline: windowProgress(p, EFFECTS.pipeline),
    cue: 1 - windowProgress(p, EFFECTS.cue),
  };
}

// Slow camera push while a chapter holds: rises 0→1 across the hold, then eases back
// to 0 during the next flight, so the camera path stays continuous.
export function pushAt(p) {
  const holds = [[0, MOVES[0].start]];
  for (let i = 0; i < MOVES.length; i += 1) holds.push([MOVES[i].end, i + 1 < MOVES.length ? MOVES[i + 1].start : STORY_END]);
  for (let i = 0; i < holds.length; i += 1) {
    const [start, end] = holds[i];
    if (p >= start && p <= end) return smoothstep((p - start) / (end - start));
    if (i === holds.length - 1 && p > end) return 1;
    const move = MOVES[i];
    if (move && p > move.start && p < move.end) return 1 - easeInOutCubic((p - move.start) / (move.end - move.start));
  }
  return 0;
}

// Index of the chapter whose shot the camera is closest to (for the progress rail).
export const activeShot = (p) => Math.round(railAt(p));
