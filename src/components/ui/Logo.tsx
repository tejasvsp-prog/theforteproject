import { siteConfig } from "@/lib/site";

/**
 * Hand-set masthead: the name in the display serif with a small terracotta
 * note-square. `tone` flips it for the ink footer.
 */
export default function Logo({
  tone = "dark",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const color = tone === "light" ? "text-paper" : "text-ink";
  return (
    <span className={`inline-flex items-baseline gap-2 ${color} ${className}`}>
      <span className="h-2 w-2 shrink-0 self-center bg-accent" aria-hidden />
      <span className="font-display text-[1.05rem] font-semibold leading-none tracking-[-0.01em]">
        {siteConfig.name}
      </span>
    </span>
  );
}
