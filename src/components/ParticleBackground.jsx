import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = ({ isDarkMode }) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Set canvas size
    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Track mouse movement
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Create particles
    const createParticles = () => {
      const particleCount = Math.floor(width * height / 15000); // Adjust density
      particlesRef.current = [];
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 2 + 0.5,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          opacity: Math.random() * 0.5 + 0.2
        });
      }
    };
    
    createParticles();
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;
        
        // Calculate distance to mouse
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Interactive effect with mouse
        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          const force = (100 - distance) / 500;
          particle.x -= Math.cos(angle) * force;
          particle.y -= Math.sin(angle) * force;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        
        // Set color based on theme
        if (isDarkMode) {
          const gradient = ctx.createLinearGradient(0, 0, width, height);
          gradient.addColorStop(0, 'rgba(14, 165, 233, ' + particle.opacity + ')');
          gradient.addColorStop(0.5, 'rgba(139, 92, 246, ' + particle.opacity + ')');
          gradient.addColorStop(1, 'rgba(16, 185, 129, ' + (particle.opacity * 0.8) + ')');
          ctx.fillStyle = gradient;
        } else {
          const gradient = ctx.createLinearGradient(0, 0, width, height);
          gradient.addColorStop(0, 'rgba(14, 165, 233, ' + particle.opacity + ')');
          gradient.addColorStop(0.5, 'rgba(139, 92, 246, ' + particle.opacity + ')');
          gradient.addColorStop(1, 'rgba(16, 185, 129, ' + (particle.opacity * 0.8) + ')');
          ctx.fillStyle = gradient;
        }
        
        ctx.fill();
        
        // Draw connections between nearby particles
        particlesRef.current.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              
              // Set line color based on theme
              if (isDarkMode) {
                const opacity = 0.15 * (1 - distance / 100);
                const gradient = ctx.createLinearGradient(
                  particle.x, particle.y, 
                  otherParticle.x, otherParticle.y
                );
                gradient.addColorStop(0, `rgba(14, 165, 233, ${opacity})`);
                gradient.addColorStop(1, `rgba(139, 92, 246, ${opacity})`);
                ctx.strokeStyle = gradient;
              } else {
                const opacity = 0.15 * (1 - distance / 100);
                const gradient = ctx.createLinearGradient(
                  particle.x, particle.y, 
                  otherParticle.x, otherParticle.y
                );
                gradient.addColorStop(0, `rgba(14, 165, 233, ${opacity})`);
                gradient.addColorStop(1, `rgba(139, 92, 246, ${opacity})`);
                ctx.strokeStyle = gradient;
              }
              
              ctx.stroke();
            }
          }
        });
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDarkMode]);
  
  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
};

export default ParticleBackground;