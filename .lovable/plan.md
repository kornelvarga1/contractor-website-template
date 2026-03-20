

# Phoenix Roofing & Repair — Website Build Plan

## Tech Stack
- React + Vite + Tailwind CSS + react-router (SPA)
- Forms built with placeholder submission logic (Supabase wired later)
- 16 total pages

---

## Phase 1: Homepage + Global Navigation (Build First — Awaiting Approval)

### Global Navigation (All Pages)
- **Sticky header**, solid background (dark charcoal `#1a1a1a`)
- Left: Logo/business name
- Center: Nav links — Home, About, Services (dropdown), Service Areas (dropdown), Reviews, Specials, Contact
- Right: **Phone number in bold** `(602) 497-0154` + **"Get Free Estimate"** amber button (`#f59e0b`)
- Tight spacing, semibold weights, no pill shapes, no SaaS feel
- Mobile: hamburger menu at ≤1024px with full-screen overlay nav
- **Sticky mobile action bar** at bottom: Click-to-call + "Free Estimate" CTA

### Homepage Sections (Top → Bottom)

1. **Hero** — Full-width background image with 60% dark scrim
   - H1: "Phoenix's Most Trusted Roofing Contractor" (2-line typeset, orphan-controlled)
   - Subhead: Value-driven line about licensed/bonded/12+ years
   - Primary CTA: "Get Your Free Roof Inspection" (amber button)
   - Secondary: "Call Now (602) 497-0154"

2. **Trust Bar** — Logos/badges: Licensed, Bonded, Insured, 12+ Years, 5-Star Rated

3. **Services Overview** — 3-column grid (mobile: stacked) with icon + title + 1-line description for each of the 7 services, linking to service pages

4. **Why Choose Us / Value Stack** — 50/50 split section. Left: image. Right: 4 benefit bullets using Hormozi value equation (fast turnaround, transparent pricing, no-obligation inspections, lifetime workmanship)

5. **Social Proof** — 3 featured reviews with star ratings, names, locations

6. **Service Areas Map Section** — List of 7 cities served with links to location pages

7. **Current Specials Banner** — Free inspection offer + 10% off CTA

8. **Final CTA / Contact Form** — "Request Your Free Estimate" form (Name, Phone, Email, Service Needed, Message) with trust signals beside it

9. **Footer** — NAP info, nav links, phone, email, hours, service areas list

### SEO & Technical
- Unique `<title>` and meta description
- LocalBusiness JSON-LD schema on homepage
- Scroll-to-top on every route change
- VargaFlow chat widget placeholder comment in `index.html`
- `robots.txt` + basic sitemap structure

---

## Phase 2: Sub-Pages (After Homepage Approval)

### About Page
- Text-first hero (no background image), company story, values, team

### 7 Service Pages (Roof Replacement, Repair, Storm Damage, Metal, Flat Roof, Inspection, Commercial)
- Text-first hero with H1 + subhead (no hero images)
- Service description, process steps, FAQ accordion with schema
- CTA: "Get Free Estimate" form or click-to-call

### 7 Location Pages (Templated)
- Background image hero with dark scrim (place-based imagery, no branding)
- City-specific H1, swapped service list, local trust signals
- Same CTA pattern

### Reviews Page
- 12+ realistic placeholder reviews with names, star ratings, service type

### Specials Page
- Free inspection offer card + 10% off replacement card
- Each with its own CTA

### Contact Page
- Full contact form, NAP display, embedded map placeholder, phone/email

---

## Design System
- **Primary**: Dark charcoal `#1a1a1a`
- **Accent**: Amber `#f59e0b`
- **Text**: White on dark, dark on light sections
- **Typography**: System sans-serif stack, semibold headings, controlled line breaks
- **All text WCAG AA compliant**

