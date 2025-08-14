import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeHero() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // === basic three setup ===
    const container = mountRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      200
    );
    camera.position.set(0, 1.4, 4);

    // === lights ===
    const ambient = new THREE.AmbientLight(0x404040, 1.2);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0x66ccff, 1.2);
    keyLight.position.set(5, 6, 4);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0xa78bfa, 1.1, 10, 2);
    rimLight.position.set(-3, 2.5, -2);
    scene.add(rimLight);

    // === animated neon grid floor (shader) ===
    const gridUniforms = {
      uTime: { value: 0 },
      uColorA: { value: new THREE.Color("#22d3ee") },
      uColorB: { value: new THREE.Color("#a78bfa") },
    };

    const gridMat = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: gridUniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 pos = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        uniform float uTime;
        uniform vec3 uColorA;
        uniform vec3 uColorB;

        float gridLine(float v, float thickness) {
          float g = abs(fract(v) - 0.5);
          return smoothstep(thickness, 0.0, g);
        }

        void main() {
          vec2 uv = vUv * 40.0;
          uv.y += uTime * 0.8;

          float gx = gridLine(uv.x, 0.05);
          float gy = gridLine(uv.y, 0.05);

          float g = max(gx, gy);
          float glow = g * 0.75;

          float fade = smoothstep(0.0, 1.0, vUv.y);

          vec3 base = mix(uColorA, uColorB, vUv.x);
          vec3 col = base * (glow + 0.08) * (1.0 - fade * 0.5);

          gl_FragColor = vec4(col, 0.6);
        }
      `,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const gridGeo = new THREE.PlaneGeometry(30, 30, 1, 1);
    const grid = new THREE.Mesh(gridGeo, gridMat);
    grid.rotation.x = -Math.PI / 2;
    grid.position.y = -1.2;
    scene.add(grid);

    // === holographic laptop ===
    const laptopGroup = new THREE.Group();
    scene.add(laptopGroup);

    const base = new THREE.Mesh(
      new THREE.BoxGeometry(1.8, 0.08, 1.1),
      new THREE.MeshStandardMaterial({
        color: 0x0f0f10,
        metalness: 0.6,
        roughness: 0.25,
      })
    );
    base.position.set(0, -0.6, 0);
    laptopGroup.add(base);

    const baseEdge = new THREE.Mesh(
      new THREE.BoxGeometry(1.82, 0.01, 1.12),
      new THREE.MeshBasicMaterial({ color: 0x22d3ee })
    );
    baseEdge.position.set(0, -0.56, 0);
    laptopGroup.add(baseEdge);

    const hinge = new THREE.Mesh(
      new THREE.CylinderGeometry(0.03, 0.03, 1.7, 24),
      new THREE.MeshStandardMaterial({
        color: 0x1a1a1a,
        metalness: 0.7,
        roughness: 0.2,
      })
    );
    hinge.rotation.z = Math.PI / 2;
    hinge.position.set(0, -0.56, -0.52);
    laptopGroup.add(hinge);

    const screen = new THREE.Mesh(
      new THREE.BoxGeometry(1.8, 1.1, 0.06),
      new THREE.MeshStandardMaterial({
        color: 0x0b0b0d,
        metalness: 0.6,
        roughness: 0.25,
      })
    );
    screen.position.set(0, 0, -0.52);
    laptopGroup.add(screen);

    const screenEdge = new THREE.Mesh(
      new THREE.BoxGeometry(1.82, 1.12, 0.005),
      new THREE.MeshBasicMaterial({ color: 0x60a5fa })
    );
    screenEdge.position.copy(screen.position);
    laptopGroup.add(screenEdge);

    const codeCanvas = document.createElement("canvas");
    codeCanvas.width = 512;
    codeCanvas.height = 320;
    const ctx = codeCanvas.getContext("2d");

    const codeTexture = new THREE.CanvasTexture(codeCanvas);
    codeTexture.colorSpace = THREE.SRGBColorSpace;

    const screenMat = new THREE.MeshBasicMaterial({
      map: codeTexture,
      transparent: true,
    });

    const screenPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(1.72, 1.02),
      screenMat
    );
    screenPlane.position.set(0, 0, -0.49);
    laptopGroup.add(screenPlane);

    const codeLines = [
      "const dev = 'Rudra Shankar Biswas';",
      "const stack = ['React', 'Node', 'SQL', 'MongoDB', 'AWS', 'Microservices'];",
      "function build() { return 'modern, performant, beautiful'; }",
      "const contact = 'rudra.sb2004@gmail.com';",
      "deploy({ region: 'ap-south-1', scale: 'auto' });",
      "console.log('Hello, world!');",
    ];
    let lineIndex = 0;
    let charIndex = 0;
    let currentText = "";

    function drawCodeToCanvas() {
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, codeCanvas.width, codeCanvas.height);

      const h = codeCanvas.height;
      const w = codeCanvas.width;
      ctx.globalAlpha = 0.05;
      for (let y = 0; y < h; y += 2) {
        ctx.fillStyle = "#00ffff";
        ctx.fillRect(0, y, w, 1);
      }
      ctx.globalAlpha = 1;

      const target = codeLines[lineIndex] || "";
      currentText += target.charAt(charIndex++);
      if (charIndex > target.length) {
        currentText += "\n";
        lineIndex = (lineIndex + 1) % codeLines.length;
        charIndex = 0;
      }

      const shown = currentText.split("\n").slice(-8);
      ctx.font = "20px monospace";
      ctx.fillStyle = "#00ffcc";
      ctx.shadowColor = "#00ffff";
      ctx.shadowBlur = 8;

      shown.forEach((line, i) => {
        ctx.fillText(line, 14, 40 + i * 32);
      });

      if (Math.floor(Date.now() / 500) % 2 === 0) {
        const cursorX =
          14 + ctx.measureText(shown[shown.length - 1] || "").width;
        const cursorY = 40 + (shown.length - 1) * 32;
        ctx.fillRect(cursorX + 6, cursorY - 16, 10, 20);
      }

      codeTexture.needsUpdate = true;
    }

    // === orbiting cubes ===
    const cubeGroup = new THREE.Group();
    scene.add(cubeGroup);

    const cubes = [];
    const cubeMat = new THREE.MeshStandardMaterial({
      color: 0x22d3ee,
      emissive: 0x0aaac8,
      emissiveIntensity: 0.8,
      metalness: 0.4,
      roughness: 0.2,
    });
    for (let i = 0; i < 14; i++) {
      const s = 0.08 + Math.random() * 0.12;
      const m = cubeMat.clone();
      if (i % 3 === 0) {
        m.color = new THREE.Color("#a78bfa");
        m.emissive = new THREE.Color("#6a5acd");
      }
      const cube = new THREE.Mesh(new THREE.BoxGeometry(s, s, s), m);
      const r = 1.8 + Math.random() * 1.2;
      const a = Math.random() * Math.PI * 2;
      cube.userData = {
        radius: r,
        angle: a,
        speed: 0.3 + Math.random() * 0.6,
        tilt: (Math.random() - 0.5) * 0.6,
      };
      cubes.push(cube);
      cubeGroup.add(cube);
    }

    // === particles ===
    const particleCount = 700;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = Math.random() * 4 - 1.2;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      size: 0.02,
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // === mouse tracking for whole laptop rotation ===
    let mouseX = 0;
    let mouseY = 0;
    function onPointerMove(e) {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    }
    window.addEventListener("pointermove", onPointerMove);

    // === animation loop ===
    let rafId;
    const clock = new THREE.Clock();

    function animate() {
      rafId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // fixed camera
      camera.position.set(0, 1.4, 4);
      camera.lookAt(0, 0, 0);

      // rotate whole laptop toward mouse
      laptopGroup.rotation.x = THREE.MathUtils.lerp(
        laptopGroup.rotation.x,
        mouseY * 0.4,
        0.1
      );
      laptopGroup.rotation.y = THREE.MathUtils.lerp(
        laptopGroup.rotation.y,
        mouseX * 0.4,
        0.1
      );

      gridUniforms.uTime.value = t;

      cubes.forEach((cube) => {
        const d = cube.userData;
        d.angle += d.speed * 0.01;
        const x = Math.cos(d.angle) * d.radius;
        const z = Math.sin(d.angle) * d.radius;
        const y = -0.2 + Math.sin(d.angle * 2.0 + d.tilt) * 0.3;
        cube.position.set(x, y, z);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.012;
      });

      if (Math.floor(t * 8) % 2 === 0) drawCodeToCanvas();

      renderer.render(scene, camera);
    }
    animate();

    // === resize handling ===
    function onResize() {
      const { clientWidth, clientHeight } = container;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    }
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(container);

    // === cleanup ===
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", onPointerMove);
      resizeObserver.disconnect();
      container.removeChild(renderer.domElement);
      renderer.dispose();
      gridGeo.dispose();
      gridMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      base.geometry.dispose();
      base.material?.dispose?.();
      screen.geometry.dispose();
      screen.material?.dispose?.();
      screenPlane.geometry.dispose();
      screenMat.dispose();
      codeTexture.dispose();
      cubes.forEach((c) => {
        c.geometry.dispose();
        c.material?.dispose?.();
      });
    };
  }, []);

  return (
    <div ref={mountRef} className="absolute inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-black/80" />
    </div>
  );
}
