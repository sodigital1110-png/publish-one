import Link from "next/link";
import styles from "./components/content.module.css";
import { SectionFooter } from "./Main/SectionFooter";

export const metadata = {
  title: "Page not found",
  description: "The page you were looking for doesn't exist. Explore SO Digital's services, client work and blog instead.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <main id="main-content" className={styles.page}>
        <div className={`${styles.container} ${styles.narrow}`}>
          <p className={styles.eyebrow}>Error 404</p>
          <h1 className={styles.title}>This page could not be found</h1>
          <p className={styles.lead}>The link may be broken or the page may have moved. Here are some good places to start:</p>
          <ul className={styles.pills}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Our services</Link></li>
            <li><Link href="/works">Client work</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/contact">Contact us</Link></li>
          </ul>
        </div>
      </main>
      <SectionFooter />
    </>
  );
}
