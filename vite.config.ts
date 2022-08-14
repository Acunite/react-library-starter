import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import dts from "vite-plugin-dts";
import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./lib/setupTests.ts",
    // you might want to enable it, if you have tests that rely on CSS
    // disabled by default since parsing CSS is slow
    css: false,
  },
  build: {
    lib: {
      entry: resolve(__dirname, "lib/index.ts"),
      name: "MyLib",
      formats: ["es", "umd"],
      // the proper extensions will be added
      fileName: "my-lib",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react", "react-dom"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
