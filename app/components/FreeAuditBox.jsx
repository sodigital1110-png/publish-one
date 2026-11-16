import Link from "next/link";
import styles from "./content.module.css";
import { freeAudit } from "../lib/pricing";

// Shown on every service, industry and pricing page: the free SEO audit offer.
export function FreeAuditBox({ compact = false }) {
  return (
    <aside className={styles.auditBox} aria-labelledby="free-audit-title">
      <p className={styles.auditBadge}>Free</p>
      <div>
        <h2 id="free-audit-title" className={styles.h3}>{freeAudit.title}</h2>
        {!compact && <p className={styles.text}>{freeAudit.text}</p>}
        <p className={styles.text} style={{ marginTop: 10 }}>
          <Link href="/free-seo-audit" className={styles.inlineLink}>Get your free SEO audit report →</Link>
        </p>
      </div>
    </aside>
  );
}
