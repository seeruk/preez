import path from "path"

import { defineConfig } from "vite"
import dts from "vite-plugin-dts";
import tsconfigPaths from 'vite-tsconfig-paths'
import react from "@vitejs/plugin-react-swc"


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: "preez",
      entry: path.resolve(__dirname, "src/index.ts"),
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  plugins: [react(), dts(), tsconfigPaths()],
})
