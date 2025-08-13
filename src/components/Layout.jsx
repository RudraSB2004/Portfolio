import React from "react";
import ThreeHero from "./ThreeHero";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      {/* 3D Background once */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <ThreeHero />
      </div>

      {/* Foreground */}
      <div className="bg-black/80 text-white min-h-screen relative z-10">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
