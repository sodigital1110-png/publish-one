import Link from "next/link";
import styles from "../components/content.module.css";
import { SectionFooter } from "../Main/SectionFooter";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ContactCta } from "../components/ContactCta";
import { FaqList } from "../components/FaqList";
import { FreeAuditBox } from "../components/FreeAuditBox";
import { services } from "../lib/services";
import { serviceGroups } from "../lib/serviceIndex";
import { headlinePrices, priceFor, inr } from "../lib/pricing";
import { absoluteUrl } from "../lib/site";
import { CONTENT_UPDATED, longDate } from "../lib/updated";
import { pageMetadata, JsonLd, graph, breadcrumbSchema, faqSchema, ORG_ID } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Digital Marketing & Website Prices in Kolkata",
  description:
    "SO Digital prices in Kolkata: banners from ₹199, video editing from ₹299, SEO from ₹1,999 a month, websites from ₹4,999, plus a free SEO audit.",
  path: "/pricing",
});

const faqs = [
  {
    q: "How much does a website cost in Kolkata?",
    a: "With SO Digital, websites start at ₹4,999 for a starter business website. Larger sites, online stores and custom features are quoted on scope, and domain and hosting are separate yearly costs.",
  },
  {
    q: "What is the banner design price in Kolkata?",
    a: "Banner and social media post designs start at ₹199 each. Large-format print banners, packaging and monthly packs are quoted upfront.",
  },
  {
    q: "How much does video editing cost?",
    a: "Reel and short video editing starts at ₹299 per video. Longer YouTube videos, motion graphics and colour grading are quoted on length and effects.",
  },
  {
    q: "How much does SEO cost per month?",
    a: "SEO plans start at ₹1,999 a month for a starter plan, and every plan begins with a free SEO audit report.",
  },
  {
    q: "Why do some services say 'custom quote'?",
    a: "Services such as ad management, app development, custom software and shoots depend heavily on scope, so we quote them individually within 24 hours, at the most affordable price we can offer for that scope.",
  },
  {
    q: "Are there any extra costs?",
    a: "Third-party costs, such as ad budgets paid to Meta or Google, domain or hosting, are listed separately in your written quote before work starts.",
  },
];

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Pricing", path: "/pricing" },
];

export default function PricingPage() {
  const priced = services.filter((s) => priceFor(s.slug));
  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "WebPage",
            "@id": `${absoluteUrl("/pricing")}#webpage`,
            url: absoluteUrl("/pricing"),
            name: "SO Digital pricing",
            dateModified: CONTENT_UPDATED,
            about: { "@id": ORG_ID },
            mainEntity: {
              "@type": "OfferCatalog",
              name: "SO Digital starting prices",
              itemListElement: priced.map((s) => ({
                "@type": "Offer",
                url: absoluteUrl(`/services/${s.slug}`),
                priceCurrency: "INR",
                price: priceFor(s.slug).price,
                priceSpecification: { "@type": "PriceSpecification", minPrice: priceFor(s.slug).price, priceCurrency: "INR" },
                itemOffered: { "@type": "Service", name: s.name, provider: { "@id": ORG_ID } },
              })),
            },
          },
          breadcrumbSchema(crumbs),
          faqSchema(faqs)
        )}
      />
      <main id="main-content" className={styles.page}>
        <div className={styles.container}>
          <Breadcrumbs items={crumbs} />
          <p className={styles.eyebrow}>Pricing</p>
          <h1 className={styles.title}>Digital Marketing, Design and Website Prices in Kolkata</h1>
          <p className={styles.lead}>
            Clear starting prices, so you know where you stand before you call. Banner designs start at just ₹199, video
            editing at ₹299, SEO at ₹1,999 a month and websites at ₹4,999. Everything else is quoted on scope within 24
            hours, and every enquiry gets a free SEO audit report of your website.
          </p>
          <p className={styles.meta}>
            Prices updated <time dateTime={CONTENT_UPDATED}>{longDate(CONTENT_UPDATED)}</time>
          </p>

          <section className={styles.section} aria-labelledby="headline">
            <h2 id="headline" className={styles.h2}>Our starting prices</h2>
            <div className={styles.priceGrid}>
              {headlinePrices.map((p) => (
                <Link key={p.slug} href={`/services/${p.slug}`} className={styles.priceCard}>
                  <span className={styles.priceCardLabel}>{p.label}</span>
                  <span className={styles.priceCardUnit}>Starts at just</span>
                  <span className={styles.priceCardValue}>{inr(p.price)}</span>
                  <span className={styles.priceCardUnit}>{p.unit}</span>
                </Link>
              ))}
            </div>
          </section>

          <FreeAuditBox />

          {serviceGroups.map((group) => {
            const list = services.filter((s) => s.group === group);
            return (
              <section key={group} className={styles.section} aria-labelledby={`g-${group.replace(/\W+/g, "-")}`}>
                <h2 id={`g-${group.replace(/\W+/g, "-")}`} className={styles.h2}>{group}</h2>
                <p className={styles.tableHint} aria-hidden="true">Swipe sideways to compare →</p>
                <div className={styles.tableWrap}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th scope="col">Service</th>
                        <th scope="col">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list.map((s) => {
                        const p = priceFor(s.slug);
                        return (
                          <tr key={s.slug}>
                            <th scope="row">
                              <Link href={`/services/${s.slug}`} className={styles.inlineLink}>{s.name}</Link>
                            </th>
                            <td>{p ? `Starts at ${inr(p.price)} ${p.unit}` : "Custom quote within 24 hours"}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </section>
            );
          })}

          <section className={styles.section} aria-labelledby="custom">
            <h2 id="custom" className={styles.h2}>Need a custom website or custom software?</h2>
            <p className={styles.text}>
              Tell us what you need built. We start with the smallest version that solves your main problem and grow it in phases,
              so you get it at the most affordable price we can offer.{" "}
              <Link href="/services/custom-software-development" className={styles.inlineLink}>Custom software development</Link>
            </p>
          </section>

          <section className={styles.section} aria-labelledby="faq">
            <h2 id="faq" className={styles.h2}>Pricing: frequently asked questions</h2>
            <FaqList faqs={faqs} />
          </section>

          <ContactCta title="Get a quote and your free SEO audit" />
        </div>
      </main>
      <SectionFooter />
    </>
  );
}
