import { client } from "@/config/client";

const ProcessSection = () => {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Our Process
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {client.processSteps.map((step, i) => (
            <div key={step.title} className="relative flex flex-col items-center text-center" data-aos="fade-up" data-aos-delay={i * 100}>
              {/* Dotted connector line — shown between steps on sm+ */}
              {i < client.processSteps.length - 1 && (
                <div className="absolute left-1/2 top-6 hidden w-full border-t-2 border-dashed border-accent/40 sm:block" aria-hidden="true" />
              )}
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl font-extrabold text-accent-foreground z-10">
                {i + 1}
              </div>
              <h3 className="mt-4 text-base font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
