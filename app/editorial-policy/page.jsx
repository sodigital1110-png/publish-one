import { SimplePage } from "../components/SimplePage";
import { pageMetadata } from "../lib/seo";
import { site } from "../lib/site";

const DESCRIPTION =
  "How SO Digital writes and checks its content: who writes it, where facts and client results come from, how articles are updated and corrected.";

export const metadata = pageMetadata({ title: "Editorial Policy", description: DESCRIPTION, path: "/editorial-policy" });

export default function EditorialPolicyPage() {
  return (
    <SimplePage
      path="/editorial-policy"
      eyebrow="How we write"
      title="Editorial Policy"
      intro="Everything on this site is written to help businesses make good decisions about their websites and marketing. Here is how we make sure it's accurate."
      sections={[
        {
          id: "who",
          h2: "Who writes our content",
          paras: [
            `Pages and articles are written by the SO Digital team in ${site.address.locality}. Blog posts name their author, and our founders' backgrounds are on the About page.`,
          ],
          links: [
            { href: "/about", label: "About SO Digital and our founders" },
            { href: "/blog", label: "Our articles" },
          ],
        },
        {
          id: "facts",
          h2: "Where our facts come from",
          list: [
            "Client results, such as a 4.8x return on ad spend or a 40% lower cost per lead, come from our own work for named clients and are explained in their case studies.",
            "Testimonials are from real clients, in their own words.",
            "Statistics from other sources are named or linked where they appear.",
            "Prices are the starting prices we actually charge.",
          ],
        },
        {
          id: "wont",
          h2: "What we won't publish",
          paras: [
            "We don't publish fake reviews, invented results, or stock images presented as client work. Template-based demos and sample images are clearly labelled.",
          ],
        },
        {
          id: "updates",
          h2: "Keeping content up to date",
          paras: [
            "Service pages and articles show when they were last updated. We revise them when prices, platforms or best practice change, such as when Google updates how search or AI Overviews work.",
          ],
        },
        {
          id: "corrections",
          h2: "Corrections",
          paras: [
            `If you spot a mistake, email ${site.email} with the page address. We'll check it, correct it and update the date on the page.`,
          ],
          links: [
            { href: "/privacy-policy", label: "Privacy policy" },
            { href: "/terms", label: "Terms of use" },
          ],
        },
      ]}
    />
  );
}
