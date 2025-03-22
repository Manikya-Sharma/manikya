"use client";

import { useMouse } from "@/app/hooks/useMouse";
import {
  MAX_RADIUS,
  MIN_RADIUS,
  PARALLAX_FACTOR,
} from "@/lib/bubbles-constants";
import { cn } from "@/lib/utils";
import { throttle } from "lodash";
import { useEffect, useRef, useState } from "react";

const COLORS = [
  "bg-rose-400",
  "bg-blue-400",
  "bg-green-400",
  "bg-yellow-400",
  "bg-indigo-400",
  "bg-purple-400",
];

export const RandomBubblesParallax = ({
  bubbleCount,
  className,
}: {
  bubbleCount: number;
  className?: string;
}) => {
  const mouse = useMouse();
  const { containerRef, cursorRef, x, y } = mouse;

  const [bubbles, setBubbles] = useState<
    Array<{
      x: number;
      y: number;
      r: number;
      color: string;
    }>
  >([]);

  const bubbleRefs = useRef<Map<
    (typeof bubbles)[number],
    HTMLDivElement | null
  > | null>(null);
  const getMap = () => {
    if (!bubbleRefs.current) {
      bubbleRefs.current = new Map();
    }
    return bubbleRefs.current;
  };

  useEffect(() => {
    for (let i = 0; i < bubbleCount; i++) {
      setBubbles((prev) => [
        ...prev,
        {
          x: Math.random() * (window.innerWidth - 2 * MAX_RADIUS) + MAX_RADIUS,
          y: Math.random() * (window.innerHeight - 2 * MAX_RADIUS) + MAX_RADIUS,
          r: Math.random() * (MAX_RADIUS - MIN_RADIUS) + MIN_RADIUS,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        },
      ]);
    }
  }, [bubbleCount]);

  useEffect(() => {
    const handleMouseMove = throttle(() => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      for (let i = 0; i < bubbleCount; i++) {
        const bubble = bubbleRefs.current?.get(bubbles[i]);
        if (!bubble || !bubbles[i]) continue;
        const { r } = bubbles[i];
        const x_transform = (x / width / PARALLAX_FACTOR) * r;
        const y_transform = (y / height / PARALLAX_FACTOR) * r;
        bubble.style.transform = `translate(${x_transform}px, ${y_transform}px)`;
      }
    }, 1000 / 60);
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y, bubbleCount, bubbles]);

  return (
    <div
      ref={containerRef}
      className={cn("-z-[1000] overflow-hidden", className)}
    >
      <div ref={cursorRef}>
        {bubbles.map((bubble, index) => (
          <div
            key={index}
            className={cn("absolute rounded-full", bubble.color)}
            ref={(el) => {
              const map = getMap();
              map.set(bubble, el);
              return () => {
                map.delete(bubble);
              };
            }}
            style={{
              top: bubble.y,
              left: bubble.x,
              width: bubble.r,
              height: bubble.r,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
