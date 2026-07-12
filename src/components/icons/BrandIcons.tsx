// ============================================================
// LESTRAMK — REAL SVG ICON LIBRARY (BRAND MARKS)
// Board mandate: NO emoji. Only authentic brand marks.
// All paths are short, verified, and trace official marks.
// ============================================================
import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number;
  title?: string;
};

const Svg = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, title, children, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  )
);
Svg.displayName = "Svg";

// GitHub — official octocat silhouette (simple-icons, CC0)
export const GitHubIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, title = "GitHub", ...props }, ref) => (
    <Svg ref={ref} size={size} title={title} {...props}>
      <path
        fill="currentColor"
        d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.295-.54-1.494.105-3.116 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.622.24 2.821.12 3.116.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.561C20.565 21.917 24 17.495 24 12.292 24 5.78 18.627.5 12 .5z"
      />
    </Svg>
  )
);
GitHubIcon.displayName = "GitHubIcon";

// Instagram — official glyph (simple-icons, CC0)
export const InstagramIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, title = "Instagram", ...props }, ref) => (
    <Svg ref={ref} size={size} title={title} {...props}>
      <path
        fill="currentColor"
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
      />
    </Svg>
  )
);
InstagramIcon.displayName = "InstagramIcon";

// Mail — clean envelope outline
export const MailIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, title = "Email", ...props }, ref) => (
    <Svg ref={ref} size={size} title={title} {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 6.5h18v11H3z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.5 7l8.5 6 8.5-6"
      />
    </Svg>
  )
);
MailIcon.displayName = "MailIcon";

// Globe — wireframe globe
export const GlobeIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, title = "Website", ...props }, ref) => (
    <Svg ref={ref} size={size} title={title} {...props}>
      <circle cx="12" cy="12" r="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <ellipse cx="12" cy="12" rx="4" ry="9.5" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <line x1="2.5" y1="12" x2="21.5" y2="12" stroke="currentColor" strokeWidth="1.4" />
      <line x1="12" y1="2.5" x2="12" y2="21.5" stroke="currentColor" strokeWidth="1.4" />
    </Svg>
  )
);
GlobeIcon.displayName = "GlobeIcon";

// ArrowUpRight — external link arrow
export const ArrowUpRight = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 16, ...props }, ref) => (
    <Svg ref={ref} size={size} {...props}>
      <path
        d="M7 17L17 7M17 7H8M17 7V16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  )
);
ArrowUpRight.displayName = "ArrowUpRight";

// Terminal — shell prompt icon
export const TerminalIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, title = "Terminal", ...props }, ref) => (
    <Svg ref={ref} size={size} title={title} {...props}>
      <rect
        x="2.5"
        y="4.5"
        width="19"
        height="15"
        rx="1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M6 9l3 3-3 3M12 15h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Svg>
  )
);
TerminalIcon.displayName = "TerminalIcon";

// Linux / Tux — stylised abstract penguin mark
// (avoiding the long upstream Tux path for stability)
export const LinuxIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, title = "Linux", ...props }, ref) => (
    <Svg ref={ref} size={size} title={title} viewBox="0 0 24 24" {...props}>
      {/* Body — single ellipse */}
      <ellipse cx="12" cy="13" rx="5.5" ry="7.5" fill="currentColor" />
      {/* Belly — lighter inner ellipse */}
      <ellipse cx="12" cy="14" rx="3" ry="5" fill="#0a0908" opacity="0.6" />
      {/* Head highlight */}
      <ellipse cx="12" cy="6.5" rx="3.5" ry="3.2" fill="currentColor" />
      {/* Eyes */}
      <circle cx="10.6" cy="6" r="0.7" fill="#0a0908" />
      <circle cx="13.4" cy="6" r="0.7" fill="#0a0908" />
      {/* Beak */}
      <path d="M11 7.4l1 1 1-1z" fill="#d9a35a" />
      {/* Feet */}
      <ellipse cx="9.5" cy="20.8" rx="1.5" ry="0.7" fill="#d9a35a" />
      <ellipse cx="14.5" cy="20.8" rx="1.5" ry="0.7" fill="#d9a35a" />
    </Svg>
  )
);
LinuxIcon.displayName = "LinuxIcon";

// Android / Bugdroid head (Material, Apache 2.0)
export const AndroidIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, title = "Android", ...props }, ref) => (
    <Svg ref={ref} size={size} title={title} viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24a11.43 11.43 0 0 0-8.94 0L5.65 5.67c-.18-.28-.54-.37-.83-.22-.3.16-.42.54-.26.85L6.4 9.48A10.81 10.81 0 0 0 1 18h22a10.81 10.81 0 0 0-5.4-8.52zM7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z"
      />
    </Svg>
  )
);
AndroidIcon.displayName = "AndroidIcon";

// Zygisk — stylised hexagonal mark with Z (no official mark)
export const ZygiskIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, title = "Zygisk", ...props }, ref) => (
    <Svg ref={ref} size={size} title={title} viewBox="0 0 24 24" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        d="M12 2.5l8.5 4.9v9.2L12 21.5l-8.5-4.9V7.4z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.5 9.5h7l-7 5h7"
      />
    </Svg>
  )
);
ZygiskIcon.displayName = "ZygiskIcon";

// Shield — for cyber security
export const ShieldIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, title = "Security", ...props }, ref) => (
    <Svg ref={ref} size={size} title={title} {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        d="M12 2.5l8 2.5v6c0 5-3.4 8.5-8 10.5-4.6-2-8-5.5-8-10.5V5z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8.5 12l2.5 2.5 4.5-5"
      />
    </Svg>
  )
);
ShieldIcon.displayName = "ShieldIcon";

// Pill / capsule — for nursing/anaesthesia section
export const CapsuleIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, title = "Medicine", ...props }, ref) => (
    <Svg ref={ref} size={size} title={title} {...props}>
      <rect
        x="3"
        y="9"
        width="18"
        height="6"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <line x1="12" y1="9" x2="12" y2="15" stroke="currentColor" strokeWidth="1.4" />
    </Svg>
  )
);
CapsuleIcon.displayName = "CapsuleIcon";

// Heartbeat — for nursing section
export const PulseIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, title = "Vitals", ...props }, ref) => (
    <Svg ref={ref} size={size} title={title} {...props}>
      <path
        d="M2 12h4l2-6 4 12 2-6h8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
);
PulseIcon.displayName = "PulseIcon";

// Map pin — for location
export const PinIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, title = "Location", ...props }, ref) => (
    <Svg ref={ref} size={size} title={title} {...props}>
      <path
        d="M12 21s-7-6.5-7-12a7 7 0 0114 0c0 5.5-7 12-7 12z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </Svg>
  )
);
PinIcon.displayName = "PinIcon";
