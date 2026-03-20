'use client';

export default function AuroraBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <style>{`
        @keyframes aurora-drift-1 {
          0%   { transform: translate(0%, 0%) rotate(0deg) scale(1); }
          33%  { transform: translate(6%, -8%) rotate(15deg) scale(1.08); }
          66%  { transform: translate(-5%, 5%) rotate(-10deg) scale(0.95); }
          100% { transform: translate(0%, 0%) rotate(0deg) scale(1); }
        }
        @keyframes aurora-drift-2 {
          0%   { transform: translate(0%, 0%) rotate(0deg) scale(1); }
          40%  { transform: translate(-8%, 6%) rotate(-18deg) scale(1.1); }
          70%  { transform: translate(7%, -4%) rotate(12deg) scale(0.92); }
          100% { transform: translate(0%, 0%) rotate(0deg) scale(1); }
        }
        @keyframes aurora-drift-3 {
          0%   { transform: translate(0%, 0%) rotate(0deg) scale(1); }
          50%  { transform: translate(5%, 8%) rotate(20deg) scale(1.05); }
          80%  { transform: translate(-6%, -5%) rotate(-8deg) scale(1.12); }
          100% { transform: translate(0%, 0%) rotate(0deg) scale(1); }
        }
        @keyframes aurora-drift-4 {
          0%   { transform: translate(0%, 0%) rotate(0deg) scale(1); }
          30%  { transform: translate(-4%, -7%) rotate(-14deg) scale(0.97); }
          65%  { transform: translate(8%, 3%) rotate(10deg) scale(1.06); }
          100% { transform: translate(0%, 0%) rotate(0deg) scale(1); }
        }
        @keyframes aurora-pulse {
          0%, 100% { opacity: var(--aurora-opacity-low); }
          50%       { opacity: var(--aurora-opacity-high); }
        }

        /* ── Dark mode ── */
        .dark {
          --aurora-c1-inner:  144, 78, 233;   /* #904EE9 — brand violet */
          --aurora-c1-outer:  97, 2, 224;     /* #6102E0 — deep purple */
          --aurora-c2-inner:  72, 0, 198;     /* #4800C6 — hover purple */
          --aurora-c2-outer:  97, 2, 224;     /* #6102E0 */
          --aurora-c3-inner:  208, 179, 246;  /* #D0B3F6 — lavender */
          --aurora-c3-outer:  144, 78, 233;   /* #904EE9 */
          --aurora-c4-inner:  97, 2, 224;     /* #6102E0 */
          --aurora-c4-outer:  72, 0, 198;     /* #4800C6 */
          --aurora-opacity-low:  0.45;
          --aurora-opacity-high: 0.75;
          --aurora-blur: 100px;
        }

        /* ── Light mode ── */
        .light {
          --aurora-c1-inner:  144, 78, 233;   /* #904EE9 */
          --aurora-c1-outer:  208, 179, 246;  /* #D0B3F6 — soft lavender */
          --aurora-c2-inner:  208, 179, 246;  /* #D0B3F6 */
          --aurora-c2-outer:  144, 78, 233;   /* #904EE9 */
          --aurora-c3-inner:  46, 0, 173;     /* #2E00AD — deep indigo */
          --aurora-c3-outer:  208, 179, 246;  /* #D0B3F6 */
          --aurora-c4-inner:  144, 78, 233;   /* #904EE9 */
          --aurora-c4-outer:  46, 0, 173;     /* #2E00AD */
          --aurora-opacity-low:  0.25;
          --aurora-opacity-high: 0.45;
          --aurora-blur: 110px;
        }

        .aurora-blob {
          position: absolute;
          border-radius: 50%;
          mix-blend-mode: screen;
          transition: background 0.4s ease, opacity 0.4s ease;
        }

        .aurora-blob-1 {
          width: 700px; height: 540px;
          top: -12%; left: -10%;
          filter: blur(var(--aurora-blur));
          background: radial-gradient(ellipse at 40% 40%,
            rgba(var(--aurora-c1-inner), 0.65) 0%,
            rgba(var(--aurora-c1-outer), 0.35) 45%,
            transparent 72%);
          animation:
            aurora-drift-1 18s ease-in-out infinite,
            aurora-pulse 9s ease-in-out infinite;
        }

        .aurora-blob-2 {
          width: 600px; height: 500px;
          top: 0%; right: -12%;
          filter: blur(var(--aurora-blur));
          background: radial-gradient(ellipse at 60% 35%,
            rgba(var(--aurora-c2-inner), 0.6) 0%,
            rgba(var(--aurora-c2-outer), 0.3) 50%,
            transparent 74%);
          animation:
            aurora-drift-2 22s ease-in-out infinite,
            aurora-pulse 12s ease-in-out infinite 2s;
        }

        .aurora-blob-3 {
          width: 520px; height: 420px;
          bottom: 0%; left: 18%;
          filter: blur(var(--aurora-blur));
          background: radial-gradient(ellipse at 50% 55%,
            rgba(var(--aurora-c3-inner), 0.5) 0%,
            rgba(var(--aurora-c3-outer), 0.25) 52%,
            transparent 74%);
          animation:
            aurora-drift-3 26s ease-in-out infinite,
            aurora-pulse 14s ease-in-out infinite 4s;
        }

        .aurora-blob-4 {
          width: 460px; height: 360px;
          top: 28%; left: 32%;
          filter: blur(calc(var(--aurora-blur) + 20px));
          background: radial-gradient(ellipse at 45% 45%,
            rgba(var(--aurora-c4-inner), 0.4) 0%,
            rgba(var(--aurora-c4-outer), 0.18) 52%,
            transparent 72%);
          animation:
            aurora-drift-4 20s ease-in-out infinite,
            aurora-pulse 11s ease-in-out infinite 1s;
        }

        .aurora-grain {
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          background-size: 180px;
          opacity: 0.2;
        }
      `}</style>

      <div className="aurora-blob aurora-blob-1" />
      <div className="aurora-blob aurora-blob-2" />
      <div className="aurora-blob aurora-blob-3" />
      <div className="aurora-blob aurora-blob-4" />
      <div className="aurora-grain" />
    </div>
  );
}