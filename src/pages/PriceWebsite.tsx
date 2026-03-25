import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const questions = [
  {
    step: "Schritt 1 von 5",
    title: "Welche Branche passt am besten?",
    sub: "Dies hilft uns, den Umfang Ihres Projekts einzuschätzen.",
    options: [
      { icon: "🔧", label: "Handwerk & Bau", desc: "Elektriker, Maler, Dachdecker etc.", value: 300 },
      { icon: "💇", label: "Dienstleistung & Beauty", desc: "Friseur, Kosmetik, Beratung etc.", value: 300 },
      { icon: "🍽️", label: "Gastronomie & Hotel", desc: "Restaurant, Café, Pension etc.", value: 350 },
      { icon: "🏥", label: "Gesundheit & Praxis", desc: "Arzt, Physio, Heilpraktiker etc.", value: 350 },
      { icon: "📦", label: "Sonstiges", desc: "Andere Branche", value: 300 },
    ],
  },
  {
    step: "Schritt 2 von 5",
    title: "Wie viele Seiten soll die Website haben?",
    sub: "Eine Seite reicht oft für den Start – mehr Seiten = mehr Inhalt.",
    options: [
      { icon: "1️⃣", label: "One-Pager", desc: "Alles auf einer Seite", value: 0 },
      { icon: "📄", label: "3–5 Seiten", desc: "Startseite, Über uns, Kontakt etc.", value: 300 },
      { icon: "📚", label: "6–10 Seiten", desc: "Umfangreicher Auftritt", value: 600 },
      { icon: "🏢", label: "Mehr als 10", desc: "Großes Projekt", value: 1000 },
    ],
  },
  {
    step: "Schritt 3 von 5",
    title: "Haben Sie bereits Inhalte?",
    sub: "Texte, Bilder, Logo – oder fangen wir bei null an?",
    options: [
      { icon: "✅", label: "Ja, alles vorhanden", desc: "Texte, Bilder und Logo sind da", value: 0 },
      { icon: "📝", label: "Teilweise", desc: "Einiges fehlt noch", value: 150 },
      { icon: "🆕", label: "Nein, brauche alles", desc: "Texte, Bilder, Logo – alles neu", value: 400 },
    ],
  },
  {
    step: "Schritt 4 von 5",
    title: "Welche Extras brauchen Sie?",
    sub: "Wählen Sie alle gewünschten Funktionen.",
    multi: true,
    options: [
      { icon: "📅", label: "Online-Terminbuchung", desc: "Calendly / Buchungssystem", value: 150 },
      { icon: "🗺️", label: "Google Maps", desc: "Standort-Einbindung", value: 0 },
      { icon: "📸", label: "Bildergalerie", desc: "Portfolio / Referenzbilder", value: 100 },
      { icon: "🌍", label: "Mehrsprachig", desc: "DE + EN oder mehr", value: 250 },
      { icon: "📊", label: "Analytics & Tracking", desc: "Google Analytics etc.", value: 50 },
    ],
  },
  {
    step: "Schritt 5 von 5",
    title: "Wie schnell soll es gehen?",
    sub: "Express kostet einen Aufschlag – Standard ist immer dabei.",
    options: [
      { icon: "🐢", label: "Standard (3–4 Wochen)", desc: "Normaler Zeitrahmen", value: 0 },
      { icon: "⚡", label: "Express (1–2 Wochen)", desc: "Schnellere Umsetzung", value: 300 },
      { icon: "🚀", label: "Sofort (unter 1 Woche)", desc: "Höchste Priorität", value: 600 },
    ],
  },
];

const baseIncludes = [
  "Responsives Design (Mobile & Desktop)",
  "SSL-Zertifikat & Hosting-Setup",
  "SEO-Grundeinrichtung",
  "Kontaktformular",
  "1 Korrekturschleife",
  "30 Tage Support nach Livegang",
];

const PriceWebsite = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [multiAnswers, setMultiAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const q = questions[step];
  const isMulti = q.multi;
  const selected = isMulti ? multiAnswers : (answers[step] !== undefined ? [answers[step]] : []);
  const progress = ((step + 1) / questions.length) * 100;

  const selectOption = (i: number) => {
    if (isMulti) {
      setMultiAnswers(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
    } else {
      const next = [...answers];
      next[step] = i;
      setAnswers(next);
    }
  };

  const canProceed = isMulti ? true : answers[step] !== undefined;

  const goNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setShowResult(true);
    }
  };

  const goBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const calcPrice = () => {
    let total = 0;
    answers.forEach((sel, qi) => {
      if (qi !== 3 && questions[qi].options[sel]) {
        total += questions[qi].options[sel].value;
      }
    });
    multiAnswers.forEach(i => {
      total += questions[3].options[i].value;
    });
    const low = total;
    const high = Math.round(total * 1.3);
    return { low, high };
  };

  const restart = () => {
    setStep(0);
    setAnswers([]);
    setMultiAnswers([]);
    setShowResult(false);
  };

  const { low, high } = calcPrice();

  return (
    <div className="min-h-screen pt-24 pb-20" style={{ backgroundColor: '#0a0f1a' }}>
      <div className="max-w-[600px] mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-primary mb-8 hover:underline">
          <ArrowLeft size={16} /> Zurück zur Startseite
        </Link>

        {!showResult ? (
          <>
            {/* Progress */}
            <div className="mb-9">
              <div className="flex justify-between text-xs text-white/50 mb-2 tracking-wide">
                <span>{q.step}</span>
                <span>{Math.round(progress)} %</span>
              </div>
              <div className="h-0.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-[hsl(190,100%,50%)] rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
              </div>
            </div>

            {/* Question card */}
            <div className="rounded-2xl p-8 border border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-300" style={{ backgroundColor: '#162233' }}>
              <p className="text-xs font-semibold tracking-[2px] uppercase text-primary mb-3">{q.step}</p>
              <h2 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>{q.title}</h2>
              <p className="text-sm text-white/50 mb-6 leading-relaxed">{q.sub}</p>

              <div className="flex flex-col gap-2">
                {q.options.map((opt, i) => (
                  <div
                    key={i}
                    onClick={() => selectOption(i)}
                    className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all duration-200 select-none
                      ${selected.includes(i) ? 'border-primary bg-primary/10' : 'border-white/10 bg-white/[0.02] hover:border-primary/40 hover:bg-primary/5'}`}
                  >
                    <span className="text-xl w-7 text-center shrink-0">{opt.icon}</span>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-white">{opt.label}</p>
                      <p className="text-xs text-white/50 mt-0.5">{opt.desc}</p>
                    </div>
                    <div className={`w-[18px] h-[18px] rounded-full border-[1.5px] flex items-center justify-center shrink-0 transition-all
                      ${selected.includes(i) ? 'bg-primary border-primary' : 'border-white/20'}`}>
                      {selected.includes(i) && <span className="text-[10px] font-extrabold" style={{ color: '#0d1b2a' }}>✓</span>}
                    </div>
                  </div>
                ))}
              </div>

              {/* Nav */}
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
                      ? 'bg-gradient-to-r from-primary to-[hsl(190,100%,50%)] text-secondary cursor-pointer hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5'
                      : 'bg-gradient-to-r from-primary to-[hsl(190,100%,50%)] text-secondary opacity-35 pointer-events-none'}`}
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Weiter →
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Result card */
          <div className="rounded-2xl p-9 border border-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-300" style={{ backgroundColor: '#162233' }}>
            <p className="text-xs font-semibold tracking-[2px] uppercase text-primary mb-2">Ihr Richtwert</p>
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
                  <span className="text-primary text-xs font-bold shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <a href="mailto:schlees.webdesign@gmail.com" className="block w-full text-center py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-primary to-[hsl(190,100%,50%)] text-secondary hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transition-all mb-2.5" style={{ fontFamily: "'Syne', sans-serif" }}>
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

export default PriceWebsite;
