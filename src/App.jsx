import React, { useState, useEffect, Suspense, useRef, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './styles/smoothScroll.css';

// Import components
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProjectsProfessional from './components/ProjectsProfessional';
import CreativeInvitation from './components/CreativeInvitation';

import CustomCursor from './components/CustomCursorOptimized';
import ScrollToTopButton from './components/ScrollToTopButton';

// Lazy load non-critical components for better performance
const SkillsCreative = lazy(() => import('./components/SkillsCreative'));
const DSAShowcase = lazy(() => import('./components/DSAShowcase'));
const ContactRedesigned = lazy(() => import('./components/ContactRedesigned'));
const AboutMeProfessional = lazy(() => import('./components/AboutMeProfessional'));
const FooterRedesigned = lazy(() => import('./components/FooterRedesigned'));
const ParticleBackground = lazy(() => import('./components/ParticleBackground'));

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [showInvitation, setShowInvitation] = useState(() => {
    // Check if user has seen the invitation before
    const hasSeenInvitation = localStorage.getItem('hasSeenInvitation');
    return !hasSeenInvitation;
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode !== null ? JSON.parse(savedMode) : true;
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  
  // Refs for sections to enable intersection observer
  const mainRef = useRef(null);
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    dsa: useRef(null),
    contact: useRef(null)
  };
  
  // Handle initial loading animation
  useEffect(() => {
    // Simulate loading with a minimum time to show the animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    
    // Set initial dark mode class on body
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    
    return () => {
      clearTimeout(timer);
    };
  }, []);
  
  // Handle scroll events and section detection
  useEffect(() => {
    // Listen for theme toggle event
    const handleThemeToggle = () => {
      toggleTheme();
    };
    
    // Handle scroll for various UI elements
    const handleScroll = () => {
      const currentPos = window.scrollY;
      setScrollPosition(currentPos);
      setShowScrollToTop(currentPos > 600);
      
      // Determine active section based on scroll position
      const sections = Object.keys(sectionRefs);
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const ref = sectionRefs[section].current;
        
        if (ref) {
          const rect = ref.getBoundingClientRect();
          // If the section is in view (with some buffer for better UX)
          if (rect.top <= 200 && rect.bottom >= 200) {
            if (currentSection !== section) {
              setCurrentSection(section);
            }
            break;
          }
        }
      }
    };
    
    document.addEventListener('toggleTheme', handleThemeToggle);
    window.addEventListener('scroll', handleScroll);
    
    // Initial call to set the correct section
    handleScroll();
    
    return () => {
      document.removeEventListener('toggleTheme', handleThemeToggle);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentSection]);

  const handleNavigate = (section) => {
    setCurrentSection(section);
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
    
    // Scroll to section using browser's native smooth scrolling
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
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleInvitationAccept = () => {
    setShowInvitation(false);
    // Save to localStorage so invitation won't show again
    localStorage.setItem('hasSeenInvitation', 'true');
  };

  // Utility function to reset invitation (for testing - can be called from browser console)
  window.resetInvitation = () => {
    localStorage.removeItem('hasSeenInvitation');
    window.location.reload();
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-dark-950 text-gray-200' : 'bg-gray-50 text-gray-800'} transition-colors duration-300 noise-bg`}>

      {/* Creative Invitation */}
      {showInvitation && (
        <CreativeInvitation 
          onAccept={handleInvitationAccept}
          isDarkMode={isDarkMode}
        />
      )}
      
      {/* Loading Screen with fun, engaging animation */}
      <AnimatePresence>
        {isLoading && !showInvitation && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-950"
          >
            <motion.div
              className="relative mb-8"
              initial={{ rotate: 0 }}
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              {/* Animated gear-like loader */}
              <svg className="w-32 h-32" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9">
                      <animate attributeName="stop-color" 
                        values="#0ea5e9; #8b5cf6; #10b981; #0ea5e9" 
                        dur="4s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="50%" stopColor="#8b5cf6">
                      <animate attributeName="stop-color" 
                        values="#8b5cf6; #10b981; #0ea5e9; #8b5cf6" 
                        dur="4s" repeatCount="indefinite" />
                    </stop>
                    <stop offset="100%" stopColor="#10b981">
                      <animate attributeName="stop-color" 
                        values="#10b981; #0ea5e9; #8b5cf6; #10b981" 
                        dur="4s" repeatCount="indefinite" />
                    </stop>
                  </linearGradient>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                
                {/* Outer circle with dash animation */}
                <circle 
                  cx="50" cy="50" r="40" 
                  stroke="url(#gradient)" 
                  strokeWidth="3" 
                  fill="none" 
                  strokeDasharray="251.2" 
                  strokeDashoffset="0"
                  filter="url(#glow)"
                  className="animate-[dash_1.5s_ease-in-out_infinite]"
                />
                
                {/* Inner decorative elements */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <motion.path
                    key={i}
                    d="M50,30 L50,20"
                    stroke="url(#gradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    transform={`rotate(${angle} 50 50)`}
                    initial={{ scale: 0.8, opacity: 0.6 }}
                    animate={{ 
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ 
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </svg>
              
              {/* Centered logo with glow effect */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div 
                  className="relative w-20 h-20"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  {/* Main circular container */}
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-2 border-primary-500/40 shadow-2xl overflow-hidden">
                    {/* Animated background pattern */}
                    <motion.div 
                      className="absolute inset-0 opacity-10"
                      animate={{ 
                        rotate: [0, 360],
                      }}
                      transition={{ 
                        duration: 20, 
                        repeat: Infinity, 
                        ease: "linear" 
                      }}
                      style={{
                        background: 'conic-gradient(from 0deg, transparent, rgba(14, 165, 233, 0.5), transparent, rgba(14, 165, 233, 0.5), transparent)'
                      }}
                    />
                    
                    {/* Minimal VM Letters */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        className="relative text-3xl font-light tracking-wide"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                        animate={{ 
                          scale: [1, 1.05, 1],
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                      >
                        <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                          VM
                        </span>
                      </motion.div>
                    </div>
                    
                    {/* Modern accent rings */}
                    <motion.div 
                      className="absolute inset-2 rounded-full border border-primary-400/30"
                      animate={{ 
                        rotate: [0, -360],
                        opacity: [0.4, 0.8, 0.4]
                      }}
                      transition={{ 
                        rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                        opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col items-center"
            >
              {/* Fun loading messages that change */}
              <motion.div
                className="h-8 overflow-hidden"
              >
                {["Brewing code magic...", "Aligning pixels perfectly...", "Generating awesome...", "Loading creativity...", "Compiling brilliance..."].map((text, i) => (
                  <motion.p
                    key={i}
                    className="bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent font-mono text-xl text-center"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ 
                      y: [40, 0, 0, -40],
                      opacity: [0, 1, 1, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      delay: i * 3,
                      repeat: i === 4 ? Infinity : 0,
                      repeatDelay: 12,
                      ease: "easeInOut"
                    }}
                    style={{ backgroundSize: "200% auto" }}
                  >
                    {text}
                  </motion.p>
                ))}
              </motion.div>
              
              {/* Animated progress bar */}
              <motion.div 
                className="mt-6 w-64 h-2 bg-dark-800 rounded-full overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.div 
                  className="h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ 
                    duration: 1.5, 
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </motion.div>
              
              {/* Bouncing dots with staggered animation */}
              <motion.div 
                className="mt-4 flex space-x-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full"
                    style={{ 
                      background: i % 3 === 0 ? "#0ea5e9" : i % 3 === 1 ? "#8b5cf6" : "#10b981",
                      boxShadow: i % 3 === 0 ? "0 0 8px #0ea5e9" : i % 3 === 1 ? "0 0 8px #8b5cf6" : "0 0 8px #10b981"
                    }}
                    animate={{ 
                      y: [0, -12, 0],
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Navbar */}
      {!showInvitation && (
        <Navbar 
          currentSection={currentSection}
          onNavigate={handleNavigate}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
          scrollPosition={scrollPosition}
        />
      )}
      
      {/* Particle Background */}
      {!isLoading && !showInvitation && (
        <Suspense fallback={null}>
          <ParticleBackground isDarkMode={isDarkMode} />
        </Suspense>
      )}
      
      {/* Main Content */}
      {!showInvitation && (
        <main 
          ref={mainRef}
          className="pt-16 relative z-10"
        >
        {/* Home/Hero Section */}
        <section 
          id="home" 
          ref={sectionRefs.home}
          className="min-h-screen flex items-center py-8 md:py-0"
        >
          <Home isDarkMode={isDarkMode} onNavigate={handleNavigate} />
        </section>
        
        {/* About Section */}
        <section 
          id="about" 
          ref={sectionRefs.about}
          className="py-24"
        >
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <Suspense fallback={
              <div className="h-96 flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500"></div>
              </div>
            }>
              <AboutMeProfessional isDarkMode={isDarkMode} />
            </Suspense>
          </div>
        </section>
        
        {/* Projects Section */}
        <section 
          id="projects" 
          ref={sectionRefs.projects}
          className="py-24" 
          style={{ 
            backgroundImage: isDarkMode 
              ? 'radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.08) 0%, transparent 40%)' 
              : 'radial-gradient(circle at 80% 20%, rgba(14, 165, 233, 0.1) 0%, transparent 40%)'
          }}
        >
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <ProjectsProfessional isDarkMode={isDarkMode} />
          </div>
        </section>
        
        {/* Skills Section */}
        <section 
          id="skills" 
          ref={sectionRefs.skills}
          className="py-24"
        >
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <Suspense fallback={
              <div className="h-96 flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500"></div>
              </div>
            }>
              <SkillsCreative isDarkMode={isDarkMode} />
            </Suspense>
          </div>
        </section>
        
        {/* DSA Showcase Section */}
        <section 
          id="dsa" 
          ref={sectionRefs.dsa}
          className="py-24" 
          style={{ 
            backgroundImage: isDarkMode 
              ? 'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 40%)' 
              : 'radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 40%)'
          }}
        >
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <Suspense fallback={
              <div className="h-96 flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500"></div>
              </div>
            }>
              <DSAShowcase isDarkMode={isDarkMode} />
            </Suspense>
          </div>
        </section>
        
        {/* Contact Section */}
        <section 
          id="contact" 
          ref={sectionRefs.contact}
          className="py-24"
        >
          <div className="container mx-auto px-4 md:px-8 lg:px-16">
            <Suspense fallback={
              <div className="h-96 flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500"></div>
              </div>
            }>
              <ContactRedesigned isDarkMode={isDarkMode} />
            </Suspense>
          </div>
        </section>
        </main>
      )}
      
      {/* Footer */}
      {!showInvitation && (
        <Suspense fallback={null}>
          <FooterRedesigned isDarkMode={isDarkMode} />
        </Suspense>
      )}
      
      {/* Custom Cursor */}
      <CustomCursor isDarkMode={isDarkMode} />
      
      {/* Enhanced Scroll to Top Button */}
      {!showInvitation && (
        <ScrollToTopButton isDarkMode={isDarkMode} showScrollToTop={showScrollToTop} />
      )}
    </div>
  );
}

export default App;