import React from "react";
import { useNavigate } from "react-router-dom";

const SocialMediaMarketing = () => {
  const navigate = useNavigate();

  return (
    <section className="px-6 py-20 max-w-5xl mx-auto text-white">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-[#f0c417]">
        Social Media Marketing
      </h1>
      <p className="mb-6 text-lg">
        In a world of fleeting feeds, we make your social work smarter, not
        louder.
      </p>
      <p className="mb-6 text-lg">
        We bring clarity and creativity to your social presence — turning your
        platforms into brand-building machines.
      </p>

      {/* What We Do Section */}
      <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
      <div className="mb-6 space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-1">
            Content Strategy & Planning
          </h3>
          <p className="text-lg">
            We don’t guess what to post — instead, we build a plan that resonates
            with your audience insights and brand tone, aligned with growth goals.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-1">Content Creation</h3>
          <p className="text-lg">
            From punchy captions to powerful reels — our creative team builds
            content that cuts through the noise.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-1">Social Media Management</h3>
          <p className="text-lg">
            We handle your social day-to-day — scheduling, community management,
            engagement, and optimizations.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-1">Influencer Marketing</h3>
          <p className="text-lg">
            The right voices amplify the right message. We partner with
            influencers who fit your brand — not just follow counts.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-1">Paid Social Integration</h3>
          <p className="text-lg">
            We align your content and ad strategy across Meta, LinkedIn, and
            other platforms to drive reach, clicks, and conversions.
          </p>
        </div>
      </div>

      {/* Why Brands Trust */}
      <h2 className="text-2xl font-semibold mb-4">
        Why Brands Trust Spark Tech with Their Socials
      </h2>
      <ul className="list-disc list-inside mb-6 space-y-2 text-lg">
        <li>Strategy-first approach, not post-first panic</li>
        <li>Consistent brand voice across platforms</li>
        <li>Native content built for each platform’s culture</li>
        <li>Strong eye for design, storytelling, and timing</li>
        <li>Seamless integration with performance marketing</li>
      </ul>

      <p className="text-lg mb-6">
        With us, it’s not just about managing social media — it’s about creating
        lead magnets.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/contact")}
          className="bg-[#f0c417] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#e1b514] transition"
        >
          Let’s plan your content
        </button>
        <button
          onClick={() => navigate("/contact")}
          className="border border-[#f0c417] text-[#f0c417] px-6 py-3 rounded-lg font-semibold hover:bg-[#f0c417] hover:text-black transition"
        >
          Book a free strategy call
        </button>
      </div>
    </section>
  );
};

export default SocialMediaMarketing;