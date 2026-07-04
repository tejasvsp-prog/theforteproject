import RailSection from "@/components/ui/RailSection";
import Ledger, { type LedgerRow } from "@/components/ui/Ledger";

const steps: LedgerRow[] = [
  {
    n: "01",
    title: "Apply",
    text: "Tell us about your musical background and where you'd like to help.",
  },
  {
    n: "02",
    title: "Interview",
    text: "A short conversation so we understand your strengths and teaching interests.",
  },
  {
    n: "03",
    title: "Train",
    text: "A brief onboarding on our teaching approach, tools, and expectations.",
  },
  {
    n: "04",
    title: "Match",
    text: "We pair you with a student whose goals fit what you do best.",
  },
  {
    n: "05",
    title: "Teach",
    text: "Begin free, live Zoom lessons — and start making a real difference.",
  },
];

export default function ProcessTimeline() {
  return (
    <RailSection
      id="process"
      index="02"
      kicker="The Process"
      title="From application to first lesson"
      lead="A clear, supportive path — we guide you through every step."
    >
      <Ledger rows={steps} />
    </RailSection>
  );
}
