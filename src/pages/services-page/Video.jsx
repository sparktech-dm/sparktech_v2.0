import React from "react";
import { useNavigate } from "react-router-dom";

const Branding = () => {
  const navigate = useNavigate();

  return (
    <section className="px-6 py-20 max-w-5xl mx-auto text-white">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-[#f0c417]">Branding</h1>
      <p className="mb-6 text-lg">
        What you say matters. But how you say it? That’s our edge.
      </p>
      <p className="mb-6 text-lg">
        Your brand is more than a look. It’s a language. A feeling. A presence.
        At Spark Tech, we offer brand marketing services that bring all of it
        together.
      </p>

      {/* What We Offer */}
      <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
      <div className="mb-6 space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-1">
            Brand Discovery & Messaging
          </h3>
          <p className="text-lg">
            We help uncover your voice, values, and what sets you apart — then
            shape it into messaging that resonates.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-1">Brand Assets</h3>
          <p className="text-lg">
            Names, taglines, tone — we help you with the building blocks of how
            your brand shows up across platforms and minds.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-1">Rebranding</h3>
          <p className="text-lg">
            Whether you’re shifting direction or starting fresh, we lead
            rebrands that stay rooted in authenticity.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-1">Visual Identity Design</h3>
          <p className="text-lg">
            We bring meaning into visuals — from colour systems and logos to a
            cohesive, striking look and feel.
          </p>
        </div>
      </div>

      {/* Why Brands Trust */}
      <h2 className="text-2xl font-semibold mb-4">
        Why Brands Trust Spark Tech with Their Identity
      </h2>
      <ul className="list-disc list-inside mb-6 space-y-2 text-lg">
        <li>We begin with strategy — always.</li>
        <li>We craft brands that are both beautiful and bold.</li>
        <li>We care about what your audience feels, not just what they see.</li>
        <li>We build identities that evolve with you.</li>
        <li>We blend business logic with creative instinct.</li>
      </ul>

      <p className="text-lg mb-6">
        You don’t need to shout to stand out. You just need a brand that speaks
        with intention.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/contact")}
          className="bg-[#f0c417] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#e1b514] transition"
        >
          Let’s spark your brand
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

export default Branding;
