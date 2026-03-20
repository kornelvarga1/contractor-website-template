import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

const areas = [
  { name: "Phoenix", slug: "phoenix" },
  { name: "Scottsdale", slug: "scottsdale" },
  { name: "Tempe", slug: "tempe" },
  { name: "Mesa", slug: "mesa" },
  { name: "Chandler", slug: "chandler" },
  { name: "Glendale", slug: "glendale" },
  { name: "Peoria", slug: "peoria" },
];

const ServiceAreas = () => {
  return (
    <section className="bg-primary py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Serving the Greater Phoenix Area
          </h2>
          <p className="mt-3 text-primary-foreground/70">
            Licensed roofing services across the Valley — fast response times, wherever you are.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => (
            <Link
              key={area.slug}
              to={`/areas/${area.slug}`}
              className="group flex items-center gap-3 rounded-sm border border-primary-foreground/10 bg-primary-foreground/5 p-4 transition-colors hover:border-accent hover:bg-accent/10"
            >
              <MapPin className="h-5 w-5 shrink-0 text-accent" />
              <span className="flex-1 text-base font-medium text-primary-foreground">{area.name}</span>
              <ArrowRight className="h-4 w-4 text-primary-foreground/40 group-hover:text-accent transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
