// Keyword-gap content for the Kolkata service pages (Google India autocomplete research, 15 Nov 2026,
// see seo-audit/keyword-gap-audit-2026-11-15.md). Each entry adds sections and FAQs that answer searches
// the page didn't cover yet. Merged into each service in app/lib/services.js.
// Rules: no new prices (only the four in app/lib/pricing.js), no client claims, no services SO Digital doesn't offer.

export const keywordAdditions = {
  "web-development": {
    sections: [
      {
        id: "small-business-websites",
        h2: "Low-cost website design for small businesses in Kolkata",
        paras: [
          "Many small businesses in Kolkata search for a cheap or low-cost web design company and end up with a template that loads slowly and never shows up on Google. Our starter business website costs ₹4,999 (one-time) and is built the same way as our bigger projects: fast on mobile, set up for Google from day one, and easy to grow later.",
          "Whether you need a static website (a few pages that rarely change, such as Home, About, Services and Contact) or a dynamic website (content you update yourself, such as a blog, products, listings or offers), we'll tell you which one your business actually needs, so you don't pay for features you won't use.",
        ],
        list: [
          "WordPress websites you can edit yourself",
          "Website redesign: we rebuild slow or outdated sites and redirect old pages, so you keep the Google rankings you already have",
          "Landing pages for Meta Ads and Google Ads campaigns",
          "Websites for doctors, clinics, coaching centres, shops, restaurants and service businesses",
          "Domain, hosting and business email set up for you (quoted separately)",
        ],
      },
      {
        id: "freelancer-vs-company",
        h2: "Freelance web developer or web design company?",
        table: {
          columns: ["", "Freelance web developer", "SO Digital"],
          rows: [
            ["Starting price", "Often the cheapest quote", "₹4,999 for a starter business website"],
            ["Who does the work", "One person: design, code and content", "A team: design, development, SEO and content"],
            ["SEO setup", "Usually extra, or not included", "Built in: clean URLs, metadata, structured data and sitemap"],
            ["After launch", "Depends on the person being available", "Maintenance plans, and a reply to every message within 24 hours"],
            ["Marketing", "Website only", "Ads, social media, Google Business Profile and video under one roof"],
          ],
        },
      },
    ],
    faqs: [
      {
        q: "What is the difference between a static and a dynamic website?",
        a: "A static website shows the same fixed pages to everyone and suits small businesses that only need to explain their services and collect enquiries. A dynamic website pulls content from a database, so you can add blog posts, products, listings or offers yourself. Static sites are cheaper and faster; dynamic sites are better when your content changes often.",
      },
      {
        q: "Do you build WordPress websites?",
        a: "Yes. WordPress is a good choice when you want to edit pages, add blog posts or update offers yourself. We set it up with a fast theme, essential security, backups and SEO basics, and show you how to make changes.",
      },
      {
        q: "Can you redesign my existing website without losing Google rankings?",
        a: "Yes. Before a redesign we list every page that already gets traffic, keep or improve its content, and set up redirects from old addresses to new ones. That protects the rankings and links your current site has earned.",
      },
      {
        q: "Do you design websites for businesses in Salt Lake, Sector V and Howrah?",
        a: "Yes. We build websites for businesses across Kolkata and Howrah, including Salt Lake, Sector V, New Town, Park Street, Ballygunge, Behala, Garia and Dum Dum, and for businesses anywhere in India remotely.",
      },
    ],
  },

  "ecommerce-website-development": {
    sections: [
      {
        id: "kolkata-online-stores",
        h2: "Online stores for Kolkata's saree, fashion, grocery, sweets and gift businesses",
        paras: [
          "Kolkata shoppers already buy sarees, clothes, groceries, sweets, gifts and home décor online. If you sell from a shop in Gariahat, New Market or Burrabazar, or from Instagram and WhatsApp, an online store lets customers browse, pay and track orders without messaging you for every detail.",
          "We set up the catalogue, product photos, size and variant options, delivery charges, cash on delivery and online payments through a payment gateway such as Razorpay, plus order confirmation emails, so the store runs without you checking every order by hand.",
        ],
        links: [
          { href: "/services/product-photography", label: "Product photography for your store" },
          { href: "/industries/retail-stores", label: "Retail, jewellery and saree shops" },
          { href: "/industries/ecommerce-brands", label: "E-commerce brands" },
        ],
      },
    ],
    faqs: [
      {
        q: "Can you build my store on Shopify?",
        a: "Yes. We work as Shopify developers for Kolkata brands that want a hosted store with simple day-to-day management, and we also build on WooCommerce (WordPress) or as a custom store when you need more control or lower monthly fees.",
      },
      {
        q: "Can I take cash on delivery and UPI payments on my online store?",
        a: "Yes. We set up cash on delivery and online payments through a payment gateway that accepts UPI, cards and net banking, so customers can pay the way they prefer.",
      },
    ],
  },

  "custom-software-development": {
    sections: [
      {
        id: "software-examples",
        h2: "Custom CRM, ERP, POS and booking software for Kolkata businesses",
        paras: [
          "If you searched for a software company in Kolkata because spreadsheets and WhatsApp groups can't keep up any more, these are the kinds of systems we build, scoped to what your team actually uses:",
        ],
        list: [
          "CRM software: track enquiries from your website, ads and calls, assign them to staff and follow up on time",
          "ERP-style systems: stock, orders, purchases and dispatch for traders, wholesalers and manufacturers",
          "Restaurant and retail POS: orders, tables, menus and daily sales reports",
          "Booking and appointment systems for clinics, salons, coaching centres and service businesses",
          "School and coaching management: admissions, batches, attendance and fee reminders",
          "Customer and staff portals, dashboards and admin panels for your existing website or app",
        ],
      },
    ],
    faqs: [
      {
        q: "Should I buy ready-made ERP or CRM software or get it custom built?",
        a: "Ready-made software is quicker to start and works well if your process matches it. Custom software makes sense when you're paying for many features you don't use, forcing your team to work around the tool, or joining several tools by hand. We'll tell you honestly which option fits your business.",
      },
      {
        q: "Can custom software connect to my website, WhatsApp or payment gateway?",
        a: "Yes. We connect custom software to your website forms, payment gateway, email and messaging tools, so data moves between them automatically instead of being copied by hand.",
      },
    ],
  },

  "app-development": {
    sections: [
      {
        id: "app-types",
        h2: "Hire an app developer in Kolkata for booking, delivery, fitness and business apps",
        paras: [
          "Most people looking for an app developer in Kolkata need one of a handful of app types. We plan the screens, design the experience, build the app and its admin panel, and launch it on the Play Store and App Store.",
        ],
        list: [
          "Booking apps: appointments, tables, rooms, tours, cabs and services",
          "Ordering and delivery apps for restaurants, grocery and retail",
          "Fitness, wellness and coaching apps with plans, progress tracking and payments",
          "Education apps: classes, tests, notes and fee payments",
          "Business apps for staff: attendance, field visits, orders and reports",
          "Hybrid (cross-platform) apps that run on Android and iOS from one codebase, to save cost",
        ],
      },
    ],
    faqs: [
      {
        q: "What is a hybrid app, and is it cheaper?",
        a: "A hybrid or cross-platform app is built once and runs on both Android and iOS. For most business apps it costs less and launches faster than building two separate native apps, while still feeling smooth to use. Apps that rely heavily on device hardware or complex animation can benefit from native builds.",
      },
      {
        q: "How much does app development cost in Kolkata?",
        a: "It depends on the number of screens, user roles, payments, admin panel and integrations your app needs. We quote after a short call where we list the features for version one, and we often suggest launching a smaller first version so you start earning or learning sooner.",
      },
    ],
  },

  "ui-ux-design": {
    faqs: [
      {
        q: "Can I hire a UI/UX designer in Kolkata for just one project?",
        a: "Yes. You can hire our UI/UX designers for a single website or app design, a redesign of a few key screens, or a clickable Figma prototype to show investors or developers. You don't need a long-term contract.",
      },
      {
        q: "Will developers be able to build from your UI/UX designs?",
        a: "Yes. We hand over organised Figma files with components, spacing, colours and states, and we can build the design ourselves if you'd like one team to take it from design to launch.",
      },
    ],
  },

  "seo-geo-aeo": {
    sections: [
      {
        id: "seo-packages",
        h2: "Low-cost SEO packages in Kolkata: expert work without agency overheads",
        paras: [
          "Searching for an SEO expert, an SEO consultant or an SEO agency in Kolkata usually comes down to three questions: who will do the work, what's included, and what it costs. With SO Digital, our starter local SEO plan starts at ₹1,999 a month, every plan begins with a free SEO audit report, and the same team handles your Google Business Profile, content and technical fixes.",
        ],
        list: [
          "Local SEO for Kolkata and Howrah: Google Business Profile, map pack, reviews and local pages",
          "On-page SEO: titles, headings, content and internal links for the searches your customers make",
          "Technical SEO: speed, mobile usability, indexing, sitemaps and structured data",
          "E-commerce SEO for category and product pages",
          "AI SEO (GEO and AEO): content structured so ChatGPT, Gemini and Google's AI answers can quote it",
          "Monthly reports in plain language: rankings, traffic, calls and enquiries",
        ],
      },
      {
        id: "seo-freelancer-vs-agency",
        h2: "SEO freelancer, SEO consultant or SEO agency?",
        table: {
          columns: ["", "SEO freelancer", "SEO consultant", "SO Digital"],
          rows: [
            ["Best for", "Small, one-off tasks", "Advice your own team carries out", "Ongoing work that needs doing every month"],
            ["Who does the work", "One person", "Your team, with their guidance", "Our team: SEO, content, design and development"],
            ["Website and GBP fixes", "Often outside their scope", "Recommended, not done", "Done for you"],
            ["Starting price", "Varies widely", "Usually charged by the hour or day", "From ₹1,999 a month"],
          ],
        },
      },
    ],
    faqs: [
      {
        q: "Is SEO worth it for a small business in Kolkata?",
        a: "Usually, yes, if people search for what you sell. Local SEO puts you in front of customers at the moment they search for your service in Kolkata, and unlike ads, the visibility doesn't stop when you stop paying. It takes a few months to build, so it works best alongside ads or a Google Business Profile that brings enquiries sooner.",
      },
      {
        q: "Do you offer SEO for businesses in Howrah and Salt Lake?",
        a: "Yes. We do SEO and local SEO for businesses across Kolkata and Howrah, including Salt Lake, Sector V, New Town, Park Street and South Kolkata, and for businesses anywhere in India remotely.",
      },
      {
        q: "Can I do SEO myself?",
        a: "You can handle the basics yourself: keep your Google Business Profile complete, ask happy customers for reviews and write helpful pages about your services. Technical fixes, content planning and tracking results take time and experience, which is where an SEO expert saves you months.",
      },
    ],
  },

  "social-media-marketing": {
    sections: [
      {
        id: "social-media-manager",
        h2: "Hire a social media manager in Kolkata, without a full-time salary",
        paras: [
          "Many small businesses in Kolkata want a social media manager but can't justify a full-time hire. Our social media management covers what that person would do: plan the month, design posts and Reels, write captions in English, Bengali or Hindi, post on schedule, reply to comments and messages, and report what worked.",
          "For Instagram marketing we focus on Reels, carousels and Stories that suit your audience, and we plan around the moments that matter in Kolkata: Durga Puja, Poila Baisakh, Diwali, wedding season, Christmas on Park Street and admission season for schools and coaching centres.",
        ],
        links: [
          { href: "/services/meta-ads", label: "Boost posts with Meta Ads" },
          { href: "/services/video-editing", label: "Reels editing from ₹299" },
          { href: "/services/graphic-design", label: "Post designs from ₹199" },
        ],
      },
    ],
    faqs: [
      {
        q: "Do you run Durga Puja and festive social media campaigns?",
        a: "Yes. We plan festive content and offers for Durga Puja, Diwali, Poila Baisakh, Eid, Christmas and wedding season, with posts, Reels and ads ready before the rush, so your brand is visible when Kolkata is shopping.",
      },
      {
        q: "Is social media marketing worth it for a small business?",
        a: "It is when your customers spend time on Instagram, Facebook or YouTube, which is true for most local businesses in Kolkata. Regular, useful content builds trust, and small ad budgets put your best posts in front of nearby customers who haven't found you yet.",
      },
    ],
  },

  "meta-ads": {
    sections: [
      {
        id: "facebook-instagram-ads-small-business",
        h2: "Facebook ads and Instagram ads for small businesses in Kolkata",
        paras: [
          "Facebook and Instagram ads (both run through Meta Ads Manager) are often the quickest way for a small business in Kolkata to get enquiries, calls and WhatsApp messages. As your Facebook ads agency we handle targeting, creatives, campaign setup and daily optimisation, and we report what each enquiry cost you, not just likes and reach.",
          "This is performance marketing: every campaign has one measurable goal, such as leads, calls, messages or sales, and budget moves toward the ads and audiences that hit it at the lowest cost per lead.",
        ],
        list: [
          "Lead form, click-to-call and click-to-WhatsApp campaigns",
          "Targeting by area: Kolkata, Howrah, Salt Lake, New Town or a radius around your shop",
          "Retargeting people who visited your website or engaged with your page",
          "Reels and video ads made in-house, in English, Bengali or Hindi",
          "Festive campaigns for Durga Puja, Diwali and wedding season",
        ],
      },
    ],
    faqs: [
      {
        q: "How much should a small business spend on Facebook ads?",
        a: "Start with a daily budget you're comfortable testing for two to four weeks, long enough for Meta to learn who responds. Once you know your cost per lead or sale, you can scale up the campaigns that pay for themselves. Our management fee is separate from the ad budget, which you pay directly to Meta.",
      },
      {
        q: "Do Facebook ads still work for small businesses?",
        a: "Yes, when the offer, targeting and creative are right and you track results. Local service businesses, shops, coaching centres and e-commerce brands in Kolkata use them to get steady enquiries. Ads that only chase likes rarely pay off, so we optimise for leads, calls, messages or sales.",
      },
    ],
  },

  "google-ads": {
    sections: [
      {
        id: "google-ads-expert",
        h2: "Hire a Google Ads expert in Kolkata: Search, YouTube and call campaigns",
        paras: [
          "Google Ads (PPC, or pay-per-click) puts your business at the top of Google when people search for what you sell. As a PPC company in Kolkata we manage the whole account: keyword research, ads, landing pages, conversion tracking and weekly optimisation, so your budget goes to searches that turn into customers.",
        ],
        list: [
          "Search ads for high-intent searches such as \"<your service> in Kolkata\" or \"<your service> near me\"",
          "Call-focused ads with call assets, so people can ring you straight from Google",
          "YouTube ads to reach people in Kolkata with your video before they search",
          "Remarketing to bring back people who visited your website",
          "PPC management with negative keywords that stop wasted clicks",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does it cost to hire a Google Ads expert?",
        a: "You pay two things: your ad budget, which goes directly to Google, and our management fee for running the account. We quote management on the size of the account and the number of campaigns, after a short call about your goals.",
      },
      {
        q: "Do Google Ads work for small businesses?",
        a: "Yes, when you target searches with clear buying intent, track enquiries properly and send clicks to a page built to convert. A focused campaign on a handful of high-intent keywords often beats a large, unfocused one.",
      },
    ],
  },

  "lead-generation": {
    sections: [
      {
        id: "lead-gen-industries",
        h2: "Lead generation for real estate, healthcare, education and B2B companies",
        paras: [
          "Lead generation is performance marketing with one job: bring you enquiries you can turn into customers, at a cost per lead that makes sense. We plan it around how your industry buys.",
        ],
        list: [
          "Real estate: site-visit enquiries for projects in New Town, Rajarhat and across Kolkata, with qualifying questions on budget and timeline",
          "Healthcare: appointment enquiries for clinics, doctors and diagnostic centres, through Google Search and local ads",
          "Education: admission enquiries for schools, coaching centres and courses before each session",
          "B2B lead generation: enquiries from buyers, dealers and distributors for manufacturers and service companies",
          "Local services: calls and WhatsApp enquiries for salons, repairs, interiors and home services",
        ],
        links: [
          { href: "/industries/coaching-institutes", label: "Coaching institutes" },
          { href: "/industries/solar-renewable-energy", label: "Solar & renewable energy" },
          { href: "/services/meta-ads", label: "Meta Ads" },
          { href: "/services/google-ads", label: "Google Ads" },
        ],
      },
    ],
    faqs: [
      {
        q: "How much does a lead cost?",
        a: "It varies with your industry, offer, area and how qualified you want each lead to be. A simple local service can get enquiries cheaply, while real estate or B2B leads cost more because each sale is worth more. We track cost per lead from the first week and tell you honestly what to expect.",
      },
      {
        q: "Can you send leads straight to my CRM or WhatsApp?",
        a: "Yes. Leads from Meta lead forms, Google Ads and your website can be sent instantly to your email, a Google Sheet, your CRM or a WhatsApp number, so your team calls them back while they're still interested.",
      },
    ],
  },

  "google-business-profile": {
    sections: [
      {
        id: "near-me",
        h2: "How to show up when customers search \"near me\" in Kolkata",
        paras: [
          "When someone in Salt Lake searches \"bakery near me\" or someone in Howrah searches \"AC repair near me\", Google shows a map with three businesses before any website. Which three appear depends mainly on three things: how relevant your profile is to the search, how close you are to the person searching, and how well-known and well-reviewed your business is.",
          "You can't move your shop, but you can control relevance and reputation. That's what our Google My Business optimisation does: the right categories and services, a complete profile, fresh photos and posts, steady new reviews with replies, and a website that matches your listing.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does a Google Business Profile cost money?",
        a: "No. Creating and keeping a Google Business Profile is free. Businesses pay for help optimising and managing it, such as photos, posts, review management and local SEO, because that is what moves you up the map results.",
      },
      {
        q: "Can you help my business get more Google reviews?",
        a: "Yes. We set up simple review links and QR codes, timing and wording for asking happy customers, and replies to every review. We never buy or fake reviews, which breaks Google's rules and can get a profile suspended.",
      },
    ],
  },

  "video-editing": {
    sections: [
      {
        id: "hire-video-editor",
        h2: "Hire a video editor or reels editor in Kolkata",
        paras: [
          "Whether you need a reels editor for daily Instagram content, a YouTube video editor for long videos, or a video editor for ads and event films, you can send us raw footage from your phone or camera and get back edits ready to post. Reels editing starts at ₹299 per video.",
        ],
        list: [
          "Reels and Shorts with captions, music, transitions and hooks in the first seconds",
          "YouTube videos, podcasts and interviews: cuts, B-roll, titles and thumbnails",
          "Ad videos for Meta and YouTube in every size each platform needs",
          "Event, expo and brand films, with colour grading and sound clean-up",
          "Subtitles in English, Bengali or Hindi",
        ],
      },
    ],
    faqs: [
      {
        q: "Is it cheaper to hire a freelance video editor?",
        a: "A freelancer can be cheap for occasional edits. If you post regularly, an agency gives you a steady turnaround, a consistent style and backup when one editor is busy, and our reels editing starts at ₹299 per video.",
      },
      {
        q: "What are video editing charges in Kolkata?",
        a: "Our reels editing starts at ₹299 per video. Longer YouTube edits, ad videos with motion graphics and event films are quoted on length, footage and effects, and monthly packs for regular content cost less per video.",
      },
    ],
  },

  "videography-reels-shoots": {
    sections: [
      {
        id: "video-production-company",
        h2: "A video production company in Kolkata for brand films, ad videos and reels",
        paras: [
          "As a video production company in Kolkata we handle a shoot from start to finish: idea and script, shot list, videographer and crew on location, editing, colour, sound and the final versions for every platform. You get one team instead of hiring a videographer, an editor and a designer separately.",
        ],
        list: [
          "Corporate films and company profiles for websites, pitches and LinkedIn",
          "Ad videos for Instagram, Facebook and YouTube",
          "Factory, office and process videos",
          "Expo, trade show and event coverage",
          "Product videos and Reels shoots for brands and shops",
        ],
      },
    ],
    faqs: [
      {
        q: "How long should a corporate video be?",
        a: "For websites and social media, one to two minutes usually works best: long enough to show who you are and what you do, short enough that people finish it. Longer factory or training films suit specific audiences, and we cut short versions for ads and Reels from the same shoot.",
      },
      {
        q: "What do I need to prepare for a corporate video shoot?",
        a: "Very little. We agree the key messages and a shot list with you beforehand; on the day you only need access to the location, the people who'll appear on camera and any products or machines to feature. We handle the camera, lighting, sound and direction.",
      },
    ],
  },

  "product-photography": {
    sections: [
      {
        id: "product-photographer",
        h2: "A product photographer in Kolkata for e-commerce, food and jewellery",
        paras: [
          "Good e-commerce photography sells before the customer reads a word. We shoot clean white-background packshots for Amazon, Flipkart and your own store, lifestyle and on-model photos for Instagram, food photography for restaurant menus and delivery apps, and detailed jewellery photography that shows sparkle without harsh glare.",
        ],
        links: [
          { href: "/services/ecommerce-website-development", label: "E-commerce websites" },
          { href: "/services/videography-reels-shoots", label: "Product videos and Reels" },
        ],
      },
    ],
    faqs: [
      {
        q: "How much does product photography cost in Kolkata?",
        a: "It depends on the number of products, the number of angles per product, white-background or lifestyle styling, and whether models or a location are needed. We quote per product or per shoot day after seeing your list of products.",
      },
    ],
  },

  "graphic-design": {
    sections: [
      {
        id: "print-design",
        h2: "Brochure, catalogue, flyer, menu card and visiting card design",
        paras: [
          "Beyond banners and social posts, our graphic designers in Kolkata design everything a business prints or shares: brochures, product catalogues, flyers and leaflets, restaurant menu cards, visiting cards, letterheads, flex and hoarding designs, standees and packaging. You get print-ready files set up to your printer's size and bleed, plus digital versions for WhatsApp and your website.",
        ],
        list: [
          "Brochure and company profile design",
          "Product catalogue and price list design",
          "Flyer, leaflet and pamphlet design",
          "Menu card design for restaurants, cafés and cloud kitchens",
          "Visiting card and stationery design",
          "Flex banner, hoarding and standee design",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I hire a graphic designer in Kolkata for one design?",
        a: "Yes. You can order a single banner or post from ₹199, or a one-off brochure, menu or packaging design. Businesses that need designs every month get a monthly pack at a lower price per design.",
      },
      {
        q: "Do you design Durga Puja and festive banners?",
        a: "Yes. We design festive banners, posts, offers and flex designs for Durga Puja, Diwali, Poila Baisakh, Eid and Christmas, and we recommend booking early because the weeks before Puja are the busiest.",
      },
    ],
  },

  "logo-brand-identity": {
    sections: [
      {
        id: "logo-designer",
        h2: "Work directly with a logo designer in Kolkata",
        paras: [
          "With SO Digital you talk directly to the designer working on your logo. We start with a short brief about your business and customers, show logo concepts with the thinking behind each, refine the one you choose, and hand over every file you need: colour, black and white, transparent backgrounds, social media sizes and print-ready formats.",
          "As a branding company we can take it further: colours, typography, visiting cards, social media templates, packaging and brand guidelines, so your brand looks the same on your shop board, Instagram and website.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does logo design cost in Kolkata?",
        a: "It depends on whether you need a logo only or a full brand identity with colours, fonts, stationery and guidelines, and on the number of concepts and revisions. We quote after a short brief, and you'll know exactly what files you get before we start.",
      },
    ],
  },
};
