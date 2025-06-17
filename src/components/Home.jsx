import React, { Suspense, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import HeroAnimation from './3d/HeroAnimation';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';

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
      className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12 min-h-screen pt-16 md:pt-8 lg:pt-0 relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-transparent to-secondary-500/5 dark:from-primary-500/10 dark:to-secondary-500/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)] animate-spin-slow"></div>
      </div>
      
      {/* Left content section */}
      <div className="max-w-3xl lg:w-3/5 lg:pr-6 mb-8 lg:mb-0 relative">
        <div className="absolute top-20 right-10 w-64 h-64 opacity-20 blur-3xl bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse-slow"></div>
        <motion.div
          custom={1}
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className="mb-3 relative inline-block"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <p className="font-mono text-lg tracking-wider text-primary-400 opacity-90 relative">
            Hello world, I'm
          </p>
        </motion.div>
      
        
        <motion.h1
          custom={2}
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className="section-title text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 animate-gradient-x dark:from-primary-400 dark:via-secondary-400 dark:to-accent-400"
        >
          Venkat Madhu Mohan<span className="text-primary-400">.</span>
        </motion.h1>
        
        <motion.h2
          custom={3}
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 ${isDarkMode ? 'text-dark-300/80' : 'text-gray-700'} tracking-tight`}
        >
          I craft digital experiences that matter.
        </motion.h2>
        
        <motion.p
          custom={4}
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className={`text-base md:text-lg lg:text-xl max-w-2xl mb-10 ${isDarkMode ? 'text-dark-300/90' : 'text-gray-700'} leading-relaxed`}
        >
          A  <span className="text-primary-400 font-medium">Computer Science</span> student at Keshav Memorial College of Engineering with a passion for creating innovative solutions. I blend strong fundamentals in <span className="text-secondary-400 font-medium">C++ and data structures</span> with expertise in <span className="text-primary-400 font-medium">full-stack web development</span>.
          <br/><br/>
          Currently exploring the intersection of <span className="text-primary-400 font-medium">AI</span> and <span className="text-secondary-400 font-medium">web technologies</span> to build the next generation of applications.
        </motion.p>
        
        <motion.div
          custom={5}
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-4"
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
            className="glass-button group relative px-6 py-3 text-base font-medium"
          >
            <motion.span 
              className="relative z-10 flex items-center"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              View My Projects
              <motion.svg 
                className="w-5 h-5 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                whileHover={{ x: 8, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </motion.span>
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-white/5"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
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
            className="accent-button group px-6 py-3 text-base font-medium"
          >
            <motion.span 
              className="flex items-center"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              Get In Touch
              <motion.svg 
                className="w-5 h-5 ml-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                whileHover={{ x: 8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </motion.svg>
            </motion.span>
          </motion.a>
        </motion.div>
        
        {/* Social Links */}
        <motion.div
          custom={6}
          variants={fadeUpVariant}
          initial="hidden"
          animate="visible"
          className="flex items-center mt-12 space-x-6"
        >
          <div className={`w-16 h-px bg-gradient-to-r from-transparent ${isDarkMode ? 'via-dark-700' : 'via-gray-300'} to-transparent`}></div>
          
          <div className="flex space-x-4 relative group">
            <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <motion.a
              href="https://github.com/venkatmadhu21"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                y: -5, 
                scale: 1.1,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.9 }}
              className={`relative p-2.5 rounded-full ${isDarkMode ? 'bg-dark-800/40 text-dark-400' : 'bg-gray-200/80 text-gray-600'} hover:text-primary-400 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20`}
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="absolute inset-0 rounded-full bg-primary-400/10 scale-0 opacity-0 hover:scale-100 hover:opacity-100 transition-all duration-300"></span>
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/venkatmadhu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                y: -5, 
                scale: 1.1,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.9 }}
              className={`relative p-2.5 rounded-full ${isDarkMode ? 'bg-dark-800/40 text-dark-400' : 'bg-gray-200/80 text-gray-600'} hover:text-secondary-400 transition-all duration-300 hover:shadow-lg hover:shadow-secondary-500/20`}
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span className="absolute inset-0 rounded-full bg-secondary-400/10 scale-0 opacity-0 hover:scale-100 hover:opacity-100 transition-all duration-300"></span>
            </motion.a>
            
            <motion.a
              href="https://leetcode.com/u/venkatmadhu/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                y: -5, 
                scale: 1.1,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.9 }}
              className={`relative p-2.5 rounded-full ${isDarkMode ? 'bg-dark-800/40 text-dark-400' : 'bg-gray-200/80 text-gray-600'} hover:text-accent-400 transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/20`}
            >
              <span className="sr-only">LeetCode</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
              </svg>
              <span className="absolute inset-0 rounded-full bg-accent-400/10 scale-0 opacity-0 hover:scale-100 hover:opacity-100 transition-all duration-300"></span>
            </motion.a>
            
            <motion.a
              href="mailto:venkatmadhumohann@gmail.com"
              whileHover={{ 
                y: -5, 
                scale: 1.1,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.9 }}
              className={`relative p-2.5 rounded-full ${isDarkMode ? 'bg-dark-800/40 text-dark-400' : 'bg-gray-200/80 text-gray-600'} hover:text-secondary-400 transition-all duration-300 hover:shadow-lg hover:shadow-secondary-500/20`}
            >
              <span className="sr-only">Email</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="absolute inset-0 rounded-full bg-secondary-400/10 scale-0 opacity-0 hover:scale-100 hover:opacity-100 transition-all duration-300"></span>
            </motion.a>
          </div>
          
          <div className={`w-16 h-px bg-gradient-to-r ${isDarkMode ? 'from-dark-700 via-dark-700' : 'from-gray-300 via-gray-300'} to-transparent`}></div>
        </motion.div>
      </div>
      
      {/* 3D Animation Section */}
      <motion.div 
        className="lg:w-2/5 h-[400px] md:h-[450px] lg:h-[500px] relative flex items-center justify-center overflow-visible"
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
        {/* Decorative gradient blobs */}
        <div className="absolute -top-8 -right-8 w-48 h-48 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary-500/10 rounded-full blur-3xl"></div>
        
        {/* Glass card container */}
        <div className={`absolute inset-0 glass-card rounded-2xl backdrop-blur-sm ${
          isDarkMode ? 'shadow-glow-purple border border-secondary-500/20' : 'shadow-glow-blue border border-primary-500/20'
        }`}>
          {/* Decorative dots */}
          <div className="absolute top-4 left-4 flex space-x-2">
            <div className="w-2.5 h-2.5 rounded-full bg-primary-500/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-secondary-500/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-accent-500/50"></div>
          </div>
        </div>
        
        {/* 3D Animation Canvas */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Suspense fallback={
            <div className="h-full flex flex-col items-center justify-center">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500 mb-4"></div>
              <p className="text-primary-400 font-mono text-sm animate-pulse">Loading 3D Experience...</p>
            </div>
          }>
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <ambientLight intensity={isDarkMode ? 0.4 : 0.6} />
              <directionalLight 
                position={[10, 10, 5]} 
                intensity={isDarkMode ? 0.5 : 0.7}
              />
              <Float
                speed={1.2}
                rotationIntensity={0.3}
                floatIntensity={0.5}
                floatingRange={[-0.2, 0.2]}
              >
                <HeroAnimation isDarkMode={isDarkMode} />
              </Float>
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
          </Suspense>
        </div>
        
        {/* Decorative corner accents */}
        <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
          <div className={`absolute top-0 right-0 w-6 h-6 transform rotate-45 translate-x-1/2 -translate-y-1/2 ${
            isDarkMode ? 'bg-secondary-500/20' : 'bg-primary-500/20'
          }`}></div>
        </div>
        <div className="absolute bottom-0 left-0 w-12 h-12 overflow-hidden">
          <div className={`absolute bottom-0 left-0 w-6 h-6 transform rotate-45 -translate-x-1/2 translate-y-1/2 ${
            isDarkMode ? 'bg-primary-500/20' : 'bg-secondary-500/20'
          }`}></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;