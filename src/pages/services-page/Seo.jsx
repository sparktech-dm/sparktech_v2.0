import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Activity, Search, Globe, MapPin, Cpu, BarChart2 } from "lucide-react";

const SEO = () => {
  const navigate = useNavigate();

  const offerings = [
    { title: "Technical SEO", desc: "Speed, structure, and searchability — we get the backend right so the front end performs. We audit, fix, and fine-tune everything that makes search engines take notice.", icon: Activity },
    { title: "On-Page SEO", desc: "From keyword-rich original content to intelligent internal linking, we turn every page into a high-performing asset.", icon: Search },
    { title: "Off-Page SEO", desc: "With our white-hat on, we boost your authority with high-quality backlinks, digital PR, and link-building that earns trust and traffic.", icon: Globe },
    { title: "Local SEO", desc: "We help you show up and stand out in local searches, Google Maps, and hyper-local listings.", icon: MapPin },
    { title: "AI-Powered SEO", desc: "We use AI for keyword mapping, predictive ranking, and competitor analysis — so you’re always two steps ahead.", icon: Cpu },
    { title: "Search Engine Marketing (SEM)", desc: "We create and manage paid search campaigns that get actual results with no wasted ad spend. If SEO is the long game, SEM is your fast lane.", icon: BarChart2 },
  ];

  const reasons = [
    "We don’t believe in one-size-fits-all roadmaps.",
    "Every keyword is researched.",
    "We combine automation with human judgment.",
    "We track what matters — not vanity metrics.",
    "We care about your goals, not just your rankings.",
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
            Search Engine Optimization
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            SEO that <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0c417] to-amber-300">dominates.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-4">
            Every brand wants to rank. But not everyone knows why or how to make it stick.
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            We go beyond the surface-level SEO checklist. We build systems that search engines concede and users actually want to engage with.
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
            Here’s What We Bring to the Table
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <h2 className="text-2xl font-bold mb-8">Why Choose Spark Tech for SEO?</h2>
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
              SEO isn’t just about being found — <span className="text-[#f0c417]">it’s about being chosen.</span>
            </h3>
            <p className="text-gray-400 mb-10 text-lg">
              Let's craft an SEO strategy that not only reaches the top but stays there. Partner with us to scale your organic presence sustainably.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <button
                onClick={() => navigate("/contact")}
                className="flex items-center justify-center gap-2 bg-[#f0c417] text-black px-8 py-4 rounded-xl font-bold hover:bg-[#e1b514] hover:shadow-[0_0_20px_rgba(240,196,23,0.3)] transition-all duration-300"
              >
                Book an SEO consultation <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="flex items-center justify-center gap-2 border-2 border-[#f0c417]/50 text-[#f0c417] px-8 py-4 rounded-xl font-bold hover:bg-[#f0c417]/10 transition-all duration-300"
              >
                Get your free site audit
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SEO;