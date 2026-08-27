import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SEO = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" ? window.innerWidth < 768 : false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const MotionDiv = isMobile ? "div" : motion.div;

  const offerings = [
    {
      title: "TECHNICAL SEO",
      desc: "A strong SEO foundation starts with a technically optimized website. We improve website speed, mobile responsiveness, Core Web Vitals, crawlability, indexing, XML sitemaps, schema markup, and site architecture to help search engines understand and rank your website more effectively.",
    },
    {
      title: "ON-PAGE SEO",
      desc: "We optimize every page with strategic keyword research, compelling meta titles and descriptions, well-structured headings, internal linking, image optimization, and high-quality content that improves both search rankings and user experience.",
    },
    {
      title: "OFF-PAGE SEO",
      desc: "Build your website's authority through ethical off-page SEO strategies. We focus on high-quality backlinks, brand mentions, digital outreach, and trust building techniques that improve your website's credibility and long-term search performance.",
    },
    {
      title: "LOCAL SEO",
      desc: "Help local customers find your business with optimized Google Business Profile management, local citations, location-based keywords, Google Maps optimization, and local search strategies that increase visibility in your target area.",
    },
    {
      title: "AI-POWERED SEO STRATEGY",
      desc: "We combine artificial intelligence with expert SEO knowledge to identify keyword opportunities, analyze competitors, understand search trends, and create smarter optimization strategies that help your business stay ahead in a competitive digital landscape.",
    },
    {
      title: "SEARCH ENGINE MARKETING (SEM)",
      desc: "Complement your organic SEO strategy with targeted Search Engine Marketing campaigns. We create and manage Google Ads campaigns that drive qualified traffic, increase conversions, and maximize your advertising investment.",
    },
  ];

  const reasons = [
    "Customized SEO Strategies for Every Business",
    "In-Depth Keyword Research & Competitor Analysis",
    "Technical, On-Page & Off-Page SEO Expertise",
    "Local SEO for Better Regional Visibility",
    "Transparent Reporting & Performance Tracking",
    "Continuous Optimization Based on Data",
  ];

  return (
    <div className="min-h-screen pt-32 pb-12 px-6 bg-[#ffffff]">
      <section className="max-w-5xl mx-auto">
        {/* Title & Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest font-oswald mb-6">
            <span className="text-[#cc7722]">SEARCH VISIBILITY </span>
            <span className="text-[#1b365d]">& </span>
            <span className="text-[#cc7722]">SEO</span>
          </h1>
        </div>

        {/* Offerings Grid - 6 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {offerings.map((item, idx) => (
            <MotionDiv
              key={idx}
              {...(!isMobile && {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { delay: idx * 0.08, duration: 0.5 },
                whileHover: {
                  scale: 1.03,
                  boxShadow: "0px 0px 15px rgba(240, 196, 23, 0.25)",
                }
              })}
              className="bg-[#2a4d75] border border-[#395c7a] shadow-lg hover:shadow-[0_15px_40px_rgba(204,119,34,0.4)] transition-all duration-300 p-8 rounded-2xl flex flex-col justify-center text-center h-auto min-h-[320px]"
            >
              <h3 className="text-[#cc7722] font-oswald text-base font-bold uppercase tracking-wider mb-3">
                {item.title}
              </h3>
              <p className="text-white text-xs md:text-sm font-light leading-relaxed">
                {item.desc}
              </p>
            </MotionDiv>
          ))}
        </div>

        {/* Center Card: Why Choose Us */}
        <div className="flex justify-center mb-20">
          <MotionDiv
            {...(!isMobile && {
              initial: { opacity: 0, y: 25 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              whileHover: {
                scale: 1.01,
                boxShadow: "0px 0px 20px rgba(240, 196, 23, 0.2)",
              },
              transition: { duration: 0.5 }
            })}
            className="w-full max-w-2xl bg-[#2a4d75] border border-[#395c7a] shadow-lg hover:shadow-[0_15px_40px_rgba(204,119,34,0.4)] transition-all duration-300 p-8 rounded-2xl text-center"
          >
            <h2 className="text-lg md:text-xl font-bold font-oswald text-[#cc7722] uppercase tracking-wider mb-2">
              WHY BUSINESSES CHOOSE SPARKTECH
            </h2>
            <p className="text-white text-xs md:text-sm font-light mb-6">
              We create SEO strategies focused on sustainable growth and measurable results.
            </p>
            <ul className="space-y-4 inline-block text-left">
              {reasons.map((reason, idx) => (
                <li
                  key={idx}
                  className="text-white text-xs md:text-sm font-light tracking-wide leading-relaxed flex items-start"
                >
                  <span className="text-[#cc7722] mr-2">✔</span> {reason}
                </li>
              ))}
            </ul>
          </MotionDiv>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center max-w-3xl mx-auto mt-16">
          <h3 className="text-2xl md:text-3xl font-extrabold uppercase font-oswald text-[#cc7722] tracking-wider mb-8">
            READY TO GROW YOUR ORGANIC TRAFFIC?
          </h3>

          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3.5 bg-[#1f3a58] hover:bg-[#1b365d] text-white font-bold tracking-wider text-xs md:text-sm rounded-xl transition-all duration-300 shadow-md cursor-pointer"
          >
            Book a Free SEO Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default SEO;