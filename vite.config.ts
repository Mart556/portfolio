import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react({
			babel: {
				plugins: [["babel-plugin-react-compiler"]],
			},
		}),
		tailwindcss(),
		ViteImageOptimizer({
			cache: false,
			png: {
				quality: 80,
			},
			jpeg: {
				quality: 80,
			},
			jpg: {
				quality: 80,
			},
		}),
	],
});
