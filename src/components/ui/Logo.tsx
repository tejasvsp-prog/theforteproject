import { siteConfig } from "@/lib/site";

/**
 * Brand wordmark: a hand-set quarter-note mark with a gold accent, next to
 * the name in the display serif. Replaces a generic boxed app-icon so the
 * identity reads as designed, not dropped in from a library.
 */
export default function Logo({
  tone = "dark",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const ink = tone === "light" ? "#ffffff" : "#12233f";
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 28 28"
        className="h-6 w-6 shrink-0"
        fill="none"
        aria-hidden
      >
        <line
          x1="20.5"
          y1="6"
          x2="20.5"
          y2="19"
          stroke={ink}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <ellipse
          cx="11.5"
          cy="20"
          rx="6"
          ry="4.3"
          transform="rotate(-22 11.5 20)"
          fill={ink}
        />
        <circle cx="20.5" cy="6" r="3" fill="#c19a4b" />
      </svg>
      <span
        className="font-serif text-lg font-medium leading-none tracking-tight sm:text-xl"
        style={{ color: ink }}
      >
        {siteConfig.name}
      </span>
    </span>
  );
}
