import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";
import HexagonCanvas from "@/components/HexagonCanvas";
import joshImg from "@/assets/josh.jpg";
import miguelImg from "@/assets/miguel-klees.webp";
import {
  Search, Lightbulb, Palette, Code, Rocket,
  Check, ArrowRight, Mail, MessageCircle, Phone
} from "lucide-react";

const steps = [
  { num: "01", icon: Search, title: "Analyse", desc: "Ziele & Zielgruppe verstehen" },
  { num: "02", icon: Lightbulb, title: "Konzept", desc: "Struktur & Strategie entwickeln" },
  { num: "03", icon: Palette, title: "Design", desc: "Visuelles Erscheinungsbild" },
  { num: "04", icon: Code, title: "Umsetzung", desc: "Technische Realisierung" },
  { num: "05", icon: Rocket, title: "Launch", desc: "Live-Schaltung & Optimierung" },
];

const projects = [
  { name: "Grünwerk Oberberg (Demo)", branch: "Garten & Landschaftsbau", url: "https://id-preview--70929813-767c-4033-9686-c33154e21e63.lovable.app" },
  { name: "Elektro Oberberg (Demo)", branch: "Elektriker", url: "https://id-preview--4bf3fca1-cb6c-4a47-8e36-fec3f00157e3.lovable.app" },
  { name: "Haarwerk Oberberg (Demo)", branch: "Friseur", url: "https://id-preview--ec4acad4-58d0-41d1-b258-41806424f87f.lovable.app" },
];

const features = [
  "Moderne Unternehmenswebsite",
  "Individuelles professionelles Design",
  "Kontaktformular",
  "Grundlegende SEO-Optimierung",
  "Hosting & laufende Betreuung",
];

const scrollTo = (id: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

function VapiButton() {
  const [status, setStatus] = React.useState<'idle' | 'connecting' | 'active'>('idle');
  const vapiRef = React.useRef<any>(null);

  const toggle = async () => {
    if (status === 'active') {
      vapiRef.current?.stop();
      return;
    }
    setStatus('connecting');
    if (!vapiRef.current) {
      const { default: Vapi } = await import('https://cdn.jsdelivr.net/npm/@vapi-ai/web/dist/vapi.mjs' as any);
      vapiRef.current = new Vapi('e4df177d-71b8-4217-83b1-2bba195fc07f');
      vapiRef.current.on('call-start', () => setStatus('active'));
      vapiRef.current.on('call-end', () => setStatus('idle'));
      vapiRef.current.on('error', () => setStatus('idle'));
    }
    vapiRef.current.start('1d369f6c-b92a-4122-ae2c-717abc31ec7e');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <div style={{ position: 'relative', width: 64, height: 64 }}>
        {status === 'active' && [0, 0.6, 1.2].map((delay, i) => (
          <span
            key={i}
            style={{
              position: 'absolute', inset: 0, borderRadius: '50%',
              border: '2px solid #6D28D9', opacity: 0,
              animation: `vapi-pulse 2s ease-out ${delay}s infinite`,
            }}
          />
        ))}
        <button
          onClick={toggle}
          style={{
            width: 64, height: 64, borderRadius: '50%',
            background: status === 'active' ? '#6D28D9' : '#7DD3FC',
            border: 'none', cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            position: 'relative', zIndex: 1,
            transition: 'background 0.3s',
          }}
        >
          <Phone size={24} color="#fff" />
        </button>
      </div>
      <span style={{ fontSize: 13, fontWeight: 600, color: status === 'active' ? '#6D28D9' : '#64748B' }}>
        {status === 'idle' ? 'Teste mich' : status === 'connecting' ? 'Verbinde...' : 'KI hört zu...'}
      </span>
      {status === 'active' && (
        <button onClick={() => vapiRef.current?.stop()} style={{ fontSize: 11, color: '#6D28D9', background: 'none', border: '1px solid #A78BFA', borderRadius: 20, padding: '3px 12px', cursor: 'pointer' }}>
          Beenden
        </button>
      )}
      <style>{`@keyframes vapi-pulse { 0% { opacity: 0.5; transform: scale(1); } 100% { opacity: 0; transform: scale(2.5); } }`}</style>
    </div>
  );
}

const Index = () => {
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
                Digitale Präsenz, die überzeugt – für lokale Unternehmen und Selbständige, die online mehr erreichen wollen!
              </p>
              <div className="flex flex-col sm:flex-row gap-4" style={{ animation: 'hero-fade-in 0.9s ease-out 0.35s both' }}>
                <Button size="xl" variant="hero" asChild style={{ boxShadow: '0 8px 24px rgba(55, 138, 221, 0.35)' }}>
                  <a href="#kontakt" onClick={scrollTo("kontakt")}>Jetzt durchstarten →</a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Über uns */}
      <section id="vision" className="relative section-padding bg-accent overflow-hidden">
        <HexagonCanvas opacity={0.06} interactive={false} />
        <div className="container-narrow relative" style={{ zIndex: 1 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl md:text-4xl mb-6">Unsere Vision</h2>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  Verwurzelt im Oberbergischen, offen für jeden. Wir glauben dass gutes Webdesign kein Luxus ist – und das beweisen wir mit jedem Projekt.
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

      {/* Preise */}
      <section id="angebot" className="relative section-padding overflow-hidden" style={{ background: 'linear-gradient(180deg, #f8faff 0%, #eef4ff 100%)' }}>
        <HexagonCanvas opacity={0.06} interactive={false} />
        <div className="container-narrow relative" style={{ zIndex: 1 }}>
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Unser Angebot</h2>
              <p className="text-muted-foreground text-lg">Transparent. Fair. Ohne versteckte Kosten.</p>
            </div>
          </AnimatedSection>
          <div className="max-w-lg mx-auto">
            <div
              className="flex flex-col relative rounded-2xl p-6 md:p-8"
              style={{
                background: '#ffffff',
                border: '2px solid #7DD3FC',
                boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                animation: 'hero-fade-in 0.9s ease-out 0.1s forwards',
                opacity: 0,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 28px 80px rgba(0,0,0,0.14)'; e.currentTarget.style.transform = 'translateY(-6px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.08)'; e.currentTarget.style.transform = 'none'; }}
              onMouseDown={(e) => { e.currentTarget.style.transform = 'translateY(2px)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.06)'; }}
              onMouseUp={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 28px 80px rgba(0,0,0,0.14)'; }}
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-secondary">Webauftritt</h3>
                <p className="text-sm text-muted-foreground">Ihr professioneller Online-Auftritt – modern, schnell und auf Ihr Unternehmen zugeschnitten.</p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold" style={{ color: '#7DD3FC' }}>500 €</span>
                <p className="text-xs text-muted-foreground mt-1">zzgl. 100 € / mtl. für Hosting und laufende Betreuung</p>
              </div>
              <ul className="space-y-3 mb-8">
                {features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="w-full"
                style={{ backgroundColor: '#7DD3FC', color: '#ffffff' }}
                asChild
              >
                <a href="#kontakt" onClick={scrollTo("kontakt")}>
                  Jetzt Webauftritt starten!
                  <ArrowRight size={16} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Wie funktioniert's? */}
      <section id="prozess" className="relative section-padding bg-background overflow-hidden">
        <HexagonCanvas opacity={0.06} interactive={false} />
        <div className="container-narrow relative" style={{ zIndex: 1 }}>
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-4">Wie funktioniert's?</h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
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

      {/* Referenzen */}
      <section id="referenzen" className="relative section-padding bg-background overflow-hidden">
        <HexagonCanvas opacity={0.06} interactive={false} />
        <div className="container-narrow relative" style={{ zIndex: 1 }}>
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">So könnte Ihre Website aussehen</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Moderne Websites aus verschiedenen Branchen – individuell gestaltet, schnell und mobiloptimiert.
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

      {/* Kontakt – Lassen Sie uns sprechen */}
      <section id="kontakt" className="relative section-padding overflow-hidden" style={{ backgroundColor: '#0a0f1a' }}>
        <HexagonCanvas opacity={0.12} interactive={true} />
        <div className="container-narrow relative" style={{ zIndex: 1 }}>
          <AnimatedSection>
            <div className="text-center mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Jetzt durchstarten →</h2>
              <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
                Bereit für eine Website, die wirklich was bringt? Schreiben Sie uns – wir melden uns innerhalb von 24 Stunden.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="max-w-md mx-auto flex flex-col gap-4">
              <a
                href="mailto:schlees.webdesign@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="hero" className="w-full" style={{ boxShadow: '0 8px 24px rgba(55, 138, 221, 0.35)' }}>
                  <Mail size={20} />
                  Kontaktieren Sie uns per Mail
                </Button>
              </a>
              <a
                href="https://wa.me/491604809564"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="w-full" style={{ backgroundColor: '#ffffff', color: '#0a1628', boxShadow: '0 8px 24px rgba(10, 22, 40, 0.15)' }}>
                  <MessageCircle size={20} style={{ color: '#0a1628' }} />
                  Kontaktieren Sie uns per <span style={{ color: '#25D366' }}>WhatsApp</span>
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Index;
