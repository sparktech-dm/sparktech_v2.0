import React, { useState } from "react";
import { BsSend } from "react-icons/bs";
import Footer from "./Footer";

export const ContactForm1 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  const validateForm = () => {
    let tempErrors = {};

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Enter a valid email";
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setShowToast(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setShowToast(false), 3000);

    fetch("https://script.google.com/macros/s/AKfycbxryuSqXMLcdttGGc_tRy-BvT4_7HkbhoSetOPk2OY91PYHyzSZtyCp1Vam4joFuKWC/exec", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).catch((error) => {
      console.error("Sheet error (but form submitted visually):", error);
    });
  };

  return (
    <>  
<section className="w-full flex justify-center px-4 sm:px-8  md:px-16 my-10 mt-30">
      <div className="bg-[#2B2B2B] backdrop-blur-mdd rounded-[30px] p-9 sm:p-10 w-full max-w-6xl flex flex-col md:flex-row gap-8 ">

        {/* Left: Form Section */}
        <div className="w-full md:w-2/3 space-y-5">
          <span className="text-2xl font-bold text-white underline decoration-4 decoration-[#f0c417] underline-offset-4">
            Get in Touch
          </span>
          <p className="mt-2 mb-2 text-sm text-gray-400">We'd love to hear from you! Fill out the form below and our team will get back to you soon.</p>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div className="space-y-2 ">
              <label className=" text-xs font-medium text-white p-5">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full mt-2 px-4 py-4 bg-lime-100/10 border border-lime-400/20 rounded-[20px] text-sm text-lime-200 placeholder-lime-400"
                style={{ fontFamily: "Inter" }}
              />
              {errors.name && <p className="text-xs text-red-400 ml-2">{errors.name}</p>}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-white p-5">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full  mt-2 px-4 py-4 bg-lime-100/10 border border-lime-400/20 rounded-[20px] text-sm text-lime-200 placeholder-lime-400"
                style={{ fontFamily: "Inter" }}
              />
              {errors.email && <p className="text-xs text-red-400 ml-2">{errors.email}</p>}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-white p-5">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                placeholder="Write your message"
                className="w-full  mt-2 px-4 py-4 bg-lime-100/10 border border-lime-400/20 rounded-[20px] text-sm text-lime-200 placeholder-black"
                style={{ fontFamily: "Inter" }}
              />
              {errors.message && <p className="text-xs text-red-400 ml-2">{errors.message}</p>}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-[#f0c417] rounded-[10px] text-[#0A0A0A] font-semibold hover:bg-[#e6751f] transition-all duration-200 transform hover:scale-105 transition-transform duration-300"
              style={{ fontFamily: "Unbounded", fontWeight: 400 }}
            >
<div className="flex items-center justify-center text-l  ">
               <span className="text-xl flex ml-4 mr-1 sm:text-l "><BsSend /></span>Send Message
               </div>
            </button>

            {/* Toast */}
            {showToast && (
              <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-[10px] text-green-400 text-sm font-medium text-center transition-all duration-300">
                Our team will contact you!
              </div>
            )}
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className=" w-full text-xl md:w-1/3 md:text-xl  space-y-6 ">
          <h2 className="text-2xl font-bold text-white underline decoration-4 decoration-[#f0c417] underline-offset-4">Contact Information</h2>
          {/* Email Box */}
          <div  className="pt-5">
          <div className=" rounded-[30px] pb-5 flex items-center space-x-1">
            <div className="w-8 h-8 flex items-center justify-center shrink-0">
              <svg width="30" height="31" viewBox="0 0 30 31" fill="none">
                <path
                  d="M26.25 6.14502H3.75C3.50136 6.14502 3.2629 6.24379 3.08709 6.41961C2.91127 6.59542 2.8125 6.83388 2.8125 7.08252V23.02C2.8125 23.5173 3.01004 23.9942 3.36167 24.3458C3.71331 24.6975 4.19022 24.895 4.6875 24.895H25.3125C25.8098 24.895 26.2867 24.6975 26.6383 24.3458C26.99 23.9942 27.1875 23.5173 27.1875 23.02V7.08252C27.1875 6.83388 27.0887 6.59542 26.9129 6.41961C26.7371 6.24379 26.4986 6.14502 26.25 6.14502ZM15 16.1235L6.16055 8.02002H23.8395L15 16.1235ZM11.5676 15.52L4.6875 21.8259V9.21416L11.5676 15.52ZM12.9551 16.7915L14.3613 18.0864C14.5343 18.2452 14.7605 18.3333 14.9953 18.3333C15.2301 18.3333 15.4563 18.2452 15.6293 18.0864L17.0355 16.7915L23.8324 23.02H6.16055L12.9551 16.7915ZM18.4324 15.52L25.3125 9.21299V21.8271L18.4324 15.52Z"
                  fill="#f0c417"
                />
              </svg>
            </div>
            <span className="text-white text-base md:text-[20px] font-normal">sparktechdm@gmail.com</span>
          </div>

          {/* Phone Box */}
          <div className=" rounded-[30px] pb-5 flex items-center space-x-1">
            <div className="w-8 h-8 flex items-center justify-center shrink-0">
              <svg width="30" height="31" viewBox="0 0 30 31" fill="none">
                <path
                  d="M26.059 19.0893L20.5383 16.6155L20.5231 16.6085C20.2365 16.4859 19.9238 16.4367 19.6134 16.4653C19.303 16.494 19.0047 16.5996 18.7453 16.7725C18.7148 16.7927 18.6854 16.8146 18.6574 16.8381L15.8051 19.2698C13.9981 18.392 12.1324 16.5405 11.2547 14.7569L13.6899 11.8612C13.7133 11.8319 13.7356 11.8026 13.7567 11.771C13.9259 11.5123 14.0286 11.2159 14.0556 10.908C14.0826 10.6 14.033 10.2902 13.9113 10.0061V9.99205L11.4305 4.46197C11.2696 4.0908 10.993 3.7816 10.642 3.58053C10.291 3.37946 9.88437 3.29731 9.48282 3.34634C7.8949 3.5553 6.43733 4.33514 5.38235 5.54021C4.32738 6.74528 3.74714 8.29317 3.75001 9.89478C3.75001 19.1995 11.3203 26.7698 20.625 26.7698C22.2266 26.7727 23.7745 26.1924 24.9796 25.1374C26.1847 24.0825 26.9645 22.6249 27.1734 21.037C27.2226 20.6356 27.1406 20.229 26.9397 19.878C26.7389 19.527 26.43 19.2504 26.059 19.0893Z"
                  fill="#f0c417"
                />
              </svg>
            </div>
            <span className="text-white md:text-xl text-base font-normal">+91 8939892219

</span>
          </div>

          {/* Address Box */}
          <div className=" rounded-[30px]  flex items-center space-x-1">
            <div className="w-8 h-8 flex items-center justify-center shrink-0">
              <svg width="30" height="31" viewBox="0 0 30 31" fill="none">
                <path
                  d="M15 2.39502C12.2659 2.39812 9.64468 3.48561 7.71139 5.41891C5.77809 7.3522 4.6906 9.97343 4.6875 12.7075C4.6875 16.3872 6.38789 20.2872 9.60938 23.9868C11.0569 25.6586 12.6861 27.1639 14.4668 28.4751C14.6244 28.5855 14.8122 28.6448 15.0047 28.6448C15.1971 28.6448 15.3849 28.5855 15.5426 28.4751C17.32 27.1634 18.946 25.658 20.3906 23.9868C23.6074 20.2872 25.3125 16.3872 25.3125 12.7075C25.3094 9.97343 24.2219 7.3522 22.2886 5.41891C20.3553 3.48561 17.7341 2.39812 15 2.39502ZM15 15.52C14.4437 15.52 13.9 15.3551 13.4375 15.046C12.9749 14.737 12.6145 14.2977 12.4016 13.7838C12.1887 13.2699 12.133 12.7044 12.2415 12.1588C12.3501 11.6133 12.6179 11.1121 13.0113 10.7188C13.4046 10.3254 13.9057 10.0576 14.4513 9.94906C14.9969 9.84054 15.5624 9.89624 16.0763 10.1091C16.5902 10.322 17.0295 10.6825 17.3385 11.145C17.6476 11.6075 17.8125 12.1513 17.8125 12.7075C17.8125 13.4534 17.5162 14.1688 16.9887 14.6963C16.4613 15.2237 15.7459 15.52 15 15.52Z"
                  fill="#f0c417"
                />
              </svg>
            </div>
            <span className="text-white text-[15px]  md:text-[17px]   font-normal">C1, Honey tone Apartments, shankarapuram 1st Street, Choolaimedu, Chennai 600094</span>
          </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default ContactForm1;
