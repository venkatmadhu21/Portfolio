import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AboutMeRedesigned = ({ isDarkMode }) => {
  const [activeSection, setActiveSection] = useState('overview');
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemFade = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };
  
  // Skill categories with their respective skills
  const skillCategories = [
    {
      name: 'Mobile Development',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-primary-500 to-primary-400',
      textColor: 'text-primary-400',
      borderColor: 'border-primary-500/30',
      bgColor: 'bg-primary-500/10',
      skills: ['Kotlin', 'Android SDK', 'MVVM', 'Room DB', 'Material Design']
    },
    {
      name: 'Web Development',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      color: 'from-secondary-500 to-secondary-400',
      textColor: 'text-secondary-400',
      borderColor: 'border-secondary-500/30',
      bgColor: 'bg-secondary-500/10',
      skills: ['React', 'JavaScript', 'Node.js', 'MongoDB', 'HTML/CSS']
    },
    {
      name: 'Programming',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: 'from-primary-500 to-primary-400',
      textColor: 'text-primary-400',
      borderColor: 'border-primary-500/30',
      bgColor: 'bg-primary-500/10',
      skills: ['C++', 'Python', 'Java', 'Data Structures', 'Algorithms']
    },
    {
      name: 'Tools & Technologies',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: 'from-secondary-500 to-secondary-400',
      textColor: 'text-secondary-400',
      borderColor: 'border-secondary-500/30',
      bgColor: 'bg-secondary-500/10',
      skills: ['Git', 'GitHub', 'Firebase', 'REST API', 'VS Code']
    }
  ];
  
  // Projects data
  const projects = [
    {
      title: 'Chat Gem',
      description: 'AI-powered Android chatbot using Google\'s Gemini API',
      tech: ['Kotlin', 'Gemini API', 'MVVM', 'Material Design'],
      year: '2024',
      image: 'https://placehold.co/600x400/0ea5e9/ffffff?text=Chat+Gem'
    },
    {
      title: 'Dish Delight',
      description: 'Feature-rich recipe platform with offline support',
      tech: ['Kotlin', 'Room Database', 'Fragment Navigation', 'YouTube API'],
      year: '2023',
      image: 'https://placehold.co/600x400/d946ef/ffffff?text=Dish+Delight'
    },
    {
      title: 'Weatherly',
      description: 'Real-time weather forecasting with location services',
      tech: ['Kotlin', 'Weather API', 'Location Services', 'Material Design'],
      year: '2023',
      image: 'https://placehold.co/600x400/0ea5e9/ffffff?text=Weatherly'
    }
  ];
  
  // Education data
  const education = [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Keshav Memorial College of Engineering',
      location: 'Hyderabad, India',
      period: '2023 - Present',
      details: [
        'Coursework: Data Structures & Algorithms, OOP, DBMS, Computer Networks',
        'Active participant in coding competitions and hackathons',
        'Maintaining strong academic performance while developing practical skills'
      ]
    }
  ];
  
  // Developer stats for the stats card
  const devStats = [
    { label: 'Projects', value: '5+', icon: 'code' },
    { label: 'HackerRank', value: '5★', icon: 'star' },
    { label: 'CodeChef', value: '1★', icon: 'award' },
    { label: 'Technologies', value: '10+', icon: 'stack' }
  ];
  
  // Icon components
  const icons = {
    code: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    star: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    award: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    stack: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  };
  
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent"
        >
          About Me
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8 rounded-full"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`text-xl ${isDarkMode ? 'text-dark-300' : 'text-gray-700'} max-w-3xl mx-auto`}
        >
          Second-year Computer Science student with a passion for creating innovative software solutions that make a real difference.
        </motion.p>
      </div>
      
      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left sidebar */}
        <div className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="sticky top-24"
          >
            {/* Profile card */}
            <div className="glass-card overflow-hidden mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 mix-blend-overlay z-10"></div>
                <img 
                  src="https://placehold.co/600x600/3b82f6/ffffff?text=VM" 
                  alt="Venkat Madhu Mohan" 
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark-900/90 to-transparent">
                  <h3 className="text-2xl font-bold text-white">Venkat Madhu Mohan</h3>
                  <p className="text-primary-400">Computer Science Student</p>
                </div>
              </div>
              
              {/* Stats */}
              <div className="p-6">
                <motion.div 
                  className="grid grid-cols-2 gap-4"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {devStats.map((stat, index) => (
                    <motion.div 
                      key={index} 
                      className={`flex flex-col items-center p-3 rounded-xl ${isDarkMode ? 'bg-dark-800/50 border border-dark-700/50' : 'bg-white/90 border border-gray-100'} hover:border-primary-400 transition-all duration-300`}
                      variants={itemFade}
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: `0 10px 25px -5px ${stat.icon === 'star' || stat.icon === 'code' ? 
                          (isDarkMode ? "rgba(14, 165, 233, 0.3)" : "rgba(14, 165, 233, 0.15)") : 
                          (isDarkMode ? "rgba(139, 92, 246, 0.3)" : "rgba(139, 92, 246, 0.15)")}`,
                        y: -5
                      }}
                    >
                      <div className="mb-2 text-primary-400">
                        {icons[stat.icon]}
                      </div>
                      <p className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                        {stat.value}
                      </p>
                      <p className={`text-sm ${isDarkMode ? 'text-dark-300' : 'text-gray-600'}`}>
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* Social links */}
                <motion.div 
                  className="mt-6 flex justify-center space-x-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <motion.a 
                    href="https://github.com/venkatmadhumohan" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`p-3 rounded-full ${isDarkMode ? 'bg-dark-800' : 'bg-gray-200'} text-primary-400 ${isDarkMode ? 'hover:bg-dark-700' : 'hover:bg-gray-300'} hover:shadow-glow transition-all duration-300`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/in/venkatmadhumohan" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`p-3 rounded-full ${isDarkMode ? 'bg-dark-800' : 'bg-gray-200'} text-secondary-400 ${isDarkMode ? 'hover:bg-dark-700' : 'hover:bg-gray-300'} hover:shadow-glow-purple transition-all duration-300`}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="https://www.hackerrank.com/venkatmadhumohan" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-3 rounded-full bg-dark-800 text-primary-400 hover:bg-dark-700 hover:shadow-glow transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908h.701c.141 0 .254-.115.254-.258 0-.094-.049-.176-.123-.221L9.223 4.92c-.049-.063-.141-.109-.226-.109-.086 0-.178.045-.226.109L7.076 6.43c-.072.045-.12.126-.12.221 0 .143.113.258.255.258h.704l.008 10.035c0 .145.111.258.254.258h1.492c.142 0 .259-.115.259-.256v-4.004h4.073v4.152h-.699c-.143 0-.256.115-.256.258 0 .092.048.174.119.219l1.579 1.51c.044.061.141.109.225.109.085 0 .179-.045.228-.109l1.574-1.51c.072-.045.12-.127.12-.219 0-.143-.115-.258-.255-.258h-.704l-.007-10.034c0-.145-.114-.26-.255-.26h-1.494v.002z" />
                    </svg>
                  </motion.a>
                  <motion.a 
                    href="mailto:venkatmadhumohan@gmail.com" 
                    className="p-3 rounded-full bg-dark-800 text-secondary-400 hover:bg-dark-700 hover:shadow-glow-purple transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </motion.a>
                </motion.div>
                
                {/* Resume button */}
                <motion.div 
                  className="mt-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <motion.a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-button block w-full text-center bg-gradient-to-r from-primary-600 to-secondary-600"
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Download Resume
                  </motion.a>
                </motion.div>
              </div>
            </div>
            
            {/* Navigation */}
            <div className="glass-card p-6">
              <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-dark-100' : 'text-gray-800'}`}>Quick Navigation</h3>
              <nav className="space-y-2">
                {[
                  { id: 'overview', label: 'Overview' },
                  { id: 'skills', label: 'Skills & Expertise' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'education', label: 'Education' }
                ].map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center ${
                      activeSection === item.id
                        ? isDarkMode 
                          ? 'bg-gradient-to-r from-primary-600/20 to-secondary-600/20 text-primary-400 border-l-4 border-primary-500'
                          : 'bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-500 border-l-4 border-primary-400 shadow-sm'
                        : isDarkMode 
                          ? 'hover:bg-dark-800 text-dark-300' 
                          : 'hover:bg-gradient-to-r hover:from-gray-50 hover:to-white text-gray-600 hover:shadow-sm'
                    }`}
                    whileHover={{ x: activeSection === item.id ? 0 : 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>
            </div>
          </motion.div>
        </div>
        
        {/* Main content area */}
        <div className="lg:col-span-8">
          <motion.div
            key={activeSection}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={fadeIn}
            className="glass-card p-8 min-h-[600px]"
          >
            <AnimatePresence mode="wait">
              {/* Overview Section */}
              {activeSection === 'overview' && (
                <motion.div
                  key="overview"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={fadeIn}
                >
                  <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-dark-50' : 'text-gray-800'}`}>Overview</h2>
                  <div className={`space-y-6 ${isDarkMode ? 'text-dark-200' : 'text-gray-700'}`}>
                    <motion.p
                      variants={itemFade}
                    >
                      Hello! I'm <span className="text-primary-400 font-semibold">Venkat Madhu Mohan</span>, an ambitious Computer Science student at Keshav Memorial College of Engineering (KMCE), Hyderabad, with a passion for creating innovative software solutions that make a real difference.
                    </motion.p>
                    <motion.p
                      variants={itemFade}
                    >
                      As a dedicated problem solver with a <span className="text-primary-400 font-semibold">5★ rating on HackerRank</span> and growing presence on CodeChef, I've developed a strong foundation in algorithmic thinking and efficient code design. My technical journey spans both mobile and web development, with particular expertise in the <span className="text-primary-400 font-semibold">MERN stack</span> and <span className="text-primary-400 font-semibold">Android development with Kotlin</span>.
                    </motion.p>
                    <motion.p
                      variants={itemFade}
                    >
                      What sets me apart is my ability to bridge theoretical computer science concepts with practical application development. I've successfully integrated cutting-edge technologies like <span className="text-primary-400 font-semibold">Google's Gemini AI</span> into my mobile applications, demonstrating my commitment to staying at the forefront of technological innovation.
                    </motion.p>
                    
                    <motion.div 
                      className={`mt-8 p-6 rounded-xl ${isDarkMode ? 'bg-dark-800/50 border border-dark-700/50' : 'bg-gradient-to-br from-white to-gray-50 border border-gray-100'}`}
                      variants={itemFade}
                    >
                      <h3 className="text-xl font-semibold mb-4 text-primary-400">Areas of Interest</h3>
                      <motion.div 
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                        variants={staggerContainer}
                      >
                        <motion.div 
                          className="p-4 rounded-lg bg-dark-900/70 border border-dark-800/70"
                          variants={itemFade}
                          whileHover={{ scale: 1.03, y: -2 }}
                        >
                          <h4 className="font-semibold text-primary-300 mb-2">Mobile Development</h4>
                          <p className="text-dark-300 text-sm">Exploring advanced architectural patterns and emerging Kotlin features for Android applications.</p>
                        </motion.div>
                        <motion.div 
                          className="p-4 rounded-lg bg-dark-900/70 border border-dark-800/70"
                          variants={itemFade}
                          whileHover={{ scale: 1.03, y: -2 }}
                        >
                          <h4 className="font-semibold text-secondary-300 mb-2">Competitive Programming</h4>
                          <p className="text-dark-300 text-sm">Solving complex algorithmic challenges to develop efficient problem-solving skills.</p>
                        </motion.div>
                        <motion.div 
                          className="p-4 rounded-lg bg-dark-900/70 border border-dark-800/70"
                          variants={itemFade}
                          whileHover={{ scale: 1.03, y: -2 }}
                        >
                          <h4 className="font-semibold text-primary-300 mb-2">AI Integration</h4>
                          <p className="text-dark-300 text-sm">Implementing AI capabilities in practical applications to enhance user experiences.</p>
                        </motion.div>
                        <motion.div 
                          className="p-4 rounded-lg bg-dark-900/70 border border-dark-800/70"
                          variants={itemFade}
                          whileHover={{ scale: 1.03, y: -2 }}
                        >
                          <h4 className="font-semibold text-secondary-300 mb-2">Open Source</h4>
                          <p className="text-dark-300 text-sm">Contributing to community projects and learning from collaborative development.</p>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
              
              {/* Skills Section */}
              {activeSection === 'skills' && (
                <motion.div
                  key="skills"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={fadeIn}
                >
                  <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-dark-50' : 'text-gray-800'}`}>Skills & Expertise</h2>
                  
                  <div className="relative">
                    {/* Connection lines */}
                    <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                      {[
                        { from: 0, to: 1 },
                        { from: 0, to: 2 },
                        { from: 0, to: 3 },
                        { from: 1, to: 2 },
                        { from: 1, to: 3 },
                        { from: 2, to: 3 }
                      ].map((connection, index) => {
                        const fromCategory = skillCategories[connection.from];
                        const toCategory = skillCategories[connection.to];
                        
                        // Determine gradient colors based on categories
                        const gradientId = `gradient-${connection.from}-${connection.to}`;
                        const fromColor = fromCategory.textColor.includes('primary') ? 
                          (isDarkMode ? "#0ea5e9" : "#0284c7") : 
                          (isDarkMode ? "#8b5cf6" : "#7c3aed");
                        const toColor = toCategory.textColor.includes('primary') ? 
                          (isDarkMode ? "#0ea5e9" : "#0284c7") : 
                          (isDarkMode ? "#8b5cf6" : "#7c3aed");
                        
                        return (
                          <motion.g key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.3 }}
                            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                          >
                            <defs>
                              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor={fromColor} />
                                <stop offset="100%" stopColor={toColor} />
                              </linearGradient>
                            </defs>
                            <line 
                              x1={`${25 + connection.from * 25}%`} 
                              y1={`${connection.from % 2 === 0 ? 25 : 75}%`}
                              x2={`${25 + connection.to * 25}%`} 
                              y2={`${connection.to % 2 === 0 ? 25 : 75}%`}
                              stroke={`url(#${gradientId})`}
                              strokeWidth="2"
                              strokeDasharray="5,5"
                            />
                          </motion.g>
                        );
                      })}
                    </svg>
                    
                    {/* Skill categories */}
                    <motion.div 
                      className="grid grid-cols-2 gap-6 h-[500px]"
                      variants={staggerContainer}
                    >
                      {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                          key={category.name}
                          className={`flex flex-col ${categoryIndex % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                          variants={itemFade}
                        >
                          <motion.div 
                            className={`p-4 rounded-xl ${isDarkMode ? category.bgColor : 'bg-gradient-to-br from-white to-gray-50'} border ${isDarkMode ? category.borderColor : 'border-gray-100'} relative z-10 ${!isDarkMode && 'shadow-sm'}`}
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <div className="flex items-center mb-3">
                              <div className={`w-10 h-10 rounded-full ${isDarkMode ? category.bgColor : `bg-gradient-to-br ${categoryIndex % 2 === 0 ? 'from-primary-50 to-primary-100' : 'from-secondary-50 to-secondary-100'}`} flex items-center justify-center mr-3 ${category.textColor}`}>
                                {category.icon}
                              </div>
                              <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-dark-100' : 'text-gray-800'}`}>{category.name}</h4>
                            </div>
                            
                            <motion.div 
                              className="grid grid-cols-2 gap-2 mt-3"
                              variants={staggerContainer}
                            >
                              {category.skills.map((skill, index) => (
                                <motion.div
                                  key={skill}
                                  className={`px-3 py-2 rounded-lg ${isDarkMode ? 'bg-dark-800/50 border border-dark-700/50' : `bg-gradient-to-r ${categoryIndex % 2 === 0 ? 'from-primary-50 to-primary-100/50' : 'from-secondary-50 to-secondary-100/50'} border border-gray-100`} text-sm ${category.textColor}`}
                                  variants={itemFade}
                                  whileHover={{ 
                                    scale: 1.05, 
                                    y: -2,
                                    boxShadow: `0 8px 15px -5px ${category.textColor.includes('primary') ? 
                                      (isDarkMode ? "rgba(14, 165, 233, 0.3)" : "rgba(14, 165, 233, 0.15)") : 
                                      (isDarkMode ? "rgba(139, 92, 246, 0.3)" : "rgba(139, 92, 246, 0.15)")}` 
                                  }}
                                >
                                  {skill}
                                </motion.div>
                              ))}
                            </motion.div>
                          </motion.div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              )}
              
              {/* Projects Section */}
              {activeSection === 'projects' && (
                <motion.div
                  key="projects"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={fadeIn}
                >
                  <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-dark-50' : 'text-gray-800'}`}>Projects</h2>
                  
                  <motion.div 
                    className="space-y-8"
                    variants={staggerContainer}
                  >
                    {projects.map((project, index) => (
                      <motion.div 
                        key={project.title}
                        className="glass-card overflow-hidden"
                        variants={itemFade}
                        whileHover={{ y: -5 }}
                      >
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/3 relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 mix-blend-overlay z-10"></div>
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="md:w-2/3 p-6">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-dark-50' : 'text-gray-800'}`}>{project.title}</h3>
                              <span className={`text-sm ${isDarkMode ? 'text-dark-300 bg-dark-800' : 'text-secondary-500 bg-gradient-to-r from-secondary-50 to-primary-50 border border-secondary-200/30'} px-2 py-1 rounded-full`}>{project.year}</span>
                            </div>
                            <p className={`mb-4 ${isDarkMode ? 'text-dark-200' : 'text-gray-700'}`}>{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech, techIndex) => (
                                <motion.span 
                                  key={techIndex}
                                  className={`px-3 py-1 text-xs rounded-full ${isDarkMode ? 'bg-dark-800 border border-dark-700' : 'bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-200/30'} text-primary-500`}
                                  whileHover={{ scale: 1.1 }}
                                >
                                  {tech}
                                </motion.span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
              
              {/* Education Section */}
              {activeSection === 'education' && (
                <motion.div
                  key="education"
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={fadeIn}
                >
                  <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-dark-50' : 'text-gray-800'}`}>Education</h2>
                  
                  <motion.div 
                    className="space-y-8"
                    variants={staggerContainer}
                  >
                    {education.map((edu, index) => (
                      <motion.div 
                        key={index}
                        className="relative pl-8 pb-8 border-l-2 border-primary-500/30"
                        variants={itemFade}
                      >
                        <motion.div 
                          className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3, type: "spring" }}
                        ></motion.div>
                        
                        <div className="glass-card p-6">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                            <div>
                              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-dark-50' : 'text-gray-800'}`}>{edu.degree}</h3>
                              <p className="text-primary-400">{edu.institution}</p>
                              <p className={`${isDarkMode ? 'text-dark-300' : 'text-gray-600'}`}>{edu.location}</p>
                            </div>
                            <div className="mt-2 md:mt-0">
                              <span className={`px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-dark-800 border border-dark-700' : 'bg-gradient-to-r from-secondary-50 to-primary-50 border border-secondary-200/30'} text-secondary-500`}>
                                {edu.period}
                              </span>
                            </div>
                          </div>
                          
                          <div className="space-y-2 mt-4">
                            {edu.details.map((detail, detailIndex) => (
                              <motion.div 
                                key={detailIndex}
                                className="flex items-start"
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + detailIndex * 0.1 }}
                              >
                                <div className="text-primary-400 mr-2 mt-1">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                                  </svg>
                                </div>
                                <p className={`${isDarkMode ? 'text-dark-200' : 'text-gray-700'}`}>{detail}</p>
                              </motion.div>
                            ))}
                          </div>
                          
                          {/* Certifications */}
                          {index === 0 && (
                            <motion.div 
                              className={`mt-8 pt-6 border-t ${isDarkMode ? 'border-dark-700/30' : 'border-gray-300/50'}`}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.8 }}
                            >
                              <h4 className="text-lg font-semibold text-dark-100 mb-4">Certifications</h4>
                              <div className="space-y-4">
                                {[
                                  {
                                    name: 'Python Language Certification',
                                    issuer: 'Great Learning',
                                    date: 'April 2024',
                                    credential: 'PY12345'
                                  }
                                ].map((cert, certIndex) => (
                                  <motion.div 
                                    key={certIndex}
                                    className="p-4 rounded-lg bg-dark-800/50 border border-dark-700/50"
                                    whileHover={{ scale: 1.02, x: 5 }}
                                  >
                                    <div className="flex justify-between">
                                      <div>
                                        <h5 className="font-medium text-primary-400">{cert.name}</h5>
                                        <p className="text-sm text-dark-300">{cert.issuer}</p>
                                      </div>
                                      <div className="text-right">
                                        <p className="text-sm text-dark-300">{cert.date}</p>
                                        <p className="text-xs text-dark-400">ID: {cert.credential}</p>
                                      </div>
                                    </div>
                                  </motion.div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeRedesigned;