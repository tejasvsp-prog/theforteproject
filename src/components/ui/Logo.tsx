import { siteConfig } from "@/lib/site";

/**
 * Type-only wordmark with a glowing amber note-dot. Everything sits on a dark
 * field now, so the mark is always light; `tone` is kept for call-site compat.
 */
export default function Logo({
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 text-ink ${className}`}>
      <span
        className="h-2.5 w-2.5 shrink-0 rounded-full bg-accent shadow-[0_0_12px_2px_rgba(255,159,69,0.6)]"
        aria-hidden
      />
      <span className="font-display text-[0.95rem] font-semibold uppercase leading-none tracking-[0.02em] sm:text-base">
        {siteConfig.name}
      </span>
    </span>
  );
}
