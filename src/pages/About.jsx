import React from "react";
import { motion } from "framer-motion";
import { FiUsers, FiTrendingUp, FiTarget, FiZap, FiShield } from "react-icons/fi";
import { FaRocket } from "react-icons/fa";
import Seo from "../components/Seo";
import Footer from "../components/Footer";

const chevronPatternBg = {
  backgroundColor: "#0a0a0c",
  backgroundImage: `
    linear-gradient(45deg, #111115 25%, transparent 25%, transparent 75%, #111115 75%, #111115),
    linear-gradient(45deg, #111115 25%, transparent 25%, transparent 75%, #111115 75%, #111115)
  `,
  backgroundSize: "8px 8px",
  backgroundPosition: "0 0, 4px 4px",
};

const About = () => {
  const journey = [
    {
      year: "2025",
      title: "The foundation and first steps",
      desc: "We built the foundation, earned trust and turned our vision into real impact",
      steps: [
        {
          title: "Getting started",
          icon: <FiUsers size={22} />,
          image: "/history 2025 img 1.webp",
        },
        {
          title: "Building momentum",
          icon: <FiTrendingUp size={22} />,
          image: "/IMG_4402 (1) (1).webp",
        },
        {
          title: "Growing stronger",
          icon: <FaRocket size={20} />,
          image: "/history 2025 img 3.webp",
        },
        {
          title: "Scaling new heights",
          icon: <FiTarget size={22} />,
          image: "/2025 img 4.webp",
        },
      ],
    },
    {
      year: "2026",
      title: "Expanding impact and future ready",
      desc: "We're scaling our impact, expanding our reach and building a future of endless possibilities",
      steps: [
        {
          title: "Expanding our capabilities",
          icon: <FiUsers size={22} />,
          image: "/2026 img 1.webp",
        },
        {
          title: "Strengthening our impact",
          icon: <FiZap size={22} />,
          image: "/IMG 2 IN 2026.webp",
        },
        {
          title: "Wider reach, bigger goals",
          icon: <FaRocket size={20} />,
          image: "/image 3.webp",
        },
        {
          title: "Future ready",
          icon: <FiShield size={22} />,
          image: "/IMG 6 2026.webp",
        },
      ],
    },
  ];

  return (
    <>
      <Seo
        title="About Us | Spark Tech Digital"
        description="Learn about the journey, values, and milestone of Spark Tech Digital as we build foundation and scale new heights."
      />

      <div style={chevronPatternBg} className="min-h-screen text-white pt-32 pb-16 px-4 sm:px-6 md:px-12 lg:px-20 relative overflow-hidden">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <h1 className="text-4xl md:text-6xl font-black text-[#f0c417] uppercase tracking-wider">
            Our Journey
          </h1>
          <p className="text-slate-300 text-sm md:text-base font-semibold mt-3 max-w-2xl mx-auto italic">
            A journey of passion, teamwork and purpose - growing stronger with every step
          </p>

        </motion.div>

        {/* Timeline Rows Container */}
        <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
          {journey.map((row, rowIndex) => (
            <motion.div
              key={row.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-[2rem] p-6 md:p-8"
              style={{
                border: "1.5px solid #f0c417",
                background: "rgba(240,196,23,0.03)",
              }}
            >
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch relative">

                {/* Left Column: Year Card */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="w-full lg:w-[260px] xl:w-[290px] flex-shrink-0 rounded-[1.5rem] p-8 border border-[#f0c417]/30 shadow-xl flex flex-col justify-center relative overflow-hidden group"
                  style={{
                    background: "linear-gradient(135deg, #1a3a4a 0%, #0d2233 100%)",
                  }}
                >
                  {/* Background glow hover effect */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-yellow-400/10 transition-colors duration-500" />

                  <span className="text-white font-black text-5xl md:text-6xl tracking-tight whitespace-nowrap">
                    {row.year}
                  </span>
                  <h3 className="text-yellow-400 font-extrabold text-lg md:text-xl mt-4 leading-snug">
                    {row.title}
                  </h3>
                  <p className="text-slate-300 text-sm mt-4 leading-relaxed font-medium">
                    {row.desc}
                  </p>
                </motion.div>

                {/* Right Column: 4 Timeline Steps */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 items-stretch relative">
                  {/* Yellow connecting line through icons only (desktop) */}
                  <div
                    className="hidden xl:block absolute left-[12.5%] right-[12.5%] top-[28px] h-[2px] -z-0"
                    style={{ background: "#ffffff" }}
                  />
                  {row.steps.map((step, stepIndex) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: stepIndex * 0.1 }}
                      className="flex flex-col items-center relative"
                    >
                      {/* Step Icon Badge - sits on top of the connecting line */}
                      <div className="w-14 h-14 rounded-full border-2 border-[#f0c417] bg-[#0a0a0c] flex items-center justify-center text-[#f0c417] shadow-[0_0_18px_rgba(240,196,23,0.3)] hover:shadow-[0_0_28px_rgba(240,196,23,0.6)] hover:scale-105 transition-all duration-300 relative z-10">
                        {step.icon}
                      </div>

                      {/* Step Title */}
                      <span className="text-slate-200 text-center font-bold text-xs uppercase tracking-wider mt-3 mb-4 max-w-[180px] min-h-[32px] flex items-center justify-center">
                        {step.title}
                      </span>

                      {/* Step Image */}
                      <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800/60 shadow-lg relative group/item">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/item:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover/item:bg-black/10 transition-colors duration-300" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <Footer />
    </>
  );
};

export default About;
