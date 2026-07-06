import Reveal from "./Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

/** Interior page opener: dateline rule, left-set serif title, offset standfirst. */
export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="pt-28 md:pt-32">
      <div className="wrap">
        <div className="border-b-2 border-ink pb-4">
          <p className="t-kicker text-navy">{eyebrow}</p>
        </div>
        <Reveal className="grid gap-8 pb-12 pt-10 md:pb-16 lg:grid-cols-12 lg:gap-8">
          <h1 className="t-hero max-w-[16ch] lg:col-span-8">{title}</h1>
          <p className="t-lead self-end text-stone lg:col-span-4">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
