import RailSection from "@/components/ui/RailSection";
import GoogleFormEmbed from "@/components/ui/GoogleFormEmbed";
import Button from "@/components/ui/Button";
import { forms } from "@/lib/site";

export default function VolunteerApplication() {
  const share = forms.volunteer.shareUrl;
  return (
    <RailSection
      id="apply"
      index="03"
      kicker="Application"
      title="Apply to volunteer"
      lead="Ready to share your love of music? Complete the application below and our team will be in touch."
    >
      <div className="mb-10">
        <Button href={share || "#volunteer-form"} external={Boolean(share)}>
          Start the application <span aria-hidden>→</span>
        </Button>
      </div>
      <div id="volunteer-form" className="max-w-3xl scroll-mt-28">
        <GoogleFormEmbed formKey="volunteer" height={760} />
      </div>
    </RailSection>
  );
}
