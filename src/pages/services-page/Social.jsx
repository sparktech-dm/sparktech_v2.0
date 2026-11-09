import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../../components/Seo";

const SocialMediaMarketing = () => {
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
      title: "SOCIAL MEDIA STRATEGY & CALENDARS",
      desc: "We develop customized social roadmaps that align with your business objectives. From competitor benchmarking and content themes to posting cadence and hashtag clusters, we build a strategic presence across Instagram, LinkedIn, Facebook, and X.",
    },
    {
      title: "INSTAGRAM REELS & CREATIVE PRODUCTION",
      desc: "Capture attention in fast-scrolling feeds with high-impact short-form video reels, multi-slide carousels, and stories that showcase your products, client case studies, and brand culture with cinematic quality.",
    },
    {
      title: "LINKEDIN B2B THOUGHT LEADERSHIP",
      desc: "Position your founders and executives as authoritative industry voices. We draft engaging long-form LinkedIn articles, visual PDF carousels, and company page updates that generate high-ticket B2B inquiries.",
    },
    {
      title: "META ADS & TARGETED PAID SOCIAL",
      desc: "Accelerate your customer acquisition with highly targeted Facebook and Instagram ad campaigns. We build custom audiences, lookalikes, and retargeting funnels that deliver low customer acquisition costs.",
    },
    {
      title: "COMMUNITY MANAGEMENT & DM NURTURING",
      desc: "Turn followers into brand champions. We manage comments, reply promptly to direct messages, foster community discussions, and route warm sales inquiries directly to your sales team.",
    },
    {
      title: "SOCIAL LISTENING & PERFORMANCE ANALYTICS",
      desc: "Make data-backed decisions. We track audience sentiment, brand mentions, engagement rates, and click-through attribution with comprehensive monthly performance reports.",
    },
  ];

  const reasons = [
    "Content Specifically Tailored to Chennai and Regional Demographics",
    "Bespoke High-Resolution Creatives Crafted by Professional Designers",
    "Organic Engagement Strategies Focused on Real Community Growth",
    "Multi-Channel Campaign Alignment (Instagram, LinkedIn, Meta)",
    "Strict Adherence to Brand Guidelines and Editorial Consistency",
    "Transparent Monthly Reporting Tracking Reach, Leads & Engagement",
  ];

  const processSteps = [
    {
      step: "01",
      title: "Audience & Competitor Audit",
      desc: "We examine your current social channels, target demographics, and local competitors to identify high-leverage content opportunities.",
    },
    {
      step: "02",
      title: "Content Calendar & Themes",
      desc: "We develop a monthly content matrix balancing educational insights, entertaining reels, product spotlights, and conversion prompts.",
    },
    {
      step: "03",
      title: "Asset Production & Scheduling",
      desc: "Our copywriters and designers produce high-impact creatives, copywriting captions, and scheduling posts at peak engagement hours.",
    },
    {
      step: "04",
      title: "Active Engagement & Tuning",
      desc: "We monitor interactions, nurture direct message inquiries, and iterate content types based on real-time performance analytics.",
    },
  ];

  const faqs = [
    {
      q: "Which social media platforms should my business focus on?",
      a: "Platform choice depends on your customer persona. B2B service firms, SaaS platforms, and corporate consultants excel on LinkedIn. Lifestyle brands, food & beverage, real estate, and retail businesses achieve outstanding results on Instagram and Meta.",
    },
    {
      q: "How often will you post content on our social media profiles?",
      a: "Our standard packages typically feature 3 to 5 high-quality posts per week (including a strategic mix of reels, carousels, and stories), ensuring optimal algorithm visibility without fatiguing your followers.",
    },
    {
      q: "Do you handle paid social ads in addition to organic posting?",
      a: "Yes. We manage end-to-end paid social advertising across Meta and LinkedIn, including creative ad design, audience targeting, budget allocation, and conversion tracking.",
    },
    {
      q: "How do you measure return on investment from social media marketing?",
      a: "We track both brand metrics (reach, impressions, engagement rates, follower growth) and commercial outcomes (profile visits, website referral traffic, direct message inquiries, and form submissions).",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 md:pt-8 bg-[#ffffff]">
      <Seo
        title="Social Media Marketing Agency in Chennai | SMM Services | SparkTech"
        description="Grow your brand with data-driven social media marketing in Chennai. Expert Instagram, LinkedIn, and Meta campaign management for active customer engagement."
        keywords="social media marketing agency in chennai, smm company chennai, social media management chennai, instagram marketing chennai, linkedin b2b marketing"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://www.sparktechdm.com/services/social-media-marketing#service",
                "name": "Social Media Marketing Agency in Chennai",
                "url": "https://www.sparktechdm.com/services/social-media-marketing",
                "serviceType": "Social Media Marketing",
                "description": "Grow your brand with data-driven social media marketing in Chennai. Expert Instagram, LinkedIn, and Meta campaign management for active customer engagement.",
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
                    "name": "Social Media Marketing"
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
            <span className="text-[#cc7722]">SOCIAL MEDIA MARKETING </span>
            <span className="text-[#1b365d]">AGENCY IN CHENNAI</span>
          </h1>
          <p className="text-[#395c7a] font-inter text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Elevate your brand authority, cultivate an active community, and convert social followers into loyal customers with strategic social media marketing management across Instagram, LinkedIn, and Meta by SparkTech.
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
              OUR SOCIAL GROWTH <span className="text-[#cc7722]">PROCESS</span>
            </h2>
            <p className="text-[#395c7a] text-sm md:text-base font-inter max-w-xl mx-auto">
              How our social media strategists build an engaged brand presence across Chennai and beyond.
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
              WHY BUSINESSES CHOOSE SPARKTECH SMM
            </h2>
            <p className="text-white text-xs md:text-sm font-light mb-6">
              We design social media campaigns that spark genuine conversations, elevate recall, and produce measurable commercial returns.
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
              Common questions about our Chennai social media management and advertising campaigns.
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
            Amplify your social reach by pairing it with custom graphic design and automated customer retention funnels.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/services/graphics-designing"
              className="px-5 py-2.5 bg-[#f2eee0] hover:bg-[#1b365d] text-[#1b365d] hover:text-white border border-[#cc7722] rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Graphic Design & Branding &rarr;
            </Link>
            <Link
              to="/services/video-editing"
              className="px-5 py-2.5 bg-[#f2eee0] hover:bg-[#1b365d] text-[#1b365d] hover:text-white border border-[#cc7722] rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Google Ads & Ad Creatives &rarr;
            </Link>
            <Link
              to="/services/email-marketing"
              className="px-5 py-2.5 bg-[#f2eee0] hover:bg-[#1b365d] text-[#1b365d] hover:text-white border border-[#cc7722] rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Automated Email Flows &rarr;
            </Link>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase font-oswald text-[#cc7722] tracking-wider mb-8">
            READY TO GROW YOUR SOCIAL MEDIA PRESENCE?
          </h2>

          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3.5 bg-[#1f3a58] hover:bg-[#1b365d] text-white font-bold tracking-wider text-xs md:text-sm rounded-xl transition-all duration-300 shadow-md cursor-pointer"
          >
            Book a Free Social Strategy Session
          </button>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaMarketing;
