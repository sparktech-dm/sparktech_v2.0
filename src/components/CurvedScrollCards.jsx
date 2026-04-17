import React, { useEffect, useState, useRef } from "react";
import "../flip-cards.css";
import mar from "../assets/services/Marketing.jpg";
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
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  const cardData = [
    {
      id: 1,
      title: "SEO",
      description:
        "Strategic SEO that aligns with how your audience thinks, searches, and acts.",
      icon: "🔍",
      frontImage: seo,
      backColor: "#16213E",
      link: "/services/seo",
    },
    {
      id: 2,
      title: "Performance Marketing",
      description: "Data-led campaigns that convert curiosity into consistent revenue.",
      icon: "📈",
      frontImage: per,
      backColor: "#16213E",
      link: "/services/email-marketing",
    },
    {
      id: 3,
      title: "Social Media Marketing",
      description: "We balance story and strategy to build engagement and community.",
      icon: "📱",
      frontImage: soc,
      backColor: "#16213E",
      link: "/services/social-media-marketing",
    },
    {
      id: 4,
      title: "Content Marketing",
      description: "Intentional storytelling that earns trust and drives growth.",
      icon: "✍️",
      frontImage: mar,
      backColor: "#16213E",
      link: "/services/content-creation",
    },
    {
      id: 5,
      title: "Branding",
      description:
        "We shape identities that are consistent, credible, and unmistakably you.",
      icon: "🎨",
      frontImage: brand,
      backColor: "#16213E",
      link: "/services/video-editing",
    },
    {
      id: 6,
      title: "Website Development",
      description:
        "Digital foundations that support your story, scale, and success.",
      icon: "💻",
      frontImage: web,
      backColor: "#16213E",
      link: "/services/website-development",
    },
  ];

  const allCards = [...cardData, ...cardData, ...cardData, ...cardData, ...cardData];
  const cardWidth = 240 + 16; // card width + margin
  const totalWidth = cardWidth * cardData.length;

  // Auto-scroll
  useEffect(() => {
    startScroll();
    return () => stopScroll();
  }, [totalWidth]);

  const startScroll = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setPosition((prev) => {
        const newPos = prev - 1;
        if (Math.abs(newPos) >= totalWidth) {
          return 0;
        }
        return newPos;
      });
    }, 16);
  };

  const stopScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Detect center card
  useEffect(() => {
    if (!containerRef.current) return;
    const containerCenter = window.innerWidth / 2;
    const children = containerRef.current.children;
    let closestIndex = null;
    let minDistance = Infinity;

    Array.from(children).forEach((child, index) => {
      const rect = child.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, [position]);

  return (
    <div className="w-full py-20 bg-transparent overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">
          Our <span className="text-yellow-400">Services</span>
        </h2>
        <p className="text-gray-300 mt-2">Explore what we offer</p>
      </div>

      <div className="relative w-full h-[420px]">
        <div
          ref={containerRef}
          className="absolute flex gap-4"
          style={{
            transform: `translateX(${position}px)`,
            willChange: "transform",
            transition: "transform 0.02s linear",
          }}
        >
          {allCards.map((card, i) => {
            const isActive = i === activeIndex;
            const isHovered = i === hoveredIndex;

            return (
              <div
                key={i}
                className={`card w-60 h-[400px] rounded-2xl flex-shrink-0 transition-all duration-300 ${
                  isActive ? "scale-105 z-10" : "scale-95 opacity-80"
                }`}style={{
  boxShadow:
    isHovered || (!hoveredIndex && isActive)
      ? "0px 0px 25px rgba(255, 230, 0, 0.9), 0px 0px 60px rgba(255, 230, 0, 0.8)"
      : "none",
}}

                onMouseEnter={() => {
                  stopScroll();
                  setHoveredIndex(i);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  startScroll();
                }}
              >
                <div className="card-inner">
                  {/* FRONT */}
                  <div
                    className="card-front flex items-center justify-center text-white rounded-2xl bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${card.frontImage})` }}
                  >
                    <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
                    <h2 className="relative z-10 text-xl font-bold text-center px-4">
                      {card.title}
                    </h2>
                  </div>

                  {/* BACK */}
                  <div
                    className="card-back flex flex-col items-center justify-center p-4 text-white rounded-2xl"
                    style={{ backgroundColor: card.backColor }}
                  >
                    <p className="text-sm mb-4 text-center">{card.description}</p>
                    <Link to={card.link}>
                      <button className="bg-[#f0c417] text-black px-4 py-2 rounded-lg text-sm">
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CurvedScrollCards;
