import Link from "next/link";
import styles from "../components/content.module.css";
import { SectionFooter } from "../Main/SectionFooter";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { ContactCta } from "../components/ContactCta";
import { areas } from "../lib/areas";
import { serviceIndex } from "../lib/serviceIndex";
import { absoluteUrl } from "../lib/site";
import { pageMetadata, JsonLd, graph, breadcrumbSchema, ORG_ID } from "../lib/seo";

const TITLE = "Areas We Serve in Kolkata & Howrah";
const DESCRIPTION =
  "SO Digital works with businesses across Kolkata and Howrah: Salt Lake, Sector V, New Town, Park Street, South Kolkata, Dum Dum and Howrah.";

export const metadata = pageMetadata({ title: TITLE, description: DESCRIPTION, path: "/areas-we-serve" });

const crumbs = [
  { name: "Home", path: "/" },
  { name: "Areas we serve", path: "/areas-we-serve" },
];

const serviceName = (slug) => serviceIndex.find((s) => s.slug === slug)?.name || slug;

export default function AreasPage() {
  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "WebPage",
            "@id": `${absoluteUrl("/areas-we-serve")}#webpage`,
            url: absoluteUrl("/areas-we-serve"),
            name: TITLE,
            description: DESCRIPTION,
            about: { "@id": ORG_ID },
            mentions: areas.flatMap((a) => a.places.map((p) => ({ "@type": "Place", name: `${p}, Kolkata` }))),
          },
          breadcrumbSchema(crumbs)
        )}
      />
      <main id="main-content" className={styles.page}>
        <div className={styles.container}>
          <Breadcrumbs items={crumbs} />
          <p className={styles.eyebrow}>Areas we serve</p>
          <h1 className={styles.title}>Digital Marketing, Websites and SEO Across Kolkata and Howrah</h1>
          <p className={styles.lead}>
            SO Digital is a Kolkata team working with businesses in every part of the city and in Howrah, and with brands across India
            online. Each area has its own mix of businesses and customers, so here is what businesses in each one ask us for most, and
            where to start.
          </p>

          <nav aria-label="Areas on this page" className={styles.section}>
            <ul className={styles.pills}>
              {areas.map((a) => (
                <li key={a.id}>
                  <a href={`#${a.id}`}>{a.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          {areas.map((a) => (
            <section key={a.id} id={a.id} className={styles.section} aria-labelledby={`${a.id}-h`}>
              <h2 id={`${a.id}-h`} className={styles.h2}>
                Digital marketing, websites and SEO in {a.name}
              </h2>
              <p className={styles.text}>
                <strong>Covers:</strong> {a.places.join(", ")}.
              </p>
              <p className={styles.text}>{a.text}</p>
              <ul className={styles.pills} style={{ marginTop: 16 }} aria-label={`Popular services in ${a.name}`}>
                {a.services.map((slug) => (
                  <li key={slug}>
                    <Link href={`/services/${slug}`}>{serviceName(slug)}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section className={styles.section} aria-labelledby="everywhere">
            <h2 id="everywhere" className={styles.h2}>Outside Kolkata?</h2>
            <p className={styles.text}>
              We also build websites and run SEO for businesses anywhere in India. See{" "}
              <Link href="/services/website-development-india" className={styles.inlineLink}>
                website development in India
              </Link>{" "}
              and{" "}
              <Link href="/services/seo-services-india" className={styles.inlineLink}>
                affordable SEO services in India
              </Link>
              .
            </p>
          </section>

          <ContactCta
            title="Tell us where you are and what you need"
            text="Wherever you are in Kolkata or Howrah, tell us about your business and we'll reply within 24 hours, with a free SEO audit report of your website."
          />
        </div>
      </main>
      <SectionFooter />
    </>
  );
}
