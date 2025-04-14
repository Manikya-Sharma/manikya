"use client";

import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";

export const ContactCard = ({
  className,
  text,
  image,
}: {
  className?: string;
  text: string;
  image: string;
}) => {
  return (
    <motion.button
      transition={{
        duration: 0.2,
      }}
      initial={"initial"}
      whileHover={"hover"}
      whileTap={{ scale: 0.95 }}
      variants={{
        hover: {
          paddingTop: 5,
          paddingBottom: 5,
          paddingLeft: 18,
          paddingRight: 40,
        },
        initial: {
          paddingTop: 5,
          paddingBottom: 5,
          paddingLeft: 40,
          paddingRight: 18,
        },
      }}
      className={cn("relative flex items-center gap-2", className)}
    >
      <motion.div
        className="absolute left-3"
        variants={{
          initial: {
            x: 0,
            opacity: 1,
            scale: 1,
          },
          hover: {
            x: -20,
            opacity: 0,
            scale: 0,
          },
        }}
      >
        <img src={image} alt="Linkedin Logo" className="inline-block size-5" />
      </motion.div>
      <motion.div
        className="flex"
        variants={{
          hover: {
            transition: {
              staggerChildren: 0.01,
            },
            x: 10,
          },
        }}
      >
        {text.split("").map((char, idx) => (
          <motion.div
            key={idx}
            variants={{
              initial: { x: 0 },
              hover: { x: -10 },
            }}
          >
            {char}
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="absolute right-3"
        variants={{
          initial: {
            x: 20,
            opacity: 0,
            scale: 0,
          },
          hover: {
            x: 0,
            opacity: 1,
            scale: 1,
          },
        }}
      >
        <ExternalLink className="inline-block size-4" />
      </motion.div>
    </motion.button>
  );
};
