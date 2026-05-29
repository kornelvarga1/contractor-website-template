import { client } from "@/config/client";

const TrustBar = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-5 lg:px-6">
        <p className="text-center text-base font-bold tracking-wide text-foreground">
          100% Local
          <span className="mx-3 inline-block h-1.5 w-1.5 rotate-45 bg-foreground/30 align-middle" aria-hidden="true" />
          {client.yearsExperience > 0 && (
            <>
              {client.yearsExperience}+ Years Experience
              <span className="mx-3 inline-block h-1.5 w-1.5 rotate-45 bg-foreground/30 align-middle" aria-hidden="true" />
            </>
          )}
          Top Notch Service
          <span className="mx-3 inline-block h-1.5 w-1.5 rotate-45 bg-foreground/30 align-middle" aria-hidden="true" />
          Insured
          <span className="mx-3 inline-block h-1.5 w-1.5 rotate-45 bg-foreground/30 align-middle" aria-hidden="true" />
          Fully Licensed
        </p>
      </div>
    </section>
  );
};

export default TrustBar;
