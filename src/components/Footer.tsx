import Link from "next/link";
import { Instagram, Youtube, Linkedin, Mail } from "lucide-react";
import { footerLinks, siteConfig } from "@/lib/site";
import Logo from "./ui/Logo";

const socials = [
  { href: siteConfig.social.instagram, label: "Instagram", Icon: Instagram },
  { href: siteConfig.social.youtube, label: "YouTube", Icon: Youtube },
  { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: Linkedin },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-navy text-white">
      <div className="container-content grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="max-w-sm space-y-4">
          <Link href="/" className="inline-flex transition-opacity hover:opacity-80">
            <Logo tone="light" />
          </Link>
          <p className="text-sm leading-relaxed text-white/70">
            {siteConfig.tagline}. A student-led initiative expanding access to
            quality music education worldwide.
          </p>
        </div>

        <nav aria-label="Footer" className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            Explore
          </h3>
          <ul className="space-y-2.5">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-4">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
            Connect
          </h3>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-white"
          >
            <Mail className="h-4 w-4" aria-hidden />
            {siteConfig.email}
          </a>
          <div className="flex items-center gap-3 pt-1">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-gold hover:text-navy"
              >
                <Icon className="h-4 w-4" aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-content flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/60 sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-white/50">
            Made by students, for students.
          </p>
        </div>
      </div>
    </footer>
  );
}
