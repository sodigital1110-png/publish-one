import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../../components/content.module.css";
import { SectionFooter } from "../../Main/SectionFooter";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { FaqList } from "../../components/FaqList";
import { ContactCta } from "../../components/ContactCta";
import { industries, getIndustry } from "../../lib/industries";
import { services } from "../../lib/services";
import { getCaseStudy } from "../../lib/caseStudies";
import { site, absoluteUrl, serviceArea } from "../../lib/site";
import { responsiveImage, imageSize } from "../../lib/images";
import { CONTENT_UPDATED, longDate } from "../../lib/updated";
import { pageMetadata, JsonLd, graph, breadcrumbSchema, faqSchema, ORG_ID } from "../../lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return pageMetadata({ title: industry.metaTitle, description: industry.metaDescription, path: `/industries/${industry.slug}` });
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const path = `/industries/${industry.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: industry.name, path },
  ];
  const caseStudy = getCaseStudy(industry.caseStudy);
  const related = industry.services.map((slug) => services.find((s) => s.slug === slug)).filter(Boolean);

  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "WebPage",
            "@id": `${absoluteUrl(path)}#webpage`,
            url: absoluteUrl(path),
            name: industry.h1,
            description: industry.metaDescription,
            dateModified: CONTENT_UPDATED,
            about: { "@id": ORG_ID },
            audience: { "@type": "BusinessAudience", name: industry.name },
            mainEntity: {
              "@type": "Service",
              name: `Digital marketing for ${industry.shortName}`,
              provider: { "@id": ORG_ID },
              areaServed: serviceArea,
              audience: { "@type": "BusinessAudience", name: industry.name },
              hasOfferCatalog: industry.serviceAngles?.length
                ? {
                    "@type": "OfferCatalog",
                    name: `Services for ${industry.shortName}`,
                    itemListElement: industry.serviceAngles.map((a) => ({
                      "@type": "Offer",
                      itemOffered: { "@type": "Service", name: a.heading, description: a.text, url: absoluteUrl(`${path}#${a.service}`) },
                    })),
                  }
                : undefined,
            },
          },
          breadcrumbSchema(crumbs),
          faqSchema(industry.faqs)
        )}
      />
      <main id="main-content" className={styles.page}>
        <article className={styles.container}>
          <Breadcrumbs items={crumbs} />
          <p className={styles.eyebrow}>{industry.name}</p>
          <h1 className={styles.title}>{industry.h1}</h1>
          <p className={styles.lead}>{industry.intro}</p>
          <p className={styles.meta}>
            By the <Link href="/about">SO Digital team</Link>, {site.address.locality} · Updated <time dateTime={CONTENT_UPDATED}>{longDate(CONTENT_UPDATED)}</time>
          </p>

          {industry.image && (
            <div className={styles.heroImage}>
              <img
                {...responsiveImage(industry.image, "(max-width: 960px) 100vw, 1036px")}
                {...imageSize(industry.image)}
                alt={industry.imageAlt}
                fetchPriority="high"
                decoding="async"
              />
            </div>
          )}

          <section className={styles.section} aria-labelledby="challenges">
            <h2 id="challenges" className={styles.h2}>What makes marketing {industry.shortName} different?</h2>
            <ul className={styles.checkList}>
              {industry.challenges.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </section>

          <section className={styles.section} aria-labelledby="plays">
            <h2 id="plays" className={styles.h2}>What works for {industry.shortName} in {site.address.locality}?</h2>
            <ol className={styles.steps}>
              {industry.plays.map((p) => (
                <li key={p.title}>
                  <h3 className={styles.h3}>{p.title}</h3>
                  <p>{p.text}</p>
                </li>
              ))}
            </ol>
          </section>

          {industry.serviceAngles?.length > 0 && (
            <section className={styles.section} aria-labelledby="services-for">
              <h2 id="services-for" className={styles.h2}>Our services for {industry.shortName}</h2>
              <div className={styles.angles}>
                {industry.serviceAngles.map((a) => {
                  const svc = services.find((x) => x.slug === a.service);
                  return (
                    <div key={a.service} id={a.service} className={styles.angle}>
                      <h3 className={styles.h3}>{a.heading}</h3>
                      <p>{a.text}</p>
                      {svc && (
                        <Link href={`/services/${svc.slug}`} className={styles.inlineLink}>
                          {svc.name} services →
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}

          {caseStudy && (
            <section className={styles.section} aria-labelledby="proof">
              <h2 id="proof" className={styles.h2}>Results for {caseStudy.client}</h2>
              <ul className={styles.checkList}>
                {industry.proof.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <p className={styles.text} style={{ marginTop: 16 }}>
                <Link href={`/works/${caseStudy.slug}`} className={styles.inlineLink}>
                  Read the {caseStudy.client} case study
                </Link>
              </p>
              {industry.moreCaseStudies?.map((slug) => {
                const more = getCaseStudy(slug);
                return more ? (
                  <p key={slug} className={styles.text} style={{ marginTop: 8 }}>
                    Also see:{" "}
                    <Link href={`/works/${more.slug}`} className={styles.inlineLink}>
                      {more.client}: {more.cardTitle.charAt(0).toLowerCase() + more.cardTitle.slice(1)}
                    </Link>
                  </p>
                ) : null;
              })}
            </section>
          )}

          <section className={styles.section} aria-labelledby="essentials">
            <h2 id="essentials" className={styles.h2}>{industry.essentials.title}</h2>
            <ul className={styles.checkList}>
              {industry.essentials.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className={styles.section} aria-labelledby="faq">
            <h2 id="faq" className={styles.h2}>Marketing for {industry.shortName}: frequently asked questions</h2>
            <FaqList faqs={industry.faqs} />
          </section>

          <section className={styles.section} aria-labelledby="services">
            <h2 id="services" className={styles.h2}>Services for {industry.shortName}</h2>
            <ul className={styles.pills}>
              {related.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.name}</Link>
                </li>
              ))}
              <li>
                <Link href="/industries">All industries</Link>
              </li>
            </ul>
          </section>

          <ContactCta title={`Talk to us about marketing for ${industry.shortName}`} />
        </article>
      </main>
      <SectionFooter />
    </>
  );
}
