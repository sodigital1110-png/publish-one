"use client";
import { ArrowUpRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "./lib/site";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/works", label: "Works" },
    { href: "/pricing", label: "Pricing" },
    { href: "/blog", label: "Blog" },
];

const isCurrent = (pathname, href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

export const Navigation = () => {

    const navigationBar = useRef()
    const navigationBarCenter = useRef()
    const linkRefs = useRef([])
    const [menuOpen, setMenuOpen] = useState(false)
    const pathname = usePathname()

    // Close the mobile menu after navigating, and on Escape.
    useEffect(() => {
        setMenuOpen(false)
    }, [pathname])

    useEffect(() => {
        if (!menuOpen) return;
        const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
        window.addEventListener("keydown", onKey);
        // Lock the page behind the full-screen menu (html.menu-open in globals.css).
        document.documentElement.classList.add("menu-open");
        return () => {
            window.removeEventListener("keydown", onKey);
            document.documentElement.classList.remove("menu-open");
        };
    }, [menuOpen])

  return (
    <>
    <header className="navigation-wrapper">
        <div className="navigation-inside" ref={navigationBar} >
            <Link href="/" className="navigation-inside-left link-reset" aria-label="SO Digital home">
                <img src="/images/so-logo-sm.webp" className="navigation-inside-left-image" alt="SO Digital logo" width={320} height={111} />
            </Link>
            <nav className="navigation-inside-big" ref={navigationBarCenter} aria-label="Main">
                {links.map((l, i) => (
                    <Link
                        key={l.href}
                        href={l.href}
                        className="small-description white hover-text-white link-reset"
                        ref={(el) => (linkRefs.current[i] = el)}
                        aria-current={isCurrent(pathname, l.href) ? "page" : undefined}
                    >
                        {l.label}
                    </Link>
                ))}
            </nav>
            <div className="navigation-inside-right">
                <Link href="/contact" className="button button-navigation button-transparent-border link-reset">
                    <div className="button-content">
                        <span className="small-description">Get In Touch</span>
                        <span className="small-description" aria-hidden="true">Get In Touch</span>
                    </div>
                    <div className="button-circle button-circle-white">
                        <ArrowUpRight className="button-icon" aria-hidden="true" />
                    </div>
                </Link>
            </div>
            <button
                type="button"
                className={`navigation-inside-right-mobile${menuOpen ? " is-open" : ""}`}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={() => setMenuOpen((open) => !open)}
            >
                <span className="navigation-inside-right-mobile-line" />
                <span className="navigation-inside-right-mobile-line" />
                <span className="navigation-inside-right-mobile-line" />
            </button>
        </div>
    </header>
    {/* Outside the header: its perspective would otherwise trap this fixed overlay inside it. */}
    <nav id="mobile-menu" className={`mobile-menu${menuOpen ? " open" : ""}`} aria-label="Mobile" data-lenis-prevent>
        {[...links, { href: "/contact", label: "Contact" }].map((l) => (
            <Link
                key={l.href}
                href={l.href}
                className="mobile-menu-link"
                aria-current={isCurrent(pathname, l.href) ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
            >
                {l.label}
            </Link>
        ))}
        <a href={`tel:${site.phone}`} className="mobile-menu-cta">Call {site.phoneDisplay}</a>
    </nav>
    </>
  );
};
