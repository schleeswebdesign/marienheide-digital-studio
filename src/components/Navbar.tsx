import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo-schlees.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Portfolio", to: "/referenzen" },
  { label: "Katalog", to: "/preise" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container-narrow flex items-center justify-between h-16">
        <Link to="/">
          <img src={logoImg} alt="digitalmarienheide Logo" className="h-10" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Button size="default" asChild>
            <Link to="/kontakt">Erstgespräch</Link>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-secondary"
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden glass-nav border-t border-border/50 pb-4">
          <nav className="container-narrow flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium py-2 transition-colors ${
                  location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button size="default" asChild className="mt-2">
              <Link to="/kontakt" onClick={() => setOpen(false)}>Erstgespräch</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
