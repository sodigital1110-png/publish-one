// Starting prices published on the site. Set by the SO Digital team (15 Nov 2026).
// One source of truth: service pages, /pricing, the homepage offer strip, schema and llms.txt all read from here.
// Add a service here only once the team has confirmed its starting price.

export const inr = (n) => `₹${Number(n).toLocaleString("en-IN")}`;

export const startingPrices = {
  "graphic-design": {
    price: 199,
    unit: "per banner",
    label: "Banner & poster design",
    note: "Starts at ₹199 for a single social media banner or post design. The final price depends on the size, the number of designs and how much copy, illustration or photo editing is involved. Bulk packs for monthly social posts cost less per design.",
  },
  "video-editing": {
    price: 299,
    unit: "per video",
    label: "Video & reel editing",
    note: "Starts at ₹299 for a short reel or short-form video edit. Longer videos, YouTube edits, motion graphics, colour grading and subtitles in Bengali, Hindi or English are quoted on the length and effects you need.",
  },
  "seo-geo-aeo": {
    price: 1999,
    unit: "per month",
    label: "SEO services",
    note: "Starts at ₹1,999 a month for a starter local SEO plan. Plans grow with the number of pages, keywords and locations you want to rank for, and every plan starts with a free SEO audit report of your website.",
  },
  "seo-services-india": {
    price: 1999,
    unit: "per month",
    label: "Affordable SEO plans",
    note: "Starts at ₹1,999 a month for a starter SEO plan for a small business website anywhere in India. Plans grow with the number of pages, keywords and locations you want to rank for, and every plan starts with a free SEO audit report.",
  },
  "web-development": {
    price: 4999,
    unit: "one-time",
    label: "Website development",
    note: "Starts at ₹4,999 for a starter business website. Extra pages, e-commerce, booking, custom features, domain and hosting are quoted separately, so you only pay for what your business needs.",
  },
  "website-development-india": {
    price: 4999,
    unit: "one-time",
    label: "Affordable websites, India",
    note: "Starts at ₹4,999 for a starter business website delivered remotely anywhere in India. Extra pages, e-commerce, booking, custom features, domain and hosting are quoted separately.",
  },
  "ecommerce-website-development": {
    price: 4999,
    unit: "starting, one-time",
    label: "E-commerce websites",
    note: "Our websites start at ₹4,999. An online store costs more than a starter site because of the product catalogue, payment gateway, shipping and order setup, so we quote it on the number of products and features you need.",
  },
  "travel-website-design": {
    price: 4999,
    unit: "starting, one-time",
    label: "Travel websites",
    note: "Our websites start at ₹4,999. A travel agency site with tour package pages, itineraries and enquiry forms is quoted on the number of packages, destinations and features such as online payment.",
  },
};

export const priceFor = (slug) => startingPrices[slug];

// Shown on the homepage, /pricing and llms.txt (the four headline prices).
export const headlinePrices = [
  { slug: "graphic-design", label: "Banner design", ...startingPrices["graphic-design"] },
  { slug: "video-editing", label: "Video editing", ...startingPrices["video-editing"] },
  { slug: "seo-geo-aeo", label: "SEO services", ...startingPrices["seo-geo-aeo"] },
  { slug: "web-development", label: "Website", ...startingPrices["web-development"] },
];

export const freeAudit = {
  title: "Free SEO audit report for everyone who contacts us",
  short: "Free SEO audit report with every enquiry",
  text: "Send us your website address with any enquiry and we'll send you a free SEO audit report: what's stopping your site from ranking on Google in Kolkata, how it shows up in AI answers like ChatGPT, page speed, mobile issues and a prioritised fix list. No charge and no obligation.",
};
