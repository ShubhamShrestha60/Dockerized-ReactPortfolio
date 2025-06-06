import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { AppText } from '../Constants';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.user_name.trim()) {
      newErrors.user_name = 'Name is required';
    }
    if (!formData.user_email.trim()) {
      newErrors.user_email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.user_email)) {
      newErrors.user_email = 'Email is invalid';
    }
    if (formData.phone && !/^[\d\s+()-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        const serviceId = 'service_x1giu3u';
        const templateId = 'template_hv9lea9';
        const publicKey = 'AAtOZHMygRBXBZipV';

        await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
        
        setSubmitStatus('success');
        setFormData({
          user_name: '',
          user_email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } catch (error) {
        console.error('Email error:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-secondary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-secondary-900 dark:text-white mb-4">
            {AppText.Contact}
            <span className="text-primary-600 dark:text-primary-400 ml-2">
              {AppText.Us}
            </span>
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            Have a question or want to work together? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-secondary-50 dark:bg-secondary-800 border ${
                    errors.user_name 
                      ? 'border-red-500 dark:border-red-400' 
                      : 'border-secondary-200 dark:border-secondary-700'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400`}
                  placeholder="Your name"
                />
                {errors.user_name && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.user_name}</p>
                )}
              </div>

              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-secondary-50 dark:bg-secondary-800 border ${
                    errors.user_email 
                      ? 'border-red-500 dark:border-red-400' 
                      : 'border-secondary-200 dark:border-secondary-700'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400`}
                  placeholder="your.email@example.com"
                />
                {errors.user_email && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.user_email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                  Phone Number (Highly Recommended)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-secondary-50 dark:bg-secondary-800 border ${
                    errors.phone 
                      ? 'border-red-500 dark:border-red-400' 
                      : 'border-secondary-200 dark:border-secondary-700'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400`}
                  placeholder="Your phone number"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-secondary-50 dark:bg-secondary-800 border ${
                    errors.subject 
                      ? 'border-red-500 dark:border-red-400' 
                      : 'border-secondary-200 dark:border-secondary-700'
                  } focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400`}
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.subject}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className={`w-full px-4 py-3 rounded-lg bg-secondary-50 dark:bg-secondary-800 border ${
                  errors.message 
                    ? 'border-red-500 dark:border-red-400' 
                    : 'border-secondary-200 dark:border-secondary-700'
                } focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400`}
                placeholder="Your message..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500 dark:text-red-400">{errors.message}</p>
              )}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 rounded-lg bg-primary-600 text-white font-medium transition-all duration-300 
                  ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-primary-700 transform hover:scale-105'}
                  focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-secondary-900`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    Send Message
                    <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                )}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-green-500 dark:text-green-400"
              >
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-red-500 dark:text-red-400"
              >
                Oops! Something went wrong. Please try again later.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;