import Link from "next/link";
import { footerLinks, siteConfig } from "@/lib/site";
import Logo from "./ui/Logo";
import Button from "./ui/Button";

const involved = [
  { href: "/apply", label: "Sign up for lessons" },
  { href: "/volunteer", label: "Become a volunteer" },
] as const;

/** The back page: mission, quick links, and ways to get involved. */
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-paper">
      <div className="wrap py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Mission */}
          <div className="max-w-md lg:col-span-6">
            <Link href="/" className="inline-flex transition-opacity hover:opacity-70">
              <Logo tone="light" />
            </Link>
            <p className="t-body mt-6 max-w-measure text-paper/70">
              Free, virtual music lessons for K–12 students, taught by student
              volunteers in {siteConfig.location}.
            </p>
            <div className="mt-8">
              <Button href="/apply" variant="onDark">
                Get started
              </Button>
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Pages" className="lg:col-span-3 lg:col-start-8">
            <h3 className="t-kicker text-paper/50">Pages</h3>
            <ul className="mt-5">
              {footerLinks.map((link) => (
                <li key={link.href} className="border-b border-paper/15 py-2.5">
                  <Link
                    href={link.href}
                    className="t-body text-paper/75 transition-colors duration-200 hover:text-sky"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Get involved + contact note */}
          <div className="lg:col-span-2 lg:col-start-11">
            <h3 className="t-kicker text-paper/50">Get involved</h3>
            <ul className="mt-5">
              {involved.map((link) => (
                <li key={link.href} className="border-b border-paper/15 py-2.5">
                  <Link
                    href={link.href}
                    className="t-body text-paper/75 transition-colors duration-200 hover:text-sky"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="t-caption mt-6 !text-paper/50">
              Email and socials coming soon.
            </p>
          </div>
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
