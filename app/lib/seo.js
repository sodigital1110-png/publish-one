import { priceFor } from "./pricing";
import { site, SITE_URL, absoluteUrl, serviceArea, topics } from "./site";

// Builds a complete metadata object for a page so every route gets a unique
// title, description, canonical URL, Open Graph and Twitter card.
export function pageMetadata({ title, description, path, type = "website", absoluteTitle = false, publishedTime, modifiedTime, authors }) {
  const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`;
  const image = { url: site.ogImage, width: 1200, height: 630, alt: `${site.name}: digital marketing agency in Kolkata` };
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      title: fullTitle,
      description,
      siteName: site.name,
      locale: site.locale,
      images: [image],
      ...(type === "article" ? { publishedTime, modifiedTime, authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [site.ogImage],
    },
  };
}

// Renders a JSON-LD block. "<" is escaped so content can never close the script tag.
export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
// export const personId = (id) => `${SITE_URL}/about#${id}`;

export function organizationSchema(services = []) {
  return {
    "@type": "ProfessionalService",
    "@id": ORG_ID,
    name: site.name,
    url: SITE_URL,
    slogan: site.tagline,
    description: site.description,
    logo: { "@type": "ImageObject", url: absoluteUrl(site.logoMark), width: 512, height: 512 },
    image: absoluteUrl(site.ogImage),
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      postalCode: site.address.postalCode,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    // Office street address above; the wider reach across Kolkata is modelled here.
    areaServed: serviceArea,
    currenciesAccepted: "INR",
    priceRange: "From ₹199",
    knowsLanguage: ["en-IN", "bn-IN", "hi-IN"],
    foundingLocation: { "@type": "City", name: "Kolkata", sameAs: "https://www.wikidata.org/wiki/Q1348" },
    // founder: site.founders.map((f) => ({ "@id": personId(f.id) })),
    sameAs: Object.values(site.socials),
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: site.phone,
      email: site.email,
      areaServed: "IN",
      availableLanguage: site.languages,
    },
    knowsAbout: topics,
    hasOfferCatalog: services.length
      ? {
          "@type": "OfferCatalog",
          name: "Digital marketing, design and development services",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            ...(priceFor(s.slug) ? { priceCurrency: "INR", price: priceFor(s.slug).price, priceSpecification: { "@type": "PriceSpecification", minPrice: priceFor(s.slug).price, priceCurrency: "INR" } } : {}),
            itemOffered: { "@type": "Service", "@id": `${absoluteUrl(`/services/${s.slug}`)}#service`, name: s.name, url: absoluteUrl(`/services/${s.slug}`) },
          })),
        }
      : undefined,
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: site.name,
    description: site.description,
    inLanguage: site.language,
    publisher: { "@id": ORG_ID },
  };
}

/* export function personSchemas() {
  return site.founders.map((f) => ({
    "@type": "Person",
    "@id": personId(f.id),
    name: f.name,
    jobTitle: f.role,
    description: f.bio,
    url: absoluteUrl(`/about#${f.id}`),
    image: absoluteUrl(f.image),
    worksFor: { "@id": ORG_ID },
    workLocation: { "@type": "City", name: "Kolkata" },
    knowsAbout: f.knowsAbout,
    sameAs: f.sameAs?.length ? f.sameAs : undefined,
  }));
} */

export function breadcrumbSchema(items) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// VideoObject for a reel hosted on the site (lets Google show it in video results and AI answers).
export function videoSchema(v) {
  return {
    "@type": "VideoObject",
    "@id": `${absoluteUrl(v.src)}#video`,
    name: `${v.client}: ${v.title}`,
    description: v.description,
    thumbnailUrl: absoluteUrl(v.poster),
    contentUrl: absoluteUrl(v.src),
    uploadDate: v.uploadDate,
    duration: v.duration,
    width: v.width,
    height: v.height,
    inLanguage: v.language,
    creator: { "@id": ORG_ID },
  };
}

// ImageObject for a piece of creative work (helps it appear in Google Images for "banner design" etc.).
export function creativeSchema(c) {
  return {
    "@type": "ImageObject",
    contentUrl: absoluteUrl(c.src),
    name: `${c.client}: ${c.kind}`,
    caption: c.alt,
    width: c.width,
    height: c.height,
    creator: { "@id": ORG_ID },
    creditText: "SO Digital",
  };
}

export const graph = (...nodes) => ({ "@context": "https://schema.org", "@graph": nodes.flat().filter(Boolean) });
