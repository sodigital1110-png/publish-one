import Main from "./Main/Main";
import { pageMetadata, JsonLd, graph, faqSchema, ORG_ID, WEBSITE_ID } from "./lib/seo";
import { homeFaqs } from "./lib/faqs";
import { site, SITE_URL } from "./lib/site";
import { CONTENT_UPDATED } from "./lib/updated";

export const metadata = pageMetadata({
  title: "Digital Marketing Agency in Kolkata, SEO & Ads | SO Digital",
  absoluteTitle: true,
  description: site.description,
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "WebPage",
            "@id": `${SITE_URL}/#webpage`,
            url: SITE_URL,
            name: "Digital Marketing Agency in Kolkata, SEO & Ads | SO Digital",
            isPartOf: { "@id": WEBSITE_ID },
            about: { "@id": ORG_ID },
            description: site.description,
            dateModified: CONTENT_UPDATED,
          },
          faqSchema(homeFaqs)
        )}
      />
      <Main />
    </>
  );
}
