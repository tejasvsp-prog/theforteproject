import Reveal, { RevealItem } from "./Reveal";

export interface LedgerRow {
  n: string;
  title: string;
  text: string;
}

/**
 * The numbered ledger: full-width rows divided by hairlines, each row an
 * oversized vermilion tabular numeral beside a title + serif description.
 * Hover fills the row with a 6% ink wash and nudges the numeral right.
 * This replaces every generic icon-card grid on the site.
 */
export default function Ledger({ rows }: { rows: LedgerRow[] }) {
  return (
    <Reveal as="ol" stagger className="border-b hairline">
      {rows.map((row) => (
        <RevealItem
          key={row.n}
          as="li"
          className="group grid grid-cols-[auto_1fr] items-baseline gap-x-6 border-t py-7 transition-colors duration-200 ease-signal hairline hover:bg-[var(--wash)] sm:gap-x-10 md:py-9"
        >
          <span className="t-numeral block text-[clamp(2.5rem,5vw,4.5rem)] transition-transform duration-200 ease-signal group-hover:translate-x-1">
            {row.n}
          </span>
          <div className="min-w-0 pt-1">
            <h3 className="t-h3">{row.title}</h3>
            <p className="t-body mt-2.5 max-w-prose text-ink/75">{row.text}</p>
          </div>
        </RevealItem>
      ))}
    </Reveal>
  );
}
