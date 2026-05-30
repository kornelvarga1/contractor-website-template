/**
 * MAXSON'S TECHNICAL SERVICES — Tulsa, OK
 *
 * When prospect confirms: swap in real testimonials, license number,
 * years in business, and any photos they supply.
 */

export const client = {
  // ── Company ────────────────────────────────────────────────────
  companyName: "Maxson's Technical Services",
  companyNameFull: "Maxson's Technical Services",
  logoMain: "Maxson's Technical",
  logoSub: "Services",
  logoIcon: "house" as const,
  tradeNoun: "handyman",
  tradeAdjective: "handyman",
  schemaType: "HomeAndConstructionBusiness",
  tagline: "Licensed & Insured in Oklahoma",
  rocLicense: "",
  yearsExperience: 0,

  // ── Contact ────────────────────────────────────────────────────
  phone: "(918) 907-5603",
  phoneTel: "9189075603",
  email: "",
  websiteUrl: "",
  googleReviewsUrl:
    "https://www.google.com/maps/search/Maxson's+Technical+Services/@36.1541,-95.9186,17z",

  // ── Location ───────────────────────────────────────────────────
  address: {
    street: "6313 E Reading St",
    city: "Tulsa",
    state: "OK",
    zip: "74115",
  },
  geo: { latitude: 36.1541, longitude: -95.9186 },
  areas: [
    "Tulsa",
    "Broken Arrow",
    "Owasso",
    "Jenks",
    "Bixby",
    "Sand Springs",
    "Sapulpa",
  ],
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.0!2d-95.9186!3d36.1541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMaxson's%20Technical%20Services!5e0!3m2!1sen!2sus!4v1748000000000",

  // ── Theme ──────────────────────────────────────────────────────
  accentHsl: "8 62% 40%",

  // ── Images ─────────────────────────────────────────────────────
  images: {
    hero: "/images/maxsons-hero.jpg",
    about: "/images/maxsons-about.jpg",
    faq: "https://images.unsplash.com/photo-1734517648088-2990d38c258d?w=800&q=80&fm=webp",
    whyChooseUs: "/images/maxsons-hero.jpg",
  },

  // ── Home Page Copy ─────────────────────────────────────────────
  heroHeadline: "Tulsa's Trusted Handyman",
  heroSubheadline: "Repairs, installs, and home improvements done right — one call, one crew",
  heroCtaText: "Get a Free Quote",
  aboutText:
    "Maxson's Technical Services is a locally owned handyman operation serving Tulsa and the surrounding area. No job too small, no runaround — just one skilled technician who shows up, does the work, and leaves your home better than he found it. From drywall and fixtures to carpentry and general repairs, if it needs fixing, we handle it.",

  // ── Why Choose Us Section ──────────────────────────────────────
  whyChooseUs: {
    heading: "Why Tulsa Homeowners Call Maxson's",
    subtitle:
      "One point of contact, honest pricing, and work that doesn't need redoing a month later.",
    imageAlt: "Handyman completing home repair work in Tulsa, OK",
    benefits: [
      {
        title: "Free Estimates",
        desc: "We come look at the job before we give you a number. No guessing, no inflated ballparks — just a straight price for the actual work.",
      },
      {
        title: "One Technician, One Call",
        desc: "You deal with one person from the first call to the final walkthrough. No subcontractors, no strangers in your home you weren't told about.",
      },
      {
        title: "Honest, Upfront Pricing",
        desc: "We tell you the price before we start. What we quote is what you pay — no surprise line items when the job is done.",
      },
      {
        title: "Available When You Need It",
        desc: "We're available Monday through Thursday around the clock. If something breaks at an inconvenient time, we're reachable.",
      },
    ],
  },

  // ── Services ───────────────────────────────────────────────────
  services: [
    {
      name: "Drywall Repair",
      slug: "drywall-repair",
      description:
        "Holes, cracks, water-damaged sections — patched, textured to match, and ready for paint.",
      image: "https://images.unsplash.com/photo-1683115098516-9b8d5c643b5b?w=800&q=80&fm=webp",
      seoData: {
        intro: "Drywall damage is common and easy to ignore — until it isn't. We handle repairs from small nail holes to large sections, blended to match your existing texture so the repair disappears.",
        seoBlocks: {
          what: "Drywall repair covers everything from hairline cracks and nail pops to fist-sized holes and water-damaged sections. The process involves removing damaged material, backing the opening, applying joint compound in layers, feathering the patch into the surrounding surface, texturing to match, and priming for paint.",
          why: "A visible patch or obvious repair lowers the look of an otherwise nice room. The difference between a repair that disappears and one that sticks out is in the texture match and feathering of the compound. Rushing the layers or skipping texture matching produces a repair that's obvious in raking light.",
          when: "Fix drywall when holes are visible, when cracks are showing at corners or seams, after plumbing or electrical work that required wall access, or when preparing to repaint a room and the existing imperfections will be highlighted by fresh paint.",
        },
      },
    },
    {
      name: "Fixture Installation",
      slug: "fixture-installation",
      description:
        "Light fixtures, ceiling fans, faucets, toilets, and more — installed clean and working right the first time.",
      image: "https://images.unsplash.com/photo-1620348578890-740dd10e1fe5?w=800&q=80&fm=webp",
      seoData: {
        intro: "New fixtures update a space instantly but installation details matter — a ceiling fan with wobble, a faucet that drips, a toilet that runs. We install them correctly so they work the way they're supposed to.",
        seoBlocks: {
          what: "Fixture installation includes ceiling fans and light fixtures (replacing existing wiring, mounting securely), bathroom and kitchen faucets (supply line connections, shutoffs, drain assemblies), toilets (wax ring, supply line, seat), bathroom vanities, and shower fixtures. We handle both the removal of old units and full installation of new ones.",
          why: "Fixture installation looks straightforward but small errors cause ongoing problems: loose ceiling fan mounts that develop wobble and noise, faucet supply connections that weep at the fitting, toilet wax rings that fail and leak. Correct installation takes more care than the initial task suggests.",
          when: "Install new fixtures when existing ones are failing, outdated, or inefficient; when updating a bathroom or kitchen for resale; when moving into a new home and replacing builder-grade fixtures; or when a specific unit has failed.",
        },
      },
    },
    {
      name: "Interior Painting",
      slug: "interior-painting",
      description:
        "Clean, precise interior painting — proper prep, straight lines, no roller marks on your walls.",
      image: "https://images.unsplash.com/photo-1717281234297-3def5ae3eee1?w=800&q=80&fm=webp",
      seoData: {
        intro: "Fresh paint is the fastest way to transform a room. We paint interiors with proper surface prep, clean edges, and quality material — the kind of job that doesn't need redoing in two years.",
        seoBlocks: {
          what: "Interior painting includes surface prep (patching nail holes, sanding, priming), ceiling and wall painting, trim and door work, and cleanup. We protect floors and furniture and leave the space clean. We paint single rooms, full interiors, and touch-up work.",
          why: "Paint quality is mostly about what you don't see: filling nail holes, sanding glossy surfaces, priming new drywall and bare wood, cutting clean lines at trim and ceiling. Skipping prep means the finish coat shows every imperfection and the paint starts peeling in high-traffic areas within a year.",
          when: "Paint when moving in or out, after remodeling work, when walls show wear or damage, or when updating a space's look quickly and cost-effectively.",
        },
      },
    },
    {
      name: "Door & Window Repair",
      slug: "door-window-repair",
      description:
        "Sticky doors, broken locks, failed window hardware — adjusted, repaired, or replaced so they work properly.",
      image: "https://images.unsplash.com/photo-1734517648088-2990d38c258d?w=800&q=80&fm=webp",
      seoData: {
        intro: "Doors and windows that stick, don't seal, or won't lock properly are both an annoyance and a security issue. We diagnose the problem and fix it correctly — whether that's a simple adjustment or a hardware replacement.",
        seoBlocks: {
          what: "Door and window repair covers hinge adjustment and replacement, door plane correction (shaving a door that rubs or won't close flush), lock and deadbolt replacement, strike plate adjustment, weatherstripping replacement, window hardware repair and replacement, and sash balance replacement on double-hung windows.",
          why: "Doors that don't close properly waste energy, compromise security, and signal deferred maintenance to buyers during a home sale inspection. Most door and window problems are mechanical and inexpensive to correct — but they compound when ignored.",
          when: "Fix doors and windows when they stick or bind through season changes, when locks or latches feel loose or fail to engage cleanly, when drafts are noticeable around the frame, or when hardware is worn, broken, or outdated.",
        },
      },
    },
    {
      name: "Furniture Assembly",
      slug: "furniture-assembly",
      description:
        "Flat-pack and ready-to-assemble furniture put together correctly — IKEA, Wayfair, Amazon, all brands.",
      image: "https://images.unsplash.com/photo-1657322402497-c07dd7c44fdf?w=800&q=80&fm=webp",
      seoData: {
        intro: "Flat-pack furniture instructions are famously unclear and the process is time-consuming. We assemble furniture correctly and efficiently so you get a solid, properly built result without the frustration.",
        seoBlocks: {
          what: "We assemble all types of ready-to-assemble furniture: bedroom sets (beds, dressers, nightstands), living room furniture (TV stands, bookcases, sofas with frames), office furniture (desks, chairs, shelving), outdoor furniture, and exercise equipment. We work with IKEA, Wayfair, Amazon, and all other brands.",
          why: "Furniture assembled incorrectly — fasteners torqued too tight that strip the cam locks, pieces aligned wrong that stress the joints — fails earlier and looks worse. Professional assembly is faster and produces a sturdier result.",
          when: "Use our assembly service for new furniture deliveries, when moving to a new home, when setting up a home office, or when you simply don't want to spend your weekend on it.",
        },
      },
    },
    {
      name: "TV Mounting & Shelving",
      slug: "tv-mounting-shelving",
      description:
        "Wall-mounted TVs, floating shelves, and storage solutions installed level, secure, and stud-anchored.",
      image: "https://images.unsplash.com/photo-1633604712918-6ab1173d0ecd?w=800&q=80&fm=webp",
      seoData: {
        intro: "A TV mounted at the wrong height, on the wrong hardware, or into drywall without stud contact is a hazard. We mount TVs and shelving correctly — into studs, level, and at the right height for your space.",
        seoBlocks: {
          what: "TV mounting includes bracket selection and sourcing (if needed), stud location, mount installation, TV hang, cable management (surface or in-wall), and connection. Shelving work covers floating shelf installation, bracket mounting, and closet shelving systems.",
          why: "TVs and shelves mounted without proper stud contact or into inadequate anchors can pull out of the wall — a real safety risk for large displays and heavy shelves. Correct installation uses the right anchors for the wall type and always hits studs when possible.",
          when: "Mount your TV when moving into a new home, after purchasing a new display, when you want a cleaner look than a stand provides, or when a current mount is showing movement or feels insecure.",
        },
      },
    },
  ],

  // ── Process Steps ──────────────────────────────────────────────
  processSteps: [
    {
      title: "Free Estimate",
      description:
        "Call or text and we'll come look at the job. You get a straight price for the actual work — no guessing from a photo.",
    },
    {
      title: "We Schedule & Show Up",
      description:
        "We lock in a time that works for you and we show up for it. No three-hour windows, no last-minute cancellations.",
    },
    {
      title: "Job Done, Home Clean",
      description:
        "We do the work, clean up when we're finished, and you check it before we leave. That's it.",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────────
  faq: [
    {
      question: "What kinds of jobs do you take?",
      answer:
        "Most home repairs and improvements: drywall, painting, fixture installs, door and window work, furniture assembly, TV mounting, minor carpentry, and general repairs. If you're not sure whether we handle it, call — we'll give you a straight answer.",
    },
    {
      question: "Do you do free estimates?",
      answer:
        "Yes. We come look at the job before we give you a number. For small repairs where the scope is clear, we can often quote over the phone.",
    },
    {
      question: "What are your hours?",
      answer:
        "We're available Monday through Thursday, 24 hours. Fridays, Saturdays, and Sundays we're off.",
    },
    {
      question: "Are you licensed and insured?",
      answer:
        "Yes. Maxson's Technical Services is fully licensed and insured in Oklahoma. We carry liability coverage on every job.",
    },
    {
      question: "Do you work on weekends?",
      answer:
        "No — we're closed Friday through Sunday. If you need something looked at, reach out Monday through Thursday and we'll get it scheduled quickly.",
    },
  ],

  // ── Operating Hours ────────────────────────────────────────────
  operatingHours: [
    { day: "Mon–Thu", hours: "Open 24 Hours" },
    { day: "Fri–Sun", hours: "Closed" },
  ],

  // ── Reviews & Ratings ──────────────────────────────────────────
  averageRating: 5.0,
  totalReviews: 0,

  reviews: [],
  featuredReviews: [],

  // ── Gallery ────────────────────────────────────────────────────
  galleryPreview: [
    { src: "/images/maxsons-hero.jpg", alt: "Handyman workshop tools" },
    { src: "https://images.unsplash.com/photo-1717281234297-3def5ae3eee1?w=600&q=80&fm=webp", alt: "Interior painting in progress" },
    { src: "https://images.unsplash.com/photo-1620348578890-740dd10e1fe5?w=600&q=80&fm=webp", alt: "Ceiling fan installation" },
    { src: "https://images.unsplash.com/photo-1633604712918-6ab1173d0ecd?w=600&q=80&fm=webp", alt: "TV wall mount installation" },
    { src: "https://images.unsplash.com/photo-1734517648088-2990d38c258d?w=600&q=80&fm=webp", alt: "Door repair and adjustment" },
    { src: "https://images.unsplash.com/photo-1657322402497-c07dd7c44fdf?w=600&q=80&fm=webp", alt: "Furniture and shelving installation" },
  ],

  galleryProjects: [
    {
      title: "Drywall Repair & Patch",
      category: "Drywall",
      images: [
        "https://images.unsplash.com/photo-1683115098516-9b8d5c643b5b?w=800&q=80&fm=webp",
      ],
    },
    {
      title: "Fixture Swap — Kitchen & Bath",
      category: "Fixtures",
      images: [
        "https://images.unsplash.com/photo-1620348578890-740dd10e1fe5?w=800&q=80&fm=webp",
      ],
    },
    {
      title: "Interior Paint — Living Room",
      category: "Painting",
      images: [
        "https://images.unsplash.com/photo-1717281234297-3def5ae3eee1?w=800&q=80&fm=webp",
      ],
    },
    {
      title: "TV Mount & Cable Management",
      category: "Mounting",
      images: [
        "https://images.unsplash.com/photo-1633604712918-6ab1173d0ecd?w=800&q=80&fm=webp",
      ],
    },
    {
      title: "Floating Shelf Install",
      category: "Shelving",
      images: [
        "https://images.unsplash.com/photo-1657322402497-c07dd7c44fdf?w=800&q=80&fm=webp",
      ],
    },
    {
      title: "Door Adjustment & Hardware",
      category: "Doors",
      images: [
        "https://images.unsplash.com/photo-1734517648088-2990d38c258d?w=800&q=80&fm=webp",
      ],
    },
  ],

  // ── Blog Posts ─────────────────────────────────────────────────
  blogPosts: [
    {
      slug: "handyman-vs-contractor",
      title: "Handyman vs. Contractor: Which Do You Need?",
      excerpt:
        "The line between a handyman job and a job that needs a licensed contractor isn't always obvious. Here's how to think about it.",
      date: "April 20, 2025",
      category: "Tips & Advice",
      readTime: "4 min read",
      content:
        "The short answer: a handyman is the right call for repairs and improvements that don't require permits or trade-specific licensing. A licensed contractor is the right call when the work involves structural changes, new electrical circuits, gas lines, or anything that requires a building permit.\n\nIn practice, most homeowners call a licensed contractor for jobs they could get done cheaper and faster by a skilled handyman. Here's a rough guide.\n\nHandyman territory: drywall repair and patching, painting, fixture swaps (replacing an existing light fixture or faucet with a new one), door and window adjustments, furniture assembly, TV mounting, minor carpentry, caulking and weatherstripping, and most small repairs.\n\nContractor territory: adding new electrical circuits or moving panel wiring, replacing a load-bearing wall, re-plumbing a bathroom from scratch, adding a room or dormer, or any work that requires a building permit in your city.\n\nThe gray area: replacing a toilet, installing a ceiling fan on existing wiring, or installing a new vanity — these technically involve plumbing or electrical connections but are typically within handyman range in most states. Oklahoma's licensing requirements focus on trade work over a certain dollar threshold.\n\nBottom line: if you're not sure, describe the job when you call. A straight-talking handyman will tell you if it's out of his scope — and that honesty is a good sign.",
    },
    {
      slug: "home-repair-list",
      title: "10 Small Repairs That Make a Big Difference at Resale",
      excerpt:
        "Buyers notice the small stuff. These repairs cost little and produce an outsized return on first impressions.",
      date: "March 5, 2025",
      category: "Tips & Advice",
      readTime: "5 min read",
      content:
        "You don't have to renovate your kitchen to improve what a buyer sees on a walkthrough. Small repairs — done properly — eliminate the mental tally buyers keep as they walk through a home.\n\nHere are ten worth prioritizing:\n\n1. Fix doors that don't close right. A sticky or misaligned door is one of the most noticeable issues in a home. It implies deferred maintenance throughout.\n\n2. Patch drywall holes and cracks. Even small ones — around switch plates, at corners, near baseboards — stand out to buyers looking for problems.\n\n3. Recaulk tubs and showers. Yellowed, cracked, or missing caulk reads as water damage risk. Fresh caulk takes two hours and makes the bathroom look maintained.\n\n4. Replace burned-out bulbs. Every room should be fully lit during a showing. Bulbs that are out look like something's wrong.\n\n5. Tighten loose fixtures. Wobbly towel bars, loose cabinet handles, and unstable light switch plates all suggest the house hasn't been cared for.\n\n6. Fix running toilets. Buyers will flush every toilet. A running toilet signals plumbing problems.\n\n7. Repair window locks and hardware. Windows that won't lock are a security flag and a potential inspection issue.\n\n8. Touch up paint scuffs and dings. You stop seeing them because you live there. Buyers don't have that filter.\n\n9. Rehang doors that drag on carpet. If a door scrapes the floor, it needs to be adjusted or trimmed. It creates an impression of settling or structural movement.\n\n10. Replace cracked switch plates and outlet covers. They cost a dollar each and take two minutes. Nothing looks more deferred than cracked beige plastic.\n\nMost of this list is one day of handyman work. The return in buyer perception is well above the cost.",
    },
    {
      slug: "drywall-patch-guide",
      title: "How to Know If Your Drywall Damage Needs a Pro",
      excerpt:
        "Some drywall repairs are straightforward DIY. Others are trickier than they look. Here's how to tell the difference.",
      date: "February 12, 2025",
      category: "Tips & Advice",
      readTime: "4 min read",
      content:
        "Drywall repair is one of the most commonly attempted DIY jobs — and one of the most often done wrong. The result is a visible patch that stands out in raking light, or a repair that cracks again six months later.\n\nHere's how to assess what you're dealing with.\n\nStraightforward repairs: nail pops, small nail holes from picture hanging, and hairline cracks at corners are genuinely manageable for a patient DIYer with the right materials. Spackle or lightweight joint compound, a good sand, primer, and paint — these small repairs are worth doing yourself.\n\nTrickier than they look: holes larger than about two inches. Matching texture — smooth walls, knockdown, orange peel, skip trowel — is the hardest part of any drywall repair. A patch that's perfectly feathered but has the wrong texture stands out just as much as an unfeathered one.\n\nCall a pro for: water-damaged drywall (the source of the moisture needs to be addressed first), sagging or soft sections (possible moisture damage behind the wall), cracks that keep coming back (may indicate settling or structural movement), and any repair in a high-visibility location where the texture match is critical.\n\nThe real cost of a DIY repair that doesn't match is having to call someone anyway — plus the cost of undoing the patch and starting over. If you're not confident in the texture match, it's worth getting it done right the first time.",
    },
  ],

  // ── Other ──────────────────────────────────────────────────────
  discountPercent: 10,
} as const;
