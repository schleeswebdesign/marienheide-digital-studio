import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mail, Phone, Instagram } from "lucide-react";
import logoImg from "@/assets/logo-schlees.png";

const scrollLinks = [
  { label: "Home", anchor: "top" },
  { label: "Über uns", anchor: "vision" },
  { label: "Angebot", anchor: "angebot" },
  { label: "Prozess", anchor: "prozess" },
  { label: "Referenzen", anchor: "referenzen" },
];

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (anchor: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      if (anchor === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(anchor === "top" ? "/" : `/#${anchor}`);
    }
  };

  return (
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
              {scrollLinks.map((link) => (
                <a
                  key={link.anchor}
                  href={`/#${link.anchor}`}
                  onClick={handleScroll(link.anchor)}
                  className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
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
};

export default Footer;
