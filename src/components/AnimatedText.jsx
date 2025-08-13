import React from "react";
import ThreeHero from "./ThreeHero";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  // return (
  //   <section className="relative min-h-[88vh] flex items-center justify-center">
  //     {/* 3D Background */}
  //     <div className="absolute inset-0 -z-10 pointer-events-none">
  //       <ThreeHero />
  //     </div>
  //     {/* Foreground Content */}
  //     <motion.div
  //       initial={{ opacity: 0, scale: 0.9, y: 50 }}
  //       animate={{ opacity: 1, scale: 1, y: 0 }}
  //       transition={{ duration: 0.8, ease: "easeOut" }}
  //       className="glass p-10 rounded-2xl max-w-3xl mx-auto text-center shadow-2xl"
  //     >
  //       {/* Animated Heading */}
  //       <AnimatedText
  //         text="Get in Touch"
  //         className="text-5xl font-extrabold mb-6"
  //       />
  //       {/* Animated Paragraph */}
  //       <motion.p
  //         initial={{ opacity: 0, y: 20 }}
  //         animate={{ opacity: 1, y: 0 }}
  //         transition={{ delay: 0.5, duration: 0.6 }}
  //         className="text-gray-300 text-lg mb-8 leading-relaxed"
  //       >
  //         Let’s work together! Whether it’s web development, IoT, or cloud
  //         microservices, I’d love to hear from you.
  //       </motion.p>
  //       {/* Email Button */}
  //       <motion.a
  //         href="mailto:rudra@example.com"
  //         initial={{ opacity: 0, y: 20 }}
  //         animate={{ opacity: 1, y: 0 }}
  //         transition={{ delay: 0.8, duration: 0.6 }}
  //         whileHover={{
  //           scale: 1.05,
  //           boxShadow: "0px 0px 20px rgba(34, 211, 238, 0.8)",
  //         }}
  //         className="px-8 py-4 rounded-xl bg-cyan-400 text-black font-semibold text-lg shadow-lg hover:brightness-110 inline-block"
  //       >
  //         📧 Send Email
  //       </motion.a>
  //       {/* Social Links */}
  //       <motion.div
  //         initial={{ opacity: 0, y: 20 }}
  //         animate={{ opacity: 1, y: 0 }}
  //         transition={{ delay: 1, duration: 0.6 }}
  //         className="flex justify-center gap-6 mt-8"
  //       >
  //         <a
  //           href="https://www.linkedin.com/in/rudra-sb2004/"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           className="p-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-2xl shadow-lg transition-all hover:scale-110"
  //         >
  //           <FaLinkedin />
  //         </a>
  //         <a
  //           href="https://github.com/RudraSB2004"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //           className="p-4 rounded-full bg-gray-800 hover:bg-gray-900 text-white text-2xl shadow-lg transition-all hover:scale-110"
  //         >
  //           <FaGithub />
  //         </a>
  //       </motion.div>
  //     </motion.div>
  //   </section>
  // );
}
