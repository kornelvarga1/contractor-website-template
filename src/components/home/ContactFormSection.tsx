import { useState, type FormEvent } from "react";
import { Phone, Shield, Clock, CheckCircle } from "lucide-react";
import { client } from "@/config/client";
import ScrollReveal from "@/components/ScrollReveal";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const BUSINESS_ID = import.meta.env.VITE_BUSINESS_ID;

const ContactFormSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const body = {
      business_id: BUSINESS_ID,
      contact_name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      contact_phone: (form.elements.namedItem("phone") as HTMLInputElement).value.trim(),
      contact_email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    };
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/form-submission-confirmation`, {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="estimate" className="bg-secondary py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left: Trust signals */}
          <ScrollReveal delay={0}>
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
                { icon: Shield, text: `Licensed, bonded & insured — ROC ${client.rocLicense}` },
                { icon: CheckCircle, text: "No-pressure, no-obligation estimates" },
                { icon: Phone, text: `Prefer to call? ${client.phone}` },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-sm text-foreground/80">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          </div>
          </ScrollReveal>

          {/* Right: Form */}
          <ScrollReveal delay={0.1}>
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
                {error && (
                  <p className="text-sm text-red-500">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex h-11 w-full items-center justify-center rounded-sm bg-accent text-base font-bold text-accent-foreground shadow hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting…" : "Submit Request"}
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  No spam. No obligation. We respect your privacy.
                </p>
              </form>
            )}
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
