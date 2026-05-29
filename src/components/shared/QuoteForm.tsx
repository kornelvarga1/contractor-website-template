import { useState, type FormEvent } from "react";
import { CheckCircle } from "lucide-react";
import Logo from "@/components/shared/Logo";
import { Link } from "react-router-dom";
import { client } from "@/config/client";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const BUSINESS_ID = import.meta.env.VITE_BUSINESS_ID;

interface QuoteFormProps {
  variant?: "page" | "widget";
}

const QuoteForm = ({ variant = "page" }: QuoteFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consent) return;

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

  const card = (
    <div className="rounded-md bg-primary text-primary-foreground border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-6 sm:p-10">
      {submitted ? (
        <div className="flex flex-col items-center py-8 text-center">
          <CheckCircle className="h-12 w-12 text-accent" />
          <h3 className="mt-4 text-xl font-bold text-primary-foreground">We Got Your Request!</h3>
          <p className="mt-2 text-sm text-primary-foreground/70">
            We'll reach out shortly with your free quote. Thank you for choosing {client.companyName}!
          </p>
        </div>
      ) : (
        <>
          {/* Logo area */}
          <div className="mb-6 flex justify-center">
            <Logo variant="light" />
          </div>

          {/* Heading */}
          <h2 className="text-center text-2xl font-extrabold uppercase tracking-wide text-primary-foreground">
            GET A FREE QUOTE
          </h2>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="qf-name" className="mb-1.5 block text-sm font-medium text-primary-foreground/80">
                Full Name <span className="text-accent">*</span>
              </label>
              <input
                id="qf-name"
                name="name"
                type="text"
                required
                maxLength={100}
                className="flex h-11 w-full rounded-sm border border-border bg-white px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label htmlFor="qf-phone" className="mb-1.5 block text-sm font-medium text-primary-foreground/80">
                Phone <span className="text-accent">*</span>
              </label>
              <input
                id="qf-phone"
                name="phone"
                type="tel"
                required
                maxLength={20}
                className="flex h-11 w-full rounded-sm border border-border bg-white px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                placeholder={`Example: ${client.phone.slice(0, 5)} 555-1234`}
              />
            </div>

            <div>
              <label htmlFor="qf-message" className="mb-1.5 block text-sm font-medium text-primary-foreground/80">
                Short message about your needs <span className="text-accent">*</span>
              </label>
              <textarea
                id="qf-message"
                name="message"
                required
                rows={3}
                maxLength={1000}
                className="flex w-full rounded-sm border border-border bg-white px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                placeholder="**Your message goes straight to my phone, I'll get back to you as soon as I'm available**"
              />
            </div>

            {/* Single consent checkbox */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 rounded border-primary-foreground/30 accent-accent"
              />
              <span className="text-xs text-primary-foreground/60 leading-relaxed">
                I agree to the{" "}
                <Link to="/terms" className="text-accent underline hover:text-accent/80 transition-colors">
                  terms &amp; conditions
                </Link>{" "}
                provided by the company. By providing my phone number, I agree to receive text messages from the business.
              </span>
            </label>

            {error && <p className="text-sm text-red-400">{error}</p>}

            <button
              type="submit"
              disabled={!consent || loading}
              className="flex h-14 w-full items-center justify-center rounded-sm bg-accent text-lg font-extrabold uppercase tracking-wide text-accent-foreground shadow-lg hover:bg-accent/90 active:scale-[0.98] transition-all disabled:cursor-not-allowed"
            >
              {loading ? "Sending…" : "SEND"}
            </button>
          </form>
        </>
      )}
    </div>
  );

  if (variant === "page") {
    return (
      <section className="min-h-[80vh] bg-background flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-lg">
          {card}
        </div>
      </section>
    );
  }

  return card;
};

export default QuoteForm;
