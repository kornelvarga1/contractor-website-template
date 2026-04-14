import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { client } from "@/config/client";
import ScrollReveal from "@/components/ScrollReveal";


const FaqSection = () => {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <ScrollReveal delay={0}>
            <div className="overflow-hidden rounded-sm">
              <img
                src={client.images.faq}
                alt={`${client.tradeNoun} project`}
                className="h-full w-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </ScrollReveal>

          {/* Content */}
          <ScrollReveal delay={0.1}>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <Accordion type="single" collapsible className="mt-10 w-full">
              {client.faq.map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-sm font-semibold text-foreground">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
