import React, { useEffect, useState } from "react";
import { scroller } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FiUsers, FiSmile, FiTrendingUp } from "react-icons/fi";
import { FaRocket } from "react-icons/fa";

/* ─────────────────────────────────────────────────────────────────────────────
   ANIMATED COUNTER
───────────────────────────────────────────────────────────────────────────── */
const Counter = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      const target = parseInt(value, 10);
      if (isNaN(target)) { setCount(value); return; }
      const startTime = performance.now();
      const updateCount = (currentTime) => {
        const elapsedTime = (currentTime - startTime) / 1000;
        if (elapsedTime < duration) {
          const progress = elapsedTime / duration;
          const easeOutProgress = progress * (2 - progress);
          setCount(Math.floor(easeOutProgress * target));
          requestAnimationFrame(updateCount);
        } else {
          setCount(target);
        }
      };
      requestAnimationFrame(updateCount);
    }
  }, [inView, value, duration]);

  const suffix = typeof value === "string" ? value.replace(/[0-9]/g, "") : "";
  return <span ref={ref} className="tabular-nums">{count}{suffix}</span>;
};

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN EXPORT — GROWING BRANDS
───────────────────────────────────────────────────────────────────────────── */
export default function GrowingBrands({
  yearsValue = "2",
  yearsText = "years of journey",
}) {
  const handleReachUsClick = () => {
    scroller.scrollTo("contact", { duration: 600, smooth: "easeInOutQuart" });
  };

  const stats = [
    { id: 1, value: yearsValue, label: yearsText, icon: <FiUsers className="w-10 h-10 text-yellow-400" /> },
    { id: 2, value: "50+", label: "Happy clients", icon: <FiSmile className="w-10 h-10 text-yellow-400" /> },
    { id: 3, value: "100+", label: "Projects", icon: <FaRocket className="w-10 h-10 text-yellow-400" /> },
    { id: 4, value: "20+", label: "Team members", icon: <FiTrendingUp className="w-10 h-10 text-yellow-400" /> },
  ];

  return (
    <div className="career-bg-pattern">

      {/* ── TRUSTED BY GROWING BRANDS ── */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden flex items-center justify-center border-t border-b border-zinc-900">
        <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

          {/* Left: heading + CTA */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <div className="relative inline-flex flex-col items-center lg:items-start">
              <span className="text-zinc-400 font-bold text-xs md:text-sm tracking-wider uppercase block mb-1 italic lg:not-italic">
                TRUSTED BY
              </span>
              <h2 className="text-5xl md:text-7xl font-extrabold leading-none tracking-tight flex flex-row flex-wrap justify-center lg:justify-start gap-x-3 gap-y-1">
                <span className="text-[#f0c417]">GROWING</span>
                <span className="text-white relative">BRANDS</span>
              </h2>
            </div>

            <p className="hidden lg:block text-zinc-400 text-base md:text-lg max-w-md pt-6 leading-relaxed">
              We partner with ambitious businesses to create powerful digital experiences that drive real results.
            </p>
            <p className="block lg:hidden text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl pt-4">
              We partner with ambitious businesses to create powerful digital experiences that drive real results.
              By combining strategic thinking, creative execution, and data-driven marketing, we help brands strengthen
              their online presence, engage their target audience, and achieve sustainable business growth.
            </p>

            <div className="pt-4">
              <button
                onClick={handleReachUsClick}
                className="flex items-center gap-4 px-6 py-3 rounded-full border border-[#f0c417]/40 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-[#f0c417] font-bold shadow-lg shadow-black/50 hover:border-[#f0c417] hover:shadow-[#f0c417]/10 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <span className="tracking-widest text-xs uppercase">REACH US</span>
                <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#f0c417] text-slate-950 group-hover:translate-x-1 transition-transform duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3.5 h-3.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Right: stats grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-x-8 gap-y-12 lg:gap-x-12 lg:gap-y-16 w-full mt-12 lg:mt-0">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: stat.id * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4"
              >
                <div className="p-2 rounded-lg bg-zinc-900/30 border border-zinc-800/40 shadow-inner flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="flex items-baseline gap-2 justify-center lg:justify-start">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                    <Counter value={stat.value} />
                  </span>
                  <span className="text-xs sm:text-sm md:text-base font-semibold text-zinc-300 tracking-wide">
                    {stat.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <LetsTalkSection />
      <WhyChooseUs />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────────────────────────────────────────── */
function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const inputBase = {
    background: "rgba(7, 7, 8, 0.4)",
    border: "1.5px solid #f0c417",
    borderRadius: "999px",
    color: "#fff",
    padding: "12px 20px",
    width: "100%",
    outline: "none",
    fontSize: "0.875rem",
    transition: "all 0.3s ease",
  };

  const labelStyle = {
    color: "#f0c417",
    fontSize: "0.95rem",
    fontWeight: "600",
    fontStyle: "italic",
    letterSpacing: "0.03em",
    display: "block",
    marginBottom: "8px",
    marginLeft: "12px",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      viewport={{ once: true }}
      style={{
        background: "linear-gradient(180deg, rgba(27,58,75,0.4) 0%, rgba(13,34,51,0.5) 60%, rgba(7,7,8,0.6) 100%)",
        border: "2px solid #f0c417",
        borderRadius: "32px",
        padding: "40px 32px",
        width: "100%",
        maxWidth: "460px",
        boxShadow: "0 12px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(240,196,23,0.1)",
        position: "relative",
        backdropFilter: "blur(12px)",
      }}
    >
      {submitted && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "absolute", inset: 0, borderRadius: "30px",
            background: "rgba(7,7,8,0.97)", display: "flex",
            flexDirection: "column", alignItems: "center",
            justifyContent: "center", zIndex: 10, gap: "12px",
          }}
        >
          <span style={{ fontSize: "2.5rem" }}>🎉</span>
          <p style={{ color: "#f0c417", fontWeight: "700", fontSize: "1.1rem" }}>Message Sent!</p>
          <p style={{ color: "#9ca3af", fontSize: "0.85rem" }}>We'll get back to you shortly.</p>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <label style={labelStyle} htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" type="text" value={formData.name} onChange={handleChange} required style={inputBase}
            onFocus={e => { e.target.style.boxShadow = "0 0 8px rgba(240,196,23,0.3)"; }}
            onBlur={e => { e.target.style.boxShadow = "none"; }} />
        </div>
        <div>
          <label style={labelStyle} htmlFor="contact-phone">Phone number</label>
          <input id="contact-phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} style={inputBase}
            onFocus={e => { e.target.style.boxShadow = "0 0 8px rgba(240,196,23,0.3)"; }}
            onBlur={e => { e.target.style.boxShadow = "none"; }} />
        </div>
        <div>
          <label style={labelStyle} htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" value={formData.email} onChange={handleChange} required style={inputBase}
            onFocus={e => { e.target.style.boxShadow = "0 0 8px rgba(240,196,23,0.3)"; }}
            onBlur={e => { e.target.style.boxShadow = "none"; }} />
        </div>
        <div>
          <label style={labelStyle} htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" rows="4" value={formData.message} onChange={handleChange}
            style={{ ...inputBase, borderRadius: "20px", resize: "none" }}
            onFocus={e => { e.target.style.boxShadow = "0 0 8px rgba(240,196,23,0.3)"; }}
            onBlur={e => { e.target.style.boxShadow = "none"; }} />
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "4px" }}>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, backgroundColor: "#f0c417", color: "#070708" }}
            whileTap={{ scale: 0.95 }}
            style={{
              border: "1.5px solid #f0c417", borderRadius: "999px",
              background: "transparent", color: "#f0c417",
              fontWeight: "700", fontSize: "0.9rem",
              fontStyle: "italic", letterSpacing: "0.15em",
              padding: "10px 48px", cursor: "pointer",
              transition: "background-color 0.2s, color 0.2s",
            }}
          >
            SUBMIT
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   LETS TALK SECTION  — fixed to match screenshot
   Left col: phone video (phonevideo.mp4) + tagline text
   Right col: contact form card
   Background: dark CSS dot-grid (no external video/image needed)
───────────────────────────────────────────────────────────────────────────── */
function LetsTalkSection() {
  return (
    <section
      name="contact"
      className="border-t border-zinc-900 relative overflow-hidden"
      style={{ background: "#07080a", minHeight: "680px" }}
    >
      {/* ── bg_rays.webp — covers full left half of section ── */}
      <div
        style={{
          position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none",
          backgroundImage: "url('/bg rays.webp')",
          backgroundSize: "50% 100%",
          backgroundPosition: "left top",
          backgroundRepeat: "no-repeat",
          opacity: 0.28,
          mixBlendMode: "screen",
        }}
      />
      {/* ── dark overlay ── */}
      <div style={{ position: "absolute", inset: 0, background: "rgba(7,7,8,0.72)", zIndex: 1, pointerEvents: "none" }} />

      {/* ── gold glow — upper right ── */}
      <div
        style={{
          position: "absolute", top: "-15%", right: "0%",
          width: "520px", height: "520px",
          background: "radial-gradient(circle, rgba(240,196,23,0.08) 0%, transparent 70%)",
          pointerEvents: "none", zIndex: 2,
        }}
      />

      {/* ── phone.webp — covers full left half, hangs from top ── */}
      <motion.img
        src="/phone.webp"
        alt="Hanging phone handset"
        animate={{ rotate: [-4, 4, -4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
        style={{
          position: "absolute",
          top: "35%",
          left: "5%",
          transformOrigin: "top center",
          width: "50%",
          maxWidth: "800px",
          minWidth: "320px",
          height: "auto",
          objectFit: "contain",
          zIndex: 5,
          filter: "drop-shadow(0 24px 64px rgba(0,0,0,0.95))",
        }}
      />

      {/* ── Main layout: three columns — phone zone | text center | form right ── */}
      <div className="relative w-full px-6 py-24 md:py-32" style={{ zIndex: 10 }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

          {/* COL 1: empty — phone sits here as absolute, just a spacer */}
          <div />

          {/* COL 2: tagline centered in middle */}
          <div className="select-none flex flex-col items-center text-center">
            <p
              className="text-white font-bold tracking-wide leading-none mb-2"
              style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.35rem)" }}
            >
              give us a
            </p>
            <h2
              className="text-[#f0c417] font-black leading-none"
              style={{
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                fontSize: "clamp(3.2rem, 8vw, 6rem)",
                textShadow: "0 4px 32px rgba(240,196,23,0.45)",
                lineHeight: 0.92,
              }}
            >
              Tring<br />Tring
            </h2>
            <p
              className="text-white font-bold tracking-wide leading-none mt-3 self-end"
              style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.35rem)" }}
            >
              let's talk
            </p>
          </div>

          {/* COL 3: contact form */}
          <div className="flex justify-center lg:justify-end w-full">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   WHY CHOOSE US — Question mark radial layout
───────────────────────────────────────────────────────────────────────────── */
function WhyChooseUs() {
  const reasons = [
    {
      id: 1,
      title: "-We're new; not naive",
      desc: "We may be starting fresh, but we come in with industry insight, lived experience, right",
      position: "top-left",
    },
    {
      id: 2,
      title: "-No jargon. Just results",
      desc: "We won't drown you in buzzwords. We'll show you what's working, what's not, and what's next.",
      position: "top-right",
    },
    {
      id: 3,
      title: "-Creative but commercially aware",
      desc: "We love bold ideas, but never lose sight of performance and ROI.",
      position: "mid-left",
    },
    {
      id: 4,
      title: "-Stories with spine",
      desc: "We create content that connects — not just with eyeballs, but with real emotion and action",
      position: "mid-right",
    },
    {
      id: 5,
      title: "-A win-win partnership",
      desc: "Our success is tied to yours. So, we put everything into building results that last beyond a campaign",
      position: "bot-left",
    },
    {
      id: 6,
      title: "-Data before drama",
      desc: "Our ideas are creative but are never random. We dig deep & analyse smart.",
      position: "bot-right",
    },
  ];

  const arrows = {
    "top-left": { x1: "42%", y1: "38%", x2: "28%", y2: "28%" },
    "top-right": { x1: "58%", y1: "38%", x2: "72%", y2: "28%" },
    "mid-left": { x1: "40%", y1: "50%", x2: "26%", y2: "50%" },
    "mid-right": { x1: "60%", y1: "50%", x2: "74%", y2: "50%" },
    "bot-left": { x1: "44%", y1: "62%", x2: "28%", y2: "72%" },
    "bot-right": { x1: "56%", y1: "62%", x2: "72%", y2: "72%" },
  };

  const cardStyle = {
    background: "linear-gradient(135deg, #1a3a4a 0%, #0d2233 100%)",
    border: "1.5px solid rgba(240,196,23,0.35)",
    borderRadius: "12px",
    padding: "18px 20px",
    position: "absolute",
    width: "220px",
    textAlign: "center",
  };

  const positions = {
    "top-left": { top: "2%", left: "0%" },
    "top-right": { top: "2%", right: "0%" },
    "mid-left": { top: "38%", left: "0%", transform: "translateY(-50%)" },
    "mid-right": { top: "38%", right: "0%", transform: "translateY(-50%)" },
    "bot-left": { bottom: "2%", left: "0%" },
    "bot-right": { bottom: "2%", right: "0%" },
  };

  return (
    <section className="py-24 md:py-32 px-6 border-t border-zinc-900 relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold leading-none tracking-tight">
            <span className="text-[#f0c417] italic">WHY </span>
            <span className="text-white font-black"> CHOOSE </span>
            <span className="text-[#f0c417] italic"> US</span>
          </h2>
        </motion.div>

        {/* Radial layout */}
        <div style={{ position: "relative", width: "100%", height: "680px", maxWidth: "900px", margin: "0 auto" }}>

          {/* SVG arrows */}
          <svg
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1, pointerEvents: "none" }}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L0,6 L6,3 z" fill="rgba(255,255,255,0.6)" />
              </marker>
            </defs>
            {Object.entries(arrows).map(([pos, pts]) => (
              <line
                key={pos}
                x1={pts.x1} y1={pts.y1}
                x2={pts.x2} y2={pts.y2}
                stroke="rgba(255,255,255,0.55)"
                strokeWidth="0.5"
                markerEnd="url(#arrowhead)"
              />
            ))}
          </svg>

          {/* Centre question mark */}
          <div style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)", zIndex: 2,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <motion.span
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              style={{
                fontSize: "clamp(100px, 14vw, 160px)",
                fontWeight: "900",
                color: "#f0c417",
                lineHeight: 1,
                fontFamily: "'Impact', 'Arial Black', sans-serif",
                userSelect: "none",
                display: "block",
              }}
            >
              ?
            </motion.span>
          </div>

          {/* Cards */}
          {reasons.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: item.id * 0.1 }}
              viewport={{ once: true }}
              style={{ ...cardStyle, ...positions[item.position], zIndex: 3 }}
            >
              <p style={{ color: "#f0c417", fontWeight: "700", fontStyle: "italic", fontSize: "0.88rem", marginBottom: "8px", lineHeight: 1.3 }}>
                {item.title}
              </p>
              <p style={{ color: "#e2e8f0", fontSize: "0.8rem", fontStyle: "italic", lineHeight: 1.55, margin: 0 }}>
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}