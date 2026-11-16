/* eslint-disable react/jsx-key */
"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { whenNear } from "../lib/whenNear";
import { Star, Hand } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton, usePrevNextButtons } from "./Carousel/EmblaCarouselArrowButtons"
import { DotButton, useDotButton } from './Carousel/EmblaCarouselDotButton'
import Fade from 'embla-carousel-fade'
import Image from "next/image";
import Link from "next/link";

// Featured Work: real SO Digital client work only (designs, ad creatives, reel stills). No stock or AI imagery.
// Desktop slides are 1920x1440; `mobile` slides are 720x864 (built from the same creatives).
export const projects = [
  {
    src: "/images/work/featured/waggish-travels.webp",
    mobile: "/images/work/featured/waggish-travels-mobile.webp",
    alt: "Waggish Travels website designed and built by SO Digital: home hero, hotel and destination pages",
    label: "Waggish Travels",
    desc: "Travel website design & development",
    href: "/works/waggish-travels",
  },
  {
    src: "/images/work/featured/blue-gen.webp",
    mobile: "/images/work/featured/blue-gen-mobile.webp",
    alt: "Ad creatives and a product reel SO Digital made for Blue Gen, an e-commerce butterfly pea tea brand",
    label: "Blue Gen",
    desc: "E-commerce ad creatives & reels",
    href: "/works/blue-gen",
  },
  {
    src: "/images/work/featured/fortune-awl.webp",
    mobile: "/images/work/featured/fortune-awl-mobile.webp",
    alt: "Stills from SO Digital's expo shoots for Fortune (AWL Agri Business) at IndusFood 2026 and BIB Expo",
    label: "Fortune (AWL Agri Business)",
    desc: "Expo shoots & event films",
    href: "/works/fortune-awl",
  },
  {
    src: "/images/work/featured/sc-solar.webp",
    mobile: "/images/work/featured/sc-solar-mobile.webp",
    alt: "SC Solar ad creatives and stills from the factory brand film SO Digital shot and edited",
    label: "SC Solar",
    desc: "Factory film, ad creatives & Meta Ads leads",
    href: "/works/sc-solar",
  },
  {
    src: "/images/work/featured/sougato-edutorial.webp",
    mobile: "/images/work/featured/sougato-edutorial-mobile.webp",
    alt: "Admissions posters and teaching reels SO Digital created for Sougato Edutorial",
    label: "Sougato Edutorial",
    desc: "4.8x ROAS admissions campaigns",
    href: "/works/sougato-edutorial",
  },
  {
    src: "/images/work/featured/carbonex.webp",
    mobile: "/images/work/featured/carbonex-mobile.webp",
    alt: "Founder and explainer reels SO Digital produced for Carbonex, an engine care brand",
    label: "Carbonex",
    desc: "Founder & explainer reels",
    href: "/works/carbonex",
  },
];

export const SectionProjects = () => {

  const subheadlineBoxRef = useRef()
  const titleRef = useRef()
  const descriptionRef = useRef()
  const contentRef = useRef();
  const imageContainerRef = useRef();
  const cursor = useRef()
  const [showCursor, setShowCursor] = useState(false)

  const sectionRef = useRef();
  useEffect(() => whenNear(sectionRef.current, () => {
    gsap.registerPlugin(SplitText, ScrollTrigger);
    // built only when the section is about a screen away (see app/lib/whenNear.js)
    const ctx = gsap.context(() => {
    gsap.to(subheadlineBoxRef.current, { opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power1', scrollTrigger: { trigger: subheadlineBoxRef.current, start: "top 95%" } });

    const titleSplit = new SplitText(titleRef.current, { type: "words" });
    gsap.fromTo(titleSplit.words, { 'will-change': 'opacity, transform', filter: 'blur(8px)', opacity: 0, yPercent: 50 }, { opacity: 1, filter: 'blur(0px)', yPercent: 0, stagger: 0.05, duration: 0.75, ease: "power2", scrollTrigger: { trigger: titleRef.current, start: "top 95%" } });

    const descriptionSplit = new SplitText(descriptionRef.current, { type: "words" });
    gsap.fromTo(descriptionSplit.words, { filter: 'blur(8px)', opacity: 0 }, { opacity: 1, filter: 'blur(0px)', stagger: 0.025, ease: 'sine', scrollTrigger: { trigger: descriptionRef.current, start: "top 95%" } });

    gsap.fromTo(imageContainerRef.current, { yPercent: 7.5 }, { yPercent: -7.5, scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: true } })
    });
    return () => ctx.revert();
  }), [])

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Fade()])
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

  // "View" bubble follows the mouse only while shown; the loop is cancelled on leave (each hover used to start
  // another endless loop).
  const mouse = useRef({ x: 0, y: 0 });
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (e) => { mouse.current.x = e.clientX; mouse.current.y = e.clientY; };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    if (!showCursor) return;
    let x = mouse.current.x, y = mouse.current.y, raf;
    const animate = () => {
      x += (mouse.current.x - x) * 0.05;
      y += (mouse.current.y - y) * 0.05;
      if (cursor.current) { cursor.current.style.left = `${x}px`; cursor.current.style.top = `${y}px`; }
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(raf);
  }, [showCursor]);

  useEffect(() => {
    if (showCursor) {
      gsap.to(cursor.current, { autoAlpha: 1, scale: 1, duration: 0.3, ease: 'power3.out' });
    } else {
      gsap.to(cursor.current, { autoAlpha: 0, scale: 0, duration: 0.3, ease: 'power3.in' });
    }
  }, [showCursor]);

  return (
    <section className="projects projects-desktop" ref={sectionRef}>
      <div className="textbox">
        <div className="subheadline-box opacity-blur" ref={subheadlineBoxRef}>
          <Star className="subheadline-box-icon" />
          <p className="small-description grey">Featured Work</p>
        </div>
        <div className="titlebox">
          <div className="titlebox-big-gradient" />
          <h2 className="subheadline white" ref={titleRef}>Work That <br className="hide-on-mobile" /> Speaks For Itself</h2>
        </div>
        <p className="description grey" ref={descriptionRef}>Helping businesses grow through design, <br className="hide-on-desktop" /> strategy, and digital performance.</p>
      </div>
      <div className="projects-content" ref={contentRef} onMouseEnter={() => setShowCursor(true)} onMouseLeave={() => setShowCursor(false)} onClick={onNextButtonClick}>
        <div className="projects-gradient-top" />
        <div className="projects-gradient-bottom" />
        <div className="project-content-wrapper" ref={imageContainerRef}>
          <div className="projects-carousel" ref={emblaRef}>
            <div className="projects-carousel-row">
              {projects.map((p, i) => (
                <div className="projects-carousel-item" key={i}>
                  <Image src={p.src} width={1920} height={1440} unoptimized className="projects-carousel-item-image" alt={p.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {projects[selectedIndex] && (
          <div className="so-project-label" key={selectedIndex} aria-live="polite">
            <span className="small-description white">{projects[selectedIndex].label}</span>
            <span className="small-description grey">{projects[selectedIndex].desc}</span>
            <Link href={projects[selectedIndex].href} className="small-description white so-project-link" onClick={(e) => e.stopPropagation()}>View case study →</Link>
          </div>
        )}
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              aria-label={`Show slide ${index + 1}`}
              className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')}
            />
          ))}
        </div>
      </div>
      <div className="hover-cursor" ref={cursor}>
        <p className="small-description white">Next</p>
      </div>
    </section>
  );
};