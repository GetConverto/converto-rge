import { useEffect, useState } from "react";
import logo from "@/assets/converto-logo.png.asset.json";

const CAL_URL = "https://calendly.com/gdmf-ai/20mn";

const links = [
  { href: "#fonctionnement", label: "Comment ça fonctionne" },
  { href: "#resultats", label: "Résultats" },
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
        scrolled ? "bg-white/85 backdrop-blur-md border-b border-border shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <img src={logo.url} alt="Converto" className="h-7 w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-[#5f6673] hover:text-[#161b25] transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center justify-center h-10 px-5 rounded-full text-sm font-semibold text-white bg-gradient-primary shadow-soft hover:shadow-glow transition-all"
        >
          Réserver une démo
        </a>

        <button
          aria-label="Menu"
          className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-lg border border-border"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-5 h-0.5 bg-[#161b25] relative before:absolute before:-top-1.5 before:left-0 before:w-5 before:h-0.5 before:bg-[#161b25] after:absolute after:top-1.5 after:left-0 after:w-5 after:h-0.5 after:bg-[#161b25]" />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-border px-5 py-4 space-y-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="block text-sm font-medium text-[#161b25]" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full justify-center items-center h-11 px-5 rounded-full text-sm font-semibold text-white bg-gradient-primary"
          >
            Réserver une démo
          </a>
        </div>
      )}
    </header>
  );
}
