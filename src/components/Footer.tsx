import Link from "next/link";
import { footerLinks, siteConfig } from "@/lib/site";
import Logo from "./ui/Logo";
import Button from "./ui/Button";

/** The back page: an ink block closing the issue. */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-paper">
      <div className="wrap py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="max-w-md lg:col-span-7">
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

          <nav aria-label="Footer" className="lg:col-span-3 lg:col-start-10">
            <h3 className="t-kicker text-paper/50">Pages</h3>
            <ul className="mt-5">
              {footerLinks.map((link) => (
                <li key={link.href} className="border-b border-paper/15 py-2.5">
                  <Link
                    href={link.href}
                    className="t-body text-paper/75 transition-colors duration-200 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-paper/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="t-caption !text-paper/60">
            © {year} {siteConfig.name}. {siteConfig.location}.
          </p>
          <p className="t-caption font-display italic !text-paper/60">
            Made by students, for students.
          </p>
        </div>
      </div>
    </footer>
  );
}
