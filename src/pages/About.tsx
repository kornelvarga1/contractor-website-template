import { Link } from "react-router-dom";
import { Shield, Users, Award, Clock, Phone, CheckCircle } from "lucide-react";

const values = [
  { icon: Shield, title: "Licensed & Insured", desc: "Fully licensed (ROC #123456), bonded, and insured for your complete protection." },
  { icon: Users, title: "Family-Owned", desc: "Not a franchise. You work directly with our owner, Mike Johnson, on every project." },
  { icon: Award, title: "12+ Years Experience", desc: "Over a decade of roofing excellence across the Phoenix metropolitan area." },
  { icon: Clock, title: "Fast Response", desc: "Same-day inspections available. Most estimates delivered within 24 hours." },
];

const About = () => {
  return (
    <>
      {/* Text-first hero */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            Honest Roofing Done Right —<br className="hidden sm:block" />
            Since 2012
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/70">
            Phoenix Roofing and Repair is a family-owned roofing contractor serving the greater Phoenix area with integrity, craftsmanship, and zero shortcuts.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Our Story</h2>
              <div className="mt-4 space-y-4 text-muted-foreground">
                <p>
                  Mike Johnson founded Phoenix Roofing and Repair with one goal: give homeowners the same quality roofing work he'd want on his own home. No upsells, no pressure tactics, no mystery pricing.
                </p>
                <p>
                  Over 12 years later, that commitment hasn't changed. We've completed thousands of projects — from emergency leak repairs to complete roof replacements — for families and businesses across Phoenix, Scottsdale, Tempe, Mesa, Chandler, Glendale, and Peoria.
                </p>
                <p>
                  Every job starts with a free, no-obligation inspection and a transparent written estimate. We show you exactly what needs to be done, explain your options, and let you decide — no rush, no games.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center rounded-sm bg-secondary p-8">
              <h3 className="text-xl font-bold text-foreground">Why Homeowners Trust Us</h3>
              <div className="mt-6 space-y-5">
                {values.map((v) => (
                  <div key={v.title} className="flex gap-3">
                    <v.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <div>
                      <p className="font-semibold text-foreground">{v.title}</p>
                      <p className="text-sm text-muted-foreground">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
            Ready to Work With a Roofer You Can Trust?
          </h2>
          <p className="mt-3 text-primary-foreground/70">
            Get a free, no-obligation roof inspection and written estimate — usually same day.
          </p>
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

export default About;
