import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const References = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="section-padding bg-accent">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Unser Portfolio</h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Erfolgreiche Projekte für Handwerk, Gastro und Dienstleister aus der Region.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Keine Referenzen */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="rounded-2xl bg-primary/10 py-16 flex items-center justify-center">
              <p className="text-primary text-lg font-medium">Noch keine Projekte vorhanden.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Bewertungen */}
      <section className="section-padding bg-background">
        <div className="container-narrow space-y-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Bewertungen</h2>
            <div className="rounded-2xl bg-primary/10 py-12 flex items-center justify-center">
              <p className="text-primary text-lg font-medium">Noch keine Bewertung vorhanden.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="rounded-2xl bg-primary py-6 flex items-center justify-center cursor-pointer hover:bg-primary-hover transition-colors">
              <p className="text-primary-foreground text-lg font-semibold">Bewerten Sie uns!</p>
            </div>
          </AnimatedSection>
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
    </div>
  );
};

export default References;
