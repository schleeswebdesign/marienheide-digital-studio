import { useState } from "react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { X, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const categories = ["Alle", "Handwerk", "Gastro", "Dienstleister"];

const projects = [
  {
    id: 1, branch: "Handwerk", company: "Garten & Landschaftsbau Müller", result: "+45 % mehr Anfragen über Google",
    tags: ["One-Pager", "SEO", "Kontaktformular"],
    problem: "Keine Online-Präsenz, Kunden fanden den Betrieb nur über Mundpropaganda.",
    solution: "Moderner One-Pager mit SEO-Optimierung für lokale Suchanfragen und integriertem Kontaktformular.",
    outcome: "45 % mehr Anfragen über Google innerhalb von 3 Monaten nach Livegang.",
  },
  {
    id: 2, branch: "Handwerk", company: "Elektro Schmidt Marienheide", result: "3x mehr Terminbuchungen",
    tags: ["Mehrseitig", "Terminbuchung", "SEO"],
    problem: "Veraltete Website ohne Terminbuchung, hoher Aufwand durch Telefon-Koordination.",
    solution: "Mehrseitige Website mit Online-Terminbuchung, Leistungsübersicht und Google-Optimierung.",
    outcome: "Verdreifachung der Online-Terminbuchungen, deutlich weniger Telefonaufwand.",
  },
  {
    id: 3, branch: "Dienstleister", company: "Salon Haargenau", result: "Online-Buchungen statt Telefonwarteschlange",
    tags: ["One-Pager", "Online-Buchung", "Mobile First"],
    problem: "Kunden mussten telefonisch Termine vereinbaren – oft lange Wartezeiten.",
    solution: "Schlanker One-Pager mit direkter Online-Buchung, optimiert für Smartphones.",
    outcome: "80 % der Termine werden jetzt online gebucht, Kundenzufriedenheit gestiegen.",
  },
  {
    id: 4, branch: "Gastro", company: "Ristorante Da Marco", result: "+60 % Reservierungen am Wochenende",
    tags: ["Mehrseitig", "Speisekarte", "Reservierung"],
    problem: "Keine aktuelle Speisekarte online, Reservierungen nur telefonisch.",
    solution: "Responsive Website mit digitaler Speisekarte, Reservierungssystem und Bildergalerie.",
    outcome: "60 % mehr Reservierungen an Wochenenden, weniger No-Shows durch Bestätigungsmails.",
  },
  {
    id: 5, branch: "Handwerk", company: "Malerbetrieb Jansen", result: "Regionale Marktführerschaft online",
    tags: ["Mehrseitig", "SEO", "Referenzgalerie"],
    problem: "Gute Arbeit, aber online nicht sichtbar. Konkurrenz dominierte die Google-Ergebnisse.",
    solution: "Professionelle Website mit Referenzgalerie, Kundenbewertungen und lokaler SEO-Strategie.",
    outcome: 'Platz 1 bei Google für "Maler Marienheide" innerhalb von 4 Monaten.',
  },
  {
    id: 6, branch: "Gastro", company: "Café Bergblick", result: "Neue Zielgruppe erreicht",
    tags: ["One-Pager", "Social Media", "Fotografie"],
    problem: "Nur bei Stammgästen bekannt, keine Sichtbarkeit bei Touristen und Wanderern.",
    solution: "Einladender One-Pager mit professionellen Fotos, Google Maps Integration und Social-Media-Verknüpfung.",
    outcome: "Spürbar mehr Laufkundschaft durch Wanderer und Tagesausflügler.",
  },
  {
    id: 7, branch: "Dienstleister", company: "Steuerberatung Weber", result: "Professioneller Auftritt, mehr Mandate",
    tags: ["Mehrseitig", "Kontaktformular", "SEO"],
    problem: "Website aus den 2000ern, wirkte unseriös und war nicht mobil nutzbar.",
    solution: "Seriöser, moderner Webauftritt mit klarer Leistungsübersicht und sicheren Kontaktformularen.",
    outcome: "Deutlich mehr qualifizierte Mandatsanfragen über die Website.",
  },
  {
    id: 8, branch: "Handwerk", company: "Schreinerei Holzmann", result: "Digitaler Showroom statt Anfahrt",
    tags: ["Premium", "3D-Galerie", "Konfigurator"],
    problem: "Kunden mussten für jede Anfrage in die Werkstatt kommen – hoher Zeitaufwand.",
    solution: "Premium-Website mit Produktkonfigurator, Bildergalerie und Anfrage-Funnel.",
    outcome: "40 % weniger Beratungstermine vor Ort bei gleichzeitig mehr qualifizierten Anfragen.",
  },
  {
    id: 9, branch: "Gastro", company: "Biergarten am Brucher", result: "Ausgebuchte Events dank Online-Marketing",
    tags: ["Mehrseitig", "Events", "Newsletter"],
    problem: "Events wurden nur per Aushang beworben, oft halbleere Veranstaltungen.",
    solution: "Event-Kalender auf der Website, Newsletter-Integration und Social-Media-Strategie.",
    outcome: "Events regelmäßig ausgebucht, Newsletter-Liste mit 500+ lokalen Abonnenten.",
  },
];

const References = () => {
  const [filter, setFilter] = useState("Alle");
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  const filtered = filter === "Alle" ? projects : projects.filter(p => p.branch === filter);

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="section-padding bg-accent">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Unsere Referenzen</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Erfolgreiche Projekte für Handwerk, Gastro und Dienstleister aus der Region.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    filter === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-accent text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.05}>
                <button
                  onClick={() => setSelected(project)}
                  className="card-base text-left w-full h-full flex flex-col hover:scale-[1.02] transition-transform duration-200"
                >
                  <div className="w-full h-40 bg-gradient-to-br from-primary/5 to-primary/15 rounded-xl mb-5 flex items-center justify-center">
                    <span className="text-sm font-medium text-primary/30">{project.branch}</span>
                  </div>
                  <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">{project.branch}</p>
                  <h3 className="text-lg font-bold text-secondary mb-2">{project.company}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{project.result}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">{tag}</span>
                    ))}
                  </div>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-accent">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl mb-4">Ihr Projekt ist das nächste.</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">Lassen Sie uns gemeinsam Ihre Website planen.</p>
            <Button size="xl" variant="hero" asChild>
              <Link to="/#kontakt">
                Projekt anfragen
                <ArrowRight size={18} />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-secondary/60 backdrop-blur-sm" onClick={() => setSelected(null)}>
          <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 relative" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelected(null)} className="absolute top-4 right-4 p-2 rounded-full hover:bg-accent transition-colors">
              <X size={20} className="text-muted-foreground" />
            </button>

            <p className="text-xs font-medium text-primary uppercase tracking-wider mb-2">{selected.branch}</p>
            <h2 className="text-2xl font-bold text-secondary mb-2">{selected.company}</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {selected.tags.map(tag => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">{tag}</span>
              ))}
            </div>

            {/* Placeholder gallery */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {[1, 2, 3, 4].map(n => (
                <div key={n} className="aspect-video bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl flex items-center justify-center">
                  <span className="text-xs text-primary/30">Bild {n}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-secondary mb-1">Problem</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{selected.problem}</p>
              </div>
              <div>
                <h3 className="font-semibold text-secondary mb-1">Lösung</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{selected.solution}</p>
              </div>
              <div>
                <h3 className="font-semibold text-secondary mb-1">Ergebnis</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{selected.outcome}</p>
              </div>
            </div>

            <div className="mt-8">
              <Button size="lg" asChild>
                <Link to="/#kontakt" onClick={() => setSelected(null)}>
                  Ähnliches Projekt anfragen
                  <ExternalLink size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default References;
