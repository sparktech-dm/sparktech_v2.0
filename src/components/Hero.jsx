import React, { useRef } from "react";
import { scroller } from 'react-scroll';
import AboutUs from "./AboutUs";
import CurvedLoop from '../helper/CurvedLoop.jsx';
import img from "../assets/Wed_train.webp";
import Shuffle from '../helper/ShuffleText';


const Hero = () => {
  const buttonRef = useRef(null);

  const handleExploreClick = () => {
    // Bounce animation logic
    const btn = buttonRef.current;
    btn.classList.remove('bounce-once');      // Reset if already animating
    void btn.offsetWidth;                     // Force reflow to reset animation
    btn.classList.add('bounce-once');         // Add bounce animation

    scroller.scrollTo("contact", {
      duration: 600,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <div className="relative w-screen  h-screen overflow-hidden bg-black flex items-center justify-center">
        {/* Background Video for Desktop */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden sm:block absolute top-0 left-0 w-full h-full object-cover object-center z-0 "
        >
          <source src="/Intor.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>




        {/* Background Video for Mobile (optional) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="block sm:hidden absolute top-0 left-0 w-full h-full object-cover object-center z-0"
        >
          <source src="/Intor2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional: Dark overlay for readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

        {/* Content */}
        <div className="text-center z-20 text-white/80 px-4">
          {/* <Shuffle
            text="SPARK TECH"
            className="absolute top-[10%] left-1/2 -translate-x-1/2 z-20 font-bold text-5xl md:text-7xl mt-20 text-white"
            style={{ fontFamily: "BitcountPropDoubleInk" }}
            shuffleDirection="right"
            duration={0.35}
            animationMode="evenodd"
            shuffleTimes={1}
            ease="power3.out"
            stagger={0.03}
            threshold={0.1}
            triggerOnce={true}
            triggerOnHover
            respectReducedMotion={true}
            loop={false}
            loopDelay={0}
          /> */}
          <h1 className="text-5xl text-white/80 md:text-7xl font-bold leading-tight tracking-tight mt-40">
            We are the{" "}
            <span className="inline-block bg-[#f0c417] text-black px-2 rotate-[-2deg]">
              digital
            </span>
          </h1>
          <h1 className="text-5xl md:text-7xl text-white/80 font-bold leading-tight mt-2">
            Marketing <span className="text-[#f0c417]">Agency</span> in Chennai
          </h1>
          {/* <p className="block text-2xl mt-2 text-white/50 md:text-4xl leading-tight md:leading-snug">
          with more than just digital noise<br />
          But DIGITAL GROWTH
        </p> */}

          <button
            ref={buttonRef}
            onClick={handleExploreClick}
            className=" mb-40  mt-4 md:mt-10 px-6 py-3 bg-[#f0c417]  text-white font-bold rounded-lg shadow-md"
          >
            Explore
          </button>
        </div>
      </div>
      <div className="h-40 overflow-hidden flex items-center justify-center bg-gradient-to-b from-[#000000] to-[#1D4065]">
        <CurvedLoop
          image={img}
          width={1500}
          height={300}
          speed={2}
          direction="left"
        />





      </div>

    </>
  );
};

export default Hero;