"use client";

import { Hash, Mail } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

/*
ContactItems:-

- github
- linkedin
- email
- resume
*/

export const ContactItems = () => {
  return (
    <div className="flex items-center gap-2 sm:gap-4 md:gap-8">
      <TooltipProvider delayDuration={100}>
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://www.linkedin.com/in/manikya-sharma-84615125a/"
              className="block px-2"
            >
              <img
                src="/linkedin-logo.png"
                alt="LinkedIn"
                className="size-4 md:size-5 pointer-events-none"
              />
            </a>
          </TooltipTrigger>
          <TooltipContent>Linkedin</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <a href="https://github.com/Manikya-Sharma" className="block px-2">
              <img
                src="/github-logo.svg"
                alt="GitHub"
                className="size-4 md:size-5 pointer-events-none"
              />
            </a>
          </TooltipTrigger>
          <TooltipContent>GitHub</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <a href="mailto:manikyasharma.ms@gmail.com" className="block px-2">
              <Mail className="size-4 md:size-5 pointer-events-none" />
            </a>
          </TooltipTrigger>
          <TooltipContent>Email</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/contact" className="block px-2">
              <Hash className="size-4 md:size-5 pointer-events-none" />
            </Link>
          </TooltipTrigger>
          <TooltipContent>More</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
