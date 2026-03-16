import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  { name: "Grünwerk Oberberg", branch: "Garten & Landschaftsbau", url: "https://id-preview--70929813-767c-4033-9686-c33154e21e63.lovable.app" },
  { name: "Elektro Wagner", branch: "Elektriker", url: "https://id-preview--4bf3fca1-cb6c-4a47-8e36-fec3f00157e3.lovable.app" },
  { name: "Haarwerk Oberberg", branch: "Friseur", url: "https://id-preview--ec4acad4-58d0-41d1-b258-41806424f87f.lovable.app" },
];

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

      {/* Demo Videos */}
      <section className="section-padding bg-background">
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
            {demos.map((demo, i) => (
              <AnimatedSection key={demo.label} delay={i * 0.1}>
                <div className="card-base h-full flex flex-col">
                  <div className="aspect-video rounded-xl bg-muted flex items-center justify-center mb-4">
                    <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                      <Play size={28} className="text-primary ml-1" />
                    </div>
                  </div>
                  <p className="text-sm font-semibold text-secondary text-center">{demo.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Referenzprojekte */}
      <section className="section-padding bg-background">
        <div className="container-narrow space-y-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Referenzprojekte</h2>
            <div className="rounded-2xl bg-primary/10 py-16 flex items-center justify-center">
              <p className="text-primary text-lg font-medium">Noch keine Projekte vorhanden.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <Link to="/#kontakt" className="rounded-2xl bg-primary py-6 flex items-center justify-center cursor-pointer hover:bg-primary-hover transition-colors gap-2">
              <p className="text-primary-foreground text-lg font-semibold">Projekt anfragen</p>
              <ArrowRight size={18} className="text-primary-foreground" />
            </Link>
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
    </div>
  );
};

export default References;
