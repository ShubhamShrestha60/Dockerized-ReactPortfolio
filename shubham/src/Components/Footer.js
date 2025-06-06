import React from 'react';
import { motion } from 'framer-motion';
import { AppText, socialNetwork } from '../Constants';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-secondary-900 py-12">
      <div className="container">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <div className="flex gap-6">
            {socialNetwork.map((item) => (
              <motion.a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="absolute inset-0 bg-primary-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <img
                  src={item.logo}
                  alt={item.name}
                  className="w-8 h-8 object-contain transition-transform duration-300 "
                />
                <span className="sr-only">{item.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-secondary-600 dark:text-secondary-400 text-sm">
              {AppText.copywriteText}
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;