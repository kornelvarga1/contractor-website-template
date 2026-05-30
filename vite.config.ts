import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Read VITE_CLIENT at config time so the alias resolves before modules load.
  // This means only the active client's config file ends up in the bundle —
  // all other client.*.ts files are never imported and are tree-shaken away.
  const env = loadEnv(mode, process.cwd(), "");
  const clientSlug = env.VITE_CLIENT || "roofing";

  return {
    server: {
      host: "::",
      port: 8080,
      hmr: { overlay: false },
    },
    plugins: [
      react(),
      mode === "development" && componentTagger(),
      {
        name: "favicon-per-client",
        transformIndexHtml(html: string) {
          const favicon = clientSlug === "bl-plumbing" ? "/favicon-drop.svg" : "/favicon-house.svg";
          return html.replace("/favicon.svg", favicon);
        },
      },
    ].filter(Boolean),
    resolve: {
      alias: {
        // More-specific alias first — redirects @/config/client straight to the
        // active client file. The generic @→src alias below handles everything else.
        "@/config/client": path.resolve(__dirname, `src/config/client.${clientSlug}.ts`),
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
