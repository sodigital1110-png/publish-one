import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import { entranceMode, whenIntroDone } from "./intro";

const HIDDEN = { opacity: 0, filter: "blur(8px)" };
const SHOWN = { opacity: 1, filter: "blur(0px)" };

/**
 * Top-of-page entrance shared by the About, Works and Contact pages: the title's letters rise in,
 * then each item fades in from a blur. Content is server-rendered visible, so on a returning
 * visitor's first load nothing is hidden (fast LCP, no flicker). Call from a layout effect.
 * @param {{ title?: HTMLElement, items?: { el: HTMLElement, delay?: number, duration?: number }[] }} opts
 * @returns {() => void} cleanup
 */
export function pageEntrance({ title, items = [] }) {
  gsap.registerPlugin(SplitText);
  if (entranceMode() === "none") return () => {};

  const split = title ? new SplitText(title, { type: "words,chars" }) : null;
  if (split) gsap.set(split.chars, { ...HIDDEN, yPercent: 50 });
  items.forEach(({ el }) => el && gsap.set(el, HIDDEN));

  // Kept short (everything settles within ~1s) so visitors are never left reading faded text.
  return whenIntroDone(() => {
    if (split) gsap.to(split.chars, { ...SHOWN, yPercent: 0, delay: 0.1, stagger: 0.015, duration: 0.6, ease: "power1" });
    items.forEach(({ el, delay = 0.5, duration = 1 }) =>
      el && gsap.to(el, { ...SHOWN, delay: delay * 0.5, duration: Math.min(duration, 0.6), ease: "power1" }));
  });
}
