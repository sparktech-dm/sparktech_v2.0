import React, { useRef, useState, useLayoutEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home, { GrowingBrands, WhyChooseUs, LetsTalkSection } from "./pages/Home";
import Services from "./pages/Services"; // make sure this page has nested <Routes>
import BlogsPage from "./components/Blogs";
import ProjectsSection from "./pages/ProjectsSection";
import ChatBot from "./components/Chat";
import Top from "./components/Top";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
window.THREE = THREE; // Required for Vanta effects
import ScrollToTop from "./components/ScrollToTop";
import ContactForm1 from "./components/ContactForm1";
import GlassCursor from "./components/GlassCursor";
import Career from "./pages/Career";
import { Faq } from "./components/Faq";
import Footer from "./components/Footer";




const AppHome = () => (
  <>
    <section id="home" className="min-h-screen scroll-mt-24">
      <Home />
    </section>
    <GrowingBrands />
    <WhyChooseUs />
    <LetsTalkSection />
    <section
      id="faq"
      className="career-bg-pattern min-h-screen scroll-mt-24 px-4 py-10 bg-[#0a0a0c]"
    >
      <Faq />
    </section>
    <section
      id="footer"
      className="career-bg-pattern px-4 py-10 bg-[#0a0a0c]"
    >
      <Footer />
    </section>
  </>
);

const App = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useLayoutEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      const effect = NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200,
        minWidth: 200,
        scale: 1.0,
        scaleMobile: 1,
        points: 6.0,
        maxDistance: 18.0,
        spacing: 20.0,
        color: 0xe1e0e0,
        backgroundColor: 0x666666,
      });

      setVantaEffect(effect);
      window.dispatchEvent(new Event("resize")); // fix initial canvas sizing
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-lg">Page Not Found</p>
      </div>
    );
  }

  return (
    <>
      {/* <div
        ref={vantaRef}
        className="fixed inset-0 w-screen h-screen -z-10 overflow-hidden"
      /> */}

      <div className="relative z-10 text-white overflow-x-hidden min-h-screen bg-cover bg-center bg-fixed bg-black">
        <GlassCursor />
        <Navbar />
        <ChatBot />
        <Top />
        <ScrollToTop />

        {/* <Wuc/> */}
        <Routes>
          <Route path="/" element={<AppHome />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/about" element={<ProjectsSection />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/services/*" element={<Services />} />
          <Route path="/contact" element={<ContactForm1 />} />
          <Route path="/career" element={<Career />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
