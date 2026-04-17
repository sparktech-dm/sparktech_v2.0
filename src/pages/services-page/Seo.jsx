import React from "react";
import { useNavigate } from "react-router-dom";

const SEO = () => {
  const navigate = useNavigate();

  return (
    <section className="px-6 py-20 max-w-5xl mx-auto text-white">
      <h1 className="text-4xl font-bold mb-4 text-[#f0c417]">SEO</h1>
      <p className="mb-6 text-lg">
        Every brand wants to rank. But not everyone knows why or how to make it
        stick.
      </p>
      <p className="mb-6 text-lg">
        We go beyond the surface-level SEO checklist. We build systems that
        search engines concede and users actually want to engage with.
      </p>

      <h2 className="text-2xl font-semibold mb-4">
        Here’s What We Bring to the Table:
      </h2>

      <div className="mb-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-1">Technical SEO</h3>
          <p className="text-lg">
            Speed, structure, and searchability — we get the backend right so
            the front end performs. We audit, fix, and fine-tune everything that
            makes search engines take notice.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-1">On-Page SEO</h3>
          <p className="text-lg">
            From keyword-rich original content to intelligent internal linking,
            we turn every page into a high-performing asset.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-1">Off-Page SEO</h3>
          <p className="text-lg">
            With our white-hat on, we boost your authority with high-quality
            backlinks, digital PR, and link-building that earns trust and
            traffic.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-1">Local SEO</h3>
          <p className="text-lg">
            We help you show up and stand out in local searches, Google Maps,
            and hyper-local listings.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-1">AI-Powered SEO</h3>
          <p className="text-lg">
            We use AI for keyword mapping, predictive ranking, and competitor
            analysis — so you’re always two steps ahead.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-1">
            Search Engine Marketing (SEM)
          </h3>
          <p className="text-lg">
            We create and manage paid search campaigns that get actual results
            with no wasted ad spend. If SEO is the long game, SEM is your fast
            lane.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">
        Why Choose Spark Tech for SEO?
      </h2>
      <ul className="list-disc list-inside mb-6 space-y-2 text-lg">
        <li>We don’t believe in one-size-fits-all roadmaps.</li>
        <li>Every keyword is researched.</li>
        <li>We combine automation with human judgment.</li>
        <li>We track what matters — not vanity metrics.</li>
        <li>We care about your goals, not just your rankings.</li>
      </ul>

      <p className="text-lg mb-6">
        SEO isn’t just about being found — it’s about being chosen.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/contact")}
          className="bg-[#f0c417] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#e1b514] transition"
        >
          Book an SEO consultation
        </button>
        <button
          onClick={() => navigate("/contact")}
          className="border border-[#f0c417] text-[#f0c417] px-6 py-3 rounded-lg font-semibold hover:bg-[#f0c417] hover:text-black transition"
        >
          Get your free site audit
        </button>
      </div>
    </section>
  );
};

export default SEO;