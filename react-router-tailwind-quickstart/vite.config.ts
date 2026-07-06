import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import path from "node:path";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter()],
  resolve: {
    tsconfigPaths: true,
    alias: {
      "@": path.resolve(__dirname, "./app"),
    },
  },
});
