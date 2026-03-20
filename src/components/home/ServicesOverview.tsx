import { Link } from "react-router-dom";
import { Home, Wrench, CloudLightning, Layers, Square, Search, Building2, ArrowRight } from "lucide-react";

const services = [
  { icon: Home, title: "Roof Replacement", desc: "Complete tear-off and installation with premium materials and a lifetime workmanship guarantee.", slug: "roof-replacement" },
  { icon: Wrench, title: "Roof Repair", desc: "Fast, reliable repairs for leaks, missing shingles, and weather damage — done right the first time.", slug: "roof-repair" },
  { icon: CloudLightning, title: "Storm Damage Repair", desc: "Emergency response for hail, wind, and monsoon damage. We handle insurance claims for you.", slug: "storm-damage-repair" },
  { icon: Layers, title: "Metal Roofing", desc: "Energy-efficient metal roofing systems built to withstand Arizona's extreme heat and storms.", slug: "metal-roofing" },
  { icon: Square, title: "Flat Roof Systems", desc: "Expert flat roof installation and repair for commercial and residential properties.", slug: "flat-roof-systems" },
  { icon: Search, title: "Roof Inspection", desc: "Comprehensive inspections to catch problems early — completely free, no obligation.", slug: "roof-inspection" },
  { icon: Building2, title: "Commercial Roofing", desc: "Full-service commercial roofing for offices, warehouses, retail, and multi-unit properties.", slug: "commercial-roofing" },
];

const ServicesOverview = () => {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Roofing Services You Can Count On
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            From emergency repairs to full replacements — every job backed by transparent pricing, licensed crews, and a guarantee you can trust.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group flex flex-col rounded-sm border border-border bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <s.icon className="h-8 w-8 text-accent" />
              <h3 className="mt-4 text-lg font-semibold text-card-foreground">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
