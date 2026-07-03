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
      <SectionHeading
        eyebrow="Who Can Volunteer"
        title="What we look for"
        description="If this sounds like you, we would love to have you on the team."
        align="left"
        className="max-w-xl"
      />

      <motion.ul
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
      >
        {requirements.map((req, i) => (
          <motion.li
            key={req.title}
            variants={fadeUp}
            className="group flex flex-col gap-4 border-t border-navy/15 pt-6 transition-colors duration-500 hover:border-gold"
          >
            <div className="flex items-center justify-between">
              <req.icon className="h-5 w-5 text-gold-dark" aria-hidden />
              <span className="font-serif text-sm text-navy/25">0{i + 1}</span>
            </div>
            <span className="font-serif text-lg leading-snug text-navy">
              {req.title}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}
