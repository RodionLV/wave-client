import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],

  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@v": path.resolve(__dirname, "src/vue"),
      "@app": path.resolve(__dirname, "src/application"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@ui": path.resolve(__dirname, "src/vue/components/UI")
    }
  },

  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
