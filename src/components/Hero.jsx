import React from "react";
import AnimatedText from "./AnimatedText";
import ThreeHero from "./ThreeHero";
import { FaFileAlt } from "react-icons/fa";

const PROFILE =
  "https://media.licdn.com/dms/image/v2/D5603AQFYHrISm7Gwzg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730410992097?e=1758153600&v=beta&t=_Epk2-xoFJMCKAyYIVn6qRaF5c-_EDnohecRw2EZTBo";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center">
      <ThreeHero />
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center relative z-10">
        <div>
          <AnimatedText
            text="Hi, I’m Rudra."
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
          />
          <p className="mt-4 text-gray-300 text-lg">
            I build modern, performant, and beautiful web apps. 4th-year ECE
            student from Kolkata, India. Skilled in React, Node.js, SQL,
            MongoDB, AWS, and Microservices.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/projects"
              className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:brightness-110 hover-pop"
            >
              View Projects
            </a>
            <a
              href="#"
              className="px-6 py-3 rounded-xl border border-cyan-400/60 text-cyan-300 hover:bg-cyan-400/10 hover-pop"
            >
              <FaFileAlt className="inline -mt-1 mr-2" /> Resume
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <img
              src={PROFILE}
              alt="Rudra"
              className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover rounded-full border-4 border-cyan-400 shadow-glow"
            />
            <div className="absolute -inset-2 rounded-full blur-2xl opacity-25 bg-cyan-400 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
