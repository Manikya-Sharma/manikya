"use client";
import { RandomBubblesParallax } from "@/components/RandomBubbleParallax";
import { useMouse } from "../hooks/useMouse";
import { motion } from "motion/react";

const Page = () => {
  const { containerRef, cursorRef, x, y } = useMouse();
  return (
    <div
      className="relative h-full w-full flex items-center justify-center"
      ref={containerRef}
    >
      <motion.div
        className="absolute w-20 h-20 bg-rose-400 rounded-lg"
        whileTap={{ scale: 1.2 }}
        style={{
          top: y + (cursorRef.current?.clientHeight ?? 0) / 4,
          left: x + (cursorRef.current?.clientWidth ?? 0) / 4,
        }}
      ></motion.div>
      <div
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10 w-40 h-40 pointer-events-none"
        ref={cursorRef}
        style={{
          background: "rgba(255, 255, 255, 0.28)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5.3px)",
          border: "1px solid rgba(255, 255, 255, 0.24)",
        }}
      ></div>

      <RandomBubblesParallax bubbleCount={50} className="h-screen w-screen" />
    </div>
  );
};

export default Page;
