"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

// Fixed top scroll-progress bar. Orientation cue for a long single page.
// z-[70]: above sticky topbar (z-40), below custom cursor (z-9999).
export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.4,
  });
  if (reduce) return null;
  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[70] pointer-events-none"
      style={{ scaleX, background: "var(--lestra)" }}
    />
  );
}
