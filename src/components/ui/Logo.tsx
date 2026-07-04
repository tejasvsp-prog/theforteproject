import { siteConfig } from "@/lib/site";

/**
 * Type-only wordmark with a single struck-note square in vermilion.
 * `tone` flips it for the ink-inverted footer.
 */
export default function Logo({
  tone = "dark",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const ink = tone === "light" ? "text-paper" : "text-ink";
  return (
    <span className={`inline-flex items-center gap-2.5 ${ink} ${className}`}>
      <span className="h-2.5 w-2.5 shrink-0 bg-accent" aria-hidden />
      <span className="font-display text-[0.95rem] font-semibold uppercase leading-none tracking-[0.05em] [font-stretch:112%] sm:text-base">
        {siteConfig.name}
      </span>
    </span>
  );
}
