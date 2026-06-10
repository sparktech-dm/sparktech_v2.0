import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
      title: "Data-Driven Ad Creatives",
      desc: "We design eye-catching visuals and videos specifically engineered to lower CPA and increase click-through rates.",
    },
    {
      title: "Omnichannel Campaigns",
      desc: "Strategic ad placements across Meta, Google, LinkedIn, and TikTok to reach your audience wherever they are.",
    },
    {
      title: "A/B Testing & Optimization",
      desc: "Continuous testing of hooks, copy, and creatives to scale what works and cut what doesn't.",
    },
    {
      title: "Retargeting Strategies",
      desc: "Smart campaigns designed to re-engage warm audiences and push them over the finish line.",
    },
  ];

  const reasons = [
    "We base our creatives on performance data, not just aesthetics.",
    "Deep understanding of platform-specific algorithms.",
    "Relentless optimization to improve your bottom line.",
    "End-to-end management from concept to conversion.",
    "Transparent reporting so you always know your ROI.",
  ];

  return (
    <div className="min-h-screen text-white py-12 px-6">
      <section className="max-w-5xl mx-auto">
        {/* Title & Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest text-[#f0c417] font-oswald mb-6">
            ADS CREATIVE & CAMPAIGN
          </h1>
          <p className="text-white/80 font-light text-sm md:text-base leading-relaxed italic max-w-3xl mx-auto">
            Supercharge your conversion rates with creative, data-driven advertising
            campaigns. By matching high-impact copy, engaging visual creatives, and
            technical campaign audits, we ensure you gain qualified customers at lower costs.
            Stay ahead of competitors and scale your business with paid campaigns that work.
          </p>
        </div>

        {/* Offerings Grid - 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
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
              className="bg-gradient-to-b from-[#182335] to-[#0a0f18] border-2 border-[#f0c417] p-8 rounded-2xl flex flex-col justify-center text-center h-[200px]"
            >
              <h3 className="text-[#f0c417] font-oswald text-base font-bold uppercase tracking-wider mb-3">
                {item.title}
              </h3>
              <p className="text-white/80 text-xs md:text-sm font-light leading-relaxed">
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
            className="w-full max-w-2xl bg-gradient-to-b from-[#182335] to-[#0a0f18] border-2 border-[#f0c417] p-8 rounded-2xl text-center"
          >
            <h2 className="text-lg md:text-xl font-bold font-oswald text-[#f0c417] uppercase tracking-wider mb-6">
              Why Brands Trust Spark Tech for Ad Campaigns
            </h2>
            <ul className="space-y-4">
              {reasons.map((reason, idx) => (
                <li
                  key={idx}
                  className="text-white/95 text-xs md:text-sm font-light tracking-wide leading-relaxed"
                >
                  {reason}
                </li>
              ))}
            </ul>
          </MotionDiv>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-extrabold uppercase font-oswald text-[#f0c417] tracking-wider mb-2">
            Ads should be an investment, not an expense
          </h3>
          <h3 className="text-xl md:text-2xl font-bold uppercase font-oswald text-white tracking-wider mb-6">
            -Turn clicks into profitable customers.
          </h3>
          <p className="text-white/80 font-light text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
            Partner with a team that understands both scroll-stopping creative and the mathematics of profitable media buying.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3.5 bg-gradient-to-r from-[#172033] to-black hover:from-[#f0c417] hover:to-[#e1b514] text-[#f0c417] hover:text-black font-bold uppercase tracking-wider text-xs md:text-sm border-2 border-[#f0c417] rounded-full transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(240,196,23,0.4)] cursor-pointer"
          >
            Book an Ads consult
          </button>
        </div>
      </section>
    </div>
  );
};

export default AdCreativesCampaigns;
