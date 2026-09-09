import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, "dist");

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildHead({ title, description, canonical, jsonLd }, client) {
  const ogImage = client.images.hero;
  return [
    `<meta name="description" content="${escapeHtml(description)}" />`,
    `<meta name="author" content="${escapeHtml(client.companyNameFull)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:image" content="${escapeHtml(ogImage)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonical)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(ogImage)}" />`,
    `<link rel="canonical" href="${escapeHtml(canonical)}" />`,
    `<meta name="theme-color" content="hsl(${client.accentHsl})" />`,
    `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`,
    `<!-- Meta above is prerendered server-side (src/entry-server.tsx + prerender.js) from client`,
    `     config, then kept in sync client-side on route change by SeoHead.tsx. -->`,
  ].join("\n    ");
}

async function prerender() {
  const template = fs.readFileSync(path.resolve(distDir, "index.html"), "utf-8");
  const { render, client, citySlug } = await import("./dist/server/entry-server.js");

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
    ...client.areas.map((a) => `/areas/${citySlug(a)}`),
    ...client.blogPosts.map((b) => `/blog/${b.slug}`),
  ];

  for (const route of routes) {
    const { html, title, description, canonical, jsonLd } = render(route);

    // Use function-form replacers — String.replace() treats "$$" etc. in a
    // string replacement as special patterns, which silently corrupts JSON-LD
    // (e.g. priceRange "$$" becoming "$"). Functions insert their return value literally.
    let page = template
      .replace('<div id="root"></div>', () => `<div id="root">${html}</div>`)
      .replace("<title>Loading…</title>", () => `<title>${escapeHtml(title)}</title>`)
      .replace(
        '<!-- SEO meta tags, OG tags, JSON-LD, and canonical are injected at\n         runtime by src/components/shared/SeoHead.tsx from client config. -->',
        () => buildHead({ title, description, canonical, jsonLd }, client)
      );

    // Bake the dark class in server-side too — otherwise the page briefly
    // renders light (index.html's default) before main.tsx applies it on
    // hydration, which is a much bigger flash than any single color swap.
    if (client.theme === "dark") {
      page = page.replace('<html lang="en">', () => '<html lang="en" class="dark">');
    }

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
