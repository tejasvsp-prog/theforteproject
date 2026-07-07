const items = [
  "Always free",
  "Virtual lessons",
  "Grades 5–12",
  "Student-led",
  "Okemos, Michigan",
] as const;

const glyphs = ["♪", "♩", "♫", "♬", "♪"] as const;

function Sequence() {
  return (
    <>
      {items.map((item, i) => (
        <span key={item} className="inline-flex items-center">
          <span className="t-kicker whitespace-nowrap text-ink/70">{item}</span>
          <span aria-hidden className="mx-6 font-display italic text-accent">
            {glyphs[i]}
          </span>
        </span>
      ))}
    </>
  );
}

/**
 * A slow ticker of the program's facts, keeping time under the hero like a
 * running bass line. Pure CSS animation; the global reduced-motion rule
 * freezes it in place.
 */
export default function Ticker() {
  return (
    <div className="overflow-hidden border-y hairline bg-surface py-4">
      <div className="animate-marquee flex w-max" aria-hidden="false">
        <div className="flex items-center">
          <Sequence />
        </div>
        <div className="flex items-center" aria-hidden>
          <Sequence />
        </div>
      </div>
    </div>
  );
}
