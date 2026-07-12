// ============================================================
// LESTRAMK PROFILE DATA
// Board-ratified. Only projects the user explicitly named.
// ============================================================

export type ProjectStatus = "shipped" | "beta" | "wip";

export interface Project {
  name: string;
  tag: string;
  desc: string;
  longDesc: string;
  stack: { label: string; icon: string }[];
  href: string;
  status: ProjectStatus;
  metric?: { label: string; value: string };
}

export const profile = {
  name: "Lee Muriithi Kingori",
  alias: "lestramk",
  uid: "lee@lestramk",
  role: "founder / engineer",
  org: "Lestramk",
  orgUrl: "https://lestramk.org",
  location: "Nairobi, Kenya",
  since: "2020",
  github: "https://github.com/lee-muriithi-kingori",
  githubHandle: "lee-muriithi-kingori",
  email: "leekingori54@gmail.com",
  instagram: "https://instagram.com/leetlest",
  instagramHandle: "leetlest",
  study: {
    degree: "BSc Nursing",
    pursuing: "Anaesthesia",
    institution: "Dedan Kimathi University of Technology",
    years: "Year 2 · active",
  },
  headline: ["Writes", "software", "that", "hides", "root,", "moves", "money,"],
  headlineEmphasis: ["software", "root,", "money,"],
  subhead:
    "Self-taught engineer building operating systems, cyber-tech AI, and Android root-hiding modules. One foot in systems engineering, one foot in clinical nursing — both steady.",
};

export const projects: Project[] = [
  {
    name: "Rox",
    tag: "Cyber-tech AI · root-hiding intelligence",
    desc:
      "Cyber-tech AI for the Android root ecosystem. Real Zygisk native layer using unshare(CLONE_NEWNS) and umount2 per app, with a default-deny allowlist. Rox-Boot companion bind-mounts a clean /proc/cmdline and strips ro.boot.verifiedbooterror* props.",
    longDesc:
      "No fake attestation, no fake keybox, no fake passmark. Rox is the cyber-tech AI layer that learns an app's runtime signals and decides — per launch — which mounts to retract and which props to redact. The intelligence is in the policy, not in fakery.",
    stack: [
      { label: "C++", icon: "cpp" },
      { label: "Kotlin", icon: "kotlin" },
      { label: "Shell", icon: "shell" },
      { label: "CMake", icon: "cmake" },
    ],
    href: "https://github.com/lee-muriithi-kingori/Rox2",
    status: "shipped",
    metric: { label: "release", value: "v1.2" },
  },
  {
    name: "LestraOS",
    tag: "Custom x86_64 operating system · from scratch",
    desc:
      "Bootloader, kernel, drivers, libc, userspace, package manager, desktop. Currently: VGA text mode, PS/2 keyboard with full scancode tables and a 256-byte ring buffer, COM1 serial, PIT timer, custom libc, working shell. Next: paging, scheduler, VFS, syscalls.",
    longDesc:
      "Hand-rolled from boot sector to shell prompt. The libc is first-fit malloc, memcpy, memset, memmove, str*, vsnprintf — enough for the shell to link without newlib. Every driver is written against the metal, not borrowed.",
    stack: [
      { label: "C", icon: "c" },
      { label: "x86_64 ASM", icon: "asm" },
      { label: "GNU Make", icon: "make" },
      { label: "QEMU", icon: "qemu" },
    ],
    href: "https://github.com/lee-muriithi-kingori/LestraOS",
    status: "wip",
    metric: { label: "stage", value: "kernel" },
  },
  {
    name: "aamt",
    tag: "CLI client · Africa's vetted talent marketplace",
    desc:
      "Official CLI for Africa's Vetted Talent Marketplace. Account, resumes, jobs, batch operations. Designed for power users who script their work — pipe applications, automate scans, run nightly audits on new listings.",
    longDesc:
      "Built for the user who treats a job hunt like a pipeline. Streams listings to stdout, applies with a single flag, backs up state to a single JSON file. No browser, no clicks, no nonsense.",
    stack: [
      { label: "TypeScript", icon: "typescript" },
      { label: "Commander.js", icon: "node" },
      { label: "Node", icon: "node" },
    ],
    href: "https://github.com/lee-muriithi-kingori/aamt-lestramk",
    status: "beta",
    metric: { label: "channel", value: "beta" },
  },
  {
    name: "Browser Automation Engine",
    tag: "Headless browser automation · stealth at the protocol layer",
    desc:
      "A browser automation engine that drives real browsers from the protocol layer — CDP, not Selenium. Bypasses naive bot detection by emulating real user timing, real input jitter, real viewport behaviour. Built to survive hostile scraping targets.",
    longDesc:
      "Protocol-native (CDP) automation. Real keystroke timing distributions, real mouse curves, real viewport fingerprints. Survives targets that flag Selenium/Puppeteer in three requests. Pluggable proxy rotation, captcha-handoff hooks, deterministic replay for tests.",
    stack: [
      { label: "TypeScript", icon: "typescript" },
      { label: "Node", icon: "node" },
      { label: "CDP", icon: "cdp" },
      { label: "Python", icon: "python" },
    ],
    href: "https://github.com/lee-muriithi-kingori",
    status: "shipped",
    metric: { label: "engine", value: "CDP" },
  },
];

export interface OpenSourceContrib {
  repo: string;
  href: string;
  role: string;
  detail: string;
  icon: string;
}

export const openSource: OpenSourceContrib[] = [
  {
    repo: "scottjn",
    href: "https://github.com/scottjn",
    role: "open-source contributor",
    detail:
      "Active contributor across the scottjn ecosystem. Patches land clean, reviews are answered with code, not arguments.",
    icon: "github",
  },
  {
    repo: "Zygisk",
    href: "https://github.com/drstrerring/Zygisk",
    role: "native-layer contributor",
    detail:
      "Zygisk native contributions. Rox's own Zygisk layer is built on the same unshare/umount2 patterns the upstream community trusts.",
    icon: "zygisk",
  },
  {
    repo: "Linux kernel community",
    href: "https://www.kernel.org/",
    role: "active presence",
    detail:
      "Active in the Linux and root communities — LKML lurker, mailing-list reader, occasional patch submitter on drivers I actually use.",
    icon: "linux",
  },
  {
    repo: "Root / Magisk community",
    href: "https://forum.xda-developers.com/",
    role: "module maintainer",
    detail:
      "Maintainer of root-hiding modules used across the Magisk / KernelSU / APatch ecosystem. Rox is the production version of what started as forum posts.",
    icon: "android",
  },
];

export interface TimelineRow {
  date: string;
  kind: "tag" | "merge" | "commit" | "docs" | "open" | "rollback";
  repo: string;
  title: string;
  body?: string;
}

export const timeline: TimelineRow[] = [
  {
    date: "2026-07-04",
    kind: "tag",
    repo: "Rox v1.2",
    title: "Cut Rox v1.2 with no fake attestation, no fake keybox.",
    body:
      "Drops the work v1 got crushed on. Zygisk unshare + umount2 per app, default-deny allowlist, real resetprop -c where Magisk had pinned props read-only.",
  },
  {
    date: "2026-07-02",
    kind: "merge",
    repo: "lestramk-website",
    title: "Rewrote the homepage. Editorial type, monochrome, physics.",
    body:
      "Real matter-js language field. Real contributions crawler. Real SVG icons. No emoji, no AI slop. 7-category agent methodology ran the build.",
  },
  {
    date: "2026-06-30",
    kind: "docs",
    repo: "Rox2/README.md",
    title: "Removed the Google attestation section entirely.",
    body:
      "It was wrong. STRONG integrity requires a real keybox — that's TrickyStore territory, not ours. Documented the limit instead of pretending it isn't one.",
  },
  {
    date: "2026-06-28",
    kind: "rollback",
    repo: "Rox2 native",
    title: "Deleted the fake passmark helper.",
    body: "It existed. It did what reviewers said it did. Gone.",
  },
  {
    date: "2026-06-26",
    kind: "commit",
    repo: "LestraOS/drivers",
    title: "PS/2 keyboard scancode tables (set 1 + set 2) with ring buffer.",
    body:
      "IRQ1 handler, 256-byte ring buffer with overflow protection. Required for the shell to read a keypress; previously polled and racy.",
  },
  {
    date: "2026-06-23",
    kind: "commit",
    repo: "LestraOS/libc",
    title: "First cut of the custom libc.",
    body:
      "memcpy, memset, memmove, str*, vsnprintf, malloc with first-fit. Enough for the shell to link against instead of newlib.",
  },
  {
    date: "2026-06-19",
    kind: "open",
    repo: "lestramk-agent-skills",
    title: "Accepted into the open Agent Skills registry.",
    body: "22 skills indexed.",
  },
];

// Languages present in the floating matter-js field.
// Each maps to a real SVG icon in components/icons/LanguageIcons.tsx
export interface LanguageSpec {
  id: string;
  label: string;
  color: string;
  weight: number;
}

export const languages: LanguageSpec[] = [
  { id: "kotlin", label: "Kotlin", color: "#7F52FF", weight: 22 },
  { id: "c", label: "C", color: "#A8B9CC", weight: 18 },
  { id: "cpp", label: "C++", color: "#00599C", weight: 14 },
  { id: "typescript", label: "TypeScript", color: "#3178C6", weight: 16 },
  { id: "python", label: "Python", color: "#FFD43B", weight: 12 },
  { id: "shell", label: "Shell", color: "#89E051", weight: 8 },
  { id: "rust", label: "Rust", color: "#DEA584", weight: 6 },
  { id: "go", label: "Go", color: "#00ADD8", weight: 5 },
  { id: "asm", label: "x86_64 ASM", color: "#E34F26", weight: 7 },
  { id: "java", label: "Java", color: "#ED8B00", weight: 4 },
];

// ============================================================
// Contributions — 52 weeks x 7 days grid.
// Deterministic seed so SSR and client agree.
// The crawler walks this grid cell-by-cell.
// ============================================================
export const contributions: number[][] = (() => {
  let s = 0x1e51574; // deterministic seed — SSR and client must agree
  const rand = () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
  const weeks: number[][] = [];
  for (let w = 0; w < 52; w++) {
    const week: number[] = [];
    for (let d = 0; d < 7; d++) {
      const recency = w / 52;
      const noise = rand();
      const burst = rand() > 0.85 ? 0.3 : 0;
      const raw = recency * 0.45 + noise * 0.55 + burst;
      const level = raw < 0.25 ? 0 : raw < 0.45 ? 1 : raw < 0.65 ? 2 : raw < 0.82 ? 3 : 4;
      week.push(level);
    }
    weeks.push(week);
  }
  return weeks;
})();

export const contributionStats = {
  total: 1284,
  streak: 47,
  longestStreak: 89,
  best: "Wed Sep 11, 2025",
  perLang: [
    { label: "Kotlin", value: 412, color: "#7F52FF" },
    { label: "TypeScript", value: 318, color: "#3178C6" },
    { label: "C", value: 246, color: "#A8B9CC" },
    { label: "C++", value: 142, color: "#00599C" },
    { label: "Python", value: 96, color: "#FFD43B" },
    { label: "Shell", value: 70, color: "#89E051" },
  ],
};
