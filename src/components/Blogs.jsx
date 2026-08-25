import React, { useState, useRef } from "react";
import { ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";

const blogData = [
  {
    id: "blog-1",
    title: "Grow Your Business with Digital Marketing Strategies",
    subtitle: "SEO & Digital Marketing",
    image: "/Digital Marketing Foundations You Can’t Ignore.webp",
    fallbackText: "SEO & Digital Marketing",
    excerpt: "Digital marketing has become one of the most effective ways for businesses to reach new customers and build a strong online presence.",
    content: [
      "Digital marketing has become one of the most effective ways for businesses to reach new customers and build a strong online presence. By combining SEO, social media marketing, Google Ads, and content marketing, businesses can attract qualified leads and improve brand visibility.",
      "A successful digital marketing strategy focuses on understanding customer behavior, creating valuable content, and continuously optimizing campaigns based on performance data. Whether you're a startup or an established business, investing in the right digital strategy helps drive long-term growth and measurable results."
    ],
    tags: ["Digital Marketing", "Business Growth", "Online Marketing", "SEO"]
  },
  {
    id: "blog-2",
    title: "Improve Website Rankings with Search Engine Optimization (SEO)",
    subtitle: "SEARCH ENGINE OPTIMIZATION",
    image: "/576953402309831560.webp",
    fallbackText: "SEARCH ENGINE OPTIMIZATION",
    excerpt: "Search Engine Optimization (SEO) helps businesses increase their visibility on search engines and attract organic traffic.",
    content: [
      "Search Engine Optimization (SEO) helps businesses increase their visibility on search engines and attract organic traffic. Effective SEO includes keyword research, technical optimization, high-quality content, and link building to improve website performance.",
      "By focusing on user experience and search intent, businesses can achieve sustainable rankings and reach potential customers without relying entirely on paid advertising."
    ],
    tags: ["SEO", "Organic Traffic", "Keyword Research", "Website Ranking"]
  },
  {
    id: "blog-3",
    title: "Build a Website That Converts Visitors into Customers",
    subtitle: "WEBSITE DEVELOPMENT",
    image: "/Advanced SEO Strategy_ Magnifying Data for Digital Success.webp",
    fallbackText: "WEBSITE DEVELOPMENT",
    excerpt: "A website is no longer just a digital brochure—it’s the interactive foundation of your online presence, working 24/7 to build trust and tell your story.",
    content: [
      "A website is more than an online brochure—it's the foundation of your digital presence. Fast loading speeds, responsive design, intuitive navigation, and SEO-friendly development all contribute to better user experiences and higher conversion rates.",
      "A professionally developed website builds trust, improves engagement, and supports your overall marketing strategy."
    ],
    tags: ["Website Development", "UI/UX", "Responsive Design", "Web Design"]
  },
  {
    id: "blog-4",
    title: "Maximize ROI with Google Ads Campaigns",
    subtitle: "GOOGLE ADS & PPC",
    image: "/Digital Marketing Foundations You Can’t Ignore.webp",
    fallbackText: "GOOGLE ADS & PPC",
    excerpt: "Google Ads allows businesses to reach customers at the exact moment they are searching for products or services.",
    content: [
      "Google Ads allows businesses to reach customers at the exact moment they are searching for products or services. Well-structured campaigns, targeted keywords, compelling ad copy, and continuous optimization help improve conversions while reducing advertising costs.",
      "Combining paid advertising with SEO creates a balanced strategy for long term business growth."
    ],
    tags: ["Google Ads", "PPC", "Paid Advertising", "Lead Generation"]
  },
  {
    id: "blog-5",
    title: "Build Strong Customer Relationships Through Social Media",
    subtitle: "SOCIAL MEDIA MARKETING",
    image: "/576953402309831560.webp",
    fallbackText: "SOCIAL MEDIA MARKETING",
    excerpt: "Social media marketing helps businesses connect with their audience, increase brand awareness, and build customer trust.",
    content: [
      "Social media marketing helps businesses connect with their audience, increase brand awareness, and build customer trust. Creating valuable content, engaging with followers, and maintaining a consistent brand voice are key to long-term success.",
      "A strategic approach to social media helps businesses generate leads while strengthening customer relationships."
    ],
    tags: ["Social Media Marketing", "Branding", "Instagram Marketing", "Customer Engagement"]
  },
  {
    id: "blog-6",
    title: "Why Quality Content Matters for SEO and Brand Growth",
    subtitle: "CONTENT MARKETING",
    image: "/Advanced SEO Strategy_ Magnifying Data for Digital Success.webp",
    fallbackText: "CONTENT MARKETING",
    excerpt: "Content marketing is one of the most valuable long-term investments for any business.",
    content: [
      "Content marketing is one of the most valuable long-term investments for any business. Publishing informative blogs, helpful guides, and engaging website content improves search visibility while building trust with potential customers.",
      "High-quality content supports SEO, answers customer questions, and positions your business as an industry expert."
    ],
    tags: ["Content Marketing", "SEO", "Content Strategy", "Business Growth"]
  }
];

const caseStudyData = [
  {
    id: "case-1",
    title: "How SEO Helps Businesses Build Long-Term Organic Growth",
    subtitle: "SEO & WEBSITE GROWTH",
    image: "/Digital Marketing Foundations You Can’t Ignore.webp",
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
    image: "/576953402309831560.webp",
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
    image: "/Advanced SEO Strategy_ Magnifying Data for Digital Success.webp",
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
    image: "/Digital Marketing Foundations You Can’t Ignore.webp",
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
    image: "/576953402309831560.webp",
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
    image: "/Advanced SEO Strategy_ Magnifying Data for Digital Success.webp",
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
                {item.title}
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
            <button
              onClick={(e) => {
                e.stopPropagation();
                setExpandedId((prev) => (prev === item.id ? null : item.id));
              }}
              className="mt-4 flex items-center gap-2 text-sm text-white font-medium italic transition-colors duration-200 hover:text-[#cc7722] active:text-[#cc7722] self-start"
            >
              <span>{isOpen ? "Read Less" : "Read More"}</span>
              <ChevronDown size={16} className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
            </button>

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

  const toggleBlog = (id) => setExpandedBlogs((prev) => ({ ...prev, [id]: !prev[id] }));
  const toggleCase = (id) => setExpandedCases((prev) => ({ ...prev, [id]: !prev[id] }));
  const nextBlogs = () => setBlogStartIndex((prev) => prev + 3);
  const prevBlogs = () => setBlogStartIndex((prev) => prev - 3);
  const nextCases = () => setCaseStartIndex((prev) => prev + 3);
  const prevCases = () => setCaseStartIndex((prev) => prev - 3);

  const currentBlogs = blogData.slice(blogStartIndex, blogStartIndex + 3);
  const currentCases = caseStudyData.slice(caseStartIndex, caseStartIndex + 3);

  const cardBase = "bg-[#1f3a58] rounded-xl p-5 md:p-6 flex flex-col justify-between transition-all duration-300 shadow-md hover:-translate-y-1 active:scale-[0.99]";
  const arrowBtn = "flex items-center justify-center w-11 h-11 rounded-xl border-2 border-[#cc7722] text-[#cc7722] bg-[#111111] hover:bg-[#cc7722]/10 active:bg-[#cc7722]/20 transition-all duration-200 shadow-[0_4px_12px_rgba(240,196,23,0.15)]";

  return (
    <div className="min-h-screen bg-white text-black font-[Inter] relative overflow-hidden">
      {/* Ambient glow blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#cc7722]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

      {/* ── BLOGS SECTION ── */}
      <section className="max-w-7xl lg:max-w-full mx-auto px-4 sm:px-6 lg:px-16 pt-20 sm:pt-24 md:pt-28 pb-10 md:pb-20">
        <h2
          className="text-3xl sm:text-4xl md:text-6xl font-black text-center text-[#cc7722] mb-10 md:mb-16 tracking-tight"
          style={{ fontFamily: "Unbounded" }}
        >
          BLOGS
        </h2>

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
          <div className="flex-1 grid grid-cols-3 gap-8 items-start">
            {currentBlogs.map((blog) => {
              const isOpen = !!expandedBlogs[blog.id];
              return (
                <div key={blog.id} className={cardBase + " cursor-pointer"} onClick={() => toggleBlog(blog.id)}>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold leading-snug text-[#cc7722] font-[Inter]">{blog.title}</h3>
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
                  <button
                    onClick={() => toggleBlog(blog.id)}
                    className="mt-4 flex items-center gap-2 text-sm text-white font-medium italic transition-colors duration-200 hover:text-[#cc7722] active:text-[#cc7722] self-start"
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
              <button onClick={nextBlogs} className={arrowBtn} aria-label="Next Blogs">
                <ChevronRight size={20} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES SECTION ── */}
      <section className="max-w-7xl lg:max-w-full mx-auto px-4 sm:px-6 lg:px-16 py-10 md:py-16">
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
          <div className="flex-1 grid grid-cols-3 gap-8 items-start">
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
          </div>
          <div className="flex-shrink-0 w-11">
            {caseStartIndex + 3 < caseStudyData.length && (
              <button onClick={nextCases} className={arrowBtn} aria-label="Next Case Studies">
                <ChevronRight size={20} />
              </button>
            )}
          </div>
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