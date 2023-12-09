import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
const pathSrc = path.resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": pathSrc,
    },
  },
});
