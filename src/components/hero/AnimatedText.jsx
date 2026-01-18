import React from "react";
import { motion } from "framer-motion";

export default function AnimatedText({ text, className = "", as: Tag = "h1" }) {
  const words = text.split(" "); // split by words

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
      className="w-full"
    >
      <Tag
        className={`${className} leading-tight`}
        style={{ wordBreak: "break-word", whiteSpace: "normal" }}
      >
        {words.map((word, i) => (
          <React.Fragment key={i}>
            {word.split("").map((char, j) => (
              <motion.span
                key={j}
                variants={child}
                style={{ display: "inline-block" }}
                className="text-cyan-400"
              >
                {char}
              </motion.span>
            ))}
            {i < words.length - 1 && "\u00A0"} {/* add space between words */}
          </React.Fragment>
        ))}
      </Tag>
    </motion.div>
  );
}
