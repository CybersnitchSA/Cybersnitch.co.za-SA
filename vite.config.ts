
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const base = process.env["VITE_BASE_PATH"] ?? "/";

export default defineConfig({
  vite: { base },

  nitro: {
    preset: "github-pages",
  },

  tanstackStart: {
    server: { entry: "server" },
    pages: [
      { path: "/" },
      { path: "/privacy" },
      { path: "/terms" },
      { path: "/cookies" },
    ],
    prerender: {
      enabled: true,
      autoStaticPathsDiscovery: false,
    },
  },
});
