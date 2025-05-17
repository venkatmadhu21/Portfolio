import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Competitive programming profile data
const cpProfile = {
  totalProblemsSolved: 150,
  languages: ["C++", "Python", "JavaScript"],
  platforms: [
    {
      name: "LeetCode",
      username: "venkatmadhumohan",
      profileUrl: "https://leetcode.com/venkatmadhumohan/",
      problemsSolved: 85,
      ranking: "Top 15%",
      rating: 1750,
      badges: ["75 Days Challenge", "Daily Streak: 30+"],
      contests: [
        { name: "Weekly Contest 345", rank: 1250, date: "Jan 2024" },
        { name: "Biweekly Contest 122", rank: 980, date: "Feb 2024" },
        { name: "Weekly Contest 350", rank: 875, date: "Mar 2024" }
      ]
    },
    {
      name: "CodeChef",
      username: "venkatmadhumohan",
      profileUrl: "https://www.codechef.com/users/venkatmadhumohan",
      problemsSolved: 35,
      ranking: "1★ Coder",
      rating: 1350,
      badges: ["Beginner Problem Solver"],
      contests: [
        { name: "March Long Challenge 2024", rank: "1500+", date: "Mar 2024" },
        { name: "February Cook-Off 2024", rank: "1200+", date: "Feb 2024" }
      ]
    },
    {
      name: "HackerRank",
      username: "venkatmadhumohan",
      profileUrl: "https://www.hackerrank.com/venkatmadhumohan",
      problemsSolved: 30,
      ranking: "5★ in Problem Solving",
      badges: ["Problem Solving (Basic)", "Python (Intermediate)"],
      certificates: ["Problem Solving (Basic)", "Python (Basic)"]
    }
  ],
  topicStrengths: [
    { topic: "Arrays & Strings", solved: 45, proficiency: 90 },
    { topic: "Dynamic Programming", solved: 25, proficiency: 75 },
    { topic: "Trees & Graphs", solved: 30, proficiency: 80 },
    { topic: "Sorting & Searching", solved: 20, proficiency: 85 },
    { topic: "Linked Lists", solved: 15, proficiency: 70 },
    { topic: "Greedy Algorithms", solved: 15, proficiency: 65 }
  ],
  recentSubmissions: [
    { 
      problem: "Maximum Subarray", 
      difficulty: "Medium", 
      platform: "LeetCode", 
      date: "2 days ago",
      language: "C++",
      runtime: "Beats 95% of submissions"
    },
    { 
      problem: "Valid Parentheses", 
      difficulty: "Easy", 
      platform: "LeetCode", 
      date: "5 days ago",
      language: "Python",
      runtime: "Beats 87% of submissions"
    },
    { 
      problem: "Merge K Sorted Lists", 
      difficulty: "Hard", 
      platform: "LeetCode", 
      date: "1 week ago",
      language: "C++",
      runtime: "Beats 92% of submissions"
    }
  ]
};

const DSAShowcase = ({ isDarkMode }) => {
  const [activePlatform, setActivePlatform] = useState(cpProfile.platforms[0].name);
  const [activeTab, setActiveTab] = useState('overview');
  
  // Get the active platform data
  const platformData = cpProfile.platforms.find(p => p.name === activePlatform);
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  const fadeIn = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };
  
  // Helper function for difficulty colors
  const difficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Hard': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };
  
  // Helper function for platform colors
  const platformColor = (platform) => {
    switch (platform) {
      case 'LeetCode': return 'from-amber-500 to-orange-500';
      case 'CodeChef': return 'from-red-500 to-red-600';
      case 'HackerRank': return 'from-green-500 to-green-600';
      default: return 'from-blue-500 to-indigo-500';
    }
  };
  
  const platformBg = (platform) => {
    switch (platform) {
      case 'LeetCode': return isDarkMode ? 'bg-amber-900/20' : 'bg-amber-50';
      case 'CodeChef': return isDarkMode ? 'bg-red-900/20' : 'bg-red-50';
      case 'HackerRank': return isDarkMode ? 'bg-green-900/20' : 'bg-green-50';
      default: return isDarkMode ? 'bg-blue-900/20' : 'bg-blue-50';
    }
  };

  return (
    <section id="dsa" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Competitive Programming</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My journey through algorithmic challenges and coding competitions across various platforms.
          </p>
        </motion.div>
        
        {/* Stats Overview */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <motion.div 
            variants={item}
            className="bg-gradient-to-br from-primary-500/10 to-primary-600/10 border border-primary-500/20 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Problems Solved</h3>
              <div className="p-3 bg-primary-500/20 rounded-full">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="flex items-end">
              <span className="text-5xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                {cpProfile.totalProblemsSolved}
              </span>
              <span className="ml-2 text-gray-600 dark:text-gray-400 mb-1">problems</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {cpProfile.languages.map((lang, index) => (
                <span key={index} className="px-2 py-1 text-xs rounded-md bg-primary-500/10 text-primary-600 dark:text-primary-400">
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            variants={item}
            className="bg-gradient-to-br from-secondary-500/10 to-secondary-600/10 border border-secondary-500/20 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Top Platform</h3>
              <div className="p-3 bg-secondary-500/20 rounded-full">
                <svg className="w-6 h-6 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
            </div>
            <div className="flex items-end">
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
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-gray-400">Problems</span>
                <span className="font-medium">{cpProfile.platforms[0].problemsSolved}</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            variants={item}
            className="bg-gradient-to-br from-accent-500/10 to-accent-600/10 border border-accent-500/20 rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Top Skills</h3>
              <div className="p-3 bg-accent-500/20 rounded-full">
                <svg className="w-6 h-6 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div className="space-y-3">
              {cpProfile.topicStrengths.slice(0, 3).map((topic, index) => (
                <div key={index} className="flex flex-col">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{topic.topic}</span>
                    <span className="text-sm font-medium">{topic.proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${index === 0 ? 'from-primary-500 to-primary-400' : 
                        index === 1 ? 'from-secondary-500 to-secondary-400' : 'from-accent-500 to-accent-400'}`}
                      style={{ width: `${topic.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
        {/* Platform Tabs */}
        <div className="mb-8">
          <div className="flex overflow-x-auto space-x-2 pb-2 mb-4">
            {cpProfile.platforms.map((platform) => (
              <button
                key={platform.name}
                onClick={() => setActivePlatform(platform.name)}
                className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                  activePlatform === platform.name
                    ? `bg-gradient-to-r ${platformColor(platform.name)} text-white shadow-md`
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {platform.name}
              </button>
            ))}
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
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
                    {platformData.badges && platformData.badges.map((badge, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 text-xs rounded-full bg-white/50 dark:bg-gray-800/50 shadow-sm"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Platform Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-white/60 dark:bg-gray-800/60 rounded-lg p-4 shadow-sm">
                    <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Problems Solved</h4>
                    <p className="text-2xl font-bold">{platformData.problemsSolved}</p>
                  </div>
                  
                  {platformData.rating && (
                    <div className="bg-white/60 dark:bg-gray-800/60 rounded-lg p-4 shadow-sm">
                      <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Rating</h4>
                      <p className="text-2xl font-bold">{platformData.rating}</p>
                    </div>
                  )}
                  
                  <div className="bg-white/60 dark:bg-gray-800/60 rounded-lg p-4 shadow-sm">
                    <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Ranking</h4>
                    <p className="text-2xl font-bold">{platformData.ranking}</p>
                  </div>
                  
                  {platformData.contests && (
                    <div className="bg-white/60 dark:bg-gray-800/60 rounded-lg p-4 shadow-sm">
                      <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Contests</h4>
                      <p className="text-2xl font-bold">{platformData.contests.length}</p>
                    </div>
                  )}
                </div>
                
                {/* Tabs for platform details */}
                <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
                  <nav className="flex space-x-8">
                    <button
                      onClick={() => setActiveTab('overview')}
                      className={`py-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === 'overview'
                          ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                          : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                      }`}
                    >
                      Overview
                    </button>
                    
                    {platformData.contests && (
                      <button
                        onClick={() => setActiveTab('contests')}
                        className={`py-4 px-1 border-b-2 font-medium text-sm ${
                          activeTab === 'contests'
                            ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                            : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                        }`}
                      >
                        Contests
                      </button>
                    )}
                    
                    {platformData.certificates && (
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
                          My competitive programming journey on {platformData.name} has helped me develop strong problem-solving skills and algorithmic thinking.
                          I've focused on mastering data structures and algorithms through consistent practice and participation in coding challenges.
                        </p>
                      </div>
                      
                      {/* Recent submissions */}
                      {cpProfile.recentSubmissions.length > 0 && (
                        <div className="mt-8">
                          <h4 className="text-lg font-semibold mb-4">Recent Submissions</h4>
                          <div className="space-y-4">
                            {cpProfile.recentSubmissions.filter(s => s.platform === platformData.name).map((submission, index) => (
                              <div 
                                key={index} 
                                className="bg-white/70 dark:bg-gray-800/70 rounded-lg p-4 shadow-sm"
                              >
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h5 className="font-medium">{submission.problem}</h5>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                      {submission.date} • {submission.language}
                                    </p>
                                  </div>
                                  <span className={`px-2 py-1 text-xs rounded-md ${difficultyColor(submission.difficulty)}`}>
                                    {submission.difficulty}
                                  </span>
                                </div>
                                <div className="mt-2 text-sm text-green-600 dark:text-green-400">
                                  {submission.runtime}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                  
                  {activeTab === 'contests' && platformData.contests && (
                    <motion.div
                      key="contests"
                      variants={fadeIn}
                      initial="hidden"
                      animate="visible"
                    >
                      <div className="space-y-6">
                        {platformData.contests.map((contest, index) => (
                          <div 
                            key={index} 
                            className="bg-white/70 dark:bg-gray-800/70 rounded-lg p-5 shadow-sm"
                          >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                              <div>
                                <h5 className="font-semibold text-lg">{contest.name}</h5>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{contest.date}</p>
                              </div>
                              <div className="mt-2 md:mt-0">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
                                  Rank: {contest.rank}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
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
        
        {/* Topic Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Topic Proficiency</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cpProfile.topicStrengths.map((topic, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-semibold">{topic.topic}</h4>
                  <span className="text-sm font-medium px-2 py-1 rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300">
                    {topic.solved} solved
                  </span>
                </div>
                
                <div className="relative pt-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-xs font-semibold inline-block text-primary-600 dark:text-primary-400">
                        Proficiency
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold inline-block text-primary-600 dark:text-primary-400">
                        {topic.proficiency}%
                      </span>
                    </div>
                  </div>
                  <div className="overflow-hidden h-2 mb-4 text-xs flex rounded-full bg-gray-200 dark:bg-gray-700">
                    <div 
                      style={{ width: `${topic.proficiency}%` }} 
                      className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-primary-500 to-secondary-500"
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DSAShowcase;