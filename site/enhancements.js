function initProjectCases() {
  let graphInitialized = false;
  document.querySelectorAll('[data-case]').forEach((button) => {
    const dialog = document.getElementById(button.dataset.case);
    if (!dialog || typeof dialog.showModal !== 'function') return;
    button.hidden = false;
    button.addEventListener('click', () => {
      if (dialog.open) return;
      const from = button.closest('.card').getBoundingClientRect();
      dialog.showModal();
      dialog.scrollTop = 0;
      if (dialog.id === 'graphCase' && !graphInitialized) {
        initProjectGraph();
        graphInitialized = true;
      }
      document.documentElement.classList.add('case-is-open');
      if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && dialog.animate) {
        const to = dialog.getBoundingClientRect();
        const x = from.left + from.width / 2 - to.left - to.width / 2;
        const y = from.top + from.height / 2 - to.top - to.height / 2;
        dialog.animate([
          { opacity: 0, transform: `translate(${x}px, ${y}px) scale(${Math.min(1, from.width / to.width)}, ${Math.min(1, from.height / to.height)})` },
          { opacity: 1, transform: 'none' },
        ], { duration: 320, easing: 'cubic-bezier(.2,.8,.2,1)' });
      }
    });
    dialog.addEventListener('close', () => {
      document.documentElement.classList.remove('case-is-open');
      button.focus({ preventScroll: true });
    });
    dialog.addEventListener('click', (event) => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    });
  });
}

function initPreviewGalleries() {
  document.querySelectorAll('.preview-gallery').forEach((gallery) => {
    const strip = gallery.querySelector('.preview-strip');
    const slides = Array.from(strip.children);
    const previous = gallery.querySelector('[data-direction="-1"]');
    const next = gallery.querySelector('[data-direction="1"]');
    const index = () => Math.round(strip.scrollLeft / (strip.clientWidth || 1));
    const update = () => {
      previous.disabled = index() <= 0;
      next.disabled = index() >= slides.length - 1;
    };
    gallery.querySelectorAll('[data-direction]').forEach((button) => {
      button.addEventListener('click', () => {
        const target = Math.max(0, Math.min(slides.length - 1, index() + Number(button.dataset.direction)));
        strip.scrollTo({ left: target * strip.clientWidth, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      });
    });
    strip.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  });
}

function initIslandScrollMotion() {
  const island = document.querySelector('.mobile-island');
  if (!island) return;
  const links = island.querySelector('.island-links');
  const current = island.querySelector('.island-current');
  const label = island.querySelector('.island-current-label');
  const measure = island.querySelector('.island-current-measure');
  if (!links || !current || !label || !measure) return;
  const mobile = window.matchMedia('(max-width: 760px)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const sections = Array.from(document.querySelectorAll('.page > section[aria-labelledby], .hero'));
  const idleDelay = 360;
  let idleTimer = null;
  let framePending = false;
  let compact = false;
  let labelAnimation = null;
  let lastScrollY = window.scrollY;

  const setCompact = (next) => {
    if (next && (!mobile.matches || island.contains(document.activeElement))) return;
    if (compact === next) return;
    compact = next;
    island.classList.toggle('is-compact', next);
    links.inert = next;
    links.setAttribute('aria-hidden', String(next));
    links.querySelectorAll('a').forEach((link) => { link.tabIndex = next ? -1 : 0; });
    if (!next && document.activeElement === current) {
      if (mobile.matches) (links.querySelector('.active') || links.querySelector('a')).focus({ preventScroll: true });
      else current.blur();
    }
    current.tabIndex = next ? 0 : -1;
    current.setAttribute('aria-hidden', String(!next));
    current.setAttribute('aria-expanded', String(!next));
  };

  const updateWidth = () => {
    if (!mobile.matches) return;
    measure.textContent = label.textContent;
    const buttonStyle = window.getComputedStyle(current);
    const islandStyle = window.getComputedStyle(island);
    const spacing = [buttonStyle.paddingLeft, buttonStyle.paddingRight, islandStyle.paddingLeft, islandStyle.paddingRight, islandStyle.borderLeftWidth, islandStyle.borderRightWidth]
      .reduce((total, value) => total + (parseFloat(value) || 0), 0);
    const width = Math.max(44, Math.ceil(measure.getBoundingClientRect().width + spacing));
    island.style.setProperty('--island-compact-width', `${width}px`);
  };

  const updateLabel = () => {
    let section = sections[0];
    const atBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
    if (atBottom) section = sections[sections.length - 1];
    else sections.forEach((candidate) => {
      if (candidate.getBoundingClientRect().top <= window.innerHeight * 0.4) section = candidate;
    });
    const heading = section && document.getElementById(section.getAttribute('aria-labelledby'));
    const text = heading?.textContent.trim() || 'Saburjon';
    if (label.textContent === text) return;
    labelAnimation?.cancel();
    label.textContent = text;
    current.title = text;
    updateWidth();
    if (compact && !reducedMotion.matches && label.animate) {
      labelAnimation = label.animate([
        { opacity: 0, transform: 'translateY(6px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ], { duration: 180, easing: 'ease-out' });
    }
  };

  const expand = () => {
    window.clearTimeout(idleTimer);
    idleTimer = null;
    setCompact(false);
  };
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (Math.abs(y - lastScrollY) < 1) return;
    lastScrollY = y;
    if (!mobile.matches || document.hidden) return;
    window.clearTimeout(idleTimer);
    setCompact(true);
    idleTimer = window.setTimeout(expand, idleDelay);
    if (!framePending) {
      framePending = true;
      window.requestAnimationFrame(() => { framePending = false; updateLabel(); });
    }
  }, { passive: true });
  current.addEventListener('click', expand);
  links.addEventListener('focusin', expand);
  window.addEventListener('resize', () => { expand(); updateLabel(); updateWidth(); });
  document.addEventListener('visibilitychange', expand);
  reducedMotion.addEventListener('change', () => { labelAnimation?.cancel(); });
  new MutationObserver(updateLabel).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  updateLabel();
  updateWidth();
}

function initAmbientMotion() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  let visible = false;
  const update = () => hero.classList.toggle('ambient-running', visible && !document.hidden && !motionPreference.matches);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver((entries) => {
      visible = entries.some((entry) => entry.isIntersecting);
      update();
    }).observe(hero);
  }
  document.addEventListener('visibilitychange', update);
  motionPreference.addEventListener('change', update);
  update();
}

function initProjectPeeks() {
  document.querySelectorAll('.project-peek').forEach((preview) => {
    const images = preview.querySelector('.project-peek-images');
    const alternate = preview.querySelector('.project-preview-alternate');
    const button = preview.querySelector('.preview-toggle');
    let selected = false;
    let hovering = false;
    let ready = false;
    const update = () => {
      const showAlternate = ready && (selected || hovering);
      preview.classList.toggle('is-alternate', showAlternate);
      preview.querySelector('[data-peek-settled]').hidden = showAlternate;
      preview.querySelector('[data-peek-early]').hidden = !showAlternate;
      button.setAttribute('aria-pressed', String(selected));
    };
    const enable = () => {
      ready = alternate.naturalWidth > 0;
      button.hidden = !ready;
      update();
    };
    alternate.addEventListener('load', enable);
    alternate.addEventListener('error', () => { ready = false; selected = false; button.hidden = true; update(); });
    if (alternate.complete) enable();
    images.addEventListener('pointerenter', (event) => {
      hovering = isFinePointer() && event.pointerType !== 'touch' && !motionPreference.matches;
      update();
    });
    images.addEventListener('pointerleave', () => { hovering = false; update(); });
    images.addEventListener('pointercancel', () => { hovering = false; update(); });
    button.addEventListener('click', () => { selected = !selected; update(); });
    motionPreference.addEventListener('change', () => { hovering = false; update(); });
  });
}

initAmbientMotion();
initProjectPeeks();
initIslandScrollMotion();
initProjectCases();
initPreviewGalleries();
