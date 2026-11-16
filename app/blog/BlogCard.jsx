import React from "react";
import Link from "next/link";
import styles from "./blog.module.css";
import { ArrowUpRight } from "lucide-react";
import { shortDate } from "../lib/posts";
import { responsiveImage } from "../lib/images";

export const BlogCard = ({ post, priority = false }) => {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <span className={styles.category}>{post.category}</span>
        <img
          {...responsiveImage(post.image, "(max-width: 960px) 100vw, 440px")}
          alt={post.imageAlt || post.title}
          className={styles.image}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          width={1024}
          height={640}
        />
      </div>
      <div className={styles.content}>
        <time className={styles.date} dateTime={post.datePublished}>{shortDate(post.datePublished)}</time>
        <h2 className={styles.cardTitle}>{post.title}</h2>
        <p className={styles.cardDescription}>{post.description}</p>
        <div className={styles.cta}>
          Read Article
          <ArrowUpRight size={16} className={styles.ctaIcon} />
        </div>
      </div>
    </Link>
  );
};
