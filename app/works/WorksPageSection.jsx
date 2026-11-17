"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ReactLenis } from 'lenis/react'
import "./works.css";
import { PrevButton, NextButton, usePrevNextButtons} from "../Main/Carousel/EmblaCarouselArrowButtons"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowUpRight, Zap } from "lucide-react";
import { SectionFooter } from "../Main/SectionFooter";
import { usePathname, useRouter } from 'next/navigation';
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import { useIsomorphicLayoutEffect, entranceMode, whenIntroDone } from "../lib/intro";
import { pageEntrance } from "../lib/entrance";
import { whenNear } from "../lib/whenNear";
import { responsiveImage, imageSize } from "../lib/images";

// "Collection of Our Works" carousel at the top of the page, mixed across sectors. Each links to its case study.
const featuredWorks = [
  {
    slug: "waggish-travels",
    client: "Waggish Travels",
    tags: ["Travel Portal Development", "Full-Stack Web"],
    // Hand-sized variants (800px card, 640px phones) kept from the original card.
    imgProps: {
      src: "/images/waggish-travel-800.webp",
      srcSet: "/images/waggish-travel-640.webp 640w, /images/waggish-travel-800.webp 800w",
      sizes: "(max-width: 960px) 80vw, 40vw",
      width: 800,
      height: 533,
    },
    alt: "Waggish Travels travel portal homepage designed by SO Digital",
  },
  {
    slug: "tumyto",
    client: "Tumyto",
    tags: ["Food Delivery App", "Android & iOS"],
    image: "/images/work/tumyto-hero.webp",
    alt: "Tumyto logo: the tiffin service and food delivery app developed by SO Digital",
  },
  {
    slug: "sougato-edutorial",
    client: "Sougato Edutorial",
    tags: ["Graphic Design", "Video Editing", "Meta & Google Ads"],
    image: "/images/sougata-testimonial.webp",
    alt: "Sougato Edutorial social media profile managed by SO Digital",
  },
  {
    slug: "kashmiri-assamese-jewellery",
    client: "Kashmiri Assamese Jewellery",
    tags: ["Jewellery Photoshoots", "Model Shoots"],
    image: "/images/work/kashmiri-assamese-jewellery-hero.webp",
    alt: "Jewellery photoshoots by SO Digital for Kashmiri Assamese Jewellery: bangles in hand, a model in an Assamese jewellery set and a lotus pendant",
  },
  {
    slug: "sc-solar",
    client: "SC Solar",
    tags: ["Factory Shoot", "Meta Ads Leads"],
    image: "/images/work/sc-solar-hero.webp",
    alt: "Frames from SO Digital's factory shoot, brand film and product reel for SC Solar",
  },
  {
    slug: "carbonex",
    client: "Carbonex",
    tags: ["Google Business Profile", "Reels"],
    image: "/images/work/carbonex-hero.webp",
    alt: "Frames from SO Digital's founder and explainer Reels for Carbonex, an engine care brand",
  },
  {
    slug: "blue-gen",
    client: "Blue Gen",
    tags: ["Ad Creatives", "E-commerce"],
    image: "/images/work/blue-gen-hero.webp",
    alt: "Ad creatives SO Digital designed for Blue Gen",
  },
];

// "Industries we serve" rows. Each links to its industry page.
const industryRows = [
  { name: "Travel & Tourism", href: "/industries/travel-agencies", image: "/images/waggish-travel.webp", alt: "Travel website designed by SO Digital for Waggish Travels" },
  { name: "Education & EdTech", href: "/industries/coaching-institutes", image: "/images/sougata-testimonial.webp", alt: "Education brand social profile managed by SO Digital" },
  { name: "Food & FMCG", href: "/industries/fmcg-food-brands", image: "/images/work/tumyto-hero.webp", alt: "Tumyto, a tiffin service and food delivery app developed by SO Digital" },
  { name: "Jewellery & Retail", href: "/industries/retail-stores", image: "/images/work/kashmiri-assamese-jewellery-hero.webp", alt: "Jewellery photoshoots SO Digital did for Kashmiri Assamese Jewellery" },
  { name: "Automobile & Car Care", href: "/industries/automobile", image: "/images/work/carbonex-hero.webp", alt: "Reels SO Digital edited for Carbonex, an engine care brand in Kolkata" },
  { name: "E-commerce", href: "/industries/ecommerce-brands", image: "/images/work/blue-gen-hero.webp", alt: "Ad creatives SO Digital designed for Blue Gen, an e-commerce tea brand" },
  { name: "Solar & Manufacturing", href: "/industries/solar-renewable-energy", image: "/images/work/sc-solar-hero.webp", alt: "SO Digital's factory shoot and brand film for SC Solar, a solar equipment manufacturer" },
];

export const WorksPageSection = ({ caseStudies = [], children }) => {
  const router = useRouter();

  // ANIMATIONS
  const titleRef = useRef()
  const subtitleRef1 = useRef()
  const subtitleRef2 = useRef()
  const descriptionRef = useRef()
  const subdescriptionRef1 = useRef()
  const subdescriptionRef2 = useRef()
  const lineRef = useRef()
  const carouselWrapperRef = useRef()
  const worksItemRef1 = useRef()
  const industryImageRefs = useRef([])
  const subheadlineBoxRef1 = useRef()
  const subheadlineBoxRef2 = useRef()
  const cursor = useRef()
  const industriesRef = useRef()
  const caseStudiesRef = useRef()
  const [showCursor, setShowCursor] = useState(false)

  // Top of page: visible on first paint; animated only behind the intro or after client-side navigation.
  useIsomorphicLayoutEffect(() => {
    const cancelEntrance = pageEntrance({
      title: titleRef.current,
      items: [
        { el: lineRef.current, delay: 0.5, duration: 0.5 },
        { el: descriptionRef.current, delay: 0.6 },
      ],
    });
    // The black overlay that reveals the carousel is hidden by default (works.css) and only used for the entrance.
    if (entranceMode() === "none") return cancelEntrance;
    gsap.set(worksItemRef1.current, { opacity: 1 });
    const cancelOverlay = whenIntroDone(() => gsap.to(worksItemRef1.current, { delay: 0.4, opacity: 0, duration: 1, ease: 'power1' }));
    return () => { cancelEntrance(); cancelOverlay(); };
  }, [])

  // Scroll animations, built only when each block is about a screen away (see app/lib/whenNear.js):
  // setting them all up at load (text splits + 11 scroll triggers) was the page's main start-up cost on phones.
  useEffect(() => whenNear(industriesRef.current, () => {
    gsap.registerPlugin(SplitText, ScrollTrigger);
    const ctx = gsap.context(() => {
      // industry images
      industryImageRefs.current.filter(Boolean).forEach((el) =>
        gsap.fromTo(el, { width: 0 }, { width: "100%", scrollTrigger: { trigger: el, start: "top bottom", end: "center center", scrub: true } })
      );
      gsap.to(subheadlineBoxRef1.current, { opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power1', scrollTrigger: { trigger: subheadlineBoxRef1.current, start: "top 95%" }});
      const subtitleSplit1 = new SplitText(subtitleRef1.current, { type: "words" });
      gsap.fromTo(subtitleSplit1.words, { 'will-change': 'opacity, transform', filter: 'blur(8px)', opacity: 0, yPercent: 50 }, { opacity: 1, filter: 'blur(0px)', yPercent: 0, stagger: 0.05, duration: 0.75, ease: "power2", scrollTrigger: { trigger: subtitleRef1.current, start: "top 95%" } });
      const subdescriptionSplit1 = new SplitText(subdescriptionRef1.current, { type: "words" });
      gsap.fromTo(subdescriptionSplit1.words, { filter: 'blur(8px)', opacity: 0 }, { opacity: 1, filter: 'blur(0px)', stagger: 0.025, ease: 'sine', scrollTrigger: { trigger: subdescriptionRef1.current, start: "top 95%" } });
    });
    return () => ctx.revert();
  }), [])

  useEffect(() => whenNear(caseStudiesRef.current, () => {
    gsap.registerPlugin(SplitText, ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.to(carouselWrapperRef.current, { opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power1', scrollTrigger: { trigger: carouselWrapperRef.current, start: "top 95%" } });
      gsap.to(subheadlineBoxRef2.current, { opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power1', scrollTrigger: { trigger: subheadlineBoxRef2.current, start: "top 95%" }});
      const subtitleSplit2 = new SplitText(subtitleRef2.current, { type: "words" });
      gsap.fromTo(subtitleSplit2.words, { 'will-change': 'opacity, transform', filter: 'blur(8px)', opacity: 0, yPercent: 50 }, { opacity: 1, filter: 'blur(0px)', yPercent: 0, stagger: 0.05, duration: 0.75, ease: "power2", scrollTrigger: { trigger: subtitleRef2.current, start: "top 95%" } });
      const subdescriptionSplit2 = new SplitText(subdescriptionRef2.current, { type: "words" });
      gsap.fromTo(subdescriptionSplit2.words, { filter: 'blur(8px)', opacity: 0 }, { opacity: 1, filter: 'blur(0px)', stagger: 0.025, ease: 'sine', scrollTrigger: { trigger: subdescriptionRef2.current, start: "top 95%" } });
    });
    return () => ctx.revert();
  }), [])

  // FOLLOWING CURSOR: the "View" bubble eases after the mouse. The loop runs only while the bubble is shown
  // (mouse over a carousel); it used to run every frame from page load, on phones too, and never stopped.
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
      gsap.to(cursor.current, {
        autoAlpha: 1,
        scale: 1,
        duration: 0.3,
        ease: 'power3.out',
      });
    } else {
      gsap.to(cursor.current, {
        autoAlpha: 0,
        scale: 0,
        duration: 0.3,
        ease: 'power3.in',
      });
    }
  }, [showCursor]);

  const handleMouseEnter = () => {
    setShowCursor(true);
  };

  const handleMouseLeave = () => {
    setShowCursor(false);
  };

  // EMBLA CAROUSEL
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });
  const [emblaRef2, emblaApi2] = useEmblaCarousel({ dragFree: true });
  
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollProgress2, setScrollProgress2] = useState(0);
  
  const {
    prevBtnDisabled: prevBtnDisabled1,
    nextBtnDisabled: nextBtnDisabled1,
    onPrevButtonClick: onPrevButtonClick1,
    onNextButtonClick: onNextButtonClick1,
  } = usePrevNextButtons(emblaApi);
  
  const {
    prevBtnDisabled: prevBtnDisabled2,
    nextBtnDisabled: nextBtnDisabled2,
    onPrevButtonClick: onPrevButtonClick2,
    onNextButtonClick: onNextButtonClick2,
  } = usePrevNextButtons(emblaApi2);
  
  const onScroll = useCallback((emblaApi, setProgress) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setProgress(progress * 100);
  }, []);
  
  useEffect(() => {
    if (!emblaApi) return;
  
    const handleScroll = () => onScroll(emblaApi, setScrollProgress);
    handleScroll();
    emblaApi.on("reInit", handleScroll).on("scroll", handleScroll).on("slideFocus", handleScroll);
  
    return () => emblaApi.off("reInit", handleScroll).off("scroll", handleScroll).off("slideFocus", handleScroll);
  }, [emblaApi, onScroll]);
  
  useEffect(() => {
    if (!emblaApi2) return;
  
    const handleScroll = () => onScroll(emblaApi2, setScrollProgress2);
    handleScroll();
    emblaApi2.on("reInit", handleScroll).on("scroll", handleScroll).on("slideFocus", handleScroll);
  
    return () => emblaApi2.off("reInit", handleScroll).off("scroll", handleScroll).off("slideFocus", handleScroll);
  }, [emblaApi2, onScroll]);

  return (
    <ReactLenis root>
      <main id="main-content">
      <section className="works" >
        <div className="works-content" >
          <div className="works-content-top">
            <div className="works-content-top-text">
              <div className="works-content-textbox">
                <div className="titlebox">
                  <div className="subpage-titlebox-gradient" />
                  <h1 className="headline white" ref={titleRef} >Collection of Our Works</h1>
                </div>
                <p className="description grey" ref={descriptionRef} >Selected client work from SO Digital, a digital agency in Kolkata: websites, brand identities, SEO and ad campaigns that delivered measurable results.</p>
              </div>
              <div className="works-content-top-divider" ref={lineRef} />
            </div>
            <div className="works-carousel-wrapper" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
              <div className="works-carousel-wrapper-overlay" ref={worksItemRef1} ></div>
              <div className="works-carousel" ref={emblaRef2} >
                <div className="works-carousel-row">
                  <div className="works-item-padding" />
                  {featuredWorks.map((w, i) => (
                  <div className="works-item" key={w.slug}>
                    <div className="works-item-content" >
                      <div className="works-item-content-textbox">
                        <h2 className="subheadline white" ><Link href={`/works/${w.slug}`} className="link-reset">{w.client}</Link></h2>
                        <div className="works-item-content-textbox-row">
                          {w.tags.map((t) => (
                          <div className="works-item-content-textbox-button" key={t}>
                            <p className="small-description white" >{t}</p>
                          </div>
                          ))}
                        </div>
                      </div>
                      <img {...(w.imgProps ?? { ...responsiveImage(w.image, "(max-width: 960px) 90vw, 40vw"), ...imageSize(w.image) })} className="works-item-content-image" {...(i === 0 ? { fetchPriority: "high" } : { loading: "lazy" })} decoding="async" alt={w.alt} />
                      <div className="works-item-gradient-overlay" />
                    </div>
                    <div className="works-item-border" />
                  </div>
                  ))}
                  <div className="works-item" >
                    <div className="works-item-last-content" >
                      <p className="description white" >Ready to be our next success story?</p>
                      <h2 className="subheadline white" >Let&apos;s build something extraordinary.</h2>
                      <div className="contact-button-wrapper">
                        <button className="contact-button-white" onClick={() => router.push('/contact')}>
                          <span>
                            <span className="contact-button-container-white">
                              <span className="contact-button-primary-white"></span>
                              <span className="contact-button-complimentary-white"></span>
                            </span>
                          </span>
                          <span className="description black" >Get In Touch</span>
                        </button>
                      </div>
                    </div>
                    <div className="works-item-border" />
                  </div>
                  <div className="works-item-padding" />

                </div>
              </div>
              <div className="casestudies-carousel-bottom">
                <div className="casestudies-carousel-bottom-buttons">
                  <PrevButton onClick={onPrevButtonClick2} disabled={prevBtnDisabled2} />
                  <NextButton onClick={onNextButtonClick2} disabled={nextBtnDisabled2} />
                </div>
                <div className="embla__progress">
                  <div className="embla__progress__bar" style={{ transform: `translate3d(${scrollProgress2}%,0px,0px)` }} />
                </div>
              </div>
            </div>
          </div>
          <div className="works-industries" ref={industriesRef}>
            <div className="works-subtextbox">
              <div className="subheadline-box opacity-blur" ref={subheadlineBoxRef1} >
                <Zap className="subheadline-box-icon" />
                <p className="small-description grey">Industries we serve</p>
              </div>
              <div className="titlebox">
                <div className="titlebox-medium-gradient" />
                <h2 className="subheadline white" ref={subtitleRef1} >We have extensive experience <br /> across multiple industries</h2>
              </div>
              <p className="description grey" ref={subdescriptionRef1} >We have delivered projects for travel, education, food, FMCG, jewellery, retail, automobile, e-commerce and solar brands, and we know how to add real business value in each niche.</p>
            </div>
            <div className="works-industries-container">
              <div className="works-industries-divider" />
              {industryRows.map((row, i) => (
              <React.Fragment key={row.href}>
              <div className="works-industries-item" >
                <div className="works-industries-item-left">
                  <h3 className="small-subheadline white" ><Link href={row.href} className="link-reset">{row.name}</Link></h3>
                </div>
                <div className="works-industries-item-right">
                  <div className="works-industries-item-right-imagebox" ref={(el) => { industryImageRefs.current[i] = el; }} >
                    <img {...responsiveImage(row.image, "40vw")} {...imageSize(row.image)} className="works-industries-item-right-image" alt={row.alt} loading="lazy" decoding="async" />
                  </div>
                </div>
              </div>
              <div className="works-industries-divider" />
              </React.Fragment>
              ))}
            </div>
          </div>
          <div className="works-casestudies" ref={caseStudiesRef}>
            <div className="works-subtextbox">
              <div className="subheadline-box opacity-blur" ref={subheadlineBoxRef2} >
                <Zap className="subheadline-box-icon" />
                <p className="small-description grey">Case Studies</p>
              </div>
              <div className="titlebox">
                <div className="titlebox-medium-gradient" />
                <h2 className="subheadline white" ref={subtitleRef2} >We have a diverse portfolio of <br /> successful case studies</h2>
              </div>
              <p className="description grey" ref={subdescriptionRef2} >Real results for real clients: read how each project was scoped, delivered and measured.</p>
            </div>
            <div className="casestudies-carousel-wrapper opacity-blur" ref={carouselWrapperRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
              <div className="casestudies-carousel" ref={emblaRef} >
                <div className="casestudies-carousel-row">
                  <div className="casestudies-item-padding" />
                  {caseStudies.map((cs) => (
                    <Link key={cs.slug} href={`/works/${cs.slug}`} className="casestudies-item link-reset" >
                      <div className="casestudies-item-content">
                        <div className="casestudies-item-content-textbox">
                          <div className="subheadline-box" >
                            <Zap className="subheadline-box-icon" />
                            <p className="small-description grey">{cs.industry}</p>
                          </div>
                          <h3 className="small-subheadline white" >{cs.client}</h3>
                          <p className="description grey" >{cs.cardTitle}</p>
                        </div>
                        <div className="casestudies-item-content-imagebox" >
                          <div className="button casestudies-item-content-imagebox-button" >
                            <div className="button-content">
                              <span className="small-description white">Read Case Study</span>
                              <span className="small-description white" aria-hidden="true">Read Case Study</span>
                            </div>
                            <ArrowUpRight className="casestudies-item-content-imagebox-button-icon" aria-hidden="true" />
                          </div>
                          {cs.image ? (
                            <img {...responsiveImage(cs.image, "(max-width: 640px) 82vw, (max-width: 1100px) 44vw, 40vw")} {...imageSize(cs.image)} className="casestudies-item-content-image" alt={cs.imageAlt} loading="lazy" decoding="async" />
                          ) : (
                            <div className="casestudies-item-content-image so-cs-textcard" aria-hidden="true">
                              <span className="so-cs-textcard-value">{cs.results?.[0]?.value}</span>
                              <span className="so-cs-textcard-label">{cs.results?.[0]?.label}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                  <div className="casestudies-item-padding" />
                </div>
              </div>
              <div className="casestudies-carousel-bottom">
                <div className="casestudies-carousel-bottom-buttons">
                  <PrevButton onClick={onPrevButtonClick1} disabled={prevBtnDisabled1} />
                  <NextButton onClick={onNextButtonClick1} disabled={nextBtnDisabled1} />
                </div>
                <div className="embla__progress">
                  <div className="embla__progress__bar" style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hover-cursor" ref={cursor}>
          <p className="small-description white" >Drag</p>
        </div>

      </section>
      {children}
      </main>
      <SectionFooter />
    </ReactLenis>
  );
};