import type { client as ClientConfigType } from "@/config/client";

type ClientConfig = typeof ClientConfigType;

export interface PageMeta {
  title: string;
  description: string;
}

// Title-cases every word, not just the first letter — tradeAdjective is
// multi-word for some trades (e.g. "exterior cleaning"), and capitalizing
// only the first character produced "Exterior cleaning Contractor".
export function capitalize(s: string): string {
  return s
    .split(" ")
    .map((word) => (word ? word.charAt(0).toUpperCase() + word.slice(1) : word))
    .join(" ");
}

/**
 * Canonical URL slug for a service area name — the single source of truth
 * for "City Name" -> "city-name" used both when building nav links and
 * when prerendering /areas/* routes. Previously nav links used bare
 * `area.toLowerCase()` (spaces intact, e.g. "lake view") while prerender.js
 * hyphenated ("lake-view") — different URLs, and LocationPage's own
 * validation matched neither consistently, so every multi-word area
 * (e.g. VantaShine's own "Sac City") 404'd both server- and client-side.
 */
export function citySlug(areaName: string): string {
  return areaName.toLowerCase().replace(/\s+/g, "-");
}

/** Reverse of citySlug for display — "lake-view" -> "Lake View". */
export function citySlugToDisplay(slug: string): string {
  return capitalize(slug.replace(/-/g, " "));
}

export function getDefaultMeta(client: ClientConfig): PageMeta {
  const cityState = `${client.address.city}, ${client.address.state}`;
  return {
    title: `${client.companyNameFull} | Licensed ${capitalize(client.tradeAdjective)} Contractor ${cityState}`,
    description: `${client.address.city}'s most trusted ${client.tradeNoun} contractor. ${client.tagline}. ${client.services.map((s) => s.name).join(", ")}. Call ${client.phone} for a free estimate.`,
  };
}

export function getServiceMeta(client: ClientConfig, slug: string): PageMeta | null {
  const service = client.services.find((s) => s.slug === slug);
  if (!service) return null;
  const cityState = `${client.address.city}, ${client.address.state}`;
  const seo = service.seoData;
  return {
    title: seo
      ? `${service.name} ${cityState} | ${client.companyNameFull}`
      : `${service.name} in ${cityState} | ${client.companyNameFull}`,
    description: seo
      ? `${service.name} services in ${client.address.city}. ${client.tagline}. Free estimates. ${client.yearsExperience}+ years experience.`
      : `${client.companyName} provides professional ${service.name} services in ${cityState}. Contact us today for a free quote.`,
  };
}

export function getLocationMeta(client: ClientConfig, slug: string): PageMeta | null {
  const isValid = client.areas.some((a) => citySlug(a) === slug);
  if (!isValid) return null;
  const city = citySlugToDisplay(slug);
  const { address, companyNameFull, tagline, tradeAdjective } = client;
  return {
    title: `${capitalize(tradeAdjective)} Contractor ${city}, ${address.state} | ${companyNameFull}`,
    description: `Trusted ${client.tradeNoun} contractor in ${city}, ${address.state}. ${tagline}. Free estimates.`,
  };
}

export function getBlogMeta(client: ClientConfig, slug: string): PageMeta | null {
  const post = client.blogPosts.find((p) => p.slug === slug);
  if (!post) return null;
  return {
    title: `${post.title} | ${client.companyName}`,
    description: post.excerpt,
  };
}

/** Route → page meta, falling back to site defaults for static/unknown routes. */
export function getMetaForRoute(client: ClientConfig, route: string): PageMeta {
  const path = route.split("?")[0].split("#")[0];

  if (path.startsWith("/services/")) {
    const slug = path.slice("/services/".length);
    return getServiceMeta(client, slug) ?? getDefaultMeta(client);
  }
  if (path.startsWith("/areas/")) {
    const slug = path.slice("/areas/".length);
    return getLocationMeta(client, slug) ?? getDefaultMeta(client);
  }
  if (path.startsWith("/blog/") && path !== "/blog/") {
    const slug = path.slice("/blog/".length);
    return getBlogMeta(client, slug) ?? getDefaultMeta(client);
  }
  return getDefaultMeta(client);
}

/** LocalBusiness JSON-LD — same everywhere; identity/ratings/catalog don't vary by page. */
export function getJsonLd(client: ClientConfig) {
  return {
    "@context": "https://schema.org",
    "@type": client.schemaType,
    name: client.companyNameFull,
    image: client.images.hero,
    url: client.websiteUrl,
    telephone: client.phone,
    email: client.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: client.address.street,
      addressLocality: client.address.city,
      addressRegion: client.address.state,
      postalCode: client.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: client.geo.latitude,
      longitude: client.geo.longitude,
    },
    areaServed: [...client.areas],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(client.averageRating),
      reviewCount: String(client.totalReviews),
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${capitalize(client.tradeAdjective)} Services`,
      itemListElement: client.services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name },
      })),
    },
  };
}

/** Canonical URL for a given route — every page must self-canonicalize, not point at the homepage. */
export function getCanonicalUrl(client: ClientConfig, route: string): string {
  const path = route.split("?")[0].split("#")[0];
  const base = client.websiteUrl.replace(/\/$/, "");
  if (path === "/" || path === "") return base;
  return `${base}${path}`;
}
