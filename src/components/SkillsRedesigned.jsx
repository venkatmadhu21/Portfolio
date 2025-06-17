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
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const skillCardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };
  
  const glowVariants = {
    hover: {
      boxShadow: isDarkMode 
        ? '0 0 30px 8px rgba(14, 165, 233, 0.4), 0 0 15px 2px rgba(139, 92, 246, 0.4)' 
        : '0 0 30px 8px rgba(2, 132, 199, 0.3), 0 0 15px 2px rgba(124, 58, 237, 0.3)',
      scale: 1.02,
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        type: "tween", // Using tween instead of default spring for smoother animation
        layoutDependency: false // Prevents layout recalculation during animation
      }
    }
  };
  
  const detailsVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3
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
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent"
        >
          Skills & Expertise
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
          className="text-xl text-dark-300 max-w-3xl mx-auto"
        >
          A showcase of my technical skills and areas of expertise
        </motion.p>
      </div>
      
      {/* Skill Categories */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {categories.map(category => (
          <motion.button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg shadow-primary-500/20'
                : 'bg-dark-800/50 text-dark-300 hover:bg-dark-700/50'
            }`}
            whileHover={{ 
              scale: 1.05,
              transition: { 
                type: "tween", 
                duration: 0.2,
                ease: "easeOut"
              }
            }}
            whileTap={{ scale: 0.95 }}
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
              scale: 1.05,
              y: -5,
              transition: {
                duration: 0.3,
                ease: "easeOut",
                type: "tween",
                layoutDependency: false
              }
            }}
        
          >
            <motion.div 
              className={`glass-card p-6 rounded-xl overflow-hidden border ${skill.borderColor} h-full flex flex-col`}
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full ${skill.bgColor} flex items-center justify-center text-2xl mr-3`}>
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-bold text-dark-50">{skill.name}</h3>
                </div>
                <div className="flex items-center">
                  {getLevelVisual(skill.level)}
                </div>
              </div>
              
              {/* Skill Description */}
              <p className="text-dark-300 text-sm mb-4 flex-grow">
                {skill.description}
              </p>
              
              {/* Skill Footer */}
              <div className="mt-auto">
                <div className="flex justify-between items-center">
                  <span className={`text-xs px-2 py-1 rounded-full ${skill.bgColor} ${skill.textColor}`}>
                    {skill.level}
                  </span>
                  <span className="text-xs text-dark-400">
                    {skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}
                  </span>
                </div>
                
                {/* Projects Used In */}
                <AnimatePresence>
                  {hoveredSkill === skill.name && (
                    <motion.div
                      variants={detailsVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="mt-4 pt-4 border-t border-dark-700/30"
                    >
                      <h4 className="text-xs font-medium text-dark-200 mb-2">PROJECTS</h4>
                      <p className="text-sm text-primary-400">{skill.projects}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Skill Clusters */}
      <motion.div 
        className="mt-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-dark-50 mb-8 text-center">Skill Clusters</h2>
        
        <div className="glass-card p-8 rounded-xl overflow-hidden relative">
          {/* Decorative elements */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-secondary-500/5 rounded-full blur-3xl"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mobile Development Cluster */}
            <motion.div 
              className="p-6 rounded-xl bg-dark-800/30 border border-primary-500/20 relative overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(14, 165, 233, 0.2)' }}
            >
              <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl"></div>
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center text-2xl mr-4">
                  📱
                </div>
                <h3 className="text-xl font-bold text-dark-50">Mobile Development</h3>
              </div>
              
              <p className="text-dark-300 mb-6">
                Building native Android applications with modern architecture patterns and best practices.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter(skill => skill.category === 'mobile' || skill.name === 'Kotlin')
                  .map(skill => (
                    <motion.span 
                      key={skill.name}
                      className={`px-3 py-1 text-sm rounded-lg ${skill.bgColor} ${skill.textColor} border ${skill.borderColor}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {skill.name}
                    </motion.span>
                  ))
                }
              </div>
            </motion.div>
            
            {/* Web Development Cluster */}
            <motion.div 
              className="p-6 rounded-xl bg-dark-800/30 border border-secondary-500/20 relative overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 }}
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(139, 92, 246, 0.2)' }}
            >
              <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-secondary-500/10 rounded-full blur-3xl"></div>
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary-500/20 flex items-center justify-center text-2xl mr-4">
                  🌐
                </div>
                <h3 className="text-xl font-bold text-dark-50">Web Development</h3>
              </div>
              
              <p className="text-dark-300 mb-6">
                Creating responsive, interactive web applications with modern JavaScript frameworks.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter(skill => skill.category === 'frontend' || skill.category === 'backend')
                  .slice(0, 6)
                  .map(skill => (
                    <motion.span 
                      key={skill.name}
                      className={`px-3 py-1 text-sm rounded-lg ${skill.bgColor} ${skill.textColor} border ${skill.borderColor}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {skill.name}
                    </motion.span>
                  ))
                }
              </div>
            </motion.div>
            
            {/* Programming Fundamentals Cluster */}
            <motion.div 
              className="p-6 rounded-xl bg-dark-800/30 border border-primary-500/20 relative overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(14, 165, 233, 0.2)' }}
            >
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl"></div>
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center text-2xl mr-4">
                  ⚙️
                </div>
                <h3 className="text-xl font-bold text-dark-50">Programming Fundamentals</h3>
              </div>
              
              <p className="text-dark-300 mb-6">
                Strong foundation in algorithms, data structures, and problem-solving techniques.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter(skill => ['C++', 'Python', 'Java', 'JavaScript'].includes(skill.name))
                  .map(skill => (
                    <motion.span 
                      key={skill.name}
                      className={`px-3 py-1 text-sm rounded-lg ${skill.bgColor} ${skill.textColor} border ${skill.borderColor}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {skill.name}
                    </motion.span>
                  ))
                }
              </div>
            </motion.div>
            
            {/* Tools & DevOps Cluster */}
            <motion.div 
              className="p-6 rounded-xl bg-dark-800/30 border border-secondary-500/20 relative overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(139, 92, 246, 0.2)' }}
            >
              <div className="absolute -left-20 -top-20 w-40 h-40 bg-secondary-500/10 rounded-full blur-3xl"></div>
              
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-xl bg-secondary-500/20 flex items-center justify-center text-2xl mr-4">
                  🛠️
                </div>
                <h3 className="text-xl font-bold text-dark-50">Tools & DevOps</h3>
              </div>
              
              <p className="text-dark-300 mb-6">
                Proficient with development tools, version control, and deployment workflows.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {skills
                  .filter(skill => skill.category === 'tools')
                  .map(skill => (
                    <motion.span 
                      key={skill.name}
                      className={`px-3 py-1 text-sm rounded-lg ${skill.bgColor} ${skill.textColor} border ${skill.borderColor}`}
                      whileHover={{ scale: 1.1, y: -2 }}
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
      
      {/* Learning Journey */}
      <motion.div 
        className="mt-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
      >
        <h2 className="text-2xl font-bold text-dark-50 mb-8 text-center">Learning Journey</h2>
        
        <div className="glass-card p-8 rounded-xl overflow-hidden">
          <div className="relative">
            {/* Timeline */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-secondary-500 rounded-full"></div>
            
            <div className="space-y-12 pl-8">
              {/* Current Focus */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
              >
                <div className="absolute -left-[6px] w-3 h-3 rounded-full bg-primary-500 border-4 border-dark-800"></div>
                <h3 className="text-xl font-bold text-dark-50 mb-2">Current Focus</h3>
                <p className="text-dark-300 mb-4">
                  Deepening my expertise in Android development with Jetpack Compose and exploring backend development with Node.js and MongoDB.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm rounded-lg bg-primary-500/10 text-primary-400 border border-primary-500/30">
                    Jetpack Compose
                  </span>
                  <span className="px-3 py-1 text-sm rounded-lg bg-green-500/10 text-green-400 border border-green-500/30">
                    Node.js
                  </span>
                  <span className="px-3 py-1 text-sm rounded-lg bg-green-600/10 text-green-500 border border-green-600/30">
                    MongoDB
                  </span>
                </div>
              </motion.div>
              
              {/* Learning Next */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
              >
                <div className="absolute -left-[6px] w-3 h-3 rounded-full bg-secondary-500 border-4 border-dark-800"></div>
                <h3 className="text-xl font-bold text-dark-50 mb-2">Learning Next</h3>
                <p className="text-dark-300 mb-4">
                  Planning to explore cloud services, machine learning integration, and advanced animation techniques.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/30">
                    AWS
                  </span>
                  <span className="px-3 py-1 text-sm rounded-lg bg-yellow-500/10 text-yellow-400 border border-yellow-500/30">
                    TensorFlow
                  </span>
                  <span className="px-3 py-1 text-sm rounded-lg bg-secondary-500/10 text-secondary-400 border border-secondary-500/30">
                    Three.js
                  </span>
                </div>
              </motion.div>
              
              {/* Future Aspirations */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6 }}
              >
                <div className="absolute -left-[6px] w-3 h-3 rounded-full bg-primary-400 border-4 border-dark-800"></div>
                <h3 className="text-xl font-bold text-dark-50 mb-2">Future Aspirations</h3>
                <p className="text-dark-300 mb-4">
                  Aiming to become a full-stack developer with expertise in both mobile and web platforms, with a focus on creating seamless user experiences.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-sm rounded-lg bg-primary-500/10 text-primary-400 border border-primary-500/30">
                    Full-Stack Development
                  </span>
                  <span className="px-3 py-1 text-sm rounded-lg bg-secondary-500/10 text-secondary-400 border border-secondary-500/30">
                    UI/UX Design
                  </span>
                  <span className="px-3 py-1 text-sm rounded-lg bg-green-500/10 text-green-400 border border-green-500/30">
                    System Architecture
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsRedesigned;