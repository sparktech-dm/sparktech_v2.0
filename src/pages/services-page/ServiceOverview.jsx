import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { Rss, Target, Megaphone, Zap, Send, Search, Palette } from "lucide-react";
import Seo from "../../components/Seo";
export default function ServiceOverview() {
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

  const CardComponent = isMobile ? "div" : motion.div;

  const segments = [
    {
      title: "Website Development",
      details:
        "Build a fast, secure, and responsive website that reflects your brand, delivers a great user experience, and helps convert visitors into customers. ",
      link: "/services/website-development",
      buttonText: "Explore Website Development",
      icon: Rss,
    },
    {
      title: "Lead Generation",
      details:
        "Generate high-quality leads through customized digital strategies, optimized landing pages, and conversion-focused campaigns that support business growth. ",
      link: "/services/content-creation",
      buttonText: "Explore Lead Generation",
      icon: Target,
    },
    {
      title: "GOOGLE ADS & PPC ",
      details:
        "Reach your ideal customers with data-driven Google Ads campaigns designed to increase visibility, maximize return on investment, and generate quality leads.",
      link: "/services/video-editing",
      buttonText: "Explore Google Ads & PPC",
      icon: Megaphone,
    },
    {
      title: "Social Media Marketing",
      details:
        "Strengthen your brand through engaging social media strategies that build trust, increase audience engagement, and grow your online community. ",
      link: "/services/social-media-marketing",
      buttonText: "Explore Social Media Marketing",
      icon: Zap,
    },
    {
      title: "Automate Email Flow",
      details:
        "Build lasting customer relationships with personalized email campaigns and marketing automation that improve engagement and encourage repeat business. ",
      link: "/services/email-marketing",
      buttonText: "Explore Automate Email Flow",
      icon: Send,
    },
    {
      title: "Search Visibility & SEO",
      details:
        "Improve your website's visibility with SEO strategies that increase organic traffic, strengthen search rankings, and help customers find your business.",
      link: "/services/seo",
      buttonText: "Explore SEO Services",
      icon: Search,
    },
    {
      title: "Graphic Design & Branding",
      details:
        "Craft compelling visual identities, brand guidelines, social media creatives, and marketing collateral that distinguish your business and captivate audiences in Chennai.",
      link: "/services/graphics-designing",
      buttonText: "Explore Graphic Design",
      icon: Palette,
    },
  ];

  return (
    <>
      <Seo
        title="Digital Marketing Services in Chennai | SparkTech Digital"
        description="Explore results-driven digital marketing services in Chennai by SparkTech Digital, including SEO, custom web development, PPC Google Ads, social media marketing, and email automation."
        keywords="digital marketing services in chennai, seo services chennai, web development chennai, google ads agency chennai, social media marketing chennai, graphic design chennai"
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Digital Marketing Services in Chennai - SparkTech Digital",
            "url": "https://www.sparktechdm.com/services",
            "description": "Explore our comprehensive digital marketing, SEO, web development, and branding services tailored to grow your business online.",
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sparktechdm.com/" },
                { "@type": "ListItem", "position": 2, "name": "Services" }
              ]
            }
          })}
        </script>
      </Seo>
      <div className="relative min-h-[70vh] py-12 px-6 overflow-hidden bg-white">
        <div className="relative z-10 max-w-7xl lg:max-w-full lg:px-16 xl:px-24 mx-auto w-full animate-fadeIn">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-oswald uppercase tracking-wider mb-6 text-[#1b365d]">
              OUR DIGITAL MARKETING <span className="text-[#cc7722]">SERVICES IN CHENNAI</span>
            </h1>
            <p className="text-[#395c7a] font-inter text-base md:text-lg leading-relaxed">
              SparkTech Digital provides comprehensive, ROI-focused digital marketing solutions designed to help ambitious businesses build authority and scale revenue. From high-converting web architecture and organic search visibility (SEO) to strategic Google Ads PPC, B2B lead generation, social media management, automated email flows, and creative graphic design, our team in Choolaimedu crafts growth systems tailored to your goals.
            </p>
          </div>

          {/* 3 columns on desktop, 1 on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {segments.map((segment, index) => (
              <CardComponent
                key={index}
                {...(!isMobile && {
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.5, delay: index * 0.1 },
                  viewport: { once: true },
                  whileHover: {
                    scale: 1.03,
                    boxShadow: "0px 0px 25px rgba(204, 119, 34, 0.35)",
                  }
                })}
                onClick={() => navigate(segment.link)}
                className="group bg-[#1f3a58] rounded-[24px] p-8 border-2 border-[#cc7722] flex flex-col justify-between h-full min-h-[300px] cursor-pointer transition-all duration-300"
              >
                <div>
                  {/* Header: Icon + Title */}
                  <div className="flex items-center mb-5">
                    <div className="w-10 h-10 rounded-full border-2 border-[#cc7722] bg-[#f2eee0] flex items-center justify-center text-[#cc7722] shrink-0 mr-4">
                      <segment.icon className="w-5 h-5" />
                    </div>
                    <h2 className="text-[#cc7722] font-oswald text-base md:text-lg font-bold uppercase tracking-wider">
                      {segment.title}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-white text-sm leading-relaxed mb-6 font-inter font-light">
                    {segment.details}
                  </p>
                </div>

                {/* Pill Button at Bottom Center */}
                <div className="flex justify-center">
                  <Link
                    to={segment.link}
                    onClick={(e) => {
                      e.stopPropagation(); // prevent card click triggers
                      // click handled by Link
                    }}
                    className="bg-[#f2eee0] hover:bg-[#e6dfcb] text-[#1b365d] border border-[#cc7722] font-bold tracking-wider uppercase text-[11px] rounded-full px-6 py-2.5 transition-all duration-300 cursor-pointer inline-block text-center"
                  >
                    {segment.buttonText}
                  </Link>
                </div>
              </CardComponent>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
