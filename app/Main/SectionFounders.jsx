import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { whenNear } from "../lib/whenNear";
import { Users } from "lucide-react";

export const SectionFounders = () => {

  const subheadlineBoxRef = useRef()
  const titleRef = useRef()
  const card1Ref = useRef()
  const card2Ref = useRef()

  const sectionRef = useRef();
  useEffect(() => whenNear(sectionRef.current, () => {
    gsap.registerPlugin(SplitText, ScrollTrigger);
    // built only when the section is about a screen away (see app/lib/whenNear.js)
    const ctx = gsap.context(() => {
    gsap.to(subheadlineBoxRef.current, { opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power1', scrollTrigger: { trigger: subheadlineBoxRef.current, start: "top 95%" } });

    const titleSplit = new SplitText(titleRef.current, { type: "words" });
    gsap.fromTo(titleSplit.words, { 'will-change': 'opacity, transform', filter: 'blur(8px)', opacity: 0, yPercent: 100 }, { opacity: 1, filter: 'blur(0px)', yPercent: 0, stagger: 0.085, duration: 1, ease: "power2", scrollTrigger: { trigger: titleRef.current, start: "top 95%" } });

    gsap.fromTo(card1Ref.current, { opacity: 0, y: 60, rotationY: 15 }, { opacity: 1, y: 0, rotationY: 0, duration: 0.9, ease: 'power2', scrollTrigger: { trigger: card1Ref.current, start: "top 88%" } });
    gsap.fromTo(card2Ref.current, { opacity: 0, y: 60, rotationY: -15 }, { opacity: 1, delay: 0.15, y: 0, rotationY: 0, duration: 0.9, ease: 'power2', scrollTrigger: { trigger: card2Ref.current, start: "top 88%" } });
    });
    return () => ctx.revert();
  }), [])

  return (
    <section className="so-founders" ref={sectionRef}>
      <div className="so-founders-content">
        <div className="textbox">
          <div className="subheadline-box opacity-blur" ref={subheadlineBoxRef}>
            <Users className="subheadline-box-icon" />
            <p className="small-description grey">The Founders</p>
          </div>
          <div className="titlebox">
            <div className="titlebox-gradient" />
            <h2 className="subheadline white" ref={titleRef}>Built By People Who <br /> Actually Deliver</h2>
          </div>
        </div>

        <div className="so-founders-grid">
          {/* Diganta Das */}
          <div className="so-founder-card" ref={card1Ref}>
            <div className="so-founder-card-inner">
              <div className="so-founder-image-wrapper">
                <img src="/images/ceo-laksh.webp" className="so-founder-image" alt="Diganta Das, Co-Founder & CEO of SO Digital" width={640} height={960} loading="lazy" decoding="async" />
                <div className="so-founder-image-gradient" />
              </div>
              <div className="so-founder-info">
                <div className="so-founder-name-row">
                  <h3 className="small-subheadline white">Diganta Das</h3>
                  <div className="so-founder-badge">Co-Founder & CEO</div>
                </div>
                <p className="description grey">
                  Diganta Das drives everything behind the product — design, development, digital marketing, SEO, video production, branding, and technical execution. Every deliverable shipped by SO Digital is built and crafted by him.
                </p>
                <div className="so-founder-tags">
                  <span className="so-service-tag">Design & Dev</span>
                  <span className="so-service-tag">Marketing</span>
                  <span className="so-service-tag">Strategy</span>
                  <span className="so-service-tag">Execution</span>
                </div>
              </div>
            </div>
            <div className="so-founder-card-glow so-founder-glow-1" />
          </div>

          {/* Swatyik Kundu */}
          <div className="so-founder-card" ref={card2Ref}>
            <div className="so-founder-card-inner">
              <div className="so-founder-image-wrapper">
                <img src="/images/ceo-kush.webp" className="so-founder-image" alt="Swatyik Kundu, Co-Founder & CTO of SO Digital" width={640} height={960} loading="lazy" decoding="async" />
                <div className="so-founder-image-gradient" />
              </div>
              <div className="so-founder-info">
                <div className="so-founder-name-row">
                  <h3 className="small-subheadline white">Swatyik Kundu</h3>
                  <div className="so-founder-badge">Co-Founder & CTO</div>
                </div>
                <p className="description grey">
                  Swatyik Kundu is the face of SO Digital — managing client communication, customer support, sales, and day-to-day coordination. He ensures every client relationship runs smoothly and every project stays on track.
                </p>
                <div className="so-founder-tags">
                  <span className="so-service-tag">Client Relations</span>
                  <span className="so-service-tag">Sales</span>
                  <span className="so-service-tag">Management</span>
                  <span className="so-service-tag">Coordination</span>
                </div>
              </div>
            </div>
            <div className="so-founder-card-glow so-founder-glow-2" />
          </div>
        </div>
      </div>
    </section>
  );
};
