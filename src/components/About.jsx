import React from "react";
import AnimatedText from "./AnimatedText";

export default function About() {
  return (
    <section className="relative min-h-[88vh] flex items-center bg-grid">
      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 text-center">
        <AnimatedText
          text="About Me"
          className="text-5xl font-bold mb-8 text-cyan-400"
        />

        <div className="glass p-8 hover-pop">
          <p className="text-gray-300 text-lg mb-4">
            Hi, I’m <span className="text-cyan-400 font-semibold">Rudra</span> —
            a final-year <span className="text-purple-400">B.Tech ECE</span>{" "}
            student at{" "}
            <span className="text-yellow-400">
              Techno India University, Kolkata
            </span>
            . I’m passionate about{" "}
            <span className="text-green-400">full-stack web development</span>,
            <span className="text-pink-400"> IoT</span>, and building{" "}
            <span className="text-orange-400">scalable cloud solutions</span>.
          </p>
          <p className="text-gray-400">
            I love combining creativity and logic to solve real-world problems
            through code. My projects range from sleek, modern websites to IoT
            systems, and I’m always looking for new opportunities to collaborate
            and learn.
          </p>
        </div>
      </div>
    </section>
  );
}
