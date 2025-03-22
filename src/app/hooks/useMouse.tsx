import { throttle } from "lodash";
import { useEffect, useRef, useState } from "react";

export const useMouse = () => {
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

  return { x, y, containerRef, cursorRef };
};
