"use client";
import Link from "next/link";
import { Play } from "lucide-react";
import { ReelGallery } from "../components/ReelGallery";
import { homepageReels } from "../lib/videos";

// Homepage strip of real client Reels (the `homepageReels` list in app/lib/videos.js).
export const SectionReels = () => (
  <section className="so-reels" aria-labelledby="so-reels-title">
    <div className="textbox">
      <div className="subheadline-box">
        <Play className="subheadline-box-icon" />
        <p className="small-description grey">Reels &amp; Shoots</p>
      </div>
      <div className="titlebox">
        <div className="titlebox-gradient" />
        <h2 id="so-reels-title" className="subheadline white">Content That Stops The Scroll</h2>
      </div>
      <p className="description grey">Reels, event films and on-location shoots we&apos;ve made for Kolkata brands.</p>
      <Link href="/works" className="description grey hover-text-grey link-reset">See all our work</Link>
    </div>
    <div className="so-reels-gallery">
      <ReelGallery videos={homepageReels} columns={6} label="Recent Reels by SO Digital" />
    </div>
  </section>
);
