import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { client } from "./config/client";

// Inject accent color from client config into CSS custom properties.
// This overrides the defaults in index.css so the theme is configurable.
const style = document.documentElement.style;
style.setProperty("--accent", client.accentHsl);
style.setProperty("--ring", client.accentHsl);
style.setProperty("--sidebar-accent", client.accentHsl);
style.setProperty("--sidebar-ring", client.accentHsl);

const root = document.getElementById("root")!;

if (root.childElementCount > 0) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
