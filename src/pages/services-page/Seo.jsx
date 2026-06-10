import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const SEO = () => {
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
      title: "Technical SEO",
      desc: "Boost your brand presence across platforms with engaging strategies.",
    },
    {
      title: "On-Page SEO",
      desc: "From keyword-rich original content to intelligent internal linking, we turn every page into a high-performing asset.",
    },
    {
      title: "Off-Page SEO",
      desc: "With our white-hat on, we boost your authority with high-quality backlinks that earn trust and traffic.",
    },
    {
      title: "Local SEO",
      desc: "We help you show up and stand out in local searches, Google Maps, and hyper-local listings.",
    },
    {
      title: "AI-powered SEO",
      desc: "We use AI for keyword mapping, predictive ranking, and competitor analysis - so you're always two steps ahead.",
    },
    {
      title: "Searching Engine Marketing",
      desc: "We create and manage paid search campaigns that get actual results with no wasted ad spend. If SEO is the long game, SEM is your fast lane.",
    },
  ];

  const reasons = [
    "We don't believe in one-size-fits-all roadmaps.",
    "Every keyword is researched.",
    "We combine automation with human judgement.",
    "We track what matters - not vanity metrics.",
    "We care about your goals, not just your rankings.",
  ];

  return (
    <div className="min-h-screen text-white py-12 px-6">
      <section className="max-w-5xl mx-auto">
        {/* Title & Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest text-[#f0c417] font-oswald mb-6">
            SEARCH VISIBILITY & SEO
          </h1>
          <p className="text-white/80 font-light text-sm md:text-base leading-relaxed italic max-w-3xl mx-auto">
            Unlock your website's full potential with smart SEO strategies. By
            optimizing keywords, improving site speed, and building quality
            backlinks, you can attract the right audience and boost your search
            rankings. Stay ahead of competitors and drive consistent growth with
            a strong digital presence.
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
              Why Choose Spark Tech for SEO?
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
            SEO isn't just about being found
          </h3>
          <h3 className="text-xl md:text-2xl font-bold uppercase font-oswald text-white tracking-wider mb-6">
            -it's about being chosen.
          </h3>
          <p className="text-white/80 font-light text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
            Let's craft an SEO strategy that not only reaches the top but stays
            there. Partner with us to scale your organic presence sustainably.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3.5 bg-gradient-to-r from-[#172033] to-black hover:from-[#f0c417] hover:to-[#e1b514] text-[#f0c417] hover:text-black font-bold uppercase tracking-wider text-xs md:text-sm border-2 border-[#f0c417] rounded-full transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(240,196,23,0.4)] cursor-pointer"
          >
            Book a SEO consult
          </button>
        </div>
      </section>
    </div>
  );
};

export default SEO;