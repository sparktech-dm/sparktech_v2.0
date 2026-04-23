import React, { useEffect, useState, useRef, useCallback } from "react";
import "../flip-cards.css";
import mar from "../assets/services/marketing.jpg";
import per from "../assets/services/Performance-Marketing.jpg";
import seo from "../assets/services/SEO.jpg";
import brand from "../assets/services/Branding.jpg";
import soc from "../assets/services/Social Media Marketing.jpg";
import web from "../assets/services/Website Development.jpg";
import { Link } from "react-router-dom";

const CurvedScrollCards = () => {
  const [position, setPosition] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [manualClosedIndex, setManualClosedIndex] = useState(null);
  const [isUserControlled, setIsUserControlled] = useState(false);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const userControlTimerRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const cardWidth = 240 + 16; // 240 width + 16 gap

  const cardData = [
    { id: 1, title: "Search Visibility & SEO", description: "Technical and content-based optimization to dominate organic search results.", icon: "🔍", frontImage: seo, backColor: "#16213E", link: "/services/seo" },
    { id: 2, title: "Lead Generation Systems", description: "Data-led campaigns that convert curiosity into consistent revenue.", icon: "📈", frontImage: per, backColor: "#16213E", link: "/services/email-marketing" },
    { id: 3, title: "Social Media Marketing", description: "Boost your brand presence across platforms with engaging strategies.", icon: "📱", frontImage: soc, backColor: "#16213E", link: "/services/social-media-marketing" },
    { id: 4, title: "Ad Creatives & Campaigns", description: "We turn clicks into customers with scroll-stopping visuals and copy.", icon: "✍️", frontImage: mar, backColor: "#16213E", link: "/services/content-creation" },
    { id: 5, title: "Automated Email Flows", description: "Nurture leads and drive repeat business with automated email sequences.", icon: "🎨", frontImage: brand, backColor: "#16213E", link: "/services/video-editing" },
    { id: 6, title: "Website Development", description: "High-performance, custom websites designed to convert and scale.", icon: "💻", frontImage: web, backColor: "#16213E", link: "/services/website-development" },
  ];

  const allCards = [...cardData, ...cardData, ...cardData, ...cardData, ...cardData];
  const totalBaseWidth = cardWidth * cardData.length;

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getPositionForIndex = useCallback((index) => {
    return (viewportWidth / 2) - (index * cardWidth + cardWidth / 2);
  }, [viewportWidth, cardWidth]);

  useEffect(() => {
    setPosition(getPositionForIndex(cardData.length));
  }, [viewportWidth, cardData.length, getPositionForIndex]);

  // ─── Auto-scroll ───────────────────────────────────────────────────────────
  const startScroll = useCallback(() => {
    if (intervalRef.current || window.innerWidth < 768) return; // Disable on mobile
    intervalRef.current = setInterval(() => {
      setPosition((prev) => {
        let newPos = prev - 0.7;
        const minPos = getPositionForIndex(cardData.length * 3);
        const maxPos = getPositionForIndex(cardData.length);
        if (newPos < minPos) newPos += totalBaseWidth;
        else if (newPos > maxPos) newPos -= totalBaseWidth;
        return newPos;
      });
    }, 16);
  }, [cardData.length, getPositionForIndex, totalBaseWidth]);

  const stopScroll = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    let scrollTimeout;
    const handleWindowScroll = () => {
      stopScroll();
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        if (!isUserControlled && window.innerWidth >= 768) startScroll();
      }, 500); // Resume 500ms after scroll stops
    };

    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      if (window.innerWidth < 768) {
        stopScroll();
      } else if (!isUserControlled) {
        startScroll();
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleWindowScroll);
    
    if (!isUserControlled && window.innerWidth >= 768) startScroll();
    
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleWindowScroll);
      stopScroll();
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [startScroll, stopScroll, isUserControlled]);

  // ─── Touch Swiping ────────────────────────────────────────────────────────
  const touchStartX = useRef(null);
  const touchStartPos = useRef(null);

  const handleTouchStart = (e) => {
    stopScroll();
    setIsUserControlled(true);
    touchStartX.current = e.touches[0].clientX;
    touchStartPos.current = position;
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current === null) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - touchStartX.current;
    setPosition(touchStartPos.current + diff);
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX.current;
    
    // Snap to nearest card
    const centerPoint = viewportWidth / 2;
    let targetIndex;
    
    if (Math.abs(diff) > 50) { // Swipe threshold
      const direction = diff > 0 ? -1 : 1;
      const currentIndex = Math.round((centerPoint - touchStartPos.current - cardWidth / 2) / cardWidth);
      targetIndex = currentIndex + direction;
    } else {
      targetIndex = Math.round((centerPoint - position - cardWidth / 2) / cardWidth);
    }
    
    setPosition(getPositionForIndex(targetIndex));
    touchStartX.current = null;
    
    if (userControlTimerRef.current) clearTimeout(userControlTimerRef.current);
    userControlTimerRef.current = setTimeout(() => {
      setIsUserControlled(false);
    }, 4000);
  };

  // ─── Interaction Handlers ───────────────────────────────────────────────────
  const scrollByCard = useCallback((direction) => {
    stopScroll();
    setIsUserControlled(true);
    setFlippedIndex(null); // Unflip when moving
    
    setPosition((prev) => {
      const centerPoint = viewportWidth / 2;
      const currentIndex = Math.round((centerPoint - prev - cardWidth / 2) / cardWidth);
      let targetIndex = currentIndex + direction;
      
      // If we are getting close to the boundaries of our total cards (5 sets),
      // we snap back to the middle zone (sets 1-3) to keep it infinite.
      if (targetIndex < cardData.length) {
        targetIndex += cardData.length * 2;
      } else if (targetIndex >= cardData.length * 4) {
        targetIndex -= cardData.length * 2;
      }
      
      return getPositionForIndex(targetIndex);
    });

    if (userControlTimerRef.current) clearTimeout(userControlTimerRef.current);
    userControlTimerRef.current = setTimeout(() => {
      setIsUserControlled(false);
    }, 4000);
  }, [stopScroll, viewportWidth, cardWidth, getPositionForIndex, cardData.length]);

  const handleCardClick = (index) => {
    // If it's currently showing the back (either pinned or hovered)
    const isCurrentlyShowingBack = flippedIndex === index || (hoveredIndex === index && manualClosedIndex !== index);

    if (isCurrentlyShowingBack) {
      setFlippedIndex(null);
      setManualClosedIndex(index);
    } else {
      setFlippedIndex(index);
      setManualClosedIndex(null);
      stopScroll();
      setIsUserControlled(true);
      setPosition(getPositionForIndex(index));
      
      if (userControlTimerRef.current) clearTimeout(userControlTimerRef.current);
      userControlTimerRef.current = setTimeout(() => {
        setIsUserControlled(false);
      }, 6000);
    }
  };

  // ─── Center Active Identification ──────────────────────────────────────────
  useEffect(() => {
    const centerPoint = viewportWidth / 2;
    const index = Math.round((centerPoint - position - cardWidth / 2) / cardWidth);
    setActiveIndex(index);
  }, [position, viewportWidth, cardWidth]);

  return (
    <div className="w-full py-16 md:py-24 bg-transparent overflow-hidden" style={{ touchAction: "pan-y" }}>
      {/* Heading */}
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
          Our <span className="text-yellow-400">Services</span>
        </h2>
        <div className="w-20 h-1.5 bg-yellow-400 mx-auto mt-4 rounded-full" />
        <p className="text-gray-400 mt-4 text-sm md:text-lg max-w-lg mx-auto">
          Scale your business with our data-driven digital strategies.
        </p>
      </div>

      {/* Main Carousel area */}
      <div className="relative w-full h-[460px] flex items-center group/carousel" style={{ touchAction: "pan-y" }}>
        
        {/* ← LEFT ARROW */}
        <button
          onClick={(e) => { e.stopPropagation(); scrollByCard(-1); }}
          className="
            hidden md:flex absolute left-4 md:left-10 z-40
            w-12 h-12 md:w-16 md:h-16 rounded-full
            items-center justify-center
            border-2 border-yellow-400/50 text-yellow-400
            bg-black/40 backdrop-blur-md
            hover:bg-yellow-400 hover:text-black hover:border-yellow-400
            hover:scale-110 active:scale-90
            transition-all duration-300 shadow-[0_0_20px_rgba(240,196,23,0.3)]
            text-xl md:text-2xl font-bold select-none
          "
        >
          &#8592;
        </button>

        {/* → RIGHT ARROW */}
        <button
          onClick={(e) => { e.stopPropagation(); scrollByCard(1); }}
          className="
            hidden md:flex absolute right-4 md:right-10 z-40
            w-12 h-12 md:w-16 md:h-16 rounded-full
            items-center justify-center
            border-2 border-yellow-400/50 text-yellow-400
            bg-black/40 backdrop-blur-md
            hover:bg-yellow-400 hover:text-black hover:border-yellow-400
            hover:scale-110 active:scale-90
            transition-all duration-300 shadow-[0_0_20px_rgba(240,196,23,0.3)]
            text-xl md:text-2xl font-bold select-none
          "
        >
          &#8594;
        </button>

        {/* Card Track */}
        <div
          className="absolute flex gap-4 pointer-events-none"
          style={{
            transform: `translateX(${position}px) translateZ(0)`,
            willChange: "transform",
            transition: isUserControlled 
              ? "transform 0.6s cubic-bezier(0.2, 0, 0, 1)" 
              : "none",
            left: 0,
            transformStyle: "preserve-3d",
            touchAction: "pan-y"
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {allCards.map((card, i) => {
            const isActive = i === activeIndex;
            const isHovered = i === hoveredIndex;
            const isFlipped = i === flippedIndex;
            
            const activeGlow = viewportWidth < 768
              ? "0 0 40px rgba(240, 196, 23, 0.4)"
              : "0 0 60px rgba(240, 196, 23, 0.6)";

            return (
              <div
                key={i}
                onClick={() => handleCardClick(i)}
                className={`
                  card pointer-events-auto w-60 h-[400px] rounded-3xl flex-shrink-0 cursor-pointer
                  transition-all duration-700 ease-out relative
                  ${isActive ? "scale-105 z-20 opacity-100" : "scale-90 z-10 opacity-40 blur-[0.5px]"}
                  ${(i === flippedIndex || (i === hoveredIndex && i !== manualClosedIndex)) ? "flipped" : ""}
                `}
                style={{
                  boxShadow: (isActive || hoveredIndex === i || i === flippedIndex) ? activeGlow : "none",
                }}
                onMouseEnter={() => { 
                  if (viewportWidth >= 768) {
                    stopScroll(); 
                    setHoveredIndex(i); 
                    setManualClosedIndex(null);
                  }
                }}
                onMouseLeave={() => { 
                  if (viewportWidth >= 768) {
                    setHoveredIndex(null); 
                    if (!isUserControlled) startScroll();
                  }
                }}
              >
                <div className="card-inner w-full h-full rounded-3xl border border-white/10">
                  {/* FRONT */}
                  <div
                    className="card-front flex items-center justify-center text-white bg-cover bg-center relative cursor-pointer"
                    style={{ backgroundImage: `url(${card.frontImage})` }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(i);
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="relative z-10 text-center px-4">
                      <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide">
                        {card.title}
                      </h3>
                    </div>
                  </div>

                  {/* BACK */}
                  <div
                    className="card-back flex flex-col items-center justify-center p-6 text-white cursor-pointer"
                    style={{ backgroundColor: card.backColor }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(i); // This will toggle flippedIndex to null if it matches
                    }}
                  >
                    <p className="text-baseline leading-relaxed mb-6 text-center text-gray-200">
                      {card.description}
                    </p>
                    <Link to={card.link} onClick={(e) => e.stopPropagation()}>
                      <button className="bg-yellow-400 text-black px-6 py-2.5 rounded-full font-bold text-sm tracking-wide shadow-lg hover:shadow-yellow-400/40 hover:scale-105 active:scale-95 transition-all">
                        LEARN MORE
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress indicators */}
      <div className="flex justify-center gap-2 mt-10">
        {cardData.map((_, idx) => {
          const currentRealIndex = activeIndex ? ((activeIndex % cardData.length) + cardData.length) % cardData.length : 0;
          return (
            <div 
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentRealIndex ? "w-10 bg-yellow-400" : "w-3 bg-white/10"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CurvedScrollCards;
