"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./reels.module.css";

// Vertical reels gallery. Each video downloads only when it scrolls into view, plays muted while
// visible and pauses when it leaves, like an Instagram grid. Visitors who prefer reduced motion or
// use Data Saver get the poster with a play button instead of autoplay.
function Reel({ video }) {
  const ref = useRef(null);
  const [muted, setMuted] = useState(true);
  const [manual, setManual] = useState(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches || navigator.connection?.saveData;
    if (reduce) {
      setManual(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!el.src) el.src = el.dataset.src;
          el.play().then(() => setPlaying(true)).catch(() => setManual(true));
        } else {
          el.pause();
          setPlaying(false);
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const start = () => {
    const el = ref.current;
    if (!el.src) el.src = el.dataset.src;
    el.muted = false;
    setMuted(false);
    el.play().then(() => setPlaying(true)).catch(() => {});
  };

  const toggleSound = () => {
    const el = ref.current;
    el.muted = !el.muted;
    setMuted(el.muted);
    if (el.paused) el.play().then(() => setPlaying(true)).catch(() => {});
  };

  return (
    <figure className={styles.reel}>
      <div className={styles.frame}>
        <video
          ref={ref}
          className={styles.video}
          data-src={video.src}
          width={video.width}
          height={video.height}
          muted
          loop
          playsInline
          preload="none"
          aria-label={`${video.client}: ${video.title}`}
        />
        {/* Thumbnail as a lazy <img> instead of the video's poster attribute: posters always download with
            the page, while this waits until the reel is near the screen, and its alt text is indexable. */}
        <img
          src={video.poster}
          alt={`${video.client}: ${video.title} (video thumbnail)`}
          width={video.width}
          height={video.height}
          loading="lazy"
          decoding="async"
          className={`${styles.poster}${playing ? ` ${styles.posterHidden}` : ""}`}
        />
        {manual && !playing ? (
          <button type="button" className={styles.play} onClick={start} aria-label={`Play ${video.title}`}>
            <span aria-hidden="true">▶</span>
          </button>
        ) : (
          <button
            type="button"
            className={styles.sound}
            onClick={toggleSound}
            aria-pressed={!muted}
            aria-label={muted ? `Turn sound on for ${video.title}` : `Mute ${video.title}`}
          >
            <span aria-hidden="true">{muted ? "🔇" : "🔊"}</span>
          </button>
        )}
        <span className={styles.badge}>{video.type}</span>
      </div>
      <figcaption className={styles.caption}>
        {video.caseStudy ? (
          <Link href={`/works/${video.caseStudy}`} className={styles.client}>{video.client}</Link>
        ) : (
          <span className={styles.client}>{video.client}</span>
        )}
        <span className={styles.title}>{video.title}</span>
      </figcaption>
    </figure>
  );
}

function List({ videos, label, wide, spaced }) {
  return (
    <div
      className={[styles.gallery, wide && styles.wide, spaced && styles.spaced].filter(Boolean).join(" ")}
      role="list"
      aria-label={label}
    >
      {videos.map((v) => (
        <div role="listitem" key={v.slug} className={styles.item}>
          <Reel video={v} />
        </div>
      ))}
    </div>
  );
}

// Vertical reels go in the reels grid; landscape films (wider than tall, like wedding films) get their own
// 16:9 grid underneath, so neither is cropped.
export function ReelGallery({ videos, label = "Video work" }) {
  const tall = videos.filter((v) => !(v.width > v.height));
  const landscape = videos.filter((v) => v.width > v.height);
  return (
    <>
      {tall.length > 0 && <List videos={tall} label={label} />}
      {landscape.length > 0 && (
        <List videos={landscape} label={tall.length ? `${label}: landscape films` : label} wide spaced={tall.length > 0} />
      )}
    </>
  );
}
