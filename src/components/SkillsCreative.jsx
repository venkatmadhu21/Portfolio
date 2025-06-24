import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SkillsCreative = ({ isDarkMode }) => {
  const [activeSkill, setActiveSkill] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Enhanced skills data with better icons and focused skills
  const skillCategories = {
    all: {
      name: 'All Skills',
      icon: '🎯',
      color: 'from-primary-500 to-secondary-500',
      bgGradient: 'from-primary-500/20 to-secondary-500/20'
    },
    languages: {
      name: 'Languages',
      icon: '💻',
      color: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/20 to-cyan-500/20'
    },
    frontend: {
      name: 'Frontend',
      icon: '🎨',
      color: 'from-pink-500 to-purple-500',
      bgGradient: 'from-pink-500/20 to-purple-500/20'
    },
    backend: {
      name: 'Backend',
      icon: '⚡',
      color: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/20 to-emerald-500/20'
    },
    tools: {
      name: 'Tools',
      icon: '🛠️',
      color: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/20 to-red-500/20'
    }
  };

  const skills = [
    {
      name: 'C++',
      category: 'languages',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="currentColor" d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.109-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79v.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79v.79z"/>
        </svg>
      ),
      level: 'Advanced',
      experience: '2+ years',
      description: 'Systems programming, data structures, algorithms, and competitive programming',
      features: ['Data Structures & Algorithms', 'Memory Management','Problem Solving'],
      projects: ['Algorithm Implementations', 'Programming Solutions'],
      gradient: 'from-blue-600 via-indigo-600 to-purple-700',
      glowColor: 'shadow-blue-500/50',
      particles: ['⚙️', '🧮', '🏆', '💡'],
      proficiency: 90
    },
    {
      name: 'Python',
      category: 'languages',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="#3776ab" d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z"/>
        </svg>
      ),
      level: 'Advanced',
      experience: '2+ years',
      description: 'Data analysis, automation, web development, and machine learning',
      features: ['Data Science & Analytics', 'Web Development (Django/Flask)','Machine Learning'],
      projects: ['Web Scraping Tools', 'ML Model Implementations'],
      gradient: 'from-blue-400 via-green-500 to-yellow-500',
      glowColor: 'shadow-green-500/50',
      particles: ['🐍', '📊', '🔍', '⚙️'],
      proficiency: 85
    },
    {
      name: 'JavaScript',
      category: 'languages',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="#f7df1e" d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/>
        </svg>
      ),
      level: 'Expert',
      experience: '3+ years',
      description: 'Modern ES6+, async programming, DOM manipulation, and full-stack development',
      features: ['ES6+ Features', 'DOM Manipulation', 'API Integration'],
      projects: ['Interactive Web Applications','E-commerce Platforms'],
      gradient: 'from-yellow-400 via-yellow-500 to-orange-500',
      glowColor: 'shadow-yellow-500/50',
      particles: ['⚡', '🔥', '✨', '💫'],
      proficiency: 95
    },
    {
      name: 'React',
      category: 'frontend',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="#61dafb" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.866.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
        </svg>
      ),
      level: 'Expert',
      experience: '1+ years',
      description: 'Component-based architecture, hooks, state management, and modern React patterns',
      features: ['Component Architecture', 'State Management', 'Performance Optimization'],
      projects: ['Interactive Portfolio','Real-time Applications'],
      gradient: 'from-cyan-400 via-blue-500 to-purple-600',
      glowColor: 'shadow-cyan-500/50',
      particles: ['⚛️', '🔄', '🎯', '🚀'],
      proficiency: 92
    },
    {
      name: 'Node.js',
      category: 'backend',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="#339933" d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.570,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
        </svg>
      ),
      level: 'Advanced',
      experience: '1.5+ years',
      description: 'Server-side JavaScript, RESTful APIs, Express framework, and microservices',
      features: ['Express.js Framework', 'RESTful API Design','Authentication & Security'],
      projects: ['Task Management API', 'E-commerce Server'],
      gradient: 'from-green-400 via-emerald-500 to-teal-600',
      glowColor: 'shadow-green-500/50',
      particles: ['🟢', '🔗', '📡', '🔐'],
      proficiency: 88
    },
    {
      name: 'MongoDB',
      category: 'backend',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="#47A248" d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
        </svg>
      ),
      level: 'Advanced',
      experience: '2+ years',
      description: 'NoSQL database design, aggregation pipelines, and data modeling',
      features: ['Schema Design', 'Aggregation Pipelines', 'Indexing & Performance', 'Data Modeling'],
      projects: ['Inventory-Management System', 'Analytics Dashboard'],
      gradient: 'from-green-500 via-emerald-600 to-teal-700',
      glowColor: 'shadow-emerald-500/50',
      particles: ['🍃', '📊', '🔍', '⚡'],
      proficiency: 85
    },
    {
      name: 'Git',
      category: 'tools',
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path fill="#F05032" d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"/>
        </svg>
      ),
      level: 'Expert',
      experience: '2+ years',
      description: 'Version control, branching strategies, collaboration workflows, and CI/CD',
      features: ['Branch Management', 'Merge Strategies', 'Collaboration Workflows', 'CI/CD Integration'],
      projects: ['All Development Projects', 'Team Collaborations' ],
      gradient: 'from-orange-500 via-red-500 to-pink-600',
      glowColor: 'shadow-orange-500/50',
      particles: ['🔄', '🌿', '👥', '🚀'],
      proficiency: 93
    }
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveSkill(prev => (prev + 1) % filteredSkills.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredSkills.length]);

  const currentSkill = filteredSkills[activeSkill];

  // Optimized floating particles animation
  const FloatingParticles = ({ particles, skillName }) => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
      {particles.slice(0, 3).map((particle, index) => (
        <motion.div
          key={`${skillName}-${particle}-${index}`}
          className="absolute text-xl"
          style={{
            left: `${20 + index * 30}%`,
            top: `${30 + index * 20}%`,
            willChange: 'transform'
          }}
          animate={{ 
            y: [-10, -25, -10],
            rotate: [0, 180, 360],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 6 + index,
            repeat: Infinity,
            delay: index * 1.5,
            ease: "easeInOut"
          }}
        >
          {particle}
        </motion.div>
      ))}
    </div>
  );



  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent"
          style={{ backgroundSize: '200% auto' }}
          animate={{ 
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Skills Showcase
        </motion.h1>
        <motion.div
          className="w-32 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 128 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.p
          className="text-xl text-dark-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Explore my technical expertise through interactive skill cards
        </motion.p>
      </motion.div>

      {/* Category Selector */}
      <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {Object.entries(skillCategories).map(([key, category]) => (
          <motion.button
            key={key}
            onClick={() => {
              setSelectedCategory(key);
              setActiveSkill(0);
            }}
            className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === key
                ? 'text-white shadow-lg'
                : 'text-dark-300 hover:text-white'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className={`absolute inset-0 rounded-full bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              animate={{
                opacity: selectedCategory === key ? 1 : 0
              }}
            />
            <motion.div
              className={`absolute inset-0 rounded-full bg-gradient-to-r ${category.bgGradient} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              animate={{
                opacity: selectedCategory === key ? 0.5 : 0
              }}
            />
            <span className="relative z-10 flex items-center">
              <span className="mr-2 text-lg">{category.icon}</span>
              {category.name}
            </span>
          </motion.button>
        ))}
      </motion.div>

      {/* Main Skill Display */}
      <div className="relative">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className={`absolute inset-0 bg-gradient-to-r ${currentSkill?.gradient} opacity-3 blur-2xl rounded-full`}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.03, 0.05, 0.03]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Skill Visualization */}
          <motion.div 
            className="relative"
            key={`skill-visual-${activeSkill}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Skill Card */}
            <motion.div
              className={`relative glass-card p-8 rounded-3xl overflow-hidden ${currentSkill?.glowColor}`}
              style={{ willChange: 'transform, box-shadow' }}
              whileHover={{ scale: 1.02 }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(14, 165, 233, 0.2)',
                  '0 0 40px rgba(139, 92, 246, 0.3)',
                  '0 0 20px rgba(14, 165, 233, 0.2)'
                ]
              }}
              transition={{
                boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 0.2, ease: "easeOut" }
              }}
            >
              {/* Floating Particles */}
              <FloatingParticles particles={currentSkill?.particles || []} skillName={currentSkill?.name} />
              
              {/* Skill Icon */}
              <motion.div
                className="text-center mb-6"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 150, damping: 15 }}
              >
                <motion.div 
                  className={`inline-flex items-center justify-center p-6 rounded-full bg-gradient-to-r ${currentSkill?.gradient} text-white mb-4 w-24 h-24 mx-auto`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 flex items-center justify-center">
                    {currentSkill?.icon}
                  </div>
                </motion.div>
                <motion.h2 
                  className="text-3xl font-bold text-white mb-2"
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  {currentSkill?.name}
                </motion.h2>
                <div className="flex items-center justify-center space-x-4">
                  <span className={`px-3 py-1 rounded-full text-sm bg-gradient-to-r ${currentSkill?.gradient} text-white`}>
                    {currentSkill?.level}
                  </span>
                  <span className="text-dark-300">
                    {currentSkill?.experience}
                  </span>
                </div>
              </motion.div>

              {/* Skill Description */}
              <motion.p
                className="text-dark-200 text-center text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {currentSkill?.description}
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right Side - Skill Details */}
          <motion.div
            className="space-y-8"
            key={`skill-details-${activeSkill}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="mr-3">🎯</span>
                Key Features
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {currentSkill?.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="glass-card p-4 rounded-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex items-center">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentSkill?.gradient} mr-3`} />
                      <span className="text-dark-200">{feature}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="mr-3">🚀</span>
                Projects Built
              </h3>
              <div className="space-y-3">
                {currentSkill?.projects.map((project, index) => (
                  <motion.div
                    key={project}
                    className="glass-card p-4 rounded-xl flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${currentSkill?.gradient} mr-3`} />
                    <span className="text-dark-200">{project}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skill Navigation */}
        <motion.div 
          className="flex justify-center items-center mt-12 space-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Previous Button */}
          <motion.button
            onClick={() => {
              setIsAutoPlaying(false);
              setActiveSkill(prev => prev === 0 ? filteredSkills.length - 1 : prev - 1);
            }}
            className="uniform-button-secondary uniform-button-round"
            style={{ padding: '12px' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          {/* Skill Indicators */}
          <div className="flex space-x-2">
            {filteredSkills.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveSkill(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeSkill 
                    ? `bg-gradient-to-r ${currentSkill?.gradient}` 
                    : 'bg-dark-600 hover:bg-dark-500'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            onClick={() => {
              setIsAutoPlaying(false);
              setActiveSkill(prev => (prev + 1) % filteredSkills.length);
            }}
            className="uniform-button-secondary uniform-button-round"
            style={{ padding: '12px' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          {/* Auto-play Toggle */}
          <motion.button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`uniform-button-secondary uniform-button-round ml-4 ${
              isAutoPlaying ? 'opacity-100' : 'opacity-60'
            }`}
            style={{ padding: '12px' }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isAutoPlaying ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-4a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </motion.button>
        </motion.div>
      </div>

      {/* Quick Skills Overview */}
      <motion.div 
        className="mt-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Quick Overview
        </h2>
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.05 }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.button
              key={skill.name}
              onClick={() => {
                setActiveSkill(index);
                setIsAutoPlaying(false);
              }}
              className={`glass-card p-4 rounded-xl text-center transition-all duration-200 group ${
                index === activeSkill ? 'ring-2 ring-primary-500 scale-105' : 'hover:scale-105'
              }`}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="w-12 h-12 mx-auto mb-2 text-white flex items-center justify-center">
                {skill.icon}
              </div>
              <div className="text-sm text-dark-300 font-medium group-hover:text-white transition-colors">
                {skill.name}
              </div>
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SkillsCreative;