import { useParams, Link, Navigate } from "react-router-dom";
import { Phone, CheckCircle, Star, Shield, Clock, Award } from "lucide-react";

interface LocationData {
  city: string;
  metaTitle: string;
  description: string;
  h1Line1: string;
  h1Line2: string;
  intro: string;
  localSignals: string[];
}

const services = [
  { name: "Roof Replacement", slug: "roof-replacement", desc: "Complete tear-off and re-roof with premium materials." },
  { name: "Roof Repair", slug: "roof-repair", desc: "Fast, reliable repairs for leaks and damage." },
  { name: "Storm Damage Repair", slug: "storm-damage-repair", desc: "Emergency response and insurance claim support." },
  { name: "Metal Roofing", slug: "metal-roofing", desc: "Energy-efficient metal roofing systems." },
  { name: "Flat Roof Systems", slug: "flat-roof-systems", desc: "TPO, EPDM, and foam flat roof solutions." },
  { name: "Roof Inspection", slug: "roof-inspection", desc: "Free, no-obligation professional inspections." },
  { name: "Commercial Roofing", slug: "commercial-roofing", desc: "Professional roofing for businesses." },
];

const locationData: Record<string, LocationData> = {
  phoenix: {
    city: "Phoenix",
    metaTitle: "Roofing Contractor Phoenix AZ | Phoenix Roofing and Repair",
    description: "Trusted roofing contractor in Phoenix, AZ. Roof replacement, repair, storm damage. Licensed, bonded & insured. Free estimates.",
    h1Line1: "Phoenix's Most Trusted",
    h1Line2: "Roofing Contractor",
    intro: "Serving homeowners and businesses across Phoenix with honest, high-quality roofing work for over 12 years. Licensed, bonded, and insured — we're the local roofer Phoenix trusts.",
    localSignals: ["Headquartered in Phoenix since 2012", "Hundreds of Phoenix homes protected", "Same-day service for Phoenix residents", "5-star rated by Phoenix homeowners"],
  },
  scottsdale: {
    city: "Scottsdale",
    metaTitle: "Roofing Contractor Scottsdale AZ | Phoenix Roofing and Repair",
    description: "Expert roofing services in Scottsdale, AZ. Repairs, replacements, metal roofing. Licensed contractor. Free estimates.",
    h1Line1: "Expert Roofing Services",
    h1Line2: "in Scottsdale, AZ",
    intro: "Scottsdale homeowners deserve a roofer who respects their property and delivers quality craftsmanship. We provide premium roofing services throughout Scottsdale — from North Scottsdale estates to Old Town businesses.",
    localSignals: ["Serving Scottsdale homes for 12+ years", "Experienced with tile and luxury roofing", "Fast response for Scottsdale properties", "Licensed, bonded & insured in Arizona"],
  },
  tempe: {
    city: "Tempe",
    metaTitle: "Roofing Contractor Tempe AZ | Phoenix Roofing and Repair",
    description: "Reliable roofing contractor in Tempe, AZ. Roof repair, replacement, and inspections. Licensed & insured. Free estimates.",
    h1Line1: "Reliable Roofing Contractor",
    h1Line2: "Serving Tempe, AZ",
    intro: "From ASU-area rentals to established Tempe neighborhoods, we deliver dependable roofing services at fair prices. Our crew knows Tempe roofs — and we treat every home like our own.",
    localSignals: ["Trusted by Tempe homeowners", "Familiar with Tempe building codes", "Quick response times in Tempe", "No-obligation estimates for Tempe residents"],
  },
  mesa: {
    city: "Mesa",
    metaTitle: "Roofing Contractor Mesa AZ | Phoenix Roofing and Repair",
    description: "Professional roofing services in Mesa, AZ. Repairs, replacements, storm damage. Licensed contractor. Free inspections.",
    h1Line1: "Professional Roofing",
    h1Line2: "for Mesa Homeowners",
    intro: "Mesa is one of the fastest-growing cities in Arizona — and we've been protecting Mesa roofs through every monsoon season. From East Mesa to downtown, we deliver quality roofing at honest prices.",
    localSignals: ["Serving Mesa for over a decade", "Storm damage specialists in Mesa", "Fast turnaround for Mesa projects", "Trusted by Mesa property managers"],
  },
  chandler: {
    city: "Chandler",
    metaTitle: "Roofing Contractor Chandler AZ | Phoenix Roofing and Repair",
    description: "Trusted roofing services in Chandler, AZ. Residential & commercial. Licensed, bonded & insured. Free estimates.",
    h1Line1: "Trusted Roofing Services",
    h1Line2: "in Chandler, AZ",
    intro: "Chandler families trust us to keep their homes safe and dry. We provide full-service residential and commercial roofing with transparent pricing, quality materials, and workmanship you can count on.",
    localSignals: ["Protecting Chandler homes since 2012", "Residential and commercial Chandler projects", "Same-day inspections in Chandler", "Five-star reviews from Chandler customers"],
  },
  glendale: {
    city: "Glendale",
    metaTitle: "Roofing Contractor Glendale AZ | Phoenix Roofing and Repair",
    description: "Expert roofing contractor in Glendale, AZ. Roof repair, replacement, metal roofing. Licensed & insured. Free estimates.",
    h1Line1: "Expert Roofing Contractor",
    h1Line2: "in Glendale, AZ",
    intro: "Glendale homeowners rely on us for straightforward roofing work — no gimmicks, no pressure. Whether it's a small repair or a full replacement, we deliver honest service at fair prices.",
    localSignals: ["Serving Glendale neighborhoods for years", "Experienced with Glendale roof types", "Fast, reliable Glendale service", "Licensed, bonded & insured"],
  },
  peoria: {
    city: "Peoria",
    metaTitle: "Roofing Contractor Peoria AZ | Phoenix Roofing and Repair",
    description: "Reliable roofing services in Peoria, AZ. Repairs, replacements, inspections. Licensed contractor. Free estimates.",
    h1Line1: "Reliable Roofing",
    h1Line2: "for Peoria, AZ",
    intro: "From the established neighborhoods of Old Town Peoria to the newer developments in Vistancia, we provide professional roofing services with a personal touch. Quality work, fair pricing, zero pressure.",
    localSignals: ["Trusted by Peoria homeowners", "Familiar with Peoria's growth areas", "Quick response in Peoria", "No-obligation inspections available"],
  },
};

const LocationPage = () => {
  const { city } = useParams<{ city: string }>();
  const data = city ? locationData[city] : undefined;

  if (!data) return <Navigate to="/404" replace />;

  return (
    <>
      {/* Hero with dark gradient (no background image per performance rules) */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            {data.h1Line1}<br />
            {data.h1Line2}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/70">{data.intro}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="inline-flex h-11 items-center justify-center rounded-sm bg-accent px-8 text-base font-bold text-accent-foreground shadow hover:bg-accent/90 transition-colors">
              Get Your Free Estimate
            </Link>
            <a href="tel:6024970154" className="inline-flex items-center justify-center gap-2 text-base font-bold text-primary-foreground hover:text-accent transition-colors">
              <Phone className="h-4 w-4" /> (602) 497-0154
            </a>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="border-b border-border bg-background py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 lg:gap-10">
          {[
            { icon: Shield, label: "Licensed & Insured" },
            { icon: Award, label: "12+ Years Experience" },
            { icon: Star, label: "5-Star Rated" },
            { icon: Clock, label: "Same-Day Service" },
          ].map((t) => (
            <div key={t.label} className="flex items-center gap-2 text-sm font-medium text-foreground">
              <t.icon className="h-4 w-4 text-accent" />
              {t.label}
            </div>
          ))}
        </div>
      </section>

      {/* Services in this area */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Roofing Services in {data.city}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="group rounded-sm border border-border bg-card p-5 shadow-sm transition-colors hover:border-accent">
                <h3 className="font-semibold text-card-foreground group-hover:text-accent transition-colors">{s.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local trust */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Why {data.city} Homeowners Choose Us
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {data.localSignals.map((s) => (
              <li key={s} className="flex items-start gap-3">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-foreground/80">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
            Get a Free Roof Inspection in {data.city}
          </h2>
          <p className="mt-3 text-primary-foreground/70">No obligation. Transparent pricing. Fast response.</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/contact" className="inline-flex h-11 items-center rounded-sm bg-accent px-8 text-base font-bold text-accent-foreground shadow hover:bg-accent/90 transition-colors">
              Get Your Free Estimate
            </Link>
            <a href="tel:6024970154" className="inline-flex items-center gap-2 text-base font-bold text-primary-foreground hover:text-accent transition-colors">
              <Phone className="h-4 w-4" /> (602) 497-0154
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationPage;
