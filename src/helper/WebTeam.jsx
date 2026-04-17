import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../assets/team1/lokesh.webp";
import img2 from "../assets/team1/iraiyanbu.webp";
import img3 from "../assets/team1/vignesh.webp";
import img4 from "../assets/team1/sanjay.webp";

const TeamCard = ({ name, role, img }) => (
  <motion.div className="w-[300px] h-[475px] bg-white rounded-2xl shadow-xl overflow-hidden relative">
    <img src={img} alt={name} className="w-full h-full object-cover" />
    <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
      {name && <h3 className="text-xl font-bold text-white">{name}</h3>}
      {role && <p className="text-sm text-gray-200">{role}</p>}
    </div>
  </motion.div>
);

const TeamHoverGroup = () => {
  const [hovered, setHovered] = useState(false);

  const extraMembers = [
    { img: img3 },
    { img: img2 },
    { img: img1 },
    { img: img4 },
  ].slice(0, 4);

  const positions = [
    { x: -525, y: 0 },
    { x: -175, y: 0 },
    { x: 175, y: 0 },
    { x: 525, y: 0 },
  ];

  return (
    <div className="flex justify-center items-center my-8">
      <div
        className="relative flex justify-center items-center"
        style={{ minHeight: "475px" }} // exactly one card height
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <AnimatePresence>
          {!hovered && (
            <motion.div
              key="main"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, zIndex: 10 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <TeamCard
                // name="Main Lead"
                // role="Team Lead"
                img="./main img web devs.webp"
              />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {hovered &&
            extraMembers.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.2, y: 200, zIndex: -1 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: positions[idx].x,
                  y: positions[idx].y,
                  zIndex: 5,
                }}
                exit={{ opacity: 0, scale: 0.2, y: 200, zIndex: -1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute"
              >
                <TeamCard {...member} />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TeamHoverGroup;
