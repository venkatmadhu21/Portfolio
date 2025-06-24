import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CreativeInvitation = ({ onAccept, isDarkMode }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const invitationSteps = [
    {
      title: "You've Been Invited",
      subtitle: "To explore something extraordinary",
      content: null
    },
    {
      title: "Welcome to My Digital Realm",
      subtitle: "Where creativity meets technology",
      content: "I'm Vishnu Mohan, and I'd love to share my journey with you"
    },
    {
      title: "Ready for the Experience?",
      subtitle: "Let's embark on this adventure together",
      content: "Click below to enter my portfolio"
    }
  ];

  // Track mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-progress through invitation steps
  useEffect(() => {
    if (currentStep < 2) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, currentStep === 0 ? 2000 : 3000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  const handleAcceptInvitation = () => {
    setCurrentStep(3);
    setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onAccept();
      }, 800);
    }, 1500);
  };

  // Get current step data with bounds checking
  const currentStepData = invitationSteps[currentStep] || invitationSteps[0];

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-50 flex items-center justify-center"
        style={{
          background: isDarkMode 
            ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15) 0%, rgba(17, 24, 39, 0.95) 50%, rgba(0, 0, 0, 0.98) 100%)`
            : `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.1) 0%, rgba(249, 250, 251, 0.95) 50%, rgba(255, 255, 255, 0.98) 100%)`
        }}
      >
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${
                isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Main invitation card */}
        <motion.div
          className={`relative max-w-2xl mx-4 p-8 md:p-12 rounded-3xl backdrop-blur-xl border ${
            isDarkMode 
              ? 'bg-gray-900/80 border-gray-700/50 text-white' 
              : 'bg-white/80 border-gray-200/50 text-gray-900'
          } shadow-2xl`}
          initial={{ scale: 0.8, y: 50 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            damping: 15,
            delay: 0.2 
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{
            transform: isHovering 
              ? `perspective(1000px) rotateX(${(mousePosition.y - 50) * 0.1}deg) rotateY(${(mousePosition.x - 50) * 0.1}deg)`
              : 'none'
          }}
        >
          {/* Decorative border animation */}
          <motion.div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: `conic-gradient(from ${mousePosition.x * 3.6}deg, transparent, rgba(59, 130, 246, 0.5), transparent)`,
              padding: '2px',
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className={`w-full h-full rounded-3xl ${
              isDarkMode ? 'bg-gray-900/80' : 'bg-white/80'
            }`} />
          </motion.div>

          {/* Content */}
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                {/* Decorative header */}
                <motion.div
                  className="mb-8"
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 1, -1, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${
                    isDarkMode 
                      ? 'bg-gradient-to-br from-blue-500 to-purple-600' 
                      : 'bg-gradient-to-br from-blue-400 to-purple-500'
                  } shadow-lg`}>
                    <motion.svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </motion.svg>
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h1
                  className={`text-4xl md:text-5xl font-bold mb-4 ${
                    isDarkMode 
                      ? 'bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400' 
                      : 'bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600'
                  } bg-clip-text text-transparent`}
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] 
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  style={{ backgroundSize: '200% auto' }}
                >
                  {currentStepData.title}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  className={`text-xl md:text-2xl mb-6 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {currentStepData.subtitle}
                </motion.p>

                {/* Content */}
                {currentStepData.content && (
                  <motion.p
                    className={`text-lg mb-8 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {currentStepData.content}
                  </motion.p>
                )}

                {/* Action button (only on final step) */}
                {currentStep === 2 && (
                  <motion.button
                    onClick={handleAcceptInvitation}
                    className={`group relative px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                      isDarkMode
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white'
                        : 'bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-500 hover:to-purple-600 text-white'
                    } shadow-lg hover:shadow-xl transform hover:scale-105`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center">
                      Enter Portfolio
                      <motion.svg
                        className="ml-2 w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </motion.svg>
                    </span>
                    
                    {/* Button glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0, 0.3, 0]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    />
                  </motion.button>
                )}

                {/* Progress indicator */}
                {currentStep < 2 && (
                  <motion.div
                    className="flex justify-center mt-8 space-x-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    {[0, 1, 2].map((step) => (
                      <motion.div
                        key={step}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          step <= currentStep
                            ? isDarkMode ? 'bg-blue-400' : 'bg-blue-500'
                            : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                        }`}
                        animate={step === currentStep ? { scale: [1, 1.3, 1] } : {}}
                        transition={{ duration: 0.6, repeat: Infinity }}
                      />
                    ))}
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Skip option */}
        <motion.button
          onClick={handleAcceptInvitation}
          className={`absolute top-8 right-8 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            isDarkMode
              ? 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              : 'text-gray-500 hover:text-gray-900 hover:bg-gray-200/50'
          } backdrop-blur-sm`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Skip Intro →
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
};

export default CreativeInvitation;