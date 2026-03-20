import { Link } from "react-router-dom";
import { Gift } from "lucide-react";

const SpecialsBanner = () => {
  return (
    <section className="bg-accent py-12 lg:py-14">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="flex items-center gap-4">
            <Gift className="hidden h-10 w-10 text-accent-foreground/80 sm:block" />
            <div>
              <h2 className="text-2xl font-bold text-accent-foreground sm:text-3xl">
                Limited-Time Offers
              </h2>
              <p className="mt-1 text-accent-foreground/80">
                Free no-obligation roof inspection <span className="mx-1">•</span> 10% off full replacements for first-time customers
              </p>
            </div>
          </div>
          <Link
            to="/specials"
            className="inline-flex h-11 items-center rounded-sm bg-primary px-8 text-sm font-bold text-primary-foreground shadow hover:bg-primary/90 transition-colors"
          >
            View Current Specials
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialsBanner;
