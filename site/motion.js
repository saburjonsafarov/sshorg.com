// Page-wide motion outside the 3D story: tilting cards, a scroll-lit manifesto and a
// KMP scheme that draws itself. Plain script, no build; everything respects
// prefers-reduced-motion and does no work off screen.
(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

  /* ─── 3D tilt cards ─── */
  const MAX_TILT = 7;
  function initTilt(card) {
    const state = { x: 0, y: 0, tx: 0, ty: 0, frame: 0, active: false };
    const render = () => {
      state.frame = 0;
      state.x += (state.tx - state.x) * 0.18;
      state.y += (state.ty - state.y) * 0.18;
      const settled = Math.abs(state.tx - state.x) < 0.01 && Math.abs(state.ty - state.y) < 0.01;
      if (!state.active && settled) {
        card.style.transform = '';
        card.style.boxShadow = '';
        card.classList.remove('is-tilting');
        return;
      }
      card.style.transform = `perspective(1000px) rotateX(${state.x.toFixed(2)}deg) rotateY(${state.y.toFixed(2)}deg) translateY(-4px)`;
      card.style.boxShadow = `${(-state.y * 1.4).toFixed(1)}px ${(14 + state.x * 1.4).toFixed(1)}px 36px rgba(0, 0, 0, 0.12)`;
      if (!settled) state.frame = requestAnimationFrame(render);
    };
    const kick = () => {
      if (!state.frame) state.frame = requestAnimationFrame(render);
    };
    card.addEventListener('pointermove', (event) => {
      if (event.pointerType !== 'mouse' || reduce.matches || !fine.matches) return;
      if (card.classList.contains('reveal') && !card.classList.contains('in')) return;
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      // Big cards tilt less: the same angle reads as a skew on a wide surface.
      const max = MAX_TILT * Math.min(1, 440 / Math.max(rect.width, rect.height));
      state.active = true;
      state.tx = -py * max * 2;
      state.ty = px * max * 2;
      card.classList.add('is-tilting');
      kick();
    });
    const release = () => {
      state.active = false;
      state.tx = 0;
      state.ty = 0;
      kick();
    };
    card.addEventListener('pointerleave', release);
    card.addEventListener('pointercancel', release);
  }

  /* ─── Manifesto: words light up as the line crosses the screen ─── */
  function initManifesto(el) {
    let words = [];
    let splitting = false;
    const split = () => {
      splitting = true;
      const text = el.textContent.replace(/\s+/g, ' ').trim();
      el.textContent = '';
      words = text.split(' ').map((word, i, all) => {
        const span = document.createElement('span');
        span.className = 'motion-word';
        span.textContent = word;
        el.append(span);
        if (i < all.length - 1) el.append(' ');
        return span;
      });
      el.classList.add('is-split');
      splitting = false;
      update();
    };
    const update = () => {
      if (!words.length) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the line enters the lower part of the screen, 1 by the time it reaches the upper third.
      const p = reduce.matches ? 1 : clamp((vh * 0.88 - rect.top) / (vh * 0.55));
      const lit = p * words.length;
      words.forEach((word, i) => word.style.setProperty('--lit', clamp(lit - i).toFixed(3)));
    };
    // app.js rewrites the text on language changes: split again.
    new MutationObserver(() => {
      if (!splitting && !el.querySelector('.motion-word')) split();
    }).observe(el, { childList: true, characterData: true, subtree: true });
    split();
    return update;
  }

  /* ─── KMP scheme: connectors draw down, platforms arrive in turn ─── */
  function initScheme(el) {
    return () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = reduce.matches ? 1 : clamp((vh * 0.92 - rect.top) / (vh * 0.5));
      el.style.setProperty('--draw', p.toFixed(3));
    };
  }

  function init() {
    document.documentElement.classList.add('motion-ready');
    document.querySelectorAll('.card').forEach(initTilt);
    const updaters = [
      ...Array.from(document.querySelectorAll('.statement-text')).map(initManifesto),
      ...Array.from(document.querySelectorAll('.kmp-scheme')).map(initScheme),
    ];
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        updaters.forEach((update) => update());
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    reduce.addEventListener('change', onScroll);
    onScroll();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
