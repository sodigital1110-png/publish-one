/* eslint-disable react/jsx-key */
import React, { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { whenNear } from "../lib/whenNear";
import { PrevButton, NextButton, usePrevNextButtons} from "./Carousel/EmblaCarouselArrowButtons"
import useEmblaCarousel from "embla-carousel-react"
import { Send } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionTestimonials = () => {

    const subheadlineBoxRef = useRef()
    const titleRef = useRef()
    const emblaWrapperRef = useRef()

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

        // embla wrapper animation
        gsap.to(emblaWrapperRef.current, { opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power1', scrollTrigger: { trigger: emblaWrapperRef.current, start: "top 95%" }});
      });
      return () => ctx.revert();
    }), [])

    // EMBLA CAROUSEL

    const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true})
    const [scrollProgress, setScrollProgress] = useState(0)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const onScroll = useCallback((emblaApi) => {
        const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
        setScrollProgress(progress * 100)
    }, [])

    useEffect(() => {
        if (!emblaApi) return
    
        onScroll(emblaApi)
        emblaApi
          .on("reInit", onScroll)
          .on("scroll", onScroll)
          .on("slideFocus", onScroll)
    }, [emblaApi, onScroll])

  return (
    <section className="testimonials" ref={sectionRef}>
    <div className="testimonials-content">
        <div className="textbox testimonials-content-textbox">
            <div className="subheadline-box opacity-blur" ref={subheadlineBoxRef} >
                <Send className="subheadline-box-icon" />
                <p className="small-description grey">Client Stories</p>
            </div>
            <div className="titlebox">
                <div className="titlebox-big-gradient" />
                <h2 className="subheadline white" ref={titleRef} >Don&apos;t Just Take Our Word For It. <br />Hear It From Our Clients.</h2>
            </div>
        </div>
        <div className="opacity-blur" ref={emblaWrapperRef} >
            <div className="testimonials-carousel" ref={emblaRef} >
                <div className="testimonials-carousel-row">
                    <div className="testimonials-item-padding" />

                    {/* Saugato Pal - 1 */}
                    <div className="testimonials-item" >
                        <div className="testimonials-item-content">
                            <div className="testimonials-item-profile">
                                <img src="/images/avatar-saugato.webp" alt="Sougato Paul" width={256} height={256} loading="lazy" decoding="async" />
                            </div>
                            <div className="testimonials-item-center">
                                <p className="big-description white" >Sougato Paul</p>
                                <p className="description grey" >Teacher & Founder, Sougato Edutorial</p>
                            </div>
                            <p className="description white" >SO Digital completely transformed our online presence. Our Meta Ads now generate a consistent 4.8x ROAS and our student enquiries tripled since they revamped our SEO and social media strategy. Exceptional work.</p>
                        </div>
                        <div className="testimonials-item-grid" />
                    </div>

                    {/* Radhika, Sui Dhaga (from her WhatsApp message, translated from Hinglish) */}
                    <div className="testimonials-item" >
                        <div className="testimonials-item-content">
                            <div className="testimonials-item-profile so-avatar-initial" aria-hidden="true">R</div>
                            <div className="testimonials-item-center">
                                <p className="big-description white" >Radhika</p>
                                <p className="description grey" >Sui Dhaga</p>
                            </div>
                            <p className="description white" >Surprisingly well! Almost 12X growth since May. Honestly, we hadn&apos;t expected this much. You guys earned it. We&apos;ll plan the next campaign together too.</p>
                        </div>
                        <div className="testimonials-item-grid" />
                    </div>

                    {/* Atul - 1 */}
                    <div className="testimonials-item" >
                        <div className="testimonials-item-content">
                            <div className="testimonials-item-profile">
                                <img src="/images/avatar-atul.webp" alt="Atul" width={256} height={256} loading="lazy" decoding="async" />
                            </div>
                            <div className="testimonials-item-center">
                                <p className="big-description white" >Atul</p>
                                <p className="description grey" >Founder, Waggish Travels</p>
                            </div>
                            <p className="description white" >The team at SO Digital designed our entire brand identity and travel website in under 3 weeks. The quality was outstanding and our tour package enquiries jumped by 65% in the very first month.</p>
                        </div>
                        <div className="testimonials-item-grid" />
                    </div>

                    {/* Dhiren Biswas - 1 */}
                    <div className="testimonials-item" >
                        <div className="testimonials-item-content">
                            <div className="testimonials-item-profile">
                                <img src="/images/avatar-dhiren.webp" alt="Dhiren Biswas" width={256} height={256} loading="lazy" decoding="async" />
                            </div>
                            <div className="testimonials-item-center">
                                <p className="big-description white" >Dhiren Biswas</p>
                                <p className="description grey" >Director, Biswas Retail Group</p>
                            </div>
                            <p className="description white" >Their Google Ads management cut our cost-per-lead by 40% while doubling our lead volume. SO Digital&apos;s data-driven approach is exactly what scaling Indian businesses need right now.</p>
                        </div>
                        <div className="testimonials-item-grid" />
                    </div>

                    {/* Kalikima Chandra Ghosh */}
                    <div className="testimonials-item" >
                        <div className="testimonials-item-content">
                            <div className="testimonials-item-profile">
                                <img src="/images/avatar-kalikima.webp" alt="Kalikima Chandra Ghosh" width={256} height={256} loading="lazy" decoding="async" />
                            </div>
                            <div className="testimonials-item-center">
                                <p className="big-description white" >Kalikima Chandra Ghosh</p>
                                <p className="description grey" >Managing Partner, K.C. Ghosh &amp; Associates</p>
                            </div>
                            <p className="description white" >We engaged SO Digital for our consultancy&apos;s digital presence. They handled everything from branding to the website with remarkable professionalism. Our client enquiries have grown significantly.</p>
                        </div>
                        <div className="testimonials-item-grid" />
                    </div>

                    {/* Saugato Pal - 2 */}
                    <div className="testimonials-item" >
                        <div className="testimonials-item-content">
                            <div className="testimonials-item-profile">
                                <img src="/images/avatar-saugato.webp" alt="Sougato Paul" width={256} height={256} loading="lazy" decoding="async" />
                            </div>
                            <div className="testimonials-item-center">
                                <p className="big-description white" >Sougato Paul</p>
                                <p className="description grey" >Teacher & Founder, Sougato Edutorial</p>
                            </div>
                            <p className="description white" >From SEO to video content, SO Digital handled everything end to end. Within 60 days our organic reach grew 3x and we started getting student enquiries we never had before. Highly recommended.</p>
                        </div>
                        <div className="testimonials-item-grid" />
                    </div>

                    {/* Dhiren Biswas - 2 */}
                    <div className="testimonials-item" >
                        <div className="testimonials-item-content">
                            <div className="testimonials-item-profile">
                                <img src="/images/avatar-dhiren.webp" alt="Dhiren Biswas" width={256} height={256} loading="lazy" decoding="async" />
                            </div>
                            <div className="testimonials-item-center">
                                <p className="big-description white" >Dhiren Biswas</p>
                                <p className="description grey" >Director, Biswas Retail Group</p>
                            </div>
                            <p className="description white" >SO Digital&apos;s video production and social media strategy helped us connect with a younger audience we&apos;d never reached before. Our brand feels modern and credible now. Brilliant team.</p>
                        </div>
                        <div className="testimonials-item-grid" />
                    </div>

                    {/* Atul - 2 */}
                    <div className="testimonials-item" >
                        <div className="testimonials-item-content">
                            <div className="testimonials-item-profile">
                                <img src="/images/avatar-atul.webp" alt="Atul" width={256} height={256} loading="lazy" decoding="async" />
                            </div>
                            <div className="testimonials-item-center">
                                <p className="big-description white" >Atul</p>
                                <p className="description grey" >Founder, Waggish Travels</p>
                            </div>
                            <p className="description white" >Working with SO Digital was seamless. They understood our travel brand vision immediately and delivered a premium website that our clients genuinely compliment. The bookings have been very strong.</p>
                        </div>
                        <div className="testimonials-item-grid" />
                    </div>

                    {/* CTA card */}
                    <div className="testimonials-item testimonials-item-last" >
                        <div className="testimonials-item-content testimonials-item-content-last">
                            <div className="testimonials-item-last-top">
                                <p className="description white" >Ready to grow your brand?</p>
                            </div>
                            <p className="small-subheadline white" >Let&apos;s build something great.</p>
                            <div className="contact-button-wrapper">
                                <button className="contact-button-white" >
                                    <span>
                                        <span className="contact-button-container-white">
                                            <span className="contact-button-primary-white"></span>
                                            <span className="contact-button-complimentary-white"></span>
                                        </span>
                                    </span>
                                    <span className="description black" >Book a call</span>
                                </button>
                            </div>
                        </div>
                        <div className="background-gradient-circle-3" />
                        <div className="testimonials-item-grid" />
                    </div>

                    <div className="testimonials-item-padding" />
                </div>
            </div>
        </div>

        <div className="testimonials-content-bottom">
            <div className="testimonials-content-bottom-buttons">
                <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
            </div>
            <div className="embla__progress">
                <div
                    className="embla__progress__bar"
                    style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
                />
            </div>
        </div>
    </div>
</section>
  );
};