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

/* ─── Scene 3: Thermos Bottle (3D CSS) ─── */
function AquaScene() {
  const [phase, setPhase] = useState<'intro'|'zoom'|'hold'|'out'|'float'>('intro');
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    // Reset on mount
    setPhase('intro');
    setLogoVisible(false);
    timers.push(setTimeout(() => setPhase('zoom'), 800));
    timers.push(setTimeout(() => setPhase('hold'), 2200));
    timers.push(setTimeout(() => setLogoVisible(true), 2400));
    timers.push(setTimeout(() => setPhase('out'), 3500));
    timers.push(setTimeout(() => setPhase('float'), 4500));
    return () => timers.forEach(clearTimeout);
  }, []);

  const bottleTransform = {
    intro: 'translateX(120px) rotate(8deg) scale(1)',
    zoom: 'translateX(0) rotate(0deg) scale(1.6) rotateY(360deg)',
    hold: 'translateX(0) rotate(0deg) scale(1.6) rotateY(360deg)',
    out: 'translateX(0) rotate(0deg) scale(1) rotateY(0deg)',
    float: 'translateX(0) rotate(0deg) scale(1)',
  };

  const bottleTransition = {
    intro: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease',
    zoom: 'transform 1.4s ease-in-out',
    hold: 'transform 0.3s ease',
    out: 'transform 1s ease-in-out',
    float: 'none',
  };

  return (
    <div className="showcase-scene" style={{ background: "#f5f0ea" }}>
      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 md:px-6 py-3 border-b border-black/5">
        <div className="flex gap-3 text-[10px] text-black/40" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          <span>HOME</span><span>ABOUT</span><span>SHOP</span>
        </div>
        <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 16, color: "#1a1a1a", letterSpacing: 3 }}>AQUA</span>
        <span className="text-[10px] px-3 py-1 rounded border border-[#c8a96e]/40 text-black/50" style={{ fontFamily: "'DM Sans', sans-serif" }}>BUY NOW</span>
      </div>

      {/* Gold circle background */}
      <div
        className="absolute right-[10%] md:right-[20%] top-1/2 -translate-y-1/2 rounded-full border border-[#c8a96e]/15 z-[1] transition-all duration-[1.4s] ease-in-out"
        style={{
          width: phase === 'zoom' || phase === 'hold' ? 280 : 220,
          height: phase === 'zoom' || phase === 'hold' ? 280 : 220,
        }}
      />

      {/* Gold glow behind bottle during hold */}
      <div
        className="absolute right-[14%] md:right-[24%] top-1/2 -translate-y-1/2 rounded-full z-[2] transition-opacity duration-700"
        style={{
          width: 160, height: 160,
          background: 'radial-gradient(circle, rgba(200,169,110,0.25) 0%, transparent 70%)',
          opacity: phase === 'hold' || phase === 'out' || phase === 'float' ? 1 : 0,
        }}
      />

      {/* Left text */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 max-w-[50%]">
        <p className="text-black/80 text-base md:text-xl font-bold leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
          Say Goodbye<br />to Single Use<br />
          <span style={{ color: "#c8a96e" }}>Water</span> Bottles
        </p>
        <p className="text-[10px] text-black/40 mt-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>UV-C powered. Keeps drinks cold 24h. Built for life.</p>
        <button className="mt-3 text-[10px] px-4 py-2 bg-black text-white rounded font-semibold tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          SHOP COLLECTION →
        </button>
      </div>

      {/* 3D CSS Bottle */}
      <div
        className="absolute right-[12%] md:right-[22%] top-1/2 z-[5]"
        style={{
          transform: `translateY(-50%) ${bottleTransform[phase]}`,
          transition: bottleTransition[phase],
          opacity: phase === 'intro' ? 0 : 1,
          perspective: 800,
        }}
      >
        <div className={phase === 'float' ? 'aqua-bottle-float' : ''} style={{ width: 56, height: 200 }}>
          {/* Shadow */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2" style={{
            width: 50, height: 10, borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(0,0,0,0.18) 0%, transparent 70%)',
          }} />

          {/* Bottle body */}
          <div className="relative" style={{ width: 56, height: 200 }}>
            {/* Cap */}
            <div style={{
              position: 'absolute', top: 0, left: 14, width: 28, height: 18,
              background: 'linear-gradient(90deg, #1a1a1a 0%, #2a2a2a 40%, #1a1a1a 100%)',
              borderRadius: '6px 6px 2px 2px',
            }} />
            {/* Gold ring under cap */}
            <div style={{
              position: 'absolute', top: 16, left: 12, width: 32, height: 4,
              background: 'linear-gradient(90deg, #8a6e3e, #c8a96e 50%, #8a6e3e)',
              borderRadius: 2,
            }} />
            {/* Neck */}
            <div style={{
              position: 'absolute', top: 20, left: 16, width: 24, height: 14,
              background: 'linear-gradient(90deg, #0a0a0a 0%, #1a1a1a 35%, #0f0f0f 100%)',
              borderRadius: 2,
            }} />
            {/* Main body */}
            <div style={{
              position: 'absolute', top: 34, left: 8, width: 40, height: 158,
              background: 'linear-gradient(90deg, #080808 0%, #1a1a1a 25%, #141414 50%, #0d0d0d 75%, #060606 100%)',
              borderRadius: '6px 6px 8px 8px',
              boxShadow: 'inset 2px 0 8px rgba(255,255,255,0.04), inset -3px 0 6px rgba(0,0,0,0.5)',
            }}>
              {/* 3D highlight stripe */}
              <div style={{
                position: 'absolute', top: 0, left: 6, width: 3, height: '100%',
                background: 'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 50%, rgba(255,255,255,0.07) 100%)',
                borderRadius: 2,
              }} />
              {/* Texture grain overlay */}
              <div style={{
                position: 'absolute', inset: 0, borderRadius: 'inherit', opacity: 0.15,
                backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.03) 1px, transparent 1px), radial-gradient(circle at 60% 70%, rgba(255,255,255,0.02) 1px, transparent 1px)',
                backgroundSize: '8px 8px, 6px 6px',
              }} />
            </div>
            {/* Gold ring top of body */}
            <div style={{
              position: 'absolute', top: 42, left: 8, width: 40, height: 2,
              background: 'linear-gradient(90deg, #7a5e2e, #c8a96e 50%, #7a5e2e)',
              borderRadius: 1, opacity: 0.7,
            }} />
            {/* Gold ring bottom of body */}
            <div style={{
              position: 'absolute', top: 178, left: 8, width: 40, height: 2,
              background: 'linear-gradient(90deg, #7a5e2e, #c8a96e 50%, #7a5e2e)',
              borderRadius: 1, opacity: 0.7,
            }} />
            {/* AQUA text vertical */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%) rotate(-90deg)',
              color: '#c8a96e', fontSize: 9, fontWeight: 700, letterSpacing: 4,
              fontFamily: "'DM Sans', sans-serif",
              opacity: logoVisible ? 1 : 0,
              transition: 'opacity 0.5s ease',
              whiteSpace: 'nowrap',
            }}>
              AQUA
            </div>
            {/* UV-C indicator dot */}
            <div className="aqua-uvc-dot" style={{
              position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)',
              width: 6, height: 6, borderRadius: '50%',
              background: '#c8a96e',
              boxShadow: '0 0 6px rgba(200,169,110,0.6)',
            }} />
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
        /* Aqua bottle float */
        .aqua-bottle-float {
          animation: aqua-float 3s ease-in-out infinite;
        }
        @keyframes aqua-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        /* UV-C dot pulse */
        .aqua-uvc-dot {
          animation: aqua-uvc 2s ease-in-out infinite;
        }
        @keyframes aqua-uvc {
          0%, 100% { opacity: 1; box-shadow: 0 0 6px rgba(200,169,110,0.6); }
          50% { opacity: 0.4; box-shadow: 0 0 12px rgba(200,169,110,0.9); }
        }
      `}</style>
    </section>
  );
}
