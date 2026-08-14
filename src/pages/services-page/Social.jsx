import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
    { title: "Content Strategy & Planning", desc: "We build a plan that resonates with your audience insights and brand tone, aligned with growth goals." },
    { title: "Content Creation", desc: "From punchy captions to powerful reels — our creative team builds content that cuts through the noise." },
    { title: "Social Media Management", desc: "We handle your social day-to-day — scheduling, community management, engagement, and optimizations." },
    { title: "Influencer Marketing", desc: "We partner with influencers who fit your brand — not just follow counts." },
    { title: "Paid Social Integration", desc: "We align your content and ad strategy across platforms to drive reach, clicks, and conversions." }
  ];

  const reasons = [
    "Strategy-first approach, not post-first panic",
    "Consistent brand voice across platforms",
    "Native content built for each platform’s culture",
    "Strong eye for design, storytelling, and timing",
    "Seamless integration with performance marketing"
  ];

  return (
    <div className="min-h-screen pt-32 pb-12 px-6 bg-[#ffffff]">
      <section className="max-w-5xl mx-auto">
        {/* Title & Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest font-oswald mb-6">
            <span className="text-[#cc7722]">SOCIAL MEDIA </span>
            <span className="text-[#1b365d]">MARKETING</span>
          </h1>
        </div>

        {/* Offerings Grid - 5 cards */}
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
              className="bg-[#1f3a58] p-8 rounded-2xl flex flex-col justify-center text-center h-[200px]"
            >
              <h3 className="text-[#cc7722] font-oswald text-base font-bold uppercase tracking-wider mb-3">
                {item.title}
              </h3>
              <p className="text-white text-xs md:text-sm font-light leading-relaxed">
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
            className="w-full max-w-2xl bg-[#1f3a58] p-8 rounded-2xl text-center"
          >
            <h2 className="text-lg md:text-xl font-bold font-oswald text-[#cc7722] uppercase tracking-wider mb-6">
              Why Brands Trust Spark Tech with Their Socials
            </h2>
            <ul className="space-y-4">
              {reasons.map((reason, idx) => (
                <li
                  key={idx}
                  className="text-white text-xs md:text-sm font-light tracking-wide leading-relaxed"
                >
                  {reason}
                </li>
              ))}
            </ul>
          </MotionDiv>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center max-w-3xl mx-auto mt-16">
          <h3 className="text-2xl md:text-3xl font-extrabold uppercase font-oswald text-[#cc7722] tracking-wider mb-8">
            Social that sparks lead magnets
          </h3>

          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3.5 bg-[#1f3a58] hover:bg-[#1b365d] text-white font-bold tracking-wider text-xs md:text-sm rounded-xl transition-all duration-300 shadow-md cursor-pointer"
          >
            Book a Strategy Call
          </button>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaMarketing;
