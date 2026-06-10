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
      title: "Website Strategy & UX Mapping",
      desc: "Before we build, we map — aligning user needs with brand goals to create journeys that work.",
    },
    {
      title: "Custom Website Design (UI/UX)",
      desc: "We create designs that don’t just look good but feel right. Every pixel is placed with purpose.",
    },
    {
      title: "Website Development",
      desc: "From lightweight landing pages to robust sites — we build clean, scalable, optimised for speed, SEO-centric, and fully responsive websites.",
    },
    {
      title: "Mobile & Responsive First",
      desc: "We ensure your site looks and performs perfectly across all devices, from massive desktop monitors to the smallest smartphones.",
    },
  ];

  const reasons = [
    "We think long-term — your site won’t just launch, it’ll last.",
    "We blend design and functionality, not one over the other.",
    "We build with SEO, performance, and user behaviour in mind.",
    "We avoid cookie-cutter templates — every site is custom.",
    "We collaborate closely to ensure every click counts.",
  ];

  return (
    <div className="min-h-screen text-white py-12 px-6">
      <section className="max-w-5xl mx-auto">
        {/* Title & Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest text-[#f0c417] font-oswald mb-6">
            WEBSITE DEVELOPMENT
          </h1>
          <p className="text-white/80 font-light text-sm md:text-base leading-relaxed italic max-w-3xl mx-auto">
            Unlock your brand's digital potential with custom website development. By
            combining high-performance code, responsive design, and strategic UI/UX,
            we create websites that attract the right clients and convert them. Stay
            ahead of competitors and scale your business with a stunning digital home.
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
              Why Brands Trust Spark Tech to Build Their Sites
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
            Because your website isn’t just a presence
          </h3>
          <h3 className="text-xl md:text-2xl font-bold uppercase font-oswald text-white tracking-wider mb-6">
            -It’s proof of what your brand stands for.
          </h3>
          <p className="text-white/80 font-light text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
            Let's build a digital home for your brand designed to convert traffic into your most loyal customers.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3.5 bg-gradient-to-r from-[#172033] to-black hover:from-[#f0c417] hover:to-[#e1b514] text-[#f0c417] hover:text-black font-bold uppercase tracking-wider text-xs md:text-sm border-2 border-[#f0c417] rounded-full transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(240,196,23,0.4)] cursor-pointer"
          >
            Book a Web consult
          </button>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
