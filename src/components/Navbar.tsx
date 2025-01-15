"use client";

import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import React, { useState } from "react";

import { Hammer, House, Menu, NotebookText, Signature, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import StylishButton from "./StylishButton";

// assuming only single level deep
const beautifyPath = (path: string): React.ReactNode => {
  const parts = path.split("/");
  const lastPart = parts[parts.length - 1];
  return (
    <span className="flex">
      <span className="cursor-default">~</span>
      <span className="mx-1 font-normal">/</span>
      <Link className="font-semibold transition-colors" href="/">
        <span className="hover:text-blue-500">manikya</span>
      </Link>
      {lastPart.length !== 0 && <span className="mx-1">/</span>}
      <Link
        className="hover:text-blue-500 font-semibold transition-colors"
        href={`/${lastPart}`}
      >
        {lastPart}
      </Link>
    </span>
  );
};

const getMenuOptions = () => {
  return [
    { icon: <House className="size-4" />, label: "Home", href: "/" },
    {
      icon: <NotebookText className="size-4" />,
      label: "About",
      href: "/about",
    },
    {
      icon: <Hammer className="size-4" />,
      label: "Projects",
      href: "/projects",
    },
    {
      icon: <Signature className="size-4" />,
      label: "Contact",
      href: "/contact",
    },
  ];
};

const Navbar = ({
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  // determine if scroll is at top or not
  const { scrollY } = useScroll();
  const [isAtTop, setIsAtTop] = useState(true);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 0) {
      setIsAtTop(false);
    } else {
      setIsAtTop(true);
    }
  });

  // framer motion animation variants for top and not
  const variants = {
    top: {
      y: 0,
      width: "100%",
    },
    notTop: {
      y: 20,
      width: "80%",
      borderRadius: 19,
    },
    open: {
      opacity: 1,
      scaleY: 1,
    },
    closed: {
      opacity: 0,
      scaleY: 0,
    },
  };

  // breadcrumbs
  const pathName = usePathname();

  // menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Breadcrumbs */}
      <motion.nav
        variants={variants}
        animate={isAtTop ? "top" : "notTop"}
        className={cn("z-[50] mx-auto sticky top-0", className)}
        layout
      >
        <div className="flex items-center justify-between">
          <div>{beautifyPath(pathName)}</div>
          <div className="h-6">
            <AnimatePresence initial={false}>
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <X />
                  </motion.span>
                ) : null}
                {!isMenuOpen ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Menu />
                  </motion.span>
                ) : null}
              </button>
            </AnimatePresence>
          </div>
        </div>
        <motion.div
          variants={variants}
          animate={isMenuOpen ? "open" : "closed"}
          initial="closed"
          className="absolute right-5 px-5 py-3 rounded-lg bg-black text-white w-fit top-[4.5rem]"
        >
          <ul className="flex flex-col gap-2">
            {getMenuOptions().map((option) => (
              <li key={option.label}>
                <StylishButton isLink href={option.href}>
                  <div className="flex items-center gap-2">
                    <div>{option.icon}</div>
                    <div>{option.label}</div>
                  </div>
                </StylishButton>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navbar;
