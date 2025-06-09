import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { AppText, portfolio } from '../Constants';
import { robo } from './../assets/index';

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(portfolio);
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'ui/ux', label: 'UI/UX' },
    { id: 'website', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
  ];

  useEffect(() => {
    if (selectedFilter.toLowerCase() === 'all') {
      setFilteredProjects(portfolio);
    } else {
      const filtered = portfolio.filter(
        (item) => item.type.toLowerCase() === selectedFilter.toLowerCase()
      );
      setFilteredProjects(filtered);
    }
  }, [selectedFilter]);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-secondary-900 dark:to-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            A showcase of my best work, featuring web applications, UI/UX designs, and mobile apps
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 space-x-1 bg-white dark:bg-secondary-800 rounded-xl shadow-lg">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  selectedFilter === filter.id
                    ? 'bg-primary-600 text-white shadow'
                    : 'text-secondary-600 dark:text-secondary-400 hover:bg-gray-100 dark:hover:bg-secondary-700'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-white dark:bg-secondary-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="w-full h-full">
                    <LazyLoadImage
                      src={project.imageUrl}
                      alt={project.title}
                      effect="blur"
                      wrapperClassName="w-full h-full"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      beforeLoad={() => {
                        // Add a min-height before image loads to prevent layout shift
                        const wrapper = document.querySelector(`[alt="${project.title}"]`);
                        if (wrapper) {
                          wrapper.style.minHeight = '300px';
                        }
                      }}
                      className="transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Quick Links */}
                  <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 bg-white rounded-full shadow-lg hover:bg-primary-50 transition-colors"
                      >
                        <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 bg-white rounded-full shadow-lg hover:bg-primary-50 transition-colors"
                      >
                        <svg className="w-5 h-5 text-secondary-900" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
                        {project.title}
                      </h3>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-50 text-primary-700 dark:bg-primary-900/20 dark:text-primary-400">
                        {project.type}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-secondary-600 dark:text-secondary-400 mb-4 line-clamp-2">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium text-secondary-600 dark:text-secondary-400 bg-secondary-100 dark:bg-secondary-700 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-xs font-medium text-secondary-600 dark:text-secondary-400 bg-secondary-100 dark:bg-secondary-700 rounded-md">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="relative max-w-4xl w-full bg-white dark:bg-secondary-800 rounded-2xl shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="relative h-72 sm:h-96">
                  <div className="w-full h-full">
                    <LazyLoadImage
                      src={selectedProject.imageUrl}
                      alt={selectedProject.title}
                      effect="blur"
                      wrapperClassName="w-full h-full"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      beforeLoad={() => {
                        // Add a min-height before image loads to prevent layout shift
                        const wrapper = document.querySelector(`[alt="${selectedProject.title}"]`);
                        if (wrapper) {
                          wrapper.style.minHeight = '300px';
                        }
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                  <button
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    onClick={() => setSelectedProject(null)}
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h2 className="text-4xl font-bold text-white mb-4">
                      {selectedProject.title}
                    </h2>
                    <div className="flex items-center space-x-4">
                      <span className="px-4 py-1.5 text-sm font-medium text-white bg-primary-600/80 rounded-full">
                        {selectedProject.type}
                      </span>
                      <div className="flex items-center space-x-2">
                        <span className={`w-2 h-2 rounded-full ${selectedProject.liveUrl ? 'bg-green-500' : 'bg-yellow-500'}`} />
                        <span className="text-sm text-white/90">
                          {selectedProject.liveUrl ? 'Live' : 'In Development'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-secondary-600 dark:text-secondary-400 text-lg leading-relaxed">
                      {selectedProject.desc}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 text-sm font-medium text-secondary-600 dark:text-secondary-400 bg-secondary-100 dark:bg-secondary-700 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="mt-8 flex flex-wrap gap-4">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        View Live Demo
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-3 bg-secondary-900 dark:bg-secondary-700 text-white rounded-lg hover:bg-secondary-800 dark:hover:bg-secondary-600 transition-colors"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        View Source Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;