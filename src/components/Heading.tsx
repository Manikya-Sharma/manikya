"use client";

import { space } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const Heading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "h-screen w-full grid place-items-center text-9xl uppercase tracking-tighter font-bold",
        space.className,
        className
      )}
    >
      {children}
    </motion.h1>
  );
};

export default Heading;
