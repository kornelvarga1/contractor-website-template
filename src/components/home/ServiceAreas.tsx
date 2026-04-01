import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { client } from "@/config/client";

const ServiceAreas = () => {
  const hasMap = Boolean(client.mapsEmbed && !client.mapsEmbed.startsWith("#"));

  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left: areas list */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              Proudly Serving These Areas
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Service Areas
            </h2>
            <p className="mt-3 text-muted-foreground">
              Licensed roofing services across the Valley — fast response wherever you are.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {client.areas.map((area) => (
                <Link
                  key={area}
                  to={`/areas/${area.toLowerCase()}`}
                  className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  <MapPin className="h-4 w-4 shrink-0 text-accent" />
                  {area}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Google Maps embed */}
          <div className="min-h-[350px] overflow-hidden rounded-sm border border-border shadow-sm">
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
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
