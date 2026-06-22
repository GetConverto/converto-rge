import { createFileRoute } from "@tanstack/react-router";

const CAL_URL = "https://calendly.com/gdmf-ai/20mn";
const LOGO_URL = "/converto-logo.svg?v=2";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-10 text-[#161b25] sm:px-8">
      <div className="mx-auto max-w-3xl">
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

        <section className="mt-14 rounded-2xl border border-border bg-surface p-8 sm:p-10">
          <p className="text-sm font-semibold text-[#1948ff]">Contact</p>
          <h1 className="mt-3 text-4xl font-bold">Parlons de vos demandes de devis</h1>
          <p className="mt-5 text-lg leading-relaxed text-[#5f6673]">
            Le plus simple est de réserver une démonstration de 30 minutes. Nous regarderons votre
            volume de demandes, votre processus commercial et la manière dont Converto peut
            automatiser vos réponses et relances.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-primary px-7 text-[15px] font-semibold text-white shadow-card transition-all hover:-translate-y-0.5 hover:shadow-glow"
            >
              Réserver une démo de 30 min →
            </a>
            <a
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-white px-7 text-[15px] font-semibold text-[#161b25] transition-all hover:border-[#1948ff]/30"
            >
              Retour au site
            </a>
          </div>
          <p className="mt-6 text-sm text-[#5f6673]">
            Vous pouvez aussi écrire à{" "}
            <a href="mailto:geoffroy@get-converto.fr" className="font-semibold text-[#1948ff]">
              geoffroy@get-converto.fr
            </a>
            .
          </p>
        </section>

        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-border p-6">
            <h2 className="text-lg font-bold">Pour qui ?</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#5f6673]">
              Installateurs PAC, climatisation, solaire, isolation et rénovation énergétique qui
              veulent récupérer plus de rendez-vous qualifiés.
            </p>
          </div>
          <div className="rounded-2xl border border-border p-6">
            <h2 className="text-lg font-bold">Délai de réponse</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#5f6673]">
              Après réservation, vous recevrez une confirmation du créneau et les informations
              utiles pour préparer l'échange.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
