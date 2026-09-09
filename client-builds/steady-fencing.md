# Steady Fencing — Build Status

Free trial client, started 2026-08-08. No onboarding form submitted yet — this build was done from public info (GBP + web search + what Kornél provided) instead of waiting on the form.

## Known info

- Phone: (504) 654-9239.
- Address: 4909 James Dr, Metairie, LA 70003. Hours: 7 days, 9am–5pm.
- Trade: fencing — wood, vinyl, chain-link.
- 7 reviews, 5.0 rating on GBP (per Kornél — full review text not yet pasted, see Blocked).
- GBP: https://www.google.com/maps/place/Steady+Fencing/@30.0246271,-90.2104653,17z
- No existing site — nothing to migrate/replace.
- Standard quote-only pricing pattern (fencing cost varies too much per job — linear feet, material, terrain — to post flat prices, unlike VantaShine's per-window pricing).

## Done

- [x] `src/config/client.steady-fencing.ts` scaffolded with real data (services, hours, service area, FAQ)
- [x] `npm run build` clean, 25 pages prerendered
- [x] Supabase `businesses` row created — id `c9e88400-e4c3-42a8-b02a-38c463a420ee`
- [x] Vercel project `steady-fencing` created, env vars set (`VITE_CLIENT`, `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VITE_BUSINESS_ID`)
- [x] Deployed to production preview: **https://steady-fencing.vercel.app**
- [x] **Shared design fixes picked up (2026-08-09), round 2** — chat widget restructured to a fixed-header/scrollable-body/fixed-footer layout so "Powered by VargaFlow" can't get clipped on short viewports (previously the last item in one scrolling block sized off a max-height percentage). Chat widget message icon is now a profile icon instead of the trade icon. Note: the "Have a question?" header text and the bigger logo sizing were also added to the shared components, but since steady-fencing has no `logoImageUrl` set, it still shows the small drawn logo mark (by design — the sizing bump only applies when a real logo image exists, to avoid adding dead space around a fixed-pixel-size drawn mark). Rebuilt/redeployed to pick this up even though nobody asked about this site specifically.
- [x] **Shared design fixes picked up (2026-08-09), round 1** — lighter/rebalanced hero overlay gradient, chat widget height fix on short viewports (was `max-h-90vh` ignoring the `bottom-20` anchor offset, could clip behind browser chrome), review card text no longer truncated at 160 chars. The white-button contrast fix (`text-[#1a1a1a]` instead of theme-reactive `text-foreground`) is a no-op here since this site is light-themed, but the shared code now has it either way.
- [x] **Accent-color bug fix (2026-08-08)** — while doing VantaShine's rebrand, found `main.tsx` used a relative import that bypassed the per-client Vite alias, so this site's real green accent was never actually applying — every accent-driven button/highlight was silently showing roofing's amber instead. Fixed and redeployed; buttons/CTAs now correctly show the configured green.
- [x] **SEO fix (2026-08-08)** — title/meta description/OG tags/canonical/JSON-LD were being injected client-side only (`useEffect`), so every prerendered page shipped with `<title>Loading…</title>` and zero structured data. Now baked into the actual prerendered HTML server-side. Also fixed a real routing bug found along the way: multi-word area pages (New Orleans, River Ridge) were 404'ing both server- and client-side because nav links, prerender output, and the page's own validation each built the URL slug differently ("new orleans" vs "new-orleans"). All now use one shared `citySlug()` helper (`src/lib/seoMeta.ts`). This fix is in the shared template repo, so it'll apply to any future client too, but only steady-fencing and vantashine-exteriors were redeployed with it — the demo sites were left alone per Kornél's call (nobody uses them).

## Blocked / not done yet

- **Real photos** — using verified Unsplash stock (wood/vinyl/chain-link fencing themes) as placeholders throughout hero, services, gallery. Swap for Steady Fencing's own project photos once available.
- **Quote form / chat widget will error on submit** — same as every trial client pre-Twilio: both POST to Supabase edge functions that require a `settings` row for this `business_id`. No `settings` row exists yet — intentionally not created, gated on a real Twilio number, which needs A2P/EIN. Submitting will show "Something went wrong. Try calling us instead." — expected, not a bug.
- **Click-to-call already works** — plain `tel:` link to the real business number, no Twilio dependency.
- **A2P 10DLC / Twilio number** — needs the business's EIN from the real onboarding form. Fully manual process regardless.
- **Custom domain** — not connected. Site intentionally lives on `steady-fencing.vercel.app` for now — this is a temporary preview link so Kornél/Brandon can look at it, not the final domain. A proper domain gets connected once the site is ready to go live.

## Done (update 2026-08-08, later same day)

- [x] Real review text pasted by Kornél from GBP — all 7 reviews (Mazzella M., Joseph Carapina, Shelby Petersen, Jacob R., Chris S., Native Living, Gage A.) now live, confirming owner name is **Brandon**. Featured reviews on the homepage use Joseph Carapina and Shelby Petersen (most detailed).
- [x] `aboutText` updated to name Brandon as the owner.
- [x] Rebuilt and redeployed — live at https://steady-fencing.vercel.app

## Next when the onboarding form arrives (or Kornél sends more info)

1. Swap Unsplash placeholders for real project photos.
2. If Kornél gets GBP dashboard access, pull reviews directly instead of copy-paste (his note).
3. Add personal-brand "about us" detail once the form comes in (currently just names Brandon as owner).
4. Get EIN from the form → kick off A2P 10DLC registration (manual, external).
5. Once a Twilio number is assigned: create the `settings` row (`business_id: c9e88400-e4c3-42a8-b02a-38c463a420ee`, `twilio_phone_number`, `my_phone`, `my_name: "Brandon"`, `company_name: "Steady Fencing"`) so the quote form/chat widget stop erroring.
6. Once ready to go live: pick and connect a real domain, replacing the temporary `steady-fencing.vercel.app` link.
7. Move CRM pipeline stage, submit to Search Console.
