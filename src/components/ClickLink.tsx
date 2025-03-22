"use client";

import { useMouse } from "@/app/hooks/useMouse";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const ClickLink = ({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) => {
  const { containerRef, cursorRef, x, y } = useMouse();

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      ref={containerRef}
      className={cn("relative group", className)}
    >
      <motion.div
        style={{ x, y }}
        ref={cursorRef}
        variants={{
          initial: {
            scale: 0,
            opacity: 0,
          },
          hover: {
            scale: 1,
            opacity: 1,
          },
        }}
        className="absolute pointer-events-none size-16 md:size-20 rounded-full bg-black text-white flex items-center justify-center"
      >
        <ArrowRight className="size-6 group-active:translate-x-2 transition-transform" />
      </motion.div>
      <Link className="cursor-none" href={href}>
        {children}
      </Link>
    </motion.div>
  );
};

export default ClickLink;
