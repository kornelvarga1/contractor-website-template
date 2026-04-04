import { client } from "@/config/client";
import { WaveDivider, WaveDividerTop } from "@/components/shared/Dividers";
import { useQuoteModal } from "@/hooks/useQuoteModal";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxBg from "@/components/shared/ParallaxBg";

const CtaBanner = () => {
  const { openModal } = useQuoteModal();
  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      <ParallaxBg imageUrl={client.images.hero} />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" aria-hidden="true" />
      <WaveDividerTop />

      <ScrollReveal className="relative z-10 mx-auto max-w-3xl px-4 text-center lg:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
          READY TO TAKE THE NEXT STEP?
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/80">
          Get a Free Quote Today!
        </p>
        <button
          onClick={openModal}
          className="mt-8 inline-flex h-12 items-center rounded-sm bg-accent px-10 text-base font-bold text-accent-foreground shadow-lg hover:bg-accent/90 transition-colors"
        >
          Get a Free Quote
        </button>
      </ScrollReveal>
      <WaveDivider />
    </section>
  );
};

export default CtaBanner;
