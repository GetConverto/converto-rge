import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

export default defineTool({
  name: "get_company_overview",
  title: "Get Converto overview",
  description:
    "Return a summary of what Converto is, the problem it solves, and the value proposition for construction and energy renovation businesses.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify({
          name: "Converto",
          tagline:
            "Ne laissez plus partir des personnes prêtes à acheter. Converto répond immédiatement aux prospects, qualifie leur projet et prend le rendez-vous à votre place — via WhatsApp.",
          how_it_works:
            "Un prospect envoie une demande de devis → Converto lui répond immédiatement sur WhatsApp, qualifie le projet, relance si besoin, puis propose un rendez-vous. Votre équipe intervient uniquement quand le prospect est prêt à avancer.",
          target_customers: [
            "climatisation",
            "pompe à chaleur",
            "solaire",
            "isolation",
            "rénovation énergétique",
          ],
          typical_company_size: "PME du bâtiment de 3 à 20 salariés",
          channel: "WhatsApp",
        }),
      },
    ],
  }),
});
