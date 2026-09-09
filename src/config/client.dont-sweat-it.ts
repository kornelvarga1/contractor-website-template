export const client = {
  // ── Company ────────────────────────────────────────────────────
  companyName: "Don't Sweat It Heating And Air L.L.C",
  companyNameFull: "Don't Sweat It Heating And Air L.L.C",
  logoMain: "Don't Sweat It",
  logoSub: "Heating & Air",
  logoIcon: "house" as const,
  tradeNoun: "HVAC",
  tradeAdjective: "HVAC",
  schemaType: "HVACBusiness",
  tagline: "Licensed & Insured in Texas",
  rocLicense: "",
  yearsExperience: 0,

  // ── Contact ────────────────────────────────────────────────────
  phone: "(806) 759-8069",
  phoneTel: "8067598069",
  email: "",
  websiteUrl: "",
  googleReviewsUrl: "https://www.google.com/maps/search/Don%27t+Sweat+It+Heating+And+Air+Amarillo+TX",

  // ── Location ───────────────────────────────────────────────────
  address: {
    street: "9612 Sydney Dr",
    city: "Amarillo",
    state: "TX",
    zip: "79119",
  },
  geo: { latitude: 35.1394, longitude: -101.9281 },
  areas: ["Amarillo", "Canyon", "Bushland", "Tascosa", "Dumas", "Pampa", "Hereford"],
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3295.6!2d-101.9281!3d35.1394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s9612+Sydney+Dr%2C+Amarillo%2C+TX+79119!5e0!3m2!1sen!2sus!4v1700000000000",

  // ── Theme ──────────────────────────────────────────────────────
  accentHsl: "196 78% 40%",

  // ── Images ─────────────────────────────────────────────────────
  images: {
    hero: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1600&q=80&fm=webp",
    about: "/images/dont-sweat-it-about.jpg",
    faq: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=800&q=80&fm=webp",
    whyChooseUs: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=960&q=80&fm=webp",
  },

  // ── Home Page Copy ─────────────────────────────────────────────
  heroHeadline: "Amarillo's 24/7 HVAC Experts",
  heroSubheadline: "Fast, honest AC and heating service — day or night.",
  heroCtaText: "Get a Free Quote",
  aboutText:
    "Don't Sweat It Heating And Air is Amarillo's go-to for AC and heating repair. We're locally owned, we show up when we say we will, and we fix the problem right the first time — no misdiagnoses, no runaround. Available 24/7 for emergencies.",

  // ── Why Choose Us Section ──────────────────────────────────────
  whyChooseUs: {
    heading: "Why Amarillo Homeowners Choose Don't Sweat It",
    subtitle:
      "We show up fast, diagnose it right, and fix it the first time — no callbacks, no surprises.",
    imageAlt: "HVAC technician servicing an air conditioning unit in Amarillo, TX",
    benefits: [
      {
        title: "Available 24/7",
        desc: "AC failure at 2am in a Texas summer isn't a morning problem. We answer the phone and show up — any time, any day.",
      },
      {
        title: "Honest Diagnosis",
        desc: "We've fixed systems others misdiagnosed. You'll always get a straight answer about what's actually wrong and what it costs to fix it.",
      },
      {
        title: "On the Route Promptly",
        desc: "When you call, we add you to the schedule and get out to you fast. No days-long wait windows.",
      },
      {
        title: "Heating and Cooling Both",
        desc: "From furnaces and heat pumps to central AC and refrigerant leaks — we handle the full HVAC scope.",
      },
    ],
  },

  // ── Services ───────────────────────────────────────────────────
  services: [
    {
      name: "AC Repair",
      slug: "ac-repair",
      description:
        "Fast diagnosis and repair for any AC issue — refrigerant leaks, compressor failures, frozen coils, and more.",
      image: "https://images.unsplash.com/photo-1566917064245-1c6bff30dbf1?w=800&q=80&fm=webp",
      seoData: {
        intro:
          "When your AC stops cooling, every hour in a Texas summer counts. We diagnose and repair AC systems fast — getting your home back to comfortable without the runaround.",
        seoBlocks: {
          what: "AC repair covers a wide range of issues: refrigerant leaks, compressor failures, frozen evaporator coils, faulty capacitors, blower motor problems, and thermostat malfunctions. Our technicians carry the parts and tools to diagnose and fix most problems in a single visit.",
          why: "A malfunctioning AC doesn't just mean discomfort — in Amarillo summers it can be a safety risk. Delayed repairs also compound: a low refrigerant charge stresses the compressor, and a dirty coil leads to premature system failure. Getting it right the first time saves money in the long run.",
          when: "Call us as soon as you notice your system struggling to cool, blowing warm air, cycling on and off, making unusual noises, or showing ice on the unit. Early repair is almost always cheaper than waiting until the system fails completely.",
        },
      },
    },
    {
      name: "Heating Repair",
      slug: "heating-repair",
      description:
        "Furnace and heating system repair when Amarillo temperatures drop — same-day response available.",
      image: "https://images.unsplash.com/photo-1613970351372-9804e380bd09?w=800&q=80&fm=webp",
      seoData: {
        intro:
          "A broken furnace in a West Texas winter isn't something you wait on. We diagnose and repair gas furnaces, heat pumps, and electric heating systems with the same urgency we bring to summer AC calls.",
        seoBlocks: {
          what: "Heating repair covers gas furnaces, electric furnaces, heat pumps, and other heating systems. Common issues include igniter failures, heat exchanger cracks, blower motor problems, gas valve failures, and thermostat issues. We service all major brands and system types.",
          why: "A failing heating system doesn't just create discomfort — a cracked heat exchanger can allow carbon monoxide into your home, making it a safety emergency. Professional diagnosis ensures the actual problem is found and fixed, not just temporarily masked.",
          when: "If your system won't heat, isn't reaching set temperature, is short-cycling, making banging or scraping noises, or your utility bills have spiked unexpectedly — call us. We're available 24/7 for heating emergencies.",
        },
      },
    },
    {
      name: "AC & Heat Pump Installation",
      slug: "ac-heat-pump-installation",
      description:
        "New system installation sized right for your home — installed clean and backed by our work.",
      image: "https://images.unsplash.com/photo-1776860155275-eee24bfb1dee?w=800&q=80&fm=webp",
      seoData: {
        intro:
          "When repair doesn't make sense anymore, we install new AC units and heat pumps sized correctly for your home — no oversized systems, no shortcuts on the install.",
        seoBlocks: {
          what: "AC and heat pump installation involves removing the existing system, properly sizing the new equipment for your home's load, and installing the indoor and outdoor units with all necessary refrigerant lines, electrical connections, and drainage. A proper installation is what separates a system that lasts 15 years from one that fails in five.",
          why: "An improperly sized or poorly installed system will run inefficiently, struggle to maintain temperature, and fail early. Proper installation — with correct refrigerant charge, airflow balance, and sealed connections — is as important as the equipment itself.",
          when: "Consider replacement when your system is 12+ years old, repair costs exceed half the system's value, efficiency has declined significantly, or you're renovating and the structure's load requirements have changed.",
        },
      },
    },
    {
      name: "HVAC Maintenance & Tune-Up",
      slug: "hvac-maintenance",
      description:
        "Seasonal tune-ups that keep your system efficient and catch small problems before they become big ones.",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80&fm=webp",
      seoData: {
        intro:
          "Regular maintenance is the cheapest HVAC service there is. A seasonal tune-up keeps your system running at peak efficiency, extends its life, and catches developing problems before they become emergency calls.",
        seoBlocks: {
          what: "A maintenance tune-up includes inspecting and cleaning the evaporator and condenser coils, checking refrigerant levels, testing electrical connections, lubricating moving parts, inspecting the heat exchanger, cleaning the drain line, and verifying thermostat calibration.",
          why: "A poorly maintained system uses more energy to deliver less comfort, and small issues left unaddressed become major failures. Regular maintenance typically costs a fraction of one repair call — and it extends the useful life of the system significantly.",
          when: "Schedule AC maintenance in spring before cooling season, and heating system maintenance in fall before temperatures drop. Twice-yearly service keeps both sides of your HVAC system operating correctly year-round.",
        },
      },
    },
    {
      name: "Emergency HVAC Service",
      slug: "emergency-hvac",
      description:
        "24/7 emergency response for AC and heating failures — we answer the call when other contractors don't.",
      image: "https://images.unsplash.com/photo-1700124113583-81aa99ea2aa2?w=800&q=80&fm=webp",
      seoData: {
        intro:
          "HVAC systems don't fail on a convenient schedule. We're available 24 hours a day, 7 days a week, including weekends and holidays — because a broken AC in July or a dead furnace in January can't wait until Monday morning.",
        seoBlocks: {
          what: "Emergency HVAC service covers any AC or heating failure that can't safely wait for a standard appointment. We respond to after-hours calls, diagnose the issue on-site, and make the repair as quickly as possible — often completing the fix in a single visit.",
          why: "Extreme heat is a health risk, especially for children, the elderly, and people with medical conditions. A heating failure in freezing temperatures creates safety concerns and can lead to frozen pipes. Emergency response gets your system running before conditions become dangerous.",
          when: "Call us immediately if your AC stops working during a heat wave, your furnace fails during freezing temperatures, you suspect a gas leak from your heating system, or your system is showing unusual safety concerns like electrical smells or visible damage.",
        },
      },
    },
    {
      name: "Refrigerant Leak Detection & Repair",
      slug: "refrigerant-leak-repair",
      description:
        "We find and fix refrigerant leaks — not just top off the charge and move on.",
      image: "https://images.unsplash.com/photo-1718203862467-c33159fdc504?w=800&q=80&fm=webp",
      seoData: {
        intro:
          "Low refrigerant doesn't mean topping it off and calling it done. We locate the leak, repair it, and recharge the system properly — so you're not calling us back every summer.",
        seoBlocks: {
          what: "Refrigerant leak detection and repair involves using specialized tools to locate the leak source, repairing the leak point — whether that's a pinhole in the copper line, a valve leak, or a weld failure — and recharging the system to factory specifications. Simply adding refrigerant without fixing the leak is a temporary patch at best.",
          why: "A refrigerant leak causes your system to work harder, cool less effectively, and can eventually damage the compressor — the most expensive component in the system. A proper repair solves the underlying problem, not just the symptom.",
          when: "Signs of a refrigerant leak include ice forming on the refrigerant lines or evaporator coil, reduced cooling performance, hissing sounds near the unit, or elevated energy bills. If a previous company just added refrigerant without finding the leak source, call us for a proper diagnosis.",
        },
      },
    },
  ],

  // ── Process Steps ──────────────────────────────────────────────
  processSteps: [
    {
      title: "Call or Request a Quote",
      description:
        "Tell us what's going on. We'll ask a few questions, give you a time window, and get someone on the way — same day when possible.",
    },
    {
      title: "We Diagnose It Right",
      description:
        "Our tech inspects the system, identifies the actual problem, and tells you exactly what it costs to fix before any work starts.",
    },
    {
      title: "Fixed Before We Leave",
      description:
        "We carry common parts on the truck to handle most repairs in a single visit. We double-check everything before we pack up.",
    },
  ],

  // ── FAQ ─────────────────────────────────────────────────────────
  faq: [
    {
      question: "Are you really available 24/7?",
      answer:
        "Yes. We answer the phone and dispatch a technician any time of day or night, including weekends and holidays. We know AC failure in a Texas summer or a dead furnace in January can't wait.",
    },
    {
      question: "What areas near Amarillo do you serve?",
      answer:
        "We serve Amarillo and the surrounding area including Canyon, Bushland, Tascosa, Dumas, Pampa, and Hereford. Not sure if you're in our range? Give us a call and we'll let you know.",
    },
    {
      question: "How often should I have my HVAC system tuned up?",
      answer:
        "Twice a year — once in spring before cooling season and once in fall before heating season. Regular maintenance keeps your system efficient, extends its life, and catches small problems before they turn into emergency calls.",
    },
    {
      question: "My AC is blowing warm air but the system is running. What does that usually mean?",
      answer:
        "Most commonly it's a refrigerant leak, a failed capacitor, or a dirty coil. The only way to know for sure is a proper diagnosis — we don't guess and we don't just add refrigerant without finding the root cause.",
    },
    {
      question: "Can you tell me the cost over the phone?",
      answer:
        "We can give you a ballpark, but accurate pricing requires seeing the system. What we can promise is a clear number before we start any work — no surprises on the invoice.",
    },
  ],

  // ── Operating Hours ────────────────────────────────────────────
  operatingHours: [
    { day: "Mon–Sun", hours: "24 Hours" },
  ],

  // ── Reviews & Ratings ──────────────────────────────────────────
  averageRating: 5.0,
  totalReviews: 4,

  reviews: [
    {
      author: "Araceli P.",
      rating: 5,
      time: "1 year ago",
      text: "Another company misdiagnosed our AC, but Don't Sweat It figured out the real problem and got it fixed. Very thorough, checked everything before they left, and their pricing was very reasonable.",
    },
    {
      author: "Henry P.",
      rating: 5,
      time: "1 year ago",
      text: "Called them and without hesitation they added me to their route and took care of us promptly. Honest and fair company. Highly recommended.",
    },
    {
      author: "Elizabeth M.",
      rating: 5,
      time: "9 months ago",
      text: "Uriel was very informative about my AC situation. He didn't just say replace it — he found exactly where the refrigerant was leaking from and welded it back together. Will always return and refer!",
    },
    {
      author: "Rosa V.",
      rating: 5,
      time: "1 year ago",
      text: "Had them come fix the heater and got it working in no time. Very friendly and on point.",
    },
  ],

  featuredReviews: [
    {
      name: "Araceli Porras",
      location: "Amarillo, TX",
      rating: 5,
      text: "Another company misdiagnosed the issue with our AC unit, but Don't Sweat It quickly identified the real problem and got it fixed. They were incredibly thorough, made sure everything was running correctly, and double-checked everything before they left. Pricing was very reasonable and they were available right away.",
    },
    {
      name: "Elizabeth Montelongo",
      location: "Amarillo, TX",
      rating: 5,
      text: "Uriel was very informative about my AC unit. He didn't just say replace it — he got to work and figured out where all my refrigerant was leaking from and welded it back together. I will always return and refer. Worth every dollar!",
    },
    {
      name: "Henry Paniagua",
      location: "Amarillo, TX",
      rating: 5,
      text: "These guys can get the job done efficiently. I called them and without hesitation they added me to their route and took care of us promptly. They are an honest and fair company. Highly recommended.",
    },
  ],

  // ── Gallery ────────────────────────────────────────────────────
  galleryPreview: [
    { src: "https://images.unsplash.com/photo-1776860150272-653efc74193c?w=600&q=80&fm=webp", alt: "Modern heat pump unit installation" },
    { src: "https://images.unsplash.com/photo-1776860150305-108ed577d7d4?w=600&q=80&fm=webp", alt: "Outdoor heat pump next to building" },
    { src: "https://images.unsplash.com/photo-1566917064245-1c6bff30dbf1?w=600&q=80&fm=webp", alt: "Outdoor AC condenser unit" },
    { src: "https://images.unsplash.com/photo-1558358235-a0a93f68a52c?w=600&q=80&fm=webp", alt: "Air vent close-up" },
    { src: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=600&q=80&fm=webp", alt: "Smart thermostat" },
    { src: "https://images.unsplash.com/photo-1613970351372-9804e380bd09?w=600&q=80&fm=webp", alt: "Furnace service and repair" },
  ],

  galleryProjects: [
    {
      title: "Heat Pump Installation",
      category: "Installation",
      images: [
        "https://images.unsplash.com/photo-1776860155275-eee24bfb1dee?w=800&q=80&fm=webp",
        "https://images.unsplash.com/photo-1776860150272-653efc74193c?w=800&q=80&fm=webp",
      ],
    },
    {
      title: "AC Repair – Refrigerant Leak",
      category: "Repair",
      images: [
        "https://images.unsplash.com/photo-1566917064245-1c6bff30dbf1?w=800&q=80&fm=webp",
        "https://images.unsplash.com/photo-1718203862467-c33159fdc504?w=800&q=80&fm=webp",
      ],
    },
    {
      title: "Furnace Repair",
      category: "Repair",
      images: [
        "https://images.unsplash.com/photo-1613970351372-9804e380bd09?w=800&q=80&fm=webp",
      ],
    },
    {
      title: "New AC System Installation",
      category: "Installation",
      images: [
        "https://images.unsplash.com/photo-1700124113583-81aa99ea2aa2?w=800&q=80&fm=webp",
        "https://images.unsplash.com/photo-1776860150305-108ed577d7d4?w=800&q=80&fm=webp",
      ],
    },
    {
      title: "HVAC Maintenance Service",
      category: "Maintenance",
      images: [
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80&fm=webp",
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80&fm=webp",
      ],
    },
    {
      title: "Thermostat Upgrade",
      category: "Installation",
      images: [
        "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=800&q=80&fm=webp",
        "https://images.unsplash.com/photo-1515974256630-babc85765b1d?w=800&q=80&fm=webp",
      ],
    },
  ],

  // ── Blog Posts ─────────────────────────────────────────────────
  blogPosts: [
    {
      slug: "how-often-should-you-service-hvac-amarillo",
      title: "How Often Should You Service Your HVAC System in Amarillo?",
      excerpt:
        "West Texas puts HVAC systems through their paces — blazing summers, cold winters, and dusty air year-round. Here's how to keep your system running well and avoid expensive emergency calls.",
      date: "April 10, 2025",
      category: "Tips & Advice",
      readTime: "4 min read",
      content:
        "Amarillo's climate is harder on HVAC equipment than most people realize. Hot, dry summers push AC systems to run long hours at high capacity. Winters bring cold snaps that demand reliable heat. And the Texas panhandle's dust and wind mean filters clog faster and outdoor units accumulate debris that degrades efficiency. Regular maintenance isn't optional here — it's what keeps a system running for 15 years instead of 8.\n\nThe standard recommendation is twice yearly: an AC tune-up in spring before cooling season starts, and a heating system check in fall before temperatures drop. These visits aren't just filter swaps. A proper maintenance call includes inspecting electrical connections, checking refrigerant levels, cleaning coils, clearing the condensate drain, testing the igniter or heat exchanger, and verifying thermostat calibration. Each item on that list is something that can quietly degrade performance or cause a sudden failure if left unchecked.\n\nBetween service visits, there are things homeowners can do themselves. Changing your air filter every 1–3 months is the single highest-impact maintenance task — a clogged filter starves the system of airflow, stresses the blower motor, and lets dirt reach the evaporator coil. Keep the area around your outdoor unit clear of debris, especially after Amarillo wind events. Pay attention to how your system sounds and feels — unusual noises, weak airflow, or the system running longer than it used to are early warning signs worth calling about.\n\nThe economics of maintenance are straightforward. A twice-yearly service call costs a fraction of a single repair visit, and significantly less than an early equipment replacement. The systems that last longest are almost always the ones that get regular attention — not because they're different equipment, but because problems get caught early before they cascade into major failures.\n\nIf you're not sure when your system was last serviced — or if it's been more than a year — schedule a tune-up before the next season hits. In Amarillo's climate, you don't want to find out your system has a problem on the first 100-degree day of July.",
    },
    {
      slug: "ac-needs-repair-not-just-refrigerant",
      title: "Your AC Needs Repair — Not Just a Refrigerant Top-Off",
      excerpt:
        "If a previous company just added Freon and called it done, the leak is still there. Here's how to tell the difference between a real fix and a temporary patch.",
      date: "May 22, 2025",
      category: "Tips & Advice",
      readTime: "4 min read",
      content:
        "One of the most common patterns we see in Amarillo is homeowners who've had their AC 'serviced' by another company — refrigerant added, system cooling again — only to call us the following summer with the same problem. The reason is simple: adding refrigerant without finding the leak doesn't fix anything. It just delays the next failure.\n\nRefrigerant doesn't get consumed the way fuel does. A properly sealed AC system holds the same charge for the life of the equipment. If your system is low on refrigerant, there's a leak somewhere — and that leak needs to be found and repaired, not covered up with more refrigerant.\n\nA technician who adds refrigerant and moves on is doing you a disservice. The leak will continue, your system will work harder and harder to maintain temperature, and eventually the compressor — the most expensive component in the system — will fail from running in a low-refrigerant condition.\n\nFinding a refrigerant leak requires the right equipment and some patience. We use electronic leak detectors and UV dye to locate pinhole leaks in copper lines, coil connections, and valve cores. Once the leak is found, it gets repaired — welded shut or the damaged component replaced — before we recharge the system. We verify it holds pressure before we leave.\n\nThe signs of a slow refrigerant leak are worth knowing: your AC runs longer and longer to cool the house, the air isn't as cold as it used to be, ice appears on the refrigerant lines or evaporator coil, and your energy bills creep up without explanation. If any of these sound familiar and you've had refrigerant added in the past, call us for a proper diagnosis. The repair is almost always less expensive than the alternative.",
    },
    {
      slug: "repair-or-replace-ac-amarillo",
      title: "Repair or Replace? How to Decide on Your Amarillo AC System",
      excerpt:
        "A failing AC puts homeowners in a tough spot. Here's how to think through the repair-vs-replace decision honestly — and what questions to ask your HVAC tech.",
      date: "June 5, 2025",
      category: "Tips & Advice",
      readTime: "5 min read",
      content:
        "The repair-or-replace question comes up for almost every AC system eventually, and it's one of the most important decisions you'll make as a homeowner. In Amarillo's climate, where systems run hard for months at a time, getting it right matters — both for your comfort and your wallet.\n\nThe most reliable rule of thumb is the 5,000 rule: multiply the system's age by the repair cost. If that number is more than $5,000, replacement is usually the better value. A 10-year-old system facing a $600 repair hits $6,000 — which suggests it's time to start thinking about replacement. A 3-year-old system with the same repair cost ($1,800) is clearly worth fixing.\n\nAge alone matters too. Most central AC systems in Texas are rated for 12–15 years of service, but Amarillo's long cooling seasons and dust mean some systems reach the end of their useful life earlier. A system that's 12 or more years old and facing any significant repair is worth getting a replacement quote before you commit to the fix.\n\nEfficiency is a factor that often goes overlooked. Older systems may be 10–12 SEER rated; newer equipment starts at 14 SEER and goes higher. Depending on your usage, the energy savings from a more efficient system can offset the replacement cost over 5–8 years — especially in a climate where you're running the AC from May through October.\n\nWhere it gets complicated is compressor failure. A bad compressor is usually a $1,500–$2,500 repair, and on a system that's more than 8 years old, it rarely makes sense. The compressor failing is often a sign the rest of the system has been under similar stress — you might fix the compressor only to have the coil or condenser fail a year later.\n\nOur approach is always to give you honest information about the system's condition — its age, efficiency, any other components showing wear — and let you make an informed decision. We never push replacement when repair is genuinely the better call.",
    },
  ],

  discountPercent: 10,
} as const;
