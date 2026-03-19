import React, { useState, useEffect, useCallback } from "react";

const SCENE_DURATION = 5000;
const WORLD_DURATION = 2000;

const scenes = [
  { name: "AeroVista X", category: "DROHNEN · TECH", num: "01" },
  { name: "WeldPro", category: "INDUSTRIE · PRODUKT", num: "02" },
  { name: "Aqua Bottles", category: "LIFESTYLE · PRODUKT", num: "03" },
];

/* ─── Scene 1: Drone ─── */
function DroneScene() {
  const [world, setWorld] = useState(0);
  const worlds = [
    { emoji: "🌵", label: "DESERT", bg: "linear-gradient(180deg, #1a0a00 0%, #c2540a 40%, #f59e0b 100%)" },
    { emoji: "🌧", label: "STORM", bg: "linear-gradient(180deg, #111827 0%, #374151 50%, #1f2937 100%)" },
    { emoji: "🌿", label: "AMAZON", bg: "linear-gradient(180deg, #052e16 0%, #166534 50%, #14532d 100%)" },
  ];

  useEffect(() => {
    const iv = setInterval(() => setWorld(w => (w + 1) % 3), WORLD_DURATION);
    return () => clearInterval(iv);
  }, []);

  return (
    <div className="showcase-scene" style={{ background: "#0d1b2a" }}>
      {/* Backgrounds */}
      {worlds.map((w, i) => (
        <div
          key={w.label}
          className="absolute inset-0 transition-opacity duration-[1200ms]"
          style={{ background: w.bg, opacity: world === i ? 1 : 0 }}
        />
      ))}

      {/* Rain for storm */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden transition-opacity duration-700"
        style={{ opacity: world === 1 ? 1 : 0 }}
      >
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="showcase-raindrop"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 1.5}s`,
              animationDuration: `${0.5 + Math.random() * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 md:px-6 py-3">
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14, color: "#5bc8f5", letterSpacing: 3 }}>AEROVISTA</span>
        <div className="hidden md:flex gap-4 text-[11px] text-white/50" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          <span>Compare</span><span>Specs</span><span>Video</span>
        </div>
        <span className="text-[11px] px-3 py-1 rounded border border-white/20 text-white/70" style={{ fontFamily: "'DM Sans', sans-serif" }}>Buy now</span>
      </div>

      {/* World badge */}
      <div className="absolute top-12 right-4 md:right-6 z-10 text-[10px] font-bold px-3 py-1 rounded-full bg-black/40 text-white/80 backdrop-blur-sm tracking-widest">
        {worlds[world].emoji} {worlds[world].label}
      </div>

      {/* Drone */}
      <div className="absolute inset-0 flex items-center justify-center z-[5]">
        <div className="showcase-drone-float relative" style={{ width: 160, height: 100 }}>
          {/* Body */}
          <svg viewBox="0 0 160 100" fill="none" className="w-full h-full">
            {/* Arms */}
            <line x1="40" y1="38" x2="10" y2="20" stroke="#444" strokeWidth="3" />
            <line x1="120" y1="38" x2="150" y2="20" stroke="#444" strokeWidth="3" />
            <line x1="40" y1="42" x2="10" y2="60" stroke="#444" strokeWidth="3" />
            <line x1="120" y1="42" x2="150" y2="60" stroke="#444" strokeWidth="3" />
            {/* Body */}
            <rect x="35" y="30" width="90" height="25" rx="8" fill="#1a1a2e" stroke="#333" strokeWidth="1" />
            {/* Camera */}
            <circle cx="80" cy="62" r="8" fill="#111" stroke="#5bc8f5" strokeWidth="1.5" />
            <circle cx="80" cy="62" r="3" fill="#5bc8f5" className="showcase-led-pulse" />
            {/* Propellers */}
            <ellipse cx="10" cy="20" rx="18" ry="3" fill="#5bc8f5" opacity="0.4" className="showcase-propeller" />
            <ellipse cx="150" cy="20" rx="18" ry="3" fill="#5bc8f5" opacity="0.4" className="showcase-propeller" style={{ animationDelay: "0.05s" }} />
            <ellipse cx="10" cy="60" rx="18" ry="3" fill="#5bc8f5" opacity="0.4" className="showcase-propeller" style={{ animationDelay: "0.1s" }} />
            <ellipse cx="150" cy="60" rx="18" ry="3" fill="#5bc8f5" opacity="0.4" className="showcase-propeller" style={{ animationDelay: "0.15s" }} />
          </svg>
          {/* Light beam */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[65px] w-[2px] h-[80px] opacity-30"
            style={{ background: "linear-gradient(180deg, #5bc8f5 0%, transparent 100%)" }} />
        </div>
      </div>

      {/* Title overlay */}
      <div className="absolute bottom-6 left-4 md:left-8 z-10">
        <p className="text-[10px] text-white/40 tracking-widest mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>DJI MAVIC 4 PRO</p>
        <p className="text-white text-lg md:text-2xl font-bold leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
          FLY ANYWHERE<br />
          <span style={{ color: "#5bc8f5" }}>SEE EVERYTHING</span>
        </p>
      </div>
    </div>
  );
}

/* ─── Scene 2: Welding Helmet ─── */
function WeldScene() {
  const [helmetOn, setHelmetOn] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHelmetOn(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="showcase-scene" style={{ background: "#0a0a0a" }}>
      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 md:px-6 py-3">
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14, color: "#fff", letterSpacing: 2 }}>WELDPRO</span>
        <span className="text-[11px] px-3 py-1 rounded text-white font-semibold" style={{ backgroundColor: "#ff6b35", fontFamily: "'DM Sans', sans-serif" }}>Shop Now</span>
      </div>

      {/* Left text */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 max-w-[45%]">
        <p className="text-white text-lg md:text-2xl font-bold leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
          BUILT FOR<br />
          <span style={{ color: "#ff6b35" }}>FIRE</span> &<br />
          PRECISION
        </p>
      </div>

      {/* Face + Helmet */}
      <div
        className="absolute right-[15%] md:right-[25%] top-1/2 -translate-y-1/2 z-[5]"
        onMouseEnter={() => setHelmetOn(true)}
      >
        <div className="relative" style={{ width: 120, height: 160 }}>
          {/* Face SVG */}
          <svg viewBox="0 0 120 160" fill="none" className="w-full h-full">
            <ellipse cx="60" cy="70" rx="35" ry="45" fill="#d4a574" />
            <ellipse cx="47" cy="62" rx="4" ry="3" fill="#333" />
            <ellipse cx="73" cy="62" rx="4" ry="3" fill="#333" />
            <path d="M52 82 Q60 88 68 82" stroke="#333" strokeWidth="1.5" fill="none" />
            <ellipse cx="60" cy="25" rx="38" ry="20" fill="#2a1a0a" />
            <rect x="25" y="100" width="70" height="50" rx="5" fill="#1a1a1a" />
          </svg>

          {/* Helmet overlay */}
          <div
            className="absolute inset-0 transition-all duration-700"
            style={{ opacity: helmetOn ? 1 : 0, transform: helmetOn ? "translateY(0)" : "translateY(-20px)" }}
          >
            <svg viewBox="0 0 120 160" fill="none" className="w-full h-full">
              {/* Helmet shell */}
              <path d="M15 50 Q15 10 60 8 Q105 10 105 50 L105 90 Q105 105 90 110 L30 110 Q15 105 15 90 Z" fill="#1a1a2e" stroke="#333" strokeWidth="1" />
              {/* Visor */}
              <rect x="22" y="48" width="76" height="35" rx="4" fill="#111" stroke="#ff6b35" strokeWidth="1.5" />
              {/* Welding glow on visor */}
              <rect x="22" y="48" width="76" height="35" rx="4" fill="url(#weldGlow)" opacity="0.6" />
              <defs>
                <linearGradient id="weldGlow" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#ff8c00" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#ff6b35" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              {/* Brand */}
              <text x="60" y="72" textAnchor="middle" fill="#ff6b35" fontSize="7" fontWeight="bold" fontFamily="DM Sans, sans-serif">WELD PRO</text>
              {/* Side vents */}
              <rect x="18" y="60" width="3" height="12" rx="1" fill="#ff6b35" opacity="0.7" />
              <rect x="99" y="60" width="3" height="12" rx="1" fill="#ff6b35" opacity="0.7" />
              {/* Top ridge */}
              <path d="M40 12 Q60 2 80 12" stroke="#ff6b35" strokeWidth="1.5" fill="none" />
            </svg>
          </div>
        </div>
      </div>

      {/* Sparks */}
      {helmetOn && (
        <div className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none overflow-hidden z-[6]">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="showcase-spark"
              style={{
                left: `${30 + Math.random() * 40}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${0.8 + Math.random() * 1.2}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── Scene 3: Thermos Bottle ─── */
function AquaScene() {
  const [bottleIn, setBottleIn] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setBottleIn(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="showcase-scene" style={{ background: "#f5f0ea" }}>
      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 md:px-6 py-3 border-b border-black/5">
        <div className="flex gap-3 text-[10px] text-black/40" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          <span>HOME</span><span>ABOUT</span><span>SHOP</span>
        </div>
        <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 16, color: "#1a1a1a", letterSpacing: 3 }}>AQUA</span>
        <div className="flex gap-2 text-[10px] text-black/40">
          <span>🔍</span><span>🛒</span>
        </div>
      </div>

      {/* Gold circle background */}
      <div className="absolute right-[10%] md:right-[20%] top-1/2 -translate-y-1/2 w-[180px] h-[180px] md:w-[240px] md:h-[240px] rounded-full border border-[#c9a96e]/20 z-[1]" />

      {/* Left text */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 max-w-[50%]">
        <p className="text-black/80 text-base md:text-xl font-bold leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
          Say Goodbye<br />to Single Use<br />
          <span className="text-[#c9a96e]">Water</span> Bottles
        </p>
        <p className="text-[10px] text-black/40 mt-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>UV-C powered. Keeps drinks cold 24h. Built for life.</p>
        <button className="mt-3 text-[10px] px-4 py-2 bg-black text-white rounded font-semibold tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          SHOP COLLECTION →
        </button>
      </div>

      {/* Bottle */}
      <div
        className="absolute right-[12%] md:right-[22%] top-1/2 -translate-y-1/2 z-[5] transition-all duration-1000"
        style={{
          transform: bottleIn ? "translateY(-50%) translateX(0) rotate(0deg)" : "translateY(-50%) translateX(120%) rotate(5deg)",
          opacity: bottleIn ? 1 : 0,
        }}
      >
        <div className="showcase-bottle-float relative" style={{ width: 60, height: 200 }}>
          <svg viewBox="0 0 60 200" fill="none" className="w-full h-full">
            {/* Cap */}
            <rect x="18" y="0" width="24" height="16" rx="4" fill="#1a1a1a" />
            <rect x="16" y="14" width="28" height="4" rx="2" fill="#c9a96e" />
            {/* Neck */}
            <rect x="20" y="18" width="20" height="12" rx="2" fill="#111" />
            {/* Body */}
            <rect x="12" y="30" width="36" height="160" rx="8" fill="#111" />
            {/* Gold rings */}
            <rect x="12" y="40" width="36" height="2" rx="1" fill="#c9a96e" opacity="0.6" />
            <rect x="12" y="175" width="36" height="2" rx="1" fill="#c9a96e" opacity="0.6" />
            {/* AQUA text */}
            <text x="30" y="120" textAnchor="middle" fill="#c9a96e" fontSize="8" fontWeight="bold" fontFamily="DM Sans, sans-serif"
              transform="rotate(-90 30 120)" letterSpacing="3">AQUA</text>
            {/* UV-C dot */}
            <circle cx="30" cy="155" r="3" fill="#c9a96e" className="showcase-uvc-pulse" />
          </svg>

          {/* Steam lines */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-1">
            {[0, 0.3, 0.6].map((d, i) => (
              <div
                key={i}
                className="showcase-steam"
                style={{ animationDelay: `${d}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Showcase ─── */
export default function PortfolioShowcase() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  const goTo = useCallback((idx: number) => {
    setActive(idx);
    setProgress(0);
  }, []);

  useEffect(() => {
    const start = Date.now();
    let raf: number;
    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / SCENE_DURATION) * 100, 100);
      setProgress(pct);
      if (elapsed >= SCENE_DURATION) {
        setActive(a => (a + 1) % 3);
        setProgress(0);
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active]);

  return (
    <section id="referenzen" className="relative section-padding overflow-hidden" style={{ backgroundColor: "#0d1b2a" }}>
      {/* Hexagon background pattern */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="showcase-hex" width="56" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
              <path d="M28 0 L56 16 L56 48 L28 64 L0 48 L0 16 Z" fill="none" stroke="#5bc8f5" strokeWidth="0.5" opacity="0.5" />
              <path d="M28 36 L56 52 L56 84 L28 100 L0 84 L0 52 Z" fill="none" stroke="#5bc8f5" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#showcase-hex)" />
        </svg>
      </div>

      <div className="container-narrow relative z-10">
        {/* Heading */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-[11px] tracking-[4px] text-[#5bc8f5] uppercase mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>PORTFOLIO</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Websites, die{" "}
            <span style={{ color: "#5bc8f5" }}>begeistern</span>
          </h2>
          <p className="text-white/50 text-sm md:text-base max-w-md mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Jedes Projekt ist ein Unikat — maßgeschneidert für dein Business.
          </p>
        </div>

        {/* Stage */}
        <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "16/9", maxHeight: 500 }}>
          {/* Progress bar */}
          <div className="absolute top-0 left-0 right-0 h-[3px] z-20 bg-white/10">
            <div className="h-full transition-none" style={{ width: `${progress}%`, backgroundColor: "#5bc8f5" }} />
          </div>

          {/* Scenes */}
          {[DroneScene, WeldScene, AquaScene].map((Scene, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-[800ms]"
              style={{ opacity: active === i ? 1 : 0, pointerEvents: active === i ? "auto" : "none" }}
            >
              <Scene />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-5">
          {scenes.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="h-[6px] rounded-full transition-all duration-300"
              style={{
                width: active === i ? 32 : 8,
                backgroundColor: active === i ? "#5bc8f5" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>

        {/* Project info below */}
        <div className="flex items-end justify-between mt-6">
          <div>
            <p className="text-white text-lg md:text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{scenes[active].name}</p>
            <p className="text-[11px] tracking-[2px] mt-1" style={{ color: "#5bc8f5", fontFamily: "'DM Sans', sans-serif" }}>{scenes[active].category}</p>
          </div>
          <p className="text-4xl md:text-6xl font-bold text-white/5" style={{ fontFamily: "'Playfair Display', serif" }}>{scenes[active].num}</p>
        </div>
      </div>

      {/* CSS animations */}
      <style>{`
        .showcase-scene {
          position: absolute; inset: 0; overflow: hidden;
        }
        /* Drone float */
        .showcase-drone-float {
          animation: showcase-float 3s ease-in-out infinite;
        }
        @keyframes showcase-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        /* Propeller spin */
        .showcase-propeller {
          animation: showcase-spin 0.15s linear infinite;
          transform-origin: center;
        }
        @keyframes showcase-spin {
          from { transform: scaleX(1); }
          50% { transform: scaleX(0.1); }
          to { transform: scaleX(1); }
        }
        /* LED pulse */
        .showcase-led-pulse {
          animation: showcase-led 1.5s ease-in-out infinite;
        }
        @keyframes showcase-led {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        /* Rain */
        .showcase-raindrop {
          position: absolute; top: -10px;
          width: 1px; height: 15px;
          background: linear-gradient(180deg, transparent, rgba(200,220,255,0.5));
          animation: showcase-rain linear infinite;
        }
        @keyframes showcase-rain {
          from { transform: translateY(-10px); }
          to { transform: translateY(calc(100vh)); }
        }
        /* Sparks */
        .showcase-spark {
          position: absolute; bottom: 0;
          width: 2px; height: 2px; border-radius: 50%;
          background: #ff6b35;
          box-shadow: 0 0 4px #ff6b35, 0 0 8px #ff8c00;
          animation: showcase-spark-up ease-out infinite;
        }
        @keyframes showcase-spark-up {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-120px) translateX(${Math.random() > 0.5 ? '' : '-'}20px) scale(0); opacity: 0; }
        }
        /* Bottle float */
        .showcase-bottle-float {
          animation: showcase-float 4s ease-in-out infinite;
        }
        /* UV-C pulse */
        .showcase-uvc-pulse {
          animation: showcase-uvc 2s ease-in-out infinite;
        }
        @keyframes showcase-uvc {
          0%, 100% { opacity: 1; r: 3; }
          50% { opacity: 0.4; r: 4; }
        }
        /* Steam */
        .showcase-steam {
          width: 2px; height: 12px;
          background: rgba(0,0,0,0.08);
          border-radius: 2px;
          animation: showcase-steam-rise 2s ease-out infinite;
        }
        @keyframes showcase-steam-rise {
          0% { transform: translateY(0) scaleY(0.5); opacity: 0.6; }
          100% { transform: translateY(-16px) scaleY(1.5); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
