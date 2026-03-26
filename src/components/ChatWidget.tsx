import { useState, useEffect, type FormEvent } from "react";
import { MessageCircle, X } from "lucide-react";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const BUSINESS_ID = import.meta.env.VITE_BUSINESS_ID;

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!success) return;
    const timer = setTimeout(() => setOpen(false), 3000);
    return () => clearTimeout(timer);
  }, [success]);

  const handleClose = () => {
    setOpen(false);
    setSuccess(false);
    setError("");
  };

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
      const res = await fetch(`${SUPABASE_URL}/functions/v1/chat-widget-lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        setSuccess(true);
      } else {
        setError("Something went wrong. Try calling us instead.");
      }
    } catch {
      setError("Something went wrong. Try calling us instead.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3 mb-16 lg:mb-0">
      {open && (
        <div className="w-80 rounded-lg border border-border bg-card shadow-xl">
          <div className="flex items-start justify-between border-b border-border px-4 py-3">
            <div>
              <p className="font-bold text-card-foreground">Send us a message</p>
              <p className="text-xs text-muted-foreground">We'll text you back shortly</p>
            </div>
            <button
              onClick={handleClose}
              className="ml-2 rounded p-1 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="px-4 py-4">
            {success ? (
              <p className="py-4 text-center text-sm font-medium text-card-foreground">
                Thanks! We'll text you shortly.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="cw-name" className="mb-1 block text-xs font-medium text-card-foreground">
                    Full Name
                  </label>
                  <input
                    id="cw-name"
                    name="name"
                    type="text"
                    className="flex h-9 w-full rounded-sm border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="cw-phone" className="mb-1 block text-xs font-medium text-card-foreground">
                    Phone <span className="text-accent">*</span>
                  </label>
                  <input
                    id="cw-phone"
                    name="phone"
                    type="tel"
                    required
                    className="flex h-9 w-full rounded-sm border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="(602) 555-0123"
                  />
                </div>
                <div>
                  <label htmlFor="cw-message" className="mb-1 block text-xs font-medium text-card-foreground">
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="cw-message"
                    name="message"
                    required
                    rows={3}
                    className="flex w-full rounded-sm border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Tell us about your project…"
                  />
                </div>
                {error && (
                  <p className="text-xs text-red-500">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex h-9 w-full items-center justify-center rounded-sm bg-accent text-sm font-bold text-accent-foreground shadow hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg hover:bg-accent/90 active:scale-95 transition-all"
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
};

export default ChatWidget;
