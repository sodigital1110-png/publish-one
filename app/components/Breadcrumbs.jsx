import Link from "next/link";
import styles from "./content.module.css";

// Visible breadcrumb trail; pair with breadcrumbSchema() for the JSON-LD version.
export function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
      <ol>
        {items.map((item, i) =>
          i === items.length - 1 ? (
            <li key={item.path}>
              <span aria-current="page">{item.name}</span>
            </li>
          ) : (
            <li key={item.path}>
              <Link href={item.path}>{item.name}</Link>
            </li>
          )
        )}
      </ol>
    </nav>
  );
}
