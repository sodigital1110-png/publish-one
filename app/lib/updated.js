// When page content last changed. Shown on service pages ("Updated …"), used in the sitemap and schema.
// Bump it whenever you edit page content so search engines know to recrawl.
export const CONTENT_UPDATED = "2026-11-16";

export const longDate = (iso) =>
  new Date(iso + "T00:00:00Z").toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
