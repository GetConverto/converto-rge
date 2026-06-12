import { createFileRoute } from "@tanstack/react-router";

const LOGO_URL = "/converto-logo.svg?v=2";

export const Route = createFileRoute("/mentions-legales")({
  component: MentionsLegalesPage,
});

function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-10 text-[#161b25] sm:px-8">
      <div className="mx-auto max-w-3xl">
        <Header />

        <div className="mt-14">
          <p className="text-sm font-semibold text-[#1948ff]">Converto</p>
          <h1 className="mt-3 text-4xl font-bold">Mentions légales</h1>
          <p className="mt-4 text-[#5f6673]">
            Cette page regroupe les informations légales relatives au site Converto.
          </p>
        </div>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-[#5f6673]">
          <Section title="Éditeur du site">
            <p>Nom commercial : Converto</p>
            <p>Raison sociale : Converto</p>
            <p>Forme juridique : Entrepreneur individuel</p>
            <p>Adresse du siège social : 5 Allée de l'Erbarie, 13170, Les Pennes Mirabeau</p>
            <p>SIRET / numéro d'immatriculation : 85076389700038</p>
            <p>Directeur de la publication : Geoffroy de Miol-Flavard</p>
          </Section>

          <Section title="Contact">
            <p>
              Pour toute demande relative au site ou à l'activité de Converto, vous pouvez utiliser
              la page contact du site.
            </p>
            <a href="/contact" className="mt-3 inline-flex font-semibold text-[#1948ff]">
              Accéder à la page contact
            </a>
          </Section>

          <Section title="Hébergement">
            <p>Hébergeur du site : Vercel</p>
            <p>Adresse de l'hébergeur : 340 S Lemon Ave #4133, Walnut, CA 91789 - États-Unis</p>
          </Section>

          <Section title="Propriété intellectuelle">
            <p>
              L'ensemble des contenus présents sur ce site, notamment les textes, visuels, logos,
              éléments graphiques et structure des pages, est protégé par le droit de la propriété
              intellectuelle. Toute reproduction ou réutilisation sans autorisation préalable est
              interdite.
            </p>
          </Section>

          <Section title="Responsabilité">
            <p>
              Converto s'efforce de fournir des informations exactes et à jour. Toutefois, le site
              peut contenir des erreurs ou omissions. L'utilisateur reste responsable de l'usage des
              informations consultées sur le site.
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
