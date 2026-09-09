import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// Must use the "@/" alias, not a relative path — vite.config.ts only
// rewrites "@/config/client" to the active client's file. A relative import
// here bypasses that alias entirely and always resolves to client.ts, which
// re-exports client.roofing.ts — meaning every accent-driven CSS variable
// (buttons, highlighted logo text, focus rings) silently rendered roofing's
// amber on every deployed client site regardless of its own accentHsl.
import { client } from "@/config/client";

// Inject accent color from client config into CSS custom properties.
// This overrides the defaults in index.css so the theme is configurable.
const style = document.documentElement.style;
style.setProperty("--accent", client.accentHsl);
style.setProperty("--ring", client.accentHsl);
style.setProperty("--sidebar-accent", client.accentHsl);
style.setProperty("--sidebar-ring", client.accentHsl);

// Buttons/badges on top of the accent color default to white text
// (index.css --accent-foreground). That's illegible on a light accent
// (e.g. a pastel brand blue) — auto-switch to dark text when the accent
// itself is light, instead of requiring every client config to know this.
const accentLightness = parseFloat(client.accentHsl.trim().split(/\s+/)[2] ?? "0");
if (accentLightness >= 60) {
  style.setProperty("--accent-foreground", "0 0% 10%");
}

// Dark theme is applied here (not baked permanently into index.css) so it
// stays a per-client opt-in — see prerender.js for the server-rendered
// equivalent that avoids a light-theme flash before this runs.
if (client.theme === "dark") {
  document.documentElement.classList.add("dark");
}

const root = document.getElementById("root")!;

if (root.childElementCount > 0) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
