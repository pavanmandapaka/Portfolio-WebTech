import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { MdLocationOn, MdPhone } from 'react-icons/md';
import CONFIG from '../config';

const Footer = () => {
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: CONFIG.social.github,
      icon: SiGithub,
      color: '#181717',
      label: 'GitHub Profile',
    },
    {
      name: 'LinkedIn',
      url: CONFIG.social.linkedin,
      icon: FaLinkedin,
      color: '#0A66C2',
      label: 'LinkedIn Profile',
    },
    {
      name: 'Email',
      url: `mailto:${CONFIG.social.email}`,
      icon: FaEnvelope,
      color: '#EA4335',
      label: 'Send Email',
    },
  ];

  const quickLinks = [
    { to: '/#', label: 'Home' },
    { to: '/#about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/#contact', label: 'Contact' },
  ];

  useEffect(() => {
    gsap.fromTo(
      footerRef.current?.querySelectorAll('.footer-element'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
      }
    );
  }, []);

  return (
    <motion.footer
      ref={footerRef}
      className="w-full bg-dark-bg border-t border-text-secondary/10 py-16 mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4 footer-element">
            <h4 className="text-3xl font-black text-text-light">
              Pavan<span className="text-accent-orange">.</span>
            </h4>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
              Aspiring Software Engineer passionate about building intelligent
              systems and beautiful web experiences. Always learning, always building.
            </p>

            {/* Contact Info */}
            <div className="pt-4 space-y-3">
              <a
                href={`tel:${CONFIG.contact.phone}`}
                className="flex items-center gap-3 text-text-secondary hover:text-accent-orange transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-accent-orange/20 transition-colors">
                  <MdPhone size={16} className="group-hover:text-accent-orange" />
                </div>
                <span className="text-sm font-medium">{CONFIG.contact.phone}</span>
              </a>
              <a
                href={`mailto:${CONFIG.social.email}`}
                className="flex items-center gap-3 text-text-secondary hover:text-accent-orange transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center group-hover:bg-accent-orange/20 transition-colors">
                  <FaEnvelope size={16} className="group-hover:text-accent-orange" />
                </div>
                <span className="text-sm font-medium">{CONFIG.social.email}</span>
              </a>
              <div className="flex items-center gap-3 text-text-secondary">
                <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center">
                  <MdLocationOn size={16} className="text-accent-orange" />
                </div>
                <span className="text-sm font-medium">Hyderabad, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-element">
            <h4 className="text-xs font-bold text-text-secondary tracking-widest mb-6">
              NAVIGATE
            </h4>
            <div className="space-y-3">
              {quickLinks.map((link, i) => (
                <motion.a
                  key={link.to}
                  href={link.to}
                  className="block text-text-light font-medium hover:text-accent-orange transition-colors group"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-element">
            <h4 className="text-xs font-bold text-text-secondary tracking-widest mb-6">
              CONNECT
            </h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, i) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.label}
                  >
                    {/* Background */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-lg"
                      style={{
                        backgroundColor: `${social.color}15`,
                        border: `2px solid ${social.color}30`,
                      }}
                    >
                      {/* Fill animation */}
                      <motion.div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                        style={{ backgroundColor: social.color }}
                        initial={false}
                        transition={{ duration: 0.3 }}
                      />

                      {/* Icon */}
                      <IconComponent
                        size={20}
                        className="relative z-10 transition-colors duration-300 group-hover:text-white"
                        style={{ color: social.color }}
                      />
                    </div>

                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-800 text-text-light text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                      {social.label}
                      {/* Arrow */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45" />
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-text-secondary/10 mb-8 footer-element" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 footer-element">
          <p className="text-text-secondary text-sm">
            © {currentYear} Pavan Sai Mandapaka. All rights reserved.
          </p>
          <p className="text-text-secondary text-xs flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent-orange rounded-full animate-pulse" />
            Built with React, GSAP & Tailwind CSS
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
