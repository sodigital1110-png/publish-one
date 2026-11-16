"use client";
import { ReactLenis, useLenis } from 'lenis/react'
import { SectionHero } from "./SectionHero";
import { SectionFooter } from "./SectionFooter";
import { SectionShowreel } from "./SectionShowreel";
import { SectionAbout } from "./SectionAbout";
import { SectionReels } from "./SectionReels";
import { SectionTestimonials } from "./SectionTestimonials";
// import { SectionFounders } from "./SectionFounders";
import { SectionFlower } from "./SectionFlower";
import { SectionServices } from "./SectionServices";
import { SectionOffers } from "./SectionOffers";
import { SectionProjects } from "./SectionProjects";
import { SectionProjectsMobile } from "./SectionProjectsMobile";
import { SectionContact } from "./SectionContact";
import { SectionFaq } from "./SectionFaq";
import "./main.css";
import { useLayoutEffect, useState } from 'react';

const Main = () => {

  const [fadeOut, setFadeOut] = useState(false);
  const lenis = useLenis();

  useLayoutEffect(() => {
    // Start immediately — no 3D model progress to wait for
    setFadeOut(true);
    lenis?.start();
  }, [lenis]);

  return (
    <ReactLenis root>
      <main id="main-content">
      <SectionHero />
      <div className="normal-padding" />
      <SectionShowreel />
      <div className="normal-padding" />
      <SectionAbout />
      <div className="border-padding">
        <div className="section-border"></div>
      </div>
      <SectionServices />
      <div className="normal-padding" />
      <SectionOffers />
      <div className="normal-padding" />
      <SectionProjects />
      <SectionProjectsMobile />
      <div className="normal-padding" />
      <SectionReels />
      <div className="normal-padding" />
      {/* <SectionFounders />
      <div className="normal-padding" /> */}
      <SectionTestimonials />
      <div className="normal-padding" />
      <SectionFlower />
      <div className="normal-padding" />
      <SectionFaq />
      <div className="normal-padding" />
      <SectionContact />
      </main>
      <div className="border-padding">
        <div className="section-border"></div>
      </div>
      <SectionFooter />
    </ReactLenis>
  );
};

export default Main;
