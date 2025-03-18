import { svelte } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [svelte()],
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
