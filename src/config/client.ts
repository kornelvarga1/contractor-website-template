/**
 * Centralized client configuration.
 *
 * When deploying this template for a new contractor, update the values below
 * instead of hunting through individual components.
 */

export const client = {
  companyName: "Phoenix Roofing & Repair",
  companyNameFull: "Phoenix Roofing and Repair",
  phone: "(602) 497-0154",
  phoneTel: "6024970154",
  email: "mike@phoenixroofingandrepair.com",
  address: {
    street: "301 E Bethany Home Rd A-121",
    city: "Phoenix",
    state: "AZ",
    zip: "85012",
  },
  yearsExperience: 15,
  tagline: "Licensed, Bonded & Insured",
  heroHeadline: "Phoenix's Trusted Roofing Contractor",
  heroSubheadline: "Serving Phoenix homeowners for 15+ years",
  heroCtaText: "Get a Free Quote",
  aboutText:
    "Phoenix Roofing and Repair has been protecting Phoenix homes and businesses for over 15 years. We're a locally owned crew that shows up on time, prices honestly, and stands behind every job. No subcontractors, no surprises.",
  services: [
    {
      name: "Roof Replacement",
      slug: "roof-replacement",
      description:
        "Complete tear-off and installation with premium materials and a lifetime workmanship guarantee.",
    },
    {
      name: "Roof Repair",
      slug: "roof-repair",
      description:
        "Fast, reliable repairs for leaks, missing shingles, and weather damage — done right the first time.",
    },
    {
      name: "Storm Damage Repair",
      slug: "storm-damage-repair",
      description:
        "Emergency response for hail, wind, and monsoon damage. We handle insurance claims for you.",
    },
    {
      name: "Metal Roofing",
      slug: "metal-roofing",
      description:
        "Energy-efficient metal roofing systems built to withstand Arizona's extreme heat and storms.",
    },
    {
      name: "Flat Roof Systems",
      slug: "flat-roof-systems",
      description:
        "Expert flat roof installation and repair for commercial and residential properties.",
    },
    {
      name: "Roof Inspection",
      slug: "roof-inspection",
      description:
        "Comprehensive inspections to catch problems early — completely free, no obligation.",
    },
    {
      name: "Commercial Roofing",
      slug: "commercial-roofing",
      description:
        "Full-service commercial roofing for offices, warehouses, retail, and multi-unit properties.",
    },
  ],
  areas: ["Phoenix", "Scottsdale", "Tempe", "Mesa", "Chandler", "Glendale", "Peoria"],
  operatingHours: [
    { day: "Mon–Fri", hours: "7AM–6PM" },
    { day: "Saturday", hours: "8AM–4PM" },
    { day: "Sunday", hours: "Closed" },
  ],
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
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.8!2d-112.068709!3d33.5231793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s301+E+Bethany+Home+Rd+A-121%2C+Phoenix%2C+AZ+85012!5e0!3m2!1sen!2sus!4v1700000000000",
  googleReviewsUrl: "#",
  averageRating: 5.0,
  totalReviews: 47,
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
} as const;
