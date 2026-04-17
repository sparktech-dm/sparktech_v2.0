import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  const segments = [
    {
      number: "01",
      title: "Social Media Marketing",
      details:
        "Boost your brand presence across platforms with engaging strategies.",
      link: "/services/social-media-marketing",
    },
    {
      number: "02",
      title: "Lead Generation Systems",
      details: "Strategic funnels and capture mechanisms designed to turn strangers into qualified prospects.",
      link: "/services/content-creation",
    },
    {
      number: "03",
      title: "Website Development",
      details: "Modern, responsive, and scalable websites for your business.",
      link: "/services/website-development",
    },
    {
      number: "04",
      title: "Ad Creatives & Campaigns",
      details: "Data-driven advertising across major platforms to maximize ROI and scale brand reach.",
      link: "/services/video-editing",
    },
    {
      number: "05",
      title: "Automated Email Flows",
      details: "Smart sequence triggers that nurture leads and drive repeat business on autopilot.",
      link: "/services/email-marketing",
    },
    {
      number: "06",
      title: "Search Visibility & SEO",
      details:
        "Technical and content-based optimization to dominate organic search results.",
      link: "/services/seo",
    },
  ];

  return (
    <div className="relative min-h-screen text-white py-20 px-6 overflow-hidden">
      {/* Animated glowing background */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl top-20 left-10 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-16">
          Our <span className="text-yellow-300">Services</span>
        </h1>

        {/* Floating creative cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {segments.map((segment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                rotateX: 8,
                rotateY: -8,
                boxShadow: "0px 0px 40px rgba(255, 215, 0, 0.6)",
              }}
              onClick={() => navigate(segment.link)} // ✅ Navigate on click
              className="relative group bg-white/5 backdrop-blur-lg rounded-3xl p-8 overflow-hidden border border-white/10 shadow-2xl cursor-pointer"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 via-pink-400/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-100"></div>

              {/* Floating number watermark */}
              <span className="absolute -top-6 -right-4 text-8xl font-extrabold text-white/10 group-hover:text-yellow-400/20 transition">
                {segment.number}
              </span>

              {/* Content */}
              <h2 className="text-2xl font-bold mb-4 relative group-hover:text-yellow-300 transition">
                {segment.title}
              </h2>
              <p className="text-white/70 mb-6 relative z-10">
                {segment.details}
              </p>
              <span className="inline-block px-5 py-2 rounded-full bg-yellow-300 text-black font-semibold shadow-md group-hover:shadow-yellow-300/50 group-hover:bg-white transition">
                Learn More →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
