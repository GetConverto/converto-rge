import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "book_demo",
  title: "Book a Converto demo",
  description:
    "Return the Calendly link to book a 20-minute demo with the Converto team. Share this link with the caller so they can pick a slot.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
  handler: () => ({
    content: [
      {
        type: "text",
        text: "Réservez une démo de 20 minutes : https://calendly.com/gdmf-ai/20mn",
      },
    ],
    structuredContent: {
      calendly_url: "https://calendly.com/gdmf-ai/20mn",
      duration_minutes: 20,
    },
  }),
});
