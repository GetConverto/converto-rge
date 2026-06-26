import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { WhatsappMockup } from "@/components/site/WhatsappMockup";
import { Faq } from "@/components/site/Faq";
import {
  ArrowRight,
  AudioLines,
  BadgeCheck,
  BarChart3,
  BrainCircuit,
  CalendarCheck2,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  Globe2,
  Instagram,
  LineChart,
  Megaphone,
  MessageCircle,
  MessagesSquare,
  MessageSquareText,
  MousePointerClick,
  RefreshCw,
  Rocket,
  SearchCheck,
  Send,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Target,
  TrendingDown,
  TrendingUp,
  XCircle,
  Zap,
} from "lucide-react";
import { useState } from "react";

const CAL_URL = "https://calendly.com/gdmf-ai/20mn";
const LOGO_URL = "/converto-logo.svg?v=2";

const PRICING_PLANS = [
  {
    name: "Starter",
    badge: "",
    description: "Idéal pour un coach solo qui veut un premier commercial IA sur son site.",
    setup: "800",
    price: "290",
    featured: false,
    features: [
      "Audit et configuration complète de votre commercial IA",
      "Déploiement sur 1 canal (web chat)",
      "Scénarios de vente personnalisés à votre offre",
      "Dashboard CA généré, conversations, taux de conversion",
      "Relances automatiques et campagnes de réactivation",
      "Support par email",
    ],
  },
  {
    name: "Growth",
    badge: "Le plus populaire",
    description: "Idéal pour un coach établi avec une audience et plusieurs canaux actifs.",
    setup: "1200",
    price: "490",
    featured: true,
    features: [
      "Tout Starter inclus, plus :",
      "Déploiement sur 3 canaux (web chat + WhatsApp + Instagram ou Messenger)",
      "Rapport mensuel synthétique envoyé par email",
      "1 optimisation mensuelle des scripts",
      "Support prioritaire",
    ],
  },
  {
    name: "Scale",
    badge: "",
    description: "Idéal pour un infopreneur avec plusieurs offres ou forte volumétrie.",
    setup: "1500",
    price: "790",
    featured: false,
    features: [
      "Tout Starter inclus, plus :",
      "Déploiement sur tous les canaux disponibles",
      "Rapport mensuel détaillé + appel mensuel de 30 min",
      "2 optimisations mensuelles des scripts",
      "Support prioritaire",
    ],
  },
] as const;

const DIFFERENCE_ROWS = [
  {
    label: 'Face à "c\'est trop cher"',
    classic: "Je transmets votre demande à l'équipe",
    converto: "Répond avec vos vrais arguments de valeur et relance vers l'achat",
  },
  {
    label: "Connaissance de votre offre",
    classic: "Mots-clés et FAQ basiques",
    converto: "Maîtrise complète de vos formations, tarifs et objections fréquentes",
  },
  {
    label: "Résultat mesurable",
    classic: "Aucun — impossible à évaluer",
    converto: "CA généré visible dans votre dashboard chaque mois",
  },
  {
    label: "Ton et style",
    classic: "Scripté, générique",
    converto: "Configuré dans votre ton, votre style, votre vocabulaire",
  },
  {
    label: "Disponibilité",
    classic: "Variable selon l'outil",
    converto: "24h/24, 7j/7, sans exception",
  },
  {
    label: "Temps de réponse",
    classic: "Dépend des horaires et de la disponibilité",
    converto: "36 secondes, 24h/24, 7j/7",
  },
  {
    label: "Objectif",
    classic: "Traiter des demandes simples",
    converto: "Convaincre, convertir, vendre",
  },
] as const;

type BillingCycle = "monthly" | "annual";
type IconComponent = React.ComponentType<{ className?: string; strokeWidth?: number }>;
type IconTone = "blue" | "green" | "red" | "dark";

export const Route = createFileRoute("/")({
  component: Page,
});

function CTA({
  children,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex w-full items-center justify-center gap-2 h-12 px-6 rounded-full text-[15px] font-semibold transition-all whitespace-nowrap sm:w-auto";
  const styles =
    variant === "primary"
      ? "text-white bg-gradient-primary shadow-card hover:shadow-glow hover:-translate-y-0.5"
      : "text-[#161b25] bg-white border border-border hover:border-[#1948ff]/30";
  return (
    <a
      href={CAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
    </a>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-20 px-4 py-16 sm:px-8 sm:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-white/80 border border-border px-3.5 py-1.5 text-xs font-semibold text-[#1948ff] shadow-soft">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
      {children}
    </div>
  );
}

function IconBadge({
  icon: Icon,
  tone = "blue",
  size = "md",
}: {
  icon: IconComponent;
  tone?: IconTone;
  size?: "sm" | "md" | "lg";
}) {
  const tones: Record<IconTone, string> = {
    blue: "bg-[#1948ff]/10 text-[#1948ff] ring-[#1948ff]/10",
    green: "bg-[#16a34a]/10 text-[#15803d] ring-[#16a34a]/15",
    red: "bg-red-50 text-red-500 ring-red-100",
    dark: "bg-[#161b25]/5 text-[#161b25] ring-[#161b25]/10",
  };
  const sizes = {
    sm: "h-8 w-8 [&_svg]:h-4 [&_svg]:w-4",
    md: "h-11 w-11 [&_svg]:h-5 [&_svg]:w-5",
    lg: "h-12 w-12 sm:h-13 sm:w-13 [&_svg]:h-5 [&_svg]:w-5 sm:[&_svg]:h-6 sm:[&_svg]:w-6",
  };

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-2xl ring-1 ${tones[tone]} ${sizes[size]}`}
    >
      <Icon strokeWidth={2.25} />
    </span>
  );
}

function formatEuro(value: number) {
  return new Intl.NumberFormat("fr-FR").format(value);
}

function PriceDisplay({ price, billingCycle }: { price: string; billingCycle: BillingCycle }) {
  const monthlyPrice = Number(price);

  if (!Number.isFinite(monthlyPrice)) {
    return (
      <div>
        <div className="whitespace-nowrap text-2xl font-bold text-gradient">{price}</div>
        <p className="mt-1 min-h-5 text-xs font-semibold text-[#5f6673]">Tarif adapté au volume</p>
      </div>
    );
  }

  if (billingCycle === "annual") {
    const discountedMonthlyPrice = Math.round((monthlyPrice * 10) / 12);

    return (
      <div>
        <div className="whitespace-nowrap text-2xl font-bold text-gradient">
          {formatEuro(discountedMonthlyPrice)} € HT{" "}
          <span className="text-sm font-semibold text-[#5f6673]">/ mois</span>
        </div>
        <p className="mt-1 min-h-5 text-xs font-semibold text-[#15803d]">Facturation annuelle</p>
      </div>
    );
  }

  return (
    <div>
      <div className="whitespace-nowrap text-2xl font-bold text-gradient">
        {formatEuro(monthlyPrice)} € HT{" "}
        <span className="text-sm font-semibold text-[#5f6673]">/ mois</span>
      </div>
      <p className="mt-1 min-h-5 text-xs font-semibold text-[#5f6673]">Facturation mensuelle</p>
    </div>
  );
}

function Page() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  return (
    <div id="top" className="bg-white text-[#161b25]">
      <Nav />

      <section className="relative overflow-hidden px-4 pb-14 pt-28 sm:px-8 sm:pb-20 sm:pt-36">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 60% at 20% 0%, rgba(64,151,255,0.10) 0%, transparent 60%), radial-gradient(50% 50% at 90% 10%, rgba(25,72,255,0.08) 0%, transparent 60%), #ffffff",
          }}
        />
        <div className="max-w-7xl mx-auto grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="animate-fade-up">
            <Eyebrow>Pour les coachs, formateurs et infopreneurs français</Eyebrow>
            <h1 className="mt-5 text-[2.35rem] font-bold leading-[1.05] sm:text-5xl lg:text-[3.35rem]">
              Pas un chatbot. Un vrai <span className="text-gradient">commercial IA</span> qui
              connaît votre offre, lève les objections et{" "}
              <span className="text-gradient">vend vos formations</span> — 24h/24.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#5f6673] sm:text-lg">
              Converto installe et gère un commercial IA sur votre site et vos réseaux sociaux. Vos
              prospects obtiennent une réponse immédiate et convaincante. Vous voyez le CA généré en
              temps réel dans votre dashboard.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CTA>Réserver une démo gratuite</CTA>
              <a
                href="#fonctionnement"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-border bg-white px-6 text-[15px] font-semibold text-[#161b25] transition-all hover:border-[#1948ff]/30 sm:w-auto"
              >
                Voir comment ça fonctionne
                <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
              </a>
            </div>
            <div className="mt-6 grid gap-2 text-sm text-[#5f6673] sm:flex sm:flex-wrap sm:items-center sm:gap-x-6">
              <span className="flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 shadow-soft ring-1 ring-border sm:bg-transparent sm:px-0 sm:py-0 sm:shadow-none sm:ring-0">
                <Check /> Opérationnel en moins d'une semaine
              </span>
              <span className="flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 shadow-soft ring-1 ring-border sm:bg-transparent sm:px-0 sm:py-0 sm:shadow-none sm:ring-0">
                <Check /> CA généré visible dès le premier mois
              </span>
              <span className="flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 shadow-soft ring-1 ring-border sm:bg-transparent sm:px-0 sm:py-0 sm:shadow-none sm:ring-0">
                <Check /> Sans changer vos outils actuels
              </span>
            </div>
          </div>

          <div className="relative">
            <WhatsappMockup />
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-[#5f6673]">
              <span className="font-medium">Visiteur hésitant</span>
              <ArrowRight className="h-4 w-4 text-[#1948ff]" strokeWidth={2.4} />
              <span className="font-semibold text-[#1948ff]">Objection levée</span>
              <ArrowRight className="h-4 w-4 text-[#1948ff]" strokeWidth={2.4} />
              <span className="font-medium">Appel réservé</span>
            </div>
          </div>
        </div>
      </section>

      <Section id="difference" className="bg-surface">
        <div className="mx-auto max-w-3xl text-left sm:text-center">
          <Eyebrow>Différence</Eyebrow>
          <h2 className="mt-5 text-[1.8rem] font-bold leading-tight sm:text-4xl">
            Ce que votre chatbot actuel ne fait pas
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5f6673] sm:text-lg">
            La plupart des coachs ont déjà essayé un chatbot. Et la plupart ont été déçus. Voici
            pourquoi — et en quoi Converto est fondamentalement différent.
          </p>
        </div>

        <div className="mt-9 grid gap-4 md:hidden">
          {DIFFERENCE_ROWS.map((row) => (
            <div
              key={row.label}
              className="rounded-2xl border border-border bg-white p-4 shadow-soft"
            >
              <h3 className="text-sm font-bold text-[#161b25]">{row.label}</h3>
              <div className="mt-4 grid gap-3">
                <div className="rounded-xl border border-red-100 bg-red-50/80 p-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-red-600">
                    <XCircle className="h-4 w-4" strokeWidth={2.5} />
                    Chatbot classique
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-[#5f6673]">{row.classic}</p>
                </div>
                <div className="rounded-xl border border-[#16a34a]/20 bg-[#16a34a]/10 p-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#15803d]">
                    <CheckCircle2 className="h-4 w-4" strokeWidth={2.5} />
                    Commercial IA Converto
                  </div>
                  <p className="mt-2 text-sm font-semibold leading-relaxed text-[#161b25]">
                    {row.converto}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 hidden overflow-x-auto rounded-2xl border border-border bg-white shadow-soft md:block">
          <table className="min-w-[820px] w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="w-[28%] px-5 py-4 text-sm font-bold text-[#161b25]">Situation</th>
                <th className="w-[36%] bg-red-50/70 px-5 py-4 text-sm font-bold text-red-600">
                  <span className="flex items-center gap-2">
                    <XCircle className="h-4 w-4" strokeWidth={2.5} />
                    Chatbot classique
                    <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-bold uppercase text-red-500 ring-1 ring-red-100">
                      Limité
                    </span>
                  </span>
                </th>
                <th className="w-[36%] bg-[#16a34a]/10 px-5 py-4 text-sm font-bold text-[#15803d]">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" strokeWidth={2.5} />
                    Commercial IA Converto
                    <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-bold uppercase text-[#15803d] ring-1 ring-[#16a34a]/20">
                      Orienté vente
                    </span>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {DIFFERENCE_ROWS.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-border transition-colors last:border-b-0 hover:bg-surface/60"
                >
                  <td className="px-5 py-4 text-sm font-bold text-[#161b25]">{row.label}</td>
                  <td className="bg-red-50/35 px-5 py-4 text-sm leading-relaxed text-[#5f6673]">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-red-500 ring-1 ring-red-100">
                        <XCircle className="h-3.5 w-3.5" strokeWidth={2.7} />
                      </span>
                      <span>{row.classic}</span>
                    </div>
                  </td>
                  <td className="bg-[#16a34a]/5 px-5 py-4 text-sm font-semibold leading-relaxed text-[#161b25]">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[#15803d] ring-1 ring-[#16a34a]/20">
                        <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2.7} />
                      </span>
                      <span>{row.converto}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mx-auto mt-7 max-w-3xl rounded-2xl border border-[#1948ff]/10 bg-[#1948ff]/5 px-5 py-4 text-left sm:mt-8 sm:px-6 sm:py-5 sm:text-center">
          <p className="inline-flex flex-col items-start gap-3 text-lg font-bold text-[#161b25] sm:flex-row sm:items-center sm:justify-center">
            <IconBadge icon={Target} tone="blue" size="sm" />
            Un chatbot répond. Un commercial IA convainc. Ce n'est pas le même métier.
          </p>
        </div>
      </Section>

      <Section id="constat">
        <div className="mx-auto max-w-3xl text-left sm:text-center">
          <Eyebrow>Le constat</Eyebrow>
          <h2 className="mt-5 text-[1.8rem] font-bold leading-tight sm:text-4xl">
            Vous avez du trafic. Mais combien de visiteurs repartent sans jamais vous parler ?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5f6673] sm:text-lg">
            La plupart des coachs et infopreneurs perdent des ventes non pas parce que leur offre
            est mauvaise — mais parce que leurs prospects ne trouvent pas de réponse convaincante à
            leurs questions avant d'acheter.
          </p>
        </div>
        <div className="mt-9 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {[
            {
              icon: MessageCircle,
              tone: "blue",
              t: "Ils ont des objections, pas des réponses",
              d: '"C\'est trop cher", "est-ce que ça marche vraiment", "en quoi c\'est différent de la concurrence" — si personne ne répond maintenant, le prospect ferme l\'onglet.',
            },
            {
              icon: Clock3,
              tone: "dark",
              t: "Vous ne pouvez pas être disponible 24h/24",
              d: "Vos prospects visitent votre site le soir, le week-end, entre deux réunions. Vous ne pouvez pas répondre à chaque message en temps réel.",
            },
            {
              icon: TrendingDown,
              tone: "red",
              t: "Les prospects froids ne reviennent pas",
              d: "Un visiteur non engagé est une opportunité perdue. La plupart ne reviennent jamais une fois l'onglet fermé.",
            },
            {
              icon: MousePointerClick,
              tone: "blue",
              t: "Vos concurrents répondent pendant que vous dormez",
              d: "Dans un marché de la formation très concurrentiel, le premier à engager la conversation remporte souvent la vente.",
            },
          ].map((c, i) => (
            <div
              key={i}
              className="group flex gap-4 rounded-2xl border border-border bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[#1948ff]/20 hover:shadow-card sm:block sm:p-6"
            >
              <IconBadge icon={c.icon} tone={c.tone as IconTone} />
              <div>
                <h3 className="font-semibold leading-snug text-[#161b25] sm:mt-4">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5f6673]">{c.d}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="fonctionnement" className="bg-surface">
        <div className="mx-auto max-w-3xl text-left sm:text-center">
          <Eyebrow>La solution</Eyebrow>
          <h2 className="mt-5 text-[1.8rem] font-bold leading-tight sm:text-4xl">
            Converto installe, configure et optimise votre commercial IA. Vous n'avez rien à faire.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5f6673] sm:text-lg">
            Une seule mécanique : chaque visiteur qui hésite reçoit une réponse immédiate et
            convaincante, puis Converto le guide vers un achat ou un appel découverte.
          </p>
        </div>

        <div className="mx-auto mt-9 max-w-2xl space-y-2 sm:mt-12 sm:space-y-3">
          {[
            {
              t: "Audit de votre offre",
              d: "On analyse vos formations, vos arguments de vente, vos tarifs et les objections les plus fréquentes de vos prospects. Votre commercial IA les connaîtra mieux que la plupart des vendeurs humains.",
              n: "01",
              icon: SearchCheck,
            },
            {
              t: "Configuration sur-mesure",
              d: "On programme votre commercial IA pour qu'il réponde dans votre ton, avec vos mots, vos arguments. Rien de générique.",
              n: "02",
              icon: Settings2,
            },
            {
              t: "Déploiement sur vos canaux",
              d: "Site web, WhatsApp, Instagram, Messenger — votre commercial IA est actif partout où vos prospects vous cherchent.",
              n: "03",
              icon: Rocket,
            },
            {
              t: "Prise de RDV sans friction",
              d: "Votre commercial IA réserve des appels directement dans la conversation, sans rediriger le prospect vers un lien externe. Le RDV est confirmé sans quitter le canal.",
              n: "04",
              icon: CalendarCheck2,
            },
            {
              t: "Optimisation mensuelle",
              d: "Chaque mois, on analyse les conversations et on améliore les scripts pour augmenter le taux de conversion.",
              n: "05",
              icon: LineChart,
            },
            {
              t: "Reporting CA généré",
              d: "Vous recevez un rapport mensuel avec le CA directement attribuable à votre commercial IA. Pas de flou sur la rentabilité.",
              n: "06",
              icon: CircleDollarSign,
            },
          ].map((s, i, arr) => (
            <div key={i} className="relative">
              <div className="group flex items-start gap-4 rounded-2xl border border-border bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1948ff]/20 hover:shadow-card sm:gap-5 sm:p-5">
                <div className="relative shrink-0">
                  <IconBadge icon={s.icon} tone="blue" size="lg" />
                  <span className="absolute -right-2 -top-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full bg-white px-1 text-[10px] font-bold text-[#1948ff] shadow-soft ring-1 ring-[#1948ff]/10">
                    {s.n}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold leading-snug">{s.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#5f6673]">{s.d}</p>
                </div>
              </div>
              {i < arr.length - 1 && (
                <div className="flex justify-center my-1">
                  <div className="h-5 w-px bg-gradient-to-b from-[#4097ff] to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-[#1948ff]/10 bg-[#1948ff]/5 px-5 py-4 text-left sm:mt-10 sm:px-6 sm:py-5 sm:text-center">
          <p className="text-sm font-semibold leading-relaxed text-[#161b25] sm:text-[15px]">
            Sans changer vos outils actuels, sans formation technique, sans gérer quoi que ce soit
            au quotidien.
          </p>
        </div>
      </Section>

      <Section id="fonctionnalites" className="section-soft-blue">
        <div className="mx-auto max-w-3xl text-left sm:text-center">
          <Eyebrow>Ce que Converto fait concrètement</Eyebrow>
          <h2 className="mt-5 text-[1.8rem] font-bold leading-tight sm:text-4xl">
            Un vrai commercial. Pas un script.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5f6673] sm:text-lg">
            Converto a été conçu pour vendre comme un commercial avec 25 ans d'expérience — pas pour
            répondre à des questions selon des règles prédéfinies. Voici ce qu'il fait dans chaque
            conversation.
          </p>
        </div>

        <div className="mt-9 grid gap-3 sm:mt-12 sm:gap-5 md:grid-cols-2">
          {[
            {
              icon: BrainCircuit,
              tone: "blue",
              t: "Il lit, comprend et s'adapte en temps réel",
              d: "Converto ne suit pas un arbre de décision. Il comprend le contexte de chaque message, lit le ton du prospect, s'adapte à sa façon de parler et détecte automatiquement les signaux d'achat pour passer en mode closing au bon moment.",
            },
            {
              icon: AudioLines,
              tone: "dark",
              t: "Il comprend les notes vocales, photos et PDFs",
              d: "Vos prospects envoient des vocaux ? Des screenshots ? Des documents ? Converto transcrit les notes vocales automatiquement, comprend les images et continue la conversation sans jamais bloquer sur un format inattendu.",
            },
            {
              icon: RefreshCw,
              tone: "blue",
              t: "Il relance les prospects silencieux",
              d: "Un prospect qui ne répond plus n'est pas perdu. Converto détecte les conversations sans réponse et envoie des relances personnalisées et espacées dans le temps — J+1, J+3, J+7 — en reprenant exactement là où la conversation s'était arrêtée.",
            },
            {
              icon: Megaphone,
              tone: "green",
              t: "Il réactive votre base de contacts dormante",
              d: "Vous avez une liste WhatsApp ou Instagram que vous n'avez pas contactée depuis des mois ? Converto envoie des campagnes de réactivation personnalisées, gère toutes les réponses en temps réel et oriente vers votre offre. Une liste dormante peut générer plusieurs ventes dès la première campagne.",
            },
            {
              icon: CalendarCheck2,
              tone: "blue",
              t: "Il réserve des RDV sans quitter la conversation",
              d: "Converto réserve des appels directement dans la conversation — sans rediriger le prospect vers un lien externe, sans formulaire, sans friction. Le créneau est confirmé en quelques secondes, dans le canal où la conversation a lieu.",
            },
            {
              icon: MessagesSquare,
              tone: "dark",
              t: "Il est actif sur tous vos canaux en même temps",
              d: "Site web, WhatsApp, Instagram, Messenger, Telegram, SMS — un seul commercial IA actif partout où se trouvent vos prospects. Toutes les conversations arrivent dans un inbox unifié. Vous gardez la main en un clic à tout moment.",
            },
            {
              icon: SearchCheck,
              tone: "blue",
              t: "Il cherche l'information en temps réel",
              d: "Si un prospect pose une question dont la réponse n'est pas dans sa base de connaissance, Converto recherche l'information en temps réel et continue la conversation avec une réponse sourcée. Fini le \"je vais vérifier et revenir vers vous\" qui tue les conversions.",
            },
            {
              icon: TrendingUp,
              tone: "green",
              t: "Il s'améliore automatiquement à chaque conversation",
              d: "Le moteur d'optimisation analyse en continu les conversations gagnantes et perdantes. Il identifie les patterns qui mènent à des ventes et améliore les scripts automatiquement. Chaque suggestion est validée avant déploiement. Plus Converto tourne, mieux il convertit.",
            },
          ].map((c, i) => (
            <div
              key={i}
              className="group flex gap-4 rounded-2xl border border-border bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[#1948ff]/20 hover:shadow-card sm:p-6"
            >
              <IconBadge icon={c.icon} tone={c.tone as IconTone} />
              <div>
                <h3 className="font-semibold leading-snug text-[#161b25]">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5f6673]">{c.d}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-9 max-w-5xl rounded-2xl border border-[#1948ff]/10 bg-[#1948ff]/5 p-5 text-left sm:mt-12 sm:p-6 sm:text-center">
          <p className="text-sm font-bold text-[#161b25] sm:text-base">
            Actif sur 6 canaux — là où se trouvent vos prospects
          </p>
          <div className="mt-4 flex flex-wrap gap-2 sm:justify-center sm:gap-2.5">
            {[
              { label: "Web chat", icon: Globe2 },
              { label: "WhatsApp", icon: MessageCircle },
              { label: "Instagram", icon: Instagram },
              { label: "Messenger", icon: MessagesSquare },
              { label: "Telegram", icon: Send },
              { label: "SMS", icon: MessageSquareText },
            ].map((channel) => (
              <div
                key={channel.label}
                className="inline-flex items-center gap-2 rounded-full border border-[#1948ff]/10 bg-white px-3 py-2 text-sm font-semibold text-[#161b25] shadow-soft"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#1948ff]/10 text-[#1948ff]">
                  <channel.icon className="h-4 w-4" strokeWidth={2.4} />
                </span>
                {channel.label}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-3xl text-left sm:mt-10 sm:text-center">
          <h3 className="text-xl font-bold leading-tight text-[#161b25]">
            Voir Converto en action sur votre offre
          </h3>
          <p className="mt-2 text-sm font-semibold text-[#5f6673]">
            Démo gratuite de 30 min — sans engagement
          </p>
          <div className="mt-5">
            <CTA>Réserver une démo gratuite</CTA>
          </div>
        </div>
      </Section>

      <Section id="resultats">
        <div className="mx-auto max-w-3xl text-left sm:text-center">
          <Eyebrow>Résultats</Eyebrow>
          <h2 className="mt-5 text-[1.8rem] font-bold leading-tight sm:text-4xl">
            Ce que vous voyez dans votre dashboard chaque mois
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5f6673] sm:text-lg">
            Contrairement à un chatbot classique, Converto ne se contente pas de répondre — il
            convertit. Voici les chiffres mesurés sur nos premiers déploiements.
          </p>
        </div>
        <div className="mx-auto mt-9 max-w-5xl overflow-hidden rounded-2xl border border-border bg-white shadow-soft sm:mt-12">
          <div className="p-4 sm:p-8">
            <div className="mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-2xl bg-gradient-primary text-white flex items-center justify-center shadow-soft">
                  <BarChart3 className="h-5 w-5" strokeWidth={2.3} />
                </span>
                <div>
                  <h3 className="text-lg font-bold">Dashboard Converto</h3>
                  <p className="text-sm text-[#5f6673]">CA généré mesurable</p>
                </div>
              </div>
              <div className="w-fit rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-[#161b25]">
                Vue mensuelle
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl gap-3 md:grid-cols-3 md:gap-4">
              {[
                {
                  icon: MessageCircle,
                  label: "Conversations commerciales initiées",
                  desc: "Chaque visiteur qui engage avec votre commercial IA",
                  example: "Ex : 47 conversations engagées en avril",
                },
                {
                  icon: TrendingUp,
                  label: "Taux de conversion",
                  desc: "Conversations transformées en appels réservés ou achats directs",
                  example: "Ex : taux de réservation multiplié par 4 à 6 vs formulaire classique",
                },
                {
                  icon: CircleDollarSign,
                  label: "CA généré ce mois",
                  desc: "Le chiffre d'affaires directement attribuable à votre commercial IA",
                  example: "Ex : 3 200 € générés sur 47 conversations en avril",
                  highlight: true,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`rounded-xl border p-4 sm:p-5 ${
                    item.highlight
                      ? "bg-[#16a34a]/10 border-[#16a34a]/25 shadow-[0_18px_40px_rgba(22,163,74,0.14)]"
                      : "bg-surface border-border"
                  }`}
                >
                  <IconBadge icon={item.icon} tone={item.highlight ? "green" : "blue"} size="lg" />
                  <p className="mt-3 text-sm font-bold text-[#161b25] leading-relaxed">
                    {item.label}
                  </p>
                  <p className="mt-2 text-xs text-[#5f6673] leading-relaxed">{item.desc}</p>
                  <p
                    className={`mt-3 text-xs font-semibold leading-relaxed ${
                      item.highlight ? "text-[#15803d]" : "text-[#1948ff]"
                    }`}
                  >
                    {item.example}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-[#1948ff]/10 bg-[#1948ff]/5 p-4 sm:mt-8 sm:p-6">
              <h4 className="font-bold text-[#161b25]">
                Vous avez déjà fait le plus dur : attirer des visiteurs.
              </h4>
              <p className="mt-2 text-sm text-[#5f6673] leading-relaxed">
                Converto s'assure qu'ils ne repartent pas sans avoir eu une vraie conversation
                commerciale — et vous voyez chaque euro généré en temps réel.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="pour-qui" className="bg-surface">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <Eyebrow>Pour qui</Eyebrow>
            <h2 className="mt-5 text-[1.8rem] font-bold leading-tight sm:text-4xl">
              Converto est fait pour vous si vous vendez des offres à forte valeur
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5f6673] sm:text-lg">
              Votre commercial IA crée le plus de valeur quand il y a de vraies objections à lever
              et un vrai CA à générer par conversation.
            </p>
          </div>
          <CTA>Réserver une démo gratuite</CTA>
        </div>

        <div className="mt-9 grid items-stretch gap-4 sm:mt-12 lg:grid-cols-[1.05fr_1fr_0.9fr] lg:gap-5">
          <div className="rounded-2xl border border-[#16a34a]/20 bg-white p-5 shadow-soft sm:p-6">
            <h3 className="text-lg font-bold">Converto est fait pour vous si :</h3>
            <ul className="mt-4 space-y-3 sm:mt-5">
              {[
                "vous vendez des formations ou accompagnements à partir de 500 €",
                "vous avez déjà du trafic sur votre site ou vos réseaux sociaux",
                "vous perdez du temps à répondre aux mêmes questions en DM",
                "vous voulez mesurer précisément ce que votre outil commercial vous rapporte chaque mois",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[15px] text-[#161b25]">
                  <Check />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-red-100 bg-white p-5 shadow-soft sm:p-6">
            <h3 className="text-lg font-bold">Ce n'est probablement pas adapté si :</h3>
            <ul className="mt-4 space-y-3 sm:mt-5">
              {[
                "vous n'avez pas encore de trafic ni d'audience",
                "vous vendez uniquement des produits à moins de 100 €",
                "vous cherchez un simple outil de FAQ automatisé",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[15px] text-[#161b25]">
                  <XMark />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-white p-5 shadow-soft sm:p-6">
            <h3 className="text-lg font-bold">Profils concernés</h3>
            <div className="mt-4 flex flex-wrap gap-2 sm:mt-5 sm:gap-2.5">
              {[
                "Coach business",
                "Coach de vie",
                "Formateur en ligne",
                "Thérapeute / praticien",
                "Consultant",
                "Créateur de contenu avec offre premium",
                "Infopreneur",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2 rounded-full bg-surface px-3 py-2">
                  <Check />
                  <span className="text-sm font-medium text-[#161b25]">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="chiffres">
        <div className="mx-auto max-w-3xl text-left sm:text-center">
          <Eyebrow>Les chiffres parlent</Eyebrow>
          <h2 className="mt-5 text-[1.8rem] font-bold leading-tight sm:text-4xl">
            Des résultats mesurés. Pas des promesses.
          </h2>
        </div>

        <div className="mt-9 grid gap-4 sm:mt-12 md:grid-cols-2 md:gap-5">
          {[
            {
              icon: ShoppingCart,
              title: "40% des paniers abandonnés récupérés — contre 9% en email classique",
              stat: "40%",
              desc: "Sur nos premiers déploiements e-commerce, Converto récupère 40% des paniers abandonnés via une conversation directe sur WhatsApp ou Instagram. L'email de relance classique tourne à 9%. La différence : une vraie conversation vs un email ignoré.",
            },
            {
              icon: Zap,
              title: "Temps de réponse réduit de 24h à 36 secondes",
              stat: "36s",
              desc: "Vos prospects obtiennent une réponse en 36 secondes — avant même d'avoir fermé l'onglet. Fini les leads qui refroidissent pendant la nuit ou le week-end.",
            },
            {
              icon: CalendarCheck2,
              title: "Taux de réservation d'appels multiplié par 4 à 6",
              stat: "×4 à ×6",
              desc: "Les formulaires de contact convertissent peu — le prospect doit faire l'effort d'aller sur une page externe et remplir des champs. Converto transforme ce tunnel passif en discussion active sur WhatsApp ou Instagram. L'effort est quasi nul, le taux de réservation explose mécaniquement.",
            },
            {
              icon: TrendingDown,
              title: "97% de vos visiteurs repartent sans acheter ni vous contacter",
              stat: "97%",
              desc: "Même avec une page de vente optimisée, la quasi-totalité de votre trafic s'évapore en silence. Ces prospects ont vu votre offre. Ils hésitaient. Personne n'était là pour les convaincre.",
            },
          ].map((c, i) => (
            <div
              key={i}
              className="flex flex-col rounded-2xl border border-border bg-white p-5 shadow-soft sm:p-7"
            >
              <div className="flex items-center gap-3">
                <IconBadge icon={c.icon} tone="blue" />
                <div
                  className="text-4xl font-bold text-gradient sm:text-5xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {c.stat}
                </div>
              </div>
              <h3 className="mt-4 font-semibold leading-snug text-[#161b25]">{c.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-[#5f6673]">{c.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-[#8a90a0]">
          Sources : Résultats mesurés — déploiements Converto 2025 / Benchmarks taux de conversion
          secteur formation en ligne
        </p>

        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-[#1948ff]/10 bg-[#1948ff]/5 p-5 text-left sm:mt-12 sm:text-center">
          <p className="text-base leading-relaxed text-[#5f6673] sm:text-lg">
            Ces chiffres ne sont pas des projections. Ce sont des résultats mesurés sur nos premiers
            déploiements. Votre dashboard vous montrera les vôtres.
          </p>
        </div>
      </Section>

      <Section id="offres" className="bg-surface">
        <div className="mx-auto max-w-3xl text-left sm:text-center">
          <Eyebrow>Tarifs</Eyebrow>
          <h2 className="mt-5 text-[1.8rem] font-bold leading-tight sm:text-4xl">
            Trois formules selon vos canaux et vos ambitions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5f6673] sm:text-lg">
            Chaque formule inclut un setup complet et un abonnement mensuel. Vous ne payez que si
            votre commercial IA est en place et actif.
          </p>
          <div className="mt-7 grid w-full grid-cols-2 rounded-full border border-border bg-white p-1 shadow-soft sm:mx-auto sm:inline-grid sm:w-auto">
            {[
              { value: "monthly", label: "Mensuel" },
              { value: "annual", label: "Annuel - 2 mois offerts" },
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                aria-pressed={billingCycle === option.value}
                onClick={() => setBillingCycle(option.value as BillingCycle)}
                className={`h-10 rounded-full px-3 text-sm font-semibold transition-all sm:px-5 ${
                  billingCycle === option.value
                    ? "bg-gradient-primary text-white shadow-soft"
                    : "text-[#5f6673] hover:text-[#161b25]"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-9 grid gap-4 sm:mt-12 lg:grid-cols-3 lg:gap-5">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:p-6 ${
                plan.featured
                  ? "border-[#1948ff]/35 shadow-[0_24px_70px_rgba(25,72,255,0.14)]"
                  : "border-border"
              }`}
            >
              {plan.badge && (
                <div
                  className={`absolute left-1/2 top-0 inline-flex w-fit -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full border border-[#1948ff]/20 bg-white px-3 py-1 text-xs font-bold shadow-soft ${
                    plan.featured ? "bg-[#1948ff]/5 text-[#1948ff]" : "bg-surface text-[#5f6673]"
                  }`}
                >
                  <BadgeCheck className="h-3.5 w-3.5" strokeWidth={2.5} />
                  {plan.badge}
                </div>
              )}
              <div className="min-h-28">
                <h3 className="text-xl font-bold text-[#161b25]">{plan.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5f6673]">{plan.description}</p>
              </div>
              <div className="mt-5 min-h-16">
                <p className="text-xs font-semibold uppercase text-[#5f6673]">Abonnement</p>
                <div className="mt-1">
                  <PriceDisplay price={plan.price} billingCycle={billingCycle} />
                </div>
              </div>
              <div className="mt-5 min-h-20 rounded-xl border border-border bg-surface px-4 py-3">
                <p className="text-xs font-semibold uppercase text-[#5f6673]">Setup</p>
                <p className="mt-1 text-lg font-bold text-[#161b25]">
                  {formatEuro(Number(plan.setup))} € HT{" "}
                  <span className="text-sm font-semibold text-[#5f6673]">(une fois)</span>
                </p>
              </div>
              <div className="mt-6 text-sm font-bold text-[#161b25]">Inclus :</div>
              <ul className="mt-4 space-y-3 flex-1">
                {plan.features.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-[#161b25]">
                    <Check />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-7 max-w-3xl rounded-2xl border border-[#16a34a]/25 bg-[#16a34a]/10 px-5 py-4 text-left shadow-[0_18px_40px_rgba(22,163,74,0.12)] sm:mt-8 sm:px-6 sm:py-5 sm:text-center">
          <h3 className="inline-flex items-center gap-2 text-lg font-bold text-[#15803d] sm:justify-center sm:text-xl">
            <ShieldCheck className="h-5 w-5" strokeWidth={2.4} />
            Garantie résultat premier mois
          </h3>
          <p className="mt-2 text-sm font-semibold leading-relaxed text-[#161b25]">
            Si votre commercial IA ne génère aucune conversation qualifiée lors du premier mois, le
            mois suivant est offert.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl text-left sm:mt-10 sm:text-center">
          <p className="text-base leading-relaxed text-[#5f6673] sm:text-lg">
            Vous ne savez pas quelle formule choisir ? En démo, on regarde ensemble votre situation,
            vos canaux et vos objectifs pour vous orienter vers la formule la plus adaptée.
          </p>
          <div className="mt-6">
            <CTA>Réserver une démo gratuite</CTA>
          </div>
        </div>
      </Section>

      <Section id="faq">
        <div className="mx-auto max-w-3xl text-left sm:text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-5 text-[1.8rem] font-bold leading-tight sm:text-4xl">
            Les questions les plus fréquentes
          </h2>
        </div>
        <div className="mt-8 sm:mt-12">
          <Faq />
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="mx-auto flex max-w-4xl flex-col gap-5 rounded-2xl border border-border bg-white p-5 shadow-soft sm:gap-8 sm:p-8 md:flex-row md:items-center">
          <div className="mx-auto h-24 w-24 shrink-0 overflow-hidden rounded-3xl border border-[#1948ff]/15 bg-surface shadow-card sm:h-28 sm:w-28 md:mx-0">
            <img
              src="/Photo%20Geoffroy.png"
              alt="Geoffroy de Miol-Flavard"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="text-left md:text-left">
            <Eyebrow>Qui configure votre commercial IA ?</Eyebrow>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-[#161b25]">
              Geoffroy de Miol-Flavard, fondateur de Converto
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#5f6673] sm:text-base">
              Chaque commercial IA est configuré avec une logique de vente concrète : compréhension
              de votre offre, objections à lever, ton de marque, scénarios de conversion et suivi du
              CA généré.
            </p>
          </div>
        </div>
      </Section>

      <section className="px-4 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-12">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-gradient-primary p-7 text-left shadow-glow sm:p-14 sm:text-center">
          <div
            className="absolute inset-0 opacity-20"
            style={{ background: "radial-gradient(circle at 30% 20%, white, transparent 50%)" }}
          />
          <h2 className="relative mx-auto max-w-3xl text-[2rem] font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Votre commercial IA pourrait être actif d'ici une semaine.
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:mt-5 sm:text-lg">
            Réservez une démo gratuite de 30 minutes. On regarde ensemble votre offre, vos canaux,
            et on vous dit honnêtement si Converto peut vous apporter de la valeur.
          </p>
          <div className="relative mt-7 flex justify-center sm:mt-8">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-7 text-[15px] font-semibold text-[#1948ff] shadow-card transition-all hover:-translate-y-0.5 sm:w-auto"
            >
              <Sparkles className="h-4 w-4" strokeWidth={2.4} />
              Réserver une démo gratuite
              <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-5 sm:px-8 py-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <img src={LOGO_URL} alt="Converto" className="h-7 w-auto" />
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[#5f6673]">
            <a href="/mentions-legales" className="hover:text-[#161b25]">
              Mentions légales
            </a>
            <a href="/politique-confidentialite" className="hover:text-[#161b25]">
              Politique de confidentialité
            </a>
            <a href="/contact" className="hover:text-[#161b25]">
              Contact
            </a>
          </nav>
          <div className="text-xs text-[#5f6673]">© {new Date().getFullYear()} Converto</div>
        </div>
      </footer>
    </div>
  );
}

function Check() {
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1948ff]/10 text-[#1948ff]">
      <CheckCircle2 className="h-3.5 w-3.5" strokeWidth={2.7} />
    </span>
  );
}

function XMark() {
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
      <XCircle className="h-3.5 w-3.5" strokeWidth={2.7} />
    </span>
  );
}
