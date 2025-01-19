"use client";

import { space } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const RaisedButton = ({
  children,
  className,
  onButtonClick,
}: {
  children: React.ReactNode;
  className?: string;
  onButtonClick?: () => void;
}) => {
  return (
    <motion.button
      onClick={onButtonClick}
      className={cn("relative group text-5xl", space.className, className)}
      whileHover="hover"
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        variants={{
          hover: {
            opacity: 1,
          },
        }}
        className="absolute inset-0 rounded-md -z-50 bg-black"
      />
      <motion.div
        variants={{
          hover: {
            x: 16,
            y: -16,
          },
        }}
        className="px-5 py-3 rounded-md outline-dashed group-hover:outline bg-white"
      >
        {children}
      </motion.div>
    </motion.button>
  );
};

export default RaisedButton;
