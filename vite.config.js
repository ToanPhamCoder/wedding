/* eslint-disable no-undef */
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

import path from "path";
import react from "@vitejs/plugin-react";
import manifest from "./manifest.json";

// https://vitejs.dev/config/
export default () => {
  // process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ""));
  return defineConfig({
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    define: {
      global: {}, // Polyfill for `global` in browser environments
    },
    plugins: [
      react(),
      VitePWA({
        manifest,
        srcDir: "src",
        filename: "sw.js",
        registerType: "autoUpdate",
        strategies: "injectManifest",
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,png,jpg,svg,webmanifest}"],
        },
        // devOptions: {
        //   enabled: true,
        //   type: "module",
        // },
      }),
    ],
    build: {
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (
              id.includes("@fortawesome/fontawesome-svg-core") ||
              id.includes("@fortawesome/free-solid-svg-icons") ||
              id.includes("@fortawesome/react-fontawesome")
            ) {
              return "@fortawesome";
            }
          },
        },
      },
    },
    server: { port: 3000 },
  });
};
