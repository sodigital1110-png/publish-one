import Link from "next/link";
import styles from "./content.module.css";
import { SectionFooter } from "../Main/SectionFooter";
import { Breadcrumbs } from "./Breadcrumbs";
import { JsonLd, graph, breadcrumbSchema, ORG_ID } from "../lib/seo";
import { absoluteUrl } from "../lib/site";
import { CONTENT_UPDATED, longDate } from "../lib/updated";

// Plain text pages (privacy policy, terms of use, editorial policy): a title, an "updated" date and
// sections of paragraphs, lists and links. Content lives in each page file.
export function SimplePage({ path, eyebrow, title, intro, sections }) {
  const crumbs = [
    { name: "Home", path: "/" },
    { name: title, path },
  ];
  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "WebPage",
            "@id": `${absoluteUrl(path)}#webpage`,
            url: absoluteUrl(path),
            name: title,
            about: { "@id": ORG_ID },
            publisher: { "@id": ORG_ID },
            dateModified: CONTENT_UPDATED,
          },
          breadcrumbSchema(crumbs)
        )}
      />
      <main id="main-content" className={styles.page}>
        <article className={`${styles.container} ${styles.narrow}`}>
          <Breadcrumbs items={crumbs} />
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.meta}>
            Updated <time dateTime={CONTENT_UPDATED}>{longDate(CONTENT_UPDATED)}</time>
          </p>
          <p className={styles.lead}>{intro}</p>
          {sections.map((sec) => (
            <section key={sec.h2} className={styles.section} aria-labelledby={sec.id}>
              <h2 id={sec.id} className={styles.h2}>{sec.h2}</h2>
              {(sec.paras || []).map((t, i) => (
                <p key={i} className={styles.text}>{t}</p>
              ))}
              {sec.list && (
                <ul className={styles.checkList}>
                  {sec.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              )}
              {sec.links && (
                <ul className={styles.pills} style={{ marginTop: 16 }}>
                  {sec.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>
      </main>
      <SectionFooter />
    </>
  );
}
