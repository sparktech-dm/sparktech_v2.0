import React, { useState, useRef, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { FiUsers, FiTrendingUp, FiTarget, FiZap, FiShield, FiChevronLeft, FiChevronRight } from "react-icons/fi";
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

  const [activeYear, setActiveYear] = useState("2025");
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const scrollRef = useRef(null);
  const lastInteraction = useRef(Date.now());

  const allSteps = useMemo(() => {
    return journey.flatMap((row) =>
      row.steps.map((step) => ({ ...step, year: row.year }))
    );
  }, [journey]);

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const children = scrollRef.current.children;
      if (children && children[index]) {
        children[index].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
        setActiveStepIndex(index);
        setActiveYear(index < 4 ? "2025" : "2026");
        lastInteraction.current = Date.now();
      }
    }
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let minDiff = Infinity;
    let activeIndex = 0;
    
    Array.from(container.children).forEach((child, index) => {
      const childCenter = child.offsetLeft + child.clientWidth / 2;
      const diff = Math.abs(containerCenter - childCenter);
      if (diff < minDiff) {
        minDiff = diff;
        activeIndex = index;
      }
    });

    const year = activeIndex < 4 ? "2025" : "2026";
    
    setActiveStepIndex((prevIndex) => {
      if (prevIndex !== activeIndex) {
        return activeIndex;
      }
      return prevIndex;
    });

    setActiveYear((prevYear) => {
      if (prevYear !== year) {
        return year;
      }
      return prevYear;
    });
    
    lastInteraction.current = Date.now();
  };

  // Autoplay loop within active year steps range (faster transition: 1 second)
  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastInteraction.current < 1000) {
        return;
      }

      if (activeYear === "2025") {
        const nextIndex = activeStepIndex >= 3 || activeStepIndex < 0 ? 0 : activeStepIndex + 1;
        scrollToIndex(nextIndex);
      } else {
        const nextIndex = activeStepIndex >= 7 || activeStepIndex < 4 ? 4 : activeStepIndex + 1;
        scrollToIndex(nextIndex);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [activeYear, activeStepIndex]);

  return (
    <>
      <Seo
        title="About Us | Spark Tech Digital"
        description="Learn about the journey, values, and milestone of Spark Tech Digital as we build foundation and scale new heights."
      />

      <div style={chevronPatternBg} className="min-h-screen text-white pt-32 pb-0 px-0 sm:px-6 md:px-12 lg:px-20 relative overflow-hidden">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-24 px-4 sm:px-0"
        >
          <h1 className="text-4xl md:text-6xl font-black text-[#f0c417] uppercase tracking-wider">
            Our Journey
          </h1>
          <p className="text-slate-300 text-sm md:text-base font-semibold mt-3 max-w-2xl mx-auto italic">
            A journey of passion, teamwork and purpose - growing stronger with every step
          </p>

        </motion.div>

        {/* Timeline Rows Container (Desktop View) */}
        <div className="hidden lg:block max-w-7xl mx-auto space-y-20 lg:space-y-32">
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
                  transition={{ duration: 0.5, delay: 0.1 }}
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

        {/* Timeline Carousel (Mobile/Tablet View) */}
        <div className="lg:hidden mx-auto relative">
          {/* Year selector badge */}
          <div className="flex items-center justify-center gap-6 mb-8">
            {activeYear === "2026" ? (
              <button
                onClick={() => scrollToIndex(0)}
                className="text-white hover:text-[#f0c417] transition-colors duration-200 cursor-pointer"
                aria-label="Go to 2025"
              >
                <FiChevronLeft size={28} />
              </button>
            ) : (
              <div className="w-7 h-7" />
            )}

            <motion.div
              key={activeYear}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="px-8 py-2 rounded-full border border-[#f0c417] text-white font-extrabold text-xl italic tracking-wider shadow-[0_0_15px_rgba(240,196,23,0.2)]"
              style={{
                background: "linear-gradient(135deg, #1a3a4a 0%, #0d2233 100%)",
              }}
            >
              {activeYear}
            </motion.div>

            {activeYear === "2025" ? (
              <button
                onClick={() => scrollToIndex(4)}
                className="text-white hover:text-[#f0c417] transition-colors duration-200 cursor-pointer"
                aria-label="Go to 2026"
              >
                <FiChevronRight size={28} />
              </button>
            ) : (
              <div className="w-7 h-7" />
            )}
          </div>

          {/* Slider with flanking arrows */}
          <div className="flex items-center gap-1 px-1">

            {/* Left arrow - outside image */}
            <button
              onClick={() => activeStepIndex > 0 && scrollToIndex(activeStepIndex - 1)}
              className={`flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md ${
                activeStepIndex > 0
                  ? "bg-black/70 border-[#f0c417]/60 text-[#f0c417] hover:bg-[#f0c417]/20"
                  : "bg-black/20 border-zinc-700/40 text-zinc-600 cursor-default"
              }`}
              aria-label="Previous step"
              disabled={activeStepIndex === 0}
            >
              <FiChevronLeft size={20} />
            </button>

            {/* Horizontal Scroll Box */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="no-scrollbar flex-1 flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {allSteps.map((step, index) => {
                const isActive = activeStepIndex === index;
                return (
                  <div
                    key={`${step.year}-${step.title}`}
                    className={`flex-shrink-0 w-full snap-center transition-all duration-400 flex flex-col items-center ${
                      isActive ? "opacity-100" : "opacity-40"
                    }`}
                  >
                    {/* Step Title */}
                    <span className="text-slate-200 text-center font-bold text-xs uppercase tracking-wider mb-3 min-h-[28px] flex items-center justify-center">
                      {step.title}
                    </span>

                    {/* Step Image - bigger, full width */}
                    <div
                      className={`w-full aspect-[4/3] rounded-[1.25rem] overflow-hidden border-2 transition-all duration-300 relative ${
                        isActive ? "border-[#f0c417] shadow-[0_0_24px_rgba(240,196,23,0.35)]" : "border-zinc-800/60 shadow-lg"
                      }`}
                    >
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right arrow - outside image */}
            <button
              onClick={() => activeStepIndex < 7 && scrollToIndex(activeStepIndex + 1)}
              className={`flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md ${
                activeStepIndex < 7
                  ? "bg-black/70 border-[#f0c417]/60 text-[#f0c417] hover:bg-[#f0c417]/20"
                  : "bg-black/20 border-zinc-700/40 text-zinc-600 cursor-default"
              }`}
              aria-label="Next step"
              disabled={activeStepIndex === 7}
            >
              <FiChevronRight size={20} />
            </button>

          </div>
        </div>

      </div>

      {/* ── VISION & MISSION SECTION ── */}
      <div style={chevronPatternBg} className="pt-0 pb-20 md:py-32 px-4 sm:px-8 md:px-16 lg:px-24">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Vision <span className="text-[#f0c417]">&amp;</span> Mission
          </h2>

        </motion.div>

        <div className="max-w-6xl mx-auto space-y-20 md:space-y-28">

          {/* ── OUR VISION ROW: Image LEFT | Text RIGHT ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-10 md:gap-16"
          >
            {/* Vision Image */}
            <div className="w-full md:w-1/2 flex-shrink-0">
              <img
                src="/VISION (1).webp"
                alt="Our Vision"
                className="w-full h-[280px] md:h-[360px] object-cover rounded-[2rem] transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Vision Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="w-full md:w-1/2 text-center md:text-left"
            >
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Our <span className="text-[#f0c417]">Vision</span>
              </h3>

              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-4 italic">
                To reshape digital into a space where data meets depth — and brands grow through clarity, not chaos.
              </p>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed italic">
                At Spark Tech, our vision is to fuse creativity with clarity, building bold ideas on a bedrock of insight and intention.
              </p>
            </motion.div>
          </motion.div>

          {/* ── OUR MISSION ROW: Text LEFT | Image RIGHT ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16"
          >
            {/* Mission Image */}
            <div className="w-full md:w-1/2 flex-shrink-0">
              <img
                src="/mission img.webp"
                alt="Our Mission"
                className="w-full h-[280px] md:h-[360px] object-cover rounded-[2rem] transition-transform duration-700 hover:scale-105"
                style={{ objectPosition: "center 20%" }}
              />
            </div>
            {/* Mission Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="w-full md:w-1/2 text-center md:text-left"
            >
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                Our <span className="text-[#f0c417]">Mission</span>
              </h3>

              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-4">
                We dig deep before we move fast. Every strategy we craft is backed by research, sharpened by data, and brought to life through storytelling that connects.
              </p>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                Helping brands grow with purpose is what drives Spark Tech — a digital marketing agency in Chennai that believes in data-backed decisions and content with conviction.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;