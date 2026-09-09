import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { client } from "@/config/client";
import { getDefaultMeta, getJsonLd, getCanonicalUrl } from "@/lib/seoMeta";

/**
 * Injects default SEO meta tags, OG tags, and JSON-LD structured data
 * from client config into the document head. Also runs the equivalent
 * server-side at prerender time (see entry-server.tsx / prerender.js) so
 * crawlers and link-preview bots that don't execute JS still see real
 * values instead of the "Loading…" placeholder from index.html.
 *
 * Individual pages can still override document.title and the description
 * meta tag via their own useEffect (those run after this component mounts).
 * Re-runs on route change so canonical/JSON-LD don't stay stuck on
 * whichever page first mounted this component during client-side nav.
 */
const SeoHead = () => {
  const location = useLocation();

  useEffect(() => {
    const { title: defaultTitle, description: defaultDesc } = getDefaultMeta(client);

    // Title
    document.title = defaultTitle;

    // Helper: set or create a meta tag
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("name", "description", defaultDesc);
    setMeta("name", "author", client.companyNameFull);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:title", defaultTitle);
    setMeta("property", "og:description", defaultDesc);
    setMeta("property", "og:image", client.images.hero);
    setMeta("property", "og:url", getCanonicalUrl(client, location.pathname));
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", defaultTitle);
    setMeta("name", "twitter:description", defaultDesc);
    setMeta("name", "twitter:image", client.images.hero);

    // Canonical — must point at the current route, not always the homepage
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = getCanonicalUrl(client, location.pathname);

    // Theme color
    setMeta("name", "theme-color", `hsl(${client.accentHsl})`);

    // JSON-LD structured data
    const existingLd = document.querySelector('script[type="application/ld+json"]');
    if (existingLd) existingLd.remove();

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(getJsonLd(client));
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, [location.pathname]);

  return null;
};

export default SeoHead;
