"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Route transition: each page settles in with a quiet rise. `template`
 * remounts on navigation, so this runs on every page change. The data-anim
 * hook keeps content visible under <noscript>; reduced motion skips it.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  return (
    <motion.div
      data-anim
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
