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
 * The page's closing statement: a heavy rule and one oversized serif line.
 * No band, no fill — volume through scale, not color.
 */
export default function ImpactBand({
  children,
  eyebrow,
  actions,
}: ImpactBandProps) {
  return (
    <section className="border-t-2 border-ink">
      <div className="wrap py-14 md:py-20">
        <Reveal>
          {eyebrow ? (
            <p className="t-kicker mb-6 text-accent">{eyebrow}</p>
          ) : null}
          <p className="t-display max-w-[22ch]">{children}</p>
          {actions && actions.length ? (
            <div className="mt-10 flex flex-wrap items-center gap-4">
              {actions.map((a, i) => (
                <Button key={a.href} href={a.href} variant={i === 0 ? "primary" : "secondary"}>
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
