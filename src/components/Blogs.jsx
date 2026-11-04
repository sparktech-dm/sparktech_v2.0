import React, { useState, useRef } from "react";
import { ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import { Helmet } from "react-helmet-async";
import Seo from "./Seo";
import { Link } from "react-router-dom";

export const blogData = [
  {
    id: "blog-1",
    slug: "grow-your-business-with-digital-marketing-strategies",
    title: "Grow Your Business with Digital Marketing Strategies",
    subtitle: "SEO & Digital Marketing",
    image: "/Blog1.webp",
    fallbackText: "SEO & Digital Marketing",
    author: {
      name: "Spark Tech Digital"
    },
    datePublished: "2025-01-15T09:00:00.000Z",
    dateModified: "2025-01-15T09:00:00.000Z",
    excerpt: "Discover proven digital marketing strategies to increase qualified lead flow, build enduring brand authority, and maximize return on investment.",
    content: [
      "In an increasingly crowded digital landscape, growing a sustainable business requires more than just ad hoc promotional efforts. Modern digital marketing is an integrated system where search engine visibility, custom web architecture, targeted paid advertising, and audience engagement reinforce each other.",
      "A successful digital marketing strategy begins by deeply understanding customer search intent and friction points along the buyer journey. By building tailored acquisition funnels and measuring user behaviour with granular analytics, businesses can achieve predictable revenue growth without wasting marketing spend."
    ],
    sections: [
      {
        heading: "The Foundation of an Integrated Digital Marketing Strategy",
        paragraphs: [
          "In today's digital economy, businesses cannot afford to rely on a single channel for lead generation. Relying solely on paid advertising often leads to escalating customer acquisition costs, while relying only on word of mouth restricts market reach. An effective digital marketing strategy integrates search engine optimization, content marketing, paid search, and social media engagement into a cohesive growth engine.",
          "At SparkTech Digital, our experience across diverse industries in Chennai demonstrates that companies with cross-channel digital strategies achieve significantly higher conversion rates. By aligning brand messaging across every customer touchpoint, businesses build trust faster and guide high-intent prospects naturally from discovery to purchase."
        ]
      },
      {
        heading: "Key Pillars for Sustainable Online Growth",
        paragraphs: [
          "1. Search Engine Optimization (SEO): Organic visibility remains the most cost-effective long-term growth driver. A comprehensive SEO strategy encompasses technical site health, on-page content alignment, and local search optimization.",
          "2. Conversion-Focused Web Architecture: Driving traffic to an unoptimized website results in lost revenue. Fast loading speeds, mobile responsiveness, and intuitive navigation turn visitors into qualified leads.",
          "3. Strategic Paid Advertising (PPC): When you need immediate traction or want to target high-intent search queries, well-managed Google Ads campaigns deliver predictable return on investment.",
          "4. Audience Engagement & Email Flows: Nurturing existing prospects through automated email workflows and social media touchpoints keeps your brand top of mind and drives repeat business."
        ]
      },
      {
        heading: "Measuring Performance with Data-Driven Analytics",
        paragraphs: [
          "A strategy without rigorous analytics is merely guesswork. Implementing modern event tracking with Google Analytics 4 allows growth teams to monitor specific user actions, identifying exactly which campaigns generate the highest return on ad spend.",
          "Continuous iteration based on verifiable user data ensures your marketing budget is deployed efficiently, unlocking sustainable scale for your business."
        ]
      }
    ],
    tags: ["Digital Marketing", "Business Growth", "Online Marketing", "SEO"]
  },
  {
    id: "blog-2",
    slug: "improve-website-rankings-with-seo",
    title: "Improve Website Rankings with Search Engine Optimization (SEO)",
    subtitle: "SEARCH ENGINE OPTIMIZATION",
    image: "/Blog2.webp",
    fallbackText: "SEARCH ENGINE OPTIMIZATION",
    author: {
      name: "Spark Tech Digital"
    },
    datePublished: "2025-01-22T10:00:00.000Z",
    dateModified: "2025-01-22T10:00:00.000Z",
    excerpt: "Learn how to systematically optimize your website architecture, content, and local presence to achieve dominant Google rankings.",
    content: [
      "Search Engine Optimization (SEO) helps businesses increase their visibility on search engines and attract organic traffic. Effective SEO includes keyword research, technical optimization, high-quality content, and link building to improve website performance.",
      "By focusing on user experience and search intent, businesses can achieve sustainable rankings and reach potential customers without relying entirely on paid advertising."
    ],
    sections: [
      {
        heading: "Understanding the Core Pillars of Modern Search Engine Optimization",
        paragraphs: [
          "Search engines have evolved from basic keyword matching algorithms into sophisticated evaluation systems that prioritize user experience, search intent, and topical authority. To rank competitively on Google today, businesses must implement a balanced SEO framework combining technical optimization, on-page relevance, and authoritative off-page signals.",
          "For regional businesses and enterprises in Chennai, local search optimization is equally critical. Ensuring your business information is consistent across Google Business Profile, local directories, and website metadata helps capture high-intent local queries."
        ]
      },
      {
        heading: "Technical SEO: Building a Stable Digital Foundation",
        paragraphs: [
          "Technical SEO ensures that search engine crawlers can efficiently discover, parse, and index every critical page on your site. Key technical elements include maintaining clean XML sitemaps, implementing canonical tags to prevent duplicate content penalties, ensuring mobile responsiveness, and optimizing Core Web Vitals.",
          "When a website loads in under two seconds and presents structured data (JSON-LD schemas), search engines can reward it with higher rankings and rich snippet features in search results."
        ]
      },
      {
        heading: "On-Page Optimization and Content Quality",
        paragraphs: [
          "On-page SEO revolves around matching the exact search intent of your prospective customers. This involves strategic placement of primary and secondary keywords in title tags, meta descriptions, and semantic heading tags (H1, H2, H3), supported by comprehensive, well-researched body content.",
          "Creating authoritative content that thoroughly addresses user questions not only improves search rankings but also keeps visitors engaged, reducing bounce rates and boosting conversions."
        ]
      }
    ],
    tags: ["SEO", "Organic Traffic", "Keyword Research", "Website Ranking"]
  },
  {
    id: "blog-3",
    slug: "build-website-that-converts-visitors-into-customers",
    title: "Build a Website That Converts Visitors into Customers",
    subtitle: "WEBSITE DEVELOPMENT",
    image: "/Blog3.webp",
    fallbackText: "WEBSITE DEVELOPMENT",
    author: {
      name: "Spark Tech Digital"
    },
    datePublished: "2025-02-05T11:30:00.000Z",
    dateModified: "2025-02-05T11:30:00.000Z",
    excerpt: "Transform your website from a passive digital brochure into a high-converting lead generation machine with user-centric UI/UX and fast performance.",
    content: [
      "A website is more than an online brochure—it's the foundation of your digital presence. Fast loading speeds, responsive design, intuitive navigation, and SEO-friendly development all contribute to better user experiences and higher conversion rates.",
      "A professionally developed website builds trust, improves engagement, and supports your overall marketing strategy."
    ],
    sections: [
      {
        heading: "The Role of Web Architecture in Business Conversion",
        paragraphs: [
          "A modern website serves as the central hub of your entire digital presence. Whether prospects discover your brand through organic search, social media campaigns, or direct referrals, your website is where their decision to engage or leave takes place. Beautiful visuals alone are insufficient if the site fails to guide visitors smoothly toward a conversion goal.",
          "Effective web development balances visual appeal with intentional information architecture. By placing clear calls to action, concise value propositions, and credible trust badges in prominent positions, businesses dramatically reduce conversion friction."
        ]
      },
      {
        heading: "Core Performance Factors That Drive Conversions",
        paragraphs: [
          "1. Lightning Speed: Studies consistently demonstrate that every second of page load delay reduces conversion rates. Modern frameworks like React and Vite allow developers to build lightweight, fast-loading interfaces.",
          "2. Seamless Mobile Responsiveness: With mobile traffic exceeding 60% across most industries, your website must render flawlessly on smartphones and tablets, offering tap-friendly touch targets and readable typography.",
          "3. Clear Visual Hierarchy: Using contrasting buttons, structured grids, and clean whitespace allows visitors to quickly scan benefits, explore services, and contact your team."
        ]
      },
      {
        heading: "Integrating Conversion Tracking and Lead Capture",
        paragraphs: [
          "A high-performing website must be equipped with streamlined lead capture forms and integrated analytics. Ensuring forms are easy to complete on mobile devices and connected to automated email workflows guarantees that every inbound inquiry is addressed promptly.",
          "Investing in professional web development ensures your digital storefront works tirelessly as a 24/7 sales representative for your brand."
        ]
      }
    ],
    tags: ["Website Development", "UI/UX", "Responsive Design", "Web Design"]
  },
  {
    id: "blog-4",
    slug: "maximize-roi-with-google-ads-campaigns",
    title: "Maximize ROI with Google Ads Campaigns",
    subtitle: "GOOGLE ADS & PPC",
    image: "/Blog4.webp",
    fallbackText: "GOOGLE ADS & PPC",
    author: {
      name: "Spark Tech Digital"
    },
    datePublished: "2025-02-18T14:00:00.000Z",
    dateModified: "2025-02-18T14:00:00.000Z",
    excerpt: "Discover how strategic keyword targeting, high-converting ad copy, and smart bidding can turn Google Ads into a predictable profit center.",
    content: [
      "Google Ads allows businesses to reach customers at the exact moment they are searching for products or services. Well-structured campaigns, targeted keywords, compelling ad copy, and continuous optimization help improve conversions while reducing advertising costs.",
      "Combining paid advertising with SEO creates a balanced strategy for long term business growth."
    ],
    sections: [
      {
        heading: "Why Google Ads Delivers Immediate Commercial Intent",
        paragraphs: [
          "Unlike passive advertising channels where you interrupt users during entertainment or browsing, Google Search Ads connect your business with buyers at the precise moment they exhibit purchase intent. When a prospect types 'digital marketing agency near me' or searches for specific solutions, they are actively looking to solve a problem.",
          "However, navigating Google's advertising ecosystem requires disciplined campaign structuring. Misconfigured match types or unoptimized bidding strategies can quickly exhaust marketing budgets without delivering qualified leads."
        ]
      },
      {
        heading: "Critical Strategies for High-ROI PPC Campaigns",
        paragraphs: [
          "1. Granular Keyword Research and Negative Keywords: Focus on high-intent long-tail keywords while aggressively maintaining a negative keyword list to prevent wasted clicks from irrelevant searches.",
          "2. Landing Page Alignment: The messaging in your ad copy must seamlessly match the headline and offer on your destination landing page. A tight correlation improves Google Quality Scores and lowers cost-per-click.",
          "3. Smart Bidding and Conversion Tracking: Utilizing Google Ads conversion tracking ensures your bidding strategy is optimized for actual leads and customer acquisitions rather than mere impressions."
        ]
      },
      {
        heading: "Combining PPC with Long-Term SEO for Maximum Market Coverage",
        paragraphs: [
          "The most effective digital growth strategies leverage Google Ads and organic SEO in tandem. Paid search provides immediate traffic, competitive intelligence, and instant keyword conversion data, while organic SEO builds enduring brand equity and lowers overall blended acquisition costs.",
          "Regular performance audits and creative experimentation ensure your ad spend continues to produce measurable business returns."
        ]
      }
    ],
    tags: ["Google Ads", "PPC", "Paid Advertising", "Lead Generation"]
  },
  {
    id: "blog-5",
    slug: "build-strong-customer-relationships-through-social-media",
    title: "Build Strong Customer Relationships Through Social Media",
    subtitle: "SOCIAL MEDIA MARKETING",
    image: "/Blog5.webp",
    fallbackText: "SOCIAL MEDIA MARKETING",
    author: {
      name: "Spark Tech Digital"
    },
    datePublished: "2025-03-01T08:30:00.000Z",
    dateModified: "2025-03-01T08:30:00.000Z",
    excerpt: "Learn how to build authentic customer relationships, elevate brand recall, and cultivate an active community across modern social media platforms.",
    content: [
      "Social media marketing helps businesses connect with their audience, increase brand awareness, and build customer trust. Creating valuable content, engaging with followers, and maintaining a consistent brand voice are key to long-term success.",
      "A strategic approach to social media helps businesses generate leads while strengthening customer relationships."
    ],
    sections: [
      {
        heading: "Moving Beyond Follower Counts to Genuine Community Engagement",
        paragraphs: [
          "In today's social media landscape, vanity metrics such as follower counts provide little value if your audience is not actively engaged. Modern social algorithms on platforms like LinkedIn, Instagram, and Meta prioritize meaningful conversations, saves, shares, and authentic interactions.",
          "For businesses seeking sustainable growth, social media should be viewed as a two-way communication channel. By sharing educational content, industry insights, and behind-the-scenes stories, brands establish authentic human connections that differentiate them from competitors."
        ]
      },
      {
        heading: "Key Strategies for Multi-Platform Social Success",
        paragraphs: [
          "1. Tailored Platform Strategy: B2B brands thrive by establishing thought leadership and professional authority on LinkedIn, while B2C businesses connect through visually compelling reels and stories on Instagram.",
          "2. Consistent Brand Identity: Maintaining consistent color palettes, typography, and brand voice across all digital channels ensures instant brand recognition.",
          "3. Active Community Management: Responding promptly to comments, direct messages, and brand mentions shows customers that your team values their perspective, fostering enduring loyalty."
        ]
      },
      {
        heading: "Bridging Social Engagement with Lead Generation",
        paragraphs: [
          "While brand awareness is essential, social media must also support commercial outcomes. Providing clear pathways for followers to download helpful guides, explore your services, or contact your team turns casual followers into qualified sales prospects.",
          "A consistent, value-first social strategy establishes authority, nurtures long-term relationships, and fuels your broader digital marketing pipeline."
        ]
      }
    ],
    tags: ["Social Media Marketing", "Branding", "Instagram Marketing", "Customer Engagement"]
  },
  {
    id: "blog-6",
    slug: "why-quality-content-matters-for-seo-and-brand-growth",
    title: "Why Quality Content Matters for SEO and Brand Growth",
    subtitle: "CONTENT MARKETING",
    image: "/Blog6.webp",
    fallbackText: "CONTENT MARKETING",
    author: {
      name: "Spark Tech Digital"
    },
    datePublished: "2025-03-10T09:45:00.000Z",
    dateModified: "2025-03-10T09:45:00.000Z",
    excerpt: "Explore how high-quality, intent-driven content establishes industry authority, fuels search rankings, and guides prospects through the sales funnel.",
    content: [
      "Content marketing is one of the most valuable long-term investments for any business. Publishing informative blogs, helpful guides, and engaging website content improves search visibility while building trust with potential customers.",
      "High-quality content supports SEO, answers customer questions, and positions your business as an industry expert."
    ],
    sections: [
      {
        heading: "Content as the Backbone of Search and Customer Decision-Making",
        paragraphs: [
          "Every search query represents a customer asking a question or seeking a solution. When your business consistently produces in-depth, authoritative content that answers these questions accurately, search engines recognize your site as a trusted topical authority.",
          "Quality content serves a dual purpose: it attracts search engine crawlers through natural keyword usage and semantic relevance, while simultaneously reassuring prospective customers that your team possesses the expertise needed to solve their challenges."
        ]
      },
      {
        heading: "Attributes of High-Impact Digital Content",
        paragraphs: [
          "1. Intent-Driven Architecture: Quality content addresses specific user intent—whether informational, navigational, or transactional—providing direct, actionable solutions.",
          "2. Strategic Internal Linking: Contextually linking your articles to relevant service offerings and case studies helps users navigate your knowledge base and distributes page authority across your domain.",
          "3. Evergreen Value: Creating comprehensive resources and foundational guides ensures your articles continue attracting organic visitors and generating leads for months and years after publication."
        ]
      },
      {
        heading: "Turning Readers into Inbound Opportunities",
        paragraphs: [
          "Publishing valuable content without a clear conversion path limits its commercial impact. Every article should naturally guide readers toward a logical next step—such as scheduling a strategy consultation or requesting a quote.",
          "When combined with technical SEO and responsive design, strategic content marketing becomes your most reliable engine for sustainable business growth."
        ]
      }
    ],
    tags: ["Content Marketing", "SEO", "Content Strategy", "Business Growth"]
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
        title="Digital Marketing Blog & Insights | SparkTech Digital"
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