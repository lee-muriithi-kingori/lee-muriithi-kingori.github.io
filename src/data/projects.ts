export type Project = {
  slug: string;
  name: string;
  tag: string;
  desc: string;
  long?: string;
  url: string;
  featured?: boolean;
  status?: 'shipped' | 'wip' | 'beta';
  stack?: string[];
  metrics?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: 'ublestramk',
    name: 'UBLESTRAMK',
    tag: 'Android · Magisk',
    desc: 'Universal Boot-Lock Evasion & Stealth Root Admin module for Magisk, KernelSU, and APatch. Real Zygisk C++ layer, keybox attestation hooks, and a WebUI.',
    long: 'Built to keep rooted phones working with banking apps and Uber in Nairobi — and to push the Magisk/Zygisk model past simple prop spoofing. v1.4.1 ships a native C++ layer with keybox attestation hooks and a port-allocator-aware mount namespace. 4 stars, 74 commits, a Telegram community of real users.',
    url: 'https://github.com/lee-muriithi-kingori/UBLESTRAMK',
    featured: true,
    status: 'shipped',
    stack: ['C++', 'Magisk', 'Zygisk', 'JNI', 'Android NDK', 'Shell'],
    metrics: [
      { label: 'stars', value: '4' },
      { label: 'commits', value: '74' },
      { label: 'release', value: 'v1.4.1' },
    ],
  },
  {
    slug: 'lestraos',
    name: 'LestraOS',
    tag: 'Systems · C / x86_64',
    desc: 'A from-scratch x86_64 operating system — kernel, drivers, libc, userspace, package manager, and desktop. Built one commit at a time.',
    long: 'Not a finished OS. An honest foundation. VGA text mode, PS/2 keyboard with full scancode table and ring buffer, COM1 serial, PIT timer, a custom libc, and a working shell. Next: paging, scheduler, VFS, syscalls. The README is overclaiming — the commits are not.',
    url: 'https://github.com/lee-muriithi-kingori/LestraOS',
    featured: true,
    status: 'wip',
    stack: ['C', 'x86_64 ASM', 'GNU Make', 'QEMU', 'GRUB'],
    metrics: [
      { label: 'drivers', value: '4' },
      { label: 'LoC', value: '~2.2k' },
      { label: 'boots', value: 'in QEMU' },
    ],
  },
  {
    slug: 'aamt',
    name: 'AAMT',
    tag: 'Web · Marketplace',
    desc: 'Africa\'s Vetted Talent Marketplace — a two-sided platform with escrow, KYC, and direct contracts. Built end-to-end.',
    long: 'A working product. Next.js + Prisma + Postgres + Supabase Auth, deployed on Vercel. The premise: credentials shouldn\'t require a LinkedIn signal. Three pricing tiers, employer and talent flows, persona-based marketing.',
    url: 'https://github.com/lee-muriithi-kingori/aamt',
    featured: true,
    status: 'beta',
    stack: ['Next.js', 'TypeScript', 'Prisma', 'Postgres', 'Supabase', 'Vercel'],
    metrics: [
      { label: 'tiers', value: '3' },
      { label: 'stack', value: 'Next.js' },
      { label: 'hosting', value: 'Vercel' },
    ],
  },
  {
    slug: 'aamt-cli',
    name: 'AAMT CLI',
    tag: 'CLI · Tooling',
    desc: 'Official command-line client for AAMT. Manage resumes, jobs, applications, and accounts from the terminal.',
    long: 'npm-installable TypeScript CLI for the AAMT marketplace. Auth, resume management, job applications, profile editing. Built for the kind of person who lives in a terminal — and because AAMT deserves a power-user surface.',
    url: 'https://github.com/lee-muriithi-kingori/aamt-lestramk',
    featured: true,
    status: 'shipped',
    stack: ['TypeScript', 'Node', 'Commander', 'npm'],
    metrics: [
      { label: 'commands', value: '7 groups' },
      { label: 'package', value: 'npm' },
    ],
  },
  {
    slug: 'lespoof',
    name: 'Lespoof',
    tag: 'Android · Samsung',
    desc: 'A precision-engineered Samsung Knox spoofing and system-utility LSPosed module. Quiet where it matters.',
    long: 'A Kotlin LSPosed module targeting Samsung Knox integrity and Play Integrity API hooks. Designed for Android 12+ devices where Samsung\'s attestation stack adds an extra layer on top of stock.',
    url: 'https://github.com/lee-muriithi-kingori/Lespoof',
    featured: false,
    status: 'beta',
    stack: ['Kotlin', 'LSPosed', 'Xposed API', 'Samsung Knox'],
  },
  {
    slug: 'lestramk-toolkit',
    name: 'LESTRAMK-TOOLKIT',
    tag: 'Toolkit · Diagnostic',
    desc: 'A diagnostic toolkit for the root community. Helps figure out what\'s actually broken before blaming the kernel.',
    long: '100% C diagnostic binary for rooted Android devices. System check, keybox management, network tools, live monitor. The README reads like AI wrote it. The code doesn\'t.',
    url: 'https://github.com/lee-muriithi-kingori/LESTRAMK-TOOLKIT',
    featured: false,
    status: 'shipped',
    stack: ['C', 'POSIX', 'Android toolbox'],
  },
  {
    slug: 'anonroute',
    name: 'AnonRoute',
    tag: 'Networking · Privacy',
    desc: 'A SOCKS5 proxy tunnel for Android. Not for everyone, but the few who need it know.',
    url: 'https://github.com/lee-muriithi-kingori/AnonRoute-LESTRAMK',
    featured: false,
    status: 'shipped',
    stack: ['Shell', 'SOCKS5', 'iptables'],
  },
  {
    slug: 'lestramk-agent-skills',
    name: 'lestramk-agent-skills',
    tag: 'AI · Open Standard',
    desc: 'A production-grade collection of agent skills released under the open Agent Skills standard.',
    url: 'https://github.com/lee-muriithi-kingori/lestramk-agent-skills',
    featured: false,
    status: 'shipped',
    stack: ['Markdown', 'Open Standard'],
  },
  {
    slug: 'mkulima-mkuu',
    name: 'Mkulima Mkuu',
    tag: 'Web · AgriTech',
    desc: 'An agricultural platform to help farmers find each other, share what works, and stop being the last to know.',
    url: 'https://github.com/lee-muriithi-kingori/Mkulima-mkuu',
    featured: false,
    status: 'wip',
    stack: ['Web'],
  },
];

export const featuredProjects = projects.filter(p => p.featured);

export type Service = {
  id: string;
  label: string;
  title: string;
  desc: string;
  bullets: string[];
  icon: string;
};

export const services: Service[] = [
  {
    id: 'android',
    label: '01',
    title: 'Android rooting & integrity',
    desc: 'Custom Magisk/KernelSU/APatch modules and Zygisk native layers. If it boots Android, I can hide it.',
    bullets: [
      'Magisk / Zygisk / LSPosed module development',
      'Native C++ / JNI hooks for KeyMint and Keystore',
      'Boot, prop, and mount namespace hardening',
      'Telegram community ops & user feedback loops',
    ],
    icon: 'android',
  },
  {
    id: 'web',
    label: '02',
    title: 'Web product, full stack',
    desc: 'Next.js apps with real users. From landing pages to marketplaces with payments and escrow.',
    bullets: [
      'Next.js, TypeScript, Tailwind',
      'Prisma + Postgres + Supabase',
      'Stripe, MPesa, and escrow flows',
      'Production deploy on Vercel',
    ],
    icon: 'web',
  },
  {
    id: 'systems',
    label: '03',
    title: 'Systems & low-level',
    desc: 'C, x86_64, kernels, drivers, and the tools that talk to them. Most comfortable where the abstraction ends.',
    bullets: [
      'C and x86_64 assembly',
      'Custom kernels, drivers, bootloaders',
      'POSIX tooling and CLIs',
      'QEMU-based hardware simulation',
    ],
    icon: 'systems',
  },
];