"use client";

import { Loader2 } from "lucide-react";
import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

export const ViewportVideo = ({
  children,
  className,
  ...props
}: React.VideoHTMLAttributes<HTMLVideoElement>) => {
  const [hasVisited, setHasVisited] = useState(false);

  const videoRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(videoRef);

  useEffect(() => {
    if (hasVisited) return;
    if (isInView) {
      setHasVisited(true);
    }
  }, [isInView, hasVisited]);

  return (
    <div className={className} ref={videoRef}>
      {hasVisited ? (
        <video className="rounded-lg" {...props}>
          {children}
        </video>
      ) : (
        <div className="aspect-video w-full h-full flex flex-col items-center justify-center">
          <Loader2 className="animate-spin size-6" />
        </div>
      )}
    </div>
  );
};
