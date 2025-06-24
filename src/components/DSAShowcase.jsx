
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useScrollAnimation from '../hooks/useScrollAnimation';

// Modern Tooltip Component for DSA Showcase
const CustomTooltip = ({ children, content, isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap z-50 backdrop-blur-md ${
              isDarkMode 
                ? 'bg-gradient-to-r from-slate-800/95 to-slate-900/95 text-slate-100 border border-slate-600/50 shadow-xl shadow-slate-900/25' 
                : 'bg-gradient-to-r from-white/95 to-gray-50/95 text-slate-700 border border-slate-200/80 shadow-xl shadow-slate-900/10'
            }`}
            style={{
              backdropFilter: 'blur(16px)',
              boxShadow: isDarkMode 
                ? '0 12px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(139, 92, 246, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)' 
                : '0 12px 32px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(139, 92, 246, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {content}
            <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent ${
              isDarkMode ? 'border-t-slate-800/95' : 'border-t-white/95'
            }`} 
            style={{
              filter: 'drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))'
            }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Competitive programming profile data
const cpProfile = {
  languages: ["C++", "Python", "C"],
  platforms: [
    {
      name: "LeetCode",
      username: "venkatmadhumohan",
      profileUrl: "https://leetcode.com/venkatmadhumohan/",
      ranking: "Top 35%",
      rating: 1500,
      badges: ["75 Days Challenge", "Daily Streak: 30+"],
      icon: "🟡",
      color: "amber"
    },
    {
      name: "CodeChef",
      username: "venkatmadhumohan",
      profileUrl: "https://www.codechef.com/users/venkatmadhumohan",
      ranking: "1★ Coder",
      rating: 1350,
      badges: ["Beginner Problem Solver"],
      icon: "🔴",
      color: "red"
    },
    {
      name: "HackerRank",
      username: "venkatmadhumohan",
      profileUrl: "https://www.hackerrank.com/venkatmadhumohan",
      ranking: "5★ in Problem Solving",
      badges: ["Problem Solving (Basic)", "Python (Intermediate)"],
      certificates: ["Problem Solving (Basic)", "Python (Basic)"],
      icon: "🟢",
      color: "green"
    }
  ],

};

const DSAShowcase = ({ isDarkMode }) => {
  const [activePlatform, setActivePlatform] = useState(cpProfile.platforms[0].name);
  const [activeTab, setActiveTab] = useState('overview');

  const [isVisible, setIsVisible] = useState(false);
  const [animatedNumbers, setAnimatedNumbers] = useState({
    rating: 0
  });

  useScrollAnimation();

  // Get the active platform data
  const platformData = cpProfile.platforms.find(p => p.name === activePlatform);




  // Number animation effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedNumbers({
        rating: platformData.rating || 0
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [platformData]);

  // Enhanced animation variants
  const containerVariants = {
    hidden: { opacity: 0 },

    visible: {
      opacity: 1,
      transition: {

        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };


  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },





    visible: { 
      opacity: 1, 
      y: 0,

      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };









  const slideIn = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  // Helper functions
  const platformColor = (platform) => {
    switch (platform) {




      case 'LeetCode': return 'from-amber-400 via-orange-500 to-amber-600';
      case 'CodeChef': return 'from-red-400 via-red-500 to-red-600';
      case 'HackerRank': return 'from-green-400 via-green-500 to-green-600';
      default: return 'from-blue-400 via-indigo-500 to-blue-600';
    }
  };


  const platformBg = (platform) => {
    switch (platform) {




      case 'LeetCode': return isDarkMode 
        ? 'bg-gradient-to-br from-amber-900/10 via-orange-900/10 to-amber-800/10' 
        : 'bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100';
      case 'CodeChef': return isDarkMode 
        ? 'bg-gradient-to-br from-red-900/10 via-red-900/10 to-red-800/10' 
        : 'bg-gradient-to-br from-red-50 via-red-50 to-red-100';
      case 'HackerRank': return isDarkMode 
        ? 'bg-gradient-to-br from-green-900/10 via-green-900/10 to-green-800/10' 
        : 'bg-gradient-to-br from-green-50 via-green-50 to-green-100';
      default: return isDarkMode 
        ? 'bg-gradient-to-br from-blue-900/10 via-indigo-900/10 to-blue-800/10' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100';
    }
  };

  const AnimatedNumber = ({ value, duration = 2000 }) => {
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
      let startTime;
      let animationFrame;

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        setDisplayValue(Math.floor(progress * value));
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }, [value, duration]);

    return <span>{displayValue}</span>;
  };

  return (


    <section id="dsa" className="py-20 relative overflow-hidden scroll-animate">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-400/10 to-secondary-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary-400/10 to-primary-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Enhanced Header */}
        <motion.div


          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}


          className="text-center mb-20"
        >




          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-block p-4 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 mb-6"
          >
            <div className="text-4xl">🏆</div>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
           Problem-Solving Track
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            My journey through algorithmic challenges and coding competitions across various platforms, 
            constantly pushing the boundaries of problem-solving excellence.
          </motion.p>
        </motion.div>
        

        {/* Enhanced Stats Overview */}
        <motion.div

          variants={containerVariants}
          initial="hidden"

          whileInView="visible"
          viewport={{ once: true }}

          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          
          {/* Top Platform Card */}
          <motion.div 


            variants={itemVariants}
            whileHover={cardHoverVariants.hover}
            className="group relative bg-gradient-to-br from-secondary-500/10 via-secondary-400/5 to-secondary-600/10 
                       border border-secondary-500/20 rounded-2xl p-8 shadow-xl backdrop-blur-sm
                       hover:shadow-2xl hover:border-secondary-400/30 transition-all duration-300"
          >






            <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Top Platform</h3>
                <motion.div 
                  className="p-3 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </motion.div>
              </div>










              <div className="flex items-end mb-4">
                <span className="text-3xl font-bold bg-gradient-to-r from-secondary-400 to-secondary-600 bg-clip-text text-transparent">
                  LeetCode
                </span>
              </div>



              <div className="mt-4 flex flex-col gap-1">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Rating</span>
                  <span className="font-medium">{cpProfile.platforms[0].rating}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Ranking</span>
                  <span className="font-medium">{cpProfile.platforms[0].ranking}</span>
                </div>
              </div>




            </div>
          </motion.div>

          {/* Languages Card */}
          <motion.div 
            variants={itemVariants}
            whileHover={cardHoverVariants.hover}
            className="group relative bg-gradient-to-br from-primary-500/10 via-primary-400/5 to-primary-600/10 
                       border border-primary-500/20 rounded-2xl p-8 shadow-xl backdrop-blur-sm
                       hover:shadow-2xl hover:border-primary-400/30 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Languages Used</h3>
                <motion.div 
                  className="p-3 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </motion.div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {cpProfile.languages.map((lang, index) => {
                  const langTooltips = {
                    'C++': 'The language that makes you question your life choices',
                    'Python': 'Snake charming for programmers',
                    'JavaScript': 'The language that runs the internet and your patience'
                  };
                  
                  return (
                    <CustomTooltip
                      key={index}
                      content={langTooltips[lang] || 'Another weapon in my coding arsenal'}
                      isDarkMode={isDarkMode}
                    >
                      <motion.span 
                        className="px-4 py-2 text-lg rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 
                                   border border-primary-500/20 font-medium cursor-pointer"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {lang}
                      </motion.span>
                    </CustomTooltip>
                  );
                })}
              </div>
            </div>
          </motion.div>
          
        </motion.div>
        
        {/* Platform Tabs */}
        <div className="mb-8">
          <div className="flex overflow-x-auto space-x-2 pb-2 mb-4">
            {cpProfile.platforms.map((platform) => {
              const tooltips = {
                'LeetCode': 'Where algorithms go to get their PhD',
                'CodeChef': 'Cooking up solutions one bug at a time',
                'HackerRank': 'Ranking hackers since forever'
              };
              
              return (
                <CustomTooltip
                  key={platform.name}
                  content={tooltips[platform.name] || 'Another coding battlefield'}
                  isDarkMode={isDarkMode}
                >
                  <motion.button
                    onClick={() => setActivePlatform(platform.name)}
                    className={`filter-button whitespace-nowrap ${
                      activePlatform === platform.name ? 'active' : ''
                    } ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * cpProfile.platforms.indexOf(platform) }}
                  >
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      {platform.name}
                    </motion.span>
                  </motion.button>
                </CustomTooltip>
              );
            })}
          </div>
          
          {/* Platform Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePlatform}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className={`rounded-xl overflow-hidden shadow-lg ${platformBg(activePlatform)}`}
            >
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{platformData.name}</h3>
                    <div className="flex items-center">
                      <span className="text-gray-600 dark:text-gray-400 mr-2">@{platformData.username}</span>
                      <CustomTooltip
                        content="Stalk my coding journey legally"
                        isDarkMode={isDarkMode}
                      >
                        <a 
                          href={platformData.profileUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 inline-flex items-center"
                        >
                          <span className="text-sm">View Profile</span>
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </CustomTooltip>
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
                    {platformData.badges && platformData.badges.map((badge, index) => (
                      <CustomTooltip
                        key={index}
                        content="Achievement unlocked like a video game boss"
                        isDarkMode={isDarkMode}
                      >
                        <span 
                          className="px-3 py-1 text-xs rounded-full bg-white/50 dark:bg-gray-800/50 shadow-sm cursor-pointer hover:bg-white/70 dark:hover:bg-gray-800/70 transition-colors"
                        >
                          {badge}
                        </span>
                      </CustomTooltip>
                    ))}
                  </div>
                </div>
                
                {/* Platform Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {platformData.rating && (
                    <CustomTooltip
                      content="Numbers that make my parents proud"
                      isDarkMode={isDarkMode}
                    >
                      <div className="bg-white/60 dark:bg-gray-800/60 rounded-lg p-4 shadow-sm cursor-pointer hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors">
                        <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Rating</h4>
                        <p className="text-2xl font-bold">{platformData.rating}</p>
                      </div>
                    </CustomTooltip>
                  )}
                  
                  <CustomTooltip
                    content="My position in the coding food chain"
                    isDarkMode={isDarkMode}
                  >
                    <div className="bg-white/60 dark:bg-gray-800/60 rounded-lg p-4 shadow-sm cursor-pointer hover:bg-white/80 dark:hover:bg-gray-800/80 transition-colors">
                      <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Ranking</h4>
                      <p className="text-2xl font-bold">{platformData.ranking}</p>
                    </div>
                  </CustomTooltip>
                </div>
                
                {/* Tabs for platform details */}
                <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
                  <nav className="flex space-x-8">
                    <CustomTooltip
                      content="The boring but necessary details"
                      isDarkMode={isDarkMode}
                    >
                      <motion.button
                        onClick={() => setActiveTab('overview')}
                        className={`py-4 px-1 border-b-2 font-medium text-sm transition-all duration-300 ${
                          activeTab === 'overview'
                            ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                            : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                        }`}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <motion.span
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          Overview
                        </motion.span>
                      </motion.button>
                    </CustomTooltip>
                    
                    {platformData.certificates && (
                      <CustomTooltip
                        content="My collection of digital bragging rights"
                        isDarkMode={isDarkMode}
                      >
                        <button
                          onClick={() => setActiveTab('certificates')}
                          className={`py-4 px-1 border-b-2 font-medium text-sm ${
                            activeTab === 'certificates'
                              ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                              : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                          }`}
                        >
                          Certificates
                        </button>
                      </CustomTooltip>
                    )}
                  </nav>
                </div>
                
                {/* Tab content */}
                <AnimatePresence mode="wait">
                  {activeTab === 'overview' && (
                    <motion.div
                      key="overview"
                      variants={fadeIn}
                      initial="hidden"
                      animate="visible"
                    >
                      <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p>
                          My coding journey on {platformData.name} has helped me develop strong problem-solving skills and algorithmic thinking.
                          I've focused on mastering data structures and algorithms through consistent practice and participation in coding challenges.
                        </p>
                      </div>
                    </motion.div>
                  )}
                  
                  {activeTab === 'certificates' && platformData.certificates && (
                    <motion.div
                      key="certificates"
                      variants={fadeIn}
                      initial="hidden"
                      animate="visible"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {platformData.certificates.map((certificate, index) => (
                          <div 
                            key={index} 
                            className="bg-white/70 dark:bg-gray-800/70 rounded-lg p-5 shadow-sm flex items-center"
                          >
                            <div className="p-3 rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400 mr-4">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                              </svg>
                            </div>
                            <div>
                              <h5 className="font-medium">{certificate}</h5>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Verified by {platformData.name}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Topic Strengths section removed */}
      </div>
    </section>
  );
};

export default DSAShowcase;