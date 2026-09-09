import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { AppContent } from "./App";
import { client } from "@/config/client";
import { getMetaForRoute, getJsonLd, getCanonicalUrl } from "@/lib/seoMeta";
export { client } from "@/config/client";
export { citySlug } from "@/lib/seoMeta";

export interface RenderResult {
  html: string;
  title: string;
  description: string;
  canonical: string;
  jsonLd: ReturnType<typeof getJsonLd>;
}

export function render(url: string): RenderResult {
  const html = renderToString(
    <StaticRouter location={url}>
      <AppContent />
    </StaticRouter>
  );
  const meta = getMetaForRoute(client, url);
  return {
    html,
    title: meta.title,
    description: meta.description,
    canonical: getCanonicalUrl(client, url),
    jsonLd: getJsonLd(client),
  };
}
