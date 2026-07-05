import Link from "next/link";
import RailSection from "@/components/ui/RailSection";
import Reveal from "@/components/ui/Reveal";

interface Program {
  tag: string;
  title: string;
  description: string;
  focus: string[];
  href: string;
}

const programs: Program[] = [
  {
    tag: "Path A",
    title: "Performance Lessons",
    description:
      "For students who have an instrument but can't afford private instruction.",
    focus: ["Technique", "Performance", "Practice habits", "Musical growth"],
    href: "/apply#performance",
  },
  {
    tag: "Path B",
    title: "Music Theory & Composition",
    description: "For students who don't yet have access to an instrument.",
    focus: [
      "Music theory",
      "Ear training",
      "Rhythm",
      "Composition",
      "Music appreciation",
    ],
    href: "/apply#theory",
  },
];

function Panel({ program, className = "" }: { program: Program; className?: string }) {
  return (
    <div
      className={`flex flex-col rounded-3xl border border-ink/10 bg-cream p-8 shadow-card transition-transform duration-300 ease-signal hover:-translate-y-1 sm:p-10 ${className}`}
    >
      <p className="t-kicker text-accent">{program.tag}</p>
      <h3 className="t-h3 mt-4">{program.title}</h3>
      <p className="t-body mt-3 max-w-prose text-ink/75">
        {program.description}
      </p>
      <ul className="mt-6 space-y-2.5">
        {program.focus.map((item) => (
          <li key={item} className="flex items-center gap-3 t-body text-ink/80">
            <span className="h-1.5 w-1.5 shrink-0 bg-accent" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
      <Link
        href={program.href}
        className="group relative mt-8 inline-block t-button text-ink"
      >
        Learn more &amp; apply <span aria-hidden>→</span>
        <span className="absolute -bottom-1 left-0 h-[2px] w-full origin-left scale-x-0 bg-accent transition-transform duration-200 ease-signal group-hover:scale-x-100" />
      </Link>
    </div>
  );
}

export default function StudentPrograms() {
  return (
    <RailSection
      id="programs"
      index="03"
      kicker="Student Programs"
      title="Two ways to make music"
      lead="Every student learns differently. We meet them where they are — with or without an instrument in hand."
    >
      <Reveal className="grid gap-6 md:grid-cols-2">
        <Panel program={programs[0]} />
        <Panel program={programs[1]} />
      </Reveal>
    </RailSection>
  );
}
