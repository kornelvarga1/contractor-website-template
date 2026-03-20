import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    location: "Phoenix, AZ",
    rating: 5,
    text: "Mike and his crew replaced our entire roof in two days. They were professional, on time, and the price was exactly what they quoted. No surprises. Best roofing experience we've ever had.",
  },
  {
    name: "David R.",
    location: "Scottsdale, AZ",
    rating: 5,
    text: "Had storm damage from a monsoon and they were out the next morning. Filed the insurance claim for us and handled everything. Our roof looks better than it did before the storm.",
  },
  {
    name: "Linda K.",
    location: "Tempe, AZ",
    rating: 5,
    text: "We called three roofers for estimates. Phoenix Roofing was the most thorough, the most honest, and the most affordable. They earned a customer for life.",
  },
];

const SocialProof = () => {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-3 text-muted-foreground">
            Don't take our word for it — hear from the homeowners we've helped.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="flex flex-col rounded-sm border border-border bg-card p-6">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
