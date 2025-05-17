import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SkillsRedesigned = ({ isDarkMode }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  
  // Skill categories
  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'languages', name: 'Languages' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'tools', name: 'Tools & DevOps' }
  ];
  
  // Skills data with detailed information
  const skills = [
    {
      name: 'JavaScript',
      icon: '🟨',
      category: 'languages',
      level: 'Advanced',
      description: 'Modern ES6+, async/await, functional programming',
      projects: 'Portfolio, Task Tracker',
      color: 'from-yellow-400 to-yellow-500',
      textColor: 'text-yellow-400',
      borderColor: 'border-yellow-500/30',
      bgColor: 'bg-yellow-500/10'
    },
    {
      name: 'Python',
      icon: '🐍',
      category: 'languages',
      level: 'Intermediate',
      description: 'Data analysis, automation, web scraping',
      projects: 'Data visualization tools, automation scripts',
      color: 'from-blue-400 to-blue-500',
      textColor: 'text-blue-400',
      borderColor: 'border-blue-500/30',
      bgColor: 'bg-blue-500/10'
    },
    {
      name: 'C++',
      icon: '⚙️',
      category: 'languages',
      level: 'Intermediate',
      description: 'Data structures, algorithms, problem-solving',
      projects: 'Competitive programming, DSA implementations',
      color: 'from-blue-500 to-blue-600',
      textColor: 'text-blue-500',
      borderColor: 'border-blue-600/30',
      bgColor: 'bg-blue-600/10'
    },
    {
      name: 'Java',
      icon: '☕',
      category: 'languages',
      level: 'Intermediate',
      description: 'OOP principles, collections, multithreading',
      projects: 'Academic projects, algorithm implementations',
      color: 'from-red-400 to-red-500',
      textColor: 'text-red-400',
      borderColor: 'border-red-500/30',
      bgColor: 'bg-red-500/10'
    },

    {
      name: 'React',
      icon: '⚛️',
      category: 'frontend',
      level: 'Advanced',
      description: 'Hooks, context API, custom hooks, React Router',
      projects: 'Portfolio, Task Tracker',
      color: 'from-primary-400 to-primary-500',
      textColor: 'text-primary-400',
      borderColor: 'border-primary-500/30',
      bgColor: 'bg-primary-500/10'
    },
    {
      name: 'Tailwind CSS',
      icon: '🎨',
      category: 'frontend',
      level: 'Advanced',
      description: 'Responsive design, custom configurations, animations',
      projects: 'Portfolio, Task Tracker',
      color: 'from-primary-400 to-primary-500',
      textColor: 'text-primary-400',
      borderColor: 'border-primary-500/30',
      bgColor: 'bg-primary-500/10'
    },
    {
      name: 'HTML/CSS',
      icon: '🌐',
      category: 'frontend',
      level: 'Advanced',
      description: 'Semantic HTML, CSS Grid, Flexbox, animations',
      projects: 'Multiple web projects',
      color: 'from-orange-400 to-orange-500',
      textColor: 'text-orange-400',
      borderColor: 'border-orange-500/30',
      bgColor: 'bg-orange-500/10'
    },
    {
      name: 'Framer Motion',
      icon: '✨',
      category: 'frontend',
      level: 'Intermediate',
      description: 'Animations, transitions, gestures',
      projects: 'Portfolio',
      color: 'from-secondary-400 to-secondary-500',
      textColor: 'text-secondary-400',
      borderColor: 'border-secondary-500/30',
      bgColor: 'bg-secondary-500/10'
    },
    {
      name: 'Node.js',
      icon: '🟢',
      category: 'backend',
      level: 'Intermediate',
      description: 'Express, RESTful APIs, middleware',
      projects: 'Task Tracker backend',
      color: 'from-green-400 to-green-500',
      textColor: 'text-green-400',
      borderColor: 'border-green-500/30',
      bgColor: 'bg-green-500/10'
    },
    {
      name: 'MongoDB',
      icon: '🍃',
      category: 'backend',
      level: 'Intermediate',
      description: 'Schema design, queries, aggregation',
      projects: 'Task Tracker',
      color: 'from-green-500 to-green-600',
      textColor: 'text-green-500',
      borderColor: 'border-green-600/30',
      bgColor: 'bg-green-600/10'
    },
    {
      name: 'Firebase',
      icon: '🔥',
      category: 'backend',
      level: 'Intermediate',
      description: 'Authentication, Firestore, Cloud Functions',
      projects: 'Chat applications, real-time dashboards',
      color: 'from-yellow-500 to-orange-500',
      textColor: 'text-yellow-500',
      borderColor: 'border-orange-500/30',
      bgColor: 'bg-orange-500/10'
    },

    {
      name: 'Git',
      icon: '📊',
      category: 'tools',
      level: 'Advanced',
      description: 'Version control, branching strategies, collaboration',
      projects: 'All projects',
      color: 'from-orange-400 to-orange-500',
      textColor: 'text-orange-400',
      borderColor: 'border-orange-500/30',
      bgColor: 'bg-orange-500/10'
    },
    {
      name: 'GitHub',
      icon: '🐙',
      category: 'tools',
      level: 'Advanced',
      description: 'Repositories, issues, pull requests, actions',
      projects: 'All projects',
      color: 'from-gray-400 to-gray-500',
      textColor: 'text-gray-400',
      borderColor: 'border-gray-500/30',
      bgColor: 'bg-gray-500/10'
    },
    {
      name: 'VS Code',
      icon: '📝',
      category: 'tools',
      level: 'Advanced',
      description: 'Extensions, customization, debugging',
      projects: 'All web projects',
      color: 'from-blue-400 to-blue-500',
      textColor: 'text-blue-400',
      borderColor: 'border-blue-500/30',
      bgColor: 'bg-blue-500/10'
    },

  ];
  
  // Filter skills based on active category
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  // Enhanced animation variants for smoother transitions
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  const skillCardVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: i => ({
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        mass: 0.8,
        delay: i * 0.04,
        duration: 0.5
      }
    })
  };
  
  // Optimized hover transitions with improved smoothness
  const optimizedTransition = {
    type: "spring", 
    stiffness: 400,
    damping: 17,
    mass: 0.5,
    duration: 0.3,
    velocity: 2
  };
  
  // Staggered animation for children elements
  const staggerTransition = {
    type: "spring",
    stiffness: 260,
    damping: 20,
    mass: 0.5
  };
  
  const detailsVariants = {
    hidden: { opacity: 0, height: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      height: 'auto',
      scale: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 24,
        mass: 0.6
      }
    }
  };
  
  // Skill level to visual representation
  const getLevelVisual = (level) => {
    switch(level) {
      case 'Advanced':
        return (
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-primary-500"></div>
            <div className="w-3 h-3 rounded-full bg-primary-500"></div>
            <div className="w-3 h-3 rounded-full bg-primary-500"></div>
          </div>
        );
      case 'Intermediate':
        return (
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-primary-500"></div>
            <div className="w-3 h-3 rounded-full bg-primary-500"></div>
            <div className="w-3 h-3 rounded-full bg-dark-700"></div>
          </div>
        );
      case 'Beginner':
        return (
          <div className="flex space-x-1">
            <div className="w-3 h-3 rounded-full bg-primary-500"></div>
            <div className="w-3 h-3 rounded-full bg-dark-700"></div>
            <div className="w-3 h-3 rounded-full bg-dark-700"></div>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5,
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent"
        >
          Skills & Expertise
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.9, width: "0%" }}
          animate={{ opacity: 1, scale: 1, width: "24px" }}
          transition={{ 
            duration: 0.5, 
            delay: 0.2,
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
          className="h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8 rounded-full"
        ></motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 0.3,
            type: "spring",
            stiffness: 100,
            damping: 20
          }}
          className={`text-xl ${isDarkMode ? 'text-dark-300' : 'text-gray-700'} max-w-3xl mx-auto`}
        >
          A showcase of my technical skills and areas of expertise
        </motion.p>
      </div>
      
      {/* Skill Categories */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 0.4,
          type: "spring",
          stiffness: 100,
          damping: 20
        }}
      >
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg shadow-primary-500/20'
                : isDarkMode 
                  ? 'bg-dark-800/50 text-dark-300 hover:bg-dark-700/50' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.4 + (index * 0.05),
              type: "spring",
              stiffness: 200,
              damping: 20
            }}
            whileHover={{ 
              scale: 1.05,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
              }
            }}
            whileTap={{ 
              scale: 0.95,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 15
              }
            }}
          >
            {category.name}
          </motion.button>
        ))}
      </motion.div>
      
      {/* Skills Grid */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={activeCategory} // Re-render animation when category changes
      >
        {filteredSkills.map(skill => (
          <motion.div
            key={skill.name}
            className="relative"
            variants={skillCardVariants}
            onHoverStart={() => setHoveredSkill(skill.name)}
            onHoverEnd={() => setHoveredSkill(null)}
            whileHover={{
              boxShadow: isDarkMode 
                ? '0 0 25px 5px rgba(14, 165, 233, 0.3), 0 0 10px 1px rgba(139, 92, 246, 0.3)' 
                : '0 0 25px 5px rgba(2, 132, 199, 0.2), 0 0 10px 1px rgba(124, 58, 237, 0.2)',
              scale: 1.03,
              y: -3,
              transition: {
                type: "spring",
                stiffness: 500,
                damping: 15,
                mass: 0.8,
                velocity: 2
              }
            }}
            whileTap={{ 
              scale: 0.98, 
              transition: { 
                type: "spring", 
                stiffness: 400, 
                damping: 17 
              } 
            }}
          >
            <motion.div 
              className={`glass-card p-6 rounded-xl overflow-hidden border ${skill.borderColor} h-full flex flex-col ${isDarkMode ? '' : 'bg-white/80 shadow-md'}`}
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full ${skill.bgColor} flex items-center justify-center text-2xl mr-3`}>
                    {skill.icon}
                  </div>
                  <h3 className={`text-xl font-bold ${skill.textColor}`}>{skill.name}</h3>
                </div>
                <div className="flex items-center">
                  {getLevelVisual(skill.level)}
                </div>
              </div>
              
              {/* Skill Description */}
              <p className={`${isDarkMode ? 'text-dark-300' : 'text-gray-600'} mb-4 text-sm`}>{skill.description}</p>
              
              {/* Projects */}
              <div className="mt-auto">
                <div className={`flex items-center text-xs ${isDarkMode ? 'text-dark-400' : 'text-gray-500'} mb-1`}>
                  <span className="mr-2">🔗</span>
                  <span>Projects:</span>
                </div>
                <p className={`${isDarkMode ? 'text-dark-200' : 'text-gray-700'} text-sm`}>{skill.projects}</p>
              </div>
              
              {/* Expanded Details */}
              <AnimatePresence>
                {hoveredSkill === skill.name && (
                  <motion.div
                    className={`absolute inset-0 ${isDarkMode ? 'bg-dark-900/95' : 'bg-white/95'} backdrop-blur-sm p-6 flex flex-col`}
                    initial={{ opacity: 0, scale: 0.95, backdropFilter: "blur(0px)" }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      backdropFilter: "blur(5px)",
                      transition: {
                        opacity: { duration: 0.15, ease: "easeOut" },
                        scale: { 
                          type: "spring", 
                          stiffness: 500, 
                          damping: 25, 
                          mass: 0.5 
                        },
                        backdropFilter: { duration: 0.2, ease: "easeOut" }
                      }
                    }}
                    exit={{ 
                      opacity: 0,
                      scale: 0.95,
                      backdropFilter: "blur(0px)",
                      transition: {
                        opacity: { duration: 0.1, ease: "easeIn" },
                        scale: { duration: 0.15, ease: "easeIn" },
                        backdropFilter: { duration: 0.15, ease: "easeIn" }
                      }
                    }}
                  >
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 rounded-full ${skill.bgColor} flex items-center justify-center text-2xl mr-3`}>
                        {skill.icon}
                      </div>
                      <h3 className={`text-xl font-bold ${skill.textColor}`}>{skill.name}</h3>
                    </div>
                    
                    <div className="mb-4">
                      <div className={`flex items-center text-xs ${isDarkMode ? 'text-dark-400' : 'text-gray-500'} mb-1`}>
                        <span className="mr-2">⭐</span>
                        <span>Level:</span>
                      </div>
                      <p className={`${isDarkMode ? 'text-dark-200' : 'text-gray-700'}`}>{skill.level}</p>
                    </div>
                    
                    <div className="mb-4">
                      <div className={`flex items-center text-xs ${isDarkMode ? 'text-dark-400' : 'text-gray-500'} mb-1`}>
                        <span className="mr-2">📝</span>
                        <span>Description:</span>
                      </div>
                      <p className={`${isDarkMode ? 'text-dark-200' : 'text-gray-700'}`}>{skill.description}</p>
                    </div>
                    
                    <div className="mt-auto">
                      <div className={`flex items-center text-xs ${isDarkMode ? 'text-dark-400' : 'text-gray-500'} mb-1`}>
                        <span className="mr-2">🔗</span>
                        <span>Projects:</span>
                      </div>
                      <p className={`${isDarkMode ? 'text-dark-200' : 'text-gray-700'}`}>{skill.projects}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Skill Clusters */}
      <motion.div 
        className="mt-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 0.5,
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
      >
        <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-dark-50' : 'text-gray-800'} mb-8 text-center`}>Skill Clusters</h2>
        
        <div className={`glass-card p-8 rounded-xl overflow-hidden relative ${isDarkMode ? 'bg-dark-800/30' : 'bg-white/70 shadow-lg'}`}>
          {/* Decorative elements */}
          <div className="absolute -left-20 -top-20 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-secondary-500/10 rounded-full blur-3xl"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            
            {/* Web Development */}
            <motion.div 
              className="p-6 rounded-xl bg-dark-800/30 border border-secondary-500/20 relative overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.2)',
                transition: optimizedTransition
              }}
            >
              <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-secondary-500/10 rounded-full blur-3xl"></div>
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary-500/20 flex items-center justify-center text-2xl mr-4">
                  🌐
                </div>
                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-dark-50' : 'text-gray-800'}`}>Web Development</h3>
              </div>
              
              <p className={`${isDarkMode ? 'text-dark-300' : 'text-gray-600'} mb-6`}>
                Creating responsive, interactive web applications with modern JavaScript frameworks
              </p>
              
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter(skill => skill.category === 'frontend')
                  .slice(0, 6)
                  .map(skill => (
                    <motion.span 
                      key={skill.name}
                      className={`px-3 py-1 text-sm rounded-lg ${skill.bgColor} ${skill.textColor} border ${skill.borderColor}`}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -2,
                        transition: optimizedTransition
                      }}
                    >
                      {skill.name}
                    </motion.span>
                  ))
                }
              </div>
            </motion.div>
            
            {/* Programming Languages */}
            <motion.div 
              className={`p-6 rounded-xl ${isDarkMode ? 'bg-dark-800/30' : 'bg-white/80 shadow-md'} border border-primary-500/20 relative overflow-hidden`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: '0 0 20px rgba(14, 165, 233, 0.2)',
                transition: optimizedTransition
              }}
            >
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl"></div>
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center text-2xl mr-4">
                  💻
                </div>
                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-dark-50' : 'text-gray-800'}`}>Programming Languages</h3>
              </div>
              
              <p className={`${isDarkMode ? 'text-dark-300' : 'text-gray-600'} mb-6`}>
                Proficient in multiple programming languages for various application domains
              </p>
              
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter(skill => ['C++', 'Python', 'Java', 'JavaScript'].includes(skill.name))
                  .map(skill => (
                    <motion.span 
                      key={skill.name}
                      className={`px-3 py-1 text-sm rounded-lg ${skill.bgColor} ${skill.textColor} border ${skill.borderColor}`}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -2,
                        transition: optimizedTransition
                      }}
                    >
                      {skill.name}
                    </motion.span>
                  ))
                }
              </div>
            </motion.div>
            
            {/* Tools & DevOps */}
            <motion.div 
              className="p-6 rounded-xl bg-dark-800/30 border border-secondary-500/20 relative overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: '0 0 20px rgba(139, 92, 246, 0.2)',
                transition: optimizedTransition
              }}
            >
              <div className="absolute -left-20 -top-20 w-40 h-40 bg-secondary-500/10 rounded-full blur-3xl"></div>
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary-500/20 flex items-center justify-center text-2xl mr-4">
                  🛠️
                </div>
                <h3 className={`text-xl font-bold ${isDarkMode ? 'text-dark-50' : 'text-gray-800'}`}>Tools & DevOps</h3>
              </div>
              
              <p className={`${isDarkMode ? 'text-dark-300' : 'text-gray-600'} mb-6`}>
                Experienced with development tools, version control, and deployment workflows
              </p>
              
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter(skill => skill.category === 'tools')
                  .map(skill => (
                    <motion.span 
                      key={skill.name}
                      className={`px-3 py-1 text-sm rounded-lg ${skill.bgColor} ${skill.textColor} border ${skill.borderColor}`}
                      whileHover={{ 
                        scale: 1.1, 
                        y: -2,
                        transition: optimizedTransition
                      }}
                    >
                      {skill.name}
                    </motion.span>
                  ))
                }
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsRedesigned;