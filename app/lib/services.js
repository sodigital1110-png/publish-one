import { serviceIndex } from "./serviceIndex";
import { growthContent } from "./servicesGrowth";
import { keywordAdditions } from "./servicesKeywords";
import { moreContent } from "./servicesMore";
import { nearMeFaqs } from "./servicesNearMe";
import { startingPrices, inr } from "./pricing";

// Content for the /services hub and each /services/[slug] landing page.
// Claims and numbers here come only from SO Digital's own site and client testimonials.

const quoteAnswer = (thing) =>
  `It depends on the scope of your ${thing}, what you already have in place and how quickly you need it. Tell us about your project through the contact form and we'll reply within 24 hours with a tailored quote, so you only pay for what your business actually needs.`;

const baseContent = [
  {
    slug: "ui-ux-design",
    name: "UI/UX Design",
    metaTitle: "UI/UX Design Company in Kolkata",
    metaDescription:
      "UI/UX design in Kolkata from SO Digital: user research, wireframes, Figma prototypes and design systems that make sites and apps easy to use.",
    h1: "UI/UX Design Company in Kolkata",
    summary: "Intuitive, stunning interfaces that delight users and drive conversions. From wireframes to pixel-perfect final designs.",
    intro:
      "UI/UX design is the process of planning how a website or app works (the user experience) and how it looks (the user interface), so visitors find what they need and act without friction. SO Digital designs interfaces in Figma, from early wireframes to pixel-perfect screens, with one goal: turning visitors into customers.",
    image: "/images/work/designs/waggish-design-hotels.webp",
    imageAlt: "Waggish Travels website design in Figma by SO Digital: top values and hotel cards",
    deliverables: [
      "User research and customer journey mapping",
      "Information architecture and wireframes",
      "Interactive Figma prototypes you can click through",
      "Pixel-perfect interface design for desktop and mobile",
      "Design systems with reusable components",
      "Developer-ready handoff, or a build by our own web team",
    ],
    process: [
      { title: "Discover", text: "We learn your business goals, your customers and your competitors, and map the journey from first visit to enquiry or purchase." },
      { title: "Structure", text: "We plan the sitemap and wireframes so every page has a clear job and an obvious next step." },
      { title: "Design", text: "We create the visual interface: typography, colour, layout and micro-interactions that reflect your brand." },
      { title: "Prototype & refine", text: "You review a clickable prototype and leave feedback directly on the design until it feels right." },
      { title: "Handoff", text: "Approved designs go to development with specs and components, ready to build without guesswork." },
    ],
    results: { client: "Waggish Travels", caseStudy: "waggish-travels", points: ["Complete brand identity and travel website delivered in under three weeks", "Tour package enquiries up 65% in the first month"] },
    showPrototypes: true,
    benefits: [
      "Lower bounce rates: clear layouts keep visitors engaged long enough for your message to land.",
      "Higher conversion rates: visual hierarchy guides people toward booking, buying or enquiring.",
      "More trust: a polished interface signals credibility before anyone reads a word.",
      "Faster development: a design system makes future pages quicker and more consistent to build.",
    ],
    faqs: [
      {
        q: "What is the difference between UI and UX design?",
        a: "UX (user experience) design decides how a product works: the structure, the user journey and how easily people complete tasks. UI (user interface) design decides how it looks: layout, typography, colour and components. Good digital products need both, which is why SO Digital handles them together.",
      },
      {
        q: "What tools do you use for UI/UX design?",
        a: "We design in Figma, which lets you review screens and clickable prototypes in your browser and comment directly on the design. Once approved, the same files become a developer-ready handoff, so nothing gets lost between design and build.",
      },
      {
        q: "Can you redesign my existing website?",
        a: "Yes. We start by reviewing your current site to find where visitors drop off or get confused, then redesign the structure and interface around those problems. If you want, our web development team can build the new design for you as well.",
      },
      { q: "How much does UI/UX design cost?", a: quoteAnswer("design project") },
    ],
    relatedPosts: ["why-first-impressions-cost-customers", "website-mistakes-killing-conversion-rate"],
    relatedServices: ["web-development", "logo-brand-identity", "seo-geo-aeo"],
    relatedCaseStudies: ["waggish-travels", "kc-ghosh-associates"],
  },
  {
    slug: "web-development",
    showPrototypes: "Website",
    priceName: "a website",
    name: "Web Development",
    metaTitle: "Website Design & Development Company Kolkata",
    metaDescription:
      "Fast, SEO-ready websites built with Next.js and React by SO Digital in Kolkata: business sites, e-commerce stores and web apps that scale.",
    h1: "Website Design and Development Company in Kolkata",
    summary: "Full-stack development with modern frameworks. Blazing-fast, SEO-optimised, and built to scale.",
    intro:
      "Web development is the work of turning a design into a fast, secure, working website or web application. SO Digital builds full-stack sites with modern frameworks like Next.js, React and Node.js, so your site loads quickly, ranks well in search and can grow with your business.",
    image: "/images/work/designs/waggish-design-home.webp",
    imageAlt: "Waggish Travels travel portal design by SO Digital: flight and hotel search with top travel values",
    deliverables: [
      "Business, service and portfolio websites",
      "Conversion-first e-commerce storefronts",
      "Travel portals, booking flows and custom web applications",
      "Technical SEO built in: clean URLs, metadata, structured data and sitemaps",
      "Performance optimisation for fast loading on mobile",
      "Deployment, domain connection and analytics setup",
    ],
    process: [
      { title: "Plan", text: "We agree the pages, features, integrations and content you need, and how success will be measured." },
      { title: "Build", text: "We develop the site in Next.js and React, component by component, on a staging link you can review." },
      { title: "Optimise", text: "We tune speed, accessibility and on-page SEO so the site performs for users and search engines." },
      { title: "Launch", text: "We deploy to production, connect your domain and set up analytics and search console." },
    ],
    results: { client: "Waggish Travels", caseStudy: "waggish-travels", points: ["Complete brand identity and travel website delivered in under three weeks", "Tour package enquiries up 65% in the first month"] },
    comparison: {
      title: "Which type of website does your business need?",
      columns: ["", "Business website", "E-commerce store", "Web application"],
      rows: [
        ["Best for", "Service businesses, consultants, clinics, agencies and startups", "Brands selling products online", "Booking portals, dashboards and custom tools"],
        ["Typical features", "Service pages, case studies, blog, enquiry forms, WhatsApp/call buttons", "Catalogue, cart, payments, shipping, order management", "User accounts, databases, integrations and admin panels"],
        ["What drives the cost", "Number of pages, custom design and content", "Number of products, payment and delivery integrations", "Features, user roles and integrations"],
        ["Launch speed", "Fastest", "Medium", "Longest"],
      ],
    },
    sections: [
      {
        id: "ecommerce-websites",
        h2: "E-commerce website development in Kolkata",
        paras: [
          "Selling online needs more than a product catalogue: payments with UPI and cards, shipping, order updates and pages fast enough to convert ad traffic. We build online stores on Shopify, WooCommerce or a custom stack, and can shoot your products and run your ads too.",
        ],
        links: [{ href: "/services/ecommerce-website-development", label: "E-commerce website development" }],
      },
      {
        id: "custom-websites",
        h2: "Need a custom website or custom software? We build it at the most affordable price we can",
        paras: [
          "If a template won't do, for example a booking system, a customer portal, a dashboard or a tool that replaces your spreadsheets, we build it custom. We start with the smallest version that solves your main problem and grow it in phases, so it stays affordable.",
        ],
        links: [
          { href: "/services/custom-software-development", label: "Custom software and web apps" },
          { href: "/services/travel-website-design", label: "Travel agency website design" },
          { href: "/services/website-development-india", label: "Website development for businesses across India" },
        ],
      },
      {
        id: "maintenance",
        h2: "Website maintenance in Kolkata",
        paras: [
          "After launch we can look after your site: updates, backups, security, speed checks and small content changes, on a simple monthly or yearly maintenance plan.",
        ],
        links: [{ href: "/services/website-hosting", label: "Website hosting, domain and SSL" }],
      },
    ],
    benefits: [
      "Speed: modern frameworks and optimised assets keep pages fast, which helps both conversions and rankings.",
      "Search visibility: the technical SEO foundations are part of the build, not an afterthought.",
      "Scalability: a component-based codebase makes it easy to add pages and features later.",
      "One team: design, development and marketing work from the same plan.",
    ],
    faqs: [
      {
        q: "How much does a website cost in Kolkata?",
        a: "With SO Digital, websites start at just ₹4,999 for a starter business website. Extra pages, e-commerce, booking and custom features are quoted on scope, and domain and hosting are separate yearly costs. Every enquiry also gets a free SEO audit report of your current website.",
      },
      {
        q: "Which technologies do you build websites with?",
        a: "Most of our builds use Next.js and React on the front end, with Node.js where server logic is needed, written in TypeScript or JavaScript. This stack produces fast, search-friendly pages and is widely supported, so your site is easy to maintain and extend later.",
      },
      {
        q: "Will my website be mobile-friendly and SEO-ready?",
        a: "Yes. Every site we build is responsive and ships with the technical SEO basics in place: unique titles and descriptions, clean URLs, structured data, an XML sitemap and fast-loading pages. That gives your content the best possible foundation to rank.",
      },
      {
        q: "Can you build an e-commerce website?",
        a: "Yes. We build conversion-first storefronts, from product pages to checkout flows. Pairing the build with our Meta Ads and Google Ads services means your store launches with a plan to attract buyers, not just a product catalogue.",
      },
      {
        q: "How long does it take to build a website?",
        a: "Timelines depend on the number of pages, the features involved and how quickly content is ready. As one example, we delivered Waggish Travels' complete brand identity and travel website in under three weeks. We'll give you a clear timeline once we understand your scope.",
      },
    ],
    relatedPosts: ["website-mistakes-killing-conversion-rate", "why-first-impressions-cost-customers"],
    relatedServices: ["ecommerce-website-development", "website-hosting", "custom-software-development", "ui-ux-design", "seo-geo-aeo", "website-development-india"],
    relatedCaseStudies: ["waggish-travels", "kc-ghosh-associates"],
  },
  {
    slug: "video-editing",
    priceName: "video editing",
    name: "Video Editing",
    metaTitle: "Video Editing Agency in Kolkata for Reels & Ads",
    metaDescription:
      "Brand films, Instagram Reels, ad creatives and motion graphics edited by SO Digital in Kolkata. Scroll-stopping video built for social media and ads.",
    h1: "Video Editing Agency in Kolkata: Reels, YouTube, Ads and Event Films",
    summary: "Cinematic brand videos, reels, ads, and explainers that stop the scroll and tell your story.",
    intro:
      "Video editing turns raw footage into a story people actually watch: cutting, pacing, colour, sound, captions and motion graphics. SO Digital edits cinematic brand videos, Reels, ad creatives and explainers that stop the scroll and are formatted for every platform you publish on.",
    image: "/images/work/video-editing-collage.webp",
    imageAlt: "Video edits by SO Digital: Sougato Edutorial's Bijoya film, a Carbonex founder reel and SC Solar's brand film",
    deliverables: [
      "Brand films and company videos",
      "Instagram Reels, YouTube Shorts and other short-form edits",
      "Video ad creatives for Meta and Google campaigns",
      "Explainer videos",
      "Motion graphics and animated titles",
      "Captions, colour correction and audio cleanup",
      "Exports in every aspect ratio you need (9:16, 1:1, 16:9)",
    ],
    process: [
      { title: "Brief", text: "We agree the goal, audience, platforms and style, and you share your footage and brand assets." },
      { title: "First cut", text: "We build the story: selecting takes, setting the pace and placing music and captions." },
      { title: "Polish", text: "We add colour correction, sound design, motion graphics and on-brand titles." },
      { title: "Deliver", text: "After your feedback, we export platform-ready versions for each place the video will run." },
    ],
    results: { client: "Sougato Edutorial", caseStudy: "sougato-edutorial", points: ["Organic reach tripled within 60 days", "Student enquiries tripled"] },
    reelsTitle: "Our video editing work: Reels, ads, brand films and event edits",
    sections: [
      {
        id: "reels-editing",
        h2: "Reels editing services in Kolkata, from ₹299",
        paras: [
          "Instagram Reels, YouTube Shorts and short ads live or die in the first two seconds. We cut for the hook, add captions in English, Bengali or Hindi, sync to music, and export in the right format for each platform. Reel edits start at just ₹299.",
        ],
      },
      {
        id: "youtube-editing",
        h2: "YouTube video editing in Kolkata",
        paras: [
          "For YouTube we edit long-form videos with a strong opening, B-roll, graphics, chapter-friendly structure, sound clean-up and thumbnails-ready frames, and can cut Shorts from the same footage so one shoot feeds every channel.",
        ],
      },
      {
        id: "turnaround",
        h2: "Turnaround and revisions",
        list: [
          "Short reels are usually delivered within 24–48 hours of receiving the footage",
          "Longer YouTube and corporate edits are scheduled with you upfront",
          "Revisions are included, so the final cut is one you're happy to post",
          "Monthly reel packs for brands posting every week cost less per video",
        ],
      },
    ],
    benefits: [
      "Attention: strong hooks and tight pacing keep viewers watching past the first seconds.",
      "Consistency: every video carries the same brand look across platforms.",
      "Performance: ad edits are built for the formats and placements that convert.",
      "Reach: short-form content helps brands connect with audiences they haven't reached before.",
    ],
    faqs: [
      {
        q: "Which industries do you edit videos for?",
        a: "We edit for education brands (teaching Reels and parent testimonials for Sougato Edutorial), automobile and car care (Carbonex), solar and renewable energy (SC Solar), FMCG and food (Fortune's expo films) and e-commerce brands (a video ad for Blue Gen tea), among others.",
      },
      {
        q: "Do you edit video ads for e-commerce brands?",
        a: "Yes. We cut product footage into short video ads, Reels and Stories in every aspect ratio for Meta Ads, Instagram and marketplaces, like the 10-second ad we made for Blue Gen.",
      },
      {
        q: "What kinds of videos do you edit?",
        a: "We edit brand films, Instagram Reels, YouTube videos and Shorts, ad creatives, explainers and motion-graphics pieces. Whether you shoot on a phone or a professional camera, we shape the footage into a clear story with pacing, captions, music and graphics suited to where it will be published.",
      },
      {
        q: "Do you edit videos for ads?",
        a: "Yes. Ad creatives are a core part of our work, and because we also run Meta Ads and Google Ads campaigns, we edit with performance in mind: a strong hook in the first seconds, clear messaging and versions in each aspect ratio the platforms need.",
      },
      {
        q: "Can you work with footage I shoot myself?",
        a: "Yes. Send us your raw clips from a phone or camera and we'll handle the rest: selecting the best takes, cutting, colour correction, audio cleanup, captions and music. You get a polished, on-brand video without needing your own editing setup.",
      },
      { q: "How much does video editing cost in Kolkata?", a: "Video editing at SO Digital starts at just ₹299 for a short reel. Longer videos, YouTube edits, motion graphics, colour grading and subtitles are quoted on the length and effects you need, and monthly reel packs cost less per video." },
    ],
    relatedPosts: ["video-content-strategy-for-brands"],
    relatedServices: ["meta-ads", "graphic-design", "wedding-videography", "logo-brand-identity"],
    relatedCaseStudies: ["sc-solar", "carbonex", "sougato-edutorial"],
  },
  {
    slug: "logo-brand-identity",
    name: "Logo & Brand Identity",
    metaTitle: "Logo Design & Branding Company in Kolkata",
    metaDescription:
      "Logo design and complete brand identity systems from SO Digital in Kolkata: logos, colour palettes, typography, brand guidelines and stationery.",
    h1: "Logo Design and Brand Identity Company in Kolkata",
    summary: "Timeless logos and complete brand identity systems that make you instantly recognizable.",
    intro:
      "Brand identity is the complete visual system people recognise your business by: logo, colours, typography, imagery and the rules for using them consistently. SO Digital designs timeless logos and full identity systems that make your brand instantly recognisable across your website, social media, packaging and print.",
    image: "/images/waggish-travel.webp",
    imageAlt: "Waggish Travels brand identity and website by SO Digital",
    deliverables: [
      "Logo design with primary, secondary and icon versions",
      "Colour palette and typography system",
      "Brand guidelines document",
      "Stationery and business card design",
      "Brand mockups and launch assets",
      "Social media templates in your new identity",
    ],
    process: [
      { title: "Discover", text: "We explore your story, audience, values and competitors to define what your brand should communicate." },
      { title: "Concepts", text: "We present distinct logo and identity directions, each with the thinking behind it." },
      { title: "Refine", text: "We develop your chosen direction into a finished logo, palette and type system." },
      { title: "Brand guide", text: "We hand over every file and a guide showing how to use your identity consistently." },
    ],
    results: { client: "Waggish Travels", caseStudy: "waggish-travels", points: ["Complete brand identity and travel website delivered in under three weeks", "Tour package enquiries up 65% in the first month"] },
    comparison: {
      title: "Logo design vs a full brand identity",
      columns: ["", "Logo design", "Full brand identity"],
      rows: [
        ["What you get", "A logo with colour and file variations", "Logo plus colour palette, typography, patterns, imagery style and a brand guide"],
        ["Best for", "Very early-stage businesses testing an idea", "Businesses ready to look consistent everywhere they appear"],
        ["Consistency across channels", "Limited: each new design starts from scratch", "High: website, social, print and ads all follow one system"],
      ],
    },
    benefits: [
      "Recognition: a consistent identity makes your business memorable at a glance.",
      "Credibility: a professional brand helps you compete with established players.",
      "Consistency: guidelines keep every post, page and print item on-brand.",
      "Speed: ready-made templates make future content faster to produce.",
    ],
    faqs: [
      {
        q: "Is a logo the same as a brand?",
        a: "No. A logo is one mark; a brand is how people experience your business at every touchpoint, from colours and typography to tone of voice. A brand identity system ties these together so your business looks consistent everywhere. Our article on why your logo is not your brand explains this in detail.",
      },
      {
        q: "What do I receive at the end of a branding project?",
        a: "You receive your logo in the formats you need for web and print, plus a colour palette, typography choices and a brand guide explaining how to use them. Depending on scope, we also deliver stationery, social media templates and mockups that show the identity in use.",
      },
      {
        q: "Can you refresh my existing logo instead of starting over?",
        a: "Yes. If your current logo already has recognition you want to keep, we can modernise it by refining shapes, colours and typography while preserving what customers know. If the brand needs a bigger shift, we'll explain why before designing a new identity.",
      },
      {
        q: "How long does a brand identity project take?",
        a: "It depends on how many concepts and assets you need. For Waggish Travels, we designed the complete brand identity together with their travel website in under three weeks. We agree a clear schedule with you before any design work starts.",
      },
    ],
    relatedPosts: ["logo-is-not-your-brand"],
    relatedServices: ["graphic-design", "ui-ux-design", "web-development"],
    relatedCaseStudies: ["waggish-travels", "kc-ghosh-associates"],
  },
  {
    slug: "graphic-design",
    priceName: "banner design",
    name: "Graphic Design",
    metaTitle: "Graphic Design Company Kolkata: Banners ₹199",
    metaDescription:
      "Social media graphics, banners, posters, presentations and print design from SO Digital in Kolkata: on-brand visuals people remember.",
    h1: "Graphic, Banner and Packaging Design Company in Kolkata",
    summary: "Social media graphics, banners, posters, and print materials that make your brand unforgettable.",
    intro:
      "Graphic design is visual communication: arranging images, type and colour so your message is understood at a glance. SO Digital creates social media graphics, banners, posters, presentations and print materials that stay consistent with your brand and make people stop and pay attention.",
    image: "/images/work/graphic-design-collage.webp",
    imageAlt: "Posters and ad creatives SO Digital designed for Sougato Edutorial, SC Solar and Blue Gen",
    deliverables: [
      "Packaging and label design for products sold in stores and online",
      "Website banners, e-commerce sale banners and festival campaign creatives",
      "Product ad creatives and benefit infographics for e-commerce and FMCG brands",
      "Social media posts, carousels and stories",
      "Website and ad banners",
      "Posters, flyers and brochures",
      "Pitch decks and presentations",
      "Print-ready files with correct sizes and bleed",
      "Reusable templates for your team",
    ],
    process: [
      { title: "Brief", text: "You tell us what the design is for, where it will appear and what it needs to say." },
      { title: "Design", text: "We create on-brand options built around a clear message and a single call to action." },
      { title: "Feedback", text: "We refine the design with your comments until it's ready to publish or print." },
      { title: "Final files", text: "You receive web-optimised and print-ready files in the formats you need." },
    ],
    sections: [
      {
        id: "banner-design-price",
        h2: "Banner design price in Kolkata: from ₹199",
        paras: [
          "Most designers in Kolkata don't publish what a banner costs. We do: social media banners and post designs start at just ₹199 each. Bigger formats such as hoardings, flex banners and standees, and designs that need illustration or heavy photo editing, are quoted upfront before we start.",
        ],
      },
      {
        id: "poster-design",
        h2: "Poster and admission poster design",
        paras: [
          "From admission posters for coaching institutes to event and offer posters for shops, we design posters that read in a second, in English, Bengali or Hindi, sized for print, WhatsApp and Instagram.",
        ],
      },
      {
        id: "packaging-design",
        h2: "Packaging and label design in Kolkata",
        paras: [
          "Packaging and labels sell your product on the shelf and in marketplace thumbnails. We design pouches, boxes, jars and labels that stand out on the shelf and print correctly.",
        ],
      },
    ],
    benefits: [
      "Stand out in busy feeds with visuals designed to stop the scroll.",
      "Look consistent across every platform and printed piece.",
      "Communicate faster: good design makes your message clear in seconds.",
      "Publish more easily with templates your team can reuse.",
    ],
    faqs: [
      {
        q: "Do you design banners for websites, e-commerce sales and festivals?",
        a: "Yes. We design website hero banners, sale and festival banners, ad creatives and product infographics, sized for your website, Instagram, Meta Ads, marketplaces, flex and print. We designed the full creative set for Blue Gen, an e-commerce tea brand.",
      },
      {
        q: "Do you design admission banners for coaching institutes?",
        a: "Yes. We design admission banners, result posters, batch timetables and festival greetings for coaching institutes and schools, for Instagram, WhatsApp, flex and print.",
      },
      {
        q: "What graphic design services do you offer?",
        a: "We design social media posts, carousels and stories, website and ad banners, posters, flyers, brochures, presentations and other print materials. Everything matches your brand identity, and we can create reusable templates so your team can publish consistent content between projects.",
      },
      {
        q: "Can you design social media content every month?",
        a: "Yes. Social media graphics are one of our most common projects, and they pair naturally with our video editing and Meta Ads services. Sougato Edutorial, for example, works with us on graphic design, video editing and paid ads together.",
      },
      {
        q: "Do you provide print-ready files?",
        a: "Yes. For print work we deliver high-resolution files in the formats printers ask for, with the correct dimensions and bleed, plus web-optimised versions for digital use. Tell us where the design will be printed and we'll prepare the files to match.",
      },
      { q: "What is the banner design price in Kolkata?", a: "At SO Digital, banner and social media post designs start at just ₹199 each. Large-format print banners, packaging, illustration-heavy designs and monthly social media packs are quoted upfront based on size and quantity." },
    ],
    relatedPosts: ["logo-is-not-your-brand", "video-content-strategy-for-brands"],
    relatedServices: ["logo-brand-identity", "video-editing", "meta-ads"],
    relatedCaseStudies: ["blue-gen", "sougato-edutorial"],
  },
  {
    slug: "seo-geo-aeo",
    priceName: "SEO",
    name: "SEO, GEO & AEO",
    metaTitle: "SEO & AI SEO Company in Kolkata",
    metaDescription:
      "SEO, GEO and AEO services in Kolkata from SO Digital: rank on Google, get cited by ChatGPT and Perplexity, and win featured snippets.",
    h1: "SEO & AI SEO Company in Kolkata for Google and AI Search",
    summary: "Dominate search engines, AI-powered answer engines, and local/global discovery with our multi-layer SEO strategy.",
    intro:
      "SEO (search engine optimisation) helps your website rank in Google and Bing. GEO (generative engine optimisation) helps AI search tools like ChatGPT, Perplexity and Google's AI Overviews cite your brand in their answers. AEO (answer engine optimisation) structures your content so search engines and voice assistants can lift a direct answer. SO Digital runs all three as one multi-layer strategy.",
    deliverables: [
      "Technical SEO audits and fixes",
      "Keyword research and content strategy",
      "On-page optimisation: titles, headings, internal links and images",
      "Structured data (schema.org) markup",
      "Local SEO and Google Business Profile optimisation",
      "AI search (GEO) optimisation for ChatGPT, Perplexity and AI Overviews",
      "FAQ and answer-ready content for featured snippets and voice search",
    ],
    process: [
      { title: "Audit", text: "We review your site's technical health, content, structured data and how search and AI engines currently see your brand." },
      { title: "Strategy", text: "We map the keywords and questions your customers search for to the pages that should answer them." },
      { title: "Implement", text: "We fix technical issues, optimise pages and add structured data and internal links." },
      { title: "Content", text: "We create and improve content built to rank, to be cited by AI engines and to win featured snippets." },
      { title: "Measure", text: "We track rankings, traffic and enquiries, and keep refining what works." },
    ],
    comparison: {
      title: "SEO vs GEO vs AEO: what's the difference?",
      intro: "All three help customers find you, but each one targets a different place where answers appear. A strong strategy runs them together, because the same clear, trustworthy content feeds all three.",
      columns: ["", "SEO", "GEO", "AEO"],
      rows: [
        ["Goal", "Rank your pages in Google and Bing results", "Get your brand named and cited in AI answers", "Be the single direct answer people see or hear"],
        ["Where you appear", "Organic results and the Google Maps local pack", "ChatGPT, Perplexity, Gemini, Copilot and Google AI Overviews", "Featured snippets, People Also Ask and voice assistants"],
        ["What matters most", "Relevance, technical health, content quality and links", "Clear facts, consistent business details and mentions on trusted sites", "Question-led headings and short, precise answers"],
        ["How you measure it", "Rankings, organic traffic and enquiries", "Brand mentions and citations in AI answers", "Snippet and answer-box visibility"],
      ],
    },
    sections: [
      {
        id: "seo-price-kolkata",
        h2: "Affordable SEO in Kolkata, from ₹1,999 a month",
        paras: [
          "SEO plans start at just ₹1,999 a month for a starter local SEO plan, and every plan begins with a free SEO audit report of your website, so you see exactly what's holding it back before you pay.",
        ],
        links: [{ href: "/free-seo-audit", label: "Get your free SEO audit report" }],
      },
      {
        id: "seo-across-india",
        h2: "SEO and AI SEO for businesses across India",
        paras: [
          "Not in Kolkata? We also run SEO and AI search optimisation remotely for businesses anywhere in India.",
        ],
        links: [
          { href: "/services/seo-services-india", label: "Affordable SEO services in India" },
          { href: "/services/ai-seo-services-india", label: "AI SEO services across India" },
        ],
      },
    ],
    benefits: [
      "Be found on Google when customers search for what you offer.",
      "Be cited by AI assistants that increasingly answer questions directly.",
      "Win featured snippets and voice answers with question-led content.",
      "Show up locally when people near you search for your services.",
    ],
    faqs: [
      {
        q: "How much does SEO cost in Kolkata?",
        a: "SO Digital's SEO services start at just ₹1,999 a month for a starter local SEO plan. Plans grow with the number of pages, keywords and locations you want to rank for, and every plan starts with a free SEO audit report.",
      },
      {
        q: "Do you do SEO for e-commerce websites?",
        a: "Yes. E-commerce SEO covers product and category pages, product structured data, internal linking, site speed and buying guides, so your store wins searches that marketplaces don't target and appears in AI shopping answers.",
      },
      {
        q: "Which industries do you do SEO for?",
        a: "We do SEO for e-commerce brands, coaching institutes and edtech, solar and renewable energy companies, automobile and car care businesses, travel agencies, retail and fashion stores, FMCG brands and consultancies, with industry-specific pages and keywords for each.",
      },
      {
        q: "What is AI SEO, and do you offer it in Kolkata?",
        a: "AI SEO means optimising your business so AI search tools such as ChatGPT, Perplexity, Gemini and Google's AI Overviews understand it and recommend it. It combines GEO and AEO with classic SEO: clear facts about what you do and where, consistent business details across the web, and pages that answer customers' questions directly. SO Digital offers AI SEO to Kolkata businesses as part of every SEO plan.",
      },
      {
        q: "How do I get my business recommended by ChatGPT?",
        a: "ChatGPT search draws on Bing's index and on sources it trusts, so start with the basics: a fast, crawlable website, a verified Google Business Profile and Bing Places listing, the same name, phone and address everywhere, reviews, and listings on directories such as Clutch, GoodFirms and Justdial. Pages that answer specific questions in plain language are the ones AI assistants quote.",
      },
      {
        q: "Will AI replace SEO?",
        a: "No. AI search tools still rely on websites to find, verify and cite information, and Google describes optimising for its AI features as SEO. What changes is the goal: being the trusted source an AI quotes, not just a blue link. That's why we run SEO, GEO and AEO together.",
      },
      {
        q: "What is GEO (Generative Engine Optimisation)?",
        a: "Generative Engine Optimisation is the practice of optimising your content and brand presence so AI-powered search tools such as ChatGPT, Perplexity, Google's AI Overviews and Microsoft Copilot cite you in their answers. It relies on clear facts, structured data, expert authorship and mentions of your brand on trusted third-party sites.",
      },
      {
        q: "What is AEO (Answer Engine Optimisation)?",
        a: "Answer Engine Optimisation targets featured snippets, People Also Ask boxes and voice assistants that return a single direct answer. It means structuring content around the exact questions people ask, answering them concisely near the top of the page, and keeping your business details consistent everywhere online.",
      },
      {
        q: "How long does SEO take to show results?",
        a: "SEO is a long-term channel. Technical fixes are picked up as soon as search engines recrawl your pages, but meaningful ranking gains usually build over several months as content, authority and reviews grow. Anyone promising instant first-page rankings is overselling; we focus on steady, measurable progress.",
      },
      {
        q: "Do you offer local SEO in Kolkata?",
        a: "Yes. Local SEO helps you appear when people nearby search for your services. We optimise your Google Business Profile, keep your name, address and phone number consistent across the web, add local structured data and create location-relevant content for your website.",
      },
    ],
    relatedPosts: ["seo-geo-aeo-future-of-digital-discovery", "google-my-business-guide-kolkata", "how-to-choose-digital-marketing-agency-kolkata"],
    relatedServices: ["google-business-profile", "web-development", "seo-services-india", "ai-seo-services-india"],
    relatedCaseStudies: [],
  },
  {
    slug: "meta-ads",
    name: "Meta Ads",
    metaTitle: "Meta Ads Agency in Kolkata (Facebook & Insta)",
    metaDescription:
      "Facebook and Instagram ads from SO Digital in Kolkata: audience targeting, retargeting and creative testing that make every rupee count.",
    h1: "Meta Ads Agency in Kolkata: Facebook & Instagram Ads That Bring Enquiries",
    summary: "Data-driven Facebook & Instagram campaigns that target the right audience and maximise every rupee spent.",
    intro:
      "Meta Ads are paid campaigns that run across Facebook, Instagram and Meta's partner network, targeting people by interests, behaviour and location. SO Digital plans, creates and manages Meta Ads campaigns that reach the right audience, test creatives systematically and make every rupee of ad spend work harder.",
    image: "/images/work/meta-ads-collage.webp",
    imageAlt: "Meta Ads creatives SO Digital designed for SC Solar, Sougato Edutorial and Blue Gen",
    deliverables: [
      "Campaign strategy and funnel planning",
      "Audience research and targeting",
      "Retargeting campaigns for warm audiences",
      "Ad creative design and video ad editing",
      "Structured creative testing",
      "Pixel and conversion tracking setup",
      "Performance reporting and ongoing optimisation",
    ],
    process: [
      { title: "Strategy", text: "We define the goal, audience, offer and budget, and how each stage of the funnel will be measured." },
      { title: "Creative", text: "We produce several creative angles in graphics and video, written to hook attention fast." },
      { title: "Launch", text: "We set up tracking, audiences and campaigns, starting with structured tests." },
      { title: "Optimise", text: "We move budget toward the ads and audiences that deliver, and refresh creative before it fatigues." },
    ],
    results: { client: "Sougato Edutorial", caseStudy: "sougato-edutorial", points: ["Consistent 4.8x return on ad spend from Meta Ads", "Student enquiries tripled"] },
    // Ads Manager screenshots supplied by SO Digital as proof of work (16 Oct to 14 Nov 2026)
    proof: {
      title: "Proof of work: our Meta Ads campaigns in Ads Manager",
      intro:
        "Screenshots from Meta Ads Manager of Facebook and Instagram campaigns we run for our clients, last 30 days (16 October to 14 November 2026). Tap any screenshot to see it full size.",
      items: [
        {
          src: "/images/work/meta-ads/meta-ads-manager-coaching-institute.webp",
          thumb: "/images/work/meta-ads/meta-ads-manager-coaching-institute-840.webp",
          width: 1672,
          height: 941,
          client: "Coaching institute, West Bengal",
          kind: "13 Meta Ads campaigns",
          alt: "Meta Ads Manager screenshot of 13 Facebook and Instagram campaigns for a West Bengal coaching institute (WBBSE, CBSE and ICSE students, mock tests, new batch admissions), 16 October to 14 November 2026, showing link clicks, calls placed, cost per result, budget, reach and impressions",
        },
        {
          src: "/images/work/meta-ads/meta-ads-manager-education-sales.webp",
          thumb: "/images/work/meta-ads/meta-ads-manager-education-sales-840.webp",
          width: 1672,
          height: 941,
          client: "Education: sales and awareness",
          kind: "11 Meta Ads campaigns",
          alt: "Meta Ads Manager screenshot of 11 sales, awareness, website promotion and boosted-post campaigns for an education brand, last 30 days to 14 November 2026, showing link clicks, calls placed, follows, cost per result, reach and impressions",
        },
        {
          src: "/images/work/meta-ads/meta-ads-manager-admissions.webp",
          thumb: "/images/work/meta-ads/meta-ads-manager-admissions-840.webp",
          width: 1672,
          height: 941,
          client: "Education: admissions",
          kind: "10 Meta Ads campaigns",
          alt: "Meta Ads Manager screenshot of 10 admissions campaigns (MBA lead calls, CAT webinar registrations, mock test sign-ups, remarketing to interested students and WhatsApp enquiries), 16 October to 14 November 2026, with results, cost per result, budget, reach and impressions",
        },
        {
          src: "/images/work/meta-ads/meta-ads-manager-blue-gen.webp",
          thumb: "/images/work/meta-ads/meta-ads-manager-blue-gen-840.webp",
          width: 1672,
          height: 941,
          client: "Blue Gen herbal tea",
          kind: "10 Meta Ads campaigns",
          alt: "Meta Ads Manager screenshot of 10 Blue Gen herbal tea campaigns (brand awareness, offers, customer reviews, Instagram promotion and website-visitor remarketing), 16 October to 14 November 2026, with link clicks, calls placed, Instagram profile visits, reach, frequency and cost per result",
        },
        // PLACEHOLDERS until launch: these three images are labelled "SAMPLE MOCKUP | ILLUSTRATIVE METRICS".
        // The owner will replace them with real Ads Manager screenshots before go-live (see seo-audit/LAUNCH-CHECKLIST.md).
        // Keep the label and these captions while the sample images are in use.
        {
          src: "/images/work/meta-ads/sample-meta-ads-biswas-kc-ghosh.webp",
          thumb: "/images/work/meta-ads/sample-meta-ads-biswas-kc-ghosh-840.webp",
          width: 1672,
          height: 941,
          client: "Biswas Retail Group & KC Ghosh",
          kind: "Sample mockup, illustrative metrics",
          alt: "Sample mockup of a Meta Ads Manager dashboard with illustrative metrics for Biswas Retail Group and Partner KC Ghosh campaigns: weekend sale, retargeting, customer reviews, calls, store visits and combo offers",
        },
        {
          src: "/images/work/meta-ads/sample-meta-ads-biswas-retail-group.webp",
          thumb: "/images/work/meta-ads/sample-meta-ads-biswas-retail-group-840.webp",
          width: 1672,
          height: 941,
          client: "Biswas Retail Group",
          kind: "Sample mockup, illustrative metrics",
          alt: "Sample mockup of a Meta Ads Manager dashboard with illustrative metrics for Biswas Retail Group: festive sales, website promotion, remarketing, store visits, catalogue sales and customer loyalty campaigns",
        },
        {
          src: "/images/work/meta-ads/sample-meta-ads-kc-ghosh.webp",
          thumb: "/images/work/meta-ads/sample-meta-ads-kc-ghosh-840.webp",
          width: 1672,
          height: 941,
          client: "Partner KC Ghosh",
          kind: "Sample mockup, illustrative metrics",
          alt: "Sample mockup of a Meta Ads Manager dashboard with illustrative metrics for Partner KC Ghosh: lead, sales, WhatsApp, brand awareness, retargeting and lookalike audience campaigns",
        },
      ],
    },
    benefits: [
      "Reach the right people by interest, behaviour and location.",
      "Know your numbers: every campaign is tracked to enquiries or sales.",
      "Scale what works: testing shows where extra budget pays off.",
      "Creative and media buying in one team, so ideas reach the market faster.",
    ],
    faqs: [
      {
        q: "Do Meta Ads work for lead generation in solar and renewable energy?",
        a: "Yes. Lead forms or click-to-WhatsApp ads with qualifying questions and video creatives work well for solar companies. We run Meta Ads lead generation for SC Solar.",
      },
      {
        q: "What is ROAS and what is a good ROAS for Meta Ads?",
        a: "ROAS (return on ad spend) is the revenue your ads generate for every rupee spent, so a 3x ROAS means ₹3 back for each ₹1. A good ROAS depends on your margins and business model. For one of our clients, Sougato Edutorial, Meta Ads now generate a consistent 4.8x ROAS.",
      },
      {
        q: "Do you create the ads as well as run them?",
        a: "Yes. We handle strategy, audience targeting, ad copy, graphic and video creatives, campaign setup and ongoing optimisation. Keeping creative and media buying in one team means we can test new creative angles quickly and put more budget behind what works.",
      },
      {
        q: "How much should I spend on Meta Ads?",
        a: "There's no single right budget; it depends on your goals, audience size and how much a customer is worth to you. A sensible approach is to start with a budget large enough for meaningful testing, then scale the ads and audiences that prove profitable. We'll suggest a starting point for your business.",
      },
      {
        q: "Do you run Instagram ads too?",
        a: "Yes. Meta Ads covers both Facebook and Instagram, including Instagram Feed, Stories and Reels placements. We design creatives in the right formats for each placement, so your ads look native on every surface instead of like resized posters.",
      },
    ],
    relatedPosts: ["how-to-choose-digital-marketing-agency-kolkata", "video-content-strategy-for-brands"],
    relatedServices: ["google-ads", "video-editing", "graphic-design", "lead-generation"],
    relatedCaseStudies: ["sui-dhaga", "sougato-edutorial", "sc-solar"],
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    metaTitle: "Google Ads & PPC Agency in Kolkata",
    metaDescription:
      "Google Search, Display, YouTube and Shopping ads from SO Digital in Kolkata, built for high-intent leads, online sales and ROAS growth.",
    h1: "Google Ads Agency in Kolkata: PPC Management for Leads and Sales",
    summary: "High-intent Google Search, Display, and YouTube campaigns engineered for leads, sales, and ROAS growth.",
    intro:
      "Google Ads lets your business appear at the moment people search for what you offer, as well as on YouTube and across the websites in Google's Display network. SO Digital builds and manages high-intent Search, Display, YouTube and Shopping campaigns engineered for leads, sales and return on ad spend.",
    deliverables: [
      "Search campaigns and keyword research",
      "Display and remarketing campaigns",
      "YouTube video ads",
      "Shopping campaigns for e-commerce",
      "Conversion tracking with Google Ads and Google Analytics 4",
      "Bid, budget and keyword optimisation",
      "Landing page recommendations",
    ],
    process: [
      { title: "Research", text: "We find the searches your customers make and estimate what each lead or sale is worth." },
      { title: "Build", text: "We structure campaigns, write ads and set up conversion tracking before spending a rupee." },
      { title: "Launch", text: "We go live with tight targeting and negative keywords that block wasted clicks." },
      { title: "Optimise", text: "We adjust bids, keywords, ads and budgets toward the campaigns that bring results." },
    ],
    results: { client: "Biswas Retail Group", caseStudy: "biswas-retail-group", points: ["Cost per lead cut by 40%", "Lead volume doubled"] },
    comparison: {
      title: "Google Ads vs Meta Ads: which is right for you?",
      intro: "The short answer: Google Ads captures people who are already searching, while Meta Ads creates demand among people who aren't searching yet. Many Kolkata businesses run both.",
      columns: ["", "Google Ads", "Meta Ads (Facebook & Instagram)"],
      rows: [
        ["Buyer intent", "High: people are actively searching for your service", "Lower: people discover you while scrolling"],
        ["Targeting", "Keywords, location and time of search", "Interests, behaviour, demographics, location and lookalikes"],
        ["Best for", "Urgent or high-value services, local leads and sales", "Awareness, new products, visual brands and retargeting"],
        ["Formats", "Search text ads, Display, YouTube, Shopping and Performance Max", "Images, carousels, Reels, Stories and lead forms"],
        ["Typical goal", "Calls, enquiries and purchases at a target cost", "Reach, engagement, leads and sales at scale"],
      ],
    },
    benefits: [
      "Capture demand: appear exactly when people search for your service.",
      "Pay for results: campaigns are optimised toward leads and sales, not clicks.",
      "Reach across Google: Search, YouTube, Display and Shopping from one plan.",
      "Clear reporting on what your budget is producing.",
    ],
    faqs: [
      {
        q: "What types of Google Ads campaigns do you manage?",
        a: "We manage Search campaigns that appear on Google results, Display and remarketing campaigns across partner websites, YouTube video ads and Shopping campaigns for e-commerce products. We choose the mix based on your goals, whether that's leads, online sales or brand awareness.",
      },
      {
        q: "How do you reduce cost per lead on Google Ads?",
        a: "We tighten keyword targeting, add negative keywords to stop wasted clicks, improve ad relevance and landing pages, and move budget toward what converts. For Biswas Retail Group, our data-driven Google Ads management cut cost per lead by 40% while doubling lead volume.",
      },
      {
        q: "Should I use Google Ads or Meta Ads?",
        a: "Google Ads captures people who are already searching for your product or service, so it's strong for high-intent leads. Meta Ads reaches people based on interests and behaviour before they search, which suits awareness and creating demand. Many businesses get the best results running both together.",
      },
      {
        q: "Will you set up conversion tracking?",
        a: "Yes. Accurate tracking is the foundation of every campaign we run. We set up Google Ads conversion tracking and Google Analytics 4 so we can see which keywords, ads and campaigns produce enquiries or sales, and optimise toward results rather than clicks.",
      },
    ],
    relatedPosts: ["website-mistakes-killing-conversion-rate", "seo-geo-aeo-future-of-digital-discovery"],
    relatedServices: ["meta-ads", "seo-geo-aeo", "web-development"],
    relatedCaseStudies: ["biswas-retail-group"],
  },
  {
    slug: "app-development",
    showPrototypes: "App",
    name: "App Development",
    metaTitle: "App Development Company in Kolkata",
    metaDescription:
      "Android and iOS app development in Kolkata by SO Digital: strategy, UI/UX, cross-platform builds, admin panels and app store launch.",
    h1: "Android and iOS App Development Company in Kolkata",
    summary: "Android and iOS apps that feel fast and simple, from first prototype to Play Store and App Store launch.",
    intro:
      "App development is the process of planning, designing, building and launching a mobile application for Android, iOS or both. SO Digital is a Kolkata app development company that takes an idea from a clickable prototype to a published app, with the design, development, backend and launch marketing handled by one team. Apps we've developed include Tumyto, a tiffin service and food delivery app live on Google Play and the App Store.",
    image: "/images/work/app-prototype-screens.webp",
    imageAlt: "TravelSafe travel app prototype screens: onboarding and home (template-based demo)",
    deliverables: [
      "App strategy: core features, user flows and a realistic first version (MVP)",
      "App UI/UX design and clickable prototypes in Figma",
      "Android and iOS apps, including cross-platform builds from one codebase",
      "Backend, APIs and admin panels to manage users, orders and content",
      "Payments, notifications, maps, logins and other integrations",
      "Testing on real devices, then Google Play Store and Apple App Store submission",
      "Launch marketing with app store optimisation, Meta Ads and Google App campaigns",
    ],
    process: [
      { title: "Scope", text: "We turn your idea into a feature list, user flows and a first version that can launch quickly and be improved with real feedback." },
      { title: "Design", text: "We design every screen in Figma and share a clickable prototype, so you can tap through the app before a line of code is written." },
      { title: "Build", text: "We develop the app and its backend in short cycles, with test builds you can install on your own phone along the way." },
      { title: "Test & launch", text: "We test on real Android and iOS devices, fix issues, and handle the Play Store and App Store submission." },
      { title: "Grow", text: "After launch we track usage and crashes, ship updates and run campaigns that bring in new users." },
    ],
    comparison: {
      title: "Native vs cross-platform vs web app: which should you build?",
      columns: ["", "Native apps", "Cross-platform app", "Progressive web app (PWA)"],
      rows: [
        ["Codebase", "Separate apps for Android and iOS", "One codebase for Android and iOS", "One website that installs like an app"],
        ["Performance", "Best, with full access to device features", "Close to native for most business apps", "Good for content and simple tools"],
        ["Cost and time", "Highest", "Lower: one team builds both platforms", "Lowest"],
        ["App store listing", "Yes", "Yes", "Not required (optional on Android)"],
        ["Best for", "Games, heavy media and hardware-intensive apps", "Most business, booking, e-commerce and service apps", "Testing an idea quickly or extending a website"],
      ],
    },
    benefits: [
      "One team from idea to launch: strategy, design, development and marketing work from the same plan.",
      "Design first: a clickable prototype catches problems early, when changes are cheap.",
      "Built to grow: a clean codebase and admin panel make new features and updates straightforward.",
      "Launch with users, not silence: our ads and SEO teams plan how people will find the app.",
    ],
    faqs: [
      {
        q: "How much does it cost to build an app in Kolkata?",
        a: "App cost depends mainly on the number of screens and features, whether you need Android, iOS or both, and the backend involved (logins, payments, admin panel). A focused first version costs far less than a feature-packed app. Share your idea through the contact form and we'll reply within 24 hours with a scoped quote.",
      },
      {
        q: "Should I build for Android, iOS or both?",
        a: "In India most smartphone users are on Android, so many businesses launch there first. If your customers are spread across both platforms, a cross-platform build lets one codebase run on Android and iOS, which usually saves time and cost. We'll recommend the right option based on who your users are.",
      },
      {
        q: "How long does it take to develop a mobile app?",
        a: "A simple app with a handful of screens can be designed and built in a few weeks, while apps with payments, real-time features or complex admin tools take longer. We agree a timeline after scoping, and you get working test builds throughout, not just at the end.",
      },
      {
        q: "Do you also design the app and publish it to the stores?",
        a: "Yes. We design the interface, build the app and backend, and handle submission to the Google Play Store and Apple App Store, including store listings, screenshots and descriptions written to help people find the app.",
      },
      {
        q: "Can you turn my website into an app?",
        a: "Often, yes. If you already have a website or web app, we can reuse its content and backend so the mobile app shares the same data, logins and orders. We'll review your current setup and tell you what can be reused.",
      },
    ],
    relatedPosts: ["why-first-impressions-cost-customers", "website-mistakes-killing-conversion-rate"],
    relatedServices: ["web-development", "ui-ux-design", "google-ads"],
    relatedCaseStudies: ["tumyto", "waggish-travels", "kc-ghosh-associates"],
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    metaTitle: "Social Media Marketing Agency in Kolkata",
    metaDescription:
      "Social media marketing in Kolkata: Instagram, Facebook and LinkedIn management, Reels, content calendars and ads that bring in leads.",
    h1: "Social Media Marketing and Account Handling in Kolkata",
    summary: "Content calendars, Reels and community management that grow an engaged audience on Instagram, Facebook and LinkedIn.",
    intro:
      "Social media marketing is planning, creating and publishing content on platforms like Instagram, Facebook and LinkedIn, then growing reach with community management and paid promotion. SO Digital runs social media for Kolkata brands end to end: strategy, Reels and graphics, posting, replies and the ads that turn followers into enquiries.",
    image: "/images/sougata-testimonial.webp",
    imageAlt: "Sougato Edutorial Instagram profile designed and managed by SO Digital",
    deliverables: [
      "Social media audit and strategy for Instagram, Facebook and LinkedIn",
      "Monthly content calendars built around your offers, festivals and seasons",
      "Reels, short videos, carousels and post designs in your brand style",
      "Captions, hashtags and posting at the times your audience is active",
      "Complete Instagram, Facebook and LinkedIn account handling, end to end",
      "Comment and DM management so no enquiry is missed",
      "Profile and highlight optimisation that makes your page convert",
      "Boosted posts and Meta Ads to reach new local customers",
      "Monthly reports on reach, engagement, followers and leads",
    ],
    process: [
      { title: "Audit", text: "We review your profiles, competitors and audience to find what's working, what isn't and where the opportunities are." },
      { title: "Plan", text: "We build a monthly content calendar mixing education, proof, behind-the-scenes and offers, timed around Kolkata's festivals and your sales cycle." },
      { title: "Create", text: "Our designers and video editors produce Reels, carousels and posts, and you approve everything before it goes live." },
      { title: "Publish & engage", text: "We post on schedule, reply to comments and messages, and hand warm leads to your team quickly." },
      { title: "Report & improve", text: "Each month we show what grew reach and enquiries, then double down on the formats that work." },
    ],
    results: { client: "Sougato Edutorial", caseStudy: "sougato-edutorial", points: ["Organic reach tripled within 60 days", "Student enquiries tripled", "Consistent 4.8x return on ad spend from Meta Ads"] },
    comparison: {
      title: "Organic social media vs paid social ads",
      intro: "Organic content builds trust with people who already follow you; paid ads put your best content in front of new people. The strongest results come from using both together.",
      columns: ["", "Organic social media", "Paid social (Meta Ads)"],
      rows: [
        ["What it is", "Posts, Reels and stories published to your followers", "Ads and boosted posts shown to audiences you choose"],
        ["Reach", "Mostly existing followers and their networks", "Anyone matching your targeting, including new customers"],
        ["Speed", "Builds gradually over months", "Immediate once campaigns go live"],
        ["Best for", "Trust, community and brand personality", "Leads, sales, launches and retargeting website visitors"],
      ],
    },
    reelsTitle: "Social media content we've created for clients",
    sections: [
      {
        id: "account-handling",
        h2: "Instagram and Facebook account handling in Kolkata: what's included",
        list: [
          "A monthly content calendar planned around your offers, festivals and seasons",
          "Post, carousel and story designs, plus reels edited from your footage or our shoots",
          "Captions and hashtags in English, Bengali or Hindi",
          "Scheduling and posting at the times your audience is active",
          "Replying to comments and DMs, or passing hot leads straight to you",
          "Profile optimisation: bio, highlights and links",
          "A monthly report on reach, followers, engagement and enquiries",
        ],
        links: [
          { href: "/services/graphic-design", label: "Banner designs from ₹199" },
          { href: "/services/video-editing", label: "Reel editing from ₹299" },
        ],
      },
    ],
    benefits: [
      "Consistency without the stress: a planned calendar means your brand never goes quiet.",
      "Content that converts: every post has a job, from building trust to driving enquiries.",
      "Design and video in-house: Reels, graphics and edits come from the same team that plans them.",
      "Organic and paid together: we promote the posts that already perform, so ad budgets work harder.",
    ],
    faqs: [
      {
        q: "Do you handle our Instagram and Facebook accounts completely?",
        a: "Yes. Our account handling covers strategy, the content calendar, design and Reels, posting, replies to comments and DMs, profile optimisation and monthly reports, so you don't have to manage your pages day to day.",
      },
      {
        q: "What does a social media marketing agency do?",
        a: "A social media agency plans your content strategy, designs and edits posts and Reels, publishes on a schedule, manages comments and messages, runs paid promotions and reports on results each month. The goal is a steady flow of reach, trust and enquiries, without you having to post every day yourself.",
      },
      {
        q: "Which platforms should my Kolkata business be on?",
        a: "For most local consumer brands, Instagram and Facebook matter most, with Reels driving reach. B2B companies, consultants and professional firms usually get better leads from LinkedIn. We recommend platforms based on where your customers actually spend time, rather than trying to be everywhere.",
      },
      {
        q: "How many posts per month do you create?",
        a: "It depends on your goals and budget. A typical plan mixes several Reels with carousels and single-image posts each month, plus stories. We'd rather publish fewer, better posts consistently than many weak ones, and we'll agree the exact mix in your plan.",
      },
      {
        q: "How much do social media marketing services cost in Kolkata?",
        a: "Cost depends on the number of platforms, how many Reels and posts you need each month, whether shoots are included and your ad budget. Tell us your goals through the contact form and we'll send a tailored monthly plan within 24 hours.",
      },
      {
        q: "Do you also shoot the photos and videos?",
        a: "Yes. Our videography and photo shoot team can shoot product photos, Reels and brand videos in Kolkata, and our editors turn that footage into a month of content.",
      },
    ],
    relatedPosts: ["video-content-strategy-for-brands", "how-to-choose-digital-marketing-agency-kolkata"],
    relatedServices: ["meta-ads", "videography-reels-shoots", "graphic-design"],
    relatedCaseStudies: ["sougato-edutorial", "biswas-retail-group"],
  },
  {
    slug: "google-business-profile",
    name: "Google Business Profile",
    metaTitle: "Google My Business Optimisation, Kolkata",
    metaDescription:
      "Google My Business (GMB) setup and optimisation in Kolkata by SO Digital. Rank in the Google Maps local pack with posts, photos, reviews.",
    h1: "Google My Business (Google Business Profile) Optimisation in Kolkata",
    summary: "Show up on Google Maps and the local 3-pack: GMB setup, optimisation, posts and a steady review strategy.",
    intro:
      "Google Business Profile (formerly Google My Business, or GMB) is the free listing that shows your business on Google Maps and in the local results when people search for services near them. SO Digital sets up, verifies and optimises profiles for Kolkata businesses so they appear in the map pack and turn searches into calls, directions and enquiries, like the profile we created and maintain for Carbonex, rated 4.8★ from 32 Google reviews.",
    image: "/images/work/carbonex-gmb-hero.webp",
    imageAlt: "Carbonex's live Google Business Profile, created and maintained by SO Digital: 4.8 stars from 32 reviews, plus its Google posts in English, Hindi and Bengali",
    results: { client: "Carbonex", caseStudy: "carbonex", points: ["Google Business Profile created and maintained by SO Digital", "4.8★ Google rating from 32 reviews (November 2026)", "Regular Google posts in English, Hindi and Bengali", "Call, WhatsApp and directions buttons for a South Dumdum workshop"] },
    reelsTitle: "Google Business Profiles we manage",
    deliverables: [
      "Google Business Profile creation, claiming and verification support",
      "Primary and secondary category selection based on what customers search",
      "Business description, services, products and service areas across Kolkata",
      "Photo and video uploads that show your work, team and premises",
      "Weekly Google posts for offers, updates and events",
      "Review generation strategy, plus professional replies to every review",
      "Q&A, messaging and call tracking set-up",
      "Consistent name, address and phone (NAP) across directories like Justdial and Sulekha",
      "Local SEO for your website so your profile and site support each other",
    ],
    process: [
      { title: "Audit", text: "We check your current profile (or create one), your categories, competitors in the map pack and how consistent your details are across the web." },
      { title: "Optimise", text: "We complete every field, choose the right categories, write your description and services, and upload strong photos." },
      { title: "Reviews", text: "We set up a simple way for happy customers to leave reviews and reply to every review on your behalf." },
      { title: "Post & maintain", text: "We publish regular posts, answer questions and keep hours, offers and photos current." },
      { title: "Measure", text: "We track calls, direction requests, website clicks and where you rank on the map, and report monthly." },
    ],
    benefits: [
      "Be found by nearby customers at the moment they're ready to call or visit.",
      "More calls and direction requests straight from Google Search and Maps.",
      "Trust before the first conversation: reviews and photos do the selling for you.",
      "Free visibility: unlike ads, your profile keeps working without paying per click.",
    ],
    faqs: [
      {
        q: "What is Google Business Profile and is it the same as GMB?",
        a: "Yes. Google Business Profile is the current name for Google My Business (GMB). It's the free listing that appears on Google Maps and in local search results, showing your hours, phone number, reviews, photos and services.",
      },
      {
        q: "How do I rank higher on Google Maps in Kolkata?",
        a: "Google ranks local results on relevance, distance and prominence. You improve relevance with the right categories and a complete profile, and prominence with genuine reviews, regular posts, photos, consistent business details across the web and a website with strong local SEO. Distance depends on where the searcher is, which is why accurate service areas matter.",
      },
      {
        q: "How long does GMB optimisation take to show results?",
        a: "Fixes like categories, descriptions and photos can start helping within weeks of Google re-processing your profile. Ranking in the map pack for competitive Kolkata searches usually builds over a few months as reviews and activity grow.",
      },
      {
        q: "Can you get my business verified on Google?",
        a: "We guide you through Google's verification process (often a video recording or phone check) and prepare everything Google asks for. The final verification step has to be completed by the business owner, but we make it straightforward.",
      },
      {
        q: "Do I need a website if I have a Google Business Profile?",
        a: "A profile alone can bring calls, but a website gives Google more information to trust and rank you, and gives customers a place to compare services and enquire. Linking an optimised website to your profile usually strengthens both.",
      },
    ],
    relatedPosts: ["google-my-business-guide-kolkata", "seo-geo-aeo-future-of-digital-discovery"],
    relatedServices: ["seo-geo-aeo", "web-development", "social-media-marketing"],
    relatedCaseStudies: ["carbonex", "sougato-edutorial", "kc-ghosh-associates"],
  },
  {
    slug: "videography-reels-shoots",
    name: "Videography & Photo Shoots",
    metaTitle: "Corporate Video Production Company Kolkata",
    metaDescription:
      "Corporate videos, factory and product shoots, expo coverage and Reels shoots in Kolkata by SO Digital: concept, shoot and edit by one team.",
    h1: "Corporate Video Production, Brand Shoots and Reels Shoots in Kolkata",
    summary: "Corporate videos, brand films and Reels shoots in Kolkata, planned, shot and edited by one team.",
    intro:
      "Corporate video production is planning, shooting and editing videos that present a business: brand films, company profiles, founder stories, testimonials and the short Reels that keep social channels busy. SO Digital shoots in Kolkata and edits in-house, so every video is planned for where it will run, from LinkedIn and your website to Instagram and Meta ads.",
    image: "/images/work/fortune-hero.webp",
    imageAlt: "Frames from SO Digital's expo and activation videos for Fortune at IndusFood 2026 and BIB Expo",
    deliverables: [
      "Reels and short-form video shoots for Instagram and YouTube Shorts",
      "Brand films and company profile videos",
      "Corporate and team shoots, founder interviews and office walkthroughs",
      "Customer testimonial videos",
      "Monthly Reels shoot days that produce a month of content in one session",
      "Expo, trade show and event coverage, like our videos from Fortune's stalls at IndusFood 2026",
      "Product videos for e-commerce listings and ads",
      "Concept, script, shot list and on-shoot direction",
      "Editing, colour grading, captions and exports for every platform",
    ],
    process: [
      { title: "Concept", text: "We agree the purpose, audience and platforms, then write the concept, script and shot list so the shoot day has a clear plan." },
      { title: "Pre-production", text: "We plan locations around Kolkata, props, people and timing, and share a call sheet before the shoot." },
      { title: "Shoot", text: "Our team shoots your products, people or premises, capturing extra angles and vertical footage for Reels." },
      { title: "Edit", text: "Our editors cut, colour-grade and caption the footage and retouch photos in your brand style." },
      { title: "Deliver", text: "You receive platform-ready files: 9:16 Reels, 1:1 and 4:5 posts, 16:9 films and web-optimised photos." },
    ],
    reelsTitle: "Shoots we've produced: expos, factories and brand activations",
    sections: [
      {
        id: "factory-shoots",
        h2: "Factory and industrial video shoots",
        paras: [
          "We filmed inside SC Solar's factory for their brand film, product reel and behind-the-scenes content. Factory shoots need planning around production schedules and safety rules, so we plan the shot list with your team, shoot with minimal disruption and turn one day of footage into a brand film plus a month of reels.",
        ],
        links: [{ href: "/works/sc-solar", label: "SC Solar case study" }],
      },
      {
        id: "expo-shoots",
        h2: "Expo, trade show and event video coverage",
        paras: [
          "We shot Fortune (AWL Agri Business) at IndusFood 2026 and BIB Expo: stall films, brand activation reels and visitor moments, edited fast enough to post while the event is still running.",
        ],
        links: [{ href: "/works/fortune-awl", label: "Fortune expo videos case study" }],
      },
      {
        id: "product-video",
        h2: "Product and e-commerce video shoots",
        paras: [
          "Short product videos for your website, marketplace listings and ads: unboxing, how-to-use and lifestyle clips, shot in Kolkata and edited for each platform.",
        ],
        links: [{ href: "/services/product-photography", label: "Product photography" }],
      },
    ],
    benefits: [
      "One team from shoot to post: footage is planned with the edit and the ad campaign in mind.",
      "Content for a month, not one post: each shoot is planned to produce many assets.",
      "Better ads: real, on-brand visuals usually outperform stock images and generic templates.",
      "Faster websites: we deliver photos already compressed in modern formats like WebP.",
    ],
    faqs: [
      {
        q: "Do you shoot product videos for e-commerce brands?",
        a: "Yes. We shoot short product videos, how-to-use clips and Reels for e-commerce listings, ads and social media, and can pair them with product photography in the same shoot.",
      },
      {
        q: "Do you cover expos, trade shows and brand activations?",
        a: "Yes. We produced stall films and activation reels for Fortune at IndusFood 2026 and BIB Expo, and we film on location at factories and offices, as we did for SC Solar.",
      },
      {
        q: "What is corporate video production?",
        a: "Corporate video production is making videos that represent a business: company profiles, brand films, founder messages, client testimonials, training and recruitment videos, and short social clips. A good corporate video tells one clear story for one audience, and is cut into shorter versions for each platform.",
      },
      {
        q: "How long should a corporate video be?",
        a: "Most company profile and brand films work best at 60 to 120 seconds, with 15 to 30 second cut-downs for social media and ads. Testimonials and founder stories can run a little longer if the story holds attention. We plan the length around where the video will be watched.",
      },
      {
        q: "Should Reels be shot on a phone or a camera?",
        a: "Both work. Modern phones are great for fast, authentic Reels, while a cinema camera, lenses and proper lighting give brand films and ads a more premium look. We often combine the two on a shoot day so you get polished hero content and native-feeling Reels.",
      },
      {
        q: "Can you shoot Reels for my brand's Instagram?",
        a: "Yes. We plan Reels around hooks and trends that suit your brand, shoot vertical footage in Kolkata and edit it into ready-to-post Reels. Many clients combine a monthly shoot with our social media management.",
      },
      {
        q: "How much does a corporate video or Reels shoot cost in Kolkata?",
        a: "It depends on the shoot length, number of locations and people, equipment and how many final edits you need. A monthly Reels shoot day costs much less than a multi-location brand film. Tell us what you need and we'll send a quote within 24 hours.",
      },
      {
        q: "Do you also edit footage we've already shot?",
        a: "Yes. If you already have footage, our video editing team can turn it into Reels, ads and brand videos without a new shoot.",
      },
    ],
    relatedPosts: ["video-content-strategy-for-brands", "why-first-impressions-cost-customers"],
    relatedServices: ["video-editing", "wedding-videography", "drone-shoots", "product-photography", "social-media-marketing"],
    relatedCaseStudies: ["sc-solar", "fortune-awl", "carbonex"],
  },
  {
    slug: "product-photography",
    name: "Product Photography",
    metaTitle: "Product Photography & Ecommerce Shoots, Kolkata",
    metaDescription:
      "Product photography in Kolkata by SO Digital: Amazon and Flipkart-ready white-background photos, lifestyle, jewellery and food shoots.",
    h1: "Product Photography in Kolkata for E-commerce, Jewellery and Food Brands",
    summary: "Marketplace-ready white-background photos, lifestyle shots and short product videos, shot in Kolkata.",
    intro:
      "Product photography is photographing products so they look accurate and appealing on websites, marketplaces, catalogues and ads. SO Digital shoots products in Kolkata, from clean white-background images that meet Amazon and Flipkart rules to styled lifestyle, jewellery and food photos, then retouches and exports them in the sizes each platform needs.",
    image: "/images/work/kashmiri-assamese-jewellery-hero.webp",
    imageAlt: "Jewellery photography by SO Digital for Kashmiri Assamese Jewellery: ruby and white stone bangles in hand, a model wearing an Assamese-style jewellery set, and a lotus pendant necklace with studs",
    reelsTitle: "Our product and jewellery photography",
    deliverables: [
      "White-background (packshot) photos for Amazon, Flipkart, Myntra, Meesho and your own store",
      "Lifestyle and in-use photos styled for your brand",
      "Flat-lay and creative compositions for Instagram and ads",
      "Jewellery photography with close-up detail and clean reflections",
      "Food, café and restaurant menu photography",
      "Model and on-hand shots for fashion, sarees and accessories",
      "Short product videos and 360° spins for Reels and product pages",
      "Retouching, background clean-up and colour accuracy",
      "Exports sized for every marketplace and compressed WebP files for fast websites",
    ],
    process: [
      { title: "Shot list", text: "You share your products and where the photos will be used; we agree the angles, styles and number of images per product." },
      { title: "Set-up", text: "We plan lighting, backgrounds and props, at a studio set-up or on location at your shop, kitchen or warehouse in Kolkata." },
      { title: "Shoot", text: "We photograph each product to the shot list, checking focus, colour and detail on a monitor as we go." },
      { title: "Retouch", text: "We clean backgrounds, correct colour so products look true to life, and remove dust and reflections." },
      { title: "Deliver", text: "You receive files that meet marketplace image rules, web-optimised versions and social crops, ready to upload." },
    ],
    comparison: {
      title: "Which type of product photo do you need?",
      columns: ["", "White-background (packshot)", "Lifestyle", "Flat lay / creative"],
      rows: [
        ["What it shows", "The product alone, true to colour, on pure white", "The product in use or in a real setting", "Products arranged with props, shot from above or styled"],
        ["Best for", "Marketplace main images and product pages", "Websites, ads and building desire", "Instagram, ads, banners and launches"],
        ["Marketplace rules", "Required for the main image on Amazon and Flipkart", "Allowed as additional images", "Allowed as additional images"],
      ],
    },
    benefits: [
      "More sales from the same traffic: clear, accurate photos answer buyers' questions before they ask.",
      "Fewer returns: true-to-life colour and detail set the right expectations.",
      "Marketplace-ready files: correct sizes and backgrounds mean listings go live without rejections.",
      "Content for every channel: one shoot covers your store, marketplaces, social media and ads.",
    ],
    faqs: [
      {
        q: "How much does product photography cost in Kolkata?",
        a: "Pricing usually depends on the number of products, images per product, the type of shot (white background, lifestyle or model) and how much retouching is needed. Simple white-background packshots cost the least per image; styled and model shoots cost more. Send us your product list and we'll reply with a quote within 24 hours.",
      },
      {
        q: "Do you shoot photos for Amazon and Flipkart?",
        a: "Yes. We shoot main images on a pure white background with the product filling most of the frame, as marketplaces require, plus additional angle, detail and lifestyle images, and export them at the sizes each marketplace recommends.",
      },
      {
        q: "Can you shoot at my shop or restaurant?",
        a: "Yes. We shoot on location across Kolkata, which suits food, furniture, large products and anything that looks best in its real setting. For small products, a controlled studio-style set-up usually gives the cleanest results.",
      },
      {
        q: "Do you photograph jewellery?",
        a: "Yes. We do the jewellery photoshoots for Kashmiri Assamese Jewellery, a jewellery brand: close-ups of stone-set bangles, styled flat lays of necklace and earring sets, and model shots, which you can see on this page. Jewellery needs careful lighting to show sparkle and detail without harsh reflections, so we shoot close-up detail images, on-hand or on-model photos and clean packshots for catalogues, websites and Instagram.",
      },
      {
        q: "Do you offer monthly product photography?",
        a: "Yes. Brands that add new stock regularly, such as boutiques, saree stores and online shops, can book a regular shoot so new products are photographed in the same style every month.",
      },
    ],
    relatedPosts: ["why-first-impressions-cost-customers", "website-mistakes-killing-conversion-rate"],
    relatedServices: ["videography-reels-shoots", "web-development", "social-media-marketing"],
    relatedCaseStudies: ["kashmiri-assamese-jewellery"],
  },
];

const content = [...baseContent, ...growthContent, ...moreContent];

// Asked by Kolkata buyers on every service; added to each page's FAQ.
const bengaliFaq = {
  q: "Do you create content in Bengali?",
  a: "Yes. SO Digital is a Kolkata team that works in English, Bengali and Hindi, so your website, ads, captions, Reels and videos can speak to customers in the language they prefer.",
};

// Pages in the order of app/lib/serviceIndex.js (the index's name wins, so the two never disagree).
export const services = serviceIndex.map(({ slug, name }) => {
  const page = content.find((c) => c.slug === slug);
  if (!page) throw new Error(`app/lib/services.js has no content for the service "${slug}"`);
  const extra = keywordAdditions[slug] || {};
  return {
    ...page,
    slug,
    name,
    group: serviceIndex.find((x) => x.slug === slug).group,
    sections: [...(page.sections || []), ...(extra.sections || [])],
    faqs: [...page.faqs, ...(extra.faqs || []), ...(nearMeFaqs[slug] ? [nearMeFaqs[slug]] : []), bengaliFaq],
  };
});

export const getService = (slug) => services.find((s) => s.slug === slug);
