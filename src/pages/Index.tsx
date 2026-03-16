import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import joshImg from "@/assets/josh.jpg";
import miguelImg from "@/assets/miguel-klees.webp";
import {
  CalendarCheck, Laptop, Rocket,
  ChevronDown } from
"lucide-react";
import { useState } from "react";

const steps = [
{ num: "01", icon: CalendarCheck, title: "Kostenloses Erstgespräch", desc: "Wir lernen uns kennen, verstehen euer Business und besprechen gemeinsam, was ihr wirklich braucht – ohne Fachchinesisch, ohne Druck." },
{ num: "02", icon: Laptop, title: "Wir bauen eure Website", desc: "In 1–3 Wochen entsteht eure moderne Website – mobiloptimiert, schnell und genau auf eure Branche zugeschnitten. Ihr seid bei jedem Schritt dabei." },
{ num: "03", icon: Rocket, title: "Livegang & Support", desc: "Eure Website geht live – und wir bleiben an eurer Seite. Mit Updates, Anpassungen und einem Ansprechpartner, der sich wirklich kümmert." }];


const faqs = [
{ q: "Wie lange dauert die Erstellung einer Website?", a: "Einen einfachen One-Pager liefere ich in ca. 1-2 Wochen. Größere Projekte mit mehreren Seiten dauern 3-4 Wochen – je nach Umfang und wie schnell du mir Infos und Bilder schickst." },
{ q: "Was kostet eine Website?", a: "Meine Pakete starten ab 990€ für einen One-Pager. Den genauen Preis besprechen wir im kostenlosen Erstgespräch – ohne versteckte Kosten." },
{ q: "Ich habe keine Ahnung von Technik – ist das ein Problem?", a: "Überhaupt nicht! Du musst nichts verstehen. Ich kümmere mich um alles – von Design bis Livegang. Du sagst mir was du willst, ich mache es." },
{ q: "Was passiert nach dem Livegang?", a: "Ich biete laufende Betreuung an – Updates, kleine Änderungen, technischer Support. Auf Wunsch auch als monatliches Paket." },
{ q: "Kann ich meine alte Website ersetzen lassen?", a: "Ja! Genau das ist meine Spezialität – veraltete Websites durch moderne, schnelle Seiten ersetzen die wirklich Kunden bringen." }];


const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-secondary">
        <div className="container-narrow relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h1 className="text-4xl leading-tight mb-6 text-left md:text-5xl font-semibold font-serif text-white" style={{ animation: 'hero-fade-in 0.9s ease-out 0.05s both' }}>
                  Sie sind gut in Ihrem Job. Wir sorgen dafür, dass Ihre <span className="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent">Kunden</span> das auch wissen.
                </h1>
                <p className="md:text-[1.2rem] text-white/80 mb-10 max-w-2xl text-lg" style={{ lineHeight: 1.8, animation: 'hero-fade-in 0.9s ease-out 0.2s both' }}>
                  Wir bauen Websites, die begeistern – egal ob Handwerk, Startup, Gastronomie oder Konzern. Modern, schnell und so gemacht, dass eure Kunden nicht mehr wegklicken.
                </p>
                <div className="flex flex-col sm:flex-row gap-4" style={{ animation: 'hero-fade-in 0.9s ease-out 0.35s both' }}>
                  <Button size="xl" variant="hero" asChild className="hover:scale-[1.04] transition-transform duration-200" style={{ boxShadow: '0 8px 24px rgba(55, 138, 221, 0.35)' }}>
                    <a href="#kontakt">Kostenloses Erstgespräch</a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <img
                src="/234234.png"
                alt="Modernes Büro-Interieur"
                className="w-full h-auto object-cover rounded-2xl"
                style={{ objectPosition: 'right center', boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Über uns */}
      <section className="section-padding bg-accent">
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
            {steps.map((step, i) =>
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
            )}
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
            {faqs.map((faq, i) =>
            <AnimatedSection key={i} delay={i * 0.05}>
                <div className="card-base !p-0 overflow-hidden">
                  <button
                  className="w-full flex items-center justify-between p-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  
                    <span className="font-semibold text-secondary pr-4">{faq.q}</span>
                    <ChevronDown
                    size={20}
                    className={`text-muted-foreground shrink-0 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} />
                  
                  </button>
                  {openFaq === i &&
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </div>
                }
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>
    </div>);

};

export default Index;