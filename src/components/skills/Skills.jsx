import { motion } from "framer-motion";

const STACK = {
  "Web & Backend": ["React", "Node.js", "SQL", "MongoDB"],
  Programming: ["Java", "Python"],
  "AI / ML": ["Machine Learning", "Deep Learning"],
  Systems: ["IoT", "Embedded Systems", "Git/GitHub"],
};

export default function Skills() {
  return (
    <section className="py-32 px-8 relative overflow-hidden bg-[#0B0D10]">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl font-bold mb-16 text-cyan-400 tracking-tight">
          Technical Stack
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {Object.entries(STACK).map(([title, items]) => (
            <motion.div
              key={title}
              whileHover={{ y: -5 }}
              className="group relative p-6 rounded-2xl bg-black/40 border border-cyan-400/20 backdrop-blur transition"
            >
              <h3 className="text-xl font-semibold mb-4 text-white tracking-wide">
                {title}
              </h3>

              <ul className="space-y-4">
                {items.map((i) => (
                  <li key={i}>
                    <span className="text-gray-400">{i}</span>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="h-1 mt-1 bg-cyan-400 rounded-full"
                    />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
