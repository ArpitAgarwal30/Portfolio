import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

// Separate from vite.config.ts: the React Router plugin builds the whole app and isn't needed for unit tests.
export default defineConfig({
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./app", import.meta.url)),
    },
  },
  test: {
    environment: "jsdom",
    include: ["app/**/*.test.{ts,tsx}"],
  },
});
