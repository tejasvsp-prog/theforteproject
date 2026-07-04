import { siteConfig } from "@/lib/site";

const rows: { label: string; value: string; href?: string }[] = [
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: "Response time", value: "We typically reply within a few days." },
  { label: "Instagram", value: "@theforteproject", href: siteConfig.social.instagram },
  { label: "YouTube", value: "The Forte Project", href: siteConfig.social.youtube },
  { label: "LinkedIn", value: "The Forte Project", href: siteConfig.social.linkedin },
];

/** Contact details rendered as a hairline-ruled ledger — no icon circles. */
export default function ContactInfo() {
  return (
    <dl className="border-b hairline">
      {rows.map((row) => (
        <div
          key={row.label}
          className="grid grid-cols-[8rem_1fr] items-baseline gap-4 border-t py-5 hairline"
        >
          <dt className="t-kicker text-accent">{row.label}</dt>
          <dd className="t-body text-ink/85">
            {row.href ? (
              <a
                href={row.href}
                className="group relative inline-block transition-colors hover:text-ink"
              >
                {row.value}
                <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-accent transition-transform duration-200 ease-signal group-hover:scale-x-100" />
              </a>
            ) : (
              row.value
            )}
          </dd>
        </div>
      ))}
    </dl>
  );
}
