import React, { useEffect, useRef } from "react";
import AnimatedText from "./AnimatedText";
import {
  FaReact,
  FaJava,
  FaMicrochip,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
  FaAws,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

const SKILLS = [
  {
    name: "React / Vite",
    icon: <FaReact className="text-3xl text-cyan-400" />,
    level: 90,
  },
  {
    name: "Java",
    icon: <FaJava className="text-3xl text-sky-400" />,
    level: 85,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-3xl text-green-400" />,
    level: 82,
  },
  {
    name: "SQL",
    icon: <FaDatabase className="text-3xl text-yellow-400" />,
    level: 80,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-3xl text-green-500" />,
    level: 78,
  },
  {
    name: "AWS Microservices",
    icon: <FaAws className="text-3xl text-orange-400" />,
    level: 75,
  },
  {
    name: "Electronics & IoT",
    icon: <FaMicrochip className="text-3xl text-red-400" />,
    level: 70,
  },
  {
    name: "Git / GitHub",
    icon: <FaGitAlt className="text-3xl text-orange-400" />,
    level: 88,
  },
];

export default function Skills() {
  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = entry.target.dataset.level + "%";
          }
        });
      },
      { threshold: 0.5 }
    );

    skillRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedText
          text="My Expertise"
          className="text-4xl font-extrabold mb-12 text-cyan-400"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((s, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-cyan-400/30 bg-black/50 backdrop-blur-md shadow-lg hover:scale-[1.03] transition-transform duration-300"
              style={{ boxShadow: "0 0 20px rgba(0, 255, 255, 0.2)" }}
            >
              <div className="flex items-center gap-4 mb-4">
                {s.icon}
                <h3 className="text-xl font-semibold text-white">{s.name}</h3>
              </div>
              <div className="h-2 w-full bg-white/10 rounded overflow-hidden">
                <div
                  ref={(el) => (skillRefs.current[i] = el)}
                  className="h-2 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-[2000ms]"
                  data-level={s.level}
                  style={{ width: "0%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
