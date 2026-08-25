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
    description: "Design intuitive, engaging, and user-friendly interfaces for websites and web applications. Work closely with developers and project managers to create digital experiences that are visually appealing, responsive, and easy to use.",
    experience: "1–3 Years",
    location: "Chennai (On-site)",
    responsibilities: [
      "Design user interfaces for websites and web applications.",
      "Create wireframes, user flows, and interactive prototypes.",
      "Conduct basic user research and usability improvements.",
      "Collaborate with developers to ensure accurate implementation.",
      "Maintain consistency across design systems and brand guidelines.",
      "Improve user experience through testing and feedback."
    ],
    requirements: [
      "Experience with Figma or Adobe XD.",
      "Understanding of UI/UX principles and responsive design.",
      "Knowledge of typography, color theory, spacing, and layouts.",
      "Basic knowledge of Photoshop or Illustrator is an advantage.",
      "Strong creativity and attention to detail.",
      "Portfolio showcasing previous design work."
    ]
  },
  {
    id: "web-developer",
    name: "Web Developer",
    description: "Develop responsive, fast, and SEO-friendly websites using modern web technologies while ensuring excellent performance across all devices.",
    experience: "1–3 Years",
    location: "Chennai (On-site)",
    responsibilities: [
      "Build responsive websites.",
      "Maintain and improve existing websites.",
      "Optimize website speed and performance.",
      "Integrate APIs and CMS platforms.",
      "Collaborate with UI/UX designers."
    ],
    requirements: [
      "HTML5, CSS3, JavaScript.",
      "Bootstrap, React (preferred).",
      "PHP or Node.js (basic knowledge is a plus).",
      "Git & GitHub.",
      "Basic SEO knowledge."
    ]
  },
  {
    id: "content-creator",
    name: "Content Creator",
    description: "Create engaging content for websites, blogs, social media, and marketing campaigns while maintaining the brand voice.",
    experience: "0–2 Years",
    location: "Chennai (On-site)",
    responsibilities: [
      "Write blogs and website content.",
      "Create social media captions.",
      "Research industry trends.",
      "Collaborate with the marketing team."
    ],
    requirements: [
      "Excellent English writing skills.",
      "Basic SEO knowledge.",
      "Creative thinking.",
      "Content planning ability."
    ]
  },
  {
    id: "video-editor",
    name: "Video Editor",
    description: "Create high-quality videos for social media, advertisements, branding, and marketing campaigns.",
    experience: "1–3 Years",
    location: "Chennai (On-site)",
    responsibilities: [
      "Edit promotional videos.",
      "Create reels and short-form videos.",
      "Add transitions, motion graphics, and sound effects.",
      "Collaborate with designers and marketers."
    ],
    requirements: [
      "Adobe Premiere Pro.",
      "After Effects (preferred).",
      "CapCut or DaVinci Resolve.",
      "Motion graphics knowledge."
    ]
  },
  {
    id: "seo-executive",
    name: "SEO Executive",
    description: "Improve website visibility through search engine optimization, keyword research, technical SEO, and content optimization.",
    experience: "1–2 Years",
    location: "Chennai (On-site)",
    responsibilities: [
      "Perform keyword research.",
      "Optimize website content.",
      "Build SEO strategies.",
      "Monitor rankings and website performance.",
      "Prepare SEO reports."
    ],
    requirements: [
      "Google Search Console.",
      "Google Analytics.",
      "Keyword research tools.",
      "On-page & Technical SEO.",
      "Basic link-building knowledge."
    ]
  },
  {
    id: "ads-specialist",
    name: "Google Ads & Meta Ads Specialist",
    description: "Plan, launch, and optimize paid advertising campaigns that generate quality leads and maximize return on investment.",
    experience: "1–3 Years",
    location: "Chennai (On-site)",
    responsibilities: [
      "Manage Google Ads campaigns.",
      "Create Meta Ads campaigns.",
      "Optimize audience targeting.",
      "Monitor campaign performance.",
      "Generate monthly reports."
    ],
    requirements: [
      "Google Ads.",
      "Meta Ads Manager.",
      "Google Analytics.",
      "Conversion Tracking.",
      "Campaign Optimization."
    ]
  },
  {
    id: "graphic-designer",
    name: "Graphic Designer",
    description: "Design creative visuals for branding, websites, social media, and digital marketing campaigns.",
    experience: "1–3 Years",
    location: "Chennai (On-site)",
    responsibilities: [
      "Create social media creatives.",
      "Design marketing materials.",
      "Develop branding assets.",
      "Maintain visual consistency."
    ],
    requirements: [
      "Adobe Photoshop.",
      "Illustrator.",
      "Figma.",
      "Canva (optional).",
      "Strong creativity."
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    let base64File = "";
    let mimeType = "";
    let filename = "";
    
    if (formData.resume) {
      filename = formData.resume.name;
      mimeType = formData.resume.type;
      
      const toBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result.split(',')[1]);
        reader.onerror = (error) => reject(error);
      });
      
      try {
        base64File = await toBase64(formData.resume);
      } catch (err) {
        console.error("Error reading file:", err);
      }
    }
    
    const dataToSend = {
      ...formData,
      resumeData: base64File,
      resumeMimeType: mimeType,
      resumeName: filename
    };
    delete dataToSend.resume; // Remove the File object itself

    // Send to Google Sheets
    fetch("https://script.google.com/macros/s/AKfycbw0PDjjHFBOFSC0AdRQEvt7YPl_EPxLap6nU95LmMABuuoq7dRuGLxvqG-srmR6oiM/exec", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    }).catch((error) => {
      console.error("Error submitting form:", error);
    });

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
    <div className="w-full min-h-screen bg-white text-[#1b365d] font-inter pt-32 relative box-border">
      <div className="w-full px-8 pb-16 flex flex-col items-center">
        {/* Centered Yellow Title */}
        <div className="w-full max-w-7xl lg:max-w-full lg:px-16 xl:px-24 mx-auto text-center mb-16">
          <h1 className="font-inter font-extrabold text-3xl md:text-5xl lg:text-7xl text-[#cc7722] tracking-[0.02em] m-0 leading-none">Career</h1>
        </div>

        <div className="w-full max-w-7xl lg:max-w-full lg:px-16 xl:px-24 mx-auto flex flex-col gap-14">
        
        {/* TOP SECTION: Intro Info (Why Join, What we look for, Job info) - kept stacked as original */}
        <div className="flex flex-col gap-11">
          {/* Section 1: Why Join */}
          <div className="flex flex-col gap-5">
            <h2 className="font-bebas text-[2.4rem] font-normal text-[#cc7722] m-0 tracking-[0.03em] leading-[1.15] uppercase">
              Why Join SparkTech?
            </h2>
            <p className="text-[1.05rem] leading-[1.8] font-light italic text-[#1b365d] m-0 tracking-[0.01em]">
              Working at SparkTech means being part of a collaborative environment where creativity, technology, and continuous learning come together. We encourage new ideas, support professional growth, and provide opportunities to work on real-world digital projects across multiple industries.
            </p>
          </div>

          {/* What We Look For & Job Info side-by-side on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-11 w-full">
            {/* Section 2: What We Look For */}
            <div className="flex flex-col gap-5">
              <h2 className="font-bebas text-[2.4rem] font-normal text-[#cc7722] m-0 tracking-[0.03em] leading-[1.15] uppercase">
                What We Look For
              </h2>
              <ul className="list-none p-0 m-0 flex flex-col gap-3.5">
                <li className="relative pl-6 text-[1.05rem] italic font-light leading-normal text-[#1b365d] before:content-['✔'] before:absolute before:left-0 before:text-[#cc7722] before:text-[1rem] before:leading-[1.4]">Passion for learning and continuous improvement</li>
                <li className="relative pl-6 text-[1.05rem] italic font-light leading-normal text-[#1b365d] before:content-['✔'] before:absolute before:left-0 before:text-[#cc7722] before:text-[1rem] before:leading-[1.4]">Strong communication and teamwork skills</li>
                <li className="relative pl-6 text-[1.05rem] italic font-light leading-normal text-[#1b365d] before:content-['✔'] before:absolute before:left-0 before:text-[#cc7722] before:text-[1rem] before:leading-[1.4]">Creative thinking and problem-solving ability</li>
                <li className="relative pl-6 text-[1.05rem] italic font-light leading-normal text-[#1b365d] before:content-['✔'] before:absolute before:left-0 before:text-[#cc7722] before:text-[1rem] before:leading-[1.4]">Basic or professional knowledge in your field</li>
                <li className="relative pl-6 text-[1.05rem] italic font-light leading-normal text-[#1b365d] before:content-['✔'] before:absolute before:left-0 before:text-[#cc7722] before:text-[1rem] before:leading-[1.4]">Willingness to adapt to new technologies</li>
                <li className="relative pl-6 text-[1.05rem] italic font-light leading-normal text-[#1b365d] before:content-['✔'] before:absolute before:left-0 before:text-[#cc7722] before:text-[1rem] before:leading-[1.4]">Positive attitude and responsibility</li>
              </ul>
            </div>

            {/* Section 3: Job Information */}
            <div className="flex flex-col gap-5">
              <h2 className="font-bebas text-[2.4rem] font-normal text-[#cc7722] m-0 tracking-[0.03em] leading-[1.15] uppercase">
                Job Information
              </h2>
              <div className="flex flex-col gap-[1.1rem] mt-1">
                <div className="flex items-center gap-[1.2rem]">
                  <Calendar className="text-[#cc7722] shrink-0" size={18} />
                  <span className="text-[1.05rem] italic font-light text-[#1b365d]"><strong>Working Days:</strong> Monday – Friday</span>
                </div>
                <div className="flex items-center gap-[1.2rem]">
                  <Clock className="text-[#cc7722] shrink-0" size={18} />
                  <span className="text-[1.05rem] italic font-light text-[#1b365d]"><strong>Employment Type:</strong> Full-Time</span>
                </div>
                <div className="flex items-center gap-[1.2rem]">
                  <User className="text-[#cc7722] shrink-0" size={18} />
                  <span className="text-[1.05rem] italic font-light text-[#1b365d]"><strong>Work Location:</strong> Chennai (On-site)</span>
                </div>
                <div className="flex items-center gap-[1.2rem]">
                  <Award className="text-[#cc7722] shrink-0" size={18} />
                  <span className="text-[1.05rem] italic font-light text-[#1b365d]"><strong>Internship Certificate:</strong> Provided for eligible internship programs</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: Search Bar and Service Buttons (Full-Width) */}
        <div className="flex flex-col gap-6 pt-8 pb-10 border-t border-b border-white/10">
          <h3 className="font-bebas text-[1.6rem] font-normal text-transparent m-0 uppercase tracking-[0.05em] hidden">Recommended Positions</h3>
          
          <div className="relative flex items-center w-full">
            <Search className="absolute left-[1.2rem] text-white/50 pointer-events-none" size={18} />
            <input
              type="text"
              placeholder="Search job title &amp; skill"
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="w-full py-3.5 pr-5 pl-12 rounded-md border border-[#1b365d] bg-[#1f3a58] text-white text-base placeholder:text-gray-300 transition-all duration-300 outline-none focus:border-brand-yellow focus:bg-white/10 focus:shadow-[0_0_10px_rgba(255,204,0,0.15)]"
            />
          </div>

          <div className="flex flex-wrap gap-[0.8rem]">
            {filteredServices.map(svc => (
              <button
                key={svc.id}
                type="button"
                className={`px-5 py-2.5 text-[0.9rem] font-bold uppercase rounded-full cursor-pointer transition-all duration-250 border ${
                  selectedServiceId === svc.id
                    ? "bg-[#1b365d] text-white border-transparent shadow-md scale-105"
                    : "bg-[#1f3a58] text-white border-transparent hover:bg-[#1b365d]"
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

        {/* BOTTOM SECTION */}
        <div className="flex flex-col gap-12 items-center w-full mt-8">
          
          {/* Service Details / Content (Displayed at the top when selected) */}
          {currentService && (
            <div className="w-full max-w-7xl lg:max-w-full animate-fadeIn">
              <div className="bg-[#1f3a58] border-none text-white rounded-xl p-9 shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
                <h3 className="font-bebas text-[1.6rem] text-[#cc7722] mt-0 mb-2.5 tracking-[0.02em]">{currentService.name}</h3>
                
                <div className="flex flex-wrap gap-[0.8rem] mb-5">
                  <span className="bg-transparent border-none px-3 py-1.5 text-xs font-medium text-white inline-flex items-center">💼 {currentService.experience}</span>
                  <span className="bg-transparent border-none px-3 py-1.5 text-xs font-medium text-white inline-flex items-center">📍 {currentService.location}</span>
                </div>

                <p className="text-[0.95rem] leading-[1.65] text-white/85 m-0">{currentService.description}</p>

                {currentService.responsibilities && (
                  <div className="mt-7">
                    <h4 className="font-oswald text-[1.1rem] text-[#cc7722] mt-0 mb-3 uppercase tracking-[0.03em]">Key Responsibilities</h4>
                    <ul className="list-none p-0 m-0 flex flex-col gap-3">
                      {currentService.responsibilities.map((item, idx) => (
                        <li key={idx} className="relative pl-5 text-[0.9rem] leading-normal text-white/80 before:content-['•'] before:absolute before:left-0 before:text-[#cc7722] before:text-lg before:leading-[1.1]">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {currentService.requirements && (
                  <div className="mt-7">
                    <h4 className="font-oswald text-[1.1rem] text-[#cc7722] mt-0 mb-3 uppercase tracking-[0.03em]">Skills &amp; Requirements</h4>
                    <ul className="list-none p-0 m-0 flex flex-col gap-3">
                      {currentService.requirements.map((item, idx) => (
                        <li key={idx} className="relative pl-5 text-[0.9rem] leading-normal text-white/80 before:content-['•'] before:absolute before:left-0 before:text-[#cc7722] before:text-lg before:leading-[1.1]">{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Contact Form: Wide layout, label on left, input on right */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-7xl lg:max-w-full bg-[#1f3a58] border-none text-white rounded-xl p-9 shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition-all duration-500">
              <h2 className="font-bebas text-[2.2rem] text-[#cc7722] mt-0 mb-1 tracking-[0.02em]">Join Our Team</h2>
              <p className="text-[0.9rem] text-white/60 mt-0 mb-8">Fill out the details below to apply for a role.</p>
              
              {isSubmitted ? (
                <div className="bg-[#2ed573]/10 border border-[#2ed573]/30 rounded-lg p-8 text-center animate-fadeIn">
                  <h4 className="text-[#2ed573] mt-0 mb-2.5 text-lg font-bebas tracking-[0.02em]">Application Submitted!</h4>
                  <p className="text-white/85 text-[0.95rem] m-0 leading-relaxed">Thank you for choosing SparkTech. Our HR team will contact you shortly.</p>
                </div>
              ) : (
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                  {/* Grid for two columns (Left: Name & Phone, Right: Email & Role) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {/* Left Column */}
                    <div className="flex flex-col gap-6">
                      {/* Name Field */}
                      <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="name" className="text-[1.1rem] font-medium text-white flex items-center gap-1.5">
                          <User size={16} /> Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-full border border-gray-400/50 bg-transparent text-white text-[0.95rem] font-inter transition-all duration-300 outline-none focus:border-brand-yellow focus:bg-black/40 box-border"
                        />
                      </div>

                      {/* Phone Number Field */}
                      <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="phone" className="text-[1.1rem] font-medium text-white flex items-center gap-1.5">
                          <Phone size={16} /> Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          placeholder="Enter phone number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-full border border-gray-400/50 bg-transparent text-white text-[0.95rem] font-inter transition-all duration-300 outline-none focus:border-brand-yellow focus:bg-black/40 box-border"
                        />
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-6">
                      {/* Email Field */}
                      <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="email" className="text-[1.1rem] font-medium text-white flex items-center gap-1.5">
                          <Mail size={16} /> Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-full border border-gray-400/50 bg-transparent text-white text-[0.95rem] font-inter transition-all duration-300 outline-none focus:border-brand-yellow focus:bg-black/40 box-border"
                        />
                      </div>

                      {/* Role / Service Field */}
                      <div className="flex flex-col gap-2 w-full">
                        <label htmlFor="role" className="text-[1.1rem] font-medium text-white flex items-center gap-1.5">
                          Role / Service
                        </label>
                        <select
                          id="role"
                          name="role"
                          required
                          value={formData.role}
                          onChange={handleDropdownChange}
                          className="w-full px-4 py-3 rounded-full border border-gray-400/50 bg-transparent text-white text-[0.95rem] font-inter transition-all duration-300 outline-none focus:border-brand-yellow focus:bg-black/40 box-border cursor-pointer"
                        >
                          <option value="" disabled className="bg-brand-dark text-white">Choose a role / service</option>
                          {SERVICES.map(svc => (
                            <option key={svc.id} value={svc.id} className="bg-brand-dark text-white">{svc.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message Field (Full width) */}
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="message" className="text-[1.1rem] font-medium text-white flex items-center gap-1.5">
                      <MessageSquare size={16} /> Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      placeholder="Enter your message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-3xl border border-gray-400/50 bg-transparent text-white text-[0.95rem] font-inter transition-all duration-300 outline-none focus:border-brand-yellow focus:bg-black/40 box-border"
                    />
                  </div>

                  {/* Resume Upload & Submit Button (Side-by-side on desktop) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full items-end pt-4">
                    {/* Resume Upload Field */}
                    <div className="flex flex-col w-full">
                      <label htmlFor="resume" className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-full border border-gray-400/50 bg-transparent text-white text-[0.95rem] font-bold transition-all duration-300 cursor-pointer hover:bg-white/5">
                        <span>{formData.resume ? formData.resume.name : "Upload Resume (PDF/ Docs)"}</span>
                      </label>
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        required
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="w-full">
                      <button type="submit" className="flex items-center justify-center w-full px-4 py-3 rounded-full border border-gray-400/50 bg-transparent text-white text-[0.95rem] font-bold transition-all duration-300 cursor-pointer uppercase hover:bg-white/5">
                        APPLY NOW
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>

      </div>

      {/* Footer Section */}
      <div className="pt-10">
        <Footer />
      </div>
    </div>
  );
}