import RailSection from "@/components/ui/RailSection";
import Ledger, { type LedgerRow } from "@/components/ui/Ledger";

const rows: LedgerRow[] = [
  {
    n: "01",
    title: "Volunteer",
    text: "High-school musicians sign up to teach in the areas they know best — from strings to songwriting.",
  },
  {
    n: "02",
    title: "Match",
    text: "We pair each student with a volunteer by musical background and their access to an instrument.",
  },
  {
    n: "03",
    title: "Learn",
    text: "Free, live lessons on Zoom build real skill, steady confidence, and a lasting love of music.",
  },
];

export default function HowItWorks() {
  return (
    <RailSection
      id="how-it-works"
      index="02"
      kicker="How It Works"
      title="Three steps, one connection"
      lead="A willing teacher, an eager student, and a standing lesson on the calendar — anywhere in the world."
    >
      <Ledger rows={rows} />
    </RailSection>
  );
}
