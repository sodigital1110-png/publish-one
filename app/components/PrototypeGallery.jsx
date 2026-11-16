"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./prototypes.module.css";

// Cards for clickable Figma prototypes. The Figma embed (several MB of script) only loads after a visitor
// taps "Try it live", inside a full-screen dialog, so the page itself stays fast.
export function PrototypeGallery({ items, label = "Interactive prototypes" }) {
  const [active, setActive] = useState(null);
  const dialog = useRef(null);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (active && !d.open) d.showModal();
    if (!active && d.open) d.close();
  }, [active]);

  return (
    <>
      <ul className={styles.grid} aria-label={label}>
        {items.map((p) => (
          <li key={p.slug} className={styles.card}>
            <button type="button" className={styles.posterButton} onClick={() => setActive(p)} aria-label={`Try the ${p.title} live`}>
              <img src={p.poster} alt={`Preview of the ${p.title}`} width={960} height={600} loading="lazy" decoding="async" />
              <span className={styles.play}>
                <span aria-hidden="true">▶</span> Try it live
              </span>
            </button>
            <div className={styles.body}>
              <div className={styles.badges}>
                <span className={styles.badge}>{p.kind}</span>
                <span className={`${styles.badge} ${p.label === "Client project" ? styles.badgeClient : ""}`}>{p.label}</span>
              </div>
              <h3 className={styles.title}>{p.title}</h3>
              <p className={styles.text}>{p.description}</p>
              {p.credit && <p className={styles.credit}>{p.credit}</p>}
            </div>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        className={styles.dialog}
        onClose={() => setActive(null)}
        onClick={(e) => e.target === dialog.current && setActive(null)}
        aria-label={active ? active.title : label}
      >
        {active && (
          <div className={styles.viewer}>
            <div className={styles.bar}>
              <span className={styles.barTitle}>{active.title}</span>
              <a href={active.figmaUrl} target="_blank" rel="noopener noreferrer" className={styles.barLink}>
                Open in Figma ↗
              </a>
              <button type="button" className={styles.close} onClick={() => setActive(null)} aria-label="Close prototype">
                ×
              </button>
            </div>
            <div className={`${styles.frame} ${active.kind === "App" ? styles.frameApp : ""}`}>
              <p className={styles.loading}>Loading the interactive prototype…</p>
              <iframe
                src={active.embedUrl}
                title={`${active.title} (interactive Figma prototype)`}
                allowFullScreen
                loading="eager"
              />
            </div>
            <p className={styles.hint}>
              {active.kind === "App" ? "Tap the screens and buttons to move through the app." : "Click and scroll inside the design to explore it."}
            </p>
          </div>
        )}
      </dialog>
    </>
  );
}
