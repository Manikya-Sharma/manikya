"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";

const SmallGoto = ({
  to,
  className,
  children,
}: {
  to: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={to}>
      <motion.div
        className={cn("relative group", className)}
        whileHover="hover"
        whileTap="tap"
      >
        <motion.div
          initial={{
            opacity: 0,
          }}
          variants={{
            tap: { opacity: 0 },
            hover: {
              opacity: 1,
            },
          }}
          transition={{ duration: 0.1 }}
          className="absolute inset-0 rounded-md -z-50 bg-black"
        />
        <motion.div
          variants={{
            hover: {
              x: 4,
              y: -4,
            },
            tap: {
              x: 0,
              y: 0,
            },
          }}
          transition={{ duration: 0.1 }}
          className="p-1 md:p-2 rounded-md border border-black/30 bg-white transition-colors"
        >
          {children}
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default SmallGoto;
