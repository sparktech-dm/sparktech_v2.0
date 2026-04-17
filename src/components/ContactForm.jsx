import React, { useState } from "react";

export const ContactForm = () => {
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

  // Show toast and reset form instantly
  setShowToast(true);
  setFormData({ name: "", email: "", message: "" });
  setTimeout(() => setShowToast(false), 3000);

  // Fire off the request (no await, no blocking)
  fetch("https://script.google.com/macros/s/AKfycbxryuSqXMLcdttGGc_tRy-BvT4_7HkbhoSetOPk2OY91PYHyzSZtyCp1Vam4joFuKWC/exec", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  }).catch((error) => {
    console.error("Sheet error (but form submitted visually):", error);
  });
};

//https://script.google.com/macros/s/AKfycbxryuSqXMLcdttGGc_tRy-BvT4_7HkbhoSetOPk2OY91PYHyzSZtyCp1Vam4joFuKWC/exec

  return (
    <section className="w-full min-h-screen py-8 md:pt-18 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <h2
              className="text-white text-[56px] sm:text-[80px] md:text-[120px] lg:text-[150px] xl:text-[170px] font-normal leading-[1] tracking-tight"
              style={{ fontFamily: "Unbounded" }}
            >
              <span className="block text-white">Let's</span>
              <span className="block text-[#f0c417] pl-1">Talk!</span>
            </h2>
          </div>

          <div className="bg-[#1b222b] backdrop-blur-md rounded-[30px] p-6 sm:p-10 w-full max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-white">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-4 m-2 bg-lime-100/10 border border-lime-400/20 rounded-[20px] text-sm text-lime-200 placeholder-lime-400"
                  style={{ fontFamily: "Inter" }}
                />
                {errors.name && (
                  <p className="text-xs text-red-400 ml-2">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-4 m-2 bg-lime-100/10 border border-lime-400/20 rounded-[20px] text-sm text-lime-200 placeholder-lime-400"                  
                  style={{ fontFamily: "Inter" }}
                />
                {errors.email && (
                  <p className="text-xs text-red-400 ml-2">{errors.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="text-xs font-medium text-white">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  placeholder="Write your message"
                  className="w-full px-4 py-4 m-2 bg-lime-100/10 border border-lime-400/20 rounded-[20px] text-sm text-lime-200 placeholder-black"
                  style={{ fontFamily: "Inter",resize:"none" }}
                />
                {errors.message && (
                  <p className="text-xs text-red-400 ml-2">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 bg-[#f0c417] rounded-[10px] text-[#0A0A0A] text-base font-semibold hover:bg-[#e6751f] transition-all duration-200"
                style={{ fontFamily: "Unbounded", fontWeight: 400 }}
              >
                Submit
              </button>

              {/* Toast */}
              {showToast && (
                <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-[10px] text-green-400 text-sm font-medium text-center transition-all duration-300">
                  Our team will contact you!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
