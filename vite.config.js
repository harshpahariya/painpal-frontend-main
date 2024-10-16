/* eslint-disable no-undef */
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ react() ],
  server: {
    watch: {
      usePolling: true
    }
  },
  resolve: {
    alias: {
      "@": "/src"
    }
  }
});
