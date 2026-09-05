"use client";

import * as React from "react";
import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "framer-motion";

// Animated number that counts up when scrolled into view.
// Reduced motion: jumps straight to the final value.
export function CountUp({
  to,
  className,
  format,
}: {
  to: number;
  className?: string;
  format?: (n: number) => string;
}) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 60, damping: 20 });
  const render = React.useCallback(
    (v: number) => (format ? format(v) : String(Math.round(v))),
    [format]
  );

  React.useEffect(() => {
    if (!inView) return;
    if (reduce) {
      mv.set(to);
      return;
    }
    const controls = animate(mv, to, { duration: 1.6, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [inView, mv, reduce, to]);

  React.useEffect(() => {
    const unsub = spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = render(v);
    });
    return unsub;
  }, [spring, render]);

  return (
    <span ref={ref} className={className}>
      {render(0)}
    </span>
  );
}
