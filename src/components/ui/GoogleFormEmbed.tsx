import { forms, type FormKey } from "@/lib/site";
import Button from "./Button";

interface GoogleFormEmbedProps {
  formKey: FormKey;
  height?: number;
  className?: string;
  /** Render the placeholder in paper-on-ink for use on inverted panels. */
  tone?: "light" | "dark";
}

/**
 * Embeds a Google Form when configured, or an elegant boxless placeholder
 * when the URL hasn't been set. To go live, set `embedUrl` in `src/lib/site.ts`.
 */
export default function GoogleFormEmbed({
  formKey,
  height = 720,
  className = "",
  tone = "dark",
}: GoogleFormEmbedProps) {
  const form = forms[formKey];

  if (form.embedUrl) {
    return (
      <div className={`border border-ink ${className}`}>
        <iframe
          src={form.embedUrl}
          title={form.label}
          width="100%"
          height={height}
          loading="lazy"
          className="block w-full"
        >
          Loading…
        </iframe>
      </div>
    );
  }

  const borderCls = tone === "light" ? "border-paper/30" : "hairline";
  const muted = tone === "light" ? "text-paper/70" : "text-ink/65";

  return (
    <div
      className={`flex flex-col items-start justify-center border ${borderCls} px-8 py-14 md:px-12 ${className}`}
      style={{ minHeight: Math.min(height, 360) }}
    >
      <p className="t-kicker text-accent">{form.label}</p>
      <p className={`t-body mt-5 max-w-prose ${muted}`}>
        A Google Form will be embedded here. Once the form is ready, it drops
        straight into this space — no redesign required.
      </p>
      {form.shareUrl ? (
        <div className="mt-8">
          <Button
            href={form.shareUrl}
            external
            variant={tone === "light" ? "onDark" : "secondary"}
          >
            Open the form <span aria-hidden>→</span>
          </Button>
        </div>
      ) : null}
    </div>
  );
}
