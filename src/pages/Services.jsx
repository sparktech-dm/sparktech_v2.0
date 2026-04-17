// src/pages/Services.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

// Import your overview (main services page)
import ServiceOverview from "./services-page/ServiceOverview";

// Import individual service detail pages
import Social from "./services-page/Social";
import Content from "./services-page/Content";
import Web from "./services-page/Web";
import Video from "./services-page/Video";
import Email from "./services-page/Email";
import Graph from "./services-page/Graph";
import Seo from "./services-page/Seo";

const Services = () => {
  return (
    <Routes>
      {/* /services — the overview page showing all service cards */}
      <Route path="/" element={<ServiceOverview />} />

      {/* /services/individual-path — detailed service pages */}
      <Route path="social-media-marketing" element={<Social />} />
      <Route path="content-creation" element={<Content/>} />
      <Route path="website-development" element={<Web />} />
      <Route path="video-editing" element={<Video />} />
      <Route path="email-marketing" element={<Email />} />
      <Route path="graphics-designing" element={<Graph/>} />
      <Route path="seo" element={<Seo/>} />
    </Routes>
  );
};

export default Services;
