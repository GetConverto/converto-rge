import { useState } from "react";

const items = [
  {
    q: "Comment les prospects sont-ils contactés ?",
    a: "Converto envoie un message WhatsApp personnalisé en moins de 3 minutes après la réception de la demande de devis. La conversation est naturelle et reprend les informations laissées par le prospect.",
  },
  {
    q: "Faut-il changer d'outil ?",
    a: "Non. Converto se branche sur votre formulaire actuel, votre CRM ou votre plateforme de prospects. Vous gardez votre processus commercial habituel.",
  },
  {
    q: "Comment les rendez-vous sont-ils planifiés ?",
    a: "Converto trouve un créneau en fonction de vos disponibilités et celles de votre prospect, puis le RDV est confirmé directement dans votre agenda.",
  },
  {
    q: "Est-ce que cela fonctionne le soir et le week-end ?",
    a: "Oui, 24h/24 et 7j/7. Vos prospects reçoivent une réponse immédiate, même quand vos équipes sont sur le terrain ou indisponibles.",
  },
  {
    q: "Combien de temps faut-il pour être opérationnel ?",
    a: "En général, quelques jours suffisent après la récupération des accès nécessaires.",
  },
  {
    q: "Est-ce que Converto remplace mon commercial ?",
    a: "Non. Converto ne remplace pas votre équipe. Il engage le prospect immédiatement, récupère les premières informations et fixe le rendez-vous. Votre commercial intervient ensuite avec un prospect déjà qualifié.",
  },
  {
    q: "Et si mes prospects préfèrent être appelés ?",
    a: "Converto ne vous empêche pas d’appeler. Il permet simplement d’engager le prospect immédiatement par WhatsApp, puis de planifier un appel ou un rendez-vous selon votre processus.",
  },
  {
    q: "Nous avons déjà quelqu’un qui rappelle les prospects.",
    a: "Très bien. Converto intervient surtout quand cette personne n’est pas disponible : chantier, pause, soir, week-end, surcharge, absence ou délai de rappel trop long.",
  },
  {
    q: "Nos demandes viennent du SEO, pas de publicité.",
    a: "Justement : votre SEO génère déjà des opportunités. Converto permet de mieux convertir ces demandes en conversations et rendez-vous.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="bg-white rounded-2xl border border-border overflow-hidden shadow-soft"
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
            >
              <span className="font-semibold text-[#161b25]">{it.q}</span>
              <span
                className={`h-8 w-8 rounded-full bg-surface flex items-center justify-center text-[#1948ff] transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-[#5f6673] leading-relaxed">{it.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
