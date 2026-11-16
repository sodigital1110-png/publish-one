import "../contact/contact.css";
import Link from "next/link";
import styles from "../components/content.module.css";
import { ContactPageSection } from "../contact/ContactPageSection";
import { SectionContact } from "../Main/SectionContact";
import { FaqList } from "../components/FaqList";
import { absoluteUrl } from "../lib/site";
import { freeAudit } from "../lib/pricing";
import { pageMetadata, JsonLd, graph, breadcrumbSchema, faqSchema, ORG_ID } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Free SEO Audit Report for Your Website, Kolkata",
  description:
    "Get a free SEO audit report from SO Digital, Kolkata: Google rankings, AI search visibility, speed, mobile and local SEO, plus a fix list.",
  path: "/free-seo-audit",
});

const included = [
  "Technical health: indexing, broken pages, redirects, sitemap and robots.txt",
  "Page speed and Core Web Vitals on mobile and desktop",
  "Mobile usability: text size, tap targets and layout issues",
  "On-page SEO: titles, meta descriptions, headings, image alt text and internal links",
  "Local SEO: your Google Business Profile, reviews and name, address and phone consistency",
  "AI search visibility: whether ChatGPT, Gemini and Google AI Overviews can read and cite your site",
  "Structured data (schema) that's present, missing or broken",
  "The keywords your competitors rank for that you don't",
  "A prioritised fix list: what to do first for the biggest gain",
];

const faqs = [
  {
    q: "Is the SEO audit really free?",
    a: "Yes. Everyone who contacts SO Digital gets a free SEO audit report of their website, whether or not they hire us. There's no charge and no obligation.",
  },
  {
    q: "What do I need to share for the audit?",
    a: "Just your website address and, if you like, the services and areas you want to rank for. If you give us access to Google Search Console, the report can include your real search data too, but it isn't required.",
  },
  {
    q: "What will the report tell me?",
    a: "It shows what's stopping your website from ranking on Google and appearing in AI answers, covering technical issues, speed, mobile, on-page SEO, local SEO, schema and keyword gaps, with a prioritised list of fixes.",
  },
  {
    q: "I don't have a website yet. Can I still contact you?",
    a: "Yes. Without a website we can audit your Google Business Profile and social profiles instead, and our websites start at ₹4,999.",
  },
  {
    q: "Do you audit websites outside Kolkata?",
    a: "Yes. We audit websites for businesses anywhere in India.",
  },
];

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Free SEO audit", path: "/free-seo-audit" },
];

export default function FreeSeoAuditPage() {
  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "WebPage",
            "@id": `${absoluteUrl("/free-seo-audit")}#webpage`,
            url: absoluteUrl("/free-seo-audit"),
            name: "Free SEO audit report",
            about: { "@id": ORG_ID },
            mainEntity: {
              "@type": "Offer",
              name: "Free SEO audit report",
              price: 0,
              priceCurrency: "INR",
              seller: { "@id": ORG_ID },
              availability: "https://schema.org/InStock",
              url: absoluteUrl("/free-seo-audit"),
            },
          },
          breadcrumbSchema(crumbs),
          faqSchema(faqs)
        )}
      />
      <ContactPageSection>
        <SectionContact
          eyebrow="Free SEO audit report"
          heading={<>Get a Free SEO Audit <br /> Report for Your Website</>}
          intro={freeAudit.text}
          defaultService="Free SEO audit report"
          submitLabel="Get My Free SEO Audit"
        />

        <div className={styles.container} style={{ paddingTop: 80 }}>
          <section className={styles.section} aria-labelledby="included">
            <h2 id="included" className={styles.h2}>What&apos;s in your free SEO audit report?</h2>
            <ul className={styles.checkList}>
              {included.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </section>

          <section className={styles.section} aria-labelledby="after">
            <h2 id="after" className={styles.h2}>After the audit</h2>
            <p className={styles.text}>
              You can fix the issues yourself with the report, or let us do it. Our <Link href="/services/seo-geo-aeo" className={styles.inlineLink}>SEO services in Kolkata</Link> start
              at ₹1,999 a month, we also offer <Link href="/services/seo-services-india" className={styles.inlineLink}>affordable SEO across India</Link>, and
              websites start at ₹4,999. See all our <Link href="/pricing" className={styles.inlineLink}>starting prices</Link>.
            </p>
          </section>

          <section className={styles.section} aria-labelledby="faq">
            <h2 id="faq" className={styles.h2}>Free SEO audit: frequently asked questions</h2>
            <FaqList faqs={faqs} />
          </section>
        </div>
      </ContactPageSection>
    </>
  );
}
