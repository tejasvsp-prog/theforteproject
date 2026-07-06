import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import GoogleFormEmbed from "@/components/ui/GoogleFormEmbed";
import ContactInfo from "@/components/contact/ContactInfo";

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
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="t-kicker text-accent">Where to start</p>
            <div className="mt-8">
              <ContactInfo />
            </div>
          </Reveal>
          <Reveal>
            <p className="t-kicker text-accent">Or send a message</p>
            <div className="mt-8">
              <GoogleFormEmbed formKey="contact" height={620} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
