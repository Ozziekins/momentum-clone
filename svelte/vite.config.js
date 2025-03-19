import { svelte } from "@sveltejs/vite-plugin-svelte";
import { svelteTesting } from "@testing-library/svelte/vite";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [svelte(), svelteTesting()],
	test: {
		environment: "jsdom",
		globals: true,
	},
	server: {
		proxy: {
			"/zenquotes": {
				target: "https://zenquotes.io",
				changeOrigin: true,
				secure: false,
				rewrite: (path) => path.replace(/^\/zenquotes/, ""),
			},
		},
	},
});
