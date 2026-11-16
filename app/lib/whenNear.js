// Runs `setup` once, when `el` comes within `margin` of the viewport (default: about one screen ahead).
// Homepage sections use it to build their GSAP / SplitText scroll animations only when the visitor gets
// close, instead of all at start-up: splitting text and measuring dozens of scroll triggers for sections far
// down the page was the main cause of the homepage's long start-up task on phones.
// Hidden sections (display: none, e.g. the desktop-only projects carousel on a phone) never run their setup.
// `setup` may return a cleanup function. Returns a cleanup function for useEffect.
export function whenNear(el, setup, margin = "100% 0px") {
  if (!el || typeof IntersectionObserver === "undefined") {
    const cleanup = el ? setup() : undefined;
    return () => (typeof cleanup === "function" ? cleanup() : undefined);
  }
  let cleanup;
  let done = false;
  const io = new IntersectionObserver(
    (entries) => {
      if (done || !entries.some((e) => e.isIntersecting)) return;
      done = true;
      io.disconnect();
      cleanup = setup();
    },
    { rootMargin: margin }
  );
  io.observe(el);
  return () => {
    io.disconnect();
    if (typeof cleanup === "function") cleanup();
  };
}
