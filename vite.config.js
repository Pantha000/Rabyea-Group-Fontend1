import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "https://rabyea-group-backend.vercel.app/",
      // "/api": "http://localhost:4000/",
    },
  },
});
