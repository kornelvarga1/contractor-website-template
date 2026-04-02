import { Phone, ShieldCheck } from "lucide-react";
import { client } from "@/config/client";
import QuoteForm from "@/components/shared/QuoteForm";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[600px] items-center overflow-hidden bg-primary lg:min-h-[700px]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${client.images.hero})` }}
        aria-hidden="true"
      />
      {/* Scrim */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left: headline + trust */}
          <div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground sm:text-5xl">
              {client.heroHeadline}
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80">
              {client.heroSubheadline}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2 text-sm font-semibold text-primary-foreground">
                <ShieldCheck className="h-5 w-5 text-accent" />
                Licensed &amp; Insured
              </div>
              <a
                href={`tel:${client.phoneTel}`}
                className="flex items-center gap-2 text-base font-bold text-accent hover:text-accent/90 transition-colors"
              >
                <Phone className="h-5 w-5" />
                {client.phone}
              </a>
            </div>
          </div>

          {/* Right: quote form */}
          <div>
            <QuoteForm variant="widget" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
