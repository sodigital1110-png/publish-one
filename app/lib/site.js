// Single source of truth for business details (name, address, phone, socials).
// Keep these identical everywhere: Google cross-checks them across the web.

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://so-digital.in").replace(/\/$/, "");

export const site = {
  name: "SO Digital",
  url: SITE_URL,
  tagline: "Strategy · Design · Growth · Success",
  description:
    "Digital marketing agency in Kolkata for websites, SEO, Meta & Google Ads, Google Business Profile, social media and video. Free SEO audit.",
  email: "sodigital1110@gmail.com",
  phone: "+917980954724",
  phoneDisplay: "+91 79809 54724",
  address: {
    // Office address, line by line as shown on the Contact page.
    streetLines: ["Anita Apartment, 2A, 2nd Floor", "AD-271, Rabindra Pally, Krishnapur"],
    street: "Anita Apartment, 2A, 2nd Floor, AD-271, Rabindra Pally, Krishnapur",
    locality: "Kolkata",
    region: "West Bengal",
    country: "IN",
    countryName: "India",
  },
  socials: {
    instagram: "https://www.instagram.com/so.digitall/",
    linkedin: "https://www.linkedin.com/company/so-digitall/",
    facebook: "https://www.facebook.com/iti890",
  },
  /* founders: [
    {
      id: "diganta-das",
      name: "Diganta Das",
      role: "Co-Founder & CEO",
      image: "/images/ceo-laksh.webp",
      bio: "Diganta Das drives everything behind the product at SO Digital: design, development, digital marketing, SEO, video production, branding and technical execution.",
      knowsAbout: ["Web development", "UI/UX design", "Search engine optimization", "Digital marketing", "Video production", "Branding"],
      sameAs: [], // add personal LinkedIn / Behance profile URLs here
    },
    {
      id: "swatyik-kundu",
      name: "Swatyik Kundu",
      role: "Co-Founder & CTO",
      image: "/images/ceo-kush.webp",
      bio: "Swatyik Kundu is the face of SO Digital, managing client communication, customer support, sales and day-to-day coordination so every project stays on track.",
      knowsAbout: ["Client relations", "Sales", "Project management"],
      sameAs: [],
    },
  ], */
  languages: ["English", "Bengali", "Hindi"],
  logoMark: "/images/so-logo-mark.png",
  ogImage: "/og-image.png",
  locale: "en_IN",
  language: "en-IN",
};

export const absoluteUrl = (path = "/") => `${SITE_URL}${path === "/" ? "" : path}`;

const WIKI = (title) => `https://en.wikipedia.org/wiki/${title}`;

// Where SO Digital works, for schema.org areaServed. Office in Krishnapur, Kolkata; serves the whole city and beyond.
export const serviceArea = [
  { "@type": "City", name: "Kolkata", sameAs: ["https://www.wikidata.org/wiki/Q1348", WIKI("Kolkata")] },
  { "@type": "Place", name: "Salt Lake (Bidhannagar)" },
  { "@type": "Place", name: "Sector V, Salt Lake" },
  { "@type": "Place", name: "New Town, Kolkata" },
  { "@type": "Place", name: "Rajarhat" },
  { "@type": "Place", name: "Park Street" },
  { "@type": "Place", name: "Ballygunge" },
  { "@type": "Place", name: "Behala" },
  { "@type": "Place", name: "Garia" },
  { "@type": "Place", name: "Dum Dum" },
  { "@type": "City", name: "Howrah" },
  { "@type": "State", name: "West Bengal", sameAs: "https://www.wikidata.org/wiki/Q1356" },
  { "@type": "Country", name: "India", sameAs: "https://www.wikidata.org/wiki/Q668" },
];

// Topics the business is an authority on (schema.org knowsAbout), linked to their encyclopedia entries.
export const topics = [
  { "@type": "Thing", name: "Digital marketing", sameAs: WIKI("Digital_marketing") },
  { "@type": "Thing", name: "Search engine optimization", sameAs: WIKI("Search_engine_optimization") },
  "Generative engine optimization",
  "Answer engine optimization",
  { "@type": "Thing", name: "Local search engine optimisation", sameAs: WIKI("Local_search_engine_optimisation") },
  { "@type": "Thing", name: "Social media marketing", sameAs: WIKI("Social_media_marketing") },
  { "@type": "Thing", name: "Google Ads", sameAs: WIKI("Google_Ads") },
  "Meta Ads (Facebook and Instagram advertising)",
  "Google Business Profile optimisation",
  { "@type": "Thing", name: "Web development", sameAs: WIKI("Web_development") },
  { "@type": "Thing", name: "Mobile app development", sameAs: WIKI("Mobile_app_development") },
  { "@type": "Thing", name: "User experience design", sameAs: WIKI("User_experience_design") },
  { "@type": "Thing", name: "Graphic design", sameAs: WIKI("Graphic_design") },
  { "@type": "Thing", name: "Video editing", sameAs: WIKI("Video_editing") },
  { "@type": "Thing", name: "Videography", sameAs: WIKI("Videography") },
  "Brand identity design",
];
