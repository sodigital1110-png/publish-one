import { useEffect, useLayoutEffect } from "react";

// The intro (Loader.jsx) plays once per browser. A tiny inline script in app/layout.jsx adds
// the "so-intro" class to <html> before the first paint when it is going to play.
export const INTRO_CLASS = "so-intro";
export const INTRO_DONE_EVENT = "so-intro-done";

// Runs before paint in the browser, falls back to useEffect on the server (no warning).
export const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * How above-the-fold entrance animations should behave:
 * - "intro": first visit; the loader covers the page, so hide now and reveal when it finishes.
 * - "nav":   client-side navigation; nothing was server-painted, so animate in.
 * - "none":  first load for a returning visitor; content is already painted, keep it still.
 *            Hiding it again would cause a flicker and delay Largest Contentful Paint.
 */
export function entranceMode() {
  if (typeof window === "undefined") return "none";
  if (document.documentElement.classList.contains(INTRO_CLASS)) return "intro";
  return window.__soHydrated ? "nav" : "none";
}

/** Calls `play` now, or when the intro finishes. Returns a cleanup function. */
export function whenIntroDone(play) {
  if (!document.documentElement.classList.contains(INTRO_CLASS)) {
    play();
    return () => {};
  }
  window.addEventListener(INTRO_DONE_EVENT, play, { once: true });
  return () => window.removeEventListener(INTRO_DONE_EVENT, play);
}
