"use client";

import { space } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";

const Heading = ({
  children,
  className,
  hasScroll,
}: {
  children: React.ReactNode;
  className?: string;
  hasScroll?: boolean;
}) => {
  const { scrollY } = useScroll();
  const [isOnTop, setIsOnTop] = useState(true);
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsOnTop(latest === 0);
  });
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
      {hasScroll && (
        <video
          src="/scroll-down.mp4"
          loop
          autoPlay
          muted
          className={cn(
            "w-24 lg:w-32 aspect-[17/10] absolute bottom-5 right-5 bg-white transition-opacity",
            isOnTop ? "opacity-100" : "opacity-0"
          )}
        />
      )}
    </motion.h1>
  );
};

export default Heading;
