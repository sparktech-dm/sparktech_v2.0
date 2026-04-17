import React, { useState } from "react";

export const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is SEO and why is it important?",
      answer:
        "SEO (Search Engine Optimization) is the practice of optimizing your website to increase its visibility and ranking in search engine results pages.",
    },
    {
      question: "How long does it take to see results from SEO?",
      answer:
        "SEO results typically take 3-6 months to show significant improvements, depending on competition and optimization efforts.",
    },
    {
      question: "What are the key factors that influence SEO rankings?",
      answer:
        "Key factors include content quality, keyword optimization, site speed, mobile-friendliness, backlinks, and user experience.",
    },
    {
      question: "Do I need to hire an SEO agency, or can I do SEO myself?",
      answer:
        "While basic SEO can be done yourself, professional agencies bring expertise, tools, and time that can significantly improve results.",
    },
    {
      question: "How much does SEO cost?",
      answer:
        "SEO costs vary widely based on scope and provider, ranging from $500-$5000+ monthly for professional services.",
    },
    {
      question: "Can I rank #1 on Google for any keyword?",
      answer:
        "While possible, ranking #1 depends on competition, relevance, authority, and ongoing optimization efforts. Realistic expectations are important.",
    },
    {
      question:
        "Is SEO a one-time effort, or does it require ongoing maintenance?",
      answer:
        "SEO requires ongoing maintenance as search algorithms evolve, competitors adapt, and fresh content needs to be created regularly.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className=" py-16 px-6 sm:px-10 md:px-20 lg:px-40 xl:px-60 ">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 mb-4">
            <span
              className="text-[#f0c417] text-xs font-black uppercase tracking-wide"
              style={{ fontFamily: "Inter" }}
            >
              Frequently Asked Questions
            </span>
          </div>
          <h2
            className="text-white font-normal tracking-tight mx-auto"
            style={{
              fontFamily: 'Unbounded, "Unbounded Placeholder", sans-serif',
              fontSize: "32px",
              fontWeight: 400,
              lineHeight: "38px",
              color: "rgb(255, 255, 255)",
            }}
          >
            Got Questions?
            <br />
            We've Got Answers!
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-5 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-[24px] sm:rounded-[30px] bg-[#1b222b]  backdrop-blur-sm border border-black/10 "
            >
              <button
                className="w-full px-4 sm:px-6 py-5 flex items-center justify-between text-left"
                onClick={() => toggleFAQ(index)}
              >
                <h3
                  className="text-white text-sm sm:text-base font-light leading-relaxed tracking-tight pr-4"
                  style={{
                    fontFamily: 'Unbounded, "Unbounded Placeholder", sans-serif',
                    fontSize: "16px",
                    fontWeight: 300,
                    lineHeight: "24px",
                    color: "rgb(255, 255, 255)",
                  }}
                >
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#f0c417] flex items-center justify-center">
                  <svg
                    className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform duration-200 ${activeIndex === index ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      d="M11.6845 5.55977L7.30953 9.93477C7.2689 9.97545 7.22065 10.0077 7.16754 10.0297C7.11442 10.0518 7.05749 10.0631 7 10.0631C6.9425 10.0631 6.88557 10.0518 6.83246 10.0297C6.77935 10.0077 6.7311 9.97545 6.69047 9.93477L2.31547 5.55977C2.23338 5.47768 2.18726 5.36634 2.18726 5.25024C2.18726 5.13415 2.23338 5.0228 2.31547 4.94071C2.39756 4.85862 2.5089 4.8125 2.625 4.8125C2.7411 4.8125 2.85244 4.85862 2.93453 4.94071L7 9.00673L11.0655 4.94071C11.1061 4.90006 11.1544 4.86782 11.2075 4.84582C11.2606 4.82382 11.3175 4.8125 11.375 4.8125C11.4325 4.8125 11.4894 4.82382 11.5425 4.84582C11.5956 4.86782 11.6439 4.90006 11.6845 4.94071C11.7252 4.98136 11.7574 5.02962 11.7794 5.08273C11.8014 5.13584 11.8127 5.19276 11.8127 5.25024C11.8127 5.30773 11.8014 5.36465 11.7794 5.41776C11.7574 5.47087 11.7252 5.51913 11.6845 5.55977Z"
                      fill="#0D0D0D"
                    />
                  </svg>
                </div>
              </button>
              {activeIndex === index && (
                <div className="px-4 sm:px-6 pb-5">
                  <p
                    className="text-gray-300 text-sm sm:text-base leading-relaxed"
                    style={{
                      fontFamily: 'Satoshi, "Satoshi Placeholder", sans-serif',
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: "24px",
                      color: "rgb(209, 213, 219)",
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
