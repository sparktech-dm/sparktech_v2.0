import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../../components/Seo";

const Graph = () => {
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
      title: "BRAND IDENTITY & LOGO DESIGN",
      desc: "Establish an iconic visual identity with custom logos, versatile color palettes, typography systems, and comprehensive brand guidelines that make your business instantly recognizable across all physical and digital touchpoints.",
    },
    {
      title: "SOCIAL MEDIA CREATIVES",
      desc: "Stand out in crowded social feeds with thumb-stopping Instagram carousels, reel covers, story graphics, and LinkedIn post kits designed to maximize engagement, brand recall, and follower growth.",
    },
    {
      title: "MARKETING COLLATERAL & BROCHURES",
      desc: "Empower your sales team with professionally designed corporate brochures, flyers, catalogs, roll-up banners, and sales leave-behinds crafted for maximum readability and persuasive commercial impact.",
    },
    {
      title: "UI/UX & WEB VISUAL ASSETS",
      desc: "Elevate your digital platforms with custom vector illustrations, high-converting hero graphics, custom iconography sets, and digital banners optimized for rapid web loading and retina displays.",
    },
    {
      title: "CORPORATE PITCH DECKS & PRESENTATIONS",
      desc: "Captivate investors and corporate clients with sleek, branded PowerPoint and Keynote pitch decks that translate complex data into clear, persuasive visual narratives.",
    },
    {
      title: "PACKAGING & PRINT PRODUCTION",
      desc: "Create shelf-ready product packaging, box designs, retail labels, and print-ready prepress files formatted to precise CMYK color profiles and die-cut specifications.",
    },
  ];

  const reasons = [
    "100% Bespoke, Original Vector Artwork",
    "Comprehensive Brand Style Guidelines",
    "High-Resolution Multi-Format Deliverables (SVG, AI, PDF, PNG)",
    "Fast Turnaround with Iterative Collaborative Feedback",
    "Seamless Cross-Channel Consistency (Print & Digital)",
    "Dedicated Creative Direction & Production Support",
  ];

  const processSteps = [
    {
      step: "01",
      title: "Creative Discovery & Briefing",
      desc: "We analyze your brand values, target demographic, competitive landscape, and aesthetic preferences to define clear creative direction.",
    },
    {
      step: "02",
      title: "Concept Ideation & Moodboarding",
      desc: "Our design team develops curated mood boards, visual stylescapes, and initial concept sketches exploring diverse creative routes.",
    },
    {
      step: "03",
      title: "Refinement & Collaborative Polish",
      desc: "We refine your chosen concept through iterative feedback rounds, perfecting typography hierarchy, color balance, and spatial harmony.",
    },
    {
      step: "04",
      title: "Asset Finalization & Delivery",
      desc: "We export the complete asset suite in all required production formats with complete commercial licensing and usage guidelines.",
    },
  ];

  const faqs = [
    {
      q: "What file formats do I receive upon project completion?",
      a: "You receive industry-standard vector files (AI, EPS, SVG) suitable for infinite scaling, high-resolution print PDFs (CMYK 300 DPI), and web-optimized raster formats (PNG with transparency, WebP, JPG) for digital usage.",
    },
    {
      q: "How many logo or design concepts do you provide?",
      a: "Our standard brand identity engagements typically include 3 distinct creative concepts to explore diverse aesthetic directions, followed by up to 3 rounds of targeted refinement on the chosen concept.",
    },
    {
      q: "Do you provide printed materials or only digital design files?",
      a: "We provide 100% print-ready production files with correct bleed margins, crop marks, and color profiles. We also collaborate directly with trusted local printing vendors across Chennai if turnkey print delivery is required.",
    },
    {
      q: "How does graphic design support my digital marketing campaigns?",
      a: "Consistent, high-quality visual assets dramatically increase click-through rates on Google Ads and social media campaigns, while strengthening credibility on your website to improve visitor conversion rates.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 md:pt-8 bg-[#ffffff]">
      <Seo
        title="Graphic Design Services in Chennai | Branding & Creative Agency | SparkTech"
        description="Elevate your brand presence with stunning graphic design, corporate branding, social media creatives, and marketing collateral in Chennai by SparkTech."
        keywords="graphic design services in chennai, graphic design agency chennai, branding design chennai, logo design chennai, marketing collateral chennai"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://www.sparktechdm.com/services/graphics-designing#service",
                "name": "Graphic Design & Branding Services in Chennai",
                "url": "https://www.sparktechdm.com/services/graphics-designing",
                "serviceType": "Graphic Design",
                "description": "Elevate your brand presence with stunning graphic design, corporate branding, social media creatives, and marketing collateral in Chennai by SparkTech.",
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
                    "name": "Graphic Designing"
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
            <span className="text-[#cc7722]">GRAPHIC DESIGN </span>
            <span className="text-[#1b365d]">SERVICES IN CHENNAI</span>
          </h1>
          <p className="text-[#395c7a] font-inter text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Distinguish your brand and communicate your message instantly with bespoke visual identities, marketing collateral, social creatives, and packaging designed by SparkTech in Chennai.
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
              OUR CREATIVE DESIGN <span className="text-[#cc7722]">PROCESS</span>
            </h2>
            <p className="text-[#395c7a] text-sm md:text-base font-inter max-w-xl mx-auto">
              How our Chennai design studio turns your vision into commercial visual assets.
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
              WHY BUSINESSES CHOOSE SPARKTECH DESIGN
            </h2>
            <p className="text-white text-xs md:text-sm font-light mb-6">
              We create compelling visual assets that elevate brand credibility and drive sales conversions.
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
              Answers to common queries about our Chennai graphic design services.
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
            Pair your visual branding with our performance-driven digital marketing solutions for maximum impact.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/services/website-development"
              className="px-5 py-2.5 bg-[#f2eee0] hover:bg-[#1b365d] text-[#1b365d] hover:text-white border border-[#cc7722] rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Custom Website Development &rarr;
            </Link>
            <Link
              to="/services/social-media-marketing"
              className="px-5 py-2.5 bg-[#f2eee0] hover:bg-[#1b365d] text-[#1b365d] hover:text-white border border-[#cc7722] rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Social Media Marketing &rarr;
            </Link>
            <Link
              to="/services/video-editing"
              className="px-5 py-2.5 bg-[#f2eee0] hover:bg-[#1b365d] text-[#1b365d] hover:text-white border border-[#cc7722] rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Google Ads & Ad Creatives &rarr;
            </Link>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase font-oswald text-[#cc7722] tracking-wider mb-8">
            READY TO TRANSFORM YOUR BRAND'S VISUAL IDENTITY?
          </h2>

          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3.5 bg-[#1f3a58] hover:bg-[#1b365d] text-white font-bold tracking-wider text-xs md:text-sm rounded-xl transition-all duration-300 shadow-md cursor-pointer"
          >
            Book a Free Design Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Graph;