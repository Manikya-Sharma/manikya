"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { electrolize as font } from "@/lib/fonts";
import { useRouter } from "next/navigation";

const transition = {
  type: "spring",
  duration: 0.4,
};

interface StylishButtonProps {
  className?: string;
  children: React.ReactNode;
  variant?: "outline" | "ghost" | "default";
  size?: "sm" | "md";
  isLink?: boolean;
  href?: string;
  onButtonClick?: () => void;
}

const StylishButton = ({
  className,
  children,
  variant = "default",
  size = "md",
  isLink,
  onButtonClick = () => {},
  ...props
}: StylishButtonProps) => {
  const router = useRouter();

  return isLink ? (
    <a
      {...props}
      className="block focus:outline-none focus:ring-2 focus:ring-black rounded-xl"
      onClick={(e) => {
        e.preventDefault();
        // Note: We should always pass `href` with `isLink` prop
        const href = props.href ?? "/";
        if (href[0] == "#") {
          // Smooth scroll for same page
          const target = href.substring(1);
          const element = document.getElementById(target);
          window.scrollTo({
            top: (element?.offsetTop ?? 0) - 100,
            behavior: "smooth",
          });
        } else {
          router.push(href);
        }
        // SetTimeout is needed to prevent re-render during any transition
        // triggered by the button
        // E.g. for smooth scroll with navbar, we want navbar to hide
        // but it will cause problems in scrolling if called immediately
        setTimeout(() => {
          onButtonClick();
        }, 450);
      }}
    >
      <motion.div
        initial="initial"
        whileHover="hover"
        whileTap={{
          scale: 0.9,
        }}
        className={cn(
          "px-6 py-3 bg-black text-white rounded-xl text-lg",
          {
            "text-sm px-3 py-2": size === "sm",
            "bg-transparent hover:bg-black hover:text-white transition-colors duration-200 text-black border border-black":
              variant === "outline",
          },
          font.className,
          className
        )}
      >
        <div className="relative overflow-hidden whitespace-nowrap">
          {/* Content */}
          <motion.div
            variants={{
              initial: { y: 0 },
              hover: { y: "-100%" },
            }}
            transition={transition}
          >
            {children}
          </motion.div>
          <motion.div
            aria-hidden="true"
            className="absolute inset-0"
            variants={{
              initial: { y: "100%" },
              hover: { y: 0 },
            }}
            transition={transition}
          >
            {children}
          </motion.div>
        </div>
      </motion.div>
    </a>
  ) : (
    <button
      {...props}
      className="block focus:outline-none focus:ring-2 focus:ring-black rounded-xl"
      onClick={() => onButtonClick()}
    >
      <motion.div
        initial="initial"
        whileHover="hover"
        whileTap={{
          scale: 0.9,
        }}
        className={cn(
          "px-6 py-3 bg-black text-white rounded-xl text-lg",
          {
            "text-sm px-3 py-2": size === "sm",
            "bg-transparent hover:bg-black hover:text-white transition-colors duration-200 text-black border border-black":
              variant === "outline",
          },
          font.className,
          className
        )}
      >
        <div className="relative overflow-hidden whitespace-nowrap">
          {/* Content */}
          <motion.div
            variants={{
              initial: { y: 0 },
              hover: { y: "-100%" },
            }}
            transition={transition}
          >
            {children}
          </motion.div>
          <motion.div
            aria-hidden="true"
            className="absolute inset-0"
            variants={{
              initial: { y: "100%" },
              hover: { y: 0 },
            }}
            transition={transition}
          >
            {children}
          </motion.div>
        </div>
      </motion.div>
    </button>
  );
};

export default StylishButton;
