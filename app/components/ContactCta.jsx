import Link from "next/link";
import styles from "./content.module.css";
import { site } from "../lib/site";
import { freeAudit } from "../lib/pricing";

export function ContactCta({ title = "Ready to grow your brand?", text }) {
  return (
    <section className={styles.ctaBox} aria-labelledby="cta-title">
      <h2 id="cta-title" className={styles.h2}>{title}</h2>
      <p className={styles.text}>
        {text ||
          `Tell us about your project and we'll get back to you within 24 hours. SO Digital is based in ${site.address.locality}, ${site.address.countryName}.`}
      </p>
      <p className={styles.text} style={{ marginTop: 8 }}>
        <strong>{freeAudit.short}:</strong> include your website address and we&apos;ll send a free SEO audit report.
      </p>
      <div className={styles.ctaRow}>
        <Link href="/contact" className={styles.button}>Start a project with SO Digital</Link>
        <a href={`tel:${site.phone}`} className={styles.buttonGhost}>Call {site.phoneDisplay}</a>
      </div>
    </section>
  );
}
