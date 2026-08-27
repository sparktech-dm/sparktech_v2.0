import React, { useState, useEffect, useRef } from "react";
import { scroller } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiUsers, FiSmile, FiTrendingUp, FiTarget, FiZap, FiShield, FiBarChart2, FiHeart, FiPhoneCall } from "react-icons/fi";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  useEffect(() => {
    if (inView) {
      const target = parseInt(value, 10);
      if (isNaN(target)) { setCount(value); return; }
      const startTime = performance.now();
      const updateCount = (currentTime) => {
        const elapsedTime = (currentTime - startTime) / 1000;
        if (elapsedTime < duration) {
          const progress = elapsedTime / duration;
          const easeOutProgress = progress * (2 - progress);
          setCount(Math.floor(easeOutProgress * target));
          requestAnimationFrame(updateCount);
        } else {
          setCount(target);
        }
      };
      requestAnimationFrame(updateCount);
    }
  }, [inView, value, duration]);
  const suffix = typeof value === "string" ? value.replace(/[0-9]/g, "") : "";
  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>;
};

const chevronPatternBg = {
  backgroundColor: "#ffffff",
};

export function GrowingBrands({
  yearsValue = "2",
  yearsText = "years of journey"
}) {
  const handleReachUsClick = () => {
    scroller.scrollTo("contact", { duration: 600, smooth: "easeInOutQuart" });
  };

  const stats = [
    { id: 1, value: yearsValue, label: yearsText, icon: <FiUsers className="w-10 h-10 text-[#cc7722]" /> },
    { id: 2, value: "15+", label: "Happy clients", icon: <FiSmile className="w-10 h-10 text-[#cc7722]" /> },
    { id: 3, value: "25+", label: "Projects", icon: <img src="/rocket-removebg-preview.webp" alt="Projects" className="w-10 h-10 object-contain brightness-0" style={{ filter: "invert(48%) sepia(85%) saturate(1450%) hue-rotate(345deg) brightness(91%) contrast(85%)" }} /> },
    { id: 4, value: "20+", label: "Team members", icon: <FiTrendingUp className="w-10 h-10 text-[#cc7722]" /> }
  ];

  return (
    <>
      {/* ── TRUSTED BY GROWING BRANDS ── */}
      <section
        style={chevronPatternBg}
        className="relative py-24 md:py-32 px-6 overflow-hidden flex items-center justify-center bg-white"
      >
        <div className="max-w-6xl lg:max-w-full lg:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="relative inline-flex flex-col items-center lg:items-start">
              <span className="text-[#395c7a] font-bold text-xs md:text-sm tracking-wider uppercase block mb-1 italic lg:not-italic">
                DIGITAL GROWTH PARTNER
              </span>
              <h2 className="text-5xl md:text-7xl font-extrabold leading-none tracking-tight flex flex-row flex-wrap justify-center lg:justify-start gap-x-3 gap-y-1">
                <span className="text-[#cc7722]">SCALING</span>
                <span className="text-[#1b365d]">
                  BUSINESSES
                </span>
              </h2>
            </div>
            <p className="hidden lg:block text-[#395c7a] text-base md:text-lg max-w-md pt-6 leading-relaxed">
              From SEO and web development to targeted marketing and branding, we create powerful digital solutions that generate quality leads and long-term growth.
            </p>
            <p className="block lg:hidden text-[#395c7a] text-sm sm:text-base leading-relaxed max-w-2xl pt-4">
              From SEO and web development to targeted marketing and branding, we create powerful digital solutions that generate quality leads and long-term growth.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReachUsClick}
                className="flex items-center gap-4 px-6 py-3 rounded-full border border-[#1b365d] bg-[#1b365d] text-white font-bold shadow-lg hover:bg-[#152a48] hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <span className="tracking-widest text-xs uppercase">REACH US</span>
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#cc7722] text-white group-hover:translate-x-1 transition-transform duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3.5 h-3.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-x-8 gap-y-12 lg:gap-x-12 lg:gap-y-16 w-full mt-12 lg:mt-0">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: stat.id * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4"
              >
                <div className="p-2 flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="flex items-baseline gap-2 justify-center lg:justify-start">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1b365d] tracking-tight">
                    <Counter value={stat.value} />
                  </span>
                  <span className="text-xs sm:text-sm md:text-base font-semibold text-[#395c7a] tracking-wide">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <LetsTalkSection />
      <Faq />
      <Footer />
    </>
  );
}


// ─── CLIENT LOGOS DATA ───────────────────────────────────────────────
const desktopLogos = [
  { src: "/celeste_birch_logo.jfif.webp", name: "CELESTE BIRCH" },
  { src: "/Radiomirchi.webp", name: "RADIO MIRCHI" },
  { src: "/adsof.webp", name: "ADSOF" },
  { src: "/saloon.webp", name: "FAMILY SALOON" },
  { src: "/drape.webp", name: "DRAPE N SILK" },
  { src: "/PrimeWay Logo.webp", name: "PRIMEWAY CARGO" },
  { src: "/Hot Catch by opencup (1).webp", name: "HOT CATCH CAFE" },
];

// Reordered list for mobile to show Radio Mirchi first
const mobileLogos = [
  { src: "/Radiomirchi.webp", name: "RADIO MIRCHI" },
  { src: "/adsof.webp", name: "ADSOF" },
  { src: "/saloon.webp", name: "FAMILY SALOON" },
  { src: "/drape.webp", name: "DRAPE N SILK" },
  { src: "/PrimeWay Logo.webp", name: "PRIMEWAY CARGO" },
  { src: "/Hot Catch by opencup (1).webp", name: "HOT CATCH CAFE" },
  { src: "/celeste_birch_logo.jfif.webp", name: "CELESTE BIRCH" },
];

// ─── TESTIMONIALS DATA ───────────────────────────────────────────────
const allTestimonials = [
  {
    text: `"Working with this team completely changed our online presence. Within 3 months, our website traffic increased, leads became more consistent, and the overall brand image finally looked professional. Their communication and execution were on point from day one."`,
    author: "Radio Mirchi",
    logo: "/Radiomirchi.webp",
    rating: 5,
  },
  {
    text: `"The Meta ads campaign they structured exceeded all our targets. Our cost-per-lead dropped by 45%, and the volume of qualified sales inquiries spiked. Their creative assets and strategic targeting are top-tier."`,
    author: "Celeste Birch",
    logo: "/celeste_birch_logo.jfif.webp",
    rating: 5,
  },
  {
    text: `"Their data-driven search marketing campaigns put our services directly in front of active buyers. We saw an immediate surge in organic phone calls and form submissions. Absolutely thrilled with the results!"`,
    author: "Adsof",
    logo: "/adsof.webp",
    rating: 5,
  },
  {
    text: `"From web design to search optimization, their comprehensive approach simplified our growth. They designed a sleek, high-converting funnel that turned our traffic into sales. Highly recommended for any scaling business."`,
    author: "Family Saloon",
    logo: "/saloon.webp",
    rating: 4,
  },
  {
    text: `"Their team delivered creative ideas and execution that went far beyond basic marketing. They helped us identify key customer segments and craft campaigns that resonated deeply, boosting our ROI by 150%."`,
    author: "Drape N Silk",
    logo: "/drape.webp",
    rating: 5,
  },
  {
    text: `"We finally have a marketing partner that speaks the language of metrics and growth. The weekly reports, transparent communication, and continuous optimization have built immense trust between our teams."`,
    author: "Primeway Cargo",
    logo: "/PrimeWay Logo.webp",
    rating: 5,
  },
  {
    text: `"SparkTech's influencer partnerships and viral video creatives gave our brand national visibility. Our social media engagement grew by 300%, and website sales broke all previous monthly records."`,
    author: "Hot Catch Cafe",
    logo: "/Hot Catch by opencup (1).webp",
    rating: 5,
  },
];

// Desktop pairs (2 cards per slide)
const desktopPairs = [];
for (let i = 0; i < allTestimonials.length; i += 2) {
  desktopPairs.push(allTestimonials.slice(i, i + 2));
}

// ─── STAR RATING COMPONENT ──────────────────────────────────────────
const Stars = ({ count }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-3 h-3 md:w-4 md:h-4 ${i < count ? "text-[#cc7722]" : "text-white/20"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

// ─── TESTIMONIAL CARD COMPONENT ─────────────────────────────────────
const TestimonialCard = ({ testimonial }) => (
  <div className="flex-1 min-w-0 h-[320px] md:h-[480px] bg-[#1f3a58] border-2 border-transparent rounded-xl p-5 md:p-8 flex flex-col shadow-2xl transition-all duration-300 hover:border-[#1b365d]/80">
    {/* Logo */}
    <div className="w-full flex justify-center mb-4 md:mb-6">
      <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-lg">
        <img
          src={testimonial.logo}
          alt={testimonial.author}
          className="w-[80%] h-[80%] object-contain"
        />
      </div>
    </div>

    {/* Testimonial text */}
    <p className="m-0 mb-auto leading-relaxed font-inter italic font-normal text-[13px] sm:text-sm md:text-base lg:text-lg text-white overflow-y-auto no-scrollbar flex-1">
      {testimonial.text}
    </p>

    {/* Author name + Stars */}
    <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/20">
      <span className="font-bebas text-[14px] sm:text-base md:text-xl tracking-wider uppercase text-[#cc7722] leading-none">
        {testimonial.author}
      </span>
      <Stars count={testimonial.rating} />
    </div>
  </div>
);

// ═════════════════════════════════════════════════════════════════════
// HOME COMPONENT — Hero + Clients + Testimonials combined
// ═════════════════════════════════════════════════════════════════════
function Home() {
  // ─── Hero state ────────────────────────────────────────────────────
  const buttonRef = useRef(null);

  const handleExploreClick = () => {
    const btn = buttonRef.current;
    if (btn) {
      btn.classList.remove("bounce-once");
      void btn.offsetWidth;
      btn.classList.add("bounce-once");
    }
    scroller.scrollTo("contact", {
      duration: 600,
      smooth: "easeInOutQuart",
    });
  };

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Normalize between -1 and 1
    const xPos = (e.clientX - centerX) / (rect.width / 2);
    const yPos = (e.clientY - centerY) / (rect.height / 2);
    
    mouseX.set(xPos * 40);
    mouseY.set(yPos * 40);
  };

  // ─── Clients state ────────────────────────────────────────────────
  const doubleDesktopLogos = [...desktopLogos, ...desktopLogos];
  // Using 4 sets for seamless loop resetting
  const quadrupleMobileLogos = [...mobileLogos, ...mobileLogos, ...mobileLogos, ...mobileLogos];

  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);
  const mobileClientScrollRef = useRef(null);
  const isClientTouching = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => {
            setAnimate(true);
          }, 800);
          return () => clearTimeout(timer);
        } else {
          setAnimate(false);
        }
      },
      { threshold: 0.15 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    let animationFrameId;
    const scrollContainer = mobileClientScrollRef.current;
    if (!scrollContainer) return;

    const autoScroll = () => {
      if (!isClientTouching.current && animate) {
        scrollContainer.scrollLeft += 1;
        // Seamless infinite loop: when scroll reaches half the total width, reset it
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft -= scrollContainer.scrollWidth / 2;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    if (animate) {
      animationFrameId = requestAnimationFrame(autoScroll);
    }
    return () => cancelAnimationFrame(animationFrameId);
  }, [animate]);

  // ─── Testimonials state ───────────────────────────────────────────
  const [desktopIdx, setDesktopIdx] = useState(0);
  const [mobileIdx, setMobileIdx] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const nextDesktop = () => setDesktopIdx((prev) => (prev + 1) % desktopPairs.length);
  const prevDesktop = () => setDesktopIdx((prev) => (prev - 1 + desktopPairs.length) % desktopPairs.length);

  const nextMobile = () => setMobileIdx((prev) => (prev + 1) % allTestimonials.length);
  const prevMobile = () => setMobileIdx((prev) => (prev - 1 + allTestimonials.length) % allTestimonials.length);

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };
  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    if (swipeDistance > 50) nextMobile();
    else if (swipeDistance < -50) prevMobile();
  };

  const currentDesktopPair = desktopPairs[desktopIdx];
  const currentMobileCard = allTestimonials[mobileIdx];

  return (
    <div className="overflow-hidden">

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* HERO SECTION                                                   */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section 
        style={{ backgroundColor: "#ffffff" }}
        className="career-bg-pattern relative w-full min-h-[700px] md:h-screen flex items-start md:items-center justify-center overflow-hidden pt-24 pb-12 md:py-0"
      >


        {/* Desktop View Layout */}
        <div className="hidden md:flex relative z-20 w-full max-w-7xl lg:max-w-full mx-auto px-6 md:px-16 lg:px-16 flex-row items-center justify-between gap-12">

          {/* LEFT: Text Content (Left Aligned) */}
          <div className="flex-1 flex flex-col justify-center pl-[40px] lg:pl-[60px] xl:pl-[80px] pr-8 py-16 xl:pr-16">
            <div className="relative inline-block w-fit">
              <p
                className="text-[#1b365d] text-5xl md:text-4xl lg:text-5xl font-extrabold mb-1 leading-snug"
                style={{ fontFamily: "'Georgia', serif", fontStyle: "italic" }}
              >
                Looking for a proven
              </p>
            </div>
            <h1
              className="text-[#cc7722] font-medium leading-tight mb-3"
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: "clamp(2.2rem, 4.5vw, 9rem)",
                letterSpacing: "-0.5px",
              }}
            >
              Digital Marketing Agency?
            </h1>
            <p
              className="text-[#1b365d] font-extrabold text-lg md:text-4xl mb-8"
              style={{ fontFamily: "'Georgia', serif", fontStyle: "italic" }}
            >
              We turn your traffic into consistent, qualified leads.
            </p>

            <button
              ref={buttonRef}
              onClick={handleExploreClick}
              className="w-fit inline-flex font-['Impact','Arial_Black',sans-serif] font-extrabold text-[25px] tracking-[1px] text-white px-9 py-3 border border-[#1b365d] rounded-full bg-[#1b365d] hover:bg-[#152a48] shadow-[0_8px_25px_rgba(27,54,93,0.3)] hover:scale-105 transition-all duration-300"
            >
              BOOST YOUR GROWTH
            </button>
          </div>

          {/* RIGHT: Laptop container */}
          <div 
            className="flex-1 relative flex items-center justify-center w-full max-w-[900px] h-[650px] z-30"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
          >
            {/* Parallax Wrapper */}
            <motion.div style={{ x: smoothX, y: smoothY }} className="relative z-20">
              {/* Bobbing Laptop */}
              <div className="animate-hero-bob">
                <img
                  src="/laptop-removebg-preview.webp"
                  alt="Digital Marketing Laptop"
                  className="w-full max-w-[650px] lg:max-w-[780px] h-auto block drop-shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile View Layout (Vertical Structure) */}
        <div className="flex md:hidden flex-col items-center justify-start text-center gap-6 w-full px-6 z-20 mt-2">

          {/* 1. First: Headline */}
          <h2 className="font-bebas text-4xl sm:text-5xl text-[#cc7722] font-bold leading-tight tracking-wide max-w-md">
            Digital Marketing Services That Drive Business Growth
          </h2>

          <div 
            className="relative z-20 -ml-8 w-full flex items-center justify-center min-h-[300px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
          >
            {/* Parallax Wrapper */}
            <motion.div style={{ x: smoothX, y: smoothY }} className="relative z-20">
              {/* Bobbing Laptop */}
              <div className="animate-hero-bob">
                <img
                  src="/laptop-removebg-preview.webp"
                  alt="Digital Marketing Laptop"
                  className="w-[280px] sm:w-[380px] h-auto block relative z-20 drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
                />
              </div>
            </motion.div>
          </div>

          {/* 3. Third: Button */}
          <button
            onClick={handleExploreClick}
            className="font-['Impact','Arial_Black',sans-serif] font-extrabold text-[15px] sm:text-[18px] tracking-[0.5px] text-white px-8 py-3.5 border-2 border-[#1b365d] rounded-full bg-[#1b365d] hover:bg-[#152a48] active:scale-95 transition-all duration-200 shadow-[0_0_15px_rgba(27,54,93,0.2)] cursor-pointer mt-2 mb-6"
          >
            BOOST YOUR GROWTH
          </button>

          {/* 4. Fourth: Content (4-5 sentences) */}
          <p className="font-inter text-sm sm:text-base text-[#395c7a] leading-relaxed max-w-md">
            At SparkTech, we craft high-impact digital marketing strategies that connect your brand with the right audience.
            Through targeted ads, scroll-stopping creatives, and optimized conversion funnels, we turn casual clicks into loyal customers.
            Our data-driven approach ensures your marketing budget is spent where it matters most, driving measurable return on investment.
            Let us handle your digital growth while you focus on scaling your business operations to new heights.
          </p>
        </div>

      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CLIENTS SECTION                                                */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section
        ref={sectionRef}
        style={{ backgroundColor: "#ffffff" }}
        className="career-bg-pattern relative w-full py-10 overflow-hidden select-none"
      >

        {/* Title section */}
        <div className="text-center mb-8">
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wider uppercase m-0 leading-none">
            <span className="text-[#395c7a]">OUR </span>
            <span className="text-[#cc7722]">CLIENTS</span>
          </h2>
        </div>

        {/* DESKTOP MARQUEE */}
        <div className="hidden md:block w-full overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#ffffff] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#ffffff] to-transparent z-10 pointer-events-none" />

          <div className={`flex gap-8 w-max py-2 hover:[animation-play-state:paused] cursor-pointer ${animate ? "animate-marquee" : ""}`}>
            {doubleDesktopLogos.map((logo, idx) => (
              <div
                key={`desktop-client-${idx}`}
                className="flex flex-col items-center w-[260px] flex-shrink-0"
              >
                {/* White background box containing logo */}
                <div className="w-full h-[140px] bg-white rounded-lg flex items-center justify-center p-4 shadow-sm border border-gray-100 hover:scale-105 transition-transform duration-300">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain pointer-events-none"
                  />
                </div>
                {/* Text label below box */}
                <span className="text-[#1b365d] text-sm font-inter font-bold mt-3 tracking-widest text-center uppercase opacity-90">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE SWIPER & MARQUEE */}
        <div className="block md:hidden w-full relative">
          <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-[#ffffff] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-[#ffffff] to-transparent z-10 pointer-events-none" />

          <div
            ref={mobileClientScrollRef}
            onTouchStart={() => { isClientTouching.current = true; }}
            onTouchEnd={() => { isClientTouching.current = false; }}
            onTouchMove={() => { isClientTouching.current = true; }}
            className="flex gap-4 w-full py-4 overflow-x-auto no-scrollbar px-6"
          >
            {quadrupleMobileLogos.map((logo, idx) => (
              <div
                key={`mobile-client-${idx}`}
                className="flex flex-col items-center w-[190px] flex-shrink-0"
              >
                {/* Box with #636363 bg, #FFCC00 border, containing logo & label inside */}
                <div className="w-full h-[190px] bg-white border-2 border-gray-100 rounded-lg flex flex-col items-center justify-start pt-3.5 px-3.5 pb-4 shadow-sm">
                  <div className="flex items-center justify-center w-full h-[110px]">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="w-[170px] h-[110px] object-contain pointer-events-none"
                    />
                  </div>
                  {/* Text label inside the box, under the logo */}
                  <span className="text-[#1b365d] text-[11px] font-inter font-bold tracking-wide text-center uppercase mt-4 w-full truncate">
                    {logo.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* TESTIMONIALS SECTION                                           */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#ffffff" }} className="career-bg-pattern relative w-full py-12 select-none">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wider uppercase m-0 leading-none text-[#cc7722]">
            TESTIMONIALS
          </h2>
        </div>

        {/* ===== DESKTOP VIEW: 2 cards per slide ===== */}
        <div className="hidden md:flex items-center justify-between gap-8 w-full max-w-6xl lg:max-w-full mx-auto px-8 lg:px-16">

          {/* Left Nav */}
          <button
            onClick={prevDesktop}
            className="w-12 h-12 flex-shrink-0 rounded-lg bg-[#1b365d] flex items-center justify-center text-white hover:bg-[#152a48] transition-all duration-200 active:scale-90 cursor-pointer shadow-md"
            aria-label="Previous testimonials"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards */}
          <div className="flex-1 flex flex-row gap-12 items-stretch justify-start animate-fadeIn" key={`desktop-${desktopIdx}`}>
            {currentDesktopPair.map((testimonial, idx) => (
              <TestimonialCard key={`desktop-card-${idx}`} testimonial={testimonial} />
            ))}
            {currentDesktopPair.length === 1 && (
              <div className="flex-1 min-w-0 pointer-events-none" aria-hidden="true"></div>
            )}
          </div>

          {/* Right Nav */}
          <button
            onClick={nextDesktop}
            className="w-12 h-12 flex-shrink-0 rounded-lg bg-[#1b365d] flex items-center justify-center text-white hover:bg-[#152a48] transition-all duration-200 active:scale-90 cursor-pointer shadow-md"
            aria-label="Next testimonials"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Desktop dots */}
        <div className="hidden md:flex justify-center gap-2 mt-8">
          {desktopPairs.map((_, idx) => (
            <button
              key={`desktop-dot-${idx}`}
              onClick={() => setDesktopIdx(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === desktopIdx ? "bg-[#1b365d] w-6" : "bg-gray-300 hover:bg-gray-400"
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* ===== MOBILE VIEW: 1 card per slide ===== */}
        <div className="flex md:hidden items-center justify-between gap-3 w-full px-3">

          {/* Left Nav */}
          <button
            onClick={prevMobile}
            className="w-8 h-8 flex-shrink-0 rounded-lg bg-[#1b365d] flex items-center justify-center text-white hover:bg-[#152a48] transition-all duration-200 active:scale-90 cursor-pointer shadow-md"
            aria-label="Previous testimonial"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Single Card */}
          <div
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="flex-1 animate-fadeIn"
            key={`mobile-${mobileIdx}`}
          >
            <TestimonialCard testimonial={currentMobileCard} />
          </div>

          {/* Right Nav */}
          <button
            onClick={nextMobile}
            className="w-8 h-8 flex-shrink-0 rounded-lg bg-[#1b365d] flex items-center justify-center text-white hover:bg-[#152a48] transition-all duration-200 active:scale-90 cursor-pointer shadow-md"
            aria-label="Next testimonial"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Mobile dots */}
        <div className="flex md:hidden justify-center gap-2 mt-6">
          {allTestimonials.map((_, idx) => (
            <button
              key={`mobile-dot-${idx}`}
              onClick={() => setMobileIdx(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === mobileIdx ? "bg-[#1b365d] w-6" : "bg-gray-300 hover:bg-gray-400"
                }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </section>
      <BusinessProblem />

    </div>
  );
}

// =============================================================================
// BUSINESS PROBLEM COMPONENT
// =============================================================================
export function BusinessProblem() {
  const problems = [
    {
      id: 1,
      title: "Limited Online Visibility",
      desc: "If customers can't find your business online, they can't choose your services. We improve your visibility through SEO and targeted digital marketing strategies.",
      icon: <FiTarget className="w-8 h-8 text-[#cc7722]" />
    },
    {
      id: 2,
      title: "Low Website Conversions ",
      desc: "A website should do more than look good. We create user-focused experiences that encourage visitors to take action.",
      icon: <FiBarChart2 className="w-8 h-8 text-[#cc7722]" />
    },
    {
      id: 3,
      title: "Ineffective Marketing Campaigns ",
      desc: "Running ads without a clear strategy often wastes time and budget. We build campaigns designed to reach the right audience and deliver measurable results.",
      icon: <FiZap className="w-8 h-8 text-[#cc7722]" />
    },
    {
      id: 4,
      title: "Inconsistent Brand Presence ",
      desc: "Your brand should communicate a clear and consistent message across every platform. We help create a professional identity that customers remember. ",
      icon: <FiSmile className="w-8 h-8 text-[#cc7722]" />
    }
  ];

  return (
    <section className="relative w-full py-24 px-6 lg:px-12 bg-white border-t border-gray-100 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#cc7722]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#395c7a]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-none mb-6">
            <span className="text-[#395c7a]">The </span>
            <span className="text-[#cc7722]">Business Problems</span>
          </h2>
          <p className="text-[#1b365d] max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Common Problems. Practical Solutions. 
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-5xl">
          {problems.map((prob, idx) => (
            <motion.article
              key={prob.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="group relative flex flex-col p-8 rounded-3xl bg-[#f2eee0] border border-[#cc7722]/30 hover:border-[#1f3a58] hover:bg-[#1f3a58] transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#cc7722]/0 to-[#cc7722]/0 group-hover:from-[#cc7722]/10 group-hover:to-transparent transition-all duration-500" />
              
              <div className="mb-6 p-4 rounded-2xl bg-white w-max border border-gray-200 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                {prob.icon}
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-[#1b365d] mb-3 tracking-wide group-hover:text-white transition-colors duration-500">
                {prob.title}
              </h3>
              
              <p className="text-[#395c7a] leading-relaxed text-sm md:text-base group-hover:text-white transition-colors duration-500">
                {prob.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}









// =============================================================================
// PHONE IMAGE COMPONENT
// =============================================================================
function PhoneIcon({ style, className }) {
  return (
    <motion.img
      src="/phone (1)2.webp"
      alt="Hanging phone handset"
      animate={{ rotate: [-4, 4, -4] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
      className={className}
      style={{
        transformOrigin: "top center",
        width: "100%",
        maxWidth: "280px",
        height: "auto",
        objectFit: "contain",
        zIndex: 5,
        filter: "drop-shadow(0 24px 64px rgba(0,0,0,0.95))",
        ...style
      }}
    />
  );
}

// =============================================================================
// CONTACT FORM
// =============================================================================
function ContactForm({ mobile = false }) {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Store data to send
    const dataToSend = { ...formData };
    
    // UI feedback immediately
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setFormData({ name: "", email: "", phone: "", message: "" });

    // Send to Google Sheets
    fetch("https://script.google.com/macros/s/AKfycbybOdzrGK9kTDdP0zh1vlYP8dZSGbTXOIxOM0o6eRn2zGYPsIqBG53th8FRpbsPjcBpYA/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    }).catch((error) => {
      console.error("Error submitting form:", error);
    });
  };

  const inputBase = {
    background: "transparent",
    border: "1.5px solid #395c7a",
    borderRadius: "999px",
    color: "#fff",
    padding: mobile ? "10px 16px" : "12px 20px",
    width: "100%",
    outline: "none",
    fontSize: mobile ? "0.82rem" : "0.875rem",
    transition: "all 0.3s ease",
  };

  const labelStyle = {
    color: "#fff",
    fontSize: mobile ? "0.82rem" : "0.95rem",
    fontWeight: "600",
    fontStyle: "italic",
    letterSpacing: "0.03em",
    display: "block",
    marginBottom: "6px",
    marginLeft: "12px",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{
        background: "#1b365d",
        border: "1px solid #152a48",
        borderRadius: mobile ? "20px" : "32px",
        padding: mobile ? "24px 20px" : "40px 32px",
        width: "100%",
        maxWidth: mobile ? "none" : "460px",
        boxShadow: "0 12px 48px rgba(0,0,0,0.15)",
        position: "relative",
        backdropFilter: "blur(12px)",
      }}
    >
      {submitted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "absolute", inset: 0, borderRadius: mobile ? "18px" : "30px",
            background: "rgba(7,7,8,0.97)", display: "flex",
            flexDirection: "column", alignItems: "center",
            justifyContent: "center", zIndex: 10, gap: "12px",
          }}
        >
          <span style={{ fontSize: "2.5rem" }}>🎉</span>
          <p style={{ color: "#f0c417", fontWeight: "700", fontSize: "1.1rem" }}>Message Sent!</p>
          <p style={{ color: "#9ca3af", fontSize: "0.85rem" }}>We'll get back to you shortly.</p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: mobile ? "14px" : "20px" }}>
        <div>
          <label style={labelStyle} htmlFor={mobile ? "m-contact-name" : "contact-name"}>Name</label>
          <input id={mobile ? "m-contact-name" : "contact-name"} name="name" type="text" value={formData.name} onChange={handleChange} required style={inputBase}
            onFocus={e => { e.target.style.boxShadow = "0 0 8px rgba(240,196,23,0.3)"; }}
            onBlur={e => { e.target.style.boxShadow = "none"; }} />
        </div>
        <div>
          <label style={labelStyle} htmlFor={mobile ? "m-contact-phone" : "contact-phone"}>Phone number</label>
          <input id={mobile ? "m-contact-phone" : "contact-phone"} name="phone" type="tel" value={formData.phone} onChange={handleChange} style={inputBase}
            onFocus={e => { e.target.style.boxShadow = "0 0 8px rgba(240,196,23,0.3)"; }}
            onBlur={e => { e.target.style.boxShadow = "none"; }} />
        </div>
        <div>
          <label style={labelStyle} htmlFor={mobile ? "m-contact-email" : "contact-email"}>Email</label>
          <input id={mobile ? "m-contact-email" : "contact-email"} name="email" type="email" value={formData.email} onChange={handleChange} required style={inputBase}
            onFocus={e => { e.target.style.boxShadow = "0 0 8px rgba(240,196,23,0.3)"; }}
            onBlur={e => { e.target.style.boxShadow = "none"; }} />
        </div>
        <div>
          <label style={labelStyle} htmlFor={mobile ? "m-contact-message" : "contact-message"}>Message</label>
          <textarea id={mobile ? "m-contact-message" : "contact-message"} name="message" rows={mobile ? "3" : "4"} value={formData.message} onChange={handleChange}
            style={{ ...inputBase, borderRadius: "20px", resize: "none" }}
            onFocus={e => { e.target.style.boxShadow = "0 0 8px rgba(240,196,23,0.3)"; }}
            onBlur={e => { e.target.style.boxShadow = "none"; }} />
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "4px" }}>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, backgroundColor: "#395c7a", color: "#fff", borderColor: "#395c7a" }}
            whileTap={{ scale: 0.95 }}
            style={{
              border: "1.5px solid #395c7a", borderRadius: "999px",
              background: "transparent", color: "#fff",
              fontWeight: "700", fontSize: mobile ? "0.82rem" : "0.9rem",
              fontStyle: "italic", letterSpacing: "0.15em",
              padding: mobile ? "9px 36px" : "10px 48px", cursor: "pointer",
              transition: "background-color 0.2s, color 0.2s",
            }}
          >
            SUBMIT
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}


export function LetsTalkSection() {
  return (
    <section
      name="contact"
      style={{ backgroundColor: "#ffffff", minHeight: "680px" }}
      className="career-bg-pattern relative overflow-hidden"
    >

      {/* ── dark overlay ── */}
      <div style={{ position: "absolute", inset: 0, background: "transparent", zIndex: 1, pointerEvents: "none" }} />

      {/* ── DESKTOP PHONE HANDSET ── */}
      <div className="hidden lg:block absolute left-[5%] xl:left-[8%] top-0 h-full w-[350px] pointer-events-none" style={{ zIndex: 11 }}>
        <PhoneIcon
          style={{
            position: "absolute",
            top: "60px", // Brought down to align handset middle with text middle
            left: "20px",
            width: "240px",
            pointerEvents: "auto",
          }}
        />
      </div>

      {/* ── MOBILE: phone + text side-by-side row, form below ── */}
      <div className="lg:hidden relative w-full px-4 pt-10 pb-8" style={{ zIndex: 10 }}>
        {/* Phone + Text row */}
        <div className="flex flex-row items-center justify-center gap-4 mb-8">
          {/* Animated Call Icon */}
          <div className="flex-shrink-0 w-[80px] flex justify-center items-center">
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                rotate: [0, -15, 15, -15, 15, 0]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 1.5
              }}
              className="text-[#cc7722]"
            >
              <FiPhoneCall size={52} />
            </motion.div>
          </div>
          {/* Text */}
          <div className="w-fit flex flex-col items-start">
            <p
              className="text-[#395c7a] font-bold tracking-wide leading-none mb-1"
              style={{ fontSize: "clamp(0.8rem, 4vw, 1.1rem)" }}
            >
              Give us a
            </p>
            <h2
              className="text-[#cc7722] font-black leading-none"
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: "clamp(2rem, 9.5vw, 3.2rem)",
                lineHeight: 1,
              }}
            >
              Tring Tring
            </h2>
            <p
              className="text-[#395c7a] font-bold tracking-wide leading-none mt-2 self-end"
              style={{ fontSize: "clamp(0.8rem, 4vw, 1.1rem)" }}
            >
              let's talk
            </p>
          </div>
        </div>
        {/* Form below on mobile */}
        <ContactForm mobile={true} />
      </div>

      {/* ── DESKTOP: grid ── */}
      <div className="hidden lg:block relative w-full px-6 py-32" style={{ zIndex: 10 }}>
        <div className="max-w-7xl lg:max-w-full lg:px-16 mx-auto grid grid-cols-12 gap-8 items-center">

          {/* COL 1: spans 7 columns, shifted to the left, next to the absolute phone */}
          <div className="col-span-7 pl-[260px] xl:pl-[300px] select-none flex flex-col justify-center">
            <div className="w-fit flex flex-col items-start">
              <p
                className="text-[#395c7a] font-bold tracking-wide leading-none mb-2"
                style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.35rem)" }}
              >
                Give us a
              </p>
              <h2
                className="text-[#cc7722] font-black leading-none whitespace-nowrap"
                style={{
                  fontFamily: "'Impact', 'Arial Black', sans-serif",
                  fontSize: "clamp(2.8rem, 4.8vw, 5.2rem)",
                  lineHeight: 1,
                }}
              >
                Tring Tring
              </h2>
              <p
                className="text-[#395c7a] font-bold tracking-wide leading-none mt-3 self-end"
                style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.35rem)" }}
              >
                let's talk
              </p>
            </div>
          </div>

          {/* COL 2: spans 5 columns, contact form */}
          <div className="col-span-5 flex justify-end w-full">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}
export default Home;
