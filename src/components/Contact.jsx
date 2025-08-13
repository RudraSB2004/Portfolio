import React from "react";
import AnimatedText from "./AnimatedText";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="relative min-h-[88vh] flex items-center bg-grid">
      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 text-center">
        <AnimatedText
          text="Get in Touch"
          className="text-5xl font-bold mb-8 text-cyan-400"
        />

        <p className="text-gray-300 mb-8">
          Let’s work together! I’m always open to discussing new projects,
          creative ideas, or opportunities to be part of your vision.
        </p>

        <div className="flex justify-center gap-6 mb-6">
          <a
            href="mailto:rudra@example.com"
            className="glass p-4 rounded-full hover-pop text-cyan-400"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://github.com/RudraSB2004"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-4 rounded-full hover-pop text-white"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/rudra-sb2004/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-4 rounded-full hover-pop text-blue-400"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        <a
          href="mailto:rudra@example.com"
          className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:brightness-110"
        >
          Send Email
        </a>
      </div>
    </section>
  );
}
