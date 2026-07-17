import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const FAQ = [
  {
    question: "Combien de temps pour mettre Converto en place ?",
    answer:
      "Comptez généralement quelques jours entre la démo, la configuration de vos scénarios et la mise en production sur votre numéro WhatsApp.",
  },
  {
    question: "Est-ce que Converto remplace mon équipe commerciale ?",
    answer:
      "Non. Converto s'occupe de la réponse immédiate, de la qualification et de la prise de rendez-vous. Votre équipe se concentre sur les prospects prêts à avancer.",
  },
  {
    question: "Sur quels canaux Converto répond-il ?",
    answer:
      "Principalement WhatsApp, car c'est le canal le plus lu par les particuliers. D'autres canaux peuvent être branchés selon les besoins.",
  },
  {
    question: "Combien coûte Converto ?",
    answer: "À partir de 390 € HT / mois. Le tarif dépend du volume de demandes et de la configuration.",
  },
  {
    question: "Puis-je essayer avant de m'engager ?",
    answer:
      "Oui. Le meilleur point d'entrée est une démo de 20 minutes pour voir Converto en action sur votre cas : https://calendly.com/gdmf-ai/20mn",
  },
];

export default defineTool({
  name: "get_faq",
  title: "Get Converto FAQ",
  description:
    "Return frequently asked questions about Converto. Optionally filter by a keyword to narrow the results.",
  inputSchema: {
    query: z
      .string()
      .trim()
      .min(1)
      .optional()
      .describe("Optional keyword to filter questions/answers (case-insensitive)."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const items = query
      ? FAQ.filter((f) =>
          (f.question + " " + f.answer).toLowerCase().includes(query.toLowerCase()),
        )
      : FAQ;
    return {
      content: [{ type: "text", text: JSON.stringify(items) }],
      structuredContent: { items },
    };
  },
});
