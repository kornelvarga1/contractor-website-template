# CLAUDE.md — Contractor Website Template

**Read `DEPLOY_SOP.md` before doing any client deployment.** It covers the full workflow, config spec, image sourcing, and deploy commands.

---

## Architecture

One codebase, many client sites. Each client is a Vercel project with `VITE_CLIENT=<slug>` set. Vite aliases `@/config/client` directly to `src/config/client.<slug>.ts` at build time — only that file is bundled. No other shared files need editing to add a new client.

```
src/config/
  client.ts                   ← type reference only, do not edit
  client.roofing.ts           ← Phoenix Roofing & Repair (template demo)
  client.bl-plumbing.ts       ← BL Plumbing LLC
  client.dynamic-pro.ts       ← Dynamic Pro Services (remodeling)
  client.maxsons-technical.ts ← Maxson's Technical Services (handyman)
  client.<slug>.ts            ← new clients go here
```

## Commands

```bash
npm run dev     # Dev server port 8080 — set VITE_CLIENT in .env.local first
npm run build   # Production build (reads VITE_CLIENT from env)
npm run lint
npm run test
```

## Dev setup for a specific client

```bash
echo "VITE_CLIENT=maxsons-technical" > .env.local
npm run dev
```

## Adding a new client

1. Create `src/config/client.<slug>.ts` (see spec in DEPLOY_SOP.md)
2. Run `.\scripts\deploy-client.ps1 -Slug "<slug>"`

That's it. No changes to `vite.config.ts`, `client.ts`, or any shared file.

## Component architecture

```
src/
  pages/           # One file per route (Index, Gallery, Contact, etc.)
  components/
    layout/        # Header, Footer, MobileActionBar, ScrollToTop
    home/          # Home page sections — all read from @/config/client
    shared/        # QuoteModal, QuoteForm, Logo, SeoHead, ParallaxBg
    ui/            # shadcn/ui — do not modify manually
  config/          # Client configs (see above)
  hooks/           # use-mobile, useQuoteModal
  context/         # QuoteModalContext
```

## Styling

- Tailwind utility classes throughout
- Accent color injected as CSS variable from `client.accentHsl`
- Dark primary (`hsl(0, 0%, 10%)`) with configurable accent
- `cn()` from `@/lib/utils` for conditional class merging
- Animations: short durations (0.2s modals, 0.4s scroll), expo-out curve, no atmospheric effects

## Key rules

- Brand accent color on CTAs and functional UI only — not on eyebrows or decorative text
- Mobile demo/mockup images must not fill the viewport — leave room for heading + description
- `ReviewsSection` handles `reviews: []` gracefully (shows "Be the first" CTA)
- `LogoIcon` is `"house"` for all trades except plumbing (`"drop"`)
- Do not hand-edit `src/integrations/supabase/types.ts`
