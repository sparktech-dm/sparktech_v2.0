import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const WebDevelopment = () => {
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
      title: "WEBSITE STRATEGY & PLANNING",
      desc: "Every successful website begins with a clear strategy. We understand your business, audience, and goals before planning a website structure that delivers a smooth user experience and supports long-term growth.",
    },
    {
      title: "CUSTOM WEBSITE DESIGN (UI/UX)",
      desc: "We create clean, modern, and user-friendly website designs that reflect your brand identity. Every design is focused on improving usability, increasing engagement, and encouraging visitors to take action.",
    },
    {
      title: "WEBSITE DEVELOPMENT",
      desc: "Our development team builds fast, secure, scalable, and fully responsive websites using modern technologies. Every website is optimized for performance, search engines, and future business growth.",
    },
    {
      title: "MOBILE-FIRST & RESPONSIVE DESIGN",
      desc: "Your website should deliver a consistent experience on every device. We ensure it performs seamlessly across smartphones, tablets, laptops, and desktops, providing users with fast loading speeds and smooth navigation.",
    },
  ];

  const reasons = [
    "Custom Website Design Tailored to Your Brand",
    "Fast, Secure & Fully Responsive Development",
    "SEO-Friendly Website Structure",
    "User-Focused UI/UX Design",
    "Scalable Solutions for Future Growth",
    "Ongoing Support & Website Maintenance",
  ];

  return (
    <div className="min-h-screen pt-32 pb-12 px-6 bg-[#ffffff]">
      <section className="max-w-5xl mx-auto">
        {/* Title & Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest font-oswald mb-6">
            <span className="text-[#cc7722]">WEBSITE </span>
            <span className="text-[#1b365d]">DEVELOPMENT</span>
          </h1>
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
              className="bg-[#2a4d75] border border-[#395c7a] shadow-lg hover:shadow-[0_15px_40px_rgba(204,119,34,0.4)] transition-all duration-300 p-8 rounded-2xl flex flex-col justify-center text-center h-[200px]"
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
            className="w-full max-w-2xl bg-[#2a4d75] border border-[#395c7a] shadow-lg hover:shadow-[0_15px_40px_rgba(204,119,34,0.4)] transition-all duration-300 p-8 rounded-2xl text-center"
          >
            <h2 className="text-lg md:text-xl font-bold font-oswald text-[#cc7722] uppercase tracking-wider mb-2">
              WHY BUSINESSES CHOOSE SPARKTECH
            </h2>
            <p className="text-white text-xs md:text-sm font-light mb-6">
              We build websites that combine creativity, performance, and long-term value.
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

        {/* Bottom CTA Section */}
        <div className="text-center max-w-3xl mx-auto mt-16">
          <h3 className="text-2xl md:text-3xl font-extrabold uppercase font-oswald text-[#cc7722] tracking-wider mb-8">
            READY TO BUILD YOUR NEXT WEBSITE?
          </h3>

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

export default WebDevelopment;
