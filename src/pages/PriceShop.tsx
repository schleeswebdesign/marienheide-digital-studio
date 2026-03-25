import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const questions = [
  {
    step: "Schritt 1 von 5",
    title: "Was möchten Sie verkaufen?",
    sub: "Dies hilft uns, den Umfang Ihres Shops einzuschätzen.",
    options: [
      { icon: "👕", label: "Physische Produkte", desc: "Kleidung, Möbel, Lebensmittel etc.", value: 500 },
      { icon: "📱", label: "Digitale Produkte", desc: "E-Books, Kurse, Software etc.", value: 400 },
      { icon: "🎨", label: "Handgemachtes & Kunst", desc: "Unikate, Schmuck, Deko etc.", value: 450 },
      { icon: "📦", label: "Gemischtes Sortiment", desc: "Verschiedene Produktarten", value: 550 },
    ],
  },
  {
    step: "Schritt 2 von 5",
    title: "Wie viele Produkte planen Sie?",
    sub: "Die Produktanzahl beeinflusst den Aufwand.",
    options: [
      { icon: "🔢", label: "1–20 Produkte", desc: "Kleines Sortiment", value: 0 },
      { icon: "📋", label: "21–100 Produkte", desc: "Mittleres Sortiment", value: 300 },
      { icon: "🏬", label: "100+ Produkte", desc: "Großes Sortiment", value: 700 },
    ],
  },
  {
    step: "Schritt 3 von 5",
    title: "Welche Zahlungsarten?",
    sub: "Mehr Optionen = höhere Conversion.",
    multi: true,
    options: [
      { icon: "💳", label: "Kreditkarte", desc: "Visa, Mastercard etc.", value: 0 },
      { icon: "🅿️", label: "PayPal", desc: "Standard-Zahlungsmethode", value: 0 },
      { icon: "🏦", label: "Klarna / Rechnung", desc: "Kauf auf Rechnung", value: 100 },
      { icon: "📱", label: "Apple Pay / Google Pay", desc: "Mobile Wallets", value: 50 },
    ],
  },
  {
    step: "Schritt 4 von 5",
    title: "Welche Extras brauchen Sie?",
    sub: "Wählen Sie alle gewünschten Funktionen.",
    multi: true,
    options: [
      { icon: "🔍", label: "Produktsuche & Filter", desc: "Suche, Kategorien, Filter", value: 200 },
      { icon: "⭐", label: "Bewertungssystem", desc: "Kundenbewertungen", value: 150 },
      { icon: "📧", label: "E-Mail-Marketing", desc: "Newsletter, Gutscheine", value: 150 },
      { icon: "📊", label: "Analytics & Tracking", desc: "Verkaufsstatistiken", value: 50 },
      { icon: "🌍", label: "Mehrsprachig", desc: "DE + EN oder mehr", value: 250 },
    ],
  },
  {
    step: "Schritt 5 von 5",
    title: "Wie schnell soll es gehen?",
    sub: "Express kostet einen Aufschlag.",
    options: [
      { icon: "🐢", label: "Standard (4–6 Wochen)", desc: "Normaler Zeitrahmen", value: 0 },
      { icon: "⚡", label: "Express (2–3 Wochen)", desc: "Schnellere Umsetzung", value: 400 },
      { icon: "🚀", label: "Sofort (unter 2 Wochen)", desc: "Höchste Priorität", value: 800 },
    ],
  },
];

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
  const isMulti = q.multi;
  const currentMulti = multiAnswers[step] || [];
  const selected = isMulti ? currentMulti : (answers[step] !== undefined ? [answers[step]] : []);
  const progress = ((step + 1) / questions.length) * 100;

  const selectOption = (i: number) => {
    if (isMulti) {
      setMultiAnswers(prev => ({
        ...prev,
        [step]: (prev[step] || []).includes(i) ? (prev[step] || []).filter(x => x !== i) : [...(prev[step] || []), i],
      }));
    } else {
      const next = [...answers];
      next[step] = i;
      setAnswers(next);
    }
  };

  const canProceed = isMulti ? true : answers[step] !== undefined;

  const goNext = () => {
    if (step < questions.length - 1) setStep(step + 1);
    else setShowResult(true);
  };

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
    return { low: total, high: Math.round(total * 1.3) };
  };

  const restart = () => { setStep(0); setAnswers([]); setMultiAnswers({}); setShowResult(false); };
  const { low, high } = calcPrice();

  return (
    <div className="min-h-screen pt-24 pb-20" style={{ backgroundColor: '#0a0f1a' }}>
      <div className="max-w-[600px] mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-primary mb-8 hover:underline">
          <ArrowLeft size={16} /> Zurück zur Startseite
        </Link>

        {!showResult ? (
          <>
            <div className="mb-9">
              <div className="flex justify-between text-xs text-white/50 mb-2 tracking-wide">
                <span>{q.step}</span>
                <span>{Math.round(progress)} %</span>
              </div>
              <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[hsl(263,67%,52%)] to-[hsl(280,80%,65%)] rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
            </div>

            <div className="rounded-2xl p-8 border border-[hsl(263,67%,52%)]/20 animate-in fade-in slide-in-from-bottom-4 duration-300" style={{ backgroundColor: '#162233' }}>
              <p className="text-xs font-semibold tracking-[2px] uppercase text-[hsl(263,67%,52%)] mb-3">{q.step}</p>
              <h2 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>{q.title}</h2>
              <p className="text-sm text-white/50 mb-6 leading-relaxed">{q.sub}</p>

              <div className="flex flex-col gap-2">
                {q.options.map((opt, i) => (
                  <div
                    key={i}
                    onClick={() => selectOption(i)}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all duration-200 select-none
                      ${selected.includes(i) ? 'border-[hsl(263,67%,52%)] bg-[hsl(263,67%,52%)]/10' : 'border-white/10 bg-white/[0.02] hover:border-[hsl(263,67%,52%)]/40 hover:bg-[hsl(263,67%,52%)]/5'}`}
                  >
                    <span className="text-xl w-7 text-center shrink-0">{opt.icon}</span>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">{opt.label}</p>
                      <p className="text-xs text-white/50 mt-0.5">{opt.desc}</p>
                    </div>
                    <div className={`w-[18px] h-[18px] rounded-full border-[1.5px] flex items-center justify-center shrink-0 transition-all
                      ${selected.includes(i) ? 'bg-[hsl(263,67%,52%)] border-[hsl(263,67%,52%)]' : 'border-white/20'}`}>
                      {selected.includes(i) && <span className="text-[10px] font-extrabold text-white">✓</span>}
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
                      ? 'bg-[hsl(263,67%,52%)] text-white cursor-pointer hover:shadow-lg hover:shadow-[hsl(263,67%,52%)]/30 hover:-translate-y-0.5'
                      : 'bg-[hsl(263,67%,52%)] text-white opacity-35 pointer-events-none'}`}
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Weiter →
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="rounded-2xl p-9 border border-[hsl(263,67%,52%)]/20 animate-in fade-in slide-in-from-bottom-4 duration-300" style={{ backgroundColor: '#162233' }}>
            <p className="text-xs font-semibold tracking-[2px] uppercase text-[hsl(263,67%,52%)] mb-2">Ihr Richtwert</p>
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
                  <span className="text-[hsl(263,67%,52%)] text-xs font-bold shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <a href="mailto:schlees.webdesign@gmail.com" className="block w-full text-center py-4 rounded-xl font-bold text-sm bg-[hsl(263,67%,52%)] text-white hover:shadow-lg hover:shadow-[hsl(263,67%,52%)]/30 hover:-translate-y-0.5 transition-all mb-2.5" style={{ fontFamily: "'Syne', sans-serif" }}>
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
