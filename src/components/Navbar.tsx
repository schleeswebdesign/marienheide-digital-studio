import { useState, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo-schlees.png";

const navLinks = [
  { label: "Home", anchor: "top" },
  { label: "Portfolio", anchor: "referenzen" },
  { label: "Katalog", anchor: "preise" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = useCallback((anchor: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname === "/") {
      if (anchor === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(anchor === "top" ? "/" : `/#${anchor}`);
    }
  }, [location.pathname, navigate]);

  const handleKontaktClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname === "/") {
      document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#kontakt");
    }
  }, [location.pathname, navigate]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container-narrow flex items-center justify-between h-16">
        <Link to="/">
          <img src={logoImg} alt="digitalmarienheide Logo" style={{ height: '120px', width: 'auto', maxHeight: 'none' }} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.anchor}
              href={`/#${link.anchor}`}
              onClick={handleScroll(link.anchor)}
              className="nav-link-underline text-sm font-medium transition-colors hover:text-primary text-muted-foreground cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <Button size="default" asChild>
            <a href="/#kontakt" onClick={handleKontaktClick}>Lassen Sie uns sprechen</a>
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
              <a
                key={link.anchor}
                href={`/#${link.anchor}`}
                onClick={handleScroll(link.anchor)}
                className="text-sm font-medium py-2 transition-colors text-muted-foreground cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <Button size="default" asChild className="mt-2">
              <a href="/#kontakt" onClick={handleKontaktClick}>Lassen Sie uns sprechen</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
