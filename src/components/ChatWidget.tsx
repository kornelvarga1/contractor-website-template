import { useState, useEffect, type FormEvent } from "react";
import { MessageCircle, X, Send, ChevronDown, Wrench } from "lucide-react";

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
    <>
      {/* Teaser popup */}
      {teaserVisible && !open && (
        <div className="fixed bottom-20 right-4 z-50 flex items-start max-w-[220px] rounded-2xl rounded-br-sm bg-card border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.06)] ring-1 ring-accent/20 px-3 py-2.5 sm:px-4 sm:py-3 animate-in slide-in-from-bottom-2 fade-in duration-300">
          <p className="text-xs sm:text-sm text-card-foreground leading-snug pr-5">
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
        <div className="fixed bottom-20 right-4 z-50 w-80 rounded-lg max-h-[90vh] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_80px_rgba(245,158,11,0.08)] ring-1 ring-accent/20 animate-in slide-in-from-bottom-4 fade-in duration-300">
          {/* Header */}
          <div className="flex items-center justify-between bg-accent px-4 py-3">
            <div className="flex items-center gap-3">
              {/* Logo placeholder */}
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-foreground/20 shrink-0">
                <Wrench className="h-4 w-4 text-accent-foreground" />
              </div>
              <p className="font-bold text-accent-foreground text-sm">Have a question?</p>
            </div>
            <button
              onClick={handleClose}
              className="ml-2 rounded p-1 text-accent-foreground/70 hover:text-accent-foreground transition-colors shrink-0"
              aria-label="Close"
            >
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>

          {/* Body */}
          <div className="bg-white overflow-y-auto max-h-[calc(90vh-48px)]">
            {success ? (
              <div className="px-3 py-8 text-center">
                <p className="text-sm font-medium text-gray-700">
                  Thanks! We'll be in touch soon.
                </p>
              </div>
            ) : (
              <>
                {/* Message bubble */}
                <div className="flex items-start gap-2 bg-gray-100 rounded-lg mx-3 mt-3 p-3">
                  <Wrench className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 leading-snug">
                    This text goes straight to my personal phone. I'll make sure to get back to you the second I'm free!
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="px-3 pb-3">
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-accent mt-2"
                  />
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="Phone"
                    className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-accent mt-2"
                  />
                  <textarea
                    name="message"
                    required
                    rows={3}
                    placeholder="I want to know more"
                    className="w-full border border-gray-200 rounded px-3 py-2 text-sm focus:outline-none focus:border-accent mt-2 resize-none"
                  />

                  <label className="flex items-start gap-2 cursor-pointer mt-2">
                    <input
                      name="consent"
                      type="checkbox"
                      required
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-[hsl(var(--accent))]"
                    />
                    <span className="text-xs text-gray-500 leading-snug">
                      By submitting you agree to receive texts or e-mails for the provided channel. Rates may be applied.
                    </span>
                  </label>

                  {error && (
                    <p className="mt-2 text-xs text-red-500">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-3 flex h-11 w-full items-center justify-center gap-2 rounded bg-accent font-bold text-accent-foreground hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending…" : (
                      <>Send :) <Send className="h-4 w-4" /></>
                    )}
                  </button>
                </form>

                {/* Footer */}
                <p className="py-2 text-center text-xs text-gray-400">
                  Powered by <a href="https://vargaflow.com" target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">VargaFlow</a>
                </p>
              </>
            )}
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={handleButtonClick}
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[0_4px_24px_rgba(245,158,11,0.35),0_2px_8px_rgba(0,0,0,0.4)] hover:bg-accent/90 hover:shadow-[0_4px_32px_rgba(245,158,11,0.5)] active:scale-95 transition-all"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </>
  );
};

export default ChatWidget;
