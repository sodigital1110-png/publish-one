"use client";
import { useEffect } from "react";

// Marks that the app has hydrated, so page components can tell a first load (content already painted:
// keep it still) from a client-side navigation (nothing painted yet: animate in). See app/lib/intro.js.
export const HydrationFlag = () => {
  useEffect(() => {
    window.__soHydrated = true;
  }, []);
  return null;
};
