"use client";

import * as React from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

// Diversified scroll reveals. Different sections pick different variants so
// the page never reads as one repeated fade-up cascade.
type RevealVariant = "blur" | "left" | "right" | "scale";

const VARIANTS: Record<RevealVariant, Variants> = {
  blur: {
    hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  left: {
    hidden: { opacity: 0, x: -28 },
    show: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 28 },
    show: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.96, y: 12 },
    show: { opacity: 1, scale: 1, y: 0 },
  },
};

export function Reveal({
  variant = "blur",
  delay = 0,
  className,
  children,
}: {
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      variants={VARIANTS[variant]}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
