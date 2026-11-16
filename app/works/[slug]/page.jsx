import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../../components/content.module.css";
import { SectionFooter } from "../../Main/SectionFooter";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { ContactCta } from "../../components/ContactCta";
import { caseStudies, getCaseStudy } from "../../lib/caseStudies";
import { services } from "../../lib/services";
import { absoluteUrl } from "../../lib/site";
import { responsiveImage, imageSize } from "../../lib/images";
import { pageMetadata, JsonLd, graph, breadcrumbSchema, videoSchema, ORG_ID } from "../../lib/seo";
import { videosForCaseStudy } from "../../lib/videos";
import { creativesForCaseStudy } from "../../lib/portfolio";
import { CreativeGallery } from "../../components/CreativeGallery";
import { PrototypeGallery } from "../../components/PrototypeGallery";
import { prototypesForCaseStudy } from "../../lib/prototypes";
import { ReelGallery } from "../../components/ReelGallery";
import { AppStoreLinks, appSchema } from "../../components/AppStoreLinks";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return pageMetadata({ title: cs.metaTitle, description: cs.metaDescription, path: `/works/${cs.slug}`, type: "article" });
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const path = `/works/${cs.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Works", path: "/works" },
    { name: cs.client, path },
  ];
  const usedServices = services.filter((s) => cs.services.includes(s.slug));
  const others = caseStudies.filter((c) => c.slug !== cs.slug);
  const reels = videosForCaseStudy(cs.slug);
  const protos = prototypesForCaseStudy(cs.slug);
  const creatives = creativesForCaseStudy(cs.slug).filter((c) => c.src !== cs.image);

  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "Article",
            "@id": `${absoluteUrl(path)}#article`,
            headline: cs.title,
            description: cs.metaDescription,
            image: [cs.image, ...creatives.map((g) => g.src)].filter(Boolean).map(absoluteUrl),
            url: absoluteUrl(path),
            mainEntityOfPage: absoluteUrl(path),
            author: { "@id": ORG_ID },
            publisher: { "@id": ORG_ID },
            about: cs.app ? { "@id": `${absoluteUrl(path)}#app` } : { "@type": "Organization", name: cs.client },
            articleSection: "Case Studies",
          },
          cs.app ? appSchema(cs, ORG_ID, absoluteUrl(path)) : [],
          breadcrumbSchema(crumbs),
          reels.map(videoSchema)
        )}
      />
      <main id="main-content" className={styles.page}>
        <article className={styles.container}>
          <Breadcrumbs items={crumbs} />
          <p className={styles.eyebrow}>Case study · {cs.industry}</p>
          <h1 className={styles.title}>{cs.title}</h1>
          <p className={styles.lead}>{cs.summary}</p>

          <dl className={styles.facts}>
            <div>
              <dt>Client</dt>
              <dd>{cs.client}</dd>
            </div>
            <div>
              <dt>Industry</dt>
              <dd>{cs.industry}</dd>
            </div>
            <div>
              <dt>Scope</dt>
              <dd>{cs.scope.join(", ")}</dd>
            </div>
          </dl>

          {cs.app && (
            <section className={styles.section} aria-labelledby="get-app">
              <h2 id="get-app" className={styles.h2}>Get the {cs.app.name} app</h2>
              <p className={styles.text}>{cs.app.name} is live for Android and iOS. Download it from the store for your phone:</p>
              <AppStoreLinks app={cs.app} />
            </section>
          )}

          {cs.image && (
            <div className={styles.heroImage}>
              <img {...responsiveImage(cs.image, "(max-width: 960px) 100vw, 1036px")} {...imageSize(cs.image)} alt={cs.imageAlt} fetchPriority="high" decoding="async" />
            </div>
          )}

          {cs.results?.length > 0 && (
          <section className={styles.section} aria-labelledby="results">
            <h2 id="results" className={styles.h2}>Results</h2>
            <dl className={styles.stats}>
              {cs.results.map((r) => (
                <div key={r.label} className={styles.stat}>
                  <dt>{r.value}</dt>
                  <dd>{r.label}</dd>
                </div>
              ))}
            </dl>
          </section>
          )}

          <section className={styles.section} aria-labelledby="brief">
            <h2 id="brief" className={styles.h2}>The brief</h2>
            <p className={styles.text}>{cs.brief}</p>
          </section>

          <section className={styles.section} aria-labelledby="delivered">
            <h2 id="delivered" className={styles.h2}>What SO Digital delivered</h2>
            <ul className={styles.checkList}>
              {cs.approach.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </section>

          {protos.length > 0 && (
            <section className={styles.section} aria-labelledby="prototype">
              <h2 id="prototype" className={styles.h2}>Try the {cs.client} design live</h2>
              <PrototypeGallery items={protos} label={`${cs.client} interactive prototype`} />
            </section>
          )}

          {creatives.length > 0 && (
            <section className={styles.section} aria-labelledby="gallery">
              <h2 id="gallery" className={styles.h2}>Work we created for {cs.client}</h2>
              <CreativeGallery items={creatives} label={`Designs for ${cs.client}`} />
            </section>
          )}

          {reels.length > 0 && (
            <section className={styles.section} aria-labelledby="videos">
              <h2 id="videos" className={styles.h2}>Videos we made for {cs.client}</h2>
              <ReelGallery videos={reels} label={`Videos for ${cs.client}`} />
            </section>
          )}

          {cs.quotes?.length > 0 && (
          <section className={styles.section} aria-labelledby="client-says">
            <h2 id="client-says" className={styles.h2}>In the client&apos;s words</h2>
            {cs.quotes.map((q) => (
              <figure key={q.text} className={styles.quote}>
                <blockquote>&ldquo;{q.text}&rdquo;</blockquote>
                <figcaption>
                  <strong>{q.name}</strong>, {q.role}
                </figcaption>
              </figure>
            ))}
          </section>
          )}

          <section className={styles.section} aria-labelledby="services-used">
            <h2 id="services-used" className={styles.h2}>Services used</h2>
            <ul className={styles.pills}>
              {usedServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.section} aria-labelledby="more-work">
            <h2 id="more-work" className={styles.h2}>More client work</h2>
            <div className={styles.cardGrid}>
              {others.map((c) => (
                <Link key={c.slug} href={`/works/${c.slug}`} className={styles.card}>
                  <span className={styles.cardMeta}>{c.industry}</span>
                  <h3 className={styles.cardTitle}>{c.client}</h3>
                  <p className={styles.cardText}>{c.summary}</p>
                  <span className={styles.cardCta}>Read the {c.client} case study →</span>
                </Link>
              ))}
            </div>
          </section>

          <ContactCta title="Want results like these?" />
        </article>
      </main>
      <SectionFooter />
    </>
  );
}
