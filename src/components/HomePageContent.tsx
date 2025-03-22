"use client";

import Link from "next/link";
import { getMenuOptions } from "@/data/sections";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import WritingText from "./WritingText";
import { cn } from "@/lib/utils";
import { electrolize } from "@/lib/fonts";

const HomePageContent = () => {
  return (
    <div
      className={cn(
        "h-full w-full grid grid-cols-2 grid-rows-2 place-items-center text-2xl md:text-5xl gap-2",
        electrolize.className
      )}
    >
      {getMenuOptions({ size: "md:size-10", location: "hero" })
        .slice(1)
        .map((section) => (
          <Link
            href={section.href}
            className="group h-full w-full"
            key={section.label}
            style={{
              background: "rgba(255, 255, 255, 0.28)",
              borderRadius: "16px",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              backdropFilter: "blur(5.3px)",
              border: "1px solid rgba(255, 255, 255, 0.24)",
            }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
              }}
              className="flex items-center gap-3 md:gap-5 h-full w-full justify-center"
            >
              <span className="group-hover:rotate-12 transition-transform">
                {section.icon}
              </span>
              <WritingText className="text-2xl md:text-5xl">
                {section.label}
              </WritingText>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 2,
                }}
              >
                <ArrowRight className="size-6 md:size-10 group-hover:translate-x-2 md:group-hover:translate-x-5 transition-transform" />
              </motion.span>
            </motion.span>
          </Link>
        ))}
    </div>
  );
};

export default HomePageContent;
