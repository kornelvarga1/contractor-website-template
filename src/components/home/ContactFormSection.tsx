import { useState, type FormEvent } from "react";
import { Phone, Shield, Clock, CheckCircle } from "lucide-react";

const ContactFormSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder — will wire to Supabase edge function later
    setSubmitted(true);
  };

  return (
    <section id="estimate" className="bg-secondary py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: Trust signals */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Request Your Free Estimate
            </h2>
            <p className="mt-3 text-muted-foreground">
              Fill out the form and we'll get back to you within 2 hours during business hours — usually faster.
            </p>

            <div className="mt-8 space-y-5">
              {[
                { icon: Clock, text: "Average response time under 2 hours" },
                { icon: Shield, text: "Licensed, bonded & insured — ROC #123456" },
                { icon: CheckCircle, text: "No-pressure, no-obligation estimates" },
                { icon: Phone, text: "Prefer to call? (602) 497-0154" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-foreground/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-sm border border-border bg-card p-6 shadow-sm lg:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <CheckCircle className="h-12 w-12 text-accent" />
                <h3 className="mt-4 text-xl font-bold text-card-foreground">Thank You!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We received your request and will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-card-foreground">
                    Full Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="flex h-10 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="John Smith"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-card-foreground">
                      Phone *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="flex h-10 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="(602) 555-0123"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-card-foreground">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="flex h-10 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="john@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-card-foreground">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="flex h-10 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select a service…</option>
                    <option>Roof Replacement</option>
                    <option>Roof Repair</option>
                    <option>Storm Damage Repair</option>
                    <option>Metal Roofing</option>
                    <option>Flat Roof Systems</option>
                    <option>Roof Inspection</option>
                    <option>Commercial Roofing</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-card-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="flex w-full rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Tell us about your project…"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex h-11 w-full items-center justify-center rounded-sm bg-accent text-base font-bold text-accent-foreground shadow hover:bg-accent/90 transition-colors"
                >
                  Submit Request
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  No spam. No obligation. We respect your privacy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
