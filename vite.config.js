import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Served from https://makeitstickpress.github.io/react-that-sticks-examples/
  base: "/react-that-sticks-examples/",
  plugins: [react()],
});
