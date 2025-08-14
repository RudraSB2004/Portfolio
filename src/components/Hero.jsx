import React from "react";
import AnimatedText from "./AnimatedText";
import ThreeHero from "./ThreeHero";
import { FaFileAlt } from "react-icons/fa";
import { ReactTyped as Typed } from "react-typed"; // ✅ named import for Vite
import { Link } from "react-router-dom";

const PROFILE =
  "https://media.licdn.com/dms/image/v2/D5603AQFYHrISm7Gwzg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730410992097?e=1758153600&v=beta&t=_Epk2-xoFJMCKAyYIVn6qRaF5c-_EDnohecRw2EZTBo";

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center">
      <ThreeHero />
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center relative z-10">
        <div>
          {/* Static heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
            I am Rudra
          </h1>

          {/* Dynamic typing animation */}
          <div className="mt-2 text-cyan-300 text-2xl font-semibold">
            <Typed
              strings={["Web Developer", "Student", "Java Developer"]}
              typeSpeed={60}
              backSpeed={40}
              loop
            />
          </div>

          {/* Shorter & clearer description */}
          <p className="mt-4 text-gray-300 text-lg leading-relaxed">
            Final-year ECE student from Kolkata with expertise in React,
            Node.js, SQL, MongoDB, AWS, and microservices. I create fast,
            scalable, and user-focused web applications that deliver real-world
            impact.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:brightness-110 hover-pop"
            >
              View Projects
            </Link>
            <a
              href="https://drive.google.com/file/d/1jhVZTiYqIUsSTZNUBRgt6mFoIG3EYjYK/view?usp=sharing"
              className="px-6 py-3 rounded-xl border border-cyan-400/60 text-cyan-300 hover:bg-cyan-400/10 hover-pop"
            >
              <FaFileAlt className="inline -mt-1 mr-2" /> Resume
            </a>
          </div>
        </div>

        {/* Profile Image */}
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
