import Link from "next/link";
import { footerLinks, siteConfig } from "@/lib/site";
import Logo from "./ui/Logo";
import Button from "./ui/Button";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="wrap py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-8">
          <div className="max-w-md">
            <Link href="/" className="inline-flex transition-opacity hover:opacity-70">
              <Logo tone="light" />
            </Link>
            <p className="t-body mt-6 max-w-measure text-paper/70">
              A student-run initiative from {siteConfig.location} making free
              music lessons available to any K–12 student who needs them.
            </p>
            <div className="mt-8">
              <Button href="/apply" variant="onDark">
                Sign up for lessons
              </Button>
            </div>
          </div>

          <nav aria-label="Footer" className="sm:justify-self-end">
            <h3 className="t-kicker text-paper/50">Pages</h3>
            <ul className="mt-5 space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href} label={link.label} />
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-paper/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="t-caption text-paper/60">
            © {year} {siteConfig.name}. {siteConfig.location}.
          </p>
          <p className="t-caption text-paper/50">Made by students, for students.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group relative inline-block t-body text-paper/75 transition-colors duration-200 hover:text-paper"
    >
      {label}
      <span className="absolute -bottom-0.5 left-0 h-[1.5px] w-full origin-left scale-x-0 bg-accent transition-transform duration-200 ease-signal group-hover:scale-x-100" />
    </Link>
  );
}
