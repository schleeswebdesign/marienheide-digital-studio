import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";
import {
  Search, Zap, TrendingUp, MessageSquare, Palette, Rocket,
  ChevronDown, Star, ArrowRight } from
"lucide-react";
import { useState } from "react";

const whyUsCards = [
{ icon: Search, title: "Google-Sichtbarkeit", desc: "Wir optimieren Ihre Website für lokale Suchergebnisse – damit Kunden aus Marienheide und Umgebung Sie finden." },
{ icon: Zap, title: "Schnell online", desc: "In wenigen Wochen steht Ihre professionelle Website. Kein monatelanges Warten, sondern schnelle Ergebnisse." },
{ icon: TrendingUp, title: "Mehr Anfragen", desc: "Klare Struktur, starke Call-to-Actions und mobiloptimiertes Design sorgen für messbar mehr Kundenanfragen." }];


const steps = [
{ num: "01", icon: MessageSquare, title: "Beratung", desc: "Wir lernen Ihr Geschäft kennen und besprechen Ihre Ziele in einem kostenlosen Erstgespräch." },
{ num: "02", icon: Palette, title: "Design & Umsetzung", desc: "Wir gestalten und entwickeln Ihre Website – modern, schnell und auf Ihre Branche zugeschnitten." },
{ num: "03", icon: Rocket, title: "Livegang & Betreuung", desc: "Ihre Website geht live. Danach betreuen wir Sie mit Updates, Wartung und Support." }];


const references = [
{ branch: "GaLaBau", title: "Garten & Landschaftsbau Müller", result: "+45 % mehr Anfragen über Google", tags: ["One-Pager", "SEO", "Kontaktformular"] },
{ branch: "Elektro", title: "Elektro Schmidt Marienheide", result: "3x mehr Terminbuchungen", tags: ["Mehrseitig", "Terminbuchung", "SEO"] },
{ branch: "Friseur", title: "Salon Haargenau", result: "Online-Buchungen statt Telefonwarteschlange", tags: ["One-Pager", "Online-Buchung", "Mobile First"] }];


const testimonials = [
{ name: "Thomas M.", role: "Geschäftsführer, GaLaBau", text: "Endlich eine Website, die zu unserem Betrieb passt. Seit dem Relaunch bekommen wir deutlich mehr Anfragen aus der Region." },
{ name: "Sandra K.", role: "Inhaberin, Friseursalon", text: "Die Zusammenarbeit war super unkompliziert. Unsere Kunden buchen jetzt direkt online – das spart uns enorm viel Zeit." },
{ name: "Michael W.", role: "Elektromeister", text: "Professionell, schnell und fair im Preis. Ich kann die Agentur jedem Handwerker empfehlen, der online sichtbar sein will." }];


const faqs = [
{ q: "Wie lange dauert die Erstellung einer Website?", a: "Je nach Umfang zwischen 2 und 6 Wochen. Einen einfachen One-Pager können wir oft schon in 2 Wochen fertigstellen." },
{ q: "Was kostet eine Website?", a: "Unsere Pakete starten ab einem niedrigen vierstelligen Betrag. Den genauen Preis besprechen wir nach der Bedarfsanalyse – transparent und ohne versteckte Kosten." },
{ q: "Muss ich eigene Texte und Bilder liefern?", a: "Das ist optional. Wir bieten professionelle Texterstellung und Bildbearbeitung als Add-on an, damit Sie sich um nichts kümmern müssen." },
{ q: "Bieten Sie auch laufende Betreuung an?", a: "Ja. Von regelmäßigen Updates über technische Wartung bis hin zu inhaltlichen Änderungen – wir sind auch nach dem Livegang für Sie da." }];


const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

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
                <Button size="xl" variant="heroOutline" asChild>
                  <Link to="/referenzen">
                    Referenzen ansehen
                    <ArrowRight size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Warum wir */}
      <section className="section-padding bg-accent">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-4">Warum mit uns arbeiten?</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Drei Gründe, die den Unterschied machen.</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyUsCards.map((card, i) =>
            <AnimatedSection key={card.title} delay={i * 0.1}>
                <div className="card-base text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <card.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl mb-3">{card.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{card.desc}</p>
                </div>
              </AnimatedSection>
            )}
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

      {/* Referenzen Teaser */}
      <section className="section-padding bg-accent">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-4">Unsere Referenzen</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Erfolgsgeschichten lokaler Unternehmen.</p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {references.map((ref, i) =>
            <AnimatedSection key={ref.branch} delay={i * 0.1}>
                <div className="card-base h-full flex flex-col">
                  <div className="w-full h-40 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl mb-5 flex items-center justify-center">
                    <span className="text-sm font-medium text-primary/40">{ref.branch}</span>
                  </div>
                  <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">{ref.branch}</p>
                  <h3 className="text-lg mb-2">{ref.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">{ref.result}</p>
                  <div className="flex flex-wrap gap-2">
                    {ref.tags.map((tag) =>
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">{tag}</span>
                  )}
                  </div>
                </div>
              </AnimatedSection>
            )}
          </div>
          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/referenzen">
                Alle Referenzen ansehen
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl mb-4">Das sagen unsere Kunden</h2>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="max-w-2xl mx-auto">
              <div className="card-base text-center py-10 px-8">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) =>
                  <Star key={i} size={20} className="text-primary fill-primary" />
                  )}
                </div>
                <p className="text-lg text-foreground leading-relaxed mb-6 italic">
                  „{testimonials[testimonialIdx].text}"
                </p>
                <p className="font-semibold text-secondary">{testimonials[testimonialIdx].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[testimonialIdx].role}</p>
                <div className="flex justify-center gap-2 mt-6">
                  {testimonials.map((_, i) =>
                  <button
                    key={i}
                    onClick={() => setTestimonialIdx(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${i === testimonialIdx ? 'bg-primary' : 'bg-border'}`}
                    aria-label={`Testimonial ${i + 1}`} />

                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-accent">
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

      {/* Kontakt */}
      <section id="kontakt" className="section-padding bg-background">
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
    </div>);

};

export default Index;