import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

/** Reusable eyebrow + title + description block for section headers. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "text-center mx-auto items-center" : "text-left";
  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow ? (
        <span className="eyebrow">
          <span className="h-px w-6 bg-gold/60" aria-hidden />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="heading-serif text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-relaxed text-charcoal-light sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
