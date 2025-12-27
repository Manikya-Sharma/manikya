import type { bgMap } from "./constants";

export const projects = [
	{
		id: "storyphilia",
		title: "Storyphilia",
	},
	{
		id: "fashion-ai",
		title: "Fashion AI",
	},
	{
		id: "flappy-bird",
		title: "Flappy Bird",
	},
	{
		id: "todo-cli",
		title: "Todo CLI",
	},
	{
		id: "mini-vim",
		title: "Mini VIM",
	},
] as const;

type Project = (typeof projects)[number]["id"];

export const projectDetails: {
	[K in Project]: {
		github: string;
		deployed?: string;
		description: string;
		tags: Array<keyof typeof bgMap>;
	};
} = {
	storyphilia: {
		description:
			"Storyphilia is an <span class='text-gradient'>AI based</span> web application which generates stories based on user input. It uses GPT-3 to generate stories and has a <span class='text-gradient'>simple and intuitive UI</span>. It also stores the stories in backend and allows easy sharing of stories.",
		github: "https://github.com/Manikya-Sharma/storyphilia",
		deployed: "https://storyphilia.vercel.app/",
		tags: [
			"react",
			"nextjs",
			"tailwindcss",
			"gpt",
			"prisma",
			"postgresql",
			"vercel",
			"react-query",
		],
	},
	"fashion-ai": {
		description:
			"Fashion AI is an AI based web application which generates fashion designs based on user input. It involves <span clas='text-gradient'>sellers</span> uploading their products and <span clas='text-gradient'>buyers</span> generating designs based on the uploaded products.",
		github: "https://github.com/Manikya-Sharma/Fashion-Ai",
		deployed: "https://fashion-ai-three.vercel.app/",
		tags: [
			"react",
			"nextjs",
			"tailwindcss",
			"prisma",
			"postgresql",
			"vercel",
			"react-query",
		],
	},
	"flappy-bird": {
		description:
			"Flappy Bird is a clone of the famous game Flappy Bird. It has been built using python and pygame. It has fully functional <span class='text-gradient'>medal system</span> along with ui settings and <span class='text-gradient'>data persistence</span>.",
		github: "https://github.com/Manikya-Sharma/Flappy-Bird-Pygame",
		tags: ["python", "pygame"],
	},
	"todo-cli": {
		description:
			"Todo CLI is a simple <span class='text-gradient'>command line interface application</span> which allows users to add, delete, update and list todos. It has been built using rust and has a builtin <span class='text-gradient'>TUI for visual interaction</span>",
		github: "https://github.com/Manikya-Sharma/todo-cli",
		tags: ["rust", "crossterm", "ratatui"],
	},
	"mini-vim": {
		description:
			"Mini Vim is a simple text editor which has been built using rust. It has a simple and intuitive UI and has features like <span class='text-gradient'>saving, opening and editing files</span>.",
		github: "https://github.com/Manikya-Sharma/mini-vim",
		tags: ["rust", "crossterm"],
	},
};
