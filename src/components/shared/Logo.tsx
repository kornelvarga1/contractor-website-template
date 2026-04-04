import { client } from "@/config/client";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

// Splits "Phoenix Roofing & Repair" → ["Phoenix Roofing", "Repair"]
const [mainName, subName] = client.companyName.split(" & ");

/**
 * Brand logo — geometric house mark + company name.
 * variant="light"  → white text, for dark backgrounds (header)
 * variant="dark"   → dark text, for light backgrounds (footer)
 */
const Logo = ({ variant = "light", className = "" }: LogoProps) => {
  const textColor = variant === "light" ? "#ffffff" : "hsl(0, 0%, 10%)";
  const bodyFill  = variant === "light" ? "rgba(255,255,255,0.12)" : "hsl(0, 0%, 10%)";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* ── House mark ── */}
      <svg
        width="38"
        height="32"
        viewBox="0 0 38 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* House body */}
        <rect x="3" y="17" width="32" height="15" rx="1.5" fill={bodyFill} />

        {/* Roof triangle — amber */}
        <path d="M0 18.5L19 1L38 18.5H0Z" fill="#f59e0b" />

        {/* Chimney — amber */}
        <rect x="25" y="2.5" width="5" height="10" rx="1" fill="#f59e0b" />

        {/* Door — amber tint */}
        <rect
          x="13.5"
          y="22"
          width="11"
          height="10"
          rx="1"
          fill="#f59e0b"
          fillOpacity={variant === "light" ? 0.35 : 0.25}
        />
      </svg>

      {/* ── Name ── */}
      <div className="flex flex-col leading-none gap-[3px]">
        <span
          className="text-[15px] font-extrabold tracking-tight leading-none"
          style={{ color: textColor }}
        >
          {mainName}
        </span>
        <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-accent leading-none">
          &amp; {subName}
        </span>
      </div>
    </div>
  );
};

export default Logo;
