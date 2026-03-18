import { useState, useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import { Check, ArrowRight, Phone, PhoneOff } from "lucide-react";
import { Link } from "react-router-dom";

const packages = [
  {
    name: "Starter",
    subtitle: "One-Pager",
    price: "ab 300 €",
    delivery: "ca. 2 Wochen",
    highlight: false,
    features: [
      "Responsive One-Page Website",
      "Modernes individuelles Design",
      "Kontaktformular",
      "Google Maps Integration",
      "SSL-Zertifikat & Hosting-Setup",
      "Grundlegende SEO-Einrichtung",
      "Performance-Optimierung",
      "1 Korrekturschleife",
    ],
  },
  {
    name: "Business",
    subtitle: "Mehrseitig (3–6 Seiten)",
    price: "ab 1000 €",
    delivery: "ca. 3–4 Wochen",
    highlight: true,
    features: [
      "Alles aus Starter",
      "3–6 individuell gestaltete Seiten",
      "Terminbuchungs-Integration (Calendly)",
      "Erweiterte SEO-Optimierung",
      "2 Korrekturschleifen",
      "30 Tage Support nach Livegang",
    ],
  },
];

const kiFeatures = [
  "Nimmt Anrufe automatisch entgegen",
  "Beantwortet Kundenfragen",
  "Bucht Termine direkt im Kalender",
  "Klingt wie ein echter Mensch",
  "Verfügbar rund um die Uhr",
  "Individuelle Konfiguration",
  "Monatlich kündbar",
];

type CallStatus = "idle" | "connecting" | "active" | "ended";

const KiCard = () => {
  const [callStatus, setCallStatus] = useState<CallStatus>("idle");
  const vapiRef = useRef<any>(null);

  const initVapi = useCallback(() => {
    if (vapiRef.current) return vapiRef.current;
    const Vapi = (window as any).Vapi;
    if (!Vapi) return null;
    const instance = new Vapi("e4df177d-71b8-4217-83b1-2bba195fc07f");
    instance.on("call-start", () => setCallStatus("active"));
    instance.on("call-end", () => setCallStatus("ended"));
    instance.on("error", () => setCallStatus("ended"));
    vapiRef.current = instance;
    return instance;
  }, []);

  useEffect(() => {
    return () => {
      if (vapiRef.current) {
        try { vapiRef.current.stop(); } catch {}
      }
    };
  }, []);

  const startCall = () => {
    const vapi = initVapi();
    if (!vapi) return;
    setCallStatus("connecting");
    vapi.start("1d369f6c-b92a-4122-ae2c-717abc31ec7e");
  };

  const endCall = () => {
    if (vapiRef.current) {
      try { vapiRef.current.stop(); } catch {}
    }
    setCallStatus("ended");
  };

  const statusText: Record<CallStatus, string> = {
    idle: "",
    connecting: "Verbinde...",
    active: "KI hört zu...",
    ended: "Gespräch beendet",
  };

  const isActive = callStatus === "active" || callStatus === "connecting";

  return (
    <div
      className="h-full flex flex-col relative rounded-2xl p-6 md:p-8 cursor-pointer"
      style={{
        background: "#ffffff",
        border: "2px solid transparent",
        boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
        transition: "box-shadow 0.2s ease, transform 0.2s ease",
        opacity: 0,
        animation: "hero-fade-in 0.9s ease-out 0.4s forwards",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 28px 80px rgba(0,0,0,0.14)";
        e.currentTarget.style.transform = "translateY(-6px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.08)";
        e.currentTarget.style.transform = "none";
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = "translateY(2px)";
        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.06)";
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 28px 80px rgba(0,0,0,0.14)";
      }}
    >
      {/* Badge */}
      <span
        className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-4 py-1 rounded-full"
        style={{ backgroundColor: "#F3EFFE", color: "#6D28D9" }}
      >
        Neu
      </span>

      <div className="mb-6">
        <h3 className="text-xl font-bold text-secondary">KI-Telefonassistent</h3>
        <p className="text-sm text-muted-foreground">24/7 automatisch erreichbar</p>
      </div>
      <div className="mb-6">
        <span className="text-3xl font-bold">350 €</span>
        <span className="text-lg font-semibold ml-1">einmalig</span>
        <p className="text-xs text-muted-foreground mt-1">
          Einmalige Einrichtungsgebühr – kein Abo
        </p>
      </div>
      <ul className="space-y-3 mb-8 flex-1">
        {kiFeatures.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
            <Check size={16} className="text-primary mt-0.5 shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      {/* Aura Button */}
      <div className="flex flex-col items-center gap-3">
        <div className="relative flex items-center justify-center" style={{ width: 100, height: 100 }}>
          {/* Pulse rings - only visible during active call */}
          {isActive && (
            <>
              <span
                className="absolute rounded-full"
                style={{
                  width: 80, height: 80,
                  border: "2px solid hsl(var(--primary))",
                  animation: "aura-pulse 1.8s ease-out infinite 0s",
                }}
              />
              <span
                className="absolute rounded-full"
                style={{
                  width: 80, height: 80,
                  border: "2px solid hsl(var(--primary))",
                  animation: "aura-pulse 1.8s ease-out infinite 0.6s",
                }}
              />
              <span
                className="absolute rounded-full"
                style={{
                  width: 80, height: 80,
                  border: "2px solid hsl(var(--primary))",
                  animation: "aura-pulse 1.8s ease-out infinite 1.2s",
                }}
              />
            </>
          )}
          <button
            onClick={callStatus === "idle" || callStatus === "ended" ? startCall : undefined}
            className="relative z-10 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-105 active:scale-95"
            style={{
              width: 80,
              height: 80,
              backgroundColor: "hsl(var(--primary))",
              color: "#fff",
            }}
          >
            <Phone size={28} />
          </button>
        </div>
        <span className="text-sm font-semibold text-foreground">Ausprobieren</span>

        {/* Status text */}
        {callStatus !== "idle" && (
          <span className="text-xs text-muted-foreground animate-pulse">
            {statusText[callStatus]}
          </span>
        )}

        {/* End call button */}
        {isActive && (
          <button
            onClick={endCall}
            className="flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:opacity-85"
            style={{ backgroundColor: "hsl(var(--destructive))", color: "#fff" }}
          >
            <PhoneOff size={16} />
            Gespräch beenden
          </button>
        )}
      </div>
    </div>
  );
};

const Pricing = () => (
  <div className="min-h-screen pt-24" style={{ background: "linear-gradient(180deg, #f8faff 0%, #eef4ff 100%)" }}>
    <section className="section-padding">
      <div className="container-narrow text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Transparente Preise</h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Faire Pakete für jeden Bedarf – ohne versteckte Kosten.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding !pt-0 !pb-12 md:!pb-16">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Unsere Pakete</h2>
          <p className="text-muted-foreground text-lg">Transparent. Fair. Ohne versteckte Kosten.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className="h-full flex flex-col relative rounded-2xl p-6 md:p-8 cursor-pointer"
              style={{
                background: pkg.highlight ? "#ffffff" : "hsl(var(--muted))",
                border: pkg.highlight ? "2px solid #7DD3FC" : "2px solid transparent",
                boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
                transition: "box-shadow 0.2s ease, transform 0.2s ease",
                opacity: 0,
                animation: `hero-fade-in 0.9s ease-out ${i === 0 ? "0.1s" : "0.25s"} forwards`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 28px 80px rgba(0,0,0,0.14)";
                e.currentTarget.style.transform = "translateY(-6px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.08)";
                e.currentTarget.style.transform = "none";
              }}
              onMouseDown={(e) => {
                e.currentTarget.style.transform = "translateY(2px)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.06)";
              }}
              onMouseUp={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 28px 80px rgba(0,0,0,0.14)";
              }}
            >
              {pkg.highlight && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-4 py-1 rounded-full"
                  style={{ backgroundColor: "#E6F1FB", color: "#7DD3FC" }}
                >
                  Beliebteste Wahl
                </span>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-secondary">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground">{pkg.subtitle}</p>
              </div>
              <div className="mb-6">
                <span className="text-3xl font-bold" style={{ color: pkg.highlight ? "#7DD3FC" : undefined }}>
                  {pkg.price}
                </span>
                <p className="text-xs text-muted-foreground mt-1">Lieferzeit: {pkg.delivery}</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="w-full transition-all duration-200 hover:opacity-85 hover:-translate-y-0.5"
                style={
                  pkg.highlight
                    ? { backgroundColor: "#7DD3FC", color: "#ffffff" }
                    : { backgroundColor: "#1e3a5f", color: "#ffffff" }
                }
                asChild
              >
                <Link to="/#kontakt">
                  Angebot anfordern
                  <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          ))}
          {/* KI-Telefonassistent Card */}
          <KiCard />
        </div>
      </div>
    </section>
  </div>
);

export default Pricing;
