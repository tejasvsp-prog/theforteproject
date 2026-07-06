import type { ReactNode } from "react";
import Reveal from "./Reveal";
import Button from "./Button";

interface Action {
  href: string;
  label: string;
}

interface ImpactBandProps {
  /** The single loud line — ink type set on vermilion. */
  children: ReactNode;
  eyebrow?: string;
  actions?: Action[];
}

/**
 * The one full-bleed vermilion band per page: ink type on the accent field,
 * breaking the page margins for a single, earned burst of volume.
 */
export default function ImpactBand({
  children,
  eyebrow,
  actions,
}: ImpactBandProps) {
  return (
    <section className="py-6">
      <div className="wrap">
        <div
          className="relative overflow-hidden rounded-[2rem] px-8 py-16 text-night md:px-16 md:py-20"
          style={{ background: "linear-gradient(135deg, #FFB673 0%, #FF9F45 40%, #FF6A3D 100%)" }}
        >
        <Reveal>
          {eyebrow ? (
            <p className="t-kicker mb-6 text-night/80">{eyebrow}</p>
          ) : null}
          <p className="t-display max-w-[18ch] text-night">{children}</p>
          {actions && actions.length ? (
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {actions.map((a) => (
                <Button key={a.href} href={a.href} variant="onAccent">
                  {a.label}
                </Button>
              ))}
            </div>
          ) : null}
        </Reveal>
        </div>
      </div>
    </section>
  );
}
