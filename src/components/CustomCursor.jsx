import React, { useEffect, useState, useCallback, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = ({ isDarkMode }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isMobile, setIsMobile] = useState(false);
  
  // Use motion values for better performance
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // Use spring for smooth following
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  
  // Refs for performance
  const rafRef = useRef();
  const mousePos = useRef({ x: 0, y: 0 });

  const updateMousePosition = useCallback((e) => {
    mousePos.current = { x: e.clientX, y: e.clientY };
    
    // Use RAF for smooth updates
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    
    rafRef.current = requestAnimationFrame(() => {
      cursorX.set(mousePos.current.x);
      cursorY.set(mousePos.current.y);
    });
  }, [cursorX, cursorY]);

  const handleMouseDown = useCallback((e) => {
    setIsClicking(true);
    
    // Create ripple effect with throttling
    const newRipple = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
    };
    
    setRipples(prev => {
      // Limit ripples to prevent performance issues
      const newRipples = [...prev, newRipple];
      return newRipples.slice(-3); // Keep only last 3 ripples
    });
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsClicking(false);
  }, []);

  const handleMouseOver = useCallback((e) => {
    const target = e.target;
    
    if (target.matches('a, button, [role="button"], input, textarea, select, .cursor-pointer, .glass-button, .accent-button')) {
      setIsHovering(true);
      setCursorVariant('button');
    } else if (target.matches('h1, h2, h3, h4, h5, h6')) {
      setIsHovering(true);
      setCursorVariant('text');
    } else {
      setIsHovering(false);
      setCursorVariant('default');
    }
  }, []);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(hover: none) and (pointer: coarse)').matches);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Don't add cursor events on mobile
    if (isMobile) {
      return () => {
        window.removeEventListener('resize', checkMobile);
      };
    }
    
    // Add event listeners with passive option for better performance
    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [updateMousePosition, handleMouseDown, handleMouseUp, handleMouseOver, isMobile]);

  // Don't render cursor on mobile devices
  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="w-2 h-2 rounded-full"
          style={{
            backgroundColor: isDarkMode ? '#ffffff' : '#000000',
            mixBlendMode: 'difference',
          }}
          animate={{
            scale: isClicking ? 0.5 : isHovering ? 1.5 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30,
          }}
        />
      </motion.div>

      {/* Cursor Trail Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] will-change-transform"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className={`w-8 h-8 rounded-full border ${
            isDarkMode ? 'border-white' : 'border-black'
          }`}
          style={{
            mixBlendMode: 'difference',
          }}
          animate={{
            scale: isHovering ? 1.5 : 1,
            opacity: isHovering ? 0.6 : 0.3,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            delay: 0.02,
          }}
        />
      </motion.div>

      {/* Click Ripple Effects */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="fixed pointer-events-none z-[9997] will-change-transform"
          style={{
            left: ripple.x,
            top: ripple.y,
            translateX: '-50%',
            translateY: '-50%',
          }}
          initial={{
            scale: 0,
            opacity: 0.8,
          }}
          animate={{
            scale: 4,
            opacity: 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
        >
          <div className={`w-6 h-6 rounded-full border-2 ${
            isDarkMode ? 'border-primary-400' : 'border-primary-500'
          }`} />
        </motion.div>
      ))}

      {/* Hover Glow Effect */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9996] will-change-transform"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            translateX: '-50%',
            translateY: '-50%',
          }}
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 0.15,
          }}
          exit={{
            scale: 0,
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
        >
          <div className={`w-12 h-12 rounded-full blur-sm ${
            cursorVariant === 'button' 
              ? (isDarkMode ? 'bg-primary-400' : 'bg-primary-500')
              : cursorVariant === 'text'
              ? (isDarkMode ? 'bg-secondary-400' : 'bg-secondary-500')
              : (isDarkMode ? 'bg-white' : 'bg-black')
          }`} />
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;