import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { WhatsappMockup } from "@/components/site/WhatsappMockup";
import { Faq } from "@/components/site/Faq";

const CAL_URL = "https://calendly.com/gdmf-ai/20mn";
const LOGO_URL = "/converto-logo.svg";

export const Route = createFileRoute("/")({
  component: Page,
});

function CTA({ children, variant = "primary", className = "" }: { children: React.ReactNode; variant?: "primary" | "ghost"; className?: string }) {
  const base = "inline-flex items-center justify-center h-12 px-7 rounded-full text-[15px] font-semibold transition-all whitespace-nowrap";
  const styles =
    variant === "primary"
      ? "text-white bg-gradient-primary shadow-card hover:shadow-glow hover:-translate-y-0.5"
      : "text-[#161b25] bg-white border border-border hover:border-[#1948ff]/30";
  return (
    <a href={CAL_URL} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`py-20 sm:py-28 px-5 sm:px-8 ${className}`}>
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

function Page() {
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
            <Eyebrow>Pour les installateurs PAC, climatisation, solaire et rénovation énergétique</Eyebrow>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] font-bold tracking-tight">
              Transformez chaque demande de devis en{" "}
              <span className="text-gradient">rendez-vous qualifié</span> — en moins de 3 minutes.
            </h1>
            <p className="mt-6 text-lg text-[#5f6673] leading-relaxed max-w-xl">
              Converto contacte automatiquement vos prospects par WhatsApp dès qu'ils demandent un devis, qualifie leur
              projet et planifie un rendez-vous avec votre équipe — même le soir, le week-end ou quand vous êtes sur chantier.
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
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-surface border border-border px-4 py-2 text-sm text-[#5f6673]">
              À partir de <span className="font-bold text-[#161b25]">390 € HT / mois</span>
            </div>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-[#5f6673]">
              <span className="font-medium">Demande de devis</span>
              <span className="text-[#25D366]">→</span>
              <span className="inline-flex items-center gap-1 font-semibold text-[#25D366]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.134 1.585 5.937L0 24l6.335-1.652a11.9 11.9 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413"/></svg>
                WhatsApp
              </span>
              <span className="text-[#1948ff]">→</span>
              <span className="font-medium">Rendez-vous qualifié</span>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#5f6673]">
              <span className="flex items-center gap-2"><Check /> Sans changer d'outil</span>
              <span className="flex items-center gap-2"><Check /> Opérationnel en quelques jours</span>
              <span className="flex items-center gap-2"><Check /> 24h/24 · 7j/7</span>
            </div>
          </div>

          <div className="relative">
            <WhatsappMockup />
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <Section className="bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow>Le constat</Eyebrow>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold">
            Vous payez peut-être déjà des prospects que vous perdez simplement parce que vous répondez trop tard.
          </h2>
          <p className="mt-5 text-[#5f6673] text-lg">
            Aujourd'hui, un particulier contacte souvent plusieurs entreprises avant de choisir. Si vous faites de la pub
            ou achetez des prospects, chaque demande non rappelée assez vite peut devenir de l'argent laissé à un concurrent.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { i: "€", t: "Prospects payants perdus", d: "Vous investissez pour générer des demandes, puis certaines partent faute de réponse rapide." },
            { i: "⏱️", t: "Réponse trop tardive", d: "Sur chantier, en intervention ou en rendez-vous, vous ne pouvez pas toujours rappeler immédiatement." },
            { i: "📵", t: "Prospects qui disparaissent", d: "Une fois le premier contact manqué, certains prospects ne répondent plus." },
            { i: "🏃", t: "La concurrence rappelle", d: "Pendant ce temps, une autre entreprise fixe le rendez-vous à votre place." },
          ].map((c, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-border shadow-soft hover:shadow-card transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-surface flex items-center justify-center text-xl">{c.i}</div>
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
            Converto répond, qualifie et relance pendant que vous êtes <span className="text-gradient">sur le terrain</span>.
          </h2>
          <p className="mt-5 text-[#5f6673] text-lg">
            Une seule mécanique : chaque demande reçoit une réponse immédiate sur WhatsApp, puis Converto transforme la
            conversation en rendez-vous qualifié.
          </p>
        </div>

        <div className="mt-14 max-w-2xl mx-auto space-y-3">
          {[
            { t: "Demande de devis reçue", d: "Formulaire, plateforme de prospects ou contact direct.", n: "01" },
            { t: "Réponse immédiate WhatsApp", d: "Un message personnalisé est envoyé en moins de 3 minutes.", n: "02" },
            { t: "Qualification automatique", d: "Type de projet, surface, délai, budget — tout est cadré.", n: "03" },
            { t: "Relances intelligentes", d: "Converto relance les prospects qui ne répondent pas, sans insister.", n: "04" },
            { t: "Rendez-vous confirmé", d: "Votre équipe reçoit uniquement les demandes déjà qualifiées.", n: "05" },
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
      </Section>

      {/* RESULTATS */}
      <Section id="resultats" className="bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow>Simulation de valeur</Eyebrow>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold">Pourquoi 390 € / mois peuvent vite se justifier</h2>
          <p className="mt-5 text-[#5f6673] text-lg">
            Sans promettre de miracle, la valeur devient concrète dès qu'un seul chantier supplémentaire est récupéré.
          </p>
        </div>
        <div className="mt-14 max-w-5xl mx-auto bg-white rounded-2xl border border-border shadow-soft overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-gradient-primary text-white flex items-center justify-center text-lg">€</span>
                <div>
                  <h3 className="font-bold text-lg">Simulation réaliste</h3>
                  <p className="text-sm text-[#5f6673]">Entreprise PAC, climatisation, solaire ou rénovation énergétique</p>
                </div>
              </div>
              <div className="rounded-full bg-surface border border-border px-4 py-2 text-sm font-semibold text-[#161b25]">
                40 demandes / mois
              </div>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { value: "40", label: "demandes par mois" },
                { value: "10", label: "prospects non recontactés ou perdus" },
                { value: "+2", label: "RDV supplémentaires générés" },
                { value: "1", label: "chantier récupéré peut rentabiliser plusieurs mois" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl p-5 bg-surface border border-border">
                  <div className="text-4xl font-bold text-gradient" style={{ fontFamily: "var(--font-display)" }}>{item.value}</div>
                  <p className="mt-3 text-sm text-[#5f6673] leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-[#1948ff]/5 border border-[#1948ff]/10 p-6">
              <h4 className="font-bold text-[#161b25]">L'enjeu n'est pas seulement de répondre plus vite.</h4>
              <p className="mt-2 text-sm text-[#5f6673] leading-relaxed">
                C'est de transformer des demandes déjà payées ou déjà reçues en rendez-vous qualifiés, avant que le
                prospect ne choisisse une autre entreprise.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FOR WHO */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Eyebrow>Pour qui</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl font-bold">
              Converto est fait pour vous si vos demandes de devis ont déjà de la valeur
            </h2>
            <p className="mt-5 text-[#5f6673] text-lg leading-relaxed">
              L'outil est pensé pour les installateurs PAC, climatisation, solaire et rénovation énergétique qui veulent
              éviter que leurs prospects web partent ailleurs avant même d'avoir été qualifiés.
            </p>
            <div className="mt-8">
              <CTA>Réserver une démo de 20 min →</CTA>
            </div>
          </div>
          <div className="grid gap-5">
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
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-50 text-[10px] font-bold text-red-500">✕</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {["Climatisation", "Pompe à chaleur", "Solaire", "Isolation", "Rénovation énergétique", "Et plus encore"].map((t) => (
                <div key={t} className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 border border-border shadow-soft">
                  <span className="h-7 w-7 rounded-full bg-gradient-primary text-white flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="font-medium text-[#161b25]">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* OFFERS */}
      <Section id="offres" className="bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow>Offres</Eyebrow>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold">Trois niveaux selon votre volume de demandes</h2>
          <p className="mt-5 text-[#5f6673] text-lg">
            On commence simple, puis on adapte les scénarios et intégrations à votre fonctionnement commercial.
          </p>
        </div>
        <div className="mt-14 grid lg:grid-cols-3 gap-5">
          {[
            {
              name: "Essentiel",
              price: "À partir de 390 € HT / mois",
              desc: "Pour automatiser la première réponse et récupérer les prospects qui répondent trop tard.",
              points: ["Réponse WhatsApp automatique", "Qualification simple", "Relances de base", "Prise de rendez-vous"],
            },
            {
              name: "Croissance",
              price: "Sur devis",
              desc: "Pour les entreprises avec plusieurs sources de prospects et un besoin de suivi plus fin.",
              points: ["Scénarios par type de projet", "Relances avancées", "Reporting mensuel", "Optimisation des messages"],
            },
            {
              name: "Sur-mesure",
              price: "Sur devis",
              desc: "Pour connecter Converto à votre organisation commerciale et à vos outils existants.",
              points: ["Intégrations CRM", "Multi-équipes", "Parcours personnalisés", "Accompagnement dédié"],
            },
          ].map((offer, i) => (
            <div key={offer.name} className={`rounded-2xl p-7 bg-white border shadow-soft flex flex-col ${i === 0 ? "border-[#1948ff]/30" : "border-border"}`}>
              {i === 0 && (
                <div className="mb-4 inline-flex w-fit rounded-full bg-[#1948ff]/5 px-3 py-1 text-xs font-bold text-[#1948ff]">
                  Le plus simple pour démarrer
                </div>
              )}
              <h3 className="text-xl font-bold text-[#161b25]">{offer.name}</h3>
              <div className="mt-3 text-lg font-bold text-gradient">{offer.price}</div>
              <p className="mt-4 text-sm text-[#5f6673] leading-relaxed">{offer.desc}</p>
              <ul className="mt-6 space-y-3 flex-1">
                {offer.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-[#161b25]">
                    <Check />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <CTA className="mt-7 w-full">Réserver une démo de 20 min →</CTA>
            </div>
          ))}
        </div>
      </Section>

      {/* SPEED MATTERS */}
      <Section id="chiffres">
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow>Les chiffres parlent</Eyebrow>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold">Pourquoi la rapidité fait la différence</h2>
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
            <div key={i} className="rounded-2xl p-7 bg-white border border-border shadow-soft flex flex-col">
              <div className="text-3xl">{c.icon}</div>
              <div className="mt-4 text-5xl font-bold text-gradient" style={{ fontFamily: "var(--font-display)" }}>
                {c.stat}
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
            Aujourd’hui, la plupart des entreprises répondent plusieurs heures après une demande de devis. Converto permet à votre entreprise d’être réactive en quelques secondes, même lorsque vous êtes sur un chantier ou en dehors des horaires d’ouverture.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold">Les questions les plus fréquentes</h2>
        </div>
        <div className="mt-12">
          <Faq />
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="px-5 sm:px-8 pb-20 sm:pb-28">
        <div className="max-w-5xl mx-auto rounded-3xl p-10 sm:p-16 text-center bg-gradient-primary shadow-glow relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 30% 20%, white, transparent 50%)" }} />
          <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl mx-auto">
            Ne laissez plus vos demandes de devis sans réponse.
          </h2>
          <p className="relative mt-5 text-white/90 text-lg max-w-2xl mx-auto">
            Réservez une démonstration de 20 minutes et découvrez comment automatiser la qualification et la prise de rendez-vous.
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
            <a href="#" className="hover:text-[#161b25]">Mentions légales</a>
            <a href="#" className="hover:text-[#161b25]">Politique de confidentialité</a>
            <a href="#" className="hover:text-[#161b25]">Contact</a>
          </nav>
          <div className="text-xs text-[#5f6673]">© {new Date().getFullYear()} Converto</div>
        </div>
      </footer>
    </div>
  );
}

function Check() {
  return (
    <span className="h-5 w-5 rounded-full bg-gradient-primary text-white text-[10px] inline-flex items-center justify-center font-bold">✓</span>
  );
}
