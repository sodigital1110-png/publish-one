import React from "react";
import Link from "next/link";
import { HelpCircle } from "lucide-react";
import { FaqList } from "../components/FaqList";
import { homeFaqs } from "../lib/faqs";
import styles from "./faq.module.css";

export const SectionFaq = () => {
  return (
    <section className={styles.faqSection} aria-labelledby="home-faq-title">
      <div className="textbox">
        <div className="subheadline-box">
          <HelpCircle className="subheadline-box-icon" />
          <p className="small-description grey">FAQ</p>
        </div>
        <div className="titlebox">
          <div className="titlebox-gradient" />
          <h2 id="home-faq-title" className="subheadline white">Questions Clients Ask Us</h2>
        </div>
      </div>
      <div className={styles.faqBody}>
        <FaqList faqs={homeFaqs} />
        <p className={styles.more}>
          Looking for something specific? Explore <Link href="/services">all our services</Link> or read{" "}
          <Link href="/blog/seo-geo-aeo-future-of-digital-discovery">our guide to SEO, GEO &amp; AEO</Link>.
        </p>
      </div>
    </section>
  );
};
