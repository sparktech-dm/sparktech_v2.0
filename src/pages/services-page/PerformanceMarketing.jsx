import React from "react";
import { useNavigate } from "react-router-dom";

const PerformanceMarketing = () => {
  const navigate = useNavigate();

  return (
    <section className="px-6 py-20 max-w-5xl mx-auto text-white">
      <h1 className="text-4xl font-bold mb-4 text-[#f0c417]">
        Performance Marketing
      </h1>
      <p className="mb-6 text-lg">
        No gut feelings. No spray-and-pray. Just data-backed strategies that
        scale.
      </p>
      <p className="mb-6 text-lg">
        We plan our performance marketing strategies the way it should be —
        focused, accountable, and deeply tied to your brand’s growth.
      </p>

      <h2 className="text-2xl font-semibold mb-4">What We Do</h2>

      <div className="mb-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-1">
            Paid Search (Google Ads)
          </h3>
          <p className="text-lg">
            We craft high-intent campaigns on Google that drive traffic, leads,
            and real business results.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-1">
            Paid Social (Meta, Instagram, LinkedIn, X)
          </h3>
          <p className="text-lg">
            From awareness to action, we create ads that interrupt without
            annoying. We target your audience for every stage of the sales
            funnel.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-1">
            Programmatic Display & YouTube Ads
          </h3>
          <p className="text-lg">
            We smart target to run intelligent display and video campaigns that
            follow your audience across the web.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-1">eCommerce Ads</h3>
          <p className="text-lg">
            From Google Shopping to Meta Catalog and marketplace promotions, we
            help your store scale profitably.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">
        Why Our Performance Marketing Works
      </h2>
      <ul className="list-disc list-inside mb-6 space-y-2 text-lg">
        <li>We optimize beyond CTR — for real ROI.</li>
        <li>No copy-paste templates. Every campaign is custom-built.</li>
        <li>Creative, media, and analytics under one roof.</li>
        <li>We test, learn, and scale fast.</li>
        <li>Budgets are respected. Results are reported — transparently.</li>
      </ul>

      <p className="text-lg mb-6">
        If your ads aren’t driving action, they’re just expensive noise.
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => navigate("/contact")}
          className="bg-[#f0c417] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#e1b514] transition"
        >
          Let’s talk performance
        </button>
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

export default PerformanceMarketing;
