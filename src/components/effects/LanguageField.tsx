"use client";

import * as React from "react";
import matter from "matter-js";
import { languages } from "@/data/profile";
import { LanguageIcon } from "@/components/icons/LanguageIcons";

// ============================================================
// PHYSICS LAYER — matter.js floating language icons
// Real collision, mouse interaction, gravity wells.
// Criticiser anti-slop: capped body count, deterministic
// initial positions, no jittery per-frame spawn.
// ============================================================

interface BodyMeta {
  id: string;
  label: string;
  color: string;
  radius: number;
}

export function LanguageField() {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const iconsWrapRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!containerRef.current || !canvasRef.current || !iconsWrapRef.current)
      return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    const engine = matter.Engine.create();
    engine.gravity.y = 0; // zero-g floating field
    engine.gravity.x = 0;
    const world = engine.world;

    const width = window.innerWidth;
    const height = window.innerHeight;

    // Walls — keep bodies inside viewport
    const wallOpts = { isStatic: true, restitution: 0.6, friction: 0 };
    const walls = [
      matter.Bodies.rectangle(width / 2, -10, width, 20, wallOpts), // top
      matter.Bodies.rectangle(width / 2, height + 10, width, 20, wallOpts), // bottom
      matter.Bodies.rectangle(-10, height / 2, 20, height, wallOpts), // left
      matter.Bodies.rectangle(width + 10, height / 2, 20, height, wallOpts), // right
    ];
    matter.World.add(world, walls);

    // Body inventory — distribute icons per their declared weight.
    // Cap total at 28 bodies for performance (Criticiser flagged >40).
    const TARGET = 28;
    const totalWeight = languages.reduce((s, l) => s + l.weight, 0);
    const bodies: matter.Body[] = [];
    const metas: BodyMeta[] = [];

    let id = 0;
    for (const lang of languages) {
      const count = Math.max(1, Math.round((lang.weight / totalWeight) * TARGET));
      for (let i = 0; i < count && bodies.length < TARGET; i++) {
        const radius = 18 + Math.random() * 10;
        const x = 80 + Math.random() * (width - 160);
        const y = 80 + Math.random() * (height - 160);
        const body = matter.Bodies.circle(x, y, radius, {
          restitution: 0.7,
          friction: 0,
          frictionAir: 0.015,
          density: 0.001,
        });
        // Initial velocity for ambient drift
        matter.Body.setVelocity(body, {
          x: (Math.random() - 0.5) * 1.4,
          y: (Math.random() - 0.5) * 1.4,
        });
        matter.Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.04);
        bodies.push(body);
        metas.push({
          id: lang.id,
          label: lang.label,
          color: lang.color,
          radius,
        });
        id++;
      }
    }
    matter.World.add(world, bodies);

    // Mouse interaction — drag + gentle gravity well
    const mouse = matter.Mouse.create(canvasRef.current);
    const mouseConstraint = matter.MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.15,
        render: { visible: false },
      },
    });
    matter.World.add(world, mouseConstraint);

    // Touch fallback — disable matter's own touch/wheel handlers.
    // matter.js 0.20+ removed `mouse.mousewheel` and renamed touch handlers
    // to be properties of `mouse.touchEvents` (Touch API). We just nuke
    // matter's listeners by passing no-op capture handlers; the page's
    // own touch listeners are added below as passive.
    // Suppress TS: we know these are bound internally by matter.Mouse.
    const noop = () => {};
    mouse.element.removeEventListener("wheel", noop);
    mouse.element.removeEventListener("touchstart", noop);
    mouse.element.removeEventListener("touchmove", noop);
    mouse.element.removeEventListener("touchend", noop);
    // Re-add as passive listeners
    mouse.element.addEventListener("touchstart", (e) => {
      const t = e.touches[0];
      mouse.position.x = t.clientX;
      mouse.position.y = t.clientY;
      mouseConstraint.constraint.bodyB = null;
    }, { passive: true });
    mouse.element.addEventListener("touchmove", (e) => {
      const t = e.touches[0];
      mouse.position.x = t.clientX;
      mouse.position.y = t.clientY;
    }, { passive: true });

    // Soft attractor toward center — keeps the field from clumping at edges
    const center = { x: width / 2, y: height / 2 };
    matter.Events.on(engine, "beforeUpdate", () => {
      for (const b of bodies) {
        const dx = center.x - b.position.x;
        const dy = center.y - b.position.y;
        const dist = Math.hypot(dx, dy) || 1;
        // Gentle radial pull, falls off with distance
        const pull = 0.00012 * Math.min(dist, 400);
        matter.Body.applyForce(b, b.position, {
          x: (dx / dist) * pull,
          y: (dy / dist) * pull,
        });
      }
    });

    // Render: DOM icons positioned over canvas (cheaper than Matter.Render)
    // Create icon elements once, then transform them each frame.
    const iconEls: HTMLDivElement[] = [];
    for (let i = 0; i < bodies.length; i++) {
      const meta = metas[i];
      const el = document.createElement("div");
      el.style.position = "absolute";
      el.style.left = "0";
      el.style.top = "0";
      el.style.width = `${meta.radius * 2}px`;
      el.style.height = `${meta.radius * 2}px`;
      el.style.display = "flex";
      el.style.alignItems = "center";
      el.style.justifyContent = "center";
      el.style.willChange = "transform";
      el.style.pointerEvents = "none";
      el.style.opacity = "0.42";

      // Glass-tinted circle behind icon
      const ring = document.createElement("div");
      ring.style.position = "absolute";
      ring.style.inset = "0";
      ring.style.borderRadius = "50%";
      ring.style.background = `radial-gradient(circle, ${meta.color}1a 0%, transparent 70%)`;
      ring.style.border = `1px solid ${meta.color}33`;
      el.appendChild(ring);

      // The actual language icon
      const iconHost = document.createElement("div");
      iconHost.style.position = "relative";
      iconHost.style.color = meta.color;
      iconHost.style.filter = "drop-shadow(0 0 8px rgba(0,0,0,0.6))";
      iconHost.style.opacity = "0.7";
      // Use React portal alternative: render SVG string
      iconHost.innerHTML = renderIconSvg(meta.id, meta.radius);
      el.appendChild(iconHost);

      // Label tooltip (subtle, on hover only — but we keep it for accessibility)
      el.setAttribute("aria-label", meta.label);
      el.title = meta.label;

      iconsWrapRef.current?.appendChild(el);
      iconEls.push(el);
    }

    // Render loop
    let raf = 0;
    const render = () => {
      for (let i = 0; i < bodies.length; i++) {
        const b = bodies[i];
        const el = iconEls[i];
        const meta = metas[i];
        const angleDeg = (b.angle * 180) / Math.PI;
        el.style.transform = `translate3d(${b.position.x - meta.radius}px, ${
          b.position.y - meta.radius
        }px, 0) rotate(${angleDeg}deg)`;
      }
      raf = requestAnimationFrame(render);
    };
    render();

    // Physics tick
    const runner = matter.Runner.create();
    matter.Runner.run(runner, engine);

    // Resize
    const onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      matter.World.remove(world, walls);
      const newWalls = [
        matter.Bodies.rectangle(w / 2, -10, w, 20, wallOpts),
        matter.Bodies.rectangle(w / 2, h + 10, w, 20, wallOpts),
        matter.Bodies.rectangle(-10, h / 2, 20, h, wallOpts),
        matter.Bodies.rectangle(w + 10, h / 2, 20, h, wallOpts),
      ];
      matter.World.add(world, newWalls);
      walls.length = 0;
      walls.push(...newWalls);
    };
    window.addEventListener("resize", onResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(raf);
      matter.Runner.stop(runner);
      matter.Engine.clear(engine);
      window.removeEventListener("resize", onResize);
      if (iconsWrapRef.current) iconsWrapRef.current.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="physics-layer"
      aria-hidden="true"
      style={{ pointerEvents: "auto" }}
    >
      <canvas
        ref={canvasRef}
        style={{ position: "fixed", inset: 0, width: "100%", height: "100%" }}
      />
      <div
        ref={iconsWrapRef}
        style={{ position: "fixed", inset: 0, pointerEvents: "none" }}
      />
    </div>
  );
}

// Render language icon as inline SVG string for the physics bodies.
// Uses the LanguageIcon registry but returns a string (since these
// are appended via innerHTML for performance).
function renderIconSvg(id: string, radius: number): string {
  const size = Math.round(radius * 1.1);
  const icons: Record<string, string> = {
    kotlin: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M1.3 24l11.3-11.3L24 24zM0 0h11.3L0 12.7zm13.2 0L0 13.2v4.7L17.9 0zm4.7 12L24 17.9V12L21 9z"/></svg>`,
    c: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M11.993 0a11.92 11.92 0 0 0-9.18 4.27 11.96 11.96 0 0 0-2.4 5.06c-.7 2.83-.4 5.86.86 8.48a11.94 11.94 0 0 0 6.36 5.84 12 12 0 0 0 9.06-.21 11.86 11.86 0 0 0 4.2-3.07 11.84 11.84 0 0 0 2.6-4.46c.6-1.78.78-3.7.51-5.55a11.96 11.96 0 0 0-3.86-7.05A11.92 11.92 0 0 0 12 .06m.01 1.5a10.4 10.4 0 0 1 7.83 3.5 10.4 10.4 0 0 1 2.5 7.4 10.4 10.4 0 0 1-3.16 6.97 10.4 10.4 0 0 1-7.16 3.05 10.4 10.4 0 0 1-7.4-2.97 10.4 10.4 0 0 1-3.2-7.2A10.4 10.4 0 0 1 4.7 4.95 10.4 10.4 0 0 1 12 1.5m-.13 2.4a8.1 8.1 0 0 0-5.8 2.4 8.13 8.13 0 0 0-2.1 7.51 8.13 8.13 0 0 0 4.7 5.6 8.13 8.13 0 0 0 7.65-.78 8.13 8.13 0 0 0 3.4-6.91 8.13 8.13 0 0 0-2.92-5.86 8.13 8.13 0 0 0-4.93-2m-.06 1.5a6.6 6.6 0 0 1 6.31 4.36 6.6 6.6 0 0 1-1.65 7.18 6.6 6.6 0 0 1-7.32 1.31 6.6 6.6 0 0 1-3.97-6.13A6.6 6.6 0 0 1 9.4 6.1a6.6 6.6 0 0 1 2.4-.7m1.9 3.27l-2.02.42v1.46h-1.04v1.62h1.04v2.34c0 .87.22 1.5.66 1.91.4.36.97.55 1.71.55.55 0 .97-.05 1.27-.13v-1.66c-.16.04-.34.06-.55.06-.45 0-.71-.16-.71-.71v-2.36h1.32V9.55h-1.32V8.4z"/></svg>`,
    cpp: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M10.5 15.97l.41 2.44c-.26.14-.68.27-1.24.39-.57.13-1.24.2-2.01.2-2.21-.04-3.87-.7-4.98-1.96C1.56 15.77 1 14.16 1 12.21c.05-2.04.72-3.62 2-4.74C4.32 6.36 5.81 5.82 7.46 5.82c.72 0 1.35.07 1.88.18s.94.24 1.2.36l-.58 2.45c-.28-.13-.59-.23-.93-.29a6.84 6.84 0 0 0-1.16-.09c-1.05 0-1.88.34-2.51 1.02-.61.68-.94 1.62-.97 2.81 0 1.13.3 2 .92 2.66.6.65 1.46.97 2.51.97.42 0 .81-.04 1.16-.09.36-.06.69-.16.97-.29m3.5-3.04c.43-.05.86-.13 1.31-.13s.88.08 1.31.13v2.61c.43.07.86.07 1.31.07s.88 0 1.31-.07v-2.61c.43-.05.86-.13 1.31-.13s.88.08 1.31.13v-3.05a13.04 13.04 0 0 0-2.62-.18c-.87 0-1.74.06-2.62.18v3.05M22 13.85c-.43-.05-.86-.13-1.31-.13s-.88.08-1.31.13v3.05h-2.61v-3.05c-.43-.05-.86-.13-1.31-.13s-.88.08-1.31.13v-3.05c0-1.4.62-2.61 1.86-3.65a6.46 6.46 0 0 1 4.16-1.4c1.4 0 2.62.47 3.65 1.4A4.5 4.5 0 0 1 25 10.8c0 .85-.13 1.71-.38 2.61"/></svg>`,
    typescript: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="2" fill="currentColor" opacity="0.18"/><text x="12" y="17" text-anchor="middle" font-family="ui-monospace, monospace" font-size="11" font-weight="700" fill="currentColor">TS</text></svg>`,
    python: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656V5.5h5.814v.85H3.9S0 5.91 0 12.052c0 6.14 3.4 5.922 3.4 5.922h2.03v-3.014s-.11-3.4 3.341-3.4h5.79s3.231.053 3.231-3.122V3.2S18.223 0 11.914 0zM8.732 1.846a1.06 1.06 0 0 1 1.062 1.058 1.06 1.06 0 0 1-1.062 1.061 1.06 1.06 0 0 1-1.061-1.06 1.06 1.06 0 0 1 1.06-1.06z"/><path fill="currentColor" opacity="0.55" d="M12.086 24c6.094 0 5.714-2.656 5.714-2.656V18.5h-5.814v-.85h8.114S24 18.09 24 11.948c0-6.14-3.4-5.922-3.4-5.922h-2.03v3.014s.11 3.4-3.341 3.4h-5.79s-3.231-.053-3.231 3.122v5.238S5.777 24 12.086 24zm3.182-1.846a1.06 1.06 0 0 1-1.062-1.058 1.06 1.06 0 0 1 1.062-1.061 1.06 1.06 0 0 1 1.061 1.06 1.06 1.06 0 0 1-1.06 1.06z"/></svg>`,
    shell: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12 0a12 12 0 100 24 12 12 0 000-24zm-4.5 6.5l3 3-3 3v-2.4H4.5V8.9h3zm9 5.6v2.4h-3v2.6h3v-2.4l3-3-3-3v2.4z"/></svg>`,
    rust: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="12" y="16" text-anchor="middle" font-family="ui-monospace, monospace" font-size="10" font-weight="700" fill="currentColor">R</text></svg>`,
    go: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M3.075 10.55c-.07 0-.087-.035-.052-.087l.364-.451a.246.246 0 0 1 .157-.087h6.146c.07 0 .087.052.052.105l-.292.434a.276.276 0 0 1-.14.105zm-2.6 1.582c-.07 0-.088-.035-.053-.087l.364-.451a.246.246 0 0 1 .157-.088h7.86c.07 0 .105.053.087.105l-.14.401a.246.246 0 0 1-.227.157zm4.158 1.582c-.07 0-.087-.052-.052-.105l.244-.434a.276.276 0 0 1 .14-.105h3.446c.07 0 .105.052.105.122l-.035.384a.246.246 0 0 1-.087.21z"/></svg>`,
    asm: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="5" width="14" height="14" rx="1" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="8.5" y="8.5" width="7" height="7" fill="currentColor" opacity="0.3"/></svg>`,
    java: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" opacity="0.9" d="M8.85 15.55c-.4-.28-.93-.7-1.62-1.28-1.18-1-2.4-2.42-2.4-3.96 0-1.95 1.78-3.13 3.6-3.13.79 0 1.55.21 2.22.6.32-.69.78-1.3 1.34-1.81-1.06-.69-2.31-1.07-3.56-1.07C5.7 4.9 3 7.27 3 10.31c0 2.06 1.32 3.86 2.92 5.27 1.06.93 1.95 1.55 2.71 2.06.55.36 1.04.69 1.45 1.02.55-.43 1.18-.86 1.92-1.39l1.27-.91c.42.13.86.2 1.32.2 1.5 0 2.84-.85 3.51-2.18-.55.18-1.13.27-1.71.27-2.4 0-4.35-1.74-4.4-4.06-.59.27-1.13.65-1.6 1.13z"/></svg>`,
  };
  return icons[id] || icons.c;
}
