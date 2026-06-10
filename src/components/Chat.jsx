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
        <div className="w-[90vw] sm:w-80 max-h-[80vh] bg-white rounded-xl shadow-xl border border-gray-500 flex flex-col">
          <div className="flex justify-between items-center bg-[#f0c417] text-white p-3 rounded-t-xl">
            <h4 className="text-sm font-semibold">🤖 Sparky</h4>
            <button onClick={() => setIsOpen(false)}><X size={18} /></button>
          </div>

          <div className="max-h-80 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-md w-fit max-w-[90%] ${msg.type === "bot"
                    ? "bg-gray-500 text-left"
                    : "bg-purple-500 text-right ml-auto"
                  }`}
              >
                {msg.text}
              </div>
            ))}

            {isTyping && (
              <div className="p-2 bg-gray-700 rounded-md w-fit text-left animate-pulse">
                Bot is typing<span className="dot-animate">...</span>
              </div>
            )}

            <div className="mt-4 space-y-2">
              <p className="font-semibold text-gray-600">💡 Suggested Questions:</p>
              {FAQ.map((faq, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuestionClick(faq)}
                  className="block w-full text-left text-blue-600 hover:underline text-sm"
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
          className="bg-purple-700 hover:bg-purple-800 text-white p-4 rounded-full shadow-lg"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
};

export default ChatBot;
