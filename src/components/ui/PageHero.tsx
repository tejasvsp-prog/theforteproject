import Reveal, { RevealItem } from "./Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

const maskRise = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
} as const;

/** Interior page opener: dateline rule, left-set serif title, offset standfirst. */
export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="pt-28 md:pt-32">
      <div className="wrap">
        <div className="border-b-2 border-ink pb-4">
          <p className="t-kicker text-navy">{eyebrow}</p>
        </div>
        <Reveal
          stagger
          className="grid gap-8 pb-12 pt-10 md:pb-16 lg:grid-cols-12 lg:gap-8"
        >
          <div className="overflow-hidden lg:col-span-8">
            <RevealItem variants={maskRise}>
              <h1 className="t-hero max-w-[16ch]">{title}</h1>
            </RevealItem>
          </div>
          <RevealItem className="self-end lg:col-span-4">
            <p className="t-lead text-stone">{description}</p>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
