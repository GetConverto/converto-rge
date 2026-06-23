import { useState } from "react";
import { Plus } from "lucide-react";

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
    <div className="mx-auto max-w-3xl space-y-3">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft"
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-6 sm:py-5"
            >
              <span className="pr-1 text-[15px] font-semibold leading-snug text-[#161b25] sm:text-base">
                {it.q}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface text-[#1948ff] transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                <Plus className="h-4 w-4" strokeWidth={2.5} />
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-4 pb-5 text-sm leading-relaxed text-[#5f6673] sm:px-6 sm:pb-6 sm:text-base">
                  {it.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
