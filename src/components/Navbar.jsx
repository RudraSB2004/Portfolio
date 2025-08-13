import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const linkCls = ({ isActive }) =>
    `px-3 py-2 rounded-lg transition-colors ${
      isActive
        ? "text-cyan-400 bg-white/5"
        : "text-gray-300 hover:text-white hover:bg-white/5"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled
          ? "bg-base-card/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="text-xl font-semibold tracking-wide">
          <span className="text-cyan-400">Rudra</span> • Portfolio
        </NavLink>
        <div className="hidden md:flex items-center gap-2">
          <NavLink to="/about" className={linkCls}>
            About
          </NavLink>
          <NavLink to="/skills" className={linkCls}>
            Skills
          </NavLink>
          <NavLink to="/projects" className={linkCls}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={linkCls}>
            Contact
          </NavLink>
        </div>
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10"
          onClick={() => setOpen((s) => !s)}
          aria-label="Menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <NavLink to="/about" className={linkCls}>
            About
          </NavLink>
          <NavLink to="/skills" className={linkCls}>
            Skills
          </NavLink>
          <NavLink to="/projects" className={linkCls}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={linkCls}>
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}
