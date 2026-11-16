import React from "react";
import styles from "./blog.module.css";
import { BookOpen } from "lucide-react";

export const BlogHero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.tag}>
        <BookOpen size={16} />
        Insights & Strategy
      </div>
      <h1 className={styles.title}>
        Design, SEO &amp; Growth <br /> Insights
      </h1>
      <p className={styles.description}>
        Actionable insights on UI/UX design, SEO, performance marketing and digital strategy from the SO Digital team in Kolkata. Learn how we help brands scale in a competitive landscape.
      </p>
    </div>
  );
};
