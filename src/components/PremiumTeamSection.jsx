import React from "react";
import { motion } from "framer-motion";

// Importing team member images based on confirmed available assets
import Sanjay from "../assets/team/Sanjay.jpeg";
import Yukesh from "../assets/team/yukesh.png";
import Yashwanth from "../assets/team/yash.png";
import Dominic from "../assets/team/Domnic.png";
import Varshini from "../assets/team/varshini.png";
import Nivethika from "../assets/team/nivethika.png";
import Pertisha from "../assets/team/pertisha.webp";

const teamMembers = [
  {
    id: 1,
    name: "Sanjay.S",
    role: "Senior Web Developer",
    image: Sanjay,
    description: "Architecting scalable and beautiful web experiences.",
  },
  {
    id: 2,
    name: "Domnic",
    role: "Senior Video Editor",
    image: Dominic,
    description: "Crafting visual stories that stop the scroll.",
  },
  {
    id: 3,
    name: "Yukesh",
    role: "Senior Video Editor",
    image: Yukesh,
    description: "Bringing creative visions to life through motion.",
  },
  {
    id: 4,
    name: "Yashwanth Vijay",
    role: "HR Professional",
    image: Yashwanth,
    description: "Fostering a culture of growth and collaboration.",
  },
  {
    id: 5,
    name: "Nivethika",
    role: "UI/UX Designer",
    image: Nivethika,
    description: "Designing intuitive interfaces that users love.",
  },
  {
    id: 6,
    name: "Varshini",
    role: "Content Creator",
    image: Varshini,
    description: "Writing words that connect, engage, and convert.",
  },
  {
    id: 7,
    name: "Pertisha E J",
    role: "Finance & HR",
    image: Pertisha,
    description: "Ensuring numbers align with our creative ambitions.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const TeamCardContent = ({ member, isMobile }) => (
  <>
    {/* Background Image */}
    <div className="absolute inset-0 w-full h-full">
      <img
        src={member.image}
        alt={member.name}
        className={`w-full h-full object-cover filter transition-all duration-700 ease-in-out transform group-hover:scale-110 ${isMobile ? "grayscale-0" : "grayscale-[60%] group-hover:grayscale-0"}`}
      />
    </div>
    
    {/* Gradients for text visibility */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
    
    {/* Hover Glow Effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
      <div className="absolute -inset-0.5 bg-gradient-to-tr from-[#f0c417]/40 to-transparent blur-2xl"></div>
    </div>

    {/* Content Container */}
    <div className={`absolute bottom-0 left-0 w-full p-4 flex flex-col justify-end transition-transform duration-500 ease-out ${isMobile ? "translate-y-0" : "translate-y-6 group-hover:translate-y-0"}`}>
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl overflow-hidden relative">
        {/* Glass reflection */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <h3 className="text-xl md:text-2xl font-bold text-white mb-1 drop-shadow-md relative z-10">
          {member.name}
        </h3>
        <p className="text-[#f0c417] text-xs md:text-sm font-semibold tracking-wider uppercase mb-2 relative z-10">
          {member.role}
        </p>
        
        {isMobile ? (
          <p className="text-gray-300 text-xs leading-relaxed transition-all duration-500 ease-in-out relative z-10">
            {member.description}
          </p>
        ) : (
          <motion.p 
            initial={{ opacity: 0, height: 0 }}
            whileHover={{ opacity: 1, height: "auto" }}
            className="text-gray-300 text-sm leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-[100px] transition-all duration-500 ease-in-out relative z-10"
          >
            {member.description}
          </motion.p>
        )}
      </div>
    </div>
    
    {/* Card Border Highlight */}
    <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-[2rem] transition-colors duration-500 pointer-events-none"></div>
  </>
);

const PremiumTeamSection = () => {
  return (
    <div className="w-full overflow-hidden pb-4">
      
      {/* --- DESKTOP VIEW --- */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="hidden md:flex flex-wrap justify-center gap-8 no-scrollbar"
      >
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            variants={itemVariants}
            className="group relative flex-none w-[calc(50%-16px)] md:w-[calc(33.333%-22px)] lg:w-[calc(25%-24px)] h-[440px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg"
          >
            <TeamCardContent member={member} isMobile={false} />
          </motion.div>
        ))}
      </motion.div>

      {/* --- MOBILE VIEW: RUNNING CARDS --- */}
      <div className="md:hidden relative w-[100vw] left-[50%] -ml-[50vw] pt-6 pb-12 mb-8">
        <style>{`
          @keyframes infiniteScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 12px)); }
          }
          .animate-infinite-scroll {
            animation: infiniteScroll 40s linear infinite;
            width: max-content;
          }
        `}</style>
        
        {/* Subtle gradient fades on the sides for a seamless loop effect */}
        <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />
        
        <div className="flex animate-infinite-scroll hover:[animation-play-state:paused] active:[animation-play-state:paused] gap-6 pl-6">
          {[...teamMembers, ...teamMembers].map((member, idx) => {
            const isTiltedRight = idx % 2 === 0;
            return (
              <div
                key={`${member.id}-${idx}`}
                className={`group relative flex-none w-[240px] h-[340px] rounded-3xl overflow-hidden shadow-2xl transition-transform duration-300
                ${isTiltedRight ? "rotate-2 -translate-y-2" : "-rotate-2 translate-y-2"}
                `}
              >
                <TeamCardContent member={member} isMobile={true} />
              </div>
            );
          })}
        </div>
      </div>
    
    </div>
  );
};

export default PremiumTeamSection;
