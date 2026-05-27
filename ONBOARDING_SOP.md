# Client Onboarding SOP — Contractor Website

**Total time: ~10 minutes.**
Claude handles everything except visual QA and your go/no-go.

---

## How to trigger

Say: **"New client — onboard [Name / company]"** and give Claude one of:
- The Supabase submission ID (UUID from the `onboarding_submissions` table)
- Or just paste the raw submission data if you have it open

That's it. Claude takes it from there and hands you back a live URL.

---

## What Claude does (in order)

### 1. Pull the submission
Query `onboarding_submissions` in Supabase project `zfmchywjmgykmlhjihls` by ID or name.
Flags anything critical that's blank (phone, address, license) before proceeding.

### 2. External lookups
- **Google Maps embed URL** — WebFetch the address, extract the embed `src`
- **Lat / lng** — parse from the Maps URL
- **Google Reviews URL** — use the GBP URL from the submission, or `"#"` with placeholder rating if none

### 3. Supabase business setup
- Insert a new row in the `businesses` table with the client's data
- Capture the generated `business_id` UUID
- Link the matched contact's `business_id` if the contact exists

### 4. Copy and configure the template
- Copy `C:\Users\VargaFlow\contractor-website-template` → `C:\Users\VargaFlow\clients\<client-slug>\`
- Select the right trade config (`client.plumber.ts`, `client.roofing.ts`, etc.) in `src/config/client.ts`
- Generate / update the trade config with all client data:
  - Company name, phone, address, areas, geo, hours, license, discount
  - Trade-specific services, FAQ, blog posts, SEO copy — city-swapped throughout
  - Brand color (`accentHsl`) from the client's submission
  - Photo URLs from submission storage (or Unsplash placeholders if no photos yet)
- Write `.env` with `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VITE_BUSINESS_ID`

### 5. Build
```
npm install && npm run build
```
Zero errors required before proceeding.

### 6. Deploy to Vercel
- New Vercel project per client: `<client-slug>.vercel.app`
- Uses the prebuilt output deploy workflow (same as demo deploys)
- Hands you back the live production URL

---

## What you do

### Visual QA (~2–3 min)
Click through the live URL and check:
- [ ] Logo, company name, phone correct everywhere
- [ ] Brand color looks right
- [ ] Hero image loads (not broken)
- [ ] Services pages load with right content
- [ ] Contact page — address, hours, map correct
- [ ] No leftover placeholder city/trade ("Springfield", "Citywide", etc.)
- [ ] Submit a test quote → verify it lands in Supabase

### Go / no-go
- If something's off: tell Claude what's wrong, it fixes and redeploys
- If it looks good: say **"ship it"**

---

## After you say ship it

- [ ] Claude drafts the go-live message to the client
- [ ] Connect client's domain (Vercel dashboard → Domains)
- [ ] Move client in CRM from onboarding → active
- [ ] Add to Google Search Console, submit sitemap

---

## Time budget

| Step | Who | Time |
|---|---|---|
| Trigger + submission pull | You + Claude | ~1 min |
| Lookups, config generation, build, deploy | Claude | ~5–7 min |
| Visual QA | You | ~2–3 min |
| Fixes if needed | Claude | ~2 min |
| **Total** | | **~10 min** |
