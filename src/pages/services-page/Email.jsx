import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Zap, MailOpen, ShoppingBag, BarChart } from "lucide-react";

const EmailMarketing = () => {
  const navigate = useNavigate();

  const offerings = [
    { title: "Welcome Flows & Automations", desc: "Turn new subscribers into loyal customers with automated, perfectly-timed email sequences that build trust.", icon: Zap },
    { title: "Newsletter Management", desc: "Keep your audience engaged with high-quality, readable newsletters that provide value and drive consistent clicks.", icon: MailOpen },
    { title: "E-commerce Retention", desc: "Recover abandoned carts, encourage repeat purchases, and maximize customer lifetime value with targeted flows.", icon: ShoppingBag },
    { title: "Campaign Optimization", desc: "We track open rates, click-throughs, and conversions, A/B testing every variable to ensure peak performance.", icon: BarChart },
  ];

  const reasons = [
    "We don't just send emails, we build relationships.",
    "Deep segmentation for maximum relevance.",
    "Data-driven A/B testing on subject lines.",
    "Beautiful, responsive, and accessible templates.",
    "Deliverability strategies so you never hit the spam folder.",
  ];

  return (
    <div className="min-h-screen text-white relative overflow-hidden py-24 bg-black">
      {/* Background Orbs */}
      {/* <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-black rounded-full blur-[150px] opacity-10 pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-black rounded-full blur-[150px] opacity-10 pointer-events-none" /> */}

      <section className="px-6 max-w-6xl mx-auto relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#f0c417]/30 bg-[#f0c417]/10 text-[#f0c417] font-medium text-sm mb-6">
            Email Marketing
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Emails that <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f0c417] to-amber-300">convert.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-4">
            Campaigns that don't just land in inboxes, but actually get opened.
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            We turn subscribers into buyers with hyper-personalized, automated, and engaging email flows.
          </p>
        </motion.div>

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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/10 to-transparent border-2 border-white/20 p-10 rounded-3xl"
          >
            <h2 className="text-2xl font-bold mb-8">Why Choose Spark Tech for Email?</h2>
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
              Stop blasting audiences. Start <span className="text-[#f0c417]">building momentum.</span>
            </h3>
            <p className="text-gray-400 mb-10 text-lg">
              Unlock the highest ROI channel in digital marketing with a team that knows how to command the inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <button
                onClick={() => navigate("/contact")}
                className="flex items-center justify-center gap-2 bg-[#f0c417] text-black px-8 py-4 rounded-xl font-bold hover:bg-[#e1b514] hover:shadow-[0_0_20px_rgba(240,196,23,0.3)] transition-all duration-300"
              >
                Let’s talk email <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="flex items-center justify-center gap-2 border-2 border-[#f0c417]/50 text-[#f0c417] px-8 py-4 rounded-xl font-bold hover:bg-[#f0c417]/10 transition-all duration-300"
              >
                Request a free audit
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EmailMarketing;
