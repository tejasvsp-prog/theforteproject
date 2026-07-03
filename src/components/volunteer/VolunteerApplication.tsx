import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import GoogleFormEmbed from "@/components/ui/GoogleFormEmbed";
import { forms } from "@/lib/site";

export default function VolunteerApplication() {
  const share = forms.volunteer.shareUrl;
  return (
    <Section id="apply" className="bg-white">
      <div className="flex flex-col items-center">
        <SectionHeading
          eyebrow="Application"
          title="Apply to Volunteer"
          description="Ready to share your love of music? Complete the application below and our team will be in touch."
        />
        <Reveal delay={0.1} className="mt-8">
          <Button href={share || "#volunteer-form"} external={Boolean(share)} size="lg">
            Apply to Volunteer
          </Button>
        </Reveal>
      </div>

      <Reveal id="volunteer-form" className="mx-auto mt-12 max-w-3xl">
        <GoogleFormEmbed formKey="volunteer" height={760} />
      </Reveal>
    </Section>
  );
}
