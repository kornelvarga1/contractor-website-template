# Client Onboarding SOP — Contractor Website

End-to-end process for spinning up a new client website from the template.
Follow in order.

---

## Phase 1 — Wait for the onboarding submission

The client fills out the form at **`vargaflow.com/onboarding-form`**. Photos upload directly to storage.

- [ ] Open **Admin → Submissions** (`/onboarding-submissions`)
- [ ] Find the client's submission at the top (most recent first)
- [ ] Skim the fields — if anything critical is blank (email, address, license, services), reach out to the client before proceeding

The form collects: name, email, business name, trade type, license number, tax ID, full address, years in business, current website, Google Business URL, services offered, service areas, differentiators, hours, social links, discount, brand color, photos.

---

## Phase 2 — External lookups

These three things the client can't provide — you do them:

### Google Maps embed URL
- [ ] Search the address on Google Maps
- [ ] **Share → Embed a map → Copy HTML** → pull just the `src="..."` URL

### Latitude/longitude
- [ ] From the Google Maps URL bar, grab `@<LAT>,<LNG>` (e.g. `@33.5231793,-112.068709`)

### Google Reviews URL
- [ ] If the client gave you their Google Business Profile URL, use it directly
- [ ] If not and they have a profile, find it on Google and copy the "leave a review" link
- [ ] If they have no profile yet, use `"#"` and set realistic placeholder rating (4.9) + count (20–50) — update later

---

## Phase 3 — Supabase business setup

- [ ] Log into Supabase project `zfmchywjmgykmlhjihls`
- [ ] Create a new row in the `businesses` table with the client's data
- [ ] Copy the generated `business_id` (UUID) — you'll paste it as `VITE_BUSINESS_ID`
- [ ] Create/assign any user accounts the client needs
- [ ] Ideally, update the matched contact's `business_id` to link everything

---

## Phase 4 — Copy the template

- [ ] Copy `C:\Users\VargaFlow\contractor-website-template` to a new directory (e.g. `C:\Users\VargaFlow\clients\<client-slug>`)
- [ ] `cd` into it

---

## Phase 5 — Generate the config (conversational with Claude Code)

This is the key step. Don't hand-fill anything.

- [ ] In the admin submissions page, expand the client's submission → **Copy All**
- [ ] In the new client project directory, run `claude` to start Claude Code
- [ ] Paste this as your first message:

```
Read ONBOARDING_SOP.md and MASTER_PROMPT.md in this repo so you know the full workflow and the client.ts structure.

Here's the onboarding submission for this client:

[PASTE ALL]

Here are the manual lookups I already did:
- BUSINESS_ID: <uuid from Phase 3>
- Google Maps embed URL: <from Phase 2>
- Latitude: <>
- Longitude: <>
- Google Reviews URL: <or "#" if none>

Generate src/config/client.ts and .env for this client. Fill in what you can from the data, flag anything still missing before you write the files, and ask me for anything unclear. Match the tone and structure of the existing client.ts exactly.
```

- [ ] Claude will either write the files or ask clarifying questions — answer them
- [ ] Spot-check the generated `client.ts`:
  - Services, FAQ, blog posts are trade-specific (not generic)
  - Company name, phone, address appear correctly
  - Brand color / accent HSL matches what the client picked
  - Service areas list matches what they gave you

If something feels off, just tell Claude what to change — don't edit by hand unless it's tiny.

---

## Phase 6 — Photos

- [ ] In admin → Submissions → expand the submission → scroll to the Photos gallery
- [ ] Click **Download All** → all originals download locally
- [ ] Review — pick the best photos for each role (hero, about, gallery)
- [ ] Upload to your CDN / Supabase storage bucket (or keep the URLs already in the submission — they're public and work directly)
- [ ] Ask Claude to update `client.ts` with the specific URLs per section

For most clients, the URLs already in the submission work as-is — you only need to re-upload if you're editing/cropping photos.

---

## Phase 7 — Build & test locally

- [ ] `npm install`
- [ ] `npm run build` — must finish with zero errors
- [ ] `npm run dev` — opens on port 8080
- [ ] Click through every route:
  - `/` — hero, about, services, reviews, FAQ, CTA
  - `/services/<each>` — every service page loads with right SEO content
  - `/areas/<each>` — every location page loads
  - `/gallery` — photos render, lightbox works
  - `/blog` + each `/blog/<slug>`
  - `/contact` — address, hours, map, phone correct
  - `/quote` — form renders, test submission works
  - `/discount`, `/write-a-review`, `/terms`, `/privacy`
- [ ] Visual checks: logo text right, brand color matches, phone in header/footer/CTAs
- [ ] No "Phoenix" or "roofing" leftover (if different city/trade)
- [ ] Submit test quote → verify it lands in Supabase `message_queue` and triggers Flow #1

---

## Phase 8 — Fix issues

All edits go in `client.ts`. If something's wrong, tell Claude what to fix — don't touch components.

---

## Phase 9 — Deploy

- [ ] Final `npm run build` — confirm clean
- [ ] Deploy to hosting (Vercel / Netlify / Cloudflare Pages)
- [ ] Connect the client's domain
- [ ] Verify live site loads and forms submit end-to-end
- [ ] Add site to Google Search Console, submit sitemap

---

## Phase 10 — Handoff

- [ ] Move the client in the CRM from onboarding → active
- [ ] Send go-live message with their URL
- [ ] Keep the client project folder — handy for future updates or re-generation

---

## Time budget

Once the client has submitted the form and you have the lookups done: **30–60 minutes total.**
- Phase 2 lookups: ~10 min
- Phase 5 generation chat: ~10 min
- Phase 7 testing: ~15–20 min
- Phase 8 fixes: usually minor
