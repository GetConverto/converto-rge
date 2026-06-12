import { createFileRoute } from "@tanstack/react-router";

const LOGO_URL = "/converto-logo.svg?v=2";

export const Route = createFileRoute("/politique-confidentialite")({
  component: PolitiqueConfidentialitePage,
});

function PolitiqueConfidentialitePage() {
  return (
    <main className="min-h-screen bg-white px-5 py-10 text-[#161b25] sm:px-8">
      <div className="mx-auto max-w-3xl">
        <Header />

        <div className="mt-14">
          <p className="text-sm font-semibold text-[#1948ff]">Converto</p>
          <h1 className="mt-3 text-4xl font-bold">Politique de confidentialité</h1>
          <p className="mt-4 text-[#5f6673]">
            Cette politique explique comment les données personnelles peuvent être collectées et
            utilisées lors de votre navigation sur le site.
          </p>
        </div>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-[#5f6673]">
          <Section title="Données collectées">
            <p>
              Le site peut collecter les informations que vous transmettez volontairement lorsque
              vous prenez contact avec Converto ou réservez une démonstration.
            </p>
            <p>
              Ces informations peuvent inclure votre nom, votre adresse e-mail, votre numéro de
              téléphone, le nom de votre entreprise et le contenu de votre demande.
            </p>
          </Section>

          <Section title="Finalités">
            <p>Les données collectées peuvent être utilisées pour :</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>répondre à vos demandes de contact ;</li>
              <li>organiser une démonstration ou un rendez-vous ;</li>
              <li>améliorer les services et le site Converto ;</li>
              <li>assurer le suivi commercial lorsque vous en faites la demande.</li>
            </ul>
          </Section>

          <Section title="Durée de conservation">
            <p>
              Les données sont conservées pendant une durée proportionnée aux finalités pour
              lesquelles elles ont été collectées, sauf obligation légale contraire.
            </p>
          </Section>

          <Section title="Partage des données">
            <p>
              Converto ne vend pas vos données personnelles. Certaines données peuvent être
              transmises à des prestataires techniques strictement nécessaires au fonctionnement du
              site, à la prise de rendez-vous ou au traitement de vos demandes.
            </p>
          </Section>

          <Section title="Vos droits">
            <p>
              Conformément à la réglementation applicable, vous pouvez demander l'accès, la
              rectification, l'effacement ou la limitation du traitement de vos données
              personnelles. Vous pouvez également vous opposer à certains traitements.
            </p>
            <a href="/contact" className="mt-3 inline-flex font-semibold text-[#1948ff]">
              Faire une demande via la page contact
            </a>
          </Section>

          <Section title="Cookies">
            <p>
              Le site peut utiliser des cookies ou technologies similaires pour assurer son bon
              fonctionnement, mesurer l'audience ou améliorer l'expérience utilisateur. Vous pouvez
              configurer votre navigateur pour refuser tout ou partie des cookies.
            </p>
          </Section>
        </div>
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between gap-6">
      <a href="/" aria-label="Retour à l'accueil">
        <img src={LOGO_URL} alt="Converto" className="h-8 w-auto" />
      </a>
      <a
        href="/"
        className="inline-flex h-10 items-center justify-center rounded-full border border-border px-5 text-sm font-semibold text-[#161b25] transition-colors hover:border-[#1948ff]/30"
      >
        Accueil
      </a>
    </header>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border pt-6">
      <h2 className="text-xl font-bold text-[#161b25]">{title}</h2>
      <div className="mt-3 space-y-2">{children}</div>
    </section>
  );
}
