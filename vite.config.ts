import vueI18n from "@intlify/vite-plugin-vue-i18n";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import path from "path";
// import { fileURLToPath, URL } from "url";
import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  // clearScreen: false,
  logLevel: "error",
  plugins: [
    vue(),
    vueI18n({
      include: resolve(__dirname, "./src/locales/**"),
      runtimeOnly: false,
    }),
    eslintPlugin(),
  ],
  resolve: {
    alias: {
      // "@": fileURLToPath(new URL("./src", import.meta.url)),
      // The `@` points to the `src` directory
      "@": path.resolve(__dirname, "./src"),
      "~module": path.resolve(__dirname, "node_modules"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/boot.scss" as *;
          @use "@/styles/functions/color" as *;
          @import "@/scss/main.scss";
        `,
      },
    },
  },
  server: { port: 8080 },
});
