"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./creatives.module.css";

// Grid of creatives (banners, posters, ad creatives, website shots). Tapping one opens it full-size in a
// lightbox (native <dialog>: Esc closes it, focus is trapped, the page behind can't scroll).
// variant="proof": wide screenshots (e.g. Ads Manager tables) shown uncropped, 2 per row (1 on phones and tablets),
// with an "Open full size" link in the lightbox so phone users can pinch-zoom the original.
export function CreativeGallery({ items, label = "Creative work", variant }) {
  const proof = variant === "proof";
  const [open, setOpen] = useState(-1);
  const dialog = useRef(null);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open >= 0 && !d.open) d.showModal();
    if (open < 0 && d.open) d.close();
  }, [open]);

  const step = useCallback((dir) => setOpen((i) => (i + dir + items.length) % items.length), [items.length]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  };

  const current = open >= 0 ? items[open] : null;

  return (
    <>
      <ul className={`${styles.grid}${proof ? ` ${styles.proofGrid}` : ""}`} aria-label={label}>
        {items.map((item, i) => (
          <li key={item.src} className={`${styles.item}${!proof && item.width > item.height ? ` ${styles.wide}` : ""}`}>
            <button
              type="button"
              className={`${styles.thumb}${proof ? ` ${styles.natural}` : item.width > item.height ? ` ${styles.landscape}` : ""}`}
              onClick={() => setOpen(i)}
              aria-label={`View larger: ${item.alt}`}
            >
              <img src={item.thumb || item.src} alt={item.alt} width={item.width} height={item.height} loading="lazy" decoding="async" />
            </button>
            <span className={styles.meta}>
              <strong>{item.client}</strong> · {item.kind}
            </span>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        className={styles.dialog}
        onClose={() => setOpen(-1)}
        onKeyDown={onKeyDown}
        onClick={(e) => e.target === dialog.current && setOpen(-1)}
        aria-label={current ? `${current.client}: ${current.kind}` : label}
      >
        {current && (
          <figure className={`${styles.figure}${proof ? ` ${styles.figureWide}` : ""}`}>
            <img src={current.src} alt={current.alt} width={current.width} height={current.height} />
            <figcaption>
              <strong>{current.client}</strong> · {current.kind} · {open + 1} / {items.length}
              {proof && (
                <>
                  {" "}
                  <a href={current.src} target="_blank" rel="noopener" className={styles.fullSize}>
                    Open full size
                  </a>
                </>
              )}
            </figcaption>
          </figure>
        )}
        <button type="button" className={`${styles.nav} ${styles.prev}`} onClick={() => step(-1)} aria-label="Previous">
          ‹
        </button>
        <button type="button" className={`${styles.nav} ${styles.next}`} onClick={() => step(1)} aria-label="Next">
          ›
        </button>
        <button type="button" className={styles.close} onClick={() => setOpen(-1)} aria-label="Close">
          ×
        </button>
      </dialog>
    </>
  );
}
