# Contractor Site Deploy SOP

One repo → many client sites. Each site is a Vercel project with `VITE_CLIENT=<slug>` set. That env var tells Vite which `src/config/client.<slug>.ts` to bundle. Nothing else changes between clients.

**Speed target: positive reply → live URL in under 10 minutes.**

---

## How to trigger Claude

Paste the prospect info in any format. Minimum needed:

| Field | Example |
|---|---|
| Company name | Maxson's Technical Services |
| Trade | handyman / plumbing / roofing / remodeling / HVAC / electrical |
| Phone | +1 (918) 907-5603 |
| City + state | Tulsa, OK |

Nice to have (Claude uses placeholders if missing):
- Full address (for map embed)
- Hours
- Years in business
- Reviews / rating

Claude does the rest — config, images, deploy — without further prompting.

---

## What Claude does (in order)

1. **Pick the base config** — copy the closest trade match:
   - Handyman → `client.maxsons-technical.ts`
   - Remodeling → `client.dynamic-pro.ts`
   - Plumbing → `client.bl-plumbing.ts`
   - Roofing → `client.roofing.ts`

2. **Create `src/config/client.<slug>.ts`** — fill every field from scratch for this client. Never recycle copy from the base config. Trade-specific services, city-specific areas, real-sounding placeholder reviews.

3. **Source images** — all via confirmed Unsplash CDN URLs:
   - Always use `WebFetch` on the Unsplash photo page to get the real `images.unsplash.com/photo-XXXX` CDN URL. Never guess an ID.
   - Hero image: one good trade-relevant shot. About image = same photo unless client provides their own.
   - Service images: one per service, verified working.

4. **Run the deploy script:**
   ```powershell
   .\scripts\deploy-client.ps1 -Slug "<slug>"
   ```
   Script creates the Vercel project, sets the env var, deploys, cleans up.

5. **Report** the live URL and note any images that need replacing.

---

## Client config spec — all required fields

```ts
export const client = {
  // Company
  companyName:     "Maxson's Technical Services",  // display name
  companyNameFull: "Maxson's Technical Services",  // used in JSON-LD
  logoMain:        "Maxson's Technical",            // first line of logo
  logoSub:         "Services",                      // second line (blank string if none)
  logoIcon:        "house" as const,               // "house" or "drop" (plumbing only)
  tradeNoun:       "handyman",                      // "handyman", "plumbing", "roofing", etc.
  tradeAdjective:  "handyman",
  schemaType:      "HomeAndConstructionBusiness",   // Schema.org type
  tagline:         "Licensed & Insured in Oklahoma",
  rocLicense:      "",                             // leave blank if unknown
  yearsExperience: 0,                              // 0 hides the badge

  // Contact
  phone:           "(918) 907-5603",
  phoneTel:        "9189075603",                   // digits only
  email:           "",
  websiteUrl:      "",
  googleReviewsUrl: "https://www.google.com/maps/search/...",

  // Location
  address: { street: "", city: "", state: "", zip: "" },
  geo: { latitude: 0, longitude: 0 },
  areas: ["City1", "City2", "City3", "City4", "City5", "City6", "City7"],
  mapsEmbed: "https://www.google.com/maps/embed?pb=...",

  // Theme — HSL without hsl() wrapper
  // Roofing: "43 96% 50%" (amber)   Plumbing: "210 85% 48%" (blue)
  // Remodeling/Handyman: "8 62% 40%" (terracotta)
  accentHsl: "8 62% 40%",

  // Images — use verified images.unsplash.com CDN paths
  images: {
    hero:         "/images/<slug>-hero.jpg",   // or Unsplash URL
    about:        "/images/<slug>-about.jpg",  // same as hero if no GBP photo
    faq:          "https://images.unsplash.com/photo-XXXX?w=800&q=80&fm=webp",
    whyChooseUs:  "/images/<slug>-hero.jpg",
  },

  // Home page copy
  heroHeadline:    "City's Trusted [Trade]",
  heroSubheadline: "One sentence. No fluff.",
  heroCtaText:     "Get a Free Quote",
  aboutText:       "2–3 sentences. Locally owned. No runaround. City + trade specific.",

  // Why Choose Us
  whyChooseUs: {
    heading:  "Why [City] Homeowners Choose [Name]",
    subtitle: "One sentence. Trade-specific value prop.",
    imageAlt: "...",
    benefits: [
      { title: "...", desc: "2 sentences max." },
      { title: "...", desc: "..." },
      { title: "...", desc: "..." },
      { title: "...", desc: "..." },
    ],
  },

  // Services — 5–7 items
  services: [
    {
      name:        "Service Name",
      slug:        "service-slug",
      description: "One sentence for the card.",
      image:       "https://images.unsplash.com/photo-XXXX?w=800&q=80&fm=webp",
      seoData: {
        intro: "2–3 sentences for the service page intro.",
        seoBlocks: {
          what: "3–4 sentences explaining scope of work.",
          why:  "3–4 sentences on why quality matters for this task.",
          when: "2–3 sentences on when to hire.",
        },
      },
    },
  ],

  // Process — 3 steps
  processSteps: [
    { title: "...", description: "..." },
    { title: "...", description: "..." },
    { title: "...", description: "..." },
  ],

  // FAQ — 4–5 questions, trade + city specific
  faq: [
    { question: "...", answer: "2–4 sentences." },
  ],

  // Hours
  operatingHours: [
    { day: "Mon–Fri", hours: "8AM–6PM" },
    { day: "Sat",     hours: "9AM–4PM" },
    { day: "Sun",     hours: "Closed" },
  ],

  // Reviews — 0 if no reviews exist (shows "Be the first" CTA instead of carousel)
  averageRating: 5.0,
  totalReviews:  0,
  reviews:       [],          // empty = no carousel shown
  featuredReviews: [],

  // Gallery
  galleryPreview: [
    { src: "https://images.unsplash.com/photo-XXXX?w=600&q=80&fm=webp", alt: "..." },
    // × 6
  ],
  galleryProjects: [
    { title: "...", category: "...", images: ["https://..."] },
    // × 6
  ],

  // Blog — 3 posts, genuinely educational, not SEO filler
  blogPosts: [
    {
      slug:     "url-slug",
      title:    "...",
      excerpt:  "2 sentences.",
      date:     "May 30, 2025",
      category: "Tips & Advice",
      readTime: "4 min read",
      content:  "4–5 paragraphs separated by \\n\\n",
    },
  ],

  discountPercent: 10,
} as const;
```

---

## Image sourcing workflow

When no images are provided:

1. `WebSearch` with `site:unsplash.com <trade> <subject>` to find photo page URLs.
2. `WebFetch` each photo page URL to extract the real `images.unsplash.com/photo-XXXX` CDN path.
3. Use only non-premium (`images.unsplash.com`, not `plus.unsplash.com`) URLs.
4. Format: `https://images.unsplash.com/photo-XXXX?w=800&q=80&fm=webp` (800px for services, 600px for gallery, 1600px for hero).

If the client drops images into `public/images/`:
- Rename to `<slug>-hero.jpg`, `<slug>-about.jpg` etc.
- Reference as `/images/<slug>-hero.jpg` in the config.
- Set `about` to the same path as `hero` unless a separate about image was provided.

---

## Deploy command

After the config file is written and images are sourced:

```powershell
.\scripts\deploy-client.ps1 -Slug "<slug>"
```

To redeploy after edits (no need to create project again):

```powershell
cd C:\Users\VargaFlow\contractor-website-template
vercel link --project <slug> --scope kornelvarga1s-projects --yes
vercel deploy --prod --yes --force
Remove-Item .vercel\project.json -Force
```

---

## QA checklist (Kornél's job, ~3 min)

- [ ] Company name, phone correct in header and footer
- [ ] Hero image loads
- [ ] About image loads and is different/same as intended
- [ ] All 6 service cards show correct images (no broken)
- [ ] Service pages load with right content
- [ ] Contact page: address, hours, map embed correct
- [ ] Areas listed are real cities near the client
- [ ] No leftover placeholder city or company name from base config

**If something's wrong**: tell Claude what's broken, it fixes and redeploys in < 2 min.

---

## Updating an existing site

```powershell
# Edit src/config/client.<slug>.ts as needed, then:
cd C:\Users\VargaFlow\contractor-website-template
vercel link --project <slug> --scope kornelvarga1s-projects --yes
vercel deploy --prod --yes --force
Remove-Item .vercel\project.json -Force -ErrorAction SilentlyContinue
```

---

## Adding a new trade template

When a trade comes in that has no existing base config (e.g. HVAC, electrical):
1. Claude creates `src/config/client.<slug>.ts` from scratch using the spec above.
2. That file also becomes the template for future clients of the same trade.
3. No changes needed to `vite.config.ts`, `client.ts`, or any other shared file.

---

## Current live sites

| URL | Slug | Trade |
|---|---|---|
| vargaflow-website-demo.vercel.app | roofing | Roofing (Phoenix demo) |
| bl-plumbing.vercel.app | bl-plumbing | Plumbing |
| dynamic-pro.vercel.app | dynamic-pro | Remodeling |
| maxsons-technical.vercel.app | maxsons-technical | Handyman |
