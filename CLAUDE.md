# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (Vite, port 8080)
npm run build      # Production build
npm run lint       # ESLint
npm run test       # Run tests once (Vitest)
npm run test:watch # Run tests in watch mode
npm run preview    # Preview production build
```

## Architecture

**Stack:** React 18 + TypeScript, Vite, React Router v6, Tailwind CSS, shadcn/ui (Radix UI primitives), React Query, React Hook Form + Zod, Vitest + Playwright.

**Path alias:** `@/` maps to `src/`.

### Page Routing

Routes are defined in `src/App.tsx`. Key patterns:
- `/services/:slug` — dynamic service pages (roof-replacement, roof-repair, storm-damage-repair, metal-roofing, flat-roof-systems, roof-inspection, commercial-roofing)
- `/areas/:city` — dynamic area pages (Phoenix, Scottsdale, Tempe, Mesa, Chandler, Glendale, Peoria)
- All other routes map to named pages in `src/pages/`

### Component Organization

```
src/
├── pages/           # One file per route
├── components/
│   ├── layout/      # Header, Footer, MobileActionBar, ScrollToTop
│   ├── home/        # Home page sections (Hero, Services, Reviews, etc.)
│   └── ui/          # shadcn/ui components — do not modify these manually; use shadcn CLI
├── hooks/           # use-mobile, use-toast
└── lib/             # cn() utility for class merging
```

### Business Context

This is a contractor website for **Phoenix Roofing and Repair**. Content (phone numbers, addresses, service names, area names) is hardcoded throughout components — especially in `src/components/layout/Header.tsx` which contains the services and areas arrays used for navigation dropdowns.

### State & Data

- No backend currently wired up — form submissions are placeholders with comments indicating future Supabase integration
- A Supabase edge function script tag exists in `index.html`
- Component-level `useState` for UI state; React Query is configured but minimally used
- SEO structured data (JSON-LD RoofingContractor schema) lives in `index.html`

### Styling Conventions

- Tailwind utility classes throughout; dark primary (`#1a1a1a`) with amber accent (`#f59e0b`)
- CSS variables defined in `src/index.css` for theming (dark mode supported via `class` strategy)
- Use `cn()` from `@/lib/utils` to merge conditional class names
