import { Link } from "react-router-dom";
import { client } from "@/config/client";

const ServicesOverview = () => {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="text-center" data-aos="fade-up">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            What We Are Best At
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Services
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {client.services.map((s, i) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group relative block overflow-hidden rounded-sm aspect-[4/3]"
              data-aos="fade-up"
              data-aos-delay={i * 80}
            >
              {/* Photo */}
              <img
                src={s.image}
                alt={s.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Base gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
              {/* Hover overlay — darker so description is readable */}
              <div className="absolute inset-0 bg-black/65 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              {/* Bottom panel */}
              <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-10">
                {/* Description — slides up on hover */}
                <p className="mb-2.5 text-sm leading-relaxed text-white/85 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 line-clamp-3">
                  {s.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-base font-bold uppercase tracking-wide text-white">
                    {s.name}
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
