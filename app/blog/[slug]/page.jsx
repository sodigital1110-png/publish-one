import React from "react";
import { notFound } from "next/navigation";
import { SectionFooter } from "../../Main/SectionFooter";
import postStyles from "./post.module.css";
import styles from "../../components/content.module.css";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { posts, getPost, AUTHOR } from "../../lib/posts";
import { services } from "../../lib/services";
import { absoluteUrl } from "../../lib/site";
import { responsiveImage, imageSize } from "../../lib/images";
import { pageMetadata, JsonLd, graph, breadcrumbSchema, ORG_ID, personId } from "../../lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.seoTitle,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.datePublished,
    authors: [AUTHOR.name],
  });
}

function renderContent(content) {
  return content.map((block, i) => {
    switch (block.type) {
      case "intro":
        return <p key={i} className={postStyles.intro}>{block.text}</p>;
      case "heading":
        return <h2 key={i} className={postStyles.heading}>{block.text}</h2>;
      case "paragraph":
        return <p key={i} className={postStyles.paragraph}>{block.text}</p>;
      case "callout":
        return <blockquote key={i} className={postStyles.callout}>{block.text}</blockquote>;
      case "list":
        return (
          <ul key={i} className={postStyles.list}>
            {block.items.map((item, j) => (
              <li key={j} className={postStyles.listItem}>{item}</li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path },
  ];
  const related = services.filter((s) => post.relatedServices.includes(s.slug));
  const morePosts = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "BlogPosting",
            "@id": `${absoluteUrl(path)}#article`,
            headline: post.title,
            description: post.description,
            image: absoluteUrl(post.image),
            datePublished: post.datePublished,
            dateModified: post.datePublished,
            articleSection: post.category,
            url: absoluteUrl(path),
            mainEntityOfPage: absoluteUrl(path),
            author: { "@type": "Person", "@id": personId(AUTHOR.id), name: AUTHOR.name, url: absoluteUrl("/about") },
            publisher: { "@id": ORG_ID },
            inLanguage: "en-IN",
          },
          breadcrumbSchema(crumbs)
        )}
      />
      <main id="main-content" className={postStyles.page}>
        <div className={postStyles.container}>
          <Breadcrumbs items={crumbs} />

          <div className={postStyles.meta}>
            <span className={postStyles.category}>{post.category}</span>
            <span className={postStyles.dot}>·</span>
            <time className={postStyles.date} dateTime={post.datePublished}>{post.date}</time>
            <span className={postStyles.dot}>·</span>
            <span className={postStyles.readTime}>{post.readTime}</span>
          </div>

          <h1 className={postStyles.title}>{post.title}</h1>

          <p className={postStyles.byline}>
            By <Link href="/about">{AUTHOR.name}</Link>, {AUTHOR.role}
          </p>

          <div className={postStyles.imageWrapper}>
            <img {...responsiveImage(post.image, "(max-width: 960px) 100vw, 716px")} alt={post.imageAlt || post.title} className={postStyles.image} {...imageSize(post.image)} fetchPriority="high" decoding="async" />
          </div>

          <article className={postStyles.article}>
            {renderContent(post.content)}
          </article>

          {related.length > 0 && (
            <section className={styles.section} style={{ marginTop: 56, marginBottom: 0 }} aria-labelledby="related-services">
              <h2 id="related-services" className={postStyles.heading}>How SO Digital can help</h2>
              <ul className={styles.pills} style={{ marginTop: 20 }}>
                {related.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`}>{s.name} services</Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className={styles.section} style={{ marginTop: 56, marginBottom: 0 }} aria-labelledby="more-articles">
            <h2 id="more-articles" className={postStyles.heading}>More articles</h2>
            <ul className={styles.pills} style={{ marginTop: 20 }}>
              {morePosts.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`}>{p.title}</Link>
                </li>
              ))}
            </ul>
          </section>

          <div className={postStyles.footer}>
            <Link href="/blog" className={postStyles.backLink} style={{ marginBottom: 0 }}>
              <ArrowLeft size={16} />
              Back to all articles
            </Link>
            <Link href="/contact" className={postStyles.cta}>
              Work With SO Digital
              <ArrowLeft size={16} style={{ transform: 'rotate(180deg)' }} />
            </Link>
          </div>
        </div>
      </main>
      <SectionFooter />
    </>
  );
}
