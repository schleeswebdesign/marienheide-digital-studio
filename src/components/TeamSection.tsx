import React, { useState, useRef, useEffect, useCallback } from "react";
import joshImg from "@/assets/josh.jpg";
import miguelImg from "@/assets/miguel-klees.webp";

/* ───────── SVG Character: Josh ───────── */
function JoshCharacter({ eyeOffset }: { eyeOffset: { x: number; y: number } }) {
  const ex = eyeOffset.x * 3;
  const ey = eyeOffset.y * 2.5;
  return (
    <svg viewBox="0 0 200 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      {/* Body - Blue Hoodie */}
      <ellipse cx="100" cy="245" rx="65" ry="35" fill="#2563eb" />
      <rect x="35" y="210" width="130" height="40" rx="8" fill="#2563eb" />
      {/* Hoodie details */}
      <path d="M80 210 Q100 230 120 210" stroke="#1d4ed8" strokeWidth="2" fill="none" />
      <rect x="93" y="210" width="14" height="20" rx="3" fill="#1d4ed8" opacity="0.5" />
      {/* Neck */}
      <rect x="85" y="195" width="30" height="22" rx="8" fill="#f0c8a0" />
      {/* Head */}
      <ellipse cx="100" cy="140" rx="55" ry="62" fill="#f0c8a0" />
      {/* Ears */}
      <ellipse cx="46" cy="145" rx="10" ry="14" fill="#e8b888" />
      <ellipse cx="154" cy="145" rx="10" ry="14" fill="#e8b888" />
      {/* Hair - Light brown, side parted */}
      <path d="M48 120 Q50 60 100 55 Q150 60 155 120 Q155 100 148 85 Q140 70 100 65 Q60 70 52 90 Z" fill="#9a7b4f" />
      <path d="M48 120 Q50 95 65 85 Q50 100 48 125" fill="#8a6b3f" />
      <path d="M70 68 Q100 58 140 70 Q120 62 90 65 Z" fill="#b08d5f" />
      {/* Eyebrows */}
      <path d="M68 118 Q78 112 90 116" stroke="#6b5030" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M110 116 Q122 112 132 118" stroke="#6b5030" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Glasses - thick black rectangular */}
      <rect x="63" y="122" width="32" height="24" rx="4" stroke="#222" strokeWidth="3" fill="white" fillOpacity="0.15" />
      <rect x="105" y="122" width="32" height="24" rx="4" stroke="#222" strokeWidth="3" fill="white" fillOpacity="0.15" />
      <line x1="95" y1="134" x2="105" y2="134" stroke="#222" strokeWidth="3" />
      <line x1="63" y1="134" x2="46" y2="130" stroke="#222" strokeWidth="2.5" />
      <line x1="137" y1="134" x2="154" y2="130" stroke="#222" strokeWidth="2.5" />
      {/* Eyes (move with cursor) */}
      <circle cx={79 + ex} cy={134 + ey} r="4.5" fill="#3a2a1a" />
      <circle cx={121 + ex} cy={134 + ey} r="4.5" fill="#3a2a1a" />
      <circle cx={80.5 + ex * 0.6} cy={132.5 + ey * 0.6} r="1.5" fill="white" />
      <circle cx={122.5 + ex * 0.6} cy={132.5 + ey * 0.6} r="1.5" fill="white" />
      {/* Nose */}
      <path d="M97 145 Q100 152 103 145" stroke="#d4a574" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Stubble */}
      {[88,94,100,106,112].map(x => (
        <React.Fragment key={x}>
          <circle cx={x} cy={168} r="0.6" fill="#8a7a6a" opacity="0.5" />
          <circle cx={x-3} cy={172} r="0.6" fill="#8a7a6a" opacity="0.4" />
        </React.Fragment>
      ))}
      {/* Mouth - slight smile */}
      <path d="M88 162 Q100 172 112 162" stroke="#c4846a" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ───────── SVG Character: Miguel ───────── */
function MiguelCharacter({ eyeOffset }: { eyeOffset: { x: number; y: number } }) {
  const ex = eyeOffset.x * 3;
  const ey = eyeOffset.y * 2.5;
  return (
    <svg viewBox="0 0 200 260" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      {/* Body - White Polo */}
      <ellipse cx="100" cy="245" rx="65" ry="35" fill="#f0ece8" />
      <rect x="35" y="210" width="130" height="40" rx="8" fill="#f0ece8" />
      {/* Polo collar */}
      <path d="M82 210 L92 222 L100 215 L108 222 L118 210" stroke="#d8d0c8" strokeWidth="2" fill="none" />
      {/* Polo buttons */}
      <circle cx="100" cy="228" r="1.5" fill="#c8c0b8" />
      <circle cx="100" cy="235" r="1.5" fill="#c8c0b8" />
      {/* Neck */}
      <rect x="85" y="195" width="30" height="22" rx="8" fill="#f0c8a0" />
      {/* Head - rounder fuller face */}
      <ellipse cx="100" cy="140" rx="58" ry="65" fill="#f0c8a0" />
      {/* Rosy cheeks */}
      <ellipse cx="68" cy="152" rx="12" ry="8" fill="#f5a0a0" opacity="0.25" />
      <ellipse cx="132" cy="152" rx="12" ry="8" fill="#f5a0a0" opacity="0.25" />
      {/* Ears */}
      <ellipse cx="43" cy="142" rx="10" ry="14" fill="#e8b888" />
      <ellipse cx="157" cy="142" rx="10" ry="14" fill="#e8b888" />
      {/* Curly dark brown hair */}
      <path d="M42 125 Q42 55 100 48 Q158 55 158 125" fill="#3d2b1a" />
      {/* Curls on top */}
      {[60,75,90,105,120,135].map((x, i) => (
        <circle key={i} cx={x} cy={55 + (i % 2 ? -4 : 2)} r={12 + (i % 3) * 2} fill="#4a3520" />
      ))}
      {[55,70,85,100,115,130,145].map((x, i) => (
        <circle key={`t${i}`} cx={x} cy={48 + (i % 2 ? 2 : -3)} r={10 + (i % 2) * 3} fill="#3d2b1a" />
      ))}
      {/* Side curls */}
      <circle cx="42" cy="110" r="10" fill="#3d2b1a" />
      <circle cx="158" cy="110" r="10" fill="#3d2b1a" />
      <circle cx="38" cy="125" r="8" fill="#4a3520" />
      <circle cx="162" cy="125" r="8" fill="#4a3520" />
      {/* Eyebrows */}
      <path d="M68 118 Q80 112 92 117" stroke="#3d2b1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M108 117 Q120 112 132 118" stroke="#3d2b1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Eyes (move with cursor) */}
      <ellipse cx="80" cy="133" rx="11" ry="12" fill="white" />
      <ellipse cx="120" cy="133" rx="11" ry="12" fill="white" />
      <circle cx={80 + ex} cy={133 + ey} r="5" fill="#3a2a1a" />
      <circle cx={120 + ex} cy={133 + ey} r="5" fill="#3a2a1a" />
      <circle cx={81.5 + ex * 0.6} cy={131.5 + ey * 0.6} r="1.8" fill="white" />
      <circle cx={121.5 + ex * 0.6} cy={131.5 + ey * 0.6} r="1.8" fill="white" />
      {/* Beard shadow */}
      <path d="M65 160 Q100 185 135 160 Q130 175 100 180 Q70 175 65 160 Z" fill="#4a3520" opacity="0.12" />
      {/* Nose */}
      <path d="M96 145 Q100 154 104 145" stroke="#d4a574" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Mouth */}
      <path d="M88 163 Q100 173 112 163" stroke="#c4846a" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

/* ───────── Info Card ───────── */
function InfoCard({ name, role, photo, onClose }: {
  name: string; role: string; photo: string; onClose: () => void;
}) {
  return (
    <div
      className="absolute -top-4 left-1/2 -translate-x-1/2 -translate-y-full z-30 w-64 sm:w-72"
      style={{ animation: "card-spring 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards" }}
    >
      <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ background: "#1a2744", border: "1px solid rgba(91,200,245,0.2)" }}>
        <img src={photo} alt={name} className="w-full h-40 object-cover object-top" />
        <div className="p-4">
          <h4 className="text-white font-bold text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>{name}</h4>
          <p className="text-sm mb-3" style={{ color: "#5bc8f5" }}>{role}</p>
          <div className="w-full h-px bg-white/10 mb-3" />
          <p className="text-white/60 text-xs leading-relaxed">
            Verwurzelt im Oberbergischen, offen für jeden. Wir glauben dass gutes Webdesign kein Luxus ist – und das beweisen wir mit jedem Projekt.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ───────── Main Section ───────── */
export default function TeamSection() {
  const [activeCard, setActiveCard] = useState<"josh" | "miguel" | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: MouseEvent | TouchEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const clientX = "touches" in e ? e.touches[0]?.clientX ?? 0 : e.clientX;
    const clientY = "touches" in e ? e.touches[0]?.clientY ?? 0 : e.clientY;
    const x = ((clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((clientY - rect.top) / rect.height - 0.5) * 2;
    setMousePos({ x: Math.max(-1, Math.min(1, x)), y: Math.max(-1, Math.min(1, y)) });
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove as any);
    el.addEventListener("touchmove", handleMouseMove as any, { passive: true });
    return () => {
      el.removeEventListener("mousemove", handleMouseMove as any);
      el.removeEventListener("touchmove", handleMouseMove as any);
    };
  }, [handleMouseMove]);

  // Close card on outside click
  useEffect(() => {
    if (!activeCard) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-character]")) setActiveCard(null);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, [activeCard]);

  const characters = [
    { id: "josh" as const, name: "Josh Schlief", role: "Webdesign & Kundenberatung", photo: joshImg, Character: JoshCharacter, delay: "0s" },
    { id: "miguel" as const, name: "Miguel Klees", role: "Webdesign & Kundenberatung", photo: miguelImg, Character: MiguelCharacter, delay: "0.8s" },
  ];

  return (
    <section id="vision" className="relative section-padding overflow-hidden" style={{ backgroundColor: "#0d1b2a" }} ref={sectionRef}>
      {/* Hexagon pattern bg */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='52' viewBox='0 0 60 52'%3E%3Cpath d='M30 0L60 15v22L30 52 0 37V15z' fill='none' stroke='%235bc8f5' stroke-width='0.5'/%3E%3C/svg%3E")`,
        backgroundSize: "60px 52px",
      }} />
      <div className="container-narrow relative" style={{ zIndex: 1 }}>
        {/* Text */}
        <div className="max-w-xl mb-16">
          <h2 className="text-3xl md:text-4xl mb-6 text-white">Unsere Vision</h2>
          <p className="text-white/60 leading-relaxed text-base md:text-lg">
            Verwurzelt im Oberbergischen, offen für jeden. Wir glauben dass gutes Webdesign kein Luxus ist – und das beweisen wir mit jedem Projekt.
          </p>
        </div>

        {/* Characters */}
        <div className="flex justify-center gap-8 sm:gap-16 md:gap-24">
          {characters.map(({ id, name, role, photo, Character, delay }) => (
            <div
              key={id}
              data-character={id}
              className="relative flex flex-col items-center cursor-pointer"
              style={{ width: "clamp(130px, 35vw, 200px)" }}
              onClick={(e) => { e.stopPropagation(); setActiveCard(prev => prev === id ? null : id); }}
            >
              {activeCard === id && <InfoCard name={name} role={role} photo={photo} onClose={() => setActiveCard(null)} />}
              {/* Glow */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full blur-xl" style={{
                background: "radial-gradient(ellipse, rgba(91,200,245,0.4) 0%, transparent 70%)",
              }} />
              {/* Character wrapper */}
              <div
                className="relative transition-transform duration-200"
                style={{
                  animation: `character-float 3s ease-in-out ${delay} infinite`,
                  transform: activeCard === id ? "scale(1.08)" : undefined,
                }}
              >
                <Character eyeOffset={mousePos} />
              </div>
              {/* Hint text */}
              <span
                className="mt-2 text-xs font-medium transition-opacity duration-300"
                style={{
                  color: "#5bc8f5",
                  opacity: activeCard === id ? 0 : 0.7,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Tippen ✦
              </span>
              <p className="text-white font-bold mt-1 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>{name.split(" ")[0]}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes character-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes card-spring {
          0% { opacity: 0; transform: translate(-50%, -90%) scale(0.8); }
          100% { opacity: 1; transform: translate(-50%, -100%) scale(1); }
        }
      `}</style>
    </section>
  );
}
