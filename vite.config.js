import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    open: true, // Automatically open in the
    host: true, //Preview app on mobile
    historyApiFallback: true, //handle routuing and
  },
});
