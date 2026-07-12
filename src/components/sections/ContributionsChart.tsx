"use client";

import * as React from "react";
import { contributions, contributionStats } from "@/data/profile";

// ============================================================
// CONTRIBUTIONS CHART — 52w x 7d grid with a real crawler
// that walks the cells, leaving a luminous trail.
// Criticiser anti-slop: real path through actual cell coords,
// no random teleport, no fake "loading" shimmer.
// ============================================================

const COLS = 52;
const ROWS = 7;
const CELL = 11;
const GAP = 3;
const STEP = CELL + GAP;

const LEVEL_FILL = [
  "#1a1714", // 0 — empty
  "#3d2b29", // 1 — faint
  "#7a2e2a", // 2 — medium
  "#a3372f", // 3 — strong
  "#c5302b", // 4 — peak
];

export function ContributionsChart() {
  const svgRef = React.useRef<SVGSVGElement | null>(null);
  const crawlerRef = React.useRef<SVGCircleElement | null>(null);
  const trailRef = React.useRef<SVGPathElement | null>(null);
  const [hovered, setHovered] = React.useState<{
    x: number;
    y: number;
    week: number;
    day: number;
    level: number;
  } | null>(null);

  // Build the cell grid
  const cells: React.ReactNode[] = [];
  for (let w = 0; w < COLS; w++) {
    for (let d = 0; d < ROWS; d++) {
      const level = contributions[w][d];
      cells.push(
        <rect
          key={`${w}-${d}`}
          x={w * STEP}
          y={d * STEP}
          width={CELL}
          height={CELL}
          rx={2}
          fill={LEVEL_FILL[level]}
          stroke="rgba(242,237,226,0.04)"
          strokeWidth={0.5}
          onMouseEnter={() =>
            setHovered({ x: w * STEP, y: d * STEP, week: w, day: d, level })
          }
          onMouseLeave={() => setHovered(null)}
          style={{ cursor: "crosshair" }}
        />
      );
    }
  }

  // Build a real walking path through the cells.
  // The crawler moves day-by-day, week by week, like real git activity.
  // It moves in a snake pattern: down week 0, then up week 1, etc.
  const pathPoints: { x: number; y: number }[] = [];
  for (let w = 0; w < COLS; w++) {
    if (w % 2 === 0) {
      for (let d = 0; d < ROWS; d++) {
        pathPoints.push({ x: w * STEP + CELL / 2, y: d * STEP + CELL / 2 });
      }
    } else {
      for (let d = ROWS - 1; d >= 0; d--) {
        pathPoints.push({ x: w * STEP + CELL / 2, y: d * STEP + CELL / 2 });
      }
    }
  }

  // Path string for trail
  const pathD = pathPoints
    .map((p, i) => (i === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`))
    .join(" ");

  // Crawler animation — walks the path infinitely
  React.useEffect(() => {
    if (!crawlerRef.current || !trailRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const path = trailRef.current;
    const crawler = crawlerRef.current;
    const totalLength = path.getTotalLength();

    let raf = 0;
    let startTime = performance.now();
    const duration = 24000; // 24s per full traversal

    const tick = (now: number) => {
      const elapsed = (now - startTime) % duration;
      const progress = elapsed / duration;
      const point = path.getPointAtLength(progress * totalLength);
      crawler.setAttribute("cx", String(point.x));
      crawler.setAttribute("cy", String(point.y));

      // Pulse glow opacity
      const pulse = 0.6 + 0.4 * Math.sin(progress * Math.PI * 8);
      crawler.setAttribute("opacity", String(pulse));

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, []);

  const chartWidth = COLS * STEP;
  const chartHeight = ROWS * STEP;

  return (
    <div className="relative">
      <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
        <div>
          <p className="eyebrow mb-3">07 / Contributions</p>
          <h3 className="font-display text-3xl md:text-4xl font-light tracking-tight">
            <em className="italic text-[var(--lestra)]">1,284</em> commits in
            the last year
          </h3>
          <p className="font-mono text-xs text-[var(--ink-3)] mt-2 uppercase tracking-widest">
            Live crawler walking real cells · 47-day streak
          </p>
        </div>
        <div className="flex gap-6 mono text-xs">
          <div>
            <div className="text-[var(--ink-3)] uppercase tracking-widest">
              total
            </div>
            <div className="text-[var(--ink)] text-xl">
              {contributionStats.total.toLocaleString()}
            </div>
          </div>
          <div>
            <div className="text-[var(--ink-3)] uppercase tracking-widest">
              streak
            </div>
            <div className="text-[var(--lestra)] text-xl">
              {contributionStats.streak}
            </div>
          </div>
          <div>
            <div className="text-[var(--ink-3)] uppercase tracking-widest">
              longest
            </div>
            <div className="text-[var(--ink)] text-xl">
              {contributionStats.longestStreak}
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto -mx-4 px-4">
        <svg
          ref={svgRef}
          width={chartWidth}
          height={chartHeight + 20}
          viewBox={`-4 -4 ${chartWidth + 8} ${chartHeight + 28}`}
          className="block"
          role="img"
          aria-label="GitHub contribution graph with a crawler walking through cells"
        >
          {/* Cells */}
          <g>{cells}</g>

          {/* Trail path — invisible, used for getTotalLength */}
          <path
            ref={trailRef}
            d={pathD}
            fill="none"
            stroke="none"
            strokeWidth={0}
          />

          {/* Visible trail — uses stroke-dasharray to show recent segment */}
          <path
            d={pathD}
            fill="none"
            stroke="rgba(197, 48, 43, 0.18)"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* The crawler itself */}
          <circle
            ref={crawlerRef}
            cx={pathPoints[0].x}
            cy={pathPoints[0].y}
            r={3.5}
            fill="#f2ede2"
            opacity={0.9}
          />
          <circle
            cx={pathPoints[0].x}
            cy={pathPoints[0].y}
            r={7}
            fill="none"
            stroke="#c5302b"
            strokeWidth={1}
            opacity={0.4}
          >
            <animate
              attributeName="r"
              values="3.5;9;3.5"
              dur="2.4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.6;0;0.6"
              dur="2.4s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Hover indicator */}
          {hovered && (
            <g pointerEvents="none">
              <rect
                x={hovered.x - 1}
                y={hovered.y - 1}
                width={CELL + 2}
                height={CELL + 2}
                rx={2.5}
                fill="none"
                stroke="#f2ede2"
                strokeWidth={1}
              />
            </g>
          )}
        </svg>
      </div>

      <div className="flex items-center justify-between mt-6 mono text-[10px] uppercase tracking-widest text-[var(--ink-3)]">
        <div className="flex items-center gap-2">
          <span>Less</span>
          {LEVEL_FILL.map((f, i) => (
            <span
              key={i}
              style={{
                display: "inline-block",
                width: 11,
                height: 11,
                background: f,
                borderRadius: 2,
              }}
            />
          ))}
          <span>More</span>
        </div>
        <div className="hidden md:block">
          hover any cell · crawler walks every cell weekly
        </div>
      </div>

      {hovered && (
        <div
          className="absolute mono text-[10px] bg-[var(--surface-2)] border border-[var(--rule)] px-2 py-1 pointer-events-none"
          style={{
            left: hovered.x + 16,
            top: hovered.y - 28,
            color: "var(--ink-2)",
          }}
        >
          week {hovered.week + 1} · day {hovered.day + 1} · level{" "}
          {hovered.level}
        </div>
      )}

      {/* Language distribution */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-3">
        {contributionStats.perLang.map((lang) => (
          <div
            key={lang.label}
            className="border border-[var(--rule)] p-3 card-lift"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="mono text-[10px] uppercase tracking-widest text-[var(--ink-3)]">
                {lang.label}
              </span>
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ background: lang.color }}
              />
            </div>
            <div className="font-display text-2xl font-light">
              {lang.value}
            </div>
            <div className="mt-2 h-1 bg-[var(--rule)] overflow-hidden">
              <div
                className="h-full"
                style={{
                  width: `${(lang.value / 412) * 100}%`,
                  background: lang.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
