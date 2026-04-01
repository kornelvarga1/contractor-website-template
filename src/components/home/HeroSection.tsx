import { useState, type FormEvent } from "react";
import { Phone, CheckCircle, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-roofing.jpg";
import { client } from "@/config/client";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const BUSINESS_ID = import.meta.env.VITE_BUSINESS_ID;

const HeroSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);

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
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
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
    <section className="relative flex min-h-[600px] items-center overflow-hidden bg-primary md:min-h-[680px]">
      {/* Background image */}
      <div
        className="absolute inset-0 hidden bg-cover bg-center md:block"
        style={{ backgroundImage: `url(${heroImage})` }}
        aria-hidden="true"
      />
      {/* Scrim */}
      <div className="absolute inset-0 bg-primary/70 md:bg-primary/72" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Left: headline + trust */}
          <div>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground sm:text-5xl">
              {client.heroHeadline}
            </h1>
            <p className="mt-4 text-lg text-primary-foreground/80">
              {client.heroSubheadline}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="flex items-center gap-2 text-sm font-semibold text-primary-foreground">
                <ShieldCheck className="h-5 w-5 text-accent" />
                Licensed &amp; Insured
              </div>
              <a
                href={`tel:${client.phoneTel}`}
                className="flex items-center gap-2 text-base font-bold text-accent hover:text-accent/90 transition-colors"
              >
                <Phone className="h-5 w-5" />
                {client.phone}
              </a>
            </div>
          </div>

          {/* Right: inline quote form */}
          <div className="rounded-sm bg-card p-6 shadow-xl lg:p-8">
            {submitted ? (
              <div className="flex flex-col items-center py-8 text-center">
                <CheckCircle className="h-12 w-12 text-accent" />
                <h3 className="mt-4 text-xl font-bold text-card-foreground">Thank You!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We received your request and will be in touch shortly.
                </p>
                <Link
                  to="/quote"
                  className="mt-6 inline-flex h-10 items-center rounded-sm bg-accent px-6 text-sm font-bold text-accent-foreground hover:bg-accent/90 transition-colors"
                >
                  Get a Full Quote
                </Link>
              </div>
            ) : (
              <>
                <h2 className="text-lg font-bold text-card-foreground">Get a Free Quote</h2>
                <p className="mt-1 text-sm text-muted-foreground">No obligation. We'll get back to you fast.</p>
                <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                  <div>
                    <label htmlFor="h-name" className="mb-1.5 block text-sm font-medium text-card-foreground">
                      Full Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="h-name"
                      name="name"
                      type="text"
                      required
                      maxLength={100}
                      className="flex h-10 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="h-phone" className="mb-1.5 block text-sm font-medium text-card-foreground">
                      Phone <span className="text-accent">*</span>
                    </label>
                    <input
                      id="h-phone"
                      name="phone"
                      type="tel"
                      required
                      maxLength={20}
                      className="flex h-10 w-full rounded-sm border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="(602) 555-1234"
                    />
                  </div>
                  <div>
                    <label htmlFor="h-message" className="mb-1.5 block text-sm font-medium text-card-foreground">
                      Short message about your needs
                    </label>
                    <textarea
                      id="h-message"
                      name="message"
                      rows={2}
                      maxLength={500}
                      className="flex w-full rounded-sm border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Tell us what you need…"
                    />
                  </div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={smsConsent}
                      onChange={(e) => setSmsConsent(e.target.checked)}
                      required
                      className="mt-1 h-4 w-4 shrink-0 rounded border-border accent-accent"
                    />
                    <span className="text-xs text-muted-foreground leading-relaxed">
                      I consent to receive text messages from{" "}
                      <strong className="text-foreground">{client.companyName}</strong> about my request.
                      Message &amp; data rates may apply. Reply STOP to opt out.{" "}
                      <Link to="/terms" className="text-accent underline">Terms</Link>{" "}
                      &amp;{" "}
                      <Link to="/privacy" className="text-accent underline">Privacy</Link>.
                    </span>
                  </label>
                  {error && <p className="text-sm text-red-500">{error}</p>}
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex h-11 w-full items-center justify-center rounded-sm bg-accent text-base font-bold text-accent-foreground shadow hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending…" : "SEND"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
