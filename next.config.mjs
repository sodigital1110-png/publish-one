/** @type {import('next').NextConfig} */

// Old URLs that now live elsewhere. Permanent (308) redirects pass ranking signals to the new pages.
const legacyBlog = {
  "post-1": "why-first-impressions-cost-customers",
  "post-2": "seo-geo-aeo-future-of-digital-discovery",
  "post-4": "logo-is-not-your-brand",
  "post-5": "website-mistakes-killing-conversion-rate",
  "post-6": "video-content-strategy-for-brands",
};

// Static files in /public: returning visitors reuse them instead of re-downloading or re-checking.
const ONE_YEAR = "public, max-age=31536000, immutable"; // files whose names never change
const ONE_MONTH = "public, max-age=2592000, stale-while-revalidate=86400"; // images you might replace in place

const nextConfig = {
  output: "standalone",
  poweredByHeader: false,
  async redirects() {
    return [
      // www.so-digital.in -> so-digital.in is in middleware.js (it also needs the HSTS header on the redirect).
      ...Object.entries(legacyBlog).map(([from, to]) => ({
        source: `/blog/${from}`,
        destination: `/blog/${to}`,
        permanent: true,
      })),
      // An anonymous case study was retired; send its readers (and any links) to a real, named one.
      { source: "/blog/post-3", destination: "/works/biswas-retail-group", permanent: true },
      { source: "/blog/ecommerce-brand-3x-revenue-90-days", destination: "/works/biswas-retail-group", permanent: true },
      { source: "/works/casestudy1", destination: "/works", permanent: true },
      { source: "/casestudies", destination: "/works", permanent: true },
    ];
  },
  async headers() {
    return [
      { source: "/fonts/:path*", headers: [{ key: "Cache-Control", value: ONE_YEAR }] },
      { source: "/:dir(images|mockups|logos|videos)/:path*", headers: [{ key: "Cache-Control", value: ONE_MONTH }] },
      { source: "/:file(og-image.png|icon-192.png|icon-512.png)", headers: [{ key: "Cache-Control", value: ONE_MONTH }] },
      {
        source: "/:path*",
        headers: [
          // HSTS: browsers that have visited once go straight to https:// for a year (no http:// round trip).
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
