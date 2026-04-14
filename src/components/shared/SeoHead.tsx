import { useEffect } from "react";
import { client } from "@/config/client";

/**
 * Injects default SEO meta tags, OG tags, and JSON-LD structured data
 * from client config into the document head. Runs once on mount.
 *
 * Individual pages can still override document.title and the description
 * meta tag via their own useEffect (those run after this component mounts).
 */
const SeoHead = () => {
  useEffect(() => {
    const { address, companyNameFull, phone, email, websiteUrl, schemaType } = client;
    const cityState = `${address.city}, ${address.state}`;
    const defaultTitle = `${companyNameFull} | Licensed ${client.tradeAdjective.charAt(0).toUpperCase() + client.tradeAdjective.slice(1)} Contractor ${cityState}`;
    const defaultDesc = `${address.city}'s most trusted ${client.tradeNoun} contractor. ${client.tagline}. ${client.services.map((s) => s.name).join(", ")}. Call ${phone} for a free estimate.`;

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
    setMeta("name", "author", companyNameFull);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:title", defaultTitle);
    setMeta("property", "og:description", defaultDesc);
    setMeta("property", "og:image", client.images.hero);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", defaultTitle);
    setMeta("name", "twitter:description", defaultDesc);
    setMeta("name", "twitter:image", client.images.hero);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = websiteUrl;

    // Theme color
    setMeta("name", "theme-color", `hsl(${client.accentHsl})`);

    // JSON-LD structured data
    const existingLd = document.querySelector('script[type="application/ld+json"]');
    if (existingLd) existingLd.remove();

    const ldJson = {
      "@context": "https://schema.org",
      "@type": schemaType,
      name: companyNameFull,
      image: client.images.hero,
      url: websiteUrl,
      telephone: phone,
      email,
      address: {
        "@type": "PostalAddress",
        streetAddress: address.street,
        addressLocality: address.city,
        addressRegion: address.state,
        postalCode: address.zip,
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
        name: `${client.tradeAdjective.charAt(0).toUpperCase() + client.tradeAdjective.slice(1)} Services`,
        itemListElement: client.services.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.name },
        })),
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(ldJson);
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
};

export default SeoHead;
