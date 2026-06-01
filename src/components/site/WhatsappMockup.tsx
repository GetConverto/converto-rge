export function WhatsappMockup() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto">
      {/* Floating badges */}
      <div className="absolute -left-6 top-10 z-10 hidden sm:flex items-center gap-2 bg-white rounded-full pl-2 pr-4 py-2 shadow-card animate-float">
        <span className="h-7 w-7 rounded-full bg-gradient-primary flex items-center justify-center text-white text-xs font-bold">✓</span>
        <span className="text-xs font-semibold text-[#161b25]">Réponse en 47s</span>
      </div>
      <div className="absolute -right-4 bottom-24 z-10 hidden sm:flex items-center gap-2 bg-white rounded-full pl-2 pr-4 py-2 shadow-card animate-float" style={{ animationDelay: "1.5s" }}>
        <span className="h-7 w-7 rounded-full bg-[#25D366] flex items-center justify-center text-white text-xs">📅</span>
        <span className="text-xs font-semibold text-[#161b25]">RDV confirmé</span>
      </div>

      {/* Phone frame */}
      <div className="relative rounded-[2.5rem] bg-[#161b25] p-2.5 shadow-glow">
        <div className="rounded-[2rem] overflow-hidden bg-[#ECE5DD]">
          {/* WhatsApp header */}
          <div className="bg-[#075E54] text-white px-4 py-3 flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-primary flex items-center justify-center text-white text-sm font-bold">C</div>
            <div className="flex-1">
              <div className="text-sm font-semibold">Converto · Clim Pro</div>
              <div className="text-[10px] text-white/70">en ligne</div>
            </div>
          </div>
          {/* Messages */}
          <div className="p-4 space-y-2.5 min-h-[440px]">
            <Bubble side="in">Bonjour 👋 vous avez fait une demande de devis pour une pompe à chaleur. Je peux vous poser 2 questions rapides ?</Bubble>
            <Bubble side="out">Oui bien sûr</Bubble>
            <Bubble side="in">Parfait. Surface à chauffer ?</Bubble>
            <Bubble side="out">Environ 120 m²</Bubble>
            <Bubble side="in">Délai souhaité pour les travaux ?</Bubble>
            <Bubble side="out">Sous 2 mois</Bubble>
            <Bubble side="in">
              Top, je vous propose un rendez-vous demain à 14h avec un conseiller. Ça vous va ?
            </Bubble>
            <Bubble side="out">Oui ça me va 👍</Bubble>
            <div className="mx-auto max-w-[80%] bg-white rounded-xl p-3 shadow-soft border border-black/5">
              <div className="flex items-center gap-2 text-[11px] font-semibold text-[#1948ff]">
                <span>📅</span> Rendez-vous confirmé
              </div>
              <div className="text-xs text-[#161b25] mt-1 font-medium">Demain · 14:00 — Visio</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bubble({ side, children }: { side: "in" | "out"; children: React.ReactNode }) {
  const isIn = side === "in";
  return (
    <div className={`flex ${isIn ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[78%] text-xs leading-relaxed px-3 py-2 rounded-2xl shadow-sm ${
          isIn ? "bg-white text-[#161b25] rounded-bl-sm" : "bg-[#DCF8C6] text-[#161b25] rounded-br-sm"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
