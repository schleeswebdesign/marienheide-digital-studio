import React, { useState, useEffect, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const projects = [
  { name: "Grünwerk Oberberg (Demo)", branch: "Garten & Landschaftsbau", url: "https://gruenwerk-oberberg.lovable.app" },
  { name: "Elektro Oberberg (Demo)", branch: "Elektriker", url: "https://oberberg-elektro-page.lovable.app" },
  { name: "Haarwerk Oberberg (Demo)", branch: "Friseur", url: "https://haarwerk-oberberg.lovable.app" },
];

const PortfolioShowcase = () => {
  const [active, setActive] = useState(0);

  const next = useCallback(() => setActive(i => (i + 1) % projects.length), []);
  const prev = useCallback(() => setActive(i => (i - 1 + projects.length) % projects.length), []);

  useEffect(() => {
    const iv = setInterval(next, 5000);
    return () => clearInterval(iv);
  }, [next]);

  const project = projects[active];

  return (
    <section id="referenzen" className="section-padding" style={{ backgroundColor: '#0a0f1a' }}>
      <div className="container-narrow">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">So könnte Ihre Website aussehen</h2>
          <p className="text-white/60 text-lg">Websites die nicht nur gut aussehen – sondern aktiv neue Kunden gewinnen und mehr Anfragen generieren</p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Vorheriges Projekt"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Nächstes Projekt"
          >
            <ChevronRight size={20} />
          </button>

          {/* iframe preview */}
          <div className="rounded-xl overflow-hidden border border-white/10 bg-black shadow-2xl">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              {projects.map((p, i) => (
                <iframe
                  key={p.url}
                  src={p.url}
                  title={p.name}
                  className="absolute inset-0 w-full h-full transition-opacity duration-500"
                  style={{
                    pointerEvents: 'none',
                    opacity: active === i ? 1 : 0,
                    zIndex: active === i ? 1 : 0,
                  }}
                  loading="lazy"
                />
              ))}
            </div>
          </div>

          {/* Project info */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold text-white">{project.name}</h3>
              <Badge variant="secondary" className="text-xs">{project.branch}</Badge>
            </div>
            <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10" asChild>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                Live ansehen <ExternalLink size={14} className="ml-1" />
              </a>
            </Button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  active === i ? 'bg-primary w-6' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Projekt ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
