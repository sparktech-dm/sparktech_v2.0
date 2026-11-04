import React, { useState } from "react";

const chevronPatternBg = {
  backgroundColor: "#ffffff",
};

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is SparkTech Digital Marketing?",
      answer:
        "SparkTech Digital Marketing is a premier digital growth agency in Chennai, specializing in data-driven search engine optimization (SEO), custom website development, targeted Google Ads (PPC), social media marketing, and automated email marketing.",
    },
    {
      question: "Where is SparkTech Digital Marketing located?",
      answer:
        "Our office is located at C1, Honey tone Apartments, Shankarapuram 1st Street, Choolaimedu, Chennai, Tamil Nadu 600094, India.",
    },
    {
      question: "Does SparkTech provide SEO services in Chennai?",
      answer:
        "Yes, SparkTech delivers comprehensive technical, on-page, off-page, and local SEO services designed to help Chennai businesses rank higher on Google, capture high-intent organic search traffic, and outrank regional competitors.",
    },
    {
      question: "Does SparkTech offer website development and UI/UX design?",
      answer:
        "Yes, we build modern, fast-loading, mobile-responsive websites utilizing React and performance-optimized architectures to ensure seamless user experience and maximum lead conversion.",
    },
    {
      question: "Does SparkTech provide social media marketing?",
      answer:
        "Yes, we create and execute data-backed social media campaigns across Meta, Instagram, and LinkedIn to build brand authority, foster community engagement, and generate qualified leads.",
    },
    {
      question: "Does SparkTech serve businesses in Choolaimedu and across Chennai?",
      answer:
        "Yes, we partner with startups, growing brands, and established enterprises in Choolaimedu, Kodambakkam, Nungambakkam, and throughout the greater Chennai metropolitan area, as well as clients across India.",
    },
    {
      question: "How can businesses contact SparkTech Digital?",
      answer:
        "You can reach our team by phone at +91 8939892219, email us at sparktechdm@gmail.com, visit our Choolaimedu office in Chennai, or request a free consultation through our website contact form.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section style={chevronPatternBg} className=" py-16 px-6 sm:px-10 md:px-20 lg:px-40 xl:px-60 ">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#cc7722]/10 mb-4 border border-[#cc7722]/20">
            <span
              className="text-[#cc7722] text-xs font-black uppercase tracking-wide"
              style={{ fontFamily: "Inter" }}
            >
              Frequently Asked Questions
            </span>
          </div>
          <h2
            className="text-[#1b365d] font-normal tracking-tight mx-auto"
            style={{
              fontFamily: 'Unbounded, "Unbounded Placeholder", sans-serif',
              fontSize: "32px",
              fontWeight: 600,
              lineHeight: "38px",
            }}
          >
            Everything <span className="text-[#cc7722]">You</span>
            <br />
            Need to <span className="text-[#cc7722]">Know!</span>
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-5 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-[24px] sm:rounded-[30px] bg-[#f2eee0] backdrop-blur-sm border border-[#cc7722]/30 shadow-sm"
            >
              <button
                className="w-full px-4 sm:px-6 py-5 flex items-center justify-between text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h3
                  className="text-[#1b365d] text-sm sm:text-base font-medium leading-relaxed tracking-tight pr-4"
                  style={{
                    fontFamily: 'Unbounded, "Unbounded Placeholder", sans-serif',
                    fontSize: "16px",
                    lineHeight: "24px",
                  }}
                >
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#cc7722] flex items-center justify-center">
                  <svg
                    className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-200 ${activeIndex === index ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      d="M11.6845 5.55977L7.30953 9.93477C7.2689 9.97545 7.22065 10.0077 7.16754 10.0297C7.11442 10.0518 7.05749 10.0631 7 10.0631C6.9425 10.0631 6.88557 10.0518 6.83246 10.0297C6.77935 10.0077 6.7311 9.97545 6.69047 9.93477L2.31547 5.55977C2.23338 5.47768 2.18726 5.36634 2.18726 5.25024C2.18726 5.13415 2.23338 5.0228 2.31547 4.94071C2.39756 4.85862 2.5089 4.8125 2.625 4.8125C2.7411 4.8125 2.85244 4.85862 2.93453 4.94071L7 9.00673L11.0655 4.94071C11.1061 4.90006 11.1544 4.86782 11.2075 4.84582C11.2606 4.82382 11.3175 4.8125 11.375 4.8125C11.4325 4.8125 11.4894 4.82382 11.5425 4.84582C11.5956 4.86782 11.6439 4.90006 11.6845 4.94071C11.7252 4.98136 11.7574 5.02962 11.7794 5.08273C11.8014 5.13584 11.8127 5.19276 11.8127 5.25024C11.8127 5.30773 11.8014 5.36465 11.7794 5.41776C11.7574 5.47087 11.7252 5.51913 11.6845 5.55977Z"
                      fill="#FFFFFF"
                    />
                  </svg>
                </div>
              </button>
              {activeIndex === index && (
                <div className="px-4 sm:px-6 pb-5">
                  <p
                    className="text-[#395c7a] text-sm sm:text-base leading-relaxed"
                    style={{
                      fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif',
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: "24px",
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
