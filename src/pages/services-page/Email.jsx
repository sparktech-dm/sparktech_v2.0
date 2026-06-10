import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const EmailMarketing = () => {
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
      title: "Welcome Flows & Automations",
      desc: "Turn new subscribers into loyal customers with automated, perfectly-timed email sequences that build trust.",
    },
    {
      title: "Newsletter Management",
      desc: "Keep your audience engaged with high-quality, readable newsletters that provide value and drive consistent clicks.",
    },
    {
      title: "E-commerce Retention",
      desc: "Recover abandoned carts, encourage repeat purchases, and maximize customer lifetime value with targeted flows.",
    },
    {
      title: "Campaign Optimization",
      desc: "We track open rates, click-throughs, and conversions, A/B testing every variable to ensure peak performance.",
    },
  ];

  const reasons = [
    "We don't just send emails, we build relationships.",
    "Deep segmentation for maximum relevance.",
    "Data-driven A/B testing on subject lines.",
    "Beautiful, responsive, and accessible templates.",
    "Deliverability strategies so you never hit the spam folder.",
  ];

  return (
    <div className="min-h-screen text-white py-12 px-6">
      <section className="max-w-5xl mx-auto">
        {/* Title & Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest text-[#f0c417] font-oswald mb-6">
            AUTOMATE EMAIL FLOW
          </h1>
          <p className="text-white/80 font-light text-sm md:text-base leading-relaxed italic max-w-3xl mx-auto">
            Supercharge your retention rates with custom automated email flows. By
            setting up smart segmentation, high-converting newsletters, and
            behavior-driven email triggers, we nurture subscribers into loyal advocates.
            Stay ahead of competitors and drive consistent customer value on autopilot.
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
              Why Choose Spark Tech for Email?
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
            Stop blasting audiences
          </h3>
          <h3 className="text-xl md:text-2xl font-bold uppercase font-oswald text-white tracking-wider mb-6">
            -Start building momentum.
          </h3>
          <p className="text-white/80 font-light text-sm leading-relaxed mb-8 max-w-2xl mx-auto">
            Unlock the highest ROI channel in digital marketing with a team that knows how to command the inbox.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3.5 bg-gradient-to-r from-[#172033] to-black hover:from-[#f0c417] hover:to-[#e1b514] text-[#f0c417] hover:text-black font-bold uppercase tracking-wider text-xs md:text-sm border-2 border-[#f0c417] rounded-full transition-all duration-300 shadow-md hover:shadow-[0_0_20px_rgba(240,196,23,0.4)] cursor-pointer"
          >
            Book an Email consult
          </button>
        </div>
      </section>
    </div>
  );
};

export default EmailMarketing;
