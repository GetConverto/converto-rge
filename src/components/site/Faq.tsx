import { useState } from "react";

const items = [
  {
    q: "En quoi c'est différent d'un chatbot ?",
    a: "Un chatbot répond à des questions selon des règles prédéfinies. Votre commercial IA Converto comprend le contexte de la conversation, gère les objections commerciales en temps réel, s'adapte à chaque prospect et oriente activement vers un achat ou un appel. L'objectif n'est pas de répondre — c'est de vendre.",
  },
  {
    q: "Comment votre commercial IA connaît-il mon offre ?",
    a: "Lors du setup, on analyse ensemble votre page de vente, vos emails, vos arguments commerciaux et les objections fréquentes de vos clients. On programme votre commercial IA avec tout ce contenu. Il connaît votre offre dans le détail — tarifs, bénéfices, différenciateurs, garanties.",
  },
  {
    q: "Est-ce que ça parle vraiment comme un humain ?",
    a: "Il se présente comme l'assistant de votre marque — il n'usurpe pas une identité humaine. Mais les conversations sont fluides, naturelles et adaptées à votre ton. Vos prospects ne se sentent pas face à une réponse générique.",
  },
  {
    q: "Comment je mesure le retour sur investissement ?",
    a: "C'est le cœur de Converto : chaque vente ou appel généré par votre commercial IA est tracé et visible dans votre dashboard. Vous savez exactement combien il vous rapporte chaque mois. Pas de flou, pas d'approximation.",
  },
  {
    q: "Faut-il changer mes outils actuels ?",
    a: "Non. Votre commercial IA se déploie par-dessus votre site existant et vos réseaux sociaux. Vous ne changez rien à votre stack actuelle.",
  },
  {
    q: "Combien de temps avant d'être opérationnel ?",
    a: "En général moins d'une semaine après le kick-off. On gère l'intégration technique de notre côté. Vous n'avez rien à configurer.",
  },
  {
    q: "Que se passe-t-il si j'ai plusieurs offres différentes ?",
    a: "Votre commercial IA peut présenter et vendre plusieurs formations ou niveaux d'accompagnement. Il oriente chaque prospect vers l'offre la plus adaptée à sa situation.",
  },
  {
    q: "Puis-je arrêter à tout moment ?",
    a: "Oui. Vous pouvez arrêter l'abonnement à tout moment avec un préavis de 30 jours. Votre commercial IA est désactivé à l'issue de cette période.",
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
