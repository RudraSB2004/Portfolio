import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Contact() {
  return (
    <section className="py-32 px-6 relative overflow-hidden text-center bg-[#0B0D10]">
      {/* Subtle cyan background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mt-16 p-10 rounded-3xl bg-black/40 border border-cyan-400/20 backdrop-blur">
          <h3 className="text-2xl font-semibold text-white mb-8">
            LeetCode Activity
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-cyan-400">451</p>
              <p className="text-sm text-gray-400">Problems Solved</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-cyan-400">302</p>
              <p className="text-sm text-gray-400">Active Days</p>
            </div>

            <div>
              <p className="text-4xl font-bold text-cyan-400">23</p>
              <p className="text-sm text-gray-400">Max Streak</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <span>🌍 Rank ~214,200</span>
            <span>🏅 7 Badges</span>
            <span>📨 861 Submissions (1 year)</span>
          </div>
        </div>
        <h2 className="text-4xl font-bold mb-4 text-cyan-400 tracking-tight mt-10">
          Get in Touch
        </h2>

        <p className="text-gray-300 mb-10">
          Open to full-time software roles, backend positions, and impactful
          engineering teams.
        </p>

        {/* Email */}
        <a
          href="mailto:rudra.sb2004@gmail.com"
          className="inline-block px-8 py-4 bg-cyan-400 text-black font-semibold rounded-xl hover:scale-105 transition"
        >
          Email Me
        </a>

        {/* Social links */}
        <div className="mt-12 flex justify-center gap-12">
          <a
            href="https://www.linkedin.com/in/rudra-sb2004/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <FaLinkedin size={32} />
            <p className="mt-2 text-sm">LinkedIn</p>
          </a>

          <a
            href="https://github.com/RudraSB2004"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <FaGithub size={32} />
            <p className="mt-2 text-sm">GitHub</p>
          </a>

          <a
            href="https://leetcode.com/u/RudraSB2004/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition"
          >
            <SiLeetcode size={32} />
            <p className="mt-2 text-sm">LeetCode</p>
          </a>
        </div>

        {/* LeetCode Stats */}
      </div>
    </section>
  );
}
