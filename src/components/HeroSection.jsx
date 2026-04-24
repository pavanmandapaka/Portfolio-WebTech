import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const HeroSection = ({ profileImage }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create a timeline for the hero animations
    const tl = gsap.timeline();

    // Animate background gradient
    tl.to(containerRef.current, {
      backgroundPosition: '200% center',
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.4 },
    },
  };

  return (
    <motion.section
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white pt-32 pb-20 px-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div variants={containerVariants} className="space-y-8">
          <motion.div variants={itemVariants}>
            <p className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
              Welcome to my portfolio
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mt-4 text-gray-900 leading-tight">
              Hi, I'm{' '}
              <span className="gradient-text">Pavan Mandapaka</span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
              Full Stack Developer & MLOps Enthusiast
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              I craft beautiful, performant web experiences and build intelligent
              systems. Passionate about open source and creating solutions that
              matter.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="pt-4 space-y-3"
          >
            <div>
              <p className="text-sm font-semibold text-gray-500 mb-2">
                Areas of Interest
              </p>
              <p className="text-gray-700">
                MLOps Engineering • GenAI & Intelligent Applications • Open Source
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 pt-4"
          >
            <a
              href="/projects"
              className="btn-primary"
            >
              View My Work
            </a>
            <a
              href="https://github.com/pavanmandapaka"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              GitHub
            </a>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={imageVariants}
          className="flex justify-center md:justify-end"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <img
              src={profileImage}
              alt="Pavan Mandapaka"
              className="profile-image relative z-10"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14 L12 21 M12 21 L5 14 M12 21 L12 3"
          />
        </svg>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
