import React from "react";
import styles from "./blog.module.css";
import { BlogCard } from "./BlogCard";
import { posts } from "../lib/posts";

export const BlogGrid = () => {
  return (
    <div className={styles.grid}>
      {posts.map((post, i) => (
        // the first card's image is on screen at load on phones, so fetch it right away
        <BlogCard key={post.slug} post={post} priority={i === 0} />
      ))}
    </div>
  );
};
