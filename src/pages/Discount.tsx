import { useState } from "react";
import Logo from "@/components/shared/Logo";
import { client } from "@/config/client";

const BUSINESS_ID = import.meta.env.VITE_BUSINESS_ID;
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const DISCOUNT_ENDPOINT = `${SUPABASE_URL}/functions/v1/discount-form-submission`;

type Phase = "form" | "submitted";

const Discount = () => {
  const [phase, setPhase] = useState<Phase>("form");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const progressPercent = phase === "form" ? 50 : 100;

  const handleSubmit = async () => {
    if (!name.trim() || !phone.trim()) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch(DISCOUNT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          business_id: BUSINESS_ID,
          contact_name: name.trim(),
          contact_phone: phone.trim(),
          message: message.trim(),
        }),
      });
      if (!res.ok) throw new Error("failed");
      setPhase("submitted");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#111] flex flex-col items-center justify-center px-4 py-12">

      {/* Above-container branding */}
      <div className="mb-6">
        <Logo variant="light" />
      </div>

      {/* Funnel container */}
      <div className="w-full max-w-md overflow-hidden rounded-xl border-2 border-accent shadow-[0_0_60px_rgba(245,158,11,0.1)]">

        {/* Container header */}
        {phase === "form" && (
          <div className="bg-[#1a1a1a] px-6 py-5 text-center border-b border-white/5">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 border border-accent/30 mb-3">
              <span className="text-accent font-black text-lg">{client.discountPercent}%</span>
            </div>
            <h1 className="text-xl font-bold text-white leading-snug">
              Claim Your {client.discountPercent}% Discount
            </h1>
            <p className="mt-1.5 text-sm text-white/60 leading-relaxed">
              Fill out the form below and we'll be in touch to lock in your discount.
            </p>
          </div>
        )}
        {phase === "submitted" && (
          <div className="bg-[#1a1a1a] px-6 py-4 text-center border-b border-white/5">
            <h1 className="text-lg font-bold text-white tracking-tight">You're locked in!</h1>
          </div>
        )}

        {/* White inner card */}
        <div className="bg-white px-6 py-6">

          {/* FORM phase */}
          {phase === "form" && (
            <div className="animate-in fade-in duration-300 space-y-4">
              <div className="mb-5 flex justify-center">
                <Logo variant="dark" />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#1a1a1a] uppercase tracking-wide">
                  Full Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Smith"
                  className="h-11 w-full rounded-md border border-input px-3 text-sm text-[#1a1a1a] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#1a1a1a] uppercase tracking-wide">
                  Phone <span className="text-accent">*</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(602) 555-0100"
                  className="h-11 w-full rounded-md border border-input px-3 text-sm text-[#1a1a1a] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-[#1a1a1a] uppercase tracking-wide">
                  Short summary of the work you need <span className="text-accent">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message goes straight to my phone, I'll get back to you as soon as I am available!"
                  rows={3}
                  className="w-full resize-none rounded-md border border-input px-3 py-2.5 text-sm text-[#1a1a1a] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 accent-accent"
                />
                <span className="text-xs text-muted-foreground leading-relaxed">
                  I agree to the{" "}
                  <a href="/terms" target="_blank" className="underline text-[#1a1a1a] hover:text-accent">
                    terms & conditions
                  </a>{" "}
                  provided by the company. By providing my phone number, I agree to receive text messages from the business.
                </span>
              </label>

              {error && (
                <p className="text-sm text-red-500">{error}</p>
              )}
            </div>
          )}

          {/* SUBMITTED phase */}
          {phase === "submitted" && (
            <div className="animate-in fade-in duration-300 flex flex-col items-center py-8 text-center gap-3">
              <span className="text-4xl">🎉</span>
              <p className="font-bold text-[#1a1a1a]">
                Your {client.discountPercent}% discount is reserved.
              </p>
              <p className="text-sm text-muted-foreground">
                We'll reach out shortly to get you scheduled.
              </p>
            </div>
          )}
        </div>

        {/* Dark footer bar */}
        {phase === "form" && (
          <div className="flex items-center justify-end bg-[#1a1a1a] px-6 py-3 border-t border-white/5">
            <button
              onClick={handleSubmit}
              disabled={!name.trim() || !phone.trim() || !message.trim() || !agreed || submitting}
              className="text-sm font-bold text-white transition-colors hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending…" : "Claim Discount ▶"}
            </button>
          </div>
        )}
      </div>

      {/* Progress bar */}
      <div className="mt-5 w-full max-w-md">
        <div className="mb-1.5 flex items-center justify-between">
          <span className="text-xs text-white/30 uppercase tracking-widest">Progress</span>
          <span className="text-xs font-semibold text-accent">{progressPercent}%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-accent transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

    </div>
  );
};

export default Discount;
