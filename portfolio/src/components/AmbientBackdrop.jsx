// Fixed, full-viewport ambient backdrop: soft blurred gradient blobs that
// drift slowly behind all page content. CSS-only, no canvas/WebGL — inspired
// by the floating gradient-blob look of the Google Antigravity site, scaled
// back to fit this site's quieter, more disciplined palette.
export default function AmbientBackdrop() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        background: '#000',
      }}
    >
      <div className="blob blob-a" />
      <div className="blob blob-b" />
      <div className="blob blob-c" />

      <style>{`
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.35;
          will-change: transform;
        }
        .blob-a {
          width: 42vw;
          height: 42vw;
          top: -10%;
          left: -8%;
          background: radial-gradient(circle, rgba(63,110,140,0.9), transparent 70%);
          animation: driftA 26s ease-in-out infinite;
        }
        .blob-b {
          width: 36vw;
          height: 36vw;
          top: 40%;
          right: -10%;
          background: radial-gradient(circle, rgba(91,53,140,0.55), transparent 70%);
          animation: driftB 32s ease-in-out infinite;
        }
        .blob-c {
          width: 30vw;
          height: 30vw;
          bottom: -12%;
          left: 25%;
          background: radial-gradient(circle, rgba(63,140,130,0.45), transparent 70%);
          animation: driftC 30s ease-in-out infinite;
        }
        @keyframes driftA {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(6vw, 8vh) scale(1.12); }
        }
        @keyframes driftB {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-5vw, -6vh) scale(1.08); }
        }
        @keyframes driftC {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(4vw, -5vh) scale(1.1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .blob { animation: none !important; }
        }
      `}</style>
    </div>
  )
}
