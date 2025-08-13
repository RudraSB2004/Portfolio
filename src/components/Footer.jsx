import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-gray-400">
      <p>
        &copy; {new Date().getFullYear()} Rudra S.B. • Crafted with React, Vite,
        Tailwind, GSAP, Framer Motion & Three.js
      </p>
    </footer>
  );
}
