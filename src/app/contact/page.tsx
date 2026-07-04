import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
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
        title="Let's talk."
        description="Questions about lessons, volunteering, or partnering with us? We would love to hear from you."
      />

      <section className="py-16 md:py-24 lg:py-28">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="t-kicker text-accent">Reach us directly</p>
            <div className="mt-8">
              <ContactInfo />
            </div>
          </Reveal>
          <Reveal>
            <p className="t-kicker text-accent">Send a message</p>
            <div className="mt-8">
              <GoogleFormEmbed formKey="contact" height={620} />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
