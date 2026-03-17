import { Link } from "react-router-dom";
import { Mail, Phone, Instagram } from "lucide-react";
import logoImg from "@/assets/logo-schlees.png";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container-narrow section-padding">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <img src={logoImg} alt="digitalmarienheide Logo" style={{ height: '80px', width: 'auto' }} className="mb-4" />
          <p className="text-secondary-foreground/70 text-sm leading-relaxed">
            Digitale Präsenz, die überzeugt – für lokale Unternehmen und Selbständige, die online mehr erreichen wollen!
          </p>
          <div className="flex gap-3 mt-4">
            <a href="https://www.instagram.com/schleesweb" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-secondary-foreground/70 hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <p className="font-semibold mb-4 text-sm uppercase tracking-wider text-secondary-foreground/50">Links</p>
          <nav className="flex flex-col gap-2">
            <Link to="/" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Home</Link>
            <Link to="/referenzen" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Portfolio</Link>
            <Link to="/preise" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Katalog</Link>
            <Link to="/impressum" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Datenschutz</Link>
          </nav>
        </div>

        {/* Contact */}
        <div>
          <p className="font-semibold mb-4 text-sm uppercase tracking-wider text-secondary-foreground/50">Kontakt</p>
          <div className="flex flex-col gap-3 text-sm text-secondary-foreground/70">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-primary" />
              <span>+49 160 4809564</span>
            </div>
            <a href="mailto:schlees.webdesign@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={16} className="text-primary" />
              <span>schlees.webdesign@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center text-xs text-secondary-foreground/40">
        © 2026 Schlees. Alle Rechte vorbehalten.
      </div>
    </div>
  </footer>
);

export default Footer;
