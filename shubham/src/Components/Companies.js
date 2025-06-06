import React from 'react';
import { motion } from 'framer-motion';
import { AppText, CompanyImage, workDetail } from '../Constants';

const Companies = () => {
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

  return (
    <section id="companies" className="py-20 bg-gradient-to-b from-white to-primary-50 dark:from-secondary-900 dark:to-secondary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl font-bold text-secondary-900 dark:text-white mb-4"
            variants={itemVariants}
          >
            {AppText.CompaniesI}
            <span className="text-primary-600 dark:text-primary-400">
              {AppText.WorkedFor}
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Professional experience and collaborations
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-3xl mx-auto mb-20"
        >
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
                <div className="flex-1 bg-white dark:bg-secondary-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-wrap justify-between items-center mb-2">
                    <h4 className="text-lg font-bold text-secondary-900 dark:text-white">
                      {item.position}
                    </h4>
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-secondary-700 px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <h5 className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {item.compnayName}
                  </h5>
                  <p className="text-secondary-600 dark:text-secondary-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Logos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center"
        >
          {CompanyImage.map((item) => (
            <motion.div
              key={item.id}
              className="relative group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-primary-500 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="bg-white dark:bg-secondary-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="h-16 w-auto object-contain filter dark:brightness-90"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-sm font-medium text-secondary-600 dark:text-secondary-400">
                    {item.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Companies;