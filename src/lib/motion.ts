import type { Variants } from "framer-motion";

/** The single site-wide easing — a decisive, settled curve. */
export const signal = [0.16, 1, 0.3, 1] as const;

/** Master page-load container: staggers its children top-to-bottom. */
export const loadStagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

/** A headline line rising out of an overflow-hidden mask. */
export const lineMask: Variants = {
  hidden: { y: "115%" },
  show: { y: "0%", transition: { duration: 0.72, ease: signal } },
};

/** Fade + short rise, used for lead copy, CTAs, captions on load. */
export const rise: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: signal } },
};

/** Hairline rule / underline drawing left-to-right. */
export const drawX: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.6, ease: signal } },
};

/** The one quiet scroll reveal: fade + 12px rise, once. */
export const reveal: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: signal } },
};

export const revealStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
};
