import React from 'react';
import { motion } from 'framer-motion';
import './../assets'
import './../Components'
import { book, laptop, wave } from './../assets'
import { aboutSection, AppText } from '../Constants'

const AboutMe = () => {
  return (
    <section id="aboutme" className="py-20 bg-white dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            About <span className="text-primary-600 dark:text-primary-400">Me</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-secondary-600 dark:text-secondary-400 leading-relaxed">
              {AppText.aboutMeDescripion}
            </p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {aboutSection.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="h-full bg-white dark:bg-secondary-800 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl dark:hover:shadow-primary-500/20">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-secondary-600 dark:text-secondary-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-primary-600 to-primary-500 transform origin-right scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-primary-100 dark:bg-primary-900/10">
            <span className="px-4 py-1 text-sm font-medium text-primary-700 dark:text-primary-400">
              Let's build something amazing together
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;