import RailSection from "@/components/ui/RailSection";
import Ledger, { type LedgerRow } from "@/components/ui/Ledger";
import Reveal from "@/components/ui/Reveal";
import { stats } from "@/lib/site";

const values: LedgerRow[] = [
  {
    n: "01",
    title: "Access",
    text: "Music education should never depend on a family's income or postal code.",
  },
  {
    n: "02",
    title: "Excellence",
    text: "Free does not mean lesser. Every lesson is prepared, personal, and taken seriously.",
  },
  {
    n: "03",
    title: "Mentorship",
    text: "Near-peer teachers who inspire students as much as they instruct them.",
  },
  {
    n: "04",
    title: "Reach",
    text: "A model that travels — anywhere with an internet connection is within reach.",
  },
];

export default function Values() {
  return (
    <RailSection
      id="values"
      index="02"
      kicker="What We Believe"
      title="The values behind every lesson"
    >
      <Ledger rows={values} />

      <Reveal className="mt-14 grid grid-cols-2 sm:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="border-l py-4 pl-5 pr-4 hairline [&:nth-child(n+3)]:border-t [&:nth-child(odd)]:border-l-0 sm:[&:nth-child(n+2)]:border-l sm:[&:nth-child(n+3)]:border-t-0"
          >
            <p className="t-numeral text-ink text-[clamp(2rem,4vw,3.25rem)]">
              {s.value}
            </p>
            <p className="t-kicker mt-3 text-ink/70">{s.label}</p>
          </div>
        ))}
      </Reveal>
    </RailSection>
  );
}
