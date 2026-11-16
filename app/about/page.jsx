import "./about.css";
import { AboutPageSection } from "./AboutPageSection";
import { absoluteUrl } from "../lib/site";
import { pageMetadata, JsonLd, graph, breadcrumbSchema, ORG_ID, personId } from "../lib/seo";
import { site } from "../lib/site";

export const metadata = pageMetadata({
  title: "About Us: Digital Agency in Kolkata",
  description:
    "Meet SO Digital, the Kolkata digital agency founded by Diganta Das and Swatyik Kundu: data, design and strategy that grow brands online.",
  path: "/about",
});

const About = () => {

  return (
    <>
      <JsonLd
        data={graph(
          {
            "@type": "AboutPage",
            "@id": `${absoluteUrl("/about")}#webpage`,
            url: absoluteUrl("/about"),
            name: "About SO Digital",
            about: { "@id": ORG_ID },
            mentions: site.founders.map((f) => ({ "@id": personId(f.id) })),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ])
        )}
      />
      <AboutPageSection />
    </>
  );
};

export default About;
