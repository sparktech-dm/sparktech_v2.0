import photo1 from "../assets/team/IRAIYANBU.jpg";
import photo2 from "../assets/team/LOKESHWARAN.jpg";
import photo3 from "../assets/team/YUKESH_EDITOR.jpg";
import photo4 from "../assets/team/Vignesh.jpg";
import photo5 from "../assets/team/Ramu .jpg";
import photo6 from "../assets/team/YUKESH_EDITOR.jpg";
import photo7 from "../assets/team/dominic.jpg";




import React, { useEffect, useRef } from "react";

// 7 photos from public/images folder
const cards = [
  { id: 1, name: "Card 1", image: photo1 },
  { id: 2, name: "Card 2", image: photo2 },
  { id: 3, name: "Card 3", image: photo3 },
  { id: 4, name: "Card 4", image: photo4 },
  { id: 5, name: "Card 5", image: photo5 },
  { id: 6, name: "Card 6", image: photo6 },
  { id: 7, name: "Card 7", image: photo7 },
];

const HorizontalCylindricalCarousel = ({ cards }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    let frameId;
    let rotationY = 0;

    const rotate = () => {
      rotationY += 0.1; // slower speed for smooth rotation
      if (containerRef.current) {
        containerRef.current.style.transform = `perspective(1000px) rotateY(${rotationY}deg)`;
      }
      frameId = requestAnimationFrame(rotate);
    };

    rotate();

    return () => cancelAnimationFrame(frameId);
  }, []);

  const cardCount = cards.length;
  const theta = 360 / cardCount; // angle between cards
  const radius = 220; // distance from center

  return (
    <div className="w-96 h-56 mx-auto mt-40 overflow-visible">
      <div
        ref={containerRef}
        className="relative w-full h-full origin-center transition-transform"
        style={{ transformStyle: "preserve-3d" }}
      >
        {cards.map((card, i) => {
          const rotateY = i * theta;
          const translateZ = radius;

          return (
            <div
              key={card.id}
              className="absolute top-1/2 left-1/2 w-56 h-90 rounded-xl shadow-lg border border-gray-300 overflow-hidden cursor-pointer hover:scale-[1.05] transition-transform duration-300"
              style={{
                transform: `rotateY(${rotateY}deg) translateZ(${translateZ}px) translateY(-50%)`,
                backfaceVisibility: "hidden",
              }}
            >
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Use the carousel
const App = () => {
  return <HorizontalCylindricalCarousel cards={cards} />;
};

export default App;
