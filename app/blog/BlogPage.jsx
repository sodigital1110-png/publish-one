import React from "react";
import styles from "./blog.module.css";
import { BlogHero } from "./BlogHero";
import { BlogGrid } from "./BlogGrid";

export const BlogPage = () => {
  return (
    <main id="main-content" className={styles.container}>
      <BlogHero />
      <div className={styles.divider} />
      <BlogGrid />
    </main>
  );
};
