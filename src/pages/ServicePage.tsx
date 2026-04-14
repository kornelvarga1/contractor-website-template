import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { client } from "@/config/client";
import PageBottomStack from "@/components/shared/PageBottomStack";
import { WaveDivider } from "@/components/shared/Dividers";
import { useQuoteModal } from "@/hooks/useQuoteModal";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxBg from "@/components/shared/ParallaxBg";

const { address } = client;
const cityState = `${address.city}, ${address.state}`;

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openModal } = useQuoteModal();

  const service = client.services.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/404" replace />;

  const seo = service.seoData;
  const metaTitle = seo
    ? `${service.name} ${cityState} | ${client.companyNameFull}`
    : `${service.name} in ${cityState} | ${client.companyNameFull}`;
  const metaDesc = seo
    ? `${service.name} services in ${address.city}. ${client.tagline}. Free estimates. ${client.yearsExperience}+ years experience.`
    : `${client.companyName} provides professional ${service.name} services in ${cityState}. Contact us today for a free quote.`;

  useEffect(() => {
    document.title = metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", metaDesc);
  }, [metaTitle, metaDesc]);

  if (!seo) {
    return (
      <>
        <section className="relative overflow-hidden min-h-[500px] flex items-center justify-center pb-20 pt-40 -mt-20">
          <ParallaxBg imageUrl={client.images.hero} />
          <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
          <div className="absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-black/60 to-transparent" aria-hidden="true" />
          <ScrollReveal className="relative z-10 mx-auto max-w-3xl px-4 lg:px-6 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">
              {service.name} in {cityState}
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {service.name} Experts
            </h1>
            <p className="mt-4 text-lg text-white/70">
              {client.companyName} provides professional {service.name} services in {address.city}, {address.state}. Licensed, insured, and ready to help. Contact us today for a free quote.
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
      <section className="relative overflow-hidden min-h-[500px] flex items-center justify-center pb-20 pt-40 -mt-20">
        <ParallaxBg imageUrl={client.images.hero} />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-black/60 to-transparent" aria-hidden="true" />
        <ScrollReveal className="relative z-10 mx-auto max-w-3xl px-4 lg:px-6 text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent">
            {service.name} in {cityState}
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {service.name} Experts
          </h1>
          <p className="mt-4 text-lg text-white/70">{seo.intro}</p>
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
                <h3 className="text-xl font-bold text-foreground">What Is {service.name}?</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{seo.seoBlocks.what}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div>
                <h3 className="text-xl font-bold text-foreground">Why Is {service.name} Important?</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{seo.seoBlocks.why}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <h3 className="text-xl font-bold text-foreground">When Should You Consider {service.name}?</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{seo.seoBlocks.when}</p>
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
