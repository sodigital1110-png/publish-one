"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ReactLenis } from 'lenis/react'
import "./contact.css";
import { SectionFooter } from "../Main/SectionFooter";
import { usePathname, useRouter } from 'next/navigation';
import { Linkedin, Mail, Phone } from "lucide-react";
import { useIsomorphicLayoutEffect } from "../lib/intro";
import { pageEntrance } from "../lib/entrance";
import { site } from "../lib/site";


export const ContactPageSection = ({ children }) => {
  // ANIMATIONS

  const titleRef = useRef()
  const lineRef = useRef()
  const contactItem1 = useRef()
  const contactItem2 = useRef()
  const contactItem3 = useRef()
  const contactItem4 = useRef()
  const contactItem5 = useRef()
  const contactItem6 = useRef()
  const contactItem7 = useRef()
  const imageRef = useRef()
  const imageWrapperRef = useRef()

  // Top of page: visible on first paint; animated only after client-side navigation.
  useIsomorphicLayoutEffect(() => pageEntrance({
    title: titleRef.current,
    items: [
      { el: contactItem1.current, delay: 0.4 },
      { el: lineRef.current, delay: 0.5 },
      { el: imageWrapperRef.current, delay: 0.5 },
      { el: contactItem2.current, delay: 0.5 },
      { el: contactItem3.current, delay: 0.6 },
      { el: contactItem4.current, delay: 0.7 },
      { el: contactItem5.current, delay: 0.8 },
      { el: contactItem6.current, delay: 0.9 },
      { el: contactItem7.current, delay: 1 },
    ],
  }), [])

  // CARDS MOUSE ANIMATION
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    
    let box1X = 0;
    let box1Y = 0;
    
    const speed = 0.025; // Decrease this value for slower, more noticeable easing
    
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 100 - 50;
      mouseY = (event.clientY / window.innerHeight) * 100 - 50;
    };
    
    const animate = () => {
      // Box 1 movement
      const distX1 = (mouseX * -1) - box1X;
      const distY1 = (mouseY * -1) - box1Y;
      box1X += distX1 * speed;
      box1Y += distY1 * speed;
    
      // Apply the calculated transforms
      if (imageRef.current) {
        imageRef.current.style.transform = `translate(${box1X}px, ${box1Y}px)`;
      }
    
      rafId = requestAnimationFrame(animate); // Continue the animation loop
    };
    
    let rafId;
    if (window.matchMedia('(pointer: fine)').matches) {
      animate();
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // NAVIGATION

  const router = useRouter();
  const pathname = usePathname();

  const handleNavigate = (path) => {
    router.push(path);
  };

  return (
    <ReactLenis root>
      <main id="main-content">
      <section className="contact">
        <div className="contact-content">
          <div className="contact-content-top">
            <div className="titlebox">
              <div className="titlebox-gradient" />
              <h1 className="headline white" ref={titleRef} >Get in Touch</h1>
            </div>
            <div className="contact-divider" ref={lineRef} />
          </div>
          <div className="contact-content-row">
            <div className="contact-content-left">
              <div className="contact-content-column">
                <div className="contact-content-top-item" ref={contactItem1} >
                  <div className="contact-content-top-item-profile">
                    <img src="/images/so-mark.webp" className="contact-content-top-item-image" alt="SO Digital logo" width={600} height={600} />
                  </div>
                  <div className="contact-content-top-item-text">
                    <p className="description white" >Let&apos;s bring your idea to life. Reach the SO Digital team in Kolkata directly by phone, email or LinkedIn. We reply within 24 hours.</p>
                  </div>
                </div>
                <div className="contact-content-column-row">
                  <a href="tel:+917980954724" className="contact-content-small-item" style={{ textDecoration: 'none' }} ref={contactItem2} >
                    <img src="/logos/phone.svg" className="contact-content-small-item-icon" alt="Phone icon" width={24} height={24} />
                    <p className="small-description grey" >Call</p>
                  </a>
                  <a href="mailto:sodigital1110@gmail.com" className="contact-content-small-item" style={{ textDecoration: 'none' }} ref={contactItem3} >
                    <Mail strokeWidth={2.5} className="contact-content-small-item-icon" />
                    <p className="small-description grey" >Email</p>
                  </a>
                  <a href="https://www.linkedin.com/company/so-digitall/" target="_blank" rel="noopener noreferrer" className="contact-content-small-item" style={{ textDecoration: 'none' }} ref={contactItem4} >
                    <img src="/logos/linkedin.svg" className="contact-content-small-item-icon" alt="LinkedIn logo" width={24} height={24} />
                    <p className="small-description grey" >LinkedIn</p>
                  </a>
                </div>
                <a href="tel:+917980954724" className="contact-content-item" style={{ textDecoration: 'none' }} ref={contactItem5} >
                  <p className="small-description grey" >Phone</p>
                  <p className="description white" >+91 79809 54724</p>
                </a>
                <a href="mailto:sodigital1110@gmail.com" className="contact-content-item" style={{ textDecoration: 'none' }} ref={contactItem6} >
                  <p className="small-description grey" >Email</p>
                  <p className="description white" >sodigital1110@gmail.com</p>
                </a>
                <div className="contact-content-item" ref={contactItem7} >
                  <p className="small-description grey" >Address</p>
                  <address style={{ fontStyle: 'normal' }}>
                    {site.address.streetLines.map((line) => (
                      <p className="description white" key={line}>{line}</p>
                    ))}
                    <p className="description white" >{site.address.locality} {site.address.postalCode}, {site.address.region}, {site.address.countryName}</p>
                  </address>
                </div>
              </div>
            </div>
            <div className="contact-content-right" ref={imageWrapperRef} >
              <img src="/images/so-logo.webp" className="contact-content-right-image" width={800} height={278} style={{ objectFit: 'contain', maxWidth: '60%' }} ref={imageRef} alt="SO Digital Logo" />
            </div>
          </div>
        </div>
      </section>
      {children}
      </main>
      <SectionFooter />
    </ReactLenis>
  );
};
