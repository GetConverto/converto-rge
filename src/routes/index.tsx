import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { WhatsappMockup } from "@/components/site/WhatsappMockup";
import { Faq } from "@/components/site/Faq";
import logo from "@/assets/converto-logo.png.asset.json";

const CAL_URL = "https://calendly.com/gdmf-ai/20mn";

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
            <Eyebrow>Pour les pros du bâtiment</Eyebrow>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] font-bold tracking-tight">
              Transformez chaque demande de devis en{" "}
              <span className="text-gradient">rendez-vous qualifié</span> — en moins de 3 minutes.
            </h1>
            <p className="mt-6 text-lg text-[#5f6673] leading-relaxed max-w-xl">
              Converto contacte automatiquement vos prospects par WhatsApp, qualifie leur projet et relance ceux qui ne
              répondent pas. Vous transformez plus de demandes en rendez-vous — même le soir et le week-end.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTA>Réserver une démo →</CTA>
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
            Combien de demandes de devis restent sans réponse ?
          </h2>
          <p className="mt-5 text-[#5f6673] text-lg">
            Aujourd'hui, un particulier contacte souvent plusieurs entreprises avant de choisir.
            Le premier qui répond et fixe un rendez-vous prend un avantage considérable.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { i: "🌙", t: "Demandes hors horaires", d: "Les demandes arrivent le soir ou le week-end." },
            { i: "⏱️", t: "Pas le temps de rappeler", d: "Vous n'avez pas toujours le temps de rappeler immédiatement." },
            { i: "📵", t: "Prospects qui décrochent", d: "Certains prospects ne répondent plus après un premier contact." },
            { i: "🏃", t: "La concurrence rappelle", d: "Pendant ce temps, vos concurrents prennent l'avantage." },
          ].map((c, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-border shadow-soft hover:shadow-card transition-shadow">
              <div className="h-11 w-11 rounded-xl bg-surface flex items-center justify-center text-xl">{c.i}</div>
              <h3 className="mt-4 font-semibold text-[#161b25]">{c.t}</h3>
              <p className="mt-2 text-sm text-[#5f6673] leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SOLUTION */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow>La solution</Eyebrow>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold">
            Converto travaille pendant que vous êtes <span className="text-gradient">sur le terrain</span>.
          </h2>
        </div>

        <div className="mt-14 max-w-2xl mx-auto space-y-3">
          {[
            { t: "Demande de devis reçue", d: "Formulaire, plateforme de leads ou contact direct.", n: "01" },
            { t: "Réponse immédiate WhatsApp", d: "Un message personnalisé en moins de 3 minutes.", n: "02" },
            { t: "Qualification automatique", d: "Type de projet, surface, délai, budget — tout est cadré.", n: "03" },
            { t: "Relances intelligentes", d: "Converto relance ceux qui ne répondent pas, sans insister.", n: "04" },
            { t: "Rendez-vous confirmé", d: "Le créneau est proposé et confirmé dans votre agenda.", n: "05" },
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

      {/* HOW IT WORKS */}
      <Section id="fonctionnement" className="bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow>Comment ça fonctionne</Eyebrow>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold">Simple, automatique, sans rien changer à votre quotidien.</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            "Le prospect remplit votre formulaire ou vous contacte.",
            "Converto répond automatiquement en quelques secondes.",
            "Le système qualifie le besoin avec quelques questions clés.",
            "Le prospect reçoit des relances automatiques si nécessaire.",
            "Un rendez-vous est proposé et confirmé dans votre agenda.",
            "Votre équipe reçoit uniquement les demandes déjà qualifiées.",
          ].map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-border shadow-soft">
              <div className="text-xs font-bold text-[#1948ff] tracking-wider">ÉTAPE {String(i + 1).padStart(2, "0")}</div>
              <p className="mt-3 text-[#161b25] font-medium leading-relaxed">{t}</p>
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

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-[#5f6673] text-lg leading-relaxed">
            Aujourd’hui, la plupart des entreprises répondent plusieurs heures après une demande de devis. Converto permet à votre entreprise d’être réactive en quelques secondes, même lorsque vous êtes sur un chantier ou en dehors des horaires d’ouverture.
          </p>
        </div>
      </Section>

      {/* FOR WHO */}
      <Section className="bg-surface">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>Pour qui</Eyebrow>
            <h2 className="mt-5 text-3xl sm:text-4xl font-bold">
              Conçu pour les entreprises qui reçoivent déjà des demandes de devis
            </h2>
            <p className="mt-5 text-[#5f6673] text-lg leading-relaxed">
              Converto s'intègre facilement à votre fonctionnement actuel, sans changer votre processus commercial.
            </p>
            <div className="mt-8">
              <CTA>Réserver une démo →</CTA>
            </div>
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

      {/* BEFORE / AFTER */}
      <Section className="bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <Eyebrow>La différence</Eyebrow>
          <h2 className="mt-5 text-3xl sm:text-4xl font-bold">Ce qui change avec Converto</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          <div className="rounded-2xl p-6 sm:p-8 bg-white border border-red-100 shadow-soft">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 mb-6">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              Sans Converto
            </div>
            <ol className="space-y-4">
              {[
                "Un particulier demande un devis",
                "Il contacte 3 ou 4 entreprises",
                "Vous êtes sur un chantier",
                "Vous le rappelez quelques heures plus tard",
                "Il a déjà pris rendez-vous avec quelqu’un d’autre",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-[#161b25]">
                  <span className="shrink-0 h-6 w-6 rounded-full bg-red-50 text-red-500 text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                  <span className="text-[15px] leading-snug">{t}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl p-6 sm:p-8 bg-white border border-[#1948ff]/10 shadow-soft">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#1948ff]/5 px-3 py-1 text-xs font-semibold text-[#1948ff] mb-6">
              <span className="h-2 w-2 rounded-full bg-[#1948ff]" />
              Avec Converto
            </div>
            <ol className="space-y-4">
              {[
                "Le prospect reçoit une réponse immédiatement",
                "Son projet est qualifié automatiquement",
                "Il reçoit des relances si nécessaire",
                "Un rendez-vous est proposé",
                "Votre équipe intervient uniquement quand le prospect est prêt à avancer",
              ].map((t, i) => (
                <li key={i} className="flex items-start gap-3 text-[#161b25]">
                  <span className="shrink-0 h-6 w-6 rounded-full bg-gradient-primary text-white text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                  <span className="text-[15px] leading-snug">{t}</span>
                </li>
              ))}
            </ol>
          </div>
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
              Réserver une démo →
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border px-5 sm:px-8 py-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <img src={logo.url} alt="Converto" className="h-6 w-auto" />
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
