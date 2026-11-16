import { SimplePage } from "../components/SimplePage";
import { pageMetadata } from "../lib/seo";
import { site } from "../lib/site";

const DESCRIPTION =
  "How SO Digital handles your information: what the enquiry form collects, how we use it, who helps run the site, and how to ask us to delete it.";

export const metadata = pageMetadata({ title: "Privacy Policy", description: DESCRIPTION, path: "/privacy-policy" });

export default function PrivacyPolicyPage() {
  return (
    <SimplePage
      path="/privacy-policy"
      eyebrow="Privacy"
      title="Privacy Policy"
      intro={`SO Digital is a digital marketing agency in ${site.address.locality}, ${site.address.region}, India. This page explains, in plain words, what information this website collects and what we do with it. Questions? Email ${site.email} or call ${site.phoneDisplay}.`}
      sections={[
        {
          id: "collect",
          h2: "What we collect",
          list: [
            "When you send an enquiry through our contact form: your name, email address, phone or WhatsApp number (optional), the service you're interested in, your website address (optional) and your message.",
            "When you email, call or WhatsApp us: whatever you choose to share in that conversation.",
            "When you visit the site: our hosting provider, Netlify, processes standard technical information such as your IP address, browser type and the pages requested, so the site can be delivered and protected from abuse.",
          ],
        },
        {
          id: "dont",
          h2: "What we don't do",
          list: [
            "We don't use analytics, advertising or tracking cookies on this website.",
            "We don't sell or rent your information to anyone.",
            "We don't add you to a mailing list just because you contacted us.",
          ],
        },
        {
          id: "use",
          h2: "How we use your information",
          paras: [
            "We use your enquiry to reply to you, prepare your quote and your free SEO audit report, and, if you become a client, to deliver the work we've agreed. We keep a record of our conversation so we can follow up on your project.",
          ],
        },
        {
          id: "helpers",
          h2: "Who helps us run this website",
          list: [
            "Web3Forms delivers contact form messages to our email inbox.",
            "Netlify hosts the website and delivers its pages.",
            "Google (Gmail) provides our email.",
            "Figma shows the interactive website and app prototypes on some service pages, only when you open one.",
          ],
          paras: ["Each of these services handles data under its own privacy policy."],
        },
        {
          id: "storage",
          h2: "Browser storage and links",
          paras: [
            "The site saves one small setting in your browser's local storage to remember that you've already seen the opening animation, so it doesn't play again. It contains no personal information.",
            "Our Instagram, LinkedIn and Facebook links only take you to those sites; they don't load any trackers on our pages.",
          ],
        },
        {
          id: "keep",
          h2: "How long we keep it",
          paras: [
            "We keep enquiries and project emails for as long as we need them to reply, deliver work and keep our business records. You can ask us to delete your information at any time.",
          ],
        },
        {
          id: "choices",
          h2: "Your choices",
          paras: [
            `You can ask what information we hold about you, ask us to correct it, or ask us to delete it, by emailing ${site.email}. We reply within 24 hours.`,
          ],
        },
        {
          id: "changes",
          h2: "Changes to this page",
          paras: ["If we change how we handle information, we'll update this page and the date at the top."],
          links: [
            { href: "/terms", label: "Terms of use" },
            { href: "/editorial-policy", label: "Editorial policy" },
            { href: "/contact", label: "Contact us" },
          ],
        },
      ]}
    />
  );
}
