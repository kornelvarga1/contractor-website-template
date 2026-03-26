import { useState } from "react";
import { Star } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { client } from "@/config/client";

const BUSINESS_ID = import.meta.env.VITE_BUSINESS_ID;
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const FEEDBACK_ENDPOINT = `${SUPABASE_URL}/functions/v1/negative-feedback-received`;
const REVIEW_URL = `${SUPABASE_URL}/functions/v1/review-link-clicked?business_id=${BUSINESS_ID}`;

type Phase = "rate" | "positive" | "negative" | "submitted";

const WriteReview = () => {
  const [phase, setPhase] = useState<Phase>("rate");
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleRate = (stars: number) => {
    setRating(stars);
    if (stars >= 4) {
      setPhase("positive");
      setTimeout(() => {
        window.location.href = REVIEW_URL;
      }, 1500);
    } else {
      setPhase("negative");
    }
  };

  const [feedbackError, setFeedbackError] = useState("");

  const handleSubmitFeedback = async () => {
    if (!feedback.trim()) return;
    setSubmitting(true);
    setFeedbackError("");
    try {
      const res = await fetch(FEEDBACK_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
        body: JSON.stringify({
          business_id: BUSINESS_ID,
          contact_id: null,
          contact_first_name: name.trim() || "Anonymous",
          contact_phone: phone.trim() || null,
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

  const displayStars = hoveredStar || rating;

  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-background px-4 py-16">
      <div className="w-full max-w-lg text-center">
        {phase === "rate" && (
          <div className="animate-in fade-in duration-500">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl" style={{ lineHeight: 1.2 }}>
              How was your experience with {client.companyName}?
            </h1>
            <p className="mt-3 text-muted-foreground">Your feedback means the world to us</p>
            <div className="mt-8 flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <button
                  key={s}
                  onClick={() => handleRate(s)}
                  onMouseEnter={() => setHoveredStar(s)}
                  onMouseLeave={() => setHoveredStar(0)}
                  className="rounded-lg p-2 transition-transform active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`Rate ${s} star${s > 1 ? "s" : ""}`}
                >
                  <Star
                    className={`h-10 w-10 sm:h-12 sm:w-12 transition-colors ${
                      s <= displayStars
                        ? "fill-accent text-accent"
                        : "text-muted-foreground/30"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {phase === "positive" && (
          <div className="animate-in fade-in duration-500">
            <p className="text-2xl font-bold text-foreground sm:text-3xl" style={{ lineHeight: 1.2 }}>
              Thank you! We really appreciate it 🙏
            </p>
            <p className="mt-4 text-sm text-muted-foreground">Redirecting you to leave a Google review…</p>
          </div>
        )}

        {phase === "negative" && (
          <div className="animate-in fade-in duration-500">
            <div className="flex justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  className={`h-5 w-5 ${s <= rating ? "fill-accent text-accent" : "text-muted-foreground/30"}`}
                />
              ))}
            </div>
            <p className="text-lg font-semibold text-foreground sm:text-xl">
              We're sorry to hear that.
            </p>
            <p className="mt-1 text-muted-foreground">
              Please tell us what went wrong so we can make it right.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="h-11 rounded-sm border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone number"
                className="h-11 rounded-sm border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <Textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="What could we have done better?"
              className="mt-3 min-h-[120px]"
              required
            />
            {feedbackError && (
              <p className="mt-3 text-sm text-red-500">{feedbackError}</p>
            )}
            <button
              onClick={handleSubmitFeedback}
              disabled={!feedback.trim() || submitting}
              className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-sm bg-accent px-8 text-base font-bold text-accent-foreground shadow hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]"
            >
              {submitting ? "Sending…" : "Send Feedback"}
            </button>
          </div>
        )}

        {phase === "submitted" && (
          <div className="animate-in fade-in duration-500">
            <p className="text-2xl font-bold text-foreground sm:text-3xl" style={{ lineHeight: 1.2 }}>
              Thank you for letting us know.
            </p>
            <p className="mt-3 text-muted-foreground">We will be in touch shortly.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default WriteReview;
