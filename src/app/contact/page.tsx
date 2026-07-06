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
            <div className="relative mx-auto max-w-sm -rotate-2 text-ink">
              <StaffPhrase className="h-auto w-full" />
              <p className="t-script mt-6 text-center text-[1.4rem] text-ink/45">
                we read every one.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
