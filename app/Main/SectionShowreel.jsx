/* eslint-disable react/jsx-key */
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { whenNear } from "../lib/whenNear";

export const SectionShowreel = () => {

  const sectionRef = useRef();
  const videoRef = useRef();
  const videoElRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(SplitText, ScrollTrigger);
    // the scrubbed tilt is built only when the section is about a screen away (see app/lib/whenNear.js)
    const stopTilt = whenNear(sectionRef.current, () => {
      const tilt = gsap.to(videoRef.current, { rotateY: "0deg", scale: "1", rotateX: "0deg", translateY: "0vh", scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "top top", scrub: true } });
      return () => { tilt.scrollTrigger?.kill(); tilt.kill(); };
    });

    // Load the showreel (a Remotion motion graphic of real client work and results) only when it is
    // about to scroll into view: phones get the 2:3 cut (1.4 MB), larger screens the 16:9 cut (1.8 MB).
    // Data Saver users just see the poster.
    const video = videoElRef.current;
    const saveData = navigator.connection?.saveData;
    // Poster first, well before the section is on screen
    const near = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      video?.classList.add("is-near");
      near.disconnect();
    }, { rootMargin: "1200px 0px" });
    if (video) near.observe(video);
    let observer;
    if (video && !saveData) {
      observer = new IntersectionObserver(([entry]) => {
        if (!entry.isIntersecting) return;
        const phone = window.matchMedia("(max-width: 960px)").matches;
        video.src = phone ? video.dataset.srcMobile : video.dataset.src;
        video.play().catch(() => {});
        observer.disconnect();
      }, { rootMargin: "100px 0px" });
      observer.observe(video);
    }

    return () => {
      stopTilt();
      near.disconnect();
      observer?.disconnect();
    };
  }, []);

  return (
    <section className="showreel" ref={sectionRef}>
      <div className="showreel-content">
        <div className="showreel-content-container">
          <div ref={videoRef} className="showreel-content-videobox">
            <div className="background">
              <div className="trail"></div>
            </div>
            <video ref={videoElRef} data-src="/videos/showreel-wide.mp4" data-src-mobile="/videos/showreel-mobile.mp4" width={1280} height={720} className="showreel-content-video so-showreel-video" muted playsInline={true} preload="none" loop aria-label="SO Digital showreel: real client work and results, including 4.8x return on ad spend for Sougato Edutorial and 40% lower cost per lead for Biswas Retail Group" />
          </div>
        </div>
        {/* Removed awards row — replaced with a clean brand statement */}
        <div className="so-showreel-tagline">
          <div className="so-showreel-tagline-dot" />
          <p className="description grey">Strategy</p>
          <div className="so-showreel-tagline-dot so-dot-orange" />
          <p className="description grey">Design</p>
          <div className="so-showreel-tagline-dot so-dot-pink" />
          <p className="description grey">Growth</p>
          <div className="so-showreel-tagline-dot so-dot-purple" />
          <p className="description grey">Success</p>
        </div>
      </div>
    </section>
  );
};