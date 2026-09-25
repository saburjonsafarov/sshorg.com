# sshorg.com

Personal portfolio of **Saburjon Safarov** — Senior Android · Kotlin Multiplatform engineer.

Live at **[sshorg.com](https://sshorg.com)**.

## What it is

A single static page, no frameworks: `site/index.html` + `site/style.css` + `site/app.js`. The site deploys as plain files; the only generated file is the studio scene bundle `site/story3d.js` (committed, see below).

- **Three languages** (Russian / Tajik / English) switched client-side via `data-i18n` dictionaries; initial language auto-picked from `navigator.languages`, choice persisted in `localStorage`.
- **Light / dark theme** follows the system by default, with a manual toggle.
- **Progressive enhancement**: with JavaScript disabled the full page still renders (Russian).
- Design in the apple.com aesthetic: system font stack, large type, alternating light bands with dark hero/footer sections, blurred sticky navbar, scroll-reveal (respecting `prefers-reduced-motion`).
- **SEO / hygiene**: JSON-LD (`schema.org/Person`), `robots.txt`, `sitemap.xml`, `.well-known/security.txt`, `404.html` (served once the Caddy config below is in place).

## Deploy

The site is served by Caddy on a VPS as plain static files.

- **Automatic**: pushing to `main` runs `.github/workflows/deploy.yml`, which copies `site/` to the server over SSH (requires the `DEPLOY_KEY`, `DEPLOY_HOST`, `DEPLOY_PATH` repository secrets).
- **Manual**: `./deploy.sh` does the same from a local machine.
- **Stale files**: copying never deletes, so both deploy paths then remove the files `tools/stale-files.sh` lists: paths that were once committed under `site/` but are gone now. Files on the server that never came from this repo are left alone.

### Caddy config for the site block

The Caddyfile lives on the server (shared with other services), so it is not deployed from here. Checked with Caddy 2.10 (`caddy validate`, then served locally): the 404 page, a year of caching for `?v=`-versioned assets, and basic security headers on every response, errors included.

```
(sshorg_headers) {
	header {
		Strict-Transport-Security "max-age=31536000"
		X-Content-Type-Options "nosniff"
		Referrer-Policy "strict-origin-when-cross-origin"
		Permissions-Policy "camera=(), microphone=(), geolocation=()"
		-Server
	}
}

sshorg.com, www.sshorg.com {
	root * /srv/sshorg
	encode zstd gzip
	import sshorg_headers

	# Assets carry ?v=<commit> (deploy rewrites ?v=dev): cache them for a year.
	@versioned query v=*
	header @versioned Cache-Control "public, max-age=31536000, immutable"

	file_server

	handle_errors {
		import sshorg_headers
		@404 expression {err.status_code} == 404
		rewrite @404 /404.html
		file_server
	}
}
```

## Studio 3D story

The hero is a scroll-driven WebGL scene: a procedural laptop, phone, tablet and monitor in a studio, with a camera that travels between them while four chapters of text fade in and out.

- Source lives in `src/story3d/` (three.js + GSAP ScrollTrigger + Lenis). `npm run build:story` bundles it with esbuild into `site/story3d.js` (~216 KB gzip). Commit the bundle together with the source; CI fails if they drift apart.
- `schedule.js` holds the choreography as data (camera moves, text windows, effects). Text windows never overlap, and text only shows while the camera holds on its own device.
- Lighting is a procedural softbox studio baked into an environment map (no HDR download), with a hero beam in the dark theme, a studio that follows the mouse, and bloom on desktop-class devices.
- After the story, a "closer look" viewer (about 0.8 screens of extra scroll) shows feature pills in the style of Apple's product viewer: a pill flies the camera to its device, opens its text (taken from the site's own i18n keys), and the view can be dragged to orbit. `STORY_END` in `schedule.js` splits the section between story and viewer.
- Devices stay fixed in the world; only the camera moves (and the laptop lid opens). Each shot is fitted so the device fills its screen zone and never shares space with the text column.
- Rendering is on demand, pauses offscreen and in hidden tabs, and lowers the pixel ratio if frames get slow.
- Without WebGL, with reduced motion, or with `?story=static`, the hero falls back to stacked text and a poster (`site/story-poster.jpg`, rendered by `node tools/render-poster.mjs`).
- Checks: `npm test` (schedule and page structure) and `BROWSER=chromium node tests/story-browser.mjs` (also `webkit`; screenshots go to `test-results/`).

Note: deploys copy files but never delete them, so files removed from `site/` (for example the old `experience.*` and `beyond.*`) stay on the server until removed by hand.

## Visual effects

Card spotlights use fine pointers only. `site/motion.js` adds page-wide motion without WebGL: cards tilt toward the mouse (up to 7°, less on big cards) with their stat and title floating above, the manifesto lines light up word by word as they cross the screen (re-split when the language changes), and the KMP scheme draws itself on scroll; with reduced motion or without JS everything stays static and fully visible. The hero light field pauses offscreen and in hidden tabs. Theme changes use a circular View Transition when supported, with an immediate fallback. The compose-graph preview uses the existing, attributed demo frames; its “Early frame” button also works with touch and keyboard. All decorative motion respects `prefers-reduced-motion`, including changes during a visit.

Run dependency-free interaction checks with `node --test tests/visual-effects.test.cjs`. These use a simulated DOM and do not replace browser checks of layout, focus, contrast, or animation rendering.

## License

Code (HTML/CSS/JS) — MIT. Texts and personal content — all rights reserved.
