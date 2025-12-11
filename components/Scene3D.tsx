import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { AppState } from '../types';
import { COLORS, SCENE_CONFIG } from '../constants';
import { getSpherePoint } from '../utils/mathUtils';

interface Scene3DProps {
  appState: AppState;
  handPosition: { x: number; y: number } | null;
}

// --- Helper: Create Snowflake Texture from Emoji ---
const createSnowflakeTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.font = '48px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#ffffff';
    ctx.fillText('❄️', 32, 34);
  }
  const tex = new THREE.CanvasTexture(canvas);
  return tex;
};

// --- Helper: Create Star Texture from Emoji ---
const createStarTexture = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.font = '96px serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('⭐️', 64, 70);
  }
  const tex = new THREE.CanvasTexture(canvas);
  return tex;
};

// --- Shader for Garland (Animated Growth) ---
const garlandVertexShader = `
  varying vec2 vUv;
  varying vec3 vNormal;
  
  void main() {
    vUv = uv;
    vNormal = normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const garlandFragmentShader = `
  uniform float uDraw; // 0.0 to 1.0
  uniform vec3 uColor;
  uniform float uTime;
  
  varying vec2 vUv;
  varying vec3 vNormal;

  void main() {
    if (vUv.x > uDraw) discard;

    vec3 normal = normalize(vNormal);
    vec3 lightDir = normalize(vec3(0.5, 1.0, 1.0));
    float diff = max(dot(normal, lightDir), 0.0);
    
    float shine = pow(max(dot(normal, normalize(vec3(0.0, 0.0, 1.0))), 0.0), 10.0);
    float flowingHighlight = smoothstep(0.0, 0.2, sin(vUv.x * 20.0 - uTime * 3.0));
    
    vec3 finalColor = uColor * (0.4 + diff * 0.6) + vec3(1.0) * shine * 0.8 + vec3(1.0, 0.9, 0.5) * flowingHighlight * 0.3;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

// --- Enhanced Shaders for 3D Decor Meshes (With Tightening/Screwing Animation) ---
const decoVertexShader = `
  uniform float uMix;
  uniform float uTime;
  
  attribute vec3 aTreePos;
  attribute vec3 aScatterPos;
  attribute vec3 aRandom; 
  attribute vec3 aColor; 
  
  varying vec3 vColor;
  varying vec3 vNormal;
  varying vec3 vLocalPos; 
  varying float vPatternSeed;
  varying vec3 vViewPosition;
  
  mat4 rotationMatrix(vec3 axis, float angle) {
      axis = normalize(axis);
      float s = sin(angle);
      float c = cos(angle);
      float oc = 1.0 - c;
      return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                  oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                  oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                  0.0,                                0.0,                                0.0,                                1.0);
  }

  void main() {
    vColor = aColor;
    vPatternSeed = aRandom.x;
    vLocalPos = position;

    // Base interpolation
    vec3 pos = mix(aScatterPos, aTreePos, uMix);
    
    // --- TIGHTENING / SCREWING ANIMATION ---
    // When uMix is 1.0 (Tree), twist is 0.
    // When uMix is 0.0 (Scatter), twist is high.
    // This creates a "screwing in" effect as it assembles.
    float screwStrength = (1.0 - uMix) * 12.0; // Total rotation amount
    float heightFactor = (pos.y + 15.0) * 0.1; // Twist depends on height
    float theta = screwStrength + heightFactor * (1.0 - uMix);
    
    float c = cos(theta);
    float s = sin(theta);
    
    // Rotate around Y axis
    float nx = pos.x * c - pos.z * s;
    float nz = pos.x * s + pos.z * c;
    pos.x = nx;
    pos.z = nz;

    // Instance Spin
    float spinSpeed = (1.0 - uMix) * 15.0; 
    float rotAngle = uTime * (0.2 + aRandom.y * 0.2) + spinSpeed * aRandom.y;
    vec3 axis = normalize(vec3(aRandom.z, 1.0, aRandom.x));
    mat4 rotMat = rotationMatrix(axis, rotAngle);
    
    // SCALE LOGIC (Updated)
    float baseScale = 0.6 + aRandom.x * 0.6;
    // Scale Boost: Increase size massively when Scattered (uMix approaches 0) to fill space
    // When Tree (uMix=1), multiplier is 1.0. When Scatter (uMix=0), multiplier is 3.5.
    float scale = baseScale * (1.0 + (1.0 - uMix) * 2.5);

    vec3 transformedPos = (rotMat * vec4(position * scale, 1.0)).xyz;
    
    vec3 rotatedNormal = (rotMat * vec4(normal, 0.0)).xyz;
    vNormal = normalize(normalMatrix * rotatedNormal);
    
    vec4 mvPosition = modelViewMatrix * vec4(pos + transformedPos, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const decoFragmentShader = `
  varying vec3 vColor;
  varying vec3 vNormal;
  varying vec3 vLocalPos;
  varying float vPatternSeed;
  varying vec3 vViewPosition;
  
  float hash(vec3 p) {
      p = fract(p * 0.3183099 + .1);
      p *= 17.0;
      return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }
  
  void main() {
    vec3 normal = normalize(vNormal);
    vec3 viewDir = normalize(vViewPosition);
    vec3 lightDir = normalize(vec3(0.5, 0.8, 1.0)); 
    vec3 halfVector = normalize(lightDir + viewDir);
    
    float materialType = vPatternSeed; 
    
    vec3 albedo = vColor;
    float roughness = 0.4;
    float metalness = 0.0;
    float sparkle = 0.0;
    
    if (materialType < 0.4) {
        float noise = hash(vLocalPos * 30.0);
        float sparkleAngle = max(dot(normal, viewDir), 0.0);
        if (noise > 0.95) sparkle = 1.0 * sparkleAngle;
        albedo *= 0.8; 
        roughness = 0.8;
    } else if (materialType < 0.7) {
        metalness = 0.9;
        roughness = 0.1;
        vec3 ref = reflect(-viewDir, normal);
        vec3 envColor = vec3(0.1) + 0.5 * pow(max(dot(ref, vec3(0.0, 1.0, 0.0)), 0.0), 2.0) * vec3(1.0, 0.9, 0.8);
        albedo = mix(albedo, albedo * envColor * 2.0, 0.5);
    } else {
        roughness = 0.5;
        metalness = 0.2;
        if (vPatternSeed > 0.85) {
             float stripes = smoothstep(0.3, 0.7, sin(vLocalPos.x * 10.0 + vLocalPos.y * 10.0));
             albedo = mix(albedo, vec3(1.0), stripes * 0.3);
        } else {
             float dots = smoothstep(0.8, 0.85, sin(vLocalPos.x * 8.0) * sin(vLocalPos.y * 8.0));
             albedo = mix(albedo, vec3(1.0, 0.8, 0.0), dots * 0.5);
        }
    }
    
    float NdotL = max(dot(normal, lightDir), 0.0);
    vec3 diffuse = albedo * NdotL;
    
    float NdotH = max(dot(normal, halfVector), 0.0);
    float specPower = (1.0 - roughness) * 128.0;
    float specular = pow(NdotH, specPower);
    
    float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 3.0);
    
    vec3 ambient = vec3(0.05) * albedo;
    vec3 specColor = mix(vec3(1.0), albedo, metalness) * specular;
    vec3 finalColor = ambient + diffuse + specColor;
    finalColor += vec3(0.5, 0.4, 0.2) * fresnel * (1.0 - metalness); 
    finalColor += vec3(1.0, 1.0, 0.8) * sparkle * 2.0;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

// --- Shader for Points (Foliage/Trunk) with Screwing Animation ---
const pointVertexShader = `
  uniform float uMix;
  uniform float uTime;
  
  attribute vec3 aTreePos;
  attribute vec3 aScatterPos;
  attribute float size;
  varying vec3 vColor;
  
  void main() {
    vColor = color; 
    
    vec3 pos = mix(aScatterPos, aTreePos, uMix);
    
    // --- TIGHTENING / SCREWING ANIMATION (Synced with Decos) ---
    float screwStrength = (1.0 - uMix) * 12.0; 
    float heightFactor = (pos.y + 15.0) * 0.1; 
    float theta = screwStrength + heightFactor * (1.0 - uMix);
    
    float c = cos(theta);
    float s = sin(theta);
    
    float nx = pos.x * c - pos.z * s;
    float nz = pos.x * s + pos.z * c;
    pos.x = nx;
    pos.z = nz;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = size * (600.0 / -mvPosition.z); 
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const pointFragmentShader = `
  uniform sampler2D pointTexture;
  varying vec3 vColor;
  
  void main() {
    vec4 texColor = texture2D(pointTexture, gl_PointCoord);
    gl_FragColor = vec4(vColor, 1.0) * texColor;
    if (gl_FragColor.a < 0.5) discard;
  }
`;

const Scene3D: React.FC<Scene3DProps> = ({ appState, handPosition }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const composerRef = useRef<EffectComposer | null>(null);
  const materialsRef = useRef<THREE.ShaderMaterial[]>([]); 
  const garlandMatRef = useRef<THREE.ShaderMaterial | null>(null);
  
  const snowDataRef = useRef<{ velocities: Float32Array; sways: Float32Array } | null>(null);

  const targetMixRef = useRef(1.0); 
  const currentMixRef = useRef(1.0);
  const garlandProgressRef = useRef(0.0); 
  const starProgressRef = useRef(0.0);

  // --- Smooth Camera References ---
  // Store smoothed position and lookAt vectors to avoid "stuttery" rotation
  const smoothedCameraPosRef = useRef(new THREE.Vector3(0, 0, 45));
  const smoothedLookAtRef = useRef(new THREE.Vector3(0, 0, 0));

  // --- Geometry Helpers ---
  const getTieredTreePoint = (isOrnament: boolean = false) => {
    // [BaseRadius, Height, Y-Offset]
    const tiers = [
      [11.0, 9.5, -12.0], // Large Bottom Base
      [8.5, 9.0, -5.0],   // Mid Tier
      [5.5, 8.0, 2.0],    // Top Tier
    ];

    const tierIdx = Math.floor(Math.pow(Math.random(), 0.9) * tiers.length);
    const [radius, height, yOffset] = tiers[tierIdx];

    const y = Math.random() * height;
    const rAtY = (1 - y / height) * radius;
    const theta = Math.random() * Math.PI * 2;
    
    const rNoise = rAtY + (Math.random() - 0.5) * 1.0;

    let x = rNoise * Math.cos(theta);
    let z = rNoise * Math.sin(theta);

    if (isOrnament) {
       const surfaceScale = 1.15; 
       x *= surfaceScale;
       z *= surfaceScale;
    }
    
    return [x, y + yOffset, z] as [number, number, number];
  };

  const getTrunkPoint = () => {
    const h = 8.0; 
    const yBottom = -16.0; 
    const rBase = 2.0;

    const y = Math.random() * h + yBottom;
    const theta = Math.random() * Math.PI * 2;
    const r = Math.sqrt(Math.random()) * rBase; 

    const x = r * Math.cos(theta);
    const z = r * Math.sin(theta);

    return [x, y, z] as [number, number, number];
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000500, 0.015);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 45); 
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.9; 
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 2. Post Processing
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
    bloomPass.threshold = 0.75; 
    bloomPass.strength = 0.6;
    bloomPass.radius = 0.3;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);
    composerRef.current = composer;

    // 3. Define Point Layers
    materialsRef.current = [];

    const dotTexture = new THREE.TextureLoader().load('https://assets.codepen.io/127738/dotTexture.png');
    
    const pointLayers = [
        { id: 'foliage', count: 5000, texture: dotTexture, type: 'foliage' },
        { id: 'red_specs', count: 350, texture: dotTexture, type: 'foliage_red' },
        { id: 'trunk', count: 800, texture: dotTexture, type: 'trunk' },
    ];

    const needlesPalette = [
        new THREE.Color(COLORS.EMERALD_DEEP),
        new THREE.Color(COLORS.EMERALD_LIGHT),
        new THREE.Color(0x0a4f32), 
    ];
    const trunkColor = new THREE.Color(COLORS.BROWN_TRUNK);

    pointLayers.forEach(layer => {
        const geometry = new THREE.BufferGeometry();
        const positionsTree = [];
        const positionsScatter = [];
        const colors = [];
        const sizes = [];

        for (let i = 0; i < layer.count; i++) {
            let tPos: [number, number, number] = [0,0,0];
            let color = new THREE.Color(1,1,1);
            let size = 1.0;

            if (layer.type === 'trunk') {
                tPos = getTrunkPoint();
                color = trunkColor.clone().multiplyScalar(0.7 + Math.random() * 0.4);
                size = Math.random() * 0.4 + 0.3;
            } else if (layer.type === 'foliage') {
                tPos = getTieredTreePoint(false);
                color = needlesPalette[Math.floor(Math.random() * needlesPalette.length)];
                size = Math.random() * 0.3 + 0.1;
                if (Math.random() > 0.98) {
                    color = new THREE.Color(COLORS.GOLD_PALE);
                    color.multiplyScalar(2.0);
                    size = 0.5;
                }
            } else if (layer.type === 'foliage_red') {
                tPos = getTieredTreePoint(false);
                color = new THREE.Color(COLORS.RED_CHRISTMAS);
                size = Math.random() * 0.3 + 0.15;
            }

            positionsTree.push(tPos[0], tPos[1], tPos[2]);
            const sPos = getSpherePoint(SCENE_CONFIG.SCATTER_RADIUS);
            positionsScatter.push(sPos[0], sPos[1], sPos[2]);
            colors.push(color.r, color.g, color.b);
            sizes.push(size);
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positionsTree, 3));
        geometry.setAttribute('aTreePos', new THREE.Float32BufferAttribute(positionsTree, 3));
        geometry.setAttribute('aScatterPos', new THREE.Float32BufferAttribute(positionsScatter, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uMix: { value: 1.0 },
                pointTexture: { value: layer.texture }
            },
            vertexShader: pointVertexShader,
            fragmentShader: pointFragmentShader,
            transparent: true,
            depthWrite: false,
            vertexColors: true,
            blending: THREE.AdditiveBlending
        });

        materialsRef.current.push(material);
        const points = new THREE.Points(geometry, material);
        scene.add(points);
    });

    // --- Create 3D Instanced Decor Meshes ---
    const decoConfigs = [
        { 
            count: 16, 
            geo: new THREE.BoxGeometry(1.0, 1.0, 1.0), 
            type: 'gift', 
            colors: [COLORS.RED_CHRISTMAS, COLORS.ROYAL_BLUE, COLORS.MAGICAL_PURPLE, COLORS.GOLD_METALLIC] 
        },
        { 
            count: 40, 
            geo: new THREE.SphereGeometry(0.55, 24, 24), 
            type: 'bauble', 
            colors: [COLORS.GOLD_METALLIC, COLORS.RED_CHRISTMAS, COLORS.SILVER_SHINE, COLORS.ICE_CYAN, COLORS.MAGICAL_PURPLE] 
        },
        {
            count: 20, 
            geo: new THREE.TorusGeometry(0.5, 0.25, 16, 32),
            type: 'donut',
            colors: [0xFF69B4, 0x8B4513, COLORS.GOLD_PALE, COLORS.WHITE_GLOW] 
        },
        { 
            count: 16, 
            geo: new THREE.ConeGeometry(0.4, 1.2, 32), 
            type: 'bell', 
            colors: [COLORS.GOLD_METALLIC, COLORS.SILVER_SHINE] 
        },
        { 
            count: 20, 
            geo: new THREE.OctahedronGeometry(0.5, 0), 
            type: 'star_gem', 
            colors: [COLORS.WHITE_GLOW, COLORS.GOLD_PALE, COLORS.ICE_CYAN] 
        }
    ];

    decoConfigs.forEach(config => {
        const iGeo = new THREE.InstancedBufferGeometry();
        iGeo.index = config.geo.index;
        iGeo.attributes.position = config.geo.attributes.position;
        iGeo.attributes.normal = config.geo.attributes.normal;
        iGeo.attributes.uv = config.geo.attributes.uv;

        const count = config.count;
        const aTreePos = new Float32Array(count * 3);
        const aScatterPos = new Float32Array(count * 3);
        const aRandom = new Float32Array(count * 3);
        const aColor = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const tPos = getTieredTreePoint(true);
            aTreePos[i*3] = tPos[0];
            aTreePos[i*3+1] = tPos[1];
            aTreePos[i*3+2] = tPos[2];

            const sPos = getSpherePoint(SCENE_CONFIG.SCATTER_RADIUS);
            aScatterPos[i*3] = sPos[0];
            aScatterPos[i*3+1] = sPos[1];
            aScatterPos[i*3+2] = sPos[2];

            aRandom[i*3] = Math.random(); 
            aRandom[i*3+1] = Math.random(); 
            aRandom[i*3+2] = Math.random(); 

            const colInt = config.colors[Math.floor(Math.random() * config.colors.length)];
            const col = new THREE.Color(colInt);
            col.multiplyScalar(1.1); 
            aColor[i*3] = col.r;
            aColor[i*3+1] = col.g;
            aColor[i*3+2] = col.b;
        }

        iGeo.setAttribute('aTreePos', new THREE.InstancedBufferAttribute(aTreePos, 3));
        iGeo.setAttribute('aScatterPos', new THREE.InstancedBufferAttribute(aScatterPos, 3));
        iGeo.setAttribute('aRandom', new THREE.InstancedBufferAttribute(aRandom, 3));
        iGeo.setAttribute('aColor', new THREE.InstancedBufferAttribute(aColor, 3));

        const material = new THREE.ShaderMaterial({
            uniforms: {
                uTime: { value: 0 },
                uMix: { value: 1.0 }
            },
            vertexShader: decoVertexShader,
            fragmentShader: decoFragmentShader,
            side: THREE.DoubleSide
        });

        materialsRef.current.push(material);
        const mesh = new THREE.InstancedMesh(iGeo, material, count);
        scene.add(mesh);
    });

    // --- Main Top Star ---
    const starTex = createStarTexture();
    const starMat = new THREE.SpriteMaterial({ 
        map: starTex, 
        color: 0xffffff,
        transparent: true,
        opacity: 0, 
        depthWrite: false
    });
    const starSprite = new THREE.Sprite(starMat);
    starSprite.scale.set(4.5, 4.5, 1.0); 
    starSprite.position.set(0, 12.0, 0); 
    scene.add(starSprite);
    starSprite.userData = { isTopStar: true };

    // --- SMOOTH GARLAND ---
    const points: THREE.Vector3[] = [];
    const garlandTurns = 6.5; 
    const gHeight = 25; 
    const gYStart = 11; 
    
    for(let i=0; i <= 150; i++) {
        const t = i / 150;
        const angle = t * Math.PI * 2 * garlandTurns;
        const y = gYStart - t * gHeight; 
        const radius = 1.0 * (1-t) + 12.0 * t;
        points.push(new THREE.Vector3(Math.cos(angle) * radius, y, Math.sin(angle) * radius));
    }
    
    const curve = new THREE.CatmullRomCurve3(points);
    const tubeGeo = new THREE.TubeGeometry(curve, 300, 0.15, 8, false);
    
    const tubeMat = new THREE.ShaderMaterial({
        uniforms: {
            uDraw: { value: 1.0 },
            uColor: { value: new THREE.Color(COLORS.GOLD_METALLIC) },
            uTime: { value: 0 }
        },
        vertexShader: garlandVertexShader,
        fragmentShader: garlandFragmentShader,
        side: THREE.DoubleSide,
        transparent: true
    });
    
    garlandMatRef.current = tubeMat;
    const garlandMesh = new THREE.Mesh(tubeGeo, tubeMat);
    scene.add(garlandMesh);

    // --- Snow System ---
    const snowCount = 400; 
    const snowflakeTex = createSnowflakeTexture();
    
    const snowGeo = new THREE.BufferGeometry();
    const snowPos = new Float32Array(snowCount * 3);
    const snowVelocities = new Float32Array(snowCount);
    const snowSways = new Float32Array(snowCount);

    for(let i=0; i < snowCount; i++) {
        snowPos[i * 3] = (Math.random() - 0.5) * 80;     
        snowPos[i * 3 + 1] = (Math.random() - 0.5) * 60; 
        snowPos[i * 3 + 2] = (Math.random() - 0.5) * 60; 
        snowVelocities[i] = 0.05 + Math.random() * 0.1;
        snowSways[i] = Math.random() * Math.PI * 2;
    }
    
    snowDataRef.current = { velocities: snowVelocities, sways: snowSways };
    snowGeo.setAttribute('position', new THREE.BufferAttribute(snowPos, 3));
    const snowMat = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 1.2,
        map: snowflakeTex,
        transparent: true,
        opacity: 0.9,
        depthWrite: false,
        blending: THREE.NormalBlending 
    });
    const snowSystem = new THREE.Points(snowGeo, snowMat);
    scene.add(snowSystem);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);
    
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current || !composerRef.current) return;
      cameraRef.current.aspect = window.innerWidth / window.innerHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      composerRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update logic loop
  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      if (!sceneRef.current || !cameraRef.current || !composerRef.current) return;

      const time = Date.now() * 0.001;
      
      // State Transitions
      currentMixRef.current += (targetMixRef.current - currentMixRef.current) * 0.08;

      // Update basic materials
      materialsRef.current.forEach(mat => {
          mat.uniforms.uTime.value = time;
          mat.uniforms.uMix.value = currentMixRef.current;
      });

      // --- Garland Animation Logic ---
      if (garlandMatRef.current) {
         garlandMatRef.current.uniforms.uTime.value = time;
         
         if (targetMixRef.current < 0.5) {
             garlandProgressRef.current = 0.0;
         } else {
             if (currentMixRef.current > 0.95) {
                 const drawSpeed = 0.02;
                 garlandProgressRef.current += (1.0 - garlandProgressRef.current) * drawSpeed;
             } else {
                 garlandProgressRef.current = 0.0;
             }
         }
         garlandMatRef.current.uniforms.uDraw.value = garlandProgressRef.current;
      }

      // --- Star Animation Logic ---
      const topStar = sceneRef.current.children.find(c => c.userData.isTopStar);
      if (topStar && topStar instanceof THREE.Sprite) {
          topStar.rotation.z = Math.sin(time) * 0.15; 
          
          if (targetMixRef.current < 0.5) {
              starProgressRef.current = 0.0;
          } else {
               if (currentMixRef.current > 0.95) {
                  const fadeSpeed = 0.03;
                  starProgressRef.current += (1.0 - starProgressRef.current) * fadeSpeed;
               } else {
                  starProgressRef.current = 0.0;
               }
          }

          topStar.material.opacity = starProgressRef.current;
          const scaleBase = 4.5 * starProgressRef.current;
          const scalePulse = scaleBase + Math.sin(time * 3) * 0.5 * starProgressRef.current;
          topStar.scale.set(scalePulse, scalePulse, 1.0);
          topStar.visible = starProgressRef.current > 0.01;
      }

      // --- Snow Animation ---
      sceneRef.current.children.forEach(child => {
        if ((child as THREE.Points).isPoints && (child as THREE.Points).material instanceof THREE.PointsMaterial) {
           const system = child as THREE.Points;
           const mat = system.material as THREE.PointsMaterial;
           
           if (mat.color.getHex() === 0xffffff && snowDataRef.current) {
              // Hide on Scatter
              if (appState === AppState.SCATTER_FORM) {
                  mat.opacity = 0;
                  mat.visible = false;
              } else {
                  mat.visible = true;
                  mat.opacity += (0.9 - mat.opacity) * 0.05; 
                  
                  const positions = system.geometry.attributes.position.array as Float32Array;
                  const { velocities, sways } = snowDataRef.current;
                  const count = positions.length / 3;
                  
                  for (let i = 0; i < count; i++) {
                     const ix = i * 3;
                     const iy = i * 3 + 1;
                     positions[iy] -= velocities[i]; 
                     positions[ix] += Math.sin(time + sways[i]) * 0.02;
                     if (positions[iy] < -25) {
                         positions[iy] = 30 + Math.random() * 5; 
                         positions[ix] = (Math.random() - 0.5) * 80; 
                     }
                  }
                  system.geometry.attributes.position.needsUpdate = true;
              }
           }
        }
      });

      // Target State updates
      if (appState === AppState.TREE_FORM) targetMixRef.current = 1.0;
      else if (appState === AppState.SCATTER_FORM) targetMixRef.current = 0.0;

      // --- Camera Logic (Optimized for Smoothness) ---
      let targetPos = new THREE.Vector3(0, 0, 45);
      let targetLookAt = new THREE.Vector3(0, 0, 0);

      if (appState === AppState.SCATTER_FORM) {
        // Floating mode: Pan X/Y with reduced amplitude to avoid seeing edges
        // SCATTER_RADIUS is 60. Camera Z is 30. Max Pan X=50 means distance ~58. Safe.
        const panRangeX = 50; 
        const panRangeY = 30; 
        
        // Base Drift (The "Cosmic Roam") - Continuous movement
        const autoX = Math.sin(time * 0.15) * 15; 
        const autoY = Math.cos(time * 0.1) * 10;
        const autoZ = Math.sin(time * 0.05) * 5;

        let handOffsetX = 0;
        let handOffsetY = 0;
        
        if (handPosition) {
            // Center is 0.5, 0.5
            const rawX = (handPosition.x - 0.5);
            const rawY = -(handPosition.y - 0.5);
            
            // Threshold / Deadzone: Hand must move > 5% from center to take control
            const threshold = 0.05; 
            const dist = Math.sqrt(rawX*rawX + rawY*rawY);

            if (dist > threshold) {
                 handOffsetX = rawX * panRangeX;
                 handOffsetY = rawY * panRangeY;
            }
        }

        // Camera Z set to 30 to be INSIDE the cloud (Radius 60) rather than at edge
        targetPos.set(autoX + handOffsetX, autoY + handOffsetY, 30 + autoZ);
        
        // Target LookAt: Look slightly ahead but mostly parallel
        targetLookAt.set((autoX + handOffsetX) * 0.15, (autoY + handOffsetY) * 0.15, 0);

      } else if (appState === AppState.TREE_FORM) {
        // Tree Orbit Mode
        targetPos.set(
            Math.sin(time * 0.3) * 45,
            0,
            Math.cos(time * 0.3) * 45
        );
        targetLookAt.set(0, 4, 0);
      }

      // Smoothly interpolate the stored camera vectors towards targets
      // Using a factor of 0.08 for responsive but fluid feel.
      smoothedCameraPosRef.current.lerp(targetPos, 0.08);
      smoothedLookAtRef.current.lerp(targetLookAt, 0.08);

      // Apply to actual camera
      cameraRef.current.position.copy(smoothedCameraPosRef.current);
      cameraRef.current.lookAt(smoothedLookAtRef.current);

      composerRef.current.render();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [appState, handPosition]);

  return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

export default Scene3D;