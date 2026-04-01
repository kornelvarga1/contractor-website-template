import { Link } from "react-router-dom";
import {
  Home,
  Wrench,
  Settings,
  Flame,
  Droplets,
  Filter,
  Bath,
  UtensilsCrossed,
  Search,
  Gauge,
  Star,
  type LucideIcon,
} from "lucide-react";
import { client } from "@/config/client";

function iconForService(name: string): LucideIcon {
  const n = name.toLowerCase();
  if (n.includes("roof")) return Home;
  if (n.includes("repair")) return Wrench;
  if (n.includes("install") || n.includes("installation")) return Settings;
  if (n.includes("heating") || n.includes("boiler")) return Flame;
  if (n.includes("plumbing")) return Droplets;
  if (n.includes("drain")) return Filter;
  if (n.includes("bathroom")) return Bath;
  if (n.includes("kitchen")) return UtensilsCrossed;
  if (n.includes("inspection")) return Search;
  if (n.includes("pump")) return Gauge;
  return Star;
}

const ServicesOverview = () => {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            What We Are Best At
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Services
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {client.services.map((s) => {
            const Icon = iconForService(s.name);
            return (
              <div
                key={s.slug}
                className="flex flex-col rounded-sm border border-border bg-card shadow-sm"
              >
                <div className="flex items-center justify-center rounded-t-sm bg-accent/10 px-6 py-5">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-base font-bold text-card-foreground">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.description}</p>
                  <Link
                    to={`/services/${s.slug}`}
                    className="mt-4 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
