import React, { useState, useEffect, useRef } from "react";
import { scroller } from "react-scroll";

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
    text: `"Within 3 months, our organic traffic doubled and qualified leads started coming consistently. Their SEO strategy, Google Ads optimization, and conversion-focused landing pages completely changed our digital presence."`,
    author: "Radio Mirchi",
    logo: "/Radiomirchi.webp",
    rating: 5,
  },
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
        className={`w-3 h-3 md:w-4 md:h-4 ${i < count ? "text-[#FFCC00]" : "text-white/20"}`}
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
  <div className="flex-1 min-w-0 h-[320px] md:h-[480px] bg-black border-2 border-[#FFCC00] rounded-xl p-5 md:p-8 flex flex-col shadow-2xl transition-all duration-300 hover:border-[#FFCC00]/80">
    {/* Logo */}
    <div className="w-full flex justify-center mb-4 md:mb-6">
      <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center overflow-hidden border-2 border-[#FFCC00]/40 shadow-lg">
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
    <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#FFCC00]/20">
      <span className="font-bebas text-[14px] sm:text-base md:text-xl tracking-wider uppercase text-[#FFCC00] leading-none">
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
      <section className="career-bg-pattern relative w-full min-h-[700px] md:h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0c] py-16 md:py-0">

        {/* === RAYS: Absolutely pinned to the far-left of the section === */}
        {/* Desktop rays — z-30 to render above the z-20 layout stacking context */}
        <img
          src="/bg rays.webp"
          alt=""
          aria-hidden="true"
          className="hidden md:block absolute left-[-70px] top-[65%] -translate-y-1/2 w-[550px] lg:w-[650px] h-full z-30 pointer-events-none opacity-60 select-none"
        />


        {/* Desktop View Layout */}
        <div className="hidden md:flex relative z-20 w-full max-w-7xl mx-auto px-6 md:px-16 flex-row items-center justify-between gap-12">

          {/* LEFT: Text Content (Left Aligned) */}
          <div className="flex-1 flex flex-col justify-center pr-8 py-16">
            <p
              className="text-white text-5xl md:text-4xl font-extrabold mb-1 leading-snug"
              style={{ fontFamily: "'Georgia', serif", fontStyle: "italic" }}
            >
              Struggling to get
            </p>
            <h1
              className="text-[#FFCC00] font-medium leading-tight mb-3"
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: "clamp(2.2rem, 4.5vw, 9rem)",
                letterSpacing: "-0.5px",
              }}
            >
              Consistent Leads?
            </h1>
            <p
              className="text-white font-extrabold text-lg md:text-4xl mb-8"
              style={{ fontFamily: "'Georgia', serif", fontStyle: "italic" }}
            >
              We fix that.
            </p>
            
            <button
              ref={buttonRef}
              onClick={handleExploreClick}
              className="w-fit inline-flex font-['Impact','Arial_Black',sans-serif] font-extrabold text-[25px] tracking-[1px] text-[#FFD000] px-9 py-3 border border-[#FFD000] rounded-full bg-gradient-to-b from-[#537A97] to-[#1D2935] shadow-[0_8px_25px_rgba(0,0,0,0.45)] hover:scale-105 transition-all duration-300"
            >
              BOOST YOUR GROWTH
            </button>
          </div>

          {/* RIGHT: Laptop container */}
          <div className="flex-1 relative flex items-center justify-center w-full max-w-[900px] h-[650px] z-30">
            {/* Bobbing Laptop */}
            <div className="relative z-20 animate-hero-bob">
              <img
                src="/laptop-removebg-preview.webp"
                alt="Digital Marketing Laptop"
                className="w-full max-w-[650px] lg:max-w-[780px] h-auto block drop-shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
              />
            </div>
          </div>
        </div>

        {/* Mobile View Layout (Vertical Structure) */}
        <div className="flex md:hidden flex-col items-center justify-center text-center gap-6 w-full px-6 z-20">

          {/* 1. First: Headline */}
          <h2 className="font-bebas text-4xl sm:text-5xl text-[#FFCC00] font-bold leading-tight tracking-wide max-w-md">
            Digital Marketing Services That Drive Business Growth
          </h2>

          {/* 2. Second: Laptop container */}
          <div className="relative z-20 -ml-8 w-full flex items-center justify-center min-h-[300px]">
            {/* Bobbing Laptop */}
            <div className="relative z-20 animate-hero-bob">
              <img
                src="/laptop-removebg-preview.webp"
                alt="Digital Marketing Laptop"
                className="w-[280px] sm:w-[380px] h-auto block relative z-20 drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)]"
              />
            </div>
          </div>

          {/* 3. Third: Button */}
          <button
            onClick={handleExploreClick}
            className="font-['Impact','Arial_Black',sans-serif] font-extrabold text-[15px] sm:text-[18px] tracking-[0.5px] text-[#FFCC00] px-8 py-3.5 border-2 border-[#FFCC00] rounded-full bg-gradient-to-r from-[#517B98] to-[#1B2832] hover:brightness-110 active:scale-95 transition-all duration-200 shadow-[0_0_15px_rgba(255,204,0,0.2)] cursor-pointer mt-2 mb-6"
          >
            BOOST YOUR GROWTH
          </button>

          {/* 4. Fourth: Content (4-5 sentences) */}
          <p className="font-inter text-sm sm:text-base text-white opacity-90 leading-relaxed max-w-md">
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
        className="career-bg-pattern relative w-full py-10 overflow-hidden bg-[#0a0a0c] select-none"
      >
        
        {/* Title section */}
        <div className="text-center mb-8">
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wider uppercase m-0 leading-none">
            <span className="text-[#FFCC00]">OUR </span>
            <span className="text-[#FFFFFF]">CLIENTS</span>
          </h2>
        </div>

        {/* DESKTOP MARQUEE */}
        <div className="hidden md:block w-full overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#0a0a0c] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#0a0a0c] to-transparent z-10 pointer-events-none" />
          
          <div className={`flex gap-8 w-max py-2 hover:[animation-play-state:paused] cursor-pointer ${animate ? "animate-marquee" : ""}`}>
            {doubleDesktopLogos.map((logo, idx) => (
              <div
                key={`desktop-client-${idx}`}
                className="flex flex-col items-center w-[260px] flex-shrink-0"
              >
                {/* White background box containing logo */}
                <div className="w-full h-[140px] bg-white rounded-lg flex items-center justify-center p-4 shadow-lg border-transparent hover:scale-105 transition-transform duration-300">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain pointer-events-none"
                  />
                </div>
                {/* Text label below box */}
                <span className="text-[#FFFFFF] text-sm font-inter font-bold mt-3 tracking-widest text-center uppercase opacity-90">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE SWIPER & MARQUEE */}
        <div className="block md:hidden w-full relative">
          <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-[#0a0a0c] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-[#0a0a0c] to-transparent z-10 pointer-events-none" />

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
                <div className="w-full h-[190px] bg-[#636363] border-2 border-[#FFCC00] rounded-lg flex flex-col items-center justify-start pt-3.5 px-3.5 pb-4 shadow-md">
                  <div className="flex items-center justify-center w-full h-[110px]">
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="w-[170px] h-[110px] object-contain pointer-events-none"
                    />
                  </div>
                  {/* Text label inside the box, under the logo */}
                  <span className="text-[#FFFFFF] text-[11px] font-inter font-bold tracking-wide text-center uppercase mt-4 w-full truncate">
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
      <section className="career-bg-pattern relative w-full py-12 bg-[#0a0a0c] select-none">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="font-bebas text-5xl md:text-6xl tracking-wider uppercase m-0 leading-none text-[#FFCC00]">
            TESTIMONIALS
          </h2>
        </div>

        {/* ===== DESKTOP VIEW: 2 cards per slide ===== */}
        <div className="hidden md:flex items-center justify-between gap-8 w-full max-w-6xl mx-auto px-8">

          {/* Left Nav */}
          <button
            onClick={prevDesktop}
            className="w-12 h-12 flex-shrink-0 rounded-lg border-2 border-[#FFCC00] bg-black flex items-center justify-center text-[#FFCC00] hover:bg-[#FFCC00]/10 transition-all duration-200 active:scale-90 cursor-pointer shadow-[0_0_10px_rgba(255,204,0,0.15)]"
            aria-label="Previous testimonials"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Cards */}
          <div className="flex-1 flex flex-row gap-12 items-stretch justify-center animate-fadeIn" key={`desktop-${desktopIdx}`}>
            {currentDesktopPair.map((testimonial, idx) => (
              <TestimonialCard key={`desktop-card-${idx}`} testimonial={testimonial} />
            ))}
          </div>

          {/* Right Nav */}
          <button
            onClick={nextDesktop}
            className="w-12 h-12 flex-shrink-0 rounded-lg border-2 border-[#FFCC00] bg-black flex items-center justify-center text-[#FFCC00] hover:bg-[#FFCC00]/10 transition-all duration-200 active:scale-90 cursor-pointer shadow-[0_0_10px_rgba(255,204,0,0.15)]"
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
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === desktopIdx ? "bg-[#FFCC00] w-6" : "bg-white/20 hover:bg-white/45"
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
            className="w-8 h-8 flex-shrink-0 rounded-lg border-2 border-[#FFCC00] bg-black flex items-center justify-center text-[#FFCC00] hover:bg-[#FFCC00]/10 transition-all duration-200 active:scale-90 cursor-pointer shadow-[0_0_10px_rgba(255,204,0,0.15)]"
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
            className="w-8 h-8 flex-shrink-0 rounded-lg border-2 border-[#FFCC00] bg-black flex items-center justify-center text-[#FFCC00] hover:bg-[#FFCC00]/10 transition-all duration-200 active:scale-90 cursor-pointer shadow-[0_0_10px_rgba(255,204,0,0.15)]"
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
              className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === mobileIdx ? "bg-[#FFCC00] w-6" : "bg-white/20 hover:bg-white/45"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

      </section>

    </div>
  );
}

export default Home;
