import React, { useState, useRef, useMemo, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { FiUsers, FiTrendingUp, FiTarget, FiZap, FiShield, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FaRocket } from "react-icons/fa";
import Seo from "../components/Seo";
import Footer from "../components/Footer";

const chevronPatternBg = {
  backgroundColor: "#0a0a0c",
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

  const [activeYear, setActiveYear] = useState(journey[0]?.year || "2025");
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const scrollRef = useRef(null);
  const lastInteraction = useRef(Date.now());

  const horizontalScrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: horizontalScrollRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const horizontalX = useTransform(smoothProgress, [0, 1], ["0%", "-50%"]);

  const allSteps = useMemo(() => {
    return journey.flatMap((row) =>
      row.steps.map((step) => ({ ...step, year: row.year }))
    );
  }, [journey]);

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const children = container.children;
      if (children && children[index]) {
        const targetElement = children[index];
        const scrollPosition = targetElement.offsetLeft - container.clientWidth / 2 + targetElement.clientWidth / 2;
        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth"
        });
        setActiveStepIndex(index);

        const yearIndex = Math.floor(index / 4);
        if (journey[yearIndex]) {
          setActiveYear(journey[yearIndex].year);
        }

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

    const yearIndex = Math.floor(activeIndex / 4);
    const year = journey[yearIndex]?.year || journey[0].year;

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

      const currentYearIndex = journey.findIndex((r) => r.year === activeYear);
      if (currentYearIndex === -1) return;

      const startIdx = currentYearIndex * 4;
      const endIdx = startIdx + 3;

      const nextIndex = activeStepIndex >= endIdx || activeStepIndex < startIdx ? startIdx : activeStepIndex + 1;
      scrollToIndex(nextIndex);
    }, 1000);

    return () => clearInterval(interval);
  }, [activeYear, activeStepIndex, journey]);

  return (
    <>
      <Seo
        title="About Us | Spark Tech Digital"
        description="Learn about the journey, values, and milestone of Spark Tech Digital as we build foundation and scale new heights."
      />

      <div className="min-h-screen pt-32 pb-0 relative overflow-hidden bg-white">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-10 px-8 md:px-16"
        >
          <h1 className="text-4xl md:text-6xl font-black text-[#1b365d] uppercase tracking-wider">
            OUR <span className="text-[#cc7722]">JOURNEY</span>
          </h1>
          <p className="text-[#1b365d] text-sm md:text-base font-semibold mt-3 max-w-2xl mx-auto italic">
            A journey of passion, teamwork and purpose - growing stronger with every step
          </p>

        </motion.div>

        {/* Year Toggle Tabs */}
        <div className="hidden lg:flex justify-center gap-3 md:gap-6 mb-12 flex-wrap px-4 max-w-4xl mx-auto">
          {journey.map((row, index) => (
            <button
              key={row.year}
              onClick={() => {
                setActiveYear(row.year);
                const startIndex = index * 4;
                setActiveStepIndex(startIndex);
                scrollToIndex(startIndex);
                lastInteraction.current = Date.now();
              }}
              className={`px-6 py-2 md:px-8 md:py-3 rounded-full font-bold text-base md:text-lg transition-all duration-300 cursor-pointer ${activeYear === row.year
                ? "bg-[#1f3a58] text-white"
                : "bg-[#f2eee0] text-[#1b365d] border border-[#cc7722] hover:bg-[#e6dfcb]"
                }`}
            >
              {row.year}
            </button>
          ))}
        </div>

        {/* Timeline Rows Container (Desktop View) */}
        <div className="hidden lg:block max-w-7xl mx-auto">
          {journey
            .filter((row) => row.year === activeYear)
            .map((row) => (
              <motion.div
                key={row.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="rounded-[2rem] p-6 md:p-8"
                style={{
                  border: "1.5px solid #cc7722",
                  background: "#ffffff",
                }}
              >
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch relative">

                  {/* Left Column: Year Card */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-[260px] xl:w-[290px] flex-shrink-0 rounded-[1.5rem] p-8 shadow-xl flex flex-col justify-center relative overflow-hidden group bg-[#1f3a58]"
                  >
                    {/* Background glow hover effect */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#cc7722]/10 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-[#cc7722]/20 transition-colors duration-500" />

                    <span className="text-white font-black text-5xl md:text-6xl tracking-tight whitespace-nowrap">
                      {row.year}
                    </span>
                    <h3 className="text-[#cc7722] font-extrabold text-lg md:text-xl mt-4 leading-snug">
                      {row.title}
                    </h3>
                    <p className="text-white text-sm mt-4 leading-relaxed font-medium">
                      {row.desc}
                    </p>
                  </motion.div>

                  {/* Right Column: 4 Timeline Steps */}
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8 items-stretch relative">
                    {/* Yellow connecting line through icons only (desktop) */}
                    <div
                      className="hidden xl:block absolute left-[12.5%] right-[12.5%] top-[28px] h-[2px] -z-0"
                      style={{ background: "#1b365d" }}
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
                        <div className="w-14 h-14 rounded-full border-2 border-[#cc7722] bg-[#f2eee0] flex items-center justify-center text-[#cc7722] shadow-sm hover:shadow-[0_0_15px_rgba(204,119,34,0.4)] hover:scale-105 transition-all duration-300 relative z-10">
                          {step.icon}
                        </div>

                        {/* Step Title */}
                        <span className="text-[#1b365d] text-center font-bold text-xs uppercase tracking-wider mt-3 mb-4 max-w-[180px] min-h-[32px] flex items-center justify-center">
                          {step.title}
                        </span>

                        {/* Step Image */}
                        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-gray-200 shadow-lg relative group/item">
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
        <div className="lg:hidden mx-auto relative px-4 sm:px-8 md:px-16">
          {/* Year selector badge */}
          <div className="flex items-center justify-center gap-6 mb-8">
            {activeYear === "2026" ? (
              <button
                onClick={() => scrollToIndex(0)}
                className="text-[#1b365d] hover:text-[#cc7722] transition-colors duration-200 cursor-pointer"
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
              className="px-8 py-2 rounded-full border border-[#cc7722] bg-[#1f3a58] text-white font-extrabold text-xl italic tracking-wider shadow-sm"
            >
              {activeYear}
            </motion.div>

            {activeYear === "2025" ? (
              <button
                onClick={() => scrollToIndex(4)}
                className="text-[#1b365d] hover:text-[#cc7722] transition-colors duration-200 cursor-pointer"
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
              className={`flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md ${activeStepIndex > 0
                ? "bg-[#f2eee0] border-[#cc7722] text-[#cc7722] hover:bg-[#e6dfcb]"
                : "bg-gray-100 border-gray-300 text-gray-400 cursor-default"
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
                    className={`flex-shrink-0 w-full snap-center transition-all duration-400 flex flex-col items-center ${isActive ? "opacity-100" : "opacity-40"
                      }`}
                  >
                    {/* Step Title */}
                    <span className="text-[#1b365d] text-center font-bold text-xs uppercase tracking-wider mb-3 min-h-[28px] flex items-center justify-center">
                      {step.title}
                    </span>

                    {/* Step Image - bigger, full width */}
                    <div
                      className={`w-full aspect-[4/3] rounded-[1.25rem] overflow-hidden border-2 transition-all duration-300 relative ${isActive ? "border-[#cc7722] shadow-[0_0_24px_rgba(204,119,34,0.25)]" : "border-gray-200 shadow-sm"
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
              onClick={() => activeStepIndex < allSteps.length - 1 && scrollToIndex(activeStepIndex + 1)}
              className={`flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer shadow-md ${activeStepIndex < allSteps.length - 1
                ? "bg-[#f2eee0] border-[#cc7722] text-[#cc7722] hover:bg-[#e6dfcb]"
                : "bg-gray-100 border-gray-300 text-gray-400 cursor-default"
                }`}
              aria-label="Next step"
              disabled={activeStepIndex === allSteps.length - 1}
            >
              <FiChevronRight size={20} />
            </button>

          </div>
        </div>

      </div>

      {/* ── WHY SPARKTECH EXIST SECTION ── */}
      <section className="relative w-full py-16 md:py-24 px-6 lg:px-12 bg-[#ffffff] overflow-hidden font-sans">
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-stretch justify-center gap-8 lg:gap-12">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-[35%] flex flex-col justify-center items-center md:items-end"
          >
            <h2 className="text-[2.75rem] sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] uppercase text-center tracking-tighter">
              <span className="text-[#1b365d] block">WHY</span>
              <span className="text-[#cc7722] block">SPARKTECH</span>
              <span className="text-[#1b365d] block">EXIST</span>
            </h2>
          </motion.div>

          {/* Middle Column (Divider) - Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="hidden md:flex flex-col items-center justify-center w-16 lg:w-24 shrink-0 py-8"
          >
            <div className="w-[2px] flex-1 bg-[#cc7722]" />
            <div className="py-6">
              <div className="w-16 h-16 lg:w-[80px] lg:h-[80px] rounded-full border-[1.5px] border-[#cc7722] flex items-center justify-center">
                 <div className="w-12 h-12 lg:w-[68px] lg:h-[68px] rounded-full bg-[#1b365d] flex items-center justify-center relative shadow-sm">
                    <svg className="w-7 h-7 lg:w-10 lg:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 1.5C12 1.5 12 9.5 22.5 12C22.5 12 12.5 13 12 22.5C12 22.5 12 13 1.5 12C1.5 12 9.5 12 12 1.5Z" fill="#cc7722"/>
                      <path d="M18.5 4.5C18.5 4.5 18.5 6.5 21 7C21 7 19 7.5 18.5 9.5C18.5 9.5 18.5 7.5 16 7C16 7 17.5 7 18.5 4.5Z" fill="#cc7722"/>
                    </svg>
                 </div>
              </div>
            </div>
            <div className="w-[2px] flex-1 bg-[#cc7722]" />
          </motion.div>

          {/* Mobile Divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex md:hidden items-center justify-center w-full py-6"
          >
              <div className="h-[2px] flex-1 bg-[#cc7722]" />
              <div className="px-5">
                <div className="w-16 h-16 rounded-full border-[1.5px] border-[#cc7722] flex items-center justify-center">
                   <div className="w-12 h-12 rounded-full bg-[#1b365d] flex items-center justify-center relative shadow-sm">
                      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1.5C12 1.5 12 9.5 22.5 12C22.5 12 12.5 13 12 22.5C12 22.5 12 13 1.5 12C1.5 12 9.5 12 12 1.5Z" fill="#cc7722"/>
                        <path d="M18.5 4.5C18.5 4.5 18.5 6.5 21 7C21 7 19 7.5 18.5 9.5C18.5 9.5 18.5 7.5 16 7C16 7 17.5 7 18.5 4.5Z" fill="#cc7722"/>
                      </svg>
                   </div>
                </div>
              </div>
              <div className="h-[2px] flex-1 bg-[#cc7722]" />
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full md:w-[55%] flex flex-col justify-center gap-5 text-[#1b365d] text-[15px] md:text-base lg:text-[17px] font-semibold leading-relaxed"
          >
            <p>
              At SparkTech, we believe innovation should create measurable value. Our purpose is to help organizations embrace digital transformation with confidence, combining strategy, technology, and creativity to deliver solutions that drive sustainable growth and long-term success.
            </p>
            <p>
              At SparkTech, we believe innovation should create measurable value. Our purpose is to help organizations embrace digital transformation with confidence, combining strategy, technology, and creativity to deliver solutions that drive sustainable growth and long-term success.
            </p>
            <p>
              At SparkTech, we believe innovation should create measurable value. Our purpose is to help organizations embrace digital transformation with confidence.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ── VISION & MISSION SECTION (Horizontal Scroll) ── */}
      <section ref={horizontalScrollRef} className="relative h-[200vh] bg-white">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">

          {/* Static Heading */}
          <div className="absolute top-12 sm:top-16 md:top-32 left-0 w-full text-center z-20 px-4">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1b365d] tracking-tight uppercase"
            >
              VISION <span className="text-[#cc7722]">AND</span> MISSION
            </motion.h2>
          </div>

          {/* Scrolling Container */}
          <motion.div style={{ x: horizontalX }} className="flex w-[200vw] items-center h-full pt-24 sm:pt-28 md:pt-16">

            {/* ── OUR VISION CARD ── */}
            <div className="w-[100vw] flex-shrink-0 px-5 sm:px-8 md:px-16 lg:px-24 flex items-center justify-center">
              <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-5 sm:gap-8 md:gap-16">
                {/* Vision Image */}
                <div className="w-full md:w-1/2 flex-shrink-0">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    src="/VISION (1).webp"
                    alt="Our Vision"
                    className="w-full h-[200px] sm:h-[260px] md:h-[400px] object-cover rounded-[1.25rem] md:rounded-[2rem]"
                  />
                </div>
                {/* Vision Text */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="w-full md:w-1/2 text-center md:text-left"
                >
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1b365d] mb-3 sm:mb-4 md:mb-6 leading-tight">
                    Our <span className="text-[#cc7722]">Vision</span>
                  </h3>
                  <p className="text-[#1b365d] text-sm sm:text-base md:text-lg leading-relaxed mb-3 md:mb-4">
                    To reshape digital into a space where data meets depth — and brands grow through clarity, not chaos.
                  </p>
                  <p className="text-[#1b365d] text-sm sm:text-base md:text-lg leading-relaxed">
                    At Spark Tech, our vision is to fuse creativity with clarity, building bold ideas on a bedrock of insight and intention.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* ── OUR MISSION CARD ── */}
            <div className="w-[100vw] flex-shrink-0 px-5 sm:px-8 md:px-16 lg:px-24 flex items-center justify-center">
              <div className="max-w-6xl w-full flex flex-col md:flex-row-reverse items-center gap-5 sm:gap-8 md:gap-16">
                {/* Mission Image */}
                <div className="w-full md:w-1/2 flex-shrink-0">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    src="/mission img.webp"
                    alt="Our Mission"
                    className="w-full h-[200px] sm:h-[260px] md:h-[400px] object-cover rounded-[1.25rem] md:rounded-[2rem]"
                    style={{ objectPosition: "center 20%" }}
                  />
                </div>
                {/* Mission Text */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="w-full md:w-1/2 text-center md:text-left"
                >
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1b365d] mb-3 sm:mb-4 md:mb-6 leading-tight">
                    Our <span className="text-[#cc7722]">Mission</span>
                  </h3>
                  <p className="text-[#1b365d] text-sm sm:text-base md:text-lg leading-relaxed mb-3 md:mb-4">
                    We dig deep before we move fast. Every strategy we craft is backed by research, sharpened by data, and brought to life through storytelling that connects.
                  </p>
                  <p className="text-[#1b365d] text-sm sm:text-base md:text-lg leading-relaxed">
                    Helping brands grow with purpose is what drives Spark Tech — a digital marketing agency in Chennai that believes in data-backed decisions and content with conviction.
                  </p>
                </motion.div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* ── FOUNDER SECTION ── */}
      <section className="bg-[#fffdfa] py-12 md:py-28 overflow-hidden relative border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-6 md:gap-12 lg:gap-20">
          
          {/* Desktop Image (Hidden on Mobile) */}
          <div className="hidden md:flex w-full md:w-5/12 justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-[#cc7722]/10 rounded-full blur-3xl transform -translate-y-10 scale-110 -z-10"></div>
              <img
                src="/CEO.png"
                alt="Founder & CEO"
                className="w-full md:max-w-[280px] lg:max-w-[340px] object-contain drop-shadow-[0_20px_30px_rgba(27,54,93,0.2)]"
              />
            </motion.div>
          </div>

          <div className="w-full md:w-7/12 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#1b365d] mb-3 md:mb-4 tracking-tight uppercase" style={{ fontFamily: "Unbounded" }}>
                MEET OUR <span className="text-[#cc7722]">FOUNDER</span>
              </h2>

              {/* Mobile Image (Visible only on Mobile, right after heading) */}
              <div className="flex md:hidden w-full justify-center my-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-[#cc7722]/10 rounded-full blur-3xl transform -translate-y-5 scale-110 -z-10"></div>
                  <img
                    src="/CEO.png"
                    alt="Founder & CEO"
                    className="w-full max-w-[140px] sm:max-w-[160px] object-contain drop-shadow-[0_15px_25px_rgba(27,54,93,0.2)]"
                  />
                </motion.div>
              </div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#cc7722] mb-5 md:mb-6 tracking-wide">
                FOUNDER <span className="text-[#1b365d] font-medium">& CEO</span>
              </h3>
              <div className="w-12 md:w-16 h-1 bg-[#cc7722] rounded-full mx-auto md:mx-0 mb-6 md:mb-8"></div>
              <p className="text-[#1b365d]/90 text-sm sm:text-base md:text-lg leading-relaxed mb-5 md:mb-6 font-medium">
                "We don't just build marketing campaigns; we build partnerships. Our goal is to bridge the gap between your brand's vision and your audience's needs, using data-driven strategies and creative storytelling."
              </p>
              <p className="text-[#1b365d]/80 text-sm sm:text-base md:text-lg leading-relaxed">
                Every brand has a story worth telling and I started Sparktech to help those stories spark action.<br/>
<br/>
I come from a mix of tech and business — a B.Tech in IT, an MBA in Marketing from LIBA, and certifications in Cybersecurity, SAP, and Penetration Testing. That background gave me a simple perspective: creativity shines brightest when it’s backed by systems that are secure, scalable, and smart.<br/>
<br/>
Before Spark Tech, I had the privilege of working with brands like BMW, creating IPL-themed campaigns and digital strategies. Those experiences taught me that good marketing doesn’t shout — it connects.<br/>
<br/>
For us, every campaign is personal. Every idea is sharpened by data. And every success belongs just as much to our clients as it does to us.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TEAM SECTION ── */}
      <section className="bg-white py-16 md:py-24 overflow-hidden relative">
        <div className="max-w-7xl lg:max-w-full mx-auto px-6 md:px-16 text-center flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-black text-[#1b365d] mb-12 tracking-tight uppercase"
            style={{ fontFamily: "Unbounded" }}
          >
            OUR CORE <span className="text-[#cc7722]">TEAM</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full flex justify-center"
          >
            <img
              src="/Team Section final.png"
              alt="Spark Tech Team"
              className="w-full max-w-[1200px] h-auto object-contain"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;