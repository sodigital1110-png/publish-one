// Responsive image helper: phones download a 640px-wide variant, larger screens the full image.
// Each image listed in FULL_WIDTH has a "-640.webp" twin in /public (and a "-960.webp" twin when wider than 960px).
// Add new images the same way.
const FULL_WIDTH = {
  "/images/work/carbonex-gmb-hero.webp": 1600,
  "/images/work/blue-gen-hero.webp": 1600,
  "/images/work/sc-solar-hero.webp": 1600,
  "/images/work/carbonex-hero.webp": 1600,
  "/images/work/fortune-hero.webp": 1600,
  "/images/work/video-editing-collage.webp": 1600,
  "/images/work/wedding-films-collage.webp": 1600,
  "/images/work/kashmiri-assamese-jewellery-hero.webp": 1600,
  "/images/work/social-media-collage.webp": 1600,
  "/images/work/meta-ads-collage.webp": 1600,
  "/images/work/graphic-design-collage.webp": 1600,
  "/images/work/app-prototype-screens.webp": 1600,
  "/images/blog/seo-geo-aeo-2026.webp": 1600,
  "/images/blog/google-business-profile-kolkata.webp": 1600,
  "/images/waggish-travel.webp": 1200,
  "/images/sougata-testimonial.webp": 900,
  "/images/work/designs/waggish-design-home.webp": 1440,
  "/images/work/designs/waggish-design-hotels.webp": 1440,
  "/images/work/designs/waggish-design-destinations.webp": 1440,
  "/images/work/designs/demo-hotel-booking.webp": 1440,
  "/images/work/designs/demo-tour-booking.webp": 1440,
  "/images/work/designs/demo-travel-packages.webp": 1440,
  "/images/work/designs/demo-golobe-booking.webp": 1440,
  "/images/work/designs/demo-adventure-travel.webp": 1440,
};

// Intrinsic pixel sizes, so every <img> can reserve its space before it loads (no layout shift).
const SIZES = {
  "/images/work/carbonex-gmb-hero.webp": [1600, 900],
  "/images/blog/seo-geo-aeo-2026.webp": [1600, 900],
  "/images/blog/google-business-profile-kolkata.webp": [1600, 900],
  "/images/work/featured/waggish-travels.webp": [1920, 1440],
  "/images/waggish-travel.webp": [1200, 800],
  "/images/sougata-testimonial.webp": [900, 1352],
  "/images/waggish-travel-800.webp": [800, 533],
  "/images/sougata-testimonial-700.webp": [700, 1052],
  "/images/work/blue-gen-hero.webp": [1600, 900],
  "/images/work/sc-solar-hero.webp": [1600, 900],
  "/images/work/carbonex-hero.webp": [1600, 900],
  "/images/work/fortune-hero.webp": [1600, 900],
  "/images/work/designs/waggish-design-home.webp": [1440, 900],
  "/images/work/designs/waggish-design-hotels.webp": [1440, 900],
  "/images/work/designs/waggish-design-destinations.webp": [1440, 900],
  "/images/work/designs/demo-hotel-booking.webp": [1440, 900],
  "/images/work/designs/demo-tour-booking.webp": [1440, 900],
  "/images/work/designs/demo-travel-packages.webp": [1440, 900],
  "/images/work/designs/demo-golobe-booking.webp": [1440, 900],
  "/images/work/designs/demo-adventure-travel.webp": [1440, 900],
  "/images/work/meta-ads-collage.webp": [1600, 900],
  "/images/work/graphic-design-collage.webp": [1600, 900],
  "/images/work/video-editing-collage.webp": [1600, 900],
  "/images/work/wedding-films-collage.webp": [1600, 900],
  "/images/work/kashmiri-assamese-jewellery-hero.webp": [1600, 900],
  "/images/work/social-media-collage.webp": [1600, 900],
  "/images/work/app-prototype-screens.webp": [1600, 900],
};

/**
 * Props to spread on an <img>: src, plus srcSet/sizes when a phone-sized variant exists.
 * @param {string} src
 * @param {string} sizes how wide the image renders, e.g. "(max-width: 960px) 100vw, 1036px"
 */
export function responsiveImage(src, sizes) {
  const width = FULL_WIDTH[src];
  if (!width) return { src };
  // Images wider than 960px also have a "-960.webp" twin, for tablets and high-density phones.
  const mid = width > 960 ? `${src.replace(/\.webp$/, "-960.webp")} 960w, ` : "";
  return { src, srcSet: `${src.replace(/\.webp$/, "-640.webp")} 640w, ${mid}${src} ${width}w`, sizes };
}

/** { width, height } attributes for a known image, or {} when its size isn't recorded. */
export function imageSize(src) {
  const size = SIZES[src];
  return size ? { width: size[0], height: size[1] } : {};
}
