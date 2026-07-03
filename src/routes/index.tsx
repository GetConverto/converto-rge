import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { WhatsappMockup } from "@/components/site/WhatsappMockup";
import { Faq } from "@/components/site/Faq";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Calculator,
  CalendarCheck2,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  LineChart,
  MessagesSquare,
  Rocket,
  SearchCheck,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
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
    description:
      "Idéal pour une entreprise à ticket élevé qui veut capter plus de demandes sur un canal prioritaire.",
    setup: "1500",
    price: "290",
    featured: false,
    features: [
      "Audit de votre offre et scénarios de vente",
      "Déploiement sur 1 canal au choix",
      "Scénarios de vente personnalisés à votre offre",
      "Dashboard rendez-vous, devis et CA attribué",
      "Relances automatiques et campagnes de réactivation",
      "Support par email",
    ],
  },
  {
    name: "Growth",
    badge: "Le plus populaire",
    description: "Idéal pour une entreprise qui reçoit des messages sur plusieurs canaux actifs.",
    setup: "2000",
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
    description:
      "Idéal pour une équipe avec plusieurs offres, points de vente ou forte volumétrie.",
    setup: "2500",
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

const ROI_PLANS = [
  { name: "Starter", price: 290 },
  { name: "Growth", price: 490 },
  { name: "Scale", price: 790 },
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
    converto: "Maîtrise complète de vos offres, tarifs et objections fréquentes",
  },
  {
    label: "Résultat mesurable",
    classic: "Aucun — impossible à évaluer",
    converto: "Conversations qualifiées, rendez-vous et ventes attribuées dans votre dashboard",
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
    converto: "15 secondes, 24h/24, 7j/7",
  },
  {
    label: "Objectif",
    classic: "Traiter des demandes simples",
    converto: "Convaincre, convertir, vendre",
  },
] as const;

const SOLUTION_STEPS = [
  {
    t: "Audit de votre offre",
    d: "On analyse vos offres, vos arguments de vente, vos tarifs et les objections les plus fréquentes de vos futurs clients.",
    n: "01",
    icon: SearchCheck,
  },
  {
    t: "Votre façon de vendre, disponible en continu",
    d: "Nous reprenons votre offre, vos arguments de vente et votre manière de convaincre. Les réponses restent dans votre ton, avec vos mots, sans discours générique.",
    n: "02",
    icon: Settings2,
  },
  {
    t: "Déploiement sur vos canaux",
    d: "Site web, WhatsApp, Instagram, Messenger — vos demandes reçoivent une réponse là où elles arrivent.",
    n: "03",
    icon: Rocket,
  },
  {
    t: "Prise de RDV sans friction",
    d: "La personne réserve directement un rendez-vous dans la conversation, sans être redirigée vers un lien externe.",
    n: "04",
    icon: CalendarCheck2,
  },
  {
    t: "Optimisation mensuelle",
    d: "Chaque mois, on analyse les conversations réelles, les objections fréquentes et les points de blocage pour améliorer les scénarios de conversion.",
    n: "05",
    icon: LineChart,
  },
  {
    t: "Reporting commercial",
    d: "Vous suivez les conversations, les rendez-vous, les ventes attribuées et les opportunités à relancer. Pas de pilotage à l'aveugle.",
    n: "06",
    icon: CircleDollarSign,
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
  const [openSolutionStep, setOpenSolutionStep] = useState("01");
  const [averageClientValue, setAverageClientValue] = useState(2000);
  const [marginRate, setMarginRate] = useState(30);
  const [selectedRoiPlan, setSelectedRoiPlan] =
    useState<(typeof ROI_PLANS)[number]["name"]>("Starter");
  const monthlyCost = ROI_PLANS.find((plan) => plan.name === selectedRoiPlan)?.price ?? 290;
  const averageProfit = Math.max(0, averageClientValue) * (Math.max(0, marginRate) / 100);
  const clientsNeeded = averageProfit > 0 ? monthlyCost / averageProfit : 0;

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
            <Eyebrow>
              Pour les entreprises qui veulent transformer plus de visiteurs en clients.
            </Eyebrow>
            <h1 className="mt-5 text-[2.35rem] font-bold leading-[1.05] sm:text-5xl lg:text-[3.35rem]">
              Vos <span className="text-gradient">futurs clients</span> ne devraient jamais{" "}
              <span className="text-gradient">repartir sans réponse</span>.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#5f6673] sm:text-lg">
              Chaque semaine, des personnes sont prêtes à vous contacter, demandent un devis ou
              hésitent avant de passer à l'action. Beaucoup repartent simplement parce qu'elles
              n'obtiennent pas une réponse au bon moment.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CTA>Voir si c'est rentable pour moi</CTA>
              <a
                href="#probleme"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-border bg-white px-6 text-[15px] font-semibold text-[#161b25] transition-all hover:border-[#1948ff]/30 sm:w-auto"
              >
                Voir ce qui change concrètement
                <ArrowRight className="h-4 w-4" strokeWidth={2.4} />
              </a>
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

      <Section id="probleme" className="bg-surface">
        <div className="mx-auto max-w-3xl text-left sm:text-center">
          <Eyebrow>Le vrai manque à gagner</Eyebrow>
          <h2 className="mt-5 text-[1.8rem] font-bold leading-tight sm:text-4xl">
            Ce qui se passe quand personne n'est disponible pour répondre
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5f6673] sm:text-lg">
            Le problème n'est pas seulement le délai de réponse. C'est tout ce que vous ne voyez
            jamais : la question non posée, l'objection non traitée, le rendez-vous jamais réservé.
          </p>
        </div>

        <div className="mt-9 grid gap-4 sm:mt-12 lg:grid-cols-2 lg:gap-5">
          <div className="rounded-2xl border border-red-100 bg-white p-5 shadow-soft sm:p-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold uppercase text-red-600">
              <XCircle className="h-4 w-4" strokeWidth={2.5} />
              Aujourd'hui
            </div>
            <div className="mt-6 space-y-3">
              {[
                "Une personne découvre votre entreprise.",
                "Elle hésite.",
                "Elle ne trouve pas de réponse au bon moment.",
                "Elle repart.",
                "Vous ne saurez jamais pourquoi.",
              ].map((step, index, steps) => (
                <div key={step}>
                  <div className="rounded-xl border border-red-100 bg-red-50/60 px-4 py-3 text-sm font-semibold leading-relaxed text-[#161b25]">
                    {step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="flex justify-center py-1.5">
                      <ArrowRight className="h-4 w-4 rotate-90 text-red-400" strokeWidth={2.4} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#16a34a]/25 bg-white p-5 shadow-soft sm:p-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#16a34a]/10 px-3 py-1.5 text-xs font-bold uppercase text-[#15803d]">
              <CheckCircle2 className="h-4 w-4" strokeWidth={2.5} />
              Avec Converto
            </div>
            <div className="mt-6 space-y-3">
              {[
                "La personne est contactée en quelques secondes.",
                "Ses questions trouvent une réponse claire.",
                "Ses objections sont levées.",
                "Elle réserve un rendez-vous ou avance vers l'achat.",
                "Votre équipe récupère une opportunité beaucoup plus avancée.",
              ].map((step, index, steps) => (
                <div key={step}>
                  <div className="rounded-xl border border-[#16a34a]/20 bg-[#16a34a]/10 px-4 py-3 text-sm font-semibold leading-relaxed text-[#161b25]">
                    {step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="flex justify-center py-1.5">
                      <ArrowRight className="h-4 w-4 rotate-90 text-[#15803d]" strokeWidth={2.4} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="comparatif">
        <div className="mx-auto max-w-3xl text-left sm:text-center">
          <Eyebrow>Pourquoi Converto</Eyebrow>
          <h2 className="mt-5 text-[1.8rem] font-bold leading-tight sm:text-4xl">
            Vos visiteurs n'ont pas besoin d'un chatbot. Ils ont besoin d'un commercial.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5f6673] sm:text-lg">
            La différence est simple : un chatbot attend une question. Converto fait avancer la
            vente, rassure la personne qui hésite et l'aide à passer à l'étape suivante.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:hidden">
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
                    Avec Converto
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
                    Avec Converto
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
            Un chatbot répond. Converto fait avancer la vente. Ce n'est pas le même métier.
          </p>
        </div>
      </Section>

      <Section id="fonctionnement" className="bg-surface">
        <div className="mx-auto max-w-3xl text-left sm:text-center">
          <Eyebrow>La solution</Eyebrow>
          <h2 className="mt-5 text-[1.8rem] font-bold leading-tight sm:text-4xl">
            Vos meilleurs arguments de vente deviennent disponibles 24h/24.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5f6673] sm:text-lg">
            Une mécanique simple : chaque personne qui vous contacte obtient immédiatement une
            réponse, une clarification de son besoin et une prochaine étape commerciale sans
            friction.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-3xl space-y-3 sm:mt-10">
          {SOLUTION_STEPS.map((s) => {
            const isOpen = openSolutionStep === s.n;

            return (
              <div
                key={s.n}
                className={`group relative overflow-hidden rounded-2xl border bg-white shadow-soft transition-all duration-300 ${
                  isOpen
                    ? "border-[#1948ff]/30 shadow-card"
                    : "border-border hover:-translate-y-0.5 hover:border-[#1948ff]/20 hover:shadow-card"
                }`}
              >
                <div
                  className={`absolute inset-y-0 left-0 w-1 transition-colors ${
                    isOpen ? "bg-gradient-primary" : "bg-transparent"
                  }`}
                />
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`solution-step-${s.n}`}
                  onClick={() => setOpenSolutionStep(isOpen ? "" : s.n)}
                  className="flex w-full items-center gap-3 p-4 text-left sm:gap-4 sm:p-5"
                >
                  <div className="relative shrink-0">
                    <IconBadge icon={s.icon} tone={isOpen ? "blue" : "dark"} size="lg" />
                    <span
                      className={`absolute -right-2 -top-2 inline-flex h-6 min-w-6 items-center justify-center rounded-full px-1 text-[10px] font-bold shadow-soft ring-1 transition-colors ${
                        isOpen
                          ? "bg-[#1948ff] text-white ring-[#1948ff]/20"
                          : "bg-white text-[#1948ff] ring-[#1948ff]/10"
                      }`}
                    >
                      {s.n}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold leading-snug text-[#161b25]">{s.t}</h3>
                  </div>
                  <span
                    className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 border-[#1948ff] bg-[#1948ff] text-white"
                        : "border-border bg-surface text-[#5f6673] group-hover:border-[#1948ff]/30 group-hover:text-[#1948ff]"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                </button>
                <div
                  id={`solution-step-${s.n}`}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-4 pl-[4.75rem] text-sm leading-relaxed text-[#5f6673] sm:px-5 sm:pb-5 sm:pl-[5.5rem]">
                      {s.d}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-[#1948ff]/10 bg-[#1948ff]/5 px-5 py-4 text-left sm:mt-10 sm:px-6 sm:py-5 sm:text-center">
          <p className="text-sm font-semibold leading-relaxed text-[#161b25] sm:text-[15px]">
            Sans changer vos outils actuels, sans apprentissage technique, sans gérer quoi que ce
            soit au quotidien.
          </p>
        </div>
      </Section>

      <Section id="fonctionnalites">
        <div className="mx-auto max-w-3xl text-left sm:text-center">
          <Eyebrow>Ce qui change concrètement</Eyebrow>
          <h2 className="mt-5 text-[1.8rem] font-bold leading-tight sm:text-4xl">
            Trois choses simples : répondre, convaincre, faire avancer.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5f6673] sm:text-lg">
            Le reste n'est que de la technique. Ce qui compte, c'est que les personnes intéressées
            ne repartent plus sans prochaine étape.
          </p>
        </div>

        <div className="mt-9 grid gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-3">
          {[
            {
              icon: Zap,
              tone: "blue",
              t: "Répond instantanément",
              d: "Chaque nouvelle demande reçoit une réponse en quelques secondes, même le soir, le week-end ou quand votre équipe est occupée.",
            },
            {
              icon: Target,
              tone: "dark",
              t: "Convainc les personnes qui hésitent",
              d: "Prix, délai, confiance, comparaison : vos meilleurs arguments sont utilisés au bon moment pour aider la personne à avancer.",
            },
            {
              icon: CalendarCheck2,
              tone: "green",
              t: "Fait avancer jusqu'au rendez-vous ou à la vente",
              d: "La conversation ne s'arrête pas à une réponse : elle guide vers un rendez-vous, un devis, un achat ou une reprise par votre équipe.",
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

        <div className="mx-auto mt-8 max-w-3xl text-left sm:mt-10 sm:text-center">
          <h3 className="text-xl font-bold leading-tight text-[#161b25]">
            Voir ce que Converto ferait avec vos demandes
          </h3>
          <p className="mt-2 text-sm font-semibold text-[#5f6673]">
            Échange de 30 min — sans engagement
          </p>
          <div className="mt-5">
            <CTA>Voir si c'est rentable pour moi</CTA>
          </div>
        </div>
      </Section>

      <Section id="resultats" className="bg-surface">
        <div className="mx-auto max-w-3xl text-left sm:text-center">
          <Eyebrow>Résultats</Eyebrow>
          <h2 className="mt-5 text-[1.8rem] font-bold leading-tight sm:text-4xl">
            Ce que vous suivez dans votre dashboard
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5f6673] sm:text-lg">
            Le dashboard affiche d'abord les indicateurs réellement utiles au suivi quotidien. Selon
            votre activité, le chiffre d'affaires attribué peut aussi être suivi.
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
            <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-4">
              {[
                {
                  icon: MessagesSquare,
                  label: "Personnes ayant interagi",
                  desc: "Le nombre de visiteurs ou contacts qui ont engagé un échange",
                  example: "Site, WhatsApp, Instagram ou Messenger",
                },
                {
                  icon: CalendarCheck2,
                  label: "Rendez-vous générés",
                  desc: "Les créneaux confirmés directement depuis la conversation",
                  example: "Appels, visites, consultations ou rendez-vous commerciaux",
                },
                {
                  icon: TrendingUp,
                  label: "Conversion vers RDV",
                  desc: "La part des échanges qui se transforment en rendez-vous",
                  example: "Un indicateur simple pour suivre la performance",
                  highlight: true,
                },
                {
                  icon: MessagesSquare,
                  label: "Messages envoyés",
                  desc: "Le volume de réponses envoyées automatiquement sur vos canaux",
                  example: "Avec l'historique complet des échanges",
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
                Une vue simple pour piloter les demandes.
              </h4>
              <p className="mt-2 text-sm text-[#5f6673] leading-relaxed">
                Vous voyez combien de personnes ont interagi, combien de rendez-vous ont été pris,
                quel est le taux de conversion et combien de messages ont été envoyés. Le CA généré
                peut être ajouté lorsque le parcours permet de l'attribuer correctement.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="chiffres">
        <div className="mx-auto max-w-3xl text-left sm:text-center">
          <Eyebrow>Rentabilité</Eyebrow>
          <h2 className="mt-5 text-[1.8rem] font-bold leading-tight sm:text-4xl">
            Combien de clients supplémentaires devez-vous signer ?
          </h2>
        </div>

        <div className="mx-auto mt-9 grid max-w-5xl gap-5 rounded-2xl border border-border bg-white p-5 shadow-soft sm:mt-12 sm:p-7 lg:grid-cols-[0.95fr_1fr] lg:gap-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1948ff]/10 px-3 py-1.5 text-xs font-bold uppercase text-[#1948ff]">
              <Calculator className="h-4 w-4" strokeWidth={2.5} />
              Calcul de rentabilité
            </div>
            <h3 className="mt-4 text-2xl font-bold leading-tight text-[#161b25]">
              Combien de clients faut-il récupérer pour rentabiliser Converto ?
            </h3>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <label className="flex min-h-[104px] flex-col justify-between rounded-xl border border-border bg-surface p-3 text-left">
                <span className="block min-h-8 text-xs font-semibold leading-snug text-[#5f6673]">
                  Panier moyen par client
                </span>
                <span className="mt-2 flex items-center gap-2">
                  <input
                    type="number"
                    min="0"
                    value={averageClientValue}
                    onChange={(event) => setAverageClientValue(Number(event.target.value) || 0)}
                    className="h-10 min-w-0 flex-1 rounded-lg border border-border bg-white px-3 text-base font-bold text-[#161b25] outline-none transition-colors focus:border-[#1948ff]"
                  />
                  <span className="text-sm font-bold text-[#5f6673]">€</span>
                </span>
              </label>

              <label className="flex min-h-[104px] flex-col justify-between rounded-xl border border-border bg-surface p-3 text-left">
                <span className="block min-h-8 text-xs font-semibold leading-snug text-[#5f6673]">
                  Marge moyenne
                </span>
                <span className="mt-2 flex items-center gap-2">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={marginRate}
                    onChange={(event) => setMarginRate(Number(event.target.value) || 0)}
                    className="h-10 min-w-0 flex-1 rounded-lg border border-border bg-white px-3 text-base font-bold text-[#161b25] outline-none transition-colors focus:border-[#1948ff]"
                  />
                  <span className="text-sm font-bold text-[#5f6673]">%</span>
                </span>
              </label>

              <label className="flex min-h-[104px] flex-col justify-between rounded-xl border border-border bg-surface p-3 text-left">
                <span className="block min-h-8 text-xs font-semibold leading-snug text-[#5f6673]">
                  Abonnement Converto
                </span>
                <select
                  value={selectedRoiPlan}
                  onChange={(event) =>
                    setSelectedRoiPlan(event.target.value as (typeof ROI_PLANS)[number]["name"])
                  }
                  className="mt-2 h-10 w-full min-w-0 rounded-lg border border-border bg-white px-3 pr-8 text-sm font-bold text-[#161b25] outline-none transition-colors focus:border-[#1948ff] lg:text-base"
                >
                  {ROI_PLANS.map((plan) => (
                    <option key={plan.name} value={plan.name}>
                      {plan.name} ({formatEuro(plan.price)} €)
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <p className="mt-5 rounded-2xl border border-[#1948ff]/10 bg-[#1948ff]/5 p-4 text-sm leading-relaxed text-[#5f6673]">
              Ce calcul est volontairement prudent. Il ne prend en compte que la marge générée par
              les nouveaux clients signés grâce à Converto. Il ne tient pas compte du temps gagné
              par vos équipes, des relances automatiques ni des opportunités récupérées qui seraient
              autrement perdues.
            </p>
          </div>

          <div className="flex flex-col justify-center rounded-2xl border border-[#16a34a]/25 bg-[#16a34a]/10 p-5 text-center sm:p-8">
            <p className="text-sm font-bold uppercase text-[#15803d]">
              Il suffit que Converto vous permette de signer
            </p>
            <div
              className="mt-4 text-6xl font-bold text-[#15803d] sm:text-7xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {clientsNeeded.toLocaleString("fr-FR", {
                maximumFractionDigits: 2,
              })}
            </div>
            <p className="mt-3 text-lg font-bold leading-relaxed text-[#161b25]">
              client supplémentaire par mois
            </p>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-[#5f6673]">
              Avec vos hypothèses, un nouveau client vous rapporte environ{" "}
              <strong className="text-[#161b25]">{formatEuro(Math.round(averageProfit))} €</strong>{" "}
              de marge. Il suffit donc que Converto vous permette de signer{" "}
              <strong className="text-[#161b25]">
                {clientsNeeded.toLocaleString("fr-FR", { maximumFractionDigits: 2 })}
              </strong>{" "}
              client supplémentaire par mois pour rentabiliser son coût.
            </p>
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
              La solution crée le plus de valeur quand il y a de vraies objections à lever et un
              vrai CA à générer par conversation.
            </p>
          </div>
          <CTA>Voir si c'est rentable pour moi</CTA>
        </div>

        <div className="mt-9 grid items-stretch gap-4 sm:mt-12 lg:grid-cols-2 lg:gap-5">
          <div className="rounded-2xl border border-[#16a34a]/20 bg-white p-5 shadow-soft sm:p-7">
            <div className="flex items-center gap-3">
              <IconBadge icon={CheckCircle2} tone="green" />
              <h3 className="text-xl font-bold">Converto est fait pour vous</h3>
            </div>
            <ul className="mt-4 space-y-3 sm:mt-5">
              {[
                "vous vendez des produits ou services à partir de 500 €",
                "vous avez déjà du trafic sur votre site, vos réseaux sociaux ou des demandes régulières",
                "vous perdez du temps à répondre aux mêmes questions par message ou téléphone",
                "vous voulez mesurer précisément les rendez-vous, devis et ventes récupérés chaque mois",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[15px] text-[#161b25]">
                  <Check />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-red-100 bg-white p-5 shadow-soft sm:p-7">
            <div className="flex items-center gap-3">
              <IconBadge icon={XCircle} tone="red" />
              <h3 className="text-xl font-bold">Ce n'est probablement pas adapté</h3>
            </div>
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

          <div className="rounded-2xl border border-border bg-white p-5 shadow-soft sm:p-7 lg:col-span-2">
            <h3 className="text-xl font-bold">Profils concernés</h3>
            <div className="mt-4 grid gap-2 sm:mt-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                ["Agences immobilières", "Visites, estimations, demandes de biens"],
                [
                  "Cliniques médicales et esthétiques",
                  "Consultations, interventions, objections prix",
                ],
                ["Services premium à domicile", "Devis, urgence, zone d'intervention"],
                ["Coach / formateur en ligne", "Appels découverte, objections, inscription"],
                ["Consultant / cabinet de conseil", "Qualification, contexte, rendez-vous"],
                ["Architecte / décorateur", "Projet, budget, délai, prise de contact"],
              ].map(([title, detail]) => (
                <div key={title} className="rounded-xl border border-border bg-surface p-4">
                  <div className="flex items-start gap-3">
                    <Check />
                    <div>
                      <p className="text-sm font-bold text-[#161b25]">{title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-[#5f6673]">{detail}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="offres">
        <div className="mx-auto max-w-3xl text-left sm:text-center">
          <Eyebrow>Tarifs</Eyebrow>
          <h2 className="mt-5 text-[1.8rem] font-bold leading-tight sm:text-4xl">
            Trois formules selon votre volume et vos canaux
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5f6673] sm:text-lg">
            Le setup couvre l'audit, la configuration, les scénarios de vente et l'intégration
            technique. L'abonnement couvre l'exploitation, le suivi et l'amélioration continue.
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
        <div className="mx-auto mt-7 max-w-3xl rounded-2xl border border-[#1948ff]/15 bg-[#1948ff]/5 px-5 py-4 text-left shadow-soft sm:mt-8 sm:px-6 sm:py-5 sm:text-center">
          <h3 className="inline-flex items-center gap-2 text-lg font-bold text-[#1948ff] sm:justify-center sm:text-xl">
            <ShieldCheck className="h-5 w-5" strokeWidth={2.4} />
            Diagnostic avant déploiement
          </h3>
          <p className="mt-2 text-sm font-semibold leading-relaxed text-[#161b25]">
            Si nous estimons que Converto ne sera pas rentable pour votre activité, nous vous le
            dirons avant tout déploiement.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-3xl text-left sm:mt-10 sm:text-center">
          <p className="text-base leading-relaxed text-[#5f6673] sm:text-lg">
            Vous ne savez pas quelle formule choisir ? On regarde ensemble votre situation, vos
            canaux et vos objectifs pour vous orienter vers la formule la plus adaptée.
          </p>
          <div className="mt-6">
            <CTA>Voir si c'est rentable pour moi</CTA>
          </div>
        </div>
      </Section>

      <Section id="faq" className="bg-surface">
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

      <Section>
        <div className="mx-auto flex max-w-4xl flex-col gap-5 rounded-2xl border border-border bg-white p-5 shadow-soft sm:gap-8 sm:p-8 md:flex-row md:items-center">
          <div className="mx-auto h-24 w-24 shrink-0 overflow-hidden rounded-3xl border border-[#1948ff]/15 bg-surface shadow-card sm:h-28 sm:w-28 md:mx-0">
            <img
              src="/Photo%20Geoffroy.png"
              alt="Geoffroy de Miol-Flavard"
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="text-left md:text-left">
            <Eyebrow>Qui configure votre parcours de vente ?</Eyebrow>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-[#161b25]">
              Geoffroy de Miol-Flavard, fondateur de Converto
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#5f6673] sm:text-base">
              Chaque parcours est configuré avec une logique de vente concrète : compréhension de
              votre offre, objections à lever, ton de marque, scénarios de conversion et suivi du CA
              généré.
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
            Vos demandes pourraient être mieux traitées d'ici une semaine.
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:mt-5 sm:text-lg">
            En 30 minutes, on regarde votre offre, vos canaux et votre trafic pour estimer où vous
            pourriez récupérer des rendez-vous, devis ou ventes.
          </p>
          <div className="relative mt-7 flex justify-center sm:mt-8">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-7 text-[15px] font-semibold text-[#1948ff] shadow-card transition-all hover:-translate-y-0.5 sm:w-auto"
            >
              <Sparkles className="h-4 w-4" strokeWidth={2.4} />
              Voir si c'est rentable pour moi
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
