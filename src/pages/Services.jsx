// src/pages/Services.jsx
import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";

// Overview page
const ServiceOverview = lazy(() => import("./services-page/ServiceOverview"));

// Individual service detail pages
const Social = lazy(() => import("./services-page/Social"));
const Content = lazy(() => import("./services-page/Content"));
const Web = lazy(() => import("./services-page/Web"));
const Video = lazy(() => import("./services-page/Video"));
const Email = lazy(() => import("./services-page/Email"));
const Graph = lazy(() => import("./services-page/Graph"));
const Seo = lazy(() => import("./services-page/Seo"));

const Services = () => {
  return (
    <div className="bg-[#ffffff] min-h-screen flex flex-col justify-between pt-24">
      <div className="w-full flex-grow">
        <Suspense fallback={<div className="min-h-[60vh] bg-white" />}>
          <Routes>
            {/* /services — the overview page showing all service cards */}
            <Route path="/" element={<ServiceOverview />} />

            {/* /services/individual-path — detailed service pages */}
            <Route path="social-media-marketing" element={<Social />} />
            <Route path="content-creation" element={<Content />} />
            <Route path="website-development" element={<Web />} />
            <Route path="video-editing" element={<Video />} />
            <Route path="email-marketing" element={<Email />} />
            <Route path="graphics-designing" element={<Graph />} />
            <Route path="seo" element={<Seo />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
