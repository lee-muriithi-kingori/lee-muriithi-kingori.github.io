export interface TimelineRow {
  date: string;        // ISO 2026-07-04
  title: string;
  kind: string;        // tag / merge / commit / docs / open / rollback
  repo: string;
  body?: string;
}

export const timeline: TimelineRow[] = [
  {
    date: '2026-07-04',
    kind: 'tag',
    repo: 'Rox2 v1.2',
    title: 'Cut Rox2 v1.2 with no fake attestation, no fake keybox.',
    body:
      'Drops the work v1 got crushed on. Zygisk unshare + umount2 per app, default-deny ' +
      'allowlist, real resetprop -c where Magisk had pinned props read-only.',
  },
  {
    date: '2026-07-02',
    kind: 'merge',
    repo: 'lestramk-website',
    title: 'Rewrote the homepage.',
    body:
      'Editorial type, monochrome. Two halves, one timeline, one contact block. ' +
      'Crawlers removed; the page is static HTML now.',
  },
  {
    date: '2026-06-30',
    kind: 'docs',
    repo: 'Rox2/README.md',
    title: 'Removed the Google attestation section entirely.',
    body:
      'It was wrong. STRONG integrity requires a real keybox — that\u2019s TrickyStore ' +
      'territory, not ours. Documented the limit instead of pretending it isn\u2019t one.',
  },
  {
    date: '2026-06-28',
    kind: 'rollback',
    repo: 'Rox2 native',
    title: 'Deleted the fake passmark helper.',
    body:
      'It existed. It did what reviewers said it did. Gone.',
  },
  {
    date: '2026-06-26',
    kind: 'commit',
    repo: 'LestraOS/drivers',
    title: 'PS/2 keyboard scancode tables (set 1 + set 2) with ring buffer.',
    body:
      'IRQ1 handler, 256-byte ring buffer with overflow protection. Required for the ' +
      'shell to read a keypress; previously polled and racy.',
  },
  {
    date: '2026-06-23',
    kind: 'commit',
    repo: 'LestraOS/libc',
    title: 'First cut of the custom libc.',
    body:
      'memcpy, memset, memmove, str*, vsnprintf, malloc with first-fit. Enough for the ' +
      'shell to link against instead of newlib.',
  },
  {
    date: '2026-06-19',
    kind: 'open',
    repo: 'lestramk-agent-skills',
    title: 'Accepted into the open Agent Skills registry.',
    body: '22 skills indexed.',
  },
  {
    date: '2026-06-14',
    kind: 'merge',
    repo: 'lestramk-profile',
    title: 'Dropped the autogen section in the profile README.',
    body:
      'The six-hour crawler kept failing on fetch. Hardcoded the contribution chart ' +
      'and the project list. Page works offline now.',
  },
];
