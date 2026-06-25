import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const CAL_URL = "https://calendly.com/gdmf-ai/20mn";
const LOGO_URL = "/converto-logo.svg?v=2";

const links = [
  { href: "#difference", label: "Différence" },
  { href: "#constat", label: "Constat" },
  { href: "#fonctionnement", label: "Fonctionnement" },
  { href: "#fonctionnalites", label: "Fonctionnalités" },
  { href: "#resultats", label: "Résultats" },
  { href: "#pour-qui", label: "Pour qui" },
  { href: "#chiffres", label: "Chiffres" },
  { href: "#offres", label: "Tarifs" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={LOGO_URL} alt="Converto" className="h-8 w-auto" />
        </a>

        <nav className="hidden lg:flex items-center gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#5f6673] hover:text-[#161b25] transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center justify-center gap-2 h-10 px-5 rounded-full text-sm font-semibold text-white bg-gradient-primary shadow-soft hover:shadow-glow hover:-translate-y-0.5 transition-all"
        >
          Réserver une démo gratuite
          <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
        </a>

        <button
          aria-label="Menu"
          className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-xl border border-border bg-white text-[#161b25] shadow-soft"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-border px-5 py-4 space-y-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block text-sm font-medium text-[#161b25]"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full justify-center items-center gap-2 h-11 px-5 rounded-full text-sm font-semibold text-white bg-gradient-primary"
          >
            Réserver une démo gratuite
            <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
          </a>
        </div>
      )}
    </header>
  );
}
