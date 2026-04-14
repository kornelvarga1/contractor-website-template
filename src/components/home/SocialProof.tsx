import { Star } from "lucide-react";
import { client } from "@/config/client";
import ScrollReveal from "@/components/ScrollReveal";

const SocialProof = () => {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mt-3 text-muted-foreground">
              Don't take our word for it — hear from the homeowners we've helped.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {client.featuredReviews.map((r, i) => (
            <ScrollReveal key={r.name} delay={i * 0.1}>
            <div className="flex flex-col rounded-sm border border-border bg-card p-6">
              <div className="flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-card-foreground/80">"{r.text}"</p>
              <div className="mt-4 border-t border-border pt-4">
                <p className="text-sm font-semibold text-card-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.location}</p>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
