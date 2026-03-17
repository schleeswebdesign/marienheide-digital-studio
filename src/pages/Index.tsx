import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import HexagonCanvas from "@/components/HexagonCanvas";
import joshImg from "@/assets/josh.jpg";
import miguelImg from "@/assets/miguel-klees.webp";
import {
  CalendarCheck, Laptop, Rocket,
  ChevronDown, Check, ArrowRight
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const steps = [
  { num: "01", icon: CalendarCheck, title: "Kostenloses Erstgespräch", desc: "Wir lernen uns kennen, verstehen euer Business und besprechen gemeinsam, was ihr wirklich braucht – ohne Fachchinesisch, ohne Druck." },
  { num: "02", icon: Laptop, title: "Wir bauen eure Website", desc: "In 1–3 Wochen entsteht eure moderne Website – mobiloptimiert, schnell und genau auf eure Branche zugeschnitten. Ihr seid bei jedem Schritt dabei." },
  { num: "03", icon: Rocket, title: "Livegang & Support", desc: "Eure Website geht live – und wir bleiben an eurer Seite. Mit Updates, Anpassungen und einem Ansprechpartner, der sich wirklich kümmert." },
];

const faqs = [
  { q: "Wie lange dauert die Erstellung einer Website?", a: "Einen einfachen One-Pager liefere ich in ca. 1-2 Wochen. Größere Projekte mit mehreren Seiten dauern 3-4 Wochen – je nach Umfang und wie schnell du mir Infos und Bilder schickst." },
  { q: "Was kostet eine Website?", a: "Meine Pakete starten ab 990€ für einen One-Pager. Den genauen Preis besprechen wir im kostenlosen Erstgespräch – ohne versteckte Kosten." },
  { q: "Ich habe keine Ahnung von Technik – ist das ein Problem?", a: "Überhaupt nicht! Du musst nichts verstehen. Ich kümmere mich um alles – von Design bis Livegang. Du sagst mir was du willst, ich mache es." },
  { q: "Was passiert nach dem Livegang?", a: "Ich biete laufende Betreuung an – Updates, kleine Änderungen, technischer Support. Auf Wunsch auch als monatliches Paket." },
  { q: "Kann ich meine alte Website ersetzen lassen?", a: "Ja! Genau das ist meine Spezialität – veraltete Websites durch moderne, schnelle Seiten ersetzen die wirklich Kunden bringen." },
];

const packages = [
  {
    name: "Starter",
    subtitle: "One-Pager",
    price: "ab 300 €",
    delivery: "ca. 2 Wochen",
    highlight: false,
    features: [
      "Responsive One-Page Website",
      "Modernes individuelles Design",
      "Kontaktformular",
      "Google Maps Integration",
      "SSL-Zertifikat & Hosting-Setup",
      "Grundlegende SEO-Einrichtung",
      "Performance-Optimierung",
      "1 Korrekturschleife",
    ],
  },
  {
    name: "Business",
    subtitle: "Mehrseitig (3–6 Seiten)",
    price: "ab 1000 €",
    delivery: "ca. 3–4 Wochen",
    highlight: true,
    features: [
      "Alles aus Starter",
      "3–6 individuell gestaltete Seiten",
      "Terminbuchungs-Integration (Calendly)",
      "Erweiterte SEO-Optimierung",
      "2 Korrekturschleifen",
      "30 Tage Support nach Livegang",
    ],
  },
];

const projects = [
  { name: "Grünwerk Oberberg", branch: "Garten & Landschaftsbau", url: "https://id-preview--70929813-767c-4033-9686-c33154e21e63.lovable.app" },
  { name: "Elektro Wagner", branch: "Elektriker", url: "https://id-preview--4bf3fca1-cb6c-4a47-8e36-fec3f00157e3.lovable.app" },
  { name: "Haarwerk Oberberg", branch: "Friseur", url: "https://id-preview--ec4acad4-58d0-41d1-b258-41806424f87f.lovable.app" },
];

const scrollTo = (id: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div id="top" className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden" style={{ backgroundColor: '#0a0f1a' }}>
        <HexagonCanvas opacity={0.12} interactive={true} />
        <div className="container-narrow relative" style={{ zIndex: 1 }}>
          <AnimatedSection>
            <div className="max-w-3xl">
              <h1 className="text-4xl leading-tight mb-6 text-left md:text-5xl font-semibold font-serif text-white" style={{ animation: 'hero-fade-in 0.9s ease-out 0.05s both' }}>
                Sie sind gut in Ihrem Job. Wir sorgen dafür, dass Ihre <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">Kunden</span> das auch wissen.
              </h1>
              <p className="md:text-[1.2rem] text-white/80 mb-10 max-w-2xl text-lg" style={{ lineHeight: 1.8, animation: 'hero-fade-in 0.9s ease-out 0.2s both' }}>
                Wir bauen Websites, die begeistern – egal ob Handwerk, Startup, Gastronomie oder Konzern. Modern, schnell und so gemacht, dass eure Kunden nicht mehr wegklicken.
              </p>
              <div className="flex flex-col sm:flex-row gap-4" style={{ animation: 'hero-fade-in 0.9s ease-out 0.35s both' }}>
                <Button size="xl" variant="hero" asChild className="hover:scale-[1.04] transition-transform duration-200" style={{ boxShadow: '0 8px 24px rgba(55, 138, 221, 0.35)' }}>
                  <a href="#kontakt" onClick={scrollTo("kontakt")}>Kostenloses Erstgespräch</a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Über uns */}
      <section className="relative section-padding bg-accent overflow-hidden">
        <HexagonCanvas opacity={0.06} interactive={false} />
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl md:text-4xl mb-6">Wer steckt dahinter?</h2>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  Wir sind Miguel und Josh – zwei junge Typen aus dem Oberbergischen Kreis mit Hunger darauf, etwas Eigenes aufzubauen. Unser Ziel: lokalen Unternehmen zu einer Website verhelfen, die wirklich was bringt. Kein Bullshit, keine überteuerten Agenturen. Einfach gute Arbeit.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="flex gap-6">
                <div className="flex-1 text-center">
                  <img src={joshImg} alt="Josh Schlief" className="rounded-2xl object-cover w-full aspect-[3/4]" />
                  <p className="font-bold text-secondary mt-3">Josh Schlief</p>
                  <p className="text-sm text-muted-foreground">Webdesign & Kundenberatung</p>
                </div>
                <div className="flex-1 text-center">
                  <img src={miguelImg} alt="Miguel Klees" className="rounded-2xl object-cover w-full aspect-[3/4]" />
                  <p className="font-bold text-secondary mt-3">Miguel Klees</p>
                  <p className="text-sm text-muted-foreground">Webdesign & Kundenberatung</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* So läuft's ab */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-4">So läuft's ab</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">In drei Schritten zur fertigen Website.</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.1}>
                <div className="relative">
                  <span className="text-6xl font-bold text-primary/10 absolute -top-4 -left-2">{step.num}</span>
                  <div className="relative pt-8 pl-2">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <step.icon size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Preise */}
      <section id="preise" className="section-padding" style={{ background: 'linear-gradient(180deg, #f8faff 0%, #eef4ff 100%)' }}>
        <div className="container-narrow">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Unsere Pakete</h2>
              <p className="text-muted-foreground text-lg">Transparent. Fair. Ohne versteckte Kosten.</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {packages.map((pkg, i) => (
              <div
                key={pkg.name}
                className="h-full flex flex-col relative rounded-2xl p-6 md:p-8 cursor-pointer"
                style={{
                  background: pkg.highlight ? '#ffffff' : 'hsl(var(--muted))',
                  border: pkg.highlight ? '2px solid #7DD3FC' : '2px solid transparent',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                  transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                  opacity: 0,
                  animation: `hero-fade-in 0.9s ease-out ${i === 0 ? '0.1s' : '0.25s'} forwards`,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 28px 80px rgba(0,0,0,0.14)'; e.currentTarget.style.transform = 'translateY(-6px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.08)'; e.currentTarget.style.transform = 'none'; }}
                onMouseDown={(e) => { e.currentTarget.style.transform = 'translateY(2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.06)'; }}
                onMouseUp={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 28px 80px rgba(0,0,0,0.14)'; }}
              >
                {pkg.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-4 py-1 rounded-full" style={{ backgroundColor: '#E6F1FB', color: '#7DD3FC' }}>
                    Beliebteste Wahl
                  </span>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-secondary">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground">{pkg.subtitle}</p>
                </div>
                <div className="mb-6">
                  <span className="text-3xl font-bold" style={{ color: pkg.highlight ? '#7DD3FC' : undefined }}>{pkg.price}</span>
                  <p className="text-xs text-muted-foreground mt-1">Lieferzeit: {pkg.delivery}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                      <Check size={16} className="text-primary mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  className="w-full transition-all duration-200 hover:opacity-85 hover:-translate-y-0.5"
                  style={pkg.highlight ? { backgroundColor: '#7DD3FC', color: '#ffffff' } : { backgroundColor: '#1e3a5f', color: '#ffffff' }}
                  asChild
                >
                  <a href="#kontakt" onClick={scrollTo("kontakt")}>
                    Angebot anfordern
                    <ArrowRight size={16} />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referenzen / Portfolio */}
      <section id="referenzen" className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">So könnte Ihre Website aussehen</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Beispiele aus verschiedenen Branchen – modern, schnell und mobiloptimiert.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <AnimatedSection key={project.name} delay={i * 0.1}>
                <div className="card-base h-full flex flex-col rounded-2xl shadow-md overflow-hidden">
                  <div className="w-full h-[300px] overflow-hidden bg-muted">
                    <iframe
                      src={project.url}
                      title={project.name}
                      className="w-full h-full border-0 pointer-events-none"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 flex flex-col gap-3">
                    <p className="text-lg font-bold text-foreground">{project.name}</p>
                    <Badge variant="secondary" className="w-fit">{project.branch}</Badge>
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="w-full">
                        Live ansehen →
                      </Button>
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="section-padding bg-accent">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-4">Kostenloses Erstgespräch</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Erzählen Sie uns von Ihrem Projekt – wir melden uns innerhalb von 24 Stunden.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-4">Häufige Fragen</h2>
            </div>
          </AnimatedSection>
          <div className="max-w-2xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="card-base !p-0 overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-5 text-left"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="font-semibold text-secondary pr-4">{faq.q}</span>
                    <ChevronDown size={20} className={`text-muted-foreground shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
