import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface RailSectionProps {
  /** Two-digit movement number, e.g. "01". */
  index: string;
  kicker: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  id?: string;
  className?: string;
  /** Tighten the top rhythm when a section follows a related one. */
  compact?: boolean;
}

/**
 * The recurring "concert-program movement" section: a fixed left rail holds
 * an oversized vermilion index numeral with a kicker running up the margin;
 * a hairline rule spans the content columns with the H2 hung flush beneath.
 * Consistent left axis across every page.
 */
export default function RailSection({
  index,
  kicker,
  title,
  lead,
  children,
  id,
  className = "",
  compact = false,
}: RailSectionProps) {
  return (
    <section
      id={id}
      className={`${compact ? "py-10 md:py-14 lg:py-16" : "py-14 md:py-20 lg:py-28"} ${className}`}
    >
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-[128px_1fr] lg:gap-0">
          {/* Left index rail */}
          <Reveal className="flex items-center gap-5 lg:block lg:self-start lg:pr-8">
            <span className="t-numeral block">{index}</span>
            <span className="t-kicker text-ink/70 lg:mt-6 lg:block lg:[writing-mode:vertical-rl] lg:rotate-180">
              {kicker}
            </span>
          </Reveal>

          {/* Content */}
          <div className="min-w-0">
            <Reveal>
              <div className="border-t hairline" />
              <h2 className="t-h2 mt-6 max-w-[20ch]">{title}</h2>
              {lead ? (
                <p className="t-lead mt-6 max-w-prose text-ink/80">{lead}</p>
              ) : null}
            </Reveal>
            {children ? <div className="mt-10 md:mt-14">{children}</div> : null}
          </div>
        </div>
      </div>
    </section>
  );
}
