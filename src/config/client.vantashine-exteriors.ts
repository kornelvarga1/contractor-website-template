export const client = {
  // ── Company ────────────────────────────────────────────────────
  companyName: "VantaShine Exteriors",
  companyNameFull: "VantaShine Exteriors",
  logoMain: "VantaShine",
  logoSub: "Exteriors",
  logoIcon: "house" as const,
  logoImageUrl: "/images/vantashine-exteriors-logo.png",
  tradeNoun: "exterior cleaning",
  tradeAdjective: "exterior cleaning",
  schemaType: "HomeAndConstructionBusiness",
  tagline: "Licensed & Insured in Iowa",
  rocLicense: "",
  yearsExperience: 0,

  // ── Contact ────────────────────────────────────────────────────
  phone: "(515) 410-5705",
  phoneTel: "5154105705",
  email: "",
  websiteUrl: "https://vantashine-exteriors-eta.vercel.app",
  googleReviewsUrl: "https://www.google.com/maps/place/VantaShine+Exteriors/@42.421706,-94.9884542,17z",

  // ── Location ───────────────────────────────────────────────────
  address: {
    street: "313 W Main St",
    city: "Sac City",
    state: "IA",
    zip: "50583",
  },
  geo: { latitude: 42.421706, longitude: -94.9884542 },
  areas: ["Sac City", "Carroll", "Lake View", "Odebolt", "Wall Lake", "Early", "Lake City"],
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.0!2d-94.9884542!3d42.421706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s313+W+Main+St%2C+Sac+City%2C+IA+50583!5e0!3m2!1sen!2sus!4v1700000000000",

  // ── Theme ──────────────────────────────────────────────────────
  // Real brand blue — matches Blake's shirt/current site (#7EC8E3).
  accentHsl: "196 64% 69%",
  theme: "dark" as const,

  // ── Images ─────────────────────────────────────────────────────
  images: {
    hero: "/images/vantashine-exteriors-hero.jpg",
    about: "/images/vantashine-exteriors-about.jpg",
    faq: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80&fm=webp",
    whyChooseUs: "/images/vantashine-exteriors-hero.jpg",
  },

  // ── Home Page Copy ─────────────────────────────────────────────
  heroHeadline: "Western Iowa's Spotless Exterior Cleaning",
  heroSubheadline: "Your Property. Spotless. Guaranteed.",
  heroCtaText: "Get a Free Quote",
  aboutText:
    "I'm Blake Currie, owner of VantaShine Exteriors. I clean windows, pressure wash, and take care of the outside of homes and businesses across Sac, Carroll, and Calhoun counties — one crew, one standard, one call. Fully insured, locally owned, and backed by a 100% satisfaction guarantee.",

  // ── Why Choose Us Section ──────────────────────────────────────
  whyChooseUs: {
    heading: "Why Western Iowa Chooses VantaShine Exteriors",
    subtitle: "One crew, one standard, one call — for everything on the outside of your property.",
    imageAlt: "Exterior window cleaning on a residential home in Sac City, Iowa",
    benefits: [
      {
        title: "48-Hour Rain Guarantee",
        desc: "If it rains within 48 hours of a window cleaning, I'll come back and make it right at no charge.",
      },
      {
        title: "100% Satisfaction Guaranteed",
        desc: "If you're not happy with the work, I'll fix it. No arguments, no fine print.",
      },
      {
        title: "Fully Insured",
        desc: "Insured through NEXT Insurance, so your property is protected on every job, residential or commercial.",
      },
      {
        title: "Same-Day Quote Response",
        desc: "Send a message or call and I'll get you a number back the same day — no waiting around.",
      },
    ],
  },

  // ── Services ───────────────────────────────────────────────────
  services: [
    {
      name: "Window Cleaning",
      slug: "window-cleaning",
      description:
        "Interior and exterior window cleaning, including screens, tracks, and sills. Starts at $8/window.",
      image: "https://images.unsplash.com/photo-1527352774566-e4916e36c645?w=800&q=80&fm=webp",
      seoData: {
        intro:
          "Clean windows change how a whole property looks. I clean glass, screens, tracks, and sills by hand for a streak-free finish — and back it with a 48-hour rain guarantee.",
        seoBlocks: {
          what: "Window cleaning covers exterior-only or exterior-plus-interior glass, with add-ons for screens and tracks/sills. Exterior only runs $8/window, exterior plus interior is $10/window, and adding screens plus tracks/sills is +$4/window — adjusted for property size and window condition.",
          why: "Dirty windows aren't just cosmetic — hard water spots and grime etch into glass over time if left alone, making future cleanings harder and shortening the life of the glass. Regular cleaning keeps windows looking new and lets more natural light into the home.",
          when: "Most homes look best with windows cleaned twice a year — spring and fall. Commercial storefronts often need monthly or quarterly service to keep a clean, professional look.",
        },
      },
    },
    {
      name: "Pressure Washing",
      slug: "pressure-washing",
      description: "Driveways, sidewalks, concrete, and decks — blasted clean and looking new again.",
      image: "https://images.unsplash.com/photo-1581883579507-019c44b711cb?w=800&q=80&fm=webp",
      seoData: {
        intro:
          "Pressure washing strips years of grime, mildew, and stains off hard surfaces. I use the right pressure and technique for each surface so it gets clean without getting damaged.",
        seoBlocks: {
          what: "Pressure washing covers driveways, sidewalks, patios, and other concrete or hard surfaces. High-pressure water removes built-up dirt, algae, oil stains, and mildew that a hose and scrub brush can't touch.",
          why: "Concrete and hard surfaces trap dirt and organic growth in their pores over time, which makes surfaces slippery and can stain permanently if left too long. Regular pressure washing keeps surfaces safe and looking their best.",
          when: "A good rule of thumb is once a year for driveways and walkways, or sooner if you notice green or black buildup, especially in shaded or damp areas of the property.",
        },
      },
    },
    {
      name: "Soft Washing",
      slug: "soft-washing",
      description: "Low-pressure cleaning for roofs, painted siding, and delicate surfaces that can't take a blast.",
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80&fm=webp",
      seoData: {
        intro:
          "Some surfaces — roofs, painted siding, stucco — can be damaged by high-pressure washing. Soft washing uses low pressure and the right cleaning solution to clean effectively without the risk.",
        seoBlocks: {
          what: "Soft washing applies a specialized cleaning solution at low pressure to break down algae, mildew, and dirt, then rinses it away gently. It's the correct method for roofing shingles, painted siding, stucco, and other surfaces that high pressure can crack, strip, or otherwise damage.",
          why: "High-pressure washing on the wrong surface can strip paint, crack shingles, or force water behind siding. Soft washing gets the same clean result without putting the surface at risk.",
          when: "If you're seeing black streaks on your roof, green or black growth on siding, or general grime buildup on painted surfaces, soft washing is the safer choice over pressure washing.",
        },
      },
    },
    {
      name: "Gutter Cleaning",
      slug: "gutter-cleaning",
      description: "Hand-cleared debris and downspout flushing — no clogs, no overflow, no water damage.",
      image: "https://images.unsplash.com/photo-1665442348932-6e16d72fe163?w=800&q=80&fm=webp",
      seoData: {
        intro:
          "Clogged gutters cause water damage fast — to your roof, siding, and foundation. I clear gutters by hand and flush the downspouts so water actually goes where it's supposed to.",
        seoBlocks: {
          what: "Gutter cleaning includes hand-removing leaves and debris from the gutter channel and flushing downspouts to confirm they're draining freely, not just clear on the surface.",
          why: "A clogged gutter overflows during rain, which can rot fascia boards, damage siding, and lead to foundation issues from water pooling too close to the house. Clean gutters protect the rest of the property.",
          when: "Twice a year — spring and fall — is standard for most Iowa properties, more often if you've got a lot of overhanging trees.",
        },
      },
    },
    {
      name: "Trash Bin Cleaning",
      slug: "trash-bin-cleaning",
      description: "High-pressure wash, sanitize, and deodorize for trash and recycling bins.",
      image: "https://images.unsplash.com/photo-1718152521364-b9655b8a7926?w=800&q=80&fm=webp",
      seoData: {
        intro:
          "Trash bins build up grime, bacteria, and smell fast — especially in the summer. I pressure wash, sanitize, and deodorize bins on-site so you don't have to deal with it.",
        seoBlocks: {
          what: "Trash bin cleaning uses high-pressure water to blast out built-up residue, followed by a sanitizing treatment and deodorizer, done right at your curb or driveway.",
          why: "A dirty trash bin isn't just unpleasant — it attracts pests and bacteria that can spread when the bin is opened. Regular cleaning keeps bins sanitary and smelling normal.",
          when: "Monthly service keeps bins consistently clean; a one-time deep clean is a good option if it's been a while or you're dealing with a bad smell.",
        },
      },
    },
    {
      name: "Commercial Properties",
      slug: "commercial-properties",
      description: "Storefronts, office buildings, and multi-unit properties — scheduled or one-time service.",
      image: "https://images.unsplash.com/photo-1718152470408-cfeebeb6b9fc?w=800&q=80&fm=webp",
      seoData: {
        intro:
          "A clean storefront or office building makes the right impression on customers and tenants. I work with local businesses and property managers on both one-time cleanings and recurring schedules.",
        seoBlocks: {
          what: "Commercial service covers storefront window cleaning, building pressure washing, and multi-unit property exteriors, scheduled around your business hours to avoid disrupting customers or tenants.",
          why: "First impressions matter for any business — dirty windows or a grimy entrance signal neglect even if everything inside is well run. Regular exterior maintenance protects your property's appearance and value.",
          when: "Most commercial clients set up a recurring monthly or quarterly schedule. One-time cleanings are also available for move-ins, events, or before a property listing.",
        },
      },
    },
  ],

  // ── Process Steps ──────────────────────────────────────────────
  processSteps: [
    {
      title: "Get a Same-Day Quote",
      description:
        "Call or send a message with what you need done. I'll get you a straight number back the same day.",
    },
    {
      title: "I Show Up and Get It Done",
      description:
        "One crew, one standard — I show up on time and clean it right the first time, whether it's windows, concrete, or gutters.",
    },
    {
      title: "Guaranteed Results",
      description:
        "Backed by a 100% satisfaction guarantee, plus a 48-hour rain guarantee on window cleaning specifically.",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────────
  faq: [
    {
      question: "How much does window cleaning cost?",
      answer:
        "Exterior-only cleaning starts at $8 per window. Exterior plus interior is $10 per window, and adding screens plus tracks/sills is +$4 per window. Final pricing adjusts based on property size and window condition — I'll give you a straight number before starting.",
    },
    {
      question: "What areas do you serve?",
      answer:
        "I serve Sac City and the surrounding area including Carroll, Lake View, Odebolt, Wall Lake, Early, and Lake City — Carroll, Sac, and Calhoun counties in Western Iowa.",
    },
    {
      question: "What's the 48-hour rain guarantee?",
      answer:
        "If it rains within 48 hours of a window cleaning and leaves spots or streaks, I'll come back and re-clean the affected windows at no extra charge.",
    },
    {
      question: "Do you offer soft washing for roofs and siding?",
      answer:
        "Yes. Soft washing uses low pressure and the right cleaning solution for surfaces that can't take a full-pressure blast, like roof shingles, painted siding, and stucco — it gets the same clean result without the risk of damage.",
    },
    {
      question: "Are you insured?",
      answer:
        "Yes, VantaShine Exteriors is fully insured through NEXT Insurance, so your property is covered on every job, residential or commercial.",
    },
  ],

  // ── Operating Hours ────────────────────────────────────────────
  operatingHours: [
    { day: "Mon–Sat", hours: "7AM–6PM" },
    { day: "Sun", hours: "Closed" },
  ],

  // ── Reviews & Ratings ──────────────────────────────────────────
  averageRating: 5.0,
  totalReviews: 14,

  // Real reviews from GBP, pasted by Kornél 2026-08-08. Eric Baumhover (1 month ago) left a
  // rating with no written text, so totalReviews is 14 but only 13 have text to show here.
  reviews: [
    {
      author: "Peggy D.",
      rating: 5,
      time: "1 month ago",
      text: "Very efficient and professional. Give Blake a call for your maintenance needs!",
    },
    {
      author: "Nevada D.",
      rating: 5,
      time: "3 months ago",
      text: "Great service with small town price!!!!",
    },
    {
      author: "Jennifer J.",
      rating: 5,
      time: "2 months ago",
      text: "Blake was super professional and was quick to get the job done. Windows look amazing. Will definitely use him again!",
    },
    {
      author: "Phil D.",
      rating: 5,
      time: "3 months ago",
      text: "Professional, prompt, and a straight shooter. His attention to detail is what I'm here to report. Recommend him to friends and family, no doubt.",
    },
    {
      author: "Kay S.",
      rating: 5,
      time: "3 months ago",
      text: "High quality work! Took great care to do a remarkable job. Highly recommend Blake!",
    },
    {
      author: "Madelynne W.",
      rating: 5,
      time: "1 month ago",
      text: "I see how hard he works every day and the care he puts into every job. He takes his time, pays attention to the little details, and always wants the work to look its best. He treats every home like it's his own, and it really shows.",
    },
    {
      author: "Mike S.",
      rating: 5,
      time: "3 months ago",
      text: "Blake from VantaShine Exteriors came right on time did a great job of cleaning our windows we plan on using there services for our windows in the future.",
    },
    {
      author: "Pam D.",
      rating: 5,
      time: "3 months ago",
      text: "I was happy with the service. Good attention to details.",
    },
    {
      author: "Eileen L.",
      rating: 5,
      time: "20 hours ago",
      text: "Blake washed my house yesterday & it sparkles again. I have a white house again. He was very efficient & courteous. I would highly recommend him for your washing jobs. He was very reasonable on pricing.",
    },
    {
      author: "Angi B.",
      rating: 5,
      time: "5 days ago",
      text: "Five star Service! Was very attentive and very particular. Great job!",
    },
    {
      author: "Maggie M.",
      rating: 5,
      time: "6 days ago",
      text: "Window washing! Great work!",
    },
    {
      author: "Linda R.",
      rating: 5,
      time: "1 week ago",
      text: "Blake is a soft spoken, courteous young man that did an excellent job of cleaning our windows and removing mold from our gutters...everything is sparkling clean for a reasonable price! Highly recommend!",
    },
    {
      author: "Mark C.",
      rating: 5,
      time: "1 month ago",
      text: "Blake very conscientious on all details of the job. I would recommend you give him a try. You won't be disappointed!!",
    },
  ],
  featuredReviews: [
    {
      name: "Linda Russell",
      location: "Sac City, IA",
      rating: 5,
      text: "Blake is a soft spoken, courteous young man that did an excellent job of cleaning our windows and removing mold from our gutters...everything is sparkling clean for a reasonable price! Highly recommend!",
    },
    {
      name: "Madelynne Weitl",
      location: "Sac City, IA",
      rating: 5,
      text: "I see how hard he works every day and the care he puts into every job. He takes his time, pays attention to the little details, and always wants the work to look its best. He treats every home like it's his own, and it really shows.",
    },
  ],

  // ── Gallery ────────────────────────────────────────────────────
  galleryPreview: [
    { src: "https://images.unsplash.com/photo-1527352774566-e4916e36c645?w=600&q=80&fm=webp", alt: "Streak-free exterior window cleaning" },
    { src: "https://images.unsplash.com/photo-1581883579507-019c44b711cb?w=600&q=80&fm=webp", alt: "Driveway pressure washing" },
    { src: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=600&q=80&fm=webp", alt: "Soft washing a home's siding" },
    { src: "https://images.unsplash.com/photo-1665442348932-6e16d72fe163?w=600&q=80&fm=webp", alt: "Gutter cleaning and debris removal" },
    { src: "https://images.unsplash.com/photo-1718152521364-b9655b8a7926?w=600&q=80&fm=webp", alt: "Trash bin cleaning service" },
    { src: "https://images.unsplash.com/photo-1718152470408-cfeebeb6b9fc?w=600&q=80&fm=webp", alt: "Commercial storefront window cleaning" },
  ],

  galleryProjects: [
    {
      title: "Residential Window Cleaning",
      category: "Window Cleaning",
      images: ["https://images.unsplash.com/photo-1527352774566-e4916e36c645?w=800&q=80&fm=webp"],
    },
    {
      title: "Driveway Pressure Wash",
      category: "Pressure Washing",
      images: ["https://images.unsplash.com/photo-1581883579507-019c44b711cb?w=800&q=80&fm=webp"],
    },
    {
      title: "Roof Soft Wash",
      category: "Soft Washing",
      images: ["https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80&fm=webp"],
    },
    {
      title: "Gutter Debris Removal",
      category: "Gutter Cleaning",
      images: ["https://images.unsplash.com/photo-1665442348932-6e16d72fe163?w=800&q=80&fm=webp"],
    },
    {
      title: "Trash Bin Deep Clean",
      category: "Bin Cleaning",
      images: ["https://images.unsplash.com/photo-1718152521364-b9655b8a7926?w=800&q=80&fm=webp"],
    },
    {
      title: "Commercial Storefront",
      category: "Commercial",
      images: ["https://images.unsplash.com/photo-1718152470408-cfeebeb6b9fc?w=800&q=80&fm=webp"],
    },
  ],

  // ── Blog Posts ─────────────────────────────────────────────────
  blogPosts: [
    {
      slug: "how-much-does-window-cleaning-cost-iowa",
      title: "How Much Does Professional Window Cleaning Cost in Iowa?",
      excerpt:
        "A breakdown of what goes into window cleaning pricing, and why per-window pricing is more honest than a flat estimate.",
      date: "May 12, 2025",
      category: "Tips & Advice",
      readTime: "3 min read",
      content:
        "Window cleaning pricing usually confuses people because so many companies quote a flat number without explaining what it includes. I price by the window because it's the most honest way to do it — you pay for exactly what you get, and there's no guessing on a bigger home versus a smaller one.\n\nExterior-only cleaning runs $8 per window. This covers the glass, frame, and sill on the outside only — a good option if you just want the curb-appeal difference or you're doing a seasonal touch-up. Exterior plus interior is $10 per window, which is the most requested option since most people want both sides done at once.\n\nAdding screens and tracks/sills is an extra $4 per window. This matters more than people expect — dirty tracks and screens are where most of the visible grime actually collects, and they're easy to overlook if you're just doing the glass.\n\nFinal pricing adjusts a bit based on property size and window condition. A home with 40 standard windows prices differently than one with 15, and windows that haven't been cleaned in a few years take longer than ones on a regular schedule. I always give a straight number before starting, based on a quick walk-through or photos.\n\nIf you're comparing quotes, ask what's actually included — some companies quote low but leave out screens, tracks, or one side of the glass, then upsell once they're on-site. Per-window pricing avoids that entirely.",
    },
    {
      slug: "pressure-washing-vs-soft-washing",
      title: "Pressure Washing vs. Soft Washing: What's the Difference?",
      excerpt:
        "Using the wrong method on the wrong surface can actually damage your property. Here's how to tell which one you need.",
      date: "June 18, 2025",
      category: "Tips & Advice",
      readTime: "4 min read",
      content:
        "People often use \"pressure washing\" as a catch-all term, but pressure washing and soft washing are two different processes for two different kinds of surfaces — and using the wrong one can cause real damage.\n\nPressure washing uses high-pressure water alone to blast dirt, stains, and buildup off hard, durable surfaces like concrete driveways, sidewalks, and some brick. It's effective because concrete can handle the force without being damaged.\n\nSoft washing uses low pressure combined with a specialized cleaning solution to break down algae, mildew, and grime, then rinses it away gently. This is the correct method for roofing shingles, painted siding, stucco, and other surfaces that high pressure can crack, strip paint from, or force water behind.\n\nUsing high pressure on the wrong surface is a common and expensive mistake — I've seen shingles cracked, paint stripped, and water forced behind siding from someone using a pressure washer on a surface that needed soft washing instead. The chemical solution used in soft washing does the actual cleaning work; the low pressure is just there to rinse it.\n\nAs a general rule: concrete, brick pavers, and most hardscaping can take pressure washing. Roofs, painted or stained wood, siding, and stucco should be soft washed. If you're not sure which your project needs, that's exactly the kind of thing I sort out on the initial walkthrough before starting anything.",
    },
    {
      slug: "why-clogged-gutters-cause-expensive-damage",
      title: "Why Clogged Gutters Cause More Damage Than You'd Think",
      excerpt:
        "A clogged gutter isn't just an eyesore — it's one of the fastest ways to rack up expensive repair bills on your home.",
      date: "July 25, 2025",
      category: "Tips & Advice",
      readTime: "3 min read",
      content:
        "Gutters have one job — move water away from your house — and when they're clogged, everything downstream of that job starts to fail. Iowa's mix of heavy spring rain and falling leaves makes clogged gutters one of the most common (and most avoidable) causes of home damage I see.\n\nWhen a gutter clogs, water has nowhere to go but over the edge. That overflow runs straight down your fascia boards and siding, which soaks the wood and eventually leads to rot — a repair that's a lot more expensive than a gutter cleaning ever would have been.\n\nIt gets worse near the foundation. Water that overflows right at the corners of your house, where downspouts are supposed to carry it away, ends up pooling right against your foundation instead. Over time that leads to cracking, basement moisture, and in bad cases, structural issues.\n\nWinter adds another layer of risk. Standing water in a clogged gutter freezes, expands, and can pull gutters away from the roofline entirely — or create ice dams that force water back up under your shingles.\n\nThe fix is simple and cheap relative to the alternative: clear gutters by hand, twice a year — spring and fall — and flush the downspouts to make sure they're draining freely, not just clear on the surface. If you've got a lot of overhanging trees, it's worth doing more often. It's a small, regular cost against repairs that can run into the thousands.",
    },
  ],

  discountPercent: 10,
} as const;
