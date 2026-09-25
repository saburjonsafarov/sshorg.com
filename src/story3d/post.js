import { HalfFloatType, Vector2, WebGLRenderTarget } from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

// Soft bloom for bright screens and specular glints. Multisampled HDR target keeps
// antialiasing; OutputPass applies tone mapping and sRGB once at the end.
export function createPost(renderer, scene, camera) {
  const target = new WebGLRenderTarget(1, 1, { type: HalfFloatType, samples: 4 });
  const composer = new EffectComposer(renderer, target);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new Vector2(1, 1), 0.32, 0.5, 0.9);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
  return {
    bloom,
    setSize(width, height, pixelRatio) {
      composer.setPixelRatio(pixelRatio);
      composer.setSize(width, height);
    },
    setTheme(theme) {
      // Bright studios would bloom the whole backdrop; keep it for the dark one.
      bloom.strength = theme === 'light' ? 0.12 : 0.32;
      bloom.threshold = theme === 'light' ? 0.98 : 0.9;
    },
    render() {
      composer.render();
    },
    dispose() {
      composer.dispose();
      target.dispose();
      bloom.dispose();
    },
  };
}
