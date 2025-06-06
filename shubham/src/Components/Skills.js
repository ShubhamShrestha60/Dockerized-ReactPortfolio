import React from 'react';
import { motion } from 'framer-motion';
import './../assets'
import { skill } from './../assets'
import './../Constants'
import { AppText, skillsList, workDetail } from './../Constants'

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  return (
    <section id="skills" className="py-20 bg-white dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div
            className="flex items-center justify-center space-x-4"
            variants={itemVariants}
          >
            <motion.img
              src={skill}
              alt="Skills"
              className="w-16 h-16"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 1 }}
            />
            <h2 className="text-4xl font-bold text-secondary-900 dark:text-white">
              {AppText.Skills}
              <span className="text-primary-600 dark:text-primary-400 ml-2">
                {AppText.Experties}
              </span>
            </h2>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 bg-primary-100 dark:bg-secondary-800 rounded-3xl -rotate-3"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="relative grid grid-cols-3 sm:grid-cols-4 gap-6 p-8 bg-white dark:bg-secondary-900 rounded-3xl shadow-xl"
              variants={containerVariants}
            >
              {skillsList.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center p-4 rounded-xl bg-primary-50 dark:bg-secondary-800 hover:bg-primary-100 dark:hover:bg-secondary-700 transition-colors duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-12 h-12 object-contain mb-2"
                  />
                  <span className="text-sm font-medium text-secondary-600 dark:text-secondary-300">
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="relative"
          >
            <motion.div
              className="absolute inset-0 bg-primary-100 dark:bg-secondary-800 rounded-3xl rotate-3"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="relative p-8 bg-white dark:bg-secondary-900 rounded-3xl shadow-xl"
              variants={containerVariants}
            >
              <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-8">
                Experience
              </h3>
              <div className="space-y-8">
                {workDetail.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-6"
                    variants={itemVariants}
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-primary-600 dark:bg-primary-400 rounded-full" />
                      {index !== workDetail.length - 1 && (
                        <div className="w-0.5 h-full bg-primary-200 dark:bg-secondary-700" />
                      )}
                    </div>
                    <div className="flex-1 bg-primary-50 dark:bg-secondary-800 p-6 rounded-lg">
                      <div className="flex flex-wrap justify-between items-center mb-2">
                        <h4 className="text-lg font-bold text-secondary-900 dark:text-white">
                          {item.position}
                        </h4>
                        <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-secondary-600 dark:text-secondary-400">
                        {item.compnayName}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;