"use client";

import { motion } from "framer-motion";
import { easeOut } from "@/lib/motion";

/**
 * Abstract musical-staff illustration used in the hero.
 * Pure SVG — no stock imagery. Draws five staff lines, a treble
 * clef, and a scattering of notes that animate gently on mount.
 */
export default function MusicStaff({ className = "" }: { className?: string }) {
  const lines = [20, 40, 60, 80, 100];
  const notes = [
    { cx: 150, cy: 80, delay: 0.1 },
    { cx: 230, cy: 60, delay: 0.25 },
    { cx: 310, cy: 40, delay: 0.4 },
    { cx: 390, cy: 60, delay: 0.55 },
    { cx: 470, cy: 80, delay: 0.7 },
    { cx: 550, cy: 60, delay: 0.85 },
  ];

  return (
    <svg
      viewBox="0 0 640 160"
      fill="none"
      role="img"
      aria-label="An illustrated musical staff with notes"
      className={className}
    >
      {lines.map((y) => (
        <motion.line
          key={y}
          x1="40"
          x2="600"
          y1={y}
          y2={y}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeOpacity="0.35"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: easeOut, delay: 0.1 }}
        />
      ))}

      {/* Simplified treble clef */}
      <motion.path
        d="M78 118c-8-2-12-9-9-17 3-9 15-14 20-30 4-13-1-27-11-27-9 0-14 9-12 20 2 12 12 22 24 34 9 9 14 17 12 27-2 9-11 14-19 12-6-2-9-8-7-13 2-4 7-6 11-4"
        stroke="#c19a4b"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: easeOut, delay: 0.3 }}
      />

      {notes.map((n, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.8 + n.delay }}
        >
          <ellipse
            cx={n.cx}
            cy={n.cy}
            rx="9"
            ry="6.5"
            transform={`rotate(-20 ${n.cx} ${n.cy})`}
            fill="#12233f"
          />
          <line
            x1={n.cx + 8}
            y1={n.cy - 2}
            x2={n.cx + 8}
            y2={n.cy - 42}
            stroke="#12233f"
            strokeWidth="2"
          />
        </motion.g>
      ))}
    </svg>
  );
}
