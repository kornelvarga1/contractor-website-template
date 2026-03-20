import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import heroImage from "@/assets/hero-roofing.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[540px] items-center overflow-hidden bg-primary md:min-h-[600px]">
      {/* Background image — hidden on small screens for speed */}
      <div
        className="absolute inset-0 hidden bg-cover bg-center md:block"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden="true"
      />
      {/* Scrim */}
      <div className="absolute inset-0 bg-primary/60 md:bg-primary/65" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 lg:px-6">
        <h1 className="max-w-2xl text-4xl font-extrabold leading-[1.15] tracking-tight text-primary-foreground sm:text-5xl md:text-6xl">
          <span className="block">Phoenix's Most Trusted</span>
          <span className="block text-accent">Roofing Contractor</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg text-primary-foreground/80 sm:text-xl">
          Licensed, bonded & insured — protecting Phoenix homes and businesses for over 12 years. No-obligation inspections. Honest pricing. Guaranteed workmanship.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            to="/contact"
            className="inline-flex h-12 items-center justify-center rounded-sm bg-accent px-7 text-base font-bold text-accent-foreground shadow-lg hover:bg-accent/90 transition-colors"
          >
            Get Your Free Roof Inspection
          </Link>
          <a
            href="tel:6024970154"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-sm border border-primary-foreground/30 px-7 text-base font-semibold text-primary-foreground hover:border-accent hover:text-accent transition-colors"
          >
            <Phone className="h-4 w-4" />
            (602) 497-0154
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
