import {
  BrainCircuit,
  Code,
  CodeXml,
  Cpu,
  Globe,
  GraduationCap,
  Hammer,
  Heart,
  House,
  NotebookText,
  Pen,
  Signature,
  Swords,
} from "lucide-react";

export const getMenuOptions = ({
  location,
  size,
}: {
  location: string;
  size?: string;
}) => {
  if (location === "home") {
    return [];
  }
  if (location === "hero") {
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
  }
  if (location === "about") {
    return [
      {
        icon: <Pen className={size ? size : "size-4"} />,
        label: "Intro",
        href: "#intro",
      },
      {
        icon: <GraduationCap className={size ? size : "size-4"} />,
        label: "Education",
        href: "#education",
      },
      {
        icon: <Code className={size ? size : "size-4"} />,
        label: "Experience",
        href: "#experience",
      },
      {
        icon: <Heart className={size ? size : "size-4"} />,
        label: "Interests",
        href: "#interests",
      },
    ];
  }
  if (location === "skills") {
    return [
      {
        icon: <Pen className={size ? size : "size-4"} />,
        label: "Intro",
        href: "#intro",
      },
      {
        icon: <Globe className={size ? size : "size-4"} />,
        label: "Web Development",
        href: "#web",
      },
      {
        icon: <BrainCircuit className={size ? size : "size-4"} />,
        label: "Machine Learning",
        href: "#ml",
      },
      {
        icon: <Cpu className={size ? size : "size-4"} />,
        label: "Software Engineering",
        href: "#se",
      },
      {
        icon: <CodeXml className={size ? size : "size-4"} />,
        label: "Competitive Programming",
        href: "#cp",
      },
    ];
  }
  return [];
};
