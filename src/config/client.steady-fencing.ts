export const client = {
  // ── Company ────────────────────────────────────────────────────
  companyName: "Steady Fencing",
  companyNameFull: "Steady Fencing",
  logoMain: "Steady",
  logoSub: "Fencing",
  logoIcon: "house" as const,
  tradeNoun: "fencing",
  tradeAdjective: "fence",
  schemaType: "HomeAndConstructionBusiness",
  tagline: "Licensed & Insured in Louisiana",
  rocLicense: "",
  yearsExperience: 0,

  // ── Contact ────────────────────────────────────────────────────
  phone: "(504) 654-9239",
  phoneTel: "5046549239",
  email: "",
  websiteUrl: "https://steady-fencing.vercel.app",
  googleReviewsUrl: "https://www.google.com/maps/place/Steady+Fencing/@30.0246271,-90.2104653,17z",

  // ── Location ───────────────────────────────────────────────────
  address: {
    street: "4909 James Dr",
    city: "Metairie",
    state: "LA",
    zip: "70003",
  },
  geo: { latitude: 30.0246271, longitude: -90.2104653 },
  areas: ["Metairie", "Kenner", "New Orleans", "Harahan", "River Ridge", "Jefferson", "Gretna"],
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3488.0!2d-90.2104653!3d30.0246271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s4909+James+Dr%2C+Metairie%2C+LA+70003!5e0!3m2!1sen!2sus!4v1700000000000",

  // ── Theme ──────────────────────────────────────────────────────
  accentHsl: "142 40% 28%",

  // ── Images ─────────────────────────────────────────────────────
  images: {
    hero: "https://images.unsplash.com/photo-1593285247650-cd7bb44adcfd?w=1600&q=80&fm=webp",
    about: "https://images.unsplash.com/photo-1593285247650-cd7bb44adcfd?w=1600&q=80&fm=webp",
    faq: "https://images.unsplash.com/photo-1601042860368-debed90085e0?w=800&q=80&fm=webp",
    whyChooseUs: "https://images.unsplash.com/photo-1604015641586-6fa03629f976?w=960&q=80&fm=webp",
  },

  // ── Home Page Copy ─────────────────────────────────────────────
  heroHeadline: "Metairie's Trusted Fence Builders",
  heroSubheadline: "Wood, vinyl, and chain-link fencing — built right, built to last.",
  heroCtaText: "Get a Free Quote",
  aboutText:
    "Steady Fencing, led by Brandon, installs and repairs wood, vinyl, and chain-link fences across Metairie and the greater New Orleans area. We show up when we say we will, quote it straight, and build fences that hold up to Louisiana weather — no shortcuts.",

  // ── Why Choose Us Section ──────────────────────────────────────
  whyChooseUs: {
    heading: "Why Metairie Homeowners Choose Steady Fencing",
    subtitle: "Clean work, straight answers, and a crew that treats your yard like it's theirs.",
    imageAlt: "New wood privacy fence installed in a Metairie, LA backyard",
    benefits: [
      {
        title: "Every Material, Done Right",
        desc: "Wood, vinyl, chain-link — we install and repair all of it, sized and set correctly for your property.",
      },
      {
        title: "Clean & Professional",
        desc: "We clear our own debris, protect your yard during the build, and leave the site looking better than we found it.",
      },
      {
        title: "Free, No-Pressure Estimates",
        desc: "We'll walk your property, measure it out, and give you a straight number — no upsell, no runaround.",
      },
      {
        title: "5.0 Rating Across the Board",
        desc: "Our reviews come from real Metairie homeowners who've had us build or repair their fence.",
      },
    ],
  },

  // ── Services ───────────────────────────────────────────────────
  services: [
    {
      name: "Wood Fence Installation",
      slug: "wood-fence-installation",
      description: "Classic privacy and picket fencing, built to hold up to Louisiana heat and humidity.",
      image: "https://images.unsplash.com/photo-1593285247650-cd7bb44adcfd?w=800&q=80&fm=webp",
      seoData: {
        intro:
          "Wood fencing is the most requested style in Metairie for a reason — it looks great and it works for both privacy and curb appeal. We build it with proper post depth and pressure-treated lumber so it lasts.",
        seoBlocks: {
          what: "Wood fence installation covers everything from post-hole digging and concrete setting to rail and picket installation. We use pressure-treated posts set below the frost line and space pickets evenly for a clean, uniform look.",
          why: "A wood fence that's poorly set will lean, gap, or rot within a few years in Louisiana's wet climate. Correct post depth, proper concrete footings, and quality lumber are what separate a fence that lasts 15+ years from one you're repairing in three.",
          when: "If you're adding privacy, defining your yard, or replacing an old leaning fence, wood is a solid, cost-effective option. We'll walk you through spacing and height options during your free estimate.",
        },
      },
    },
    {
      name: "Vinyl Fence Installation",
      slug: "vinyl-fence-installation",
      description: "Low-maintenance vinyl fencing that won't rot, warp, or need repainting.",
      image: "https://images.unsplash.com/photo-1601042860368-debed90085e0?w=800&q=80&fm=webp",
      seoData: {
        intro:
          "Vinyl fencing costs more up front but pays for itself in maintenance you'll never have to do — no staining, no rot, no repainting. We install it with the same care we bring to every material.",
        seoBlocks: {
          what: "Vinyl fence installation includes setting reinforced posts, assembling panel sections, and finishing gate hardware. Panels snap and lock together, but getting the post spacing and leveling right is what keeps a vinyl fence from sagging over time.",
          why: "Vinyl doesn't rot, splinter, or need repainting — but a bad install (uneven posts, poor footing) will show every flaw since the material doesn't hide imperfections the way wood grain does. Precise setup matters more with vinyl, not less.",
          when: "Vinyl is a good fit if you want a fence you'll never have to maintain, or if you're replacing a wood fence that's rotted out. It holds up well to Louisiana humidity without warping.",
        },
      },
    },
    {
      name: "Chain Link Fencing",
      slug: "chain-link-fencing",
      description: "Affordable, durable chain-link for yards, pools, and commercial properties.",
      image: "https://images.unsplash.com/photo-1604015641586-6fa03629f976?w=800&q=80&fm=webp",
      seoData: {
        intro:
          "Chain-link is the practical choice when you need a secure boundary without the cost of a full privacy fence — for yards, pet containment, or commercial lots.",
        seoBlocks: {
          what: "Chain-link installation includes setting terminal and line posts, stretching and attaching the mesh, and installing top rail and gate hardware. We make sure the mesh is pulled tight so it doesn't sag over time.",
          why: "A loosely stretched chain-link fence sags, bows, and loses its shape within a year or two. Proper post spacing and mesh tension are what keep it standing straight for the long haul.",
          when: "Chain-link works well for pet containment, pool code compliance, commercial property lines, or anywhere you need a budget-friendly, durable boundary without full privacy.",
        },
      },
    },
    {
      name: "Fence Repair",
      slug: "fence-repair",
      description: "Leaning posts, storm damage, broken panels — we fix existing fences of any material.",
      image: "https://images.unsplash.com/photo-1537407034356-b8f5f1ac2aa8?w=800&q=80&fm=webp",
      seoData: {
        intro:
          "Not every fence problem means starting over. We repair leaning posts, storm-damaged sections, and broken panels on wood, vinyl, and chain-link fences.",
        seoBlocks: {
          what: "Fence repair covers resetting or replacing leaning posts, swapping damaged pickets or panels, re-tensioning sagging chain-link, and fixing gate hardware that's stopped latching properly.",
          why: "A single leaning post or damaged section puts stress on the rest of the fence line, and small problems left alone tend to spread. Catching it early is almost always cheaper than a full rebuild.",
          when: "If your fence is leaning, has gaps from storm damage, or a gate won't close right, it's usually a repair — not a replacement. We'll tell you honestly if a section is too far gone to fix.",
        },
      },
    },
    {
      name: "Gate Installation & Repair",
      slug: "gate-installation-repair",
      description: "New gates, hardware upgrades, or fixing one that won't latch or swing right.",
      image: "https://images.unsplash.com/photo-1673967683504-d23d3ab5b011?w=800&q=80&fm=webp",
      seoData: {
        intro:
          "A gate that drags, won't latch, or has sagged out of square is one of the most common fence complaints we get — and usually one of the quickest fixes.",
        seoBlocks: {
          what: "Gate work includes installing new single or double gates, upgrading hinges and latches, and correcting sag from worn hardware or a settled post. We size gates for both foot traffic and equipment access where needed.",
          why: "A sagging or misaligned gate is usually a hardware or post issue, not a sign you need a whole new fence. Proper hinge selection and post reinforcement fix most gate problems for good.",
          when: "If your gate drags on the ground, won't latch, or has visibly sagged, it's worth a look before it gets worse or the frame warps.",
        },
      },
    },
    {
      name: "Fence Staining & Sealing",
      slug: "fence-staining-sealing",
      description: "Protect and refresh a wood fence's look with professional staining and sealing.",
      image: "https://images.unsplash.com/photo-1586574208875-cd77c2bfb851?w=800&q=80&fm=webp",
      seoData: {
        intro:
          "Staining and sealing is the single best thing you can do to extend the life of a wood fence in Louisiana's humid climate — and it makes an old fence look new again.",
        seoBlocks: {
          what: "This service includes pressure washing the wood to remove dirt and mildew, letting it dry fully, and applying a quality stain and sealant that protects against moisture, UV damage, and rot.",
          why: "Untreated wood in a humid climate like Metairie's absorbs moisture, warps, and rots years faster than a properly sealed fence. Staining also protects against sun-bleaching and keeps the wood looking sharp.",
          when: "New wood fences should be sealed within a few weeks of installation once the wood has dried out. Existing fences typically need a fresh coat every 2–3 years depending on sun and moisture exposure.",
        },
      },
    },
  ],

  // ── Process Steps ──────────────────────────────────────────────
  processSteps: [
    {
      title: "Free On-Site Estimate",
      description:
        "We walk your property, measure the line, and talk through material options. You get a straight price before we start anything.",
    },
    {
      title: "We Build It Right",
      description:
        "Posts set to proper depth, materials installed to spec, your yard protected the whole time. No shortcuts, no rushed work.",
    },
    {
      title: "Clean Site, Solid Fence",
      description:
        "We clear all debris and walk the finished fence line with you before we consider the job done.",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────────
  faq: [
    {
      question: "What areas around Metairie do you serve?",
      answer:
        "We serve Metairie and the surrounding area including Kenner, New Orleans, Harahan, River Ridge, Jefferson, and Gretna. Not sure if you're in range? Give us a call and we'll let you know.",
    },
    {
      question: "How long does a typical fence installation take?",
      answer:
        "Most residential wood or vinyl fence jobs take 1–3 days depending on the length of the fence line and material. Chain-link is usually faster. We'll give you a time estimate during your free quote.",
    },
    {
      question: "Do you handle permits or property line surveys?",
      answer:
        "We can point you toward what's typically required in Jefferson Parish, but we recommend confirming your property line before we quote — it saves everyone a headache down the road.",
    },
    {
      question: "Which material should I choose — wood, vinyl, or chain-link?",
      answer:
        "It depends on your budget and priorities. Wood is the classic look at a moderate price, vinyl costs more but needs zero maintenance, and chain-link is the most affordable option for security or containment. We'll walk you through the tradeoffs on-site.",
    },
    {
      question: "Can you repair a fence someone else installed?",
      answer:
        "Yes. We repair wood, vinyl, and chain-link fences regardless of who built them — leaning posts, storm damage, sagging gates, all of it.",
    },
  ],

  // ── Operating Hours ────────────────────────────────────────────
  operatingHours: [
    { day: "Mon–Sun", hours: "9AM–5PM" },
  ],

  // ── Reviews & Ratings ──────────────────────────────────────────
  averageRating: 5.0,
  totalReviews: 7,

  // Real reviews from GBP, pasted by Kornél 2026-08-08.
  reviews: [
    {
      author: "Mazzella M.",
      rating: 5,
      time: "1 year ago",
      text: "I had this company do my fence recently. They did such a great job. I couldn't be happier with the results. I've got so many compliments from my neighbor's. Great company great prices.",
    },
    {
      author: "Joseph C.",
      rating: 5,
      time: "1 year ago",
      text: "I'd hire steady fencing again. He started on time and finished on time. Fence looks great. Gate works flawlessly and very sturdy. Thanks again Brandon for doing a great job.",
    },
    {
      author: "Shelby P.",
      rating: 5,
      time: "2 years ago",
      text: "Brandon and his team replaced my side gate. It came out great! They kept me up to date on time and day of service and the workers were very professional. They kept everything clean and completed the job in a timely manner.",
    },
    {
      author: "Jacob R.",
      rating: 5,
      time: "1 year ago",
      text: "They do great work and very reasonable priced!",
    },
    {
      author: "Chris S.",
      rating: 5,
      time: "1 year ago",
      text: "Quality work! Great customer service! Would recommend!",
    },
    {
      author: "Native Living",
      rating: 5,
      time: "1 year ago",
      text: "Strong and sturdy fence for a reasonable price. Highly recommend!",
    },
    {
      author: "Gage A.",
      rating: 5,
      time: "1 year ago",
      text: "Great work!! Great people!! Very recommendable!!",
    },
  ],
  featuredReviews: [
    {
      name: "Joseph Carapina",
      location: "Metairie, LA",
      rating: 5,
      text: "I'd hire steady fencing again. He started on time and finished on time. Fence looks great. Gate works flawlessly and very sturdy. Thanks again Brandon for doing a great job.",
    },
    {
      name: "Shelby Petersen",
      location: "Metairie, LA",
      rating: 5,
      text: "Brandon and his team replaced my side gate. It came out great! They kept me up to date on time and day of service and the workers were very professional. They kept everything clean and completed the job in a timely manner.",
    },
  ],

  // ── Gallery ────────────────────────────────────────────────────
  galleryPreview: [
    { src: "https://images.unsplash.com/photo-1593285247650-cd7bb44adcfd?w=600&q=80&fm=webp", alt: "Wood privacy fence installation" },
    { src: "https://images.unsplash.com/photo-1601042860368-debed90085e0?w=600&q=80&fm=webp", alt: "Vinyl fence panel section" },
    { src: "https://images.unsplash.com/photo-1604015641586-6fa03629f976?w=600&q=80&fm=webp", alt: "Chain-link fence around a yard" },
    { src: "https://images.unsplash.com/photo-1537407034356-b8f5f1ac2aa8?w=600&q=80&fm=webp", alt: "Fence repair in progress" },
    { src: "https://images.unsplash.com/photo-1673967683504-d23d3ab5b011?w=600&q=80&fm=webp", alt: "New fence gate installation" },
    { src: "https://images.unsplash.com/photo-1586574208875-cd77c2bfb851?w=600&q=80&fm=webp", alt: "Freshly stained wood fence" },
  ],

  galleryProjects: [
    {
      title: "Wood Privacy Fence",
      category: "Installation",
      images: ["https://images.unsplash.com/photo-1593285247650-cd7bb44adcfd?w=800&q=80&fm=webp"],
    },
    {
      title: "Vinyl Fence Install",
      category: "Installation",
      images: ["https://images.unsplash.com/photo-1601042860368-debed90085e0?w=800&q=80&fm=webp"],
    },
    {
      title: "Chain-Link Yard Fence",
      category: "Installation",
      images: ["https://images.unsplash.com/photo-1604015641586-6fa03629f976?w=800&q=80&fm=webp"],
    },
    {
      title: "Storm Damage Repair",
      category: "Repair",
      images: ["https://images.unsplash.com/photo-1537407034356-b8f5f1ac2aa8?w=800&q=80&fm=webp"],
    },
    {
      title: "New Gate Build",
      category: "Installation",
      images: ["https://images.unsplash.com/photo-1673967683504-d23d3ab5b011?w=800&q=80&fm=webp"],
    },
    {
      title: "Fence Staining Refresh",
      category: "Maintenance",
      images: ["https://images.unsplash.com/photo-1586574208875-cd77c2bfb851?w=800&q=80&fm=webp"],
    },
  ],

  // ── Blog Posts ─────────────────────────────────────────────────
  blogPosts: [
    {
      slug: "wood-vs-vinyl-vs-chain-link-metairie",
      title: "Wood vs. Vinyl vs. Chain-Link: Choosing the Right Fence in Metairie",
      excerpt:
        "Every material has tradeoffs on cost, maintenance, and lifespan. Here's how to think through the decision for a Louisiana yard.",
      date: "June 2, 2025",
      category: "Tips & Advice",
      readTime: "4 min read",
      content:
        "Choosing a fence material comes down to three things: budget, how much maintenance you're willing to do, and what you actually need the fence for. In Metairie's humid, storm-prone climate, those tradeoffs matter more than they would somewhere drier.\n\nWood is the most popular choice for a reason — it's the classic privacy fence look, it's moderately priced, and it's easy to repair in sections if something gets damaged. The tradeoff is maintenance: wood needs to be sealed or stained every 2–3 years to hold up against Louisiana's humidity, and without that upkeep it will rot and warp faster than you'd expect.\n\nVinyl costs more upfront but needs essentially zero maintenance after that. It won't rot, warp, splinter, or need repainting, which makes the higher initial cost pay for itself over a decade or more. The one thing to watch is installation quality — since vinyl doesn't hide imperfections the way wood grain does, a poorly set post shows immediately.\n\nChain-link is the budget option and the right call when privacy isn't the priority — pool code compliance, pet containment, or marking a property line on a commercial lot. It's fast to install and the cheapest to repair if a section gets damaged.\n\nOur honest recommendation: if you want privacy and don't mind occasional upkeep, go wood. If you want to install it once and never think about it again, vinyl is worth the extra cost. If budget or a functional boundary is the priority, chain-link gets the job done. We'll walk your property and talk through the real tradeoffs for your specific situation during a free estimate.",
    },
    {
      slug: "signs-your-fence-needs-repair-not-replacement",
      title: "Signs Your Fence Needs Repair — Not a Full Replacement",
      excerpt:
        "A leaning post or a sagging gate doesn't always mean starting over. Here's how to tell what's actually salvageable.",
      date: "July 14, 2025",
      category: "Tips & Advice",
      readTime: "3 min read",
      content:
        "One of the most common calls we get is from homeowners who assume a fence problem means a full teardown and rebuild. Most of the time, that's not true — a single leaning post, a sagging gate, or a few damaged panels are usually fixable without touching the rest of the fence.\n\nA leaning post is almost always a footing problem, not a sign the whole fence is failing. If the concrete footing has shifted or cracked, we can reset or replace that one post without disturbing the panels on either side. Left alone, though, a single leaning post puts uneven stress on the rail and panels next to it, which is why it's worth fixing sooner rather than later.\n\nSagging gates are a hardware issue in the vast majority of cases — worn hinges, a settled gate post, or a latch that's fallen out of alignment. New heavy-duty hinges and a reinforced post almost always solve it without replacing the gate itself.\n\nStorm damage is where it gets case-by-case. A few broken pickets or a bent chain-link section can be patched in to match. But if a whole run of fence was knocked flat, or the posts themselves snapped, that section usually needs a rebuild rather than a patch.\n\nThe rule of thumb: if the posts are solid and it's the panels, pickets, or hardware that failed, it's a repair. If the posts themselves are compromised — rotted, snapped, or the footing failed — that section needs to come out. We'll always tell you honestly which situation you're in before quoting anything.",
    },
    {
      slug: "how-deep-should-fence-posts-be-set",
      title: "How Deep Should Fence Posts Actually Be Set?",
      excerpt:
        "Post depth is the single biggest factor in whether a fence lasts 20 years or starts leaning in two. Here's what proper installation looks like.",
      date: "August 20, 2025",
      category: "Tips & Advice",
      readTime: "3 min read",
      content:
        "If you want to know whether a fence was installed correctly, post depth is the first thing to check — and it's the thing corner-cutting installers skip most often because it's invisible once the concrete cures.\n\nThe general standard is that a fence post should be set at roughly one-third of its above-ground height, with a minimum of 24 inches for a standard 6-foot privacy fence. In Louisiana's soil — which shifts more than firmer clay or rocky soil in other regions due to moisture content — going shallower than that is asking for a leaning fence within a few years.\n\nThe hole diameter matters too. A post hole that's too narrow doesn't give the concrete enough surface area to properly anchor the post against wind and soil movement. We dig holes roughly three times the diameter of the post itself, then set the post in concrete that fully surrounds it — not just poured around the edges.\n\nDrainage is the piece people don't think about. A post set in a hole that holds standing water will rot from the bottom up regardless of the wood treatment, or the concrete footing itself can heave in freeze-thaw cycles. We slope the base of the hole and use gravel at the bottom on wood post installations to let water drain away from the post base.\n\nIf you've got a fence that's leaning after only a few years, shallow post depth or poor concrete work is almost always the reason. It's also exactly why we don't cut corners on this step, even though it's the part of the job nobody sees once it's done.",
    },
  ],

  discountPercent: 10,
} as const;
