"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "motion/react";

/*

Tags:-

Web-dev:-
- HTML
- CSS
- TailwindCSS
- JavaScript
- TypeScript
- React
- NextJS

Machine Learning:-
- Python
- TensorFlow
- PyTorch
- Scikit-learn
- Jupyter

Software Engineering:-
- Java
- C++
- C
- Rust
- Docker

Competitive Programming:-
- C++
- Python
- Java
- Algorithms
- Data Structures
- Problem Solving

*/

const tagColorMap = {
  html: "bg-red-50 border-red-300 text-red-700",
  css: "bg-sky-50 border-sky-300 text-sky-700",
  tailwindcss: "bg-cyan-50 border-cyan-300 text-cyan-700",
  javascript: "bg-yellow-50 border-yellow-300 text-yellow-700",
  typescript: "bg-blue-50 border-blue-300 text-blue-700",
  react: "bg-sky-50 border-sky-300 text-sky-700",
  nextjs: "bg-zinc-50 border-zinc-300 text-black",
  python: "bg-teal-50 border-teal-300 text-teal-700",
  tensorflow: "bg-yellow-50 border-yellow-300 text-yellow-700",
  pytorch: "bg-orange-50 border-orange-300 text-orange-700",
  "scikit-learn": "bg-amber-50 border-amber-300 text-amber-700",
  jupyter: "bg-yellow-50 border-yellow-300 text-yellow-700",
  java: "bg-sky-50 border-sky-300 text-sky-700",
  cpp: "bg-blue-50 border-blue-300 text-blue-700",
  c: "bg-sky-50 border-sky-300 text-sky-700",
  rust: "bg-zinc-50 border-zinc-300 text-zinc-700",
  docker: "bg-blue-50 border-blue-300 text-blue-700",
  algorithms: "bg-red-50 border-red-300 text-red-700",
  "data-structures": "bg-blue-50 border-blue-300 text-blue-700",
  "problem-solving": "bg-green-50 border-green-300 text-green-700",
  prisma: "bg-blue-50 border-blue-300 text-blue-700",
  vercel: "bg-zinc-50 border-zinc-300 text-zinc-700",
  "react-query": "bg-amber-50 border-amber-300 text-amber-700",
} as { [key: string]: string };

const bgMap = {
  html: "bg-red-100",
  css: "bg-sky-100",
  tailwindcss: "bg-cyan-100",
  javascript: "bg-yellow-100",
  typescript: "bg-blue-100",
  react: "bg-sky-100",
  nextjs: "bg-zinc-100",
  python: "bg-teal-100",
  tensorflow: "bg-yellow-100",
  pytorch: "bg-orange-100",
  "scikit-learn": "bg-amber-100",
  jupyter: "bg-yellow-100",
  java: "bg-sky-100",
  cpp: "bg-blue-100",
  c: "bg-sky-100",
  rust: "bg-zinc-100",
  docker: "bg-blue-100",
  algorithms: "bg-red-100",
  "data-structures": "bg-blue-100",
  "problem-solving": "bg-green-100",
  prisma: "bg-blue-100",
  vercel: "bg-zinc-100",
  "react-query": "bg-amber-100",
} as { [key: string]: string };

const getTagText = (tagName: string) => {
  switch (tagName) {
    case "tailwindcss":
      return "Tailwind CSS";
    case "javascript":
      return "JavaScript";
    case "typescript":
      return "TypeScript";
    case "nextjs":
      return "NextJS";
    case "scikit-learn":
      return "Scikit-learn";
    case "pytorch":
      return "PyTorch";
    case "tensorflow":
      return "TensorFlow";
    case "cpp":
      return "C++";
    case "data-structures":
      return "Data Structures";
    case "problem-solving":
      return "Problem Solving";
    case "html":
      return "HTML";
    case "css":
      return "CSS";
    case "gpt":
      return "GPT";
    case "postgresql":
      return "PostgreSQL";
    case "react-query":
      return "React Query";
    default:
      return tagName.charAt(0).toUpperCase() + tagName.slice(1);
  }
};

const SkillTag = ({
  tagName,
  className,
}: {
  className?: string;
  tagName: string;
}) => {
  return (
    <motion.div
      whileHover="hover"
      whileTap="tap"
      className="relative cursor-pointer"
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        variants={{
          hover: {
            opacity: 1,
          },
        }}
        className={cn("absolute inset-0 rounded-md -z-50", bgMap[tagName])}
      />
      <motion.div
        variants={{
          hover: {
            x: 3,
            y: -3,
          },
          tap: {
            x: 0,
            y: 0,
          },
        }}
        className={cn(
          "px-2 py-1 rounded-lg border font-semibold tracking-wide flex items-center gap-1 pointer-events-none select-none",
          tagColorMap[tagName],
          className
        )}
      >
        <img src={`/logos/${tagName}-logo.svg`} className="block size-5" />
        {getTagText(tagName)}
      </motion.div>
    </motion.div>
  );
};

export default SkillTag;
