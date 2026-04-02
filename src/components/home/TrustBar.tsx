import { client } from "@/config/client";

const TrustBar = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4 lg:px-6">
        <p className="text-center text-sm font-semibold tracking-wide text-foreground">
          100% Local
          <span className="mx-3 text-accent">·</span>
          {client.yearsExperience}+ Years Experience
          <span className="mx-3 text-accent">·</span>
          Top Notch Service
          <span className="mx-3 text-accent">·</span>
          Insured
          <span className="mx-3 text-accent">·</span>
          Fully Licensed
        </p>
      </div>
    </section>
  );
};

export default TrustBar;
