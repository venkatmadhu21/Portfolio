import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Project Modal Component
const ProjectModal = ({ project, isDarkMode, onClose }) => {
  if (!project) return null;
  
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className={`relative w-full max-w-4xl rounded-xl overflow-hidden ${isDarkMode ? 'bg-dark-900' : 'bg-white'} shadow-2xl`}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="md:flex h-full">
          <div className="relative h-64 md:h-auto md:w-1/3">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 ${
              isDarkMode ? 'bg-gradient-to-t from-dark-900 via-transparent to-transparent' : 'bg-gradient-to-t from-slate-900/70 via-transparent to-transparent'
            }`}></div>
            
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div className="p-6 md:p-8 md:w-2/3">
            <div className="mb-2">
              <span className={`text-sm ${isDarkMode ? 'text-primary-400' : 'text-primary-500'} font-mono`}>
                Featured Project
              </span>
            </div>
            
            <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
              {project.title}
            </h2>
            
            <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-700'} mb-6`}>
              {project.description}
            </p>
            
            <div className="mb-6">
              <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                Key Features & Achievements
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <svg 
                      className={`w-5 h-5 ${isDarkMode ? 'text-primary-400' : 'text-primary-500'} mr-2 mt-1 flex-shrink-0`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>
                      {highlight}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <motion.span 
                  key={index} 
                  className={`px-3 py-1 text-xs rounded-full ${
                    isDarkMode 
                      ? 'bg-dark-800 text-primary-400 border border-dark-700' 
                      : 'bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-500 border border-primary-200/30'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.05 * index }}
                  whileHover={{ scale: 1.1 }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>
            
            <div className="flex gap-4">
              <motion.a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 py-3 px-4 rounded-lg ${
                  isDarkMode 
                    ? 'bg-dark-800 hover:bg-dark-700 text-white' 
                    : 'bg-slate-800 hover:bg-slate-700 text-white'
                } text-center transition flex items-center justify-center shadow-lg`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View Code
              </motion.a>
              <motion.a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex-1 py-3 px-4 rounded-lg ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white' 
                    : 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                } text-center transition flex items-center justify-center shadow-lg`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                Live Demo
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Sample project data - replace with your actual projects
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with React, Node.js, and MongoDB. Features include user authentication, product filtering, cart functionality, and payment processing.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    image: "https://placehold.co/600x400/3b82f6/ffffff?text=E-Commerce+Project",
    github: "#",
    demo: "#",
    highlights: [
      "Implemented JWT authentication and authorization",
      "Built responsive UI with Tailwind CSS",
      "Optimized database queries for 40% faster load times",
      "Integrated Stripe payment gateway"
    ]
  },
  {
    id: 2,
    title: "Real-time Chat Application",
    description: "A real-time messaging platform using Socket.io and React. Supports private messaging, group chats, and file sharing.",
    tags: ["React", "Socket.io", "Express", "MongoDB", "WebRTC"],
    image: "https://placehold.co/600x400/4f46e5/ffffff?text=Chat+Application",
    github: "#",
    demo: "#",
    highlights: [
      "Implemented WebRTC for video calling features",
      "Built custom hooks for socket connection management",
      "Created efficient message caching system",
      "Designed responsive UI for all device sizes"
    ]
  },
  {
    id: 3,
    title: "Algorithm Visualizer",
    description: "An interactive tool for visualizing various sorting and pathfinding algorithms. Helps users understand algorithm complexity and behavior.",
    tags: ["React", "JavaScript", "Data Structures", "Algorithms"],
    image: "https://placehold.co/600x400/10b981/ffffff?text=Algorithm+Visualizer",
    github: "#",
    demo: "#",
    highlights: [
      "Visualized 8 sorting algorithms with step-by-step animation",
      "Implemented A*, Dijkstra's, and BFS pathfinding algorithms",
      "Created interactive controls for speed and array size",
      "Added time and space complexity analysis"
    ]
  },
  {
    id: 4,
    title: "AI Content Generator",
    description: "An AI-powered content generation tool using OpenAI API and Next.js. Generates blog posts, marketing copy, and social media content.",
    tags: ["Next.js", "OpenAI API", "TailwindCSS", "TypeScript"],
    image: "https://placehold.co/600x400/8b5cf6/ffffff?text=AI+Generator",
    github: "#",
    demo: "#",
    highlights: [
      "Integrated OpenAI GPT API for high-quality content generation",
      "Implemented user authentication and content history",
      "Built custom templates for different content types",
      "Optimized API usage to reduce costs"
    ]
  },
  {
    id: 5,
    title: "Portfolio Dashboard",
    description: "A professional portfolio dashboard built with React and Tailwind CSS. Features a clean, modern design with dark mode support.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    image: "https://placehold.co/600x400/0ea5e9/ffffff?text=Portfolio",
    github: "#",
    demo: "#",
    highlights: [
      "Designed and implemented a responsive layout from scratch",
      "Added smooth animations with Framer Motion",
      "Implemented dark/light mode with theme persistence",
      "Created a command palette for quick navigation"
    ]
  },
  {
    id: 6,
    title: "Task Management System",
    description: "A full-featured task management application with drag-and-drop functionality, user assignments, and progress tracking.",
    tags: ["React", "Redux", "Firebase", "Material UI"],
    image: "https://placehold.co/600x400/f59e0b/ffffff?text=Task+Manager",
    github: "#",
    demo: "#",
    highlights: [
      "Implemented drag-and-drop functionality for task management",
      "Created real-time updates using Firebase",
      "Built comprehensive dashboard with task analytics",
      "Added email notifications for task assignments and deadlines"
    ]
  }
];

const Projects = ({ isDarkMode }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  
  // Get unique tags for filter
  const allTags = [...new Set(projectsData.flatMap(project => project.tags))];
  
  // Filter projects based on selected tag
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(filter));
  
  // Enhanced animation variants for smoother transitions
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
        ease: [0.25, 0.1, 0.25, 1] // Cubic bezier for smoother easing
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring", 
        stiffness: 100,
        damping: 12,
        mass: 0.5
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };
  
  // Filter button animation
  const filterButton = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
    active: { 
      scale: 1.05,
      boxShadow: "0 10px 20px -10px rgba(100, 255, 218, 0.5)"
    }
  };
  
  return (
    <div className="max-w-7xl mx-auto">
      <motion.div 
        className="mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className={`text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Projects
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8 rounded-full"
        ></motion.div>
        <motion.p 
          className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          A showcase of my recent work, personal projects, and contributions.
        </motion.p>
      </motion.div>
      
      {/* Filter Tabs */}
      <motion.div 
        className="mb-12 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="overflow-x-auto max-w-full">
          <div className="flex space-x-3 pb-2 px-4">
            <motion.button
              onClick={() => setFilter('all')}
              variants={filterButton}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              animate={filter === 'all' ? 'active' : 'initial'}
              className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-300 ${
                filter === 'all'
                  ? isDarkMode 
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/20' 
                    : 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/20'
                  : isDarkMode
                    ? 'bg-dark-800/80 text-slate-300 hover:bg-dark-700 border border-dark-700'
                    : 'bg-white text-slate-700 hover:bg-gray-50 border border-gray-200 shadow-sm'
              }`}
            >
              All Projects
            </motion.button>
            
            {allTags.map(tag => (
              <motion.button
                key={tag}
                onClick={() => setFilter(tag)}
                variants={filterButton}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                animate={filter === tag ? 'active' : 'initial'}
                className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-all duration-300 ${
                  filter === tag
                    ? isDarkMode 
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/20' 
                      : 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg shadow-primary-500/20'
                    : isDarkMode
                      ? 'bg-dark-800/80 text-slate-300 hover:bg-dark-700 border border-dark-700'
                      : 'bg-white text-slate-700 hover:bg-gray-50 border border-gray-200 shadow-sm'
                }`}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* Featured Project */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.4,
          ease: "easeOut"
        }}
        className={`mb-12 rounded-lg overflow-hidden will-change-transform cursor-pointer ${
          isDarkMode ? 'bg-[#112240]' : 'bg-white shadow-lg'
        }`}
        onClick={() => setSelectedProject(selectedProject?.id === projectsData[0].id ? null : projectsData[0])}
      >
        {selectedProject?.id === projectsData[0].id ? (
          // Expanded view
          <div className="md:flex">
            <div className="relative h-64 md:h-auto md:w-1/3">
              <img 
                src={projectsData[0].image} 
                alt={projectsData[0].title} 
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 ${
                isDarkMode ? 'bg-[#0a192f]/20' : 'bg-slate-900/10'
              }`}></div>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(null);
                }}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div className="p-6 md:p-8 md:w-2/3">
              <div className="mb-2">
                <span className={`text-sm ${isDarkMode ? 'text-[#64ffda]' : 'text-emerald-600'} font-mono`}>
                  Featured Project
                </span>
              </div>
              
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                {projectsData[0].title}
              </h2>
              
              <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-700'} mb-6`}>
                {projectsData[0].description}
              </p>
              
              <div className="mb-6">
                <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                  Key Features & Achievements
                </h4>
                <ul className="space-y-2">
                  {projectsData[0].highlights.map((highlight, index) => (
                    <li 
                      key={index}
                      className="flex items-start"
                    >
                      <svg 
                        className={`w-5 h-5 ${isDarkMode ? 'text-[#64ffda]' : 'text-emerald-500'} mr-2 mt-1 flex-shrink-0`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {projectsData[0].tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className={`px-2 py-1 text-xs rounded ${
                      isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-800'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a 
                  href={projectsData[0].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`flex-1 py-3 ${
                    isDarkMode 
                      ? 'bg-slate-800 hover:bg-slate-700' 
                      : 'bg-slate-800 hover:bg-slate-900'
                  } text-white text-center rounded transition flex items-center justify-center`}
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  View Code
                </a>
                <a 
                  href={projectsData[0].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`flex-1 py-3 ${
                    isDarkMode 
                      ? 'bg-[#64ffda] text-[#0a192f]' 
                      : 'bg-emerald-600 text-white'
                  } text-center rounded transition flex items-center justify-center`}
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ) : (
          // Compact view
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="relative h-64 md:h-full overflow-hidden">
                <img 
                  src={projectsData[0].image} 
                  alt={projectsData[0].title} 
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 ${
                  isDarkMode ? 'bg-[#0a192f]/20' : 'bg-slate-900/10'
                }`}></div>
              </div>
            </div>
            <div className="md:w-1/2 p-6 md:p-8">
              <div className="mb-2">
                <span className={`text-sm ${isDarkMode ? 'text-[#64ffda]' : 'text-emerald-600'} font-mono`}>
                  Featured Project
                </span>
              </div>
              <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                {projectsData[0].title}
              </h2>
              <div className={`mb-6 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                {projectsData[0].description}
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {projectsData[0].tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className={`px-2 py-1 text-xs rounded ${
                      isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-800'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href={projectsData[0].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`p-2 rounded-full ${
                    isDarkMode ? 'text-slate-400 hover:text-[#64ffda]' : 'text-slate-700 hover:text-emerald-600'
                  } transition-colors`}
                >
                  <span className="sr-only">GitHub</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href={projectsData[0].demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`p-2 rounded-full ${
                    isDarkMode ? 'text-slate-400 hover:text-[#64ffda]' : 'text-slate-700 hover:text-emerald-600'
                  } transition-colors`}
                >
                  <span className="sr-only">External Link</span>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </a>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(projectsData[0]);
                  }}
                  className={`text-sm px-3 py-1 rounded ${
                    isDarkMode
                      ? 'bg-[#64ffda]/10 text-[#64ffda] hover:bg-[#64ffda]/20'
                      : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'
                  } transition-colors`}
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        )}
      </motion.div>
      
      {/* Project Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {visibleProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
            whileHover="hover"
            className={`rounded-xl overflow-hidden will-change-transform ${
              isDarkMode 
                ? 'bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700/50 hover:shadow-xl hover:shadow-primary-500/10' 
                : 'bg-white hover:shadow-xl hover:shadow-primary-500/10 border border-gray-100'
            } transition-all duration-500`}
          >
            <div className="relative overflow-hidden h-52 group">
              <motion.img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              />
              <div className={`absolute inset-0 ${
                isDarkMode ? 'bg-gradient-to-t from-dark-900 via-transparent to-transparent' : 'bg-gradient-to-t from-slate-900/70 via-transparent to-transparent'
              }`}></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                  isDarkMode 
                    ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30' 
                    : 'bg-primary-500/20 text-primary-600 border border-primary-500/30'
                }`}>
                  Featured
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-800'} group-hover:text-primary-500 transition-colors duration-300`}>
                {project.title}
              </h3>
              <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-700'} mb-4 line-clamp-3`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, index) => (
                  <motion.span 
                    key={index} 
                    className={`px-3 py-1 text-xs rounded-full ${
                      isDarkMode 
                        ? 'bg-dark-800 text-primary-400 border border-dark-700' 
                        : 'bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-500 border border-primary-200/30'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <motion.a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full ${
                      isDarkMode 
                        ? 'bg-dark-800 text-primary-400 hover:bg-dark-700' 
                        : 'bg-gray-100 text-primary-500 hover:bg-gray-200'
                    } transition-all duration-300`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="sr-only">GitHub</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </motion.a>
                  <motion.a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full ${
                      isDarkMode 
                        ? 'bg-dark-800 text-secondary-400 hover:bg-dark-700' 
                        : 'bg-gray-100 text-secondary-500 hover:bg-gray-200'
                    } transition-all duration-300`}
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="sr-only">External Link</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </motion.a>
                </div>
                <motion.button
                  onClick={() => setSelectedProject(project)}
                  className={`text-sm px-4 py-2 rounded-full ${
                    isDarkMode
                      ? 'bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-400 border border-primary-500/30'
                      : 'bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-500 border border-primary-200/50'
                  } transition-all duration-300 hover:shadow-md`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Details
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* More Projects Link */}
      <div className="mt-12 text-center">
        <a
          href="https://github.com/venkatmadhu"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center px-4 py-2 rounded border ${
            isDarkMode
              ? 'border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10'
              : 'border-emerald-600 text-emerald-600 hover:bg-emerald-50'
          } transition-colors`}
        >
          <span>View More on GitHub</span>
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
      
      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className={`relative w-full max-w-4xl rounded-xl overflow-hidden ${isDarkMode ? 'bg-dark-900' : 'bg-white'} shadow-2xl`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
          >
            <div className="md:flex h-full">
                <div className="relative h-64 md:h-auto md:w-1/3">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 ${
                    isDarkMode ? 'bg-gradient-to-t from-dark-900 via-transparent to-transparent' : 'bg-gradient-to-t from-slate-900/70 via-transparent to-transparent'
                  }`}></div>
                  
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
                
                <div className="p-6 md:p-8 md:w-2/3">
                  <div className="mb-2">
                    <span className={`text-sm ${isDarkMode ? 'text-primary-400' : 'text-primary-500'} font-mono`}>
                      Featured Project
                    </span>
                  </div>
                  
                  <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                    {selectedProject.title}
                  </h2>
                  
                  <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-700'} mb-6`}>
                    {selectedProject.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                      Key Features & Achievements
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.highlights.map((highlight, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                        >
                          <svg 
                            className={`w-5 h-5 ${isDarkMode ? 'text-primary-400' : 'text-primary-500'} mr-2 mt-1 flex-shrink-0`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>
                            {highlight}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, index) => (
                      <motion.span 
                        key={index} 
                        className={`px-3 py-1 text-xs rounded-full ${
                          isDarkMode 
                            ? 'bg-dark-800 text-primary-400 border border-dark-700' 
                            : 'bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-500 border border-primary-200/30'
                        }`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.05 * index }}
                        whileHover={{ scale: 1.1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <motion.a 
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 py-3 px-4 rounded-lg ${
                        isDarkMode 
                          ? 'bg-dark-800 hover:bg-dark-700 text-white' 
                          : 'bg-slate-800 hover:bg-slate-700 text-white'
                      } text-center transition flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      View Code
                    </motion.a>
                    <motion.a 
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 py-3 px-4 rounded-lg ${
                        isDarkMode 
                          ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white' 
                          : 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                      } text-center transition flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                      Live Demo
                    </motion.a>
                  </div>
                </div>
                
                <div className="p-6 md:p-8 md:w-2/3">
                  <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                    {project.title}
                  </h3>
                  
                  <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-700'} mb-6`}>
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className={`text-lg font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                      Key Features & Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, index) => (
                        <li 
                          key={index}
                          className="flex items-start"
                        >
                          <svg 
                            className={`w-5 h-5 ${isDarkMode ? 'text-[#64ffda]' : 'text-emerald-500'} mr-2 mt-1 flex-shrink-0`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span className={isDarkMode ? 'text-slate-300' : 'text-slate-700'}>
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className={`px-2 py-1 text-xs rounded ${
                          isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-800'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`flex-1 py-3 ${
                        isDarkMode 
                          ? 'bg-slate-800 hover:bg-slate-700' 
                          : 'bg-slate-800 hover:bg-slate-900'
                      } text-white text-center rounded transition flex items-center justify-center`}
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      View Code
                    </a>
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`flex-1 py-3 ${
                        isDarkMode 
                          ? 'bg-[#64ffda] text-[#0a192f]' 
                          : 'bg-emerald-600 text-white'
                      } text-center rounded transition flex items-center justify-center`}
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              // Compact view
              <>
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 ${
                    isDarkMode ? 'bg-[#0a192f]/20' : 'bg-slate-900/10'
                  }`}></div>
                </div>
                
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-800'}`}>
                    {project.title}
                  </h3>
                  
                  <p className={`${isDarkMode ? 'text-slate-300' : 'text-slate-700'} mb-4 line-clamp-3`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className={`px-2 py-1 text-xs rounded ${
                          isDarkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-800'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`p-2 rounded-full ${
                          isDarkMode ? 'text-slate-400 hover:text-[#64ffda]' : 'text-slate-700 hover:text-emerald-600'
                        } transition-colors`}
                      >
                        <span className="sr-only">GitHub</span>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`p-2 rounded-full ${
                          isDarkMode ? 'text-slate-400 hover:text-[#64ffda]' : 'text-slate-700 hover:text-emerald-600'
                        } transition-colors`}
                      >
                        <span className="sr-only">External Link</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                        </svg>
                      </a>
                    </div>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className={`text-sm px-3 py-1 rounded ${
                        isDarkMode
                          ? 'bg-[#64ffda]/10 text-[#64ffda] hover:bg-[#64ffda]/20'
                          : 'bg-emerald-50 text-emerald-600 hover:bg-emerald-100'
                      } transition-colors`}
                    >
                      Details
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;