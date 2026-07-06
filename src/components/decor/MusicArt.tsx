"use client";

import { motion, useReducedMotion } from "framer-motion";
import { signal } from "@/lib/motion";

/**
 * Hand-built music illustrations — no stock, no AI photos. Warm line-art
 * that draws itself in and drifts gently, giving the pages depth and a
 * crafted, editorial feel.
 */

/** A flowing five-line staff with a treble clef and a rising phrase of notes. */
export function StaffPhrase({ className = "" }: { className?: string }) {
  const rm = useReducedMotion();
  const lines = [12, 30, 48, 66, 84];
  const notes = [
    { cx: 150, cy: 66, d: 0.2 },
    { cx: 210, cy: 48, d: 0.32 },
    { cx: 270, cy: 30, d: 0.44 },
    { cx: 330, cy: 48, d: 0.56 },
    { cx: 392, cy: 66, d: 0.68 },
    { cx: 452, cy: 40, d: 0.8 },
  ];
  return (
    <svg
      viewBox="0 0 500 120"
      fill="none"
      role="img"
      aria-label="A musical staff with a rising phrase of notes"
      className={className}
    >
      {lines.map((y, i) => (
        <motion.path
          key={y}
          d={`M8 ${y} C 140 ${y - 6}, 360 ${y + 6}, 492 ${y}`}
          stroke="currentColor"
          strokeOpacity="0.28"
          strokeWidth="1.4"
          initial={rm ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: signal, delay: 0.05 * i }}
        />
      ))}
      {/* Simplified treble clef */}
      <motion.path
        d="M64 96c-7-2-10-9-7-15 3-8 13-12 17-25 3-11-1-22-9-22-8 0-12 8-10 17 2 10 10 18 20 28 8 8 12 14 10 22-2 8-9 12-16 10-5-2-8-7-6-11 2-4 6-5 9-3"
        stroke="#FF9F45"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={rm ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: signal, delay: 0.2 }}
      />
      {notes.map((n, i) => (
        <motion.g
          key={i}
          initial={rm ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: signal, delay: 0.5 + n.d }}
        >
          <ellipse
            cx={n.cx}
            cy={n.cy}
            rx="8"
            ry="5.6"
            transform={`rotate(-22 ${n.cx} ${n.cy})`}
            fill="currentColor"
          />
          <path
            d={`M${n.cx + 7} ${n.cy - 1} L${n.cx + 7} ${n.cy - 34}`}
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </motion.g>
      ))}
    </svg>
  );
}

/** Abstract upright-piano / keyboard silhouette in warm line-art. */
export function KeysArc({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 180" fill="none" aria-hidden className={className}>
      <defs>
        <linearGradient id="keysfade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="currentColor" stopOpacity="0.9" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <g stroke="url(#keysfade)" strokeWidth="1.6">
        {Array.from({ length: 9 }).map((_, i) => (
          <path
            key={i}
            d={`M${20 + i * 26} 24 L${20 + i * 26} 158`}
          />
        ))}
        <path d="M14 24 H246" />
        <path d="M14 158 H246" />
      </g>
      {[0, 1, 3, 4, 5].map((i) => (
        <rect
          key={i}
          x={33 + i * 26}
          y={24}
          width={14}
          height={78}
          rx={2}
          fill="#FF9F45"
          fillOpacity="0.85"
        />
      ))}
    </svg>
  );
}

/** A few softly drifting note glyphs for ambient depth. */
export function FloatingNotes({ className = "" }: { className?: string }) {
  const rm = useReducedMotion();
  const notes = [
    { left: "6%", top: "18%", size: 22, glyph: "♪", delay: 0, dur: 7 },
    { left: "88%", top: "26%", size: 30, glyph: "♫", delay: 1.2, dur: 9 },
    { left: "80%", top: "72%", size: 20, glyph: "♩", delay: 0.6, dur: 8 },
    { left: "14%", top: "78%", size: 26, glyph: "♬", delay: 1.8, dur: 7.5 },
  ];
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {notes.map((n, i) => (
        <motion.span
          key={i}
          className="absolute select-none font-display text-accent/30"
          style={{ left: n.left, top: n.top, fontSize: n.size }}
          animate={
            rm ? {} : { y: [-6, -20, -6], opacity: [0.25, 0.5, 0.25] }
          }
          transition={{ duration: n.dur, delay: n.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          {n.glyph}
        </motion.span>
      ))}
    </div>
  );
}

/** Soft top-edge curve for organic section transitions. */
export function CurveDivider({
  className = "",
  fill = "#fcf8ef",
  flip = false,
}: {
  className?: string;
  fill?: string;
  flip?: boolean;
}) {
  return (
    <div className={`pointer-events-none absolute inset-x-0 ${flip ? "bottom-0" : "top-0"} leading-[0] ${className}`} aria-hidden>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className={`h-[40px] w-full sm:h-[60px] ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M0 60 C 360 4, 1080 4, 1440 60 L1440 0 L0 0 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
