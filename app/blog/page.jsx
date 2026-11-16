import React from "react";
import { SectionFooter } from "../Main/SectionFooter";
import { BlogPage } from "./BlogPage";
import { posts, AUTHOR } from "../lib/posts";
import { absoluteUrl } from "../lib/site";
import { pageMetadata, JsonLd, graph, breadcrumbSchema, ORG_ID, WEBSITE_ID, personId } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Blog: Design, SEO & Digital Marketing Insights",
  description:
    "Practical articles from SO Digital on SEO, GEO and AEO, UI/UX design, Meta Ads, branding, conversion and video strategy for growing brands.",
  path: "/blog",
});

export default function Blog() {
  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "Blog",
            "@id": `${absoluteUrl("/blog")}#blog`,
            url: absoluteUrl("/blog"),
            name: "SO Digital Blog",
            isPartOf: { "@id": WEBSITE_ID },
            publisher: { "@id": ORG_ID },
            blogPost: posts.map((p) => ({
              "@type": "BlogPosting",
              headline: p.title,
              url: absoluteUrl(`/blog/${p.slug}`),
              datePublished: p.datePublished,
              author: { "@type": "Person", "@id": personId(AUTHOR.id), name: AUTHOR.name },
            })),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ])
        )}
      />
      <BlogPage />
      <SectionFooter />
    </>
  );
}
