import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Search, Share2, MonitorPlay, ShoppingBag } from "lucide-react";

const PerformanceMarketing = () => {
  const navigate = useNavigate();

  const offerings = [
    { title: "Paid Search (Google Ads)", desc: "We craft high-intent campaigns on Google that drive traffic, leads, and real business results.", icon: Search },
    { title: "Paid Social (Meta, Instagram, LinkedIn, X)", desc: "From awareness to action, we create ads that interrupt without annoying. We target your audience for every stage of the sales funnel.", icon: Share2 },
    { title: "Programmatic Display & YouTube Ads", desc: "We smart target to run intelligent display and video campaigns that follow your audience across the web.", icon: MonitorPlay },
    { title: "eCommerce Ads", desc: "From Google Shopping to Meta Catalog and marketplace promotions, we help your store scale profitably.", icon: ShoppingBag },
  ];

  const reasons = [
    "We optimize beyond CTR — for real ROI.",
    "No copy-paste templates. Every campaign is custom-built.",
    "Creative, media, and analytics under one roof.",
    "We test, learn, and scale fast.",
    "Budgets are respected. Results are reported — transparently.",
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden py-24">
      {/* Background Orbs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#f0c417] rounded-full blur-[150px] opacity-10 pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#f0c417] rounded-full blur-[150px] opacity-10 pointer-events-none" />

      <section className="px-6 max-w-6xl mx-auto relative z-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#f0c417]/30 bg-[#f0c417]/10 text-[#f0c417] font-medium text-sm mb-6">
            Performance Marketing
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Marketing that <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0c417] to-amber-300">scales.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-4">
            No gut feelings. No spray-and-pray. Just data-backed strategies that scale.
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            We plan our performance marketing strategies the way it should be — focused, accountable, and deeply tied to your brand’s growth.
          </p>
        </motion.div>

        {/* Offerings Grid */}
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-10 text-center"
          >
            What We Do
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {offerings.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="bg-white/10 border-2 border-white/20 p-8 rounded-2xl hover:bg-white/20 hover:border-[#f0c417]/60 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#f0c417]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-[#f0c417]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-100">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Two Column Layout for Trust & CTA */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/10 to-transparent border-2 border-white/20 p-10 rounded-3xl"
          >
            <h2 className="text-2xl font-bold mb-8">Why Our Performance Marketing Works</h2>
            <ul className="space-y-4">
              {reasons.map((reason, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#f0c417] shrink-0 mt-0.5" />
                  <span className="text-gray-300">{reason}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-start lg:pl-10"
          >
            <h3 className="text-3xl font-bold mb-6">
              If your ads aren’t driving action, they’re just <span className="text-[#f0c417]">expensive noise.</span>
            </h3>
            <p className="text-gray-400 mb-10 text-lg">
              Let's put your budget to work with precision targeting and continuous optimization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <button
                onClick={() => navigate("/contact")}
                className="flex items-center justify-center gap-2 bg-[#f0c417] text-black px-8 py-4 rounded-xl font-bold hover:bg-[#e1b514] hover:shadow-[0_0_20px_rgba(240,196,23,0.3)] transition-all duration-300"
              >
                Let’s talk performance <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="flex items-center justify-center gap-2 border-2 border-[#f0c417]/50 text-[#f0c417] px-8 py-4 rounded-xl font-bold hover:bg-[#f0c417]/10 transition-all duration-300"
              >
                Request a free ad audit
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PerformanceMarketing;
