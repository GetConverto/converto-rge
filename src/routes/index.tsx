import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { WhatsappMockup } from "@/components/site/WhatsappMockup";
import { Faq } from "@/components/site/Faq";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const CAL_URL = "https://calendly.com/gdmf-ai/20mn";
const LOGO_URL = "/converto-logo.svg?v=2";

const STARTER_PRICING = [
  { value: "0-50", label: "0 à 50 prospects / mois", price: "390" },
  { value: "51-100", label: "51 à 100 prospects / mois", price: "590" },
  { value: "101-200", label: "101 à 200 prospects / mois", price: "790" },
] as const;

const NIGHT_WEEKEND_PRICING = [
  { value: "0-50", label: "0 à 50 prospects / mois", price: "249" },
  { value: "51-100", label: "51 à 100 prospects / mois", price: "449" },
  { value: "101-200", label: "101 à 200 prospects / mois", price: "649" },
] as const;

const SCALE_PRICING = [
  { value: "0-200", label: "0 à 200 prospects / mois", price: "990" },
  { value: "200-plus", label: "Plus de 200 prospects / mois", price: "Sur Devis" },
] as const;

const STARTER_FEATURES = [
  "Réponse automatique à chaque demande en moins de 3 minutes",
  "Relances automatiques si pas réponse",
  "Qualification complète des prospects",
  "Prise de rendez-vous automatisée",
  "Rappels automatiques avant rendez-vous",
  "Tableau de bord de suivi",
  "Ajustements mensuels du scénario",
];

const SCALE_FEATURES = [
  "Récupération automatique des devis non signés",
  "Réactivation des anciens prospects",
  "Fidélisation et développement des clients existants",
  "Demandes d'avis Google automatisées",
  "Optimisation mensuelle des performances",
  "Support prioritaire",
];

type BillingCycle = "monthly" | "annual";

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
    "inline-flex items-center justify-center h-12 px-7 rounded-full text-[15px] font-semibold transition-all whitespace-nowrap";
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
    <section id={id} className={`scroll-mt-20 py-20 sm:py-28 px-5 sm:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-surface border border-border px-3.5 py-1.5 text-xs font-semibold text-[#1948ff]">
      <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
      {children}
    </div>
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
  const [starterVolume, setStarterVolume] =
    useState<(typeof STARTER_PRICING)[number]["value"]>("0-50");
  const [nightWeekendVolume, setNightWeekendVolume] =
    useState<(typeof NIGHT_WEEKEND_PRICING)[number]["value"]>("0-50");
  const [scaleVolume, setScaleVolume] = useState<(typeof SCALE_PRICING)[number]["value"]>("0-200");
  const starterOffer =
    STARTER_PRICING.find((option) => option.value === starterVolume) ?? STARTER_PRICING[0];
  const nightWeekendOffer =
    NIGHT_WEEKEND_PRICING.find((option) => option.value === nightWeekendVolume) ??
    NIGHT_WEEKEND_PRICING[0];
  const scaleOffer =
    SCALE_PRICING.find((option) => option.value === scaleVolume) ?? SCALE_PRICING[0];

  return (
    <div id="top" className="bg-white text-[#161b25]">
      <Nav />

      {/* HERO */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-5 sm:px-8 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(60% 60% at 20% 0%, rgba(64,151,255,0.10) 0%, transparent 60%), radial-gradient(50% 50% at 90% 10%, rgba(25,72,255,0.08) 0%, transparent 60%), #ffffff",
          }}
        />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          <div className="animate-fade-up">
            <Eyebrow>
              Pour les installateurs PAC, climatisation, solaire et rénovation énergétique
            </Eyebrow>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] font-bold tracking-tight">
              Transformez chaque demande de devis en{" "}
              <span className="text-gradient">rendez-vous qualifié</span> — en moins de 3 minutes.
            </h1>
            <p className="mt-6 text-lg text-[#5f6673] leading-relaxed max-w-xl">
              Converto contacte automatiquement vos prospects par WhatsApp dès qu'ils demandent un
              devis, qualifie leur projet et planifie un rendez-vous avec votre équipe — même le
              soir, le week-end ou quand vous êtes sur chantier.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTA>Réserver une démo de 20 min →</CTA>
              <a
                href="#fonctionnement"
                className="inline-flex items-center justify-center h-12 px-7 rounded-full text-[15px] font-semibold text-[#161b25] bg-white border border-border hover:border-[#1948ff]/30 transition-all"
              >
                Voir comment ça fonctionne
              </a>
            </div>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-[#5f6673]">
              <span className="font-medium">Demande de devis</span>
              <span className="text-[#25D366]">→</span>
              <span className="inline-flex items-center gap-1 font-semibold text-[#25D366]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.134 1.585 5.937L0 24l6.335-1.652a11.9 11.9 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                </svg>
                WhatsApp
              </span>
              <span className="text-[#1948ff]">→</span>
              <span className="font-medium">Rendez-vous qualifié</span>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#5f6673]">
              <span className="flex items-center gap-2">
                <Check /> Sans changer d'outil
              </span>
              <span className="flex items-center gap-2">
                <Check /> Opérationnel en quelques jours
              </span>
              <span className="flex items-center gap-2">
                <Check /> 24h/24 · 7j/7
              </span>
            </div>
          </div>

          <div className="relative">
            <WhatsappMockup />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <Section id="constat" className="bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow>Le constat</Eyebrow>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold">
            Vous perdez déjà des prospects simplement parce que vous répondez trop tard.
          </h2>
          <p className="mt-5 text-[#5f6673] text-lg">
            Aujourd'hui, un particulier contacte souvent plusieurs entreprises avant de choisir.
            <br />
            <span className="font-bold text-[#1948ff]">
              8 fois sur 10 c'est l'entreprise qui répond en premier qui décroche le chantier.
            </span>
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              i: "€",
              t: "Demandes précieuses perdues",
              d: "Qu’elles viennent du SEO, de Google, du bouche-à-oreille ou de la publicité, vos demandes de devis ont de la valeur. Si elles ne sont pas traitées rapidement, elles peuvent partir ailleurs.",
            },
            {
              i: "⏱️",
              t: "Réponse trop tardive",
              d: "Sur chantier, en intervention ou en rendez-vous, vous ne pouvez pas toujours rappeler immédiatement.",
            },
            {
              i: "📵",
              t: "Prospects qui disparaissent",
              d: "Une fois le premier contact manqué, certains prospects ne répondent plus.",
            },
            {
              i: "🏃",
              t: "La concurrence rappelle",
              d: "Pendant ce temps, une autre entreprise fixe le rendez-vous à votre place.",
            },
          ].map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-border shadow-soft hover:shadow-card transition-shadow"
            >
              <div className="h-11 w-11 rounded-xl bg-surface flex items-center justify-center text-xl">
                {c.i}
              </div>
              <h3 className="mt-4 font-semibold text-[#161b25]">{c.t}</h3>
              <p className="mt-2 text-sm text-[#5f6673] leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SOLUTION / FUNCTIONING */}
      <Section id="fonctionnement">
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow>La solution</Eyebrow>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold">
            Converto répond, qualifie et relance pendant que vous êtes{" "}
            <span className="text-gradient">sur le terrain</span>.
          </h2>
          <p className="mt-5 text-[#5f6673] text-lg">
            Une seule mécanique : chaque demande reçoit une réponse immédiate sur WhatsApp, puis
            Converto transforme la conversation en rendez-vous qualifié.
          </p>
        </div>

        <div className="mt-14 max-w-2xl mx-auto space-y-3">
          {[
            {
              t: "Demande de devis reçue",
              d: "Formulaire, plateforme de prospects ou contact direct.",
              n: "01",
            },
            {
              t: "Réponse immédiate WhatsApp",
              d: "Un message personnalisé est envoyé en moins de 3 minutes.",
              n: "02",
            },
            {
              t: "Qualification automatique",
              d: "Type de projet, surface, délai, budget — tout est cadré.",
              n: "03",
            },
            {
              t: "Relances intelligentes",
              d: "Converto relance les prospects qui ne répondent pas, sans insister.",
              n: "04",
            },
            {
              t: "Rendez-vous confirmé",
              d: "Votre équipe reçoit uniquement les demandes déjà qualifiées.",
              n: "05",
            },
          ].map((s, i, arr) => (
            <div key={i} className="relative">
              <div className="bg-white rounded-2xl p-5 border border-border shadow-soft flex items-center gap-5">
                <div className="h-12 w-12 shrink-0 rounded-xl bg-gradient-primary text-white font-bold flex items-center justify-center text-sm shadow-soft">
                  {s.n}
                </div>
                <div>
                  <h3 className="font-semibold">{s.t}</h3>
                  <p className="text-sm text-[#5f6673] mt-1">{s.d}</p>
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
        <div className="mt-10 max-w-3xl mx-auto rounded-2xl border border-[#1948ff]/10 bg-[#1948ff]/5 px-6 py-5 text-center">
          <p className="text-[15px] font-semibold leading-relaxed text-[#161b25]">
            Sans engagement, 100% autonome, et sans changer votre façon de travailler : Converto
            s'adapte aux outils que vous utilisez déjà.
          </p>
        </div>
      </Section>

      {/* TEAM HANDOFF */}
      <Section className="bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow>Transmission à votre équipe</Eyebrow>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold">Ce que votre équipe reçoit</h2>
          <p className="mt-5 text-[#5f6673] text-lg">
            À chaque rendez-vous, votre équipe reçoit toutes les informations utiles pour reprendre
            la main sans repartir de zéro.
          </p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto rounded-2xl border border-border bg-white p-6 sm:p-8 shadow-soft">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Nom du prospect",
              "Type de projet",
              "Ville / zone d’intervention",
              "Surface ou besoin estimé",
              "Délai souhaité",
              "Niveau d’urgence",
              "Créneau confirmé",
              "Historique de l’échange WhatsApp",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl bg-surface p-4">
                <Check />
                <span className="text-sm font-semibold text-[#161b25]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* RESULTATS */}
      <Section id="resultats">
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow>Simulation de valeur</Eyebrow>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold">
            Ce que Converto vous rapporte concrêtement
          </h2>
          <p className="mt-5 text-[#5f6673] text-lg">
            Sans promettre de miracle, la valeur devient concrète dès qu'un seul chantier
            supplémentaire est récupéré.
          </p>
        </div>
        <div className="mt-14 max-w-5xl mx-auto bg-white rounded-2xl border border-border shadow-soft overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-gradient-primary text-white flex items-center justify-center text-lg">
                  €
                </span>
                <div>
                  <h3 className="font-bold text-lg">Simulation réaliste</h3>
                  <p className="text-sm text-[#5f6673]">
                    Entreprise PAC, climatisation, solaire ou rénovation énergétique
                  </p>
                </div>
              </div>
              <div className="rounded-full bg-surface border border-border px-4 py-2 text-sm font-semibold text-[#161b25]">
                40 demandes / mois
              </div>
            </div>
            <div className="grid max-w-3xl mx-auto md:grid-cols-3 gap-4">
              {[
                { value: "40", label: "demandes par mois" },
                { value: "10", label: "prospects non recontactés ou perdus", pain: true },
                { value: "+3", label: "RDV supplémentaires récupérés", highlight: true },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`rounded-xl p-5 border ${
                    item.highlight
                      ? "bg-[#16a34a]/10 border-[#16a34a]/25 shadow-[0_18px_40px_rgba(22,163,74,0.14)]"
                      : item.pain
                        ? "bg-red-50 border-red-200"
                        : "bg-surface border-border"
                  }`}
                >
                  <div
                    className={`text-4xl font-bold ${
                      item.highlight
                        ? "text-[#15803d]"
                        : item.pain
                          ? "text-red-600"
                          : "text-gradient"
                    }`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.value}
                  </div>
                  <p className="mt-3 text-sm text-[#5f6673] leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 max-w-3xl mx-auto rounded-2xl bg-[#16a34a]/10 border border-[#16a34a]/25 px-6 py-5 text-center shadow-[0_18px_40px_rgba(22,163,74,0.12)]">
              <p className="text-lg font-bold text-[#15803d]">
                1 chantier de récupéré = Plusieurs mois de rentabilisés
              </p>
            </div>
            <div className="mt-8 rounded-2xl bg-[#1948ff]/5 border border-[#1948ff]/10 p-6">
              <h4 className="font-bold text-[#161b25]">
                Vous avez déjà fait le plus dur : obtenir une demande de devis.
              </h4>
              <p className="mt-2 text-sm text-[#5f6673] leading-relaxed">
                Converto s’assure qu’elle ne refroidisse pas avant qu’un rendez-vous soit fixé.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FOR WHO */}
      <Section id="pour-qui" className="bg-surface">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-3xl">
            <Eyebrow>Pour qui</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl font-bold">
              Converto est fait pour vous si vos demandes de devis ont déjà de la valeur
            </h2>
            <p className="mt-5 text-[#5f6673] text-lg leading-relaxed">
              L'outil est pensé pour les installateurs PAC, climatisation, solaire et rénovation
              énergétique qui veulent éviter que leurs prospects web partent ailleurs avant même
              d'avoir été qualifiés.
            </p>
          </div>
          <CTA>Réserver une démo de 20 min →</CTA>
        </div>

        <div className="mt-12 grid lg:grid-cols-[1.05fr_1fr_0.9fr] gap-5 items-stretch">
          <div className="rounded-2xl bg-white p-6 border border-border shadow-soft">
            <h3 className="font-bold text-lg">Converto est fait pour vous si :</h3>
            <ul className="mt-5 space-y-3">
              {[
                "vous recevez au moins 15 demandes/mois",
                "vous faites déjà de la publicité ou recevez des prospects web",
                "vos chantiers valent plusieurs milliers d'euros",
                "vous voulez éviter que vos prospects partent ailleurs",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[15px] text-[#161b25]">
                  <Check />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 border border-border shadow-soft">
            <h3 className="font-bold text-lg">Ce n'est probablement pas adapté si :</h3>
            <ul className="mt-5 space-y-3">
              {[
                "vous recevez moins de 5 demandes/mois",
                "vous travaillez uniquement au bouche-à-oreille",
                "vous n'avez pas encore de démarche commerciale structurée",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[15px] text-[#161b25]">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-[10px] font-bold text-red-500">
                    ✕
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-white p-6 border border-border shadow-soft">
            <h3 className="font-bold text-lg">Secteurs concernés</h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {[
                "Climatisation",
                "Pompe à chaleur",
                "Solaire",
                "Isolation",
                "Rénovation énergétique",
                "Et plus encore",
              ].map((t) => (
                <div key={t} className="flex items-center gap-2 rounded-full bg-surface px-3 py-2">
                  <span className="h-5 w-5 rounded-full bg-gradient-primary text-white flex items-center justify-center text-[10px] font-bold">
                    ✓
                  </span>
                  <span className="text-sm font-medium text-[#161b25]">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* SPEED MATTERS */}
      <Section id="chiffres">
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow>Les chiffres parlent</Eyebrow>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold">
            Pourquoi la rapidité fait la différence
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {[
            {
              icon: "⚡",
              title: "Réponse en moins de 5 minutes",
              stat: "×21",
              desc: "Les entreprises qui répondent dans les 5 minutes ont jusqu’à 21 fois plus de chances de qualifier un prospect que celles qui attendent 30 minutes ou plus.",
            },
            {
              icon: "🏆",
              title: "Le premier qui répond gagne souvent",
              stat: "78%",
              desc: "Jusqu’à 78 % des clients choisissent la première entreprise qui leur répond.",
            },
            {
              icon: "📱",
              title: "WhatsApp est lu immédiatement",
              stat: "98%",
              desc: "Les messages WhatsApp affichent généralement 95 à 98 % d’ouverture, contre environ 20 à 35 % pour les emails.",
            },
          ].map((c, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 bg-white border border-border shadow-soft flex flex-col"
            >
              <div className="flex items-center gap-3">
                <div className="text-3xl">{c.icon}</div>
                <div
                  className="text-5xl font-bold text-gradient"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {c.stat}
                </div>
              </div>
              <h3 className="mt-4 font-semibold text-[#161b25]">{c.title}</h3>
              <p className="mt-2 text-sm text-[#5f6673] leading-relaxed flex-1">{c.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-[#8a90a0]">
          Sources : MIT / Harvard Business Review / Speed-to-Lead Benchmarks
        </p>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-[#5f6673] text-lg leading-relaxed">
            Aujourd’hui, la plupart des entreprises répondent plusieurs heures après une demande de
            devis. Converto permet à votre entreprise d’être réactive en quelques secondes, même
            lorsque vous êtes sur un chantier ou en dehors des horaires d’ouverture.
          </p>
        </div>
      </Section>

      {/* OFFERS */}
      <Section id="offres" className="bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow>Tarifs</Eyebrow>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold">
            Trois plans selon votre volume de prospects
          </h2>
          <p className="mt-5 text-[#5f6673] text-lg">
            On commence simple, puis on adapte les scénarios et intégrations à votre fonctionnement
            commercial.
          </p>
          <div className="mt-8 inline-flex rounded-full border border-border bg-white p-1 shadow-soft">
            {[
              { value: "monthly", label: "Mensuel" },
              { value: "annual", label: "Annuel - 2 mois offerts" },
            ].map((option) => (
              <button
                key={option.value}
                type="button"
                aria-pressed={billingCycle === option.value}
                onClick={() => setBillingCycle(option.value as BillingCycle)}
                className={`h-10 rounded-full px-5 text-sm font-semibold transition-all ${
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
        <div className="mt-14 grid lg:grid-cols-3 gap-5">
          <div className="rounded-2xl p-7 bg-white border border-border shadow-soft flex flex-col">
            <div className="mb-4 inline-flex w-fit rounded-full bg-[#16a34a]/10 px-3 py-1 text-xs font-bold text-[#15803d]">
              Soirs et week-ends uniquement
            </div>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between lg:flex-col">
              <div>
                <h3 className="text-xl font-bold text-[#161b25]">Veille</h3>
                <p className="mt-2 text-sm text-[#5f6673] leading-relaxed">
                  Pour ne plus perdre les demandes reçues quand votre entreprise est fermée.
                </p>
              </div>
              <div className="sm:text-right lg:text-left">
                <PriceDisplay price={nightWeekendOffer.price} billingCycle={billingCycle} />
              </div>
            </div>
            <div className="mt-6">
              <label className="mb-2 block text-sm font-semibold text-[#161b25]">
                Volume de prospects
              </label>
              <Select
                value={nightWeekendVolume}
                onValueChange={(value) => setNightWeekendVolume(value as typeof nightWeekendVolume)}
              >
                <SelectTrigger className="h-12 rounded-xl border-border bg-surface px-4 text-[#161b25] shadow-none">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {NIGHT_WEEKEND_PRICING.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="mt-6 text-sm font-bold text-[#161b25]">
              Inclus Capture, limité aux horaires indiqués :
            </div>
            <ul className="mt-4 space-y-3 flex-1">
              {STARTER_FEATURES.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-[#161b25]">
                  <Check />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl p-7 bg-white border border-[#1948ff]/30 shadow-soft flex flex-col">
            <div className="mb-4 inline-flex w-fit rounded-full bg-[#1948ff]/5 px-3 py-1 text-xs font-bold text-[#1948ff]">
              Le plus simple pour démarrer
            </div>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between lg:flex-col">
              <div>
                <h3 className="text-xl font-bold text-[#161b25]">Capture</h3>
                <p className="mt-2 text-sm text-[#5f6673] leading-relaxed">
                  Pour traiter automatiquement toutes vos demandes de devis, 7j/7.
                </p>
              </div>
              <div className="sm:text-right lg:text-left">
                <PriceDisplay price={starterOffer.price} billingCycle={billingCycle} />
              </div>
            </div>
            <div className="mt-6">
              <label className="mb-2 block text-sm font-semibold text-[#161b25]">
                Volume de prospects
              </label>
              <Select
                value={starterVolume}
                onValueChange={(value) => setStarterVolume(value as typeof starterVolume)}
              >
                <SelectTrigger className="h-12 rounded-xl border-border bg-surface px-4 text-[#161b25] shadow-none">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {STARTER_PRICING.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <ul className="mt-6 space-y-3 flex-1">
              {STARTER_FEATURES.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-[#161b25]">
                  <Check />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl p-7 bg-white border border-border shadow-soft flex flex-col">
            <div className="mb-4 inline-flex w-fit rounded-full bg-surface px-3 py-1 text-xs font-bold text-[#5f6673]">
              Pour aller plus loin
            </div>
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between lg:flex-col">
              <div>
                <h3 className="text-xl font-bold text-[#161b25]">Relance</h3>
                <p className="mt-2 text-sm text-[#5f6673] leading-relaxed">
                  Pour récupérer les devis non signés, anciens prospects et clients existants.
                </p>
              </div>
              <div className="sm:text-right lg:text-left">
                <PriceDisplay price={scaleOffer.price} billingCycle={billingCycle} />
              </div>
            </div>
            <div className="mt-6">
              <label className="mb-2 block text-sm font-semibold text-[#161b25]">
                Volume de prospects
              </label>
              <Select
                value={scaleVolume}
                onValueChange={(value) => setScaleVolume(value as typeof scaleVolume)}
              >
                <SelectTrigger className="h-12 rounded-xl border-border bg-surface px-4 text-[#161b25] shadow-none">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {SCALE_PRICING.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="mt-6 text-sm font-bold text-[#161b25]">Inclus Capture, plus :</div>
            <ul className="mt-4 space-y-3 flex-1">
              {SCALE_FEATURES.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-[#161b25]">
                  <Check />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 max-w-3xl mx-auto rounded-2xl border border-[#16a34a]/25 bg-[#16a34a]/10 px-6 py-5 text-center shadow-[0_18px_40px_rgba(22,163,74,0.12)]">
          <h3 className="text-xl font-bold text-[#15803d]">Garantie réponse rapide</h3>
          <p className="mt-2 text-sm font-semibold leading-relaxed text-[#161b25]">
            Chaque demande couverte reçoit une première réponse WhatsApp en moins de 3 minutes,
            sinon le mois suivant est offert.
          </p>
        </div>
        <div className="mt-10 max-w-3xl mx-auto text-center">
          <p className="text-[#5f6673] text-lg leading-relaxed">
            Vous ne savez pas quelle offre choisir ? En démo, on regarde votre volume de demandes et
            votre processus commercial pour vous orienter vers la formule la plus adaptée.
          </p>
          <div className="mt-6">
            <CTA>Réserver une démo de 20 min →</CTA>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq">
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold">Les questions les plus fréquentes</h2>
        </div>
        <div className="mt-12">
          <Faq />
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="bg-surface px-5 sm:px-8 pt-12 pb-20 sm:pt-16 sm:pb-28">
        <div className="max-w-5xl mx-auto rounded-3xl p-10 sm:p-16 text-center bg-gradient-primary shadow-glow relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{ background: "radial-gradient(circle at 30% 20%, white, transparent 50%)" }}
          />
          <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Ne laissez plus vos demandes de devis sans réponse.
          </h2>
          <p className="relative mt-5 text-white/90 text-lg max-w-2xl mx-auto">
            Réservez une démonstration de 20 minutes et découvrez comment automatiser la
            qualification et la prise de rendez-vous.
          </p>
          <div className="relative mt-8 flex justify-center">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-13 px-8 py-3.5 rounded-full text-[15px] font-semibold text-[#1948ff] bg-white shadow-card hover:-translate-y-0.5 transition-all"
            >
              Réserver une démo de 20 min →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
    <span className="h-5 w-5 rounded-full bg-gradient-primary text-white text-[10px] inline-flex items-center justify-center font-bold">
      ✓
    </span>
  );
}
