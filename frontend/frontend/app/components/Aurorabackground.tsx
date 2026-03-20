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
          --aurora-blend: screen;
          --aurora-blur: clamp(50px, 8vw, 100px);
          --aurora-blur-center: clamp(70px, 10vw, 120px);
          --aurora-opacity-low:  0.45;
          --aurora-opacity-high: 0.75;

          --aurora-c1: radial-gradient(ellipse at 40% 40%,
            rgba(144, 78, 233, 0.65) 0%,
            rgba(97, 2, 224, 0.35) 45%,
            transparent 72%);
          --aurora-c2: radial-gradient(ellipse at 60% 35%,
            rgba(72, 0, 198, 0.6) 0%,
            rgba(97, 2, 224, 0.3) 50%,
            transparent 74%);
          --aurora-c3: radial-gradient(ellipse at 50% 55%,
            rgba(208, 179, 246, 0.5) 0%,
            rgba(144, 78, 233, 0.25) 52%,
            transparent 74%);
          --aurora-c4: radial-gradient(ellipse at 45% 45%,
            rgba(97, 2, 224, 0.4) 0%,
            rgba(72, 0, 198, 0.18) 52%,
            transparent 72%);
        }

        /* ── Light mode ── */
        .light {
          --aurora-blend: multiply;
          --aurora-blur: clamp(45px, 7vw, 90px);
          --aurora-blur-center: clamp(65px, 9vw, 110px);
          --aurora-opacity-low:  0.6;
          --aurora-opacity-high: 0.85;

          --aurora-c1: radial-gradient(ellipse at 40% 40%,
            rgba(144, 78, 233, 0.55) 0%,
            rgba(208, 179, 246, 0.35) 45%,
            transparent 72%);
          --aurora-c2: radial-gradient(ellipse at 60% 35%,
            rgba(97, 2, 224, 0.5) 0%,
            rgba(144, 78, 233, 0.3) 50%,
            transparent 74%);
          --aurora-c3: radial-gradient(ellipse at 50% 55%,
            rgba(208, 179, 246, 0.65) 0%,
            rgba(144, 78, 233, 0.35) 52%,
            transparent 74%);
          --aurora-c4: radial-gradient(ellipse at 45% 45%,
            rgba(46, 0, 173, 0.4) 0%,
            rgba(144, 78, 233, 0.2) 52%,
            transparent 72%);
        }

        .aurora-blob {
          position: absolute;
          border-radius: 50%;
          mix-blend-mode: var(--aurora-blend);
          transition: opacity 0.4s ease;
        }

        /* ── Mobile first (base) ── */
        .aurora-blob-1 {
          /* covers full width + bleeds off top-left */
          width: 120vw; height: 60vw;
          top: -10%; left: -15%;
          filter: blur(var(--aurora-blur));
          background: var(--aurora-c1);
          animation:
            aurora-drift-1 18s ease-in-out infinite,
            aurora-pulse 9s ease-in-out infinite;
        }
        .aurora-blob-2 {
          width: 100vw; height: 55vw;
          top: 5%; right: -15%;
          filter: blur(var(--aurora-blur));
          background: var(--aurora-c2);
          animation:
            aurora-drift-2 22s ease-in-out infinite,
            aurora-pulse 12s ease-in-out infinite 2s;
        }
        .aurora-blob-3 {
          width: 90vw; height: 50vw;
          bottom: 5%; left: 5%;
          filter: blur(var(--aurora-blur));
          background: var(--aurora-c3);
          animation:
            aurora-drift-3 26s ease-in-out infinite,
            aurora-pulse 14s ease-in-out infinite 4s;
        }
        .aurora-blob-4 {
          width: 80vw; height: 45vw;
          top: 30%; left: 10%;
          filter: blur(var(--aurora-blur-center));
          background: var(--aurora-c4);
          animation:
            aurora-drift-4 20s ease-in-out infinite,
            aurora-pulse 11s ease-in-out infinite 1s;
        }

        /* ── Tablet (640px+) ── */
        @media (min-width: 640px) {
          .aurora-blob-1 { width: 90vw;  height: 55vw; top: -12%; left: -10%; }
          .aurora-blob-2 { width: 75vw;  height: 50vw; top: 0%;   right: -10%; }
          .aurora-blob-3 { width: 65vw;  height: 45vw; bottom: 3%; left: 12%; }
          .aurora-blob-4 { width: 55vw;  height: 40vw; top: 28%;  left: 22%; }
        }

        /* ── Desktop (1024px+) ── */
        @media (min-width: 1024px) {
          .aurora-blob-1 { width: 700px; height: 540px; top: -12%; left: -10%; }
          .aurora-blob-2 { width: 600px; height: 500px; top: 0%;   right: -12%; }
          .aurora-blob-3 { width: 520px; height: 420px; bottom: 0%; left: 18%; }
          .aurora-blob-4 { width: 460px; height: 360px; top: 28%;  left: 32%; }
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