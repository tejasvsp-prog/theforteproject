"use client";

import { motion } from "framer-motion";

type Note = {
  left: string;
  top: string;
  size: number;
  delay: number;
  duration: number;
  glyph: string;
};

const NOTES: Note[] = [
  { left: "8%", top: "22%", size: 26, delay: 0, duration: 7, glyph: "♪" },
  { left: "18%", top: "68%", size: 20, delay: 1.5, duration: 8, glyph: "♫" },
  { left: "82%", top: "30%", size: 30, delay: 0.8, duration: 9, glyph: "♩" },
  { left: "90%", top: "62%", size: 22, delay: 2.2, duration: 7.5, glyph: "♬" },
  { left: "50%", top: "12%", size: 18, delay: 1.1, duration: 8.5, glyph: "♪" },
];

/**
 * Softly drifting musical glyphs used as an ambient background accent.
 * Decorative only — hidden from assistive technology.
 */
export default function FloatingNotes({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {NOTES.map((n, i) => (
        <motion.span
          key={i}
          className="absolute select-none font-serif text-gold/40"
          style={{ left: n.left, top: n.top, fontSize: n.size }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 0.7, 0], y: [-6, -22, -6] }}
          transition={{
            duration: n.duration,
            delay: n.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {n.glyph}
        </motion.span>
      ))}
    </div>
  );
}
