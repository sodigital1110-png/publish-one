"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ReactLenis } from 'lenis/react'
import { SectionFooter } from "../Main/SectionFooter";
import Link from "next/link";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "../lib/intro";
import { pageEntrance } from "../lib/entrance";
// import { site } from "../lib/site";

export const AboutPageSection = () => {
    const titleRef = useRef()
    const titleRef2 = useRef()
    const descriptionRef = useRef()
    const lineRef = useRef()
    // const itemRefs = useRef([]);

    // Founders come from app/lib/site.js so names, roles and bios match the schema and the homepage.
    // const teamMembers = site.founders;

    // Top of page: visible on first paint; animated only after client-side navigation.
    useIsomorphicLayoutEffect(() => pageEntrance({
        title: titleRef.current,
        items: [
            { el: lineRef.current, delay: 0.5, duration: 0.5 },
            { el: descriptionRef.current, delay: 0.6 },
            // ...itemRefs.current.map((el, index) => ({ el, delay: 0.8 + index * 0.2, duration: 0.75 })),
        ],
    }), [])

    useEffect(() => {
        gsap.registerPlugin(SplitText, ScrollTrigger);
        const titleSplit2 = new SplitText(titleRef2.current, { type: "words" });
        // word-by-word reveal plays once as the paragraph comes into view, so it's never left half-faded
        gsap.fromTo(titleSplit2.words, { 'will-change': 'opacity', filter: 'blur(8px)', opacity: 0 }, { opacity: 1, filter: 'blur(0px)', stagger: 0.02, duration: 0.5, ease: 'sine', scrollTrigger: { trigger: titleRef2.current, start: "top 90%" } });
    }, [])

    const item1Ref = useRef(null);
    const item2Ref = useRef(null);
    const item3Ref = useRef(null);
    const item4Ref = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(SplitText, ScrollTrigger);
        const refs = [item1Ref, item2Ref, item3Ref, item4Ref];
        refs.forEach((ref, position) => {
            const el = ref.current;
            const isLast = position === refs.length - 1;
            gsap.set(el, { willChange: "transform, filter" });
            const timeline = gsap.timeline({ scrollTrigger: { trigger: el, start: 'center center', end: '350%', scrub: true } });
            timeline
            .to(el, { ease: 'none', startAt: { filter: 'blur(0px)' }, filter: isLast ? 'blur(0px)' : 'blur(3px)',
                scrollTrigger: { trigger: el, start: 'center center', end: '+=100%', scrub: true } }, 0)
            .to(el, { ease: 'none', scale: isLast ? 1 : 0.55, yPercent: isLast ? 0 : -45 }, 0);
        });
    }, []);

  return (
    <ReactLenis root>
      <main id="main-content">
      <section className="about">
        <div className="about-content">
            <div className="about-content-top">
                <div className="about-content-textbox">
                    <div className="titlebox">
                        <div className="titlebox-gradient" />
                        <h1 className="headline white" ref={titleRef}>Built On Strategy. Driven By Results.</h1>
                    </div>
                    <p className="description grey" ref={descriptionRef}>SO Digital is a full-service digital agency{/* founded by two passionate creators — Diganta Das & Swatyik Kundu */}. We blend data, design, and digital strategy to help brands grow powerfully in a competitive world. Based in Kolkata, West Bengal, we work with startups, SMEs and established brands.</p>
                </div>
                <div className="about-divider" ref={lineRef} />
            </div>
            {/* <div className="about-team">
                <div className="about-team-container">
                    {teamMembers.map((member, index) => (
                        <div className="about-team-item" id={member.id} key={member.id} ref={el => itemRefs.current[index] = el} >
                            <div className="about-team-item-row">
                                <h2 className="description white about-team-name">{member.name}</h2>
                                <p className="description white" >{member.role}</p>
                            </div>
                            <p className="description grey about-team-bio">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="about-divider" /> */}
            <div className="about-whyus" >
                <p className="description about-whyus-description grey" >Why SO Digital</p>
                <p className="subheadline about-whyus-subheadline white" ref={titleRef2} >We don&apos;t believe in one-size-fits-all. Every brand we work with gets a custom strategy built from scratch — combining deep market research, sharp creatives, and relentless optimisation to deliver measurable outcomes. From launching startups to scaling established brands, we approach every project with the same obsession: your growth.</p>
            </div>
            <div className="about-divider" />
            <div className="about-sticky-container">
				<div className="about-sticky-item" ref={item1Ref} >
                    <div className="about-sticky-item-left">
                        <div className="about-sticky-item-left-textbox">
                            <h2 className="headline white" >UI/UX Design &amp; <br /> Development</h2>
                            <p className="description about-sticky-item-left-textbox-description grey" >Stunning, conversion-focused interfaces built with the latest frameworks. From Figma wireframes to live Next.js applications — we handle the full stack with precision and craft.</p>
                            <Link href="/services/ui-ux-design" className="description white hover-text-white link-reset">Explore UI/UX design →</Link>
                        </div>
                        <div className="headline white" style={{ fontWeight: "bold" }} aria-hidden="true" >(01)</div>
                    </div>
                    <div className="about-sticky-item-right">
                        <div className="about-sticky-item-right-imagebox">
                            <img src="/images/work/featured/waggish-travels-mobile.webp" className="about-sticky-item-right-image" width={720} height={864} alt="Waggish Travels website SO Digital designed and built: home hero and hotel pages" loading="lazy" decoding="async" />
                        </div>
                    </div>
                </div>
				<div className="about-sticky-item" ref={item2Ref} >
                    <div className="about-sticky-item-left">
                        <div className="about-sticky-item-left-textbox">
                            <h2 className="headline white" >Performance <br /> Digital Marketing</h2>
                            <p className="description about-sticky-item-left-textbox-description grey" >Meta Ads, Google Ads, SEO, GEO, and AEO — we run data-driven campaigns that consistently outperform benchmarks. Every rupee tracked, every conversion optimised.</p>
                            <Link href="/services/meta-ads" className="description white hover-text-white link-reset">Explore Meta Ads →</Link>
                        </div>
                        <div className="headline white" style={{ fontWeight: "bold" }} aria-hidden="true" >(02)</div>
                    </div>
                    <div className="about-sticky-item-right">
                        <div className="about-sticky-item-right-imagebox">
                            <img src="/images/work/featured/sougato-edutorial-mobile.webp" className="about-sticky-item-right-image" width={720} height={864} alt="Admissions ad creative and teaching reel from SO Digital's Meta Ads campaign for Sougato Edutorial (4.8x ROAS)" loading="lazy" decoding="async" />
                        </div>
                    </div>
                </div>
				<div className="about-sticky-item" ref={item3Ref} >
                    <div className="about-sticky-item-left">
                        <div className="about-sticky-item-left-textbox">
                            <h2 className="headline white" >Brand Identity &amp; <br /> Creative Design</h2>
                            <p className="description about-sticky-item-left-textbox-description grey" >Logos, ad creatives, social posts, motion graphics and video edits that make your brand unforgettable, like the full e-commerce creative set we design for Blue Gen tea.</p>
                            <Link href="/services/logo-brand-identity" className="description white hover-text-white link-reset">Explore brand identity →</Link>
                        </div>
                        <div className="headline white" style={{ fontWeight: "bold" }} aria-hidden="true" >(03)</div>
                    </div>
                    <div className="about-sticky-item-right">
                        <div className="about-sticky-item-right-imagebox">
                            <img src="/images/work/featured/blue-gen-mobile.webp" className="about-sticky-item-right-image" width={720} height={864} alt="Blue Gen tea ad creatives designed by SO Digital" loading="lazy" decoding="async" />
                        </div>
                    </div>
                </div>
				<div className="about-sticky-item" ref={item4Ref} >
                    <div className="about-sticky-item-left">
                        <div className="about-sticky-item-left-textbox">
                            <h2 className="headline white" >Videography &amp; <br /> Event Shoots</h2>
                            <p className="description about-sticky-item-left-textbox-description grey" >Factory films, expo coverage, founder interviews and reels, shot and edited in-house. We have filmed at IndusFood 2026 and BIB Expo for Fortune, inside SC Solar&apos;s factory, and teaching reels for Sougato Edutorial.</p>
                            <Link href="/services/videography-reels-shoots" className="description white hover-text-white link-reset">Explore videography &amp; shoots →</Link>
                        </div>
                        <div className="headline white" style={{ fontWeight: "bold" }} aria-hidden="true" >(04)</div>
                    </div>
                    <div className="about-sticky-item-right">
                        <div className="about-sticky-item-right-imagebox">
                            <img src="/images/work/featured/fortune-awl-mobile.webp" className="about-sticky-item-right-image" width={720} height={864} alt="Stills from SO Digital's expo shoots for Fortune (AWL Agri Business) at IndusFood 2026 and BIB Expo" loading="lazy" decoding="async" />
                        </div>
                    </div>
                </div>
			</div>
        </div>
      </section>
      </main>
      <SectionFooter />
    </ReactLenis>
  );
};