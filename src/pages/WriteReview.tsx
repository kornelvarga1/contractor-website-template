import { useState, useEffect } from "react";
import Logo from "@/components/shared/Logo";
import { client } from "@/config/client";

const BUSINESS_ID = import.meta.env.VITE_BUSINESS_ID;
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const FEEDBACK_ENDPOINT = `${SUPABASE_URL}/functions/v1/negative-feedback-received`;
const REVIEW_URL = `${SUPABASE_URL}/functions/v1/review-link-clicked?business_id=${BUSINESS_ID}`;

type Phase = "rate" | "positive" | "negative" | "submitted";

const RATING_OPTIONS = [
  { value: 5, stars: "⭐⭐⭐⭐⭐", label: "5 Stars" },
  { value: 4, stars: "⭐⭐⭐⭐", label: "4 Stars" },
  { value: 3, stars: "⭐⭐⭐", label: "3 Stars" },
  { value: 2, stars: "⭐⭐", label: "2 Stars" },
  { value: 1, stars: "⭐", label: "1 Star" },
];

const WriteReview = () => {
  const [phase, setPhase] = useState<Phase>("rate");
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [feedbackError, setFeedbackError] = useState("");
  useEffect(() => {
    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted) window.location.reload();
    };
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  useEffect(() => {
    if (phase !== "positive") return;
    const t = setTimeout(() => {
      window.location.replace(REVIEW_URL);
    }, 2000);
    return () => clearTimeout(t);
  }, [phase]);

  const handleRate = (value: number) => {
    setRating(value);
    if (value >= 4) setPhase("positive");
    else setPhase("negative");
  };

  const handleSubmitFeedback = async () => {
    if (!feedback.trim()) return;
    setSubmitting(true);
    setFeedbackError("");
    try {
      const res = await fetch(FEEDBACK_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          business_id: BUSINESS_ID,
          contact_id: null,
          contact_first_name: name.trim() || "Anonymous",
          contact_email: email.trim() || null,
          star_rating: rating,
          feedback_text: feedback,
        }),
      });
      if (!res.ok) throw new Error("failed");
      setPhase("submitted");
    } catch {
      setFeedbackError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const progressPercent =
    phase === "rate" ? 0 : phase === "negative" ? 50 : 100;

  return (
    <div className="min-h-screen bg-[#111] flex flex-col items-center justify-center px-4 py-12">

      {/* Above-container branding */}
      <div className="mb-6">
        <Logo variant="light" />
      </div>

      {/* Funnel container */}
      <div className="w-full max-w-md overflow-hidden rounded-xl border-2 border-accent shadow-[0_0_60px_rgba(245,158,11,0.1)]">

        {/* ── Container header ── */}
        {(phase === "rate" || phase === "positive") && (
          <div className="bg-[#1a1a1a] px-6 py-4 text-center border-b border-white/5">
            <h1 className="text-lg font-bold text-white tracking-tight">
              How would you rate us?
            </h1>
          </div>
        )}
        {phase === "negative" && (
          <div className="bg-[#1a1a1a] px-6 py-5 text-center border-b border-white/5">
            <h1 className="text-xl font-bold text-white leading-snug">
              Sorry to hear that you're not satisfied.
            </h1>
            <p className="mt-1.5 text-sm text-white/60 leading-relaxed">
              Please provide us with your feedback and we'll do our best to improve.
            </p>
          </div>
        )}
        {phase === "submitted" && (
          <div className="bg-[#1a1a1a] px-6 py-4 text-center border-b border-white/5">
            <h1 className="text-lg font-bold text-white tracking-tight">Thank you!</h1>
          </div>
        )}

        {/* ── White inner card ── */}
        <div className="bg-white px-6 py-6">

          {/* RATE phase */}
          {phase === "rate" && (
            <div className="animate-in fade-in duration-300">
              {/* Inner logo */}
              <div className="mb-5 flex justify-center">
                <Logo variant="dark" />
              </div>

              <p className="mb-3 text-sm font-bold text-[#1a1a1a]">
                Please Rate Us <span className="text-accent">*</span>
              </p>

              <div className="space-y-2">
                {RATING_OPTIONS.map((opt) => (
                  <label
                    key={opt.value}
                    onClick={() => handleRate(opt.value)}
                    className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 transition-all duration-150 ${
                      rating === opt.value
                        ? "border-accent bg-accent/5 shadow-sm"
                        : "border-border hover:border-accent/40 hover:bg-muted/30"
                    }`}
                  >
                    <input
                      type="radio"
                      name="rating"
                      value={opt.value}
                      checked={rating === opt.value}
                      readOnly
                      className="h-4 w-4 shrink-0 accent-accent pointer-events-none"
                    />
                    <span className="text-base leading-none">{opt.stars}</span>
                    <span className="text-sm font-bold text-[#1a1a1a]">({opt.label})</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* POSITIVE phase */}
          {phase === "positive" && (
            <div className="py-10" />
          )}

          {/* NEGATIVE phase */}
          {phase === "negative" && (
            <div className="animate-in fade-in duration-300 space-y-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name (optional)"
                className="h-11 w-full rounded-md border border-input px-3 text-sm text-[#1a1a1a] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email (optional)"
                className="h-11 w-full rounded-md border border-input px-3 text-sm text-[#1a1a1a] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Your Feedback (Please let us know what we can do to improve?)"
                rows={4}
                className="w-full resize-none rounded-md border border-input px-3 py-2.5 text-sm text-[#1a1a1a] placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              {feedbackError && (
                <p className="text-sm text-red-500">{feedbackError}</p>
              )}
            </div>
          )}

          {/* SUBMITTED phase */}
          {phase === "submitted" && (
            <div className="animate-in fade-in duration-300 flex flex-col items-center py-8 text-center gap-3">
              <span className="text-4xl">🙏</span>
              <p className="font-bold text-[#1a1a1a]">Thank you for letting us know.</p>
              <p className="text-sm text-muted-foreground">We will be in touch shortly.</p>
            </div>
          )}
        </div>

        {/* ── Dark footer bar ── */}
        {phase === "negative" && (
          <div className="flex items-center justify-end bg-[#1a1a1a] px-6 py-3 border-t border-white/5">
            <button
              onClick={handleSubmitFeedback}
              disabled={!feedback.trim() || submitting}
              className="text-sm font-bold text-white transition-colors hover:text-accent disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending…" : "Submit ▶"}
            </button>
          </div>
        )}
      </div>

      {/* ── Progress bar ── */}
      <div className="mt-5 w-full max-w-md">
        <div className="mb-1.5 flex items-center justify-between">
          <span className="text-xs text-white/30 uppercase tracking-widest">Progress</span>
          <span className="text-xs font-semibold text-accent">{progressPercent}%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-accent transition-all duration-500 ease-out"
            style={{ width: `${progressPercent === 0 ? 2 : progressPercent}%` }}
          />
        </div>
      </div>

    </div>
  );
};

export default WriteReview;
