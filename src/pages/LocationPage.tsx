import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Phone, CheckCircle, Star, Shield, Clock, Award } from "lucide-react";
import { client } from "@/config/client";

interface LocationData {
  city: string;
  metaTitle: string;
  description: string;
  h1Line1: string;
  h1Line2: string;
  intro: string;
  localSignals: string[];
}

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function generateLocationData(citySlug: string): LocationData {
  const city = capitalize(citySlug);
  const { address, companyName, companyNameFull, tagline, yearsExperience, tradeNoun, tradeAdjective } = client;
  return {
    city,
    metaTitle: `${capitalize(tradeAdjective)} Contractor ${city}, ${address.state} | ${companyNameFull}`,
    description: `Trusted ${tradeNoun} contractor in ${city}, ${address.state}. ${tagline}. Free estimates.`,
    h1Line1: `Trusted ${capitalize(tradeAdjective)} Contractor`,
    h1Line2: `Serving ${city}, ${address.state}`,
    intro: `${companyName} has been serving ${city} homeowners and businesses for ${yearsExperience}+ years. ${tagline} — we're the local ${tradeNoun} contractor ${city} trusts.`,
    localSignals: [
      `${yearsExperience}+ years serving ${city} and surrounding areas`,
      `${tagline} on every job`,
      `Fast response times for ${city} residents`,
      `Free, no-obligation estimates in ${city}`,
    ],
  };
}

const LocationPage = () => {
  const { city } = useParams<{ city: string }>();

  // Validate city against client.areas
  const validCity = city && client.areas.map((a) => a.toLowerCase()).includes(city);
  if (!validCity) return <Navigate to="/404" replace />;

  const data = generateLocationData(city!);

  useEffect(() => {
    document.title = data.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", data.description);
  }, [data]);

  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            {data.h1Line1}<br />
            {data.h1Line2}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/70">{data.intro}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link to="/quote" className="inline-flex h-11 items-center justify-center rounded-sm bg-accent px-8 text-base font-bold text-accent-foreground shadow hover:bg-accent/90 transition-colors">
              Get a Free Quote
            </Link>
            <a href={`tel:${client.phoneTel}`} className="inline-flex items-center justify-center gap-2 text-base font-bold text-primary-foreground hover:text-accent transition-colors">
              <Phone className="h-4 w-4" /> {client.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="border-b border-border bg-background py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 lg:gap-10">
          {[
            { icon: Shield, label: "Licensed & Insured" },
            { icon: Award, label: `${client.yearsExperience}+ Years Experience` },
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
            {capitalize(client.tradeAdjective)} Services in {data.city}
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {client.services.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="group rounded-sm border border-border bg-card p-5 shadow-sm transition-colors hover:border-accent">
                <h3 className="font-semibold text-card-foreground group-hover:text-accent transition-colors">{s.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.description}</p>
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
            Get a Free Quote in {data.city}
          </h2>
          <p className="mt-3 text-primary-foreground/70">No obligation. Transparent pricing. Fast response.</p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link to="/quote" className="inline-flex h-11 items-center rounded-sm bg-accent px-8 text-base font-bold text-accent-foreground shadow hover:bg-accent/90 transition-colors">
              Get a Free Quote
            </Link>
            <a href={`tel:${client.phoneTel}`} className="inline-flex items-center gap-2 text-base font-bold text-primary-foreground hover:text-accent transition-colors">
              <Phone className="h-4 w-4" /> {client.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationPage;
