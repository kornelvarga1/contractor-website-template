import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Shield, CheckCircle } from "lucide-react";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const BUSINESS_ID = import.meta.env.VITE_BUSINESS_ID;

const Contact = () => {
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
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    };
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${SUPABASE_URL}/functions/v1/form-submission-confirmation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
    <>
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/70">
            Ready for your free estimate? Fill out the form below or give us a call — we respond fast.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
              <div className="mt-6 space-y-5">
                <a href="tel:6024970154" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                  <Phone className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-bold">(602) 497-0154</p>
                    <p className="text-sm text-muted-foreground">Call or text anytime</p>
                  </div>
                </a>
                <a href="mailto:mike@phoenixroofingandrepair.com" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                  <Mail className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-bold">mike@phoenixroofingandrepair.com</p>
                    <p className="text-sm text-muted-foreground">We reply within 2 hours</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 text-foreground">
                  <MapPin className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-bold">301 E Bethany Home Rd A-121</p>
                    <p className="text-sm text-muted-foreground">Phoenix, AZ 85012</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <Clock className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-bold">Mon–Sat: 7am – 6pm</p>
                    <p className="text-sm text-muted-foreground">Emergency service available 24/7</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 flex h-48 items-center justify-center rounded-sm border border-border bg-muted">
                <p className="text-sm text-muted-foreground">Google Maps embed placeholder</p>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-sm border border-border bg-card p-6 shadow-sm lg:p-8">
              <h2 className="text-xl font-bold text-card-foreground">Request Your Free Estimate</h2>
              <p className="mt-1 text-sm text-muted-foreground">No obligation. No pressure. We respect your time.</p>

              {submitted ? (
                <div className="mt-8 flex flex-col items-center py-10 text-center">
                  <CheckCircle className="h-12 w-12 text-accent" />
                  <h3 className="mt-4 text-xl font-bold text-card-foreground">Thank You!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">We received your request and will be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="c-name" className="mb-1.5 block text-sm font-medium text-card-foreground">Full Name *</label>
                    <input id="c-name" name="name" type="text" required className="flex h-10 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="John Smith" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="c-phone" className="mb-1.5 block text-sm font-medium text-card-foreground">Phone *</label>
                      <input id="c-phone" name="phone" type="tel" required className="flex h-10 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="(602) 555-0123" />
                    </div>
                    <div>
                      <label htmlFor="c-email" className="mb-1.5 block text-sm font-medium text-card-foreground">Email</label>
                      <input id="c-email" name="email" type="email" className="flex h-10 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="john@email.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="c-service" className="mb-1.5 block text-sm font-medium text-card-foreground">Service Needed</label>
                    <select id="c-service" name="service" className="flex h-10 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
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
                    <label htmlFor="c-message" className="mb-1.5 block text-sm font-medium text-card-foreground">Message</label>
                    <textarea id="c-message" name="message" rows={4} className="flex w-full rounded-sm border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="Tell us about your project…" />
                  </div>
                  {error && (
                    <p className="text-sm text-red-500">{error}</p>
                  )}
                  <button type="submit" disabled={loading} className="inline-flex h-11 w-full items-center justify-center rounded-sm bg-accent text-base font-bold text-accent-foreground shadow hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                    {loading ? "Submitting…" : "Submit Request"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
