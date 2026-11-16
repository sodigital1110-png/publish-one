import Link from "next/link";
import styles from "../components/content.module.css";
import { SectionFooter } from "../Main/SectionFooter";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ContactCta } from "../components/ContactCta";
import { industries } from "../lib/industries";
import { getCaseStudy } from "../lib/caseStudies";
import { absoluteUrl } from "../lib/site";
import { pageMetadata, JsonLd, graph, breadcrumbSchema, ORG_ID } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Industries We Work With in Kolkata",
  description:
    "SO Digital's marketing, SEO and video for e-commerce, education, solar, automobile, FMCG, travel, retail and professional-services businesses.",
  path: "/industries",
});

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries" },
];

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "CollectionPage",
            "@id": `${absoluteUrl("/industries")}#webpage`,
            url: absoluteUrl("/industries"),
            name: "Industries We Work With in Kolkata",
            about: { "@id": ORG_ID },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: industries.map((ind, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: ind.name,
                url: absoluteUrl(`/industries/${ind.slug}`),
              })),
            },
          },
          breadcrumbSchema(crumbs)
        )}
      />
      <main id="main-content" className={styles.page}>
        <div className={styles.container}>
          <Breadcrumbs items={crumbs} />
          <p className={styles.eyebrow}>Industries</p>
          <h1 className={styles.title}>Industries We Work With in Kolkata</h1>
          <p className={styles.lead}>
            Every industry wins customers differently. These are the sectors where SO Digital has delivered real results for Kolkata
            businesses, each with the plan we use and the client work behind it.
          </p>

          <section className={styles.section} aria-label="All industries">
            <div className={styles.cardGrid}>
              {industries.map((ind) => {
                const cs = getCaseStudy(ind.caseStudy);
                return (
                  <Link key={ind.slug} href={`/industries/${ind.slug}`} className={styles.card}>
                    {cs && <span className={styles.cardMeta}>Client: {cs.client}</span>}
                    <h2 className={styles.cardTitle}>{ind.name}</h2>
                    <p className={styles.cardText}>{ind.metaDescription}</p>
                    <span className={styles.cardCta}>Marketing for {ind.shortName} →</span>
                  </Link>
                );
              })}
            </div>
          </section>

          <ContactCta
            title="Don't see your industry?"
            text="We work with businesses of every kind, from new startups to established brands. Tell us about yours and we'll reply within 24 hours."
          />
        </div>
      </main>
      <SectionFooter />
    </>
  );
}
