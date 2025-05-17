import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactRedesigned = ({ isDarkMode }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    subject: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const [activeField, setActiveField] = useState(null);
  
  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! I\'ll get back to you soon.'
    });
    
    // Reset form after submission
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        message: '',
        subject: ''
      });
      
      // Reset form status after a delay
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          success: false,
          message: ''
        });
      }, 3000);
    }, 500);
  };
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
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
  
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };
  
  const glowVariants = {
    hover: {
      boxShadow: isDarkMode 
        ? '0 0 25px 5px rgba(14, 165, 233, 0.3), 0 0 10px 1px rgba(139, 92, 246, 0.3)' 
        : '0 0 25px 5px rgba(2, 132, 199, 0.2), 0 0 10px 1px rgba(124, 58, 237, 0.2)',
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };
  
  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };
  
  // Contact methods
  const contactMethods = [
    {
      name: 'Email',
      value: 'venkatmadhumohan@gmail.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-primary-500 to-primary-400',
      textColor: 'text-primary-400',
      borderColor: 'border-primary-500/30',
      bgColor: 'bg-primary-500/10',
      link: 'mailto:venkatmadhumohan@gmail.com'
    },
    {
      name: 'LinkedIn',
      value: 'venkatmadhumohan',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: 'from-secondary-500 to-secondary-400',
      textColor: 'text-secondary-400',
      borderColor: 'border-secondary-500/30',
      bgColor: 'bg-secondary-500/10',
      link: 'https://www.linkedin.com/in/venkatmadhumohan'
    },
    {
      name: 'GitHub',
      value: 'venkatmadhumohan',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      color: 'from-primary-500 to-primary-400',
      textColor: 'text-primary-400',
      borderColor: 'border-primary-500/30',
      bgColor: 'bg-primary-500/10',
      link: 'https://github.com/venkatmadhumohan'
    },
    {
      name: 'HackerRank',
      value: 'venkatmadhumohan',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908h.701c.141 0 .254-.115.254-.258 0-.094-.049-.176-.123-.221L9.223 4.92c-.049-.063-.141-.109-.226-.109-.086 0-.178.045-.226.109L7.076 6.43c-.072.045-.12.126-.12.221 0 .143.113.258.255.258h.704l.008 10.035c0 .145.111.258.254.258h1.492c.142 0 .259-.115.259-.256v-4.004h4.073v4.152h-.699c-.143 0-.256.115-.256.258 0 .092.048.174.119.219l1.579 1.51c.044.061.141.109.225.109.085 0 .179-.045.228-.109l1.574-1.51c.072-.045.12-.127.12-.219 0-.143-.115-.258-.255-.258h-.704l-.007-10.034c0-.145-.114-.26-.255-.26h-1.494v.002z" />
        </svg>
      ),
      color: 'from-secondary-500 to-secondary-400',
      textColor: 'text-secondary-400',
      borderColor: 'border-secondary-500/30',
      bgColor: 'bg-secondary-500/10',
      link: 'https://www.hackerrank.com/venkatmadhumohan'
    }
  ];
  
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
          Get in Touch
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
          Have a question or want to work together? Feel free to reach out!
        </motion.p>
      </div>
      
      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact form */}
        <motion.div 
          className="lg:col-span-7"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="glass-card p-8 rounded-xl overflow-hidden relative"
            variants={cardVariants}
            whileHover="hover"
            variants={glowVariants}
          >
            {/* Decorative elements */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-secondary-500/10 rounded-full blur-3xl"></div>
            
            <motion.h2 
              className="text-2xl font-bold text-dark-50 mb-6"
              variants={itemVariants}
            >
              Send Me a Message
            </motion.h2>
            
            <AnimatePresence>
              {formStatus.submitted && formStatus.success ? (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-dark-900/90 backdrop-blur-sm z-10"
                  variants={successVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-primary-400 mb-2">Message Sent!</h3>
                    <p className="text-dark-200">{formStatus.message}</p>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
            
            <form onSubmit={handleSubmit}>
              <motion.div 
                className="mb-6"
                variants={itemVariants}
              >
                <label 
                  htmlFor="name" 
                  className="block text-dark-200 mb-2 font-medium"
                >
                  Your Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    onFocus={() => setActiveField('name')}
                    onBlur={() => setActiveField(null)}
                    className={`w-full px-4 py-3 bg-dark-800/50 border ${
                      activeField === 'name' ? 'border-primary-500' : 'border-dark-700/50'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-dark-100 transition-all duration-300`}
                    placeholder="John Doe"
                    required
                  />
                  <AnimatePresence>
                    {activeField === 'name' && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute right-3 top-3 text-primary-400"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
              
              <motion.div 
                className="mb-6"
                variants={itemVariants}
              >
                <label 
                  htmlFor="email" 
                  className="block text-dark-200 mb-2 font-medium"
                >
                  Your Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    onFocus={() => setActiveField('email')}
                    onBlur={() => setActiveField(null)}
                    className={`w-full px-4 py-3 bg-dark-800/50 border ${
                      activeField === 'email' ? 'border-primary-500' : 'border-dark-700/50'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-dark-100 transition-all duration-300`}
                    placeholder="john@example.com"
                    required
                  />
                  <AnimatePresence>
                    {activeField === 'email' && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute right-3 top-3 text-primary-400"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
              
              <motion.div 
                className="mb-6"
                variants={itemVariants}
              >
                <label 
                  htmlFor="subject" 
                  className="block text-dark-200 mb-2 font-medium"
                >
                  Subject
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    onFocus={() => setActiveField('subject')}
                    onBlur={() => setActiveField(null)}
                    className={`w-full px-4 py-3 bg-dark-800/50 border ${
                      activeField === 'subject' ? 'border-primary-500' : 'border-dark-700/50'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-dark-100 transition-all duration-300`}
                    placeholder="Project Inquiry"
                    required
                  />
                  <AnimatePresence>
                    {activeField === 'subject' && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute right-3 top-3 text-primary-400"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                        </svg>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
              
              <motion.div 
                className="mb-6"
                variants={itemVariants}
              >
                <label 
                  htmlFor="message" 
                  className="block text-dark-200 mb-2 font-medium"
                >
                  Your Message
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    onFocus={() => setActiveField('message')}
                    onBlur={() => setActiveField(null)}
                    className={`w-full px-4 py-3 bg-dark-800/50 border ${
                      activeField === 'message' ? 'border-primary-500' : 'border-dark-700/50'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500/50 text-dark-100 transition-all duration-300 min-h-[150px] resize-none`}
                    placeholder="Hello, I'd like to discuss a project..."
                    required
                  ></textarea>
                  <AnimatePresence>
                    {activeField === 'message' && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute right-3 top-3 text-primary-400"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
              
              <motion.div
                variants={itemVariants}
              >
                <motion.button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium shadow-lg shadow-primary-500/20 hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
        
        {/* Contact info */}
        <motion.div 
          className="lg:col-span-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="glass-card p-8 rounded-xl overflow-hidden mb-8 relative"
            variants={cardVariants}
            whileHover="hover"
            variants={glowVariants}
          >
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary-500/10 rounded-full blur-3xl"></div>
            
            <motion.h2 
              className="text-2xl font-bold text-dark-50 mb-6"
              variants={itemVariants}
            >
              Connect With Me
            </motion.h2>
            
            <motion.p 
              className="text-dark-300 mb-8"
              variants={itemVariants}
            >
              Feel free to reach out through any of these platforms. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </motion.p>
            
            <motion.div 
              className="space-y-4"
              variants={containerVariants}
            >
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.name}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center p-4 rounded-lg ${method.bgColor} border ${method.borderColor} transition-all duration-300`}
                  variants={itemVariants}
                  whileHover={{ x: 5, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`w-10 h-10 rounded-full ${method.bgColor} flex items-center justify-center mr-4 ${method.textColor}`}>
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-dark-100">{method.name}</h3>
                    <p className={`text-sm ${method.textColor}`}>{method.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Response time card */}
          <motion.div 
            className="glass-card p-8 rounded-xl overflow-hidden relative"
            variants={cardVariants}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover="hover"
            variants={glowVariants}
          >
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center mr-4 text-primary-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-dark-100 mb-2">Quick Response Time</h3>
                <p className="text-dark-300 text-sm">I typically respond to all inquiries within 24 hours. For urgent matters, please mention it in your message.</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Map or location */}
      <motion.div 
        className="mt-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="glass-card p-6 rounded-xl overflow-hidden">
          <div className="aspect-[21/9] rounded-lg overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 mix-blend-overlay z-10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center mx-auto mb-4 text-primary-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-dark-100 mb-2">Hyderabad, India</h3>
                <p className="text-dark-300">Currently based in the vibrant tech hub of Hyderabad</p>
              </div>
            </div>
            <img 
              src="https://placehold.co/1200x600/0f172a/ffffff?text=Hyderabad,+India" 
              alt="Hyderabad, India" 
              className="w-full h-full object-cover opacity-50"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactRedesigned;