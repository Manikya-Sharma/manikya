"use client";

import { space } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const SmallHeading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 1 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "text-5xl md:text-7xl uppercase tracking-tighter font-bold",
        space.className,
        className
      )}
    >
      {children}
    </motion.h2>
  );
};

export default SmallHeading;
