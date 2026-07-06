import Reveal from "@/components/ui/Reveal";
import GoogleFormEmbed from "@/components/ui/GoogleFormEmbed";
import Button from "@/components/ui/Button";
import { forms } from "@/lib/site";

export default function VolunteerApplication() {
  const share = forms.volunteer.shareUrl;
  return (
    <section id="apply" className="relative py-20 md:py-28">
      <div className="wrap">
        <Reveal className="max-w-2xl">
          <p className="t-kicker text-accent">Apply</p>
          <h2 className="t-h2 mt-5">Ready to teach?</h2>
          <p className="t-lead mt-6 max-w-prose text-ink/75">
            Fill out the interest form and we&apos;ll be in touch about getting
            you matched with a student.
          </p>
          <div className="mt-8">
            <Button href={share || "#volunteer-form"} external={Boolean(share)}>
              Start the form <span aria-hidden>→</span>
            </Button>
          </div>
        </Reveal>
        <Reveal id="volunteer-form" className="mt-12 max-w-3xl scroll-mt-28">
          <GoogleFormEmbed formKey="volunteer" height={760} />
        </Reveal>
      </div>
    </section>
  );
}
