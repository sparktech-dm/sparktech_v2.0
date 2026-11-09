import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../../components/Seo";

const AdCreativesCampaigns = () => {
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
      title: "GOOGLE SEARCH ADS & HIGH-INTENT PPC",
      desc: "Capture ready-to-buy prospects at the precise moment they search for your services. We architect granular ad groups, target high-intent commercial keywords, and craft persuasive ad copy that outranks competitors at minimal cost-per-click.",
    },
    {
      title: "DISPLAY & REMARKETING CAMPAIGNS",
      desc: "Reconnect with past visitors who left without converting. Our dynamic retargeting campaigns display compelling creative banners across Google's 2M+ partner network, keeping your brand top-of-mind until they convert.",
    },
    {
      title: "YOUTUBE & VIDEO ADVERTISING",
      desc: "Leverage high-impact video storytelling on YouTube. We produce and manage non-skippable, in-stream, and bumper ads designed to build intense brand affinity and drive direct action across desktop and mobile devices.",
    },
    {
      title: "GOOGLE SHOPPING & E-COMMERCE PPC",
      desc: "Showcase your product catalog directly in Google Shopping search results. We optimize Google Merchant Center feeds, set up Performance Max campaigns, and optimize return on ad spend (ROAS) for maximum profitability.",
    },
    {
      title: "NEGATIVE KEYWORD & BID OPTIMIZATION",
      desc: "Stop wasting marketing funds on irrelevant search clicks. We continuously monitor search query reports, maintain comprehensive negative keyword lists, and tune smart bidding algorithms to maximize conversion value.",
    },
    {
      title: "CROSS-PLATFORM PERFORMANCE ADS",
      desc: "Extend your reach beyond Google with integrated performance advertising across Meta (Facebook & Instagram) and LinkedIn, aligning brand messaging across every major digital advertising channel.",
    },
  ];

  const reasons = [
    "Certified Google Ads Specialists Managing Your Account",
    "High-Converting Ad Copywriting & Creative Design",
    "Continuous Negative Keyword Pruning to Eliminate Waste",
    "Transparent Weekly Reporting & Real-Time Dashboards",
    "Strict Focus on Return on Ad Spend (ROAS) and CPA",
    "Seamless Landing Page Alignment & Quality Score Optimization",
  ];

  const processSteps = [
    {
      step: "01",
      title: "Account Audit & Competitor Intel",
      desc: "We analyze your past campaign data, competitive ad copy, auction insights, and market search volume in Chennai and target territories.",
    },
    {
      step: "02",
      title: "Campaign Architecture & Match Types",
      desc: "We build structured single-theme ad groups (STAGs) with tightly controlled keyword match types and negative keyword lists.",
    },
    {
      step: "03",
      title: "Ad Creation & Landing Page Match",
      desc: "We draft compelling responsive search ads (RSAs) and ensure destination landing pages align tightly to achieve maximum Quality Scores.",
    },
    {
      step: "04",
      title: "Smart Bidding & Scale",
      desc: "We actively monitor search terms, adjust target CPA/ROAS bid strategies, and scale winning ad combinations for maximum profitability.",
    },
  ];

  const faqs = [
    {
      q: "What minimum advertising budget is required to start with Google Ads?",
      a: "We work with businesses across diverse growth stages. For local Chennai campaigns, a monthly ad spend starting between ₹25,000 and ₹50,000 provides sufficient data volume to test, optimize, and generate positive return on investment.",
    },
    {
      q: "How quickly can we expect leads from Google Ads?",
      a: "Unlike SEO which builds compound growth over months, Google Ads campaigns begin driving qualified search traffic within 24 to 48 hours of campaign launch once ad approvals and tracking verification are complete.",
    },
    {
      q: "How do you improve Google Quality Scores to lower click costs?",
      a: "We improve Quality Scores by ensuring high historical click-through rates (CTR) through compelling ad copy, tight keyword-to-ad relevance, and ultra-fast, mobile-friendly landing pages that directly satisfy the user's search query.",
    },
    {
      q: "Do you protect campaigns against click fraud and invalid clicks?",
      a: "Yes. We configure automated IP exclusions, geo-fencing protections, and negative placement lists to ensure your budget is protected against competitors and automated bot traffic.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 md:pt-8 bg-[#ffffff]">
      <Seo
        title="Google Ads Agency in Chennai | PPC Management Services | SparkTech"
        description="Maximize your ROI with certified Google Ads management in Chennai. High-converting search ads, PPC campaigns, display advertising, and remarketing."
        keywords="google ads agency in chennai, ppc company in chennai, pay per click advertising chennai, google ads management chennai, performance marketing chennai"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://www.sparktechdm.com/services/video-editing#service",
                "name": "Google Ads Agency & PPC Campaign Management Services in Chennai",
                "url": "https://www.sparktechdm.com/services/video-editing",
                "serviceType": "PPC Advertising",
                "description": "Maximize your ROI with certified Google Ads management in Chennai. High-converting search ads, PPC campaigns, display advertising, and remarketing.",
                "provider": {
                  "@type": "Organization",
                  "@id": "https://www.sparktechdm.com/#organization",
                  "name": "SparkTech Digital",
                  "url": "https://www.sparktechdm.com/"
                },
                "areaServed": [
                  {
                    "@type": "City",
                    "name": "Chennai"
                  },
                  {
                    "@type": "Country",
                    "name": "India"
                  }
                ]
              },
              {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://www.sparktechdm.com/"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Services",
                    "item": "https://www.sparktechdm.com/services"
                  },
                  {
                    "@type": "ListItem",
                    "position": 3,
                    "name": "Google Ads & PPC"
                  }
                ]
              }
            ]
          })}
        </script>
      </Seo>
      <section className="max-w-5xl mx-auto">
        {/* Back Button */}
        <div className="mb-8 md:mb-10">
          <button
            onClick={() => navigate("/services")}
            className="group flex items-center gap-2 px-5 py-2.5 bg-[#f2eee0] hover:bg-[#1b365d] text-[#1b365d] hover:text-[#cc7722] border border-[#cc7722] rounded-full transition-all duration-300 font-bold text-xs md:text-sm uppercase tracking-wider shadow-sm hover:shadow-md cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 transform group-hover:-translate-x-1.5 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Services
          </button>
        </div>

        {/* Title & Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest font-oswald mb-6">
            <span className="text-[#cc7722]">GOOGLE ADS AGENCY </span>
            <span className="text-[#1b365d]">& PPC SERVICES IN CHENNAI</span>
          </h1>
          <p className="text-[#395c7a] font-inter text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Eliminate wasted marketing spend and acquire high-intent buyers with data-driven Google Ads management, search engine PPC, remarketing, and performance advertising by SparkTech Digital.
          </p>
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
              className="bg-[#2a4d75] border border-[#395c7a] shadow-lg hover:shadow-[0_15px_40px_rgba(204,119,34,0.4)] transition-all duration-300 p-8 rounded-2xl flex flex-col justify-center text-center h-auto min-h-[300px]"
            >
              <h2 className="text-[#cc7722] font-oswald text-base font-bold uppercase tracking-wider mb-3">
                {item.title}
              </h2>
              <p className="text-white text-xs md:text-sm font-light leading-relaxed">
                {item.desc}
              </p>
            </MotionDiv>
          ))}
        </div>

        {/* Working Process Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold font-oswald text-[#1b365d] uppercase tracking-wider mb-3">
              OUR PPC OPTIMIZATION <span className="text-[#cc7722]">PROCESS</span>
            </h2>
            <p className="text-[#395c7a] text-sm md:text-base font-inter max-w-xl mx-auto">
              How our certified media buyers generate high returns for businesses across Chennai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#f2eee0] border border-[#cc7722]/40 rounded-2xl p-6 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <span className="text-[#cc7722] font-oswald text-3xl font-extrabold block mb-2">
                    {step.step}
                  </span>
                  <h3 className="text-[#1b365d] font-oswald text-lg font-bold uppercase mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#395c7a] font-inter text-xs md:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
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
              WHY BUSINESSES CHOOSE SPARKTECH PPC
            </h2>
            <p className="text-white text-xs md:text-sm font-light mb-6">
              We manage Google Ads campaigns engineered for maximum return on ad spend and verified sales conversions.
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

        {/* Frequently Asked Questions */}
        <div className="mb-20 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-oswald text-[#1b365d] uppercase tracking-wider mb-2">
              FREQUENTLY ASKED <span className="text-[#cc7722]">QUESTIONS</span>
            </h2>
            <p className="text-[#395c7a] text-sm font-inter">
              Common questions about our Google Ads and PPC campaign management services in Chennai.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#f2eee0] border border-[#cc7722]/30 rounded-xl p-6">
                <h3 className="text-[#1b365d] font-oswald text-base md:text-lg font-bold mb-2">
                  {faq.q}
                </h3>
                <p className="text-[#395c7a] font-inter text-xs md:text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Services Links */}
        <div className="mb-16 p-8 bg-[#fcfaf7] border border-[#cc7722]/30 rounded-2xl text-center">
          <h3 className="text-lg md:text-xl font-bold font-oswald text-[#1b365d] uppercase mb-4">
            EXPLORE COMPLEMENTARY DIGITAL SERVICES
          </h3>
          <p className="text-sm text-[#395c7a] mb-6 max-w-xl mx-auto">
            Pair immediate paid search traffic with our long-term organic and lead nurturing capabilities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/services/seo"
              className="px-5 py-2.5 bg-[#f2eee0] hover:bg-[#1b365d] text-[#1b365d] hover:text-white border border-[#cc7722] rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Organic SEO Services &rarr;
            </Link>
            <Link
              to="/services/content-creation"
              className="px-5 py-2.5 bg-[#f2eee0] hover:bg-[#1b365d] text-[#1b365d] hover:text-white border border-[#cc7722] rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
            >
              High-Converting Lead Gen &rarr;
            </Link>
            <Link
              to="/services/website-development"
              className="px-5 py-2.5 bg-[#f2eee0] hover:bg-[#1b365d] text-[#1b365d] hover:text-white border border-[#cc7722] rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Custom Website Development &rarr;
            </Link>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase font-oswald text-[#cc7722] tracking-wider mb-8">
            READY TO MAXIMIZE YOUR ADVERTISING ROI?
          </h2>

          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3.5 bg-[#1f3a58] hover:bg-[#1b365d] text-white font-bold tracking-wider text-xs md:text-sm rounded-xl transition-all duration-300 shadow-md cursor-pointer"
          >
            Request a Free Google Ads Audit
          </button>
        </div>
      </section>
    </div>
  );
};

export default AdCreativesCampaigns;
