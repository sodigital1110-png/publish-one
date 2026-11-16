"use client";
import React, { useEffect, useRef } from "react";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";
import { CONTENT_UPDATED, longDate } from "../lib/updated";
import { site } from "../lib/site";
import { serviceIndex as services } from "../lib/serviceIndex";

const companyLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/areas-we-serve", label: "Areas We Serve" },
  { href: "/works", label: "Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/free-seo-audit", label: "Free SEO Audit" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

// Every service page, straight from app/lib/services.js, so new services appear here automatically.
const serviceLinks = services.map((s) => ({ href: `/services/${s.slug}`, label: s.name }));

export const SectionFooter = () => {

  const topRef1 = useRef();
  const topRef2 = useRef();
  const topRef3 = useRef();
  const centerRef1 = useRef();
  const bottomRef1 = useRef();
  const bottomRef2 = useRef();

  // Blur-in reveal as the footer scrolls into view: an IntersectionObserver plus CSS transitions
  // (globals.css, .reveal), so pages that don't otherwise need GSAP never download it.
  useEffect(() => {
    const groups = [
      [topRef1.current, [[topRef1.current, 0], [topRef2.current, 0.2], [topRef3.current, 0.4]]],
      [centerRef1.current, [[centerRef1.current, 0]]],
      [bottomRef1.current, [[bottomRef1.current, 0]]],
      [bottomRef2.current, [[bottomRef2.current, 0.2]]],
    ];
    const reveal = new Map(groups.map(([trigger, els]) => [trigger, els]));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        reveal.get(entry.target).forEach(([el, delay]) => {
          el.style.transitionDelay = `${delay}s`;
          el.classList.add("is-visible");
        });
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -5% 0px" });
    groups.forEach(([trigger]) => observer.observe(trigger));
    return () => observer.disconnect();
  }, [])

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-content-left reveal" ref={topRef1}>
          <Link href="/" className="link-reset" aria-label="SO Digital home">
            <img src="/images/so-logo-sm.webp" className="footer-logo so-footer-logo" alt="SO Digital logo" width={320} height={111} loading="lazy" />
          </Link>
          <p className="subheadline white" style={{ fontWeight: "bold" }}>SO Digital</p>
          <p className="description grey">Strategy · Design · Growth · Success. <br />Your full-service digital partner in {site.address.locality}.</p>
          <address className="description grey" style={{ fontStyle: "normal", lineHeight: 1.6 }}>
            {site.address.locality}, {site.address.region}, {site.address.countryName}
            <br />
            <a href={`tel:${site.phone}`} className="link-reset hover-text-grey">{site.phoneDisplay}</a>
            <br />
            <a href={`mailto:${site.email}`} className="link-reset hover-text-grey">{site.email}</a>
          </address>
        </div>
        <div className="footer-content-right reveal" ref={topRef2}>
          <nav className="footer-content-right-column" aria-label="Company">
            <h2 className="description white">Company</h2>
            <div className="footer-column-contents">
              {companyLinks.map((l) => (
                <div className="footer-column-contents-item" key={l.href}>
                  <Link href={l.href} className="description grey hover-text-grey link-reset">{l.label}</Link>
                </div>
              ))}
            </div>
          </nav>
          <nav className="footer-content-right-column reveal" ref={topRef3} aria-label="Services">
            <h2 className="description white">Services</h2>
            <div className="footer-column-contents">
              {serviceLinks.map((l) => (
                <div className="footer-column-contents-item" key={l.href}>
                  <Link href={l.href} className="description grey hover-text-grey link-reset">{l.label}</Link>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
      <div className="footer-divider reveal" ref={centerRef1} />
      <div className="footer-content-bottom">
        <div className="footer-meta reveal" ref={bottomRef1}>
          <p className="small-description grey">© {new Date().getFullYear()} SO Digital, {site.address.locality}. All Rights Reserved.</p>
          <nav className="footer-policies" aria-label="Policies">
            <Link href="/privacy-policy" className="small-description grey">Privacy Policy</Link>
            <Link href="/terms" className="small-description grey">Terms of Use</Link>
            <Link href="/editorial-policy" className="small-description grey">Editorial Policy</Link>
            <span className="small-description grey">Updated <time dateTime={CONTENT_UPDATED}>{longDate(CONTENT_UPDATED)}</time></span>
          </nav>
        </div>
        <div className="footer-socials reveal" ref={bottomRef2}>
          <a href={site.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="SO Digital on Instagram" style={{ display: 'flex', alignItems: 'center' }}>
            <Instagram strokeWidth={1.25} className="footer-socials-icon" aria-hidden="true" />
          </a>
          <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="SO Digital on LinkedIn" style={{ display: 'flex', alignItems: 'center' }}>
            <Linkedin strokeWidth={1.25} className="footer-socials-icon" aria-hidden="true" />
          </a>
          <a href={site.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="SO Digital on Facebook" style={{ display: 'flex', alignItems: 'center' }}>
            <Facebook strokeWidth={1.25} className="footer-socials-icon" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};