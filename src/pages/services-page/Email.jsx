import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../../components/Seo";

const AutomateEmailFlow = () => {
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
      title: "AUTOMATED DRIP FLOWS & ONBOARDING",
      desc: "Greet new subscribers and customers with personalized automated drip sequences that introduce your brand story, highlight core service benefits, and guide prospects toward their first purchase without manual intervention.",
    },
    {
      title: "ABANDONED CART & BROWSE RECOVERY",
      desc: "Recover lost revenue for online stores. We configure event-driven abandoned cart workflows and high-converting recovery emails with dynamic discount incentives that recapture interested buyers at peak purchase intent.",
    },
    {
      title: "RESPONSIVE NEWSLETTER DESIGN & COPY",
      desc: "Engage your subscriber base with beautifully designed, mobile-responsive email templates in Klaviyo, Mailchimp, or ActiveCampaign. Persuasive storytelling and compelling calls-to-action drive high click-through rates.",
    },
    {
      title: "AUDIENCE SEGMENTATION & TAGGING",
      desc: "Stop sending generic email blasts. We segment your subscriber list by behavioral history, purchase frequency, geographic location, and engagement levels to deliver hyper-relevant messages that boost conversions.",
    },
    {
      title: "DELIVERABILITY & INBOX PLACEMENT",
      desc: "Ensure your messages land in the primary inbox rather than the spam or promotions tab. We configure SPF, DKIM, DMARC, and BIMI records, warm up sending domains, and maintain strict list hygiene.",
    },
    {
      title: "A/B TESTING & REVENUE ATTRIBUTION",
      desc: "Continuously improve campaign performance. We test subject lines, send times, preview text, and button layouts, providing transparent revenue attribution reports that track every rupee earned from email.",
    },
  ];

  const reasons = [
    "Expertise Across Leading ESPs (Klaviyo, Mailchimp, ActiveCampaign, Brevo)",
    "Custom HTML/CSS Email Designs Fully Responsive on All Mobile Clients",
    "Flawless Authentication Setup (SPF, DKIM, DMARC) for Maximum Deliverability",
    "Behavior-Driven Automation Triggers and Advanced Customer Segmentation",
    "Strict Compliance with Global Anti-Spam and Data Privacy Regulations",
    "Verifiable ROI Tracking Linking Email Campaigns to Direct Revenue",
  ];

  const processSteps = [
    {
      step: "01",
      title: "Audit & List Segmentation",
      desc: "We analyze your subscriber database, engagement tiers, and technical domain authentication records to establish baseline deliverability.",
    },
    {
      step: "02",
      title: "Template Design & Copy",
      desc: "We design on-brand responsive templates and write persuasive copy engineered for high click-through rates and minimal unsubscribes.",
    },
    {
      step: "03",
      title: "Automation & Workflow Build",
      desc: "We map out behavioral triggers, delay cadences, conditional logic splits, and CRM webhooks for seamless customer journeys.",
    },
    {
      step: "04",
      title: "A/B Testing & Revenue Scale",
      desc: "We run split tests on subject lines and send timings, continuously optimizing open rates, click rates, and revenue per recipient.",
    },
  ];

  const faqs = [
    {
      q: "Which email service providers (ESPs) do you support?",
      a: "We build and manage workflows across all major enterprise and SMB platforms including Klaviyo, Mailchimp, ActiveCampaign, HubSpot, Brevo (Sendinblue), ConvertKit, and Zoho Campaigns.",
    },
    {
      q: "How do you prevent emails from landing in the spam folder?",
      a: "We configure DNS security protocols (SPF, DKIM, DMARC), implement double opt-in verification, clean unengaged contacts, avoid spam-trigger vocabulary, and maintain consistent domain sending velocity to safeguard your domain reputation.",
    },
    {
      q: "What average open and click-through rates can we expect?",
      a: "While industry averages linger between 18% and 22%, our targeted automated flows (welcome series, abandoned carts) routinely achieve 35% to 50%+ open rates and 4% to 8%+ click-through rates due to behavioral relevance.",
    },
    {
      q: "Do you supply email lists or help build them organically?",
      a: "We strictly advise against buying email lists, which ruins domain reputation and violates privacy laws. We help you build high-quality, opt-in email subscriber databases organically using high-value lead magnets, website popups, and checkout forms.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 md:pt-8 bg-[#ffffff]">
      <Seo
        title="Email Marketing Services in Chennai | Email Automation Agency | SparkTech"
        description="Automate lead nurturing and boost customer retention with targeted email marketing campaigns, drip flows, and newsletter automation in Chennai."
        keywords="email marketing services in chennai, email automation chennai, drip campaigns, customer retention email marketing, newsletter marketing chennai"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://www.sparktechdm.com/services/email-marketing#service",
                "name": "Automated Email Marketing & Flow Services in Chennai",
                "url": "https://www.sparktechdm.com/services/email-marketing",
                "serviceType": "Email Marketing",
                "description": "Automate lead nurturing and boost customer retention with targeted email marketing campaigns, drip flows, and newsletter automation in Chennai.",
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
                    "name": "Email Marketing"
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
            <span className="text-[#cc7722]">EMAIL MARKETING </span>
            <span className="text-[#1b365d]">SERVICES IN CHENNAI</span>
          </h1>
          <p className="text-[#395c7a] font-inter text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Nurture leads, recover abandoned carts, and build lasting customer retention with personalized automated email sequences, newsletter design, and deliverability optimization by SparkTech.
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
              OUR EMAIL AUTOMATION <span className="text-[#cc7722]">PROCESS</span>
            </h2>
            <p className="text-[#395c7a] text-sm md:text-base font-inter max-w-xl mx-auto">
              How our retention specialists turn email databases into reliable revenue generators.
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
              WHY BUSINESSES CHOOSE SPARKTECH EMAIL MARKETING
            </h2>
            <p className="text-white text-xs md:text-sm font-light mb-6">
              We engineer automated email retention systems that build loyalty, maximize lifetime value, and generate consistent revenue.
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
              Common questions about our Chennai email marketing and marketing automation services.
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
            Fuel your email subscriber database with targeted inbound lead generation and social community growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/services/content-creation"
              className="px-5 py-2.5 bg-[#f2eee0] hover:bg-[#1b365d] text-[#1b365d] hover:text-white border border-[#cc7722] rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Lead Generation Funnels &rarr;
            </Link>
            <Link
              to="/services/social-media-marketing"
              className="px-5 py-2.5 bg-[#f2eee0] hover:bg-[#1b365d] text-[#1b365d] hover:text-white border border-[#cc7722] rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Social Media Marketing &rarr;
            </Link>
            <Link
              to="/services/seo"
              className="px-5 py-2.5 bg-[#f2eee0] hover:bg-[#1b365d] text-[#1b365d] hover:text-white border border-[#cc7722] rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Search Engine Optimization &rarr;
            </Link>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase font-oswald text-[#cc7722] tracking-wider mb-8">
            READY TO AUTOMATE YOUR CUSTOMER RETENTION?
          </h2>

          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3.5 bg-[#1f3a58] hover:bg-[#1b365d] text-white font-bold tracking-wider text-xs md:text-sm rounded-xl transition-all duration-300 shadow-md cursor-pointer"
          >
            Book a Free Email Strategy Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default AutomateEmailFlow;
