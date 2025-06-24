import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactRedesigned = ({ isDarkMode }) => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [clickedCard, setClickedCard] = useState(null);

  // Contact methods - SaaS Professional Links
  const contactMethods = [
    {
      id: 'email',
      name: 'Email',
      handle: 'venkatmadhumohann@gmail.com',
      description: 'Drop me a line anytime',
      cta: 'Send Email',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      borderGradient: 'from-blue-500/20 to-cyan-500/20',
      shadowColor: 'shadow-blue-500/20',
      link: 'mailto:venkatmadhumohann@gmail.com',
      external: false
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      handle: '@venkatmadhumohan',
      description: 'Let\'s connect professionally',
      cta: 'Connect',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-500/10 to-purple-500/10',
      borderGradient: 'from-indigo-500/20 to-purple-500/20',
      shadowColor: 'shadow-indigo-500/20',
      link: 'https://www.linkedin.com/in/venkatmadhu',
      external: true
    },
    {
      id: 'github',
      name: 'GitHub',
      handle: '@venkat21',
      description: 'Check out my code',
      cta: 'View Profile',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      gradient: 'from-gray-700 to-gray-900',
      bgGradient: 'from-gray-700/10 to-gray-900/10',
      borderGradient: 'from-gray-700/20 to-gray-900/20',
      shadowColor: 'shadow-gray-700/20',
      link: 'https://github.com/venkatmadhu21',
      external: true
    }
  ];

  const handleCardClick = (method) => {
    setClickedCard(method.id);
    
    // Open link
    if (method.external) {
      window.open(method.link, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = method.link;
    }
    
    // Reset click state
    setTimeout(() => setClickedCard(null), 200);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.1,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-20">
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h1>
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-cyan-400/20 blur-3xl opacity-30 -z-10" />
        </motion.div>
        
        <motion.div
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-8" />
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate, discuss opportunities, or just have a conversation about technology?
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Choose your preferred way to reach out
          </p>
        </motion.div>
      </div>

      {/* Contact Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
      >
        {contactMethods.map((method) => (
          <motion.div
            key={method.id}
            variants={cardVariants}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="relative group cursor-pointer"
            onMouseEnter={() => setHoveredCard(method.id)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleCardClick(method)}
          >
            {/* Card Background with Gradient */}
            <div className={`
              relative overflow-hidden rounded-3xl p-8 h-80
              ${isDarkMode 
                ? 'bg-gradient-to-br from-gray-900/90 to-gray-800/90' 
                : 'bg-gradient-to-br from-white/90 to-gray-50/90'
              }
              backdrop-blur-xl border border-gray-200/20 dark:border-gray-700/20
              transition-all duration-300 group-hover:border-gray-300/30 dark:group-hover:border-gray-600/30
            `}>
              
              {/* Animated Background Gradient */}
              <div className={`
                absolute inset-0 bg-gradient-to-br ${method.bgGradient} opacity-0 
                group-hover:opacity-100 transition-opacity duration-500
              `} />
              
              {/* Glow Effect */}
              <div className={`
                absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 blur-xl
                group-hover:opacity-20 transition-opacity duration-500 -z-10
              `} />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`
                    w-16 h-16 rounded-2xl bg-gradient-to-br ${method.gradient} 
                    flex items-center justify-center text-white shadow-lg ${method.shadowColor}
                    group-hover:shadow-xl transition-all duration-300
                    ${hoveredCard === method.id ? 'scale-110 rotate-3' : ''}
                  `}>
                    {method.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {method.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                      {method.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                        {method.handle}
                      </p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6">
                    <div className={`
                      inline-flex items-center px-6 py-3 rounded-xl font-semibold text-white
                      bg-gradient-to-r ${method.gradient} shadow-lg ${method.shadowColor}
                      group-hover:shadow-xl transition-all duration-300
                      ${clickedCard === method.id ? 'scale-95' : 'group-hover:scale-105'}
                    `}>
                      {method.cta}
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-br from-white/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* Hover Shadow */}
            <div className={`
              absolute inset-0 rounded-3xl ${method.shadowColor} shadow-xl opacity-0 
              group-hover:opacity-60 transition-opacity duration-300 -z-20
            `} />
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="text-center mt-20"
      >
        <div className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-gray-100/50 to-gray-200/50 dark:from-gray-800/50 dark:to-gray-700/50 backdrop-blur-sm">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
          <span className="text-gray-700 dark:text-gray-300 font-medium">
            Available for new opportunities
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactRedesigned;