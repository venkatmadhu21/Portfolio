import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTopButton = ({ isDarkMode, showScrollToTop }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {showScrollToTop && (
        <motion.button
          onClick={scrollToTop}        
          className="uniform-button-secondary fixed bottom-8 right-8 p-3 rounded-full z-40 group overflow-hidden"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
            boxShadow: [
              isDarkMode 
                ? '0 10px 25px -5px rgba(0, 0, 0, 0.3)' 
                : '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
              isDarkMode 
                ? '0 10px 25px -5px rgba(14, 165, 233, 0.3)' 
                : '0 10px 25px -5px rgba(14, 165, 233, 0.2)',
              isDarkMode 
                ? '0 10px 25px -5px rgba(0, 0, 0, 0.3)' 
                : '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
            ]
          }}
          transition={{ 
            duration: 0.5,
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -5, 5, -5, 0],
            transition: { rotate: { duration: 0.5 } }
          }}
          whileTap={{ scale: 0.9 }}    
        >
          {/* Animated ripple effect on hover */}
          <motion.div 
            className={`absolute inset-0 rounded-full ${
              isDarkMode ? 'bg-primary-500' : 'bg-primary-500'
            } opacity-0 group-hover:opacity-20`}
            initial={{ scale: 0 }}
            whileHover={{ scale: 1.5, opacity: 0.2 }}
            transition={{ duration: 0.5 }}
          />
          
          {/* Tooltip that appears on hover */}
          <motion.div
            className={`absolute -top-10 left-1/2 transform -translate-x-1/2 px-3 py-1.5 rounded-lg text-xs font-medium ${
              isDarkMode 
                ? 'bg-dark-800 text-white border border-dark-700' 
                : 'bg-white text-slate-800 border border-gray-200'
            } shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none`}
            initial={{ y: 10, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            Escape the scroll of shame
            <div 
              className={`absolute w-2 h-2 transform rotate-45 ${
                isDarkMode ? 'bg-dark-800' : 'bg-white'
              } -bottom-1 left-1/2 -ml-1 border-r ${
                isDarkMode ? 'border-dark-700' : 'border-gray-200'
              } border-b ${
                isDarkMode ? 'border-dark-700' : 'border-gray-200'
              }`}
            />
          </motion.div>
          
          {/* Arrow icon with animation */}
          <motion.svg 
            className="w-6 h-6 relative z-10" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
            animate={{ y: [0, -2, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </motion.svg>
          
          {/* Animated particles that float up on hover */}
          <motion.div className="absolute inset-0 pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1 h-1 rounded-full ${
                  i % 2 === 0 ? 'bg-primary-400' : 'bg-secondary-400'
                }`}
                initial={{ 
                  x: Math.random() * 30 - 15,
                  y: Math.random() * 30 - 15,
                  opacity: 0
                }}
                whileHover={{ 
                  y: [-20, -40],
                  opacity: [0, 0.8, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 1 + Math.random(),
                  ease: "easeOut",
                  delay: i * 0.1
                }}
              />
            ))}
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;