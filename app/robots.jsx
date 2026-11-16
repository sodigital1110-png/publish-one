import { SITE_URL } from "./lib/site";

// Search engines and AI assistants are all welcome. The "*" rule already allows everyone; AI crawlers
// are also listed by name so the intent is explicit (a crawler that matches its own group ignores "*",
// so that group repeats the same rules).
const AI_CRAWLERS = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User",          // OpenAI / ChatGPT search
  "ClaudeBot", "Claude-SearchBot", "Claude-User",      // Anthropic / Claude
  "PerplexityBot", "Perplexity-User",                  // Perplexity
  "Google-Extended",                                   // Gemini training & grounding (AI Overviews follow Googlebot)
  "Applebot", "Applebot-Extended",                     // Apple / Siri / Apple Intelligence
  "Bingbot",                                           // Bing, Copilot, and ChatGPT search results
  "Amazonbot", "meta-externalagent", "DuckAssistBot", "MistralAI-User", "CCBot",
];

export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      // No Disallow line in this group: some audit tools read any Disallow for GPTBot & co. as "blocked".
      // The only disallowed path (/api/, the contact-form endpoint) has nothing for crawlers anyway.
      { userAgent: AI_CRAWLERS, allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
