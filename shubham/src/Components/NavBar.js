import React, { useState, useCallback, useMemo } from "react";
import { logo } from "./../assets";
import { Link } from "react-scroll";
import "./NavBar.css";

// Pre-compute classes outside component to avoid recreation
const baseNavClasses = "fixed w-full z-50 will-change-transform contain-layout";
const scrolledClasses = "bg-white/80 dark:bg-secondary-900/80 backdrop-blur-md shadow-lg";
const menuButtonClasses = "md:hidden inline-flex items-center justify-center p-2 rounded-md text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 focus:outline-none active:scale-95 will-change-transform";
const menuItemClasses = "cursor-pointer px-3 py-2 text-sm font-medium text-secondary-600 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 will-change-transform";
const mobileMenuItemClasses = "cursor-pointer block px-3 py-2 rounded-md text-base font-medium text-secondary-600 hover:text-primary-600 hover:bg-primary-50 dark:text-secondary-300 dark:hover:text-primary-400 dark:hover:bg-secondary-800 active:scale-98 will-change-transform";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Memoize menu items
  const menuItems = useMemo(() => [
    { title: "Home", to: "home" },
    { title: "About", to: "aboutme" },
    { title: "Skills", to: "skills" },
    { title: "Experience", to: "companies" },
    { title: "Contact", to: "contact" },
  ], []);

  // Ultra-optimized scroll handler using Intersection Observer instead of scroll events
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      { threshold: [1], rootMargin: "-50px 0px 0px 0px" }
    );

    // Create a sentinel element at the top of the page
    const sentinel = document.createElement('div');
    sentinel.style.cssText = 'position:absolute;top:0;height:1px;width:100%;pointer-events:none;';
    document.body.prepend(sentinel);
    observer.observe(sentinel);

    return () => {
      observer.disconnect();
      sentinel.remove();
    };
  }, []);

  const toggleMenu = useCallback((e) => {
    e.preventDefault();
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback((e) => {
    e.preventDefault();
    setIsOpen(false);
  }, []);

  // Pre-compute styles
  const navStyle = {
    transform: `translateZ(0)`, // Force GPU acceleration
    contain: 'layout style paint', // CSS containment for better performance
    transition: 'background-color 0.05s, box-shadow 0.05s'
  };

  const buttonStyle = {
    transform: 'translateZ(0)',
    transition: 'transform 0.05s',
    touchAction: 'manipulation' // Optimize for touch devices
  };

  const linkStyle = {
    transform: 'translateZ(0)',
    transition: 'color 0.05s',
    touchAction: 'manipulation'
  };

  return (
    <nav 
      className={`${baseNavClasses} ${scrolled ? scrolledClasses : ''}`}
      style={navStyle}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 contain-layout">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 contain-layout">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-12 w-auto"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block contain-layout">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={100}
                  className={menuItemClasses}
                  style={linkStyle}
                  onClick={(e) => e.target.blur()} // Remove focus state immediately
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button - Using native button for better performance */}
          <button
            onClick={toggleMenu}
            className={menuButtonClasses}
            style={buttonStyle}
            aria-expanded={isOpen}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              className="block h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu - Using CSS transform instead of height for better performance */}
      <div 
        className={`md:hidden bg-white dark:bg-secondary-900 shadow-lg overflow-hidden contain-layout`}
        style={{
          transform: `translateY(${isOpen ? '0' : '-100%'})`,
          transition: 'transform 0.1s ease-out',
          visibility: isOpen ? 'visible' : 'hidden',
          position: 'absolute',
          width: '100%'
        }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={100}
              onClick={closeMenu}
              className={mobileMenuItemClasses}
              style={linkStyle}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

// Use React.memo with custom comparison to prevent unnecessary re-renders
export default React.memo(NavBar, (prevProps, nextProps) => true);
