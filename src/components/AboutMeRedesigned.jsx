import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AboutMeRedesigned = ({ isDarkMode }) => {
  const [activeSection, setActiveSection] = useState('overview');
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.8,
        ease: 'easeInOut'
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { 
        type: 'spring',
        stiffness: 200,
        damping: 20,
        duration: 0.4 
      }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 0.8,
        ease: 'easeInOut'
      }
    }
  };
  
  const itemFade = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.6 
      }
    },
    hover: {
      y: -5,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    }
  };
  
  // Skill categories with their respective skills
  const skillCategories = [
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
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with React and Tailwind CSS',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'JavaScript'],
      year: '2024',
      image: 'https://placehold.co/600x400/0ea5e9/ffffff?text=Portfolio'
    },
    {
      title: 'Task Manager',
      description: 'Web application for managing tasks and projects',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      year: '2023',
      image: 'https://placehold.co/600x400/d946ef/ffffff?text=Task+Manager'
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather forecasting web application',
      tech: ['JavaScript', 'Weather API', 'HTML/CSS', 'Bootstrap'],
      year: '2023',
      image: 'https://placehold.co/600x400/0ea5e9/ffffff?text=Weather+Dashboard'
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
    { label: 'Projects', value: '10+', icon: 'code' },
    { label: 'HackerRank', value: '5★', icon: 'star' },
    { label: 'Leetcode', value: '100+', icon: 'award' },
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
      <div className="mb-8 text-center">
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
          I am a Computer Science student with a passion for creating innovative software solutions that make a real difference.
        </motion.p>
      </div>
      
      {/* Horizontal Navigation */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`glass-card mb-10 p-4 ${isDarkMode ? 'bg-dark-900/80' : 'bg-white/80'} rounded-xl shadow-lg`}
      >
        <nav className="flex flex-wrap justify-center rounded-2xl shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
          {[
            { id: 'overview', label: 'Overview', icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )},
            { id: 'skills', label: 'Skills & Expertise', icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            )},
            { id: 'projects', label: 'Projects', icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            )},
            { id: 'education', label: 'Education', icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998a12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            )}
          ].map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`nav-button m-2 flex items-center justify-center ${
                activeSection === item.id ? 'active' : ''
              } ${isDarkMode ? 'text-dark-100' : 'text-gray-700'}`}
              whileHover={{ 
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * Object.keys(item).indexOf('id') }}
            >
              <motion.span 
                className="mr-2"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {item.icon}
              </motion.span>
              <span className="font-medium">{item.label}</span>
            </motion.button>
          ))}
        </nav>
      </motion.div>
      
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
            <div className="glass-card overflow-hidden mb-8 rounded-2xl shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 mix-blend-overlay z-10"></div>
                <img 
                  src="https://placehold.co/600x600/3b82f6/ffffff?text=VM" 
                  alt="Venkat Madhu Mohan" 
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-dark-900/90 to-transparent">
                  <h3 className="text-2xl font-bold text-white">Venkat Madhu Mohan</h3>
                  <p className="text-primary-400 font-medium">Computer Science Student</p>
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
                      className={`flex flex-col items-center p-4 rounded-xl ${isDarkMode ? 'bg-dark-800/50 border border-dark-700/50' : 'bg-white/90 border border-gray-100'} hover:border-primary-400 transition-all duration-300`}
                      variants={itemFade}
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: `0 15px 30px -10px ${stat.icon === 'star' || stat.icon === 'code' ? 
                          (isDarkMode ? "rgba(14, 165, 233, 0.4)" : "rgba(14, 165, 233, 0.2)") : 
                          (isDarkMode ? "rgba(139, 92, 246, 0.4)" : "rgba(139, 92, 246, 0.2)")}`,
                        y: -5
                      }}
                    >
                      <div className="mb-2 text-primary-400">
                        {icons[stat.icon]}
                      </div>
                      <p className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                        {stat.value}
                      </p>
                      <p className={`text-sm font-medium ${isDarkMode ? 'text-dark-300' : 'text-gray-600'}`}>
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* Social links */}
                <motion.div 
                  className="mt-6 flex justify-center space-x-3 flex-wrap"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {/* GitHub */}
                  <motion.a 
                    href="https://github.com/venkatmadhu21" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`p-3 rounded-full ${isDarkMode ? 'bg-dark-800' : 'bg-gray-200'} text-primary-400 ${isDarkMode ? 'hover:bg-dark-700' : 'hover:bg-gray-300'} hover:shadow-glow transition-all duration-300 m-1`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </motion.a>
                  
                  {/* LeetCode */}
                  <motion.a 
                    href="https://leetcode.com/u/venkatmadhu21/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`p-3 rounded-full ${isDarkMode ? 'bg-dark-800' : 'bg-gray-200'} text-accent-400 ${isDarkMode ? 'hover:bg-dark-700' : 'hover:bg-gray-300'} hover:shadow-glow-accent transition-all duration-300 m-1`}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                    </svg>
                  </motion.a>
                  
                  {/* CodeChef */}
                  <motion.a 
                    href="https://www.codechef.com/users/venkatmadhu21" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`p-3 rounded-full ${isDarkMode ? 'bg-dark-800' : 'bg-gray-200'} text-secondary-400 ${isDarkMode ? 'hover:bg-dark-700' : 'hover:bg-gray-300'} hover:shadow-glow-purple transition-all duration-300 m-1`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M11.257.011c-.763.008-1.53.123-2.295.342-2.06.587-5.481 3.334-6.638 4.286-.475.39-.708.708-.708.967 0 .456.619 1.17 1.537 1.77.782.513 1.465.782 2.358.927.185.029.352.059.371.059.029 0 .059-.185.088-.406.088-.708.406-1.367.893-1.85.254-.254.342-.303.635-.342.342-.049.371-.039.567.185.185.215.195.254.195.635 0 .371-.02.429-.185.634-.235.293-.254.635-.049.967.166.274.469.362.967.274.185-.029.215-.059.215-.166 0-.088-.059-.176-.166-.244-.185-.127-.195-.166-.195-.664 0-.475.02-.547.166-.708.342-.371.893-.342 1.201.059.156.205.185.303.185.664 0 .371-.029.449-.166.635-.127.166-.166.274-.137.342.078.195.469.254.771.117.254-.117.274-.156.274-.4 0-.235-.029-.293-.195-.459-.185-.185-.195-.215-.195-.635 0-.39.02-.459.166-.62.342-.371.874-.371 1.201.01.146.166.166.234.166.635 0 .4-.02.469-.166.635-.166.185-.195.244-.195.459 0 .244.02.283.274.4.303.137.693.078.771-.117.029-.068-.01-.176-.137-.342-.137-.186-.166-.264-.166-.635 0-.361.029-.459.185-.664.308-.4.859-.43 1.201-.059.146.161.166.234.166.708 0 .498-.01.537-.195.664-.107.068-.166.156-.166.244 0 .107.029.137.215.166.498.088.801 0 .967-.274.205-.332.186-.674-.049-.967-.166-.205-.185-.264-.185-.634 0-.381.01-.42.195-.635.195-.224.224-.234.567-.185.293.039.381.088.635.342.488.483.806 1.142.893 1.85.029.221.059.406.088.406.02 0 .186-.029.371-.059.893-.146 1.576-.415 2.358-.927.918-.6 1.537-1.314 1.537-1.77 0-.259-.234-.576-.708-.967-1.157-.952-4.578-3.699-6.638-4.286-1.035-.293-2.07-.43-3.139-.41zm.01 1.562c.391.005.772.04 1.133.098.762.127 1.27.342 1.83.781.4.312.4.312.205.518-.107.117-.244.205-.312.205-.068 0-.273-.107-.459-.244-.703-.508-1.465-.732-2.461-.732-.996 0-1.758.225-2.461.732-.186.137-.391.244-.459.244-.068 0-.205-.088-.312-.205-.195-.205-.195-.205.205-.518.557-.435 1.064-.654 1.826-.781.361-.059.742-.093 1.133-.098.02 0 .039 0 .059 0zm-3.593 2.08c.215.02.469.088.762.205.4.156.469.215.469.342 0 .156-.234.4-.391.4-.068 0-.273-.078-.459-.176-.381-.205-.527-.215-.908-.088-.186.068-.352.127-.381.146-.088.049-.244-.107-.244-.244 0-.166.4-.459.762-.557.166-.049.273-.049.391-.029zm7.127 0c.117-.02.225-.02.391.029.361.098.762.391.762.557 0 .137-.156.293-.244.244-.029-.02-.195-.078-.381-.146-.381-.127-.527-.117-.908.088-.186.098-.391.176-.459.176-.156 0-.391-.244-.391-.4 0-.127.068-.186.469-.342.293-.117.547-.186.762-.205zm-8.633 1.27c.215.01.42.068.596.176.342.215.381.264.381.518 0 .244-.039.312-.322.518-.4.293-.488.635-.273 1.045.088.166.088.264.02.342-.117.127-.371.088-.488-.078-.049-.068-.127-.322-.176-.557-.068-.342-.127-.459-.322-.576-.127-.078-.273-.205-.322-.283-.107-.176-.107-.4 0-.576.146-.244.498-.381.908-.342.02 0 .029 0 .049 0zm10.09 0c.02 0 .029 0 .049 0 .41-.039.762.098.908.342.107.176.107.4 0 .576-.049.078-.195.205-.322.283-.195.117-.254.234-.322.576-.049.234-.127.488-.176.557-.117.166-.371.205-.488.078-.068-.078-.068-.176.02-.342.215-.41.127-.752-.273-1.045-.283-.205-.322-.273-.322-.518 0-.254.039-.303.381-.518.176-.107.381-.166.596-.176zm-5.11.244c.314.005.568.093.762.273.303.273.342.635.137 1.123-.088.205-.156.459-.156.557 0 .244.088.488.234.635.068.068.322.176.557.244.498.137.703.283.83.596.068.166.068.264.02.518-.039.195-.117.381-.186.42-.107.068-.127.068-.273-.02-.088-.049-.273-.234-.4-.4-.244-.312-.303-.342-.664-.342-.342 0-.4.02-.576.254-.107.137-.254.254-.322.254-.195 0-.371-.244-.371-.498 0-.127.068-.293.166-.381.088-.088.166-.234.166-.322 0-.088-.137-.293-.303-.459-.4-.4-.469-.869-.205-1.367.127-.244.146-.322.088-.4-.107-.137-.01-.332.195-.4.107-.039.205-.029.303.02.107.049.146.029.195-.088.068-.156.234-.244.4-.244.02 0 .039 0 .059 0zm-3.842 2.5c.137-.02.264.039.342.156.068.107.068.166-.02.322-.117.244-.068.488.137.693.088.088.186.254.215.361.068.205.059.215-.107.342-.205.156-.4.107-.557-.137-.068-.107-.146-.322-.176-.469-.039-.186-.127-.303-.303-.4-.127-.068-.254-.186-.283-.254-.068-.195.01-.459.166-.557.068-.039.127-.049.195-.059.02 0 .029 0 .049 0 .039 0 .088 0 .137.01.02 0 .039 0 .059 0zm7.615 0c.02 0 .039 0 .059 0 .049-.01.098-.01.137-.01.02 0 .029 0 .049 0 .068.01.127.02.195.059.156.098.234.361.166.557-.029.068-.156.186-.283.254-.176.098-.264.215-.303.4-.029.146-.107.361-.176.469-.156.244-.352.293-.557.137-.166-.127-.176-.137-.107-.342.029-.107.127-.273.215-.361.205-.205.254-.449.137-.693-.088-.156-.088-.215-.02-.322.078-.117.205-.176.342-.156.02 0 .039 0 .059 0zm-3.871 1.66c.41-.049.83.088 1.123.371.146.146.303.264.342.264.039 0 .205-.107.361-.244.4-.342.859-.469 1.318-.342.225.059.244.078.244.244 0 .146-.039.195-.205.244-.107.029-.303.146-.42.254-.303.254-.4.254-.693.01-.127-.107-.303-.195-.381-.195-.088 0-.264.088-.391.195-.293.244-.391.244-.693-.01-.117-.107-.312-.225-.42-.254-.166-.049-.205-.098-.205-.244 0-.166.02-.186.244-.244.068-.02.137-.029.205-.039.059-.01.117-.01.176-.01zm-2.5 1.27c.156.01.303.068.4.176.107.117.117.166.059.303-.039.088-.127.186-.195.215-.068.029-.205-.01-.303-.088-.205-.156-.4-.156-.605 0-.098.078-.234.117-.303.088-.068-.029-.156-.127-.195-.215-.059-.137-.049-.186.059-.303.205-.215.664-.264 1.084-.176zm6.13 0c.42-.088.879-.039 1.084.176.107.117.117.166.059.303-.039.088-.127.186-.195.215-.068.029-.205-.01-.303-.088-.205-.156-.4-.156-.605 0-.098.078-.234.117-.303.088-.068-.029-.156-.127-.195-.215-.059-.137-.049-.186.059-.303.098-.107.244-.166.4-.176zm-3.09.244c.166-.01.332.039.459.137.244.195.244.4.01.596-.107.088-.254.166-.322.166-.068 0-.215-.078-.322-.166-.234-.195-.234-.4.01-.596.127-.098.293-.146.459-.137zm-1.895 1.045c.088-.01.186.01.273.059.107.059.195.166.195.244s-.088.186-.195.244c-.107.049-.205.068-.293.059-.088-.01-.186-.078-.273-.137-.205-.146-.205-.332 0-.478.088-.059.186-.078.273-.068.01 0 .01 0 .02 0zm3.764 0c.01 0 .01 0 .02 0 .088-.01.186.01.273.068.205.146.205.332 0 .478-.088.059-.186.127-.273.137-.088.01-.186-.01-.293-.059-.107-.059-.195-.166-.195-.244s.088-.186.195-.244c.088-.049.186-.068.273-.059zm-1.895.498c.088-.01.186.01.273.059.107.059.195.166.195.244s-.088.186-.195.244c-.107.049-.205.068-.293.059-.088-.01-.186-.078-.273-.137-.205-.146-.205-.332 0-.478.088-.059.186-.078.273-.068.01 0 .01 0 .02 0zm-2.969 1.748c.137.01.264.088.322.215.039.088.039.166-.01.273-.039.088-.127.156-.205.156-.068 0-.186-.059-.254-.137-.078-.078-.186-.137-.244-.137-.059 0-.166.059-.244.137-.068.078-.186.137-.254.137-.078 0-.166-.068-.205-.156-.049-.107-.049-.186-.01-.273.059-.127.186-.205.322-.215.088-.01.186.01.273.059.088.049.166.049.254 0 .088-.049.186-.068.273-.059.01 0 .01 0 .02 0zm6.13 0c.01 0 .01 0 .02 0 .088-.01.186.01.273.059.088.049.166.049.254 0 .088-.049.186-.068.273-.059.137.01.264.088.322.215.039.088.039.166-.01.273-.039.088-.127.156-.205.156-.068 0-.186-.059-.254-.137-.078-.078-.186-.137-.244-.137-.059 0-.166.059-.244.137-.068.078-.186.137-.254.137-.078 0-.166-.068-.205-.156-.049-.107-.049-.186-.01-.273.059-.127.186-.205.322-.215zm-3.09.244c.088-.01.186.01.273.059.107.059.195.166.195.244s-.088.186-.195.244c-.107.049-.205.068-.293.059-.088-.01-.186-.078-.273-.137-.205-.146-.205-.332 0-.478.088-.059.186-.078.273-.068.01 0 .01 0 .02 0z"/>
                    </svg>
                  </motion.a>
                  
                  {/* CodeForces */}
                  <motion.a 
                    href="https://codeforces.com/profile/venkatmadhu21" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`p-3 rounded-full ${isDarkMode ? 'bg-dark-800' : 'bg-gray-200'} text-primary-400 ${isDarkMode ? 'hover:bg-dark-700' : 'hover:bg-gray-300'} hover:shadow-glow transition-all duration-300 m-1`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9 0c.828 0 1.5.672 1.5 1.5v10.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V9c0-.828.672-1.5 1.5-1.5h3zm9 0c.828 0 1.5.672 1.5 1.5v10.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V9c0-.828.672-1.5 1.5-1.5h3zm-13.5 9h-3v3h3v-3z"/>
                    </svg>
                  </motion.a>
                  
                  {/* HackerRank */}
                  <motion.a 
                    href="https://www.hackerrank.com/profile/venkatmadhu232" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`p-3 rounded-full ${isDarkMode ? 'bg-dark-800' : 'bg-gray-200'} text-accent-400 ${isDarkMode ? 'hover:bg-dark-700' : 'hover:bg-gray-300'} hover:shadow-glow-accent transition-all duration-300 m-1`}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908h.701c.141 0 .254-.115.254-.258 0-.094-.049-.176-.123-.221L9.223 4.92c-.049-.063-.141-.109-.226-.109-.086 0-.178.045-.226.109L7.076 6.43c-.072.045-.12.126-.12.221 0 .143.113.258.255.258h.704l.008 10.035c0 .145.111.258.254.258h1.492c.142 0 .259-.115.259-.256v-4.004h4.073v4.152h-.699c-.143 0-.256.115-.256.258 0 .092.048.174.119.219l1.579 1.51c.044.061.141.109.225.109.085 0 .179-.045.228-.109l1.574-1.51c.072-.045.12-.127.12-.219 0-.143-.115-.258-.255-.258h-.704l-.007-10.034c0-.145-.114-.26-.255-.26h-1.494v.002z" />
                    </svg>
                  </motion.a>
                  
                  {/* Email */}
                  <motion.a 
                    href="mailto:venkatmadhumohann@gmail.com" 
                    className={`p-3 rounded-full ${isDarkMode ? 'bg-dark-800' : 'bg-gray-200'} text-primary-400 ${isDarkMode ? 'hover:bg-dark-700' : 'hover:bg-gray-300'} hover:shadow-glow transition-all duration-300 m-1`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </motion.a>
                </motion.div>
              </div>
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
            className="glass-card p-8 min-h-[600px] rounded-2xl shadow-xl"
          >
            <AnimatePresence mode="wait">
              {/* Overview Section */}
              {activeSection === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                    Overview
                  </h2>
                  <div className="space-y-6">
                    <p className={`text-lg ${isDarkMode ? 'text-dark-300' : 'text-gray-700'}`}>
                      I'm a passionate Computer Science student with expertise in both web development and competitive programming. My journey in tech began with a curiosity about how applications work, which led me to explore various programming languages, frameworks, and algorithmic problem-solving.
                    </p>
                    <p className={`text-lg ${isDarkMode ? 'text-dark-300' : 'text-gray-700'}`}>
                      Currently, I'm specializing in web technologies like React and Node.js while actively practicing Data Structures and Algorithms. I enjoy creating applications that solve real-world problems and tackling challenging algorithmic puzzles on platforms like LeetCode, CodeForces, and HackerRank.
                    </p>
                    <p className={`text-lg ${isDarkMode ? 'text-dark-300' : 'text-gray-700'}`}>
                      When I'm not coding, you can find me participating in hackathons, competitive programming contests, contributing to open-source projects, or exploring the latest tech trends. I'm always eager to learn new technologies and improve my problem-solving skills.
                    </p>
                    
                    <div className="mt-8">
                      <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-dark-100' : 'text-gray-800'}`}>
                        What I Do
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        <div className={`p-5 rounded-xl ${isDarkMode ? 'bg-dark-800/50' : 'bg-white/90'} border ${isDarkMode ? 'border-dark-700' : 'border-gray-100'}`}>
                          <div className="text-secondary-400 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                          </div>
                          <h4 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-dark-100' : 'text-gray-800'}`}>
                            Web Development
                          </h4>
                          <p className={`${isDarkMode ? 'text-dark-300' : 'text-gray-600'}`}>
                            Creating responsive and interactive web applications using modern frameworks like React and backend technologies.
                          </p>
                        </div>

                        <div className={`p-5 rounded-xl ${isDarkMode ? 'bg-dark-800/50' : 'bg-white/90'} border ${isDarkMode ? 'border-dark-700' : 'border-gray-100'}`}>
                          <div className="text-primary-400 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                          </div>
                          <h4 className={`text-lg font-semibold mb-2 ${isDarkMode ? 'text-dark-100' : 'text-gray-800'}`}>
                            Data Structures & Algorithms
                          </h4>
                          <p className={`${isDarkMode ? 'text-dark-300' : 'text-gray-600'}`}>
                            Solving complex problems using efficient algorithms and data structures. Active on competitive programming platforms like LeetCode and CodeForces.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* Skills Section */}
              {activeSection === 'skills' && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                    Skills & Expertise
                  </h2>
                  
                  <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {skillCategories.map((category, index) => (
                      <motion.div
                        key={index}
                        className={`p-6 rounded-xl border ${isDarkMode ? 'border-dark-700' : 'border-gray-100'} ${isDarkMode ? category.bgColor.replace('bg-', 'bg-opacity-20 bg-') : category.bgColor}`}
                        variants={itemFade}
                        whileHover={{ 
                          y: -5,
                          boxShadow: isDarkMode 
                            ? '0 15px 30px -10px rgba(0, 0, 0, 0.3)' 
                            : '0 15px 30px -10px rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        <div className="flex items-center mb-4">
                          <div className={`p-3 rounded-lg ${category.bgColor} mr-4`}>
                            {category.icon}
                          </div>
                          <h3 className={`text-xl font-bold ${category.textColor}`}>
                            {category.name}
                          </h3>
                        </div>
                        
                        <div className="space-y-3">
                          {category.skills.map((skill, skillIndex) => (
                            <div 
                              key={skillIndex}
                              className={`flex items-center p-3 rounded-lg ${isDarkMode ? 'bg-dark-800/50' : 'bg-white/90'} border ${isDarkMode ? 'border-dark-700/50' : 'border-gray-100'}`}
                            >
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} mr-3`}></div>
                              <span className={isDarkMode ? 'text-dark-200' : 'text-gray-700'}>
                                {skill}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  <div className="mt-10">
                    <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-dark-100' : 'text-gray-800'}`}>
                      Languages & Frameworks
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {['JavaScript', 'Python', 'Java', 'C++', 'React', 'Node.js', 'HTML/CSS', 'Express'].map((lang, index) => (
                        <motion.div
                          key={index}
                          className={`p-3 rounded-lg text-center ${isDarkMode ? 'bg-dark-800/50 border-dark-700/50' : 'bg-white/90 border-gray-100'} border`}
                          whileHover={{ scale: 1.05 }}
                        >
                          <span className={isDarkMode ? 'text-dark-200' : 'text-gray-700'}>
                            {lang}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* Projects Section */}
              {activeSection === 'projects' && (
                <motion.div
                  key="projects"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                    Projects
                  </h2>
                  
                  <div className="grid grid-cols-1 gap-8">
                    {projects.map((project, index) => (
                      <motion.div
                        key={index}
                        className={`rounded-xl overflow-hidden ${isDarkMode ? 'bg-dark-800/50' : 'bg-white/90'} border ${isDarkMode ? 'border-dark-700' : 'border-gray-100'}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          transition: { delay: index * 0.1 }
                        }}
                        whileHover={{ 
                          y: -5,
                          boxShadow: isDarkMode 
                            ? '0 15px 30px -10px rgba(0, 0, 0, 0.3)' 
                            : '0 15px 30px -10px rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        <div className="md:flex">
                          <div className="md:w-2/5">
                            <img 
                              src={project.image} 
                              alt={project.title} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="p-6 md:w-3/5">
                            <div className="flex justify-between items-start mb-2">
                              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-dark-100' : 'text-gray-800'}`}>
                                {project.title}
                              </h3>
                              <span className={`px-3 py-1 rounded-full text-xs ${isDarkMode ? 'bg-dark-700 text-dark-300' : 'bg-gray-100 text-gray-600'}`}>
                                {project.year}
                              </span>
                            </div>
                            <p className={`mb-4 ${isDarkMode ? 'text-dark-300' : 'text-gray-600'}`}>
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {project.tech.map((tech, techIndex) => (
                                <span 
                                  key={techIndex}
                                  className={`px-3 py-1 rounded-full text-xs ${
                                    techIndex % 2 === 0
                                      ? isDarkMode ? 'bg-primary-500/20 text-primary-400' : 'bg-primary-100 text-primary-600'
                                      : isDarkMode ? 'bg-secondary-500/20 text-secondary-400' : 'bg-secondary-100 text-secondary-600'
                                  }`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
              
              {/* Education Section */}
              {activeSection === 'education' && (
                <motion.div
                  key="education"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
                    Education
                  </h2>
                  
                  <div className="space-y-8">
                    {education.map((edu, index) => (
                      <motion.div
                        key={index}
                        className={`p-6 rounded-xl ${isDarkMode ? 'bg-dark-800/50' : 'bg-white/90'} border ${isDarkMode ? 'border-dark-700' : 'border-gray-100'}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ 
                          y: -5,
                          boxShadow: isDarkMode 
                            ? '0 15px 30px -10px rgba(0, 0, 0, 0.3)' 
                            : '0 15px 30px -10px rgba(0, 0, 0, 0.1)'
                        }}
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-dark-100' : 'text-gray-800'}`}>
                              {edu.degree}
                            </h3>
                            <p className="text-primary-400 font-medium">
                              {edu.institution}
                            </p>
                            <p className={`${isDarkMode ? 'text-dark-300' : 'text-gray-600'}`}>
                              {edu.location}
                            </p>
                          </div>
                          <span className={`px-4 py-2 rounded-full ${isDarkMode ? 'bg-dark-700 text-dark-300' : 'bg-gray-100 text-gray-600'}`}>
                            {edu.period}
                          </span>
                        </div>
                        
                        <div className="mt-6 space-y-3">
                          <h4 className={`text-lg font-semibold ${isDarkMode ? 'text-dark-200' : 'text-gray-700'}`}>
                            Highlights
                          </h4>
                          <ul className="space-y-2">
                            {edu.details.map((detail, detailIndex) => (
                              <li 
                                key={detailIndex}
                                className="flex items-start"
                              >
                                <div className="text-primary-400 mr-3 mt-1">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                                  </svg>
                                </div>
                                <span className={`${isDarkMode ? 'text-dark-300' : 'text-gray-600'}`}>
                                  {detail}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ))}
                  </div>
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