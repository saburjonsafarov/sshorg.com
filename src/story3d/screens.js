// Screen UIs drawn into 2D canvases. They are demo interfaces: no real data,
// no bank screens. Each screen redraws only when its quantised state changes.

const SANS = '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
const MONO = 'ui-monospace, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace';

const C = {
  bg: '#0b0d12',
  panel: '#11141b',
  panel2: '#161a23',
  line: 'rgba(255,255,255,0.07)',
  ink: '#e8eaef',
  muted: '#8a90a0',
  faint: '#5a6070',
  accent: '#3d9bff',
  green: '#3fcf8e',
  kw: '#cf8e6d',
  fn: '#56a8f5',
  str: '#6aab73',
  cm: '#7a7e85',
  prop: '#c77dbb',
  type: '#bcbec4',
};

export function rr(ctx, x, y, w, h, r) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

function font(ctx, size, weight = 400, family = SANS) {
  ctx.font = `${weight} ${size}px ${family}`;
}

function check(ctx, x, y, size, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 0.16;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.beginPath();
  ctx.moveTo(x - size * 0.32, y);
  ctx.lineTo(x - size * 0.08, y + size * 0.24);
  ctx.lineTo(x + size * 0.34, y - size * 0.24);
  ctx.stroke();
  ctx.restore();
}

function makeCanvas(width, height) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

function screen(width, height, paint) {
  const canvas = makeCanvas(width, height);
  const ctx = canvas.getContext('2d');
  let key = '';
  return {
    canvas,
    // Returns true when pixels changed and the GPU texture needs an upload.
    draw(state) {
      const next = JSON.stringify(state);
      if (next === key) return false;
      key = next;
      ctx.save();
      paint(ctx, width, height, state);
      ctx.restore();
      return true;
    },
  };
}

/* ─── Laptop: Kotlin Multiplatform IDE ─── */

const CODE = [
  [['package ', 'kw'], ['org.sshorg.shared', 'type']],
  [],
  [['interface ', 'kw'], ['Product', 'type'], [' {', 'type']],
  [['    val ', 'kw'], ['platform', 'prop'], [': Platform', 'type']],
  [['    fun ', 'kw'], ['render', 'fn'], ['(): Screen', 'type']],
  [['}', 'type']],
  [],
  [['fun ', 'kw'], ['build', 'fn'], ['() = ', 'type'], ['product', 'fn'], [' {', 'type']],
  [['    ', 'type'], ['android', 'fn'], ['()', 'type']],
  [['    ', 'type'], ['ios', 'fn'], ['()', 'type']],
  [['    ', 'type'], ['desktop', 'fn'], ['()', 'type']],
  [['    ', 'type'], ['web', 'fn'], ['()', 'type']],
  [['}', 'type']],
  [],
  [['// one idea · many surfaces', 'cm']],
  [['val ', 'kw'], ['future', 'prop'], [' = ', 'type'], ['"shared"', 'str']],
];
const CODE_CHARS = CODE.reduce((sum, line) => sum + line.reduce((n, [text]) => n + text.length, 0) + 1, 0);

const TREE = [
  [0, 'sshorg', 'dir'],
  [1, 'shared', 'dir'],
  [2, 'commonMain', 'dir'],
  [3, 'Product.kt', 'kt', true],
  [3, 'Platform.kt', 'kt'],
  [2, 'androidMain', 'dir-closed'],
  [2, 'iosMain', 'dir-closed'],
  [1, 'androidApp', 'dir-closed'],
  [1, 'iosApp', 'dir-closed'],
  [1, 'desktopApp', 'dir-closed'],
  [1, 'build.gradle.kts', 'gradle'],
];

export function createIdeScreen() {
  return screen(1600, 1032, (ctx, W, H, { typing, caret }) => {
    ctx.fillStyle = C.bg;
    ctx.fillRect(0, 0, W, H);

    // Title bar
    ctx.fillStyle = '#12151c';
    ctx.fillRect(0, 0, W, 58);
    ['#ff5f57', '#febc2e', '#28c840'].forEach((color, i) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(32 + i * 26, 29, 7.5, 0, Math.PI * 2);
      ctx.fill();
    });
    font(ctx, 19, 500);
    ctx.fillStyle = C.muted;
    ctx.textAlign = 'center';
    ctx.fillText('sshorg — shared/src/commonMain/kotlin/Product.kt', W / 2, 36);
    ctx.textAlign = 'left';
    ctx.fillStyle = C.line;
    ctx.fillRect(0, 58, W, 1);

    // Sidebar
    const side = 310;
    ctx.fillStyle = '#0e1117';
    ctx.fillRect(0, 59, side, H - 59 - 38);
    font(ctx, 14, 700);
    ctx.fillStyle = C.faint;
    ctx.fillText('PROJECT', 28, 98);
    TREE.forEach(([depth, name, kind, active], i) => {
      const y = 140 + i * 40;
      if (active) {
        ctx.fillStyle = 'rgba(61,155,255,0.16)';
        rr(ctx, 12, y - 26, side - 24, 36, 8);
        ctx.fill();
      }
      const x = 28 + depth * 22;
      ctx.fillStyle = kind.startsWith('dir') ? '#7f8aa3' : kind === 'kt' ? '#a97bff' : '#5fb3a1';
      rr(ctx, x, y - 16, 16, 14, 3);
      ctx.fill();
      font(ctx, 18, active ? 600 : 400);
      ctx.fillStyle = active ? C.ink : '#aeb4c2';
      ctx.fillText(name, x + 26, y - 3);
    });
    ctx.fillStyle = C.line;
    ctx.fillRect(side, 59, 1, H - 59 - 38);

    // Tabs
    const edX = side + 1;
    const panelW = 360;
    const edW = W - edX - panelW;
    ctx.fillStyle = '#0e1117';
    ctx.fillRect(edX, 59, edW, 50);
    ctx.fillStyle = C.bg;
    ctx.fillRect(edX, 59, 200, 50);
    ctx.fillStyle = C.accent;
    ctx.fillRect(edX, 59, 200, 3);
    font(ctx, 18, 500);
    ctx.fillStyle = C.ink;
    ctx.fillText('Product.kt', edX + 26, 91);
    ctx.fillStyle = C.muted;
    ctx.fillText('Platform.kt', edX + 226, 91);
    ctx.fillStyle = C.line;
    ctx.fillRect(edX, 109, edW, 1);

    // Code with typing reveal
    let budget = Math.floor(typing * CODE_CHARS);
    let caretPos = null;
    const lineH = 44;
    font(ctx, 23, 400, MONO);
    const charW = ctx.measureText('M').width;
    CODE.forEach((line, row) => {
      const y = 160 + row * lineH;
      ctx.fillStyle = C.faint;
      ctx.textAlign = 'right';
      ctx.fillText(String(row + 1), edX + 60, y);
      ctx.textAlign = 'left';
      let x = edX + 92;
      for (const [text, style] of line) {
        if (budget <= 0) break;
        const shown = text.slice(0, budget);
        budget -= shown.length;
        ctx.fillStyle = C[style];
        ctx.fillText(shown, x, y);
        x += shown.length * charW;
      }
      if (budget > 0) budget -= 1;
      else if (caretPos === null) caretPos = [x, y];
    });
    if (caretPos && caret) {
      ctx.fillStyle = C.accent;
      ctx.fillRect(caretPos[0] + 1, caretPos[1] - 22, 3, 28);
    }

    // Targets panel
    const px = W - panelW;
    ctx.fillStyle = '#0e1117';
    ctx.fillRect(px, 59, panelW, H - 59 - 38);
    ctx.fillStyle = C.line;
    ctx.fillRect(px, 59, 1, H - 59 - 38);
    font(ctx, 14, 700);
    ctx.fillStyle = C.faint;
    ctx.fillText('TARGETS', px + 28, 98);
    ['Android', 'iOS', 'Desktop', 'Web'].forEach((name, i) => {
      const y = 132 + i * 74;
      const done = typing > 0.55 + i * 0.1;
      ctx.fillStyle = C.panel2;
      rr(ctx, px + 20, y, panelW - 40, 58, 12);
      ctx.fill();
      font(ctx, 20, 600);
      ctx.fillStyle = C.ink;
      ctx.fillText(name, px + 44, y + 37);
      if (done) {
        ctx.fillStyle = 'rgba(63,207,142,0.16)';
        ctx.beginPath();
        ctx.arc(px + panelW - 62, y + 29, 16, 0, Math.PI * 2);
        ctx.fill();
        check(ctx, px + panelW - 62, y + 29, 18, C.green);
      } else {
        ctx.strokeStyle = C.faint;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(px + panelW - 62, y + 29, 10, 0, Math.PI * 2);
        ctx.stroke();
      }
    });
    font(ctx, 14, 700);
    ctx.fillStyle = C.faint;
    ctx.fillText('BUILD', px + 28, 460);
    ctx.fillStyle = C.panel2;
    rr(ctx, px + 28, 478, panelW - 56, 10, 5);
    ctx.fill();
    ctx.fillStyle = typing >= 1 ? C.green : C.accent;
    rr(ctx, px + 28, 478, Math.max(10, (panelW - 56) * typing), 10, 5);
    ctx.fill();
    font(ctx, 17, 500);
    ctx.fillStyle = C.muted;
    ctx.fillText(typing >= 1 ? 'All targets up to date' : 'Compiling shared module…', px + 28, 520);

    // Status bar
    ctx.fillStyle = '#12151c';
    ctx.fillRect(0, H - 38, W, 38);
    font(ctx, 16, 500);
    ctx.fillStyle = C.muted;
    ctx.fillText('main', 28, H - 13);
    ctx.fillText('Kotlin Multiplatform', 110, H - 13);
    ctx.textAlign = 'right';
    ctx.fillText('UTF-8   LF   4 spaces', W - 28, H - 13);
    ctx.textAlign = 'left';
  });
}

/* ─── Phone: product demo ─── */

// reveal 0..1: the chart draws itself and the feature cards slide in as the camera arrives.
export function createPhoneScreen() {
  return screen(700, 1472, (ctx, W, H, { reveal = 1 }) => {
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, '#0d1018');
    g.addColorStop(1, '#0a0c12');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);

    // Status bar + island
    font(ctx, 30, 600);
    ctx.fillStyle = C.ink;
    ctx.fillText('9:41', 64, 72);
    [0, 1, 2, 3].forEach((i) => {
      ctx.fillRect(W - 170 + i * 12, 70 - (i + 1) * 6, 8, (i + 1) * 6);
    });
    rr(ctx, W - 104, 50, 50, 24, 7);
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = C.ink;
    ctx.stroke();
    rr(ctx, W - 100, 54, 36, 16, 4);
    ctx.fill();
    ctx.fillStyle = '#000';
    rr(ctx, W / 2 - 96, 30, 192, 56, 28);
    ctx.fill();

    // Header
    font(ctx, 26, 500);
    ctx.fillStyle = C.muted;
    ctx.fillText('Good evening', 52, 176);
    font(ctx, 58, 700);
    ctx.fillStyle = C.ink;
    ctx.fillText('Your product', 52, 244);
    ctx.fillStyle = 'rgba(61,155,255,0.16)';
    rr(ctx, W - 164, 146, 112, 42, 21);
    ctx.fill();
    font(ctx, 20, 700);
    ctx.fillStyle = C.accent;
    ctx.textAlign = 'center';
    ctx.fillText('DEMO', W - 108, 174);
    ctx.textAlign = 'left';

    // Hero card with a smooth chart
    const cx = 40;
    const cy = 290;
    const cw = W - 80;
    const ch = 380;
    const cg = ctx.createLinearGradient(cx, cy, cx + cw, cy + ch);
    cg.addColorStop(0, '#1c2c4d');
    cg.addColorStop(1, '#121a2c');
    ctx.fillStyle = cg;
    rr(ctx, cx, cy, cw, ch, 40);
    ctx.fill();
    font(ctx, 24, 500);
    ctx.fillStyle = '#a9b6d3';
    ctx.fillText('Weekly activity', cx + 36, cy + 62);
    font(ctx, 64, 700);
    ctx.fillStyle = C.ink;
    ctx.fillText('Growing', cx + 36, cy + 140);
    const pts = [0.62, 0.55, 0.6, 0.44, 0.48, 0.34, 0.38, 0.22, 0.26, 0.14];
    const chartY = cy + 180;
    const chartH = 160;
    const drawn = Math.min(1, reveal * 1.25);
    ctx.save();
    ctx.beginPath();
    ctx.rect(cx, cy, 36 + (cw - 72) * drawn + 6, ch);
    ctx.clip();
    ctx.beginPath();
    pts.forEach((v, i) => {
      const x = cx + 36 + (i / (pts.length - 1)) * (cw - 72);
      const y = chartY + v * chartH;
      if (i === 0) ctx.moveTo(x, y);
      else {
        const px = cx + 36 + ((i - 1) / (pts.length - 1)) * (cw - 72);
        const py = chartY + pts[i - 1] * chartH;
        ctx.bezierCurveTo((px + x) / 2, py, (px + x) / 2, y, x, y);
      }
    });
    ctx.strokeStyle = '#6fb6ff';
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.lineTo(cx + cw - 36, chartY + chartH);
    ctx.lineTo(cx + 36, chartY + chartH);
    ctx.closePath();
    const fill = ctx.createLinearGradient(0, chartY, 0, chartY + chartH);
    fill.addColorStop(0, 'rgba(111,182,255,0.35)');
    fill.addColorStop(1, 'rgba(111,182,255,0)');
    ctx.fillStyle = fill;
    ctx.fill();
    ctx.restore();

    // Feature rows
    const rows = [
      ['Compose UI', 'Native feel on Android & iOS', '#3d9bff'],
      ['Shared domain', 'One Kotlin core', '#a97bff'],
      ['Realtime', 'Synced across devices', '#3fcf8e'],
    ];
    rows.forEach(([title, sub, color], i) => {
      const k = Math.min(1, Math.max(0, (reveal * 1.5 - 0.3 - i * 0.18) / 0.3));
      if (k <= 0) return;
      ctx.save();
      ctx.globalAlpha = k;
      ctx.translate(0, (1 - k) * 44);
      const y = 712 + i * 162;
      ctx.fillStyle = C.panel2;
      rr(ctx, 40, y, W - 80, 140, 32);
      ctx.fill();
      ctx.fillStyle = color;
      ctx.globalAlpha = 0.18 * k;
      ctx.beginPath();
      ctx.arc(116, y + 70, 38, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalAlpha = k;
      ctx.beginPath();
      ctx.arc(116, y + 70, 13, 0, Math.PI * 2);
      ctx.fill();
      font(ctx, 32, 650);
      ctx.fillStyle = C.ink;
      ctx.fillText(title, 180, y + 62);
      font(ctx, 24, 400);
      ctx.fillStyle = C.muted;
      ctx.fillText(sub, 180, y + 100);
      ctx.strokeStyle = C.faint;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(W - 92, y + 56);
      ctx.lineTo(W - 78, y + 70);
      ctx.lineTo(W - 92, y + 84);
      ctx.stroke();
      ctx.restore();
    });

    // Tab bar + home indicator
    ctx.fillStyle = '#10131a';
    ctx.fillRect(0, H - 170, W, 170);
    ctx.fillStyle = C.line;
    ctx.fillRect(0, H - 170, W, 2);
    [0, 1, 2, 3].forEach((i) => {
      const x = 100 + i * ((W - 200) / 3);
      ctx.fillStyle = i === 0 ? C.accent : '#4a5060';
      rr(ctx, x - 22, H - 132, 44, 44, 12);
      ctx.fill();
    });
    ctx.fillStyle = '#d7dae2';
    rr(ctx, W / 2 - 110, H - 34, 220, 10, 5);
    ctx.fill();
  });
}

/* ─── Tablet: architecture graph ─── */

const NODES = [
  { id: 'shared', label: 'shared · KMP', x: 0.5, y: 0.54, main: true },
  { id: 'android', label: 'Android', x: 0.2, y: 0.33, color: '#3fcf8e' },
  { id: 'ios', label: 'iOS', x: 0.8, y: 0.33, color: '#e8eaef' },
  { id: 'desktop', label: 'Desktop', x: 0.17, y: 0.8, color: '#a97bff' },
  { id: 'web', label: 'Web', x: 0.83, y: 0.8, color: '#f0b35a' },
  { id: 'ai', label: 'AI agents', x: 0.5, y: 0.2, color: '#ff7eb6' },
  { id: 'ci', label: 'CI/CD', x: 0.5, y: 0.9, color: '#3d9bff' },
];

export function createGraphScreen() {
  return screen(1480, 1050, (ctx, W, H, { links }) => {
    ctx.fillStyle = C.bg;
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = 'rgba(255,255,255,0.05)';
    for (let x = 30; x < W; x += 40) for (let y = 120; y < H; y += 40) ctx.fillRect(x, y, 2, 2);

    font(ctx, 26, 650);
    ctx.fillStyle = C.ink;
    ctx.fillText('Architecture', 48, 70);
    font(ctx, 20, 400);
    ctx.fillStyle = C.muted;
    ctx.fillText('compose-graph · one shared core', 230, 70);
    ctx.fillStyle = 'rgba(63,207,142,0.14)';
    rr(ctx, W - 150, 42, 102, 40, 20);
    ctx.fill();
    ctx.fillStyle = C.green;
    ctx.beginPath();
    ctx.arc(W - 124, 62, 6, 0, Math.PI * 2);
    ctx.fill();
    font(ctx, 18, 700);
    ctx.fillText('LIVE', W - 108, 69);

    const hub = NODES[0];
    const hx = hub.x * W;
    const hy = hub.y * H;
    NODES.slice(1).forEach((node, i) => {
      const t = Math.min(1, Math.max(0, links * 1.4 - i * 0.08));
      if (t <= 0) return;
      const nx = node.x * W;
      const ny = node.y * H;
      const grad = ctx.createLinearGradient(hx, hy, nx, ny);
      grad.addColorStop(0, 'rgba(61,155,255,0.9)');
      grad.addColorStop(1, node.color);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(hx, hy);
      ctx.lineTo(hx + (nx - hx) * t, hy + (ny - hy) * t);
      ctx.stroke();
    });

    NODES.forEach((node, i) => {
      const x = node.x * W;
      const y = node.y * H;
      const lit = node.main || links * 1.4 - (i - 1) * 0.08 >= 1;
      font(ctx, node.main ? 30 : 24, 650);
      const w = ctx.measureText(node.label).width + (node.main ? 84 : 64);
      const h = node.main ? 84 : 64;
      ctx.fillStyle = node.main ? '#15233d' : C.panel2;
      rr(ctx, x - w / 2, y - h / 2, w, h, h / 2);
      ctx.fill();
      ctx.strokeStyle = node.main ? C.accent : lit ? node.color : 'rgba(255,255,255,0.12)';
      ctx.lineWidth = node.main ? 3 : 2;
      ctx.stroke();
      ctx.fillStyle = C.ink;
      ctx.textAlign = 'center';
      ctx.fillText(node.label, x, y + (node.main ? 10 : 8));
      ctx.textAlign = 'left';
    });
  });
}

/* ─── Monitor: CI/CD pipeline ─── */

const STAGES = ['Code', 'Test', 'Review', 'Deploy', 'Live'];
const CHECKS = ['Unit tests', 'UI tests', 'Lint & detekt', 'AI code review'];
const LOG = [
  '$ ./gradlew check',
  '> Task :shared:allTests',
  '> Task :androidApp:lint',
  'BUILD SUCCESSFUL',
  'deploy → production',
  'release is live ✓',
];

export function createPipelineScreen() {
  return screen(1680, 960, (ctx, W, H, { pipeline, pulse }) => {
    ctx.fillStyle = C.bg;
    ctx.fillRect(0, 0, W, H);

    font(ctx, 30, 700);
    ctx.fillStyle = C.ink;
    ctx.fillText('release / production', 56, 82);
    ctx.fillStyle = C.panel2;
    rr(ctx, 380, 52, 110, 42, 21);
    ctx.fill();
    font(ctx, 20, 600, MONO);
    ctx.fillStyle = C.muted;
    ctx.fillText('main', 408, 80);
    const done = pipeline >= 1;
    ctx.fillStyle = done ? 'rgba(63,207,142,0.14)' : 'rgba(61,155,255,0.14)';
    rr(ctx, W - 230, 52, 174, 42, 21);
    ctx.fill();
    font(ctx, 19, 700);
    ctx.fillStyle = done ? C.green : C.accent;
    ctx.textAlign = 'center';
    ctx.fillText(done ? 'PASSED' : 'RUNNING', W - 143, 80);
    ctx.textAlign = 'left';

    // Stage rail
    const y = 230;
    const x0 = 140;
    const x1 = W - 140;
    const step = (x1 - x0) / (STAGES.length - 1);
    ctx.strokeStyle = 'rgba(255,255,255,0.1)';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(x0, y);
    ctx.lineTo(x1, y);
    ctx.stroke();
    const reach = Math.min(1, pipeline * 1.08);
    ctx.strokeStyle = C.green;
    ctx.beginPath();
    ctx.moveTo(x0, y);
    ctx.lineTo(x0 + (x1 - x0) * reach, y);
    ctx.stroke();
    STAGES.forEach((name, i) => {
      const x = x0 + i * step;
      const passed = reach >= i / (STAGES.length - 1) - 1e-6 && (i < STAGES.length - 1 || reach >= 1);
      const running = !passed && reach >= (i - 1) / (STAGES.length - 1);
      ctx.fillStyle = passed ? C.green : running ? C.accent : '#262b36';
      ctx.beginPath();
      ctx.arc(x, y, 30, 0, Math.PI * 2);
      ctx.fill();
      if (running) {
        ctx.strokeStyle = 'rgba(61,155,255,0.35)';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(x, y, 40 + pulse * 8, 0, Math.PI * 2);
        ctx.stroke();
      }
      if (passed) check(ctx, x, y, 30, '#07140d');
      font(ctx, 24, 600);
      ctx.fillStyle = passed || running ? C.ink : C.muted;
      ctx.textAlign = 'center';
      ctx.fillText(name, x, y + 78);
      ctx.textAlign = 'left';
    });

    // Checks
    const top = 390;
    ctx.fillStyle = C.panel;
    rr(ctx, 56, top, 760, 500, 28);
    ctx.fill();
    font(ctx, 16, 700);
    ctx.fillStyle = C.faint;
    ctx.fillText('CHECKS', 92, top + 56);
    CHECKS.forEach((name, i) => {
      const cy = top + 118 + i * 90;
      const ok = pipeline > 0.2 + i * 0.12;
      font(ctx, 26, 550);
      ctx.fillStyle = C.ink;
      ctx.fillText(name, 150, cy + 9);
      if (ok) {
        ctx.fillStyle = 'rgba(63,207,142,0.16)';
        ctx.beginPath();
        ctx.arc(108, cy, 20, 0, Math.PI * 2);
        ctx.fill();
        check(ctx, 108, cy, 22, C.green);
      } else {
        ctx.strokeStyle = C.faint;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(108, cy, 13, 0, Math.PI * 2);
        ctx.stroke();
      }
    });

    // Log
    ctx.fillStyle = '#07090d';
    rr(ctx, 856, top, W - 912, 500, 28);
    ctx.fill();
    font(ctx, 16, 700);
    ctx.fillStyle = C.faint;
    ctx.fillText('LOG', 892, top + 56);
    font(ctx, 24, 400, MONO);
    const visible = Math.floor(pipeline * LOG.length + 0.001);
    LOG.slice(0, visible).forEach((line, i) => {
      ctx.fillStyle = line.startsWith('$') ? C.ink : line.includes('✓') || line.includes('SUCCESS') ? C.green : C.muted;
      ctx.fillText(line, 892, top + 118 + i * 58);
    });
  });
}
