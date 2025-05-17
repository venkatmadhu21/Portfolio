import React, { Suspense, useRef } from 'react';
import { motion } from 'framer-motion';
import HeroAnimation from './3d/HeroAnimation';

const Home = ({ isDarkMode, onNavigate }) => {
  // Ref for container
  const containerRef = useRef(null);
  
  // Animation variants
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.7, 
        delay: custom * 0.1,
        ease: [0.215, 0.61, 0.355, 1.0] // Cubic bezier for smooth animation
      }
    })
  };
  
  return (
    <motion.div 
      ref={containerRef}
      className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-center gap-8 min-h-screen pt-16 md:pt-0"
    >
      <div className="max-w-2xl md:w-1/2 md:pr-8 mb-12 md:mb-0">
        <motion.div
          custom={1}
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className="mb-3"
        >
          <p className="font-mono text-lg tracking-wider text-primary-400 opacity-90">
            Hello world, I'm
          </p>
        </motion.div>
        
        <motion.h1
          custom={2}
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className="section-title text-6xl md:text-8xl font-bold mb-4 tracking-tight leading-none"
        >
          Venkat Madhu<span className="text-primary-400">.</span>
        </motion.h1>
        
        <motion.h2
          custom={3}
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className={`text-3xl md:text-5xl font-bold mb-8 ${isDarkMode ? 'text-dark-300/80' : 'text-gray-700'} tracking-tight`}
        >
          I craft digital experiences that matter.
        </motion.h2>
        
        <motion.p
          custom={4}
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className={`text-lg md:text-xl max-w-xl mb-14 ${isDarkMode ? 'text-dark-300/90' : 'text-gray-700'} leading-relaxed`}
        >
          A second-year <span className="text-primary-400 font-medium">Computer Science</span> student at Keshav Memorial College of Engineering with a passion for creating innovative solutions. I blend strong fundamentals in <span className="text-secondary-400 font-medium">C++ and data structures</span> with expertise in <span className="text-primary-400 font-medium">full-stack web development</span>.
          <br/><br/>
          Currently exploring the intersection of <span className="text-primary-400 font-medium">AI</span> and <span className="text-secondary-400 font-medium">web technologies</span> to build the next generation of applications.
        </motion.p>
        
        <motion.div
          custom={5}
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-5"
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('projects');
            }}
            whileHover={{ 
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(14, 165, 233, 0.3)",
              transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 10 
              }
            }}
            whileTap={{ 
              scale: 0.95,
              y: 0,
              transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 10 
              }
            }}
            className="glass-button group relative px-8 py-4 text-lg font-medium"
          >
            <span className="relative z-10 flex items-center">
              View My Projects
              <svg 
                className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </motion.a>
          
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('contact');
            }}
            whileHover={{ 
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(139, 92, 246, 0.3)",
              transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 10 
              }
            }}
            whileTap={{ 
              scale: 0.95,
              y: 0,
              transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 10 
              }
            }}
            className="accent-button group px-8 py-4 text-lg font-medium"
          >
            <span className="flex items-center">
              Get In Touch
              <svg 
                className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </span>
          </motion.a>
        </motion.div>
        
        {/* Social Links */}
        <motion.div
          custom={6}
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className="flex items-center mt-20 space-x-8"
        >
          <div className={`w-24 h-px bg-gradient-to-r from-transparent ${isDarkMode ? 'via-dark-700' : 'via-gray-300'} to-transparent`}></div>
          
          <div className="flex space-x-6">
            <motion.a
              href="https://github.com/venkatmadhumohan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                y: -5, 
                scale: 1.1,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.9 }}
              className={`relative p-3 rounded-full ${isDarkMode ? 'bg-dark-800/40 text-dark-400' : 'bg-gray-200/80 text-gray-600'} hover:text-primary-400 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20`}
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="absolute inset-0 rounded-full bg-primary-400/10 scale-0 opacity-0 hover:scale-100 hover:opacity-100 transition-all duration-300"></span>
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/venkatmadhumohan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                y: -5, 
                scale: 1.1,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.9 }}
              className={`relative p-3 rounded-full ${isDarkMode ? 'bg-dark-800/40 text-dark-400' : 'bg-gray-200/80 text-gray-600'} hover:text-secondary-400 transition-all duration-300 hover:shadow-lg hover:shadow-secondary-500/20`}
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="absolute inset-0 rounded-full bg-secondary-400/10 scale-0 opacity-0 hover:scale-100 hover:opacity-100 transition-all duration-300"></span>
            </motion.a>
            
            <motion.a
              href="https://www.hackerrank.com/venkatmadhumohan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                y: -5, 
                scale: 1.1,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.9 }}
              className={`relative p-3 rounded-full ${isDarkMode ? 'bg-dark-800/40 text-dark-400' : 'bg-gray-200/80 text-gray-600'} hover:text-accent-400 transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/20`}
            >
              <span className="sr-only">HackerRank</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908h.701c.141 0 .254-.115.254-.258 0-.094-.049-.176-.123-.221L9.223 4.92c-.049-.063-.141-.109-.226-.109-.086 0-.178.045-.226.109L7.076 6.43c-.072.045-.12.126-.12.221 0 .143.113.258.255.258h.704l.008 10.035c0 .145.111.258.254.258h1.492c.142 0 .259-.115.259-.256v-4.004h4.073v4.152h-.699c-.143 0-.256.115-.256.258 0 .092.048.174.119.219l1.579 1.51c.044.061.141.109.225.109.085 0 .179-.045.228-.109l1.574-1.51c.072-.045.12-.127.12-.219 0-.143-.115-.258-.255-.258h-.704l-.007-10.034c0-.145-.114-.26-.255-.26h-1.494v.002z" />
              </svg>
              <span className="absolute inset-0 rounded-full bg-accent-400/10 scale-0 opacity-0 hover:scale-100 hover:opacity-100 transition-all duration-300"></span>
            </motion.a>
            
            <motion.a
              href="mailto:venkatmadhumohan@gmail.com"
              whileHover={{ 
                y: -5, 
                scale: 1.1,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.9 }}
              className={`relative p-3 rounded-full ${isDarkMode ? 'bg-dark-800/40 text-dark-400' : 'bg-gray-200/80 text-gray-600'} hover:text-secondary-400 transition-all duration-300 hover:shadow-lg hover:shadow-secondary-500/20`}
            >
              <span className="sr-only">Email</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="absolute inset-0 rounded-full bg-secondary-400/10 scale-0 opacity-0 hover:scale-100 hover:opacity-100 transition-all duration-300"></span>
            </motion.a>
          </div>
          
          <div className={`w-24 h-px bg-gradient-to-r ${isDarkMode ? 'from-dark-700 via-dark-700' : 'from-gray-300 via-gray-300'} to-transparent`}></div>
        </motion.div>
      </div>
      
      {/* 3D Animation */}
      <motion.div 
        className="md:w-1/2 h-[500px] md:h-[700px] relative flex items-center justify-center overflow-visible"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          y: [0, -10, 0],
        }}
        transition={{ 
          duration: 0.8, 
          delay: 0.5,
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse"
          }
        }}
      >
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary-500/10 rounded-full blur-3xl"></div>
        
        {/* Glass card with enhanced styling */}
        <div className={`absolute inset-0 glass-card rounded-2xl backdrop-blur-sm ${
          isDarkMode ? 'shadow-glow-purple border border-secondary-500/20' : 'shadow-glow-blue border border-primary-500/20'
        }`}>
          {/* Decorative dots */}
          <div className="absolute top-6 left-6 flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-primary-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-secondary-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-accent-500/50"></div>
          </div>
        </div>
        
        {/* 3D Animation */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Suspense fallback={
            <div className="h-full flex flex-col items-center justify-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500 mb-4"></div>
              <p className="text-primary-400 font-mono text-sm animate-pulse">Loading 3D Experience...</p>
            </div>
          }>
            <HeroAnimation isDarkMode={isDarkMode} />
          </Suspense>
        </div>
        
        {/* Decorative corner accents */}
        <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
          <div className={`absolute top-0 right-0 w-8 h-8 transform rotate-45 translate-x-1/2 -translate-y-1/2 ${
            isDarkMode ? 'bg-secondary-500/20' : 'bg-primary-500/20'
          }`}></div>
        </div>
        <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden">
          <div className={`absolute bottom-0 left-0 w-8 h-8 transform rotate-45 -translate-x-1/2 translate-y-1/2 ${
            isDarkMode ? 'bg-primary-500/20' : 'bg-secondary-500/20'
          }`}></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;