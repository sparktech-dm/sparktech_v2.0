import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const segments = [
  {
    number: "01",
    title: "Social Media Marketing",
    details: "Boost your brand presence across platforms with engaging strategies.",
    link: "/services/social-media-marketing",
    icon: "📱",
  },
  {
    number: "02",
    title: "Content Creation",
    details: "Creative and high-quality content tailored to your audience.",
    link: "/services/content-creation",
    icon: "✍️",
  },
  {
    number: "03",
    title: "Website Development",
    details: "Modern, responsive, and scalable websites for your business.",
    link: "/services/website-development",
    icon: "💻",
  },
  {
    number: "04",
    title: "Video Editing",
    details: "Professional video editing to tell your story effectively.",
    link: "/services/video-editing",
    icon: "🎬",
  },
  {
    number: "05",
    title: "Email Marketing",
    details: "Targeted campaigns that convert and nurture your audience.",
    link: "/services/email-marketing",
    icon: "📧",
  },
  {
    number: "06",
    title: "SEO",
    details: "SEO strategies to rank higher and drive organic growth.",
    link: "/services/seo",
    icon: "🔍",
  },
];

const ServiceCard = ({ segment }) => {
  const navigate = useNavigate();
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-[320px] cursor-pointer group"
      style={{ perspective: "1000px" }}
    >
      <motion.div
        className="w-full h-full relative"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT FACE */}
        <div
          className="absolute inset-0 bg-white/5 backdrop-blur-lg rounded-3xl p-7 border border-white/10 shadow-xl overflow-hidden hover:border-yellow-400/50 hover:shadow-yellow-400/20 hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center text-center"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
          onClick={(e) => {
            e.stopPropagation();
            setIsFlipped(true);
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/15 via-pink-400/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 rounded-3xl pointer-events-none" />
          <span className="absolute -top-5 -right-3 text-7xl font-extrabold text-white/8 group-hover:text-yellow-400/15 transition select-none">
            {segment.number}
          </span>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-300 transition relative z-10">
            {segment.title}
          </h3>
          <p className="text-yellow-300/80 text-sm opacity-0 group-hover:opacity-100 transition mt-2 md:hidden">Tap to view details</p>
          <p className="text-yellow-300/80 text-sm opacity-0 group-hover:opacity-100 transition mt-2 hidden md:block">Click to view details</p>
        </div>

        {/* BACK FACE */}
        <div
          className="absolute inset-0 bg-[#0f233f]/95 backdrop-blur-lg rounded-3xl p-7 border border-yellow-400/30 shadow-xl overflow-hidden flex flex-col items-center justify-center text-center cursor-pointer"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setIsFlipped(false);
          }}
        >
          <h3 className="text-xl font-bold text-yellow-300 mb-3">
            {segment.title}
          </h3>
          <p className="text-white/80 text-sm leading-relaxed mb-6">
            {segment.details}
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(segment.link);
            }}
            className="px-6 py-2 rounded-full bg-yellow-400 text-black text-sm font-bold shadow hover:bg-white hover:scale-105 transition-all w-max mx-auto relative z-20"
          >
            Learn More →
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default function ServicesCarousel() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward
  const trackRef = useRef(null);

  const [cardsVisible, setCardsVisible] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setCardsVisible(1);
      else if (window.innerWidth < 1024) setCardsVisible(2);
      else setCardsVisible(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalCards = segments.length;
  const maxIndex = Math.max(0, totalCards - cardsVisible);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handleScroll = (e) => {
    if (!trackRef.current || trackRef.current.children.length === 0) return;
    const scrollLeft = e.currentTarget.scrollLeft;
    const cardWidth = trackRef.current.children[0].offsetWidth + 24; // 24px is gap-6
    const newIndex = Math.round(scrollLeft / cardWidth);
    if (newIndex !== currentIndex && newIndex >= 0 && newIndex <= maxIndex) {
      setCurrentIndex(newIndex);
    }
  };

  const goLeft = () => {
    if (!trackRef.current || trackRef.current.children.length === 0) return;
    const cardWidth = trackRef.current.children[0].offsetWidth + 24;
    
    if (trackRef.current.scrollLeft <= 10) {
      // Loop to end
      trackRef.current.scrollTo({ left: trackRef.current.scrollWidth, behavior: 'smooth' });
    } else {
      trackRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const goRight = () => {
    if (!trackRef.current || trackRef.current.children.length === 0) return;
    const cardWidth = trackRef.current.children[0].offsetWidth + 24;
    
    if (trackRef.current.scrollLeft + trackRef.current.clientWidth >= trackRef.current.scrollWidth - 24) {
      // Loop to beginning
      trackRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      trackRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };



  return (
    <section
      id="services"
      className="relative py-20 px-4 bg-black overflow-hidden"
    >
      {/* Background glow blobs */}
      <div className="absolute w-[400px] h-[400px] bg-yellow-400/10 rounded-full blur-3xl top-10 left-[-80px] pointer-events-none" />
      <div className="absolute w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-3xl bottom-10 right-[-60px] pointer-events-none" />

      {/* Heading */}
      <div className="text-center mb-14 relative z-10">
        <p className="text-yellow-400 uppercase tracking-widest text-sm font-semibold mb-2">
          What We Offer
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Our <span className="text-yellow-300">Services</span>
        </h2>
        <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-yellow-400 opacity-80" />
      </div>

      {/* Carousel wrapper */}
      <div className="relative z-10 flex items-center justify-center gap-3 md:gap-5 max-w-7xl mx-auto ">
        {/* LEFT ARROW (Hidden on mobile) */}
        <button
          id="services-arrow-left"
          onClick={goLeft}
          aria-label="Previous services"
          className="hidden md:flex flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 items-center justify-center transition-all duration-300 font-bold text-xl border-yellow-400 text-yellow-400 bg-yellow-400/10 hover:bg-yellow-400 hover:text-black cursor-pointer shadow-lg hover:shadow-yellow-400/40"
        >
          &#8592;
        </button>

        {/* Cards Track */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex-1 min-w-0 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar pb-6 pt-2 select-none"
        >
          {segments.map((segment) => (
            <div
              key={segment.number}
              className="w-full shrink-0 snap-center md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <ServiceCard segment={segment} />
            </div>
          ))}
        </div>

        {/* RIGHT ARROW (Hidden on mobile) */}
        <button
          id="services-arrow-right"
          onClick={goRight}
          aria-label="Next services"
          className="hidden md:flex flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 items-center justify-center transition-all duration-300 font-bold text-xl border-yellow-400 text-yellow-400 bg-yellow-400/10 hover:bg-yellow-400 hover:text-black cursor-pointer shadow-lg hover:shadow-yellow-400/40"
        >
          &#8594;
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 mt-8 relative z-10">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => {
              if (trackRef.current && trackRef.current.children.length > 0) {
                const cardWidth = trackRef.current.children[0].offsetWidth + 24;
                trackRef.current.scrollTo({ left: i * cardWidth, behavior: 'smooth' });
              }
            }}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentIndex
                ? "bg-yellow-400 w-6"
                : "bg-white/30 hover:bg-white/60"
              }`}
          />
        ))}
      </div>
    </section>
  );
}

