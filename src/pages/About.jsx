import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";
import bannerImg from "../assets/banner.jpg";
import Seo from "../components/Seo";
import Footer from "../components/Footer";
const About = () => {
  const [isMissionOpen, setIsMissionOpen] = useState(false);
  const [isVisionOpen, setIsVisionOpen] = useState(false);

  const teamMembers = [
    {
      name: "Name 1",
      role: "Role 1",
      image: "",
      instagram: "https://instagram.com/your_profile_1",
      linkedin: "https://linkedin.com/in/your_profile_1",
    },
    {
      name: "Name 2",
      role: "Role 2",
      image: "",
      instagram: "https://instagram.com/your_profile_2",
      linkedin: "https://linkedin.com/in/your_profile_2",
    },
    {
      name: "Name 3",
      role: "Role 3",
      image: "",
      instagram: "https://instagram.com/your_profile_3",
      linkedin: "https://linkedin.com/in/your_profile_3",
    },
  ];

  return (
    <>
      <Seo
        title="About | Spark Tech Digital"
        description="Explore our recent digital marketing, branding, and web development projects delivered to satisfied clients."
      />

      <div className="min-h-screen bg-black text-white">
        {/* Banner Section */}
        <div className="relative rounded-3xl overflow-hidden w-full h-[250px] sm:h-[300px] md:h-[400px] max-w-[1400px] mx-auto my-6 md:my-10 shadow-xl bg-[#111]">
          <img
            src={bannerImg}
            alt="Spark Tech Banner"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0 pointer-events-none rounded-3xl"
            style={{ boxShadow: "inset 0 -80px 80px -10px rgba(0,0,0,0.7)" }}
          />
          <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-center px-4 py-6 sm:px-6 sm:py-10 bg-gradient-to-b from-transparent to-black/70">
            <h1 className="text-white text-xl sm:text-2xl md:text-4xl font-bold text-center leading-tight">
              Hey There! Welcome<br />
              to <span className="text-[#f0c417]">Spark Tech!</span>
            </h1>
          </div>
        </div>

        {/* About Section */}
        <section className="px-4 md:px-10 py-8 space-y-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#2B2B2B]">
            <span className="text-[#f0c417] text-xs font-black uppercase tracking-wide">
              Who Are We
            </span>
          </div>
          <h1 className="text-[#f0c417] text-3xl md:text-5xl font-bold">
            About our Company
          </h1>

          <div className="space-y-6">
            {/* Description */}
            <div className="bg-[#2B2B2B] p-4 md:p-6 rounded-2xl">
              <p className="text-gray-300 text-base md:text-xl leading-relaxed">
                <span className="font-bold text-white">At SPARKTECH,</span> we
                specialize in crafting innovative strategies that help brands
                connect with their audience and achieve measurable growth. Our
                expert team is dedicated to transforming ideas into results,
                turning clicks into loyal customers. Let us help you create a
                lasting digital presence and unlock your brand&apos;s full
                potential.
              </p>
            </div>

            {/* Mission */}
            <div
              onClick={() => setIsMissionOpen(!isMissionOpen)}
              className="cursor-pointer bg-[#232323] hover:bg-[#1f1f1f] transition rounded-2xl px-6 py-5 border border-[#333]"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg md:text-xl font-medium text-gray-200">
                  <span className="text-gray-400 font-mono mr-2">01.</span> Our
                  Mission
                </span>
                <span className="text-xl text-gray-400">
                  {isMissionOpen ? "-" : "+"}
                </span>
              </div>
              {isMissionOpen && (
                <p className="text-gray-400 mt-3 text-sm md:text-base">
                  Our mission is to deliver top-tier software and digital
                  solutions that empower businesses and enhance user experiences.
                </p>
              )}
            </div>

            {/* Vision */}
            <div
              onClick={() => setIsVisionOpen(!isVisionOpen)}
              className="cursor-pointer bg-[#232323] hover:bg-[#1f1f1f] transition rounded-2xl px-6 py-5 border border-[#333]"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg md:text-xl font-medium text-gray-200">
                  <span className="text-gray-400 font-mono mr-2">02.</span> Our
                  Vision
                </span>
                <span className="text-xl text-gray-400">
                  {isVisionOpen ? "-" : "+"}
                </span>
              </div>
              {isVisionOpen && (
                <p className="text-gray-400 mt-3 text-sm md:text-base">
                  We envision Spark Tech as a global leader in innovation, known
                  for transforming ideas into impactful digital realities.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="px-4 md:px-10 py-12 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Image */}
            <div className="w-full max-w-[220px] md:max-w-[280px] mx-auto">
              <div className="bg-[#f0c417] rounded-t-full w-full h-[260px] md:h-[320px]" />
              <img
                src=""
                alt="Leader"
                className="w-full -mt-12 md:-mt-16 rounded-t-full grayscale border-4 border-[#f0c417]"
              />
              <div className="text-center mt-4">
                <h3 className="text-xl md:text-2xl font-bold text-[#f0c417]">
                  Name
                </h3>
                <h3 className="text-xl md:text-2xl font-bold text-white -mt-1">
                  Here
                </h3>
              </div>
            </div>

            {/* Bio */}
            <div className="flex-1 bg-[#2B2B2B] rounded-2xl p-6 md:p-8 text-gray-300 text-sm md:text-base leading-relaxed mt-6 md:mt-0">
              Every brand has a story worth telling and I started Sparktech to help those stories spark action.
I come from a mix of tech and business — a B.Tech in IT, an MBA in Marketing from LIBA, and certifications in Cybersecurity, SAP, and Penetration Testing. That background gave me a simple perspective: creativity shines brightest when it’s backed by systems that are secure, scalable, and smart.
Before Spark Tech, I had the privilege of working with brands like BMW, creating IPL-themed campaigns and digital strategies that turned bold ideas into measurable results. Those experiences taught me that good marketing doesn’t shout — it connects.
For us, every campaign is personal. Every idea is sharpened by data. And every success belongs just as much to our clients as it does to us.

            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="px-4 md:px-10 py-12 max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#2B2B2B] mb-4">
              <span className="text-[#f0c417] text-xs font-black uppercase tracking-wide">
                Team Members
              </span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-white">
              Say Hello to Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="rounded-2xl shadow-xl bg-[#2B2B2B] p-6 flex flex-col items-center text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-36 md:w-32 md:h-44 object-cover rounded-xl mb-4"
                />
                <h4 className="text-lg md:text-xl font-semibold text-white">
                  {member.name}
                </h4>
                <p className="text-[#f0c417] text-sm md:text-base">
                  {member.role}
                </p>
                                <div className="flex gap-4 mt-4">
                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram
                      className="text-pink-500 hover:scale-110 transition"
                      size={20}
                    />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn
                      className="text-blue-600 hover:scale-110 transition"
                      size={20}
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default About;