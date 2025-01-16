import { Hammer, House, NotebookText, Signature, Swords } from "lucide-react";

export const getMenuOptions = (size?: string) => {
  return [
    {
      icon: <House className={size ? size : "size-4"} />,
      label: "Home",
      href: "/",
    },
    {
      icon: <NotebookText className={size ? size : "size-4"} />,
      label: "About",
      href: "/about",
    },
    {
      icon: <Swords className={size ? size : "size-4"} />,
      label: "Skills",
      href: "/skills",
    },
    {
      icon: <Hammer className={size ? size : "size-4"} />,
      label: "Projects",
      href: "/projects",
    },
    {
      icon: <Signature className={size ? size : "size-4"} />,
      label: "Contact",
      href: "/contact",
    },
  ];
};
