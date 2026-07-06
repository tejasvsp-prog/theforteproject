"use client";

import { motion, useReducedMotion } from "framer-motion";
import { RecordMark } from "@/components/ui/Logo";

const ease = [0.16, 1, 0.3, 1] as const;

/** The brand's vinyl record, turning slowly — like a lesson in progress. */
export function SpinningRecord({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden
      className={className}
      animate={reduce ? undefined : { rotate: 360 }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
    >
      <RecordMark className="h-full w-full" />
    </motion.div>
  );
}

/**
 * Hand-built music figures — line art set like engravings, each with one
 * quiet piece of motion: the staff draws itself, the divider's note glides
 * into place, the keys play a soft arpeggio. Everything renders static for
 * reduced-motion users.
 */

/** A five-line staff with a treble clef; draws itself in on first view. */
export function StaffPhrase({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const lines = [12, 30, 48, 66, 84];
  const notes = [
    { cx: 150, cy: 66 },
    { cx: 210, cy: 48 },
    { cx: 270, cy: 30 },
    { cx: 330, cy: 48 },
    { cx: 392, cy: 66 },
    { cx: 452, cy: 40 },
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
          strokeOpacity="0.3"
          strokeWidth="1.2"
          initial={reduce ? undefined : { pathLength: 0 }}
          whileInView={reduce ? undefined : { pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease, delay: 0.06 * i }}
        />
      ))}
      <motion.path
        d="M64 96c-7-2-10-9-7-15 3-8 13-12 17-25 3-11-1-22-9-22-8 0-12 8-10 17 2 10 10 18 20 28 8 8 12 14 10 22-2 8-9 12-16 10-5-2-8-7-6-11 2-4 6-5 9-3"
        stroke="#E97862"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduce ? undefined : { pathLength: 0, opacity: 0 }}
        whileInView={reduce ? undefined : { pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease, delay: 0.2 }}
      />
      {notes.map((n, i) => (
        <motion.g
          key={i}
          initial={reduce ? undefined : { opacity: 0, y: 6 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease, delay: 0.55 + i * 0.12 }}
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
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </motion.g>
      ))}
    </svg>
  );
}

/**
 * Section divider: a five-line staff with a terracotta note-head that
 * glides onto the staff as the divider scrolls into view.
 */
export function StaffDivider({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className={`w-full overflow-hidden ${className}`}>
      <svg viewBox="0 0 1200 28" preserveAspectRatio="none" className="h-6 w-full">
        {[4, 9, 14, 19, 24].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="1200"
            y2={y}
            stroke="#2E3A66"
            strokeOpacity="0.18"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
      <motion.span
        className="relative -mt-[1.35rem] mb-2 ml-[8%] block h-[9px] w-[13px]"
        initial={reduce ? undefined : { x: -80, opacity: 0 }}
        whileInView={reduce ? undefined : { x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease }}
      >
        {/* …then keeps a gentle bob, like a note holding its beat. */}
        <motion.span
          className="block h-full w-full -rotate-[18deg] rounded-[50%] bg-accent"
          animate={reduce ? undefined : { y: [0, -2.5, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.span>
    </div>
  );
}

/**
 * Upright-piano silhouette; the terracotta keys dip once in sequence when
 * the figure enters view — a quiet arpeggio.
 */
export function KeysArc({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 260 180" fill="none" aria-hidden className={className}>
      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4">
        {Array.from({ length: 9 }).map((_, i) => (
          <path key={i} d={`M${20 + i * 26} 24 L${20 + i * 26} 158`} />
        ))}
        <path d="M14 24 H246" />
        <path d="M14 158 H246" />
      </g>
      {[0, 1, 3, 4, 5].map((k, i) => (
        <motion.rect
          key={k}
          x={33 + k * 26}
          y={24}
          width={14}
          height={78}
          fill="#E97862"
          fillOpacity="0.85"
          initial={undefined}
          whileInView={reduce ? undefined : { y: [0, 5, 0] }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45, ease: "easeInOut", delay: 0.5 + i * 0.14 }}
        />
      ))}
    </svg>
  );
}

/**
 * A few faint note glyphs drifting very slowly — ambient depth for the hero
 * and the closing spread. Low opacity, long period, never in the way.
 */
export function AmbientNotes({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();
  const notes = [
    { left: "8%", top: "22%", size: "1.6rem", glyph: "♪", dur: 9, delay: 0 },
    { left: "86%", top: "16%", size: "2rem", glyph: "♩", dur: 11, delay: 1.5 },
    { left: "72%", top: "70%", size: "1.4rem", glyph: "♫", dur: 10, delay: 0.8 },
  ];
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {notes.map((n, i) => (
        <motion.span
          key={i}
          className="absolute select-none font-display italic text-accent/15"
          style={{ left: n.left, top: n.top, fontSize: n.size }}
          animate={reduce ? undefined : { y: [-4, -16, -4], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: n.dur, delay: n.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          {n.glyph}
        </motion.span>
      ))}
    </div>
  );
}
