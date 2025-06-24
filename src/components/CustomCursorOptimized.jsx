import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomCursorOptimized = ({ isDarkMode }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const [cursorEmoji, setCursorEmoji] = useState(null);
  const [tooltipText, setTooltipText] = useState('');
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [cursorMode, setCursorMode] = useState('default'); // default, link, text, drag
  
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const glowRef = useRef(null);
  
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });
  
  const rafRef = useRef();

  // Fun emojis for different interactions
  const cursorEmojis = {
    link: ['👆', '👉', '🔗'],
    button: ['🚀', '✨', '🎯'],
    image: ['👁️', '📷', '🖼️'],
    text: ['✏️', '📝', '🔤'],
    default: ['🌟', '💫', '✨']
  };

  // Fun tooltips for different elements
  const funTooltips = {
    link: [
      'Click me if you dare',
      'This link has trust issues',
      'Warning: May cause productivity loss',
      'I promise I am not a rickroll',
      'Your next adventure starts here',
      'Clicking is caring',
      'This link went to therapy',
      'Guaranteed 99 percent virus free'
    ],
    button: [
      'I have been waiting for this moment',
      'Press me like your life depends on it',
      'Warning: Button may cause happiness',
      'This button has commitment issues',
      'I am not just a pretty button',
      'Clicking me validates my existence',
      'This button graduated from Harvard',
      'Press for instant gratification'
    ],
    image: [
      'A picture worth a thousand pixels',
      'This image has seen things',
      'Photographed by a very talented potato',
      'Warning: May cause eye strain from beauty',
      'This image is camera shy',
      'Pixels arranged with love and caffeine',
      'This photo has trust issues',
      'Captured during a good hair day'
    ],
    input: [
      'Your keyboard is judging you',
      'Type like nobody is watching',
      'This field has abandonment issues',
      'Warning: May contain traces of genius',
      'Your thoughts are safe here probably',
      'This input field went to college',
      'Type something your mom would be proud of',
      'Autocorrect is not your friend here'
    ],
    default: [
      'Just casually following you around',
      'I am not stalking I am accompanying',
      'Your personal digital shadow',
      'Cursor life chose me',
      'I have separation anxiety',
      'Professional mouse follower since 2024',
      'This cursor has commitment issues',
      'I am just here for moral support'
    ]
  };

  // Get random item from array
  const getRandomItem = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  // Smooth cursor following with RAF
  const updateCursor = () => {
    const dx = mousePos.current.x - cursorPos.current.x;
    const dy = mousePos.current.y - cursorPos.current.y;
    
    cursorPos.current.x += dx * 0.2;
    cursorPos.current.y += dy * 0.2;
    
    const tdx = mousePos.current.x - trailPos.current.x;
    const tdy = mousePos.current.y - trailPos.current.y;
    
    trailPos.current.x += tdx * 0.1;
    trailPos.current.y += tdy * 0.1;
    
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${cursorPos.current.x - 4}px, ${cursorPos.current.y - 4}px, 0)`;
    }
    
    if (trailRef.current) {
      trailRef.current.style.transform = `translate3d(${trailPos.current.x - 16}px, ${trailPos.current.y - 16}px, 0)`;
    }
    
    if (glowRef.current) {
      glowRef.current.style.transform = `translate3d(${cursorPos.current.x - 24}px, ${cursorPos.current.y - 24}px, 0)`;
    }
    
    // Update tooltip position with slight offset
    setTooltipPosition({ 
      x: cursorPos.current.x + 20, 
      y: cursorPos.current.y - 20 
    });
    
    rafRef.current = requestAnimationFrame(updateCursor);
  };

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const mobile = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    if (isMobile) {
      return () => window.removeEventListener('resize', checkMobile);
    }

    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    const handleMouseDown = (e) => {
      setIsClicking(true);
      
      // Create ripple with random colors
      const colors = ['#0ea5e9', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        color: randomColor
      };
      
      setRipples(prev => [...prev.slice(-3), newRipple]); // Keep max 4 ripples
      
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 800);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      
      // Determine element type for specialized cursor behavior
      if (target.matches('a, [role="link"], .link')) {
        setIsHovering(true);
        setCursorMode('link');
        setCursorEmoji(getRandomItem(cursorEmojis.link));
        setTooltipText(getRandomItem(funTooltips.link));
      } 
      else if (target.matches('button, [role="button"], .btn, .button')) {
        setIsHovering(true);
        setCursorMode('button');
        setCursorEmoji(getRandomItem(cursorEmojis.button));
        setTooltipText(getRandomItem(funTooltips.button));
      }
      else if (target.matches('img, .image, [role="img"], svg')) {
        setIsHovering(true);
        setCursorMode('image');
        setCursorEmoji(getRandomItem(cursorEmojis.image));
        setTooltipText(getRandomItem(funTooltips.image));
      }
      else if (target.matches('input, textarea, [contenteditable="true"]')) {
        setIsHovering(true);
        setCursorMode('text');
        setCursorEmoji(getRandomItem(cursorEmojis.text));
        setTooltipText(getRandomItem(funTooltips.input));
      }
      else if (target.matches('.cursor-pointer, .glass-button, .accent-button')) {
        setIsHovering(true);
        setCursorMode('default');
        setCursorEmoji(getRandomItem(cursorEmojis.default));
        setTooltipText(getRandomItem(funTooltips.default));
      } 
      else {
        setIsHovering(false);
        setCursorMode('default');
        setCursorEmoji(null);
        setTooltipText('');
      }
    };

    // Start animation loop
    rafRef.current = requestAnimationFrame(updateCursor);
    
    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isMobile]);

  if (isMobile) {
    return null;
  }

  // Get cursor styles based on mode
  const getCursorStyles = () => {
    const baseStyles = {
      width: '8px',
      height: '8px',
      borderRadius: '50%',
      backgroundColor: isDarkMode ? '#ffffff' : '#000000',
      mixBlendMode: 'difference',
      transform: 'translate3d(-50vw, -50vh, 0)',
      transition: isClicking ? 'transform 0.1s ease' : isHovering ? 'transform 0.2s ease' : 'none',
    };

    // Adjust cursor based on mode
    switch (cursorMode) {
      case 'link':
        return {
          ...baseStyles,
          scale: isClicking ? '0.5' : '1.5',
          backgroundColor: isDarkMode ? '#0ea5e9' : '#3b82f6',
        };
      case 'button':
        return {
          ...baseStyles,
          scale: isClicking ? '0.5' : '1.8',
          backgroundColor: isDarkMode ? '#8b5cf6' : '#8b5cf6',
        };
      case 'image':
        return {
          ...baseStyles,
          scale: isClicking ? '0.5' : '1.5',
          backgroundColor: isDarkMode ? '#10b981' : '#10b981',
        };
      case 'text':
        return {
          ...baseStyles,
          scale: '1.2',
          width: '4px',
          height: '16px',
          borderRadius: '1px',
          backgroundColor: isDarkMode ? '#ffffff' : '#000000',
        };
      default:
        return {
          ...baseStyles,
          scale: isClicking ? '0.5' : isHovering ? '1.5' : '1',
        };
    }
  };

  return (
    <>
      {/* Main Cursor Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
        style={getCursorStyles()}
      />

      {/* Cursor Trail with dynamic styling */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] will-change-transform"
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: `2px solid ${
            cursorMode === 'link' ? '#0ea5e9' : 
            cursorMode === 'button' ? '#8b5cf6' : 
            cursorMode === 'image' ? '#10b981' : 
            isDarkMode ? '#ffffff' : '#000000'
          }`,
          mixBlendMode: 'difference',
          transform: 'translate3d(-50vw, -50vh, 0)',
          transition: isHovering ? 'transform 0.3s ease, opacity 0.3s ease, width 0.3s ease, height 0.3s ease' : 'opacity 0.3s ease',
          opacity: isHovering ? '0.7' : '0.3',
          scale: isHovering ? '1.5' : '1',
          width: cursorMode === 'text' ? '16px' : '32px',
          height: cursorMode === 'text' ? '16px' : '32px',
        }}
      />

      {/* Emoji cursor for interactive elements */}
      <AnimatePresence>
        {isHovering && cursorEmoji && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 10 }}
            transition={{ duration: 0.2 }}
            className="fixed pointer-events-none z-[9997] text-2xl"
            style={{
              left: `${cursorPos.current.x + 16}px`,
              top: `${cursorPos.current.y - 16}px`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {cursorEmoji}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hover Glow with dynamic colors */}
      {isHovering && (
        <div
          ref={glowRef}
          className="fixed top-0 left-0 pointer-events-none z-[9996] will-change-transform"
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: 
              cursorMode === 'link' ? '#0ea5e9' : 
              cursorMode === 'button' ? '#8b5cf6' : 
              cursorMode === 'image' ? '#10b981' : 
              isDarkMode ? '#0ea5e9' : '#3b82f6',
            filter: 'blur(8px)',
            opacity: '0.2',
            transform: 'translate3d(-50vw, -50vh, 0)',
            transition: 'opacity 0.2s ease, background-color 0.3s ease',
          }}
        />
      )}

      {/* Fun tooltip that appears on hover */}
      <AnimatePresence>
        {isHovering && tooltipText && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className={`fixed pointer-events-none z-[9995] px-3 py-1.5 rounded-lg text-sm font-medium shadow-lg ${
              isDarkMode 
                ? 'bg-dark-800 text-white border border-dark-700' 
                : 'bg-white text-slate-800 border border-gray-200'
            }`}
            style={{
              left: `${tooltipPosition.x}px`,
              top: `${tooltipPosition.y}px`,
              maxWidth: '200px',
            }}
          >
            {tooltipText}
            <div 
              className={`absolute w-2 h-2 transform rotate-45 ${
                isDarkMode ? 'bg-dark-800' : 'bg-white'
              }`}
              style={{
                left: '0',
                top: '50%',
                marginLeft: '-4px',
                marginTop: '-4px',
                borderLeft: isDarkMode ? '1px solid rgb(55, 65, 81)' : '1px solid rgb(229, 231, 235)',
                borderBottom: isDarkMode ? '1px solid rgb(55, 65, 81)' : '1px solid rgb(229, 231, 235)',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click Ripples with enhanced animation */}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          initial={{ scale: 0.2, opacity: 0.8 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="fixed pointer-events-none z-[9994] rounded-full"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: '40px',
            height: '40px',
            backgroundColor: ripple.color,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
      
      {/* Particle effects on click */}
      {ripples.map((ripple) => (
        <React.Fragment key={`particles-${ripple.id}`}>
          {[...Array(6)].map((_, i) => {
            const angle = (Math.PI * 2 / 6) * i;
            const distance = 40;
            return (
              <motion.div
                key={`particle-${ripple.id}-${i}`}
                className="fixed pointer-events-none z-[9993] w-2 h-2 rounded-full"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  backgroundColor: ripple.color,
                }}
                initial={{ 
                  x: 0, 
                  y: 0,
                  opacity: 0.8,
                  scale: 1
                }}
                animate={{ 
                  x: Math.cos(angle) * distance, 
                  y: Math.sin(angle) * distance,
                  opacity: 0,
                  scale: 0
                }}
                transition={{ 
                  duration: 0.6,
                  ease: "easeOut"
                }}
              />
            );
          })}
        </React.Fragment>
      ))}
    </>
  );
};

export default CustomCursorOptimized;