'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const [currentTime, setCurrentTime] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home', command: 'cd ~/', section: 'home' },
    { name: 'About', href: '#about', command: 'cat about.txt', section: 'about' },
    { name: 'Projects', href: '#projects', command: 'ls projects/', section: 'projects' },
    { name: 'Skills', href: '#skills', command: 'cat skills.json', section: 'skills' },
    { name: 'Contact', href: '#contact', command: 'ping contact', section: 'contact' }
  ];

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }));
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);
    
    return () => clearInterval(timeInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      
      // Get all sections
      const heroSection = document.querySelector('[data-section="hero"]');
      const aboutSection = document.querySelector('[data-section="about"]');
      const projectsSection = document.querySelector('[data-section="projects"]');
      const skillsSection = document.querySelector('[data-section="skills"]');
      const contactSection = document.querySelector('[data-section="contact"]');
      
      const scrollY = window.scrollY;
      let currentSection = 'home';
      
      // Check each section from bottom to top
      if (contactSection) {
        const contactRect = contactSection.getBoundingClientRect();
        const contactTop = contactRect.top + scrollY;
        if (scrollY >= contactTop - 300) {
          currentSection = 'contact';
        }
      }
      
      if (skillsSection && currentSection === 'home') {
        const skillsRect = skillsSection.getBoundingClientRect();
        const skillsTop = skillsRect.top + scrollY;
        if (scrollY >= skillsTop - 300) {
          currentSection = 'skills';
        }
      }
      
      if (projectsSection && currentSection === 'home') {
        const projectsRect = projectsSection.getBoundingClientRect();
        const projectsTop = projectsRect.top + scrollY;
        if (scrollY >= projectsTop - 300) {
          currentSection = 'projects';
        }
      }
      
      if (aboutSection && currentSection === 'home') {
        const aboutRect = aboutSection.getBoundingClientRect();
        const aboutTop = aboutRect.top + scrollY;
        if (scrollY >= aboutTop - 300) {
          currentSection = 'about';
        }
      }
      
      if (heroSection && currentSection === 'home') {
        const heroRect = heroSection.getBoundingClientRect();
        const heroTop = heroRect.top + scrollY;
        const heroHeight = heroRect.height;
        if (scrollY >= heroTop && scrollY < heroTop + heroHeight - 300) {
          currentSection = 'home';
        }
      }
      
      setActiveSection(currentSection);
    };

    // Add scroll listener with a small delay to ensure sections are rendered
    const timer = setTimeout(() => {
      handleScroll();
      window.addEventListener('scroll', handleScroll);
    }, 100);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const targetSection = sectionId === 'home' ? 'hero' : sectionId;
    const element = document.querySelector(`[data-section="${targetSection}"]`);
    
    if (element) {
      const headerHeight = 80; // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    setIsMenuOpen(false); // Close mobile menu if open
  };

  // Check if we're at the home section (either root path or scrolled to top)
  const isHomeActive = pathname === '/' || activeSection === 'home';

  const headerVariants: Variants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  const menuVariants: Variants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] }
    }
  };

  const itemVariants: Variants = {
    closed: { opacity: 0, x: -20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 }
    })
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      className={`fixed top-0 left-0 right-0 z-50 font-mono transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-lg border-b border-green-400/20' 
          : 'bg-black/80'
      }`}
    >
      {/* Terminal Window Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Terminal Window Controls & Logo */}
          <div className="flex items-center gap-4">
            {/* Terminal Controls */}
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm hidden sm:block">portfolio.sh</span>
            </div>

            {/* Logo/Brand */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center text-black font-bold text-sm">
                AB
              </div>
              <span className="text-green-400 font-bold text-lg hidden sm:block">
                baloch.dev
              </span>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.section;
              return (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.section)}
                  className={`group relative px-4 py-2 transition-all duration-300 ${
                    isActive 
                      ? 'text-green-400' 
                      : 'text-gray-300 hover:text-green-400'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <span className="relative z-10">{item.name}</span>
                  
                  {/* Active/Hover background */}
                  <motion.div
                    className={`absolute inset-0 rounded border ${
                      isActive
                        ? 'bg-green-400/20 border-green-400/30'
                        : 'border-green-400/20 opacity-0 group-hover:opacity-100 bg-green-400/10'
                    }`}
                    initial={false}
                    transition={{ duration: 0.2 }}
                  />
                  
                  {/* Terminal command tooltip */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-green-400 text-xs px-2 py-1 rounded border border-green-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    $ {item.command}
                  </div>
                </motion.button>
              );
            })}
          </nav>

          {/* Right Side - Time & Menu Button */}
          <div className="flex items-center gap-4">
            {/* Time Display */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="hidden md:flex items-center gap-2 text-green-400 text-sm"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span>{currentTime}</span>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 bg-gray-900/50 border border-green-400/30 rounded-lg flex items-center justify-center text-green-400 hover:border-green-400 transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? '×' : '≡'}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden border-t border-green-400/20 bg-black/95 overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.section;
                  return (
                    <motion.button
                      key={item.name}
                      custom={index}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      onClick={() => scrollToSection(item.section)}
                      className={`flex items-center justify-between px-4 py-3 transition-all duration-300 border-l-2 w-full text-left ${
                        isActive
                          ? 'text-green-400 bg-green-400/5 border-green-400'
                          : 'text-gray-300 hover:text-green-400 hover:bg-green-400/5 border-transparent hover:border-green-400'
                      }`}
                    >
                      <span>{item.name}</span>
                      <span className="text-xs text-green-400/60">$ {item.command}</span>
                    </motion.button>
                  );
                })}
                
                {/* Mobile Time Display */}
                <motion.div
                  custom={navItems.length}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="flex items-center justify-between px-4 py-3 border-t border-green-400/20 mt-4"
                >
                  <span className="text-gray-400 text-sm">System Time</span>
                  <span className="text-green-400 text-sm">{currentTime}</span>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Terminal Command Line Effect */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        transition={{ delay: 1.2, duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"
      />
    </motion.header>
  );
};

export default Header;