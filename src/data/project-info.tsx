export const projectData = {
  storyphilia: {
    video: [
      {
        src: "/project-videos/storyphilia-generation.mp4",
        mime: "video/mp4",
      },
    ],
    images: [
      {
        src: "/project-images/storyphilia-1.png",
        alt: "Storyphilia 1",
      },
      {
        src: "/project-images/storyphilia-2.png",
        alt: "Storyphilia 2",
      },
      {
        src: "/project-images/storyphilia-3.png",
        alt: "Storyphilia 3",
      },
      {
        src: "/project-images/storyphilia-4.png",
        alt: "Storyphilia 4",
      },
    ],
    about: (
      <p>
        Storyphilia is an <strong className="text-gradient">AI based</strong>{" "}
        web application which generates stories based on user input. It uses
        GPT-3 to generate stories and has a{" "}
        <strong className="text-gradient">simple and intuitive UI</strong>. It
        also stores the stories in backend and allows easy sharing of stories.
      </p>
    ),
    techStack: [
      "react",
      "nextjs",
      "tailwindcss",
      "gpt",
      "prisma",
      "postgresql",
      "vercel",
      "react-query",
    ],
    github: "https://github.com/Manikya-Sharma/storyphilia",
    liveLink: "https://storyphilia.vercel.app/",
  },
  "fashion-ai": {
    video: [
      {
        src: "/project-videos/fashion-ai.mp4",
        mime: "video/mp4",
      },
    ],
    images: [
      {
        src: "/project-images/fashion-ai-1.png",
        alt: "Fashion AI 1",
      },
      {
        src: "/project-images/fashion-ai-2.png",
        alt: "Fashion AI 2",
      },
      // TODO: Add the 3rd image after solving issue with varying dimensions
      // {
      //   src: "/project-images/fashion-ai-3.png",
      //   alt: "Fashion AI 3",
      // },
    ],
    about: (
      <p>
        Fashion AI is an AI based web application which generates fashion
        designs based on user input. It involves{" "}
        <strong className="text-gradient">sellers</strong> uploading their
        products and <strong className="text-gradient">buyers</strong>{" "}
        generating designs based on the uploaded products
      </p>
    ),
    techStack: [
      "react",
      "nextjs",
      "tailwindcss",
      "prisma",
      "postgresql",
      "vercel",
      "react-query",
    ],
    github: "https://github.com/Manikya-Sharma/Fashion-Ai",
    liveLink: "https://fashion-ai-three.vercel.app/",
  },
  "flappy-bird": {
    video: [
      {
        src: "/project-videos/flappy-bird.mp4",
        mime: "video/mp4",
      },
    ],
    images: [
      {
        src: "/project-images/flappy-bird-1.png",
        alt: "Flappy Bird 1",
      },
      {
        src: "/project-images/flappy-bird-2.png",
        alt: "Flappy Bird 2",
      },
      {
        src: "/project-images/flappy-bird-3.png",
        alt: "Flappy Bird 3",
      },
    ],
    about: (
      <p>
        Flappy Bird is a clone of the famous game Flappy Bird. It has been built
        using python and pygame. It has fully functional{" "}
        <strong className="text-gradient">medal system</strong> along with{" "}
        <strong className="text-gradient">
          ui settings and data persistence
        </strong>
        .
      </p>
    ),
    techStack: ["python", "pygame"],
    github: "https://github.com/Manikya-Sharma/Flappy-Bird-Pygame",
    liveLink: "https://github.com/Manikya-Sharma/Flappy-Bird-Pygame",
  },
  "todo-cli": {
    video: [
      {
        src: "/project-videos/todo-cli.mp4",
        mime: "video/mp4",
      },
    ],
    images: [
      {
        src: "/project-images/todo-cli-1.png",
        alt: "Todo CLI 1",
      },
      {
        src: "/project-images/todo-cli-2.png",
        alt: "Todo CLI 2",
      },
      {
        src: "/project-images/todo-cli-3.png",
        alt: "Todo CLI 3",
      },
    ],
    about: (
      <p>
        Todo CLI is a simple{" "}
        <strong className="text-gradient">
          command line interface application
        </strong>{" "}
        which allows users to add, delete, update and list todos. It has been
        built using rust and has a builtin{" "}
        <strong className="text-gradient">TUI for visual interaction</strong>
      </p>
    ),
    techStack: ["rust", "crossterm", "ratatui"],
    github: "https://github.com/Manikya-Sharma/todo-cli",
    liveLink: "https://crates.io/crates/todo-cli-manikya",
  },
  "mini-vim": {
    video: [
      {
        src: "/project-videos/mini-vim.mp4",
        mime: "video/mp4",
      },
    ],
    images: [
      {
        src: "/project-images/mini-vim-1.png",
        alt: "Mini Vim 1",
      },
      {
        src: "/project-images/mini-vim-2.png",
        alt: "Mini Vim 2",
      },
    ],
    about: (
      <p>
        Mini Vim is a simple text editor which has been built using rust. It has
        a simple and intuitive UI and has features like{" "}
        <strong className="text-gradient">
          saving, opening and editing files
        </strong>
        .
      </p>
    ),
    techStack: ["rust", "crossterm"],
    github: "https://github.com/Manikya-Sharma/mini-vim",
    liveLink: "https://github.com/Manikya-Sharma/mini-vim",
  },
};
