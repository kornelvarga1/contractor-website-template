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
  rocLicense: "#123456",
  discountOffer: "10% Off Your First Service",
  heroTagline: "Phoenix's Most Trusted",
  heroSubtagline: "Roofing Contractor",
  heroDescription:
    "Licensed, bonded & insured — protecting Phoenix homes and businesses for over 12 years. No-obligation inspections. Honest pricing. Guaranteed workmanship.",
  services: [
    { name: "Roof Replacement", slug: "roof-replacement" },
    { name: "Roof Repair", slug: "roof-repair" },
    { name: "Storm Damage Repair", slug: "storm-damage-repair" },
    { name: "Metal Roofing", slug: "metal-roofing" },
    { name: "Flat Roof Systems", slug: "flat-roof-systems" },
    { name: "Roof Inspection", slug: "roof-inspection" },
    { name: "Commercial Roofing", slug: "commercial-roofing" },
  ],
  areas: ["Phoenix", "Scottsdale", "Tempe", "Mesa", "Chandler", "Glendale", "Peoria"],
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.8!2d-112.068709!3d33.5231793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s301+E+Bethany+Home+Rd+A-121%2C+Phoenix%2C+AZ+85012!5e0!3m2!1sen!2sus!4v1700000000000",
} as const;
