import { CalendarCheck2, CheckCircle2, Instagram, MessageCircle, Send } from "lucide-react";

export function WhatsappMockup() {
  return (
    <div className="relative w-full max-w-[380px] mx-auto">
      <div className="absolute -left-6 top-8 z-10 hidden sm:flex items-center gap-2 bg-white rounded-full pl-2 pr-4 py-2 shadow-card animate-float">
        <span className="h-7 w-7 rounded-full bg-gradient-primary flex items-center justify-center text-white text-xs font-bold">
          <CheckCircle2 className="h-4 w-4" strokeWidth={2.6} />
        </span>
        <span className="text-xs font-semibold text-[#161b25]">Objection traitée</span>
      </div>
      <div
        className="absolute -right-4 bottom-20 z-10 hidden sm:flex items-center gap-2 bg-white rounded-full pl-2 pr-4 py-2 shadow-card animate-float"
        style={{ animationDelay: "1.5s" }}
      >
        <span className="h-7 w-7 rounded-full bg-[#16a34a] flex items-center justify-center text-white text-xs">
          <CalendarCheck2 className="h-4 w-4" strokeWidth={2.5} />
        </span>
        <span className="text-xs font-semibold text-[#161b25]">Appel confirmé</span>
      </div>

      <div className="relative rounded-[2.25rem] bg-[#161b25] p-2 shadow-glow">
        <div className="rounded-[1.85rem] overflow-hidden bg-[#ECE5DD]">
          <div className="bg-[#075E54] text-white px-4 py-2.5 flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-soft">
              <MessageCircle className="h-5 w-5" strokeWidth={2.4} />
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold">Converto</div>
              <div className="text-[10px] text-white/70">en ligne</div>
            </div>
            <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e] ring-4 ring-[#22c55e]/15" />
          </div>
          <div className="p-3 space-y-1.5">
            <Bubble side="out">Bonjour, j’aimerais avoir quelques renseignements.</Bubble>
            <Bubble side="in">
              Bonjour 👋 Avec plaisir. Pouvez-vous me dire quel est votre projet ?
            </Bubble>
            <Bubble side="out">J’hésite encore, je trouve les tarifs un peu élevés.</Bubble>
            <Bubble side="in">
              Je comprends. Beaucoup de nos clients avaient la même question au départ. Est-ce que
              c’est surtout le budget qui vous freine ou vous voulez être sûr que ce soit le bon
              choix ?
            </Bubble>
            <Bubble side="out">Je veux surtout être sûr de faire le bon choix.</Bubble>
            <Bubble side="in">
              Dans ce cas, le plus simple est qu’un conseiller regarde votre projet avec vous. J’ai
              une disponibilité demain à 11h ou jeudi à 17h.
            </Bubble>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        <ChannelBadge
          label="Instagram"
          icon={Instagram}
          className="bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FCAF45]"
        />
        <ChannelBadge label="WhatsApp" icon={MessageCircle} className="bg-[#25D366]" />
        <ChannelBadge label="Messenger" icon={Send} className="bg-[#0084FF]" />
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
          isIn
            ? "bg-white text-[#161b25] rounded-bl-sm"
            : "bg-[#DCF8C6] text-[#161b25] rounded-br-sm"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function ChannelBadge({
  label,
  icon: Icon,
  className,
}: {
  label: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  className: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-border bg-white py-1.5 pl-1.5 pr-3 shadow-soft">
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full text-white ${className}`}
      >
        <Icon className="h-4 w-4" strokeWidth={2.4} />
      </span>
      <span className="text-xs font-semibold text-[#161b25]">{label}</span>
    </div>
  );
}
