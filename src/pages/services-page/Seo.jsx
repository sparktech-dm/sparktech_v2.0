import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../../components/Seo";

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
      title: "TECHNICAL SEO AUDITS",
      desc: "A solid SEO foundation starts with impeccable site architecture. We optimize Core Web Vitals, page rendering speed, mobile responsiveness, XML sitemaps, crawl efficiency, SSL security, and structured schema markup so search engines index your site seamlessly.",
    },
    {
      title: "ON-PAGE SEO & CONTENT OPTIMIZATION",
      desc: "We align every page with commercial search intent. From keyword research and semantic heading structures (H1-H3) to meta tags, internal link silos, and descriptive image alt attributes, we ensure your content satisfies user queries and algorithm standards.",
    },
    {
      title: "LOCAL SEO & GOOGLE MAPS RANKINGS",
      desc: "Dominate search results in your neighborhood. We optimize your Google Business Profile, build localized citations across Chennai directories, embed geotagged data, and generate reviews that place your brand in the local 3-pack.",
    },
    {
      title: "OFF-PAGE SEO & AUTHORITY BUILDING",
      desc: "Earn high-authority editorial backlinks through ethical digital PR, industry outreach, guest articles, and brand citations. We build real domain trust and topical relevance without risking search engine penalties.",
    },
    {
      title: "E-COMMERCE & ENTERPRISE SEO",
      desc: "Scale organic revenue for extensive online catalogs. We optimize product schemas, facet navigation, taxonomy structures, category landing pages, and canonical tags to drive high-converting shopper traffic.",
    },
    {
      title: "AI-POWERED SEO & AEO (ANSWER ENGINE OPTIMIZATION)",
      desc: "Future-proof your organic visibility. We optimize content for AI discovery models including Google Search Generative Experience (SGE), ChatGPT Search, Claude, and Perplexity with verified factual citations and schema entities.",
    },
  ];

  const reasons = [
    "Proven Track Record Ranking Highly Competitive Commercial Keywords",
    "Complete Transparency with Weekly Analytics & Ranking Dashboards",
    "100% White-Hat, Algorithm-Compliant Optimization Techniques",
    "Deep Expertise in Local Chennai Markets (Choolaimedu, Anna Nagar, T. Nagar)",
    "Full-Stack Technical Capabilities: Fast Code, React, and Custom Schema",
    "Sustainable Organic Growth Designed to Lower Long-Term Acquisition Costs",
  ];

  const processSteps = [
    {
      step: "01",
      title: "Deep Technical & Content Audit",
      desc: "We benchmark your website health, identifying crawl errors, slow loading assets, indexation bloat, and content gaps against competitors.",
    },
    {
      step: "02",
      title: "Keyword & Intent Mapping",
      desc: "We identify high-volume commercial keywords, local search terms, and informational queries, mapping them directly to dedicated landing pages.",
    },
    {
      step: "03",
      title: "On-Page & Schema Execution",
      desc: "We optimize meta tags, header hierarchies, internal linking structures, and rich JSON-LD schemas to maximize click-through rates.",
    },
    {
      step: "04",
      title: "Authority Building & Monitoring",
      desc: "We acquire high-quality contextual backlinks, optimize local citations, and continuously refine rankings based on ranking data.",
    },
  ];

  const faqs = [
    {
      q: "How long does it take to see tangible ranking improvements with SEO?",
      a: "While technical fixes and low-competition local keywords can show noticeable progress within 4 to 8 weeks, significant competitive keyword rankings and sustained organic traffic growth typically mature between 3 to 6 months of disciplined optimization.",
    },
    {
      q: "What is the difference between Local SEO and National/Global SEO?",
      a: "Local SEO focuses on capturing searchers within a specific geographic territory (such as Chennai or specific localities like Choolaimedu and Nungambakkam) using Google Maps profiles and local citations. National SEO targets broader generic keywords across entire countries.",
    },
    {
      q: "Can an SEO agency guarantee #1 rankings on Google?",
      a: "No ethical agency can guarantee the #1 position on Google because search algorithms are proprietary and evolve constantly. However, SparkTech guarantees adherence to proven industry best practices, complete transparency, and measurable growth in qualified organic traffic.",
    },
    {
      q: "How do Core Web Vitals impact my search rankings?",
      a: "Google uses page experience and Core Web Vitals (Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift) as confirmed ranking factors. Fast-loading, responsive pages provide superior user experiences and are rewarded with preferential rankings.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 md:pt-8 bg-[#ffffff]">
      <Seo
        title="SEO Services in Chennai | Search Engine Optimization Agency | SparkTech"
        description="Drive organic traffic, improve Google rankings, and gain qualified leads with expert technical, on-page, off-page, and local SEO services in Chennai."
        keywords="seo services in chennai, seo company chennai, search engine optimization chennai, local seo chennai, technical seo agency chennai"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://www.sparktechdm.com/services/seo#service",
                "name": "Search Engine Optimization (SEO) Services in Chennai",
                "url": "https://www.sparktechdm.com/services/seo",
                "serviceType": "Search Engine Optimization",
                "description": "Drive organic traffic, improve Google rankings, and gain qualified leads with expert technical, on-page, off-page, and local SEO services in Chennai.",
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
                    "name": "SEO Services"
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
            <span className="text-[#cc7722]">SEO SERVICES </span>
            <span className="text-[#1b365d]">IN CHENNAI</span>
          </h1>
          <p className="text-[#395c7a] font-inter text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Drive consistent organic search traffic, secure first-page Google rankings, and acquire qualified prospective buyers with comprehensive technical, on-page, and local SEO services by SparkTech.
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
              className="bg-[#2a4d75] border border-[#395c7a] shadow-lg hover:shadow-[0_15px_40px_rgba(204,119,34,0.4)] transition-all duration-300 p-8 rounded-2xl flex flex-col justify-center text-center h-auto min-h-[320px]"
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
              OUR STRATEGIC SEO <span className="text-[#cc7722]">PROCESS</span>
            </h2>
            <p className="text-[#395c7a] text-sm md:text-base font-inter max-w-xl mx-auto">
              How our Chennai SEO consultants turn organic visibility into commercial revenue.
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
              WHY BUSINESSES CHOOSE SPARKTECH SEO
            </h2>
            <p className="text-white text-xs md:text-sm font-light mb-6">
              We engineer search engine optimization strategies focused on sustainable growth and verifiable ROI.
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
              Common questions about our Chennai search engine optimization services.
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
            Maximize your online performance by pairing organic SEO with custom web architecture and conversion funnels.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/services/website-development"
              className="px-5 py-2.5 bg-[#f2eee0] hover:bg-[#1b365d] text-[#1b365d] hover:text-white border border-[#cc7722] rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Custom Website Development &rarr;
            </Link>
            <Link
              to="/services/video-editing"
              className="px-5 py-2.5 bg-[#f2eee0] hover:bg-[#1b365d] text-[#1b365d] hover:text-white border border-[#cc7722] rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Google Ads & PPC Campaigns &rarr;
            </Link>
            <Link
              to="/services/content-creation"
              className="px-5 py-2.5 bg-[#f2eee0] hover:bg-[#1b365d] text-[#1b365d] hover:text-white border border-[#cc7722] rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Lead Generation Funnels &rarr;
            </Link>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase font-oswald text-[#cc7722] tracking-wider mb-8">
            READY TO GROW YOUR ORGANIC SEARCH TRAFFIC?
          </h2>

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
