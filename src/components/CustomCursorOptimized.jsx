import React, { useEffect, useState, useRef } from 'react';

const CustomCursorOptimized = ({ isDarkMode }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [ripples, setRipples] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const glowRef = useRef(null);
  
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const trailPos = useRef({ x: 0, y: 0 });
  
  const rafRef = useRef();

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
      
      // Create ripple
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      
      setRipples(prev => [...prev.slice(-2), newRipple]); // Keep max 3 ripples
      
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 600);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      
      if (target.matches('a, button, [role="button"], input, textarea, select, .cursor-pointer, .glass-button, .accent-button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
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

  return (
    <>
      {/* Main Cursor Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: isDarkMode ? '#ffffff' : '#000000',
          mixBlendMode: 'difference',
          transform: 'translate3d(-50vw, -50vh, 0)',
          transition: isClicking ? 'transform 0.1s ease' : isHovering ? 'transform 0.2s ease' : 'none',
          scale: isClicking ? '0.5' : isHovering ? '1.5' : '1',
        }}
      />

      {/* Cursor Trail */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] will-change-transform"
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          border: `2px solid ${isDarkMode ? '#ffffff' : '#000000'}`,
          mixBlendMode: 'difference',
          transform: 'translate3d(-50vw, -50vh, 0)',
          transition: isHovering ? 'transform 0.3s ease, opacity 0.3s ease' : 'opacity 0.3s ease',
          opacity: isHovering ? '0.6' : '0.3',
          scale: isHovering ? '1.5' : '1',
        }}
      />

      {/* Hover Glow */}
      {isHovering && (
        <div
          ref={glowRef}
          className="fixed top-0 left-0 pointer-events-none z-[9997] will-change-transform"
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: isDarkMode ? '#0ea5e9' : '#3b82f6',
            filter: 'blur(8px)',
            opacity: '0.15',
            transform: 'translate3d(-50vw, -50vh, 0)',
            transition: 'opacity 0.2s ease',
          }}
        />
      )}

      {/* Click Ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="fixed pointer-events-none z-[9996] w-12 h-12 rounded-full border-2"
          style={{
            left: ripple.x - 24,
            top: ripple.y - 24,
            borderColor: isDarkMode ? '#0ea5e9' : '#3b82f6',
            animation: 'ripple-expand 0.6s ease-out forwards',
          }}
        />
      ))}
    </>
  );
};

export default CustomCursorOptimized;