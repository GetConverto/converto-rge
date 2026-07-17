import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_contact_info",
  title: "Get Converto contact info",
  description: "Return public contact channels for Converto (WhatsApp and demo booking link).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify({
          whatsapp: "https://wa.me/33695084949",
          whatsapp_number: "+33 6 95 08 49 49",
          book_demo: "https://calendly.com/gdmf-ai/20mn",
          website: "https://appconverto.com",
        }),
      },
    ],
  }),
});
