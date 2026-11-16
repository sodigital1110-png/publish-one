// India-wide pages (geo: "india") and extra Kolkata service pages.
// India pages must stay genuinely different from the Kolkata pages (no copied sections, no neighbourhood lists),
// and never claim clients outside Kolkata or integrations we haven't built. Proof comes only from real case studies.

const quote = (thing) =>
  `It depends on the scope of your ${thing}. Tell us what you need through the contact form or WhatsApp and we'll reply within 24 hours with a clear, itemised quote at the most affordable price we can offer for that scope. Every enquiry also gets a free SEO audit report of your current website.`;

export const growthContent = [
  // ───────────── India-wide ─────────────
  {
    slug: "travel-website-design",
    geo: "india",
    name: "Travel Website Design",
    metaTitle: "Travel Agency & Tour Website Design, India",
    metaDescription:
      "Travel agency and tour package website design in India: itineraries, WhatsApp enquiries, booking and payments. See our Waggish Travels work.",
    h1: "Travel Agency, Tour Operator and Tour Package Website Design in India",
    summary: "Websites for travel agencies and tour operators: package pages, itineraries, enquiries, WhatsApp and online booking.",
    intro:
      "A travel agency website is your online shopfront: it shows your tour packages with day-wise itineraries, makes it easy to enquire on WhatsApp or by form, builds trust with reviews, and can take bookings and payments online. SO Digital designs and builds travel websites for agencies and tour operators; we created the brand and website for Waggish Travels in under three weeks, and their tour enquiries rose 65% in the first month.",
    image: "/images/waggish-travel.webp",
    imageAlt: "Waggish Travels website home page with hotel and flight search, designed and built by SO Digital",
    priceName: "a travel agency website",
    showPrototypes: "Website",
    reelsTitle: "Travel website designs we've made",
    deliverables: [
      "Tour package pages with day-wise itineraries, inclusions, exclusions and departure dates",
      "Destination pages built to rank on Google for '<destination> tour package' searches",
      "Enquiry forms, click-to-WhatsApp and call buttons on every package",
      "Online booking and payment gateway, when you're ready for it",
      "Hotel, homestay and resort booking pages",
      "Reviews, photos and trust badges that turn visitors into enquiries",
      "An easy admin so you can add and edit packages yourself",
      "SEO setup, Google Business Profile and Meta Ads for your packages",
    ],
    process: [
      { title: "Discovery call", text: "We learn your destinations, best-selling packages and how customers book with you today, over a video call." },
      { title: "Clickable Figma design", text: "You review a clickable prototype of the home, package and enquiry pages before any code is written." },
      { title: "Build on a staging link", text: "We build the site on a private preview link you can check on your phone at every stage." },
      { title: "Packages and SEO", text: "We load your packages, write search-friendly titles and set up analytics and enquiry tracking." },
      { title: "Launch and grow", text: "We launch, train your team and can run SEO and ads to bring in enquiries." },
    ],
    sections: [
      {
        id: "what-it-needs",
        h2: "What does a travel agency website need?",
        list: [
          "Package pages with the price, duration, day-wise itinerary, inclusions and exclusions",
          "Fixed departure dates and seasonal offers",
          "An enquiry form and WhatsApp button on every package, not just the contact page",
          "Destination pages that answer what travellers search for",
          "Real photos, reviews and your memberships and awards for trust",
          "Fast loading on mobile, where most travel enquiries start",
        ],
      },
      {
        id: "enquiry-vs-booking",
        h2: "Enquiry website, booking website or full travel portal?",
        table: {
          columns: ["", "Enquiry website", "Booking-enabled website", "Travel portal"],
          rows: [
            ["Best for", "Most agencies and tour operators selling packages", "Operators with fixed-price, fixed-date tours", "Agencies selling flights and hotels at scale, or to other agents"],
            ["How customers buy", "Enquire by form, call or WhatsApp", "Pick a date and pay online", "Search live inventory and book instantly"],
            ["Typical build", "Weeks", "Weeks to a couple of months", "Months"],
            ["Running costs", "Domain and hosting", "Plus payment gateway fees", "Plus supplier or booking-engine fees"],
          ],
        },
        links: [{ href: "/services/travel-portal-development", label: "B2B and B2C travel portal development" }],
      },
      {
        id: "waggish",
        h2: "Case study: the Waggish Travels website",
        paras: [
          "Waggish Travels needed a brand and a website fast. We designed the identity and built a travel website with hotel and flight search, top deals and destination pages, delivered in under three weeks. Tour package enquiries rose 65% in the first month after launch.",
        ],
        links: [{ href: "/works/waggish-travels", label: "Read the Waggish Travels case study" }],
      },
    ],
    benefits: [
      "Real travel work: the Waggish Travels website, plus clickable prototypes you can try on this page.",
      "Built for enquiries first: WhatsApp, calls and forms on every package.",
      "Fast, mobile-first sites that load quickly on Indian mobile networks.",
      "One team for the website, SEO, Google Business Profile and Meta Ads.",
    ],
    faqs: [
      {
        q: "How much does it cost to build a travel agency website in India?",
        a: "Our websites start at ₹4,999. A travel agency website with package pages, itineraries and enquiry forms costs more as you add packages, destinations, online booking and payment. Running costs such as the domain, hosting and payment gateway fees are separate. Tell us your package count and features and we'll quote within 24 hours.",
      },
      {
        q: "Do I need a booking system, or can I start with enquiry forms?",
        a: "Most travel agencies should start with enquiry forms and WhatsApp, because package tours are usually customised and sold on a call. Add online booking and payment when you have fixed-date, fixed-price tours that customers are ready to buy without talking to you.",
      },
      {
        q: "What features are essential for a travel agency website?",
        a: "Package pages with itineraries and prices, an enquiry form and WhatsApp button on every package, destination pages, real photos and reviews, fast mobile loading and an admin panel so you can update packages yourself.",
      },
      {
        q: "How long does it take to build a travel website?",
        a: "An enquiry-led travel agency website usually takes two to four weeks once we have your packages and photos. Waggish Travels' brand and website were delivered in under three weeks. Booking and payment features add time.",
      },
      {
        q: "Should I use a website builder or a custom website?",
        a: "A builder is fine for a very small start, but you are limited by its templates, speed and SEO controls, and you keep paying monthly. A custom website is faster, ranks better and grows with your packages. We build custom sites that start at ₹4,999.",
      },
      {
        q: "Can I add and edit tour packages myself?",
        a: "Yes. We set up a simple admin where you can add packages, change prices and dates, and upload photos without calling a developer.",
      },
      {
        q: "Can flight and hotel booking be added later?",
        a: "Yes. We plan the site so a booking engine or supplier API can be connected later. We integrate the supplier or platform you contract with.",
      },
    ],
    relatedPosts: ["why-first-impressions-cost-customers", "website-mistakes-killing-conversion-rate"],
    relatedServices: ["travel-portal-development", "web-development", "ui-ux-design", "seo-geo-aeo", "meta-ads"],
    relatedCaseStudies: ["waggish-travels"],
  },
  {
    slug: "travel-portal-development",
    geo: "india",
    name: "Travel Portal Development",
    metaTitle: "Travel Portal Development Company in India",
    metaDescription:
      "B2B and B2C travel portal development in India: booking sites, agent portals with markups and wallets, supplier API integration, apps.",
    h1: "B2B and B2C Travel Portal Development in India",
    summary: "Customer booking portals and agent portals, connected to the white-label platform or supplier you choose.",
    intro:
      "A travel portal is a booking website where customers or travel agents search flights, hotels and packages and book them online. SO Digital designs and builds the customer-facing portal and the agent portal, your brand, your booking flow, and connects them to the white-label platform or supplier API you choose. We designed the Waggish Travels site with flight and hotel search, top deals and destination pages.",
    image: "/images/work/designs/waggish-design-hotels.webp",
    imageAlt: "Waggish Travels hotel listing page designed by SO Digital in Figma",
    priceText:
      "A travel portal is quoted on its scope: B2C or B2B, the booking flows, the supplier or white-label platform, payments and the agent features. Supplier, booking-engine and payment gateway fees are separate from the build. Tell us what you want to sell and to whom, and we'll send an itemised quote within 24 hours.",
    showPrototypes: true,
    deliverables: [
      "B2C booking portal: search, results, filters, checkout, payments and customer accounts",
      "B2B agent portal: agent logins, markups, wallet and credit limits, sub-agents and booking reports",
      "Integration with your white-label platform, aggregator or supplier API",
      "Holiday package, hotel and activity booking flows",
      "Admin dashboard for bookings, cancellations and refunds",
      "Payment gateway integration",
      "Travel app design, to pair the portal with an Android and iOS app",
      "SEO-ready destination and package pages",
    ],
    process: [
      { title: "Choose the route", text: "We help you choose between white label, an aggregator API or direct supplier contracts, based on budget and volume." },
      { title: "Design the flows", text: "We design search, results, checkout and agent screens as a clickable Figma prototype." },
      { title: "Build and integrate", text: "We build the portal and connect it to the platform or supplier you contract with, on a staging link." },
      { title: "Test bookings", text: "We test end-to-end bookings, payments, cancellations and agent markups before launch." },
      { title: "Launch and support", text: "We launch, monitor bookings and keep improving search and conversion." },
    ],
    sections: [
      {
        id: "three-routes",
        h2: "Three ways to get a travel portal",
        table: {
          columns: ["", "White label", "Aggregator or supplier API", "Direct GDS"],
          rows: [
            ["What it is", "A ready booking engine under your brand", "Your own portal using a supplier's live inventory", "Direct connection to global distribution systems"],
            ["Time to launch", "Fastest", "Medium", "Longest"],
            ["Control and branding", "Limited to the platform", "High", "Highest"],
            ["Suits", "New agencies testing online sales", "Growing agencies with steady volume", "Large agencies and consolidators"],
          ],
        },
      },
      {
        id: "b2b-portal",
        h2: "B2B travel portal for travel agents",
        paras: [
          "A B2B portal lets other agents book through you. It needs agent registration and approval, agent-wise markups and commissions, a wallet or credit limit, sub-agent accounts, booking and ledger reports, and branded tickets and vouchers. We design these screens around how your agents actually work.",
        ],
      },
      {
        id: "travel-app",
        h2: "Do you also need a travel app?",
        paras: [
          "Most agencies should launch the web portal first and add an app once repeat customers ask for it. We design travel apps too: try the TravelSafe app prototype on this page, which is a template-based demo, not a client project.",
        ],
        links: [{ href: "/services/app-development", label: "App development" }],
      },
    ],
    benefits: [
      "Design-led: your customers and agents get a booking flow built around your brand.",
      "Platform-neutral: we integrate the supplier or white-label platform you contract with.",
      "Clickable prototypes before development, so you see the portal before you pay to build it.",
      "One team for the portal, the marketing website, SEO and ads.",
    ],
    faqs: [
      {
        q: "What is a B2B travel portal?",
        a: "A B2B travel portal is a booking platform for travel agents rather than the public. Agents log in, search flights, hotels and packages, book them with your markup, and pay from a wallet or credit limit.",
      },
      {
        q: "What is a white label travel portal, and should I use one?",
        a: "A white label travel portal is a ready-made booking engine sold under your brand. It is the fastest and cheapest way to start selling online, but you depend on the platform for features and fees. It suits new agencies; growing agencies usually move to their own portal with supplier APIs.",
      },
      {
        q: "How much does travel portal development cost in India?",
        a: "It depends on whether the portal is B2C or B2B, the booking flows, the supplier or white-label platform and the agent features. Supplier and payment gateway fees are separate from the build. We send an itemised quote within 24 hours of understanding your plans.",
      },
      {
        q: "How do I choose a travel portal development company?",
        a: "Ask to see booking flows they have designed, how they handle supplier integration and failures, who owns the code and data, what support looks like after launch, and get an itemised quote that separates build costs from platform and supplier fees.",
      },
    ],
    relatedPosts: [],
    relatedServices: ["travel-website-design", "app-development", "ui-ux-design", "web-development"],
    relatedCaseStudies: ["waggish-travels"],
  },
  {
    slug: "website-development-india",
    geo: "india",
    name: "Website Development in India",
    metaTitle: "Affordable Website Development Company, India",
    metaDescription:
      "Affordable website design for small businesses across India from ₹4,999: fast sites, e-commerce and maintenance, delivered remotely.",
    h1: "Affordable Website Design and Development for Small Businesses Across India",
    summary: "Fast, affordable business websites built remotely for small businesses anywhere in India, starting at ₹4,999.",
    intro:
      "Affordable website development means getting a fast, professional website that brings in enquiries without overpaying for features you don't need. SO Digital builds business websites, online stores and landing pages for small businesses across India, starting at ₹4,999, and runs the whole project remotely, so it doesn't matter which city you're in.",
    image: "/images/work/designs/waggish-design-home.webp",
    imageAlt: "Website page designed by SO Digital for Waggish Travels, shown in Figma",
    showPrototypes: "Website",
    priceName: "a website",
    deliverables: [
      "Starter business websites from ₹4,999",
      "Multi-page business and service websites",
      "E-commerce stores with payments and shipping",
      "Landing pages for ads and campaigns",
      "Website redesigns that keep your existing Google rankings",
      "Speed, mobile and SEO setup on every site",
      "Website maintenance and annual maintenance contracts (AMC)",
    ],
    process: [
      { title: "Week 1: plan and design", text: "A video call to agree the pages and goals, then a clickable Figma design you can review and comment on." },
      { title: "Week 2: build", text: "We build the site on a private staging link; you check it on your phone and send feedback on WhatsApp." },
      { title: "Week 3: content and launch", text: "We add your content, set up SEO, analytics and enquiry tracking, and launch on your domain." },
      { title: "After launch", text: "We train you to update the site and offer maintenance plans if you'd rather we handled it." },
    ],
    sections: [
      {
        id: "packages",
        h2: "What's included at each price level",
        table: {
          columns: ["", "Starter website", "Business website", "E-commerce store"],
          rows: [
            ["Price", "Starts at ₹4,999", "Quoted on pages and features", "Quoted on products and features"],
            ["Good for", "A new business that needs to be found online", "Service businesses that want enquiries from Google", "Brands selling products online"],
            ["Pages", "A focused starter site", "Home, services, about, contact and more", "Catalogue, product, cart and checkout"],
            ["Every site gets", "Mobile-first design, fast loading, basic SEO, WhatsApp and contact form", "Same, plus page-by-page SEO and analytics", "Same, plus payments, shipping and order emails"],
          ],
        },
      },
      {
        id: "remote",
        h2: "How we build websites for businesses across India, remotely",
        paras: [
          "You never need to visit our office. We agree the scope on a video call, share the design as a Figma link you can comment on, build on a staging link you can open on your phone, and send updates on WhatsApp. You pay in milestones and own your domain, code and content at the end.",
        ],
      },
      {
        id: "choose",
        h2: "How to choose a web development company",
        list: [
          "Look at live websites they've built and test them on your phone",
          "Ask for a clickable design before development starts",
          "Get a written, itemised quote, with domain, hosting and running costs listed separately",
          "Make sure you will own the domain, the code and the content",
          "Check the site will be fast and mobile-friendly, and set up for SEO",
          "Ask what support and maintenance cost after launch",
        ],
      },
    ],
    benefits: [
      "Websites start at ₹4,999, with clear quotes for anything extra.",
      "A remote-ready process: video calls, Figma links, staging previews and WhatsApp updates.",
      "Fast, mobile-first sites with SEO set up from day one.",
      "You own your domain, code and content.",
    ],
    faqs: [
      {
        q: "What is the cost of a website for a small business in India?",
        a: "With SO Digital, a starter business website starts at ₹4,999. A larger service website, an online store or custom features cost more and are quoted on scope. Domain and hosting are separate yearly costs.",
      },
      {
        q: "How long does it take to build a website for a small business?",
        a: "A starter or small business website usually takes one to three weeks once we have your content. Online stores and custom features take longer.",
      },
      {
        q: "Do you work with businesses outside Kolkata?",
        a: "Yes. We are based in Kolkata and build websites for businesses anywhere in India remotely, using video calls, Figma links, staging previews and WhatsApp updates.",
      },
      {
        q: "WordPress or a custom website: which is better?",
        a: "WordPress suits sites that need many editors and plugins. A custom-built site, for example in Next.js, is usually faster, more secure and better for Core Web Vitals and SEO. We recommend what fits your budget and how you'll update the site.",
      },
      {
        q: "Do you offer website maintenance?",
        a: "Yes. We offer maintenance plans that cover updates, backups, security, speed checks and small content changes, so your site stays fast and secure.",
      },
    ],
    relatedPosts: ["website-mistakes-killing-conversion-rate", "why-first-impressions-cost-customers"],
    relatedServices: ["web-development", "ecommerce-website-development", "custom-software-development", "seo-services-india"],
    relatedCaseStudies: ["waggish-travels", "kc-ghosh-associates"],
  },
  {
    slug: "seo-services-india",
    geo: "india",
    name: "Affordable SEO Services in India",
    metaTitle: "Affordable SEO Services in India from ₹1,999",
    metaDescription:
      "Affordable SEO for small businesses across India from ₹1,999 a month: local, on-page and technical SEO plus AI search, with a free audit.",
    h1: "Affordable SEO and Local SEO Services for Small Businesses in India",
    summary: "Monthly SEO plans for small businesses anywhere in India, starting at ₹1,999 a month, with a free SEO audit report.",
    intro:
      "Affordable SEO means getting the work that actually moves your Google rankings, technical fixes, the right keywords, better pages and local SEO, at a monthly price a small business can sustain. SO Digital's SEO plans start at ₹1,999 a month for businesses anywhere in India, and every plan starts with a free SEO audit report of your website.",
    priceName: "SEO",
    deliverables: [
      "Free SEO audit report before you sign up",
      "Keyword research for the searches your customers make",
      "On-page SEO: titles, descriptions, headings, internal links and images",
      "Technical SEO: speed, mobile, indexing, sitemaps and structured data",
      "Local SEO and Google Business Profile optimisation for each location",
      "Content plans and page improvements",
      "AI search optimisation so ChatGPT, Gemini and Google AI Overviews can cite you",
      "Monthly report in plain language",
    ],
    process: [
      { title: "Free audit", text: "We audit your site and show what's holding it back, before you pay anything." },
      { title: "Plan", text: "We agree the keywords, pages and locations to target and pick the plan that fits your budget." },
      { title: "Fix and optimise", text: "We fix technical issues and optimise your most important pages first." },
      { title: "Grow", text: "Each month we improve content, local listings and links, and track rankings." },
      { title: "Report", text: "You get a short monthly report: what we did, what moved and what's next." },
    ],
    sections: [
      {
        id: "cheap-vs-affordable",
        h2: "Affordable SEO vs cheap SEO: the red flags",
        list: [
          "Guaranteed number-one rankings: no one can promise that",
          "Hundreds of backlinks for a tiny fee: spammy links can get a site penalised",
          "No access to your own Google Search Console or analytics",
          "Reports full of jargon and no plain answer to 'what did you do this month?'",
          "Long lock-in contracts before you've seen any work",
        ],
        paras: [
          "Our plans are affordable because they focus on the few things that move rankings for a small business, not because we cut corners.",
        ],
      },
      {
        id: "local-seo-india",
        h2: "Local SEO for businesses in any city",
        paras: [
          "If your customers search '<service> near me' or '<service> in <city>', local SEO matters most. We optimise your Google Business Profile, build consistent listings, set up location pages that are genuinely useful, and help you collect reviews, for one location or several.",
        ],
        links: [
          { href: "/services/google-business-profile", label: "Google Business Profile optimisation" },
          { href: "/services/ai-seo-services-india", label: "AI SEO, GEO and AEO across India" },
        ],
      },
    ],
    benefits: [
      "SEO plans start at ₹1,999 a month, with no surprise add-ons.",
      "A free SEO audit report first, so you see the problems before you pay.",
      "Plain-language monthly reports and full access to your own data.",
      "Technical, local and AI search covered by one team.",
    ],
    faqs: [
      {
        q: "How much does SEO cost per month in India?",
        a: "SO Digital's SEO plans start at ₹1,999 a month for a starter plan. The price grows with the number of pages, keywords and locations you want to rank for. Every plan starts with a free SEO audit report.",
      },
      {
        q: "Is SEO worth it for a small business?",
        a: "Yes, if your customers search on Google before they buy. SEO brings enquiries without paying for every click, and the results build up over time. Start with local SEO and your most important service pages.",
      },
      {
        q: "How long does SEO take to show results?",
        a: "Technical fixes and local SEO can show improvements within weeks, but meaningful ranking gains for competitive searches usually take three to six months of steady work.",
      },
      {
        q: "Is there a minimum contract?",
        a: "We recommend at least three months to see results, but we agree the terms before starting and you get a report every month so you can judge the work.",
      },
      {
        q: "Do you offer local SEO for businesses outside Kolkata?",
        a: "Yes. We are based in Kolkata and provide SEO and local SEO for businesses anywhere in India, working remotely.",
      },
    ],
    relatedPosts: ["seo-geo-aeo-future-of-digital-discovery", "google-my-business-guide-kolkata"],
    relatedServices: ["seo-geo-aeo", "ai-seo-services-india", "google-business-profile", "website-development-india"],
    relatedCaseStudies: [],
  },
  {
    slug: "ai-seo-services-india",
    geo: "india",
    name: "AI SEO, GEO & AEO in India",
    metaTitle: "AI SEO, GEO & AEO Services in India",
    metaDescription:
      "AI SEO services in India: GEO and AEO to get your business cited by ChatGPT, Gemini, Perplexity and Google AI Overviews. Free audit first.",
    h1: "AI SEO Services in India: Get Found and Cited by ChatGPT, Gemini and Google AI",
    summary: "Generative and answer engine optimisation so AI assistants name and cite your business.",
    intro:
      "AI SEO, also called GEO (generative engine optimisation) and AEO (answer engine optimisation), is the work of making your business easy for AI assistants such as ChatGPT, Gemini, Perplexity and Google's AI Overviews to understand, trust and cite. SO Digital runs AI visibility audits and monthly AI SEO for businesses across India, alongside classic SEO.",
    deliverables: [
      "AI visibility audit: which prompts name your competitors and not you",
      "A tracked prompt set in English, Hindi and Bengali for your market",
      "Crawler access checks: robots.txt, llms.txt and page rendering for AI bots",
      "Entity consistency: business name, address, services and profiles that agree everywhere",
      "Structured data (schema) for your business, services and answers",
      "Question-led, answer-first pages that AI tools can quote",
      "Review, listing and third-party mention plan",
      "Monthly AI citation tracking and report",
    ],
    process: [
      { title: "Prompt audit", text: "We test the questions your customers ask AI tools and record who gets named and which sources are cited." },
      { title: "Technical access", text: "We make sure AI crawlers can read your site and your key pages render without JavaScript." },
      { title: "Entity and schema", text: "We make your business details consistent everywhere and add structured data." },
      { title: "Answer-ready content", text: "We rewrite key pages so they answer questions directly and can be quoted." },
      { title: "Track", text: "We re-run the prompt set every month and report changes in citations." },
    ],
    sections: [
      {
        id: "how-ai-chooses",
        h2: "How do AI assistants decide which businesses to name?",
        paras: [
          "There is no form to submit your business to ChatGPT or Gemini. AI assistants name businesses they can find consistent, trustworthy information about: a complete Google Business Profile, reviews, mentions on other sites, and clear pages that directly answer the question being asked. AI SEO improves each of these signals, which also helps your normal Google rankings.",
        ],
      },
      {
        id: "audit",
        h2: "What our AI visibility audit includes",
        list: [
          "20–30 real prompts your customers might ask, tested across AI assistants",
          "Which competitors are named, and which websites are cited as sources",
          "Whether AI crawlers can access and read your pages",
          "Gaps in your business information, reviews and listings",
          "A prioritised list of fixes",
        ],
        links: [
          { href: "/free-seo-audit", label: "Get a free SEO audit report" },
          { href: "/services/seo-services-india", label: "Affordable SEO services in India" },
        ],
      },
    ],
    benefits: [
      "Classic SEO and AI SEO from one team, so the work supports both.",
      "Prompt sets in English, Hindi and Bengali for Indian markets.",
      "Honest reporting: no guaranteed AI rankings, just tracked progress.",
      "Starts with a free SEO audit report.",
    ],
    faqs: [
      {
        q: "What is GEO in SEO?",
        a: "GEO, generative engine optimisation, is optimising your website and online presence so AI tools such as ChatGPT, Gemini, Perplexity and Google AI Overviews mention and cite your business in their answers.",
      },
      {
        q: "What's the difference between AEO and GEO?",
        a: "AEO, answer engine optimisation, focuses on being the direct answer in featured snippets, People Also Ask and voice assistants. GEO focuses on being named and cited in AI-generated answers. Both rely on clear, question-led content and consistent business information.",
      },
      {
        q: "How do I get my business on ChatGPT?",
        a: "You can't submit your business to ChatGPT. Improve the signals AI assistants rely on: a complete Google Business Profile, reviews, consistent listings, mentions on trusted sites and website pages that answer customers' questions directly.",
      },
      {
        q: "Can you guarantee ChatGPT will recommend my business?",
        a: "No, and no honest agency can. AI answers change with each question and model. We improve the signals AI tools use and track your citations every month so you can see the progress.",
      },
      {
        q: "Will AI replace SEO?",
        a: "No. AI tools still rely on web pages and search indexes for their information, so strong SEO remains the foundation. AI SEO adds the work needed to be cited in AI answers.",
      },
    ],
    relatedPosts: ["seo-geo-aeo-future-of-digital-discovery"],
    relatedServices: ["seo-services-india", "seo-geo-aeo", "google-business-profile"],
    relatedCaseStudies: [],
  },

  // ───────────── Kolkata ─────────────
  {
    slug: "custom-software-development",
    name: "Custom Software Development",
    metaTitle: "Custom Software & Web App Development, Kolkata",
    metaDescription:
      "Affordable custom software and web apps in Kolkata: CRMs, billing and inventory systems, booking platforms, dashboards and automation.",
    h1: "Custom Software and Web App Development in Kolkata, at Affordable Prices",
    summary: "Custom software, web apps and business tools built around how your business works, at the lowest price we can offer for your scope.",
    intro:
      "Custom software development means building a tool around how your business actually works, instead of bending your process to fit off-the-shelf software. SO Digital builds custom web apps, CRMs, billing and inventory systems, booking platforms, dashboards and automations for businesses in Kolkata and across India, and we quote the lowest price we can for your scope, with the option to start small and grow.",
    priceName: "custom software",
    priceText:
      "Custom software is quoted on what it needs to do. To keep it affordable, we start with the smallest version that solves your main problem, then add features in phases as it pays for itself. Tell us the problem you want solved and we'll reply within 24 hours with an itemised quote at the most affordable price we can offer.",
    deliverables: [
      "Custom web applications and business portals",
      "CRM and lead management systems",
      "Billing and inventory software",
      "Booking and appointment systems",
      "Admin dashboards and reports",
      "Customer and staff portals",
      "Automation of manual work: spreadsheets, WhatsApp and email workflows",
      "Integrations with payment gateways, accounting tools and APIs",
    ],
    process: [
      { title: "Understand the problem", text: "We map your current process and agree the one problem the first version must solve." },
      { title: "Clickable prototype", text: "You use a clickable Figma prototype of the screens before any code is written." },
      { title: "Build in phases", text: "We build the first version on a staging link, with demos every week or two." },
      { title: "Launch and train", text: "We launch, move your data over and train your team." },
      { title: "Improve", text: "We add features in phases, based on what your team actually uses." },
    ],
    sections: [
      {
        id: "when-custom",
        h2: "When do you need custom software instead of an off-the-shelf tool?",
        list: [
          "Your team runs the business on spreadsheets, WhatsApp groups and manual follow-ups",
          "Off-the-shelf software charges per user and still doesn't fit your process",
          "You need two or more tools to talk to each other automatically",
          "You want customers, dealers or staff to log in to their own portal",
          "You want to own the software and data, with no monthly licence",
        ],
      },
      {
        id: "affordable",
        h2: "How we keep custom software affordable",
        paras: [
          "Most custom software projects get expensive because everything is built at once. We start with a small first version that solves your biggest problem, use proven frameworks rather than reinventing the wheel, and add features only when they're needed. You see a clickable prototype before development, so there are no expensive surprises.",
        ],
        links: [
          { href: "/services/web-development", label: "Custom website development" },
          { href: "/services/app-development", label: "Android and iOS app development" },
          { href: "/services/ui-ux-design", label: "UI/UX design and prototypes" },
        ],
      },
    ],
    benefits: [
      "Affordable: we start small and phase the build, so you only pay for what works.",
      "Clickable prototype before development, so you see it before you pay to build it.",
      "You own the code and your data, with no per-user licence.",
      "A Kolkata team you can meet, also working remotely across India.",
    ],
    faqs: [
      {
        q: "How much does custom software development cost in Kolkata?",
        a: "It depends on what the software needs to do. To keep the cost low, we build a small first version that solves your main problem and add features in phases. Tell us the problem and we'll send an itemised quote within 24 hours.",
      },
      {
        q: "How long does it take to build custom software?",
        a: "A focused first version of a business tool often takes a few weeks to a couple of months. Larger platforms are built in phases, with a working version you can use early.",
      },
      {
        q: "Will I own the software?",
        a: "Yes. You own the code, the data and the accounts, and there is no per-user licence fee to us.",
      },
      {
        q: "Can you build a CRM or billing system for my business?",
        a: "Yes. We build CRMs, lead trackers, billing, inventory and booking systems around your workflow, and can connect them to WhatsApp, email, payment gateways and accounting tools.",
      },
      {
        q: "Do you also build mobile apps?",
        a: "Yes. We design and build Android and iOS apps, and can pair them with a web dashboard for your team.",
      },
    ],
    relatedPosts: [],
    relatedServices: ["web-development", "app-development", "ui-ux-design", "website-development-india"],
    relatedCaseStudies: [],
  },
  {
    slug: "ecommerce-website-development",
    name: "E-commerce Website Development",
    metaTitle: "E-commerce Website Development in Kolkata",
    metaDescription:
      "E-commerce website development in Kolkata: online stores with payments, shipping, order tracking, product photos and Meta Ads for sales.",
    h1: "E-commerce Website Development in Kolkata: Online Stores That Sell",
    summary: "Online stores with payments, shipping, order tracking and the photos, creatives and ads to sell.",
    intro:
      "E-commerce website development is building an online store where customers browse products, pay online and get order updates, with the catalogue, payments and shipping behind it. SO Digital builds online stores for Kolkata brands and, because we also shoot products, design ad creatives and run Meta Ads, we can help you sell from day one, like the creatives and video ads we make for Blue Gen, an e-commerce tea brand.",
    image: "/images/work/blue-gen-hero.webp",
    imageAlt: "Ad creatives SO Digital designed for Blue Gen, an e-commerce butterfly pea tea brand",
    priceName: "an e-commerce website",
    reelsTitle: "E-commerce creatives and video ads we've made",
    deliverables: [
      "Custom online store or Shopify / WooCommerce setup",
      "Product catalogue with variants, filters and search",
      "Payment gateway with UPI, cards and cash on delivery",
      "Shipping integration and order tracking emails or WhatsApp",
      "Discount codes, reviews and abandoned-cart reminders",
      "Product photography, ad creatives and video ads",
      "SEO for product and category pages, plus Meta Ads to drive sales",
    ],
    process: [
      { title: "Plan the store", text: "We plan the catalogue, payment, shipping and the customer journey from ad to checkout." },
      { title: "Design", text: "You review a clickable design of the home, category, product and checkout pages." },
      { title: "Build and connect", text: "We build the store and connect payments and shipping on a staging link." },
      { title: "Products and content", text: "We load your products, write SEO-friendly descriptions and can shoot the photos." },
      { title: "Launch and sell", text: "We launch and can run Meta Ads with creatives designed for your products." },
    ],
    sections: [
      {
        id: "shopify-vs-custom",
        h2: "Shopify, WooCommerce or a custom store?",
        table: {
          columns: ["", "Shopify", "WooCommerce", "Custom store"],
          rows: [
            ["Best for", "Quick launch, small to medium catalogues", "Brands that want WordPress and plugins", "Brands needing custom features and top speed"],
            ["Running cost", "Monthly subscription plus app fees", "Hosting plus paid plugins", "Hosting; no platform subscription"],
            ["Flexibility", "Limited to the platform and apps", "High, via plugins", "Highest"],
          ],
        },
      },
    ],
    benefits: [
      "One team for the store, product photos, ad creatives and Meta Ads.",
      "Real e-commerce creative work: the Blue Gen ad creatives and video ads.",
      "UPI, cards and cash on delivery set up for Indian customers.",
      "Fast, mobile-first stores that convert ad traffic.",
    ],
    faqs: [
      {
        q: "How much does an e-commerce website cost in Kolkata?",
        a: "Our websites start at ₹4,999. An online store costs more because of the catalogue, payments, shipping and order setup, so we quote it on the number of products and features you need. Platform subscriptions and payment gateway fees are separate.",
      },
      {
        q: "Should I sell on my own website or on Amazon and Flipkart?",
        a: "Ideally both. Marketplaces bring ready buyers but take a commission and own the customer. Your own store builds your brand, gives you customer data for repeat sales and pairs well with Meta Ads.",
      },
      {
        q: "Can you shoot product photos and make ads for my store?",
        a: "Yes. We shoot product photos and videos in Kolkata, design ad creatives and run Meta Ads, as we do for the e-commerce tea brand Blue Gen.",
      },
    ],
    relatedPosts: ["website-mistakes-killing-conversion-rate"],
    relatedServices: ["web-development", "product-photography", "meta-ads", "graphic-design"],
    relatedCaseStudies: ["blue-gen"],
  },
  {
    slug: "lead-generation",
    name: "Lead Generation",
    metaTitle: "Lead Generation Company in Kolkata",
    metaDescription:
      "Lead generation in Kolkata: Meta Ads, Google Ads, landing pages and WhatsApp follow-up, with results for coaching, solar and retail brands.",
    h1: "Lead Generation Company in Kolkata: Meta Ads, Google Ads and Landing Pages",
    summary: "Qualified enquiries from Meta Ads, Google Ads and landing pages, with follow-up that turns leads into customers.",
    intro:
      "Lead generation is bringing in enquiries from people who are likely to buy, through ads, landing pages and forms, and making sure they're followed up fast. SO Digital runs lead generation campaigns on Meta (Facebook and Instagram) and Google for Kolkata businesses; our Meta Ads for Sougato Edutorial returned 4.8x the ad spend, and Google Ads for Biswas Retail Group cut the cost per lead by 40%.",
    image: "/images/work/meta-ads-collage.webp",
    imageAlt: "Real lead generation ad creatives SO Digital designed for SC Solar, Sougato Edutorial and Blue Gen",
    priceName: "lead generation",
    reelsTitle: "Lead generation ads and creatives we've made",
    deliverables: [
      "Meta lead ads and Instagram campaigns",
      "Google Search Ads for high-intent searches",
      "Landing pages built to convert ad traffic",
      "Lead forms with qualifying questions to filter out time-wasters",
      "WhatsApp and call follow-up setup",
      "Lead tracking: which ad, keyword and creative brought each lead",
      "Ad creatives and short video ads",
      "Weekly optimisation for cost per lead and lead quality",
    ],
    process: [
      { title: "Define a good lead", text: "We agree what a qualified lead looks like for you and what you can afford to pay for one." },
      { title: "Offer and creatives", text: "We shape the offer, design the creatives and build the landing page or lead form." },
      { title: "Launch", text: "We launch on Meta, Google or both, with tracking for every lead." },
      { title: "Follow up fast", text: "Leads reach you instantly on WhatsApp or email, so you call while they're interested." },
      { title: "Optimise", text: "Each week we cut what doesn't work and scale what brings quality leads." },
    ],
    sections: [
      {
        id: "results",
        h2: "Lead generation results for Kolkata businesses",
        list: [
          "Sougato Edutorial (coaching): 4.8x return on ad spend from Meta Ads, with student enquiries tripled",
          "Biswas Retail Group (retail): 40% lower cost per lead with Google Ads",
          "Sui Dhaga (fashion): growth of almost 12X since May, as reported by the client, from Meta Ads",
          "SC Solar (solar manufacturing): Meta Ads lead generation backed by a factory film and product reels",
        ],
        links: [
          { href: "/works/sougato-edutorial", label: "Sougato Edutorial case study" },
          { href: "/works/biswas-retail-group", label: "Biswas Retail Group case study" },
          { href: "/works/sc-solar", label: "SC Solar case study" },
        ],
      },
      {
        id: "quality",
        h2: "Lead quality, not just lead volume",
        paras: [
          "Cheap leads are worthless if nobody answers the phone. We add qualifying questions to forms, send leads to you instantly, and judge campaigns on cost per qualified lead or per sale, not just cost per form fill.",
        ],
        links: [
          { href: "/industries/solar-renewable-energy", label: "Solar lead generation" },
          { href: "/industries/coaching-institutes", label: "Leads for coaching institutes" },
        ],
      },
    ],
    benefits: [
      "Real results: 4.8x ROAS for Sougato Edutorial and 40% lower cost per lead for Biswas Retail Group.",
      "Creatives, landing pages and ads made by one team.",
      "Every lead tracked to the ad that brought it.",
      "Kolkata team working in English, Bengali and Hindi.",
    ],
    faqs: [
      {
        q: "How much does lead generation cost in Kolkata?",
        a: "You pay two things: the ad budget, which goes to Meta or Google, and our management fee. We recommend a budget based on your industry and goals and quote the management fee upfront, along with a free SEO audit report of your website.",
      },
      {
        q: "Meta Ads or Google Ads: which is better for leads?",
        a: "Google Ads reach people already searching for your service, so leads are often higher intent. Meta Ads create demand and work well for offers, admissions, events and visual products. Many businesses get the best results from both.",
      },
      {
        q: "How quickly will I get leads?",
        a: "Campaigns usually start bringing enquiries within days of launch. The first two to four weeks are for testing creatives and audiences, after which the cost per lead typically improves.",
      },
      {
        q: "Do you work on lead generation for solar companies and coaching institutes?",
        a: "Yes. We ran Meta Ads lead generation for SC Solar, and Meta Ads for Sougato Edutorial returned 4.8x the ad spend with student enquiries tripled.",
      },
    ],
    relatedPosts: ["how-to-choose-digital-marketing-agency-kolkata"],
    relatedServices: ["meta-ads", "google-ads", "web-development", "graphic-design"],
    relatedCaseStudies: ["sougato-edutorial", "biswas-retail-group", "sc-solar"],
  },
];
