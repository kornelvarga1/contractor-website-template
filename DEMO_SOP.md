# Demo Deploy SOP — Cold Prospect

Use this when a prospect replies to outreach and you want to send them a personalized demo URL before the sales call.

Every prospect gets their own Vercel URL. No Supabase setup. No domain.

---

## What to tell Claude

Just say: **"Deploy a demo for this guy"** and paste whatever you have. At minimum you need:

| Field | Example |
|---|---|
| Company name | "Johnson Plumbing & Drain" |
| Phone | "(918) 555-0192" |
| City / state | "Tulsa, OK" |
| Service areas | "Tulsa, Broken Arrow, Owasso" |

Nice to have (Claude will use placeholders if missing):
- Full address (for the map embed)
- Years in business
- License number

---

## What Claude will do

1. Update these fields in `src/config/client.plumber.ts`:
   - `companyName`, `companyNameFull`, `logoMain`, `logoSub`
   - `phone`, `phoneTel`
   - `address`, `areas`, `geo`
   - `mapsEmbed` (Google Maps embed for their address)
   - `aboutText`, `heroHeadline`, `heroSubheadline` (city-swapped)
   - `faq` license state references (e.g. "Oklahoma Construction Industries Board")

2. Run `npm run build`

3. Deploy to a **new Vercel project** named after the prospect (e.g. `johnson-plumbing`) → live at `johnson-plumbing.vercel.app`

---

## Deploy workflow (Claude handles this)

For each new prospect, Claude creates a fresh Vercel project:

```
1. npm run build  (in contractor-website-template/)
2. Copy dist/ → .vercel/output/static/
3. Create C:\Temp\<prospect-slug>\  (e.g. C:\Temp\johnson-plumbing\)
4. cd into it
5. vercel link --yes --project <prospect-slug>   → creates new Vercel project
6. Copy .vercel/output/ into the temp dir
7. vercel deploy --prebuilt                      → gets preview URL
8. vercel promote <preview-url> --yes            → goes live at <prospect-slug>.vercel.app
```

Each prospect ends up with their own URL that stays live independently.

---

## After deploy

Send the prospect something like:

> "Hey [Name] — put together a quick preview of what your site could look like. Take a look: [URL]"

---

## Resetting / cleanup

Old demo projects just sit on Vercel doing nothing — no cost on the free tier for inactive static sites. Delete them from the Vercel dashboard whenever you want to clean up after a deal closes or goes cold.

---

## Placeholder values (for reference / reset)

```
companyName:     "Citywide Plumbing & Drain"
logoMain:        "Citywide Plumbing"
logoSub:         "& Drain"
phone:           "(555) 400-0182"
city/state:      Springfield, OK
areas:           Springfield, Riverside, Oakwood, Maplewood, Lakeside
```
