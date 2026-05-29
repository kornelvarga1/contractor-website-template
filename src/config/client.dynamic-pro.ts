/**
 * DYNAMIC PRO SERVICES — Oklahoma City, OK
 *
 * When prospect confirms: swap in real testimonials, license number,
 * years in business, and any photos they supply.
 */

export const client = {
  // ── Company ────────────────────────────────────────────────────
  companyName: "Dynamic Pro Services",
  companyNameFull: "Dynamic Pro Services",
  logoMain: "Dynamic Pro Services",
  logoSub: "",
  logoIcon: "house" as const,
  tradeNoun: "remodeling",
  tradeAdjective: "remodeling",
  schemaType: "GeneralContractor",
  tagline: "Licensed & Insured in Oklahoma",
  rocLicense: "",
  yearsExperience: 0,

  // ── Contact ────────────────────────────────────────────────────
  phone: "(405) 887-8031",
  phoneTel: "4058878031",
  email: "",
  websiteUrl: "",
  googleReviewsUrl:
    "https://www.google.com/maps/search/Dynamic+Pro+Services/@35.3813,-97.5714,17z",

  // ── Location ───────────────────────────────────────────────────
  address: {
    street: "3112 SW 104th Terrace",
    city: "Oklahoma City",
    state: "OK",
    zip: "73159",
  },
  geo: { latitude: 35.3813, longitude: -97.5714 },
  areas: [
    "Oklahoma City",
    "Mustang",
    "Yukon",
    "Moore",
    "Midwest City",
    "Edmond",
    "Norman",
  ],
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3267.0!2d-97.5714!3d35.3813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDynamic%20Pro%20Services!5e0!3m2!1sen!2sus!4v1748000000000",

  // ── Theme ──────────────────────────────────────────────────────
  accentHsl: "8 62% 40%",

  // ── Images ─────────────────────────────────────────────────────
  images: {
    hero: "/images/hero.jpg",
    about: "/images/about.jpg",
    faq: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80&fm=webp",
    whyChooseUs: "/images/hero.jpg",
  },

  // ── Home Page Copy ─────────────────────────────────────────────
  heroHeadline: "Oklahoma City's Home Remodeling Pros",
  heroSubheadline: "Kitchen, bathroom, and whole-home renovations done right",
  heroCtaText: "Get a Free Quote",
  aboutText:
    "Dynamic Pro Services is a locally owned remodeling company serving Oklahoma City and surrounding communities. Kitchens, bathrooms, flooring, tile — our crew does the work, not some sub you've never met. One call, one team, one point of contact from the estimate to the final walkthrough.",

  // ── Why Choose Us Section ──────────────────────────────────────
  whyChooseUs: {
    heading: "Why OKC Homeowners Choose Dynamic Pro",
    subtitle:
      "We cut out the guesswork, protect your home, and finish what we start — on time and on budget.",
    imageAlt: "Remodeling contractor completing kitchen renovation in Oklahoma City",
    benefits: [
      {
        title: "Free In-Home Estimates",
        desc: "We come to you, see the space, and give you a real number — no guessing from photos or vague ballparks over the phone.",
      },
      {
        title: "No Subcontractors",
        desc: "Our crew does the work start to finish. You know who's in your home and you have one point of contact throughout.",
      },
      {
        title: "Detailed Written Quotes",
        desc: "Every job gets a written scope and price before we touch anything. No surprise charges when the project is done.",
      },
      {
        title: "Clean Jobsite Every Day",
        desc: "We treat your home like it's ours. Tools and materials are kept organized and the work area is cleaned at the end of every day.",
      },
    ],
  },

  // ── Services ───────────────────────────────────────────────────
  services: [
    {
      name: "Kitchen Remodeling",
      slug: "kitchen-remodeling",
      description:
        "Full kitchen renovations — cabinets, countertops, layout changes, and everything in between — that hold up for decades.",
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80&fm=webp",
      seoData: {
        intro: "The kitchen is the most-used room in your home and the highest-return renovation you can make. We handle full kitchen remodels — from demo to final trim — with our own crew, transparent pricing, and a finished product built to last.",
        seoBlocks: {
          what: "Kitchen remodeling covers the full range of updates your kitchen may need: cabinet replacement or refacing, countertop installation in granite, quartz, or butcher block, tile backsplash, flooring, lighting, and layout modifications to improve flow and storage. We work with your existing footprint or reconfigure the space entirely.",
          why: "An outdated or dysfunctional kitchen affects daily life in a way few other rooms do. A well-executed kitchen remodel increases the usable value of your home, recovers 60–80% of its cost at resale, and simply makes the space enjoyable to be in. Poor-quality work or cheap materials can mean cabinet failures, countertop cracking, and water damage in short order — quality execution matters.",
          when: "Consider a kitchen remodel when your cabinets are sagging, warped, or functionally obsolete; when your countertops are damaged or outdated; when your layout makes cooking and entertaining difficult; or when the kitchen looks significantly older than the rest of your home.",
        },
      },
    },
    {
      name: "Bathroom Remodeling",
      slug: "bathroom-remodeling",
      description:
        "Bathroom renovations from a simple refresh to a full gut — tile, fixtures, vanities, showers, and more.",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80&fm=webp",
      seoData: {
        intro: "A bathroom remodel done right transforms a space you use every day. We handle complete gut-and-rebuild projects and targeted updates alike — always with our own crew and always to a quality that lasts.",
        seoBlocks: {
          what: "Bathroom remodeling includes tile and flooring replacement, shower and tub enclosure work, vanity and sink installation, toilet replacement, lighting and exhaust fan upgrades, and complete structural overhauls. We handle permits, waterproofing, and finish work so the project is truly turn-key.",
          why: "Bathrooms are high-moisture environments where poor workmanship leads directly to mold, rot, and structural damage — often hidden behind walls for years before becoming obvious. Properly waterproofed shower pans, correctly sloped tile, and sealed penetrations are the difference between a remodel that looks good for decades and one that causes expensive water damage within a few years.",
          when: "Renovate when grout is discolored or failing, when caulk around the tub or shower is cracked or peeling, when the vanity is damaged or outdated, when tile is cracked or lifting, or when the bathroom layout doesn't work for your household.",
        },
      },
    },
    {
      name: "Flooring Installation",
      slug: "flooring-installation",
      description:
        "Hardwood, LVP, tile, and laminate flooring installed flat, level, and built to hold up to daily use.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80&fm=webp",
      seoData: {
        intro: "New flooring changes the look and feel of a home instantly. We install hardwood, luxury vinyl plank, tile, and laminate — correctly prepared subfloor, proper transitions, and a level finish that holds up for years.",
        seoBlocks: {
          what: "Flooring installation begins with subfloor assessment and prep — leveling, patching, or replacing sections that would compromise the finished floor. We install solid and engineered hardwood, luxury vinyl plank and tile, ceramic and porcelain tile, and laminate. We handle transitions, thresholds, and base molding as part of every job.",
          why: "The most common flooring failures come from skipped steps: uneven subfloors that cause LVP to click and squeak, tile installed without proper substrate that leads to cracking, or hardwood installed without acclimation that cups and warps. Professional installation means these steps aren't skipped.",
          when: "Replace flooring when existing floors are stained, damaged, or worn beyond cleaning; when you're doing other remodeling work (the best time to update floors is before cabinetry goes in); when you're preparing to sell; or when you're simply ready for a fresh look.",
        },
      },
    },
    {
      name: "Basement Finishing",
      slug: "basement-finishing",
      description:
        "Turn an unfinished basement into livable square footage — framing, drywall, flooring, and everything required.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&fm=webp",
      seoData: {
        intro: "An unfinished basement is some of the most underutilized space in any home. We handle full basement finishing from framing through final paint — turning raw concrete into a functional, comfortable room.",
        seoBlocks: {
          what: "Basement finishing includes framing and insulation, drywall installation and finish, electrical rough-in coordination, flooring, ceiling options (drywall or drop ceiling), egress window installation if required, and all trim and paint. We pull permits and work to code.",
          why: "A finished basement adds significant livable square footage to your home at a fraction of the cost of an addition. Done correctly with proper moisture management and insulation, it's a comfortable, energy-efficient space. Done incorrectly — without addressing moisture or proper vapor barriers — it becomes a mold and humidity problem.",
          when: "Finish your basement when you need more living space, when you want a dedicated home office, guest room, or recreation room, or when you're preparing to sell and want to increase finished square footage.",
        },
      },
    },
    {
      name: "Tile & Backsplash",
      slug: "tile-backsplash",
      description:
        "Custom tile work for kitchens, bathrooms, showers, entryways, and accent walls — set flat and grouted clean.",
      image: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=800&q=80&fm=webp",
      seoData: {
        intro: "Tile work is one of the most visible elements in any renovation. Our crew sets tile flat, keeps joints consistent, and groutes clean — the kind of finish that still looks sharp years down the road.",
        seoBlocks: {
          what: "We install ceramic, porcelain, natural stone, and glass tile in kitchens, bathrooms, showers, floors, fireplaces, and accent walls. Work includes substrate prep, tile layout and cutting, mortar application, grouting, and sealing where required.",
          why: "Poorly set tile — thin lippage, uneven grout lines, cracked tiles above a weak substrate — is one of the most common visible signs of low-quality work. Properly set tile on a solid substrate lasts indefinitely. Shortcuts in the prep process cause failures within a few years.",
          when: "New tile makes sense when you're remodeling a kitchen or bathroom, when existing tile is cracked, stained, or outdated, when you want to add a backsplash to a kitchen that doesn't have one, or as part of a flooring update in an entryway or mudroom.",
        },
      },
    },
    {
      name: "Interior Painting",
      slug: "interior-painting",
      description:
        "Interior painting done clean and precise — proper prep, straight lines, and no roller marks left on your walls.",
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80&fm=webp",
      seoData: {
        intro: "Fresh paint is the fastest way to transform a space. We paint interiors with proper surface prep, clean edges, and quality material — the kind of job that doesn't need redoing in two years.",
        seoBlocks: {
          what: "Interior painting includes surface prep (patching, sanding, priming), ceiling and wall painting, trim and door work, and cleanup. We use quality paints with good coverage and washability. We protect floors and furniture and leave the space clean.",
          why: "Paint quality is mostly about what you don't see: filling nail holes, sanding glossy surfaces, priming new drywall and bare wood, cutting clean lines at trim and ceiling. Skipping prep means the finish coat shows every imperfection and the paint starts peeling and chipping in high-traffic areas within a year.",
          when: "Paint when you're moving in or out, after other remodeling work, when walls are showing wear or damage, or when you want to update a space's look quickly and cost-effectively.",
        },
      },
    },
  ],

  // ── Process Steps ──────────────────────────────────────────────
  processSteps: [
    {
      title: "Free In-Home Estimate",
      description:
        "We visit your home, walk the space, and understand exactly what you want. Then we give you a detailed written quote — no vague ranges, no pressure.",
    },
    {
      title: "We Plan & Schedule",
      description:
        "Once you approve, we lock in your start date, pull any required permits, and order materials. You know the timeline before we begin.",
    },
    {
      title: "We Build, You Enjoy",
      description:
        "Our crew handles the full project — clean, professional, and accountable. We walk through the finished work with you before we call it done.",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────────
  faq: [
    {
      question: "How long does a kitchen or bathroom remodel take?",
      answer:
        "A typical bathroom remodel takes 1–3 weeks depending on scope. A kitchen remodel usually runs 3–6 weeks. We give you a specific timeline in writing before the project starts — and we stick to it.",
    },
    {
      question: "Do I need to move out during the remodel?",
      answer:
        "For most kitchen and bathroom work, no. We contain the work area, clean up at the end of every day, and keep disruption to the rest of the house minimal. We'll let you know upfront if any phase requires temporary relocation.",
    },
    {
      question: "Are you licensed and insured in Oklahoma?",
      answer:
        "Yes. Dynamic Pro Services is fully licensed and insured in the state of Oklahoma. We carry general liability and workers' comp on every job.",
    },
    {
      question: "Do you handle permits?",
      answer:
        "Yes. We pull required permits and schedule inspections as part of the project. You don't have to navigate that process yourself.",
    },
    {
      question: "Can I supply my own materials or fixtures?",
      answer:
        "Yes. If you've already purchased tile, fixtures, or appliances, we'll install them. We can also source materials for you — your choice.",
    },
  ],

  // ── Operating Hours ────────────────────────────────────────────
  operatingHours: [
    { day: "Mon–Sat", hours: "8AM–6:30PM" },
    { day: "Sunday", hours: "Closed" },
  ],

  // ── Reviews & Ratings ──────────────────────────────────────────
  averageRating: 5.0,
  totalReviews: 2,

  reviews: [
    {
      author: "Jennifer M.",
      rating: 5,
      time: "1 month ago",
      text: "They redid our master bathroom from top to bottom. Tile, shower enclosure, vanity — the whole thing. Showed up every day when they said they would and finished on the timeline they quoted. Very happy with how it turned out.",
    },
    {
      author: "Carlos T.",
      rating: 5,
      time: "3 weeks ago",
      text: "Had them redo our kitchen backsplash and refinish the floors in the main living area. Clean work, easy to communicate with, and the price matched the quote exactly. Would use again.",
    },
    {
      author: "Angela W.",
      rating: 5,
      time: "2 months ago",
      text: "Hired Dynamic Pro for a full kitchen remodel. They gutted it and rebuilt it in about four weeks. Professional crew, kept the rest of the house livable throughout the job, and the finished kitchen looks incredible.",
    },
  ],

  featuredReviews: [
    {
      name: "Jennifer M.",
      location: "Oklahoma City, OK",
      rating: 5,
      text: "They redid our master bathroom from top to bottom. Tile, shower enclosure, vanity — the whole thing. Showed up every day when they said they would and finished on the timeline they quoted. Very happy with how it turned out.",
    },
    {
      name: "Carlos T.",
      location: "Mustang, OK",
      rating: 5,
      text: "Had them redo our kitchen backsplash and refinish the floors in the main living area. Clean work, easy to communicate with, and the price matched the quote exactly. Would use again.",
    },
    {
      name: "Angela W.",
      location: "Yukon, OK",
      rating: 5,
      text: "Hired Dynamic Pro for a full kitchen remodel. They gutted it and rebuilt it in about four weeks. Professional crew, kept the rest of the house livable throughout the job, and the finished kitchen looks incredible.",
    },
  ],

  // ── Gallery ────────────────────────────────────────────────────
  galleryPreview: [
    { src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&q=80&fm=webp", alt: "Kitchen remodel completed" },
    { src: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&q=80&fm=webp", alt: "Bathroom renovation" },
    { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80&fm=webp", alt: "Hardwood floor installation" },
    { src: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=600&q=80&fm=webp", alt: "Tile backsplash work" },
    { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fm=webp", alt: "Finished basement space" },
    { src: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80&fm=webp", alt: "Modern kitchen renovation" },
  ],

  galleryProjects: [
    {
      title: "Full Kitchen Remodel",
      category: "Kitchen",
      images: [
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80&fm=webp",
        "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80&fm=webp",
      ],
    },
    {
      title: "Master Bathroom Renovation",
      category: "Bathroom",
      images: [
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80&fm=webp",
      ],
    },
    {
      title: "Hardwood Floor Installation",
      category: "Flooring",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80&fm=webp",
      ],
    },
    {
      title: "Kitchen Tile Backsplash",
      category: "Tile",
      images: [
        "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?w=800&q=80&fm=webp",
      ],
    },
    {
      title: "Basement Finishing",
      category: "Basement",
      images: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&fm=webp",
      ],
    },
    {
      title: "Bathroom Tile & Vanity",
      category: "Bathroom",
      images: [
        "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80&fm=webp",
      ],
    },
  ],

  // ── Blog Posts ─────────────────────────────────────────────────
  blogPosts: [
    {
      slug: "kitchen-remodel-cost-guide",
      title: "What Does a Kitchen Remodel Actually Cost in OKC?",
      excerpt:
        "Ballparks are everywhere. Here's a realistic breakdown of what kitchen remodeling actually costs in the Oklahoma City area — and what drives the price up or down.",
      date: "May 12, 2025",
      category: "Tips & Advice",
      readTime: "5 min read",
      content:
        "Kitchen remodel pricing varies more than almost any other home improvement project — and a lot of that variance is driven by decisions you make before a contractor ever shows up.\n\nFor a mid-range kitchen remodel in the OKC area, expect to budget $15,000–$40,000. That range covers cabinet replacement with semi-custom boxes, laminate or quartz countertops, new tile backsplash, updated fixtures, and standard flooring. High-end renovations with custom cabinetry, stone countertops throughout, and major layout changes can run $60,000 or more.\n\nThe single biggest cost driver is cabinets. Stock cabinets from big-box stores cost a fraction of semi-custom or custom built cabinetry — but they have fewer size options, lower quality hardware, and are harder to configure in non-standard layouts. In most kitchens, cabinets represent 30–40% of the total project cost.\n\nCountertops are the second biggest variable. Laminate runs $20–$50 per square foot installed. Quartz and granite run $60–$130. Marble and exotic stones can go much higher. For most kitchens, quartz hits the sweet spot of durability and appearance.\n\nLabor typically runs 20–35% of a kitchen project, depending on complexity. Layout changes — moving walls, relocating plumbing or electrical — add significant labor cost over a straight replacement-in-place remodel.\n\nThe way to get an accurate number is to have a contractor see your kitchen in person and walk through exactly what you want. Phone quotes based on vague descriptions are guesses, not numbers you can plan around.",
    },
    {
      slug: "bathroom-remodel-timeline",
      title: "How Long Does a Bathroom Remodel Take?",
      excerpt:
        "One of the most common questions before starting a bathroom renovation. Here's a realistic look at what drives the timeline — and what causes projects to run long.",
      date: "April 15, 2025",
      category: "Tips & Advice",
      readTime: "4 min read",
      content:
        "The most common answer to 'how long will this take?' is 'it depends' — which isn't very helpful. Here's what actually drives bathroom remodel timelines.\n\nA cosmetic refresh — new vanity, toilet, light fixture, paint, maybe some new tile — typically takes 3–5 days of actual work. Most of that is sequential: you can't tile until the substrate is prepped, can't install the vanity until tile is done, can't do trim until paint is dry.\n\nA full bathroom gut-and-rebuild — demo to the studs, new shower pan, full tile, new everything — typically runs 1.5–3 weeks of working days.\n\nWhat causes projects to run longer than estimated? Material lead time is the most common culprit. If your tile is backordered or your custom vanity takes three weeks to arrive, the project waits. Good contractors order materials before the start date so they're on-site and ready.\n\nHidden conditions discovered during demo are the second most common cause. Water damage behind the shower, rotted subfloor under the toilet, or out-of-square framing all add time. Experienced contractors build a small buffer into their estimates for this reason.\n\nThe fastest way to keep a bathroom project on schedule is to make all your material selections before demo day. Decisions made mid-project — changing tile, upgrading fixtures — almost always extend the timeline.",
    },
    {
      slug: "lvp-vs-hardwood",
      title: "LVP vs. Hardwood Floors: Which Is Right for Your Home?",
      excerpt:
        "Luxury vinyl plank has come a long way. Here's an honest comparison of LVP and hardwood — what each handles well, where each falls short, and how to decide.",
      date: "March 10, 2025",
      category: "Tips & Advice",
      readTime: "4 min read",
      content:
        "The flooring question we hear most often is some version of: 'should I go LVP or hardwood?' The honest answer is that it depends on your situation — and both are good choices when installed correctly.\n\nHardwood's case is straightforward. Real wood floors are durable, can be refinished multiple times over decades, add measurable resale value, and have a look that LVP still hasn't quite matched. On the downside: solid hardwood doesn't belong below grade (basement) or in high-moisture areas (bathrooms, laundry rooms). It requires acclimation time before install. And it costs more — typically $8–$15 per square foot installed for solid hardwood vs. $4–$9 for LVP.\n\nLVP's case is also real. Modern LVP is far better than the cheap vinyl of 20 years ago. It handles moisture, which means it goes anywhere in the house. It's harder than most hardwood species (wear layer determines this). Installation is faster. And the price is lower.\n\nThe weaknesses of LVP: it cannot be refinished — when it's worn or damaged, it must be replaced. Cheap LVP with a thin wear layer (under 12 mil) won't last in high-traffic areas. And while it looks like wood, it's not — if resale value is the primary goal, hardwood is still the stronger call.\n\nOur general recommendation: hardwood in main living areas and bedrooms if budget allows; LVP in basements, kitchens, bathrooms, and anywhere with pets or small children. Both done right are good floors.",
    },
  ],

  // ── Other ──────────────────────────────────────────────────────
  discountPercent: 10,
} as const;
