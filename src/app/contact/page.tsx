import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ContactInfo from "@/components/contact/ContactInfo";
import { StaffPhrase } from "@/components/decor/MusicArt";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with The Forte Project about free music lessons or volunteering.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch."
        description="We're a small student group, so the fastest way to reach us is through a form — pick the one that fits and we'll take it from there."
      />

      <section className="py-16 md:py-24">
        <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <p className="t-kicker text-accent">Where to start</p>
            <div className="mt-8">
              <ContactInfo />
            </div>
          </Reveal>
          {/* An un-boxed illustration instead of a second form — the two real
              forms live behind the links on the left. */}
          <Reveal className="hidden lg:col-span-6 lg:block">
            <div className="glass relative mx-auto max-w-sm rounded-3xl p-8 shadow-card">
              <span
                aria-hidden
                className="spotlight pointer-events-none absolute -right-8 -top-10 h-48 w-48 rounded-full"
              />
              <div className="relative text-ink drop-shadow-[0_0_18px_rgba(255,159,69,0.25)]">
                <StaffPhrase className="h-auto w-full" />
              </div>
              <p className="t-caption mt-6 border-t border-white/8 pt-5 text-center">
                We read every one.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
