import { Check } from "lucide-react";
import { useQuoteModal } from "@/hooks/useQuoteModal";
import { client } from "@/config/client";

const ABOUT_IMAGE = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=960&q=80";

const badges = [
  "100% Local",
  `${client.yearsExperience}+ Years Experience`,
  "Fully Licensed & Insured",
];

const AboutSection = () => {
  const { openModal } = useQuoteModal();
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="overflow-hidden rounded-sm">
            <img
              src={ABOUT_IMAGE}
              alt={`${client.companyName} team at work`}
              className="h-full w-full object-cover"
              loading="lazy"
              width={960}
              height={1080}
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">
              About Us
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {client.companyName}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {client.aboutText}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 rounded-sm border border-border bg-background px-3 py-1.5 text-xs font-semibold text-foreground"
                >
                  <Check className="h-3.5 w-3.5 text-accent" />
                  {badge}
                </span>
              ))}
            </div>

            <button
              onClick={openModal}
              className="mt-8 inline-flex h-10 items-center rounded-sm bg-accent px-7 text-sm font-bold text-accent-foreground shadow-sm hover:bg-accent/90 transition-colors"
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
