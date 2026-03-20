import { Link } from "react-router-dom";
import { Phone, CheckCircle } from "lucide-react";

const Specials = () => {
  return (
    <>
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            Current Specials &<br className="hidden sm:block" />
            Limited-Time Offers
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/70">
            Take advantage of these exclusive offers — available for a limited time only.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-6 space-y-8">
          {/* Free Inspection */}
          <div className="rounded-sm border-2 border-accent bg-card p-8 shadow-sm">
            <div className="inline-block rounded-sm bg-accent/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent">
              Most Popular
            </div>
            <h2 className="mt-4 text-2xl font-bold text-card-foreground">Free Roof Inspection</h2>
            <p className="mt-2 text-muted-foreground">
              Get a comprehensive, no-obligation roof inspection from a licensed professional. We'll document the condition of your roof with photos and provide a written report — completely free.
            </p>
            <ul className="mt-4 space-y-2">
              {["Full visual & structural inspection", "Photo-documented report", "No obligation — no pressure", "Same-day availability"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-card-foreground/80">
                  <CheckCircle className="h-4 w-4 text-accent" /> {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="mt-6 inline-flex h-11 items-center rounded-sm bg-accent px-8 text-base font-bold text-accent-foreground shadow hover:bg-accent/90 transition-colors">
              Schedule Free Inspection
            </Link>
          </div>

          {/* 10% Off */}
          <div className="rounded-sm border border-border bg-card p-8 shadow-sm">
            <div className="inline-block rounded-sm bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
              First-Time Customers
            </div>
            <h2 className="mt-4 text-2xl font-bold text-card-foreground">10% Off Full Roof Replacement</h2>
            <p className="mt-2 text-muted-foreground">
              First-time customers receive 10% off any full roof replacement project. Combine with our free inspection to get started with zero risk.
            </p>
            <ul className="mt-4 space-y-2">
              {["Valid on all roofing materials", "Cannot be combined with other offers", "Must mention at time of estimate", "Licensed & insured workmanship"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-card-foreground/80">
                  <CheckCircle className="h-4 w-4 text-accent" /> {item}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="mt-6 inline-flex h-11 items-center rounded-sm bg-accent px-8 text-base font-bold text-accent-foreground shadow hover:bg-accent/90 transition-colors">
              Claim This Offer
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-primary py-14 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
            Questions About Our Specials?
          </h2>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a href="tel:6024970154" className="inline-flex items-center gap-2 text-base font-bold text-primary-foreground hover:text-accent transition-colors">
              <Phone className="h-4 w-4" /> Call (602) 497-0154
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Specials;
