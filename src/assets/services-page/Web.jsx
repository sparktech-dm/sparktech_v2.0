import React from "react";

const Web = () => {
  return (
    <section className="px-6 py-50 max-w-5xl mx-auto text-white">
      <h1 className="text-4xl font-bold mb-4 text-[#f0c417]">Website Development</h1>
      <p className="mb-6 text-lg">
        Your website is your digital storefront. We design and develop modern, responsive, and high-performance websites that reflect your brand and deliver exceptional user experiences. From simple portfolios to dynamic web apps, we bring ideas to life with clean code and eye-catching design.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our Development Features:</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Mobile-first responsive design</li>
        <li>SEO-friendly architecture</li>
        <li>Custom CMS integration (WordPress, Headless CMS, etc.)</li>
        <li>Frontend frameworks like React, iVue, or Angular</li>
        <li>Speed and performance optimization</li>
      </ul>
      <p className="text-lg">
        We ensure your website not only looks good but also performs flawlessly to drive business growth.
      </p>
    </section>
  );
};

export default Web;