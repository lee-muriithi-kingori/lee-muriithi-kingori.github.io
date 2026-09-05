"use client";

import * as React from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

// Magnetic hover: element drifts toward the pointer, springs back on leave.
// Motion values only — no React re-renders per frame. Disabled on touch
// devices and under prefers-reduced-motion.
export function Magnetic({
  strength = 0.25,
  className,
  children,
}: {
  strength?: number;
  className?: string;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();
  const [fine, setFine] = React.useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.2 });
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.2 });

  React.useEffect(() => {
    setFine(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  if (reduce || !fine) return <span className={className}>{children}</span>;

  return (
    <motion.span
      className={className}
      style={{ x: sx, y: sy, display: "inline-block" }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.span>
  );
}
