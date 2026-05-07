import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Phone } from "lucide-react";
import { client } from "@/config/client";
import PageBottomStack from "@/components/shared/PageBottomStack";
import { useQuoteModal } from "@/hooks/useQuoteModal";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxBg from "@/components/shared/ParallaxBg";

interface LocationData {
  metaTitle: string;
  description: string;
  h1Line1: string;
  h1Line2: string;
  intro: string;
  seoBlocks: {
    need: string;
    hereFor: string;
    whyChoose: string;
  };
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function generateLocationData(citySlug: string): LocationData {
  const city = capitalize(citySlug);
  const { address, companyName, companyNameFull, tagline, yearsExperience, tradeNoun, tradeAdjective } = client;
  return {
    metaTitle: `${capitalize(tradeAdjective)} Contractor ${city}, ${address.state} | ${companyNameFull}`,
    description: `Trusted ${tradeNoun} contractor in ${city}, ${address.state}. ${tagline}. Free estimates.`,
    h1Line1: `Trusted ${capitalize(tradeAdjective)} Contractor`,
    h1Line2: `Serving ${city}, ${address.state}`,
    intro: `${companyName} has been serving ${city} homeowners and businesses for ${yearsExperience}+ years. ${tagline} — we're the local ${tradeNoun} contractor ${city} trusts.`,
    seoBlocks: {
      need: `Experiencing ${tradeNoun} issues in ${city}? It's not just about discomfort — it's about ensuring your home functions smoothly and efficiently. Our team understands the unique ${tradeNoun} needs of ${city} residents. Don't let a minor inconvenience turn into a major problem. Trust our expert technicians to provide timely, effective solutions for your ${tradeNoun} needs in ${city}.`,
      hereFor: `Looking for reliable ${tradeNoun} services in ${city}? Search no more. ${companyName} is here to handle all your ${tradeNoun} requirements — whether it's routine maintenance, emergency repairs, or new installations. Our skilled technicians are equipped with the latest tools to ensure your systems run smoothly and efficiently. We pride ourselves on customer satisfaction and strive to exceed expectations with every job.`,
      whyChoose: `Why choose ${companyName} for your ${tradeNoun} needs in ${city}? Our dedication to excellence sets us apart. We're not just any service provider — we're your local experts committed to ensuring your comfort and safety. With ${yearsExperience}+ years of experience, ${tagline}, and a track record of satisfied homeowners across ${city}, we're the ${tradeNoun} contractor you can trust.`,
    },
  };
}

const LocationPage = () => {
  const { city } = useParams<{ city: string }>();
  const { openModal } = useQuoteModal();

  const validCity = city && client.areas.map((a) => a.toLowerCase()).includes(city);
  const data = validCity ? generateLocationData(city!) : null;
  const cityFormatted = validCity ? capitalize(city!) : "";

  useEffect(() => {
    if (data) {
      document.title = data.metaTitle;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", data.description);
    }
  }, [data]);

  if (!validCity || !data) return <Navigate to="/404" replace />;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[500px] flex items-center justify-center pb-20 pt-40 -mt-20">
        <ParallaxBg imageUrl={client.images.hero} />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-black/60 to-transparent" aria-hidden="true" />
        <ScrollReveal className="relative z-10 mx-auto max-w-3xl px-4 lg:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {data.h1Line1}<br />
            {data.h1Line2}
          </h1>
          <p className="mt-4 text-lg text-white/70">{data.intro}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button onClick={openModal} className="inline-flex h-11 items-center justify-center rounded-sm bg-accent px-8 text-base font-bold text-accent-foreground shadow hover:bg-accent/90 transition-colors">
              Get a Free Quote
            </button>
            <a
              href={`tel:${client.phoneTel}`}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-white px-5 text-base font-bold text-foreground hover:bg-white/90 transition-colors"
            >
              <Phone className="h-4 w-4" /> {client.phone}
            </a>
          </div>
        </ScrollReveal>
      </section>

      {/* SEO Text Blocks */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-6 space-y-10">
          <ScrollReveal delay={0}>
            <div>
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                A Need For {client.tradeNoun} In {cityFormatted}
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{data.seoBlocks.need}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div>
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                Here for all your {client.tradeNoun} Needs
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{data.seoBlocks.hereFor}</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div>
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                Why Choose Us For {client.tradeNoun} In {cityFormatted}
              </h2>
              <p className="mt-3 text-muted-foreground leading-relaxed">{data.seoBlocks.whyChoose}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <PageBottomStack />
    </>
  );
};

export default LocationPage;
