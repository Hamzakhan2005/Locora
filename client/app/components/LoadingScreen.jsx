"use client";

import { useEffect, useRef, useState } from "react";

const RADIUS = 100;
const CIRC = 2 * Math.PI * RADIUS;

const LABELS = [
  "Loading Locora",
  "Gathering neighbors",
  "Mapping your area",
  "Almost there",
];

const SPARKLES = [
  { emoji: "✨", top: "10%", left: "8%", dx: -30, dy: -30 },
  { emoji: "💫", top: "5%", left: "80%", dx: 35, dy: -25 },
  { emoji: "🌟", top: "85%", left: "15%", dx: -25, dy: 30 },
  { emoji: "✨", top: "88%", left: "78%", dx: 30, dy: 35 },
];

/**
 * Locora claymorphism loading screen.
 *
 * Props:
 *  - duration: ms for the simulated progress run (ignored if `progress` is provided)
 *  - progress: 0-100 to drive the loader externally (controlled mode)
 *  - onComplete: called once after the brand reveal finishes
 *  - loop: if true, restarts automatically after completing (good for app/loading.js)
 */
export default function LoadingScreen({
  duration = 3200,
  progress: controlledProgress,
  onComplete,
  loop = false,
}) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState("loading"); // loading | bursting | done
  const [sparkleKey, setSparkleKey] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  const isControlled = controlledProgress !== undefined;

  // Simulated progress (uncontrolled mode)
  useEffect(() => {
    if (isControlled) return;

    function run() {
      setPhase("loading");
      setProgress(0);
      startRef.current = performance.now();

      function tick(now) {
        const elapsed = now - startRef.current;
        const t = Math.min(1, elapsed / duration);
        const eased = 1 - Math.pow(1 - t, 3);
        setProgress(eased * 100);
        if (t < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          setProgress(100);
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    run();
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, [isControlled, duration, loop]);

  // Controlled progress passthrough
  useEffect(() => {
    if (isControlled) setProgress(controlledProgress);
  }, [isControlled, controlledProgress]);

  // Trigger completion sequence when progress hits 100
  useEffect(() => {
    if (progress < 100 || phase !== "loading") return;

    setSparkleKey((k) => k + 1);
    const burstTimer = setTimeout(() => setPhase("bursting"), 280);
    const doneTimer = setTimeout(() => {
      setPhase("done");
      onComplete && onComplete();
      if (loop) {
        setTimeout(() => {
          setPhase("loading");
          setProgress(0);
          if (!isControlled) {
            startRef.current = performance.now();
            function tick(now) {
              const elapsed = now - startRef.current;
              const t = Math.min(1, elapsed / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setProgress(eased * 100);
              if (t < 1) rafRef.current = requestAnimationFrame(tick);
              else setProgress(100);
            }
            rafRef.current = requestAnimationFrame(tick);
          }
        }, 1800);
      }
    }, 650);

    return () => {
      clearTimeout(burstTimer);
      clearTimeout(doneTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  const clamped = Math.max(0, Math.min(100, progress));
  const offset = CIRC * (1 - clamped / 100);
  const angle = (clamped / 100) * 360 - 90;
  const rad = (angle * Math.PI) / 180;
  const orbX = 110 + RADIUS * Math.cos(rad);
  const orbY = 110 + RADIUS * Math.sin(rad);
  const reveal = 100 - clamped;
  const labelIdx = Math.min(
    LABELS.length - 1,
    Math.floor((clamped / 100) * LABELS.length)
  );

  const bursting = phase === "bursting" || phase === "done";
  const showBrand = phase === "done";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #f0e6ff 0%, #ffe4f0 50%, #e4f0ff 100%)",
        fontFamily: "'Nunito', sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Drifting blobs */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "480px",
            height: "480px",
            background:
              "radial-gradient(circle, rgba(168,156,247,0.35) 0%, transparent 70%)",
            top: "-120px",
            left: "-100px",
            animation: "ls-driftA 16s ease-in-out infinite",
            opacity: 0.55,
            filter: "blur(10px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "420px",
            height: "420px",
            background:
              "radial-gradient(circle, rgba(255,126,179,0.28) 0%, transparent 70%)",
            bottom: "-100px",
            right: "-80px",
            animation: "ls-driftB 19s ease-in-out infinite",
            opacity: 0.55,
            filter: "blur(10px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "320px",
            height: "320px",
            background:
              "radial-gradient(circle, rgba(96,196,248,0.22) 0%, transparent 70%)",
            top: "55%",
            right: "12%",
            animation: "ls-driftC 13s ease-in-out infinite",
            opacity: 0.55,
            filter: "blur(10px)",
          }}
        />
      </div>

      {/* Stage */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.75rem",
        }}
      >
        {/* Ring + logo */}
        <div
          style={{
            position: "relative",
            width: "220px",
            height: "220px",
            transition:
              "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease",
            transform: bursting ? "scale(1.35)" : "scale(1)",
            opacity: bursting ? 0 : 1,
          }}
        >
          <svg
            viewBox="0 0 220 220"
            style={{
              width: "100%",
              height: "100%",
              transform: "rotate(-90deg)",
            }}
          >
            <defs>
              <linearGradient
                id="lsRingGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#a89cf7" />
                <stop offset="55%" stopColor="#7c6fe0" />
                <stop offset="100%" stopColor="#ff7eb3" />
              </linearGradient>
            </defs>
            <circle
              cx="110"
              cy="110"
              r={RADIUS}
              fill="none"
              stroke="rgba(124,111,224,0.12)"
              strokeWidth="10"
            />
            <circle
              cx="110"
              cy="110"
              r={RADIUS}
              fill="none"
              stroke="url(#lsRingGradient)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={CIRC}
              strokeDashoffset={offset}
              style={{
                transition: "stroke-dashoffset 0.12s linear",
                filter: "drop-shadow(0 0 8px rgba(124,111,224,0.45))",
              }}
            />
          </svg>

          {/* Traveling orb */}
          <div
            style={{
              position: "absolute",
              width: "22px",
              height: "22px",
              borderRadius: "50%",
              background: "linear-gradient(145deg, #ffb3d1, #ff7eb3)",
              boxShadow:
                "0 0 16px rgba(255,126,179,0.7), 0 4px 10px rgba(255,126,179,0.4)",
              left: orbX,
              top: orbY,
              transform: "translate(-50%, -50%)",
            }}
          />

          {/* Center clay disc */}
          <div
            style={{
              position: "absolute",
              inset: "22px",
              borderRadius: "50%",
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.95), rgba(240,230,255,0.8))",
              boxShadow:
                "0 10px 30px rgba(124,111,224,0.22), inset 0 1px 0 rgba(255,255,255,0.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <span
              style={{
                fontSize: "5.2rem",
                lineHeight: 1,
                filter: "grayscale(1) opacity(0.18)",
                position: "absolute",
              }}
            >
              🏘️
            </span>
            <span
              style={{
                fontSize: "5.2rem",
                lineHeight: 1,
                position: "absolute",
                filter: "drop-shadow(0 4px 10px rgba(124,111,224,0.35))",
                clipPath: `inset(${reveal}% 0 0 0)`,
                transition: "clip-path 0.15s linear",
              }}
            >
              🏘️
            </span>
          </div>

          {/* Sparkles */}
          {SPARKLES.map((s, i) => (
            <span
              key={`${sparkleKey}-${i}`}
              style={{
                position: "absolute",
                top: s.top,
                left: s.left,
                fontSize: "1.4rem",
                pointerEvents: "none",
                animation: bursting
                  ? `ls-sparkPop 1s ease-out ${i * 0.06}s forwards`
                  : "none",
                opacity: 0,
                "--dx": `${s.dx}px`,
                "--dy": `${s.dy}px`,
              }}
            >
              {s.emoji}
            </span>
          ))}
        </div>

        {/* Percentage + label */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.4rem",
            transition: "opacity 0.5s ease, transform 0.5s ease",
            opacity: bursting ? 0 : 1,
            transform: bursting ? "translateY(10px)" : "translateY(0)",
          }}
        >
          <div
            style={{
              fontFamily: "'Sora', sans-serif",
              fontWeight: 800,
              fontSize: "1.6rem",
              background: "linear-gradient(135deg, #7c6fe0, #ff7eb3)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "0.02em",
            }}
          >
            {Math.round(clamped)}%
          </div>
          <div
            style={{
              fontWeight: 700,
              fontSize: "0.95rem",
              color: "#7c6fe0",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            {LABELS[labelIdx]}
          </div>
        </div>

        {/* Brand reveal */}
        <div
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.6rem",
            opacity: showBrand ? 1 : 0,
            transform: showBrand ? "scale(1)" : "scale(0.7)",
            transition:
              "opacity 0.5s cubic-bezier(0.34,1.56,0.64,1), transform 0.6s cubic-bezier(0.34,1.56,0.64,1)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <div
              style={{
                width: "3.4rem",
                height: "3.4rem",
                borderRadius: "1.1rem",
                background: "linear-gradient(145deg, #a89cf7, #7c6fe0)",
                boxShadow:
                  "0 10px 28px rgba(124,111,224,0.45), inset 0 1px 0 rgba(255,255,255,0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.9rem",
                animation: "ls-brandFloat 3.5s ease-in-out infinite",
              }}
            >
              🏘️
            </div>
            <div
              style={{
                fontFamily: "'Sora', sans-serif",
                fontWeight: 800,
                fontSize: "2.6rem",
                background: "linear-gradient(135deg, #7c6fe0, #ff7eb3)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                letterSpacing: "0.01em",
              }}
            >
              Locora
            </div>
          </div>
          <div
            style={{
              fontWeight: 600,
              fontSize: "0.95rem",
              color: "#6b5fa8",
              letterSpacing: "0.04em",
            }}
          >
            Connecting communities, one hand at a time
          </div>
        </div>
      </div>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Sora:wght@600;700;800&display=swap");
        @keyframes ls-driftA {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(50px, 60px) scale(1.1);
          }
        }
        @keyframes ls-driftB {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-40px, -30px) scale(1.08);
          }
        }
        @keyframes ls-driftC {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(30px, -40px) scale(0.95);
          }
        }
        @keyframes ls-brandFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-6px) rotate(4deg);
          }
        }
        @keyframes ls-sparkPop {
          0% {
            opacity: 0;
            transform: translate(0, 0) scale(0.4) rotate(0deg);
          }
          25% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translate(var(--dx), var(--dy)) scale(1.1) rotate(160deg);
          }
        }
      `}</style>
    </div>
  );
}
