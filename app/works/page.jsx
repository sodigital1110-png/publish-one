import "./works.css";
import { WorksPageSection } from "./WorksPageSection";
import { caseStudies } from "../lib/caseStudies";
import { absoluteUrl } from "../lib/site";
import { pageMetadata, JsonLd, graph, breadcrumbSchema, videoSchema, ORG_ID } from "../lib/seo";
import styles from "../components/content.module.css";
import { ReelGallery } from "../components/ReelGallery";
import { videos } from "../lib/videos";
import { creatives } from "../lib/portfolio";
import { CreativeGallery } from "../components/CreativeGallery";

export const metadata = pageMetadata({
  title: "Our Work & Client Case Studies",
  description:
    "SO Digital's client work: case studies, Reels and shoots for e-commerce, FMCG, solar, automobile, education, fashion, travel and retail brands.",
  path: "/works",
});

const Works = () => {

  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "CollectionPage",
            "@id": `${absoluteUrl("/works")}#webpage`,
            url: absoluteUrl("/works"),
            name: "SO Digital client work and case studies",
            about: { "@id": ORG_ID },
            mainEntity: {
              "@type": "ItemList",
              itemListElement: caseStudies.map((c, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: c.title,
                url: absoluteUrl(`/works/${c.slug}`),
              })),
            },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Works", path: "/works" },
          ]),
          videos.map(videoSchema)
        )}
      />
      <WorksPageSection caseStudies={caseStudies}>
        <section className={styles.container} style={{ paddingTop: 40 }} aria-labelledby="reels-title">
          <p className={styles.eyebrow}>Reels &amp; video</p>
          <h2 id="reels-title" className={styles.h2}>Reels, shoots and edits for Kolkata brands</h2>
          <p className={styles.text} style={{ marginBottom: 32 }}>
            A selection of the Reels, event films, testimonial edits and on-location shoots SO Digital has produced for clients.
            Tap the speaker on any video to hear it.
          </p>
          <ReelGallery videos={videos} label="Reels and videos by SO Digital" />
        </section>
        <section className={styles.container} style={{ paddingTop: 0 }} aria-labelledby="designs-title">
          <p className={styles.eyebrow}>Banners &amp; creatives</p>
          <h2 id="designs-title" className={styles.h2}>Ad creatives, banners and posters</h2>
          <p className={styles.text} style={{ marginBottom: 32 }}>
            Meta Ads creatives, admission posters, product banners and website designs for our clients. Tap any design to see it
            full size.
          </p>
          <CreativeGallery items={creatives} label="Designs by SO Digital" />
        </section>
      </WorksPageSection>
    </>
  );
};

export default Works;
