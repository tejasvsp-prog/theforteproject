import RailSection from "@/components/ui/RailSection";
import Reveal, { RevealItem } from "@/components/ui/Reveal";

const requirements = [
  "A current high-school student",
  "Real musical experience in your instrument or discipline",
  "A genuine passion for teaching and mentoring",
  "About one hour a week and a reliable internet connection",
];

export default function Requirements() {
  return (
    <RailSection
      id="requirements"
      index="01"
      kicker="Who Can Volunteer"
      title="What we look for"
      lead="If this sounds like you, we would love to have you on the team."
    >
      <Reveal as="ul" stagger className="border-b hairline">
        {requirements.map((item) => (
          <RevealItem
            key={item}
            as="li"
            className="flex items-center gap-5 border-t py-6 hairline"
          >
            <span className="h-2.5 w-2.5 shrink-0 bg-accent" aria-hidden />
            <span className="t-lead text-ink/85">{item}</span>
          </RevealItem>
        ))}
      </Reveal>
    </RailSection>
  );
}
