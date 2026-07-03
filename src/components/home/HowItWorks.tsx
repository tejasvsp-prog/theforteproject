"use client";

import { motion } from "framer-motion";
import { Users, Sparkles, GraduationCap, type LucideIcon } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { stagger, fadeUp } from "@/lib/motion";

interface Step {
  icon: LucideIcon;
  title: string;
  text: string;
}

const steps: Step[] = [
  {
    icon: Users,
    title: "Volunteer",
    text: "High school musicians volunteer to teach students based on their musical experience.",
  },
  {
    icon: Sparkles,
    title: "Match",
    text: "Students are paired with volunteers according to their musical background and access to an instrument.",
  },
  {
    icon: GraduationCap,
    title: "Learn",
    text: "Students receive free live Zoom lessons that build musical skills and confidence.",
  },
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-cream">
      <div className="flex flex-col items-center">
        <SectionHeading
          eyebrow="How It Works"
          title="A simple path from passion to progress"
          description="Three steps connect a willing teacher with an eager student — anywhere in the world."
        />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-14 grid gap-6 md:grid-cols-3"
      >
        {steps.map((step, i) => (
          <motion.div key={step.title} variants={fadeUp}>
            <Card interactive className="h-full">
              <div className="flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-gold">
                  <step.icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="font-serif text-3xl text-navy/10">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-6 font-serif text-xl text-navy">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-light">
                {step.text}
              </p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
