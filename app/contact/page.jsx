import "./contact.css";
import Link from "next/link";
import styles from "../components/content.module.css";
import { ContactPageSection } from "./ContactPageSection";
import { SectionContact } from "../Main/SectionContact";
import { FaqList } from "../components/FaqList";
import { site, absoluteUrl } from "../lib/site";
import { serviceIndex } from "../lib/serviceIndex";
import { contactFaqs, kolkataAreas } from "../lib/faqs";
import { pageMetadata, JsonLd, graph, breadcrumbSchema, faqSchema, ORG_ID } from "../lib/seo";

export const metadata = pageMetadata({
  title: "Contact Our Kolkata Digital Marketing Agency",
  description:
    "Contact SO Digital in Kolkata: call +91 79809 54724 or email sodigital1110@gmail.com about websites, SEO, ads or shoots. Reply in 24 hours.",
  path: "/contact",
});

const steps = [
  { title: "You tell us your goal", text: "Share what you want to achieve, any website or social links, your timeline and a rough budget if you have one." },
  { title: "We reply within 24 hours", text: "A real person from the team reads your message and replies by email or phone with questions or next steps." },
  { title: "A short discovery call", text: "We talk through your business, customers and competitors so we can recommend the right mix of services." },
  { title: "A clear proposal", text: "You get a written scope, timeline and quote. Work starts only when you're happy with it." },
];

const Contact = () => {
  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "ContactPage",
            "@id": `${absoluteUrl("/contact")}#webpage`,
            url: absoluteUrl("/contact"),
            name: "Contact SO Digital",
            about: { "@id": ORG_ID },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          faqSchema(contactFaqs)
        )}
      />
      <ContactPageSection>
        <SectionContact />

        <div className={styles.container} style={{ paddingTop: 80 }}>
          <section className={styles.section} aria-labelledby="next-steps">
            <h2 id="next-steps" className={styles.h2}>What happens after you get in touch</h2>
            <ol className={styles.steps}>
              {steps.map((step) => (
                <li key={step.title}>
                  <h3 className={styles.h3}>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className={styles.section} aria-labelledby="areas">
            <h2 id="areas" className={styles.h2}>Areas we serve in and around Kolkata</h2>
            <p className={styles.text}>
              {site.name} is a {site.address.locality}-based team working with businesses across the city and its suburbs, and
              with clients elsewhere in India online. Meetings happen by video call or, for shoots and workshops, at your location.
            </p>
            <ul className={styles.pills}>
              {kolkataAreas.map((area) => (
                <li key={area}>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.section} aria-labelledby="help">
            <h2 id="help" className={styles.h2}>What we can help with</h2>
            <ul className={styles.pills}>
              {serviceIndex.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`}>{s.name}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.section} aria-labelledby="contact-faq">
            <h2 id="contact-faq" className={styles.h2}>Questions before you contact us</h2>
            <FaqList faqs={contactFaqs} />
          </section>
        </div>
      </ContactPageSection>
    </>
  );
};

export default Contact;
