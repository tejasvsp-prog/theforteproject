import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Requirements from "@/components/volunteer/Requirements";
import ProcessTimeline from "@/components/volunteer/ProcessTimeline";
import VolunteerApplication from "@/components/volunteer/VolunteerApplication";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Teach free virtual music lessons with The Forte Project. Volunteers are high school students — at least a sophomore, and a member of their school's highest ensemble.",
  alternates: { canonical: "/volunteer" },
};

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Volunteer"
        title="Teach a student who can't afford lessons."
        description="Our teachers are high school students who love music and give a little time to pass it on. Lessons are virtual, 30 minutes, twice a month."
      />
      <Requirements />
      <ProcessTimeline />
      <VolunteerApplication />
    </>
  );
}
