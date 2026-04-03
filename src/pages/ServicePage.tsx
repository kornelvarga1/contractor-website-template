import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { client } from "@/config/client";
import PageBottomStack from "@/components/shared/PageBottomStack";
import { WaveDivider } from "@/components/shared/Dividers";
import { useQuoteModal } from "@/hooks/useQuoteModal";
import ScrollReveal from "@/components/ScrollReveal";

interface SeoBlocks {
  what: string;
  why: string;
  when: string;
}

interface ServiceData {
  title: string;
  metaTitle: string;
  description: string;
  intro: string;
  seoBlocks: SeoBlocks;
}

const { address } = client;
const cityState = `${address.city}, ${address.state}`;

const serviceData: Record<string, ServiceData> = {
  "roof-replacement": {
    title: "Roof Replacement",
    metaTitle: `Roof Replacement ${cityState} | ${client.companyNameFull}`,
    description: `Full roof replacement services in ${cityState}. Licensed, bonded & insured. Free estimates. ${client.yearsExperience}+ years experience.`,
    intro: "When repairs are no longer enough, a full roof replacement protects your home for decades. We handle complete tear-offs and re-roofs using premium materials — backed by manufacturer warranties and our own workmanship guarantee.",
    seoBlocks: {
      what: "A roof replacement involves removing your existing roofing system down to the deck and installing a completely new roof. This includes new underlayment, flashing, and roofing material — whether shingles, tile, or metal. It's the most comprehensive solution for a roof that has reached the end of its useful life.",
      why: "Your roof is your home's first line of defense against the elements. When a roof fails, water infiltration can damage ceilings, walls, insulation, and structural framing — repairs that often cost far more than the replacement itself. A new roof also increases home value and improves energy efficiency.",
      when: "If your roof is 20 or more years old, showing widespread shingle deterioration, or has sustained significant damage, replacement is usually the smarter long-term investment. We'll give you an honest assessment — and if repairs can meaningfully extend your roof's life, we'll tell you that instead.",
    },
  },
  "roof-repair": {
    title: "Roof Repair",
    metaTitle: `Roof Repair ${cityState} | ${client.companyNameFull}`,
    description: `Fast, reliable roof repair in ${address.city}. Fix leaks, damaged shingles, and more. Licensed contractor. Free estimates.`,
    intro: "A small leak today becomes a big problem tomorrow. Our repair services address leaks, damaged shingles, flashing failures, and vent issues before they escalate — saving you thousands in potential damage.",
    seoBlocks: {
      what: "Roof repair targets specific areas of damage — missing or cracked shingles, damaged flashing, leaking vents, and failing sealants. Repairs preserve the existing roof by addressing problem spots before they spread, extending the useful life of the overall system.",
      why: "A small roof leak left unaddressed can cause mold growth, wood rot, and insulation damage within weeks. Timely repairs protect your home's interior and prevent what might be a $300 fix from turning into a much larger remediation project.",
      when: "Schedule a repair as soon as you notice a water stain on your ceiling, missing shingles after a storm, or granules accumulating in your gutters. The sooner a problem is addressed, the less damage it causes and the lower the repair cost.",
    },
  },
  "storm-damage-repair": {
    title: "Storm Damage Repair",
    metaTitle: `Storm Damage Roof Repair ${address.city} | ${client.companyNameFull}`,
    description: `Emergency storm damage roof repair in ${address.city}. Hail, wind, and storm damage. Insurance claim assistance. Free inspection.`,
    intro: "Storms can destroy a roof in minutes. We provide emergency tarping, permanent repairs, and full insurance claim assistance — so you can recover fast without the runaround.",
    seoBlocks: {
      what: "Storm damage repair addresses roofing damage caused by hail, high winds, heavy rain, and debris impact. This includes replacing broken or missing shingles, resealing lifted flashing, patching punctures, and emergency tarping to prevent water intrusion until permanent repairs can be made.",
      why: "Storm damage often isn't visible from the ground — but small impacts and lifted shingles can allow significant water infiltration during the next rainfall. Acting quickly protects your home and provides the documentation needed to support an insurance claim.",
      when: "After any significant storm event, have a professional inspection even if you don't see obvious damage. Many insurance claims are denied because damage wasn't reported promptly — don't wait until the next rainfall to find out your roof was compromised.",
    },
  },
  "metal-roofing": {
    title: "Metal Roofing",
    metaTitle: `Metal Roofing ${cityState} | ${client.companyNameFull}`,
    description: `Metal roofing installation in ${address.city}. Energy efficient, durable, 40+ year lifespan. Free estimates from licensed contractor.`,
    intro: "Metal roofs are built for extreme climates — reflecting heat, resisting wind, and lasting 40–70 years with minimal maintenance. We install standing seam, corrugated, and stone-coated steel systems for homes and businesses.",
    seoBlocks: {
      what: "Metal roofing refers to roofing systems made from steel, aluminum, or copper — typically installed as standing seam panels, corrugated sheets, or metal shingles. These systems are engineered for exceptional longevity and weather resistance, far outlasting traditional asphalt shingles.",
      why: "Metal roofs offer a combination of longevity, energy efficiency, and weather resistance that no other roofing material can match. Reflective metal surfaces can reduce cooling costs significantly, and a quality metal roof rarely needs maintenance beyond occasional inspection.",
      when: "Metal roofing is worth considering if your current roof needs replacement and you plan to stay in the home long-term, if energy costs are a concern, or if you want a low-maintenance solution that won't need attention again for decades.",
    },
  },
  "flat-roof-systems": {
    title: "Flat Roof Systems",
    metaTitle: `Flat Roof Repair & Installation ${address.city} | ${client.companyNameFull}`,
    description: `Flat roof installation and repair in ${address.city}. TPO, EPDM, and modified bitumen. Commercial & residential. Free estimates.`,
    intro: "Flat roofs require specialized expertise. We install and repair TPO, EPDM, modified bitumen, and foam roof systems — engineered to handle extreme heat and heavy rain.",
    seoBlocks: {
      what: "Flat roof systems use membrane-based materials — such as TPO, EPDM, or modified bitumen — applied across a low-slope surface. Unlike pitched roofing, flat systems rely on proper drainage and seamless waterproofing rather than gravity to manage water runoff.",
      why: "A failing flat roof membrane can allow water to pool and seep into the building with no visible warning until significant damage has occurred. Regular maintenance and timely repair of flat roof systems is essential to protect the structure below.",
      when: "If your flat roof is showing signs of membrane cracking, blistering, ponding water, or visible seam separation, it's time for inspection. Most flat roof membranes have a lifespan of 15–25 years — older systems should be assessed before the next rainy season.",
    },
  },
  "roof-inspection": {
    title: "Roof Inspection",
    metaTitle: `Free Roof Inspection ${cityState} | ${client.companyNameFull}`,
    description: `Free, no-obligation roof inspections in ${address.city}. Licensed inspector. Photo-documented report. Same-day availability.`,
    intro: "Whether you're buying a home, preparing to sell, or just want peace of mind — our comprehensive roof inspections catch problems early before they become expensive emergencies.",
    seoBlocks: {
      what: "A professional roof inspection is a systematic evaluation of all roof components — shingles or membrane, flashing, gutters, vents, soffits, and fascia. A trained inspector identifies current damage, signs of wear, and potential failure points before they become urgent problems.",
      why: "Most homeowners don't inspect their roof until there's already a visible problem — by which point damage has often already occurred. A proactive inspection can catch small issues early, extend the life of your roof, and provide documentation that supports insurance claims when storms occur.",
      when: "We recommend inspections once a year, after any significant storm, before purchasing a home, and when your roof is approaching 10–15 years of age. Catching problems early is almost always cheaper than addressing the damage they cause.",
    },
  },
  "commercial-roofing": {
    title: "Commercial Roofing",
    metaTitle: `Commercial Roofing ${cityState} | ${client.companyNameFull}`,
    description: `Commercial roofing services in ${address.city}. Flat roofs, metal roofing, repairs & maintenance. Licensed contractor. Free estimates.`,
    intro: "Your commercial roof protects your business, inventory, and employees. We deliver professional-grade roofing solutions for offices, warehouses, retail, and multi-unit properties — with minimal disruption to your operations.",
    seoBlocks: {
      what: "Commercial roofing encompasses the installation, repair, and maintenance of roofing systems on commercial and industrial buildings. This includes flat and low-slope systems such as TPO, EPDM, and modified bitumen, as well as metal roofing for warehouses and large retail structures.",
      why: "A commercial roof failure can disrupt operations, damage inventory, and create liability issues. Unlike residential roofing, commercial systems cover large areas and often protect critical equipment — making regular maintenance and timely repairs essential to business continuity.",
      when: "Commercial roof systems should be inspected at least twice per year and after significant weather events. If you're managing a property with a roof older than 10 years, are seeing water intrusion, or are planning a building renovation, it's time for a professional assessment.",
    },
  },
};

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openModal } = useQuoteModal();

  const clientService = client.services.find((s) => s.slug === slug);
  if (!clientService) return <Navigate to="/404" replace />;

  const data = slug ? serviceData[slug] : undefined;

  useEffect(() => {
    if (data) {
      document.title = data.metaTitle;
    } else {
      document.title = `${clientService.name} in ${cityState} | ${client.companyNameFull}`;
    }
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        data?.description ??
          `${client.companyName} provides professional ${clientService.name} services in ${cityState}. Contact us today for a free quote.`
      );
    }
  }, [data, clientService]);

  if (!data) {
    return (
      <>
        <section
          className="relative overflow-hidden min-h-[500px] flex items-center justify-center pb-20 pt-40 -mt-20"
          style={{ backgroundImage: `url(${client.images.hero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
          <ScrollReveal className="relative z-10 mx-auto max-w-3xl px-4 lg:px-6 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
              {clientService.name} in {cityState}
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {clientService.name} Experts
            </h1>
            <p className="mt-4 text-lg text-white/70">
              {client.companyName} provides professional {clientService.name} services in {address.city}, {address.state}. Licensed, insured, and ready to help. Contact us today for a free quote.
            </p>
            <div className="mt-6">
              <button onClick={openModal} className="inline-flex h-11 items-center justify-center rounded-sm bg-accent px-8 text-base font-bold text-accent-foreground shadow hover:bg-accent/90 transition-colors">
                Get a Free Quote
              </button>
            </div>
          </ScrollReveal>
          <WaveDivider />
        </section>
        <PageBottomStack />
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden min-h-[500px] flex items-center justify-center pb-20 pt-40 -mt-20"
        style={{ backgroundImage: `url(${client.images.hero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <ScrollReveal className="relative z-10 mx-auto max-w-3xl px-4 lg:px-6 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
            {data.title} in {cityState}
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {data.title} Experts
          </h1>
          <p className="mt-4 text-lg text-white/70">{data.intro}</p>
          <div className="mt-6">
            <button onClick={openModal} className="inline-flex h-11 items-center justify-center rounded-sm bg-accent px-8 text-base font-bold text-accent-foreground shadow hover:bg-accent/90 transition-colors">
              Get a Free Quote
            </button>
          </div>
        </ScrollReveal>
        <WaveDivider />
      </section>

      {/* SEO Text Blocks */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-6">
          <div className="space-y-10">
            <ScrollReveal delay={0}>
              <div>
                <h3 className="text-xl font-bold text-foreground">What Is {data.title}?</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{data.seoBlocks.what}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div>
                <h3 className="text-xl font-bold text-foreground">Why Is {data.title} Important?</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{data.seoBlocks.why}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <h3 className="text-xl font-bold text-foreground">When Should You Consider {data.title}?</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{data.seoBlocks.when}</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <PageBottomStack />
    </>
  );
};

export default ServicePage;
