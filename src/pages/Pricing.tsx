import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const packages = [
  {
    name: "Starter",
    subtitle: "One-Pager",
    price: "ab 990 €",
    delivery: "ca. 2 Wochen",
    highlight: false,
    features: [
      "Responsive One-Page Website",
      "Modernes, individuelles Design",
      "Kontaktformular",
      "Google Maps Integration",
      "SSL-Zertifikat & Hosting-Setup",
      "Grundlegende SEO-Einrichtung",
      "1 Korrekturschleife",
      "Einweisung ins CMS",
    ],
  },
  {
    name: "Business",
    subtitle: "Mehrseitig (3–6 Seiten)",
    price: "ab 2.490 €",
    delivery: "ca. 3–4 Wochen",
    highlight: true,
    features: [
      "Alles aus Starter",
      "3–6 individuell gestaltete Seiten",
      "Blog- oder News-Bereich",
      "Erweiterte SEO-Optimierung",
      "Terminbuchungs-Integration",
      "Performance-Optimierung",
      "2 Korrekturschleifen",
      "30 Tage Support nach Livegang",
    ],
  },
];

const Pricing = () => (
  <div className="min-h-screen pt-24">
    {/* Header */}
    <section className="section-padding bg-accent">
      <div className="container-narrow text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Transparente Preise</h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Faire Pakete für jeden Bedarf – ohne versteckte Kosten.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Packages */}
    <section className="section-padding !pb-12 md:!pb-16 bg-background">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {packages.map((pkg, i) => (
            <AnimatedSection key={pkg.name} delay={i * 0.1}>
              <div
                className="h-full flex flex-col relative rounded-2xl p-6 md:p-8 cursor-pointer"
                style={{
                  background: pkg.highlight ? '#ffffff' : 'hsl(var(--muted))',
                  border: pkg.highlight ? '2px solid #378ADD' : '2px solid transparent',
                  boxShadow: pkg.highlight ? '6px 6px 0px #378ADD' : '6px 6px 0px #888780',
                  transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = pkg.highlight ? '10px 10px 0px #378ADD' : '10px 10px 0px #888780';
                  e.currentTarget.style.transform = 'translateX(-2px) translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = pkg.highlight ? '6px 6px 0px #378ADD' : '6px 6px 0px #888780';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                {pkg.highlight && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-4 py-1 rounded-full"
                    style={{ backgroundColor: '#E6F1FB', color: '#185FA5' }}
                  >
                    Beliebteste Wahl
                  </span>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-secondary">{pkg.name}</h3>
                  <p className="text-sm text-muted-foreground">{pkg.subtitle}</p>
                </div>
                <div className="mb-6">
                  <span className="text-3xl font-bold" style={{ color: pkg.highlight ? '#185FA5' : undefined }}>
                    {pkg.price}
                  </span>
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
                  className="w-full"
                  style={pkg.highlight
                    ? { backgroundColor: '#378ADD', color: '#ffffff' }
                    : { backgroundColor: 'transparent', border: '2px solid hsl(var(--muted-foreground))', color: 'hsl(var(--muted-foreground))' }
                  }
                  asChild
                >
                  <Link to="/#kontakt">
                    Angebot anfordern
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Pricing;
