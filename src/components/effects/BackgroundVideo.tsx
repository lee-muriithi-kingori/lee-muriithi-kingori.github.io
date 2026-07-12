"use client";

// ============================================================
// BACKGROUND VIDEO — self-hosted, muted, looping, low-opacity
// Code rain MP4 from Pixabay (CC0-like license).
// Criticiser: don't depend on third-party hotlink; serve local.
// ============================================================

export function BackgroundVideo() {
  return (
    <>
      <video
        className="bg-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster=""
        aria-hidden="true"
      >
        <source src="/videos/code-rain.mp4" type="video/mp4" />
        {/* No fallback text — the canvas/grid overlay takes over */}
      </video>
      <div className="bg-video-veil" />
      <div className="grid-overlay" />
    </>
  );
}
