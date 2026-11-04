import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home, { GrowingBrands } from "./pages/Home";
import ChatBot from "./components/Chat";
import Top from "./components/Top";
import ScrollToTop from "./components/ScrollToTop";
import CanonicalTag from "./components/CanonicalTag";

// Route-level code splitting
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const BlogsPage = lazy(() => import("./components/Blogs"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const ContactForm1 = lazy(() => import("./components/ContactForm1"));
const Career = lazy(() => import("./pages/Career"));

const AppHome = () => (
  <>
    <section id="home" className="min-h-screen scroll-mt-24">
      <Home />
    </section>
    <GrowingBrands />
  </>
);

const App = () => {
  function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-lg">Page Not Found</p>
      </div>
    );
  }

  return (
    <div className="relative z-10 text-white overflow-x-clip min-h-screen bg-cover bg-center bg-fixed bg-black">
      <CanonicalTag />
      <Navbar />
      <ChatBot />
      <Top />
      <ScrollToTop />

      <Suspense fallback={<div className="min-h-screen bg-white" />}>
        <Routes>
          <Route path="/" element={<AppHome />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/blogs/:id" element={<BlogPost />} />
          <Route path="/services/*" element={<Services />} />
          <Route path="/contact" element={<ContactForm1 />} />
          <Route path="/career" element={<Career />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
