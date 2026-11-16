// Clickable Figma prototypes shown on the UI/UX Design page (and on a client's case study when linked).
// Each one must be shared publicly in Figma ("Anyone with the link can view") or the embed shows "request access".
// Template-based demos are labelled as such, with credit to the original designer where it's known.
const embed = (proto, scaling) => {
  const url = new URL(proto);
  const key = url.pathname.split("/")[2];
  const name = url.pathname.split("/")[3];
  const params = new URLSearchParams({ "embed-host": "so-digital", "content-scaling": "fixed", scaling, "hide-ui": "1", theme: "dark" });
  for (const p of ["node-id", "starting-point-node-id"]) if (url.searchParams.get(p)) params.set(p, url.searchParams.get(p));
  return `https://embed.figma.com/proto/${key}/${name}?${params.toString()}`;
};

const proto = (p) => ({
  ...p,
  poster: `/images/work/prototypes/${p.slug}.webp`,
  embedUrl: embed(p.figmaUrl, p.kind === "App" ? "scale-down" : "scale-down-width"),
});

export const prototypes = [
  proto({
    slug: "waggish-travels-website",
    title: "Waggish Travels website design",
    kind: "Website",
    label: "Client project",
    client: "Waggish Travels",
    caseStudy: "waggish-travels",
    description: "The clickable design for Waggish Travels' travel portal: flight and hotel search, top deals and destination pages, designed in Figma before we built it.",
    figmaUrl: "https://www.figma.com/proto/7xsni3TsuMEFnG3S1ZrfPG/Untitled?node-id=1-1832",
  }),
  proto({
    slug: "hotel-booking-website",
    title: "Hotel booking website prototype",
    kind: "Website",
    label: "Template-based demo",
    description: "A hotel booking website flow with search, featured stays and booking pages, customised as a SO Digital demo.",
    figmaUrl: "https://www.figma.com/proto/SPkECVlwOoKFzQEkvKin0j/Demo-2?node-id=408-22",
  }),
  proto({
    slug: "travelsafe-app",
    title: "TravelSafe travel app prototype",
    kind: "App",
    label: "Template-based demo",
    credit: "Based on a Figma Community design by SheftyDesign",
    description: "A mobile travel app flow: onboarding, sign-in, destination discovery and booking, clickable like a real app.",
    figmaUrl: "https://www.figma.com/proto/8Vdv21j9uqgh5Qkdg0fRci/App-Demo-1?node-id=476-954&starting-point-node-id=476%3A954",
  }),
  proto({
    slug: "tour-booking-website",
    title: "Tour booking website prototype",
    kind: "Website",
    label: "Template-based demo",
    description: "A tour and holiday booking site with destination search, popular tours and offers for organisations.",
    figmaUrl: "https://www.figma.com/proto/8HZ8YDt0WSYiArXHxrcXGs/Demo-6?node-id=201-254&starting-point-node-id=201%3A254",
  }),
  proto({
    slug: "travel-website-dark",
    title: "Travel packages website prototype",
    kind: "Website",
    label: "Template-based demo",
    description: "A dark-themed travel website with vacation categories, all-inclusive packages and special offers.",
    figmaUrl: "https://www.figma.com/proto/YhLRnuUSZaWUi9be9mz3uz/Demo-4?node-id=1-3864&starting-point-node-id=1%3A3864",
  }),
  proto({
    slug: "golobe-travel-booking",
    title: "Travel booking website prototype",
    kind: "Website",
    label: "Template-based demo",
    credit: "Based on the Golobe UI kit by Visiata",
    description: "A flight and hotel booking website with search, listings and checkout screens.",
    figmaUrl: "https://www.figma.com/proto/ApTHRhkhKUWGaE1u9Bi4vS/Demo-5?node-id=108-18842&starting-point-node-id=108%3A18842",
  }),
  proto({
    slug: "travel-website-mountains",
    title: "Adventure travel website prototype",
    kind: "Website",
    label: "Template-based demo",
    description: "An illustrated adventure travel landing page with destinations, tours and a 'Why us' section.",
    figmaUrl: "https://www.figma.com/proto/odfI1Pq2QBjUZXEzQ87FUy/DEMO-1?node-id=339-630",
  }),
];

export const prototypesForCaseStudy = (slug) => prototypes.filter((p) => p.caseStudy === slug);
