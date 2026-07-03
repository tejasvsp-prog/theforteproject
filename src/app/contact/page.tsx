import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import GoogleFormEmbed from "@/components/ui/GoogleFormEmbed";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with The Forte Project — questions about free music lessons, volunteering, or partnerships are always welcome.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Have a question about lessons, volunteering, or partnering with us? We would love to hear from you."
      />

      <Section className="bg-cream">
        <div className="mx-auto grid max-w-5xl items-start gap-8 lg:grid-cols-2">
          <ContactInfo />
          <Reveal delay={0.1}>
            <h2 className="mb-4 text-center font-serif text-xl text-navy lg:text-left">
              Send us a message
            </h2>
            <GoogleFormEmbed formKey="contact" height={640} />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
