"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp } from "@/lib/motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variants?: Variants;
  delay?: number;
  /** Render as a different element while keeping motion. Defaults to div. */
  as?: "div" | "section" | "li" | "span";
  once?: boolean;
}

/**
 * Scroll-triggered reveal wrapper. Animates its children into view once,
 * respecting the shared easing curve. Reduced-motion users see the content
 * immediately thanks to the global CSS override.
 */
export default function Reveal({
  children,
  className,
  id,
  variants = fadeUp,
  delay = 0,
  as = "div",
  once = true,
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      id={id}
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2 }}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}
