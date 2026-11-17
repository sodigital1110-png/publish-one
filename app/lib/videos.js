// Client videos shown on the site (homepage strip, /works, service pages and case studies).
// Files: /public/videos/work/<slug>.mp4 (540x960 H.264, compressed for the web) and /public/images/work/<slug>.webp
// (poster). The homepage strip shows the reels listed in `homepageReels` (bottom of this file). Add new work the same way.
const UPLOADED = "2026-11-15"; // date these were published on so-digital.in

const reel = (v) => ({
  src: `/videos/work/${v.slug}.mp4`,
  poster: `/images/work/${v.slug}.webp`,
  width: 540,
  height: 960,
  uploadDate: UPLOADED,
  ...v,
});

export const videos = [
  reel({
    slug: "so-digital-meme-reel",
    services: ["video-editing", "social-media-marketing"],
    client: "SO Digital",
    title: "Meme reel: when a failed agency breaks your brand",
    type: "Meme reel",
    description:
      "A meme-style reel SO Digital edited for its own brand: punchy captions cut to film clips tell the story of a brand let down by a failed marketing agency, then rebuilt with digital marketing, web development, sales strategy, video editing and UI/UX design.",
    duration: "PT1M1S",
    uploadDate: "2026-11-16",
  }),
  reel({
    slug: "sc-solar-manufacturing-film",
    services: ["video-editing", "videography-reels-shoots", "social-media-marketing"],
    caseStudy: "sc-solar",
    client: "SC Solar",
    title: "Brand film: the story behind SC Solar's manufacturing",
    type: "Brand film",
    description:
      "A brand film for SC Solar Solution Pvt Ltd, edited by SO Digital: the company's story, its manufacturing operations and the solar inverters and power systems built on its factory floor.",
    duration: "PT1M26S",
  }),
  reel({
    slug: "sougato-edutorial-bijoya-2026",
    services: ["video-editing", "social-media-marketing"],
    client: "Sougato Edutorial",
    caseStudy: "sougato-edutorial",
    title: "Bijoya Sammilani 2026 event film",
    type: "Event film",
    description:
      "Event film for Sougato Sir's Edutorial's Bijoya Sammilani 2026, edited by SO Digital with Bengali titles, moments with students and parents, and a class 6–12 admissions message.",
    duration: "PT58S",
    language: "bn",
  }),
  reel({
    slug: "blue-gen-ad-reel",
    services: ["video-editing", "meta-ads", "social-media-marketing"],
    client: "Blue Gen",
    caseStudy: "blue-gen",
    title: "10-second video ad for a butterfly pea flower tea",
    type: "Video ad",
    description:
      "A 10-second vertical video ad SO Digital made for Blue Gen's butterfly pea flower tea: a tired workday, the tea pouch, and a cup turning bright blue.",
    duration: "PT10S",
    width: 464,
    height: 832,
  }),
  reel({
    slug: "fortune-indusfood-2026-stall-film",
    services: ["videography-reels-shoots", "video-editing"],
    client: "Fortune (AWL)",
    caseStudy: "fortune-awl",
    title: "IndusFood 2026 stall film",
    type: "Expo film",
    description:
      "A stall film from AWL Agri Business's Fortune stall at IndusFood 2026, produced by SO Digital: the stall, business meetings, live cooking demos and visitor moments.",
    duration: "PT1M17S",
  }),
  reel({
    slug: "fortune-bib-expo-reel",
    services: ["videography-reels-shoots", "video-editing"],
    client: "Fortune (AWL)",
    caseStudy: "fortune-awl",
    title: "BIB Expo stall reel",
    type: "Expo reel",
    description: "An expo reel from Fortune's stall at BIB Expo, produced by SO Digital for social media.",
    duration: "PT37S",
  }),
  reel({
    slug: "fortune-brand-activation-reel",
    services: ["videography-reels-shoots", "video-editing"],
    client: "Fortune Rice Bran Health",
    caseStudy: "fortune-awl",
    title: "Brand activation and sampling reel",
    type: "Activation reel",
    description: "A brand activation reel for Fortune Rice Bran Health featuring product sampling, produced by SO Digital.",
    duration: "PT24S",
  }),
  reel({
    slug: "carbonex-founder-reel",
    services: ["video-editing", "social-media-marketing", "meta-ads"],
    caseStudy: "carbonex",
    client: "Carbonex",
    title: "Founder reel explaining engine decarbonisation",
    type: "Talking-head reel",
    description:
      "A founder-led talking-head reel for Carbonex, a professional engine detox and decarbonisation service, edited by SO Digital with engine visuals and on-screen graphics.",
    duration: "PT1M26S",
  }),
  reel({
    slug: "sougato-edutorial-parent-testimonial",
    services: ["video-editing", "social-media-marketing", "meta-ads"],
    client: "Sougato Edutorial",
    caseStudy: "sougato-edutorial",
    title: "Parent testimonial reel with a results-first hook",
    type: "Testimonial reel",
    description:
      "A 30-second parent testimonial reel for Sougato Edutorial, edited by SO Digital with a results-first hook and Bengali captions.",
    duration: "PT30S",
    language: "bn",
  }),
  reel({
    slug: "sc-solar-shoot-behind-the-scenes",
    services: ["videography-reels-shoots", "social-media-marketing"],
    caseStudy: "sc-solar",
    client: "SC Solar",
    title: "Behind the scenes: on-location shoot at SC Solar's factory",
    type: "On-location shoot",
    description:
      "Behind-the-scenes reel of SO Digital's team filming on location at SC Solar Solution Pvt Ltd's factory for the brand's video content.",
    duration: "PT25S",
  }),
  reel({
    slug: "carbonex-explainer-reel",
    services: ["video-editing", "social-media-marketing", "meta-ads"],
    caseStudy: "carbonex",
    client: "Carbonex",
    title: "Presenter-led explainer reel for car owners",
    type: "Explainer reel",
    description:
      "A presenter-led explainer reel for Carbonex's engine detox service in Kolkata, edited by SO Digital with car and engine B-roll and a location card.",
    duration: "PT38S",
  }),
  reel({
    slug: "sc-solar-product-reel",
    services: ["video-editing", "social-media-marketing", "meta-ads"],
    caseStudy: "sc-solar",
    client: "SC Solar",
    title: "Product reel: inverters from the testing floor",
    type: "Product reel",
    description:
      "A fast-cut product reel for SC Solar showing its solar inverters and power systems being built and tested, edited by SO Digital for social media.",
    duration: "PT39S",
  }),
  reel({
    slug: "sougato-edutorial-teaching-reel",
    services: ["video-editing", "social-media-marketing"],
    client: "Sougato Edutorial",
    caseStudy: "sougato-edutorial",
    title: "English grammar teaching reel",
    type: "Teaching reel",
    description:
      "A teacher-led English grammar reel for Sougato Edutorial on interrogative sentences, edited by SO Digital with on-screen text and classroom footage.",
    duration: "PT1M43S",
  }),
  reel({
    slug: "blue-gen-presenter-ad",
    services: ["video-editing", "meta-ads", "social-media-marketing"],
    client: "Blue Gen",
    caseStudy: "blue-gen",
    title: "Presenter-led video ad for butterfly pea flower tea",
    type: "Creator-style ad",
    description:
      "A 56-second vertical video ad SO Digital made for Blue Gen: a presenter talks to camera with the butterfly pea flower tea pouch, cut with close-ups of the tea brewing bright blue and the Blue Gen logo.",
    duration: "PT56S",
  }),
  reel({
    slug: "so-digital-promo-reel",
    services: ["video-editing"],
    client: "SO Digital",
    title: "Our own ad for SO Digital's web development service",
    type: "Ad creative",
    description:
      "A short promotional reel SO Digital made for its own brand, with presenters, motion graphics and a web development message.",
    duration: "PT39S",
  }),
  // Wedding films are landscape (16:9); ReelGallery shows them in their own wide grid.
  reel({
    slug: "pre-wedding-shoot-film",
    services: ["wedding-videography", "videography-reels-shoots"],
    client: "Pre-wedding shoot",
    title: "A cinematic pre-wedding film among heritage buildings, trees and the water",
    type: "Pre-wedding film",
    description:
      "A 4-minute cinematic pre-wedding film shot and edited by SO Digital: the couple in traditional and western outfits, walking past old yellow heritage buildings with green shutters, under banyan trees and by the water.",
    duration: "PT4M14S",
    width: 960,
    height: 540,
  }),
  reel({
    slug: "bengali-wedding-film",
    services: ["wedding-videography", "video-editing"],
    client: "Bengali wedding",
    title: "Wedding highlights film: getting ready, the rituals and the night",
    type: "Wedding film",
    description:
      "A 75-second Bengali wedding highlights film shot and edited by SO Digital: the bride getting ready, Bengali titles, the wedding rituals, family moments and the couple under the night lights and at the flower-arch stage.",
    duration: "PT1M15S",
    width: 960,
    height: 540,
    language: "bn",
  }),
];

export const videosFor = (slugs) => slugs.map((s) => videos.find((v) => v.slug === s)).filter(Boolean);

// Homepage "Content That Stops The Scroll" strip, in this order: one row of six on desktop.
export const homepageReels = videosFor([
  "so-digital-meme-reel",
  "sc-solar-manufacturing-film",
  "sougato-edutorial-bijoya-2026",
  "blue-gen-ad-reel",
  "fortune-indusfood-2026-stall-film",
  "carbonex-founder-reel",
]);
const extraRules = {
  "ecommerce-website-development": (v) => v.caseStudy === "blue-gen",
  "lead-generation": (v) => v.services?.includes("meta-ads") && ["sc-solar", "sougato-edutorial", "blue-gen"].includes(v.caseStudy),
};
export const videosForService = (slug) => videos.filter((v) => v.services?.includes(slug) || extraRules[slug]?.(v));
export const videosForCaseStudy = (slug) => videos.filter((v) => v.caseStudy === slug);
