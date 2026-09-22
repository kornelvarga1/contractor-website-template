# Contractor Website Template

A reusable website template for home service contractors: roofing, plumbing, HVAC, electrical. One codebase, deployed per client through build-time configuration, rather than a bespoke build each time.

The demo client is Phoenix Roofing & Repair, a fictional business used to exercise every component with realistic content.

## The idea

A contractor website is the same site every time with different content: services, service area, trade-specific copy, photos, a quote form and a click-to-call header. Rebuilding that per client is the mistake most agencies make. Here, a client is a config, and deployment is a build flag.

```
VITE_CLIENT=phoenix-roofing  npm run build
```

Client data lives in `src/clients/<slug>/`. Adding a contractor means adding a folder and a deploy target, not a branch.

## What's in it

- Landing page with hero, services, service area, trust and quote sections
- Per-service pages generated from a shared template
- Quote form posting to a Supabase edge function, which creates the contact and starts the follow-up sequence
- Click-to-call header that switches to a tracked number
- Review and testimonial sections
- Prerendered routes for search indexing

## Stack

React 18, TypeScript, Vite, Tailwind, shadcn/ui, Vitest. Supabase for form handling. Deployed on Vercel, one project per client, all from this repo.

## Design rules

Short durations and small travel: 0.4s scroll reveals, 0.2s modals, expo-out easing. No wavy dividers, no heavy parallax, no atmospheric glow. The brand colour is reserved for calls to action and functional UI, never decorative text. Contractor sites compete against slow, cluttered, template-looking sites, so feeling fast and clean *is* the differentiation.

Mobile demos and mockups are sized so the heading and the start of the description are visible together. A demo that fills the viewport loses its own context.

## Running it

```bash
npm install
cp .env.example .env
npm run dev             # port 8080
npm run test
npm run build
```

`VITE_BUSINESS_ID` scopes form submissions to the right contractor.
