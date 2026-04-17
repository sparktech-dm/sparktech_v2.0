import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

// SVG icons for small circles
const icons = [
  <svg width="22" height="22" fill="none"><path d="M11 3L2 9l9 6 9-6-9-6zM2 9v6l9 6 9-6V9" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/></svg>,
  <svg width="22" height="22" fill="none"><circle cx="11" cy="11" r="9" stroke="#fff" strokeWidth="2"/><path d="M11 5v6l3 2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>,
  <svg width="22" height="22" fill="none"><path d="M11 15V7m0 0l3 3m-3-3l-3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>,
  <svg width="22" height="22" fill="none"><path d="M11 19.9l-1.4-1.2C4.9 14.2 2 11.3 2 7.5A5.5 5.5 0 0 1 11 2a5.5 5.5 0 0 1 9 5.5c0 3.8-2.9 6.7-7.6 11.2L11 19.9z" stroke="#fff" strokeWidth="2" fill="#fff"/></svg>,
  <svg width="22" height="22" fill="none"><circle cx="11" cy="11" r="9" stroke="#fff" strokeWidth="2"/><path d="M11 7v4l2 2" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>,
  <svg width="22" height="22" fill="none"><rect x="5" y="9" width="12" height="8" rx="2" stroke="#fff" strokeWidth="2"/><path d="M11 9V5a2 2 0 1 1 4 0v4" stroke="#fff" strokeWidth="2"/></svg>,
];

const circleColors = [
  "bg-gradient-to-br from-violet-500 to-purple-600",
  "bg-gradient-to-br from-indigo-400 to-blue-500",
  "bg-gradient-to-br from-teal-400 to-green-400",
  "bg-gradient-to-br from-gray-400 to-gray-600",
  "bg-gradient-to-br from-amber-400 to-yellow-500",
  "bg-gradient-to-br from-cyan-400 to-blue-400",
];

const contentItems = [
  { title: "Data before drama", desc: "Our ideas are creative but are never random. We dig deep & analyse smart." },
  { title: "Stories with spine", desc: "We create content that connects — not just with eyeballs, but with real emotion and action." },
  { title: "No jargon. Just results", desc: "We won’t drown you in buzzwords. We’ll show you what’s working, what’s not, and what’s next." },
  { title: "We’re new; not naive", desc: "We may be starting fresh, but we come in with industry insight, lived experience, and a hunger to do things right." },
  { title: "A win-win partnership", desc: "Our success is tied to yours. So, we put everything into building results that last beyond a campaign." },
  { title: "Creative but commercially aware", desc: "We love bold ideas, but never lose sight of performance and ROI." },
];

// --- Desktop Component ---
const SIZE = 480;
const SMALL_SIZE = 64;
const CX = SIZE / 2;
const CY = SIZE / 2;
const RADIUS = SIZE / 2 - SMALL_SIZE / 4 - 7;

function semiCirclePositions(N, padding = 0.10) {
  const angle_start = -Math.PI / 2 + Math.PI * padding;
  const angle_end = Math.PI / 2 - Math.PI * padding;
  return Array.from({ length: N }).map((_, idx) => {
    const t = N === 1 ? 0.5 : idx / (N - 1);
    const angle = angle_start + (angle_end - angle_start) * t;
    return {
      x: CX + RADIUS * Math.cos(angle) - SMALL_SIZE / 2,
      y: CY + RADIUS * Math.sin(angle) - SMALL_SIZE / 2,
    };
  });
}

const DesktopWhyChooseUs = () => {
  const containerRef = useRef(null);
  const iconControls = useAnimation();
  const contentControls = useAnimation();
  const isInView = useInView(containerRef, { once: false, margin: "-100px 0px -50px 0px" });

  useEffect(() => {
    if (isInView) {
      iconControls.start("visible");
    } else {
      contentControls.start("hidden"); // hide content when scrolling down
    }
  }, [isInView, iconControls, contentControls]);

  const iconVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.2 } }),
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.1 } },
  };

  const smallCircles = semiCirclePositions(contentItems.length, 0.10);

  return (
    <div ref={containerRef} className="hidden md:flex items-center justify-center min-h-screen py-16">
      <div className="relative" style={{ width: SIZE + 390, height: SIZE }}>
        <div className="absolute rounded-full bg-gray-100 opacity-90 z-10" style={{ width: SIZE, height: SIZE, left: 110, top: 0 }} />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[250px] h-[250px] rounded-full bg-yellow-400 z-20 flex flex-col items-center justify-center shadow-xl text-white font-bold font-['Noto Sans']">
          <span className="text-4xl mb-1 font-extrabold">WHY</span>
          <span className="text-2xl mb-1 font-semibold">CHOOSE</span>
          <span className="text-4xl font-extrabold">US ?</span>
        </div>

        {smallCircles.map((pos, idx) => {
          let connectorTop = pos.y + SMALL_SIZE / 3 - 30;
          if (idx === 0) connectorTop -= 15;
          else if (idx === contentItems.length - 1) connectorTop += 35;

          return (
            <React.Fragment key={idx}>
              <motion.div
                className={`absolute flex justify-center items-center rounded-full ${circleColors[idx % circleColors.length]} border-3 border-white shadow-lg`}
                style={{ width: SMALL_SIZE, height: SMALL_SIZE, left: pos.x + 130, top: pos.y, zIndex: 20 }}
                custom={idx}
                initial="hidden"
                animate={iconControls}
                variants={iconVariants}
                onAnimationComplete={() => contentControls.start("visible")}
              >
                {icons[idx]}
              </motion.div>

              <motion.div
                className="absolute flex items-center"
                style={{ left: pos.x + 170 + SMALL_SIZE + 32, top: connectorTop, width: 320, zIndex: 22 }}
                initial="hidden"
                animate={contentControls}
                variants={contentVariants}
              >
                <div className="w-14 h-0.5 bg-gray-300 mr-4" />
                <div>
                  <div className="font-bold bg-gradient-to-r from-[#f0c417] to-lime-100 bg-clip-text text-transparent">{contentItems[idx].title}</div>
                  <div className="text-sm text-grey-500">{contentItems[idx].desc}</div>
                </div>
              </motion.div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

// --- Mobile Component ---
const MobileWhyChooseUs = () => {
  const containerRef = useRef(null);
  const iconControls = useAnimation();
  const contentControls = useAnimation();
  const isInView = useInView(containerRef, { once: false, margin: "-100px 0px -50px 0px" });

  useEffect(() => {
    if (isInView) {
      iconControls.start("visible");
      setTimeout(() => contentControls.start("visible"), 200);
    }
  }, [isInView, iconControls, contentControls]);

  const iconVariants = { 
    hidden: { opacity: 0, scale: 0.5 }, 
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } } 
  };
  
  const contentVariants = { 
    hidden: { opacity: 0, x: -20 }, 
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } 
  };

  return (
    <div ref={containerRef} className="flex flex-col items-stretch px-4 py-16 space-y-5 md:hidden overflow-hidden">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-extrabold text-white tracking-widest uppercase mb-3">
          WHY <span className="text-yellow-400">CHOOSE US?</span>
        </h2>
        <div className="w-16 h-1 bg-yellow-400 mx-auto rounded-full" />
      </div>

      <div className="space-y-4">
        {contentItems.map((item, idx) => (
          <motion.div 
            key={idx} 
            className="relative flex items-center bg-white/5 backdrop-blur-lg rounded-2xl p-4 md:p-5 border border-white/10 shadow-lg overflow-hidden group"
            initial="hidden" animate={contentControls} variants={contentVariants}
            transition={{ delay: idx * 0.1 }}
          >
            {/* Background Hint */}
            <div className={`absolute right-0 top-0 w-24 h-24 rounded-full blur-[40px] opacity-[0.35] ${circleColors[idx % circleColors.length]}`} />
            
            {/* Index Number */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-6xl font-black text-white/[0.08] select-none pointer-events-none">
              0{idx + 1}
            </div>

            {/* Icon */}
            <motion.div 
              className={`flex-shrink-0 flex justify-center items-center w-12 h-12 md:w-14 md:h-14 rounded-xl ${circleColors[idx % circleColors.length]} shadow-md mr-4 z-10`}
              initial="hidden" animate={iconControls} variants={iconVariants} transition={{ delay: idx * 0.1 }}
            >
              {icons[idx]}
            </motion.div>

            {/* Text */}
            <div className="flex-1 z-10">
              <h3 className="font-bold text-[#f0c417] text-[15px] md:text-lg mb-1.5 leading-tight">{item.title}</h3>
              <p className="text-[13px] md:text-sm text-gray-300 leading-snug w-[95%]">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// --- Main Wrapper ---
const WhyChooseUs = () => {
  return (
    <>
      <DesktopWhyChooseUs />
      <MobileWhyChooseUs />
    </>
  );
};

export default WhyChooseUs;
