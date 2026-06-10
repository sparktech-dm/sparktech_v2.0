import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Calendar, Image, Users, Star, TrendingUp } from "lucide-react";

const SocialMediaMarketing = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(() => typeof window !== "undefined" ? window.innerWidth < 768 : false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const MotionDiv = isMobile ? "div" : motion.div;
  const MotionH2 = isMobile ? "h2" : motion.h2;

  const offerings = [
    { title: "Content Strategy & Planning", desc: "We don’t guess what to post — instead, we build a plan that resonates with your audience insights and brand tone, aligned with growth goals.", icon: Calendar },
    { title: "Content Creation", desc: "From punchy captions to powerful reels — our creative team builds content that cuts through the noise.", icon: Image },
    { title: "Social Media Management", desc: "We handle your social day-to-day — scheduling, community management, engagement, and optimizations.", icon: Users },
    { title: "Influencer Marketing", desc: "The right voices amplify the right message. We partner with influencers who fit your brand — not just follow counts.", icon: Star },
    { title: "Paid Social Integration", desc: "We align your content and ad strategy across Meta, LinkedIn, and other platforms to drive reach, clicks, and conversions.", icon: TrendingUp },
  ];

  const reasons = [
    "Strategy-first approach, not post-first panic",
    "Consistent brand voice across platforms",
    "Native content built for each platform’s culture",
    "Strong eye for design, storytelling, and timing",
    "Seamless integration with performance marketing",
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden py-24">
      {/* Background Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#f0c417] rounded-full blur-[150px] opacity-10 pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#f0c417] rounded-full blur-[150px] opacity-10 pointer-events-none" />

      <section className="px-6 max-w-6xl mx-auto relative z-20">
        {/* Header */}
        <MotionDiv
          {...(!isMobile && {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5 }
          })}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#f0c417]/30 bg-[#f0c417]/10 text-[#f0c417] font-medium text-sm mb-6">
            Social Media Marketing
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Social that <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0c417] to-amber-300">sparks.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-4">
            In a world of fleeting feeds, we make your social work smarter, not louder.
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            We bring clarity and creativity to your social presence — turning your platforms into brand-building machines.
          </p>
        </MotionDiv>

        {/* Offerings Grid */}
        <div className="mb-24">
          <MotionH2
            {...(!isMobile && {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: { once: true },
              transition: { duration: 0.5 }
            })}
            className="text-3xl font-bold mb-10 text-center"
          >
            What We Do
          </MotionH2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((item, idx) => (
              <MotionDiv
                key={idx}
                {...(!isMobile && {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { delay: idx * 0.1, duration: 0.5 }
                })}
                className="bg-gradient-to-b from-[#182335] to-[#0a0f18] border-2 border-[#f0c417] p-8 rounded-2xl md:hover:shadow-[0px_0px_15px_rgba(240,196,23,0.25)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f0c417]/10 flex items-center justify-center mb-6 md:group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-[#f0c417]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-100">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
              </MotionDiv>
            ))}
          </div>
        </div>

        {/* Two Column Layout for Trust & CTA */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <MotionDiv
            {...(!isMobile && {
              initial: { opacity: 0, x: -30 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 }
            })}
            className="bg-gradient-to-b from-[#182335] to-[#0a0f18] border-2 border-[#f0c417] p-10 rounded-3xl"
          >
            <h2 className="text-2xl font-bold mb-8">Why Brands Trust Spark Tech with Their Socials</h2>
            <ul className="space-y-4">
              {reasons.map((reason, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#f0c417] shrink-0 mt-0.5" />
                  <span className="text-gray-300">{reason}</span>
                </li>
              ))}
            </ul>
          </MotionDiv>

          <MotionDiv
            {...(!isMobile && {
              initial: { opacity: 0, x: 30 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 }
            })}
            className="flex flex-col items-start lg:pl-10"
          >
            <h3 className="text-3xl font-bold mb-6">
              With us, it’s not just about managing social media — it’s about creating <span className="text-[#f0c417]">lead magnets.</span>
            </h3>
            <p className="text-gray-400 mb-10 text-lg">
              Let's stop trying to keep up with trends and start setting them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <button
                onClick={() => navigate("/contact")}
                className="flex items-center justify-center gap-2 bg-[#f0c417] text-black px-8 py-4 rounded-xl font-bold hover:bg-[#e1b514] hover:shadow-[0_0_20px_rgba(240,196,23,0.3)] transition-all duration-300 cursor-pointer"
              >
                Let’s plan your content <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="flex items-center justify-center gap-2 border-2 border-[#f0c417]/50 text-[#f0c417] px-8 py-4 rounded-xl font-bold hover:bg-[#f0c417]/10 transition-all duration-300 cursor-pointer"
              >
                Book a free strategy call
              </button>
            </div>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaMarketing;