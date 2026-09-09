# VantaShine Exteriors — Build Status

Free trial client, started 2026-08-08. No onboarding form submitted yet — this build was done from public info (his existing site + GBP + what Kornél provided) instead of waiting on the form.

## Known info

- Owner: Blake Currie. Phone: (515) 410-5705.
- Address: 313 W Main St, Sac City, IA 50583. Hours: 7am–6pm Mon–Sat, closed Sunday.
- Service area: Carroll County, Sac County, Calhoun County, Western Iowa.
- Trade: exterior cleaning — window cleaning, pressure washing, soft washing, gutter cleaning, trash bin cleaning, commercial properties.
- Tagline: "Your Property. Spotless. Guaranteed."
- Pricing (carried over from his current site, kept public — see decision below): exterior window $8, exterior+interior $10, +$4 screens/tracks/sills.
- Guarantees: 100% satisfaction guarantee, 48-hour rain guarantee on window cleaning, insured (NEXT Insurance), owner-operated.
- 14 reviews, 5.0 rating on GBP (per Kornél — full review text not yet pasted, see Blocked).
- GBP: https://www.google.com/maps/place/VantaShine+Exteriors/@42.421706,-94.9884542,17z
- His current site (to be retired once this one is approved): https://vantashineexterior.vercel.app/

**Pricing decision:** unlike most client sites (quote-only CTA), VantaShine's pricing table is shown publicly. Window/pressure washing is a commodity, per-unit service — cost doesn't swing per job the way roofing/plumbing/fencing does — so a visible price list reduces friction instead of losing price-comparing customers. Folded into the Window Cleaning service page + a dedicated FAQ item (no dedicated pricing component exists in the template — didn't want to add a new shared component for one client).

## Done

- [x] `src/config/client.vantashine-exteriors.ts` scaffolded with real data (services, pricing, guarantees, hours, service area, FAQ)
- [x] `npm run build` clean, 25 pages prerendered
- [x] Supabase `businesses` row created — id `0443d09e-f168-4ba3-8a16-3c2bb34de1b7`
- [x] Vercel project `vantashine-exteriors` created, env vars set (`VITE_CLIENT`, `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VITE_BUSINESS_ID`)
- [x] Deployed to production preview: **https://vantashine-exteriors-eta.vercel.app** (note: plain `vantashine-exteriors.vercel.app` slug was already taken elsewhere on Vercel, so it aliased with an `-eta` suffix instead)
- [x] **Real favicon (2026-08-09)** — browser tab icon now uses the real logo PNG instead of the generic drawn house mark (`vite.config.ts`'s `favicon-per-client` plugin now special-cases `vantashine-exteriors`). Used the full logo image as-is (no crop tooling available in this environment) — reads fine at normal tab size, may blur slightly at very small bookmark-icon sizes. Steady-fencing and all other clients unaffected, confirmed via build check.
- [x] **Design fixes round 2 (2026-08-09)**:
  - Chat widget header now says "Have a question?" next to the logo.
  - Restructured the chat widget popup as a proper flex column (fixed header / scrollable body / fixed footer) so "Powered by VargaFlow" can never get clipped on short viewports again — previously it was the last item inside one scrolling block sized off a max-height percentage; now it's pinned outside the scroll area entirely, verified at a 700px window (≈585px usable viewport).
  - Logo sizing is now explicit per real placement, but **only when a real logo image exists** — the drawn SVG+text fallback (used by every client without an uploaded logo, e.g. steady-fencing) has fixed pixel dimensions, so blindly bumping the wrapper height just added dead space around a still-tiny mark for those clients. Header/footer/quote-form logo sizing now checks `client.logoImageUrl` and only applies the bigger size then; verified no regression on steady-fencing.
  - Quote form: logo bumped way up (h-16 → h-28) and card padding tightened (`p-6 sm:p-10` → `p-5 sm:p-6`) per request — much more prominent branding, less wasted whitespace.
- [x] **Design fixes round 1 (2026-08-09)**, requested after seeing the dark-theme rebrand live:
  - Lightened `.dark` background/card tokens (was near-black 7%/10%, now 13%/17% — softer charcoal, less harsh across a full page of stacked sections).
  - Fixed near-zero-contrast bug: every hardcoded-white button/input (header call button, hero call button, quote form fields, mobile action bar) paired `bg-white` with the theme-reactive `text-foreground` token, which flips to near-white in dark mode = invisible text. Same bug also hit the Discount/WriteReview white-card forms. All now use a fixed `text-[#1a1a1a]` instead, since these elements are always white regardless of site theme.
  - Removed then **restored** (per Kornél's follow-up) the extra dark gradient under the navbar on hero-style sections — it's intentional, helps the nav bar read against the photo. Rebalanced both the gradient and the base scrim from `/60` to `/40` opacity to keep the overall look lighter without losing navbar legibility.
  - Swapped hero/about images to Blake's own real daylight photo (was a moody Unsplash stock shot) — real photo is naturally brighter, directly addresses "too dark."
  - Real logo swapped in everywhere: initially a JPG with a baked-in black background (worked on dark surfaces only), then Kornél dropped a transparent-background PNG which now renders correctly on every background including the light-blue accent chat widget header. Logo sizing is now explicit per placement via a `className` prop on `Logo` (header/footer/quote form `h-16`, chat widget `h-10`) since one fixed size didn't fit every context. Header logo is now visibly larger per Kornél's request.
  - Chat widget message-bubble icon swapped from the house/trade icon to a person/profile icon (`CircleUserRound`) — makes more sense next to "this text goes straight to my personal phone."
  - Fixed a real routing/rendering bug found along the way: `main.tsx` imported the client config via a relative path instead of the `@/config/client` alias, so it always silently resolved to the roofing reference config — meaning **every** deployed client site (not just this one) was rendering accent-driven buttons/highlights in roofing's amber regardless of configured color. Fixed the import (also shrank the bundle — dead code elimination now works since only one config resolves instead of two).
  - Fixed review card truncation — was hard-capped at 160 chars with a trailing "…" and no way to read more; now shows full text, card height grows to fit (flexbox row height already handles this correctly).
  - Fixed chat widget height on short/laptop viewports — it was anchored `bottom-20` (80px) but capped at `max-h-90vh`, which ignores that offset; on a short viewport the widget's top could go negative (behind the browser chrome). Now `max-h-[calc(100vh-6.5rem)]`, verified via direct viewport measurement (not just visual) at 585px height — top stays at +25-34px instead of the old formula's -21.5px.
  - All of the above except the real photos/logo (VantaShine-specific) are shared-component fixes, so steady-fencing got rebuilt/redeployed too even though it wasn't the one asked about.
- [x] **Rebrand to real colors + dark theme (2026-08-08)** — swapped accent from a placeholder teal to Blake's actual brand blue (#7EC8E3 / `196 64% 69%`, matches his shirt + current site), switched to a dark theme. Found and fixed a real bug along the way: `main.tsx` imported `client` via a relative path instead of the `@/config/client` alias, so it always silently resolved to the roofing reference config — meaning **every** deployed client site (not just this one) was rendering its accent-driven buttons/highlights in roofing's amber regardless of its own configured color. Fixed the import; also had to convert ~15 hardcoded `bg-white` page-canvas sections to the theme-aware `bg-background` token (button/badge/overlay `bg-white` usages were left alone — those are intentional contrast elements on dark backdrops, not page canvas) and stop the dormant `.dark` CSS variant from inverting `--primary` (which would've turned the header/footer/quote-modal white-on-black instead of staying dark). Auto-contrast added: when an accent color is light (≥60% lightness), button text automatically switches to dark instead of white, so this doesn't need to be hand-tuned per client. Dark class is baked into the prerendered HTML (not just applied via JS) to avoid a light-theme flash on load. Verified visually via local preview + live deploy — high contrast throughout, cohesive.
- [x] **SEO fix (2026-08-08)** — title/meta description/OG tags/canonical/JSON-LD were being injected client-side only (`useEffect`), so every prerendered page shipped with `<title>Loading…</title>` and zero structured data; now baked into the prerendered HTML. Also fixed: (1) `tradeAdjective` being 2 words ("exterior cleaning") broke the naive first-letter-only capitalize, producing "Exterior cleaning Contractor" in titles/H1s/JSON-LD — now proper per-word title-casing; (2) all 7 area pages, including VantaShine's own home city Sac City, were silently 404'ing both server- and client-side because nav links, prerendered file paths, and the page's own city-match validation each built the URL slug differently. All area-slug logic now goes through one shared `citySlug()` helper (`src/lib/seoMeta.ts`). Shared-repo fix, so it applies to future clients too, but only these 2 sites were redeployed with it — demo sites intentionally left alone.

## Blocked / not done yet

- **Real photos** — hero + about are Blake's own real photo now (done, see Design fixes round 1). Services and gallery images are still verified Unsplash stock (window cleaning / pressure washing / gutter themes) — swap for Blake's own project photos once he sends more.
- **Quote form / chat widget will error on submit** — both POST to Supabase edge functions that require a `settings` row for this `business_id` (for owner SMS notifications). No `settings` row exists yet — intentionally not created, since it's gated on having a real Twilio number for this business, which needs A2P/EIN (see below). Submitting will show "Something went wrong. Try calling us instead." — expected, not a bug.
- **Click-to-call already works** — the mobile "Call Now" button and header phone link are plain `tel:` links to Blake's real number, no Twilio dependency.
- **A2P 10DLC / Twilio number** — needs Blake's EIN, which only comes from the real onboarding form (`tax_id` field). Fully manual process on VargaFlow's end regardless — not blocked by anything client-specific.
- **Custom domain** — not connected. Site intentionally lives on `vantashine-exteriors-eta.vercel.app` for now — this is just a temporary preview link so Kornél/Blake can look at it (his current site, `vantashineexterior.vercel.app`, is also just his own temporary Vercel link, not a real domain — confirmed by Kornél). A proper domain gets connected for both once ready to go live, and the old temp link gets retired.

## Done (update 2026-08-08, later same day)

- [x] Real review text pasted by Kornél from GBP — 13 of the 14 reviews have written text (Eric Baumhover left a rating with no text) and are all now live. Featured reviews on the homepage use Linda Russell and Madelynne Weitl (most detailed, mention specific work).
- [x] Rebuilt and redeployed — live at https://vantashine-exteriors-eta.vercel.app

## Next when the onboarding form arrives (or Kornél sends more info)

1. Swap remaining Unsplash placeholders (services + gallery only — hero/about already use his real photo) for Blake's real project photos.
2. Fill in `about_us` personal-brand copy from the form (currently written from what's known — his own site's "one crew, one standard, one call" language).
3. Get `tax_id`/EIN from the form → kick off A2P 10DLC registration (manual, external).
4. Once a Twilio number is assigned: create the `settings` row (`business_id: 0443d09e-f168-4ba3-8a16-3c2bb34de1b7`, `twilio_phone_number`, `my_phone`, `my_name: "Blake"`, `company_name: "VantaShine Exteriors"`) so the quote form/chat widget stop erroring.
5. Once ready to go live: pick and connect a real domain, replacing both the temporary `vantashine-exteriors-eta.vercel.app` link and Blake's current temp site.
6. Move CRM pipeline stage, submit to Search Console.
