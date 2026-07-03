import { useState } from "react";
import { Plus } from "lucide-react";

const items = [
  {
    q: "Comment savoir si Converto sera rentable pour moi ?",
    a: "L'échange sert justement à estimer ce point. On regarde votre trafic, vos canaux, votre panier moyen, votre taux de conversion actuel et la valeur d'un rendez-vous obtenu. Si le potentiel n'est pas suffisant, on vous le dit clairement.",
  },
  {
    q: "Pourquoi ne pas simplement utiliser ChatGPT ?",
    a: "ChatGPT est un outil généraliste. Converto est configuré pour votre offre, vos objections, vos canaux, votre agenda, vos relances et votre dashboard. La valeur n'est pas seulement le modèle IA : c'est le système commercial complet autour.",
  },
  {
    q: "En quoi c'est différent d'un chatbot classique ?",
    a: "Un chatbot classique sert surtout à orienter ou répondre à des demandes simples. Converto est pensé pour engager, qualifier, traiter les objections et pousser vers une action commerciale : rendez-vous, devis, achat ou relance.",
  },
  {
    q: "Est-ce que Converto remplace mon équipe commerciale ?",
    a: "Non. Converto intervient surtout avant votre équipe : il engage rapidement les personnes qui vous contactent, récupère les informations utiles, traite les premières objections et réserve un créneau. Votre équipe reprend ensuite avec un contexte clair et un contact déjà rassuré.",
  },
  {
    q: "Qu'est-ce que je dois fournir pour le setup ?",
    a: "Vos pages de vente, vos offres, vos tarifs, vos questions fréquentes, vos objections récurrentes, vos canaux et vos disponibilités. On transforme ces éléments en scénarios de vente et en parcours conversationnels.",
  },
  {
    q: "Faut-il changer mes outils actuels ?",
    a: "Non. Converto se déploie par-dessus votre site et vos canaux existants. Vous pouvez garder votre CRM, votre agenda, vos pages actuelles et votre façon de travailler.",
  },
  {
    q: "Combien de temps avant d'être opérationnel ?",
    a: "En général moins d'une semaine après le kick-off, selon la complexité de vos canaux et des accès nécessaires. On gère la partie technique et on vous sollicite seulement pour valider les éléments importants.",
  },
  {
    q: "Que se passe-t-il si ça ne fonctionne pas ?",
    a: "On analyse les échanges, le trafic, les objections et les points de friction pour corriger ce qui bloque. Et si aucune demande exploitable n'est générée sur un volume de trafic suffisant le premier mois, le mois suivant est offert.",
  },
  {
    q: "Est-ce adapté si j'ai peu de trafic ?",
    a: "Pas toujours. Converto crée surtout de la valeur quand vous avez déjà des visiteurs, des messages reçus ou une base de contacts à réactiver. Si le volume est trop faible, il vaut souvent mieux travailler l'acquisition avant.",
  },
  {
    q: "Puis-je arrêter à tout moment ?",
    a: "Oui. Vous pouvez arrêter l'abonnement avec un préavis de 30 jours. Converto est désactivé à l'issue de cette période.",
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
