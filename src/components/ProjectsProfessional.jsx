import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Creative Magnetic Card Component
const MagneticCard = ({ children, className, ...props }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]));
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]));

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateXValue = (e.clientY - centerY) / rect.height;
    const rotateYValue = (e.clientX - centerX) / rect.width;
    x.set(rotateYValue);
    y.set(rotateXValue);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ 
        rotateX: rotateX, 
        rotateY: rotateY,
        transformStyle: "preserve-3d"
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Floating Particle Background
const FloatingParticles = ({ isDarkMode }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 rounded-full ${
            isDarkMode 
              ? ['bg-blue-400/30', 'bg-purple-400/30', 'bg-indigo-400/30'][i % 3]
              : ['bg-blue-500/20', 'bg-purple-500/20', 'bg-indigo-500/20'][i % 3]
          }`}
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: 8 + (i % 4),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

// Creative Code Snippet Component
const CodeSnippet = ({ project, isDarkMode }) => {
  const codeExamples = {
    'Inspectify': `// AI Road Damage Detection
const detectDamage = async (image) => {
  const model = await loadViTModel();
  const prediction = model.predict(image);
  return {
    damage: prediction.class,
    confidence: prediction.score,
    location: getGPSLocation()
  };
};`,
    'Inventory Management System': `// Real-time Stock Management
class InventoryManager {
  updateStock(productId, quantity) {
    const product = this.findProduct(productId);
    product.stock += quantity;
    this.notifyLowStock(product);
    return this.saveToDatabase(product);
  }
}`,
    'Community Portal': `// Resident Service Request
const createRequest = (data) => {
  return db.requests.create({
    resident_id: data.userId,
    category: data.category,
    description: data.description,
    status: 'pending',
    timestamp: Date.now()
  });
};`
  };

  const code = codeExamples[project.title] || '// Code example not available';

  return (
    <motion.div
      className={`relative p-4 rounded-xl border font-mono text-sm overflow-hidden ${
        isDarkMode 
          ? 'bg-slate-900/80 border-slate-700/50 text-green-400' 
          : 'bg-slate-50/80 border-slate-200/50 text-slate-700'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      
      {/* Code Content */}
      <pre className="text-xs leading-relaxed whitespace-pre-wrap">
        {code}
      </pre>
      
      {/* Typing Animation */}
      <motion.div
        className="absolute top-4 right-4 w-2 h-4 bg-green-500 opacity-70"
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </motion.div>
  );
};

// 3D Card Flip Component
const FlipCard = ({ children, backContent, isDarkMode }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-32 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Front */}
        <div 
          className={`absolute inset-0 rounded-xl p-4 ${
            isDarkMode ? 'bg-slate-800/50 border border-slate-700/50' : 'bg-slate-50/50 border border-slate-200/50'
          }`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          {children}
        </div>
        
        {/* Back */}
        <div 
          className={`absolute inset-0 rounded-xl p-4 ${
            isDarkMode ? 'bg-slate-800/50 border border-slate-700/50' : 'bg-slate-50/50 border border-slate-200/50'
          }`}
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          {backContent}
        </div>
      </motion.div>
    </div>
  );
};

// Enhanced Tooltip Component
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
            className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap z-50 ${
              isDarkMode 
                ? 'bg-slate-900 text-white border border-slate-700' 
                : 'bg-white text-slate-900 border border-slate-200 shadow-lg'
            }`}
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {content}
            <div className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
              isDarkMode ? 'border-t-slate-900' : 'border-t-white'
            }`} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Creative Loading Skeleton
const ProjectSkeleton = ({ isDarkMode }) => {
  return (
    <div className={`rounded-3xl overflow-hidden border backdrop-blur-md ${
      isDarkMode 
        ? 'bg-slate-900/60 border-slate-700/50' 
        : 'bg-white/80 border-slate-200/50'
    }`}>
      {/* Image skeleton */}
      <div className="relative h-48 overflow-hidden">
        <motion.div
          className={`w-full h-full ${
            isDarkMode ? 'bg-slate-800' : 'bg-slate-200'
          }`}
          animate={{
            background: isDarkMode 
              ? ['#1e293b', '#334155', '#1e293b']
              : ['#e2e8f0', '#f1f5f9', '#e2e8f0']
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      {/* Content skeleton */}
      <div className="p-6 space-y-4">
        {/* Title skeleton */}
        <div className="space-y-2">
          <motion.div
            className={`h-6 rounded-lg ${
              isDarkMode ? 'bg-slate-800' : 'bg-slate-200'
            }`}
            animate={{
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className={`h-4 w-3/4 rounded-lg ${
              isDarkMode ? 'bg-slate-800' : 'bg-slate-200'
            }`}
            animate={{
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.2
            }}
          />
        </div>
        
        {/* Description skeleton */}
        <div className="space-y-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`h-3 rounded-lg ${
                isDarkMode ? 'bg-slate-800' : 'bg-slate-200'
              }`}
              style={{ width: `${100 - i * 10}%` }}
              animate={{
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1
              }}
            />
          ))}
        </div>
        
        {/* Metrics skeleton */}
        <div className="grid grid-cols-2 gap-3">
          {[...Array(2)].map((_, i) => (
            <motion.div
              key={i}
              className={`p-3 rounded-xl ${
                isDarkMode ? 'bg-slate-800/50' : 'bg-slate-200/50'
              }`}
              animate={{
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1
              }}
            />
          ))}
        </div>
        
        {/* Tags skeleton */}
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`h-6 w-16 rounded-lg ${
                isDarkMode ? 'bg-slate-800/50' : 'bg-slate-200/50'
              }`}
              animate={{
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1
              }}
            />
          ))}
        </div>
        
        {/* Button skeleton */}
        <motion.div
          className={`h-12 rounded-xl ${
            isDarkMode ? 'bg-slate-800/50' : 'bg-slate-200/50'
          }`}
          animate={{
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
};

// Professional Project Modal Component
const ProjectModal = ({ project, isDarkMode, onClose }) => {
  if (!project) return null;
  
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);
  
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-lg"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Enhanced background with particles */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
      <motion.div 
        className={`relative w-full max-w-6xl max-h-[90vh] overflow-y-auto rounded-3xl border backdrop-blur-md ${
          isDarkMode 
            ? 'bg-slate-900/95 border-slate-700/50' 
            : 'bg-white/95 border-slate-200/50'
        } shadow-2xl`}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.9, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.9, y: 20, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {/* Header */}
        <div className={`sticky top-0 z-10 p-6 border-b backdrop-blur-md ${
          isDarkMode ? 'border-slate-700/50 bg-slate-900/80' : 'border-slate-200/50 bg-white/80'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl ${project.gradient} text-white`}>
                {project.icon}
              </div>
              <div>
                <h2 className={`text-2xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  {project.title}
                </h2>
                <p className="text-blue-600 font-semibold">{project.category}</p>
              </div>
            </div>
            
            <motion.button 
              onClick={onClose}
              className={`p-2 rounded-xl transition-all duration-200 ${
                isDarkMode 
                  ? 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 hover:text-white' 
                  : 'bg-slate-100/50 text-slate-600 hover:bg-slate-200/50 hover:text-slate-900'
              }`}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Project Image/Preview */}
          <div className="mb-8">
            <div className={`relative rounded-2xl overflow-hidden border ${
              isDarkMode ? 'border-slate-700/50' : 'border-slate-200/50'
            }`}>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 md:h-80 object-cover"
                onError={(e) => {
                  e.target.src = `https://placehold.co/800x400/${project.color}/ffffff?text=${encodeURIComponent(project.title)}`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  project.status === 'Production' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                    : project.status === 'Deployed'
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Project Overview
                </h3>
                <p className={`text-lg leading-relaxed ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {project.description}
                </p>
              </div>

              <div>
                <h3 className={`text-xl font-semibold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Key Features & Achievements
                </h3>
                <div className="space-y-3">
                  {project.highlights.map((highlight, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                        {highlight}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className={`text-xl font-semibold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-lg text-sm font-medium border ${
                        isDarkMode 
                          ? 'bg-slate-800/60 text-slate-300 border-slate-700/50' 
                          : 'bg-slate-100/60 text-slate-700 border-slate-200/50'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Metrics */}
              <div className={`p-6 rounded-2xl border ${
                isDarkMode 
                  ? 'bg-slate-800/50 border-slate-700/50' 
                  : 'bg-slate-50/50 border-slate-200/50'
              }`}>
                <h3 className={`text-lg font-semibold mb-4 ${
                  isDarkMode ? 'text-white' : 'text-slate-900'
                }`}>
                  Project Metrics
                </h3>
                <div className="space-y-4">
                  {Object.entries(project.metrics).map(([key, value], index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className={`text-sm capitalize ${
                        isDarkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className={`font-semibold ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border transition-all duration-200 ${
                      isDarkMode 
                        ? 'bg-slate-800/50 border-slate-700/50 text-slate-300 hover:bg-slate-700/50 hover:text-white' 
                        : 'bg-slate-100/50 border-slate-200/50 text-slate-700 hover:bg-slate-200/50 hover:text-slate-900'
                    }`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    View Source Code
                  </motion.a>
                )}
                
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium transition-all duration-200"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    View Live Demo
                  </motion.a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Professional Projects Component
const ProjectsProfessional = ({ isDarkMode }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  // Professional project data
  const projectsData = [
    {
      id: 1,
      title: "Inspectify",
      subtitle: "AI-Powered Road Damage Detection",
      description: "Advanced computer vision system using Vision Transformer and YOLO for real-time road damage classification with GPS integration and comprehensive analytics dashboard.",
      category: "AI/ML Platform",
      tags: ["React", "Node.js", "MongoDB", "PyTorch", "YOLO", "ViT", "Express"],
      image: "/images/projects/inspectify_thumbnail.webp",
      github: "https://github.com/venkatmadhu21/SafeStreet---Road-Damage-Detection-System",
      demo: "https://safestreet-road-damage-detection-system.onrender.com/",
      status: "Production",
      gradient: "bg-gradient-to-r from-blue-600 to-purple-600",
      color: "3b82f6",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      metrics: {
        accuracy: "94%",
        responseTime: "<2s",
        coverage: "1000+ KM",
        users: "Active"
      },
      highlights: [
        "Achieved 94%+ accuracy in road damage classification using Vision Transformer and YOLO",
        "Integrated real-time image upload, webcam capture, and GPS location tagging",
        "Auto-saving predictions with timestamps and coordinates in MongoDB database",
        "Comprehensive dashboard displaying road issues and status summaries",
        "Deployed on Render with scalable architecture for production use"
      ],
      type: "ai"
    },
  {
  id: 2,
  title: "Inventory Management System",
  subtitle: "Department-Level Asset Tracker",
  description:
    "An internal inventory management system developed for college labs to track IT assets, lab equipment, and consumables. Enables real-time updates, report generation, and streamlined stock management.",
  category: "Academic Utility",
  tags: ["HTML5", "CSS3", "Python", "SQLite", "XAMPP", "JavaScript"],
  image: "/images/projects/inventory_management_image50.webp",
  github: "https://github.com/venkatmadhu21/Inventory-Management",
  demo: "https://inventory-management-mu-three.vercel.app/",
  status: "Deployed",
  gradient: "bg-gradient-to-r from-green-600 to-emerald-600",
  color: "10b981",
  icon: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
  metrics: {
    efficiency: "+40%",
    accuracy: "99.2%",
    users: "5+ Departments",
    uptime: "99.9%"
  },
  highlights: [
    "Used by college departments to log and track lab equipment and IT assets",
    "Built with Python (CGI), HTML/CSS, and SQLite for fast local deployment",
    "Deployed on XAMPP and accessible through internal college network",
    "Supports stock additions, removals, and report generation for audits",
    "Enabled staff to monitor inventory status without manual registers"
  ],
  type: "web"
},
    {
      id: 3,
      title: "Community Portal",
      subtitle: "Residential Management Platform",
      description: "Digital platform streamlining residential community operations with service request management, notice boards, and resident communication tools.",
      category: "Platform",
      tags: ["JavaScript", "Python", "SQLite", "Bootstrap", "HTML5", "CSS3"],
      image: "/images/projects/residential_portal_thumbnail.webp",
      github: "",
      demo: "",
      status: "Live",
      gradient: "bg-gradient-to-r from-purple-600 to-pink-600",
      color: "8b5cf6",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      metrics: {
        satisfaction: "4.8/5",
        efficiency: "+60%",
        residents: "200+",
        requests: "1000+"
      },
      highlights: [
        "Used by over 200 residents for service request logging and communication",
        "Admin dashboard for managing complaints, notices, and community announcements",
        "Built with CGI-Python and SQLite for lightweight, fast performance",
        "Responsive interface with status tracking and complete request history",
        "Improved community transparency and accountability by 60%"
      ],
      type: "web"
    },
    {
      id: 4,
      title: "E-commerce Analytics Dashboard",
      subtitle: "Power BI Business Intelligence",
      description: "Dynamic e-commerce analytics dashboard built with Power BI to track sales, customer behavior, product performance, and revenue insights for data-driven decision making.",
      category: "Data Analytics",
      tags: ["Power BI", "DAX", "Excel", "Business Analytics", "Data Visualization"],
      image: "/images/projects/ecommerce_powerbi_dashboard.webp",
      github: "https://github.com/venkatmadhu21/E-Commerce-Dashboard-Using-Power-Bi",
      demo: "https://www.linkedin.com/posts/venkatmadhu_powerbi-ecommerce-dataanalytics-activity-7239082663846854660-YGJH",
      status: "Completed",
      gradient: "bg-gradient-to-r from-orange-600 to-red-600",
      color: "f97316",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      metrics: {
        insights: "15+",
        kpis: "8",
        dataPoints: "10K+",
        accuracy: "98%"
      },
      highlights: [
        "Visualized key metrics: total revenue, top products, customer segments, and regional performance",
        "Interactive Power BI slicers and filters for dynamic data exploration by category and time",
        "Advanced DAX formulas for KPIs like profit margin, sales growth, and customer retention",
        "Interactive charts, heatmaps, and performance comparisons for quick business insights",
        "Comprehensive dashboard enabling data-driven business decisions"
      ],
      type: "analytics"
    },
    {
      id: 5,
      title: "Cricket Performance Dashboard",
      subtitle: "Sports Analytics Platform",
      description: "Comprehensive cricket analytics dashboard analyzing player performance, match statistics, and team insights using advanced data visualization techniques.",
      category: "Sports Analytics",
      tags: ["Power BI", "Sports Analytics", "Data Modeling", "Statistical Analysis"],
      image: "/images/projects/cricket_dashboard_thumbnail.webp",
      github: "https://github.com/venkatmadhu21/Cricketer_Stats-Using-Power-Bi",
      demo: "https://www.linkedin.com/posts/venkatmadhu_powerbi-dataanalytics-cricketstats-activity-7239088189171187715-_qLO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEa9NGgB4X1oAzSgwulUCRfuUYEieO0vYDw",
      status: "Completed",
      gradient: "bg-gradient-to-r from-indigo-600 to-blue-600",
      color: "4f46e5",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      metrics: {
        players: "50+",
        matches: "100+",
        statistics: "25+",
        accuracy: "99%"
      },
      highlights: [
        "Comprehensive player performance analysis with batting and bowling statistics",
        "Match-wise performance tracking and comparison tools",
        "Team performance insights and strategic recommendations",
        "Interactive visualizations for easy data interpretation",
        "Advanced statistical modeling for performance prediction"
      ],
      type: "analytics"
    },
   {
  id: 6,
  title: "Dish Delight",
  subtitle: "Modern Recipe Discovery App",
  description: "A dynamic Android recipe application that allows users to explore new dishes, save favorites, and watch YouTube tutorials—all in one place. Built with Kotlin and packed with modern Android libraries for performance and offline access.",
  category: "Mobile Application",
  tags: ["Kotlin", "Android Studio", "Retrofit", "Room DB", "MVVM", "YouTube API"],
  image: "/images/projects/dish_delight_thumbnail.webp", // Make sure this image exists or update the path
  github: "https://github.com/venkatmadhu21/Recipe-App", // Add your GitHub repo link here
  demo: "https://www.linkedin.com/posts/venkatmadhu_androiddevelopment-kotlin-recipeapp-activity-7200323722367442944-S3tu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEa9NGgB4X1oAzSgwulUCRfuUYEieO0vYDw", // Replace with your actual LinkedIn demo video link
  status: "Completed",
  gradient: "bg-gradient-to-r from-yellow-500 to-rose-500",
  color: "facc15",
  icon: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
    </svg>
  ),
  metrics: {
    recipes: "500+",
    offlineSupport: "Yes",
    videoGuides: "YouTube Integrated",
    uiRating: "4.9/5"
  },
  highlights: [
    "Browse curated recipes and save favorites with offline access using Room DB",
    "View YouTube tutorials directly within the app for step-by-step cooking",
    "Utilizes Retrofit for API integration and efficient data handling",
    "Built using MVVM architecture with LiveData and Coroutines",
    "Sleek and responsive UI with intuitive navigation using Navigation Component"
  ],
  type: "utility"
}



  ];

  // Filter categories
  const filterCategories = [
    { id: 'all', label: 'All Projects', count: projectsData.length },
    { id: 'ai', label: 'AI/ML', count: projectsData.filter(p => p.type === 'ai').length },
    { id: 'web', label: 'Web Apps', count: projectsData.filter(p => p.type === 'web').length },
    { id: 'analytics', label: 'Analytics', count: projectsData.filter(p => p.type === 'analytics').length }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.type === activeFilter);

  // Animation variants
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

  return (
    <motion.div 
      className="min-h-screen py-20 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Creative Background Elements */}
      <FloatingParticles isDarkMode={isDarkMode} />
      
      {/* Dynamic Gradient Mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-30 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20' 
              : 'bg-gradient-to-r from-blue-400/10 to-purple-400/10'
          }`}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className={`absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-indigo-500/20 to-pink-500/20' 
              : 'bg-gradient-to-r from-indigo-400/10 to-pink-400/10'
          }`}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -100, 0],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 2
          }}
        />
      </div>

      {/* Creative Geometric Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isDarkMode ? "#3B82F6" : "#60A5FA"} stopOpacity="0.1" />
            <stop offset="100%" stopColor={isDarkMode ? "#8B5CF6" : "#A78BFA"} stopOpacity="0.05" />
          </linearGradient>
        </defs>
        
        {/* Animated connecting lines */}
        <motion.path
          d="M 100 200 Q 400 100 700 300 T 1200 200"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="5 5"
          animate={{
            strokeDashoffset: [0, -20]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.path
          d="M 200 600 Q 600 400 1000 500"
          stroke="url(#lineGradient)"
          strokeWidth="1"
          fill="none"
          strokeDasharray="3 7"
          animate={{
            strokeDashoffset: [0, -15]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: 1
          }}
        />
      </svg>

      {/* Professional Header */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10"
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
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className={`text-sm font-medium ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Featured Work
            </span>
          </motion.div>

          <motion.h1 
            className={`font-bold tracking-tight mb-6 relative ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
            variants={itemVariants}
          >
            <div className="relative">
              <motion.span
                className="inline-block relative"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Innovative
                {/* Glowing effect */}
                <motion.div
                  className="absolute inset-0 blur-xl opacity-20 bg-gradient-to-r from-blue-600 to-purple-600"
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.span>
              
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent relative">
                <motion.span
                  className="inline-block relative"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                    background: "linear-gradient(45deg, #3B82F6, #8B5CF6, #6366F1, #3B82F6)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent"
                  }}
                >
                  Project Portfolio
                  
                  {/* Sparkle effects */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        rotate: [0, 180, 360]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.7,
                        ease: "easeInOut"
                      }}
                      style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                      }}
                    />
                  ))}
                </motion.span>
                
                {/* Animated underline */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                />
              </span>
            </div>
          </motion.h1>

          <motion.p 
            className={`text-xl leading-relaxed max-w-3xl mx-auto mb-12 ${
              isDarkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
            variants={itemVariants}
          >
            Showcasing cutting-edge solutions that combine technical excellence with real-world impact. 
            From AI-powered applications to enterprise platforms, each project demonstrates innovation and quality.
          </motion.p>
        </div>
      </motion.div>

      {/* Professional Filter Navigation */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
        variants={itemVariants}
      >
        <div className={`p-3 rounded-3xl border backdrop-blur-md relative overflow-hidden ${
          isDarkMode 
            ? 'bg-slate-900/60 border-slate-700/50' 
            : 'bg-white/80 border-slate-200/50'
        }`}>
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                "linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.1), transparent)",
                "linear-gradient(45deg, transparent, rgba(139, 92, 246, 0.1), transparent)",
                "linear-gradient(45deg, transparent, rgba(99, 102, 241, 0.1), transparent)",
                "linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.1), transparent)"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <nav className="flex flex-wrap justify-center gap-3 relative z-10">
            {filterCategories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`relative flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 overflow-hidden ${
                  activeFilter === category.id
                    ? `bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25`
                    : isDarkMode
                      ? 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/50'
                }`}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: activeFilter === category.id 
                    ? '0 20px 40px rgba(59, 130, 246, 0.3)' 
                    : isDarkMode 
                      ? '0 10px 25px rgba(0, 0, 0, 0.1)' 
                      : '0 10px 25px rgba(0, 0, 0, 0.05)'
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Active indicator */}
                {activeFilter === category.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                    layoutId="activeFilter"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                {/* Button content */}
                <span className="relative z-10 flex items-center gap-2">
                  <span>{category.label}</span>
                  <motion.span 
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      activeFilter === category.id
                        ? 'bg-white/20 text-white'
                        : isDarkMode
                          ? 'bg-slate-700/50 text-slate-400'
                          : 'bg-slate-200/50 text-slate-500'
                    }`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {category.count}
                  </motion.span>
                </span>
                
                {/* Hover effect */}
                {activeFilter !== category.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredProjects.map((project, index) => (
              <MagneticCard
                key={project.id}
                variants={cardVariants}
                className={`group relative rounded-3xl overflow-hidden border backdrop-blur-md transition-all duration-500 cursor-pointer ${
                  isDarkMode 
                    ? 'bg-slate-900/60 border-slate-700/50 hover:border-slate-600/50' 
                    : 'bg-white/80 border-slate-200/50 hover:border-slate-300/50'
                } hover:shadow-2xl hover:shadow-blue-500/20 hover:shadow-[0_0_50px_rgba(59,130,246,0.15)]`}
                onClick={() => setSelectedProject(project)}
                whileHover={{ 
                  y: -12, 
                  scale: 1.03,
                  rotateX: 5,
                  rotateY: 5,
                  transition: { 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20 
                  }
                }}
                whileTap={{ scale: 0.97 }}
                style={{
                  transformStyle: "preserve-3d"
                }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.target.src = `https://placehold.co/400x300/${project.color}/ffffff?text=${encodeURIComponent(project.title)}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                      project.status === 'Production' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : project.status === 'Deployed'
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`p-2 rounded-lg backdrop-blur-sm ${project.gradient} text-white`}>
                      {project.icon}
                    </div>
                  </div>

                  {/* Hover Overlay with Interactive Elements */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {/* Floating metrics */}
                    <div className="absolute bottom-4 left-4 flex gap-2">
                      {Object.entries(project.metrics).slice(0, 2).map(([key, value], idx) => (
                        <motion.div
                          key={idx}
                          className="px-2 py-1 rounded-lg bg-white/20 backdrop-blur-sm text-white text-xs font-medium"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          {value}
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Interactive glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100"
                      animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      style={{
                        backgroundSize: "200% 200%"
                      }}
                    />
                  </div>
                </div>

                {/* Project Content with Enhanced Features */}
                <div className="p-6 relative" style={{ transform: "translateZ(20px)" }}>
                  {/* Enhanced Title Section */}
                  <div className="mb-4 relative">
                    <motion.h3 
                      className={`text-xl font-bold mb-2 flex items-center gap-2 ${
                        isDarkMode ? 'text-white' : 'text-slate-900'
                      }`}
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className={`w-2 h-2 rounded-full ${project.gradient}`}></span>
                      {project.title}
                    </motion.h3>
                    
                    <div className="flex items-center justify-between">
                      <p className="text-blue-600 font-semibold text-sm">
                        {project.subtitle}
                      </p>
                      
                      {/* Interactive status indicator */}
                      <motion.div
                        className="flex items-center gap-1"
                        whileHover={{ scale: 1.1 }}
                      >
                        <div className={`w-2 h-2 rounded-full animate-pulse ${
                          project.status === 'Production' ? 'bg-green-500' :
                          project.status === 'Deployed' ? 'bg-blue-500' : 'bg-purple-500'
                        }`}></div>
                        <span className={`text-xs font-medium ${
                          isDarkMode ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          {project.status}
                        </span>
                      </motion.div>
                    </div>
                  </div>

                  {/* Enhanced description with typing effect */}
                  <motion.p 
                    className={`text-sm leading-relaxed mb-4 line-clamp-3 ${
                      isDarkMode ? 'text-slate-300' : 'text-slate-600'
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.description}
                  </motion.p>

                  {/* Enhanced Key Metrics with animations */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {Object.entries(project.metrics).slice(0, 2).map(([key, value], index) => (
                      <motion.div 
                        key={index} 
                        className={`p-3 rounded-xl text-center relative overflow-hidden ${
                          isDarkMode 
                            ? 'bg-slate-800/50 border border-slate-700/50' 
                            : 'bg-slate-50/50 border border-slate-200/50'
                        }`}
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: isDarkMode ? '0 10px 25px rgba(59, 130, 246, 0.15)' : '0 10px 25px rgba(59, 130, 246, 0.1)'
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* Animated background */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"
                          animate={{
                            backgroundPosition: ["0% 0%", "100% 100%"],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                          style={{
                            backgroundSize: "200% 200%"
                          }}
                        />
                        
                        <div className="relative z-10">
                          <motion.div 
                            className={`text-lg font-bold ${
                              isDarkMode ? 'text-white' : 'text-slate-900'
                            }`}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ 
                              type: "spring", 
                              stiffness: 200, 
                              delay: index * 0.1 
                            }}
                          >
                            {value}
                          </motion.div>
                          <div className={`text-xs capitalize ${
                            isDarkMode ? 'text-slate-400' : 'text-slate-500'
                          }`}>
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                        
                        {/* Corner accent */}
                        <div className={`absolute top-0 right-0 w-4 h-4 ${project.gradient} opacity-20 transform rotate-45 translate-x-2 -translate-y-2`}></div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Enhanced Tech Stack with hover effects */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <CustomTooltip
                        key={index}
                        content={`This tech stack ingredient makes everything taste better`}
                        isDarkMode={isDarkMode}
                      >
                        <motion.span
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 ${
                            isDarkMode 
                              ? 'bg-slate-800/60 text-slate-400 border-slate-700/50 hover:bg-slate-700/60 hover:text-slate-300 hover:border-slate-600/50' 
                              : 'bg-slate-100/60 text-slate-600 border-slate-200/50 hover:bg-slate-200/60 hover:text-slate-700 hover:border-slate-300/50'
                          }`}
                          whileHover={{ 
                            scale: 1.05, 
                            y: -2,
                            boxShadow: isDarkMode ? '0 4px 12px rgba(59, 130, 246, 0.1)' : '0 4px 12px rgba(59, 130, 246, 0.08)'
                          }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          {tag}
                        </motion.span>
                      </CustomTooltip>
                    ))}
                    {project.tags.length > 3 && (
                      <CustomTooltip
                        content={`There are more secret ingredients in this recipe`}
                        isDarkMode={isDarkMode}
                      >
                        <motion.span 
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
                            isDarkMode 
                              ? 'text-slate-500 border-slate-600/30 hover:text-slate-400' 
                              : 'text-slate-400 border-slate-300/30 hover:text-slate-500'
                          }`}
                          whileHover={{ scale: 1.05 }}
                        >
                          +{project.tags.length - 3} more
                        </motion.span>
                      </CustomTooltip>
                    )}
                  </div>

                  {/* Enhanced View Details Button with creative effects */}
                  <motion.button
                    className="uniform-button w-full"
                    whileHover={{ 
                      scale: 1.02
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Animated background */}
                    <motion.div
                      className={`absolute inset-0 ${project.gradient} opacity-0 group-hover:opacity-10`}
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <span>View Details</span>
                      <motion.svg 
                        className="w-4 h-4" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </motion.svg>
                    </span>
                    
                    {/* Ripple effect */}
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      initial={{ scale: 0, opacity: 0.5 }}
                      whileTap={{ scale: 1, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        background: `radial-gradient(circle, ${isDarkMode ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)'} 0%, transparent 70%)`
                      }}
                    />
                  </motion.button>
                </div>
                
                {/* Creative corner accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <CustomTooltip content="See it in action like a movie premiere" isDarkMode={isDarkMode}>
                    <motion.button
                      className="uniform-button-secondary uniform-button-sm p-2 rounded-full"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demo || '#', '_blank');
                      }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </motion.button>
                  </CustomTooltip>
                  
                  <CustomTooltip content="Peek behind the curtain of code wizardry" isDarkMode={isDarkMode}>
                    <motion.button
                      className="uniform-button-secondary uniform-button-sm p-2 rounded-full"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github || '#', '_blank');
                      }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </motion.button>
                  </CustomTooltip>
                  
                  <CustomTooltip content="Save this masterpiece for later admiration" isDarkMode={isDarkMode}>
                    <motion.button
                      className="uniform-button-secondary uniform-button-sm p-2 rounded-full"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add bookmark functionality
                      }}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                    </motion.button>
                  </CustomTooltip>
                </div>
                
                {/* Interactive code preview on hover */}
                <motion.div
                  className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 pointer-events-none"
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <CodeSnippet project={project} isDarkMode={isDarkMode} />
                </motion.div>
              </MagneticCard>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* More Projects Link */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/venkatmadhu21"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
              isDarkMode
                ? 'bg-slate-900/60 text-slate-300 border border-slate-700/50 hover:bg-slate-800/60 hover:text-white backdrop-blur-md'
                : 'bg-white/80 text-slate-700 border border-slate-200/50 hover:bg-slate-50/80 hover:text-slate-900 backdrop-blur-md'
            } shadow-lg hover:shadow-xl`}
            whileHover={{ 
              scale: 1.05, 
              y: -5
            }}
            whileTap={{ scale: 0.98, y: 0 }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            <span>Explore More on GitHub</span>
            <motion.svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ x: [0, 5, 0] }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "loop", 
                duration: 2,
                repeatDelay: 1
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            isDarkMode={isDarkMode} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectsProfessional;