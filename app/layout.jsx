import "./globals.css";
import { Navigation } from "./Navigation";
import { HydrationFlag } from "./HydrationFlag";
import { site, SITE_URL } from "./lib/site";
import { services } from "./lib/services";
import { JsonLd, graph, organizationSchema, websiteSchema /*, personSchemas */ } from "./lib/seo";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Digital Marketing Agency in Kolkata, SEO & Ads | SO Digital",
    template: "%s | SO Digital",
  },
  description: site.description,
  applicationName: site.name,
  // Named people behind the content (E-E-A-T): their bios are on /about.
  // authors: site.founders.map((f) => ({ name: f.name, url: `${SITE_URL}/about#${f.id}` })),
  creator: site.name,
  publisher: site.name,
  category: "Digital Marketing Agency",
  // Canonical URLs are set per page (via pageMetadata) so no page inherits the homepage's.
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: site.locale,
    title: "Digital Marketing Agency in Kolkata, SEO & Ads | SO Digital",
    description: site.description,
    images: [{ url: site.ogImage, width: 1200, height: 630, alt: "SO Digital: digital marketing agency in Kolkata" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Kolkata, SEO & Ads | SO Digital",
    description: site.description,
    images: [site.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    // "max-snippet" is left out: unlimited is already Google's default, and some checkers misread "-1" as blocking snippets.
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-video-preview": -1 },
  },
  formatDetection: { telephone: false },
  // Paste the codes from Google Search Console / Bing Webmaster Tools into these env vars before deploying.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } : undefined,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050507",
  colorScheme: "dark",
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning: the inline script below may add a class to <html> before React hydrates.
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        {/* Marks <html> as JS-enabled, and removes host-injected comments from <head> (Netlify adds one),
            which would break React hydration. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');try{for(var n=document.head.firstChild,x;n;n=x){x=n.nextSibling;if((n.nodeType===8&&n.data.trim().length>3)||(n.nodeType===3&&!n.data.trim()))n.remove()}}catch(e){}",
          }}
        />
        {/* Fonts used above the fold: start downloading them before the CSS asks for them */}
        <link rel="preload" href="/fonts/inter-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/causten-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {/* Chrome/Edge: start loading a page when a visitor hovers or presses on its link, so it opens instantly. */}
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prerender: [{ source: "document", where: { href_matches: "/*" }, eagerness: "moderate" }],
            }),
          }}
        />
        {/* A plain-text guide to the site for AI assistants (see /llms.txt). */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="llms.txt: guide to this site for AI assistants" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <JsonLd data={graph(organizationSchema(services), websiteSchema() /*, personSchemas() */)} />
        <HydrationFlag />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
