"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { throttle } from "lodash";
import { ArrowRight } from "lucide-react";

const ClickLink = ({
  children,
  className,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
}) => {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = throttle((e: MouseEvent) => {
      if (containerRef.current === null || cursorRef.current === null) return;
      setX(
        e.clientX -
          containerRef.current.getBoundingClientRect().left -
          cursorRef.current.clientWidth / 2
      );
      setY(
        e.clientY -
          containerRef.current.getBoundingClientRect().top -
          cursorRef.current.clientHeight / 2
      );
    }, 1000 / 60);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

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
