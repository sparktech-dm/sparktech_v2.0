import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Seo from "../../components/Seo";

const WebsiteDevelopment = () => {
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
      title: "CUSTOM WEB APPLICATIONS & REACT SITES",
      desc: "We develop ultra-fast, modern single-page applications and static sites utilizing React 19, Vite, and Next-level architectures that deliver instant page loads, smooth navigation, and effortless scalability for growing enterprises.",
    },
    {
      title: "UI/UX DESIGN & INTERACTIVE PROTOTYPING",
      desc: "We design user-centric interfaces in Figma that blend aesthetics with conversion science. Clear visual hierarchies, accessible typography, and intuitive user journeys ensure visitors engage effortlessly and convert into leads.",
    },
    {
      title: "E-COMMERCE STORE DEVELOPMENT",
      desc: "Launch high-performance digital stores with Shopify, WooCommerce, or headless e-commerce. We build secure checkout flows, localized payment gateways, inventory management systems, and product catalog filters.",
    },
    {
      title: "CONTENT MANAGEMENT SYSTEMS (CMS)",
      desc: "Take total control of your website content. We build custom WordPress, Webflow, and headless CMS platforms that allow your marketing team to publish blogs, update service pages, and add banners with zero coding required.",
    },
    {
      title: "CORE WEB VITALS & SPEED ACCELERATION",
      desc: "Speed is a decisive ranking and conversion factor. We optimize image compression, script bundling, CSS delivery, and server cache configurations to achieve sub-second load times and 90+ Google PageSpeed scores.",
    },
    {
      title: "WEBSITE MAINTENANCE & SECURITY",
      desc: "Protect your digital investment. Our ongoing maintenance plans include regular security patches, daily cloud backups, uptime monitoring, malware defense, and routine feature enhancements.",
    },
  ];

  const reasons = [
    "Clean, Modern Code Engineered with React & Vite Frameworks",
    "Mobile-First, 100% Responsive Architecture Across All Screen Sizes",
    "Built-In Technical SEO, Semantic HTML5 & Schema.org Markup",
    "Sub-Second Page Speeds Optimized for Google Core Web Vitals",
    "Transparent Milestone-Based Delivery with Strict Timelines",
    "Dedicated Post-Launch Warranty, Maintenance & Technical Support",
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Wireframing",
      desc: "We map out your brand architecture, customer conversion goals, page hierarchies, and low-fidelity UX wireframes.",
    },
    {
      step: "02",
      title: "UI/UX Interface Design",
      desc: "We craft custom, high-fidelity visual mockups and interactive prototypes with your exact typography, palette, and assets.",
    },
    {
      step: "03",
      title: "Modern Full-Stack Development",
      desc: "We engineer pixel-perfect frontend code, responsive mobile breakpoints, API integrations, and robust database layers.",
    },
    {
      step: "04",
      title: "Testing, SEO & Deployment",
      desc: "We execute cross-browser testing, Core Web Vitals audits, technical SEO checks, and launch your site on enterprise CDN hosting.",
    },
  ];

  const faqs = [
    {
      q: "How long does it take to design and develop a custom website?",
      a: "Standard business websites with 5 to 10 pages typically take 2 to 4 weeks from initial wireframes to final launch. More complex e-commerce platforms or custom web applications take 6 to 10 weeks depending on custom feature requirements.",
    },
    {
      q: "Will my website be mobile-friendly and responsive?",
      a: "Yes, 100%. Every website we develop is engineered with a mobile-first philosophy, ensuring flawless rendering, touch navigation, and fast loading speeds across mobile phones, tablets, laptops, and desktop displays.",
    },
    {
      q: "Can I manage and update content on the website myself?",
      a: "Absolutely. We provide an intuitive Content Management System (CMS) or admin dashboard along with recorded video training so your team can easily update text, add new photos, publish blogs, and manage inquiries.",
    },
    {
      q: "Is SEO included during the website development process?",
      a: "Yes. All our websites are built with clean semantic HTML, mobile responsiveness, structured schema markup, fast loading speeds, and optimized meta tag foundations to ensure search engines index your site immediately upon launch.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12 px-6 md:pt-8 bg-[#ffffff]">
      <Seo
        title="Website Development Company in Chennai | Custom Web Design | SparkTech"
        description="Build fast, responsive, and SEO-friendly websites with SparkTech Digital. Expert web development, custom UI/UX design, and CMS solutions in Chennai."
        keywords="website development company in chennai, web development chennai, custom website design chennai, ui ux design chennai, web developers chennai"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                "@id": "https://www.sparktechdm.com/services/website-development#service",
                "name": "Website Development & UI/UX Design Services in Chennai",
                "url": "https://www.sparktechdm.com/services/website-development",
                "serviceType": "Web Development",
                "description": "Fast, secure, responsive, and SEO-friendly website design and web development services in Chennai tailored to scale your brand.",
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
                    "name": "Website Development"
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
            <span className="text-[#cc7722]">WEBSITE DEVELOPMENT </span>
            <span className="text-[#1b365d]">COMPANY IN CHENNAI</span>
          </h1>
          <p className="text-[#395c7a] font-inter text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Build fast, secure, and conversion-engineered websites with SparkTech Digital. From bespoke UI/UX design to modern React and CMS development, we engineer digital storefronts that turn visitors into paying customers.
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
              OUR WEB DEVELOPMENT <span className="text-[#cc7722]">PROCESS</span>
            </h2>
            <p className="text-[#395c7a] text-sm md:text-base font-inter max-w-xl mx-auto">
              How our Chennai engineering team delivers pixel-perfect, high-performance web solutions.
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
              WHY BUSINESSES CHOOSE SPARKTECH WEB DEVELOPMENT
            </h2>
            <p className="text-white text-xs md:text-sm font-light mb-6">
              We engineer custom web platforms built for speed, conversion rate optimization, and long-term brand equity.
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
              Common questions about our Chennai website design and custom development services.
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
            Complement your new website with our organic search visibility and creative visual identity services.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/services/seo"
              className="px-5 py-2.5 bg-[#f2eee0] hover:bg-[#1b365d] text-[#1b365d] hover:text-white border border-[#cc7722] rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Search Engine Optimization (SEO) &rarr;
            </Link>
            <Link
              to="/services/graphics-designing"
              className="px-5 py-2.5 bg-[#f2eee0] hover:bg-[#1b365d] text-[#1b365d] hover:text-white border border-[#cc7722] rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Graphic Design & Branding &rarr;
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
            READY TO BUILD A HIGH-CONVERTING WEBSITE?
          </h2>

          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3.5 bg-[#1f3a58] hover:bg-[#1b365d] text-white font-bold tracking-wider text-xs md:text-sm rounded-xl transition-all duration-300 shadow-md cursor-pointer"
          >
            Book a Free Website Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDevelopment;
