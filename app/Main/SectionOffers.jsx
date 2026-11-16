"use client";
import Link from "next/link";
import { BadgeIndianRupee, ArrowUpRight } from "lucide-react";
import { headlinePrices, inr, freeAudit } from "../lib/pricing";

// Homepage: starting prices, the free SEO audit, custom software/website CTA, and links to the
// India-wide pages and popular Kolkata services (all real links, so crawlers find them from the homepage).
const indiaLinks = [
  { href: "/services/website-development-india", label: "Website development across India" },
  { href: "/services/seo-services-india", label: "Affordable SEO in India" },
  { href: "/services/ai-seo-services-india", label: "AI SEO, GEO & AEO in India" },
  { href: "/services/travel-website-design", label: "Travel agency website design" },
  { href: "/services/travel-portal-development", label: "Travel portal development" },
];
const kolkataLinks = [
  { href: "/services/lead-generation", label: "Lead generation" },
  { href: "/services/ecommerce-website-development", label: "E-commerce websites" },
  { href: "/services/custom-software-development", label: "Custom software" },
  { href: "/services/videography-reels-shoots", label: "Corporate video & reels shoots" },
  { href: "/services/google-business-profile", label: "Google My Business" },
];

export const SectionOffers = () => (
  <section className="so-offers" aria-labelledby="so-offers-title">
    <div className="textbox so-offers-textbox">
      <div className="subheadline-box">
        <BadgeIndianRupee className="subheadline-box-icon" aria-hidden="true" />
        <p className="small-description grey">Transparent pricing</p>
      </div>
      <div className="titlebox">
        <div className="titlebox-big-gradient" />
        <h2 id="so-offers-title" className="subheadline white">Premium Work, <br className="hide-on-mobile" /> Honest Starting Prices</h2>
      </div>
      <p className="description grey">No hidden costs. Know where you stand before you call.</p>
    </div>

    <ul className="so-offers-grid">
      {headlinePrices.map((p) => (
        <li key={p.slug}>
          <Link href={`/services/${p.slug}`} className="so-offer-card link-reset">
            <span className="small-description grey">{p.label}</span>
            <span className="so-offer-price white">
              <span className="so-offer-from">Starts at just</span> {inr(p.price)}
            </span>
            <span className="small-description grey">{p.unit}</span>
            <ArrowUpRight className="so-offer-arrow" aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>

    <div className="so-offers-row">
      <Link href="/free-seo-audit" className="so-offer-audit link-reset">
        <span className="so-offer-badge">Free</span>
        <span>
          <h3 className="description white so-offer-audit-title">{freeAudit.title}</h3>
          <span className="small-description grey"> Share your website with any enquiry and get a free SEO and AI-visibility audit report. No obligation.</span>
        </span>
      </Link>

      <div className="so-offer-custom">
        <h3 className="small-subheadline white">Need custom software or a custom website?</h3>
        <p className="description grey">
          CRMs, billing and booking systems, portals, dashboards or a fully custom site: tell us what you need and we&apos;ll
          deliver it at the most affordable price we can for your scope.
        </p>
        <div className="so-offer-custom-ctas">
          <Link href="/contact" className="button button-navigation link-reset so-offer-btn">Contact us for a quote</Link>
          <Link href="/services/custom-software-development" className="description white so-offer-link">Custom software →</Link>
        </div>
      </div>
    </div>

    <div className="so-offers-links">
      <div>
        <p className="small-description grey">Kolkata-based, working with businesses across India</p>
        <ul>
          {indiaLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="small-description white link-reset">{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="small-description grey">Popular with Kolkata businesses</p>
        <ul>
          {kolkataLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="small-description white link-reset">{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);
