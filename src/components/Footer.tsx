import Link from "next/link";
import { footerLinks, siteConfig } from "@/lib/site";
import Logo from "./ui/Logo";
import Button from "./ui/Button";

const groups = [
  {
    heading: "Explore",
    links: footerLinks.filter((l) =>
      ["/", "/about", "/contact"].includes(l.href),
    ),
  },
  {
    heading: "Get Involved",
    links: footerLinks.filter((l) =>
      ["/volunteer", "/apply"].includes(l.href),
    ),
  },
  {
    heading: "Connect",
    links: [
      { href: `mailto:${siteConfig.email}`, label: siteConfig.email },
      { href: siteConfig.social.instagram, label: "Instagram" },
      { href: siteConfig.social.youtube, label: "YouTube" },
      { href: siteConfig.social.linkedin, label: "LinkedIn" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-paper">
      <div className="wrap py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-8">
          <div className="max-w-md">
            <Link href="/" className="inline-flex transition-opacity hover:opacity-70">
              <Logo tone="light" />
            </Link>
            <p className="t-body mt-6 max-w-measure text-paper/70">
              {siteConfig.tagline}. A student-led initiative expanding access to
              quality music education worldwide.
            </p>
            <div className="mt-8">
              <Button href="/apply" variant="primary">
                Apply for Lessons
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {groups.map((group) => (
              <nav key={group.heading} aria-label={group.heading}>
                <h3 className="t-kicker text-paper/50">{group.heading}</h3>
                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <FooterLink href={link.href} label={link.label} />
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-paper/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="t-caption text-paper/60">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="t-caption text-paper/50">Made by students, for students.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  const external = href.startsWith("mailto:") || href.startsWith("http");
  const cls =
    "group relative inline-block t-body text-paper/75 transition-colors duration-200 hover:text-paper";
  const underline = (
    <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-accent transition-transform duration-200 ease-signal group-hover:scale-x-100" />
  );
  if (external) {
    return (
      <a href={href} className={cls}>
        {label}
        {underline}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {label}
      {underline}
    </Link>
  );
}
