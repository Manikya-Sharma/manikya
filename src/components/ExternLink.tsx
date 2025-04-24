"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ExternalLinkIcon } from "lucide-react";

export const ExternLink = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <motion.span whileHover="hover" initial="initial">
      <Link
        href={href}
        className="text-gradient font-semibold relative inline-block whitespace-nowrap"
      >
        {children}
        <motion.svg
          variants={{
            initial: {
              width: "100%",
            },
            hover: {
              width: "0%",
            },
          }}
          className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 h-[2px] w-full bg-gradient-to-r from-blue-600 to-green-500"
        />
        <ExternalLinkIcon className="text-green-500 size-4 inline-block ml-1.5 max-w-fit" />
      </Link>
    </motion.span>
  );
};
