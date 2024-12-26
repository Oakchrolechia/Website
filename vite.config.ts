import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          head: `
            <meta charset="utf-8" />
            <meta name="description" content="Unofficial Crusader Patch Website; Offering stability and bug fixes, AI & gameplay enhancements, and improving the multiplayer experience for Stronghold Crusader." />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Unofficial Crusader Patch</title>
            <link rel="stylesheet" href="/src/css/app.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
            <link rel="icon" type="image/png" href="/UCP3-Logo-32.png" />
          `,
        },
      },
    }),
  ],
  envDir: "./",
  envPrefix: "APP_",
  build: {
    outDir: "build",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        chunkFileNames: "js/[name]-[hash].js",
        entryFileNames: "js/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
  root: "./",
  publicDir: "public",
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
});
