import React, { useState } from 'react';

// Project Modal Component
const ProjectModal = ({ project, isDarkMode, onClose }) => {
  if (!project) return null;
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className={`relative w-full max-w-4xl rounded-xl overflow-hidden ${isDarkMode ? 'bg-dark-900/95' : 'bg-white/95'} shadow-2xl backdrop-blur-lg border ${isDarkMode ? 'border-white/10' : 'border-black/5'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10 opacity-50"></div>
        <div className="md:flex h-full">
          <div className="relative h-64 md:h-auto md:w-1/3 overflow-hidden group">
            <img 
              src={project.image} 
              alt={`${project.title} - Project Thumbnail`} 
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                // Fallback to a placeholder if image fails to load
                e.target.src = `https://placehold.co/600x400/3b82f6/ffffff?text=${encodeURIComponent(project.title)}`;
              }}
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
                  <li 
                    key={index}
                    className="flex items-start"
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
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className={`px-3 py-1 text-xs rounded-full ${
                    isDarkMode 
                      ? 'bg-dark-800 text-primary-400 border border-dark-700' 
                      : 'bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-500 border border-primary-200/30'
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
                className={`flex-1 py-3 px-4 rounded-lg ${
                  isDarkMode 
                    ? 'bg-dark-800 hover:bg-dark-700 text-white' 
                    : 'bg-slate-800 hover:bg-slate-700 text-white'
                } text-center transition-colors duration-200 flex items-center justify-center shadow-lg`}
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
                className={`flex-1 py-3 px-4 rounded-lg ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white' 
                    : 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white'
                } text-center transition-colors duration-200 flex items-center justify-center shadow-lg`}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Your project data with custom thumbnails
const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application with React, Node.js, and MongoDB. Features include user authentication, product filtering, cart functionality, and payment processing.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    image: "/images/projects/inventory_management_image50.webp", // Add your custom thumbnail here
    github: "https://github.com/yourusername/ecommerce-project",
    demo: "https://your-ecommerce-demo.com",
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
    image: "/images/projects/chat-app-thumbnail.jpg", // Add your custom thumbnail here
    github: "https://github.com/yourusername/chat-application",
    demo: "https://your-chat-app-demo.com",
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
    image: "/images/projects/algorithm-visualizer-thumbnail.jpg", // Add your custom thumbnail here
    github: "https://github.com/yourusername/algorithm-visualizer",
    demo: "https://your-algorithm-visualizer-demo.com",
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
    image: "/images/projects/ai-content-generator-thumbnail.jpg", // Add your custom thumbnail here
    github: "https://github.com/yourusername/ai-content-generator",
    demo: "https://your-ai-generator-demo.com",
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
    tags: ["React", "Tailwind CSS", "Responsive Design"],
    image: "/images/projects/portfolio-thumbnail.jpg", // Add your custom thumbnail here
    github: "https://github.com/yourusername/portfolio",
    demo: "https://your-portfolio-demo.com",
    highlights: [
      "Designed and implemented a responsive layout from scratch",
      "Added smooth animations and transitions",
      "Implemented dark/light mode with theme persistence",
      "Created a responsive design for all devices"
    ]
  },
  {
    id: 6,
    title: "Task Management System",
    description: "A full-featured task management application with drag-and-drop functionality, user assignments, and progress tracking.",
    tags: ["React", "Redux", "Firebase", "Material UI"],
    image: "/images/projects/task-manager-thumbnail.jpg", // Add your custom thumbnail here
    github: "https://github.com/yourusername/task-manager",
    demo: "https://your-task-manager-demo.com",
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

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-12 text-center">
        <h1 className={`text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent`}>
          Projects
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8 rounded-full"></div>
        <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          A showcase of my recent work, personal projects, and contributions.
        </p>
      </div>
      
      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className={`rounded-xl overflow-hidden ${
              isDarkMode 
                ? 'bg-gradient-to-br from-dark-800 to-dark-900 border border-dark-700/50 hover:shadow-xl hover:shadow-primary-500/10' 
                : 'bg-white hover:shadow-xl hover:shadow-primary-500/10 border border-gray-100'
            } transition-shadow duration-300`}
          >
            <div className="relative overflow-hidden h-52 group">
              <img 
                src={project.image} 
                alt={`${project.title} - Project Thumbnail`} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onError={(e) => {
                  // Fallback to a placeholder if image fails to load
                  e.target.src = `https://placehold.co/600x400/3b82f6/ffffff?text=${encodeURIComponent(project.title)}`;
                }}
                loading="lazy"
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
                  <span 
                    key={index} 
                    className={`px-3 py-1 text-xs rounded-full ${
                      isDarkMode 
                        ? 'bg-dark-800 text-primary-400 border border-dark-700' 
                        : 'bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-500 border border-primary-200/30'
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
                    className={`p-2 rounded-full ${
                      isDarkMode 
                        ? 'bg-dark-800 text-primary-400 hover:bg-dark-700' 
                        : 'bg-gray-100 text-primary-500 hover:bg-gray-200'
                    } transition-colors duration-200`}
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
                    className={`p-2 rounded-full ${
                      isDarkMode 
                        ? 'bg-dark-800 text-secondary-400 hover:bg-dark-700' 
                        : 'bg-gray-100 text-secondary-500 hover:bg-gray-200'
                    } transition-colors duration-200`}
                  >
                    <span className="sr-only">External Link</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
                <button
                  onClick={() => setSelectedProject(project)}
                  className={`text-sm px-4 py-2 rounded-full ${
                    isDarkMode
                      ? 'bg-gradient-to-r from-primary-500/20 to-secondary-500/20 text-primary-400 border border-primary-500/30'
                      : 'bg-gradient-to-r from-primary-50 to-secondary-50 text-primary-500 border border-primary-200/50'
                  } transition-colors duration-200 hover:shadow-md`}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          isDarkMode={isDarkMode} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
      
      {/* More Projects Link */}
      <div className="mt-12 text-center">
        <a
          href="https://github.com/venkatmadhu"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center px-6 py-3 rounded-full ${
            isDarkMode
              ? 'bg-dark-800 text-primary-400 border border-primary-500/30 hover:bg-dark-700'
              : 'bg-white text-primary-500 border border-primary-200/50 hover:bg-gray-50'
          } transition-colors duration-200 shadow-md hover:shadow-lg`}
        >
          <span className="font-medium">View More on GitHub</span>
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Projects;