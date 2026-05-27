import { client } from "@/config/client";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

/**
 * Brand logo — geometric house mark + company name.
 * variant="light"  → white text, for dark backgrounds (header)
 * variant="dark"   → dark text, for light backgrounds (footer)
 */
const Logo = ({ variant = "light", className = "" }: LogoProps) => {
  const textColor = variant === "light" ? "#ffffff" : "hsl(0, 0%, 10%)";
  const bodyFill  = variant === "light" ? "rgba(255,255,255,0.12)" : "hsl(0, 0%, 10%)";
  const accentFill = `hsl(${client.accentHsl})`;

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* ── Water drop mark ── */}
      <svg
        width="28"
        height="32"
        viewBox="0 0 28 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Outer drop */}
        <path
          d="M14 1C14 1 2 15 2 22A12 12 0 0 0 26 22C26 15 14 1 14 1Z"
          fill={accentFill}
        />
        {/* Inner fill — gives depth on dark bg */}
        <path
          d="M14 8C14 8 6 18 6 22A8 8 0 0 0 22 22C22 18 14 8 14 8Z"
          fill={bodyFill}
        />
        {/* Highlight shimmer */}
        <ellipse
          cx="10"
          cy="19"
          rx="2"
          ry="4"
          fill="white"
          fillOpacity={variant === "light" ? 0.2 : 0.1}
          transform="rotate(-20 10 19)"
        />
      </svg>

      {/* ── Name ── */}
      <div className="flex flex-col leading-none gap-[3px]">
        <span
          className="text-[16px] font-extrabold tracking-tight leading-none"
          style={{ color: textColor }}
        >
          {client.logoMain}
        </span>
        {client.logoSub && (
          <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-accent leading-none">
            &amp; {client.logoSub}
          </span>
        )}
      </div>
    </div>
  );
};

export default Logo;
