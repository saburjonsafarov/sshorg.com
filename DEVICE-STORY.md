# Beyond one screen — interactive portfolio candidate

New page: `site/beyond.html`. Existing `site/index.html`, deployment scripts and DNS are unchanged.

## Run

Open `site/beyond.html` in a desktop browser, or serve the `site` directory:

```sh
python3 -m http.server 8080 --directory site
# http://localhost:8080/beyond.html
node --check site/beyond.js
node --test tests/device-story.test.cjs
```

The downloadable single-file edition in the delivery archive works without a server or internet connection. An attachment preview may not execute JavaScript; use a browser to see animation.

## Implementation

One native-scroll timeline; five narrative chapters; articulated laptop; solid phone, tablet and monitor; procedural textures; real 3D vertex meshes and perspective matrices. WebGL is the primary renderer. A Canvas2D painter-sorted renderer uses the same geometry when GPU context creation fails; it intentionally trades pixel-perfect depth/texture rendering for availability. No third-party runtime packages, external fonts, assets or network requests.

HTML contains the portfolio and usable links independently of graphics. Reduced-motion, a manual motion toggle, hidden tabs, offscreen scenes, context loss/restoration and blocked localStorage have explicit fallbacks. Russian, English and Tajik UI; decorative demo device screens use English. Demo screens are not real financial data or screenshots of the bank's app. There are no made-up business metrics.

## Validation and limits

Node tests cover timeline math, matrices, hinge orientation, mesh bounds/normals/UVs, local links and basic document/runtime contracts. Browser checks cover mobile and desktop viewports, scene transitions, language changes, static/reduced-motion/no-JavaScript rendering, and idle/offscreen lifecycle. The available Chromium could not create a WebGL context, so visual checks exercised the Canvas2D fallback, **not hardware WebGL**. Safari/iPhone hardware and shader rendering remain release checks. The Canvas2D fallback is not a photorealistic substitute for a production 3D asset pipeline.

Before promoting the new page to the home page, review real-device WebGL rendering and the Tajik copy. No production deployment is performed by this branch.

References: https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices and https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/webglcontextlost_event
