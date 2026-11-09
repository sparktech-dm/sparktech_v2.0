import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../../components/Seo";

const LeadGenerationSystems = () => {
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
      title: "HIGH-CONVERTING LANDING PAGES",
      desc: "We design fast, responsive, and conversion-focused landing pages that guide visitors toward taking action. Every page is optimized with clear value propositions, trust signals, and compelling calls-to-action to maximize visitor-to-lead conversions.",
    },
    {
      title: "LEAD MAGNET STRATEGY & ASSETS",
      desc: "We develop valuable lead generation resources including eBooks, industry whitepapers, ROI calculators, free audits, and checklists that encourage qualified prospects to share their contact information voluntarily.",
    },
    {
      title: "SALES FUNNEL AUTOMATION",
      desc: "Our automated sales funnels nurture prospects systematically at every stage of the buyer journey. From top-of-funnel awareness to middle-of-funnel evaluation, we nurture leads with personalized follow-up sequences.",
    },
    {
      title: "MULTI-CHANNEL INBOUND ACQUISITION",
      desc: "We synchronize organic search, paid ads, and targeted social outreach to create dependable inbound streams of qualified prospects seeking your exact solutions in Chennai and pan-India.",
    },
    {
      title: "LEAD QUALIFICATION & SCORING",
      desc: "Filter out tire-kickers and focus your sales team on high-intent buyers. We implement multi-step qualification forms and lead scoring models that evaluate budget, authority, need, and timeline.",
    },
    {
      title: "CRM INTEGRATION & ANALYTICS",
      desc: "Seamlessly route incoming leads into HubSpot, Zoho, Salesforce, or your custom CRM. We establish automated lead notifications, pipeline attribution, and conversion reporting for complete transparency.",
    },
  ];

  const reasons = [
    "Customized B2B & B2C Lead Generation Strategies",
    "Conversion-Rate-Optimized (CRO) Landing Pages",
    "Automated Multi-Stage Sales & Nurturing Funnels",
    "Seamless CRM Integration (Zoho, HubSpot, Salesforce)",
    "Granular Lead Tracking & Channel Attribution",
    "Continuous Split-Testing & Cost-Per-Lead Optimization",
  ];

  const processSteps = [
    {
      step: "01",
      title: "Audience & ICP Definition",
      desc: "We pinpoint your Ideal Customer Profile (ICP), pain points, and decision-making criteria to craft laser-targeted messaging.",
    },
    {
      step: "02",
      title: "Landing Page & Funnel Build",
      desc: "We design and build ultra-fast, mobile-optimized landing pages and high-value lead magnets designed to capture interest.",
    },
    {
      step: "03",
      title: "Traffic Activation & Capture",
      desc: "We drive qualified traffic via search, PPC, and social channels, capturing verified prospect contact details in real-time.",
    },
    {
      step: "04",
      title: "CRM Handoff & Optimization",
      desc: "Leads are instantly routed to your sales team with lead scoring data while we continuously optimize for lowest cost-per-lead.",
    },
  ];

  const faqs = [
    {
      q: "What is the difference between lead generation and general digital marketing?",
      a: "General digital marketing often focuses on impressions, traffic, and brand awareness. Lead generation is strictly performance-oriented, focusing on capturing verified contact details (names, phone numbers, verified emails) of prospects with immediate purchase intent.",
    },
    {
      q: "Do you specialize in B2B or B2C lead generation?",
      a: "We develop campaigns for both. For B2B clients, we focus on high-ticket account-based funnels, LinkedIn campaigns, and whitepapers. For B2C businesses, we deploy fast-action mobile landing pages, interactive quizzes, and instant consultation booking forms.",
    },
    {
      q: "How do you ensure lead quality rather than just lead volume?",
      a: "We implement qualification checkpoints on landing pages—such as business email verification, budget thresholds, and qualifying questionnaire fields—ensuring that only prospects matching your ideal customer profile reach your sales team.",
    },
    {
      q: "Can incoming leads sync automatically with our existing CRM?",
      a: "Yes. We configure webhooks and API integrations directly into Zoho CRM, HubSpot, Salesforce, LeadSquared, or Google Sheets with instant WhatsApp or SMS alerts for your sales representatives.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 md:pt-8 bg-[#ffffff]">
      <Seo
        title="Lead Generation Services in Chennai | Sales Funnel Agency | SparkTech"
        description="Capture high-intent B2B and B2C prospects with customized lead generation funnels, conversion landing pages, and automated acquisition systems in Chennai."
        keywords="lead generation services in chennai, b2b lead generation chennai, sales funnel agency chennai, inbound lead acquisition, performance lead gen"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://www.sparktechdm.com/services/content-creation#service",
                "name": "Lead Generation & Funnel Strategy Services in Chennai",
                "url": "https://www.sparktechdm.com/services/content-creation",
                "serviceType": "Lead Generation",
                "description": "Capture high-intent B2B and B2C prospects with customized lead generation funnels, conversion landing pages, and automated acquisition systems in Chennai.",
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
                    "name": "Lead Generation"
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
            <span className="text-[#cc7722]">LEAD GENERATION </span>
            <span className="text-[#1b365d]">SERVICES IN CHENNAI</span>
          </h1>
          <p className="text-[#395c7a] font-inter text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Turn web traffic into high-converting sales conversations with customized lead generation funnels, optimized landing pages, and automated prospect qualification by SparkTech Digital.
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
              OUR PROVEN LEAD GENERATION <span className="text-[#cc7722]">PROCESS</span>
            </h2>
            <p className="text-[#395c7a] text-sm md:text-base font-inter max-w-xl mx-auto">
              How we build sustainable, high-ROI acquisition systems for businesses in Chennai.
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
              WHY BUSINESSES CHOOSE SPARKTECH LEAD GEN
            </h2>
            <p className="text-white text-xs md:text-sm font-light mb-6">
              We build lead generation systems designed to deliver measurable business results and predictable revenue.
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
              Common questions about our Chennai lead generation funnels and campaigns.
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
            EXPLORE COMPLEMENTARY GROWTH SERVICES
          </h3>
          <p className="text-sm text-[#395c7a] mb-6 max-w-xl mx-auto">
            Supercharge your lead generation pipeline by pairing it with our targeted traffic and retention solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/services/video-editing"
              className="px-5 py-2.5 bg-[#f2eee0] hover:bg-[#1b365d] text-[#1b365d] hover:text-white border border-[#cc7722] rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Google Ads & PPC Management &rarr;
            </Link>
            <Link
              to="/services/website-development"
              className="px-5 py-2.5 bg-[#f2eee0] hover:bg-[#1b365d] text-[#1b365d] hover:text-white border border-[#cc7722] rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
            >
              High-Converting Web Development &rarr;
            </Link>
            <Link
              to="/services/email-marketing"
              className="px-5 py-2.5 bg-[#f2eee0] hover:bg-[#1b365d] text-[#1b365d] hover:text-white border border-[#cc7722] rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Automated Email Marketing &rarr;
            </Link>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase font-oswald text-[#cc7722] tracking-wider mb-8">
            READY TO GROW YOUR QUALIFIED CUSTOMER PIPELINE?
          </h2>

          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3.5 bg-[#1f3a58] hover:bg-[#1b365d] text-white font-bold tracking-wider text-xs md:text-sm rounded-xl transition-all duration-300 shadow-md cursor-pointer"
          >
            Book a Free Lead Generation Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default LeadGenerationSystems;
