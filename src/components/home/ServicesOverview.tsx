import { Link } from "react-router-dom";
import { client } from "@/config/client";

const ServicesOverview = () => {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            What We Are Best At
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Services
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {client.services.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group relative block overflow-hidden rounded-sm aspect-[4/3]"
            >
              {/* Photo */}
              <img
                src={s.image}
                alt={s.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              {/* Label at bottom */}
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3">
                <span className="text-base font-bold uppercase tracking-wide text-white">
                  {s.name}
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
