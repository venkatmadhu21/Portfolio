import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = ({ isDarkMode }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 40,
    mass: 1.5,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 origin-left"
      style={{ 
        scaleX,
        background: `linear-gradient(to right, #0ea5e9, #8b5cf6, #10b981)`,
        opacity: 0.8,
        height: "3px",
        boxShadow: "0 0 10px rgba(139, 92, 246, 0.5)"
      }}
    />
  );
};

export default ScrollProgress;