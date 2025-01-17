"use client";

import { firacode } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumbs = (): React.ReactNode => {
  const pathName = usePathname();
  const parts = pathName.split("/");
  const others = parts.slice(1);
  return (
    <span className={cn("flex", firacode.className)}>
      <span className="cursor-default">~</span>
      <span className="mx-1 font-normal">/</span>
      <Link className="font-semibold transition-colors" href="/">
        <span className="hover:text-teal-400 transition-colors duration-300">
          manikya
        </span>
      </Link>
      {others.map((lastPart, idx) => (
        <span key={lastPart}>
          {lastPart.length !== 0 && <span className="mx-1">/</span>}
          <Link
            className="hover:text-teal-400 font-semibold transition-colors duration-300"
            href={`/${others.slice(0, idx + 1).join("/")}`}
          >
            {lastPart}
          </Link>
        </span>
      ))}
    </span>
  );
};

export default Breadcrumbs;
