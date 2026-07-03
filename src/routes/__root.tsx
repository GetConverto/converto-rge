import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "Converto — Ne laissez plus partir des personnes prêtes à acheter",
      },
      {
        name: "description",
        content:
          "Converto répond immédiatement aux personnes qui vous contactent, traite leurs objections et les accompagne jusqu'au rendez-vous, au devis ou à l'achat.",
      },
      {
        property: "og:title",
        content: "Converto — Ne laissez plus partir des personnes prêtes à acheter",
      },
      {
        property: "og:description",
        content:
          "Converto répond immédiatement aux personnes qui vous contactent, traite leurs objections et les accompagne jusqu'au rendez-vous, au devis ou à l'achat.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Converto — Ne laissez plus partir des personnes prêtes à acheter",
      },
      {
        name: "twitter:description",
        content:
          "Converto répond immédiatement aux personnes qui vous contactent, traite leurs objections et les accompagne jusqu'au rendez-vous, au devis ou à l'achat.",
      },
      {
        property: "og:image",
        content: "https://appconverto.com/Converto%20Page%20accueil.png",
      },
      {
        name: "twitter:image",
        content: "https://appconverto.com/Converto%20Page%20accueil.png",
      },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg?v=3" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <FloatingWhatsAppButton />
        <Scripts />
      </body>
    </html>
  );
}

function FloatingWhatsAppButton() {
  const [isBubbleVisible, setIsBubbleVisible] = useState(true);

  return (
    <div className="fixed bottom-5 right-4 z-50 flex max-w-[calc(100vw-2rem)] flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {isBubbleVisible && (
        <div className="relative max-w-[260px] rounded-2xl border border-border bg-white py-3 pl-4 pr-10 text-sm font-semibold leading-snug text-[#161b25] shadow-card">
          Tu veux tester Converto ? Clique ici 👇
          <button
            type="button"
            aria-label="Fermer la bulle WhatsApp"
            onClick={() => setIsBubbleVisible(false)}
            className="absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center rounded-full text-[#8a90a0] transition-colors hover:bg-surface hover:text-[#161b25] focus:outline-none focus:ring-2 focus:ring-[#25D366]/25"
          >
            ×
          </button>
          <span className="absolute -bottom-1.5 right-7 h-3 w-3 rotate-45 border-b border-r border-border bg-white" />
        </div>
      )}
      <a
        href="https://wa.me/33695084949"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contacter Converto sur WhatsApp"
        className="whatsapp-float-button group relative inline-flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_45px_rgba(37,211,102,0.35)] ring-8 ring-[#25D366]/10 transition-all hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(37,211,102,0.45)] focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
      >
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          className="h-8 w-8 transition-transform group-hover:scale-105"
          fill="currentColor"
        >
          <path d="M16.01 3.2c-7.04 0-12.77 5.71-12.77 12.74 0 2.25.59 4.44 1.72 6.37L3.13 29l6.86-1.8a12.8 12.8 0 0 0 6.02 1.53c7.04 0 12.77-5.71 12.77-12.74S23.05 3.2 16.01 3.2Zm0 23.38c-1.93 0-3.82-.52-5.47-1.49l-.39-.23-4.07 1.07 1.09-3.96-.26-.41a10.56 10.56 0 0 1-1.62-5.62c0-5.84 4.81-10.6 10.72-10.6s10.72 4.76 10.72 10.6-4.81 10.64-10.72 10.64Zm5.88-7.95c-.32-.16-1.91-.94-2.2-1.05-.3-.11-.51-.16-.73.16-.21.32-.84 1.05-1.03 1.26-.19.22-.38.24-.7.08-.32-.16-1.36-.5-2.6-1.6-.96-.85-1.61-1.9-1.8-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.38.49-.57.16-.19.22-.32.32-.54.11-.22.05-.41-.03-.57-.08-.16-.73-1.75-1-2.4-.26-.63-.53-.54-.73-.55h-.62c-.22 0-.57.08-.86.41-.3.32-1.13 1.1-1.13 2.69s1.16 3.13 1.32 3.35c.16.22 2.28 3.48 5.53 4.88.77.33 1.38.53 1.85.68.78.25 1.48.21 2.04.13.62-.09 1.91-.78 2.18-1.54.27-.75.27-1.4.19-1.54-.08-.13-.3-.21-.62-.38Z" />
        </svg>
      </a>
    </div>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
