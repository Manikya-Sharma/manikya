"use client";

import { getMenuOptions } from "@/data/sections";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import StylishButton from "./StylishButton";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { pathMapping } from "@/lib/pathMapping";

const NavbarMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();
  const variants = {
    open: {
      opacity: 1,
      height: "auto",
      paddingTop: "0.75rem",
      paddingBottom: "0.75rem",
      borderWidth: "1px",
    },
    closed: {
      opacity: 0,
      height: 0,
    },
  };

  const options = getMenuOptions({ location: pathMapping(pathName) });

  return options.length === 0 ? null : (
    <>
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
      <motion.div
        variants={variants}
        animate={isMenuOpen ? "open" : "closed"}
        initial="closed"
        className="px-5 absolute right-5 rounded-lg bg-black text-white w-fit top-[4.5rem] overflow-hidden border-white/30"
        transition={{
          duration: 0.15,
        }}
      >
        <ul className="flex flex-col gap-2">
          {options.map((option) => (
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
    </>
  );
};

export default NavbarMenu;
