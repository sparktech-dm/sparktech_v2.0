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
import "./career.css";

const SERVICES = [
  {
    id: "seo-specialist",
    name: "SEO Specialist",
    description: "Develop and execute search engine optimization strategies. Track keyword performance, conduct page-speed analysis, build high-quality links, and optimize content structure to maximize organic traffic and conversions."
  },
  {
    id: "social-media-manager",
    name: "Social Media Manager",
    description: "Manage end-to-end social media channels (Meta, Instagram, LinkedIn). Plan content calendars, create engaging posts, run targeted paid social campaigns, analyze user engagement metrics, and build active online communities."
  },
  {
    id: "google-ads-specialist",
    name: "Google Ads Specialist",
    description: "Design, monitor, and optimize Pay-Per-Click (PPC) campaigns. Handle budget allocation, perform keyword discovery, design ad copies, set up negative keywords, and continuously A/B test layouts to improve ROI."
  },
  {
    id: "content-writer",
    name: "Content Writer / Strategist",
    description: "Produce clear, persuasive, and high-converting marketing copy for websites, blogs, ads, and email campaigns. Create editorial calendars and collaborate closely with SEO/Design teams."
  },
  {
    id: "graphic-designer",
    name: "Graphic Designer / Video Editor",
    description: "Create pixel-perfect banners, ad designs, and engaging Reels/videos for digital marketing campaigns. Fluent in Figma, Photoshop, Premiere Pro, or equivalent production tools."
  },
  {
    id: "performance-marketer",
    name: "Performance Marketer",
    description: "Define strategies for lead acquisition. Optimize paid campaigns across platforms, build performance dashboards, interpret GA4 analytics, and drive conversion rate optimization (CRO)."
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
    <div className="career-page">
      {/* Centered Yellow Title */}
      <div className="career-header-wrapper">
        <h1 className="career-page-title">CAREER</h1>
      </div>

      <div className="career-container">
        
        {/* LEFT PANEL: Exact text content, layout list and icons directly on background */}
        <section className="career-left">
          
          {/* Section 1: Why Join */}
          <div className="career-content-block">
            <h2 className="career-section-title">
              Why Join Sparktech Digital Marketing Team?
            </h2>
            <p className="career-section-text italic-desc">
              Looking for digital marketing jobs in Chennai? Sparktech is hiring dynamic, growth-oriented professionals who are ready to work on exciting projects for national and international clients. Whether you're an entry-level executive or a senior marketing strategist, we have a role for you. Sparktech is a performance-driven digital marketing agency based in Chennai. We specialize in using AI, data analytics, and precision-targeting to drive results. As part of our team, you'll work on Meta ads, Google campaigns, SEO projects, influencer marketing, and more.
            </p>
          </div>

          {/* Section 2: What We Look For */}
          <div className="career-content-block">
            <h2 className="career-section-title">
              What We Look For in Candidates
            </h2>
            <ul className="career-bullet-list">
              <li>Hands-on experience in digital marketing agency and tools</li>
              <li>Strong communication &amp; analytical skills</li>
              <li>Ability to work in a fast-paced, team-oriented environment</li>
              <li>Passion for learning and experimenting with new marketing techniques</li>
            </ul>
          </div>

          {/* Section 3: Job Information */}
          <div className="career-content-block">
            <h2 className="career-section-title">
              Job Information
            </h2>
            <div className="job-info-list">
              <div className="job-info-item">
                <Calendar className="info-icon" size={18} />
                <span>Mon to Fri</span>
              </div>
              <div className="job-info-item">
                <Clock className="info-icon" size={18} />
                <span>Type: Full-Time</span>
              </div>
              <div className="job-info-item">
                <Award className="info-icon" size={18} />
                <span>Certificate will be provided</span>
              </div>
            </div>
          </div>

          {/* Section 4: Search bar & service buttons */}
          <div className="career-search-section">
            <h3 className="section-subtitle-small">Recommended Positions</h3>
            
            <div className="career-search-box">
              <Search className="search-icon-inside" size={18} />
              <input
                type="text"
                placeholder="Search job title &amp; skill"
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="career-search-bar"
              />
            </div>

            <div className="career-services-buttons-grid">
              {filteredServices.map(svc => (
                <button
                  key={svc.id}
                  type="button"
                  className={`service-select-btn ${selectedServiceId === svc.id ? "active" : ""}`}
                  onClick={() => handleServiceSelect(svc.id)}
                >
                  {svc.name}
                </button>
              ))}
              {filteredServices.length === 0 && (
                <p className="no-services-found">No positions match your search.</p>
              )}
            </div>

            {/* Display description if selected */}
            {currentService && (
              <div className="service-details-box">
                <h3 className="selected-service-title">{currentService.name}</h3>
                <p className="selected-service-desc">{currentService.description}</p>
              </div>
            )}
          </div>

        </section>

        {/* RIGHT PANEL: Clean dark contact form */}
        <section className="career-right">
          <div className="contact-form-container">
            <h2 className="contact-form-title">Join Our Team</h2>
            <p className="contact-form-subtitle">Fill out the details below to apply for a role.</p>
            
            {isSubmitted ? (
              <div className="success-toast">
                <h4>Application Submitted!</h4>
                <p>Thank you for choosing SparkTech. Our HR team will contact you shortly.</p>
              </div>
            ) : (
              <form className="career-contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name"><User size={15} /> Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email"><Mail size={15} /> Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone"><Phone size={15} /> Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="role">Role / Service *</label>
                  <select
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleDropdownChange}
                    className="form-role-select"
                  >
                    <option value="" disabled>Choose a role / service</option>
                    {SERVICES.map(svc => (
                      <option key={svc.id} value={svc.id}>{svc.name}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message"><MessageSquare size={15} /> Cover Letter / Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Tell us about yourself and why you'd be a great fit"
                    value={formData.message}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group file-group">
                  <label htmlFor="resume" className="file-upload-label">
                    <Upload size={15} />
                    <span>{formData.resume ? formData.resume.name : "Upload Resume (PDF/Doc)"}</span>
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="file-input-hidden"
                  />
                </div>

                <button type="submit" className="submit-application-btn">
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </section>

      </div>
    </div>
  );
}
