# sshorg.com

Personal portfolio of **Saburjon Safarov** — Senior Android · Kotlin Multiplatform engineer.

Live at **[sshorg.com](https://sshorg.com)**.

## What it is

A single static page, no frameworks and no build step: `site/index.html` + `site/style.css` + `site/app.js`.

- **Three languages** (Russian / Tajik / English) switched client-side via `data-i18n` dictionaries; initial language auto-picked from `navigator.languages`, choice persisted in `localStorage`.
- **Light / dark theme** follows the system by default, with a manual toggle.
- **Progressive enhancement**: with JavaScript disabled the full page still renders (Russian).
- Design in the apple.com aesthetic: system font stack, large type, alternating light bands with dark hero/footer sections, blurred sticky navbar, scroll-reveal (respecting `prefers-reduced-motion`).

## Deploy

The site is served by Caddy on a VPS as plain static files.

- **Automatic**: pushing to `main` runs `.github/workflows/deploy.yml`, which copies `site/` to the server over SSH (requires the `DEPLOY_KEY`, `DEPLOY_HOST`, `DEPLOY_PATH` repository secrets).
- **Manual**: `./deploy.sh` does the same from a local machine.

## Visual effects

Card spotlights use fine pointers only. The hero light field pauses offscreen and in hidden tabs. Theme changes use a circular View Transition when supported, with an immediate fallback. The compose-graph preview uses the existing, attributed demo frames; its “Early frame” button also works with touch and keyboard. All decorative motion respects `prefers-reduced-motion`, including changes during a visit.

Run dependency-free interaction checks with `node --test tests/visual-effects.test.cjs`. These use a simulated DOM and do not replace browser checks of layout, focus, contrast, or animation rendering.

## License

Code (HTML/CSS/JS) — MIT. Texts and personal content — all rights reserved.
