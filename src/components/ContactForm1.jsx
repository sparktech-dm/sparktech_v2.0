import { useState } from "react";
import Footer from "./Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen text-white font-sans career-bg-pattern">
      {/* ── NAVBAR ── */}
      <nav className="flex items-center justify-between px-8 py-4">
        <div className="w-16 h-16 rounded-full border-2 border-yellow-400 flex items-center justify-center bg-[#1a1a2e] overflow-hidden">
          <span className="text-2xl">🚀</span>
        </div>

        <div className="hidden md:flex items-center bg-white rounded-full px-3 py-2 gap-2">
          {["HOME", "SERVICES", "ABOUT", "CAREER", "BLOGS"].map((item) => (
            <button
              key={item}
              className="bg-[#1a1a1a] text-white text-sm font-bold px-5 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-200"
            >
              {item}
            </button>
          ))}
        </div>

        <button className="border-2 border-[#c0395a] text-white font-bold px-6 py-2 rounded-full hover:bg-[#c0395a] transition-all duration-200 tracking-wider text-sm">
          GET MORE LEADS
        </button>
      </nav>

      {/* ── SECTION 1: "Let's Spark Together" + Info Cards ── */}
      <section className="px-8 md:px-16 py-16">
        {/* Heading */}
        <div className="text-center mb-14">
          <h1
            className="text-yellow-400 font-extrabold text-5xl not-italic"
            style={{ fontFamily: "'Anton', sans-serif", fontSize: "48px", fontWeight: 400 }}
          >
            Let's Spark Together
          </h1>
          <p className="text-gray-300 font-poppins italic mt-5 max-w-xl mx-auto text-base leading-relaxed">
            Need help with branding, social media growth, SEO, website design, or digital campaigns?
            Share your idea and our team will turn it into results.
          </p>
        </div>

        {/* Info Cards */}
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8">
          {/* Map */}
          <div className="border-2 border-yellow-400 rounded-2xl p-7 bg-black hover:bg-yellow-400/5 transition-all duration-300 w-full md:w-[29%]">
            <div className="flex items-center justify-between gap-6 mb-4">
              <h3 className="text-yellow-400 font-extrabold text-2xl">We're on map</h3>
              <span className="text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              C1, Honey tone Apartments,<br />
              Shankarapuram 1st Street,<br />
              Choolaimedu, Chennai 600094
            </p>
          </div>

          {/* Call */}
          <div className="border-2 border-yellow-400 rounded-2xl p-7 bg-black hover:bg-yellow-400/5 transition-all duration-300 flex flex-col justify-between w-full md:w-[29%]">
            <div className="flex items-center justify-between gap-6 mb-4">
              <h3 className="text-yellow-400 font-extrabold text-2xl">Get us a call</h3>
              <span className="text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  <path d="M14.05 2a9 9 0 0 1 8 7.94"></path>
                  <path d="M14.05 6A5 5 0 0 1 18 10"></path>
                </svg>
              </span>
            </div>
            <p className="text-gray-200 text-lg font-semibold">+91 8939892219</p>
          </div>

          {/* Email */}
          <div className="border-2 border-yellow-400 rounded-2xl p-7 bg-black hover:bg-yellow-400/5 transition-all duration-300 flex flex-col justify-between w-full md:w-[29%]">
            <div className="flex items-center justify-between gap-6 mb-4">
              <h3 className="text-yellow-400 font-extrabold text-2xl">Send us email</h3>
              <span className="text-yellow-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </span>
            </div>
            <p className="text-gray-200 text-base font-semibold">sparktechdm@gmail.com</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: "Let's Get Connect" Contact Form ── */}
      <section className="px-8 md:px-16 py-12">
        <div className="bg-black border-2 border-yellow-400 rounded-[40px] p-8 md:p-12 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start shadow-2xl">
          {/* Left: Form */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-white text-3xl font-bold">Let's Get</p>
            <p className="text-yellow-400 text-5xl font-extrabold italic">Connect !</p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 mt-2">
            <div>
              <label className="text-yellow-400 italic font-semibold text-lg mb-2 block">Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full bg-transparent border rounded-full px-5 py-3 text-white outline-none transition-all ${
                  errors.name ? "border-[#e25c5c] focus:ring-1 focus:ring-[#e25c5c]" : "border-yellow-400 focus:border-yellow-300 focus:ring-1 focus:ring-yellow-400"
                }`}
              />
              {errors.name && <p className="text-[#e25c5c] text-sm mt-1 ml-4">{errors.name}</p>}
            </div>

            <div>
              <label className="text-yellow-400 italic font-semibold text-lg mb-2 block">Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-transparent border rounded-full px-5 py-3 text-white outline-none transition-all ${
                  errors.email ? "border-[#e25c5c] focus:ring-1 focus:ring-[#e25c5c]" : "border-yellow-400 focus:border-yellow-300 focus:ring-1 focus:ring-yellow-400"
                }`}
              />
              {errors.email && <p className="text-[#e25c5c] text-sm mt-1 ml-4">{errors.email}</p>}
            </div>

            <div>
              <label className="text-yellow-400 italic font-semibold text-lg mb-2 block">Phone <span className="text-red-500">*</span></label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full bg-transparent border rounded-full px-5 py-3 text-white outline-none transition-all ${
                  errors.phone ? "border-[#e25c5c] focus:ring-1 focus:ring-[#e25c5c]" : "border-yellow-400 focus:border-yellow-300 focus:ring-1 focus:ring-yellow-400"
                }`}
              />
              {errors.phone && <p className="text-[#e25c5c] text-sm mt-1 ml-4">{errors.phone}</p>}
            </div>

            <div>
              <label className="text-yellow-400 italic font-semibold text-lg mb-2 block">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-transparent border border-yellow-400 rounded-2xl px-5 py-3 text-white outline-none focus:border-yellow-300 focus:ring-1 focus:ring-yellow-400 transition-all resize-none"
              />
            </div>

            <div className="flex justify-center mt-2">
              <button
                type="submit"
                className="border-2 border-yellow-400 text-yellow-400 font-bold tracking-widest px-14 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 text-base"
              >
                {submitted ? "✓ SENT!" : "SUBMIT"}
              </button>
            </div>
          </form>
        </div>

        {/* Right: Illustration */}
        <div className="hidden md:flex items-start justify-center relative min-h-[480px] mt-32">
          <img
            src="/BOY FINAL.webp"
            alt="Contact Illustration"
            className="w-full max-w-[500px] object-contain rounded-[10px]"
          />
        </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer />
    </div>
  );
};

export default ContactPage;