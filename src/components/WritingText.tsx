"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const WritingText = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <motion.span
      className={cn("text-5xl", className)}
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
