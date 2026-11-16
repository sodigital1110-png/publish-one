import styles from "./content.module.css";

// Native <details> accordion: answers stay in the HTML for crawlers and work without JavaScript.
export function FaqList({ faqs, openFirst = true }) {
  return (
    <div className={styles.faq}>
      {faqs.map((f, i) => (
        <details key={f.q} open={openFirst && i === 0}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
