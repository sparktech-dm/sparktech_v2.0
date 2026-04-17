import React, { useRef, useEffect, useState } from "react";
import Seo from "../components/Seo";
import Footer from "../components/Footer";
import ProfileCard from "../helper/ProfileCard";
import PremiumTeamSection from "../components/PremiumTeamSection";

const ProjectsSection = () => {
  // ✅ Track mobile flip state
  const [flippedCard, setFlippedCard] = useState(null);

  const handleCardClick = (card) => {
    if (window.innerWidth <= 768) {
      setFlippedCard(flippedCard === card ? null : card);
    }
  };

  const projects = [
    // {
    //   title: "Collaboration, not hierarchy",
    //   description: "Ideas can come from anywhere. We listen, challenge, and build together.",
    //   image: "https://images.unsplash.com/photo-1604210740327-dfd2dc1b2dc8?auto=format&fit=crop&w=800&q=80",
      
    // },
    // {
    //   title: "Courage to do it differently",
    //   description: "We’re not afraid to say no, challenge the brief, or take a different path. Means we do the work better.",
    //   image: "https://images.unsplash.com/photo-1522199873713-4f1117c1a9f8?auto=format&fit=crop&w=800&q=80",
      
    // },
    {
      title: "Creativity with purpose",
      description: "For us, creativity isn’t just flair; it is zeal. Everything we create has a purpose to act upon",
      image: "./creativity with purpose.webp",
    }
  ];
  




  return (
    <>
      <Seo
        title="Projects | Spark Tech Digital"
        description="Explore our recent digital marketing, branding, and web development projects delivered to satisfied clients."
      />

      {/* Projects Card Section */}
      <div className="w-full text-[#f0c417] font-[Inter] relative pt-20 pb-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-12 max-w-7xl mx-auto py-6">
          {/* Text Block */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
              We’re not here to follow the Digital crowd. We’re here to build
              things that matter.
            </h1>
            <p className="text-gray-300 text-sm sm:text-base max-w-md mx-auto md:mx-0">
              Spark Tech began with a simple idea — that good marketing isn’t
              just about algorithms or aesthetics. It’s about clarity,
              intention, and the courage to do things differently. As a digital
              marketing agency in Chennai, we’re a small team of creatives,
              strategists, and problem-solvers working with brands that want to
              grow with purpose, not pressure. We care about ideas that spark
              action. Content that connects. Campaigns that leave a mark.
              We’re not the loudest agency out there. But we’re honest, sharp,
              and all in — every single time.
            </p>
          </div>

          {/* Static Card Container */}
          <div className="relative w-full sm:w-[250px] md:w-[400px]">
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-full bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-5 flex flex-col justify-between"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-xl h-[160px] sm:h-[220px] w-full object-cover"
                />
                <div>
                  <h3 className="text-lg sm:text-2xl font-bold mt-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-2">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="px-4 sm:px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10">
              <span className="text-[#f0c417] text-xs font-black uppercase tracking-wide">
                About Founder
              </span>
            </div>
            <h2 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold mt-3">
              Meet the Founder
            </h2>
          </div>

          <p className="text-gray-300 mb-10 text-base sm:text-xl">
            At Spark Tech, our leadership is driven by a passion for innovation
            and a deep understanding of digital transformation. Our founder
            leads by example, constantly pushing the boundaries to help clients
            thrive in a fast-evolving tech landscape.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Founder Card */}
            <div className="w-[260px] sm:w-[300px]">
              <ProfileCard
                name="Rajesh"
                title="Founder & CEO"
                handle="ram"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/CEO3.png"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={true}
                innerGradient="linear-gradient(145deg, rgba(20,20,20,0.95) 0%, rgba(240,196,23,0.15) 100%)"
                showBehindGradient={false}
                onContactClick={() => console.log("Contact clicked")}
              />
            </div>

            {/* Founder Bio */}
            <div className="text-gray-300 text-base sm:text-xl leading-relaxed max-w-2xl text-center md:text-left md:ml-25">
              Every brand has a story worth telling and I started Sparktech to help those stories spark action.
              <br/>
              I come from a mix of tech and business — a B.Tech in IT, an MBA in Marketing from LIBA, and certifications in Cybersecurity, SAP, and Penetration Testing. That background gave me a simple perspective: creativity shines brightest when it’s backed by systems that are secure, scalable, and smart.
              <br/>
              Before Spark Tech, I had the privilege of working with brands like BMW, creating IPL-themed campaigns and digital strategies that turned bold ideas into measurable results. Those experiences taught me that good marketing doesn’t shout — it connects.
              <br/>
              For us, every campaign is personal. Every idea is sharpened by data. And every success belongs just as much to our clients as it does to us.

            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="px-4 sm:px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-16">
            Vision & Mission
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
                <div className="absolute inset-0 bg-[#222b36] rounded-2xl shadow-lg flex items-center justify-center overflow-hidden backface-hidden transition-all duration-500 group-hover:shadow-[0_0_40px_15px_#ffd700] group-hover:brightness-150">
                  <img className="w-full h-full object-cover object-center" src="./visison.webp" alt="Our Vision" />
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-[#1b1f29] rounded-2xl shadow-lg p-6 flex items-center justify-center backface-hidden rotate-y-180 transition-all duration-500 group-hover:shadow-[0_0_40px_15px_#ffd700] group-hover:brightness-150">
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
                <div className="absolute inset-0 bg-[#222b36] rounded-2xl shadow-lg flex items-center justify-center overflow-hidden backface-hidden transition-all duration-500 group-hover:shadow-[0_0_40px_15px_#ffd700] group-hover:brightness-125">
                  <img className="w-full h-full object-cover object-center" src="./mission.webp" alt="Our Mission" />
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-[#1b1f29] rounded-2xl shadow-lg p-6 flex items-center justify-center backface-hidden rotate-y-180 transition-all duration-500 group-hover:shadow-[0_0_40px_15px_#ffd700] group-hover:brightness-125">
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
