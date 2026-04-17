import React, { useRef, useEffect, useState } from "react";
import Seo from "../components/Seo";
import Footer from "../components/Footer";
import ProfileCard from "../helper/ProfileCard";
import AnimatedCircularTeam from "../helper/AnimatedCircularTeam";
import WebTeam from "../helper/WebTeam";
import EditTeam from "../helper/EditTeam";
import ManTeam from "../helper/ManTeam";

const ProjectsSection = () => {
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  // ✅ Track mobile flip state
  const [flippedCard, setFlippedCard] = useState(null);

  const handleCardClick = (card) => {
    if (window.innerWidth <= 768) {
      setFlippedCard(flippedCard === card ? null : card);
    }
  };

  const projects = [
    {
      title: "Collaboration, not hierarchy",
      description: "Ideas can come from anywhere. We listen, challenge, and build together.",
      image: "https://images.unsplash.com/photo-1604210740327-dfd2dc1b2dc8?auto=format&fit=crop&w=800&q=80",
      
    },
    {
      title: "Courage to do it differently",
      description: "We’re not afraid to say no, challenge the brief, or take a different path. Means we do the work better.",
      image: "https://images.unsplash.com/photo-1522199873713-4f1117c1a9f8?auto=format&fit=crop&w=800&q=80",
      
    },
    {
      title: "Creativity with purpose",
      description: "For us, creativity isn’t just flair; it is zeal. Everything we create has a purpose to act upon",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    }
  ];
  
  const cards = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    name: `Card ${i + 1}`,
    image: "/sanjay.png",
  }));

  useEffect(() => {
    const container = containerRef.current;
    const updateScroll = () => setScrollY(container.scrollTop);
    const onScroll = () => window.requestAnimationFrame(updateScroll);

    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Seo
        title="Projects | Spark Tech Digital"
        description="Explore our recent digital marketing, branding, and web development projects delivered to satisfied clients."
      />

      {/* Projects Card Section */}
      <div
        ref={containerRef}
        className="h-screen w-screen overflow-y-scroll overflow-x-hidden text-[#f0c417] font-[Inter] relative pt-20"
      >
        <div className="sticky top-0 flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-12 max-w-7xl mx-auto py-6">
          {/* Text Block */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
              We’re not here to follow the digital crowd. We’re here to build
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

          {/* Card Stack */}
          <div className="relative w-full sm:w-[250px] md:w-[400px] h-[420px] sm:h-[400px]">
            {projects.map((project, index) => {
              const progress = scrollY / (window.innerHeight * 0.7);
              const visible = index <= progress;
              const offset = visible ? (index - progress) * 14 : 120;

              return (
                <div
                  key={index}
                  className="absolute w-full h-full bg-[#1b222b] rounded-2xl shadow-2xl p-5 flex flex-col justify-between transition-all"
                  style={{
                    transform: `translateY(${offset}px)`,
                    zIndex: index,
                    opacity: visible ? 1 : 0,
                  }}
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
                  <div></div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ height: `${projects.length * 90}vh` }} />
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
                title="CEO"
                handle="ram"
                status="Online"
                contactText="Contact Me"
                avatarUrl="/CEO1.png"
                showUserInfo={true}
                enableTilt={true}
                enableMobileTilt={false}
                onContactClick={() => console.log("Contact clicked")}
              />
            </div>

            {/* Founder Bio */}
            <div className="text-gray-300 text-base sm:text-xl leading-relaxed max-w-2xl text-center md:text-left md:ml-25">
              James Andrews is a visionary entrepreneur and the driving force
              behind Spark Tech. With a background in full-stack development and
              a knack for turning complex challenges into simple solutions, he
              has led the company to new heights. His leadership is built on
              innovation, integrity, and relentless focus on quality.
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
                <div className="absolute inset-0 bg-[#222b36] rounded-2xl shadow-lg flex items-center justify-center p-6 backface-hidden transition-all duration-500 group-hover:shadow-[0_0_40px_15px_#ffd700] group-hover:brightness-150">
                  <h3 className="text-[#f0c417] text-2xl font-bold">Our Vision</h3>
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
                <div className="absolute inset-0 bg-[#222b36]  rounded-2xl shadow-lg flex items-center justify-center p-6 backface-hidden transition-all duration-500 group-hover:shadow-[0_0_40px_15px_#ffd700] group-hover:brightness-120">
                  <h3 className="text-[#f0c417] text-2xl font-bold">Our Mission</h3>
                </div>
                {/* Back */}
                <div className="absolute inset-0 bg-[#1b1f29] rounded-2xl shadow-lg p-6 flex items-center justify-center backface-hidden rotate-y-180 transition-all duration-500 group-hover:shadow-[0_0_40px_15px_#ffd700] group-hover:brightness-120">
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
      <div className="max-w-6xl mx-auto text-center mt-20 px-4">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 mb-4">
          <span className="text-[#f0c417] text-xs font-black uppercase tracking-wide">
            Team Members
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
          Say Hello to Our Team
        </h2>
        
         <ManTeam/>
          <WebTeam />
          <EditTeam/>
       
      </div>

      <Footer />

    </>
  );
};

export default ProjectsSection;