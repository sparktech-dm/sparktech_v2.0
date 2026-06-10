import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Rss, Target, Megaphone, Zap, Send, Search } from "lucide-react";

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
        "At Spark Tech, we offer website development services that go beyond code and templates. We craft digital experiences that perform.",
      link: "/services/website-development",
      buttonText: "DISCOVER WEB SOLUTIONS",
      icon: Rss,
    },
    {
      title: "Lead Generation",
      details:
        "At Spark Tech, we design automated lead generation systems and high-converting funnels to capture prospects and turn clicks into revenue.",
      link: "/services/content-creation",
      buttonText: "CAPTURE LEADS",
      icon: Target,
    },
    {
      title: "Ads Creative & Campaign",
      details:
        "At Spark Tech, we build high-performing ad creatives and manage data-driven campaigns that maximize your ROI and lower acquisition costs.",
      link: "/services/video-editing",
      buttonText: "LAUNCH CAMPAIGN",
      icon: Megaphone,
    },
    {
      title: "Social Media Marketing",
      details:
        "At Spark Tech, we craft high-impact social media strategies that elevate your brand voice, engage audiences, and build active communities.",
      link: "/services/social-media-marketing",
      buttonText: "DRIVE SOCIAL SUCCESS",
      icon: Zap,
    },
    {
      title: "Automate Email Flow",
      details:
        "At Spark Tech, we deploy intelligent email automation and nurturing flows that drive customer loyalty and repeat business on autopilot.",
      link: "/services/email-marketing",
      buttonText: "AUTOMATE YOUR GROWTH",
      icon: Send,
    },
    {
      title: "Search Visibility & SEO",
      details:
        "At Spark Tech, we implement technical search engine optimization that elevates your search visibility, ranking you higher to dominate results.",
      link: "/services/seo",
      buttonText: "BOOST YOUR SEO",
      icon: Search,
    },
  ];

  return (
    <div className="relative min-h-[70vh] text-white py-12 px-6 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-bold font-oswald text-center uppercase tracking-wider mb-16">
          OUR <span className="text-[#f0c417]">SERVICES</span>
        </h1>

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
                  boxShadow: "0px 0px 25px rgba(240, 196, 23, 0.35)",
                }
              })}
              onClick={() => navigate(segment.link)}
              className="group bg-gradient-to-b from-[#182335] to-[#0a0f18] rounded-[24px] p-8 border-2 border-[#f0c417] flex flex-col justify-between h-[300px] cursor-pointer transition-all duration-300"
            >
              <div>
                {/* Header: Icon + Title */}
                <div className="flex items-center mb-5">
                  <div className="w-10 h-10 rounded-full border-2 border-[#f0c417] bg-black flex items-center justify-center text-[#f0c417] shrink-0 mr-4">
                    <segment.icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-[#f0c417] font-oswald text-base md:text-lg font-bold uppercase tracking-wider">
                    {segment.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-white/80 text-sm leading-relaxed mb-6 font-inter font-light">
                  {segment.details}
                </p>
              </div>

              {/* Pill Button at Bottom Center */}
              <div className="flex justify-center">
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // prevent card click triggers
                    navigate(segment.link);
                  }}
                  className="bg-black hover:bg-[#f0c417] text-[#f0c417] hover:text-black border border-[#f0c417] font-bold tracking-wider uppercase text-[11px] rounded-full px-6 py-2.5 transition-all duration-300 cursor-pointer"
                >
                  {segment.buttonText}
                </button>
              </div>
            </CardComponent>
          ))}
        </div>
      </div>
    </div>
  );
}
