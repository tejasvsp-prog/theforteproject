import {
  Mail,
  Instagram,
  Youtube,
  Linkedin,
  Clock,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

const socials: { href: string; label: string; Icon: LucideIcon }[] = [
  { href: siteConfig.social.instagram, label: "Instagram", Icon: Instagram },
  { href: siteConfig.social.youtube, label: "YouTube", Icon: Youtube },
  { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: Linkedin },
];

export default function ContactInfo() {
  return (
    <Reveal className="flex flex-col gap-8 rounded-3xl border border-navy/5 bg-white p-8 shadow-soft sm:p-10">
      <div>
        <h2 className="heading-serif text-2xl">Reach out directly</h2>
        <p className="mt-2 text-sm leading-relaxed text-charcoal-light">
          Questions about lessons, volunteering, or partnering with us? Send a
          note and our student team will get back to you.
        </p>
      </div>

      <div className="divide-y divide-navy/10 border-y border-navy/10">
        <a
          href={`mailto:${siteConfig.email}`}
          className="flex items-center gap-4 py-4 text-charcoal transition-colors hover:text-gold-dark"
        >
          <Mail className="h-5 w-5 shrink-0 text-gold-dark" aria-hidden />
          <span>
            <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
              Email
            </span>
            <span className="text-base">{siteConfig.email}</span>
          </span>
        </a>

        <div className="flex items-center gap-4 py-4">
          <Clock className="h-5 w-5 shrink-0 text-gold-dark" aria-hidden />
          <span>
            <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
              Response time
            </span>
            <span className="text-base text-charcoal-light">
              We typically reply within a few days.
            </span>
          </span>
        </div>
      </div>

      <div className="border-t border-navy/10 pt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-dark">
          Follow along
        </p>
        <div className="mt-4 flex items-center gap-3">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white transition-colors hover:bg-gold hover:text-navy"
            >
              <Icon className="h-5 w-5" aria-hidden />
            </a>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
