import React, { useRef, useEffect, useState } from "react";
import Seo from "../components/Seo";
import Footer from "../components/Footer";
import ProfileCard from "../helper/ProfileCard";
import PremiumTeamSection from "../components/PremiumTeamSection";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ProjectsSection = () => {
  // ✅ Track mobile flip state
  const [flippedCard, setFlippedCard] = useState(null);

  // 3D Tilt Logic for Founder Card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleCardClick = (card) => {
    if (window.innerWidth <= 768) {
      setFlippedCard(flippedCard === card ? null : card);
    }
  };

  const projects = [
    {
      title: "Creativity with purpose",
      description: "For us, creativity isn’t just flair; it is zeal. Everything we create has a purpose to act upon.",
      image: "./creativity with purpose.webp",
    }
  ];

  return (
    <>
      <Seo
        title="About Us | Spark Tech Digital"
        description="Explore our recent digital marketing, branding, and web development projects delivered to satisfied clients."
      />

      {/* Hero / Projects Card Section */}
      <div className="w-full text-[#f0c417] font-[Inter] relative pt-24 pb-20 overflow-hidden">
        {/* Background Aura */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-400/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2" />
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 px-6 md:px-12 max-w-7xl mx-auto">
          {/* Text Block */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-black leading-[1.1] tracking-tight mb-8">
                We’re not here to follow <br />
                <span className="text-white">the Digital crowd.</span>
              </h1>
              <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Spark Tech began with a simple idea — that good marketing isn’t
                just about algorithms or aesthetics. It’s about clarity,
                intention, and the courage to do things differently. 
                <br /><br />
                As a digital agency, we’re all in — every single time.
              </p>
            </motion.div>
          </div>

          {/* Large Animated Hero Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[500px] group pt-8"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] p-6 md:p-8 flex flex-col gap-6 transform transition-transform duration-700 group-hover:-translate-y-4"
              >
                <div className="relative overflow-hidden rounded-[1.5rem] h-[260px] md:h-[350px] ">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-4xl font-black text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                {/* Decorative element */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-yellow-400/20 blur-3xl rounded-full -z-10 group-hover:bg-yellow-400/40 transition-colors" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Founder Section - Compact 3D Animation */}
      <section className="px-6 py-12 md:py-20 bg-[#050505] relative overflow-hidden">
        {/* Abstract background mesh */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff11 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              {/* <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-4">
                <span className="text-[#f0c417] text-[10px] font-black uppercase tracking-[0.2em]">
                  The Visionary
                </span>
              </div> */}
              <h2 className="text-white text-3xl sm:text-5xl md:text-6xl font-black leading-none">
                Meet the <span className="text-yellow-400">Founder</span>
              </h2>
            </div>
            {/* <p className="text-gray-500 text-sm italic max-w-sm">
              "Leadership is not about being in charge. It's about taking care of those in your charge."
            </p> */}
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* 3D Tilted Founder Card - Compact */}
            <div className="perspective-1000 w-full max-w-[360px]">
              <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ 
                  rotateX, 
                  rotateY, 
                  isolation: 'isolate',
                  WebkitMaskImage: '-webkit-radial-gradient(white, black)' // Hard-clip for Safari/Chrome 3D
                }}
                className="group relative h-[450px] md:h-[520px] w-full rounded-[2.5rem] overflow-hidden bg-[#111] cursor-pointer shadow-[0_45px_100px_-25px_rgba(0,0,0,1)] border border-white/5"
              >
                {/* Mouse-following spotlight gradient */}
                <motion.div 
                   className="absolute inset-0 pointer-events-none z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   style={{ background: "radial-gradient(circle at center, rgba(240,196,23,0.1) 0%, transparent 80%)" }}
                />

                <img
                  src="/CEO3.png"
                  alt="Founder"
                  className="w-full h-full object-cover grayscale-0  md:grayscale md:brightness-90 md:group-hover:grayscale-0 md:group-hover:brightness-110 transition-all duration-1000 scale-98 group-hover:scale-105 pt-1"
                />

                {/* Glass Badge */}
                {/* <div className="absolute top-6 right-6 z-40 bg-black/40 backdrop-blur-xl border border-white/20 px-4 py-1 rounded-xl shadow-2xl">
                    <p className="text-[#f0c417] font-black text-[9px] uppercase tracking-widest">EST. 2024</p>
                </div> */}

                {/* Info Panel Overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-40">
                  <div className="bg-black/60 backdrop-blur-2xl border border-white/10 rounded-[1.5rem] p-6 shadow-2xl relative">
                     <div className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
                     <h3 className="text-3xl font-black text-white mb-1">
                        Rajesh
                     </h3>
                     <p className="text-yellow-400 font-bold tracking-[0.4em] text-[8px] uppercase">
                        Founder & CEO
                     </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Compact Bio Layout - Full Content Restored */}
            <div className="flex-1">
              <div className="relative">
                <div className="absolute -top-16 -left-8 text-[12rem] leading-none text-white/[0.02] font-serif pointer-events-none select-none">"</div>
                
                <div className="space-y-6 md:space-y-8 relative z-10">
                  <div className="text-gray-300 text-base md:text-xl leading-[1.7] md:leading-[1.8] font-light space-y-4 md:space-y-6">
                    <p>
                      Every brand has a story worth telling and I started <span className="text-white font-bold border-b border-yellow-400/30">Sparktech</span> to help those stories spark action.
                    </p>
                    <p>
                      I come from a mix of tech and business — a B.Tech in IT, an MBA in Marketing from LIBA, and certifications in Cybersecurity, SAP, and Penetration Testing. That background gave me a simple perspective: <span className="text-[#f0c417] italic">creativity shines brightest</span> when it’s backed by systems that are secure, scalable, and smart.
                    </p>
                    <p>
                      Before Spark Tech, I had the privilege of working with brands like <span className="text-[#f0c417] italic">BMW</span>, creating IPL-themed campaigns and digital strategies. Those experiences taught me that good marketing doesn’t shout — it connects.
                    </p>
                    <p>
                      For us, every campaign is personal. <span className="text-[#f0c417] italic">Every idea is sharpened by data</span>. And every success belongs just as much to our clients as it does to us.
                    </p>
                  </div>

                  {/* <div className="flex flex-wrap items-center gap-6 pt-4 md:pt-6">
                     <div className="flex items-center gap-4 group/sig border-r border-white/10 pr-6">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-yellow-400 flex items-center justify-center text-black shadow-lg">
                           <FaLinkedinIn size={18} />
                        </div>
                        <div>
                           <p className="text-white font-black text-xs md:text-sm tracking-widest uppercase">Connect</p>
                           <p className="text-yellow-400/60 text-[8px] font-bold uppercase tracking-widest">LinkedIn</p>
                        </div>
                     </div>

                     <div className="flex items-center gap-4 group/sig">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#f0c417] hover:bg-white hover:text-black transition-all">
                           <FaInstagram size={18} />
                        </div>
                        <div>
                           <p className="text-white font-black text-xs md:text-sm tracking-widest uppercase">Follow</p>
                           <p className="text-yellow-400/60 text-[8px] font-bold uppercase tracking-widest">Instagram</p>
                        </div>
                     </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <div className="px-4 sm:px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-16">
            Vision <span className="text-yellow-400">&</span> Mission
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div
              className={`group perspective animate-float`}
              onClick={() => handleCardClick("vision")}
            >
              <div
                className={`relative w-full h-120 md:h-80 transition-transform duration-700 preserve-3d group-hover:rotate-y-180 group-hover:scale-105
                ${flippedCard === "vision" ? "rotate-y-180" : ""}`}
              >
                {/* Front */}
                <div className="absolute inset-0 bg-[#222b36] rounded-2xl shadow-lg flex items-center justify-center overflow-hidden backface-hidden transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(240,196,23,0.45)] group-hover:brightness-150">
                  <img className="w-full h-full object-cover object-center" src="./visison.webp" alt="Our Vision" />
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-[#1b1f29] rounded-2xl shadow-lg p-6 flex items-center justify-center backface-hidden rotate-y-180 transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(240,196,23,0.45)] group-hover:brightness-150">
                  <p className="text-gray-300 text-lg leading-relaxed text-center">
                    To reshape digital marketing into a space where data meets depth — 
                    and brands grow through clarity, not chaos.
                    <br /><br />
                    At Spark Tech, our vision is to fuse creativity with clarity, 
                    building bold ideas on a bedrock of insight and intention.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission */}
            <div
              className="group perspective animate-float delay-200"
              onClick={() => handleCardClick("mission")}
            >
              <div
                className={`relative w-full h-120 md:h-80 transition-transform duration-700 preserve-3d group-hover:rotate-y-180 group-hover:scale-105
                ${flippedCard === "mission" ? "rotate-y-180" : ""}`}
              >
                {/* Front */}
                <div className="absolute inset-0 bg-[#222b36] rounded-2xl shadow-lg flex items-center justify-center overflow-hidden backface-hidden transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(240,196,23,0.45)] group-hover:brightness-110">
                  <img className="w-full h-full object-cover object-center" src="./mission.webp" alt="Our Mission" />
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-[#1b1f29] rounded-2xl shadow-lg p-6 flex items-center justify-center backface-hidden rotate-y-180 transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(240,196,23,0.45)] group-hover:brightness-110">
                  <p className="text-gray-300 text-lg leading-relaxed text-center">
                    We dig deep before we move fast. Every strategy we craft is backed 
                    by research, sharpened by data, and brought to life through storytelling 
                    that connects.
                    <br /><br />
                    Helping brands grow with purpose is what drives Spark Tech — a digital 
                    marketing agency in Chennai that believes in data-backed decisions and 
                    content with conviction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Extra CSS */}
      <style>{`
        .perspective {
          perspective: 1000px;
        }
        .backface-hidden {
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 1.5s ease-in-out infinite;
        }
        .delay-200 {
          animation-delay: 2s;
        }
      `}</style>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto text-center mt-32 px-6">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
          <span className="text-[#f0c417] text-xs font-black uppercase tracking-widest">
            Creative Minds
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
          The Team Behind the Spark
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-16">
          A collective of strategists, designers, and developers dedicated to transforming your digital presence.
        </p>
        
        <div className="flex justify-center mb-40 w-full">
          <PremiumTeamSection />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProjectsSection;
