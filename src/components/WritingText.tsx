"use client";

import { motion } from "motion/react";

const WritingText = ({ children }: { children: string }) => {
  return (
    <motion.span
      className="text-5xl"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.08 } },
        hidden: {},
      }}
    >
      {children.split("").map((char, idx) => (
        <motion.span
          key={idx}
          variants={{
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default WritingText;
