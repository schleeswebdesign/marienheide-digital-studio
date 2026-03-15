import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container-narrow section-padding">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <p className="text-xl font-bold mb-4">
            digital<span className="text-primary">marienheide</span>
          </p>
          <p className="text-secondary-foreground/70 text-sm leading-relaxed">
            Moderne Websites für Handwerk, Gastro &amp; lokale Dienstleister in Marienheide und Umgebung.
          </p>
        </div>

        {/* Links */}
        <div>
          <p className="font-semibold mb-4 text-sm uppercase tracking-wider text-secondary-foreground/50">Seiten</p>
          <nav className="flex flex-col gap-2">
            <Link to="/" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Home</Link>
            <Link to="/referenzen" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Referenzen</Link>
            <Link to="/preise" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Preise</Link>
            <a href="#" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Impressum</a>
            <a href="#" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Datenschutz</a>
          </nav>
        </div>

        {/* Contact */}
        <div>
          <p className="font-semibold mb-4 text-sm uppercase tracking-wider text-secondary-foreground/50">Kontakt</p>
          <div className="flex flex-col gap-3 text-sm text-secondary-foreground/70">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-primary" />
              <span>+49 (0) 123 456 789</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              <span>info@beispiel-agentur.de</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <span>Marienheide, NRW</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center text-xs text-secondary-foreground/40">
        © {new Date().getFullYear()} digitalmarienheide. Alle Rechte vorbehalten.
      </div>
    </div>
  </footer>
);

export default Footer;
