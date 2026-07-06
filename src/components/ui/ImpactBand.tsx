import type { ReactNode } from "react";
import Reveal from "./Reveal";
import Button from "./Button";

interface Action {
  href: string;
  label: string;
}

interface ImpactBandProps {
  children: ReactNode;
  eyebrow?: string;
  actions?: Action[];
}

/**
 * The interior pages' closing band: record-navy with pale staff lines,
 * flowing into the navy footer.
 */
export default function ImpactBand({
  children,
  eyebrow,
  actions,
}: ImpactBandProps) {
  return (
    <section className="staff-bg-light bg-navy text-paper">
      <div className="wrap py-16 md:py-24">
        <Reveal>
          {eyebrow ? (
            <p className="t-kicker mb-6 text-sky">{eyebrow}</p>
          ) : null}
          <p className="t-display max-w-[22ch] text-paper">{children}</p>
          {actions && actions.length ? (
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {actions.map((a, i) => (
                <Button
                  key={a.href}
                  href={a.href}
                  variant={i === 0 ? "onDark" : "outlineDark"}
                >
                  {a.label}
                </Button>
              ))}
            </div>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
