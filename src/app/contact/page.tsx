import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Reveal, { RevealItem } from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { StaffDivider } from "@/components/decor/MusicArt";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach The Forte Project by email at theforteproject.mi@gmail.com, on Instagram @theforteproject, or through the interest forms.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch."
        description="Email is the fastest way to reach us — we're students, but we read everything."
      />

      {/* Email — the primary channel */}
      <section className="py-16 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7 lg:col-start-3">
            <p className="t-kicker text-navy">Email us</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="t-display mt-5 block break-all text-ink underline decoration-accent decoration-2 underline-offset-8 transition-colors duration-200 hover:text-navy sm:break-normal"
            >
              {siteConfig.email}
            </a>
            <p className="t-body mt-6 max-w-prose text-stone">
              Questions about lessons, volunteering, or anything else — one
              address for all of it.
            </p>
            <div className="mt-8">
              <Button href={`mailto:${siteConfig.email}`} external>
                Write to us <span aria-hidden>→</span>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <StaffDivider />

      {/* Other ways in */}
      <section className="py-16 md:py-24">
        <div className="wrap">
          <Reveal stagger className="grid gap-6 sm:grid-cols-3 lg:grid-cols-12 lg:gap-8">
            <RevealItem className="card-line flex flex-col p-7 lg:col-span-4 lg:col-start-3">
              <h2 className="t-h3">Instagram</h2>
              <p className="t-body mt-3 flex-1 text-stone">
                Follow along, or send us a DM.
              </p>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="link-rule mt-6 inline-flex self-start"
              >
                @theforteproject <span aria-hidden>→</span>
              </a>
            </RevealItem>
            <RevealItem className="card-line flex flex-col p-7 lg:col-span-4">
              <h2 className="t-h3">Ready to sign up?</h2>
              <p className="t-body mt-3 flex-1 text-stone">
                Skip the inbox — the interest forms go straight to us.
              </p>
              <span className="mt-6 flex flex-wrap gap-x-6 gap-y-2 self-start">
                <Link href="/apply" className="link-rule inline-flex">
                  Lessons <span aria-hidden>→</span>
                </Link>
                <Link href="/volunteer#apply" className="link-rule inline-flex">
                  Volunteering <span aria-hidden>→</span>
                </Link>
              </span>
            </RevealItem>
          </Reveal>
        </div>
      </section>
    </>
  );
}
