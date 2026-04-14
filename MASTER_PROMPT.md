# Master Prompt — Contractor Website Template

Two ways to generate a client's `client.ts`. The **conversational workflow** below is the recommended one — it's faster and more forgiving than filling out the structured prompt by hand. The structured prompt is kept at the bottom as a reference for Claude so it knows what fields need to exist.

---

## Recommended: Conversational workflow

1. Copy the template repo to a new client directory
2. Open the admin → Submissions → expand the client's submission → **Copy All**
3. Do the external lookups (Phase 2 of `ONBOARDING_SOP.md`): Google Maps embed URL, lat/lng, Google Reviews URL
4. Get the `BUSINESS_ID` from Supabase after creating the business row
5. In the new client directory, run `claude` and paste:

```
Read ONBOARDING_SOP.md and MASTER_PROMPT.md so you know the workflow and the client.ts structure.

Here's the onboarding submission for this client:

[PASTE ALL FROM ADMIN]

Manual lookups:
- BUSINESS_ID: <uuid>
- Google Maps embed URL: <url>
- Latitude: <lat>
- Longitude: <lng>
- Google Reviews URL: <url or "#">

Generate src/config/client.ts and .env. Fill in what you can, flag anything missing before writing the files, and match the tone and structure of the existing client.ts.
```

6. Answer any clarifying questions
7. Claude writes the files — done

That's it. Claude uses the structured prompt below as its internal reference for what fields the config needs, so you don't have to hand it a rigid template.

---

## Structured prompt (reference / fallback)

If you ever want to generate `client.ts` without using the conversational flow — or if you want to see exactly what fields the config needs — this is the explicit prompt. Fill in every `[PLACEHOLDER]`, paste into Claude, get back `client.ts` + `.env`.

```
I have a contractor website template. Generate two files:

## File 1: src/config/client.ts

Generate a complete TypeScript config file that exports a `client` const with
`as const`. Match the structure, field names, and shape of the existing
src/config/client.ts. Every string value must be tailored to this contractor —
no placeholder or generic text.

## File 2: .env

Write this exactly, substituting BUSINESS_ID:

VITE_SUPABASE_URL=https://zfmchywjmgykmlhjihls.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpmbWNoeXdqbWd5a21saGppaGxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0MTE5NjMsImV4cCI6MjA4ODk4Nzk2M30.iVhS5hJmCRUpXwHfCHr0b-yR7yd470uLzsifS-lXtys
VITE_BUSINESS_ID=[BUSINESS ID]

## Client info

Company name: [COMPANY NAME]
Full legal name (no abbreviations): [COMPANY NAME FULL]
Logo main / sub text: [LOGO MAIN] / [LOGO SUB — or blank if no ampersand]
Trade / noun / adjective: [TRADE] / [TRADE NOUN] / [TRADE ADJECTIVE]
Schema.org type: [SCHEMA TYPE — "RoofingContractor", "Plumber", "Electrician", "HVACBusiness", etc.]
Tagline: [TAGLINE]
Contractor license number: [ROC LICENSE]
Years in business: [YEARS]

Phone: [PHONE]  (digits only: [PHONE TEL])
Email: [EMAIL]
Website URL: [WEBSITE URL]
Google Reviews URL: [GOOGLE REVIEWS URL or "#"]

Address: [STREET], [CITY], [STATE], [ZIP]
Latitude / longitude: [LAT] / [LNG]
Service areas: [AREA 1], [AREA 2], [AREA 3], [AREA 4], [AREA 5], [AREA 6], [AREA 7]
Google Maps embed URL: [MAPS EMBED URL]

Brand accent HSL: [ACCENT HSL — e.g. "43 96% 50%" for amber, "210 100% 45%" for blue, "142 76% 36%" for green]

Owner first name: [OWNER FIRST NAME]
Discount percentage: [DISCOUNT PERCENT]
Average rating / total reviews: [RATING] / [TOTAL REVIEWS]

Services offered (5–7): [SERVICE 1], [SERVICE 2], [SERVICE 3], [SERVICE 4], [SERVICE 5], [SERVICE 6], [SERVICE 7]

## Images

If I give URLs, use them. Any field with "unsplash" means pick an appropriate Unsplash photo for the trade.

Hero (1600w): [URL or "unsplash"]
About (960w): [URL or "unsplash"]
FAQ (800w): [URL or "unsplash"]
Why Choose Us (960w): [URL or "unsplash"]
Service images (800w each, one per service): [URLs or "unsplash"]
Gallery preview (600w, 6 images): [URLs or "unsplash"]
Gallery project images (800w, 1–2 per project): [URLs or "unsplash"]

## Generate ALL of these in client.ts

1. Company info — every field above
2. Images — provided URLs or Unsplash
3. Home page copy — heroHeadline, heroSubheadline, heroCtaText, aboutText (2–3 sentences mentioning city, years, locally owned, no-BS tone)
4. Why Choose Us — heading with the city, subtitle with the trade, imageAlt, 4 benefits
5. Services — each with name, slug, short description, image URL, seoData (intro + what/why/when blocks, 3–5 sentences each, educational)
6. Process steps — 3 steps
7. FAQ — 4 trade/location-specific questions with detailed answers
8. Operating hours — Mon–Fri 7AM–6PM, Sat 8AM–4PM, Sun Closed (unless specified)
9. Reviews — 3 carousel reviews (initials, 5 stars, relative time, realistic text)
10. Featured reviews — 3 social proof reviews (initials, city + state location, 5 stars, 2-sentence text about specific work)
11. Gallery preview — 6 trade-relevant images with alt text
12. Gallery projects — 6 projects with trade-relevant titles and categories
13. Blog posts — 3 posts (slug, title, excerpt, recent date, category, readTime, 4–5 paragraph educational content)
14. Discount percent

## Tone & style

- Direct, contractor-native — sounds like the owner, not a marketing agency
- No buzzwords ("synergy", "leverage", "solutions provider", "cutting-edge")
- Specific to the trade — real materials, techniques, equipment
- Specific to the location — city, state, regional weather/conditions
- Reviews sound like real Google reviews — varied, natural, imperfect
- Blog content is genuinely educational, not SEO filler
- No "scaling" language, no "for now" hedges — write as the permanent state
```
