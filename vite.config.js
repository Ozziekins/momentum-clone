// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/zenquotes': {
        target: 'https://zenquotes.io',
        changeOrigin: true,
        secure: false,
        rewrite: path => path.replace(/^\/zenquotes/, '')
      }
    }
  }
});
