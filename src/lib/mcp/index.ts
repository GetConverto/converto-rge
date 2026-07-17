import { defineMcp } from "@lovable.dev/mcp-js";
import getCompanyOverview from "./tools/get-company-overview";
import getPricing from "./tools/get-pricing";
import getContactInfo from "./tools/get-contact-info";
import getFaq from "./tools/get-faq";
import bookDemo from "./tools/book-demo";

export default defineMcp({
  name: "converto-mcp",
  title: "Converto",
  version: "0.1.0",
  instructions:
    "Public tools for Converto — a WhatsApp lead response and appointment-booking service for construction and energy renovation businesses (climatisation, pompe à chaleur, solaire, isolation, rénovation énergétique). Use `get_company_overview` for a summary, `get_pricing` for the starting price, `get_faq` to answer common questions, `get_contact_info` for contact channels, and `book_demo` to share the Calendly link.",
  tools: [getCompanyOverview, getPricing, getFaq, getContactInfo, bookDemo],
});
