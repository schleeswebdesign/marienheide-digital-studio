import React, { useState, useEffect, useCallback, useRef } from "react";

const SCENE_DURATION = 5000;
const WORLD_DURATION = 2000;

const scenes = [
  { name: "AeroVista X", category: "DROHNEN · TECH", num: "01" },
  { name: "WeldPro", category: "INDUSTRIE · PRODUKT", num: "02" },
  { name: "Aqua Bottles", category: "LIFESTYLE · PRODUKT", num: "03" },
  { name: "Schlees Webdesign", category: "REFERENZEN", num: "04" },
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

/* ─── Scene 2: WeldPro 3D Avatar ─── */
function WeldScene() {
  const [helmetOn, setHelmetOn] = useState(false);
  const [hintVisible, setHintVisible] = useState(true);
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const [headTilt, setHeadTilt] = useState({ rx: 0, ry: 0 });
  const avatarRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sparksRef = useRef<{ x: number; y: number; vx: number; vy: number; life: number; maxLife: number; color: string }[]>([]);
  const rafRef = useRef<number>(0);

  // Auto-drop helmet after 1.5s
  useEffect(() => {
    const t = setTimeout(() => {
      setHelmetOn(true);
      setHintVisible(false);
    }, 1500);
    return () => clearTimeout(t);
  }, []);

  // Mouse tracking for eyes and head tilt
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!avatarRef.current) return;
      const rect = avatarRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (window.innerWidth / 2);
      const dy = (e.clientY - cy) / (window.innerHeight / 2);
      setEyeOffset({ x: Math.max(-4, Math.min(4, dx * 4)), y: Math.max(-4, Math.min(4, dy * 4)) });
      setHeadTilt({ rx: Math.max(-6, Math.min(6, -dy * 6)), ry: Math.max(-8, Math.min(8, dx * 8)) });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  // Canvas spark particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const colors = ['#ff6b35', '#ffaa44', '#ff6b35', '#ff8c00'];
    let lastSpawn = 0;

    const tick = (time: number) => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      if (helmetOn && time - lastSpawn > 50) {
        lastSpawn = time;
        for (let i = 0; i < 3; i++) {
          sparksRef.current.push({
            x: canvas.offsetWidth * 0.62 + (Math.random() - 0.5) * 30,
            y: canvas.offsetHeight * 0.52,
            vx: (Math.random() - 0.5) * 3,
            vy: -(2 + Math.random() * 4),
            life: 0,
            maxLife: 30 + Math.random() * 30,
            color: colors[Math.floor(Math.random() * colors.length)],
          });
        }
      }

      sparksRef.current = sparksRef.current.filter(s => s.life < s.maxLife);
      for (const s of sparksRef.current) {
        s.life++;
        s.vy += 0.12;
        s.x += s.vx;
        s.y += s.vy;
        const alpha = 1 - s.life / s.maxLife;
        ctx.globalAlpha = alpha;
        ctx.strokeStyle = s.color;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * 2, s.y - s.vy * 2);
        ctx.stroke();
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [helmetOn]);

  const toggleHelmet = () => {
    setHelmetOn(prev => {
      if (!prev) setHintVisible(false);
      return !prev;
    });
    sparksRef.current = [];
  };

  return (
    <div className="showcase-scene" style={{ background: "#080808" }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-[8]" />

      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 md:px-6 py-3">
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14, letterSpacing: 2 }}>
          <span style={{ color: "#fff" }}>WELD</span><span style={{ color: "#ff6b35" }}>PRO</span>
        </span>
        <div className="hidden md:flex gap-4 text-[11px] text-white/40" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          <span>Helmets</span><span>Gear</span><span>Pro Series</span>
        </div>
        <span className="text-[11px] px-3 py-1 rounded text-white font-semibold" style={{ backgroundColor: "#ff6b35", fontFamily: "'DM Sans', sans-serif" }}>Shop Now</span>
      </div>

      {/* Left text */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 max-w-[45%]">
        <p className="text-white leading-none" style={{ fontFamily: "'Bebas Neue', 'Playfair Display', serif", fontSize: 'clamp(24px, 4.5vw, 48px)', fontWeight: 400 }}>
          BUILT FOR<br />
          <span style={{ color: "#ff6b35" }}>FIRE &</span><br />
          PRECISION
        </p>
        <p className="text-white/30 text-[10px] mt-3 tracking-wider" style={{ fontFamily: "'DM Sans', sans-serif" }}>Professional grade welding helmets for the pros</p>
        <p className="mt-3" style={{ fontFamily: "'Bebas Neue', 'Playfair Display', serif", color: "#ff6b35", fontSize: 'clamp(20px, 3vw, 36px)' }}>€ 249</p>
      </div>

      {/* Orange glow behind avatar */}
      <div
        className="absolute right-[10%] md:right-[20%] top-1/2 -translate-y-1/2 rounded-full z-[3] transition-opacity duration-700"
        style={{
          width: 200, height: 200,
          background: 'radial-gradient(circle, rgba(255,107,53,0.25) 0%, rgba(255,107,53,0.08) 40%, transparent 70%)',
          opacity: helmetOn ? 1 : 0,
        }}
      />

      {/* 3D CSS Avatar */}
      <div
        ref={avatarRef}
        className="absolute right-[12%] md:right-[22%] top-1/2 -translate-y-1/2 z-[5] cursor-pointer"
        onClick={toggleHelmet}
        style={{
          transform: `translateY(-50%) rotateX(${headTilt.rx}deg) rotateY(${headTilt.ry}deg)`,
          transition: 'transform 0.15s ease-out',
          transformStyle: 'preserve-3d',
        }}
      >
        <div style={{ width: 130, height: 220, position: 'relative' }}>
          {/* Body / Jacket */}
          <div style={{
            position: 'absolute', bottom: 0, left: 10, width: 110, height: 90,
            background: 'linear-gradient(135deg, #1a2a3a 0%, #0f1c2a 100%)',
            borderRadius: '12px 12px 6px 6px',
            boxShadow: 'inset 2px 0 8px rgba(255,255,255,0.03)',
          }}>
            <div style={{ position: 'absolute', top: 8, left: 4, width: 4, height: 60, background: 'linear-gradient(180deg, #ff6b35 0%, #ff6b35 70%, transparent)', borderRadius: 2, opacity: 0.8 }} />
            <div style={{ position: 'absolute', top: 8, right: 4, width: 4, height: 60, background: 'linear-gradient(180deg, #ff6b35 0%, #ff6b35 70%, transparent)', borderRadius: 2, opacity: 0.8 }} />
            <div style={{ position: 'absolute', top: -4, left: '50%', transform: 'translateX(-50%)', width: 40, height: 10, background: '#e8e8e8', borderRadius: '4px 4px 0 0' }} />
            <div style={{ position: 'absolute', top: 4, left: '50%', transform: 'translateX(-50%)', width: 50, height: 4, background: 'rgba(0,0,0,0.2)', borderRadius: 2 }} />
          </div>

          {/* Neck */}
          <div style={{
            position: 'absolute', bottom: 82, left: '50%', transform: 'translateX(-50%)',
            width: 24, height: 16,
            background: 'linear-gradient(180deg, #d09060 0%, #c08050 100%)',
            borderRadius: '2px 2px 4px 4px',
          }} />

          {/* Head */}
          <div style={{
            position: 'absolute', bottom: 90, left: '50%', transform: 'translateX(-50%)',
            width: 72, height: 80,
            background: 'radial-gradient(ellipse at 40% 35%, #f5c5a0 0%, #e0a878 50%, #d09060 100%)',
            borderRadius: '38px 38px 28px 28px',
            boxShadow: '4px 4px 12px rgba(0,0,0,0.3), inset -2px -2px 6px rgba(0,0,0,0.1)',
          }}>
            {/* Ears */}
            <div style={{ position: 'absolute', left: -8, top: 28, width: 14, height: 18, background: 'radial-gradient(ellipse, #e0a878 0%, #d09060 100%)', borderRadius: '50%', boxShadow: '-2px 0 4px rgba(0,0,0,0.15)' }} />
            <div style={{ position: 'absolute', right: -8, top: 28, width: 14, height: 18, background: 'radial-gradient(ellipse, #e0a878 0%, #d09060 100%)', borderRadius: '50%', boxShadow: '2px 0 4px rgba(0,0,0,0.15)' }} />
            {/* Hair */}
            <div style={{ position: 'absolute', top: -6, left: -2, width: 76, height: 36, background: 'linear-gradient(180deg, #1a1a1a 0%, #222 80%, transparent 100%)', borderRadius: '40px 40px 10px 10px' }} />
            {/* Beard shadow */}
            <div style={{ position: 'absolute', bottom: 2, left: '50%', transform: 'translateX(-50%)', width: 50, height: 20, background: 'radial-gradient(ellipse, rgba(60,40,20,0.2) 0%, transparent 70%)', borderRadius: '50%' }} />
            {/* Glasses */}
            <div style={{ position: 'absolute', top: 28, left: 10, display: 'flex', gap: 4, alignItems: 'center' }}>
              <div style={{ width: 22, height: 16, border: '2px solid #1a1a1a', borderRadius: 4, background: 'rgba(200,220,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: `translate(${eyeOffset.x * 0.5}px, ${eyeOffset.y * 0.5}px)`, transition: 'transform 0.1s ease-out' }}>
                    <div style={{ width: 3, height: 3, borderRadius: '50%', background: '#111' }} />
                  </div>
                </div>
              </div>
              <div style={{ width: 4, height: 2, background: '#1a1a1a', borderRadius: 1 }} />
              <div style={{ width: 22, height: 16, border: '2px solid #1a1a1a', borderRadius: 4, background: 'rgba(200,220,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#3b82f6', display: 'flex', alignItems: 'center', justifyContent: 'center', transform: `translate(${eyeOffset.x * 0.5}px, ${eyeOffset.y * 0.5}px)`, transition: 'transform 0.1s ease-out' }}>
                    <div style={{ width: 3, height: 3, borderRadius: '50%', background: '#111' }} />
                  </div>
                </div>
              </div>
            </div>
            {/* Nose */}
            <div style={{ position: 'absolute', top: 44, left: '50%', transform: 'translateX(-50%)', width: 8, height: 10, background: 'linear-gradient(180deg, transparent 0%, rgba(180,120,60,0.3) 100%)', borderRadius: '50% 50% 40% 40%' }} />
            {/* Smile */}
            <div style={{ position: 'absolute', top: 58, left: '50%', transform: 'translateX(-50%)', width: 18, height: 6, borderBottom: '2px solid rgba(160,90,50,0.4)', borderRadius: '0 0 50% 50%' }} />
          </div>

          {/* Welding Helmet overlay */}
          <div style={{
            position: 'absolute', bottom: 78, left: '50%',
            transform: `translateX(-50%) translateY(${helmetOn ? '0' : '-30px'})`,
            opacity: helmetOn ? 1 : 0,
            transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease',
            width: 90, height: 100, zIndex: 10, pointerEvents: 'none',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 40%, #111 100%)',
              borderRadius: '45px 45px 20px 20px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.5), inset 1px 1px 4px rgba(255,255,255,0.05)',
            }}>
              <div style={{ position: 'absolute', top: 8, left: 12, width: 6, height: 50, background: 'linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 100%)', borderRadius: 4 }} />
            </div>
            <div style={{
              position: 'absolute', top: 22, left: 10, right: 10, height: 34,
              background: 'linear-gradient(135deg, #0a0a12 0%, #12121e 60%, #0a0a12 100%)',
              borderRadius: 6, border: '1.5px solid rgba(255,107,53,0.3)', overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '60%', height: '70%', background: 'radial-gradient(ellipse at 20% 100%, rgba(255,107,53,0.4) 0%, rgba(255,140,0,0.15) 40%, transparent 70%)' }} />
            </div>
            <div style={{ position: 'absolute', top: 62, left: '50%', transform: 'translateX(-50%)', color: '#ff6b35', fontSize: 7, fontWeight: 700, letterSpacing: 2, fontFamily: "'DM Sans', sans-serif", whiteSpace: 'nowrap' }}>WELD PRO</div>
            <div style={{ position: 'absolute', top: 26, left: 4, width: 3, height: 24, background: '#ff6b35', borderRadius: 2, opacity: 0.7 }} />
            <div style={{ position: 'absolute', top: 26, right: 4, width: 3, height: 24, background: '#ff6b35', borderRadius: 2, opacity: 0.7 }} />
            <div style={{ position: 'absolute', top: 2, left: '50%', transform: 'translateX(-50%)', width: 40, height: 3, background: 'linear-gradient(90deg, transparent, rgba(255,107,53,0.5), transparent)', borderRadius: 2 }} />
            <div style={{ position: 'absolute', bottom: -4, left: '50%', transform: 'translateX(-50%)', width: 60, height: 12, background: 'linear-gradient(180deg, #1a1a1a, #111)', borderRadius: '0 0 12px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.3)' }} />
          </div>
        </div>
      </div>

      {/* Hint text */}
      <div className="absolute z-10 text-center transition-opacity duration-500" style={{ right: '12%', bottom: '10%', opacity: hintVisible ? 0.6 : 0, color: '#ff6b35', fontSize: 11, fontFamily: "'DM Sans', sans-serif", letterSpacing: 1 }}>
        hover me ✦
      </div>
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

/* ─── Scene 4: Portfolio Cards ─── */
function PortfolioScene() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const title = "BUILT FOR SCALE";
  const cards = [
    { tag: "WEBDESIGN", tagColor: "#5bc8f5", name: "Restaurant Meyer", desc: "Moderne Website für lokale Gastronomie" },
    { tag: "WEBDESIGN · SEO", tagColor: "#a78bfa", name: "Kanzlei Hoffmann", desc: "Corporate Website mit Terminbuchung" },
    { tag: "WEBDESIGN · SHOP", tagColor: "#34d399", name: "Aqua Bottles", desc: "Premium Produktseite mit 3D Animation" },
  ];

  return (
    <div className="showcase-scene" style={{ background: "#0a0f1a" }}>
      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 md:px-6 py-3">
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 14, color: "#5bc8f5", letterSpacing: 2 }}>SC</span>
        <div className="hidden md:flex gap-4 text-[11px] text-white/50" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          <span>Home</span><span>Work</span><span>About</span><span>Contact</span>
        </div>
      </div>

      {/* Left side — title */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 max-w-[40%]">
        {["BUILT", "FOR", "SCALE"].map((word, wi) => (
          <div key={word} className="overflow-hidden">
            <div style={{ display: 'flex' }}>
              {word.split("").map((ch, ci) => (
                <span
                  key={ci}
                  style={{
                    display: 'inline-block',
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 900,
                    fontSize: 'clamp(28px, 5vw, 52px)',
                    lineHeight: 1,
                    color: word === "SCALE" ? "#5bc8f5" : "#fff",
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(100%)',
                    transition: `opacity 0.4s ease ${(wi * word.length + ci) * 0.05}s, transform 0.4s ease ${(wi * word.length + ci) * 0.05}s`,
                  }}
                >
                  {ch}
                </span>
              ))}
            </div>
          </div>
        ))}
        <p
          className="text-[9px] tracking-[3px] text-white/30 uppercase mt-4"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.6s ease 0.8s',
          }}
        >
          Unsere bisherigen Projekte
        </p>
      </div>

      {/* Right side — cards */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-3 w-[48%] md:w-[40%] max-w-[280px]">
        {cards.map((card, i) => (
          <div
            key={card.name}
            className="portfolio-card-hover"
            style={{
              background: "#111827",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 12,
              padding: '12px 14px',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateX(0)' : 'translateX(60px)',
              transition: `opacity 0.5s ease ${0.3 + i * 0.15}s, transform 0.5s ease ${0.3 + i * 0.15}s, border-color 0.3s ease, box-shadow 0.3s ease`,
            }}
          >
            <span
              style={{
                display: 'inline-block',
                fontSize: 8,
                fontWeight: 700,
                letterSpacing: 1.5,
                color: card.tagColor,
                background: `${card.tagColor}15`,
                padding: '2px 8px',
                borderRadius: 4,
                fontFamily: "'DM Sans', sans-serif",
                marginBottom: 6,
              }}
            >
              {card.tag}
            </span>
            <p className="text-white text-xs font-bold" style={{ fontFamily: "'DM Sans', sans-serif" }}>{card.name}</p>
            <p className="text-white/40 text-[10px] mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{card.desc}</p>
          </div>
        ))}
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
        setActive(a => (a + 1) % scenes.length);
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
          {[DroneScene, WeldScene, AquaScene, PortfolioScene].map((Scene, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-[800ms]"
              style={{ opacity: active === i ? 1 : 0, pointerEvents: active === i ? "auto" : "none" }}
            >
              {active === i && <Scene />}
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
        /* Portfolio card hover glow */
        .portfolio-card-hover:hover {
          border-color: rgba(91,200,245,0.4) !important;
          box-shadow: 0 0 20px rgba(91,200,245,0.1);
        }
      `}</style>
    </section>
  );
}
