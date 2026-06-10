import React, { useState, useRef } from "react";
import { ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";

const blogData = [
  {
    id: "blog-1",
    title: "Building Scalable Business Growth Through Digital",
    image: "/Digital Marketing Foundations You Can't Ignore.webp",
    fallbackText: "Digital Marketing Growth",
    excerpt: "Digital marketing has become a core driver of business growth in 2026, enabling brands to reach targeted audiences through SEO.",
    content: [
      "In today's hyper-connected digital landscape, businesses that leverage multi-channel strategies experience significantly higher growth rates than those relying on a single platform. From Google Ads to organic social, the key is building an integrated funnel.",
      "Scalable growth requires data-driven decisions—tracking customer acquisition costs, lifetime value, and conversion rates at every stage. Companies that invest in marketing automation and CRM tools see 3x more leads with 50% less effort.",
      "At Spark Tech, we've helped Chennai-based businesses scale from local presence to nationwide reach by combining SEO, paid."
    ],
    tags: ["Digital Marketing", "Growth Strategy", "SEO", "Automation"]
  },
  {
    id: "blog-2",
    title: "Improving Search Engine Visibility with SEO Strategies",
    image: "/576953402309831560.webp",
    fallbackText: "SEO Strategies",
    excerpt: "Digital marketing has become a core driver of business growth in 2026, enabling brands to reach targeted audiences through SEO.",
    content: [
      "Search Engine Optimization in 2026 goes far beyond keywords. Google's AI-driven algorithms now prioritize E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness), meaning content quality and domain authority matter more than ever.",
      "Technical SEO fundamentals—Core Web Vitals, structured data, mobile-first indexing—form the backbone of any successful campaign. Without a solid technical foundation, even the best content will struggle to rank.",
      "Our SEO teams at Spark Tech conduct deep site audits, competitor gap analyses, and content strategies that consistently push clients to page 1 within 90 days."
    ],
    tags: ["SEO", "Technical SEO", "Content Strategy", "Rankings"]
  },
  {
    id: "blog-3",
    title: "Building Strong Brand Presence Across Social",
    image: "/Advanced SEO Strategy_ Magnifying Data for Digital Success.webp",
    fallbackText: "Social Media Branding",
    excerpt: "Digital marketing has become a core driver of business growth in 2026, enabling brands to reach targeted audiences through SEO.",
    content: [
      "Brand presence isn't just about posting consistently—it's about creating a distinctive voice and visual identity that resonates across Instagram, LinkedIn, YouTube, and emerging platforms like Threads and BeReal.",
      "The most effective social strategies in 2026 blend organic storytelling with paid amplification. User-generated content, influencer collaborations, and community-driven campaigns generate authentic engagement that paid ads alone can't replicate.",
      "Spark Tech's social media team crafts platform-specific content calendars, manages brand reputation, and runs targeted ad campaigns that turn follower."
    ],
    tags: ["Social Media", "Branding", "Content Creation", "Instagram"]
  },
  {
    id: "blog-4",
    title: "Building Scalable Business Growth Through Digital",
    image: "/Digital Marketing Foundations You Can't Ignore.webp",
    fallbackText: "Digital Marketing Growth",
    excerpt: "Digital marketing has become a core driver of business growth in 2026, enabling brands to reach targeted audiences through SEO.",
    content: [
      "In today's hyper-connected digital landscape, businesses that leverage multi-channel strategies experience significantly higher growth rates than those relying on a single platform. From Google Ads to organic social, the key is building an integrated funnel.",
      "Scalable growth requires data-driven decisions—tracking customer acquisition costs, lifetime value, and conversion rates at every stage. Companies that invest in marketing automation and CRM tools see 3x more leads with 50% less effort.",
      "At Spark Tech, we've helped Chennai-based businesses scale from local presence to nationwide reach by combining SEO, paid."
    ],
    tags: ["Digital Marketing", "Growth Strategy", "SEO", "Automation"]
  },
  {
    id: "blog-5",
    title: "Improving Search Engine Visibility with SEO Strategies",
    image: "/576953402309831560.webp",
    fallbackText: "SEO Strategies",
    excerpt: "Digital marketing has become a core driver of business growth in 2026, enabling brands to reach targeted audiences through SEO.",
    content: [
      "Search Engine Optimization in 2026 goes far beyond keywords. Google's AI-driven algorithms now prioritize E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness), meaning content quality and domain authority matter more than ever.",
      "Technical SEO fundamentals—Core Web Vitals, structured data, mobile-first indexing—form the backbone of any successful campaign. Without a solid technical foundation, even the best content will struggle to rank.",
      "Our SEO teams at Spark Tech conduct deep site audits, competitor gap analyses, and content strategies that consistently push clients to page 1 within 90 days."
    ],
    tags: ["SEO", "Technical SEO", "Content Strategy", "Rankings"]
  },
  {
    id: "blog-6",
    title: "Building Strong Brand Presence Across Social",
    image: "/Advanced SEO Strategy_ Magnifying Data for Digital Success.webp",
    fallbackText: "Social Media Branding",
    excerpt: "Digital marketing has become a core driver of business growth in 2026, enabling brands to reach targeted audiences through SEO.",
    content: [
      "Brand presence isn't just about posting consistently—it's about creating a distinctive voice and visual identity that resonates across Instagram, LinkedIn, YouTube, and emerging platforms like Threads and BeReal.",
      "The most effective social strategies in 2026 blend organic storytelling with paid amplification. User-generated content, influencer collaborations, and community-driven campaigns generate authentic engagement that paid ads alone can't replicate.",
      "Spark Tech's social media team crafts platform-specific content calendars, manages brand reputation, and runs targeted ad campaigns that turn followers."
    ],
    tags: ["Social Media", "Branding", "Content Creation", "Instagram"]
  }
];

const caseStudyData = [
  {
    id: "case-1",
    title: "How AI is Transforming Digital Marketing",
    subtitle: "Artificial Intelligence in Modern Marketing",
    image: "/Digital Marketing Foundations You Can't Ignore.webp",
    fallbackText: "AI & Digital Marketing",
    excerpt: "AI tools are reshaping how brands analyze data, personalize experiences, and automate campaigns at scale.",
    content: [
      "Artificial Intelligence has moved from buzzword to essential business tool. In digital marketing, AI powers predictive analytics, dynamic ad creative, chatbots, and hyper-personalized email sequences—all running 24/7.",
      "Machine learning models can now identify high-value audience segments, predict customer churn, and optimize ad bids in real time. Brands using AI-powered marketing see an average 40% improvement.",
      "Case study: We helped a Chennai e-commerce brand implement AI-based product recommendation engines, resulting in a 65% increase in average order value."
    ],
    tags: ["AI", "Automation", "Machine Learning"]
  },
  {
    id: "case-2",
    title: "Importance of UI Design in Digital Marketing",
    subtitle: "Enhancing User Experience to Drive-",
    image: "/576953402309831560.webp",
    fallbackText: "UI/UX Design",
    excerpt: "Great UI isn't just aesthetics—it directly impacts conversion rates, bounce rates, and customer retention.",
    content: [
      "User Interface design bridges the gap between a brand's message and its audience. A well-designed landing page can boost conversions by up to 200%, while a poor UX can drain your ad spend with zero returns.",
      "Key principles include clear visual hierarchy, fast load times, mobile-first design, and strategic CTA placement. Every pixel on a marketing page should have a purpose—guiding the user toward a desired action.",
      "Spark Tech's design team has redesigned over 50 marketing funnels, consistently achieving 30–80% conversion rate improvements through data-informed."
    ],
    tags: ["UI/UX", "Conversion", "Web Design"]
  },
  {
    id: "case-3",
    title: "Google Ads vs Facebook Ads: A Complete Comparison",
    subtitle: "Choosing the Right Paid Advertising",
    image: "/Advanced SEO Strategy_ Magnifying Data for Digital Success.webp",
    fallbackText: "Google Ads vs Facebook Ads",
    excerpt: "Understanding when to use Google Ads versus Facebook Ads can make or break your paid media ROI.",
    content: [
      "Google Ads captures demand—users actively searching for a product or service. Facebook Ads creates demand by targeting users based on interests, behaviors, and demographics before they're even aware they need you.",
      "For high-intent purchases (legal, medical, home services), Google Search ads typically yield superior ROI. For brand awareness, product discovery, and retargeting, Meta's ad ecosystem is unmatched.",
      "Our media buyers at Spark Tech run both platforms simultaneously, using cross-channel attribution to determine the optimal budget split often achieving."
    ],
    tags: ["GoogleAds", "FacebookAds", "ROAS"]
  },
  {
    id: "case-4",
    title: "How AI is Transforming Digital Marketing",
    subtitle: "Artificial Intelligence in Modern Marketing",
    image: "/Digital Marketing Foundations You Can't Ignore.webp",
    fallbackText: "AI & Digital Marketing",
    excerpt: "AI tools are reshaping how brands analyze data, personalize experiences, and automate campaigns at scale.",
    content: [
      "Artificial Intelligence has moved from buzzword to essential business tool. In digital marketing, AI powers predictive analytics, dynamic ad creative, chatbots, and hyper-personalized email sequences—all running 24/7.",
      "Machine learning models can now identify high-value audience segments, predict customer churn, and optimize ad bids in real time. Brands using AI-powered marketing see an average 40% improvement.",
      "Case study: We helped a Chennai e-commerce brand implement AI-based product recommendation engines, resulting in a 65% increase in average order value."
    ],
    tags: ["AI", "Automation", "Machine Learning"]
  },
  {
    id: "case-5",
    title: "Importance of UI Design in Digital Marketing",
    subtitle: "Enhancing User Experience to Drive-",
    image: "/576953402309831560.webp",
    fallbackText: "UI/UX Design",
    excerpt: "Great UI isn't just aesthetics—it directly impacts conversion rates, bounce rates, and customer retention.",
    content: [
      "User Interface design bridges the gap between a brand's message and its audience. A well-designed landing page can boost conversions by up to 200%, while a poor UX can drain your ad spend with zero returns.",
      "Key principles include clear visual hierarchy, fast load times, mobile-first design, and strategic CTA placement. Every pixel on a marketing page should have a purpose—guiding the user toward a desired action.",
      "Spark Tech's design team has redesigned over 50 marketing funnels, consistently achieving 30–80% conversion rate improvements through data-informed."
    ],
    tags: ["UI/UX", "Conversion", "Web Design"]
  },
  {
    id: "case-6",
    title: "Google Ads vs Facebook Ads: A Complete Comparison",
    subtitle: "Choosing the Right Paid Advertising",
    image: "/Advanced SEO Strategy_ Magnifying Data for Digital Success.webp",
    fallbackText: "Google Ads vs Facebook Ads",
    excerpt: "Understanding when to use Google Ads versus Facebook Ads can make or break your paid media ROI.",
    content: [
      "Google Ads captures demand—users actively searching for a product or service. Facebook Ads creates demand by targeting users based on interests, behaviors, and demographics before they're even aware they need you.",
      "For high-intent purchases (legal, medical, home services), Google Search ads typically yield superior ROI. For brand awareness, product discovery, and retargeting, Meta's ad ecosystem is unmatched.",
      "Our media buyers at Spark Tech run both platforms simultaneously, using cross-channel attribution to determine the optimal budget split often achieving."
    ],
    tags: ["GoogleAds", "FacebookAds", "ROAS"]
  }
];

/* ─────────────────────────────────────────
   Mobile single-card carousel component
───────────────────────────────────────── */
const MobileCarousel = ({ data, cardType }) => {
  const [index, setIndex] = useState(0);
  const [expandedId, setExpandedId] = useState(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const MIN_SWIPE = 50;
  const total = data.length;

  const goNext = () => {
    if (index < total - 1) { setExpandedId(null); setIndex((i) => i + 1); }
  };
  const goPrev = () => {
    if (index > 0) { setExpandedId(null); setIndex((i) => i - 1); }
  };

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchMove  = (e) => { touchEndX.current = e.touches[0].clientX; };
  const onTouchEnd   = () => {
    if (touchStartX.current === null) return;
    const endX = touchEndX.current ?? touchStartX.current;
    const diff = touchStartX.current - endX;
    if (Math.abs(diff) >= MIN_SWIPE) { diff > 0 ? goNext() : goPrev(); }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const item = data[index];
  const isOpen = expandedId === item.id;
  const isBlog = cardType === "blog";

  return (
    <div className="flex items-center gap-3 w-full">
      <div className="flex-shrink-0 w-10">
        {index > 0 && (
          <button onClick={goPrev} className="flex items-center justify-center w-10 h-10 rounded-xl border-2 border-[#f0c417] text-[#f0c417] bg-[#111111] hover:bg-[#f0c417]/10 active:bg-[#f0c417]/20 transition-all duration-200 shadow-[0_4px_12px_rgba(240,196,23,0.15)]" aria-label="Previous card">
            <ChevronLeft size={20} />
          </button>
        )}
      </div>

      <div className="flex-1 min-w-0" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
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
              <h3 className="text-lg font-bold leading-snug text-[#f0c417] font-[Inter]">{item.title}</h3>
              <div className={`relative overflow-hidden rounded-lg h-44 w-full ${isBlog ? "bg-[#1a1a2e]" : "bg-[#1a2a4a]"} flex items-center justify-center`}>
                <img src={item.image} alt={item.title} className="w-full h-full object-cover"
                  onError={(e) => { e.target.style.display = "none"; e.target.parentElement.innerHTML = `<span class="text-gray-400 font-medium text-sm">${item.fallbackText}</span>`; }} />
              </div>
              {!isBlog && item.subtitle && <p className="text-sm font-semibold text-white leading-normal">{item.subtitle}</p>}
              <p className="text-gray-300 text-sm italic leading-relaxed">{item.excerpt}</p>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: "easeInOut" }} className="overflow-hidden">
                    <div className="pt-3 mt-3 border-t border-[#f0c417]/20 flex flex-col gap-3 text-sm text-gray-300 leading-relaxed">
                      {item.content.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3 pt-2">
                      {item.tags.map((tag) => <span key={tag} className="bg-[#f0c417]/10 border border-[#f0c417]/35 text-[#f0c417] rounded-full px-3 py-1 text-xs font-semibold tracking-wide">{tag}</span>)}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); setExpandedId((prev) => (prev === item.id ? null : item.id)); }}
              className="mt-4 flex items-center gap-2 text-sm text-white font-medium italic transition-colors duration-200 hover:text-[#f0c417] active:text-[#f0c417] self-start"
            >
              <span>{isOpen ? "Read Less" : "Read More"}</span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </button>
            <div className="flex justify-center gap-1.5 mt-4">
              {data.map((_, i) => (
                <span key={i} className={`inline-block rounded-full transition-all duration-300 ${i === index ? "w-5 h-1.5 bg-[#f0c417]" : "w-1.5 h-1.5 bg-white/25"}`} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex-shrink-0 w-10">
        {index < total - 1 && (
          <button onClick={goNext} className="flex items-center justify-center w-10 h-10 rounded-xl border-2 border-[#f0c417] text-[#f0c417] bg-[#111111] hover:bg-[#f0c417]/10 active:bg-[#f0c417]/20 transition-all duration-200 shadow-[0_4px_12px_rgba(240,196,23,0.15)]" aria-label="Next card">
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

  const toggleBlog = (id) => setExpandedBlogs((prev) => ({ ...prev, [id]: !prev[id] }));
  const toggleCase = (id) => setExpandedCases((prev) => ({ ...prev, [id]: !prev[id] }));
  const nextBlogs = () => setBlogStartIndex((prev) => prev + 3);
  const prevBlogs = () => setBlogStartIndex((prev) => prev - 3);
  const nextCases = () => setCaseStartIndex((prev) => prev + 3);
  const prevCases = () => setCaseStartIndex((prev) => prev - 3);

  const currentBlogs = blogData.slice(blogStartIndex, blogStartIndex + 3);
  const currentCases = caseStudyData.slice(caseStartIndex, caseStartIndex + 3);

  const cardBase = "bg-white/[0.03] border border-white/[0.02] border-l-4 border-l-[#f0c417] rounded-lg p-5 md:p-6 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(240,196,23,0.15)]";
  const arrowBtn = "flex items-center justify-center w-11 h-11 rounded-xl border-2 border-[#f0c417] text-[#f0c417] bg-[#111111] hover:bg-[#f0c417]/10 active:bg-[#f0c417]/20 transition-all duration-200 shadow-[0_4px_12px_rgba(240,196,23,0.15)]";

  return (
    <div className="career-bg-pattern min-h-screen text-white font-[Inter] relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#f0c417]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

      {/* ── BLOGS SECTION ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 sm:pt-24 md:pt-28 pb-10 md:pb-20">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-center text-[#f0c417] mb-10 md:mb-16 tracking-tight" style={{ fontFamily: "Unbounded" }}>
          BLOGS
        </h2>

        <div className="block md:hidden">
          <MobileCarousel data={blogData} cardType="blog" />
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex-shrink-0 w-11">
            {blogStartIndex > 0 && (
              <button onClick={prevBlogs} className={arrowBtn} aria-label="Previous Blogs"><ChevronLeft size={20} /></button>
            )}
          </div>
          <div className="flex-1 grid grid-cols-3 gap-8 items-start">
            {currentBlogs.map((blog) => {
              const isOpen = !!expandedBlogs[blog.id];
              return (
                /* ✅ removed onClick and cursor-pointer from wrapper */
                <div key={blog.id} className={cardBase}>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold leading-snug text-[#f0c417] font-[Inter]">{blog.title}</h3>
                    <div className="relative overflow-hidden rounded-lg h-48 w-full bg-[#1a1a2e] flex items-center justify-center">
                      <img src={blog.image} alt={blog.title} className="w-full h-full object-cover"
                        onError={(e) => { e.target.style.display = "none"; e.target.parentElement.innerHTML = `<span class="text-gray-400 font-medium text-sm">${blog.fallbackText}</span>`; }} />
                    </div>
                    <p className="text-gray-300 text-sm italic leading-relaxed">{blog.excerpt}</p>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: "easeInOut" }} className="overflow-hidden">
                          <div className="pt-3 mt-3 border-t border-[#f0c417]/20 flex flex-col gap-3 text-sm text-gray-300 leading-relaxed">
                            {blog.content.map((p, idx) => <p key={idx}>{p}</p>)}
                          </div>
                          <div className="flex flex-wrap gap-2 mt-3 pt-2">
                            {blog.tags.map((tag) => <span key={tag} className="bg-[#f0c417]/10 border border-[#f0c417]/35 text-[#f0c417] rounded-full px-3 py-1 text-xs font-semibold tracking-wide">{tag}</span>)}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  {/* ✅ added e.stopPropagation() */}
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleBlog(blog.id); }}
                    className="mt-4 flex items-center gap-2 text-sm text-white font-medium italic transition-colors duration-200 hover:text-[#f0c417] active:text-[#f0c417] self-start cursor-pointer"
                  >
                    <span>{isOpen ? "Read Less" : "Read More"}</span>
                    <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>
              );
            })}
          </div>
          <div className="flex-shrink-0 w-11">
            {blogStartIndex + 3 < blogData.length && (
              <button onClick={nextBlogs} className={arrowBtn} aria-label="Next Blogs"><ChevronRight size={20} /></button>
            )}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES SECTION ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-16">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-center text-[#f0c417] mb-10 md:mb-16 tracking-tight" style={{ fontFamily: "Unbounded" }}>
          CASE STUDIES
        </h2>

        <div className="block md:hidden">
          <MobileCarousel data={caseStudyData} cardType="case" />
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex-shrink-0 w-11">
            {caseStartIndex > 0 && (
              <button onClick={prevCases} className={arrowBtn} aria-label="Previous Case Studies"><ChevronLeft size={20} /></button>
            )}
          </div>
          <div className="flex-1 grid grid-cols-3 gap-8 items-start">
            {currentCases.map((study) => {
              const isOpen = !!expandedCases[study.id];
              return (
                /* ✅ removed onClick and cursor-pointer from wrapper */
                <div key={study.id} className={cardBase}>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold leading-snug text-[#f0c417] font-[Inter]">{study.title}</h3>
                    <div className="relative overflow-hidden rounded-lg h-48 w-full bg-[#1a2a4a] flex items-center justify-center">
                      <img src={study.image} alt={study.title} className="w-full h-full object-cover"
                        onError={(e) => { e.target.style.display = "none"; e.target.parentElement.innerHTML = `<span class="text-gray-400 font-medium text-sm">${study.fallbackText}</span>`; }} />
                    </div>
                    <p className="text-sm font-semibold text-white leading-normal">{study.subtitle}</p>
                    <p className="text-gray-300 text-sm italic leading-relaxed">{study.excerpt}</p>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: "easeInOut" }} className="overflow-hidden">
                          <div className="pt-3 mt-3 border-t border-[#f0c417]/20 flex flex-col gap-3 text-sm text-gray-300 leading-relaxed">
                            {study.content.map((p, idx) => <p key={idx}>{p}</p>)}
                          </div>
                          <div className="flex flex-wrap gap-2 mt-3 pt-2">
                            {study.tags.map((tag) => <span key={tag} className="bg-[#f0c417]/10 border border-[#f0c417]/35 text-[#f0c417] rounded-full px-3 py-1 text-xs font-semibold tracking-wide">{tag}</span>)}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  {/* ✅ added e.stopPropagation() */}
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleCase(study.id); }}
                    className="mt-4 flex items-center gap-2 text-sm text-white font-medium italic transition-colors duration-200 hover:text-[#f0c417] active:text-[#f0c417] self-start cursor-pointer"
                  >
                    <span>{isOpen ? "Read Less" : "Read More"}</span>
                    <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                </div>
              );
            })}
          </div>
          <div className="flex-shrink-0 w-11">
            {caseStartIndex + 3 < caseStudyData.length && (
              <button onClick={nextCases} className={arrowBtn} aria-label="Next Case Studies"><ChevronRight size={20} /></button>
            )}
          </div>
        </div>
      </section>

      <div className="pt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Blogs;