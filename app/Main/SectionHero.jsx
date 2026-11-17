/* eslint-disable react/jsx-key */
"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import Marquee from "react-fast-marquee";
import { ArrowUpRight } from "lucide-react";
import { HeroVisualization } from "./HeroVisualization";
import { HeroRotator } from "./HeroRotator";
import { useIsomorphicLayoutEffect, entranceMode, whenIntroDone } from "../lib/intro";

export const SectionHero = () => {

  const titleRef        = useRef();
  const descriptionRef  = useRef();
  const buttonRef1      = useRef();
  const buttonCircleRef1 = useRef();
  const buttonRef2      = useRef();
  const logosWrapperRef = useRef();

  // Above-the-fold content is server-rendered visible so it paints immediately (fast LCP).
  // The entrance animation only runs after client-side navigation (e.g. clicking Home from another page).
  useIsomorphicLayoutEffect(() => {
    if (entranceMode() === "none") return;

    const others = [descriptionRef.current, buttonRef1.current, buttonRef2.current, logosWrapperRef.current];
    // Whole-headline entrance (the rotating words are React-managed, so no per-character splitting here)
    gsap.set(titleRef.current, { filter: "blur(8px)", opacity: 0, yPercent: 12 });
    gsap.set(others, { opacity: 0, filter: "blur(8px)" });

    const cancel = whenIntroDone(() => {
      gsap.to(titleRef.current, { delay: 0.1, opacity: 1, filter: "blur(0px)", yPercent: 0, duration: 0.8, ease: "power2.out" });
      gsap.to(descriptionRef.current,  { opacity: 1, filter: "blur(0px)", duration: 0.7, delay: 0.3  });
      gsap.to(buttonRef1.current,      { delay: 0.45, opacity: 1, filter: "blur(0px)", duration: 0.5, ease: "power1" });
      gsap.to(buttonRef2.current,      { delay: 0.55, opacity: 1, filter: "blur(0px)", duration: 0.5, ease: "power1" });
      gsap.to(logosWrapperRef.current, { opacity: 1, filter: "blur(0px)", duration: 0.7, delay: 0.3  });
    });
    return cancel;
  }, []);

  const services = [
    "Website Development", "App Development", "SEO", "GEO", "AEO",
    "Social Media Marketing", "Meta Ads", "Google Ads", "Google Business Profile",
    "Video Editing", "Videography", "Product Shoots", "UI/UX Design",
    "Logo Design", "Graphic Design", "Custom Software", "Wedding Films", "Drone Shoots", "Website Hosting",
  ];

  return (
    <section className="hero">
      <div className="hero-background-element-small" />
      <div className="hero-background-element-grid-small" />
      <div className="so-hero-orb so-hero-orb-1" />
      <div className="so-hero-orb so-hero-orb-2" />

      <div className="hero-content">
        <div className="hero-content-row">

          {/* LEFT — copy */}
          <div className="hero-content-left">
            <div className="hero-textbox">
              {/* One H1 carrying the main search phrase (badge) plus the brand headline. */}
              <h1 className="hero-h1">
                <span className="subheadline-box hero-kicker">
                  <span className="small-description grey">Digital Marketing Agency in Kolkata</span>
                </span>
                <span className="hero-titlebox">
                  <span className="hero-titlebox-gradient" />
                  <span className="headline hero-headline white" ref={titleRef}>
                    <HeroRotator />
                  </span>
                </span>
              </h1>
              <p className="big-description grey" ref={descriptionRef}>
                SO Digital is a full-service digital marketing agency in Kolkata. Websites, apps, SEO, Meta &amp; Google Ads,
                Google Business Profile, social media, video editing and brand shoots, all from one team.
              </p>
            </div>

<div className="hero-buttons-row">
              <button
                className="button button-transparent-border"
                ref={buttonRef1}
                onClick={() => document.querySelector('.so-services-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              >
                <div className="button-content">
                  <span className="small-description">Our Services</span>
                  <span className="small-description" aria-hidden="true">Our Services</span>
                </div>
                <div className="button-circle" ref={buttonCircleRef1}>
                  <ArrowUpRight className="button-icon button-icon-180" />
                </div>
              </button>

              <button
                className="button button-transparent-border"
                ref={buttonRef2}
                onClick={() => document.querySelector('.so-contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              >
                <div className="button-content">
                  <span className="small-description">Get In Touch</span>
                  <span className="small-description" aria-hidden="true">Get In Touch</span>
                </div>
                <div className="button-circle">
                  <ArrowUpRight className="button-icon" />
                </div>
              </button>
            </div>
          </div>

          {/* RIGHT — premium orbital visualization */}
          <div className="hero-content-right so-hero-right">
            <HeroVisualization />
          </div>

        </div>

        {/* Bottom marquee */}
        <div className="hero-content-bottom" ref={logosWrapperRef}>
          {/* Edges fade with a CSS mask (main.css), which blends into any background at any screen width */}
          <Marquee className="hero-content-bottom-row" gradient={false}>
            {services.map((s, i) => (
              <div className="hero-content-bottom-item so-service-chip" key={i}>
                <span className="small-description white">{s}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};