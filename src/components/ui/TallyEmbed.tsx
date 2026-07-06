"use client";

import { useEffect } from "react";
import { forms, type FormKey } from "@/lib/site";
import Button from "./Button";

interface TallyEmbedProps {
  formKey: FormKey;
  /** Fallback height (px) before Tally's dynamicHeight kicks in. */
  height?: number;
  className?: string;
  title?: string;
  /** Render the empty-state placeholder in paper-on-ink for inverted panels. */
  tone?: "light" | "dark";
}

declare global {
  interface Window {
    Tally?: { loadEmbeds: () => void };
  }
}

const TALLY_SCRIPT = "https://tally.so/widgets/embed.js";

/**
 * Embeds a Tally form. Tally's embed.js watches for `data-tally-src` iframes
 * and drives the `dynamicHeight` auto-resize via postMessage. If the script is
 * blocked, we still set the iframe src ourselves so the form loads at a fixed
 * height — it degrades, it never disappears.
 */
export default function TallyEmbed({
  formKey,
  height = 500,
  className = "",
  title,
  tone = "dark",
}: TallyEmbedProps) {
  const form = forms[formKey];
  const hasForm = Boolean(form.embedUrl);

  useEffect(() => {
    if (!hasForm) return;

    const loadEmbeds = () => {
      if (typeof window.Tally !== "undefined") {
        window.Tally.loadEmbeds();
        return;
      }
      // Script unavailable — set src directly so the form still renders.
      document
        .querySelectorAll<HTMLIFrameElement>("iframe[data-tally-src]:not([src])")
        .forEach((el) => {
          if (el.dataset.tallySrc) el.src = el.dataset.tallySrc;
        });
    };

    if (typeof window.Tally !== "undefined") {
      loadEmbeds();
    } else if (document.querySelector(`script[src="${TALLY_SCRIPT}"]`) == null) {
      const s = document.createElement("script");
      s.src = TALLY_SCRIPT;
      s.onload = loadEmbeds;
      s.onerror = loadEmbeds;
      document.body.appendChild(s);
    } else {
      loadEmbeds();
    }
  }, [hasForm]);

  if (hasForm) {
    return (
      <iframe
        data-tally-src={form.embedUrl}
        loading="lazy"
        width="100%"
        height={height}
        title={title ?? form.label}
        style={{ border: 0 }}
        className={`block w-full ${className}`}
      />
    );
  }

  // No form configured yet — quiet placeholder rather than a broken embed.
  const borderCls = tone === "light" ? "border-paper/30" : "hairline";
  const muted = tone === "light" ? "text-paper/70" : "text-ink/65";
  return (
    <div
      className={`flex flex-col items-start justify-center border ${borderCls} px-8 py-14 md:px-12 ${className}`}
      style={{ minHeight: Math.min(height, 360) }}
    >
      <p className="t-kicker text-navy">{form.label}</p>
      <p className={`t-body mt-5 max-w-prose ${muted}`}>
        This form isn&apos;t ready just yet — check back soon.
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
