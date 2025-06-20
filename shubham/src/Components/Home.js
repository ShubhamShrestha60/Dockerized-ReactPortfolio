import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { AppText } from './../Constants';
import { homeImage } from './../assets';

const RESUME_FILE_ID = "1sYgDPb4B9Ksr0rqzendPCp-R00w7Wlny";
const PREVIEW_URL = `https://drive.google.com/file/d/${RESUME_FILE_ID}/preview`;
const DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${RESUME_FILE_ID}`;

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [downloadLink, setDownloadLink] = useState(null);

  // Preload the download link
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = DOWNLOAD_URL;
    document.head.appendChild(link);
    setDownloadLink(DOWNLOAD_URL);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Memoized handlers for instant response
  const handleResumeClick = useCallback(() => {
    setIsModalOpen(true);
    setIsLoading(true);
  }, []);

  const handleCloseModal = useCallback((e) => {
    if (e) e.stopPropagation();
    setIsModalOpen(false);
  }, []);

  const handleDownload = useCallback((e) => {
    if (e) e.stopPropagation();
    if (downloadLink) {
      window.open(downloadLink, '_blank', 'noopener,noreferrer');
      setIsModalOpen(false);
    }
  }, [downloadLink]);

  const handleIframeLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.95, 
      y: 20,
      transition: {
        duration: 0.15
      }
    }
  };

  return (
    <>
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
                      AppText.FullStackDeveloper
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
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LazyLoadImage
                src={homeImage}
                alt="Profile"
                effect="blur"
                className="w-[250px] sm:w-[350px] rounded-2xl shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Resume Preview Modal */}
      <AnimatePresence mode="wait">
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={handleCloseModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-white dark:bg-secondary-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-secondary-700">
                <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">Resume Preview</h3>
                <div className="flex space-x-2">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDownload}
                    className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    title="Download Resume"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCloseModal}
                    className="inline-flex items-center px-3 py-2 bg-gray-100 dark:bg-secondary-700 text-secondary-700 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-secondary-600 transition-colors"
                    title="Close Preview"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-gray-100 dark:bg-secondary-900 min-h-0">
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-secondary-800">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin" />
                      <p className="text-secondary-600 dark:text-secondary-400">Loading preview...</p>
                    </div>
                  </div>
                )}
                <div className="w-full h-[75vh] pt-2">
                  <iframe
                    src={PREVIEW_URL}
                    className="w-full h-full"
                    onLoad={handleIframeLoad}
                    allow="autoplay"
                  ></iframe>
                </div>
              </div>

              {/* Mobile Actions */}
              <div className="lg:hidden border-t border-gray-200 dark:border-secondary-700 p-4">
                <div className="flex justify-end space-x-2">
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDownload}
                    className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download Resume
                  </motion.button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCloseModal}
                    className="inline-flex items-center px-4 py-3 bg-gray-100 dark:bg-secondary-700 text-secondary-700 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-secondary-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;