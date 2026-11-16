import { SimplePage } from "../components/SimplePage";
import { pageMetadata } from "../lib/seo";
import { site } from "../lib/site";

const DESCRIPTION =
  "The terms for using the SO Digital website: our content, client work shown here, starting prices and quotes, results, and links to other sites.";

export const metadata = pageMetadata({ title: "Terms of Use", description: DESCRIPTION, path: "/terms" });

export default function TermsPage() {
  return (
    <SimplePage
      path="/terms"
      eyebrow="Terms"
      title="Terms of Use"
      intro="These are the simple ground rules for using the SO Digital website. By using the site, you agree to them."
      sections={[
        {
          id: "using",
          h2: "Using this website",
          paras: [
            "This website belongs to SO Digital, Kolkata. You're welcome to read, share and link to our pages. Please don't copy our text, designs or code to use as your own.",
          ],
        },
        {
          id: "client-work",
          h2: "Client work shown on this site",
          paras: [
            "Client names, logos, photos, videos and designs appear here to show work we've done for them. They belong to their owners and may not be reused without their permission. Template-based demos are labelled as such.",
          ],
        },
        {
          id: "prices",
          h2: "Prices and quotes",
          paras: [
            "Prices on this site are starting prices. The final price depends on the scope of your project and is confirmed in an itemised quote before any work begins. The free SEO audit report comes with any enquiry and carries no obligation to hire us.",
          ],
        },
        {
          id: "results",
          h2: "Results",
          paras: [
            "We share real results from client projects, but every business is different. SEO, advertising and social media results depend on your market, budget, competition and platforms such as Google and Meta, so we can't promise a particular ranking, number of leads or return on ad spend.",
          ],
        },
        {
          id: "links",
          h2: "Links to other websites",
          paras: [
            "We link to other websites, such as client sites and social networks. We aren't responsible for their content or for how they handle your information.",
          ],
        },
        {
          id: "accuracy",
          h2: "Accuracy and changes",
          paras: [
            `We work to keep this site accurate and up to date, but details can change, and we may update, move or remove pages at any time. If we change these terms, the date at the top shows the latest version. Questions? Email ${site.email}.`,
          ],
          links: [
            { href: "/privacy-policy", label: "Privacy policy" },
            { href: "/editorial-policy", label: "Editorial policy" },
            { href: "/pricing", label: "Starting prices" },
          ],
        },
      ]}
    />
  );
}
