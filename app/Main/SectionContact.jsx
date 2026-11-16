"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { whenNear } from "../lib/whenNear";
import { Mail, ArrowUpRight, Send } from "lucide-react";
import "./contact-form.css";
import { serviceIndex as services } from "../lib/serviceIndex";

gsap.registerPlugin(SplitText, ScrollTrigger);

const serviceOptions = ["Free SEO audit report", ...services.map((s) => s.name), "Full Digital Package", "Other"];

export const SectionContact = ({
  eyebrow = "Get In Touch",
  heading = (<>Let&apos;s Build Something <br /> Extraordinary Together</>),
  intro = "Tell us about your project and we'll get back to you within 24 hours. Every enquiry gets a free SEO audit report of your website.",
  defaultService = "",
  submitLabel = "Send Message",
} = {}) => {

  const subheadlineBoxRef = useRef()
  const titleRef = useRef()
  const formRef = useRef()

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', website: '', service: defaultService, message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const sectionRef = useRef();
  useEffect(() => whenNear(sectionRef.current, () => {
    // built only when the section is about a screen away (see app/lib/whenNear.js)
    const ctx = gsap.context(() => {
    gsap.to(subheadlineBoxRef.current, { opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power1', scrollTrigger: { trigger: subheadlineBoxRef.current, start: "top 95%" } });

    const titleSplit = new SplitText(titleRef.current, { type: "words" });
    gsap.fromTo(titleSplit.words, { 'will-change': 'opacity, transform', filter: 'blur(8px)', opacity: 0, yPercent: 100 }, { opacity: 1, filter: 'blur(0px)', yPercent: 0, stagger: 0.085, duration: 1, ease: "power2", scrollTrigger: { trigger: titleRef.current, start: "top 95%" } });

    gsap.fromTo(formRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2', scrollTrigger: { trigger: formRef.current, start: "top 88%" } });
    });
    return () => ctx.revert();
  }), [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          ...formData,
          access_key: 'e2e8e40e-5dca-466e-8c05-fba136ab63e0'
        })
      });
      if (response.ok) {
        gsap.to(formRef.current, { opacity: 0, y: -20, duration: 0.4, onComplete: () => setSubmitted(true) });
      } else {
        console.error('Form submission failed');
        alert("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      alert("Failed to send message. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact so-contact" ref={sectionRef}>
      <div className="so-contact-content">
        <div className="textbox" style={{ textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
          <div className="subheadline-box opacity-blur" ref={subheadlineBoxRef}>
            <Mail className="subheadline-box-icon" />
            <p className="small-description grey">{eyebrow}</p>
          </div>
          <div className="titlebox" style={{ justifyContent: 'center', textAlign: 'center' }}>
            <div className="titlebox-gradient" style={{ left: '50%', transform: 'translateX(-50%)' }} />
            <h2 className="subheadline white" ref={titleRef}>{heading}</h2>
          </div>
          <p className="description grey" style={{ marginTop: '1rem', maxWidth: '480px', textAlign: 'center' }}>
            {intro}
          </p>
        </div>

        {!submitted ? (
          <form className="so-contact-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="so-form-row">
              <div className="so-form-group">
                <label htmlFor="contact-name" className="so-form-label small-description grey">Your Name</label>
                <input
                  id="contact-name"
                  aria-label="Your name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  className="so-form-input"
                  placeholder="Rahul Sharma"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="so-form-group">
                <label htmlFor="contact-email" className="so-form-label small-description grey">Email Address</label>
                <input
                  id="contact-email"
                  aria-label="Email address"
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="so-form-input"
                  placeholder="hello@yourbrand.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="so-form-row">
              <div className="so-form-group">
                <label htmlFor="contact-phone" className="so-form-label small-description grey">Phone / WhatsApp (optional)</label>
                <input
                  id="contact-phone"
                  aria-label="Phone or WhatsApp (optional)"
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  inputMode="tel"
                  className="so-form-input"
                  placeholder="+91 98XXX XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="so-form-group">
                <label htmlFor="contact-service" className="so-form-label small-description grey">Service Interested In</label>
                <select
                  id="contact-service"
                  aria-label="Service interested in"
                  name="service"
                  className="so-form-input so-form-select"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service...</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="so-form-group">
              <label htmlFor="contact-website" className="so-form-label small-description grey">Your Website (for your free SEO audit report)</label>
              <input
                id="contact-website"
                  aria-label="Your website (optional)"
                type="text"
                name="website"
                autoComplete="url"
                inputMode="url"
                className="so-form-input"
                placeholder="yourbrand.com (optional)"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
            <div className="so-form-group">
              <label htmlFor="contact-message" className="so-form-label small-description grey">Tell Us About Your Project</label>
              <textarea
                id="contact-message"
                  aria-label="Tell us about your project"
                name="message"
                className="so-form-input so-form-textarea"
                placeholder="Describe what you're looking to achieve..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
              />
            </div>
            <button type="submit" className="so-form-submit" disabled={sending} aria-busy={sending}>
              <span className="description white">{sending ? "Sending…" : submitLabel}</span>
              <Send className="so-form-submit-icon" />
            </button>
          </form>
        ) : (
          <div className="so-contact-success">
            <div className="so-contact-success-icon">✓</div>
            <h2 className="small-subheadline white">Message Received!</h2>
            <p className="description grey">We&apos;ll get back to you within 24 hours. If you shared your website, we&apos;ll also send your free SEO audit report.</p>
          </div>
        )}
      </div>
    </section>
  );
};
