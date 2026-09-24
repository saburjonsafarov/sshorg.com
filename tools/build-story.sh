#!/bin/sh
# Bundles the studio scene (three.js + GSAP + Lenis + src/story3d) into one
# minified ES module. The output is committed so deploys stay build-free.
set -eu
cd "$(dirname "$0")/.."
npx esbuild src/story3d/index.js \
  --bundle --minify --format=esm --target=es2020,safari15 \
  --legal-comments=eof \
  --outfile=site/story3d.js
