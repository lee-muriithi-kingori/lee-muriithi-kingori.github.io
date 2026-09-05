"use client";

// Aurora — ambient drifting color field behind everything (z-0).
// Transform-only keyframes, pointer-events-none, hidden under
// prefers-reduced-motion. Sibling to the code-rain video and the
// matter-js field: together they are the "alive background".
export function Aurora() {
  return (
    <div aria-hidden="true" className="aurora">
      <span className="aurora-blob aurora-1" />
      <span className="aurora-blob aurora-2" />
      <span className="aurora-blob aurora-3" />
    </div>
  );
}
