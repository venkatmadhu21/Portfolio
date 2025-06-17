import React, { useState, useEffect, Suspense, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './styles/smoothScroll.css';

// Import components
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/ProjectsNew';
import SkillsRedesigned from './components/SkillsRedesigned.optimized';
import DSAShowcase from './components/DSAShowcase';
import ContactRedesigned from './components/ContactRedesigned';
import AboutMeRedesigned from './components/AboutMeRedesigned';
// Command Palette removed
import FooterRedesigned from './components/FooterRedesigned';
import ParticleBackground from './components/ParticleBackground';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursorOptimized';


function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode !== null ? JSON.parse(savedMode) : true;
  });
  // Command palette feature removed
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Simple ref for main content
  const mainRef = useRef(null);
  
  // Custom scroll animation hook removed for better scrolling

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    // Set initial dark mode class on body
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    
    // Listen for theme toggle event
    const handleThemeToggle = () => {
      toggleTheme();
    };
    
    // Simple scroll tracking for navbar
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    document.addEventListener('toggleTheme', handleThemeToggle);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      document.removeEventListener('toggleTheme', handleThemeToggle);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigate = (section) => {
    console.log("Navigating to:", section);
    setCurrentSection(section);
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
    
    // Simple scroll to section using browser's native smooth scrolling
    const element = document.getElementById(section);
    if (element) {
      // Add a small delay to ensure UI updates first
      setTimeout(() => {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 50);
    }
  };
  
  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
    
    // Add or remove 'dark' class from body
    if (newDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  };
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-dark-950 text-gray-200' : 'bg-gray-50 text-gray-800'} transition-colors duration-300 noise-bg`}>
      {/* Scroll Progress Indicator */}
      <ScrollProgress isDarkMode={isDarkMode} />
      
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark-950"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <svg className="w-24 h-24" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
                <circle 
                  cx="50" cy="50" r="40" 
                  stroke="url(#gradient)" 
                  strokeWidth="3" 
                  fill="none" 
                  strokeDasharray="251.2" 
                  strokeDashoffset="0"
                  className="animate-[dash_1.5s_ease-in-out_infinite]"
                />
              </svg>
              <motion.div 
                className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                VM
              </motion.div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute mt-32 bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent font-mono"
            >
              Building experience...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Command Palette removed */}
      
      {/* Navbar */}
      <Navbar 
        currentSection={currentSection}
        onNavigate={handleNavigate}
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
        scrollPosition={scrollPosition}
      />
      
      {/* Command Palette Shortcut Hint removed */}
      
      {/* Particle Background */}
      {!isLoading && <ParticleBackground isDarkMode={isDarkMode} />}
      
      {/* Main Content */}
      <main 
        ref={mainRef}
        className="pt-16 relative z-10"
      >
        {/* Home/Hero Section */}
        <section 
          id="home" 
          className="min-h-screen flex items-center py-8 md:py-0"
        >
          <Home isDarkMode={isDarkMode} onNavigate={handleNavigate} />
        </section>
        
        {/* About Section */}
        <section 
          id="about" 
          className="py-20"
        >
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading 3D content...</div>}>
              <AboutMeRedesigned isDarkMode={isDarkMode} />
            </Suspense>
          </div>
        </section>
        
        {/* Projects Section */}
        <section 
          id="projects" 
          className="py-20" 
          style={{ 
            backgroundImage: isDarkMode 
              ? 'radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.08) 0%, transparent 40%)' 
              : 'radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.1) 0%, transparent 40%)'
          }}
        >
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <Projects isDarkMode={isDarkMode} />
          </div>
        </section>
        
        {/* Skills Section */}
        <section 
          id="skills" 
          className="py-20"
        >
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <SkillsRedesigned isDarkMode={isDarkMode} />
          </div>
        </section>
        
        {/* DSA Showcase Section */}
        <section 
          id="dsa" 
          className="py-20" 
          style={{ 
            backgroundImage: isDarkMode 
              ? 'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 40%)' 
              : 'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 40%)'
          }}
        >
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <DSAShowcase isDarkMode={isDarkMode} />
          </div>
        </section>
        
        {/* Contact Section */}
        <section 
          id="contact" 
          className="py-20"
        >
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <ContactRedesigned isDarkMode={isDarkMode} />
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <FooterRedesigned isDarkMode={isDarkMode} />
      
      {/* Custom Cursor */}
      {!isLoading && <CustomCursor isDarkMode={isDarkMode} />}
      
      {/* Scroll to Top Button removed for better scrolling */}
    </div>
  );
}

export default App;
