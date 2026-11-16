/* eslint-disable react/jsx-key */
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { whenNear } from "../lib/whenNear";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionFlower = () => {

    // "Pixel Bloom" background loop (made in Remotion: the S logo's flower, its pixels and our services in orbit).
    // Nothing downloads until the section is ~1.5 screens away; it plays only while visible. Phones and portrait
    // tablets get the 9:16 cut (~470 KB), wider screens the 16:9 cut (~690 KB). Reduced motion or Data Saver: a still.
    const videoRef = useRef();
    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;
        const name = window.matchMedia("(max-aspect-ratio: 1/1)").matches ? "bloom-tall" : "bloom-wide";
        const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches || navigator.connection?.saveData;
        let loaded = false;
        let visible = false;
        const load = () => {
            if (loaded) return;
            loaded = true;
            v.poster = `/images/${name}.webp`;
            if (!still) v.src = `/videos/${name}.mp4`;
        };
        const near = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { load(); near.disconnect(); }
        }, { rootMargin: "150% 0px" });
        const seen = new IntersectionObserver(([e]) => {
            visible = e.isIntersecting;
            if (visible) load();
            if (still) return;
            if (visible) v.play().catch(() => {});
            else v.pause();
        }, { threshold: 0.05 });
        near.observe(v);
        seen.observe(v);
        return () => { near.disconnect(); seen.disconnect(); };
    }, [])

    const imageRef1 = useRef();
    const imageRef2 = useRef();

    const textRef1 = useRef();
    const textRef2 = useRef();
    const textRef3 = useRef();
    const textRef4 = useRef();
    const textRef5 = useRef();
    const textRef6 = useRef();
    const textRef7 = useRef();
    const textRef8 = useRef();
  
    const sectionRef = useRef();
    useEffect(() => whenNear(sectionRef.current, () => {
      // built only when the section is about a screen away (see app/lib/whenNear.js)
      const ctx = gsap.context(() => {
  
      // the little phone pictures between the words: 5vw on desktop, wider on phones so they read as phones
      const phoneW = window.innerWidth <= 960 ? "10vw" : "5vw";
      gsap.fromTo(imageRef1.current, { width: 0, opacity: 0 }, { width: phoneW, opacity: 1, duration: 1, scrollTrigger: { trigger: imageRef1.current, start: "top 95%" } })
      gsap.fromTo(imageRef2.current, { width: 0, opacity: 0 }, { width: phoneW, opacity: 1, duration: 1, scrollTrigger: { trigger: imageRef2.current, start: "top 95%" } })

      const textRefSplit1 = new SplitText(textRef1.current, { type: "chars" });
      const textRefSplit2 = new SplitText(textRef2.current, { type: "chars" });
      const textRefSplit3 = new SplitText(textRef3.current, { type: "chars" });
      const textRefSplit4 = new SplitText(textRef4.current, { type: "chars" });
      const textRefSplit5 = new SplitText(textRef5.current, { type: "chars" });
      const textRefSplit6 = new SplitText(textRef6.current, { type: "chars" });
      const textRefSplit7 = new SplitText(textRef7.current, { type: "chars" });
      const textRefSplit8 = new SplitText(textRef8.current, { type: "chars" });

      gsap.fromTo(textRefSplit1.chars, { opacity: 0.25 }, { delay: 0, opacity: 1, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: textRef1.current, start: "top 95%" } })
      gsap.fromTo(textRefSplit2.chars, { opacity: 0.25 }, { delay: 0.25, opacity: 1, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: textRef2.current, start: "top 95%" } })
      gsap.fromTo(textRefSplit3.chars, { opacity: 0.25 }, { delay: 0.5, opacity: 1, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: textRef3.current, start: "top 95%" } })

      gsap.fromTo(textRefSplit4.chars, { opacity: 0.25 }, { delay: 0, opacity: 1, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: textRef4.current, start: "top 95%" } })
      gsap.fromTo(textRefSplit5.chars, { opacity: 0.25 }, { delay: 0.6, opacity: 1, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: textRef5.current, start: "top 95%" } })
      gsap.fromTo(textRefSplit6.chars, { opacity: 0.25 }, { delay: 0.85, opacity: 1, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: textRef6.current, start: "top 95%" } })

      gsap.fromTo(textRefSplit7.chars, { opacity: 0.25 }, { delay: 0, opacity: 1, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: textRef7.current, start: "top 95%" } })
      gsap.fromTo(textRefSplit8.chars, { opacity: 0.25 }, { delay: 0.25, opacity: 1, duration: 0.5, stagger: 0.1, scrollTrigger: { trigger: textRef8.current, start: "top 95%" } })
      });
      return () => ctx.revert();
    }), [])

  return (
    <section className="flower" ref={sectionRef}>
      <div className="flower-content">
        <div className="projects-gradient-top" />
        <div className="projects-gradient-bottom" />
        <div className="flower-content-sequence">
          <video ref={videoRef} className="flower-video" muted loop playsInline preload="none" disablePictureInPicture aria-hidden="true" tabIndex={-1} aria-label="Animation: the SO Digital logo blooming into a flower while SEO, Meta Ads, Google Ads, websites, apps, Reels, branding and social media orbit it" />
        </div>
        <div className="flower-content-textbox">
          <div className="flower-content-textbox-item" >
            <span>
              <div className="subheadline white" style={{ fontWeight: "bold" }} ref={textRef1} >Grow</div>
            </span>
            <span>
              <div className="subheadline white" style={{ fontWeight: "bold" }} ref={textRef2} >Your</div>
            </span>
            <span>
              <div className="subheadline white" style={{ fontWeight: "bold" }} ref={textRef3} >Digital</div>
            </span>
            <span>
              <div className="flower-content-right-content-item" ref={imageRef1} >
                <img src="/images/so-phone.webp" className="flower-content-right-content-item-image" alt="SO Digital website shown on a phone: Where Strategy Meets Stunning Design" width={800} height={600} loading="lazy" decoding="async" />
              </div>
            </span>
          </div>
          <div className="flower-content-textbox-item" >
            <span>
              <div className="subheadline white" style={{ fontWeight: "bold" }} ref={textRef4} >Presence,</div>
            </span>
            <span>
              <div className="subheadline white" style={{ fontWeight: "bold" }} ref={textRef5} >Let</div>
            </span>
            <span>
              <div className="subheadline white" style={{ fontWeight: "bold" }} ref={textRef6} >Your</div>
            </span>
          </div>
          <div className="flower-content-textbox-item" >
            <span>
              <div className="subheadline white" style={{ fontWeight: "bold" }} ref={textRef7} >Vision</div>
            </span>
            <span>
              <div className="flower-content-right-content-item" ref={imageRef2} >
                <img src="/images/so-phone.webp" className="flower-content-right-content-item-image" alt="SO Digital website shown on a phone: Where Strategy Meets Stunning Design" width={800} height={600} loading="lazy" decoding="async" />
              </div>
            </span>
            <span>
              <div className="subheadline white" style={{ fontWeight: "bold" }} ref={textRef8} >Bloom</div>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};