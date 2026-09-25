import {
  AdditiveBlending,
  BackSide,
  BoxGeometry,
  CanvasTexture,
  Color,
  ConeGeometry,
  DirectionalLight,
  DoubleSide,
  Mesh,
  MeshBasicMaterial,
  Object3D,
  PlaneGeometry,
  PMREMGenerator,
  Scene,
  ShaderMaterial,
  SpotLight,
  SRGBColorSpace,
  Vector3,
} from 'three';

// A product-photography studio built from glowing panels ("lightformers") and baked
// into a PMREM environment: long overhead strips draw the crisp highlight lines on
// aluminium, a big key softbox shapes the form, a cool rim strip separates edges.
// Nothing is downloaded; each theme gets its own studio.
const STUDIOS = {
  dark: { walls: 0x1b1c20, floor: 0x16171a, strip: 6, back: 4.4, key: 6.2, rimL: 9, rimR: 6.5, fill: 1.7, rimTint: 0xcfe0ff },
  light: { walls: 0xd6d8dd, floor: 0xe9eaee, strip: 2.3, back: 2, key: 2.4, rimL: 2.4, rimR: 2, fill: 1.2, rimTint: 0xe8f0ff },
};

function panel(width, height, intensity, color = 0xffffff) {
  return new Mesh(new PlaneGeometry(width, height), new MeshBasicMaterial({ color: new Color(color).multiplyScalar(intensity), side: DoubleSide }));
}

function place(scene, mesh, x, y, z, target) {
  mesh.position.set(x, y, z);
  mesh.lookAt(target);
  scene.add(mesh);
}

function studioScene(theme) {
  const s = STUDIOS[theme];
  const scene = new Scene();
  const room = new Mesh(new BoxGeometry(34, 18, 34), new MeshBasicMaterial({ color: s.walls, side: BackSide }));
  room.position.y = 7;
  scene.add(room);
  const floor = panel(34, 34, 1, s.floor);
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -1.5;
  scene.add(floor);
  const target = new Vector3(0, 1, 0);
  // Overhead strip softboxes: the long reflection lines seen in product renders.
  [-3.2, 0, 3.2].forEach((x) => {
    const strip = panel(0.9, 15, s.strip);
    strip.position.set(x, 13, 0);
    strip.rotation.x = Math.PI / 2;
    scene.add(strip);
  });
  // Big softbox high behind the set: the soft gradient on decks and lids seen from the front.
  place(scene, panel(15, 5, s.back), 0, 8, -13, target);
  // Key softbox on the camera side: shapes frames and bezels.
  place(scene, panel(8, 5, s.key), 9, 6, 12, target);
  // Rim strips on both sides: bright edges that separate dark metal from the backdrop.
  place(scene, panel(1.2, 10, s.rimL, s.rimTint), -12, 5, -4, target);
  place(scene, panel(1.2, 10, s.rimR), 12, 5, -4, target);
  place(scene, panel(10, 3, s.fill), -8, 2, 11, target);
  return scene;
}

function poolTexture() {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(255,255,255,0.85)');
  g.addColorStop(0.35, 'rgba(255,255,255,0.32)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const texture = new CanvasTexture(canvas);
  texture.colorSpace = SRGBColorSpace;
  return texture;
}

// Fake volumetric beam: brightest where the cone faces the viewer and near the lamp.
function beamMaterial() {
  return new ShaderMaterial({
    uniforms: { uColor: { value: new Color(0xf2f5ff) }, uIntensity: { value: 0 } },
    vertexShader: /* glsl */ `
      varying vec3 vNormal;
      varying vec3 vView;
      varying float vHeight;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vNormal = normalize(normalMatrix * normal);
        vView = normalize(-mv.xyz);
        vHeight = uv.y;
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: /* glsl */ `
      uniform vec3 uColor;
      uniform float uIntensity;
      varying vec3 vNormal;
      varying vec3 vView;
      varying float vHeight;
      void main() {
        float facing = pow(abs(dot(normalize(vNormal), normalize(vView))), 2.2);
        float fall = 0.12 + 0.88 * pow(vHeight, 1.6);
        gl_FragColor = vec4(uColor, facing * fall * uIntensity);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
    transparent: true,
    depthWrite: false,
    blending: AdditiveBlending,
    side: DoubleSide,
  });
}

// focus: world position of the hero device (the closed laptop).
export function createLighting(renderer, scene, focus) {
  const pmrem = new PMREMGenerator(renderer);
  const envs = {};
  const envFor = (theme) => {
    if (!envs[theme]) {
      const studio = studioScene(theme);
      envs[theme] = pmrem.fromScene(studio, 0.025).texture;
      studio.traverse((o) => {
        o.geometry?.dispose();
        o.material?.dispose();
      });
    }
    return envs[theme];
  };

  // Direct lights add the specular glints that an environment alone softens.
  const key = new DirectionalLight(0xffffff, 1);
  const rim = new DirectionalLight(0xc8dcff, 1);
  const keyBase = new Vector3(5, 8, 6);
  const rimBase = new Vector3(-7, 4, -6);
  scene.add(key, rim);

  // Hero rig: a spotlight straight down onto the closed laptop, with its beam and floor pool.
  const spot = new SpotLight(0xf2f5ff, 0, 0, 0.3, 0.8, 2);
  spot.position.set(focus.x + 0.2, 7.2, focus.z + 0.4);
  const spotTarget = new Object3D();
  spotTarget.position.set(focus.x, 0, focus.z);
  spot.target = spotTarget;
  scene.add(spot, spotTarget);

  const beamHeight = 7;
  const beam = new Mesh(new ConeGeometry(2.1, beamHeight, 48, 1, true), beamMaterial());
  beam.position.set(spot.position.x, beamHeight / 2, spot.position.z);
  beam.renderOrder = 2;
  scene.add(beam);

  const pool = new Mesh(new PlaneGeometry(6, 4.6), new MeshBasicMaterial({ map: poolTexture(), color: 0xf2f5ff, transparent: true, opacity: 0, depthWrite: false, blending: AdditiveBlending }));
  pool.rotation.x = -Math.PI / 2;
  pool.position.set(focus.x, 0.004, focus.z);
  pool.renderOrder = 1;
  scene.add(pool);

  let theme = 'dark';
  const state = { reveal: 1, spot: 0, angle: 0 };

  function apply() {
    const dark = theme !== 'light';
    // In the dark studio the hero starts under a single beam; the room lights up as the story begins.
    const room = dark ? 0.3 + 0.7 * state.reveal : 1;
    const hero = dark ? state.spot * (1 - state.reveal) : 0;
    scene.environmentIntensity = (dark ? 0.9 : 0.85) * room;
    key.intensity = (dark ? 1.3 : 1.5) * room;
    rim.intensity = (dark ? 1.4 : 0.45) * room;
    spot.intensity = 95 * hero;
    beam.visible = hero > 0.002;
    beam.material.uniforms.uIntensity.value = 0.12 * hero;
    pool.visible = hero > 0.002;
    pool.material.opacity = 0.18 * hero;
    scene.backgroundIntensity = dark ? 0.45 + 0.55 * room : 1;
  }

  return {
    setTheme(next) {
      theme = next === 'light' ? 'light' : 'dark';
      scene.environment = envFor(theme);
      apply();
    },
    // reveal 0 → hero beam only, 1 → full studio. spot 0..1 fades the beam in on load.
    setReveal(reveal, spotLevel) {
      state.reveal = reveal;
      state.spot = spotLevel;
      apply();
    },
    // Read-only snapshot for tests.
    get state() {
      return { theme, reveal: state.reveal, spot: state.spot, angle: state.angle };
    },
    // Turns the whole studio around the set; highlights glide over the metal.
    setRotation(angle) {
      if (angle === state.angle) return;
      state.angle = angle;
      scene.environmentRotation.set(0, angle, 0);
      const c = Math.cos(angle);
      const s = Math.sin(angle);
      key.position.set(keyBase.x * c + keyBase.z * s, keyBase.y, -keyBase.x * s + keyBase.z * c);
      rim.position.set(rimBase.x * c + rimBase.z * s, rimBase.y, -rimBase.x * s + rimBase.z * c);
    },
    dispose() {
      Object.values(envs).forEach((texture) => texture.dispose());
      pmrem.dispose();
      pool.material.map.dispose();
    },
  };
}
