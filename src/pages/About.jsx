import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import bannerImg from "../assets/banner.jpg";
import Seo from "../components/Seo";
import Footer from "../components/Footer";

const About = () => {
  const [isMissionOpen, setIsMissionOpen] = useState(false);
  const [isVisionOpen, setIsVisionOpen] = useState(false);

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

  const teamMembers = [
    {
      name: "Name 1",
      role: "Role 1",
      image: "",
      instagram: "https://instagram.com/your_profile_1",
      linkedin: "https://linkedin.com/in/your_profile_1",
    },
    {
      name: "Name 2",
      role: "Role 2",
      image: "",
      instagram: "https://instagram.com/your_profile_2",
      linkedin: "https://linkedin.com/in/your_profile_2",
    },
    {
      name: "Name 3",
      role: "Role 3",
      image: "",
      instagram: "https://instagram.com/your_profile_3",
      linkedin: "https://linkedin.com/in/your_profile_3",
    },
  ];

  return (
    <>
      <Seo
        title="About | Spark Tech Digital"
        description="Explore our recent digital marketing, branding, and web development projects delivered to satisfied clients."
      />

      <div className="min-h-screen bg-black text-white">
        {/* Banner Section - Increased Size */}
        <div className="relative rounded-[2.5rem] overflow-hidden w-[95%] h-[550px] sm:h-[700px] md:h-[850px] max-w-[1400px] mx-auto my-10 md:my-20 shadow-[0_0_50px_rgba(240,196,23,0.15)] bg-[#111] group">
          <img
            src={bannerImg}
            alt="Spark Tech Banner"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
          <div
            className="absolute inset-0 pointer-events-none rounded-[2.5rem]"
            style={{ boxShadow: "inset 0 -150px 150px -20px rgba(0,0,0,0.9)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent flex items-end justify-center px-6 py-16 sm:px-10 sm:py-24">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl text-center"
            >
              <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-black text-center leading-[1.1] drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
                Igniting <span className="text-[#f0c417]">Digital</span><br />
                Success <span className="text-white/40 font-light">Stories</span>
              </h1>
              <div className="mt-8 flex justify-center items-center gap-4">
                 <div className="h-px w-20 bg-yellow-400/50" />
                 <span className="text-yellow-400 font-bold uppercase tracking-[0.5em] text-xs md:text-sm">Welcome to Spark Tech</span>
                 <div className="h-px w-20 bg-yellow-400/50" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* About Section */}
        <section className="px-4 md:px-10 py-12 space-y-10 max-w-6xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
            <span className="text-[#f0c417] text-xs font-black uppercase tracking-widest">
              Who Are We
            </span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-[#f0c417] text-4xl md:text-6xl font-black leading-tight">
                Crafting the Future <br />
                <span className="text-white">of Digital Presence</span>
              </h2>
              
              {/* Description Card */}
              <div className="bg-[#1A1A1A] p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-yellow-400/10 transition-colors" />
                <p className="text-gray-300 text-xl md:text-2xl leading-relaxed font-medium">
                  <span className="font-black text-white text-2xl md:text-4xl block mb-6 border-l-4 border-yellow-400 pl-6">Sparking Innovation.</span>
                  At SPARKTECH, we specialize in crafting innovative strategies that help brands connect with their audience and achieve measurable growth.
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-10 lg:pt-20">
              {/* Mission */}
              <div
                onClick={() => setIsMissionOpen(!isMissionOpen)}
                className="cursor-pointer bg-[#111] hover:bg-[#1A1A1A] transition-all rounded-[1.5rem] px-8 py-6 border border-white/5 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl md:text-2xl font-bold text-gray-200 flex items-center gap-4">
                    <span className="text-yellow-400 opacity-40 group-hover:opacity-100 transition">01</span> 
                    Our Mission
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform ${isMissionOpen ? "rotate-45" : ""}`}>
                    <span className="text-xl text-yellow-400">+</span>
                  </div>
                </div>
                {isMissionOpen && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-gray-400 mt-6 text-lg leading-relaxed border-t border-white/5 pt-6"
                  >
                    Our mission is to deliver top-tier software and digital
                    solutions that empower businesses and enhance user experiences. We don't just build; we catalyze growth.
                  </motion.p>
                )}
              </div>

              {/* Vision */}
              <div
                onClick={() => setIsVisionOpen(!isVisionOpen)}
                className="cursor-pointer bg-[#111] hover:bg-[#1A1A1A] transition-all rounded-[1.5rem] px-8 py-6 border border-white/5 group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl md:text-2xl font-bold text-gray-200 flex items-center gap-4">
                    <span className="text-yellow-400 opacity-40 group-hover:opacity-100 transition">02</span> 
                    Our Vision
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform ${isVisionOpen ? "rotate-45" : ""}`}>
                    <span className="text-xl text-yellow-400">+</span>
                  </div>
                </div>
                {isVisionOpen && (
                  <motion.p 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-gray-400 mt-6 text-lg leading-relaxed border-t border-white/5 pt-6"
                  >
                    We envision Spark Tech as a global leader in innovation, known
                    for transforming ideas into impactful digital realities. We aim to be the spark that starts a revolution.
                  </motion.p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section - Unique 3D Animation */}
        <section className="px-4 md:px-10 py-24 max-w-7xl mx-auto overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* 3D Tilted Image Container */}
            <div className="perspective-1000 w-full max-w-[450px]">
              <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY }}
                className="group relative h-[500px] md:h-[650px] w-full rounded-[3rem] overflow-hidden bg-[#111] cursor-pointer shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] border border-white/10"
              >
                {/* Dynamic Spotlight Glow */}
                <motion.div 
                   className="absolute inset-0 pointer-events-none z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   style={{
                     background: "radial-gradient(circle at center, rgba(240,196,23,0.15) 0%, transparent 70%)",
                   }}
                />

                <img
                  src="" // Add leader image path
                  alt="Founder"
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-out scale-105 group-hover:scale-110"
                />

                {/* Floating Badge */}
                <div className="absolute top-8 right-8 z-40 bg-yellow-400 text-black px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest shadow-xl transform group-hover:translate-x-[-10px] group-hover:translate-y-[10px] transition-transform duration-500">
                  Leadership
                </div>

                {/* Glass Info Panel */}
                <div className="absolute bottom-8 left-8 right-8 z-40">
                  <div className="bg-black/40 backdrop-blur-3xl border border-white/20 rounded-[2rem] p-8 shadow-2xl relative overflow-hidden">
                     <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
                     <h3 className="text-3xl md:text-4xl font-black text-white">
                        Your <span className="text-[#f0c417]">Name</span>
                     </h3>
                     <p className="text-white/60 font-semibold tracking-[0.3em] text-xs uppercase mt-2">
                        Founder & Strategic Director
                     </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bio with Aesthetic Layout */}
            <div className="flex-1 space-y-12">
               <div className="relative group">
                  <div className="absolute -top-12 -left-12 text-[15rem] leading-none text-white/[0.03] font-serif select-none group-hover:text-yellow-400/[0.05] transition-colors duration-700">"</div>
                  
                  <div className="relative z-10 space-y-10">
                    <p className="text-gray-300 text-xl md:text-2xl leading-[1.8] font-light">
                      "Every brand has a story worth telling and I started <span className="text-white font-bold border-b-2 border-yellow-400/30">Sparktech</span> to help those stories spark action. 
                      I come from a mix of tech and business — a B.Tech in IT, an MBA in Marketing from LIBA, and certifications in Cybersecurity, SAP, and Penetration Testing. 
                      <br /><br />
                      That background gave me a simple perspective: <span className="text-[#f0c417] italic">creativity shines brightest</span> when it’s backed by systems that are secure, scalable, and smart."
                    </p>

                    <div className="flex items-center gap-8 group/sig">
                       <div className="w-20 h-[2px] bg-yellow-400 scale-x-50 group-hover/sig:scale-x-100 transition-transform origin-left duration-700" />
                       <div>
                          <p className="text-white font-black text-lg tracking-widest uppercase mb-1">Founder's vision</p>
                          <p className="text-yellow-400/50 text-xs font-bold uppercase tracking-widest">Bridging Innovation & Impact</p>
                       </div>
                    </div>
                  </div>
               </div>

               {/* Socials / Actions */}
               <div className="flex gap-6 pt-6">
                   <motion.div 
                     whileHover={{ y: -5 }}
                     className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all cursor-pointer"
                   >
                      <FaLinkedinIn size={24} />
                   </motion.div>
                   <motion.div 
                     whileHover={{ y: -5 }}
                     className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all cursor-pointer"
                   >
                      <FaInstagram size={24} />
                   </motion.div>
               </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="px-4 md:px-10 py-12 max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#2B2B2B] mb-4">
              <span className="text-[#f0c417] text-xs font-black uppercase tracking-wide">
                Team Members
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-white">
              Say Hello to Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="rounded-2xl shadow-xl bg-[#2B2B2B] p-6 flex flex-col items-center text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-36 md:w-32 md:h-44 object-cover rounded-xl mb-4"
                />
                <h4 className="text-lg md:text-xl font-semibold text-white">
                  {member.name}
                </h4>
                <p className="text-[#f0c417] text-sm md:text-base">
                  {member.role}
                </p>
                                <div className="flex gap-4 mt-4">
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram
                      className="text-pink-500 hover:scale-110 transition"
                      size={20}
                    />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn
                      className="text-blue-600 hover:scale-110 transition"
                      size={20}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default About;