import { useParams, Link, Navigate } from "react-router-dom";
import { Phone, CheckCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

interface ServiceData {
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  benefits: string[];
  process: { step: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

const serviceData: Record<string, ServiceData> = {
  "roof-replacement": {
    title: "Roof Replacement",
    metaTitle: "Roof Replacement Phoenix AZ | Phoenix Roofing and Repair",
    description: "Full roof replacement services in Phoenix, AZ. Licensed, bonded & insured. Free estimates. 12+ years experience.",
    intro: "When repairs are no longer enough, a full roof replacement protects your home for decades. We handle complete tear-offs and re-roofs using premium materials — backed by manufacturer warranties and our own workmanship guarantee.",
    benefits: ["Complete tear-off and disposal included", "Premium shingles, tile, or metal options", "Manufacturer warranties up to 50 years", "Typical completion in 2–4 days", "Clean jobsite guaranteed — we treat your home like ours"],
    process: [
      { step: "Free Inspection", desc: "We assess your current roof and document everything with photos." },
      { step: "Written Estimate", desc: "You get a detailed, transparent quote — no hidden fees." },
      { step: "Material Selection", desc: "Choose from top-rated roofing materials that fit your budget." },
      { step: "Professional Install", desc: "Our experienced crew completes the work on schedule." },
      { step: "Final Walkthrough", desc: "We inspect everything with you before the job is closed." },
    ],
    faqs: [
      { q: "How long does a roof replacement take?", a: "Most residential roof replacements are completed in 2–4 days, depending on the size and complexity of your roof." },
      { q: "What roofing materials do you offer?", a: "We install asphalt shingles, concrete and clay tile, metal roofing, and flat roof systems. We'll recommend the best option for your home and budget." },
      { q: "Do you handle permits?", a: "Yes. We pull all necessary permits and ensure the work meets local building codes." },
      { q: "Will my homeowner's insurance cover it?", a: "If your roof was damaged by a covered event (storm, hail, etc.), your insurance may cover part or all of the replacement. We can help you navigate the claims process." },
    ],
  },
  "roof-repair": {
    title: "Roof Repair",
    metaTitle: "Roof Repair Phoenix AZ | Phoenix Roofing and Repair",
    description: "Fast, reliable roof repair in Phoenix. Fix leaks, damaged shingles, and more. Licensed contractor. Free estimates.",
    intro: "A small leak today becomes a big problem tomorrow. Our repair services address leaks, damaged shingles, flashing failures, and vent issues before they escalate — saving you thousands in potential damage.",
    benefits: ["Same-day emergency repairs available", "Fix leaks, cracked tiles, and blown-off shingles", "Honest assessment — we repair what's needed, nothing more", "All repairs backed by workmanship warranty", "Photo documentation of all work performed"],
    process: [
      { step: "Report the Issue", desc: "Call us or submit a form — we respond within 2 hours." },
      { step: "On-Site Assessment", desc: "We inspect the damage and explain your repair options." },
      { step: "Same-Day Repair", desc: "Most repairs are completed the same day we arrive." },
      { step: "Quality Check", desc: "We verify the fix and provide photo documentation." },
    ],
    faqs: [
      { q: "How quickly can you respond to a roof leak?", a: "We offer same-day service for emergency leaks. Call (602) 497-0154 and we'll prioritize your repair." },
      { q: "Is it worth repairing an old roof?", a: "It depends on the extent of the damage. We'll give you an honest assessment — if repairs can extend your roof's life by several years, we'll tell you. If replacement makes more sense, we'll explain why." },
      { q: "Do you repair all roof types?", a: "Yes — shingle, tile, metal, and flat roofs. We've seen and fixed it all." },
    ],
  },
  "storm-damage-repair": {
    title: "Storm Damage Repair",
    metaTitle: "Storm Damage Roof Repair Phoenix | Phoenix Roofing and Repair",
    description: "Emergency storm damage roof repair in Phoenix. Hail, wind, and monsoon damage. Insurance claim assistance. Free inspection.",
    intro: "Arizona monsoons and hailstorms can destroy a roof in minutes. We provide emergency tarping, permanent repairs, and full insurance claim assistance — so you can recover fast without the runaround.",
    benefits: ["Emergency tarping to prevent further damage", "Full insurance claim documentation and assistance", "Hail, wind, and water damage specialists", "Fast turnaround — most repairs in 1–3 days", "We work with all major insurance carriers"],
    process: [
      { step: "Emergency Call", desc: "Contact us immediately after storm damage — we respond 24/7." },
      { step: "Damage Assessment", desc: "We inspect and document all damage with detailed photos." },
      { step: "Insurance Coordination", desc: "We provide your adjuster with everything they need." },
      { step: "Permanent Repair", desc: "Once approved, we complete the repairs quickly and correctly." },
    ],
    faqs: [
      { q: "Should I file an insurance claim for storm damage?", a: "If the damage is significant, yes. We'll help you document everything and work directly with your adjuster to maximize your claim." },
      { q: "How soon can you get to my property after a storm?", a: "We prioritize emergency calls and can typically be on-site within 24 hours of a major storm event." },
      { q: "Do you offer emergency tarping?", a: "Yes. We'll tarp your roof immediately to prevent further water intrusion while permanent repairs are scheduled." },
    ],
  },
  "metal-roofing": {
    title: "Metal Roofing",
    metaTitle: "Metal Roofing Phoenix AZ | Phoenix Roofing and Repair",
    description: "Metal roofing installation in Phoenix. Energy efficient, durable, 40+ year lifespan. Free estimates from licensed contractor.",
    intro: "Metal roofs are built for the Arizona climate — reflecting heat, resisting wind, and lasting 40–70 years with minimal maintenance. We install standing seam, corrugated, and stone-coated steel systems for homes and businesses.",
    benefits: ["40–70 year lifespan — outlasts traditional roofing 2–3x", "Reflects solar heat, reducing cooling costs up to 25%", "Wind resistant up to 140 mph", "Fire-resistant (Class A rated)", "Low maintenance — no cracking, curling, or rotting"],
    process: [
      { step: "Consultation", desc: "We assess your roof and discuss metal roofing options." },
      { step: "Material Selection", desc: "Choose from standing seam, corrugated, or stone-coated steel." },
      { step: "Professional Install", desc: "Precision installation by our experienced metal roofing crew." },
      { step: "Final Inspection", desc: "We verify every seam and fastener before closing the job." },
    ],
    faqs: [
      { q: "Is metal roofing noisy when it rains?", a: "No. Modern metal roofs installed over solid decking and underlayment are no louder than any other roofing material." },
      { q: "Does metal roofing cost more than shingles?", a: "The upfront cost is higher, but metal roofs last 2–3x longer and reduce energy costs — making them more economical over time." },
      { q: "Can you install a metal roof over my existing roof?", a: "In many cases, yes. We'll inspect your current roof to determine if an overlay is appropriate." },
    ],
  },
  "flat-roof-systems": {
    title: "Flat Roof Systems",
    metaTitle: "Flat Roof Repair & Installation Phoenix | Phoenix Roofing and Repair",
    description: "Flat roof installation and repair in Phoenix. TPO, EPDM, and modified bitumen. Commercial & residential. Free estimates.",
    intro: "Flat roofs require specialized expertise. We install and repair TPO, EPDM, modified bitumen, and foam roof systems — engineered for Arizona's extreme heat and monsoon rains.",
    benefits: ["TPO, EPDM, modified bitumen, and foam systems", "Energy-efficient cool-roof options", "Ponding water solutions and proper drainage", "Commercial and residential applications", "Full waterproofing warranties"],
    process: [
      { step: "Roof Assessment", desc: "We evaluate drainage, membrane condition, and structural integrity." },
      { step: "System Recommendation", desc: "We recommend the right flat roof system for your building." },
      { step: "Expert Installation", desc: "Precision installation with attention to seams and flashings." },
      { step: "Leak Testing", desc: "We verify watertight integrity before project completion." },
    ],
    faqs: [
      { q: "Which flat roof system is best for Arizona?", a: "TPO and foam roofs are popular choices for Arizona due to their heat-reflective properties and durability. We'll recommend the best option for your specific situation." },
      { q: "How long does a flat roof last?", a: "With proper installation and maintenance, flat roofs typically last 15–25 years depending on the system used." },
      { q: "Can you fix ponding water on my flat roof?", a: "Yes. We address drainage issues by adding tapered insulation, additional drains, or re-sloping as needed." },
    ],
  },
  "roof-inspection": {
    title: "Roof Inspection",
    metaTitle: "Free Roof Inspection Phoenix AZ | Phoenix Roofing and Repair",
    description: "Free, no-obligation roof inspections in Phoenix. Licensed inspector. Photo-documented report. Same-day availability.",
    intro: "Whether you're buying a home, preparing to sell, or just want peace of mind — our comprehensive roof inspections catch problems early before they become expensive emergencies.",
    benefits: ["100% free, no-obligation inspection", "Detailed photo-documented report", "Same-day availability in most cases", "Honest assessment — no pressure to buy", "Identifies leaks, wear, and structural issues"],
    process: [
      { step: "Schedule", desc: "Call or submit a form — most inspections are same-day." },
      { step: "On-Site Inspection", desc: "We check every component: shingles, flashing, vents, gutters, and structure." },
      { step: "Photo Report", desc: "You receive a detailed report with photos and recommendations." },
      { step: "Your Decision", desc: "No pressure. You decide if and when to take action." },
    ],
    faqs: [
      { q: "Is the roof inspection really free?", a: "Yes — 100% free with no obligation. We believe in earning your trust, not pressuring you into a sale." },
      { q: "How long does an inspection take?", a: "Most residential inspections take 30–60 minutes depending on the size and accessibility of your roof." },
      { q: "Should I get an inspection before buying a home?", a: "Absolutely. A roof inspection can reveal costly hidden damage that a general home inspection might miss." },
    ],
  },
  "commercial-roofing": {
    title: "Commercial Roofing",
    metaTitle: "Commercial Roofing Phoenix AZ | Phoenix Roofing and Repair",
    description: "Commercial roofing services in Phoenix. Flat roofs, metal roofing, repairs & maintenance. Licensed contractor. Free estimates.",
    intro: "Your commercial roof protects your business, inventory, and employees. We deliver professional-grade roofing solutions for offices, warehouses, retail, and multi-unit properties — with minimal disruption to your operations.",
    benefits: ["Flat roof, metal, and built-up roofing systems", "Minimal disruption to your business operations", "Preventive maintenance programs available", "Emergency leak response for commercial properties", "Competitive pricing for property managers and building owners"],
    process: [
      { step: "Site Survey", desc: "We assess your commercial property and roofing needs." },
      { step: "Proposal", desc: "You receive a detailed scope of work and transparent pricing." },
      { step: "Scheduled Install", desc: "We work around your business hours to minimize disruption." },
      { step: "Ongoing Support", desc: "Optional maintenance plans to extend roof life." },
    ],
    faqs: [
      { q: "Do you work on weekends to avoid disrupting business?", a: "Yes. We can schedule work during off-hours, weekends, or in phases to keep your business running smoothly." },
      { q: "Do you offer maintenance contracts?", a: "Yes. Our preventive maintenance programs include regular inspections and minor repairs to extend your roof's lifespan and prevent costly emergencies." },
      { q: "What types of commercial roofs do you install?", a: "TPO, EPDM, modified bitumen, metal, and built-up roofing systems. We'll recommend the best system for your building type and budget." },
    ],
  },
};

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-4 text-left text-sm font-semibold text-foreground">
        {q}
        <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="pb-4 text-sm text-muted-foreground leading-relaxed">{a}</p>}
    </div>
  );
};

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? serviceData[slug] : undefined;

  if (!data) return <Navigate to="/404" replace />;

  return (
    <>
      {/* Text-first hero */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            {data.title} in Phoenix, AZ
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

      {/* Benefits */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">What's Included</h2>
              <ul className="mt-6 space-y-3">
                {data.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <span className="text-muted-foreground">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Our Process</h2>
              <ol className="mt-6 space-y-4">
                {data.process.map((p, i) => (
                  <li key={p.step} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">{i + 1}</span>
                    <div>
                      <p className="font-semibold text-foreground">{p.step}</p>
                      <p className="text-sm text-muted-foreground">{p.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-6">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Frequently Asked Questions</h2>
          <div className="mt-8">
            {data.faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
            Ready to Get Started?
          </h2>
          <p className="mt-3 text-primary-foreground/70">Free inspection. Transparent pricing. No obligation.</p>
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

export default ServicePage;
