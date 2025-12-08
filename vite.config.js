import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/tyy-dev/",  // correct for https://dev-tyy.github.io/tyy-dev/
});