import React, { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";

const blogData = [
  {
    id: "blog-1",
    title: "Grow Your Business with Digital Marketing Strategies",
    subtitle: "SEO & Digital Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
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
    title: "Improve Website Rankings with SEO",
    subtitle: "SEARCH ENGINE OPTIMIZATION",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&q=80",
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
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80",
    fallbackText: "WEBSITE DEVELOPMENT",
    excerpt: "A website is more than an online brochure—it's the foundation of your digital presence.",
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
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
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&q=80",
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
    image: "https://images.unsplash.com/photo-1455390582262-044cdead2708?w=500&q=80",
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
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&q=80",
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
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80",
    fallbackText: "WEBSITE DEVELOPMENT",
    excerpt: "A website is often the first impression customers have of a business.",
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
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
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&q=80",
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
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
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
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&q=80",
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

const Blogs = () => {
  const [expandedBlogs, setExpandedBlogs] = useState({});
  const [expandedCases, setExpandedCases] = useState({});
  const [blogStartIndex, setBlogStartIndex] = useState(0);
  const [caseStartIndex, setCaseStartIndex] = useState(0);

  const getVisibleItems = (data, startIndex) => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      if (data.length > 0) {
        items.push(data[(startIndex + i) % data.length]);
      }
    }
    return items;
  };

  const toggleBlog = (id) => setExpandedBlogs((prev) => ({ ...prev, [id]: !prev[id] }));
  const toggleCase = (id) => setExpandedCases((prev) => ({ ...prev, [id]: !prev[id] }));

  const handlePrevBlog = () => {
    setBlogStartIndex((prev) => (prev - 3 + blogData.length) % blogData.length);
  };

  const handleNextBlog = () => {
    setBlogStartIndex((prev) => (prev + 3) % blogData.length);
  };

  const handlePrevCase = () => {
    setCaseStartIndex((prev) => (prev - 3 + caseStudyData.length) % caseStudyData.length);
  };

  const handleNextCase = () => {
    setCaseStartIndex((prev) => (prev + 3) % caseStudyData.length);
  };

  return (
    <div
      className="min-h-screen text-[#cc7722] font-[Inter] relative overflow-hidden"
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
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <h2
            className="text-4xl md:text-6xl font-black text-[#cc7722] tracking-tight"
            style={{ fontFamily: "Unbounded" }}
          >
            BLOGS
          </h2>
          <div className="flex gap-4">
            <button type="button" onClick={handlePrevBlog} className="p-3 rounded-full bg-[#1f3a58] hover:bg-[#1b365d] text-white transition-colors border border-[#f0c417]/20">
              <ChevronLeft size={24} />
            </button>
            <button type="button" onClick={handleNextBlog} className="p-3 rounded-full bg-[#1f3a58] hover:bg-[#1b365d] text-white transition-colors border border-[#f0c417]/20">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {getVisibleItems(blogData, blogStartIndex).map((blog, idx) => {
              const isOpen = !!expandedBlogs[blog.id];
              return (
                <motion.div
                  key={`${blog.id}-${blogStartIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="bg-[#1f3a58] rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(240,196,23,0.15)]"
                >
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold leading-snug text-[#cc7722] font-[Inter]">
                    {blog.title}
                  </h3>
                  
                  {blog.image && (
                    <div className="relative overflow-hidden rounded-lg h-48 w-full bg-[#1a2a4a] flex items-center justify-center">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                          if(blog.fallbackText) {
                            e.target.parentElement.innerHTML = `<span class="text-gray-400 font-medium text-sm">${blog.fallbackText}</span>`;
                          }
                        }}
                      />
                    </div>
                  )}

                  {blog.subtitle && (
                    <p className="text-sm font-semibold text-white leading-normal">
                      {blog.subtitle}
                    </p>
                  )}
                  
                  <p className="text-white/90 text-sm leading-relaxed">
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
                        <div className="pt-4 mt-4 border-t border-[#f0c417]/20 flex flex-col gap-3 text-sm text-white/90 leading-relaxed">
                          {blog.content.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4 pt-2">
                          {blog.tags.map((tag) => (
                            <span
                              key={tag}
                              className="bg-[#f0c417]/10 border border-[#f0c417]/35 text-[#cc7722] rounded-full px-3 py-1 text-xs font-semibold tracking-wide"
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
                  className="mt-6 flex items-center gap-2 text-sm text-white font-medium italic transition-colors duration-200 hover:text-[#cc7722] self-start"
                >
                  <span>{isOpen ? "Read Less" : "Read More"}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </motion.div>
            );
          })}
          </AnimatePresence>
        </div>
      </section>

      {/* ── CASE STUDIES SECTION ── */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <h2
            className="text-4xl md:text-6xl font-black text-[#cc7722] tracking-tight"
            style={{ fontFamily: "Unbounded" }}
          >
            CASE STUDIES
          </h2>
          <div className="flex gap-4">
            <button type="button" onClick={handlePrevCase} className="p-3 rounded-full bg-[#1f3a58] hover:bg-[#1b365d] text-white transition-colors border border-[#f0c417]/20">
              <ChevronLeft size={24} />
            </button>
            <button type="button" onClick={handleNextCase} className="p-3 rounded-full bg-[#1f3a58] hover:bg-[#1b365d] text-white transition-colors border border-[#f0c417]/20">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {getVisibleItems(caseStudyData, caseStartIndex).map((study, idx) => {
              const isOpen = !!expandedCases[study.id];
              return (
                <motion.div
                  key={`${study.id}-${caseStartIndex}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="bg-[#1f3a58] rounded-xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(240,196,23,0.15)]"
                >
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl font-bold leading-snug text-[#cc7722] font-[Inter]">
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
                  <p className="text-white/90 text-sm leading-relaxed">
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
                        <div className="pt-4 mt-4 border-t border-[#f0c417]/20 flex flex-col gap-3 text-sm text-white/90 leading-relaxed">
                          {study.content.map((paragraph, idx) => (
                            <p key={idx}>{paragraph}</p>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4 pt-2">
                          {study.tags.map((tag) => (
                            <span
                              key={tag}
                              className="bg-[#f0c417]/10 border border-[#f0c417]/35 text-[#cc7722] rounded-full px-3 py-1 text-xs font-semibold tracking-wide"
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
                  className="mt-6 flex items-center gap-2 text-sm text-white font-medium italic transition-colors duration-200 hover:text-[#cc7722] self-start"
                >
                  <span>{isOpen ? "Read Less" : "Read More"}</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
              </motion.div>
            );
          })}
          </AnimatePresence>
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