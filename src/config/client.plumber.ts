/**
 * PLUMBER DEMO TEMPLATE
 *
 * When a prospect replies, update these 5 fields and deploy:
 *   companyName, companyNameFull, logoMain, phone/phoneTel, address + areas + geo
 *
 * Everything else is ready to go.
 */

export const client = {
  // ── Company ────────────────────────────────────────────────────
  companyName: "Citywide Plumbing & Drain",
  companyNameFull: "Citywide Plumbing and Drain",
  logoMain: "Citywide Plumbing",
  logoSub: "& Drain",
  tradeNoun: "plumbing",
  tradeAdjective: "plumbing",
  schemaType: "Plumber",
  tagline: "Licensed, Bonded & Insured",
  rocLicense: "123456",
  yearsExperience: 12,

  // ── Contact ────────────────────────────────────────────────────
  phone: "(555) 400-0182",
  phoneTel: "5554000182",
  email: "service@citywideplumbinganddrain.com",
  websiteUrl: "https://citywideplumbinganddrain.com",
  googleReviewsUrl: "#",

  // ── Location ───────────────────────────────────────────────────
  address: {
    street: "123 Main St Suite 100",
    city: "Springfield",
    state: "OK",
    zip: "74000",
  },
  geo: { latitude: 36.1189, longitude: -95.9389 },
  areas: ["Springfield", "Riverside", "Oakwood", "Maplewood", "Lakeside"],
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222!2d-95.9389!3d36.1189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s123+Main+St%2C+Springfield%2C+OK+74000!5e0!3m2!1sen!2sus!4v1700000000000",

  // ── Theme ──────────────────────────────────────────────────────
  accentHsl: "210 85% 48%",

  // ── Images ─────────────────────────────────────────────────────
  images: {
    hero: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1600&q=80&fm=webp",
    about: "https://images.unsplash.com/photo-1676210134188-4c05dd172f89?w=960&q=80&fm=webp",
    faq: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80&fm=webp",
    whyChooseUs: "https://images.unsplash.com/photo-1676210133055-eab6ef033ce3?w=960&q=80&fm=webp",
  },

  // ── Home Page Copy ─────────────────────────────────────────────
  heroHeadline: "Springfield's Trusted Plumbing Contractor",
  heroSubheadline: "Serving Springfield homeowners for 12+ years",
  heroCtaText: "Get a Free Quote",
  aboutText:
    "Springfield Plumbing and Drain has been keeping Springfield homes running for over 12 years. We're a locally owned crew — no national franchise, no call centers. When you call, you get us. We show up on time, price honestly, and stand behind every job.",

  // ── Why Choose Us Section ──────────────────────────────────────
  whyChooseUs: {
    heading: "Why Springfield Homeowners Choose Us",
    subtitle:
      "We eliminate the stress, guesswork, and wasted time that comes with hiring the wrong plumber.",
    imageAlt: "Licensed plumber working on residential pipe repair in Springfield",
    benefits: [
      {
        title: "Same-Day Service",
        desc: "Most repairs scheduled same day or next morning. We don't leave you without hot water or a working toilet.",
      },
      {
        title: "Upfront Flat-Rate Pricing",
        desc: "You know the price before we touch anything. No hourly surprises, no change orders after the fact.",
      },
      {
        title: "Free Estimates",
        desc: "Free on-site estimates for all jobs — no service call fee just to get a number.",
      },
      {
        title: "Workmanship Guarantee",
        desc: "We stand behind every repair and installation. If something isn't right, we come back and fix it.",
      },
    ],
  },

  // ── Services ───────────────────────────────────────────────────
  services: [
    {
      name: "Drain Cleaning",
      slug: "drain-cleaning",
      description:
        "Fast, effective drain cleaning for clogs, slow drains, and recurring backups — done right without damaging your pipes.",
      image: "https://images.unsplash.com/photo-1676210134188-4c05dd172f89?w=800&q=80&fm=webp",
      seoData: {
        intro: "A slow or blocked drain is more than an inconvenience — left alone, it backs up, damages pipes, and turns into an emergency. We clear clogs fast and diagnose the root cause so the problem doesn't come right back.",
        seoBlocks: {
          what: "Drain cleaning involves clearing obstructions from your home's drain lines using professional-grade tools — hydro-jetting, motorized drain snakes, and camera inspection. Unlike store-bought chemicals that eat at your pipes, professional cleaning removes the actual blockage and leaves your drain lines intact.",
          why: "Recurring clogs are a sign of a deeper problem — grease buildup, root intrusion, or a partial collapse in the line. Ignoring them leads to sewage backups, water damage, and pipe replacement. Professional drain cleaning addresses the real issue before it escalates.",
          when: "Call us when a drain is slow to clear, gurgling, or completely blocked. If multiple drains in your home are slow at the same time, that's a main line problem — don't wait on that one.",
        },
      },
    },
    {
      name: "Water Heater Repair & Replacement",
      slug: "water-heater-repair-replacement",
      description:
        "Expert repair and replacement for tank and tankless water heaters — back to hot water fast.",
      image: "https://images.unsplash.com/photo-1676210134190-3f2c0d5cf58d?w=800&q=80&fm=webp",
      seoData: {
        intro: "No hot water is an urgent problem. Whether your water heater needs a repair or it's time to replace it, we diagnose fast and get you back to normal — often same day.",
        seoBlocks: {
          what: "Water heater service covers everything from element and thermostat replacements on tank units to burner and heat exchanger repairs on tankless systems. We work on all major brands and fuel types — gas, electric, and propane — and handle full replacements when repair no longer makes financial sense.",
          why: "A failing water heater doesn't just mean cold showers. Sediment buildup reduces efficiency and drives up your gas or electric bill. Leaking water heaters can cause significant water damage to the area around them. Catching problems early extends the unit's life and avoids emergency replacement.",
          when: "Call us if your water is lukewarm, takes much longer to reheat than it used to, has a rusty or metallic smell, or if you see moisture or pooling water around the unit. Most tank water heaters last 8–12 years — if yours is approaching that range, it's worth having it evaluated.",
        },
      },
    },
    {
      name: "Leak Detection & Repair",
      slug: "leak-detection-repair",
      description:
        "Pinpoint hidden leaks before they cause water damage — accurate detection without unnecessary demo work.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80&fm=webp",
      seoData: {
        intro: "Hidden leaks are silent and expensive. We use professional detection equipment to find leaks behind walls, under slabs, and in ceilings — without tearing your home apart looking for them.",
        seoBlocks: {
          what: "Leak detection uses electronic listening devices, thermal imaging, and pressure testing to locate water leaks that aren't visible from the surface. Once found, repairs are targeted to the exact problem area — minimizing the opening required and keeping repair costs down.",
          why: "Even a small hidden leak can cause mold growth, rot out framing, damage drywall, and saturate insulation in a matter of weeks. Water damage repairs regularly cost 5–10x more than the plumbing repair itself. Finding the leak early is almost always the cheaper path.",
          when: "Signs of a hidden leak include unexplained increases in your water bill, the sound of running water when everything is off, wet spots or stains on walls or ceilings, warm spots on the floor (possible slab leak), or a meter that keeps moving when all fixtures are closed.",
        },
      },
    },
    {
      name: "Emergency Plumbing",
      slug: "emergency-plumbing",
      description:
        "24/7 emergency plumbing for burst pipes, sewage backups, gas leaks, and flooding — we pick up the phone.",
      image: "https://images.unsplash.com/photo-1676210134188-4c05dd172f89?w=800&q=80&fm=webp",
      seoData: {
        intro: "Plumbing emergencies don't wait for business hours. Burst pipes, sewage backing up into your home, or a gas smell — these need a licensed plumber immediately. We answer 24/7 and dispatch fast.",
        seoBlocks: {
          what: "Emergency plumbing service covers any situation that poses an immediate risk to your home or family — burst or frozen pipes, sewage backup, major leaks, gas line issues, and flooding. Our team carries a full inventory of parts to handle most emergencies in a single visit.",
          why: "Water damage compounds fast. A burst pipe can dump hundreds of gallons per hour into your home. Sewage backup creates immediate health hazards. Calling a plumber at 2am is expensive — but it's a fraction of the water damage, mold remediation, and structural repairs that follow if you wait.",
          when: "Call us immediately for: visible flooding or active pipe burst, sewage backing up into tubs or toilets, smell of gas inside the home (also call your gas company), no water to the house, or a water main break on your property.",
        },
      },
    },
    {
      name: "Repiping",
      slug: "repiping",
      description:
        "Whole-home and partial repiping in copper or PEX — the permanent fix for aging, corroded, or failing pipe systems.",
      image: "https://images.unsplash.com/photo-1676210133055-eab6ef033ce3?w=800&q=80&fm=webp",
      seoData: {
        intro: "If your home has galvanized steel pipes, polybutylene, or copper that's corroding, repiping is the one repair that actually solves the problem instead of patching it. We repipe homes with minimal disruption and restore reliable water pressure and water quality.",
        seoBlocks: {
          what: "Repiping replaces old or failing water supply lines throughout a home with modern copper or flexible PEX tubing. A whole-home repipe typically takes two to three days, involves minimal drywall openings, and results in a complete, warrantied pipe system with no legacy material left behind.",
          why: "Galvanized pipes corrode from the inside out, reducing water pressure, contaminating water with rust, and leaking without warning. Polybutylene (common in homes built 1978–1995) is prone to chemical degradation and sudden failure. Patching these systems is a temporary fix — at some point, every section of old pipe becomes a liability.",
          when: "Consider repiping if your home has galvanized or polybutylene pipes, if you're experiencing low pressure throughout the house, if your water has a rust color or metallic taste, or if you've had multiple leaks in different locations within a few years.",
        },
      },
    },
    {
      name: "Fixture Installation",
      slug: "fixture-installation",
      description:
        "Professional installation of faucets, toilets, sinks, garbage disposals, and shut-off valves — done right the first time.",
      image: "https://images.unsplash.com/photo-1629079447777-1e605162dc8d?w=800&q=80&fm=webp",
      seoData: {
        intro: "A dripping faucet, a running toilet, or a garbage disposal that won't turn off are small problems that waste water and money every day. We install and replace fixtures correctly — no leaks, no callbacks.",
        seoBlocks: {
          what: "Fixture installation covers the replacement or installation of any plumbing fixture in your home — kitchen and bathroom faucets, toilets, sinks, showerheads, garbage disposals, ice maker lines, and shut-off valves. We supply fixtures or install customer-supplied units.",
          why: "A dripping faucet wastes up to 3,000 gallons of water per year. A running toilet can waste 200 gallons per day. Properly installed fixtures eliminate waste, operate reliably, and come with manufacturer warranties that require professional installation to remain valid.",
          when: "Call us to install a new fixture you've purchased, to replace a leaking or broken fixture, to upgrade an outdated unit, or to handle any supply line or shut-off valve that's corroded, stiff, or weeping.",
        },
      },
    },
    {
      name: "Sewer Line Services",
      slug: "sewer-line-services",
      description:
        "Camera inspection, hydro-jetting, repair, and replacement for main sewer lines — before the backup happens.",
      image: "https://images.unsplash.com/photo-1676210134188-4c05dd172f89?w=800&q=80&fm=webp",
      seoData: {
        intro: "Your main sewer line is the one pipe that, if it fails, takes every drain in your home with it. We inspect, clean, repair, and replace sewer lines — catching problems before they turn into a sewage emergency.",
        seoBlocks: {
          what: "Sewer line services include camera inspection to diagnose the condition of your main line, hydro-jetting to clear root intrusion and grease buildup, spot repairs for isolated damage, and full sewer line replacement using trenchless methods where possible to minimize yard disruption.",
          why: "Tree root intrusion, ground movement, and pipe degradation cause sewer lines to crack, sag, or partially collapse over time. The first sign is often a sewage backup inside the home — by which point you have an emergency rather than a maintenance issue. Camera inspection lets us catch problems years before they fail.",
          when: "Schedule a sewer line inspection if multiple drains are slow, if you've had recurring drain backups, if you notice sewage odors in the yard, if your home is more than 30 years old and the line has never been inspected, or if you're buying a home and want peace of mind before closing.",
        },
      },
    },
  ],

  // ── Process Steps ──────────────────────────────────────────────
  processSteps: [
    {
      title: "Call or Request a Quote",
      description:
        "Call us or fill out the form. We'll ask a few quick questions and get you scheduled — same day in most cases.",
    },
    {
      title: "We Diagnose & Price It",
      description:
        "Our plumber inspects the problem and gives you a flat-rate price upfront. No work starts until you approve it.",
    },
    {
      title: "Fixed Right, Cleaned Up",
      description:
        "We complete the job, test everything, clean up our mess, and back the work with our guarantee.",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────────
  faq: [
    {
      question: "Do you charge a service call fee?",
      answer:
        "No. We provide free on-site estimates. You pay for the work, not for us to show up and give you a number.",
    },
    {
      question: "How quickly can you get to me?",
      answer:
        "For standard service calls, we're typically available same day or next morning. For emergencies — burst pipes, sewage backup, no water — we dispatch immediately, 24 hours a day.",
    },
    {
      question: "Are you licensed and insured in Oklahoma?",
      answer:
        "Yes. We are fully licensed with the Oklahoma Construction Industries Board, bonded, and carry full general liability and workers' compensation insurance on every job.",
    },
    {
      question: "Do you offer flat-rate pricing?",
      answer:
        "Yes. We quote flat-rate prices before any work begins. You'll never get an hourly bill with mystery hours — you know exactly what it costs before we start.",
    },
    {
      question: "Can you handle both repairs and full replacements?",
      answer:
        "Absolutely. We handle everything from a dripping faucet to a full home repipe or sewer line replacement. If a repair makes more sense than a replacement, we'll tell you honestly.",
    },
  ],

  // ── Operating Hours ────────────────────────────────────────────
  operatingHours: [
    { day: "Mon–Fri", hours: "7AM–6PM" },
    { day: "Saturday", hours: "8AM–5PM" },
    { day: "Sunday", hours: "Emergency only" },
  ],

  // ── Reviews & Ratings ──────────────────────────────────────────
  averageRating: 5.0,
  totalReviews: 63,

  reviews: [
    {
      author: "Kevin M.",
      rating: 5,
      time: "1 week ago",
      text: "Called at 8am with no hot water. They had a plumber here by noon, diagnosed a bad heating element, fixed it on the spot. Price was fair and exactly what they quoted. Couldn't ask for more.",
    },
    {
      author: "Teresa L.",
      rating: 5,
      time: "3 weeks ago",
      text: "Had a mystery leak driving my water bill up. They found it in the slab with no guesswork, repaired it clean, and the bill dropped the next month. Professional and honest.",
    },
    {
      author: "Marcus B.",
      rating: 5,
      time: "2 weeks ago",
      text: "Main drain backed up on a Saturday. They came out same day, cleared it, and ran a camera to show me exactly what caused it. Great service, no upcharge for the weekend call.",
    },
  ],

  featuredReviews: [
    {
      name: "Angela P.",
      location: "Springfield",
      rating: 5,
      text: "These guys replaced all the galvanized pipes in my 1960s house in two days. Clean work, minimal drywall, and my water pressure is completely different now. Should have done this years ago.",
    },
    {
      name: "Robert D.",
      location: "Broken Arrow, OK",
      rating: 5,
      text: "Burst pipe on a Sunday morning. They picked up on the first call and had someone here within the hour. Stopped the damage, made the repair, didn't try to upsell me on anything. Exactly what you want in an emergency.",
    },
    {
      name: "Janet K.",
      location: "Owasso, OK",
      rating: 5,
      text: "Got three estimates on a water heater replacement. These guys were honest about what I needed vs. what would be nice to have, came in at a fair price, and installed it the same day. That's how it should work.",
    },
  ],

  // ── Gallery ────────────────────────────────────────────────────
  galleryPreview: [
    { src: "https://images.unsplash.com/photo-1676210133055-eab6ef033ce3?w=600&q=80&fm=webp", alt: "Plumber repairing pipe under sink" },
    { src: "https://images.unsplash.com/photo-1676210134190-3f2c0d5cf58d?w=600&q=80&fm=webp", alt: "Water heater installation" },
    { src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&q=80&fm=webp", alt: "Modern bathroom plumbing" },
    { src: "https://images.unsplash.com/photo-1676210134188-4c05dd172f89?w=600&q=80&fm=webp", alt: "Pipe repair in wall" },
    { src: "https://images.unsplash.com/photo-1629079447777-1e605162dc8d?w=600&q=80&fm=webp", alt: "Bathroom sink and fixture" },
    { src: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=600&q=80&fm=webp", alt: "Bathroom renovation completed" },
  ],

  galleryProjects: [
    {
      title: "Whole-Home Repipe",
      category: "Repiping",
      images: [
        "https://images.unsplash.com/photo-1676210133055-eab6ef033ce3?w=800&q=80&fm=webp",
        "https://images.unsplash.com/photo-1676210134188-4c05dd172f89?w=800&q=80&fm=webp",
      ],
    },
    {
      title: "Emergency Pipe Burst",
      category: "Emergency",
      images: [
        "https://images.unsplash.com/photo-1676210134188-4c05dd172f89?w=800&q=80&fm=webp",
      ],
    },
    {
      title: "Water Heater Replacement",
      category: "Water Heater",
      images: [
        "https://images.unsplash.com/photo-1676210134190-3f2c0d5cf58d?w=800&q=80&fm=webp",
      ],
    },
    {
      title: "Sewer Camera Inspection",
      category: "Sewer",
      images: [
        "https://images.unsplash.com/photo-1676210134188-4c05dd172f89?w=800&q=80&fm=webp",
      ],
    },
    {
      title: "Bathroom Fixture Upgrade",
      category: "Fixtures",
      images: [
        "https://images.unsplash.com/photo-1629079447777-1e605162dc8d?w=800&q=80&fm=webp",
        "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?w=800&q=80&fm=webp",
      ],
    },
    {
      title: "Drain Cleaning Service",
      category: "Drain",
      images: [
        "https://images.unsplash.com/photo-1676210133055-eab6ef033ce3?w=800&q=80&fm=webp",
      ],
    },
  ],

  // ── Blog Posts ─────────────────────────────────────────────────
  blogPosts: [
    {
      slug: "signs-you-need-to-repipe",
      title: "5 Signs It's Time to Repipe Your Home",
      excerpt:
        "Galvanized pipes corrode from the inside out. By the time they start failing, the damage is already done. Here's how to know if your home's plumbing is past its prime — and what to do about it.",
      date: "May 10, 2025",
      category: "Tips & Advice",
      readTime: "5 min read",
      content:
        "Most homeowners don't think about their pipes until something goes wrong. But unlike a leaking faucet or a running toilet, aging pipes fail progressively — and by the time they give you an obvious warning, you may already have water damage you can't see.\n\nThe first sign to watch for is low water pressure throughout the house. A single fixture with weak flow usually points to a local issue — a clogged aerator, a failing valve. But if every faucet in your home has noticeably weaker pressure than it used to, the inside of your pipes has probably corroded or scaled to the point where water can barely get through. This is the hallmark of galvanized steel pipe at the end of its life.\n\nThe second sign is rust-colored or metallic-tasting water. Galvanized pipes corrode from the inside out. That orange tint in your water — especially after the tap hasn't been run for a while — is iron oxide flaking off the interior walls of your pipes. You're drinking the pipe. Beyond the obvious health concern, the corrosion that causes discoloration is also causing pinhole leaks and wall thinning throughout the system.\n\nThird: multiple leaks in different locations within a short period. One pipe leak is a repair. Two or three in different parts of the house within a couple of years is a pattern — it means the whole system is failing at roughly the same rate. Patching individual leaks at this point is like patching individual holes in a sinking boat.\n\nFourth: your home was built before 1970 and has never been repiped. Galvanized steel pipes were standard in homes built through the late 1960s. These pipes have a lifespan of roughly 40–70 years under normal conditions — which means most of them are at or well past end-of-life. If you bought an older home and don't know the pipe history, a plumber can tell you within minutes what material you have and what condition it's in.\n\nFifth: your home has polybutylene pipe. If your home was built between 1978 and 1995, there's a meaningful chance it was plumbed with polybutylene — a gray plastic pipe that was installed in millions of homes before it was discovered to degrade when exposed to chlorine and other oxidants in municipal water. Polybutylene doesn't give you much warning before it fails. If you have it, replacing it is a matter of when, not if.\n\nA whole-home repipe sounds like a major project, but in most homes it's a two-to-three day job. The result is a complete, warranted plumbing system with no legacy material left behind — and the peace of mind that comes from knowing the pipes in your walls are not going to fail on a Sunday morning.",
    },
    {
      slug: "repair-vs-replace-water-heater",
      title: "Water Heater Repair vs. Replacement: How to Decide",
      excerpt:
        "Your water heater stopped working. Now what? Here's a straightforward guide to figuring out whether a repair makes sense — or whether it's time to replace the unit entirely.",
      date: "April 8, 2025",
      category: "Tips & Advice",
      readTime: "4 min read",
      content:
        "When a water heater stops working, homeowners face the same decision every time: fix it or replace it. The answer depends on three things — the age of the unit, the nature of the problem, and the cost of repair relative to replacement.\n\nStart with age. Tank water heaters are designed to last 8–12 years. If your unit is under 8 years old and has a repairable problem — a failed heating element, a bad thermostat, a malfunctioning thermocouple — repair almost always makes financial sense. The unit has years of useful life left and the cost of a repair is a fraction of replacement.\n\nIf the unit is between 8 and 12 years old, the calculation gets more nuanced. You need to weigh the repair cost against what you'd pay for a new unit, factoring in that a repaired old water heater may fail again in another year or two. A repair that costs 40-50% of a new unit's price on a 10-year-old heater is usually a sign that replacement is the better long-term value.\n\nIf the unit is 12+ years old, replacement is almost always the right answer — regardless of what the specific problem is. Repairing a unit that's at the end of its design life just delays the inevitable, and you'll spend the repair money anyway when it fails again.\n\nBeyond age, certain problems always mean replacement. A leaking tank is the most important one — once a tank is leaking, it cannot be repaired. Water heater tanks corrode from the inside, and a leak means the tank wall has failed. Sediment buildup severe enough to reduce capacity or cause the unit to rumble and bang is another — this can sometimes be flushed, but on older units it often indicates corrosion that will cause problems regardless.\n\nIf you're on the fence, consider this: a new 50-gallon water heater typically runs $600–$900 installed. Modern units are substantially more energy-efficient than units made 10+ years ago, which means meaningful savings on your gas or electric bill every month. On a 12-year-old unit that needs a $300 repair, the math often favors replacement when you factor in efficiency gains and the likelihood of the next repair being just around the corner.\n\nOne more variable worth knowing: if your current unit is a tank-style heater and you're open to alternatives, this is a natural point to evaluate a tankless system. Tankless heaters heat water on demand rather than maintaining a tank of hot water around the clock, which reduces energy consumption by 20–30% on average. They cost more upfront but last significantly longer — 20+ years with proper maintenance.",
    },
    {
      slug: "what-to-do-burst-pipe",
      title: "What to Do When You Have a Burst Pipe",
      excerpt:
        "A burst pipe can dump hundreds of gallons into your home in minutes. The first five minutes after it happens determine how much damage you're dealing with. Here's exactly what to do.",
      date: "March 5, 2025",
      category: "Emergency",
      readTime: "3 min read",
      content:
        "A burst pipe is one of the fastest ways a home sustains serious water damage. Acting quickly in the first few minutes limits the damage significantly — here's the sequence.\n\nThe first thing you do is turn off the main water supply. Don't look for the leak, don't try to figure out what happened — go straight to the main shutoff and close it. In most homes it's near the water meter, either outside near the street or inside near the water heater. If you don't know where yours is, find out now, before you need it in an emergency. Every second of water flow after a pipe bursts is more water in your walls, floor, or ceiling.\n\nOnce the water is off, turn on a cold faucet somewhere in the house to drain the pressure out of the lines. This stops water from continuing to seep out of the burst section from residual pressure in the pipes.\n\nIf the burst is near any electrical outlets, panels, or fixtures, turn off the circuit breaker for that area. Water and electricity are a serious hazard — don't skip this step.\n\nNow document everything before you touch it. Photos and video of the damage in its original state are what your insurance adjuster will rely on. Move things out of the water's path if you can do so safely, but get the documentation first.\n\nThen call a plumber. Most burst pipes are repairable same-day — the pipe section is cut out and replaced. The plumbing repair itself is usually not the expensive part. The expensive part is the water damage remediation that follows if the water sat for hours.\n\nA few things that increase your risk of burst pipes worth knowing: pipes in unheated exterior walls or uninsulated crawl spaces are vulnerable to freezing in cold weather — frozen water expands, and the pipe splits at the weakest point. If temperatures are dropping below freezing and you have pipes in exposed areas, let faucets drip slightly to keep water moving, and open cabinet doors under sinks on exterior walls to let warm air reach the pipes. Prevention is a lot cheaper than the repair.",
    },
  ],

  // ── Other ──────────────────────────────────────────────────────
  discountPercent: 10,
} as const;
