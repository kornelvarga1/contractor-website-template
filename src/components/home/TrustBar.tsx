import { Shield, Award, Clock, Star, BadgeCheck } from "lucide-react";

const badges = [
  { icon: Shield, label: "Licensed" },
  { icon: BadgeCheck, label: "Bonded" },
  { icon: Shield, label: "Insured" },
  { icon: Clock, label: "12+ Years" },
  { icon: Star, label: "5-Star Rated" },
];

const TrustBar = () => {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-4 py-5 lg:justify-between lg:px-6">
        {badges.map((b) => (
          <div key={b.label} className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
            <b.icon className="h-5 w-5 text-accent" />
            {b.label}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBar;
