import { useState, type FormEvent } from "react";
import { CheckCircle, Send } from "lucide-react";
import { client } from "@/config/client";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const BUSINESS_ID = import.meta.env.VITE_BUSINESS_ID;

const Discount = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) return;

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
      const res = await fetch(`${SUPABASE_URL}/functions/v1/discount-form-submission`, {
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
    <section className="min-h-[80vh] bg-primary flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        {submitted ? (
          <div className="rounded-md bg-primary-foreground/5 border border-primary-foreground/10 p-10 text-center">
            <CheckCircle className="mx-auto h-14 w-14 text-accent" />
            <h2 className="mt-5 text-2xl font-bold text-primary-foreground">
              You're All Set!
            </h2>
            <p className="mt-3 text-primary-foreground/70">
              We'll reach out shortly with your discount details. Thank you for choosing {client.companyName}!
            </p>
          </div>
        ) : (
          <div className="rounded-md bg-primary-foreground/5 border border-primary-foreground/10 p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-primary-foreground">
                {client.companyName}
              </h1>
              <p className="mt-2 text-lg font-semibold text-accent">
                GET {client.discountOffer}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="d-name" className="mb-1.5 block text-sm font-bold text-primary-foreground">
                  Full Name
                </label>
                <input
                  id="d-name"
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  className="flex h-12 w-full rounded-md border-0 bg-primary-foreground px-4 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label htmlFor="d-phone" className="mb-1.5 block text-sm font-bold text-primary-foreground">
                  Phone <span className="text-accent">*</span>
                </label>
                <input
                  id="d-phone"
                  name="phone"
                  type="tel"
                  required
                  maxLength={20}
                  className="flex h-12 w-full rounded-md border-0 bg-primary-foreground px-4 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  placeholder="(602) 555-1234"
                />
              </div>

              <div>
                <label htmlFor="d-message" className="mb-1.5 block text-sm font-bold text-primary-foreground">
                  Short summary of the work you need! <span className="text-accent">*</span>
                </label>
                <textarea
                  id="d-message"
                  name="message"
                  required
                  rows={3}
                  maxLength={1000}
                  className="flex w-full rounded-md border-0 bg-primary-foreground px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  placeholder="**Your message goes straight to my phone, I'll get back to you as soon as I'm available**"
                />
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-primary-foreground/30 accent-accent"
                />
                <span className="text-xs text-primary-foreground/60 leading-relaxed">
                  I agree to the{" "}
                  <a href="/terms" className="text-accent underline hover:text-accent/80 transition-colors">
                    terms &amp; conditions
                  </a>{" "}
                  provided by the company. By providing my phone number, I agree to receive text messages from the business.
                </span>
              </label>

              {error && (
                <p className="text-sm text-red-500">{error}</p>
              )}
              <button
                type="submit"
                disabled={!agreed || loading}
                className="flex h-14 w-full items-center justify-center gap-2 rounded-md bg-accent text-lg font-extrabold uppercase tracking-wide text-accent-foreground shadow-lg hover:bg-accent/90 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-5 w-5" />
                {loading ? "Sending…" : "GET MY DISCOUNT"}
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Discount;
