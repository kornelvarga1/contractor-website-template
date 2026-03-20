import { Clock, DollarSign, Search, ShieldCheck } from "lucide-react";
import rooferImage from "@/assets/roofer-working.jpg";

const benefits = [
  {
    icon: Clock,
    title: "Fast Turnaround",
    desc: "Most repairs completed same-day. Full replacements scheduled within the week — not months.",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    desc: "Written estimates before any work begins. No hidden fees, no surprise change orders.",
  },
  {
    icon: Search,
    title: "No-Obligation Inspections",
    desc: "Free roof inspections with a detailed report — zero pressure, zero commitment.",
  },
  {
    icon: ShieldCheck,
    title: "Lifetime Workmanship Guarantee",
    desc: "We stand behind every job. If something isn't right, we fix it — period.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-secondary py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="overflow-hidden rounded-sm">
            <img
              src={rooferImage}
              alt="Professional roofer installing shingles on a Phoenix home"
              className="h-full w-full object-cover"
              loading="lazy"
              width={960}
              height={1080}
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Phoenix Homeowners<br className="hidden sm:block" />
              Choose Us
            </h2>
            <p className="mt-3 text-muted-foreground">
              We eliminate the stress, cost uncertainty, and wasted time that comes with hiring the wrong roofer.
            </p>

            <div className="mt-8 space-y-6">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-accent/10">
                    <b.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{b.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
