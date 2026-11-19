import Main from "./Main/Main";
import { pageMetadata, JsonLd, graph, faqSchema, ORG_ID, WEBSITE_ID } from "./lib/seo";
import { homeFaqs } from "./lib/faqs";
import { site, SITE_URL, HOME_URL } from "./lib/site";
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
      {/* React places these in <head>. Written here so the homepage URL keeps its trailing slash (see pageMetadata). */}
      <link rel="canonical" href={HOME_URL} />
      <meta property="og:url" content={HOME_URL} />
      <JsonLd
        data={graph(
          {
            "@type": "WebPage",
            "@id": `${SITE_URL}/#webpage`,
            url: HOME_URL,
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
