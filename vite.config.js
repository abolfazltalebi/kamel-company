import Inspect from "vite-plugin-inspect";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    
    Inspect(),
    visualizer({ open: true }),
  ],
  resolve: {
    alias: {
      "/images": "/src/assets/images",
    },
    extensions: [".js", ".jsx"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          swiper: ['swiper'],
          'framer-motion': ['framer-motion'],
        },
      },
    },
    minify: 'esbuild',
  },
});
