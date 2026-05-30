/**
 * Centralized client configuration.
 *
 * This is the ONLY file you need to edit when deploying this template for a
 * new contractor. Every component reads from this config — no hunting through
 * individual files.
 */

export const client = {
  // ── Company ────────────────────────────────────────────────────
  companyName: "Phoenix Roofing & Repair",
  companyNameFull: "Phoenix Roofing and Repair",
  logoMain: "Phoenix Roofing",
  logoSub: "Repair",
  logoIcon: "house" as const,
  tradeNoun: "roofing",
  tradeAdjective: "roofing",
  schemaType: "RoofingContractor",
  tagline: "Licensed, Bonded & Insured",
  rocLicense: "123456",
  yearsExperience: 15,

  // ── Contact ────────────────────────────────────────────────────
  phone: "(602) 497-0154",
  phoneTel: "6024970154",
  email: "mike@phoenixroofingandrepair.com",
  websiteUrl: "https://phoenixroofingandrepair.com",
  googleReviewsUrl: "#",

  // ── Location ───────────────────────────────────────────────────
  address: {
    street: "301 E Bethany Home Rd A-121",
    city: "Phoenix",
    state: "AZ",
    zip: "85012",
  },
  geo: { latitude: 33.5231793, longitude: -112.068709 },
  areas: ["Phoenix", "Scottsdale", "Tempe", "Mesa", "Chandler", "Glendale", "Peoria"],
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.8!2d-112.068709!3d33.5231793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s301+E+Bethany+Home+Rd+A-121%2C+Phoenix%2C+AZ+85012!5e0!3m2!1sen!2sus!4v1700000000000",

  // ── Theme ──────────────────────────────────────────────────────
  // HSL values (without "hsl()" wrapper) — injected as CSS custom properties.
  accentHsl: "43 96% 50%",

  // ── Images ─────────────────────────────────────────────────────
  images: {
    hero: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&q=80&fm=webp",
    about: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=960&q=80&fm=webp",
    faq: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80&fm=webp",
    whyChooseUs: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=960&q=80&fm=webp",
  },

  // ── Home Page Copy ─────────────────────────────────────────────
  heroHeadline: "Phoenix's Trusted Roofing Contractor",
  heroSubheadline: "Serving Phoenix homeowners for 15+ years",
  heroCtaText: "Get a Free Quote",
  aboutText:
    "Phoenix Roofing and Repair has been protecting Phoenix homes and businesses for over 15 years. We're a locally owned crew that shows up on time, prices honestly, and stands behind every job. No subcontractors, no surprises.",

  // ── Why Choose Us Section ──────────────────────────────────────
  whyChooseUs: {
    heading: "Why Phoenix Homeowners Choose Us",
    subtitle:
      "We eliminate the stress, cost uncertainty, and wasted time that comes with hiring the wrong roofer.",
    imageAlt: "Professional roofer installing shingles on a Phoenix home",
    benefits: [
      {
        title: "Fast Turnaround",
        desc: "Most repairs completed same-day. Full replacements scheduled within the week — not months.",
      },
      {
        title: "Transparent Pricing",
        desc: "Written estimates before any work begins. No hidden fees, no surprise change orders.",
      },
      {
        title: "No-Obligation Inspections",
        desc: "Free roof inspections with a detailed report — zero pressure, zero commitment.",
      },
      {
        title: "Lifetime Workmanship Guarantee",
        desc: "We stand behind every job. If something isn't right, we fix it — period.",
      },
    ],
  },

  // ── Services ───────────────────────────────────────────────────
  services: [
    {
      name: "Roof Replacement",
      slug: "roof-replacement",
      description:
        "Complete tear-off and installation with premium materials and a lifetime workmanship guarantee.",
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80&fm=webp",
      seoData: {
        intro: "When repairs are no longer enough, a full roof replacement protects your home for decades. We handle complete tear-offs and re-roofs using premium materials — backed by manufacturer warranties and our own workmanship guarantee.",
        seoBlocks: {
          what: "A roof replacement involves removing your existing roofing system down to the deck and installing a completely new roof. This includes new underlayment, flashing, and roofing material — whether shingles, tile, or metal. It's the most comprehensive solution for a roof that has reached the end of its useful life.",
          why: "Your roof is your home's first line of defense against the elements. When a roof fails, water infiltration can damage ceilings, walls, insulation, and structural framing — repairs that often cost far more than the replacement itself. A new roof also increases home value and improves energy efficiency.",
          when: "If your roof is 20 or more years old, showing widespread shingle deterioration, or has sustained significant damage, replacement is usually the smarter long-term investment. We'll give you an honest assessment — and if repairs can meaningfully extend your roof's life, we'll tell you that instead.",
        },
      },
    },
    {
      name: "Roof Repair",
      slug: "roof-repair",
      description:
        "Fast, reliable repairs for leaks, missing shingles, and weather damage — done right the first time.",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80&fm=webp",
      seoData: {
        intro: "A small leak today becomes a big problem tomorrow. Our repair services address leaks, damaged shingles, flashing failures, and vent issues before they escalate — saving you thousands in potential damage.",
        seoBlocks: {
          what: "Roof repair targets specific areas of damage — missing or cracked shingles, damaged flashing, leaking vents, and failing sealants. Repairs preserve the existing roof by addressing problem spots before they spread, extending the useful life of the overall system.",
          why: "A small roof leak left unaddressed can cause mold growth, wood rot, and insulation damage within weeks. Timely repairs protect your home's interior and prevent what might be a $300 fix from turning into a much larger remediation project.",
          when: "Schedule a repair as soon as you notice a water stain on your ceiling, missing shingles after a storm, or granules accumulating in your gutters. The sooner a problem is addressed, the less damage it causes and the lower the repair cost.",
        },
      },
    },
    {
      name: "Storm Damage Repair",
      slug: "storm-damage-repair",
      description:
        "Emergency response for hail, wind, and monsoon damage. We handle insurance claims for you.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&fm=webp",
      seoData: {
        intro: "Storms can destroy a roof in minutes. We provide emergency tarping, permanent repairs, and full insurance claim assistance — so you can recover fast without the runaround.",
        seoBlocks: {
          what: "Storm damage repair addresses roofing damage caused by hail, high winds, heavy rain, and debris impact. This includes replacing broken or missing shingles, resealing lifted flashing, patching punctures, and emergency tarping to prevent water intrusion until permanent repairs can be made.",
          why: "Storm damage often isn't visible from the ground — but small impacts and lifted shingles can allow significant water infiltration during the next rainfall. Acting quickly protects your home and provides the documentation needed to support an insurance claim.",
          when: "After any significant storm event, have a professional inspection even if you don't see obvious damage. Many insurance claims are denied because damage wasn't reported promptly — don't wait until the next rainfall to find out your roof was compromised.",
        },
      },
    },
    {
      name: "Metal Roofing",
      slug: "metal-roofing",
      description:
        "Energy-efficient metal roofing systems built to withstand Arizona's extreme heat and storms.",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80&fm=webp",
      seoData: {
        intro: "Metal roofs are built for extreme climates — reflecting heat, resisting wind, and lasting 40–70 years with minimal maintenance. We install standing seam, corrugated, and stone-coated steel systems for homes and businesses.",
        seoBlocks: {
          what: "Metal roofing refers to roofing systems made from steel, aluminum, or copper — typically installed as standing seam panels, corrugated sheets, or metal shingles. These systems are engineered for exceptional longevity and weather resistance, far outlasting traditional asphalt shingles.",
          why: "Metal roofs offer a combination of longevity, energy efficiency, and weather resistance that no other roofing material can match. Reflective metal surfaces can reduce cooling costs significantly, and a quality metal roof rarely needs maintenance beyond occasional inspection.",
          when: "Metal roofing is worth considering if your current roof needs replacement and you plan to stay in the home long-term, if energy costs are a concern, or if you want a low-maintenance solution that won't need attention again for decades.",
        },
      },
    },
    {
      name: "Flat Roof Systems",
      slug: "flat-roof-systems",
      description:
        "Expert flat roof installation and repair for commercial and residential properties.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&fm=webp",
      seoData: {
        intro: "Flat roofs require specialized expertise. We install and repair TPO, EPDM, modified bitumen, and foam roof systems — engineered to handle extreme heat and heavy rain.",
        seoBlocks: {
          what: "Flat roof systems use membrane-based materials — such as TPO, EPDM, or modified bitumen — applied across a low-slope surface. Unlike pitched roofing, flat systems rely on proper drainage and seamless waterproofing rather than gravity to manage water runoff.",
          why: "A failing flat roof membrane can allow water to pool and seep into the building with no visible warning until significant damage has occurred. Regular maintenance and timely repair of flat roof systems is essential to protect the structure below.",
          when: "If your flat roof is showing signs of membrane cracking, blistering, ponding water, or visible seam separation, it's time for inspection. Most flat roof membranes have a lifespan of 15–25 years — older systems should be assessed before the next rainy season.",
        },
      },
    },
    {
      name: "Roof Inspection",
      slug: "roof-inspection",
      description:
        "Comprehensive inspections to catch problems early — completely free, no obligation.",
      image: "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=800&q=80&fm=webp",
      seoData: {
        intro: "Whether you're buying a home, preparing to sell, or just want peace of mind — our comprehensive roof inspections catch problems early before they become expensive emergencies.",
        seoBlocks: {
          what: "A professional roof inspection is a systematic evaluation of all roof components — shingles or membrane, flashing, gutters, vents, soffits, and fascia. A trained inspector identifies current damage, signs of wear, and potential failure points before they become urgent problems.",
          why: "Most homeowners don't inspect their roof until there's already a visible problem — by which point damage has often already occurred. A proactive inspection can catch small issues early, extend the life of your roof, and provide documentation that supports insurance claims when storms occur.",
          when: "We recommend inspections once a year, after any significant storm, before purchasing a home, and when your roof is approaching 10–15 years of age. Catching problems early is almost always cheaper than addressing the damage they cause.",
        },
      },
    },
    {
      name: "Commercial Roofing",
      slug: "commercial-roofing",
      description:
        "Full-service commercial roofing for offices, warehouses, retail, and multi-unit properties.",
      image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=800&q=80&fm=webp",
      seoData: {
        intro: "Your commercial roof protects your business, inventory, and employees. We deliver professional-grade roofing solutions for offices, warehouses, retail, and multi-unit properties — with minimal disruption to your operations.",
        seoBlocks: {
          what: "Commercial roofing encompasses the installation, repair, and maintenance of roofing systems on commercial and industrial buildings. This includes flat and low-slope systems such as TPO, EPDM, and modified bitumen, as well as metal roofing for warehouses and large retail structures.",
          why: "A commercial roof failure can disrupt operations, damage inventory, and create liability issues. Unlike residential roofing, commercial systems cover large areas and often protect critical equipment — making regular maintenance and timely repairs essential to business continuity.",
          when: "Commercial roof systems should be inspected at least twice per year and after significant weather events. If you're managing a property with a roof older than 10 years, are seeing water intrusion, or are planning a building renovation, it's time for a professional assessment.",
        },
      },
    },
  ],

  // ── Process Steps ──────────────────────────────────────────────
  processSteps: [
    {
      title: "Request a Free Quote",
      description:
        "Fill out the form or give us a call. We'll schedule a free inspection at a time that works for you.",
    },
    {
      title: "Get a Written Estimate",
      description:
        "We inspect the roof, document everything, and deliver a clear written estimate — no hidden fees, no surprises.",
    },
    {
      title: "We Get to Work",
      description:
        "Our licensed crew completes the job on schedule, cleans up completely, and backs every project with our workmanship guarantee.",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────────
  faq: [
    {
      question: "How long does a roof replacement take?",
      answer:
        "Most residential roof replacements are completed in one to two days. Larger or more complex roofs may take an additional day. We'll give you a firm timeline before work begins.",
    },
    {
      question: "Do you handle insurance claims?",
      answer:
        "Yes. We work with all major insurance carriers and can help document storm or hail damage, communicate with your adjuster, and ensure the claim covers the full scope of repairs.",
    },
    {
      question: "Are you licensed and insured in Arizona?",
      answer:
        "Absolutely. We are fully licensed with the Arizona Registrar of Contractors, bonded, and carry full general liability and workers' compensation insurance on every job.",
    },
    {
      question: "Do you offer free inspections?",
      answer:
        "Yes — we offer free, no-obligation roof inspections for homeowners and property managers. You'll get a written report with photos and honest recommendations, no pressure.",
    },
  ],

  // ── Operating Hours ────────────────────────────────────────────
  operatingHours: [
    { day: "Mon\u2013Fri", hours: "7AM\u20136PM" },
    { day: "Saturday", hours: "8AM\u20134PM" },
    { day: "Sunday", hours: "Closed" },
  ],

  // ── Reviews & Ratings ──────────────────────────────────────────
  averageRating: 5.0,
  totalReviews: 47,

  /** Carousel reviews — shown in ReviewsSection. */
  reviews: [
    {
      author: "James R.",
      rating: 5,
      time: "2 weeks ago",
      text: "Incredibly professional team. They showed up on time, finished ahead of schedule, and the work quality was outstanding. Would highly recommend to anyone in the area.",
    },
    {
      author: "Maria T.",
      rating: 5,
      time: "1 month ago",
      text: "Called in the morning and they had someone out same day. Fixed the issue quickly and the price was very fair. Will definitely be using them again.",
    },
    {
      author: "David K.",
      rating: 5,
      time: "3 weeks ago",
      text: "Best contractor I've worked with. Very knowledgeable, explained everything clearly, and left the workspace cleaner than they found it. 10/10.",
    },
  ],

  /** Featured reviews — shown in SocialProof section on home page. */
  featuredReviews: [
    {
      name: "Sarah M.",
      location: "Phoenix, AZ",
      rating: 5,
      text: "Mike and his crew replaced our entire roof in two days. They were professional, on time, and the price was exactly what they quoted. No surprises. Best roofing experience we've ever had.",
    },
    {
      name: "David R.",
      location: "Scottsdale, AZ",
      rating: 5,
      text: "Had storm damage from a monsoon and they were out the next morning. Filed the insurance claim for us and handled everything. Our roof looks better than it did before the storm.",
    },
    {
      name: "Linda K.",
      location: "Tempe, AZ",
      rating: 5,
      text: "We called three roofers for estimates. Phoenix Roofing & Repair was the most thorough, the most honest, and the most affordable. They earned a customer for life.",
    },
  ],

  // ── Gallery ────────────────────────────────────────────────────

  /** Home page gallery preview — 6 images with alt text. */
  galleryPreview: [
    { src: "https://images.unsplash.com/photo-1632759145351-1d592919f522?w=600&q=80&fm=webp", alt: "Full tile roof replacement" },
    { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&fm=webp", alt: "Completed roofing project" },
    { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&fm=webp", alt: "Storm damage repair" },
    { src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80&fm=webp", alt: "Standing seam metal roof" },
    { src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80&fm=webp", alt: "Commercial flat roof" },
    { src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80&fm=webp", alt: "Residential roof repair" },
  ],

  /** Full gallery page — completed projects grouped by category. */
  galleryProjects: [
    {
      title: "Complete System Replacement",
      category: "Replacement",
      images: [
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&fm=webp",
        "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80&fm=webp",
      ],
    },
    {
      title: "Emergency Repair",
      category: "Repair",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&fm=webp",
      ],
    },
    {
      title: "New Installation",
      category: "Installation",
      images: [
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80&fm=webp",
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80&fm=webp",
      ],
    },
    {
      title: "Commercial Project",
      category: "Commercial",
      images: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&fm=webp",
      ],
    },
    {
      title: "Repair & Restoration",
      category: "Repair",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&fm=webp",
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&fm=webp",
      ],
    },
    {
      title: "Maintenance Service",
      category: "Maintenance",
      images: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80&fm=webp",
      ],
    },
  ],

  // ── Blog Posts ─────────────────────────────────────────────────
  blogPosts: [
    {
      slug: "when-to-replace-your-roof",
      title: "How to Know When It's Time for a Roof Replacement",
      excerpt:
        "Not sure if your roof needs repairs or a full replacement? Here are the most reliable signs that it's time to stop patching and start planning for a new roof — and what to expect from the process.",
      date: "May 14, 2025",
      category: "Tips & Advice",
      readTime: "5 min read",
      content:
        "Your roof doesn't fail all at once — it gives you warning signs. The problem is that most homeowners don't know what to look for, or they keep patching problem areas without stepping back to assess the whole picture. Understanding the difference between a roof that needs repair and one that needs replacement can save you thousands of dollars in avoidable damage.\n\nThe most reliable indicator of end-of-life is age. Most asphalt shingle roofs are designed to last 20–25 years. If yours is approaching or past that mark, even if it looks okay from the street, the underlying materials may be deteriorating in ways that aren't immediately visible. Granule loss — those small mineral fragments that coat shingles — accelerates UV damage once it begins, and you'll often see the evidence accumulating in your gutters or at the base of your downspouts.\n\nCurling, cracking, or missing shingles are another clear signal. A few isolated damaged shingles can be repaired. But if you're seeing widespread curling across multiple roof sections, the shingles are at the end of their useful life and repairs will only delay the inevitable. Similarly, if you've had the same areas repaired multiple times, the underlying deck or flashing may be compromised — and replacement addresses the root cause rather than the symptom.\n\nInside your home, pay attention to your attic. Daylight visible through the roof boards, water stains on the decking, or soft spots underfoot are serious warning signs. Mold or mildew growth in the attic often indicates a chronic moisture problem that repeated surface repairs won't solve. A professional inspection can determine whether the damage is localized or systemic.\n\nFinally, consider your plans for the home. If you're planning to sell within the next few years, a new roof is one of the highest-ROI investments you can make — buyers and their inspectors will flag a failing roof immediately, and it often costs you more in price negotiations than the replacement itself would have. If you're staying long-term, replacing an aging roof on your own timeline is almost always cheaper than replacing it on an emergency basis after a major failure.",
    },
    {
      slug: "prepare-roof-for-storm-season",
      title: "How to Prepare Your Roof for Storm Season",
      excerpt:
        "Storm season brings high winds, heavy rain, and hail that can cause serious damage to an unprepared roof. A little preparation now can save you thousands in repairs later.",
      date: "April 2, 2025",
      category: "Seasonal",
      readTime: "4 min read",
      content:
        "Every year, roofing contractors see the same pattern: homeowners who skipped routine maintenance find themselves dealing with emergency repairs after the first major storm. The good news is that most storm-related roof damage is predictable and preventable. A few hours of preparation before storm season can protect your home and keep you off the emergency repair list.\n\nStart with your gutters. Clogged gutters force water to back up under your roofline, which can cause fascia rot, soffit damage, and eventually water intrusion into the attic or walls. Clean your gutters thoroughly before storm season and make sure downspouts are directing water at least four feet away from your foundation. While you're up there, check that gutters are firmly attached — high winds can tear loose gutters away from the fascia and cause collateral damage.\n\nNext, inspect your roof for existing vulnerabilities. You don't need to walk on the roof — binoculars from the ground can reveal a lot. Look for shingles that are lifting, cracked, or missing. Check the flashing around chimneys, skylights, and vents, as these are the most common entry points for water. Any compromised flashing or sealant should be addressed before storm season, not after.\n\nTrim back any tree branches that hang over your roof. In high winds, branches become projectiles that can puncture roofing material, damage gutters, and leave debris that traps moisture. The general rule is to keep branches at least 10 feet away from the roofline. This also reduces the amount of leaves and organic debris accumulating on the roof surface, which accelerates shingle deterioration over time.\n\nFinally, know what you have and what your coverage includes. Pull out your homeowner's insurance policy before storm season and understand your deductible, your coverage limits, and what the claims process looks like. If you experience storm damage, document everything immediately with photos before any repairs are made — insurance adjusters rely on this documentation, and a reputable contractor can help you navigate the claims process.",
    },
    {
      slug: "signs-roof-needs-repair",
      title: "5 Signs Your Roof Needs Immediate Repair",
      excerpt:
        "Some roof problems can wait. Others can't. These five warning signs mean you should call a roofing contractor as soon as possible — before small damage becomes a major expense.",
      date: "March 18, 2025",
      category: "Tips & Advice",
      readTime: "3 min read",
      content:
        "Not every roof issue is an emergency. But certain warning signs indicate active damage that will get worse with every rainfall — and ignoring them means the repair bill grows while the structural integrity of your home declines. Here are five signs that mean you should call a contractor now, not next month.\n\nThe first is an active leak or water stain. If you see a water stain on your ceiling or wall, water is already inside your home. The stain itself represents past water intrusion, but wherever there's one entry point, there are usually more. A professional inspection will identify the source — which is rarely directly above the stain — and assess how much damage has already occurred.\n\nThe second is daylight in your attic. If you can see streaks of light coming through your roof boards when you're in the attic, your roof has gaps. These gaps admit not just light but water, insects, and outside air, and they'll grow larger with every weather cycle. This is always an urgent repair.\n\nThird: sagging roof deck. A sagging or spongy area on your roof surface suggests that the structural decking underneath has been compromised by moisture. This is a structural issue, not just a cosmetic one, and it needs to be addressed before the affected area fails under the weight of rain or debris.\n\nFourth: granules in your gutters after a storm. While some granule loss is normal, heavy accumulation after a single storm suggests that shingles are failing rapidly. Once shingles lose their granule coating, they deteriorate quickly — this is the beginning of the end for that section of the roof.\n\nFifth: visible damage after a major weather event. After any significant hail storm or high-wind event, have your roof inspected even if you don't see obvious damage from the ground. Hail impacts often aren't visible without getting on the roof, but they compromise the shingles' protective coating and create entry points for water. Many insurance claims are denied because damage wasn't reported and documented promptly — don't wait.",
    },
  ],

  // ── Other ──────────────────────────────────────────────────────
  discountPercent: 10,
} as const;
