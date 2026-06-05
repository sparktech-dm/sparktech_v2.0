// src/pages/Career.jsx
import React, { useState } from "react";
import { 
  Calendar, 
  Clock, 
  Award, 
  Search, 
  User, 
  Mail, 
  Phone, 
  MessageSquare, 
  Upload 
} from "lucide-react";
import Footer from "../components/Footer";

const SERVICES = [
  {
    id: "ui-ux-designer",
    name: "UI/UX Designer",
    description: "Design intuitive and beautiful user interfaces and experiences for websites and web applications. Conduct user research, build wireframes, prototype flows, and collaborate closely with developers to craft seamless digital products.",
    experience: "1 - 3 Years",
    location: "Chennai (On-site)",
    responsibilities: [
      "Create user-centered designs by understanding business requirements and user feedback.",
      "Design wireframes, user journeys, and mockups optimized for a wide range of devices.",
      "Develop interactive prototypes in Figma or Adobe XD to demonstrate interaction flows."
    ],
    requirements: [
      "Proven experience as a UI/UX Designer with a strong portfolio of design projects.",
      "Proficient in Figma, Adobe XD, Photoshop, and Illustrator.",
      "Strong understanding of visual design principles, typography, color theory, and layout."
    ]
  },
  {
    id: "web-developer",
    name: "Web Developer",
    description: "Develop and maintain high-performance, responsive websites and web applications. Implement modern front-end technologies (React, Vite, Tailwind CSS) and ensure smooth transitions, pixel-perfect layouts, and top-tier load speeds.",
    experience: "1 - 3 Years",
    location: "Chennai (On-site)",
    responsibilities: [
      "Build clean, maintainable, and interactive front-end components using React and Vite.",
      "Ensure cross-browser compatibility and responsive design across mobile, tablet, and desktop.",
      "Collaborate with designers to implement pixel-perfect user interfaces and micro-animations."
    ],
    requirements: [
      "Proven work experience as a Web Developer or Front-End Developer.",
      "Strong proficiency in JavaScript, React, HTML5, CSS3, and Tailwind CSS.",
      "Familiarity with Git/GitHub, package managers (npm), and build tools like Vite."
    ]
  },
  {
    id: "content-creator",
    name: "Content Creator",
    description: "Produce highly engaging digital content across social platforms, blogs, and email marketing campaigns. Research trends, write persuasive copy, generate graphic ideas, and execute content plans that build audience engagement.",
    experience: "1 - 2 Years",
    location: "Chennai (On-site)",
    responsibilities: [
      "Develop and schedule content calendars for LinkedIn, Instagram, and Facebook.",
      "Write engaging copy for social media posts, blog headers, and marketing emails.",
      "Monitor trending topics and adapt them to brand messaging."
    ],
    requirements: [
      "Proven portfolio of social media content creation, blog posts, or marketing campaigns.",
      "Excellent written and verbal communication skills in English.",
      "Basic design awareness and experience using Canva or similar tools."
    ]
  },
  {
    id: "video-editor",
    name: "Video Editor",
    description: "Edit and assemble raw video footage into highly engaging Reels, YouTube shorts, promotional videos, and advertisements. Apply professional transitions, color grading, sound design, and text graphics to elevate the content.",
    experience: "1 - 3 Years",
    location: "Chennai (On-site)",
    responsibilities: [
      "Trim and assemble footage into short-form content (Reels, TikToks, Shorts) and long-form videos.",
      "Incorporate typography, motion graphics, audio mixing, and sound effects.",
      "Ensure visual brand consistency and export videos in optimized formats."
    ],
    requirements: [
      "Strong portfolio showing professional video editing work (specifically short-form Reels).",
      "Proficiency in Premiere Pro, After Effects, DaVinci Resolve, or Final Cut Pro.",
      "A solid sense of rhythm, timing, pacing, and modern editing trends."
    ]
  },
  {
    id: "ads-analyst",
    name: "Meta & Google Ads Analyst",
    description: "Plan, execute, and monitor paid marketing campaigns across Meta (Facebook & Instagram) and Google Ads platforms. Track metrics, manage daily budgets, set up retargeting funnels, and optimize layouts to scale conversions.",
    experience: "2 - 4 Years",
    location: "Chennai (On-site)",
    responsibilities: [
      "Set up, run, and optimize paid traffic campaigns on Meta Ads Manager and Google Ads.",
      "Analyze key metrics (CTR, CPC, CPA, ROAS) and compile performance dashboards.",
      "Conduct audience targeting research and set up tracking pixels/conversions."
    ],
    requirements: [
      "Proven track record of managing profitable Meta and Google campaigns.",
      "Strong analytical skills and hands-on experience with GA4 (Google Analytics).",
      "Google Ads and Meta Blueprint certifications are a big plus."
    ]
  },
  {
    id: "graphic-designer",
    name: "Graphic Designer",
    description: "Create stunning visual identities, marketing materials, social media creatives, and digital assets. Develop cohesive layouts that represent the brand's voice and grab potential clients' attention.",
    experience: "1 - 3 Years",
    location: "Chennai (On-site)",
    responsibilities: [
      "Design high-converting social media posts, display ads, banners, and brochures.",
      "Collaborate with the content team to turn marketing concepts into powerful visuals.",
      "Maintain brand guidelines across all digital and print mediums."
    ],
    requirements: [
      "Proven design experience supported by a strong digital design portfolio.",
      "Expert knowledge of Photoshop, Illustrator, and Figma.",
      "Excellent attention to detail and strong creative layout skills."
    ]
  }
];

export default function Career() {
  const [query, setQuery] = useState("");
  const [selectedServiceId, setSelectedServiceId] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    message: "",
    resume: null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const filteredServices = SERVICES.filter(svc =>
    svc.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleServiceSelect = (id) => {
    setSelectedServiceId(id);
    setFormData(prev => ({ ...prev, role: id }));
  };

  const handleDropdownChange = (e) => {
    const value = e.target.value;
    setSelectedServiceId(value);
    setFormData(prev => ({ ...prev, role: value }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        role: "",
        message: "",
        resume: null
      });
      setSelectedServiceId("");
    }, 4000);
  };

  const currentService = SERVICES.find(s => s.id === selectedServiceId);

  return (
    <div className="w-full min-h-screen career-bg-pattern text-white font-inter px-8 py-16 pt-32 pb-16 flex flex-col items-center relative box-border">
      {/* Centered Yellow Title */}
      <div className="w-full max-w-[1200px] text-center mb-16">
        <h1 className="font-inter font-extrabold text-3xl md:text-5xl lg:text-7xl text-brand-yellow tracking-[0.02em] m-0 leading-none">Career</h1>
      </div>

      <div className="w-full max-w-[1200px] flex flex-col gap-14">
        
        {/* TOP SECTION: Intro Info (Why Join, What we look for, Job info) - kept stacked as original */}
        <div className="flex flex-col gap-11">
          {/* Section 1: Why Join */}
          <div className="flex flex-col gap-5">
            <h2 className="font-bebas text-[2.4rem] font-normal text-brand-yellow m-0 tracking-[0.03em] leading-[1.15]">
              Why Join Sparktech Digital Marketing Team?
            </h2>
            <p className="text-[1.05rem] leading-[1.8] font-light italic text-white/90 m-0 tracking-[0.01em]">
              Looking for digital marketing jobs in Chennai? Sparktech is hiring dynamic, growth-oriented professionals who are ready to work on exciting projects for national and international clients. Whether you're an entry-level executive or a senior marketing strategist, we have a role for you. Sparktech is a performance-driven digital marketing agency based in Chennai. We specialize in using AI, data analytics, and precision-targeting to drive results. As part of our team, you'll work on Meta ads, Google campaigns, SEO projects, influencer marketing, and more.
            </p>
          </div>

          {/* Section 2: What We Look For */}
          <div className="flex flex-col gap-5">
            <h2 className="font-bebas text-[2.4rem] font-normal text-brand-yellow m-0 tracking-[0.03em] leading-[1.15]">
              What We Look For in Candidates
            </h2>
            <ul className="list-none p-0 m-0 flex flex-col gap-3.5">
              <li className="relative pl-6 text-[1.05rem] italic font-light leading-normal text-white/90 before:content-['•'] before:absolute before:left-0 before:text-white before:text-2xl before:leading-[1.1]">Hands-on experience in digital marketing agency and tools</li>
              <li className="relative pl-6 text-[1.05rem] italic font-light leading-normal text-white/90 before:content-['•'] before:absolute before:left-0 before:text-white before:text-2xl before:leading-[1.1]">Strong communication &amp; analytical skills</li>
              <li className="relative pl-6 text-[1.05rem] italic font-light leading-normal text-white/90 before:content-['•'] before:absolute before:left-0 before:text-white before:text-2xl before:leading-[1.1]">Ability to work in a fast-paced, team-oriented environment</li>
              <li className="relative pl-6 text-[1.05rem] italic font-light leading-normal text-white/90 before:content-['•'] before:absolute before:left-0 before:text-white before:text-2xl before:leading-[1.1]">Passion for learning and experimenting with new marketing techniques</li>
            </ul>
          </div>

          {/* Section 3: Job Information */}
          <div className="flex flex-col gap-5">
            <h2 className="font-bebas text-[2.4rem] font-normal text-brand-yellow m-0 tracking-[0.03em] leading-[1.15]">
              Job Information
            </h2>
            <div className="flex flex-col gap-[1.1rem] mt-1">
              <div className="flex items-center gap-[1.2rem]">
                <Calendar className="text-white shrink-0" size={18} />
                <span className="text-[1.05rem] italic font-light text-white/90">Mon to Fri</span>
              </div>
              <div className="flex items-center gap-[1.2rem]">
                <Clock className="text-white shrink-0" size={18} />
                <span className="text-[1.05rem] italic font-light text-white/90">Type: Full-Time</span>
              </div>
              <div className="flex items-center gap-[1.2rem]">
                <Award className="text-white shrink-0" size={18} />
                <span className="text-[1.05rem] italic font-light text-white/90">Certificate will be provided</span>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: Search Bar and Service Buttons (Full-Width) */}
        <div className="flex flex-col gap-6 pt-8 pb-10 border-t border-b border-white/10">
          <h3 className="font-bebas text-[1.6rem] font-normal text-white m-0 uppercase tracking-[0.05em]">Recommended Positions</h3>
          
          <div className="relative flex items-center w-full">
            <Search className="absolute left-[1.2rem] text-white/50 pointer-events-none" size={18} />
            <input
              type="text"
              placeholder="Search job title &amp; skill"
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full py-3.5 pr-5 pl-12 rounded-md border border-white/20 bg-white/5 text-white text-base transition-all duration-300 outline-none focus:border-brand-yellow focus:bg-white/10 focus:shadow-[0_0_10px_rgba(255,204,0,0.15)]"
            />
          </div>

          <div className="flex flex-wrap gap-[0.8rem]">
            {filteredServices.map(svc => (
              <button
                key={svc.id}
                type="button"
                className={`px-5 py-2.5 text-[0.9rem] rounded cursor-pointer transition-all duration-250 border ${
                  selectedServiceId === svc.id
                    ? "bg-brand-yellow text-brand-dark border-brand-yellow font-semibold shadow-[0_4px_12px_rgba(255,204,0,0.2)]"
                    : "bg-white/5 text-white/95 border-white/15 hover:bg-brand-yellow/15 hover:text-brand-yellow hover:border-brand-yellow"
                }`}
                onClick={() => handleServiceSelect(svc.id)}
              >
                {svc.name}
              </button>
            ))}
            {filteredServices.length === 0 && (
              <p className="text-white/50 italic mt-2 mb-0 mx-0">No positions match your search.</p>
            )}
          </div>
        </div>

        {/* BOTTOM SECTION: Two Column Grid (Service details left, Contact form right) */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-start">
          
          {/* Left Column: Service Details / Content */}
          <div className="flex flex-col gap-6 border-b border-white pb-12 md:border-b-0 md:pb-0 md:border-r md:pr-12 lg:pr-16">
            {currentService ? (
              <div className="bg-white/[0.03] border-l-4 border-l-brand-yellow rounded-lg p-9 animate-fadeIn shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-white/[0.02]">
                <h3 className="font-bebas text-[1.6rem] text-brand-yellow mt-0 mb-2.5 tracking-[0.02em]">{currentService.name}</h3>
                
                <div className="flex flex-wrap gap-[0.8rem] mb-5">
                  <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-xs font-medium text-white/80 inline-flex items-center">💼 {currentService.experience}</span>
                  <span className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-xs font-medium text-white/80 inline-flex items-center">📍 {currentService.location}</span>
                </div>

                <p className="text-[0.95rem] leading-[1.65] text-white/85 m-0">{currentService.description}</p>

                {currentService.responsibilities && (
                  <div className="mt-7">
                    <h4 className="font-oswald text-[1.1rem] text-brand-yellow mt-0 mb-3 uppercase tracking-[0.03em]">Key Responsibilities</h4>
                    <ul className="list-none p-0 m-0 flex flex-col gap-3">
                      {currentService.responsibilities.map((item, idx) => (
                        <li key={idx} className="relative pl-5 text-[0.9rem] leading-normal text-white/80 before:content-['•'] before:absolute before:left-0 before:text-brand-yellow before:text-lg before:leading-[1.1]">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {currentService.requirements && (
                  <div className="mt-7">
                    <h4 className="font-oswald text-[1.1rem] text-brand-yellow mt-0 mb-3 uppercase tracking-[0.03em]">Skills &amp; Requirements</h4>
                    <ul className="list-none p-0 m-0 flex flex-col gap-3">
                      {currentService.requirements.map((item, idx) => (
                        <li key={idx} className="relative pl-5 text-[0.9rem] leading-normal text-white/80 before:content-['•'] before:absolute before:left-0 before:text-brand-yellow before:text-lg before:leading-[1.1]">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white/[0.02] border border-dashed border-white/15 rounded-lg p-10 text-center flex flex-col items-center justify-center min-h-[250px] box-border">
                <h3 className="font-bebas text-[1.8rem] text-white/30 mt-0 mb-3 uppercase tracking-[0.05em]">Select a Position</h3>
                <p className="text-[0.95rem] leading-[1.6] text-white/40 m-0 max-w-[320px]">
                  Choose a position from the recommended list above to see details and responsibilities here.
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Contact Form */}
          <div className="md:sticky md:top-30 static">
            <div className="bg-gradient-to-br from-[rgba(81,123,152,0.55)] via-[rgba(55,83,103,0.3)] to-[rgba(27,40,50,0.1)] backdrop-blur-md border border-white/15 rounded-xl p-9 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
              <h2 className="font-bebas text-[2.2rem] text-brand-yellow mt-0 mb-1 tracking-[0.02em]">Join Our Team</h2>
              <p className="text-[0.9rem] text-white/60 mt-0 mb-8">Fill out the details below to apply for a role.</p>
              
              {isSubmitted ? (
                <div className="bg-[#2ed573]/10 border border-[#2ed573]/30 rounded-lg p-8 text-center animate-fadeIn">
                  <h4 className="text-[#2ed573] mt-0 mb-2.5 text-lg font-bebas tracking-[0.02em]">Application Submitted!</h4>
                  <p className="text-white/85 text-[0.95rem] m-0 leading-relaxed">Thank you for choosing SparkTech. Our HR team will contact you shortly.</p>
                </div>
              ) : (
                <form className="flex flex-col gap-[1.3rem]" onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-[0.9rem] font-medium text-white/90 flex items-center gap-1.5"><User size={15} /> Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded border border-white/15 bg-black/20 text-white text-[0.95rem] font-inter transition-all duration-300 outline-none focus:border-brand-yellow focus:bg-black/40 box-border"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-[0.9rem] font-medium text-white/90 flex items-center gap-1.5"><Mail size={15} /> Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded border border-white/15 bg-black/20 text-white text-[0.95rem] font-inter transition-all duration-300 outline-none focus:border-brand-yellow focus:bg-black/40 box-border"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-[0.9rem] font-medium text-white/90 flex items-center gap-1.5"><Phone size={15} /> Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded border border-white/15 bg-black/20 text-white text-[0.95rem] font-inter transition-all duration-300 outline-none focus:border-brand-yellow focus:bg-black/40 box-border"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="role" className="text-[0.9rem] font-medium text-white/90 flex items-center gap-1.5">Role / Service *</label>
                    <select
                      id="role"
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleDropdownChange}
                      className="w-full px-4 py-3 rounded border border-white/15 bg-black/20 text-white text-[0.95rem] font-inter transition-all duration-300 outline-none focus:border-brand-yellow focus:bg-black/40 box-border cursor-pointer"
                    >
                      <option value="" disabled className="bg-brand-dark text-white">Choose a role / service</option>
                      {SERVICES.map(svc => (
                        <option key={svc.id} value={svc.id} className="bg-brand-dark text-white">{svc.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-[0.9rem] font-medium text-white/90 flex items-center gap-1.5"><MessageSquare size={15} /> Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Enter your message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded border border-white/15 bg-black/20 text-white text-[0.95rem] font-inter transition-all duration-300 outline-none focus:border-brand-yellow focus:bg-black/40 box-border"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 mt-1">
                    <label htmlFor="resume" className="flex items-center justify-center gap-2 p-3 border border-dashed border-white/25 rounded-md cursor-pointer bg-white/2 text-[0.9rem] text-white/80 transition-all duration-300 hover:border-brand-yellow hover:bg-brand-yellow/5 hover:text-brand-yellow">
                      <Upload size={15} />
                      <span>{formData.resume ? formData.resume.name : "Upload Resume (PDF/Doc)"}</span>
                    </label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>

                  <button type="submit" className="bg-brand-yellow text-brand-dark border-none p-4 text-[1.05rem] font-bold rounded-md cursor-pointer transition-all duration-300 mt-[0.8rem] uppercase tracking-[0.03em] shadow-[0_4px_12px_rgba(255,204,0,0.15)] hover:bg-[#ffdb33] hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(255,204,0,0.3)] active:translate-y-0.5">
                    Apply Now
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>

      {/* Footer Section */}
      <div className="w-full max-w-[1200px] mt-24 md:mt-16">
        <Footer />
      </div>
    </div>
  );
}
