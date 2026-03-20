import { useState, type FormEvent } from "react";
import { CheckCircle, Send } from "lucide-react";

const BUSINESS_ID = "1443661b-1d3e-4d0a-afd9-70610dc846f8";
const COMPANY_NAME = "Phoenix Roofing & Repair";
const DISCOUNT_OFFER = "10% Off Your First Service";

const Discount = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreed) return;

    const form = e.currentTarget;
    const data = {
      business_id: BUSINESS_ID,
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
      source: "discount-page",
    };

    setLoading(true);
    try {
      // Placeholder — wire to your endpoint
      await new Promise((r) => setTimeout(r, 800));
      setSubmitted(true);
    } catch {
      // handle error
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
              We'll reach out shortly with your discount details. Thank you for choosing {COMPANY_NAME}!
            </p>
          </div>
        ) : (
          <div className="rounded-md bg-primary-foreground/5 border border-primary-foreground/10 p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-primary-foreground">
                {COMPANY_NAME}
              </h1>
              <p className="mt-2 text-lg font-semibold text-accent">
                GET {DISCOUNT_OFFER}
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
