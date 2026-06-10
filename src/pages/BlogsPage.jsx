import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";

const blogData = [
  {
    id: "blog-1",
    title: "Building Scalable Business Growth Through Digital Channels",
    excerpt: "Digital marketing has become a core driver of business growth in 2026, enabling brands to reach targeted audiences through SEO.",
    content: [
      "In today's hyper-connected digital landscape, businesses that leverage multi-channel strategies experience significantly higher growth rates than those relying on a single platform. From Google Ads to organic social, the key is building an integrated funnel.",
      "Scalable growth requires data-driven decisions—tracking customer acquisition costs, lifetime value, and conversion rates at every stage. Companies that invest in marketing automation and CRM tools see 3x more leads with 50% less effort.",
      "At Spark Tech, we've helped Chennai-based businesses scale from local presence to nationwide reach by combining SEO, paid media, and conversion-optimized landing pages into one cohesive strategy."
    ],
    tags: ["Digital Marketing", "Growth Strategy", "SEO", "Automation"]
  },
  {
    id: "blog-2",
    title: "Improving Search Engine Visibility with SEO Strategies",
    excerpt: "Digital marketing has become a core driver of business growth in 2026, enabling brands to reach targeted audiences through SEO.",
    content: [
      "Search Engine Optimization in 2026 goes far beyond keywords. Google's AI-driven algorithms now prioritize E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness), meaning content quality and domain authority matter more than ever.",
      "Technical SEO fundamentals—Core Web Vitals, structured data, mobile-first indexing—form the backbone of any successful campaign. Without a solid technical foundation, even the best content will struggle to rank.",
      "Our SEO teams at Spark Tech conduct deep site audits, competitor gap analyses, and content strategies that consistently push clients to page 1 within 90 days for competitive keywords."
    ],
    tags: ["SEO", "Technical SEO", "Content Strategy", "Rankings"]
  },
  {
    id: "blog-3",
    title: "Building Strong Brand Presence Across Social Platforms",
    excerpt: "Digital marketing has become a core driver of business growth in 2026, enabling brands to reach targeted audiences through SEO.",
    content: [
      "Brand presence isn't just about posting consistently—it's about creating a distinctive voice and visual identity that resonates across Instagram, LinkedIn, YouTube, and emerging platforms like Threads and BeReal.",
      "The most effective social strategies in 2026 blend organic storytelling with paid amplification. User-generated content, influencer collaborations, and community-driven campaigns generate authentic engagement that paid ads alone can't replicate.",
      "Spark Tech's social media team crafts platform-specific content calendars, manages brand reputation, and runs targeted ad campaigns that turn followers into paying customers."
    ],
    tags: ["Social Media", "Branding", "Content Creation", "Instagram"]
  }
];

const caseStudyData = [
  {
    id: "case-1",
    title: "How AI is Transforming Digital Marketing",
    subtitle: "Artificial Intelligence in Modern Marketing",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=500&q=80",
    fallbackText: "AI & Digital Marketing",
    excerpt: "AI tools are reshaping how brands analyze data, personalize experiences, and automate campaigns at scale.",
    content: [
      "Artificial Intelligence has moved from buzzword to essential business tool. In digital marketing, AI powers predictive analytics, dynamic ad creative, chatbots, and hyper-personalized email sequences—all running 24/7 without human intervention.",
      "Machine learning models can now identify high-value audience segments, predict customer churn, and optimize ad bids in real time. Brands using AI-powered marketing see an average 40% improvement in campaign ROI.",
      "Case study: We helped a Chennai e-commerce brand implement AI-based product recommendation engines, resulting in a 65% increase in average order value within 60 days."
    ],
    tags: ["Artificial Intelligence", "Automation", "Machine Learning"]
  },
  {
    id: "case-2",
    title: "Importance of UI Design in Digital Marketing",
    subtitle: "Enhancing User Experience to Drive Conversions",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&q=80",
    fallbackText: "UI/UX Design",
    excerpt: "Great UI isn't just aesthetics—it directly impacts conversion rates, bounce rates, and customer retention.",
    content: [
      "User Interface design bridges the gap between a brand's message and its audience. A well-designed landing page can boost conversions by up to 200%, while a poor UX can drain your ad spend with zero returns.",
      "Key principles include clear visual hierarchy, fast load times, mobile-first design, and strategic CTA placement. Every pixel on a marketing page should have a purpose—guiding the user toward a desired action.",
      "Spark Tech's design team has redesigned over 50 marketing funnels, consistently achieving 30–80% conversion rate improvements through data-informed UX decisions."
    ],
    tags: ["UI/UX", "Conversion Rate", "Web Design"]
  },
  {
    id: "case-3",
    title: "Google Ads vs Facebook Ads: A Complete Comparison",
    subtitle: "Choosing the Right Paid Advertising Platform",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&q=80",
    fallbackText: "Google Ads vs Facebook Ads",
    excerpt: "Understanding when to use Google Ads versus Facebook Ads can make or break your paid media ROI.",
    content: [
      "Google Ads captures demand—users actively searching for a product or service. Facebook Ads creates demand by targeting users based on interests, behaviors, and demographics before they're even aware they need you. Both have their place.",
      "For high-intent purchases (legal, medical, home services), Google Search ads typically yield superior ROI. For brand awareness, product discovery, and retargeting, Meta's ad ecosystem is unmatched with its 3 billion+ user base.",
      "Our media buyers at Spark Tech run both platforms simultaneously, using cross-channel attribution to determine the optimal budget split—often achieving a blended ROAS of 6x or higher for our e-commerce clients."
    ],
    tags: ["Google Ads", "Facebook Ads", "Paid Media", "ROAS"]
  }
];

const Blogs = () => {
  const [expandedBlogs, setExpandedBlogs] = useState({});
  const [expandedCases, setExpandedCases] = useState({});

  const toggleBlog = (id) => setExpandedBlogs((prev) => ({ ...prev, [id]: !prev[id] }));
  const toggleCase = (id) => setExpandedCases((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <div
      className="min-h-screen text-white font-[Inter] relative overflow-hidden"
      style={{
        backgroundColor: "#0a0a0a",
        backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.045) 1px, transparent 0)",
        backgroundSize: "28px 28px",
      }}
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#f0c417]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

      {/* ── HERO VIDEO SECTION ── */}
      <section className="w-full pt-24 pb-10 px-6">
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border-2 border-[#f0c417]/40 shadow-[0_0_60px_rgba(240,196,23,0.12)]">
          <video
            src="/Blogsvideo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
            style={{ maxHeight: "520px" }}
          />
        </div>
      </section>

      {/* ── BLOGS SECTION ── */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <h2
          className="text-4xl md:text-6xl font-black text-center text-[#f0c417] mb-16 tracking-tight"
          style={{ fontFamily: "Unbounded" }}
        >
          BLOGS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogData.map((blog) => {
            const isOpen = !!expandedBlogs[blog.id];
            return (
              <div
                key={blog.id}
                className="bg-[#111111] border-2 border-[#f0c417]/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(240,196,23,0.15)]"
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold leading-snug text-white font-[Inter]">
                    {blog.title}
                  </h3>
                  <p className="text-gray-300 text-sm italic leading-relaxed">
                    {blog.excerpt}
                  </p>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-[#f0c417]/20 flex flex-col gap-3 text-sm text-gray-300 leading-relaxed">
                          {blog.content.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4 pt-2">
                          {blog.tags.map((tag) => (
                            <span
                              key={tag}
                              className="bg-[#f0c417]/10 border border-[#f0c417]/35 text-[#f0c417] rounded-full px-3 py-1 text-xs font-semibold tracking-wide"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  onClick={() => toggleBlog(blog.id)}
                  className="mt-6 flex items-center gap-2 text-sm text-white font-medium italic transition-colors duration-200 hover:text-[#f0c417] self-start"
                >
                  <span>{isOpen ? "Read Less" : "Read More"}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CASE STUDIES SECTION ── */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <h2
          className="text-4xl md:text-6xl font-black text-center text-[#f0c417] mb-16 tracking-tight"
          style={{ fontFamily: "Unbounded" }}
        >
          CASE STUDIES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudyData.map((study) => {
            const isOpen = !!expandedCases[study.id];
            return (
              <div
                key={study.id}
                className="bg-[#111111] border-2 border-[#f0c417]/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(240,196,23,0.15)]"
              >
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold leading-snug text-[#f0c417] font-[Inter]">
                    {study.title}
                  </h3>

                  <div className="relative overflow-hidden rounded-lg h-48 w-full bg-[#1a2a4a] flex items-center justify-center">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML = `<span class="text-gray-400 font-medium text-sm">${study.fallbackText}</span>`;
                      }}
                    />
                  </div>

                  <p className="text-sm font-semibold text-white leading-normal">
                    {study.subtitle}
                  </p>
                  <p className="text-gray-300 text-sm italic leading-relaxed">
                    {study.excerpt}
                  </p>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-[#f0c417]/20 flex flex-col gap-3 text-sm text-gray-300 leading-relaxed">
                          {study.content.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4 pt-2">
                          {study.tags.map((tag) => (
                            <span
                              key={tag}
                              className="bg-[#f0c417]/10 border border-[#f0c417]/35 text-[#f0c417] rounded-full px-3 py-1 text-xs font-semibold tracking-wide"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  onClick={() => toggleCase(study.id)}
                  className="mt-6 flex items-center gap-2 text-sm text-white font-medium italic transition-colors duration-200 hover:text-[#f0c417] self-start"
                >
                  <span>{isOpen ? "Read Less" : "Read More"}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <div className="pt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Blogs;