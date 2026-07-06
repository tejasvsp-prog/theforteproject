import { siteConfig } from "@/lib/site";

/**
 * The brand mark: a navy vinyl record with light-blue groove segments and a
 * coral label, beside the "The forte Project" wordmark. Drawn inline so it
 * stays crisp at any size.
 */
export function RecordMark({ className = "" }: { className?: string }) {
  // Three grooved wedges, drawn as dashed concentric circles at rotations.
  const grooves = [13.5, 15.5, 17.5, 19.5, 21.5];
  const wedges = [0, 120, 240];
  return (
    <svg viewBox="0 0 48 48" aria-hidden className={className}>
      <circle cx="24" cy="24" r="23" fill="#2E3A66" />
      {wedges.map((rot) =>
        grooves.map((r) => (
          <circle
            key={`${rot}-${r}`}
            cx="24"
            cy="24"
            r={r}
            fill="none"
            stroke="#A5C3DE"
            strokeWidth="1.1"
            strokeDasharray={`${(2 * Math.PI * r) / 7} ${2 * Math.PI * r}`}
            transform={`rotate(${rot + 15} 24 24)`}
          />
        )),
      )}
      <circle cx="24" cy="24" r="9.5" fill="#D95F6A" />
      <circle cx="24" cy="24" r="8" fill="#E97862" />
      <circle cx="24" cy="24" r="1.6" fill="#F6E2E0" />
    </svg>
  );
}

export default function Logo({
  tone = "dark",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const color = tone === "light" ? "text-paper" : "text-ink";
  return (
    <span className={`group inline-flex items-center gap-2.5 ${color} ${className}`}>
      {/* The record spins a half-turn on hover. */}
      <RecordMark className="h-7 w-7 shrink-0 transition-transform duration-700 ease-signal group-hover:rotate-180" />
      <span className="font-display text-[1.05rem] leading-none tracking-[-0.01em]">
        The <b className="font-bold">forte</b> Project
      </span>
    </span>
  );
}
