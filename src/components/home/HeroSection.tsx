import { Phone, ShieldCheck, ChevronDown } from "lucide-react";
import { client } from "@/config/client";
import QuoteForm from "@/components/shared/QuoteForm";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxBg from "@/components/shared/ParallaxBg";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[600px] items-center overflow-hidden bg-primary lg:min-h-[700px] -mt-20">
      <ParallaxBg imageUrl={client.images.hero} />
      {/* Scrim */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-black/40 to-transparent" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pt-36 pb-16 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left: headline + trust */}
          <ScrollReveal delay={0}>
            <div>
              <h1 className="text-4xl leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl">
                {client.heroHeadline}
              </h1>
              <p className="mt-4 text-lg text-primary-foreground/80">
                {client.heroSubheadline}
              </p>
              {/* Desktop: trust badges + phone */}
              <div className="hidden lg:flex mt-8 flex-row items-center gap-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-primary-foreground">
                  <ShieldCheck className="h-5 w-5 text-primary-foreground/70" />
                  Licensed &amp; Insured
                </div>
                <a
                  href={`tel:${client.phoneTel}`}
                  className="inline-flex h-11 items-center gap-2 rounded-sm bg-white px-5 text-base font-bold text-[#1a1a1a] hover:bg-white/90 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  {client.phone}
                </a>
              </div>

              {/* Mobile: arrow pointing toward quote form below */}
              <div className="lg:hidden mt-8 flex justify-center animate-bounce">
                <ChevronDown className="h-8 w-8 text-accent" />
              </div>
            </div>
          </ScrollReveal>

          {/* Right: quote form */}
          <ScrollReveal delay={0.15}>
            <QuoteForm variant="widget" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
