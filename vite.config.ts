import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  base: "/syslog/",
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
});
