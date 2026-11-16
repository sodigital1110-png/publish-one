"use client";
/* eslint-disable react/jsx-key */
import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { whenNear } from "../lib/whenNear";
import { ArrowUpRight, Zap } from "lucide-react";
import { useRouter } from 'next/navigation';
import Link from "next/link";

// Homepage cards (12, so the 3-column grid stays even). Every service
// is listed on /services and in the footer.
const services = [
  {
    id: "dev", slug: "web-development",
    title: "Web Development",
    description: "Fast, SEO-ready websites and web apps built with modern frameworks, designed to turn visitors into enquiries.",
    tags: ["Next.js", "React", "E-commerce", "Hosting"],
    color: "#3b82f6",
  },
  {
    id: "app", slug: "app-development",
    title: "App Development",
    description: "Android and iOS apps that feel fast and simple, from first prototype to Play Store and App Store launch.",
    tags: ["Android", "iOS", "Cross-platform", "App UI/UX"],
    color: "#06b6d4",
  },
  {
    id: "seo", slug: "seo-geo-aeo",
    title: "SEO · GEO · AEO",
    description: "Rank on Google, get cited by ChatGPT, Perplexity and AI Overviews, and win the answers customers see first.",
    tags: ["Technical SEO", "Local SEO", "AI Search", "Content"],
    color: "#14b8a6",
  },
  {
    id: "social", slug: "social-media-marketing",
    title: "Social Media Marketing",
    description: "Content calendars, Reels and community management that grow an engaged audience on Instagram, Facebook and LinkedIn.",
    tags: ["Instagram", "Facebook", "LinkedIn", "Reels"],
    color: "#ec4899",
  },
  {
    id: "meta", slug: "meta-ads",
    title: "Meta Ads",
    description: "Data-driven Facebook & Instagram campaigns that target the right audience and maximise every rupee spent.",
    tags: ["Facebook Ads", "Instagram Ads", "Retargeting", "Creative Testing"],
    color: "#d946ef",
  },
  {
    id: "google", slug: "google-ads",
    title: "Google Ads",
    description: "High-intent Google Search, Display, and YouTube campaigns engineered for leads, sales, and ROAS growth.",
    tags: ["Search Ads", "Display", "YouTube Ads", "Shopping Campaigns"],
    color: "#f59e0b",
  },
  {
    id: "gbp", slug: "google-business-profile",
    title: "Google Business Profile",
    description: "Show up on Google Maps and the local 3-pack: GMB setup, optimisation, posts and a steady review strategy.",
    tags: ["Google Maps", "GMB", "Reviews", "Local Pack"],
    color: "#22c55e",
  },
  {
    id: "video", slug: "video-editing",
    title: "Video Editing",
    description: "Cinematic brand videos, reels, ads, and explainers that stop the scroll and tell your story.",
    tags: ["Brand Films", "Reels", "Ad Creatives", "Motion Graphics"],
    color: "#7c3aed",
  },
  {
    id: "shoots", slug: "videography-reels-shoots",
    title: "Video & Photo Shoots",
    description: "Corporate videos, Reels, wedding and pre-wedding films and drone shoots in Kolkata, planned, shot and edited by one team.",
    tags: ["Reels Shoots", "Brand Films", "Wedding Films", "Drone Shoots"],
    color: "#e11d48",
  },
  {
    id: "uiux", slug: "ui-ux-design",
    title: "UI/UX Design",
    description: "Intuitive, stunning interfaces that delight users and drive conversions. From wireframes to pixel-perfect final designs.",
    tags: ["Figma", "Prototyping", "User Research", "Design Systems"],
    color: "#8b5cf6",
  },
  {
    id: "logo", slug: "logo-brand-identity",
    title: "Logo & Brand Identity",
    description: "Timeless logos and complete brand identity systems that make you instantly recognizable.",
    tags: ["Logo Design", "Brand Guides", "Stationery", "Mockups"],
    color: "#6366f1",
  },
  {
    id: "graphic", slug: "graphic-design",
    title: "Graphic Design",
    description: "Social media graphics, banners, posters, and print materials that make your brand unforgettable.",
    tags: ["Social Media", "Print", "Banners", "Presentations"],
    color: "#a855f7",
  },
];

export const SectionServices = () => {

  const subheadlineBoxRef = useRef()
  const titleRef = useRef()
  const descriptionRef = useRef()
  const [activeService, setActiveService] = useState(null)
  const router = useRouter();

  const sectionRef = useRef();
  useEffect(() => whenNear(sectionRef.current, () => {
    gsap.registerPlugin(SplitText, ScrollTrigger, CustomEase);
    // built only when the section is about a screen away (see app/lib/whenNear.js)
    const ctx = gsap.context(() => {
    gsap.to(subheadlineBoxRef.current, { opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power1', scrollTrigger: { trigger: subheadlineBoxRef.current, start: "top 95%" } });

    const titleSplit = new SplitText(titleRef.current, { type: "words" });
    gsap.fromTo(titleSplit.words, { 'will-change': 'opacity, transform', filter: 'blur(8px)', opacity: 0, yPercent: 100 }, { opacity: 1, filter: 'blur(0px)', yPercent: 0, stagger: 0.085, duration: 1, ease: "power2", scrollTrigger: { trigger: titleRef.current, start: "top 95%" } });

    const descriptionSplit = new SplitText(descriptionRef.current, { type: "words" });
    gsap.fromTo(descriptionSplit.words, { filter: 'blur(8px)', opacity: 0 }, { opacity: 1, filter: 'blur(0px)', stagger: 0.025, ease: 'sine', scrollTrigger: { trigger: descriptionRef.current, start: "top 95%" } });

    // Animate cards in
    gsap.fromTo('.so-service-card', { opacity: 0, y: 40 }, { opacity: 1, y: 0, stagger: 0.08, duration: 0.6, ease: 'power2', scrollTrigger: { trigger: '.so-services-grid', start: 'top 85%' } });
    });
    return () => ctx.revert();
  }), [])

  const scrollToContact = () => {
    router.push('/contact');
  };

  return (
    <section className="services" ref={sectionRef}>
      <div className="services-content">
        <div className="textbox">
          <div className="subheadline-box opacity-blur" ref={subheadlineBoxRef}>
            <Zap className="subheadline-box-icon" />
            <p className="small-description grey">Our Services</p>
          </div>
          <div className="titlebox">
            <div className="titlebox-gradient" />
            <h2 className="subheadline white" ref={titleRef}>Your Complete Digital Powerhouse</h2>
          </div>
          <p className="description grey" ref={descriptionRef}>One team. Every solution. From jaw-dropping visuals to campaigns that <br /> actually convert — we cover it all.</p>
          <div className="contact-button-wrapper" onClick={scrollToContact}>
            <button className="contact-button-white">
              <span>
                <span className="contact-button-container-white">
                  <span className="contact-button-primary-white"></span>
                  <span className="contact-button-complimentary-white"></span>
                </span>
              </span>
              <span className="description black">Start a Project</span>
            </button>
          </div>
          <Link href="/services" className="description grey hover-text-grey link-reset">View all services</Link>
        </div>

        {/* Services Grid */}
        <div className="so-services-grid">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className={`so-service-card link-reset ${activeService === service.id ? 'so-service-card--active' : ''}`}
              onMouseEnter={() => setActiveService(service.id)}
              onMouseLeave={() => setActiveService(null)}
              style={{ cursor: 'pointer', '--service-color': service.color, '--service-color-glow': `${service.color}33`, '--service-color-bg': `${service.color}0D` }}
            >
              <div className="so-service-card-inner">
                <div className="so-service-card-center">
                  <h3 className="so-service-card-title">{service.title}</h3>
                  <div className="so-service-card-line" />
                  <p className="so-service-card-desc">{service.description}</p>
                </div>
                <div className="so-service-card-tags">
                  {service.tags.map((tag) => (
                    <span key={tag} className="so-service-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};