import { motion } from "framer-motion";
import { ReactTyped as Typed } from "react-typed";
import ThreeHero from "./ThreeHero";
import AnimatedText from "./AnimatedText";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <ThreeHero />

      <div className="relative z-10 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20 items-center text-shadow-blue-400">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Animated Name */}
          <AnimatedText
            text={`Rudra\n Shankar Biswas`} // or "Rudra\nShankar Biswas" for forced line break
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
            as="h1"
          />

          {/* Typed roles */}
          <div className="mt-6 text-xl sm:text-2xl text-cyan-300 font-medium">
            <Typed
              strings={[
                "Full-Stack Engineer",
                "Machine Learning Enthusiast",
                "IoT & Systems Builder",
              ]}
              typeSpeed={55}
              backSpeed={32}
              loop
            />
          </div>

          {/* Description */}
          <p className="mt-6 text-gray-300 text-base sm:text-lg max-w-xl leading-relaxed">
            Final-year Electronics & Communication Engineering student focused
            on building scalable web systems, intelligent applications, and
            immersive digital experiences with real-world impact.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#projects"
              className="px-8 py-4 bg-cyan-400 text-black font-semibold rounded-xl shadow-lg shadow-cyan-400/20"
            >
              Explore Work
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="https://drive.google.com/file/d/18GKYselK8CPBhuf9TrqyxwQZ8sm_9_B5/view?usp=sharing"
              target="_blank"
              className="px-8 py-4 border border-cyan-400/40 rounded-xl text-cyan-300 hover:bg-cyan-400/10 backdrop-blur"
            >
              Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Right-side spacer */}
        <div className="hidden lg:block" />
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
