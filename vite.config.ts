import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Target is your backend API
      "/api/get_magnet_uri": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    },
  },
});
