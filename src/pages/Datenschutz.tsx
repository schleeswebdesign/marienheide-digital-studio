import AnimatedSection from "@/components/AnimatedSection";

const Datenschutz = () => (
  <div className="min-h-screen pt-24">
    <section className="section-padding bg-accent">
      <div className="container-narrow text-center">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Datenschutzerklärung</h1>
        </AnimatedSection>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="container-narrow max-w-3xl mx-auto">
        <AnimatedSection>
          <div className="card-base space-y-8">

            <div>
              <h2 className="text-xl font-bold text-secondary mb-3">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-base font-semibold text-secondary mb-2">Allgemeine Hinweise</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                persönlich identifiziert werden können.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-3">2. Verantwortliche Stelle</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                [Vorname Nachname / Firmenname]<br />
                [Straße und Hausnummer]<br />
                [PLZ] [Ort]<br /><br />
                Telefon: [+49 (0) XXX XXXXXXX]<br />
                E-Mail: [info@beispiel-agentur.de]
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-3">3. Datenerfassung auf dieser Website</h2>

              <h3 className="text-base font-semibold text-secondary mb-2 mt-4">Server-Log-Dateien</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien,
                die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside text-muted-foreground text-sm mt-2 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed text-sm mt-2">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Grundlage für die
                Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO.
              </p>

              <h3 className="text-base font-semibold text-secondary mb-2 mt-6">Kontaktformular</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
                inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall
                von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                Grundlage ist Art. 6 Abs. 1 lit. b DSGVO.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-3">4. Hosting</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Diese Website wird bei [Hosting-Anbieter eintragen] gehostet. Details entnehmen Sie der
                Datenschutzerklärung des Anbieters. Die Verwendung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                Wir haben einen Vertrag über Auftragsverarbeitung (AVV) mit dem Hosting-Anbieter geschlossen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-3">5. Ihre Rechte</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen
                Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf
                Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
                Datenschutz können Sie sich jederzeit an uns wenden.
              </p>
              <ul className="list-disc list-inside text-muted-foreground text-sm mt-2 space-y-1">
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-3">6. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Diese Website verwendet keine Tracking-Cookies. Es werden lediglich technisch notwendige Cookies
                eingesetzt, die für den Betrieb der Website erforderlich sind. Eine Einwilligung ist hierfür nicht
                erforderlich (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-3">7. SSL-/TLS-Verschlüsselung</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine
                SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile
                des Browsers von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-secondary mb-3">8. Änderung der Datenschutzerklärung</h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen
                rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der
                Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
              </p>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground">
                Stand: [Monat Jahr]
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

export default Datenschutz;
