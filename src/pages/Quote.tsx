import { useState, type FormEvent } from "react";
import { CheckCircle, Send } from "lucide-react";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const BUSINESS_ID = import.meta.env.VITE_BUSINESS_ID;
const COMPANY_NAME = "Phoenix Roofing & Repair";
const COMPANY_PHONE = "(602) 497-0154";

const Quote = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [serviceConsent, setServiceConsent] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!marketingConsent && !serviceConsent) return;

    const form = e.currentTarget;
    const body = {
      business_id: BUSINESS_ID,
      contact_name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      contact_phone: (form.elements.namedItem("phone") as HTMLInputElement).value.trim(),
      contact_email: "",
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

  const anyConsent = marketingConsent || serviceConsent;

  return (
    <section className="min-h-[80vh] bg-background flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg">
        {submitted ? (
          <div className="rounded-md border border-border bg-card p-10 text-center shadow-sm">
            <CheckCircle className="mx-auto h-14 w-14 text-accent" />
            <h2 className="mt-5 text-2xl font-bold text-card-foreground">
              We Got Your Request!
            </h2>
            <p className="mt-3 text-muted-foreground">
              We'll reach out shortly with your free quote. Thank you for choosing {COMPANY_NAME}!
            </p>
          </div>
        ) : (
          <div className="rounded-md border border-border bg-card p-8 shadow-sm">
            <h1
              className="text-center text-xl font-extrabold uppercase tracking-wide text-card-foreground sm:text-2xl"
              style={{ lineHeight: 1.2 }}
            >
              Get a Free Quote
            </h1>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="q-name" className="mb-1.5 block text-sm font-bold text-card-foreground">
                  Full Name <span className="text-accent">*</span>
                </label>
                <input
                  id="q-name"
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  className="flex h-12 w-full rounded-md border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="q-phone" className="mb-1.5 block text-sm font-bold text-card-foreground">
                  Phone <span className="text-accent">*</span>
                </label>
                <input
                  id="q-phone"
                  name="phone"
                  type="tel"
                  required
                  maxLength={20}
                  className="flex h-12 w-full rounded-md border border-input bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  placeholder="(602) 555-1234"
                />
              </div>

              <div>
                <label htmlFor="q-message" className="mb-1.5 block text-sm font-bold text-card-foreground">
                  Short message about your needs <span className="text-accent">*</span>
                </label>
                <textarea
                  id="q-message"
                  name="message"
                  required
                  rows={4}
                  maxLength={1000}
                  className="flex w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  placeholder="**Your message goes straight to my phone, I'll get back to you as soon as I'm available**"
                />
              </div>

              {/* Marketing SMS consent */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={marketingConsent}
                  onChange={(e) => setMarketingConsent(e.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 rounded border-border accent-accent"
                />
                <span className="text-xs text-muted-foreground leading-relaxed">
                  I consent to receive marketing text messages from{" "}
                  <strong className="text-foreground">{COMPANY_NAME}</strong> at{" "}
                  <strong className="text-foreground">{COMPANY_PHONE}</strong>. Frequency may vary.
                  Message &amp; data rates may apply. Text HELP for assistance, reply STOP to opt out.
                </span>
              </label>

              {/* Service SMS consent */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={serviceConsent}
                  onChange={(e) => setServiceConsent(e.target.checked)}
                  className="mt-1 h-4 w-4 shrink-0 rounded border-border accent-accent"
                />
                <span className="text-xs text-muted-foreground leading-relaxed">
                  I consent to receive non-marketing text messages from{" "}
                  <strong className="text-foreground">{COMPANY_NAME}</strong> regarding appointment
                  confirmations and reminders, customer support updates, and service-related follow-ups.
                  Message &amp; data rates may apply. Text HELP for assistance, reply STOP to opt out.
                </span>
              </label>

              {error && (
                <p className="text-sm text-red-500">{error}</p>
              )}
              <button
                type="submit"
                disabled={!anyConsent || loading}
                className="flex h-14 w-full items-center justify-center gap-2 rounded-md bg-primary text-lg font-extrabold uppercase tracking-wide text-primary-foreground shadow-lg hover:bg-primary/90 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
                {loading ? "Sending…" : "SEND"}
              </button>
            </form>

            <div className="mt-5 flex items-center justify-center gap-1 text-xs">
              <a href="/privacy" className="text-accent underline hover:text-accent/80 transition-colors">
                Privacy Policy
              </a>
              <span className="text-muted-foreground">|</span>
              <a href="/terms" className="text-accent underline hover:text-accent/80 transition-colors">
                Terms &amp; Conditions
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Quote;
