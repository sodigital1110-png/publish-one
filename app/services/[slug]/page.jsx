import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../../components/content.module.css";
import { SectionFooter } from "../../Main/SectionFooter";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { FaqList } from "../../components/FaqList";
import { ContactCta } from "../../components/ContactCta";
import { services, getService } from "../../lib/services";
import { posts } from "../../lib/posts";
import { caseStudies } from "../../lib/caseStudies";
import { site, absoluteUrl, serviceArea } from "../../lib/site";
import { CONTENT_UPDATED, longDate } from "../../lib/updated";
import { responsiveImage, imageSize } from "../../lib/images";
import { pageMetadata, JsonLd, graph, breadcrumbSchema, faqSchema, videoSchema, creativeSchema, ORG_ID } from "../../lib/seo";
import { videosForService } from "../../lib/videos";
import { creativesFor } from "../../lib/portfolio";
import { CreativeGallery } from "../../components/CreativeGallery";
import { PrototypeGallery } from "../../components/PrototypeGallery";
import { prototypes } from "../../lib/prototypes";
import { industries } from "../../lib/industries";
import { ReelGallery } from "../../components/ReelGallery";
import { AppShowcase } from "../../components/AppStoreLinks";
import { FreeAuditBox } from "../../components/FreeAuditBox";
import { priceFor, inr } from "../../lib/pricing";
import { areas } from "../../lib/areas";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({ title: service.metaTitle, description: service.metaDescription, path: `/services/${service.slug}` });
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const path = `/services/${service.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path },
  ];
  const relatedPosts = posts.filter((p) => service.relatedPosts.includes(p.slug));
  const relatedCases = caseStudies.filter((c) => service.relatedCaseStudies.includes(c.slug));
  // Live apps we developed (case studies with an `app` field), shown with their store links
  const apps = caseStudies.filter((c) => c.app && c.services.includes(service.slug));
  const relatedServices = services.filter((s) => service.relatedServices.includes(s.slug));
  // All work tagged with this service (app/lib/videos.js and app/lib/portfolio.js)
  const reels = videosForService(service.slug);
  const work = creativesFor(service.slug);
  const videoFirst = reels.length >= work.length;
  // showPrototypes: true = every prototype; "Website" or "App" = only that kind
  const protos =
    service.showPrototypes === true
      ? prototypes
      : service.showPrototypes
        ? prototypes.filter((p) => p.kind === service.showPrototypes)
        : [];
  const price = priceFor(service.slug);
  const india = service.geo === "india";
  const areaServed = india ? { "@type": "Country", name: "India" } : serviceArea;
  // Where this service appears on industry pages ("SEO for e-commerce websites", "Meta Ads for solar companies"...)
  const industryLinks = industries.flatMap((ind) =>
    (ind.serviceAngles || [])
      .filter((x) => x.service === service.slug)
      .map((x) => ({ href: `/industries/${ind.slug}#${x.service}`, label: x.heading, industry: ind.name }))
  );

  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "Service",
            "@id": `${absoluteUrl(path)}#service`,
            name: service.name,
            serviceType: service.name,
            description: service.metaDescription,
            url: absoluteUrl(path),
            image: service.image ? absoluteUrl(service.image) : undefined,
            provider: { "@id": ORG_ID },
            areaServed,
            dateModified: CONTENT_UPDATED,
            offers: price
              ? {
                  "@type": "Offer",
                  url: absoluteUrl(path),
                  priceCurrency: "INR",
                  price: price.price,
                  priceSpecification: { "@type": "PriceSpecification", minPrice: price.price, priceCurrency: "INR", description: `Starts at ${inr(price.price)} ${price.unit}` },
                  availability: "https://schema.org/InStock",
                }
              : undefined,
          },
          breadcrumbSchema(crumbs),
          faqSchema(service.faqs),
          reels.map(videoSchema),
          work.map(creativeSchema)
        )}
      />
      <main id="main-content" className={styles.page}>
        <article className={styles.container}>
          <Breadcrumbs items={crumbs} />
          <p className={styles.eyebrow}>{service.name}</p>
          <h1 className={styles.title}>{service.h1}</h1>
          <p className={styles.lead}>
            {service.intro}{" "}
            {service.leadNote
              ? service.leadNote
              : india
              ? "SO Digital is based in Kolkata and works with businesses across India remotely, over video calls, shared Figma links, staging previews and WhatsApp updates."
              : `SO Digital works with businesses across ${site.address.locality}, including Salt Lake, Sector V, New Town and Park Street, and with clients elsewhere in India online.`}
          </p>
          {price && (
            <p className={styles.priceTag}>
              <span>Starts at</span> <strong>{inr(price.price)}</strong> <span>{price.unit}</span>
              <a href="#pricing" className={styles.priceTagLink}>See pricing</a>
            </p>
          )}
          <p className={styles.meta}>
            By the <Link href="/about">SO Digital team</Link>, {site.address.locality} · Updated <time dateTime={CONTENT_UPDATED}>{longDate(CONTENT_UPDATED)}</time>
          </p>

          {service.image && (
            <div className={styles.heroImage}>
              <img
                {...responsiveImage(service.image, "(max-width: 960px) 100vw, 1036px")}
                {...imageSize(service.image)}
                alt={service.imageAlt}
                fetchPriority="high"
                decoding="async"
              />
            </div>
          )}

          <section className={styles.section} aria-labelledby="included">
            <h2 id="included" className={styles.h2}>What does our {service.name} service include?</h2>
            <ul className={styles.checkList}>
              {service.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </section>

          <section className={styles.section} aria-labelledby="process">
            <h2 id="process" className={styles.h2}>How does our {service.name} process work?</h2>
            <ol className={styles.steps}>
              {service.process.map((step) => (
                <li key={step.title}>
                  <h3 className={styles.h3}>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </section>

          {(service.sections || []).map((sec) => (
            <section key={sec.id} id={sec.id} className={styles.section} aria-labelledby={`${sec.id}-h`}>
              <h2 id={`${sec.id}-h`} className={styles.h2}>{sec.h2}</h2>
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
              {sec.table && (
                <>
                <p className={styles.tableHint} aria-hidden="true">Swipe sideways to compare →</p>
                <div className={styles.tableWrap}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        {sec.table.columns.map((c) => (
                          <th key={c} scope="col">{c}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {sec.table.rows.map((row) => (
                        <tr key={row[0]}>
                          <th scope="row">{row[0]}</th>
                          {row.slice(1).map((cell, i) => (
                            <td key={i}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                </>
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

          {service.proof && (
            <section className={styles.section} aria-labelledby="proof">
              <h2 id="proof" className={styles.h2}>{service.proof.title}</h2>
              <p className={styles.text} style={{ marginBottom: 24 }}>{service.proof.intro}</p>
              <CreativeGallery items={service.proof.items} label={service.proof.title} variant="proof" />
            </section>
          )}

          {(reels.length > 0 || work.length > 0) && (
            <section className={styles.section} aria-labelledby="reels">
              <h2 id="reels" className={styles.h2}>{service.reelsTitle || `Our ${service.name} work`}</h2>
              <p className={styles.text} style={{ marginBottom: 24 }}>
                Real work for our clients{reels.length > 0 ? ". Tap the speaker on a video to hear it" : ""}
                {work.length > 0 ? `${reels.length > 0 ? "; tap" : ". Tap"} any design to see it full size` : ""}.
              </p>
              {videoFirst ? (
                <>
                  {reels.length > 0 && <ReelGallery videos={reels} label={`${service.name} videos by SO Digital`} />}
                  {work.length > 0 && (
                    <div style={{ marginTop: reels.length ? 40 : 0 }}>
                      <CreativeGallery items={work} label={`${service.name} designs by SO Digital`} />
                    </div>
                  )}
                </>
              ) : (
                <>
                  <CreativeGallery items={work} label={`${service.name} designs by SO Digital`} />
                  {reels.length > 0 && (
                    <div style={{ marginTop: 40 }}>
                      <ReelGallery videos={reels} label={`${service.name} videos by SO Digital`} />
                    </div>
                  )}
                </>
              )}
            </section>
          )}

          {apps.length > 0 && (
            <section className={styles.section} aria-labelledby="apps">
              <h2 id="apps" className={styles.h2}>Apps we&apos;ve developed</h2>
              <p className={styles.text} style={{ marginBottom: 24 }}>
                Live apps built by SO Digital that you can download and try on your own phone today.
              </p>
              <AppShowcase items={apps} />
            </section>
          )}

          {protos.length > 0 && (
            <section className={styles.section} aria-labelledby="prototypes">
              <h2 id="prototypes" className={styles.h2}>
                {service.showPrototypes === "App" ? "Interactive app prototype: try it live" : service.showPrototypes === "Website" ? "Interactive website templates: try them live" : "Interactive Figma prototypes: try them live"}
              </h2>
              <p className={styles.text} style={{ marginBottom: 24 }}>
                Click any design to open the real, clickable prototype right here on our website: tap through the pages just like a
                finished {service.showPrototypes === "App" ? "app" : service.showPrototypes === "Website" ? "website" : "website or app"}. This is how our clients review a design
                before a line of code is written. Template-based demos are marked as such.
              </p>
              <PrototypeGallery items={protos} label="Interactive Figma prototypes" />
            </section>
          )}

          {service.results && (
            <section className={styles.section} aria-labelledby="results">
              <h2 id="results" className={styles.h2}>Results for {service.results.client}</h2>
              <ul className={styles.checkList}>
                {service.results.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <p className={styles.text} style={{ marginTop: 16 }}>
                <Link href={`/works/${service.results.caseStudy}`} className={styles.inlineLink}>
                  Read the {service.results.client} case study
                </Link>
              </p>
            </section>
          )}

          {service.comparison && (
            <section className={styles.section} aria-labelledby="compare">
              <h2 id="compare" className={styles.h2}>{service.comparison.title}</h2>
              {service.comparison.intro && <p className={styles.text}>{service.comparison.intro}</p>}
              <p className={styles.tableHint} aria-hidden="true">Swipe sideways to compare →</p>
              <div className={styles.tableWrap}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      {service.comparison.columns.map((c) => (
                        <th key={c} scope="col">{c}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {service.comparison.rows.map((row) => (
                      <tr key={row[0]}>
                        <th scope="row">{row[0]}</th>
                        {row.slice(1).map((cell, i) => (
                          <td key={i}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          <section id="pricing" className={styles.section} aria-labelledby="pricing-h">
            <h2 id="pricing-h" className={styles.h2}>How much does {service.priceName || service.name} cost{india ? " in India" : ` in ${site.address.locality}`}?</h2>
            {price ? (
              <div className={styles.priceBox}>
                <p className={styles.priceBig}>
                  <span className={styles.priceFrom}>Starts at</span> {inr(price.price)} <span className={styles.priceUnit}>{price.unit}</span>
                </p>
                <p className={styles.text}>{price.note}</p>
              </div>
            ) : (
              <p className={styles.text}>
                {service.priceText ||
                  `Every ${service.name} project is quoted on its scope, so you only pay for what you need. Tell us what you're planning and we'll send a clear, itemised quote within 24 hours, at the most affordable price we can offer for that scope.`}
              </p>
            )}
            <p className={styles.text} style={{ marginTop: 12 }}>
              <Link href="/pricing" className={styles.inlineLink}>See all our starting prices</Link>
            </p>
          </section>

          {!service.noAudit && <FreeAuditBox />}

          <section className={styles.section} aria-labelledby="why">
            <h2 id="why" className={styles.h2}>Why choose SO Digital for {service.name}{india ? "" : ` in ${site.address.locality}`}?</h2>
            <ul className={styles.checkList}>
              {service.benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </section>

          {industryLinks.length > 0 && (
            <section className={styles.section} aria-labelledby="industries">
              <h2 id="industries" className={styles.h2}>{service.name} for your industry</h2>
              <p className={styles.text} style={{ marginBottom: 16 }}>
                We tailor {service.name.toLowerCase()} to how each sector wins customers. See how it works for yours:
              </p>
              <ul className={styles.pills}>
                {industryLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {!india && (
            <section className={styles.section} aria-labelledby="areas">
              <h2 id="areas" className={styles.h2}>{service.name} across Kolkata and Howrah</h2>
              <p className={styles.text} style={{ marginBottom: 16 }}>
                {service.areasText ||
                  "We work with businesses in every part of the city: Salt Lake and Sector V, New Town and Rajarhat, Park Street and central Kolkata, Ballygunge, Gariahat, Jadavpur, Behala and Garia in South Kolkata, Dum Dum and North Kolkata, and Howrah. See what businesses in each area need most:"}
              </p>
              <ul className={styles.pills}>
                {areas.map((a) => (
                  <li key={a.id}>
                    <Link href={`/areas-we-serve#${a.id}`}>{a.name}</Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className={styles.section} aria-labelledby="faq">
            <h2 id="faq" className={styles.h2}>{service.name}: frequently asked questions</h2>
            <FaqList faqs={service.faqs} />
          </section>

          {relatedCases.length > 0 && (
            <section className={styles.section} aria-labelledby="work">
              <h2 id="work" className={styles.h2}>Related client work</h2>
              <div className={styles.cardGrid}>
                {relatedCases.map((c) => (
                  <Link key={c.slug} href={`/works/${c.slug}`} className={styles.card}>
                    <span className={styles.cardMeta}>{c.industry}</span>
                    <h3 className={styles.cardTitle}>{c.client}</h3>
                    <p className={styles.cardText}>{c.summary}</p>
                    <span className={styles.cardCta}>Read the {c.client} case study →</span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {relatedPosts.length > 0 && (
            <section className={styles.section} aria-labelledby="reading">
              <h2 id="reading" className={styles.h2}>Further reading</h2>
              <ul className={styles.pills}>
                {relatedPosts.map((p) => (
                  <li key={p.slug}>
                    <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className={styles.section} aria-labelledby="more">
            <h2 id="more" className={styles.h2}>Related services</h2>
            <ul className={styles.pills}>
              {relatedServices.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.name}</Link>
                </li>
              ))}
              <li>
                <Link href="/services">All services</Link>
              </li>
            </ul>
          </section>

          <ContactCta title={`Talk to us about ${service.name}`} />
        </article>
      </main>
      <SectionFooter />
    </>
  );
}
