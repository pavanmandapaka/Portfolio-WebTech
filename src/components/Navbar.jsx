import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP animation for nav items
  useEffect(() => {
    gsap.fromTo(
      '.nav-item',
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      }
    );
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/#about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-bg/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-dark-bg/50 backdrop-blur-sm'
      }`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'power3.out' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05, rotate: 5 }}
          >
            <a href="/#" className="text-2xl font-black text-text-light">
              Pavan<span className="text-accent-orange">.</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.div key={link.to} className="nav-item">
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `relative text-sm font-bold tracking-wider transition-all duration-300 ${
                      isActive
                        ? 'text-accent-orange'
                        : 'text-text-secondary hover:text-text-light'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <motion.span
                        className="absolute -bottom-2 left-0 h-0.5 bg-accent-orange"
                        initial={{ width: 0 }}
                        animate={{ width: isActive ? '100%' : '0%' }}
                        transition={{ duration: 0.3 }}
                      />
                    </>
                  )}
                </NavLink>
              </motion.div>
            ))}

            {/* Resume Button */}
            <motion.a
              href="/src/assets/Resume_Placement.pdf"
              download
              className="nav-item px-5 py-2.5 bg-accent-orange hover:bg-accent-orange-dark text-white font-bold text-sm rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-0.5"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Resume
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-text-light"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}
          initial={false}
          animate={{ height: isMobileMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-4">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <NavLink
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block text-base font-bold transition-colors ${
                      isActive ? 'text-accent-orange' : 'text-text-secondary hover:text-text-light'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
            <motion.a
              href="/src/assets/Resume_Placement.pdf"
              download
              className="block px-5 py-2.5 bg-accent-orange text-white font-bold text-sm rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
