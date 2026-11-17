import { useEffect, useLayoutEffect } from "react";

// There is no intro overlay: the page shows straight away on every visit. (A first-visit loader animation used
// to cover the homepage until the JavaScript had loaded, which looked like a blank, stuck page on phones.)

// Runs before paint in the browser, falls back to useEffect on the server (no warning).
export const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * How above-the-fold entrance animations should behave:
 * - "nav":  client-side navigation; nothing was server-painted, so animate in.
 * - "none": first load; content is already painted, keep it still.
 *           Hiding it again would cause a flicker and delay Largest Contentful Paint.
 * `window.__soHydrated` is set by app/HydrationFlag.jsx once the app has loaded.
 */
export function entranceMode() {
  if (typeof window === "undefined") return "none";
  return window.__soHydrated ? "nav" : "none";
}

/** Runs `play` now. Kept so entrance code reads the same as before. Returns a cleanup function. */
export function whenIntroDone(play) {
  play();
  return () => {};
}
