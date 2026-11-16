import { Zap } from "lucide-react";
import Link from "next/link";
import { site } from "../lib/site";

// A self-contained answer to "who is SO Digital?": the passage search engines and AI assistants quote.
// Facts only (founders, area, services, client results), kept in sync with app/lib/site.js and the case studies.
export const SectionAbout = () => (
  <section className="so-about-block" aria-labelledby="about-so-digital">
    <div className="so-about-block-inner">
      <div className="subheadline-box">
        <Zap className="subheadline-box-icon" />
        <p className="small-description grey">About SO Digital</p>
      </div>
      <h2 id="about-so-digital" className="subheadline white so-about-block-title">
        A digital marketing agency in Kolkata that builds, ranks and grows brands
      </h2>
      <p className="big-description grey so-about-block-text">
        SO Digital is a digital marketing agency in {site.address.locality}, {site.address.region}{/* , founded by Diganta Das
        and Swatyik Kundu */}. We work with businesses across Kolkata, from Salt Lake, Sector V and New Town to Park Street,
        Ballygunge and Howrah. We also work with brands across India online. One team builds your website and apps, runs
        your SEO, GEO and AEO, Meta Ads, Google Ads and Google Business Profile, and handles social media, video editing,
        shoots, UI/UX, branding and graphic design. Our clients include e-commerce, education, solar, automobile, FMCG,
        fashion, travel and professional-services brands, such as Fortune (AWL Agri Business), SC Solar, Carbonex and Blue
        Gen. Recent results: a consistent 4.8x return on Meta Ads spend for{" "}
        <Link href="/works/sougato-edutorial" className="so-about-block-link">Sougato Edutorial</Link>, a 40% lower cost per
        lead for <Link href="/works/biswas-retail-group" className="so-about-block-link">Biswas Retail Group</Link>, and a
        full brand identity and travel website for{" "}
        <Link href="/works/waggish-travels" className="so-about-block-link">Waggish Travels</Link> in under three weeks. We
        reply to every enquiry within 24 hours. Call{" "}
        <a href={`tel:${site.phone}`} className="so-about-block-link">{site.phoneDisplay}</a>.
      </p>
      <p className="big-description grey so-about-block-text">
        Looking for an advertising agency, a creative agency, a branding agency or a performance marketing agency in Kolkata?
        It&apos;s the same team. We plan the campaign, make the creatives and videos, run the ads and report on leads and
        sales. Small businesses can start small: banner designs from ₹199, Reels editing from ₹299, SEO from ₹1,999 a month
        and websites from ₹4,999. Every enquiry gets a free SEO audit report. See the{" "}
        <Link href="/areas-we-serve" className="so-about-block-link">areas we serve</Link>.
      </p>
    </div>
  </section>
);
