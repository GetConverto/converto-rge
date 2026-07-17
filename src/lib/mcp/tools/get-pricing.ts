import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_pricing",
  title: "Get Converto pricing",
  description: "Return Converto's public starting price.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify({
          starting_price_eur_ht_per_month: 390,
          display: "À partir de 390 € HT / mois",
          notes:
            "Le tarif exact dépend du volume de demandes et de la configuration. Réservez une démo pour un devis personnalisé.",
        }),
      },
    ],
  }),
});
