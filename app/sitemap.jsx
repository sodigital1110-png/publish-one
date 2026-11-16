import { SITE_URL } from "./lib/site";
import { services } from "./lib/services";
import { posts } from "./lib/posts";
import { caseStudies } from "./lib/caseStudies";
import { industries } from "./lib/industries";

import { CONTENT_UPDATED } from "./lib/updated";

export default function sitemap() {
  const page = (path, priority, changeFrequency = "monthly", lastModified = CONTENT_UPDATED) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    page("", 1, "weekly"),
    page("/services", 0.9),
    ...services.map((s) => page(`/services/${s.slug}`, 0.9)),
    page("/industries", 0.8),
    ...industries.map((i) => page(`/industries/${i.slug}`, 0.8)),
    page("/works", 0.8),
    ...caseStudies.map((c) => page(`/works/${c.slug}`, 0.7)),
    page("/about", 0.7),
    page("/contact", 0.7),
    page("/pricing", 0.8),
    page("/free-seo-audit", 0.8),
    page("/areas-we-serve", 0.7),
    page("/editorial-policy", 0.3),
    page("/privacy-policy", 0.2),
    page("/terms", 0.2),
    page("/blog", 0.7, "weekly"),
    ...posts.map((p) => page(`/blog/${p.slug}`, 0.6, "yearly", p.datePublished)),
  ];
}
