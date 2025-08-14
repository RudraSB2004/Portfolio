import React from "react";
import { motion } from "framer-motion";

export default function AnimatedText({ text, className = "", as: Tag = "h1" }) {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.03 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: "0.3em", rotateX: 90 },
    show: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="inline-block"
    >
      <Tag className={className}>
        {letters.map((char, i) => (
          <motion.span
            key={i}
            variants={child}
            style={{
              display: "inline-block",
              perspective: 100,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
}
