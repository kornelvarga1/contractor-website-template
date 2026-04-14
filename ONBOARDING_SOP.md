# Client Onboarding SOP — Contractor Website

End-to-end process for spinning up a new client website from the template.
Follow in order. Each section ends with a clean handoff to the next.

---

## Phase 1 — Collect Client Info (from onboarding form)

From `vargaflow-client` form submission, you should already have:

- [ ] Company name (and full legal name if different)
- [ ] Owner/operator name
- [ ] Trade type (roofing, plumbing, HVAC, electrical, etc.)
- [ ] Phone number
- [ ] Email address
- [ ] Street address, city, state, ZIP
- [ ] Service area cities (5–7)
- [ ] Years in business
- [ ] Contractor license number
- [ ] Services offered (5–7 service names)
- [ ] Brand color preference
- [ ] Discount/offer percentage for new customers
- [ ] Client photos (if provided)

If any of these are missing, request them before proceeding.

---

## Phase 2 — External Lookups

Do these one by one, save the results alongside the client info.

### Google Business Profile
- [ ] Find the client's Google Business listing
- [ ] Copy the Google Reviews URL (the link that opens their review list)
- [ ] Note the **average rating** (e.g. 4.9) and **total review count** (e.g. 47)
- [ ] If no profile exists yet, use `"#"` for URL and put realistic placeholders (4.9 rating, 20–50 reviews) — you can update after they set one up

### Google Maps
- [ ] Search the client's address on Google Maps
- [ ] Click **Share → Embed a map → Copy HTML** — extract just the `src="..."` URL and save it as the **Maps Embed URL**
- [ ] From the Maps URL bar, pull the latitude and longitude (format: `@33.5231793,-112.068709`)

### Website domain
- [ ] Confirm the client's website URL (usually their existing domain — if they don't have one yet, use the planned domain)

### Brand color → HSL
- [ ] Convert the client's brand color to HSL format (no `hsl()` wrapper)
- Common conversions:
  - Amber/gold: `43 96% 50%`
  - Blue: `210 100% 45%`
  - Green: `142 76% 36%`
  - Red: `0 84% 60%`
  - Orange: `25 95% 53%`
- Tool: any hex → HSL converter online

---

## Phase 3 — Supabase Setup

- [ ] Log into Supabase project `zfmchywjmgykmlhjihls`
- [ ] Create a new business profile in the `businesses` table with the client's data
- [ ] Copy the generated `business_id` (UUID)
- [ ] Create any client-specific user accounts if needed
- [ ] Note the `business_id` — you'll paste it into the prompt

---

## Phase 4 — Client Photos (optional)

If the client provided photos:

- [ ] Upload to your CDN / Supabase storage / image host
- [ ] Get the URLs for each image category:
  - Hero (1600w wide landscape)
  - About (960w, team/job site)
  - FAQ (800w, completed work)
  - Why Choose Us (960w, worker on site)
  - One per service (800w each)
  - 6 gallery preview images (600w)
  - Gallery project photos (800w, 1–2 per project type)

If the client has no photos yet, leave all image fields as `"unsplash"` in the prompt — you can swap in real photos later by updating `client.ts`.

---

## Phase 5 — Copy Template & Prepare Prompt

- [ ] Copy `C:\Users\VargaFlow\contractor-website-template` to a new directory for the client (e.g. `C:\Users\VargaFlow\clients\[client-slug]`)
- [ ] Open `MASTER_PROMPT.md` in the new directory
- [ ] Fill in every `[PLACEHOLDER]` with the info collected in Phases 1–4
- [ ] Double-check: no placeholder left unfilled

---

## Phase 6 — Generate Config

- [ ] Open a terminal in the new client project directory
- [ ] Run `claude` to start Claude Code
- [ ] Paste the filled-out prompt from Phase 5
- [ ] Claude generates `src/config/client.ts` and `.env`
- [ ] Spot-check the generated files:
  - [ ] `client.ts` has content for all sections (not empty arrays)
  - [ ] `.env` has the correct `VITE_BUSINESS_ID`
  - [ ] Service names, FAQ, and blog posts are trade-specific (not generic)
  - [ ] Company name, phone, address appear correctly throughout

---

## Phase 7 — Build & Test Locally

- [ ] `npm install`
- [ ] `npm run build` — must complete with zero errors
- [ ] `npm run dev` — starts dev server on port 8080
- [ ] Open browser to `http://localhost:8080`

### Click through every route:
- [ ] `/` (home) — hero, about, services, reviews, FAQ all render
- [ ] `/services/[each-slug]` — every service page loads with correct SEO content
- [ ] `/areas/[each-city]` — every location page loads
- [ ] `/gallery` — photos display, lightbox works
- [ ] `/blog` — blog posts listed
- [ ] `/blog/[each-slug]` — each blog post opens
- [ ] `/contact` — address, map, hours, phone all correct
- [ ] `/quote` — form renders, submission works (check Supabase log)
- [ ] `/discount` — discount % correct, submission works
- [ ] `/write-a-review` — submission works

### Visual checks:
- [ ] Logo shows correct name
- [ ] Accent color matches client's brand
- [ ] Phone number appears correctly in header, footer, CTAs
- [ ] Service areas dropdown in header has all cities
- [ ] No "Phoenix" or "roofing" text left over anywhere (if different trade/city)

### Form test:
- [ ] Submit quote form with test data
- [ ] Verify it hits Supabase `message_queue` and triggers Flow #1 sequence
- [ ] Verify SMS + email actually send to the test number

---

## Phase 8 — Fix Issues

If anything's wrong, edit the relevant section of `client.ts` and reload. Common fixes:

- Wrong brand color → update `accentHsl`
- Tone off on aboutText/FAQ → edit the text directly
- Wrong Google Maps location → re-fetch embed URL, paste new one
- Image looks wrong → swap the URL in `images` or per-service `image` field

All edits stay in `client.ts` — never touch individual components.

---

## Phase 9 — Deploy

- [ ] Final `npm run build` — confirm clean
- [ ] Deploy to hosting (Vercel / Netlify / Cloudflare Pages)
- [ ] Connect client's domain
- [ ] Verify live site loads and submits go through
- [ ] Add site to Google Search Console
- [ ] Submit sitemap

---

## Phase 10 — Handoff

- [ ] Move client record in CRM from onboarding → active
- [ ] Send client the go-live message with their new URL
- [ ] Archive the prompt you used (keep in a clients folder for reference — makes future updates or re-generates trivial)

---

## Time budget

With info collected: **one pass through should take 30–60 minutes total.**

- Phase 2 lookups: ~10 min
- Phase 5 filling prompt: ~10 min
- Phase 6 generation: ~2 min
- Phase 7 testing: ~15–20 min
- Phase 8 fixes: variable, usually minor

Biggest time sinks are photo handling (if real photos) and form/integration testing.
