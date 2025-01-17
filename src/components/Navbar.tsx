"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import React, { useState } from "react";
import Breadcrumbs from "./Breadcrumbs";
import NavbarMenu from "./NavbarMenu";

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
  };

  return (
    <motion.nav
      variants={variants}
      animate={isAtTop ? "top" : "notTop"}
      initial={false}
      className={cn("z-[50] mx-auto sticky top-0", className)}
      layout
    >
      <div className="flex items-center justify-between">
        <Breadcrumbs />
        <NavbarMenu />
      </div>
    </motion.nav>
  );
};

export default Navbar;
