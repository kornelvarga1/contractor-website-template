import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { client } from "@/config/client";
import ScrollReveal from "@/components/ScrollReveal";

const ServiceAreas = () => {
  const hasMap = Boolean(client.mapsEmbed && !client.mapsEmbed.startsWith("#"));

  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left: areas list */}
          <ScrollReveal delay={0}>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
              Proudly Serving These Areas
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Service Areas
            </h2>
            <p className="mt-3 text-muted-foreground">
              {client.companyName} provides professional {client.tradeNoun} services across the area — fast response wherever you are.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {client.areas.map((area) => (
                <Link
                  key={area}
                  to={`/areas/${area.toLowerCase()}`}
                  className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />
                  {area}
                </Link>
              ))}
            </div>
          </div>
          </ScrollReveal>

          {/* Right: Google Maps embed */}
          <ScrollReveal delay={0.1}>
          <div className="hidden lg:block min-h-[350px] overflow-hidden rounded-sm border border-border shadow-sm">
            {hasMap ? (
              <iframe
                title="Service area map"
                src={client.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px", display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="flex h-full min-h-[350px] items-center justify-center bg-secondary text-sm text-muted-foreground">
                Map coming soon
              </div>
            )}
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
