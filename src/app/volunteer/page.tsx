import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Requirements from "@/components/volunteer/Requirements";
import ProcessTimeline from "@/components/volunteer/ProcessTimeline";
import VolunteerApplication from "@/components/volunteer/VolunteerApplication";

export const metadata: Metadata = {
  title: "Become a Volunteer",
  description:
    "Volunteer instructors are high school musicians who teach students in areas aligned with their musical experience through free virtual Zoom lessons.",
  alternates: { canonical: "/volunteer" },
};

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Become a volunteer."
        description="Volunteer instructors are high-school musicians who teach students in areas aligned with their experience — through free, live Zoom lessons."
      />
      <Requirements />
      <ProcessTimeline />
      <VolunteerApplication />
    </>
  );
}
