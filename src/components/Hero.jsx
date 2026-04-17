import React, { useRef } from "react";
import { scroller } from 'react-scroll';
import AboutUs from "./AboutUs";
import CurvedLoop from '../helper/CurvedLoop.jsx';


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
      <div className="text-center z-20 text-white/80 px-4 pt-40">
        <h1 className="text-4xl text-white/80 md:text-6xl font-bold leading-tight tracking-tight">
          Struggling to get {" "}
          <span className="inline-block bg-[#f0c417] text-black px-2 rotate-[-2deg]">
            consistent 
          </span>
          {" "} leads?
        </h1>
        <h1 className="text-5xl md:text-6xl text-white/80 font-bold leading-tight mt-2">
          We <span className="text-[#f0c417]">fix</span> that.
        </h1>
        {/* <p className="block text-2xl mt-2 text-white md:text-4xl leading-tight md:leading-snug">
          with more than just digital noise
          But DIGITAL GROWTH
        </p> */}

        <button
          ref={buttonRef}
          onClick={handleExploreClick}
          className=" mb-40  mt-4 md:mt-10 px-6 py-3 bg-[#f0c417]  text-white font-bold rounded-lg shadow-md"
        >
          Get More Leads for Your Business
        </button>
      </div>
    </div>
    <div className="h-40 overflow-hidden flex items-center justify-center bg-black">
  <CurvedLoop
    marqueeText="We build simple systems using ads, creatives, and funnels that actually convert ✦"
    speed={3}
    curveAmount={0}
    direction="left"
    interactive={false}
    className="custom-text-style sm:text-3xl text-8xl"
  />
</div>
</>
  );
};

export default Hero;
