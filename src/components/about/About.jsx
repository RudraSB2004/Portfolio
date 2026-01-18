export default function About() {
  return (
    <section className="relative py-36 px-8 bg-gradient-to-b from-black via-black/90 to-black/70">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        {/* Heading */}
        <div>
          <h2 className="text-sm uppercase tracking-widest text-cyan-400 mb-4">
            About
          </h2>
          <h3 className="text-5xl font-semibold text-white leading-tight">
            Building thoughtful <br />
            digital experiences
          </h3>
        </div>

        {/* Content */}
        <div className="text-gray-300 text-lg leading-relaxed space-y-8">
          <p>
            I’m{" "}
            <span className="text-white font-medium">Rudra Shankar Biswas</span>
            , a final-year Electronics and Communication Engineering student at
            Techno India University, Kolkata.
          </p>

          <p>
            My work lives at the intersection of{" "}
            <span className="text-white">
              full-stack development, machine learning, and embedded systems
            </span>
            — crafting solutions that are scalable, performant, and shaped by
            real-world constraints.
          </p>

          <p>
            I enjoy translating complex ideas into clean, intuitive systems with
            a strong focus on design, usability, and long-term impact.
          </p>
        </div>
      </div>
    </section>
  );
}
