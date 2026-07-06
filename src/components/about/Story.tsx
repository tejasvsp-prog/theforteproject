import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";

export default function Story() {
  return (
    <section id="story" className="relative py-20 md:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <p className="t-kicker text-accent">Our story</p>
          <h2 className="t-h2 mt-5">Started by students, in {siteConfig.location}.</h2>
        </Reveal>

        <Reveal className="max-w-prose space-y-6 t-body text-ink/80 lg:col-span-8">
          <p>
            The Forte Project is an independent, student-run initiative started
            by a group of high schoolers in {siteConfig.location}. We saw that
            music lessons cost money — and that a lot of students who want to
            learn never get the chance because of it.
          </p>
          <p>
            So we started teaching, for free. Everyone who teaches is a high
            school student themselves: at least a sophomore, and a member of
            their school&apos;s highest ensemble. Lessons are virtual, 30
            minutes, twice a month.
          </p>
          <p>
            We&apos;re early, and honest about it — there&apos;s a lot we still
            want to build. But the idea is simple, and it&apos;s the whole
            point: cost shouldn&apos;t decide who gets to make music.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
