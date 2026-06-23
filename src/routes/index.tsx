import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { WhatsappMockup } from "@/components/site/WhatsappMockup";
import { Faq } from "@/components/site/Faq";
import { useState } from "react";

const CAL_URL = "https://calendly.com/gdmf-ai/20mn";
const LOGO_URL = "/converto-logo.svg?v=2";

const PRICING_PLANS = [
  {
    name: "Starter",
    badge: "",
    description: "Idéal pour un coach solo qui veut un premier commercial IA sur son site.",
    setup: "800",
    price: "300",
    featured: false,
    features: [
      "Audit et configuration complète de votre commercial IA",
      "Déploiement sur 1 canal (web chat)",
      "Scénarios de vente personnalisés à votre offre",
      "Support par email",
    ],
  },
  {
    name: "Growth",
    badge: "⭐ Le plus populaire",
    description: "Idéal pour un coach établi avec une audience et plusieurs canaux actifs.",
    setup: "1200",
    price: "500",
    featured: true,
    features: [
      "Audit et configuration complète de votre commercial IA",
      "Déploiement sur 3 canaux (web chat + WhatsApp + Instagram ou Messenger)",
      "Scénarios de vente personnalisés à votre offre",
      "Rapport mensuel : CA généré, conversations, taux de conversion",
      "1 optimisation mensuelle des scripts",
      "Support prioritaire",
    ],
  },
  {
    name: "Scale",
    badge: "",
    description:
      "Idéal pour un infopreneur avec plusieurs offres ou forte volumétrie de prospects.",
    setup: "1500",
    price: "800",
    featured: false,
    features: [
      "Audit et configuration complète de votre commercial IA",
      "Déploiement sur tous les canaux disponibles",
      "Scénarios de vente personnalisés à votre offre",
      "Rapport mensuel détaillé + appel mensuel de 30 min",
      "2 optimisations mensuelles des scripts",
      "Support prioritaire",
    ],
  },
] as const;

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
            <Eyebrow>Pour les coachs, formateurs et infopreneurs français</Eyebrow>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] font-bold tracking-tight">
              Pas un chatbot. Un vrai commercial IA qui connaît votre offre, lève les objections et
              vend vos formations — 24h/24.
            </h1>
            <p className="mt-6 text-lg text-[#5f6673] leading-relaxed max-w-xl">
              Converto installe et gère un commercial IA sur votre site et vos réseaux sociaux. Vos
              prospects obtiennent une réponse immédiate et convaincante. Vous voyez le CA généré en
              temps réel dans votre dashboard, comme si votre meilleur commercial était disponible
              en continu.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTA>Réserver une démo gratuite →</CTA>
              <a
                href="#fonctionnement"
                className="inline-flex items-center justify-center h-12 px-7 rounded-full text-[15px] font-semibold text-[#161b25] bg-white border border-border hover:border-[#1948ff]/30 transition-all"
              >
                Voir comment ça fonctionne
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#5f6673]">
              <span className="flex items-center gap-2">
                <Check /> Opérationnel en moins d'une semaine
              </span>
              <span className="flex items-center gap-2">
                <Check /> CA généré visible dès le premier mois
              </span>
              <span className="flex items-center gap-2">
                <Check /> Sans changer vos outils actuels
              </span>
            </div>
          </div>

          <div className="relative">
            <WhatsappMockup />
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm text-[#5f6673]">
              <span className="font-medium">Visiteur hésitant</span>
              <span className="text-[#1948ff]">→</span>
              <span className="font-semibold text-[#1948ff]">Objection levée</span>
              <span className="text-[#1948ff]">→</span>
              <span className="font-medium">Appel réservé</span>
            </div>
          </div>
        </div>
      </section>

      {/* DIFFERENCE */}
      <Section id="difference" className="bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow>Différence</Eyebrow>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold">
            Ce que votre chatbot actuel ne fait pas
          </h2>
          <p className="mt-5 text-[#5f6673] text-lg">
            La plupart des coachs ont déjà essayé un chatbot. Et la plupart ont été déçus. Voici
            pourquoi — et en quoi Converto est fondamentalement différent.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-border bg-white shadow-soft">
          <table className="min-w-[820px] w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="w-[28%] px-5 py-4 text-sm font-bold text-[#161b25]">Situation</th>
                <th className="w-[36%] px-5 py-4 text-sm font-bold text-[#5f6673]">
                  Chatbot classique
                </th>
                <th className="w-[36%] px-5 py-4 text-sm font-bold text-[#1948ff]">
                  Commercial IA Converto
                </th>
              </tr>
            </thead>
            <tbody>
              {[
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
                  label: "Objectif",
                  classic: "Répondre aux questions",
                  converto: "Convaincre, convertir, vendre",
                },
              ].map((row) => (
                <tr key={row.label} className="border-b border-border last:border-b-0">
                  <td className="px-5 py-4 text-sm font-bold text-[#161b25]">{row.label}</td>
                  <td className="px-5 py-4 text-sm leading-relaxed text-[#5f6673]">
                    {row.classic}
                  </td>
                  <td className="px-5 py-4 text-sm font-semibold leading-relaxed text-[#161b25]">
                    {row.converto}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 max-w-3xl mx-auto rounded-2xl border border-[#1948ff]/10 bg-[#1948ff]/5 px-6 py-5 text-center">
          <p className="text-lg font-bold text-[#161b25]">
            Un chatbot répond. Un commercial IA convainc. Ce n'est pas le même métier : Converto est
            pensé pour convaincre et convertir.
          </p>
        </div>
      </Section>

      {/* PROBLEM */}
      <Section id="constat">
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow>Le constat</Eyebrow>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold">
            Vous avez du trafic. Mais combien de visiteurs repartent sans jamais vous parler ?
          </h2>
          <p className="mt-5 text-[#5f6673] text-lg">
            La plupart des coachs et infopreneurs perdent des ventes non pas parce que leur offre
            est mauvaise — mais parce que leurs prospects ne trouvent pas de réponse convaincante à
            leurs questions avant d'acheter.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              i: "💬",
              t: "Ils ont des objections, pas des réponses",
              d: '"C\'est trop cher", "est-ce que ça marche vraiment", "en quoi c\'est différent de la concurrence" — si personne ne répond maintenant, le prospect ferme l\'onglet.',
            },
            {
              i: "⏱️",
              t: "Vous ne pouvez pas être disponible 24h/24",
              d: "Vos prospects visitent votre site le soir, le week-end, entre deux réunions. Vous ne pouvez pas répondre à chaque message en temps réel.",
            },
            {
              i: "📉",
              t: "Les prospects froids ne reviennent pas",
              d: "Un visiteur non engagé est une opportunité perdue. La plupart ne reviennent jamais une fois l'onglet fermé.",
            },
            {
              i: "🏃",
              t: "Vos concurrents répondent pendant que vous dormez",
              d: "Dans un marché de la formation très concurrentiel, le premier à engager la conversation remporte souvent la vente.",
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
      <Section id="fonctionnement" className="bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow>La solution</Eyebrow>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold">
            Converto installe, configure et optimise votre commercial IA. Vous n'avez rien à faire.
          </h2>
          <p className="mt-5 text-[#5f6673] text-lg">
            Une seule mécanique : chaque visiteur qui hésite reçoit une réponse immédiate et
            convaincante, puis Converto le guide vers un achat ou un appel découverte.
          </p>
        </div>

        <div className="mt-14 max-w-2xl mx-auto space-y-3">
          {[
            {
              t: "Audit de votre offre",
              d: "On analyse vos formations, vos arguments de vente, vos tarifs et les objections les plus fréquentes de vos prospects. Votre commercial IA les connaîtra mieux que la plupart des vendeurs humains.",
              n: "01",
            },
            {
              t: "Configuration sur-mesure",
              d: "On programme votre commercial IA pour qu'il réponde dans votre ton, avec vos mots, vos arguments. Rien de générique.",
              n: "02",
            },
            {
              t: "Déploiement sur vos canaux",
              d: "Site web, WhatsApp, Instagram, Messenger — votre commercial IA est actif partout où vos prospects vous cherchent.",
              n: "03",
            },
            {
              t: "Optimisation mensuelle",
              d: "Chaque mois, on analyse les conversations et on améliore les scripts pour augmenter le taux de conversion.",
              n: "04",
            },
            {
              t: "Reporting CA généré",
              d: "Vous recevez un rapport mensuel avec le CA directement attribuable à votre commercial IA. Pas de flou sur la rentabilité.",
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
            Sans changer vos outils actuels, sans formation technique, sans gérer quoi que ce soit
            au quotidien.
          </p>
        </div>
      </Section>

      {/* RESULTATS */}
      <Section id="resultats">
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow>Résultats</Eyebrow>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold">
            Ce que vous voyez dans votre dashboard chaque mois
          </h2>
          <p className="mt-5 text-[#5f6673] text-lg">
            Contrairement à un chatbot classique, Converto ne se contente pas de répondre — il
            convertit. Et chaque euro généré est visible.
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
                  <h3 className="font-bold text-lg">Dashboard Converto</h3>
                  <p className="text-sm text-[#5f6673]">CA généré mesurable</p>
                </div>
              </div>
              <div className="rounded-full bg-surface border border-border px-4 py-2 text-sm font-semibold text-[#161b25]">
                Vue mensuelle
              </div>
            </div>
            <div className="grid max-w-3xl mx-auto md:grid-cols-3 gap-4">
              {[
                {
                  value: "💬",
                  label: "Conversations commerciales initiées",
                  desc: "Chaque visiteur qui engage avec votre commercial IA",
                },
                {
                  value: "📈",
                  label: "Taux de conversion",
                  desc: "Conversations transformées en appels réservés ou achats directs",
                },
                {
                  value: "💶",
                  label: "CA généré ce mois",
                  desc: "Le chiffre d'affaires directement attribuable à votre commercial IA",
                  highlight: true,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`rounded-xl p-5 border ${
                    item.highlight
                      ? "bg-[#16a34a]/10 border-[#16a34a]/25 shadow-[0_18px_40px_rgba(22,163,74,0.14)]"
                      : "bg-surface border-border"
                  }`}
                >
                  <div
                    className={`text-4xl font-bold ${
                      item.highlight ? "text-[#15803d]" : "text-gradient"
                    }`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.value}
                  </div>
                  <p className="mt-3 text-sm font-bold text-[#161b25] leading-relaxed">
                    {item.label}
                  </p>
                  <p className="mt-2 text-xs text-[#5f6673] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-[#1948ff]/5 border border-[#1948ff]/10 p-6">
              <h4 className="font-bold text-[#161b25]">
                Vous avez déjà fait le plus dur : attirer des visiteurs.
              </h4>
              <p className="mt-2 text-sm text-[#5f6673] leading-relaxed">
                Converto s'assure qu'ils ne repartent pas sans avoir été convaincus.
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
              Converto est fait pour vous si vous vendez des offres à forte valeur
            </h2>
            <p className="mt-5 text-[#5f6673] text-lg leading-relaxed">
              Votre commercial IA crée le plus de valeur quand il y a de vraies objections à lever
              et un vrai CA à générer par conversation.
            </p>
          </div>
          <CTA>Réserver une démo gratuite →</CTA>
        </div>

        <div className="mt-12 grid lg:grid-cols-[1.05fr_1fr_0.9fr] gap-5 items-stretch">
          <div className="rounded-2xl bg-white p-6 border border-border shadow-soft">
            <h3 className="font-bold text-lg">Converto est fait pour vous si :</h3>
            <ul className="mt-5 space-y-3">
              {[
                "vous vendez des formations ou accompagnements à partir de 500 €",
                "vous avez déjà du trafic sur votre site ou vos réseaux sociaux",
                "vous perdez du temps à répondre aux mêmes questions en DM ou par email",
                "vous voulez mesurer précisément ce que votre outil commercial vous rapporte chaque mois",
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
                "vous n'avez pas encore de trafic ni d'audience",
                "vous vendez uniquement des produits à moins de 100 €",
                "vous cherchez un simple outil de FAQ automatisé",
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
            <h3 className="font-bold text-lg">Profils concernés</h3>
            <div className="mt-5 flex flex-wrap gap-2.5">
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
            Pourquoi la réactivité commerciale fait la différence dans la vente de formations
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {[
            {
              icon: "⚡",
              title: "Répondre en moins de 5 minutes multiplie par 21 les chances de vendre",
              stat: "×21",
              desc: "Les entreprises qui engagent un prospect dans les 5 minutes ont jusqu'à 21 fois plus de chances de le convertir que celles qui attendent 30 minutes ou plus.",
            },
            {
              icon: "🏆",
              title: "Le premier à engager la conversation remporte souvent la vente",
              stat: "78%",
              desc: "Jusqu'à 78% des clients choisissent le premier prestataire qui leur répond. Dans un marché de la formation en ligne très concurrentiel, chaque minute compte.",
            },
            {
              icon: "📱",
              title: "WhatsApp et Instagram sont lus quasi instantanément",
              stat: "98%",
              desc: "Ces canaux affichent 95 à 98% de taux d'ouverture, contre 20 à 35% pour l'email. Votre commercial IA est actif là où vos prospects passent leur temps.",
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
            Aujourd'hui, la plupart des coachs répondent plusieurs heures après qu'un prospect leur
            a écrit. Converto engage la conversation en quelques secondes — dans votre ton, avec vos
            arguments.
          </p>
        </div>
      </Section>

      {/* OFFERS */}
      <Section id="offres" className="bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow>Tarifs</Eyebrow>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold">
            Trois formules selon vos canaux et vos ambitions
          </h2>
          <p className="mt-5 text-[#5f6673] text-lg">
            Chaque formule inclut un setup complet et un abonnement mensuel. Vous ne payez que si
            votre commercial IA est en place et actif.
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
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-7 bg-white border shadow-soft flex flex-col ${
                plan.featured ? "border-[#1948ff]/30" : "border-border"
              }`}
            >
              {plan.badge && (
                <div
                  className={`mb-4 inline-flex w-fit rounded-full px-3 py-1 text-xs font-bold ${
                    plan.featured ? "bg-[#1948ff]/5 text-[#1948ff]" : "bg-surface text-[#5f6673]"
                  }`}
                >
                  {plan.badge}
                </div>
              )}
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between lg:flex-col">
                <div>
                  <h3 className="text-xl font-bold text-[#161b25]">{plan.name}</h3>
                  <p className="mt-2 text-sm text-[#5f6673] leading-relaxed">{plan.description}</p>
                </div>
                <div className="sm:text-right lg:text-left">
                  <PriceDisplay price={plan.price} billingCycle={billingCycle} />
                </div>
              </div>
              <div className="mt-5 rounded-xl border border-border bg-surface px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#5f6673]">
                  Setup
                </p>
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
        <div className="mt-8 max-w-3xl mx-auto rounded-2xl border border-[#16a34a]/25 bg-[#16a34a]/10 px-6 py-5 text-center shadow-[0_18px_40px_rgba(22,163,74,0.12)]">
          <h3 className="text-xl font-bold text-[#15803d]">🛡️ Garantie résultat premier mois</h3>
          <p className="mt-2 text-sm font-semibold leading-relaxed text-[#161b25]">
            Si votre commercial IA ne génère aucune conversation qualifiée lors du premier mois, le
            mois suivant est offert.
          </p>
        </div>
        <div className="mt-10 max-w-3xl mx-auto text-center">
          <p className="text-[#5f6673] text-lg leading-relaxed">
            Vous ne savez pas quelle formule choisir ? En démo, on regarde ensemble votre situation,
            vos canaux et vos objectifs pour vous orienter vers la formule la plus adaptée.
          </p>
          <div className="mt-6">
            <CTA>Réserver une démo gratuite →</CTA>
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
            Votre commercial IA pourrait être actif d'ici une semaine.
          </h2>
          <p className="relative mt-5 text-white/90 text-lg max-w-2xl mx-auto">
            Réservez une démo gratuite de 30 minutes. On regarde ensemble votre offre, vos canaux,
            et on vous dit honnêtement si Converto peut vous apporter de la valeur.
          </p>
          <div className="relative mt-8 flex justify-center">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-13 px-8 py-3.5 rounded-full text-[15px] font-semibold text-[#1948ff] bg-white shadow-card hover:-translate-y-0.5 transition-all"
            >
              Réserver une démo gratuite →
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
