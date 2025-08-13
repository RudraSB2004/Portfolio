import React from "react";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";

const VIDEOS = [
  {
    title: "Project 1",
    src: "https://drive.google.com/file/d/12fLggMnJX0BV6YfesRMhE3U7cgjoXgQS/preview",
    desc: "A polished front-end experience focused on speed, motion, and clarity.",
  },
  {
    title: "Project 2",
    src: "https://drive.google.com/file/d/16l-aVo4cQDWZQ0Pm9EDizjFVQInvnnEN/preview",
    desc: "Full-stack work with clean APIs and robust state management.",
  },
  {
    title: "Project 3",
    src: "https://drive.google.com/file/d/1vXAIcu0VDnJl2BufTL1miGbQAOk5fRH0/preview",
    desc: "Systems thinking meets UI—functional, dependable, and delightful.",
  },
];

export default function Projects() {
  return (
    <section className="relative min-h-[88vh] px-6 py-20 bg-grid">
      <div className="max-w-6xl mx-auto text-center">
        {/* Animated Heading */}
        <AnimatedText
          text="My Projects"
          className="text-5xl font-bold mb-4 text-cyan-400"
        />
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          A selection of my work showcasing my skills in front-end, back-end,
          and system-level development. Each project reflects my passion for
          clean design, performance, and user-focused solutions.
        </p>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-7">
          {VIDEOS.map((v, i) => (
            <motion.article
              key={i}
              className="glass overflow-hidden hover-pop"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <div className="aspect-video">
                <iframe
                  src={v.src}
                  title={v.title}
                  className="w-full h-full"
                  allow="autoplay; fullscreen"
                />
              </div>
              <div className="p-6">
                <motion.h3
                  className="text-xl font-semibold mb-2 text-cyan-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.25 + 0.3, duration: 0.4 }}
                >
                  {v.title}
                </motion.h3>
                <p className="text-gray-300 text-sm">{v.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
