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

initProjectCases();
initPreviewGalleries();
