import Link from "next/link";
import styles from "./content.module.css";

// Store buttons for an app SO Digital developed (data: the `app` field of a case study in app/lib/caseStudies.js).
// Plain text buttons, not the official store badges, so they stay sharp and load nothing extra.
export function AppStoreLinks({ app }) {
  return (
    <ul className={styles.storeRow}>
      {app.stores.map((s) => (
        <li key={s.href}>
          <a href={s.href} className={styles.storeButton} target="_blank" rel="noopener" aria-label={`${s.label} (${s.platform}, opens in a new tab)`}>
            <span className={styles.storeName}>{s.href.includes("apple.com") ? "App Store" : "Google Play"}</span>
            <span className={styles.storePlatform}>{s.platform}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

// One card per app on a service page: what the app is, the store buttons and a link to the case study.
export function AppShowcase({ items }) {
  return (
    <div className={styles.appGrid}>
      {items.map((cs) => (
        <div key={cs.slug} className={styles.appCard}>
          <span className={styles.cardMeta}>{cs.industry}</span>
          <h3 className={styles.cardTitle}>{cs.app.name}</h3>
          <p className={styles.cardText}>{cs.summary}</p>
          <AppStoreLinks app={cs.app} />
          <Link href={`/works/${cs.slug}`} className={styles.inlineLink}>
            Read the {cs.client} case study
          </Link>
        </div>
      ))}
    </div>
  );
}

// schema.org description of an app we developed, for a case study page.
// Typed as CreativeWork (the parent of SoftwareApplication) with additionalType MobileApplication: Google only
// accepts SoftwareApplication/MobileApplication items that carry a rating or review, which this page can't
// honestly have (ratings aren't shown here, and copying store ratings breaks Google's review guidelines), so the
// old MobileApplication item was reported as invalid. The store links still tie the app to its listings.
export const appSchema = (cs, orgId, url) => ({
  "@type": "CreativeWork",
  additionalType: "https://schema.org/MobileApplication",
  "@id": `${url}#app`,
  name: cs.app.name,
  genre: cs.app.category,
  description: cs.summary,
  sameAs: cs.app.stores.map((s) => s.href),
  creator: { "@id": orgId },
});
