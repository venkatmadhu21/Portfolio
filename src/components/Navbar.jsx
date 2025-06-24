import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ 
  currentSection, 
  onNavigate, 
  isDarkMode, 
  isMobileMenuOpen, 
  toggleMobileMenu,
  scrollPosition
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    setIsScrolled(scrollPosition > 50);
  }, [scrollPosition]);

  // Function to handle resume download
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/images/projects/venkatresume_1.docx (1).pdf';
    link.download = 'Venkat_Madhu_Resume.pdf'; // This will be the downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'dsa', label: 'DSA' },
    { id: 'contact', label: 'Contact' }
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? isDarkMode 
            ? 'bg-dark-950/85 shadow-lg backdrop-blur-xl border-b border-dark-800/50' 
            : 'bg-white/85 shadow-md backdrop-blur-xl border-b border-gray-200/50' 
          : 'bg-transparent'
      }`}
    >
      <div className={`absolute bottom-0 left-0 right-0 h-[1px] ${isScrolled ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary-500/5 via-transparent to-secondary-500/5 opacity-50"></div>

      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-20">
          
          <motion.div 
            className="flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="flex items-center group"
            >
              <div className="relative w-10 h-10 md:w-12 md:h-12 transform group-hover:scale-105 transition-transform duration-200">
                {/* Simplified circular container */}
                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-primary-500/30 shadow-lg overflow-hidden">
                  {/* Minimal VM Letters */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative text-lg md:text-xl font-medium tracking-wide">
                      <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                        VM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-2 md:ml-3 flex flex-col">
                <span className={`text-sm md:text-lg font-semibold leading-tight ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                } group-hover:text-primary-500 transition-colors duration-200`}>
                  <span className="hidden sm:inline">Venkat Madhu</span>
                  <span className="sm:hidden">VM</span>
                </span>
                <span className={`text-xs hidden sm:block ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  Software Engineer
                </span>
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.id);
                  }}
                  className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:transform hover:-translate-y-1 ${
                    currentSection === item.id
                      ? isDarkMode 
                        ? 'text-secondary-400' 
                        : 'text-secondary-600'
                      : isDarkMode
                        ? 'text-gray-300 hover:text-primary-400'
                        : 'text-gray-700 hover:text-primary-600'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {currentSection === item.id && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className={`absolute inset-0 rounded-md ${
                        isDarkMode ? 'bg-dark-800/80' : 'bg-gray-100/80'
                      }`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              </motion.div>
            ))}

            {/* Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="ml-4"
            >
              <div className="resume-button">
                <label className="label" onClick={handleResumeDownload}>
                  <input type="checkbox" className="input" />
                  <span className="circle">
                    <svg className="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19V5m0 14-4-4m4 4 4-4" />
                    </svg>
                    <div className="square" />
                  </span>
                  <p className="title">Resume</p>
                  <p className="title">Downloaded</p>
                </label>
              </div>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden overflow-hidden ${
              isDarkMode ? 'bg-dark-900/95 backdrop-blur-lg' : 'bg-white/95 backdrop-blur-lg'
            }`}
          >
            <div className="px-4 pt-3 pb-4 space-y-2 sm:px-5">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate(item.id);
                  }}
                  className={`block px-4 py-3 rounded-lg text-base font-medium ${
                    currentSection === item.id
                      ? isDarkMode 
                        ? 'bg-dark-800/80 text-secondary-400 border-l-2 border-secondary-500' 
                        : 'bg-gray-100 text-secondary-600 border-l-2 border-secondary-500'
                      : isDarkMode
                        ? 'text-gray-300 hover:bg-dark-800/50 hover:text-primary-400'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-primary-600'
                  } transition-all duration-300`}
                >
                  {item.label}
                </motion.a>
              ))}
              
              <div className="pt-3 mt-3 border-t border-gray-700/30">
                <div className="resume-button">
                  <label className="label" onClick={handleResumeDownload}>
                    <input type="checkbox" className="input" />
                    <span className="circle">
                      <svg className="icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 19V5m0 14-4-4m4 4 4-4" />
                      </svg>
                      <div className="square" />
                    </span>
                    <p className="title">Resume</p>
                    <p className="title">Downloaded</p>
                  </label>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
