import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Served from https://react.makeitstickpress.com/
  base: "/",
  plugins: [react()],
});
