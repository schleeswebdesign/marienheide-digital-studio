import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const questions = [
  {
    step: "Schritt 1 von 5",
    title: "Wie viele Produkte soll Ihr Shop haben?",
    sub: "Die Produktanzahl beeinflusst den Aufwand beim Aufbau.",
    options: [
      { icon: "📦", label: "Bis 20 Produkte", desc: "Kleiner, übersichtlicher Shop", value: 0 },
      { icon: "📋", label: "21–100 Produkte", desc: "Mittlerer Produktkatalog", value: 30 },
      { icon: "🏬", label: "100+ Produkte", desc: "Großer Shop mit vielen Kategorien", value: 60 },
    ],
  },
  {
    step: "Schritt 2 von 5",
    title: "Welche Zahlungsarten brauchen Sie?",
    sub: "Wählen Sie alle gewünschten Optionen.",
    multi: true,
    options: [
      { icon: "💳", label: "Kreditkarte", desc: "Visa, Mastercard etc.", value: 10 },
      { icon: "🅿️", label: "PayPal", desc: "Standard-Zahlungsmethode", value: 5 },
      { icon: "🏦", label: "Klarna", desc: "Kauf auf Rechnung / Raten", value: 15 },
      { icon: "🏧", label: "Überweisung", desc: "Klassische Banküberweisung", value: 0 },
    ],
  },
  {
    step: "Schritt 3 von 5",
    title: "Welches Design schwebt Ihnen vor?",
    sub: "Je individueller, desto aufwendiger.",
    options: [
      { icon: "📐", label: "Template", desc: "Bewährtes Standarddesign", value: 0 },
      { icon: "🎨", label: "Angepasst", desc: "Template mit Anpassungen", value: 30 },
      { icon: "✨", label: "Individuell", desc: "Komplett maßgeschneidert", value: 60 },
    ],
  },
  {
    step: "Schritt 4 von 5",
    title: "Welche Extras brauchen Sie?",
    sub: "Wählen Sie alle gewünschten Funktionen.",
    multi: true,
    options: [
      { icon: "🌍", label: "Mehrsprachigkeit", desc: "DE + EN oder mehr", value: 20 },
      { icon: "🔍", label: "SEO-Optimierung", desc: "Erweiterte Suchmaschinenoptimierung", value: 10 },
      { icon: "📊", label: "Lagerverwaltung", desc: "Bestandsmanagement", value: 15 },
      { icon: "📈", label: "Analytics", desc: "Verkaufsstatistiken & Tracking", value: 10 },
      { icon: "📧", label: "E-Mail Marketing", desc: "Newsletter & Automationen", value: 15 },
    ],
  },
  {
    step: "Schritt 5 von 5",
    title: "Was beschreibt Ihr Projekt am besten?",
    sub: "Neuer Shop, Redesign oder Migration?",
    options: [
      { icon: "🆕", label: "Neuer Shop", desc: "Komplett neuer Online-Shop", value: 0 },
      { icon: "🔄", label: "Redesign", desc: "Bestehenden Shop neu gestalten", value: 10 },
      { icon: "🔀", label: "Migration", desc: "Shop von anderer Plattform umziehen", value: 25 },
    ],
  },
];

const MIN_PRICE = 150;
const MAX_PRICE = 400;

const baseIncludes = [
  "Professionelles Shop-Design",
  "Produkt- & Kategorieseiten",
  "Warenkorb & sicherer Checkout",
  "SSL-Zertifikat & Hosting-Setup",
  "Mobile optimiert",
  "30 Tage Support nach Livegang",
];

const PriceShop = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [multiAnswers, setMultiAnswers] = useState<Record<number, number[]>>({});
  const [showResult, setShowResult] = useState(false);

  const q = questions[step];
  const isMulti = !!q.multi;
  const currentMulti = multiAnswers[step] || [];
  const selected = isMulti ? currentMulti : (answers[step] !== undefined ? [answers[step]] : []);
  const progress = ((step + 1) / questions.length) * 100;

  const selectOption = (i: number) => {
    if (isMulti) {
      setMultiAnswers(prev => ({
        ...prev,
        [step]: (prev[step] || []).includes(i)
          ? (prev[step] || []).filter(x => x !== i)
          : [...(prev[step] || []), i],
      }));
    } else {
      const next = [...answers];
      next[step] = i;
      setAnswers(next);
    }
  };

  const canProceed = isMulti ? true : answers[step] !== undefined;
  const goNext = () => { if (step < questions.length - 1) setStep(step + 1); else setShowResult(true); };
  const goBack = () => { if (step > 0) setStep(step - 1); };

  const calcPrice = () => {
    let total = 0;
    answers.forEach((sel, qi) => {
      if (!questions[qi].multi && questions[qi].options[sel]) {
        total += questions[qi].options[sel].value;
      }
    });
    Object.entries(multiAnswers).forEach(([qi, indices]) => {
      indices.forEach(i => { total += questions[Number(qi)].options[i].value; });
    });
    const raw = MIN_PRICE + total;
    const low = Math.max(MIN_PRICE, Math.min(MAX_PRICE, raw));
    const high = Math.max(MIN_PRICE, Math.min(MAX_PRICE, Math.round(raw * 1.15)));
    return { low, high: Math.max(low, high) };
  };

  const restart = () => { setStep(0); setAnswers([]); setMultiAnswers({}); setShowResult(false); };
  const { low, high } = calcPrice();

  return (
    <div className="min-h-screen pt-24 pb-20" style={{ backgroundColor: '#0a0f1a' }}>
      <div className="max-w-[600px] mx-auto px-6">
        <Link to="/preise" className="inline-flex items-center gap-2 text-sm text-[#29b6d8] mb-8 hover:underline">
          <ArrowLeft size={16} /> Zurück zur Übersicht
        </Link>

        {!showResult ? (
          <>
            <div className="mb-9">
              <div className="flex justify-between text-xs text-white/50 mb-2 tracking-wide">
                <span>{q.step}</span>
                <span>{Math.round(progress)} %</span>
              </div>
              <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#29b6d8] to-[#00d4ff] rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <div className="rounded-2xl p-8 border border-[#29b6d8]/20 animate-in fade-in slide-in-from-bottom-4 duration-300" style={{ backgroundColor: '#162233' }}>
              <p className="text-xs font-semibold tracking-[2px] uppercase text-[#29b6d8] mb-3">{q.step}</p>
              <h2 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>{q.title}</h2>
              <p className="text-sm text-white/50 mb-6 leading-relaxed">{q.sub}</p>

              <div className="flex flex-col gap-2">
                {q.options.map((opt, i) => (
                  <div
                    key={i}
                    onClick={() => selectOption(i)}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all duration-200 select-none
                      ${selected.includes(i) ? 'border-[#29b6d8] bg-[#29b6d8]/10' : 'border-white/10 bg-white/[0.02] hover:border-[#29b6d8]/40 hover:bg-[#29b6d8]/5'}`}
                  >
                    <span className="text-xl w-7 text-center shrink-0">{opt.icon}</span>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">{opt.label}</p>
                      <p className="text-xs text-white/50 mt-0.5">{opt.desc}</p>
                    </div>
                    <div className={`w-[18px] h-[18px] rounded-full border-[1.5px] flex items-center justify-center shrink-0 transition-all
                      ${selected.includes(i) ? 'bg-[#29b6d8] border-[#29b6d8]' : 'border-white/20'}`}>
                      {selected.includes(i) && <span className="text-[10px] font-extrabold" style={{ color: '#0d1b2a' }}>✓</span>}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2.5 mt-5">
                {step > 0 && (
                  <button onClick={goBack} className="px-4 py-3 rounded-xl border border-white/10 text-white/50 text-sm hover:text-white hover:border-white/25 transition-all">
                    ← Zurück
                  </button>
                )}
                <button
                  onClick={goNext}
                  disabled={!canProceed}
                  className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all
                    ${canProceed
                      ? 'bg-gradient-to-r from-[#29b6d8] to-[#00d4ff] text-[#0d1b2a] cursor-pointer hover:shadow-lg hover:shadow-[#29b6d8]/30 hover:-translate-y-0.5'
                      : 'bg-gradient-to-r from-[#29b6d8] to-[#00d4ff] text-[#0d1b2a] opacity-35 pointer-events-none'}`}
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Weiter →
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="rounded-2xl p-9 border border-[#29b6d8]/20 animate-in fade-in slide-in-from-bottom-4 duration-300" style={{ backgroundColor: '#162233' }}>
            <p className="text-xs font-semibold tracking-[2px] uppercase text-[#29b6d8] mb-2">Ihr Richtwert</p>
            <h2 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>Geschätzter Projektpreis</h2>
            <p className="text-sm text-white/50 leading-relaxed mb-7">Basierend auf Ihren Angaben – unverbindlich und kostenlos.</p>

            <div className="border-t border-b border-white/10 py-5 mb-6">
              <p className="text-xs uppercase tracking-widest text-white/50 mb-1">Ungefähr</p>
              <p className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>{low} € – {high} €</p>
              <p className="text-xs text-white/50">Einmalige Erstellung · zzgl. 100 €/mtl. Hosting &amp; Betreuung</p>
            </div>

            <p className="text-xs uppercase tracking-widest text-white/50 mb-3 font-semibold">Was ist dabei</p>
            <ul className="mb-6 space-y-1.5">
              {baseIncludes.map(item => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-white">
                  <span className="text-[#29b6d8] text-xs font-bold shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <a href="mailto:schlees.webdesign@gmail.com" className="block w-full text-center py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-[#29b6d8] to-[#00d4ff] text-[#0d1b2a] hover:shadow-lg hover:shadow-[#29b6d8]/30 hover:-translate-y-0.5 transition-all mb-2.5" style={{ fontFamily: "'Syne', sans-serif" }}>
              Angebot anfragen →
            </a>
            <button onClick={restart} className="w-full py-3 rounded-xl border border-white/10 text-white/50 text-sm hover:text-white hover:border-white/25 transition-all">
              Neu berechnen
            </button>
            <p className="text-xs text-white/40 mt-3.5 leading-relaxed opacity-60">
              * Unverbindlicher Richtwert. Der genaue Preis wird im persönlichen Gespräch festgelegt.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PriceShop;
