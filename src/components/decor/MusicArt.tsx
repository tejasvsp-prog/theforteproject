/**
 * Hand-built music figures — static line art, set like engravings in a
 * printed page. No stock imagery, no animation.
 */

/** A flowing five-line staff with a treble clef and a rising phrase. */
export function StaffPhrase({ className = "" }: { className?: string }) {
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
      {lines.map((y) => (
        <path
          key={y}
          d={`M8 ${y} C 140 ${y - 6}, 360 ${y + 6}, 492 ${y}`}
          stroke="currentColor"
          strokeOpacity="0.3"
          strokeWidth="1.2"
        />
      ))}
      {/* Simplified treble clef, struck in terracotta */}
      <path
        d="M64 96c-7-2-10-9-7-15 3-8 13-12 17-25 3-11-1-22-9-22-8 0-12 8-10 17 2 10 10 18 20 28 8 8 12 14 10 22-2 8-9 12-16 10-5-2-8-7-6-11 2-4 6-5 9-3"
        stroke="#A34A2A"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {notes.map((n, i) => (
        <g key={i}>
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
        </g>
      ))}
    </svg>
  );
}

/**
 * Section divider drawn as a five-line staff with a single terracotta
 * note-head resting on it — the site's recurring musical rule.
 */
export function StaffDivider({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`w-full ${className}`}>
      <svg viewBox="0 0 1200 28" preserveAspectRatio="none" className="h-6 w-full">
        {[4, 9, 14, 19, 24].map((y) => (
          <line
            key={y}
            x1="0"
            y1={y}
            x2="1200"
            y2={y}
            stroke="#232019"
            strokeOpacity="0.12"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
      <span className="relative -mt-[1.35rem] mb-2 ml-[8%] block h-[9px] w-[13px] -rotate-[18deg] rounded-[50%] bg-accent" />
    </div>
  );
}

/** Abstract upright-piano silhouette in line-art. */
export function KeysArc({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 180" fill="none" aria-hidden className={className}>
      <g stroke="currentColor" strokeOpacity="0.55" strokeWidth="1.4">
        {Array.from({ length: 9 }).map((_, i) => (
          <path key={i} d={`M${20 + i * 26} 24 L${20 + i * 26} 158`} />
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
          fill="#A34A2A"
          fillOpacity="0.85"
        />
      ))}
    </svg>
  );
}
