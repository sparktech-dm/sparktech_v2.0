import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const FAQ = [
  { q: "What services do you offer?", a: "We provide Web Development, SEO, Content Creation, and more." },
  { q: "How can I contact you?", a: "You can use our contact form or email us directly." },
  { q: "Do you offer support?", a: "Yes, we offer post-deployment support as per the agreement." },
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi there! I am Sparky How can I help you today? You can click on a question below. 😊" }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleQuestionClick = (faq) => {
    setMessages((prev) => [...prev, { type: "user", text: faq.q }]);
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [...prev, { type: "bot", text: faq.a }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 ">
      {isOpen ? (
        <div className="w-[90vw] sm:w-80 max-h-[80vh] bg-[#2B2B2B] text-white rounded-xl shadow-xl border border-[#cc7722] flex flex-col">
          <div className="flex justify-between items-center bg-[#cc7722] text-[#2B2B2B] p-3 rounded-t-xl">
            <h4 className="text-sm font-semibold">🤖 Sparky</h4>
            <button onClick={() => setIsOpen(false)} className="hover:scale-110 transition-transform"><X size={18} /></button>
          </div>

          <div className="max-h-80 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-md w-fit max-w-[90%] ${msg.type === "bot"
                    ? "bg-[#4f4e4e] text-white text-left"
                    : "bg-[#cc7722] text-[#2B2B2B] font-medium text-right ml-auto"
                  }`}
              >
                {msg.text}
              </div>
            ))}

            {isTyping && (
              <div className="p-2 bg-[#4f4e4e] text-white rounded-md w-fit text-left animate-pulse">
                Bot is typing<span className="dot-animate">...</span>
              </div>
            )}

            <div className="mt-4 space-y-2">
              <p className="font-semibold text-gray-300">💡 Suggested Questions:</p>
              {FAQ.map((faq, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuestionClick(faq)}
                  className="block w-full text-left text-[#cc7722] hover:underline text-sm"
                >
                  • {faq.q}
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-[#cc7722] text-[#cc7722] bg-[#2B2B2B] hover:bg-[#cc7722] hover:text-[#2B2B2B] cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
          aria-label="Open chat"
        >
          <MessageCircle size={26} className="transition-transform duration-300 hover:rotate-12" />
        </button>
      )}
    </div>
  );
};

export default ChatBot;
