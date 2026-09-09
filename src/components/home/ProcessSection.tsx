import { client } from "@/config/client";
import ScrollReveal from "@/components/ScrollReveal";

const ProcessSection = () => {
  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Process
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {client.processSteps.map((step, i) => (
            <ScrollReveal key={step.title} delay={i * 0.1}>
            <div className="relative flex flex-col items-center text-center">
              {/* Dotted connector line — shown between steps on sm+ */}
              {i < client.processSteps.length - 1 && (
                <div className="absolute left-1/2 top-6 hidden w-full border-t-2 border-dashed border-foreground/15 sm:block" aria-hidden="true" />
              )}
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-xl font-extrabold text-background z-10">
                {i + 1}
              </div>
              <h3 className="mt-4 text-base font-bold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
