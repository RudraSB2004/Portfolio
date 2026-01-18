import { motion } from "framer-motion";
import { useState } from "react";

const PROJECTS = [
  {
    title: "Smart Healthcare Monitoring",
    desc: "IoT-based real-time healthcare monitoring system with cloud dashboards and alerting.",
    tech: ["React", "Node.js", "ESP32", "MongoDB"],
    link: null,
    year: "2026",
  },
  {
    title: "Jobify – LinkedIn Clone",
    desc: "A full-stack job portal inspired by LinkedIn, with chat and posts.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Socket.io",
    ],
    link: "https://github.com/RudraSB2004/Jobify",
    year: "2025",
  },
  {
    title: "FlySmart – Flight Price Prediction",
    desc: "ML app predicting flight prices, full deployment pipeline.",
    tech: [
      "React (Vite)",
      "Flask",
      "Tailwind CSS",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
    ],
    link: "https://github.com/RudraSB2004/FlySmart",
    year: "2025",
  },
];

const TECH_CATEGORIES = ["All", "React", "Node.js", "ML", "IoT", "Flask"];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = PROJECTS.filter(
    (p) => filter === "All" || p.tech.includes(filter),
  );

  return (
    <section
      className="py-32 px-8 relative overflow-hidden bg-[#0B0D10]"
      id="projects"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl font-bold mb-8 text-cyan-400 tracking-tight">
          Selected Work
        </h2>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-4 mb-12">
          {TECH_CATEGORIES.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`px-4 py-2 rounded-full border ${
                filter === t
                  ? "bg-cyan-400 text-black border-cyan-400"
                  : "text-gray-400 border-gray-700 hover:border-cyan-400 hover:text-cyan-400"
              } transition`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="space-y-16">
          {filtered.map((p) => (
            <motion.div
              key={p.title}
              whileHover={{ scale: 1.02 }}
              className="group relative p-10 rounded-3xl bg-black/40 border border-cyan-400/20 backdrop-blur transition"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-3xl font-semibold text-white">{p.title}</h3>
                <span className="text-sm text-cyan-400/80">{p.year}</span>
              </div>
              <p className="mt-4 text-gray-300 max-w-4xl leading-relaxed">
                {p.desc}
              </p>
              <div className="mt-6 flex gap-3 flex-wrap">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-4 py-1 rounded-full text-sm bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-8 text-cyan-400 hover:text-cyan-300 transition"
                >
                  View on GitHub →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
