import React from "react";
import { useNavigate } from "react-router-dom";

const Web = () => {
  const navigate = useNavigate();

  return (
    <section className="px-6 py-20 max-w-5xl mx-auto text-white">
      <h1 className="text-4xl font-bold mb-4 text-[#f0c417]">
        Website Development
      </h1>
      <p className="mb-6 text-lg">
        Your website isn’t just where people land — it’s where they decide if
        they’ll stay.
      </p>

      <p className="mb-6 text-lg">
        At <span className="font-semibold">Spark Tech</span>, we offer website
        development services in Chennai that go beyond code and templates. We
        craft digital experiences that perform, persuade, and grow with your
        brand.
      </p>

      <h2 className="text-2xl font-semibold mb-4">What we offer</h2>

      <div className="mb-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-1">
            Website Strategy & UX Mapping
          </h3>
          <p className="text-lg">
            Before we build, we map — aligning user needs with brand goals to
            create journeys that work.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-1">
            Custom Website Design (UI/UX)
          </h3>
          <p className="text-lg">
            We create designs that don’t just look good but feel right.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-1">Website Development</h3>
          <p className="text-lg">
            From lightweight landing pages to robust sites — we build clean,
            scalable, optimised for speed, SEO-centric, and fully responsive
            websites.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">
        Why Brands Trust Spark Tech to Build Their Sites
      </h2>
      <ul className="list-disc list-inside mb-6 space-y-2 text-lg">
        <li>We think long-term — your site won’t just launch, it’ll last</li>
        <li>We blend design and functionality, not one over the other</li>
        <li>We build with SEO, performance, and user behaviour in mind</li>
        <li>We avoid cookie-cutter templates — every site is custom</li>
        <li>We collaborate closely to ensure every click counts</li>
      </ul>

      <p className="text-lg mb-6">
        Because your website isn’t just a presence. It’s proof of what your
        brand stands for.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/contact")}
          className="border border-[#f0c417] text-[#f0c417] px-6 py-3 rounded-lg font-semibold hover:bg-[#f0c417] hover:text-black transition"
        >
          Request a free ad audit
        </button>
      </div>
    </section>
  );
};

export default Web;
