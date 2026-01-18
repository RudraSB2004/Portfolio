import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeHero() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    /* ================= SCENE ================= */
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x020617);

    /* ================= CAMERA ================= */
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100,
    );
    camera.position.set(0, 1.2, 7);
    camera.lookAt(0, 0.4, 0);

    /* ================= RENDERER ================= */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.appendChild(renderer.domElement);

    /* ================= LIGHTS ================= */
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));

    const keyLight = new THREE.DirectionalLight(0x7dd3fc, 1.4);
    keyLight.position.set(5, 6, 5);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0xffffff, 0.6, 12);
    fillLight.position.set(0, -1, 3);
    scene.add(fillLight);

    const rimLight = new THREE.PointLight(0x818cf8, 1.2, 16);
    rimLight.position.set(-4, 2, -3);
    scene.add(rimLight);

    /* ================= NEON BACK GLOW ================= */
    const glowPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(6, 4),
      new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.15,
      }),
    );
    glowPlane.position.set(0, 0.9, -3.6);
    scene.add(glowPlane);

    const neonRim = new THREE.PointLight(0x38bdf8, 1.1, 18);
    neonRim.position.set(0, 1.2, -4);
    scene.add(neonRim);

    const purpleGlow = new THREE.PointLight(0xa78bfa, 0.5, 14);
    purpleGlow.position.set(-2.5, 1.5, -3);
    scene.add(purpleGlow);

    /* ================= GROUND ================= */
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(14, 14),
      new THREE.MeshStandardMaterial({
        color: 0x020617,
        roughness: 0.95,
      }),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1;
    scene.add(ground);

    /* ================= LAPTOP ================= */
    const laptop = new THREE.Group();
    scene.add(laptop);

    // Base
    const base = new THREE.Mesh(
      new THREE.BoxGeometry(3.2, 0.18, 2),
      new THREE.MeshStandardMaterial({
        color: 0x1e293b,
        metalness: 0.6,
        roughness: 0.35,
        emissive: 0x0f172a,
        emissiveIntensity: 0.25,
      }),
    );
    base.position.y = -0.25;
    laptop.add(base);

    // Keyboard
    const keyMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.6,
    });

    for (let x = -1.3; x <= 1.3; x += 0.28) {
      for (let z = -0.7; z <= 0.7; z += 0.28) {
        const key = new THREE.Mesh(
          new THREE.BoxGeometry(0.18, 0.04, 0.18),
          keyMat,
        );
        key.position.set(x, -0.18, z);
        laptop.add(key);
      }
    }

    // Screen frame
    const screenFrame = new THREE.Mesh(
      new THREE.BoxGeometry(3.1, 1.9, 0.14),
      new THREE.MeshStandardMaterial({
        color: 0x020617,
        metalness: 0.6,
        roughness: 0.3,
      }),
    );
    screenFrame.position.set(0, 0.9, -1);
    laptop.add(screenFrame);

    /* ================= CODE SCREEN ================= */
    const codeCanvas = document.createElement("canvas");
    codeCanvas.width = 512;
    codeCanvas.height = 320;
    const ctx = codeCanvas.getContext("2d");

    const codeTexture = new THREE.CanvasTexture(codeCanvas);
    codeTexture.colorSpace = THREE.SRGBColorSpace;

    const screen = new THREE.Mesh(
      new THREE.PlaneGeometry(2.6, 1.5),
      new THREE.MeshBasicMaterial({ map: codeTexture }),
    );
    screen.position.set(0, 0.9, -0.92);
    laptop.add(screen);

    const codeLines = [
      "class Engineer {",
      "  constructor() {",
      "    this.name = 'Rudra Shankar Biswas';",
      "  }",
      "  skills() {",
      "    return ['React', 'ML', 'IoT'];",
      "  }",
      "}",
    ];

    let line = 0;
    let char = 0;
    let text = "";

    function drawCode() {
      ctx.fillStyle = "#020617";
      ctx.fillRect(0, 0, 512, 320);
      ctx.font = "18px monospace";
      ctx.fillStyle = "#38bdf8";

      const current = codeLines[line];
      text += current[char++] || "";

      if (char >= current.length) {
        text += "\n";
        char = 0;
        line = (line + 1) % codeLines.length;
      }

      text
        .split("\n")
        .slice(-10)
        .forEach((l, i) => ctx.fillText(l, 20, 40 + i * 26));

      codeTexture.needsUpdate = true;
    }

    /* ================= CPU CHIP ================= */
    const chip = new THREE.Mesh(
      new THREE.BoxGeometry(0.9, 0.18, 0.9),
      new THREE.MeshStandardMaterial({
        color: 0x374151,
        metalness: 0.8,
        roughness: 0.3,
        emissive: 0x38bdf8,
        emissiveIntensity: 0.35,
      }),
    );
    chip.position.set(2.5, -0.3, 0);
    scene.add(chip);

    /* ================= FLOATING TECH BLOCKS ================= */
    const cubes = [];
    for (let i = 0; i < 10; i++) {
      const cube = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 0.2, 0.2),
        new THREE.MeshStandardMaterial({
          color: 0x60a5fa,
          emissive: 0x38bdf8,
          emissiveIntensity: 0.3,
        }),
      );
      cube.userData = {
        angle: Math.random() * Math.PI * 2,
        radius: 3 + Math.random(),
        speed: 0.3 + Math.random() * 0.5,
      };
      scene.add(cube);
      cubes.push(cube);
    }

    /* ================= INTERACTION ================= */
    let mouseX = 0;
    let mouseY = 0;
    const onMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("pointermove", onMove);

    /* ================= ANIMATION ================= */
    const clock = new THREE.Clock();
    let raf;

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      drawCode();

      laptop.rotation.y = Math.sin(t * 0.3) * 0.3;
      laptop.rotation.x = Math.sin(t * 0.2) * 0.05;

      chip.rotation.y += 0.01;

      cubes.forEach((c) => {
        c.userData.angle += c.userData.speed * 0.01;
        c.position.set(
          Math.cos(c.userData.angle) * c.userData.radius,
          Math.sin(c.userData.angle * 2) * 0.6,
          Math.sin(c.userData.angle) * c.userData.radius,
        );
      });

      camera.position.x += (mouseX * 0.8 - camera.position.x) * 0.05;
      camera.position.y += (1.2 + mouseY * 0.5 - camera.position.y) * 0.05;
      camera.lookAt(0, 0.4, 0);

      renderer.render(scene, camera);
    };

    animate();

    /* ================= RESIZE ================= */
    const onResize = () => {
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(container);

    /* ================= CLEANUP ================= */
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      resizeObserver.disconnect();
      container.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ minHeight: "100vh" }}
    />
  );
}
