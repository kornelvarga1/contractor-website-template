import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    {
      name: "favicon-per-client",
      transformIndexHtml(html: string) {
        const clientId = process.env.VITE_CLIENT || "dynamic-pro";
        const favicon = clientId === "bl-plumbing" ? "/favicon-drop.svg" : "/favicon-house.svg";
        return html.replace("/favicon.svg", favicon);
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
