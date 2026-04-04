import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { client } from "@/config/client";
import PageBottomStack from "@/components/shared/PageBottomStack";
import { WaveDivider } from "@/components/shared/Dividers";
import QuoteForm from "@/components/shared/QuoteForm";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxBg from "@/components/shared/ParallaxBg";

const Contact = () => {
  return (
    <>
      <section className="relative overflow-hidden min-h-[500px] flex items-center justify-center pb-20 pt-40 -mt-20">
        <ParallaxBg imageUrl={client.images.hero} />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-black/60 to-transparent" aria-hidden="true" />
        <ScrollReveal className="relative z-10 mx-auto max-w-3xl px-4 text-center lg:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            CONTACT US
          </h1>
          <p className="mt-4 text-lg text-white/70">
            Get in touch with any questions and we'll be happy to help.
          </p>
        </ScrollReveal>
        <WaveDivider />
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Contact Info */}
            <ScrollReveal delay={0}>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
              <div className="mt-6 space-y-5">
                <a href={`tel:${client.phoneTel}`} className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                  <Phone className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-bold">{client.phone}</p>
                    <p className="text-sm text-muted-foreground">Call or text anytime</p>
                  </div>
                </a>
                <a href={`mailto:${client.email}`} className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                  <Mail className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-bold">{client.email}</p>
                    <p className="text-sm text-muted-foreground">We reply within 2 hours</p>
                  </div>
                </a>
              </div>

              <div className="mt-8 flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="font-bold text-foreground">Hours</p>
                  <ul className="mt-2 space-y-1">
                    {client.operatingHours.map(({ day, hours }) => (
                      <li key={day} className="flex gap-4 text-sm">
                        <span className="w-24 text-muted-foreground">{day}</span>
                        <span className="font-semibold text-foreground">{hours}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="font-bold text-foreground">Service Areas</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {client.areas.join(", ")}
                  </p>
                </div>
              </div>
            </div>
            </ScrollReveal>

          {/* Quote Form */}
            <ScrollReveal delay={0.1}>
            <QuoteForm variant="widget" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <PageBottomStack />
    </>
  );
};

export default Contact;
