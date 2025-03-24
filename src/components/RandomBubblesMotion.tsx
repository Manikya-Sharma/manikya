"use client";

import { useIsMobile } from "@/app/hooks/useIsMobile";
import {
  MAX_RADIUS,
  MAX_SPEED,
  MIN_RADIUS,
  MIN_SPEED,
} from "@/lib/bubbles-constants";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const COLORS = [
  "bg-rose-400",
  "bg-blue-400",
  "bg-green-400",
  "bg-yellow-400",
  "bg-indigo-400",
  "bg-purple-400",
];

// NOTE: This component is resource intensive and may cause performance issues
// if used in large quantities. Use with caution.
export const RandomBubblesMotion = ({
  bubbleCount,
  className,
}: {
  bubbleCount: number;
  className?: string;
}) => {
  const isMobile = useIsMobile();

  // We want max performance on mobile devices
  const count = isMobile ? 10 : bubbleCount;
  const max_radius = isMobile ? 20 : MAX_RADIUS;
  const min_radius = isMobile ? 10 : MIN_RADIUS;
  // Question: does it affect performance?
  const max_speed = MAX_SPEED;
  const min_speed = MIN_SPEED;

  const [randomDirections, setRandomDirections] = useState<
    Array<{ dx: number; dy: number; speed: number }>
  >([]);
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
    for (let i = 0; i < count; i++) {
      setBubbles((prev) => [
        ...prev,
        {
          x: Math.random() * (window.innerWidth - 2 * max_radius) + max_radius,
          y: Math.random() * (window.innerHeight - 2 * max_radius) + max_radius,
          r: Math.random() * (max_radius - min_radius) + min_radius,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        },
      ]);
      setRandomDirections((prev) => [
        ...prev,
        {
          dx: Math.random() * 2 - 1,
          dy: Math.random() * 2 - 1,
          speed: Math.random() * (max_speed - min_speed) + min_speed,
        },
      ]);
    }
  }, [count, max_radius, max_speed, min_radius, min_speed]);

  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const moveBubbles = () => {
      for (let i = 0; i < count; i++) {
        if (!bubbles[i]) continue;
        const { r } = bubbles[i];
        const bubble = bubbleRefs.current?.get(bubbles[i]);
        if (!bubble) continue;
        const { dx, dy, speed } = randomDirections[i];
        const x = bubble.offsetLeft;
        const y = bubble.offsetTop;
        let new_x = x + dx * speed;
        let new_y = y + dy * speed;
        if (new_x - r < 0) {
          randomDirections[i].dx = -dx;
          new_x += 2;
        } else if (new_x + r > width) {
          randomDirections[i].dx = -dx;
          new_x -= 2;
        }
        if (new_y - r < 0) {
          randomDirections[i].dy = -dy;
          new_y += 2;
        } else if (new_y + r > height) {
          randomDirections[i].dy = -dy;
          new_y -= 2;
        }
        bubble.style.top = `${new_y}px`;
        bubble.style.left = `${new_x}px`;
      }
    };
    const interval = setInterval(moveBubbles, isMobile ? 1000 / 17 : 1000 / 30);
    return () => clearInterval(interval);
  }, [bubbleRefs, bubbles, count, randomDirections, isMobile]);

  return (
    <div className={cn("-z-[1000] overflow-hidden", className)}>
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
  );
};
