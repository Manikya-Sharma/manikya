export const foregroundColors = {
  red: "bg-base-100 border-error text-error hover:bg-error hover:text-base-100 transition-colors duration-200",
  blue: "bg-base-100 border-info text-info hover:bg-info hover:text-base-100 transition-colors duration-200",
  black:
    "bg-base-100 border-base-content text-base-content hover:bg-base-content hover:text-base-100 transition-colors duration-200",
  green:
    "bg-base-100 border-success text-success hover:bg-success hover:text-base-100 transition-colors duration-200",
  accent:
    "bg-base-100 border-accent text-accent hover:bg-accent hover:text-base-100 transition-colors duration-200",
  yellow:
    "bg-base-100 border-warning text-warning hover:bg-warning hover:text-base-100 transition-colors duration-200",
  primary:
    "bg-base-100 border-primary text-primary hover:bg-primary hover:text-base-100 transition-colors duration-200",
  secondary:
    "bg-base-100 border-secondary text-secondary hover:bg-secondary hover:text-base-100 transition-colors duration-200",
};

export const backgroundColors = {
  red: "bg-error/40",
  blue: "bg-info/40",
  black: "bg-neutral/40",
  green: "bg-success/40",
  accent: "bg-accent/40",
  yellow: "bg-warning/40",
  primary: "bg-primary/40",
  secondary: "bg-secondary/40",
};

export const tagColorMap = {
  html: foregroundColors.red,
  css: foregroundColors.blue,
  tailwindcss: foregroundColors.blue,
  javascript: foregroundColors.yellow,
  typescript: foregroundColors.blue,
  react: foregroundColors.blue,
  nextjs: foregroundColors.black,
  python: foregroundColors.blue,
  tensorflow: foregroundColors.yellow,
  pytorch: foregroundColors.red,
  "scikit-learn": foregroundColors.red,
  jupyter: foregroundColors.yellow,
  java: foregroundColors.red,
  cpp: foregroundColors.blue,
  c: foregroundColors.blue,
  rust: foregroundColors.red,
  docker: foregroundColors.blue,
  algorithms: foregroundColors.red,
  "data-structures": foregroundColors.blue,
  "problem-solving": foregroundColors.green,
  prisma: foregroundColors.blue,
  vercel: foregroundColors.black,
  "react-query": foregroundColors.yellow,
  pygame: foregroundColors.blue,
  crossterm: foregroundColors.black,
  ratatui: foregroundColors.black,
  gpt: foregroundColors.black,
  postgresql: foregroundColors.blue,
};

export const bgMap = {
  html: backgroundColors.red,
  css: backgroundColors.blue,
  tailwindcss: backgroundColors.blue,
  javascript: backgroundColors.yellow,
  typescript: backgroundColors.blue,
  react: backgroundColors.blue,
  nextjs: backgroundColors.black,
  python: backgroundColors.blue,
  tensorflow: backgroundColors.yellow,
  pytorch: backgroundColors.red,
  "scikit-learn": backgroundColors.red,
  jupyter: backgroundColors.yellow,
  java: backgroundColors.red,
  cpp: backgroundColors.blue,
  c: backgroundColors.blue,
  rust: backgroundColors.red,
  docker: backgroundColors.blue,
  algorithms: backgroundColors.red,
  "data-structures": backgroundColors.blue,
  "problem-solving": backgroundColors.green,
  prisma: backgroundColors.blue,
  vercel: backgroundColors.black,
  "react-query": backgroundColors.yellow,
  pygame: backgroundColors.blue,
  crossterm: backgroundColors.black,
  ratatui: backgroundColors.black,
  gpt: backgroundColors.black,
  postgresql: backgroundColors.blue,
};

export const getTagText = (tagName: keyof typeof bgMap) => {
  switch (tagName) {
    case "tailwindcss":
      return "Tailwind CSS";
    case "javascript":
      return "JavaScript";
    case "typescript":
      return "TypeScript";
    case "nextjs":
      return "NextJS";
    case "scikit-learn":
      return "Scikit-learn";
    case "pytorch":
      return "PyTorch";
    case "tensorflow":
      return "TensorFlow";
    case "cpp":
      return "C++";
    case "data-structures":
      return "Data Structures";
    case "problem-solving":
      return "Problem Solving";
    case "html":
      return "HTML";
    case "css":
      return "CSS";
    case "gpt":
      return "GPT";
    case "postgresql":
      return "PostgreSQL";
    case "react-query":
      return "React Query";
    default:
      return tagName.charAt(0).toUpperCase() + tagName.slice(1);
  }
};
