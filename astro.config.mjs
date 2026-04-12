// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import svelte from "@astrojs/svelte";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},

	fonts: [
		{
			name: "Fira Code",
			cssVariable: "--font-fira",
			provider: fontProviders.google(),
			weights: [400],
			styles: ["normal"],
			subsets: ["latin"]
		}, {
			name: "Electrolize",
			cssVariable: "--font-electrolize",
			provider: fontProviders.google(),
			weights: [400],
			styles: ["normal"],
			subsets: ["latin"]
		}, {
			name: "Space Grotesk",
			cssVariable: "--font-space",
			provider: fontProviders.google(),
			weights: [400, 500],
			styles: ["normal"],
			subsets: ["latin"]
		}, {
			name: "Figtree",
			cssVariable: "--font-figtree",
			provider: fontProviders.google(),
			weights: [400, 500],
			styles: ["normal"],
			subsets: ["latin"]
		}
	],

	prefetch: true,
	integrations: [svelte()],
	adapter: netlify(),
});
