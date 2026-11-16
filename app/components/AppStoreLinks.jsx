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

// schema.org SoftwareApplication for an app we developed (no ratings: they aren't shown on our pages).
export const appSchema = (cs, orgId, url) => ({
  "@type": "MobileApplication",
  "@id": `${url}#app`,
  name: cs.app.name,
  operatingSystem: cs.app.operatingSystem,
  applicationCategory: "LifestyleApplication",
  applicationSubCategory: cs.app.category,
  description: cs.summary,
  installUrl: cs.app.stores.map((s) => s.href),
  sameAs: cs.app.stores.map((s) => s.href),
  offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
  creator: { "@id": orgId },
});
