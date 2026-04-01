import { useState, type FormEvent } from "react";
import { Phone, Mail, CheckCircle } from "lucide-react";
import { client } from "@/config/client";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
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
    <>
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <h1 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/70">
            Call, email, or fill out the form and we'll get back to you fast.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Contact Info */}
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
            </div>

            {/* Form */}
            <div className="rounded-sm border border-border bg-card p-6 shadow-sm lg:p-8">
              {submitted ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <CheckCircle className="h-12 w-12 text-accent" />
                  <h3 className="mt-4 text-xl font-bold text-card-foreground">Thank You!</h3>
                  <p className="mt-2 text-sm text-muted-foreground">We received your message and will be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="c-name" className="mb-1.5 block text-sm font-medium text-card-foreground">Full Name *</label>
                    <input id="c-name" name="name" type="text" required className="flex h-10 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="John Smith" />
                  </div>
                  <div>
                    <label htmlFor="c-phone" className="mb-1.5 block text-sm font-medium text-card-foreground">Phone *</label>
                    <input id="c-phone" name="phone" type="tel" required className="flex h-10 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="(602) 555-0123" />
                  </div>
                  <div>
                    <label htmlFor="c-message" className="mb-1.5 block text-sm font-medium text-card-foreground">Message</label>
                    <textarea id="c-message" name="message" rows={4} className="flex w-full rounded-sm border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="Tell us about your project…" />
                  </div>
                  {error && <p className="text-sm text-red-500">{error}</p>}
                  <button type="submit" disabled={loading} className="inline-flex h-11 w-full items-center justify-center rounded-sm bg-accent text-base font-bold text-accent-foreground shadow hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                    {loading ? "Submitting…" : "Send Message"}
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
