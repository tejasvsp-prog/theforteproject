"use client";

import { motion } from "framer-motion";
import {
  School,
  Music4,
  HeartHandshake,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { stagger, fadeUp } from "@/lib/motion";

interface Requirement {
  icon: LucideIcon;
  title: string;
}

const requirements: Requirement[] = [
  { icon: School, title: "High school student" },
  { icon: Music4, title: "Musical experience" },
  { icon: HeartHandshake, title: "Passion for teaching" },
  { icon: Wifi, title: "Reliable internet connection" },
];

export default function Requirements() {
  return (
    <Section id="requirements" className="bg-white">
      <div className="flex flex-col items-center">
        <SectionHeading
          eyebrow="Who Can Volunteer"
          title="What we look for"
          description="If this sounds like you, we would love to have you on the team."
        />
      </div>

      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {requirements.map((req) => (
          <motion.li
            key={req.title}
            variants={fadeUp}
            className="flex flex-col items-center gap-4 rounded-3xl border border-navy/5 bg-cream p-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold-soft text-gold-dark">
              <req.icon className="h-6 w-6" aria-hidden />
            </span>
            <span className="font-serif text-lg leading-snug text-navy">
              {req.title}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
