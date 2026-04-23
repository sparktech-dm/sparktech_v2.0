import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

const Top = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(240, 196, 23, 0.6)" }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed z-50 bottom-10 left-6 sm:left-10 w-12 h-12 sm:w-14 sm:h-14 bg-black/40 backdrop-blur-xl border border-yellow-400/30 text-yellow-400 rounded-2xl flex items-center justify-center shadow-2xl cursor-pointer group transition-colors duration-300 hover:bg-yellow-400 hover:text-black hover:border-yellow-400"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl sm:text-2xl transition-transform duration-300 group-hover:-translate-y-1" />
          
          {/* Subtle glow pulse */}
          <div className="absolute inset-0 rounded-2xl bg-yellow-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default Top;