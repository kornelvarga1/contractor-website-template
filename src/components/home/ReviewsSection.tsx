import { Link } from "react-router-dom";
import { client } from "@/config/client";
import { WaveDivider, WaveDividerTop } from "@/components/shared/Dividers";

const MAX_TEXT_LENGTH = 160;

// Google "G" logo as a colored SVG mark
const GoogleG = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const FilledStar = () => (
  <span style={{ color: "#FBBC05", fontSize: "1rem", lineHeight: 1 }}>★</span>
);

const ReviewsSection = () => {
  const { reviews, averageRating, totalReviews, googleReviewsUrl } = client;

  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${client.images.hero})` }}
        aria-hidden="true"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75" aria-hidden="true" />
      <WaveDividerTop />

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6">
        {/* Header */}
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-white">Reviews</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            See What Our Customers Say
          </h2>
        </div>

        {/* Summary bar */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <GoogleG />
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <FilledStar key={i} />
            ))}
          </div>
          <span className="text-sm font-bold text-white">{averageRating.toFixed(1)}</span>
          <span className="text-sm text-white/70">· {totalReviews} Google Reviews</span>
        </div>

        {/* Review cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => {
            const truncated = r.text.length > MAX_TEXT_LENGTH;
            const displayText = truncated ? r.text.slice(0, MAX_TEXT_LENGTH) + "…" : r.text;
            return (
              <div key={r.author} className="flex flex-col rounded-sm border border-border bg-card p-6 shadow-sm">
                {/* Top row */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <GoogleG />
                    <span className="text-sm font-semibold text-card-foreground">{r.author}</span>
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground">{r.time}</span>
                </div>
                {/* Stars */}
                <div className="mt-2 flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <FilledStar key={i} />
                  ))}
                </div>
                {/* Text */}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-card-foreground/80">
                  {displayText}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center rounded-sm bg-accent px-7 text-sm font-bold text-accent-foreground shadow-sm hover:bg-accent/90 transition-colors"
          >
            See All Reviews on Google
          </a>
          <Link
            to="/write-a-review"
            className="inline-flex h-10 items-center rounded-sm border border-border px-7 text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-colors"
          >
            Write a Review
          </Link>
        </div>
      </div>
      <WaveDivider />
    </section>
  );
};

export default ReviewsSection;
