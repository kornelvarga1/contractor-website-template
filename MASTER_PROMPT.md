# Master Prompt — Contractor Website Template

## How to use

1. Complete your onboarding SOP (create Supabase business profile, lookup Google Maps/Reviews, collect client photos)
2. Copy this project directory for the new client
3. Fill in ALL the `[PLACEHOLDERS]` below with the info you collected
4. Paste the entire prompt into Claude Code inside the new project directory
5. Claude writes `client.ts` + `.env` + swaps images — build, test, deploy

Everything below the line is the prompt. Fill it in and paste it.

---

```
I have a contractor website template. I need you to generate two files to fully configure
it for a new client. Write both files directly — no explanation needed.

## File 1: src/config/client.ts

Generate a complete TypeScript config file that exports a `client` const with `as const`.
Use the exact same structure, field names, and TypeScript shape as the existing
src/config/client.ts in this project. Every string value must be tailored to this
specific contractor — no placeholder or generic text.

## File 2: .env

Write the .env file with these exact values:

VITE_SUPABASE_URL=https://zfmchywjmgykmlhjihls.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmbWNoeXdqbWd5a21saGppaGxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0MTE5NjMsImV4cCI6MjA4ODk4Nzk2M30.iVhS5hJmCRUpXwHfCHr0b-yR7yd470uLzsifS-lXtys
VITE_BUSINESS_ID=[BUSINESS ID]

## Client Information

Company name: [COMPANY NAME]
Company name (full, no abbreviations): [COMPANY NAME FULL]
Logo main text: [LOGO MAIN — e.g. "Phoenix Roofing"]
Logo sub text: [LOGO SUB — e.g. "Repair", or "" if no ampersand in name]
Trade: [TRADE — e.g. roofing, plumbing, HVAC, electrical]
Trade noun: [TRADE NOUN — e.g. "roofing", "plumbing"]
Trade adjective: [TRADE ADJECTIVE — e.g. "roofing", "plumbing", "HVAC"]
Schema.org type: [SCHEMA TYPE — e.g. "RoofingContractor", "Plumber", "Electrician", "HVACBusiness"]
Tagline: [TAGLINE — e.g. "Licensed, Bonded & Insured"]
Contractor license number: [ROC LICENSE]
Years in business: [YEARS]

Phone: [PHONE — formatted, e.g. "(602) 497-0154"]
Phone (digits only): [PHONE TEL — e.g. "6024970154"]
Email: [EMAIL]
Website URL: [WEBSITE URL]
Google Reviews URL: [GOOGLE REVIEWS URL — or "#" if not set up yet]

Street address: [STREET]
City: [CITY]
State: [STATE — two-letter abbreviation]
ZIP: [ZIP]
Latitude: [LAT]
Longitude: [LNG]
Service areas (cities): [AREA 1], [AREA 2], [AREA 3], [AREA 4], [AREA 5], [AREA 6], [AREA 7]
Google Maps embed URL: [MAPS EMBED URL]

Brand accent color HSL: [ACCENT HSL — e.g. "43 96% 50%" for amber, "210 100% 45%" for blue, "142 76% 36%" for green, "0 84% 60%" for red]

Owner/operator first name: [OWNER FIRST NAME — referenced naturally in review text]
Discount percentage: [DISCOUNT PERCENT — e.g. 10]
Average Google rating: [RATING — e.g. 4.9]
Total Google reviews: [TOTAL REVIEWS — e.g. 47]

Services offered (5–7): [SERVICE 1], [SERVICE 2], [SERVICE 3], [SERVICE 4], [SERVICE 5], [SERVICE 6], [SERVICE 7]

## Client Images

If I provide image URLs below, use them in client.ts instead of Unsplash placeholders.
Any field left as "unsplash" means pick an appropriate Unsplash photo for the trade.

- Hero image (1600w): [URL or "unsplash"]
- About image (960w): [URL or "unsplash"]
- FAQ image (800w): [URL or "unsplash"]
- Why Choose Us image (960w): [URL or "unsplash"]
- Service images (800w each, one per service in order): [URL or "unsplash"] for each
- Gallery preview (600w, 6 images): [URLs or "unsplash"]
- Gallery project images (800w, 1-2 per project): [URLs or "unsplash"]

## What to generate in client.ts

Generate ALL of the following sections with content specific to this contractor's trade,
location, and business:

1. **Company info** — all fields from client information above
2. **Images** — use provided URLs where given, Unsplash for the rest (relevant to the trade)
3. **Home page copy** — heroHeadline, heroSubheadline, heroCtaText, aboutText
   - aboutText: 2–3 sentences, mention city, years, locally owned, no-BS tone
4. **Why Choose Us** — heading mentioning the city, subtitle mentioning the trade,
   imageAlt describing the trade, 4 benefits relevant to the trade
5. **Services** — for each service:
   - name, slug (kebab-case), short description (1 sentence), image URL
   - seoData: intro paragraph + seoBlocks (what/why/when — each 3–5 sentences, factual, educational)
6. **Process steps** — 3 steps: request quote → get estimate → work begins
7. **FAQ** — 4 questions specific to the trade and location with detailed answers
8. **Operating hours** — Mon–Fri 7AM–6PM, Sat 8AM–4PM, Sun Closed (unless I specify otherwise)
9. **Reviews** — 3 carousel reviews (first initial + last initial, rating 5, relative time, realistic text)
10. **Featured reviews** — 3 social proof reviews (first initial + last initial, location = one of the service area cities + state, rating 5, realistic 2-sentence text mentioning specific work done)
11. **Gallery preview** — 6 images with trade-relevant alt text
12. **Gallery projects** — 6 projects with trade-relevant titles and categories
13. **Blog posts** — 3 posts relevant to the trade:
    - slug, title, excerpt, recent date, category, readTime, long-form content (4–5 paragraphs, genuinely educational)
14. **Discount percent** — from client info

## Tone & style rules

- Direct, contractor-native tone — sounds like the owner, not a marketing agency
- No buzzwords: no "synergy", "leverage", "solutions provider", "cutting-edge"
- Specific to the trade — mention actual materials, techniques, equipment names
- Specific to the location — reference the city, state, regional weather/climate conditions
- Reviews sound like real Google reviews — varied length, natural, imperfect language
- Blog content is genuinely educational — what a homeowner would actually search for
- All services, FAQ, blog must be specific to the TRADE, not generic contractor filler
- No "scaling" language, no "for now" hedges — write as if this is the permanent state
```

---

## Onboarding checklist (what to collect before running the prompt)

Use this as your SOP. Once every field is filled in, the prompt is ready to paste.

- [ ] Create Supabase business profile → get `BUSINESS_ID`
- [ ] Company name, full name, owner name
- [ ] Trade type
- [ ] Phone, email
- [ ] Street address, city, state, ZIP
- [ ] Service area cities (5–7)
- [ ] Contractor license number
- [ ] Years in business
- [ ] Google Business profile → get Google Reviews URL
- [ ] Google Maps → get embed URL (Share → Embed a map → copy `src`)
- [ ] Google Maps → get lat/lng from URL
- [ ] Website domain / URL
- [ ] Brand color preference → convert to HSL
- [ ] Average Google rating + total reviews
- [ ] Discount percentage for new customers
- [ ] Services offered (5–7 service names)
- [ ] Client photos uploaded → get URLs (or use "unsplash" for placeholders)
