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
{ num: "01", icon: CalendarCheck, title: "Kostenloses Erstgespräch", desc: "Wir lernen uns kennen, ich verstehe dein Business und wir besprechen was du brauchst." },
{ num: "02", icon: Laptop, title: "Ich baue deine Website", desc: "In 1-3 Wochen entsteht deine moderne Website – mobiloptimiert und auf deine Branche zugeschnitten." },
{ num: "03", icon: Rocket, title: "Livegang & Support", desc: "Deine Website geht live. Ich begleite dich danach mit Updates und Support." }];


const faqs = [
{ q: "Wie lange dauert die Erstellung einer Website?", a: "Je nach Umfang zwischen 2 und 6 Wochen. Einen einfachen One-Pager können wir oft schon in unter 2 Wochen fertigstellen." },
{ q: "Was kostet eine Website?", a: "Unsere Pakete starten ab einem niedrigen vierstelligen Betrag. Den genauen Preis besprechen wir nach der Bedarfsanalyse – transparent und ohne versteckte Kosten." },
{ q: "Muss ich eigene Texte und Bilder liefern?", a: "Das ist optional. Wir bieten professionelle Texterstellung und Bildbearbeitung als Add-on an, damit Sie sich um nichts kümmern müssen." },
{ q: "Bieten Sie auch laufende Betreuung an?", a: "Ja. Von regelmäßigen Updates über technische Wartung bis hin zu inhaltlichen Änderungen – wir sind auch nach dem Livegang für Sie da." }];


const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/50 to-transparent pointer-events-none" />
        <div className="container-narrow relative">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                Moderne Websites für Marienheide, die Kunden gewinnen.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
                Wir bauen schnelle, mobiloptimierte Websites für lokale Dienstleister – klar, bezahlbar, professionell.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="xl" variant="hero" asChild>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl md:text-4xl mb-6">Wer steckt dahinter?</h2>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                  Ich bin Miguel, 20 Jahre alt aus Marienheide. Als junger Gründer kenne ich die Region und weiß wie wichtig eine starke Online-Präsenz für lokale Unternehmen ist. Mein Ziel: Moderne, bezahlbare Websites die wirklich Kunden bringen – ohne Agentur-Preise.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <img src={miguelImg} alt="Miguel – Gründer" className="rounded-2xl object-cover w-full h-auto max-h-[280px] md:max-h-none" />
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