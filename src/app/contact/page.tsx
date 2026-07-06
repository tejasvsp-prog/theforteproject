import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import { StaffDivider } from "@/components/decor/MusicArt";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with The Forte Project about free music lessons or volunteering.",
  alternates: { canonical: "/contact" },
};

const routes = [
  {
    label: "Students & parents",
    body: "Questions about lessons go on the interest form — there's room to ask anything.",
    href: "/apply",
    cta: "Interest form",
  },
  {
    label: "Volunteers",
    body: "Questions about teaching go on the volunteer application.",
    href: "/volunteer#apply",
    cta: "Volunteer form",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch."
        description="We're a small student team — the forms are the fastest way to reach us, and we read every submission."
      />

      <section className="py-16 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal stagger className="grid gap-6 sm:grid-cols-2 lg:col-span-8 lg:col-start-3">
            {routes.map((r) => (
              <Reveal key={r.href} className="card-line flex flex-col p-7">
                <h2 className="t-h3">{r.label}</h2>
                <p className="t-body mt-3 flex-1 text-stone">{r.body}</p>
                <Link href={r.href} className="link-rule mt-6 inline-flex self-start">
                  {r.cta} <span aria-hidden>→</span>
                </Link>
              </Reveal>
            ))}
          </Reveal>
          <Reveal className="lg:col-span-8 lg:col-start-3">
            <p className="t-caption border-t hairline pt-5">
              A public email address and social accounts are coming soon.
            </p>
          </Reveal>
        </div>
      </section>

      <StaffDivider className="mb-14 md:mb-20" />
    </>
  );
}
