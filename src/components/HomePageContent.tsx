"use client";

import Link from "next/link";
import { getMenuOptions } from "@/data/sections";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import WritingText from "./WritingText";

const HomePageContent = () => {
  return (
    <div className="h-full w-full grid grid-cols-2 grid-rows-2 place-items-center text-2xl md:text-5xl gap-0.5">
      {getMenuOptions("md:size-10")
        .slice(1)
        .map((section) => (
          <Link
            href={section.href}
            className="group bg-black h-full w-full text-white hover:bg-black/70 transition-colors"
            key={section.label}
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
              <WritingText>{section.label}</WritingText>
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
