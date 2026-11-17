// Builds /llms.txt (a short guide for AI assistants) and /llms-full.txt (the full site content
// as plain Markdown) from the same data the pages use, so they never go out of date.
import { site, SITE_URL } from "./site";
import { services } from "./services";
import { caseStudies } from "./caseStudies";
import { industries } from "./industries";
import { videos } from "./videos";
import { posts /*, AUTHOR */ } from "./posts";
import { homeFaqs, contactFaqs, kolkataAreas } from "./faqs";
import { CONTENT_UPDATED } from "./updated";
import { headlinePrices, inr, freeAudit, priceFor } from "./pricing";

const url = (path) => `${SITE_URL}${path}`;

function header() {
  return [
    `# ${site.name}`,
    "",
    `> ${site.name} is a digital marketing agency based in ${site.address.locality}, ${site.address.region}, ${site.address.countryName}. It offers ${services.map((s) => s.name.replace("SEO, GEO & AEO", "SEO/GEO/AEO")).join(", ")} for startups, SMEs and established brands.`,
    "",
    // `- Founders: ${site.founders.map((f) => `${f.name} (${f.role})`).join(" and ")}`,
    `- Address: ${site.address.street}, ${site.address.locality}, ${site.address.region}, ${site.address.countryName}`,
    `- Phone: ${site.phoneDisplay}`,
    `- Email: ${site.email}`,
    `- Website: ${SITE_URL}`,
    `- Social: ${Object.values(site.socials).join(", ")}`,
    "- Business type: digital marketing agency with an office in Krishnapur, Kolkata, serving clients across the city",
    `- Areas served: ${kolkataAreas.join(", ")}, and clients across India online`,
    `- Languages: ${site.languages.join(", ")}`,
    "- Response time: within 24 hours",
    `- Starting prices: ${headlinePrices.map((p) => `${p.label} from ${inr(p.price)} ${p.unit}`).join("; ")}. Other services are quoted on scope within 24 hours.`,
    "- Budget: affordable, low-cost options for small businesses in Kolkata and Howrah (searches like 'cheap video editing near me' or 'affordable SEO services near me'), with published starting prices and free quotes within 24 hours",
    "- Also offered: wedding videography, pre-wedding shoots and wedding video editing; drone shoots (aerial video and photos); website hosting with domain and SSL set-up",
    `- Free offer: ${freeAudit.text}`,
    `- Last updated: ${CONTENT_UPDATED}`,
  ];
}

export function llmsTxt() {
  return [
    ...header(),
    "",
    "## Services",
    "",
    ...services.map((s) => `- [${s.name}](${url(`/services/${s.slug}`)}): ${s.intro.split(/(?<=\.)\s/)[0]}`),
    "",
    "## Industries",
    "",
    ...industries.map((i) => `- [${i.name}](${url(`/industries/${i.slug}`)}): ${i.intro.split(/(?<=\.)\s/)[0]}`),
    "",
    "## Client results",
    "",
    ...caseStudies.map((c) => `- [${c.client}](${url(`/works/${c.slug}`)}): ${c.summary}`),
    "",
    "## Video work",
    "",
    ...videos.map((v) => `- [${v.client}: ${v.title}](${url(v.src)}): ${v.description}`),
    "",
    "## Articles",
    "",
    ...posts.map((p) => `- [${p.title}](${url(`/blog/${p.slug}`)}): ${p.description}`),
    "",
    "## Key pages",
    "",
    `- [About](${url("/about")})`,
    `- [All services](${url("/services")})`,
    `- [Industries](${url("/industries")})`,
    `- [Client work](${url("/works")})`,
    `- [Pricing](${url("/pricing")})`,
    `- [Free SEO audit report](${url("/free-seo-audit")})`,
    `- [Areas we serve in Kolkata and Howrah](${url("/areas-we-serve")}): Salt Lake & Sector V, New Town & Rajarhat, Park Street & central Kolkata, South Kolkata, North Kolkata & Dum Dum, Howrah`,
    `- [Blog](${url("/blog")})`,
    `- [Editorial policy](${url("/editorial-policy")}): who writes the content and where facts and client results come from`,
    `- [Privacy policy](${url("/privacy-policy")})`,
    `- [Contact](${url("/contact")})`,
    "",
    "## Optional",
    "",
    `- [Full site content in one file](${url("/llms-full.txt")})`,
    "",
  ].join("\n");
}

function blockToMarkdown(block) {
  switch (block.type) {
    case "heading":
      return `#### ${block.text}`;
    case "callout":
      return `> ${block.text}`;
    case "list":
      return block.items.map((i) => `- ${i}`).join("\n");
    default:
      return block.text;
  }
}

export function llmsFullTxt() {
  const out = [...header()];
  // out.push("", "## About SO Digital", "");
  // for (const f of site.founders) out.push(`- ${f.name}, ${f.role}: ${f.bio}`);
  out.push("", "## Frequently asked questions", "");
  for (const f of [...homeFaqs, ...contactFaqs]) out.push(`**${f.q}**`, "", f.a, "");

  out.push("## Services", "");
  for (const s of services) {
    out.push(`### ${s.h1}`, "", `URL: ${url(`/services/${s.slug}`)}`, "", s.intro, "", "What's included:", "");
    out.push(...s.deliverables.map((d) => `- ${d}`), "", "How we work:", "");
    out.push(...s.process.map((p, i) => `${i + 1}. ${p.title}: ${p.text}`), "");
    if (s.results) out.push(`Results for ${s.results.client}:`, "", ...s.results.points.map((p) => `- ${p}`), "");
    const price = priceFor(s.slug);
    out.push(price ? `Price: starts at ${inr(price.price)} ${price.unit}. ${price.note}` : "Price: quoted on scope within 24 hours.", "");
    for (const sec of s.sections || []) {
      out.push(`#### ${sec.h2}`, "", ...(sec.paras || []).flatMap((t) => [t, ""]));
      if (sec.list) out.push(...sec.list.map((l) => `- ${l}`), "");
      if (sec.table) out.push(`| ${sec.table.columns.join(" | ")} |`, `|${sec.table.columns.map(() => " --- ").join("|")}|`, ...sec.table.rows.map((r) => `| ${r.join(" | ")} |`), "");
    }
    if (s.comparison) {
      const { title, columns, rows } = s.comparison;
      out.push(`${title}`, "", `| ${columns.join(" | ")} |`, `|${columns.map(() => " --- ").join("|")}|`, ...rows.map((r) => `| ${r.join(" | ")} |`), "");
    }
    out.push("FAQ:", "");
    for (const f of s.faqs) out.push(`**${f.q}**`, "", f.a, "");
  }

  out.push("## Industries", "");
  for (const i of industries) {
    out.push(`### ${i.h1}`, "", `URL: ${url(`/industries/${i.slug}`)}`, "", i.intro, "", "What works:", "");
    out.push(...i.plays.map((p) => `- ${p.title}: ${p.text}`), "", "FAQ:", "");
    for (const f of i.faqs) out.push(`**${f.q}**`, "", f.a, "");
  }

  out.push("## Case studies", "");
  for (const c of caseStudies) {
    out.push(`### ${c.title}`, "", `URL: ${url(`/works/${c.slug}`)}`, "", `Client: ${c.client} (${c.industry})`, `Scope: ${c.scope.join(", ")}`, "", c.brief, "");
    out.push("What SO Digital delivered:", "", ...c.approach.map((x) => `- ${x}`), "");
    if (c.results?.length) out.push("Results:", "", ...c.results.map((r) => `- ${r.value}: ${r.label}`), "");
    for (const q of c.quotes || []) out.push(`> "${q.text}" — ${q.name}, ${q.role}`, "");
  }

  out.push("## Articles", "");
  for (const p of posts) {
    // out.push(`### ${p.title}`, "", `URL: ${url(`/blog/${p.slug}`)}`, `Published: ${p.datePublished} by ${AUTHOR.name}`, "");
    out.push(`### ${p.title}`, "", `URL: ${url(`/blog/${p.slug}`)}`, `Published: ${p.datePublished}`, "");
    for (const block of p.content) out.push(blockToMarkdown(block), "");
  }
  return out.join("\n");
}
