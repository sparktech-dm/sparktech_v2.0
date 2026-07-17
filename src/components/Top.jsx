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
          whileHover={{ scale: 1.12, backgroundColor: "#4e6f87" }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed z-50 bottom-10 left-6 sm:left-10 w-13 h-13 sm:w-15 sm:h-15 flex items-center justify-center rounded-full border-2 border-[#f0c417] text-[#f0c417] cursor-pointer group transition-colors duration-300"
          style={{ background: "#3d5a6e" }}
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-xl sm:text-2xl transition-transform duration-300 group-hover:-translate-y-1" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default Top;