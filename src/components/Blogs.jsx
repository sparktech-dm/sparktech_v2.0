import React, { useState, useRef } from "react";
import { ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";
import Seo from "./Seo";
import { Link } from "react-router-dom";

export const blogData = [
  {
    "id": "blog-1",
    "slug": "grow-your-business-with-digital-marketing-strategies",
    "title": "Grow Your Business with Digital Marketing Strategies",
    "subtitle": "SEO & DIGITAL MARKETING STRATEGY",
    "image": "/Blog1.webp",
    "fallbackText": "SEO & Digital Marketing",
    "author": {
      "name": "Spark Tech Digital"
    },
    "datePublished": "2025-01-15T09:00:00.000Z",
    "dateModified": "2025-01-15T09:00:00.000Z",
    "excerpt": "Discover proven digital marketing strategies to increase qualified lead flow, build enduring brand authority, and maximize return on investment.",
    "content": [
      "In an increasingly competitive business landscape, building a sustainable brand requires far more than isolated advertising campaigns. Modern digital marketing is an interconnected ecosystem where search visibility, high-performance web architecture, targeted pay-per-click advertising, and audience engagement work in synergy to drive measurable revenue.",
      "Whether you operate a burgeoning startup or an established enterprise in Tamil Nadu, deploying an integrated digital roadmap helps identify high-intent buyer journeys, optimize customer acquisition costs, and maximize long-term business valuation."
    ],
    "sections": [
      {
        "heading": "The Foundation of an Integrated Digital Marketing Strategy",
        "paragraphs": [
          "In today's digital economy, businesses cannot afford to rely on a single marketing channel. Relying exclusively on paid advertising leads to escalating customer acquisition costs when ad auctions fluctuate, while relying solely on referral networks severely restricts market expansion. A truly resilient business builds a multi-channel growth engine that combines organic search presence, direct response funnels, and brand engagement.",
          "At SparkTech Digital, our work across retail, B2B services, real estate, and healthcare in Chennai proves that businesses with interconnected digital strategies consistently capture higher market share. By aligning brand positioning across every online touchpoint, companies accelerate trust-building and guide potential customers seamlessly from initial discovery to commercial conversion. Explore our full suite of [digital marketing services in Chennai](/services) to discover how integrated campaigns elevate brand performance."
        ]
      },
      {
        "heading": "Key Pillars for Sustainable Online Business Growth",
        "paragraphs": [
          "1. Search Engine Optimization (SEO): Organic search remains the most dependable, cost-effective long-term growth driver. A comprehensive search strategy covers technical health, keyword-targeted landing pages, authoritative backlink acquisition, and regional Google Maps rankings. Partnering with a dedicated [SEO services company in Chennai](/services/seo) ensures your brand ranks consistently when customers search for your core offerings.",
          "2. Conversion-Focused Web Architecture: Driving traffic to a slow or confusing website results in lost sales opportunities. Fast loading speeds, intuitive navigation hierarchies, mobile responsiveness, and clear value propositions transform passive page visitors into engaged prospects. Learn more about our custom [website development company in Chennai](/services/website-development) solutions.",
          "3. High-ROI Paid Advertising (PPC): When rapid market entry or targeted customer acquisition is required, well-calibrated search and display campaigns deliver predictable returns. Working with a certified [Google Ads agency in Chennai](/services/video-editing) allows you to target high-intent search keywords while keeping cost-per-click strictly controlled.",
          "4. Systematic Lead Generation Funnels: Capturing prospective buyers requires purpose-built landing pages, strategic lead magnets, and transparent qualification forms. Our specialized [lead generation services in Chennai](/services/content-creation) help businesses construct automated sales pipelines that consistently convert traffic into verified inquiries.",
          "5. Omnichannel Social Presence & Retention: Building an active community across Instagram, Facebook, and LinkedIn creates brand loyalty. Complementing organic reach with our [social media marketing agency in Chennai](/services/social-media-marketing) and automated [email marketing services in Chennai](/services/email-marketing) guarantees consistent customer retention and repeat transactions."
        ]
      },
      {
        "heading": "Measuring Performance with Data-Driven Analytics",
        "paragraphs": [
          "A growth strategy without meticulous performance tracking is merely speculation. Implementing robust conversion tracking with Google Analytics 4 (GA4) and Meta Pixel enables decision-makers to track customer journeys with granular precision. By identifying which touchpoints generate the highest customer lifetime value (LTV), marketing budgets can be allocated dynamically to maximize return on ad spend (ROAS).",
          "Continuous iterative testing—evaluating headline variations, button placements, and ad creatives—protects against stagnation. For businesses ready to scale their online acquisition, [schedule a free strategy consultation](/contact) with our specialists at SparkTech Digital in Choolaimedu, Chennai."
        ]
      }
    ],
    "tags": [
      "Digital Marketing",
      "Business Growth",
      "Online Marketing",
      "SEO",
      "Lead Generation"
    ]
  },
  {
    "id": "blog-2",
    "slug": "improve-website-rankings-with-seo",
    "title": "Improve Website Rankings with Search Engine Optimization (SEO)",
    "subtitle": "SEARCH ENGINE OPTIMIZATION",
    "image": "/Blog2.webp",
    "fallbackText": "SEARCH ENGINE OPTIMIZATION",
    "author": {
      "name": "Spark Tech Digital"
    },
    "datePublished": "2025-01-22T10:00:00.000Z",
    "dateModified": "2025-01-22T10:00:00.000Z",
    "excerpt": "Learn how to systematically optimize your website architecture, content, and local presence to achieve dominant Google rankings.",
    "content": [
      "Search Engine Optimization (SEO) is the cornerstone of sustainable organic discovery on the modern web. Ranking organically at the top of Google search results positions your brand directly before motivated buyers seeking immediate solutions to their challenges.",
      "Achieving top rankings requires moving beyond legacy tactics like keyword repetition. Modern search engines evaluate topical depth, semantic context, user experience metrics, and technical site health before awarding first-page visibility."
    ],
    "sections": [
      {
        "heading": "Understanding the Core Pillars of Modern Search Engine Optimization",
        "paragraphs": [
          "Search engine algorithms have developed from basic keyword-frequency matching into sophisticated neural ranking systems that evaluate search intent, topical relevance, and user experience signals. To achieve competitive rankings in competitive markets, businesses must establish a comprehensive strategy encompassing technical architecture, on-page optimization, content relevance, and authoritative off-page credibility.",
          "For businesses in South India and metropolitan hubs like Chennai, local search engine optimization is especially critical. Maintaining complete consistency across your Google Business Profile, local directories, geo-targeted landing pages, and structured schema markup helps capture high-intent regional search queries. Discover how our specialized [SEO services in Chennai](/services/seo) establish enduring search visibility for regional leaders."
        ]
      },
      {
        "heading": "Technical SEO: Building an Unshakeable Site Foundation",
        "paragraphs": [
          "Technical SEO ensures that search engine crawlers can efficiently crawl, interpret, and index every critical URL on your website. When a website suffers from crawl budget waste, broken redirect loops, or non-canonical duplicate pages, search engines hesitate to grant top rankings.",
          "Foundational technical requirements include clean XML sitemaps, strictly configured canonical tags, SSL security, and pristine Core Web Vitals (Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift). Ensuring your site architecture is engineered by an expert [website development company in Chennai](/services/website-development) creates the technical backbone needed for organic dominance."
        ]
      },
      {
        "heading": "On-Page Optimization and Content Quality for Topical Authority",
        "paragraphs": [
          "On-page SEO aligns individual page content with the exact commercial and informational intent of search queries. This requires strategic keyword placement within title tags, meta descriptions, and semantic headings (H1, H2, H3), reinforced by exhaustive, well-structured body copy that thoroughly satisfies visitor intent.",
          "Creating comprehensive content clusters establishes domain authority over time. As demonstrated in our guide on [how digital marketing strategies grow businesses](/blogs/grow-your-business-with-digital-marketing-strategies), marrying quality content with structured internal linking keeps visitors engaged longer, dramatically reducing bounce rates and amplifying ranking signals."
        ]
      },
      {
        "heading": "Converting Organic Traffic into Paying Customers",
        "paragraphs": [
          "Attracting thousands of monthly search visitors delivers little business value if those visitors leave without taking action. High-ranking pages must incorporate clear conversion paths—such as strategic call-to-action buttons, intuitive contact forms, and contextual consultation offers.",
          "By combining organic search optimization with targeted [lead generation services in Chennai](/services/content-creation), your website functions as an automated customer acquisition machine. [Contact SparkTech Digital](/contact) to audit your current search rankings and unlock untapped organic growth."
        ]
      }
    ],
    "tags": [
      "SEO",
      "Organic Traffic",
      "Keyword Research",
      "Website Ranking",
      "Technical SEO"
    ]
  },
  {
    "id": "blog-3",
    "slug": "build-website-that-converts-visitors-into-customers",
    "title": "Build a Website That Converts Visitors into Customers",
    "subtitle": "WEBSITE DEVELOPMENT & UX",
    "image": "/Blog3.webp",
    "fallbackText": "WEBSITE DEVELOPMENT",
    "author": {
      "name": "Spark Tech Digital"
    },
    "datePublished": "2025-02-05T11:30:00.000Z",
    "dateModified": "2025-02-05T11:30:00.000Z",
    "excerpt": "Transform your website from a passive digital brochure into a high-converting lead generation machine with user-centric UI/UX and fast performance.",
    "content": [
      "A website is far more than a digital brochure—it is the central nervous system of your business marketing infrastructure. Whether visitors discover you via search engines, social media feeds, or paid campaigns, your website is the decisive touchpoint where credibility is established and conversion decisions are made.",
      "Achieving high conversion rates requires a deliberate combination of lightning-fast loading speeds, mobile-first design, intuitive navigation, and persuasive messaging."
    ],
    "sections": [
      {
        "heading": "The Role of Intentional Web Architecture in Conversion Rate Optimization",
        "paragraphs": [
          "Most underperforming websites fail not because of poor products, but because of excessive conversion friction. When navigation menus are cluttered, page load times exceed two seconds, or value propositions are buried beneath generic marketing jargon, prospective customers bounce to competitors.",
          "Effective web architecture organizes information around the user's thought process. Clear headline hierarchies, scannable bullet points, trust badges, and prominent contact mechanisms guide visitors smoothly from curious explorers to qualified sales leads. Discover our approach to engineered UI/UX at our [website development company in Chennai](/services/website-development)."
        ]
      },
      {
        "heading": "Core Performance Benchmarks That Drive Conversions",
        "paragraphs": [
          "1. Ultra-Fast Page Speeds: Research shows that each additional second of page loading time slashes conversion rates by up to 7%. Utilizing modern frameworks like React and Vite ensures pages render instantly on all devices.",
          "2. Responsive Mobile-First Experiences: With mobile devices accounting for over 65% of commercial browsing in urban centers like Chennai, touch targets must be spacious, navigation effortless, and forms thumb-friendly.",
          "3. Creative Visual Identity: Clean branding, professional typography, and custom visuals build instant trust. Partnering with a dedicated [graphic design services in Chennai](/services/graphics-designing) agency guarantees your digital touchpoints project authority and polish.",
          "4. Technical SEO Readiness: Clean markup, schema breadcrumbs, and semantic HTML ensure that high-converting landing pages also secure prominent rankings via our [SEO services in Chennai](/services/seo)."
        ]
      },
      {
        "heading": "Constructing Dedicated High-Converting Landing Pages",
        "paragraphs": [
          "Generic homepages rarely convert paid or targeted traffic at optimal rates. High-performing growth programs utilize dedicated campaign landing pages focused on a single customer segment and value proposition.",
          "By integrating purpose-built landing pages with automated [lead generation services in Chennai](/services/content-creation), businesses capture qualified prospect data and route inquiries straight into CRM pipelines. [Book a website audit consultation](/contact) with SparkTech Digital to transform your online conversion metrics."
        ]
      }
    ],
    "tags": [
      "Website Development",
      "UI/UX",
      "Responsive Design",
      "Conversion Optimization",
      "Web Design"
    ]
  },
  {
    "id": "blog-4",
    "slug": "maximize-roi-with-google-ads-campaigns",
    "title": "Maximize ROI with Google Ads Campaigns",
    "subtitle": "GOOGLE ADS & PPC STRATEGY",
    "image": "/Blog4.webp",
    "fallbackText": "GOOGLE ADS & PPC",
    "author": {
      "name": "Spark Tech Digital"
    },
    "datePublished": "2025-02-18T14:00:00.000Z",
    "dateModified": "2025-02-18T14:00:00.000Z",
    "excerpt": "Discover how strategic keyword targeting, high-converting ad copy, and smart bidding can turn Google Ads into a predictable profit center.",
    "content": [
      "Google Ads empowers businesses to intercept prospective buyers at the exact micro-moment they search for relevant services and solutions. Unlike passive advertising channels that interrupt user leisure, Google Search Ads fulfill active commercial intent.",
      "However, running profitable pay-per-click (PPC) campaigns requires disciplined management. Unoptimized match types, neglected negative keywords, or misaligned landing pages can rapidly deplete advertising budgets without generating qualified sales opportunities."
    ],
    "sections": [
      {
        "heading": "Why Paid Search Captures High Commercial Intent",
        "paragraphs": [
          "When potential clients type high-intent queries like 'digital marketing agency near me' or 'commercial web development in Chennai', they are actively seeking vendor partnerships. Search engine advertising positions your company at the very top of those search engine results pages.",
          "To maximize profitability, campaigns must be constructed with granular ad groups, compelling headlines, and clear unique selling propositions. Partnering with a certified [Google Ads agency in Chennai](/services/video-editing) ensures that every advertising rupee is invested into searches that yield measurable returns."
        ]
      },
      {
        "heading": "Core Methodologies for Maximizing PPC Return on Investment",
        "paragraphs": [
          "1. Strategic Keyword Selection & Negative Keywords: Target high-intent, long-tail phrases and aggressively prune irrelevant queries using negative keyword lists to eliminate wasteful ad spend.",
          "2. High Google Quality Scores: Google rewards ads that closely align with search queries and lead to fast, relevant landing pages. A high Quality Score lowers your cost-per-click (CPC) while securing top ad positions.",
          "3. Optimized Destination Landing Pages: Sending paid ad clicks to a generic homepage is the fastest way to lose money. Ad campaigns must route to customized, high-converting pages built through specialized [lead generation services in Chennai](/services/content-creation).",
          "4. Advanced Conversion Tracking: Tracking macro conversions (phone calls, submitted lead forms, purchases) alongside micro conversions (PDF downloads, video views) provides the data required for automated smart bidding algorithms to perform effectively."
        ]
      },
      {
        "heading": "Synergizing Google Ads with Organic Search for Market Dominance",
        "paragraphs": [
          "The most resilient growth engines combine paid advertising with long-term organic search. While paid search produces immediate traffic, keyword insights, and fast revenue, organic search builds enduring brand equity and lowers blended customer acquisition costs. Learn how our [SEO services in Chennai](/services/seo) pair with PPC campaigns to deliver comprehensive search dominance.",
          "Ready to eliminate wasted ad spend and scale your campaign returns? [Request a comprehensive Google Ads audit](/contact) from SparkTech Digital today."
        ]
      }
    ],
    "tags": [
      "Google Ads",
      "PPC",
      "Paid Advertising",
      "Lead Generation",
      "ROI Marketing"
    ]
  },
  {
    "id": "blog-5",
    "slug": "build-strong-customer-relationships-through-social-media",
    "title": "Build Strong Customer Relationships Through Social Media",
    "subtitle": "SOCIAL MEDIA MARKETING",
    "image": "/Blog5.webp",
    "fallbackText": "SOCIAL MEDIA MARKETING",
    "author": {
      "name": "Spark Tech Digital"
    },
    "datePublished": "2025-03-01T08:30:00.000Z",
    "dateModified": "2025-03-01T08:30:00.000Z",
    "excerpt": "Learn how to build authentic customer relationships, elevate brand recall, and cultivate an active community across modern social media platforms.",
    "content": [
      "Social media marketing has transitioned from an informal broadcast tool into an essential channel for customer trust, brand storytelling, and commercial engagement. Modern consumers expect brands to be responsive, authentic, and culturally resonant across social platforms.",
      "Achieving meaningful business results requires looking beyond superficial vanity metrics like follower counts, focusing instead on community dialogue, helpful educational content, and relationship-driven lead acquisition."
    ],
    "sections": [
      {
        "heading": "Shifting from Follower Counts to High-Value Community Engagement",
        "paragraphs": [
          "Large follower numbers provide minimal commercial benefit if your audience remains passive. Algorithms on Instagram, LinkedIn, and Meta actively prioritize posts that spark conversations, encourage saves, and generate shares. When brands share behind-the-scenes insights, customer case studies, and practical advice, followers become loyal brand advocates.",
          "For businesses in Chennai, creating culturally attuned, regionally relevant social content bridges the gap between digital interaction and real-world sales transactions. Our team at the [social media marketing agency in Chennai](/services/social-media-marketing) crafts custom social editorial calendars tailored to your specific market segment."
        ]
      },
      {
        "heading": "Visual Brand Identity and Content Strategy Across Platforms",
        "paragraphs": [
          "1. Strategic Platform Differentiation: While professional thought leadership and corporate case studies thrive on LinkedIn, visual storytelling, lifestyle reels, and product demos generate remarkable engagement on Instagram and Meta.",
          "2. Distinctive Visual Consistency: Consistent typography, brand colors, and high-impact graphic design elevate brand recall across fast-scrolling feeds. Collaborate with our [graphic design services in Chennai](/services/graphics-designing) team to create thumb-stopping creative assets.",
          "3. Active Community Management: Promptly answering questions, replying to comments, and addressing feedback shows prospects that customer satisfaction is your priority, building trust before the sale occurs."
        ]
      },
      {
        "heading": "Nurturing Social Engagement into Long-Term Sales Pipelines",
        "paragraphs": [
          "Social media works most effectively when integrated into a comprehensive digital marketing ecosystem. Guiding interested followers to valuable resources, downloadable templates, and private newsletters transitions social audiences into owned email subscriber lists.",
          "Implementing automated [email marketing services in Chennai](/services/email-marketing) ensures that followers who express interest are nurtured continuously with personalized case studies and promotions. [Connect with SparkTech Digital](/contact) to elevate your brand presence on social media."
        ]
      }
    ],
    "tags": [
      "Social Media Marketing",
      "Branding",
      "Instagram Marketing",
      "Customer Engagement",
      "SMM"
    ]
  },
  {
    "id": "blog-6",
    "slug": "why-quality-content-matters-for-seo-and-brand-growth",
    "title": "Why Quality Content Matters for SEO and Brand Growth",
    "subtitle": "CONTENT MARKETING & STRATEGY",
    "image": "/Blog6.webp",
    "fallbackText": "CONTENT MARKETING",
    "author": {
      "name": "Spark Tech Digital"
    },
    "datePublished": "2025-03-10T09:45:00.000Z",
    "dateModified": "2025-03-10T09:45:00.000Z",
    "excerpt": "Explore how high-quality, intent-driven content establishes industry authority, fuels search rankings, and guides prospects through the sales funnel.",
    "content": [
      "Content marketing is one of the most compounding, high-yield digital investments a business can make. Producing well-researched, insightful articles, case studies, and guides transforms your website from a standard corporate storefront into an authoritative knowledge center.",
      "High-quality content accomplishes two critical goals simultaneously: it satisfies modern search engine criteria for topical authority while answering customer questions throughout their buying journey."
    ],
    "sections": [
      {
        "heading": "Content as the Engine of Modern Search Engine Visibility",
        "paragraphs": [
          "Every customer search on Google represents a user with a challenge, question, or commercial requirement. When your website consistently publishes accurate, comprehensive answers that resolve these inquiries, search engines identify your domain as a trusted source of expertise.",
          "Google's helpful content and E-E-A-T (Experience, Expertise, Authoritativeness, and Trustworthiness) standards demand genuinely insightful content. As explored in our guide to [improving website rankings with SEO](/blogs/improve-website-rankings-with-seo), content that provides original value outranks generic articles and attracts organic backlinks naturally. Our [SEO services in Chennai](/services/seo) combine in-depth search intent mapping with expert copywriting."
        ]
      },
      {
        "heading": "Guiding Buyers Through Each Stage of the Customer Journey",
        "paragraphs": [
          "1. Top-of-Funnel (Awareness): Informational articles and guides answer foundational industry questions, introducing potential customers to your brand without aggressive sales pitches.",
          "2. Middle-of-Funnel (Evaluation): Comparison guides, architectural breakdowns, and implementation frameworks help prospects evaluate different solutions to their business challenges.",
          "3. Bottom-of-Funnel (Decision): In-depth case studies, transparent service breakdowns, and client testimonials prove your capability to deliver real business outcomes.",
          "Structuring content this way directly supports our [lead generation services in Chennai](/services/content-creation), capturing high-intent prospects at the exact moment they are ready to engage."
        ]
      },
      {
        "heading": "Amplifying Content Distribution Across Channels",
        "paragraphs": [
          "Creating exceptional content is only half the battle; distributing it effectively determines its true reach. Repurposing long-form articles into carousel slides for LinkedIn, reel scripts for Instagram, and insights for email newsletters maximizes content return on investment.",
          "Collaborating with our [social media marketing agency in Chennai](/services/social-media-marketing) ensures your authoritative content reaches decision-makers across platforms. [Contact SparkTech Digital in Chennai](/contact) to craft a content marketing strategy that converts readers into lifelong clients."
        ]
      }
    ],
    "tags": [
      "Content Marketing",
      "SEO",
      "Content Strategy",
      "Business Growth",
      "Brand Authority"
    ]
  }
];

const caseStudyData = [
  {
    id: "case-1",
    title: "How SEO Helps Businesses Build Long-Term Organic Growth",
    subtitle: "SEO & WEBSITE GROWTH",
    image: "/Case1.webp",
    fallbackText: "SEO & WEBSITE GROWTH",
    excerpt: "Search Engine Optimization is one of the most effective digital marketing strategies for building sustainable online visibility.",
    content: [
      "Search Engine Optimization is one of the most effective digital marketing strategies for building sustainable online visibility. A well-optimized website improves search rankings, attracts qualified visitors, and creates long-term business growth without relying solely on paid advertising.",
      "Technical SEO, quality content, keyword research, and user experience work together to help businesses reach the right audience at the right time. Companies that continuously optimize their websites often experience increased traffic, better engagement, and higher conversion rates over time.",
      "At SparkTech, we believe successful SEO is about understanding search intent, improving website performance, and creating valuable content that delivers lasting results."
    ],
    tags: ["SEO", "Organic Growth", "Website Ranking"]
  },
  {
    id: "case-2",
    title: "Building Websites That Turn Visitors into Customers",
    subtitle: "WEBSITE DEVELOPMENT",
    image: "/Case2.webp",
    fallbackText: "WEBSITE DEVELOPMENT",
    excerpt: "A website is often the very first impression customers have of a business. It sets the tone for your brand.",
    content: [
      "A website is often the first impression customers have of a business. Modern website development focuses on responsive design, fast loading speeds, clear navigation, and conversion-focused layouts that improve user experience.",
      "Businesses with professionally developed websites build greater customer trust, reduce bounce rates, and encourage visitors to take action. Every design decision should support business goals while providing a seamless browsing experience across all devices.",
      "At SparkTech, we create websites that combine creativity, performance, and functionality to support long-term business success."
    ],
    tags: ["Website Development", "UI/UX", "Responsive Design"]
  },
  {
    id: "case-3",
    title: "Maximizing Business Growth Through Google Ads",
    subtitle: "GOOGLE ADS & PPC",
    image: "/Case3.webp",
    fallbackText: "GOOGLE ADS & PPC",
    excerpt: "Google Ads allows businesses to connect with customers who are actively searching for products and services.",
    content: [
      "Google Ads allows businesses to connect with customers who are actively searching for products and services. A successful campaign requires keyword research, compelling ad copy, strategic bidding, and continuous optimization to improve return on investment.",
      "Performance tracking and audience analysis help businesses make informed decisions while reducing advertising costs. Combining paid campaigns with strong landing pages creates better conversion opportunities and measurable business growth.",
      "SparkTech focuses on creating advertising strategies that deliver quality leads and long-term value."
    ],
    tags: ["Google Ads", "PPC", "Lead Generation"]
  },
  {
    id: "case-4",
    title: "Building Strong Brands Through Social Media Marketing",
    subtitle: "SOCIAL MEDIA MARKETING",
    image: "/Case4.webp",
    fallbackText: "SOCIAL MEDIA MARKETING",
    excerpt: "Social media platforms provide businesses with opportunities to engage customers, increase brand awareness, and build lasting relationships.",
    content: [
      "Social media platforms provide businesses with opportunities to engage customers, increase brand awareness, and build lasting relationships. Consistent content, creative storytelling, and meaningful interactions help brands establish credibility in competitive markets.",
      "Successful social media marketing combines organic content with paid campaigns to increase reach, encourage engagement, and generate business opportunities.",
      "SparkTech develops customized social media strategies designed to connect businesses with the audiences that matter most."
    ],
    tags: ["Social Media", "Branding", "Engagement"]
  },
  {
    id: "case-5",
    title: "Using Data to Improve Marketing Performance",
    subtitle: "PERFORMANCE MARKETING",
    image: "/Case5.webp",
    fallbackText: "PERFORMANCE MARKETING",
    excerpt: "Performance marketing focuses on measurable business outcomes such as leads, sales, and return on investment.",
    content: [
      "Performance marketing focuses on measurable business outcomes such as leads, sales, and return on investment. Every campaign is monitored using real-time analytics, allowing businesses to optimize budgets and improve overall marketing performance.",
      "Understanding customer behavior, tracking conversions, and analyzing campaign data help businesses make smarter marketing decisions and achieve consistent growth.",
      "SparkTech believes data-driven strategies create better results and stronger customer relationships."
    ],
    tags: ["Performance Marketing", "Analytics", "ROI"]
  },
  {
    id: "case-6",
    title: "Creating Memorable Brands in the Digital World",
    subtitle: "BRANDING & DIGITAL STRATEGY",
    image: "/Case6.webp",
    fallbackText: "BRANDING & DIGITAL STRATEGY",
    excerpt: "Strong branding helps businesses communicate their values, build customer trust, and stand out from competitors.",
    content: [
      "Strong branding helps businesses communicate their values, build customer trust, and stand out from competitors. From logo design and visual identity to messaging and digital strategy, every element contributes to a consistent brand experience.",
      "A well-defined brand creates stronger customer recognition, improves credibility, and supports long-term business growth across digital platforms.",
      "SparkTech helps businesses build meaningful brands that inspire confidence and create lasting impressions."
    ],
    tags: ["Branding", "Digital Strategy", "Business Growth"]
  }
];

/* ─────────────────────────────────────────
   Mobile single-card carousel component
   Left arrow  → previous card
   Right arrow → next card
   Swipe left  → next card
   Swipe right → previous card
   Read More button → expand card only
───────────────────────────────────────── */
const MobileCarousel = ({ data, cardType }) => {
  const [index, setIndex] = useState(0);
  const [expandedId, setExpandedId] = useState(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const MIN_SWIPE = 50;
  const total = data.length;

  const goNext = () => {
    if (index < total - 1) {
      setExpandedId(null);
      setIndex((i) => i + 1);
    }
  };
  const goPrev = () => {
    if (index > 0) {
      setExpandedId(null);
      setIndex((i) => i - 1);
    }
  };

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchMove = (e) => { touchEndX.current = e.touches[0].clientX; };

  // ✅ CHANGED: removed tap-to-toggle and e.preventDefault()
  // Now only handles swipe navigation — expand is Read More button only
  const onTouchEnd = () => {
    if (touchStartX.current === null) return;
    const endX = touchEndX.current ?? touchStartX.current;
    const diff = touchStartX.current - endX;
    if (Math.abs(diff) >= MIN_SWIPE) {
      diff > 0 ? goNext() : goPrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const item = data[index];
  const isOpen = expandedId === item.id;
  const isBlog = cardType === "blog";

  return (
    
    <div className="flex items-center gap-3 w-full">
      {/* LEFT arrow → previous card */}
      <div className="flex-shrink-0 w-10">
        {index > 0 && (
          <button
            onClick={goPrev}
            className="flex items-center justify-center w-10 h-10 rounded-xl border-2 border-[#cc7722] text-[#cc7722] bg-[#111111] hover:bg-[#cc7722]/10 active:bg-[#cc7722]/20 transition-all duration-200 shadow-[0_4px_12px_rgba(240,196,23,0.15)]"
            aria-label="Previous card"
          >
            <ChevronLeft size={20} />
          </button>
        )}
      </div>

      {/* Single card — ✅ CHANGED: removed onClick from wrapper div */}
      <div
        className="flex-1 min-w-0"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="bg-white/[0.03] border border-white/[0.02] border-l-4 border-l-[#f0c417] rounded-lg p-5 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.15)] select-none"
          >
            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-bold leading-snug text-[#cc7722] font-[Inter]">
                {isBlog ? (
                  <Link to={`/blogs/${item.slug || item.id}`} className="hover:text-white transition-colors">
                    {item.title}
                  </Link>
                ) : (
                  item.title
                )}
              </h3>
              <div className={`relative overflow-hidden rounded-lg h-44 w-full ${isBlog ? "bg-[#1a1a2e]" : "bg-[#1a2a4a]"} flex items-center justify-center`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `<span class="text-white/80 font-medium text-sm">${item.fallbackText}</span>`;
                  }}
                />
              </div>
              {!isBlog && item.subtitle && (
                <p className="text-sm font-semibold text-white leading-normal">{item.subtitle}</p>
              )}
              <p className="text-white/90 text-sm leading-relaxed">{item.excerpt}</p>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3 mt-3 border-t border-[#cc7722]/20 flex flex-col gap-3 text-sm text-gray-300 leading-relaxed">
                      {item.content.map((paragraph, idx) => (<p key={idx}>{paragraph}</p>))}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3 pt-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="bg-[#cc7722]/10 border border-[#cc7722]/35 text-[#cc7722] rounded-full px-3 py-1 text-xs font-semibold tracking-wide">{tag}</span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ✅ CHANGED: added e.stopPropagation() so button works cleanly */}
            <div className="mt-4 flex items-center justify-between w-full pt-2 border-t border-[#cc7722]/20">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setExpandedId((prev) => (prev === item.id ? null : item.id));
                }}
                className="flex items-center gap-1.5 text-xs text-white/80 font-medium italic hover:text-[#cc7722] transition-colors cursor-pointer"
              >
                <span>{isOpen ? "Quick Preview -" : "Quick Preview +"}</span>
              </button>
              {isBlog && (
                <Link
                  to={`/blogs/${item.slug || item.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#cc7722] hover:text-white transition-colors uppercase tracking-wider"
                >
                  Read Article &rarr;
                </Link>
              )}
            </div>

            {/* Dot indicator */}
            <div className="flex justify-center gap-1.5 mt-4">
              {data.map((_, i) => (
                <span
                  key={i}
                  className={`inline-block rounded-full transition-all duration-300 ${i === index ? "w-5 h-1.5 bg-[#cc7722]" : "w-1.5 h-1.5 bg-white/25"}`}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* RIGHT arrow → next card */}
      <div className="flex-shrink-0 w-10">
        {index < total - 1 && (
          <button
            onClick={goNext}
            className="flex items-center justify-center w-10 h-10 rounded-xl border-2 border-[#cc7722] text-[#cc7722] bg-[#111111] hover:bg-[#cc7722]/10 active:bg-[#cc7722]/20 transition-all duration-200 shadow-[0_4px_12px_rgba(240,196,23,0.15)]"
            aria-label="Next card"
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   Main Blogs component
───────────────────────────────────────── */
const Blogs = () => {
  const [expandedBlogs, setExpandedBlogs] = useState({});
  const [expandedCases, setExpandedCases] = useState({});
  const [blogStartIndex, setBlogStartIndex] = useState(0);
  const [caseStartIndex, setCaseStartIndex] = useState(0);
  const [blogDirection, setBlogDirection] = useState(1);
  const [caseDirection, setCaseDirection] = useState(1);

  const toggleBlog = (id) => setExpandedBlogs((prev) => ({ ...prev, [id]: !prev[id] }));
  const toggleCase = (id) => setExpandedCases((prev) => ({ ...prev, [id]: !prev[id] }));
  const nextBlogs = () => { setBlogDirection(1); setBlogStartIndex((prev) => prev + 3); };
  const prevBlogs = () => { setBlogDirection(-1); setBlogStartIndex((prev) => prev - 3); };
  const nextCases = () => { setCaseDirection(1); setCaseStartIndex((prev) => prev + 3); };
  const prevCases = () => { setCaseDirection(-1); setCaseStartIndex((prev) => prev - 3); };

  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 50 : -50, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction < 0 ? 50 : -50, opacity: 0 })
  };

  const currentBlogs = blogData.slice(blogStartIndex, blogStartIndex + 3);
  const currentCases = caseStudyData.slice(caseStartIndex, caseStartIndex + 3);

  const cardBase = "bg-[#1f3a58] rounded-xl p-5 md:p-6 flex flex-col justify-between transition-all duration-300 shadow-md hover:-translate-y-1 active:scale-[0.99]";
  const arrowBtn = "flex items-center justify-center w-11 h-11 rounded-xl border-2 border-[#cc7722] text-[#cc7722] bg-[#111111] hover:bg-[#cc7722]/10 active:bg-[#cc7722]/20 transition-all duration-200 shadow-[0_4px_12px_rgba(240,196,23,0.15)]";

  return (
    <>
      <Seo
        title="Digital Marketing & SEO Blogs | SparkTech Digital Marketing"
        description="Actionable insights, proven strategies, and industry guides on SEO, web development, Google Ads, and social media marketing from SparkTech Digital."
        keywords="digital marketing blog, seo tips chennai, google ads guides, web development insights"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Digital Marketing Blogs & Insights - Spark Tech Digital",
            "url": "https://www.sparktechdm.com/blogs",
            "description": "Actionable insights, proven strategies, and industry guides on SEO, web development, Google Ads, and social media marketing from SparkTech Digital.",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sparktechdm.com/" },
                { "@type": "ListItem", "position": 2, "name": "Blogs" }
              ]
            }
          })}
        </script>
      </Seo>
      <div className="min-h-screen bg-white text-black font-[Inter] relative overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#cc7722]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

      {/* ── BLOGS SECTION ── */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl lg:max-w-full mx-auto px-4 sm:px-6 lg:px-16 pt-20 sm:pt-24 md:pt-28 pb-10 md:pb-20"
      >
        <h1
          className="text-3xl sm:text-4xl md:text-6xl font-black text-center text-[#cc7722] mb-10 md:mb-16 tracking-tight"
          style={{ fontFamily: "Unbounded" }}
        >
          DIGITAL MARKETING BLOGS & INSIGHTS
        </h1>

        {/* ── MOBILE carousel (hidden on md+) ── */}
        <div className="block md:hidden">
          <MobileCarousel data={blogData} cardType="blog" />
        </div>

        {/* ── DESKTOP 3-col grid with flanking arrows (hidden on mobile) ── */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex-shrink-0 w-11">
            {blogStartIndex > 0 && (
              <button onClick={prevBlogs} className={arrowBtn} aria-label="Previous Blogs">
                <ChevronLeft size={20} />
              </button>
            )}
          </div>
          <div className="flex-1 overflow-hidden p-2 -m-2 min-h-[500px]">
            <AnimatePresence mode="wait" custom={blogDirection}>
              <motion.div
                key={blogStartIndex}
                custom={blogDirection}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="grid grid-cols-3 gap-8 items-start"
              >
                {currentBlogs.map((blog) => {
              const isOpen = !!expandedBlogs[blog.id];
              return (
                <div key={blog.id} className={cardBase + " cursor-pointer"} onClick={() => toggleBlog(blog.id)}>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold leading-snug text-[#cc7722] font-[Inter]">
                      <Link to={`/blogs/${blog.slug || blog.id}`} className="hover:text-[#1b365d] transition-colors">
                        {blog.title}
                      </Link>
                    </h3>
                    <div className="relative overflow-hidden rounded-lg h-48 w-full bg-[#1a1a2e] flex items-center justify-center">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.innerHTML = `<span class="text-white/80 font-medium text-sm">${blog.fallbackText}</span>`;
                        }}
                      />
                    </div>
                    {blog.subtitle && (
                      <p className="text-sm font-semibold text-white leading-normal">{blog.subtitle}</p>
                    )}
                    <p className="text-white/90 text-sm leading-relaxed">{blog.excerpt}</p>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 mt-3 border-t border-[#cc7722]/20 flex flex-col gap-3 text-sm text-gray-300 leading-relaxed">
                            {blog.content.map((p, idx) => <p key={idx}>{p}</p>)}
                          </div>
                          <div className="flex flex-wrap gap-2 mt-3 pt-2">
                            {blog.tags.map((tag) => (
                              <span key={tag} className="bg-[#cc7722]/10 border border-[#cc7722]/35 text-[#cc7722] rounded-full px-3 py-1 text-xs font-semibold tracking-wide">{tag}</span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className="mt-4 flex items-center justify-between w-full pt-2 border-t border-[#cc7722]/20">
                      <button
                        onClick={() => toggleBlog(blog.id)}
                        className="flex items-center gap-1.5 text-xs text-white/80 font-medium italic hover:text-[#cc7722] transition-colors cursor-pointer"
                      >
                        <span>{isOpen ? "Quick Preview -" : "Quick Preview +"}</span>
                      </button>
                      <Link
                        to={`/blogs/${blog.slug || blog.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#cc7722] hover:text-white transition-colors uppercase tracking-wider"
                      >
                        Read Full Article &rarr;
                      </Link>
                    </div>
                </div>
              );
            })}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex-shrink-0 w-11">
            {blogStartIndex + 3 < blogData.length && (
              <button onClick={nextBlogs} className={arrowBtn} aria-label="Next Blogs">
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        </div>
      </motion.section>

      {/* ── CASE STUDIES SECTION ── */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl lg:max-w-full mx-auto px-4 sm:px-6 lg:px-16 py-10 md:py-16"
      >
        <h2
          className="text-3xl sm:text-4xl md:text-6xl font-black text-center text-[#cc7722] mb-10 md:mb-16 tracking-tight"
          style={{ fontFamily: "Unbounded" }}
        >
          CASE STUDIES
        </h2>

        {/* ── MOBILE carousel (hidden on md+) ── */}
        <div className="block md:hidden">
          <MobileCarousel data={caseStudyData} cardType="case" />
        </div>

        {/* ── DESKTOP 3-col grid with flanking arrows (hidden on mobile) ── */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex-shrink-0 w-11">
            {caseStartIndex > 0 && (
              <button onClick={prevCases} className={arrowBtn} aria-label="Previous Case Studies">
                <ChevronLeft size={20} />
              </button>
            )}
          </div>
          <div className="flex-1 overflow-hidden p-2 -m-2 min-h-[500px]">
            <AnimatePresence mode="wait" custom={caseDirection}>
              <motion.div
                key={caseStartIndex}
                custom={caseDirection}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="grid grid-cols-3 gap-8 items-start"
              >
                {currentCases.map((study) => {
              const isOpen = !!expandedCases[study.id];
              return (
                <div key={study.id} className={cardBase + " cursor-pointer"} onClick={() => toggleCase(study.id)}>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold leading-snug text-[#cc7722] font-[Inter]">{study.title}</h3>
                    <div className="relative overflow-hidden rounded-lg h-48 w-full bg-[#1a2a4a] flex items-center justify-center">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.innerHTML = `<span class="text-white/80 font-medium text-sm">${study.fallbackText}</span>`;
                        }}
                      />
                    </div>
                    <p className="text-sm font-semibold text-white leading-normal">{study.subtitle}</p>
                    <p className="text-white/90 text-sm leading-relaxed">{study.excerpt}</p>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 mt-3 border-t border-[#cc7722]/20 flex flex-col gap-3 text-sm text-gray-300 leading-relaxed">
                            {study.content.map((p, idx) => <p key={idx}>{p}</p>)}
                          </div>
                          <div className="flex flex-wrap gap-2 mt-3 pt-2">
                            {study.tags.map((tag) => (
                              <span key={tag} className="bg-[#cc7722]/10 border border-[#cc7722]/35 text-[#cc7722] rounded-full px-3 py-1 text-xs font-semibold tracking-wide">{tag}</span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <button
                    onClick={() => toggleCase(study.id)}
                    className="mt-4 flex items-center gap-2 text-sm text-white font-medium italic transition-colors duration-200 hover:text-[#cc7722] active:text-[#cc7722] self-start"
                  >
                    <span>{isOpen ? "Read Less" : "Read More"}</span>
                    <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>
              );
            })}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex-shrink-0 w-11">
            {caseStartIndex + 3 < caseStudyData.length && (
              <button onClick={nextCases} className={arrowBtn} aria-label="Next Case Studies">
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <div className="pt-10">
        <Footer />
      </div>
    </div>
    </>
  );
};

export default Blogs;