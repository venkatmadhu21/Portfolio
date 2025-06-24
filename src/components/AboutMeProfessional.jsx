import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AboutMeProfessional = ({ isDarkMode }) => {
  const [activeSection, setActiveSection] = useState('overview');
  
  // Professional animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: [0.215, 0.61, 0.355, 1]
      }
    }
  };

  // Professional skill categories
  const skillCategories = [
    {
      name: 'Frontend Development',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
      proficiency: 90,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Backend Development',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      skills: ['Node.js', 'Python', 'MongoDB', 'REST API', 'Firebase', 'Express.js'],
      proficiency: 85,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Programming Languages',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      skills: ['C++', 'Python', 'Java', 'JavaScript', 'C', 'SQL'],
      proficiency: 88,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Tools & Platforms',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'AWS', 'Figma'],
      proficiency: 82,
      color: 'from-orange-500 to-red-500'
    }
  ];

  // Professional projects showcase
  const featuredProjects = [
    {
      id: 1,
      title: 'Inspectify',
      subtitle: 'AI-Powered Road Damage Detection',
      description: 'Advanced computer vision system using Vision Transformer and YOLO for real-time road damage classification with GPS integration and comprehensive analytics dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'PyTorch', 'YOLO', 'ViT'],
      metrics: {
        accuracy: '94%',
        responseTime: '<2s',
        coverage: '1000+ KM'
      },
      status: 'Production',
      category: 'AI/ML'
    },
    {
      id: 2,
      title: 'Inventory Management System',
      subtitle: 'Enterprise Stock Management',
      description: 'Comprehensive inventory management solution with real-time stock tracking, automated reporting, and multi-location support for business operations.',
      technologies: ['HTML5', 'CSS3', 'Python', 'SQLite', 'XAMPP'],
      metrics: {
        efficiency: '+40%',
        accuracy: '99.2%',
        users: '50+'
      },
      status: 'Deployed',
      category: 'Web App'
    },
    {
      id: 3,
      title: 'Community Portal',
      subtitle: 'Residential Management Platform',
      description: 'Digital platform streamlining residential community operations with service request management, notice boards, and resident communication tools.',
      technologies: ['JavaScript', 'Python', 'SQLite', 'Bootstrap'],
      metrics: {
        satisfaction: '4.8/5',
        efficiency: '+60%',
        residents: '200+'
      },
      status: 'Live',
      category: 'Platform'
    }
  ];

  // Professional statistics
  const professionalStats = [
    {
      label: 'Projects Completed',
      value: '10+',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      trend: '+20%',
      description: 'Full-stack applications'
    },
    {
      label: 'Problem Solving',
      value: '200+',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      trend: '+35%',
      description: 'Coding challenges solved'
    },
    {
      label: 'Technologies',
      value: '12+',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      trend: '+25%',
      description: 'Modern tech stack'
    },
    {
      label: 'HackerRank',
      value: '5★',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      trend: 'Gold',
      description: 'Programming certification'
    }
  ];

  // Navigation items
  const navigationItems = [
    {
      id: 'overview',
      label: 'Overview',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      id: 'skills',
      label: 'Skills & Expertise',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      id: 'projects',
      label: 'Featured Work',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      id: 'journey',
      label: 'My Journey',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6.16" />
        </svg>
      )
    }
  ];

  return (
    <motion.div 
      className="min-h-screen py-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Professional Header */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        variants={itemVariants}
      >
        <div className="text-center">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
            style={{
              background: isDarkMode 
                ? 'linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(51, 65, 85, 0.6))'
                : 'linear-gradient(135deg, rgba(248, 250, 252, 0.8), rgba(241, 245, 249, 0.6))',
              borderColor: isDarkMode ? 'rgba(71, 85, 105, 0.3)' : 'rgba(203, 213, 225, 0.3)',
              backdropFilter: 'blur(12px)'
            }}
            variants={itemVariants}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className={`text-sm font-medium ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1 
            className={`font-bold tracking-tight mb-6 ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
            variants={itemVariants}
          >
            Building Tomorrow's
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </motion.h1>

          <motion.p 
            className={`text-xl leading-relaxed max-w-3xl mx-auto mb-8 ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
            variants={itemVariants}
          >
            Computer Science Engineering student passionate about creating innovative software solutions 
            that solve real-world problems and deliver exceptional user experiences.
          </motion.p>

          <motion.div 
            className="flex items-center justify-center gap-8 mb-12"
            variants={itemVariants}
          >
            {professionalStats.slice(0, 4).map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-2xl md:text-3xl font-bold mb-1 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {stat.value}
                </div>
                <div className={`text-sm ${
                  isDarkMode ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Professional Navigation */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        variants={itemVariants}
      >
        <div className={`p-2 rounded-2xl border backdrop-blur-md ${
          isDarkMode 
            ? 'bg-slate-900/60 border-slate-700/50' 
            : 'bg-white/80 border-slate-200/50'
        }`}>
          <nav className="flex flex-wrap justify-center gap-2">
            {navigationItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? `bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg`
                    : isDarkMode
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.icon}
                <span>{item.label}</span>
              </motion.button>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {activeSection === 'overview' && (
            <motion.div
              key="overview"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 lg:grid-cols-12 gap-12"
            >
              {/* Profile Section */}
              <motion.div 
                className="lg:col-span-4"
                variants={cardVariants}
              >
                <div className={`rounded-3xl overflow-hidden border backdrop-blur-md ${
                  isDarkMode 
                    ? 'bg-slate-900/60 border-slate-700/50' 
                    : 'bg-white/80 border-slate-200/50'
                }`}>
                  {/* Video Section */}
                  <div className="relative p-8 text-center">
                    <div className="w-64 h-64 mx-auto mb-6 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-lg opacity-20"></div>
                      <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-cover"
                          style={{
                            filter: 'brightness(1.1) contrast(1.1) saturate(1.2)',
                          }}
                        >
                          <source src="/images/projects/heelo.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                      </div>
                    </div>
                    
                    <h3 className={`text-2xl font-bold mb-2 ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      Venkat Madhu Mohan
                    </h3>
                    
                    <p className="text-blue-600 font-semibold mb-4">
                      Full-Stack Developer & CS Student
                    </p>
                    
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                      isDarkMode 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-green-100 text-green-700 border border-green-200'
                    }`}>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      Open to Work
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="p-6 border-t border-slate-200/20">
                    <div className="grid grid-cols-2 gap-4">
                      {professionalStats.map((stat, index) => (
                        <motion.div
                          key={index}
                          className={`p-4 rounded-xl text-center border ${
                            isDarkMode 
                              ? 'bg-slate-800/50 border-slate-700/50' 
                              : 'bg-slate-50/50 border-slate-200/50'
                          }`}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          <div className="flex justify-center mb-2 text-blue-500">
                            {stat.icon}
                          </div>
                          <div className={`text-xl font-bold mb-1 ${
                            isDarkMode ? 'text-white' : 'text-slate-900'
                          }`}>
                            {stat.value}
                          </div>
                          <div className={`text-xs ${
                            isDarkMode ? 'text-slate-400' : 'text-slate-500'
                          }`}>
                            {stat.description}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="p-6 border-t border-slate-200/20">
                    <div className="flex justify-center gap-3">
                      {[
                        { href: 'https://github.com/venkatmadhu21', icon: 'github', color: 'hover:text-gray-900' },
                        { href: 'https://www.linkedin.com/in/venkatmadhu', icon: 'linkedin', color: 'hover:text-blue-600' },
                        { href: 'https://leetcode.com/u/venkatmadhu/', icon: 'leetcode', color: 'hover:text-orange-500' },
                        { href: 'mailto:venkatmadhumohann@gmail.com', icon: 'email', color: 'hover:text-red-500' }
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          target={social.icon !== 'email' ? '_blank' : undefined}
                          rel={social.icon !== 'email' ? 'noopener noreferrer' : undefined}
                          className={`p-3 rounded-xl transition-all duration-200 ${
                            isDarkMode 
                              ? 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50' 
                              : 'bg-slate-100/50 text-slate-600 hover:bg-slate-200/50'
                          } ${social.color}`}
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {social.icon === 'github' && (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                            </svg>
                          )}
                          {social.icon === 'linkedin' && (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          )}
                          {social.icon === 'leetcode' && (
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                            </svg>
                          )}
                          {social.icon === 'email' && (
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          )}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* About Content */}
              <motion.div 
                className="lg:col-span-8 space-y-8"
                variants={cardVariants}
              >
                {/* Main About Card */}
                <div className={`p-8 rounded-3xl border backdrop-blur-md ${
                  isDarkMode 
                    ? 'bg-slate-900/60 border-slate-700/50' 
                    : 'bg-white/80 border-slate-200/50'
                }`}>
                  <h2 className={`text-2xl font-bold mb-6 ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    About Me
                  </h2>
                  
                  <div className="space-y-4 text-lg leading-relaxed">
                    <p className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>
                      I'm a Computer Science Engineering student at <span className="font-semibold text-blue-600">Keshav Memorial College of Engineering</span>, 
                      passionate about leveraging technology to create innovative solutions that make a meaningful impact.
                    </p>
                    
                    <p className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>
                      My journey in software development is driven by curiosity and a commitment to excellence. I specialize in 
                      <span className="font-semibold text-purple-600"> full-stack web development</span>, with expertise in modern 
                      frameworks like React and Node.js, combined with strong fundamentals in 
                      <span className="font-semibold text-green-600"> data structures and algorithms</span>.
                    </p>
                    
                    <p className={isDarkMode ? 'text-slate-300' : 'text-slate-600'}>
                      Beyond coding, I'm actively engaged in solving problems and have solved 200+ problems across various 
                      platforms. I believe in continuous learning and staying updated with the latest industry trends and technologies.
                    </p>
                  </div>
                </div>

                {/* Quick Facts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className={`p-6 rounded-2xl border backdrop-blur-md ${
                    isDarkMode 
                      ? 'bg-slate-900/60 border-slate-700/50' 
                      : 'bg-white/80 border-slate-200/50'
                  }`}>
                    <h3 className={`text-xl font-semibold mb-4 ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      🎯 Current Focus
                    </h3>
                    <ul className={`space-y-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      <li>• Advanced AI/ML applications</li>
                      <li>• Full-stack development</li>
                      <li>• Data Structures and Algorithms in C++</li>
                      <li>• Participating in Hackathons and contests</li>
                    </ul>
                  </div>
                  
                  <div className={`p-6 rounded-2xl border backdrop-blur-md ${
                    isDarkMode 
                      ? 'bg-slate-900/60 border-slate-700/50' 
                      : 'bg-white/80 border-slate-200/50'
                  }`}>
                    <h3 className={`text-xl font-semibold mb-4 ${
                      isDarkMode ? 'text-white' : 'text-slate-900'
                    }`}>
                      🚀 Interests
                    </h3>
                    <ul className={`space-y-2 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      <li>• Computer Vision & AI</li>
                      <li>• Web3 Technologies</li>
                      <li>• System Design</li>
                      <li>• Tech Entrepreneurship</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeSection === 'skills' && (
            <motion.div
              key="skills"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="space-y-12"
            >
              {/* Skills Header */}
              <div className="text-center">
                <h2 className={`text-3xl font-bold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Skills & Expertise
                </h2>
                <p className={`text-lg ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Technologies and tools I work with to bring ideas to life
                </p>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className={`p-8 rounded-3xl border backdrop-blur-md ${
                      isDarkMode 
                        ? 'bg-slate-900/60 border-slate-700/50' 
                        : 'bg-white/80 border-slate-200/50'
                    }`}
                    whileHover={{ scale: 1.02, y: -4 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white`}>
                        {category.icon}
                      </div>
                      <div>
                        <h3 className={`text-xl font-semibold ${
                          isDarkMode ? 'text-white' : 'text-slate-900'
                        }`}>
                          {category.name}
                        </h3>
                        <div className={`text-sm font-medium mt-1 ${
                          isDarkMode ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          {category.description || 'Professional expertise'}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-3 py-1 rounded-lg text-sm font-medium border ${
                            isDarkMode 
                              ? 'bg-slate-800/60 text-slate-300 border-slate-700/50' 
                              : 'bg-slate-100/60 text-slate-700 border-slate-200/50'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === 'projects' && (
            <motion.div
              key="projects"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="space-y-12"
            >
              {/* Projects Header */}
              <div className="text-center">
                <h2 className={`text-3xl font-bold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Featured Projects
                </h2>
                <p className={`text-lg ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  Showcasing innovative solutions and technical excellence
                </p>
              </div>

              {/* Projects Grid */}
              <div className="space-y-8">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    variants={cardVariants}
                    className={`p-8 rounded-3xl border backdrop-blur-md transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-slate-900/60 border-slate-700/50 hover:border-slate-600/50' 
                        : 'bg-white/80 border-slate-200/50 hover:border-slate-300/50'
                    }`}
                    whileHover={{ scale: 1.01, y: -4 }}
                  >
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <h3 className={`text-2xl font-bold ${
                            isDarkMode ? 'text-white' : 'text-slate-900'
                          }`}>
                            {project.title}
                          </h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            project.status === 'Production' 
                              ? 'bg-green-100 text-green-700 border border-green-200' 
                              : project.status === 'Deployed'
                              ? 'bg-blue-100 text-blue-700 border border-blue-200'
                              : 'bg-purple-100 text-purple-700 border border-purple-200'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        
                        <p className={`text-lg font-semibold mb-3 text-blue-600`}>
                          {project.subtitle}
                        </p>
                        
                        <p className={`text-base leading-relaxed mb-6 ${
                          isDarkMode ? 'text-slate-300' : 'text-slate-600'
                        }`}>
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`px-3 py-1 rounded-lg text-sm font-medium border ${
                                isDarkMode 
                                  ? 'bg-slate-800/60 text-slate-300 border-slate-700/50' 
                                  : 'bg-slate-100/60 text-slate-700 border-slate-200/50'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="lg:w-80">
                        <div className="grid grid-cols-3 gap-4">
                          {Object.entries(project.metrics).map(([key, value], metricIndex) => (
                            <div
                              key={metricIndex}
                              className={`p-4 rounded-xl text-center border ${
                                isDarkMode 
                                  ? 'bg-slate-800/50 border-slate-700/50' 
                                  : 'bg-slate-50/50 border-slate-200/50'
                              }`}
                            >
                              <div className={`text-xl font-bold mb-1 ${
                                isDarkMode ? 'text-white' : 'text-slate-900'
                              }`}>
                                {value}
                              </div>
                              <div className={`text-xs capitalize ${
                                isDarkMode ? 'text-slate-400' : 'text-slate-500'
                              }`}>
                                {key}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeSection === 'journey' && (
            <motion.div
              key="journey"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="space-y-12"
            >
              {/* Journey Header */}
              <div className="text-center">
                <h2 className={`text-3xl font-bold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  My Journey
                </h2>
                <p className={`text-lg ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  The path that led me to software development
                </p>
              </div>

              {/* Timeline */}
              <div className="relative">
                <div className={`absolute left-4 top-0 bottom-0 w-0.5 ${
                  isDarkMode ? 'bg-slate-700' : 'bg-slate-300'
                }`}></div>
                
                <div className="space-y-12">
                  {[
                    {
                      year: '2023 - Present',
                      title: 'B.Tech Computer Science Engineering',
                      institution: 'Keshav Memorial College of Engineering',
                      description: 'Pursuing my passion for computer science with focus on algorithms, data structures, and software engineering principles.',
                      achievements: ['CGPA: 8.5+', 'Active in coding competitions', 'Tech club member']
                    },
                    {
                      year: '2024',
                      title: 'Full-Stack Development Journey',
                      institution: 'Self-Learning & Projects',
                      description: 'Mastered modern web technologies through hands-on projects and real-world applications.',
                      achievements: ['10+ projects completed', 'MERN stack expertise', 'AI/ML integration']
                    },
                     {
                        year: '2024 - Present',
                        title: 'Data Structures & Algorithms (DSA)',
                        institution: 'LeetCode, Codeforces, Hackerrank & more',
                        description: 'Consistently practicing DSA to prepare for tech interviews and competitions through structured topic-wise problem solving.',
                        achievements: ['Solved 250+ DSA problems', '5★ on HackerRank (C++)', 'Active on LeetCode, Codeforces & more']
                      }

                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      className="relative pl-12"
                    >
                      <div className={`absolute left-2 w-4 h-4 rounded-full border-4 ${
                        isDarkMode 
                          ? 'bg-slate-900 border-blue-500' 
                          : 'bg-white border-blue-500'
                      }`}></div>
                      
                      <div className={`p-6 rounded-2xl border backdrop-blur-md ${
                        isDarkMode 
                          ? 'bg-slate-900/60 border-slate-700/50' 
                          : 'bg-white/80 border-slate-200/50'
                      }`}>
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className={`text-xl font-bold ${
                              isDarkMode ? 'text-white' : 'text-slate-900'
                            }`}>
                              {item.title}
                            </h3>
                            <p className="text-blue-600 font-semibold">
                              {item.institution}
                            </p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            isDarkMode 
                              ? 'bg-slate-800 text-slate-300' 
                              : 'bg-slate-100 text-slate-600'
                          }`}>
                            {item.year}
                          </span>
                        </div>
                        
                        <p className={`mb-4 ${
                          isDarkMode ? 'text-slate-300' : 'text-slate-600'
                        }`}>
                          {item.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {item.achievements.map((achievement, achIndex) => (
                            <span
                              key={achIndex}
                              className={`px-3 py-1 rounded-lg text-sm ${
                                isDarkMode 
                                  ? 'bg-green-900/30 text-green-400' 
                                  : 'bg-green-100 text-green-700'
                              }`}
                            >
                              ✓ {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default AboutMeProfessional;