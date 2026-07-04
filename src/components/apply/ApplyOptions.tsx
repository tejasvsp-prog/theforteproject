"use client";

import Link from "next/link";

interface Path {
  tag: string;
  title: string;
  description: string;
  cta: string;
  anchor: string;
  tone: "paper" | "ink";
}

const paths: Path[] = [
  {
    tag: "Path A",
    title: "I have an instrument",
    description:
      "Receive individualized, performance-focused instruction from a musician who plays what you play.",
    cta: "Apply for Performance Lessons",
    anchor: "#performance",
    tone: "paper",
  },
  {
    tag: "Path B",
    title: "I don't have an instrument",
    description:
      "Learn music theory, composition, rhythm, and ear training — no instrument required to begin.",
    cta: "Apply for Theory Lessons",
    anchor: "#theory",
    tone: "ink",
  },
];

/**
 * The two-path selector — one of the two sanctioned ink-inverted moments.
 * On desktop the hovered half expands (~58/42) via a flex-grow transition;
 * on mobile the halves stack full-width.
 */
export default function ApplyOptions() {
  return (
    <div className="flex flex-col border-y border-ink lg:min-h-[64vh] lg:flex-row">
      {paths.map((p, i) => {
        const dark = p.tone === "ink";
        return (
          <Link
            key={p.anchor}
            href={p.anchor}
            className={`group relative flex grow flex-col justify-between gap-16 px-8 py-14 transition-[flex-grow] duration-500 ease-signal md:px-12 md:py-20 lg:hover:grow-[1.45] ${
              dark ? "bg-ink text-paper" : "bg-paper text-ink"
            } ${i === 1 ? "border-t border-ink lg:border-l lg:border-t-0" : ""}`}
          >
            <div>
              <p className="t-kicker text-accent">{p.tag}</p>
              <h2 className="t-display mt-6 max-w-[12ch]">{p.title}</h2>
              <p
                className={`t-lead mt-6 max-w-measure ${
                  dark ? "text-paper/75" : "text-ink/75"
                }`}
              >
                {p.description}
              </p>
            </div>
            <span className="inline-flex items-center gap-3 t-button text-accent">
              {p.cta}
              <span
                aria-hidden
                className="transition-transform duration-300 ease-signal group-hover:translate-x-1.5"
              >
                →
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
