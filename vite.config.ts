// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

/**
 * GITHUB PAGES: set VITE_BASE_PATH to your repository name when building
 * for GitHub Pages, e.g.:
 *   VITE_BASE_PATH=/cybersnitch/ bun run build
 * Locally and on Lovable it defaults to "/".
 */
const base = process.env["VITE_BASE_PATH"] ?? "/";

export default defineConfig({
  vite: { base },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Prerender every public route to static HTML for GitHub Pages.
    pages: [{ path: "/" }, { path: "/privacy" }, { path: "/terms" }, { path: "/cookies" }],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
