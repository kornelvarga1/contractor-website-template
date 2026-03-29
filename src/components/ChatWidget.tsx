import { useState, useEffect, type FormEvent } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { client } from "@/config/client";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const BUSINESS_ID = import.meta.env.VITE_BUSINESS_ID;

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [teaserVisible, setTeaserVisible] = useState(false);
  const [teaserDismissed, setTeaserDismissed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // Auto-show teaser after 2s on first load
  useEffect(() => {
    if (teaserDismissed) return;
    const timer = setTimeout(() => setTeaserVisible(true), 2000);
    return () => clearTimeout(timer);
  }, [teaserDismissed]);

  // Auto-close modal 8 minutes after success
  useEffect(() => {
    if (!success) return;
    const timer = setTimeout(() => {
      setOpen(false);
      setSuccess(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, [success]);

  const handleButtonClick = () => {
    if (open) {
      setOpen(false);
      setSuccess(false);
      setError("");
    } else {
      setOpen(true);
      setTeaserVisible(false);
      setTeaserDismissed(true);
      setError("");
    }
  };

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
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
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

      {/* Teaser popup */}
      {teaserVisible && !open && (
        <div className="relative flex items-start max-w-[260px] rounded-2xl rounded-br-sm bg-card border border-accent/40 shadow-lg px-4 py-3 animate-in slide-in-from-bottom-2 fade-in duration-300">
          <p className="text-sm text-card-foreground leading-snug pr-5">
            Shoot me any questions and I'll get back to you as soon as I'm free! (I promise)
          </p>
          <button
            onClick={() => { setTeaserVisible(false); setTeaserDismissed(true); }}
            className="absolute top-1.5 right-1.5 rounded p-0.5 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Dismiss"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* Form modal */}
      {open && (
        <div className="w-[320px] rounded-2xl bg-card border border-border shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="flex items-start justify-between bg-accent px-4 py-3">
            <div>
              <p className="font-bold text-accent-foreground text-sm leading-tight">
                Have a question?
              </p>
              <p className="text-xs text-accent-foreground/80 mt-0.5 max-w-[220px] leading-snug">This text goes straight to my personal phone. I'll make sure to get back to you the second I am free!</p>
            </div>
            <button
              onClick={handleClose}
              className="ml-2 rounded p-1 text-accent-foreground/70 hover:text-accent-foreground transition-colors shrink-0"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Body */}
          <div className="px-4 py-4">
            {success ? (
              <div className="py-6 text-center">
                <p className="text-sm font-medium text-card-foreground">
                  Thanks! We'll be in touch shortly.
                </p>
              </div>
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
                    className="flex h-9 w-full rounded-md border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
                    className="flex h-9 w-full rounded-md border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
                    placeholder="Tell us about your project…"
                  />
                </div>
                {error && (
                  <p className="text-xs text-destructive">{error}</p>
                )}
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    id="cw-consent"
                    name="consent"
                    type="checkbox"
                    required
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-[hsl(var(--accent))]"
                  />
                  <span className="text-[10px] text-muted-foreground leading-snug">
                    By submitting you agree to receive texts or e-mails for the provided channel. Rates may be applied.
                  </span>
                </label>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex h-9 w-full items-center justify-center gap-2 rounded-md bg-accent text-sm font-bold text-accent-foreground shadow hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending…" : (
                    <>Send :) <Send className="h-3.5 w-3.5" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={handleButtonClick}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg hover:bg-accent/90 active:scale-95 transition-all"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
};

export default ChatWidget;
