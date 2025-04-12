import {
  Bird,
  BrainCircuit,
  CheckCheck,
  Code,
  CodeXml,
  Cpu,
  FilePenLine,
  Globe,
  GraduationCap,
  Hammer,
  Hash,
  Heart,
  House,
  NotebookText,
  Pen,
  ScrollText,
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
        icon: <Hash className={size ? size : "size-4"} />,
        label: "Socials",
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
        label: "Web Dev",
        href: "#web",
      },
      {
        icon: <BrainCircuit className={size ? size : "size-4"} />,
        label: "ML",
        href: "#ml",
      },
      {
        icon: <Cpu className={size ? size : "size-4"} />,
        label: "Development",
        href: "#se",
      },
      {
        icon: <CodeXml className={size ? size : "size-4"} />,
        label: "CP",
        href: "#cp",
      },
    ];
  }
  if (location === "projects") {
    return [
      // {
      //   icon: <MessageCircleHeart className={size ? size : "size-4"} />,
      //   label: "Stusome",
      //   href: "#stusome",
      // },
      {
        icon: <ScrollText className={size ? size : "size-4"} />,
        label: "Storyphilia",
        href: "#storyphilia",
      },
      {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-dress"
          >
            <path d="M16 2v3a5.14 5.14 0 0 1 .7 4.8l-.2.5a7.64 7.64 0 0 0 .4 6.3C17.7 17.9 19 20 19 20s-3.1 2-7 2-7-2-7-2 1.3-2.1 2.1-3.5a7.64 7.64 0 0 0 .4-6.2l-.2-.5A5.66 5.66 0 0 1 8 5V2" />
            <path d="M16 5c-1.8 0-3.3 1-4 2.5C11.3 6 9.8 5 8 5" />
          </svg>
        ),
        label: "Fashion AI",
        href: "#fashion-ai",
      },
      {
        icon: <Bird className={size ? size : "size-4"} />,
        label: "Flappy Bird",
        href: "#flappy-bird",
      },
      {
        icon: <CheckCheck className={size ? size : "size-4"} />,
        label: "Todo CLI",
        href: "#todo-cli",
      },
      {
        icon: <FilePenLine className={size ? size : "size-4"} />,
        label: "Mini VIM",
        href: "#mini-vim",
      },
    ];
  }
  return [];
};
