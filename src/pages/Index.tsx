import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";
import HexagonCanvas from "@/components/HexagonCanvas";
import joshImg from "@/assets/josh.jpg";
import miguelImg from "@/assets/miguel-klees.webp";
import {
  Search, Lightbulb, Palette, Code, Rocket,
  Check, ArrowRight, Mail, MessageCircle
} from "lucide-react";
import PortfolioShowcase from "@/components/PortfolioShowcase";

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

      {/* Über uns / Team */}
      <section id="vision" className="relative section-padding bg-accent overflow-hidden">
        <HexagonCanvas opacity={0.06} interactive={false} />
        <div className="container-narrow relative" style={{ zIndex: 1 }}>
          <AnimatedSection>
            <div className="mb-14">
              <p className="text-xs font-semibold tracking-[3px] uppercase text-primary mb-3">Das Team</p>
              <h2 className="text-3xl md:text-4xl mb-4">Zwei Köpfe. Eine Mission.</h2>
              <p className="text-muted-foreground text-base max-w-xl leading-relaxed">
                Verwurzelt im Oberbergischen – wir glauben, dass gutes Webdesign kein Luxus ist. Das beweisen wir mit jedem Projekt.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamMembers.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.15}>
                <div className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-20 h-20 rounded-xl bg-primary/10 mb-6 overflow-hidden">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-secondary">{member.name}</h3>
                    <p className="text-sm font-medium text-primary">{member.role}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{member.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-accent text-muted-foreground">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 pt-4 border-t border-border">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-xs text-muted-foreground">{member.experience}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Angebot / Pakete */}
      <section id="angebot" className="relative section-padding overflow-hidden" style={{ background: 'linear-gradient(180deg, #f8faff 0%, #eef4ff 100%)' }}>
        <HexagonCanvas opacity={0.06} interactive={false} />
        <div className="container-narrow relative" style={{ zIndex: 1 }}>
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold tracking-[3px] uppercase text-primary mb-3">Unser Angebot</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent. Fair. Ohne versteckte Kosten.</h2>
              <p className="text-muted-foreground text-base max-w-lg mx-auto leading-relaxed">
                Kein Einheitspreis – Ihr Projekt ist einzigartig. Berechnen Sie in wenigen Klicks Ihren persönlichen Richtwert.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {packages.map((pkg, i) => (
              <AnimatedSection key={pkg.id} delay={i * 0.15}>
                <div className={`relative rounded-2xl border-2 ${pkg.borderClass} bg-card p-8 flex flex-col h-full`}>
                  <span className={`absolute -top-3 left-8 text-xs font-bold px-3 py-1 rounded-full ${pkg.badgeClass}`}>
                    {pkg.badge}
                  </span>
                  <div className="mb-6 mt-2">
                    <div className="text-3xl mb-3">{pkg.icon}</div>
                    <h3 className="text-xl font-bold text-secondary mb-2">{pkg.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{pkg.subtitle}</p>
                  </div>
                  <div className="mb-6 py-4 border-t border-b border-border">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Preis</p>
                    <p className="text-sm font-semibold text-secondary">Preis abhängig von Ihrem Projekt</p>
                    <p className="text-xs text-muted-foreground mt-1">zzgl. 100 € / mtl. für Hosting &amp; Betreuung</p>
                  </div>
                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map(f => (
                      <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                        <Check size={16} className="text-primary mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button size="lg" className={`w-full ${pkg.btnClass}`} asChild>
                    <Link to={pkg.href}>
                      Preis berechnen
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-8">
            Beide Pakete beinhalten eine persönliche Beratung vor dem Start. Wir melden uns innerhalb von 24 Stunden.
          </p>
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

      {/* Referenzen – Portfolio Showcase */}
      <PortfolioShowcase />

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
