import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import miguelImg from "@/assets/miguel.png";
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
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden" style={{ background: 'linear-gradient(180deg, #f8faff 0%, #eef4ff 100%)' }}>
        {/* Animated blur circles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-[500px] h-[500px] rounded-full top-[-10%] left-[-5%] animate-hero-blob-1" style={{ background: 'rgba(55, 138, 221, 0.06)', filter: 'blur(80px)' }} />
          <div className="absolute w-[400px] h-[400px] rounded-full top-[20%] right-[-8%] animate-hero-blob-2" style={{ background: 'rgba(55, 138, 221, 0.07)', filter: 'blur(90px)' }} />
          <div className="absolute w-[350px] h-[350px] rounded-full bottom-[-5%] left-[30%] animate-hero-blob-3" style={{ background: 'rgba(55, 138, 221, 0.05)', filter: 'blur(70px)' }} />
        </div>
        <div className="container-narrow relative">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h1 className="text-4xl leading-tight mb-6 text-left md:text-5xl font-semibold font-serif mx-0 py-[20px] my-0 px-[20px]">
                ​Sie sind gut in Ihrem Job. Wir sorgen dafür, dass Ihre <span className="bg-gradient-to-r from-[#378ADD] to-[#185FA5] bg-clip-text text-transparent">Kunden</span> das auch wissen.
              </h1>
              <p className="md:text-[1.2rem] text-muted-foreground mb-10 max-w-2xl text-lg" style={{ lineHeight: 1.8 }}>
                Wir bauen schnelle, mobiloptimierte Websites für lokale Dienstleister – klar, bezahlbar, professionell.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" variant="hero" asChild className="hover:scale-[1.04] transition-transform duration-200" style={{ boxShadow: '0 8px 24px rgba(55, 138, 221, 0.35)' }}>
                  <a href="#kontakt">Kostenloses Erstgespräch</a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Über uns */}
      <section className="section-padding bg-accent">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl md:text-4xl mb-6">Wer steckt dahinter?</h2>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  Ich bin Miguel, 20 Jahre alt aus Marienheide. Als junger Gründer kenne ich die Region und weiß wie wichtig eine starke Online-Präsenz für lokale Unternehmen ist. Mein Ziel: Moderne, bezahlbare Websites die wirklich Kunden bringen – ohne Agentur-Preise.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="flex items-start">
                <img src={miguelImg} alt="Miguel – Gründer" className="rounded-2xl object-cover w-auto max-h-[160px] md:max-h-[180px]" />
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