/* eslint-disable react/jsx-key */
"use client";
import React, { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import dynamic from 'next/dynamic'
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { whenNear } from "../lib/whenNear";
import Marquee from "react-fast-marquee";
import { Hand, Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { PrevButton, NextButton, usePrevNextButtons} from "./Carousel/EmblaCarouselArrowButtons"
import { DotButton, useDotButton } from './Carousel/EmblaCarouselDotButton'
import Fade from 'embla-carousel-fade'
import Image from "next/image";
import Link from "next/link";
import { projects } from "./SectionProjects";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionProjectsMobile = () => {

  const subheadlineBoxRef = useRef()
  const titleRef = useRef()
  const descriptionRef = useRef()
  const contentRef = useRef();
  const imageContainerRef = useRef();

  // GSAP ANIMATIONS

  const sectionRef = useRef();
  useEffect(() => whenNear(sectionRef.current, () => {
    // built only when the section is about a screen away (see app/lib/whenNear.js)
    const ctx = gsap.context(() => {

    // subheadline box animation
    gsap.to(subheadlineBoxRef.current, { opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power1', scrollTrigger: { trigger: subheadlineBoxRef.current, start: "top 95%" }});

    // headline text animation
    const titleSplit = new SplitText(titleRef.current, { type: "words" });
    gsap.fromTo(titleSplit.words, { 'will-change': 'opacity, transform', filter: 'blur(8px)', opacity: 0, yPercent: 50 }, { opacity: 1, filter: 'blur(0px)', yPercent: 0, stagger: 0.05, duration: 0.75, ease: "power2", scrollTrigger: { trigger: titleRef.current, start: "top 95%" } });

    // description text animation
    const descriptionSplit = new SplitText(descriptionRef.current, { type: "words" });
    gsap.fromTo(descriptionSplit.words, { filter: 'blur(8px)', opacity: 0 }, { opacity: 1, filter: 'blur(0px)', stagger: 0.025, ease: 'sine', scrollTrigger: { trigger: descriptionRef.current, start: "top 95%" } });

    // image parallax effect
    gsap.fromTo(imageContainerRef.current, { y: "10vw" }, { y: "-10vw", scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: true} })
    });
    return () => ctx.revert();
  }), [])

  // EMBLA CAROUSEL

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Fade()])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)
  

  return (
    <section className="projects projects-mobile" ref={sectionRef}>
      <div className="textbox">
        <div className="subheadline-box opacity-blur" ref={subheadlineBoxRef} >
          <Star className="subheadline-box-icon" />
          <p className="small-description grey">Featured Works</p>
        </div>
        <div className="titlebox">
          <div className="titlebox-big-gradient" />
          <h2 className="subheadline white" ref={titleRef} >Work That Speaks For Itself</h2>
        </div>
        <p className="description grey" ref={descriptionRef} >Real projects for real brands: <br className="hide-on-desktop" /> websites, ads, shoots and reels.</p>
      </div>
      <div className="projects-content" ref={contentRef} onClick={onNextButtonClick} >
        <div className="projects-gradient-top" />
        <div className="projects-gradient-bottom" />
          <div className="project-content-wrapper" ref={imageContainerRef} >
          <div className="projects-carousel" ref={emblaRef} >
            <div className="projects-carousel-row">
              {/* Real client work only; phone-sized 720x864 slides (see `projects` in SectionProjects.jsx). */}
              {projects.map((p, i) => (
                <div className="projects-carousel-item" key={i}>
                  <Image src={p.mobile} width={720} height={864} unoptimized className="projects-carousel-item-image" alt={p.alt} />
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
                className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
                )}
              />
            ))}
          </div>
        </div>
    </section>
  );
};