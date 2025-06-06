import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { AppText } from './../Constants';
import { homeImage } from './../assets';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  // Function to handle resume download
  const handleResumeClick = () => {
    // Get the file ID from the Google Drive link
    const fileId = "1dqDs2alezzd9eIcj3gXNw-OKD_BfSRtB";
    
    // Create the preview link
    const previewLink = `https://drive.google.com/file/d/${fileId}/preview`;
    
    // Open preview in new tab
    window.open(previewLink, '_blank');
  };

  return (
    <motion.div
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-primary-50 dark:from-secondary-900 dark:to-secondary-800"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <motion.div
          className="space-y-6 text-center lg:text-left"
          variants={itemVariants}
        >
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-900 dark:text-white"
            variants={itemVariants}
          >
            {AppText.hello}
          </motion.h1>
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-x-3"
            variants={itemVariants}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-800 dark:text-secondary-200">
              {AppText.Iam}
            </h2>
            <div className="text-3xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400">
              <Typewriter
                options={{
                  strings: [
                    AppText.ShubhamShrestha,
                    AppText.FrontedDeveloper,
                    AppText.UIUXDesigner,
                    AppText.BackendDeveloper,
                    AppText.GraphiteArtist
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </div>
          </motion.div>

          <motion.p
            className="text-lg sm:text-xl text-secondary-600 dark:text-secondary-300 max-w-2xl mx-auto lg:mx-0"
            variants={itemVariants}
          >
            I am a Computer Science student passionate about creating beautiful and functional web experiences. Currently pursuing BSc. HONS Computer Science.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
            variants={itemVariants}
          >
            <button
              onClick={handleResumeClick}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors duration-300 transform hover:scale-105"
            >
              Download Resume
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </button>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 font-medium hover:bg-primary-50 dark:hover:bg-secondary-800 transition-colors duration-300 transform hover:scale-105"
            >
              Get in Touch
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="relative flex justify-center items-center"
          variants={itemVariants}
        >
          <motion.div
            className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-primary-400/20 dark:bg-primary-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          <motion.img
            src={homeImage}
            alt="Profile"
            className="relative w-[250px] sm:w-[350px] rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;