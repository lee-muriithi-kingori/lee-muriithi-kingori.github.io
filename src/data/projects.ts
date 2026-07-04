export type Status = 'shipped' | 'beta' | 'wip' | 'arch';

export interface Project {
  name: string;
  tag: string;
  desc: string;
  stack: string[];
  href: string;
  status: Status;
}

export const projects: Project[] = [
  {
    name: 'LestraOS',
    tag: 'Custom x86_64 OS · from scratch',
    desc:
      'Bootloader, kernel, drivers, libc, userspace, package manager, desktop. ' +
      'Currently: VGA text, PS/2 keyboard with full scancode tables and a ring buffer, ' +
      'COM1 serial, PIT timer, custom libc, working shell. Next on the list: ' +
      'paging, scheduler, VFS, syscalls.',
    stack: ['C', 'x86_64 ASM', 'GNU Make', 'QEMU', 'GRUB'],
    href: 'https://github.com/lee-muriithi-kingori/LestraOS',
    status: 'wip',
  },
  {
    name: 'Rox2',
    tag: 'Root-hider for Magisk / KernelSU / APatch',
    desc:
      'Default-deny allowlist and a real Zygisk native layer using unshare(CLONE_NEWNS) ' +
      'and umount2 per app. Ships with a Rox-Boot companion module that bind-mounts a ' +
      'clean /proc/cmdline and strips ro.boot.verifiedbooterror* props. No fake ' +
      'attestation, no fake keybox, no fake passmark.',
    stack: ['C++', 'Shell', 'CMake'],
    href: 'https://github.com/lee-muriithi-kingori/Rox2',
    status: 'shipped',
  },
  {
    name: 'Lespoof',
    tag: 'LSPosed module · Samsung integrity restore',
    desc:
      'Restores device integrity on rooted Samsungs. Hooks the system and third-party ' +
      'APIs so they perceive stock hardware security states. Targets Android 12+, ' +
      'verified against Play Integrity.',
    stack: ['Kotlin', 'Xposed'],
    href: 'https://github.com/lee-muriithi-kingori/Lespoof',
    status: 'shipped',
  },
  {
    name: 'lestramk-agent-skills',
    tag: 'AI agent skill library',
    desc:
      'Production-grade collection of 22 skills for the open Agent Skills standard. ' +
      'Each skill ships with a SKILL.md, a setup script, and a test fixture. Covers ' +
      'reasoning, execution, safety, recovery, and meta-cognition.',
    stack: ['Markdown', 'Shell'],
    href: 'https://github.com/lee-muriithi-kingori/lestramk-agent-skills',
    status: 'shipped',
  },
  {
    name: 'RxO',
    tag: 'AI training orchestrator',
    desc:
      'The Lestra AI Orchestrator. Three-repo architecture managing text-to-binary ' +
      'training, evaluation, and pattern recognition. Self-writes its training corpus ' +
      'on a single GPU.',
    stack: ['Python', 'PyTorch', 'CUDA'],
    href: 'https://github.com/lee-muriithi-kingori/RxO',
    status: 'wip',
  },
  {
    name: 'aamt-lestramk',
    tag: 'CLI client · talent marketplace',
    desc:
      'Official CLI for Africa\u2019s Vetted Talent Marketplace. Account, resumes, ' +
      'jobs, batch operations. Designed for power users who script their work — pipe ' +
      'applications, automate scans.',
    stack: ['TypeScript', 'Commander.js'],
    href: 'https://github.com/lee-muriithi-kingori/aamt-lestramk',
    status: 'beta',
  },
];
