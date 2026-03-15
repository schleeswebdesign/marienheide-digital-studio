import AnimatedSection from "@/components/AnimatedSection";

const Impressum = () => (
  <div className="min-h-screen pt-24">
    <section className="section-padding bg-accent">
      <div className="container-narrow text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Impressum</h1>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow max-w-3xl mx-auto prose prose-sm prose-neutral">
        <AnimatedSection>
          <div className="card-base space-y-8">
            <div>
              <h2 className="text-xl font-bold text-secondary mb-3">Angaben gemäß § 5 TMG</h2>
              <p className="text-muted-foreground leading-relaxed">
                [Vorname Nachname / Firmenname]<br />
                [Straße und Hausnummer]<br />
                [PLZ] [Ort]
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-3">Kontakt</h2>
              <p className="text-muted-foreground leading-relaxed">
                Telefon: [+49 (0) XXX XXXXXXX]<br />
                E-Mail: [info@beispiel-agentur.de]
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-3">Umsatzsteuer-ID</h2>
              <p className="text-muted-foreground leading-relaxed">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                [DE XXXXXXXXX]
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p className="text-muted-foreground leading-relaxed">
                [Vorname Nachname]<br />
                [Straße und Hausnummer]<br />
                [PLZ] [Ort]
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-3">Streitschlichtung</h2>
              <p className="text-muted-foreground leading-relaxed">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  https://ec.europa.eu/consumers/odr/
                </a>
                <br /><br />
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-3">Haftung für Inhalte</h2>
              <p className="text-muted-foreground leading-relaxed">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen
                zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-3">Haftung für Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-3">Urheberrecht</h2>
              <p className="text-muted-foreground leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Impressum;
