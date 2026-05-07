import { Clock, DollarSign, Search, ShieldCheck } from "lucide-react";
import { client } from "@/config/client";
import ScrollReveal from "@/components/ScrollReveal";

const icons = [Clock, DollarSign, Search, ShieldCheck];

const WhyChooseUs = () => {
  return (
    <section className="bg-secondary py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <ScrollReveal delay={0}>
            <div className="overflow-hidden rounded-sm">
              <img
                src={client.images.whyChooseUs}
                alt={client.whyChooseUs.imageAlt}
                className="h-full w-full object-cover"
                loading="lazy"
                width={960}
                height={1080}
              />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal delay={0.1}>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {client.whyChooseUs.heading}
              </h2>
              <p className="mt-3 text-muted-foreground">
                {client.whyChooseUs.subtitle}
              </p>

              <div className="mt-8 space-y-6">
                {client.whyChooseUs.benefits.map((b, i) => {
                  const Icon = icons[i % icons.length];
                  return (
                    <div key={b.title} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-muted">
                        <Icon className="h-5 w-5 text-foreground/70" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-foreground">{b.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
