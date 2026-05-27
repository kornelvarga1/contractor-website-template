import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "dist");

async function prerender() {
  const template = fs.readFileSync(path.resolve(distDir, "index.html"), "utf-8");
  const { render, client } = await import("./dist/server/entry-server.js");

  const routes = [
    "/",
    "/gallery",
    "/contact",
    "/write-a-review",
    "/discount",
    "/quote",
    "/blog",
    "/terms",
    "/privacy",
    ...client.services.map((s) => `/services/${s.slug}`),
    ...client.areas.map((a) => `/areas/${a.toLowerCase().replace(/\s+/g, "-")}`),
    ...client.blogPosts.map((b) => `/blog/${b.slug}`),
  ];

  for (const route of routes) {
    const html = render(route);

    const page = template.replace(
      '<div id="root"></div>',
      `<div id="root">${html}</div>`
    );

    const filePath =
      route === "/"
        ? path.resolve(distDir, "index.html")
        : path.resolve(distDir, `${route.slice(1)}/index.html`);

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, page);

    console.log(`  Prerendered: ${route}`);
  }

  // Clean up server bundle — not needed in deployment
  fs.rmSync(path.resolve(distDir, "server"), { recursive: true, force: true });

  console.log(`\nDone — ${routes.length} pages prerendered.`);
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
