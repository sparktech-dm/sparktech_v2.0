import React from "react";
import { useNavigate } from "react-router-dom";

const ContentMarketing = () => {
  const navigate = useNavigate();

  return (
    <section className="px-6 py-20 max-w-5xl mx-auto text-white">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-[#f0c417]">
        Content Marketing
      </h1>
      <p className="mb-6 text-lg">
        Not all content is created equal. Some fill space. Ours fill minds.
      </p>
      <p className="mb-6 text-lg">
        We don’t just churn words — we craft narratives that inform, inspire,
        and move your audience to act.
      </p>

      {/* What We Do */}
      <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
      <div className="mb-6 space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-1">
            SEO Blogging & Long-Form Articles
          </h3>
          <p className="text-lg">
            We write to rank, but we also write to add value. Our blogs balance
            keyword depth with clarity, keeping both Google and your readers
            hooked.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-1">
            Web Copy & Landing Pages
          </h3>
          <p className="text-lg">
            Your website shouldn’t just exist — it should convert. We craft
            copy that’s sharp, persuasive, and built to generate action.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-1">
            Email Newsletters & Drip Sequences
          </h3>
          <p className="text-lg">
            We help you earn attention (and retention) with emails that actually
            get opened — and acted on.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-1">
            Thought Leadership & LinkedIn Content
          </h3>
          <p className="text-lg">
            Position your brand as a voice, not just a presence. We create
            thought-provoking posts that build credibility and connections.
          </p>
        </div>
      </div>

      {/* Why Brands Trust */}
      <h2 className="text-2xl font-semibold mb-4">
        Why Brands Trust Spark Tech with Their Content
      </h2>
      <ul className="list-disc list-inside mb-6 space-y-2 text-lg">
        <li>We focus on clarity, voice, and consistency across platforms.</li>
        <li>Our content doesn’t just inform — it influences.</li>
        <li>We merge creativity, SEO, and storytelling into one strategy.</li>
        <li>We use AI to accelerate quality — never dilute it.</li>
        <li>We know what to say — and when, where, and how to say it.</li>
      </ul>

      <p className="text-lg mb-6">
        Want content that doesn’t just exist — but performs, resonates, and
        evolves with your brand?
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/contact")}
          className="bg-[#f0c417] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#e1b514] transition"
        >
          Let’s write & iterate
        </button>
        <button
          onClick={() => navigate("/contact")}
          className="border border-[#f0c417] text-[#f0c417] px-6 py-3 rounded-lg font-semibold hover:bg-[#f0c417] hover:text-black transition"
        >
          Book a free consultation
        </button>
      </div>
    </section>
  );
};

export default ContentMarketing;