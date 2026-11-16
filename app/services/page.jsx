import Link from "next/link";
import styles from "../components/content.module.css";
import { SectionFooter } from "../Main/SectionFooter";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ContactCta } from "../components/ContactCta";
import { services } from "../lib/services";
import { serviceGroups } from "../lib/serviceIndex";
import { FreeAuditBox } from "../components/FreeAuditBox";
import { headlinePrices, inr } from "../lib/pricing";
import { absoluteUrl } from "../lib/site";
import { pageMetadata, JsonLd, graph, breadcrumbSchema, ORG_ID } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Digital Marketing Services in Kolkata",
  description:
    "Digital marketing, website and video services in Kolkata: websites from ₹4,999, SEO from ₹1,999 a month, Meta and Google Ads, video, shoots.",
  path: "/services",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "CollectionPage",
            "@id": `${absoluteUrl("/services")}#webpage`,
            url: absoluteUrl("/services"),
            name: "Digital Marketing Services in Kolkata",
            about: { "@id": ORG_ID },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: services.map((s, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: s.name,
                url: absoluteUrl(`/services/${s.slug}`),
              })),
            },
          },
          breadcrumbSchema(crumbs)
        )}
      />
      <main id="main-content" className={styles.page}>
        <div className={styles.container}>
          <Breadcrumbs items={crumbs} />
          <p className={styles.eyebrow}>Our services</p>
          <h1 className={styles.title}>Digital Marketing Services for Kolkata Businesses</h1>
          <p className={styles.lead}>
            SO Digital is a full-service digital agency in Kolkata. One team covers everything a growing brand needs online: the
            design, the website, the content and the campaigns that bring customers in. Choose a service below to see what&apos;s
            included, how we work and answers to common questions.
          </p>

          <section className={styles.section} aria-labelledby="prices">
            <h2 id="prices" className={styles.h2}>Starting prices</h2>
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
            <p className={styles.text} style={{ marginTop: 16 }}>
              <Link href="/pricing" className={styles.inlineLink}>See pricing for every service</Link>
            </p>
          </section>

          <FreeAuditBox compact />

          {serviceGroups.map((group) => (
            <section key={group} className={styles.section} aria-labelledby={`g-${group.replace(/\W+/g, "-")}`}>
              <h2 id={`g-${group.replace(/\W+/g, "-")}`} className={styles.h2}>{group}</h2>
              <div className={styles.cardGrid}>
                {services
                  .filter((s) => s.group === group)
                  .map((s) => (
                    <Link key={s.slug} href={`/services/${s.slug}`} className={styles.card}>
                      <h3 className={styles.cardTitle}>{s.name}</h3>
                      <p className={styles.cardText}>{s.summary}</p>
                      <span className={styles.cardCta}>Explore {s.name} →</span>
                    </Link>
                  ))}
              </div>
            </section>
          ))}

          <ContactCta title="Not sure which service you need?" text="Tell us about your goals and we'll recommend the right mix. Many clients combine a new website with SEO and paid ads. We reply within 24 hours." />
        </div>
      </main>
      <SectionFooter />
    </>
  );
}
