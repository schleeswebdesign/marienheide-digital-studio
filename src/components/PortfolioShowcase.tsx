import React, { useState, useEffect, useCallback } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import urbanThreadsImg from "@/assets/urban-threads-demo.png";

const projects = [
  { name: "Grünwerk Oberberg (Demo)", branch: "Garten & Landschaftsbau", url: "https://gruenwerk-oberberg.lovable.app" },
  { name: "Elektro Oberberg (Demo)", branch: "Elektriker", url: "https://oberberg-elektro-page.lovable.app" },
  { name: "Haarwerk Oberberg (Demo)", branch: "Friseur", url: "https://haarwerk-oberberg.lovable.app" },
];

const shopProject = {
  name: "Urban Threads (Demo)",
  branch: "Online Shop",
  url: "https://id-preview--0757ef42-3050-4639-b994-96039f98bea5.lovable.app/?__lovable_token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNG9rVlowNXdrUVdncVJNNUdxMzdPZVc1eFo2MyIsInByb2plY3RfaWQiOiIwNzU3ZWY0Mi0zMDUwLTQ2MzktYjk5NC05NjAzOWY5OGJlYTUiLCJhY2Nlc3NfdHlwZSI6InByb2plY3QiLCJpc3MiOiJsb3ZhYmxlLWFwaSIsInN1YiI6IjA3NTdlZjQyLTMwNTAtNDYzOS1iOTk0LTk2MDM5Zjk4YmVhNSIsImF1ZCI6WyJsb3ZhYmxlLWFwcCJdLCJleHAiOjE3NzQ1NTU0ODksIm5iZiI6MTc3Mzk1MDY4OSwiaWF0IjoxNzczOTUwNjg5fQ.hUf9YVHxUSjEPdbS4Wsaj7uneGXVmKeSrTXgGpfmOy_oQclE-8LQckT06dF2qa4Sasqamv7zwI-3cYR5apCo-pyYTny9aMDM3o70z7W-kMBATnQidAfSUqMm_XJ2ku5ta5GYqDU3QeFKVSFftbhV0EOpNgduNgbo6wjuZkxgWUkVr38ercthk_7opllqQ3RLpraHkQj2-tzuwVf0-ORo1MUiLwnCFjAjVhR85euWPxWsLZPYtAchysY9oLaI-1SR_dzdKOMB9EdZSa-oqvnNovwgu0UykQY415otvaHBgB-41ab9eZ4J57Cce3FFsDlklW3EaHtT1uxq7J5u3E2-0Ghx9WrBUYtFmUKXmYWjaYjZWVY370jRWFLyGUL54kbtNjvKjU8LD70F9rID4S-Wcl9qTcxcj4yRbM-ILbv6WCoKK4xuTBz7JAs0WHAS3gpb3IERwhzB6Ovvnbi-9uPvLuaZsXdzSwcnajNFKG_a8YjZ4wbdqiUmOnkB86fmxpt6C8-l71-PtPN3VHbUQWFxR9hnIpGdOco5Vh1x0wlViqCd7L-BZKcHDO1DwzN_u2vCksnf3CLF3oD1sfUx7svGhnmYRxePb0m2PdKA4jZAiB0Wb8caopewcy_v1bi6xwfIp6xU6k2fTOLkvqTj8VZsWHwkpIPMW99M7UCx1pc1tY0",
  image: urbanThreadsImg,
};

const tabs = ["Websites", "Online Shops"] as const;

const PortfolioShowcase = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [active, setActive] = useState(0);

  const next = useCallback(() => setActive(i => (i + 1) % projects.length), []);
  const prev = useCallback(() => setActive(i => (i - 1 + projects.length) % projects.length), []);

  useEffect(() => {
    if (activeTab !== 0) return;
    const iv = setInterval(next, 5000);
    return () => clearInterval(iv);
  }, [next, activeTab]);

  const project = projects[active];

  return (
    <section id="referenzen" className="section-padding" style={{ backgroundColor: '#0a0f1a' }}>
      <div className="container-narrow">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">So könnte Ihre Website aussehen</h2>
          <p className="text-white/60 text-lg">Websites die nicht nur gut aussehen – sondern aktiv neue Kunden gewinnen und mehr Anfragen generieren</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-8">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => setActiveTab(i)}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === i
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Sliding container */}
        <div className="relative max-w-4xl mx-auto overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeTab * 100}%)` }}
          >
            {/* Tab 1: Websites Slider */}
            <div className="w-full flex-shrink-0">
              <div className="relative">
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

            {/* Tab 2: Online Shops */}
            <div className="w-full flex-shrink-0">
              <div className="rounded-xl overflow-hidden border border-white/10 bg-black shadow-2xl">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <img
                    src={shopProject.image}
                    alt={shopProject.name}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Project info */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-white">{shopProject.name}</h3>
                  <Badge variant="secondary" className="text-xs">{shopProject.branch}</Badge>
                </div>
                <Button variant="outline" size="sm" className="text-white border-white/20 hover:bg-white/10" asChild>
                  <a href={shopProject.url} target="_blank" rel="noopener noreferrer">
                    Live ansehen <ExternalLink size={14} className="ml-1" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;
