import { FileText } from "lucide-react";
import { forms, type FormKey } from "@/lib/site";
import Button from "./Button";

interface GoogleFormEmbedProps {
  formKey: FormKey;
  /** Height of the embedded iframe in pixels. */
  height?: number;
  className?: string;
}

/**
 * Renders an embedded Google Form when configured, or an elegant
 * placeholder when the form URL has not been set yet.
 *
 * To go live, set `embedUrl` for this form in `src/lib/site.ts`.
 */
export default function GoogleFormEmbed({
  formKey,
  height = 720,
  className = "",
}: GoogleFormEmbedProps) {
  const form = forms[formKey];

  if (form.embedUrl) {
    return (
      <div
        className={`overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-soft ${className}`}
      >
        <iframe
          src={form.embedUrl}
          title={form.label}
          width="100%"
          height={height}
          loading="lazy"
          className="w-full"
        >
          Loading…
        </iframe>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-5 rounded-3xl border border-dashed border-navy/20 bg-white/70 px-6 py-16 text-center shadow-soft ${className}`}
      style={{ minHeight: Math.min(height, 420) }}
    >
      <FileText
        className="h-8 w-8 text-gold-dark"
        strokeWidth={1.4}
        aria-hidden
      />
      <div className="space-y-1.5">
        <p className="heading-serif text-xl">{form.label}</p>
        <p className="mx-auto max-w-md text-sm leading-relaxed text-charcoal-muted">
          A Google Form will be embedded here. Once the form is ready, it drops
          straight into this space — no redesign required.
        </p>
      </div>
      {form.shareUrl ? (
        <Button href={form.shareUrl} external variant="secondary">
          Open the form
        </Button>
      ) : null}
    </div>
  );
}
