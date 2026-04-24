import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SiGithub } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { MdDownload, MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';
import { FaLaptopCode, FaBrain, FaGlobe, FaRobot } from 'react-icons/fa';
import profileImage from '../assets/WhatsApp Image 2025-10-29 at 23.07.04.jpeg';
import CONFIG from '../config';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const detailsRef = useRef(null);
  const interestsRef = useRef(null);
  const profileRef = useRef(null);

  // Typing effect for hero
  useEffect(() => {
    const roles = CONFIG.roles;
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingTimeout;

    const roleElement = document.getElementById('typing-role');
    if (!roleElement) return;

    const type = () => {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        roleElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        roleElement.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      typingTimeout = setTimeout(
        type,
        isDeleting ? 50 : charIndex === currentRole.length ? 2000 : 100
      );

      if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => (isDeleting = true), 2000);
        roleIndex = (roleIndex + 1) % roles.length;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
      }
    };

    type();

    return () => clearTimeout(typingTimeout);
  }, []);

  // GSAP Scroll Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(
        '.hero-element',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
        }
      );

      // Profile image float animation
      gsap.to(profileRef.current, {
        y: '+=15',
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // About section animation
      gsap.fromTo(
        '.about-card',
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Skills animation
      gsap.fromTo(
        '.skill-item',
        { opacity: 0, scale: 0, rotation: -180 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.6,
          stagger: 0.08,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Details animation
      gsap.fromTo(
        '.detail-item',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: detailsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Interests animation with 3D flip
      gsap.fromTo(
        '.interest-card',
        { opacity: 0, rotateX: 90, y: 50 },
        {
          opacity: 1,
          rotateX: 0,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: interestsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const skills = {
    languages: ['C++', 'Python', 'JavaScript', 'Java'],
    web: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Node.js'],
    ml: ['Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'TensorFlow'],
    tools: ['Git', 'GitHub', 'VS Code', 'Jupyter', 'Docker'],
  };

  const researchInterests = [
    { icon: FaBrain, title: 'Machine Learning', desc: 'Building intelligent predictive models', color: 'orange' },
    { icon: FaLaptopCode, title: 'Data Analysis', desc: 'Extracting insights from complex datasets', color: 'blue' },
    { icon: FaGlobe, title: 'Web Development', desc: 'Creating responsive modern applications', color: 'green' },
    { icon: FaRobot, title: 'AI Applications', desc: 'Developing real-world AI solutions', color: 'purple' },
  ];

  const colorVariants = {
    orange: {
      bg: 'from-orange-500/10 to-pink-500/10',
      border: 'border-orange-500/30',
      text: 'text-orange-400',
      badge: 'bg-orange-500/20',
    },
    blue: {
      bg: 'from-blue-500/10 to-purple-500/10',
      border: 'border-blue-500/30',
      text: 'text-blue-400',
      badge: 'bg-blue-500/20',
    },
    green: {
      bg: 'from-green-500/10 to-teal-500/10',
      border: 'border-green-500/30',
      text: 'text-green-400',
      badge: 'bg-green-500/20',
    },
    purple: {
      bg: 'from-purple-500/10 to-pink-500/10',
      border: 'border-purple-500/30',
      text: 'text-purple-400',
      badge: 'bg-purple-500/20',
    },
  };

  return (
    <div className="bg-dark-bg min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="hero-element text-accent-orange font-bold tracking-widest text-sm">
                  HELLO, I'M
                </p>
                <h1 className="hero-element text-5xl md:text-7xl font-black text-text-light leading-tight">
                  Pavan Sai
                </h1>
                <div className="hero-element flex items-center gap-2">
                  <span className="text-2xl md:text-3xl text-text-secondary font-light">
                    <span id="typing-role" className="text-accent-orange font-semibold"></span>
                    <span className="animate-pulse text-accent-orange">|</span>
                  </span>
                </div>
                <p className="hero-element text-lg text-text-secondary max-w-lg leading-relaxed">
                  Building impactful projects using AI, Web Development, and Data Science.
                  Passionate about creating scalable solutions that solve real-world problems.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="hero-element flex flex-wrap gap-4">
                <a
                  href="https://github.com/pavanmandapaka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/20 hover:-translate-y-1"
                >
                  <SiGithub size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/pavan-mandapaka/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-6 py-3 bg-[#0A66C2] hover:bg-[#004182] rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1"
                >
                  <FaLinkedin size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="/src/assets/Resume_Placement.pdf"
                  download
                  className="group flex items-center gap-3 px-6 py-3 bg-accent-orange hover:bg-accent-orange-dark rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1"
                >
                  <MdDownload size={20} className="group-hover:animate-bounce" />
                  <span>Resume</span>
                </a>
              </div>
            </div>

            {/* Right - Profile Image */}
            <div className="flex justify-center md:justify-end">
              <motion.div
                ref={profileRef}
                className="relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated rings */}
                <div className="absolute inset-0 rounded-full border-2 border-accent-orange/30 animate-ping" style={{ animationDuration: '3s' }} />
                <div className="absolute inset-4 rounded-full border-2 border-accent-orange/20 animate-ping" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />

                {/* Profile image container */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent-orange shadow-2xl shadow-orange-500/30">
                  <img
                    src={profileImage}
                    alt="Pavan Sai"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    <div className="flex gap-4">
                      <a
                        href={CONFIG.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-accent-orange transition-colors"
                      >
                        <SiGithub size={24} className="text-white" />
                      </a>
                      <a
                        href={CONFIG.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-[#0A66C2] transition-colors"
                      >
                        <FaLinkedin size={24} className="text-white" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-gray-800 px-4 py-2 rounded-full shadow-lg border border-accent-orange/30"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                >
                  <span className="text-accent-orange font-bold text-sm">5+ Projects</span>
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -left-4 bg-gray-800 px-4 py-2 rounded-full shadow-lg border border-accent-orange/30"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <span className="text-accent-orange font-bold text-sm">Open to Work</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section ref={aboutRef} className="py-24 px-6 border-t border-text-secondary/10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-black text-text-light mb-16 text-center"
          >
            About <span className="text-accent-orange">Me</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="about-card md:col-span-2 bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-accent-orange/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10">
              <h3 className="text-2xl font-bold text-text-light mb-4 flex items-center gap-3">
                <span className="w-10 h-1 bg-accent-orange rounded"></span>
                My Journey
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                My coding journey began with curiosity about how things work behind the screen.
                I started with <strong className="text-accent-orange">C++</strong> and fell in love with
                problem-solving, spending countless hours on <strong className="text-accent-orange">DSA</strong>
                challenges that sharpened my logical thinking.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                As my skills grew, so did my ambitions. I ventured into <strong className="text-accent-orange">
                Machine Learning</strong>, fascinated by the idea of teaching machines to learn from data.
                Building my first ML model was a turning point – seeing predictions come to life from raw data
                was magical.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Today, I bridge the gap between <strong className="text-accent-orange">AI/ML</strong> and{' '}
                <strong className="text-accent-orange">Web Development</strong>, building full-stack applications
                that are not just functional but intelligent. My focus is on creating <strong className="text-accent-orange">
                real-world projects</strong> that solve actual problems, not just tutorials.
              </p>
            </div>

            <div className="space-y-6">
              <div className="about-card bg-gradient-to-br from-orange-500/10 to-pink-500/10 rounded-2xl p-6 border border-accent-orange/30">
                <h4 className="text-lg font-bold text-accent-orange mb-2">Education</h4>
                <p className="text-text-light font-semibold">B.Tech CSE</p>
                <p className="text-text-secondary text-sm">Mahindra University</p>
                <p className="text-text-secondary text-sm">Expected 2027</p>
              </div>
              <div className="about-card bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-500/30">
                <h4 className="text-lg font-bold text-blue-400 mb-2">Achievements</h4>
                <ul className="text-text-secondary text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    Hackathon Winner
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    350+ DSA Problems
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    Open Source Contributor
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-24 px-6 border-t border-text-secondary/10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-black text-text-light mb-16 text-center"
          >
            Technical <span className="text-accent-orange">Skills</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Languages */}
            <div className="skill-category bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-accent-orange/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-2">
              <h3 className="text-xl font-bold text-text-light mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-accent-orange rounded"></span>
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="skill-item px-4 py-2 bg-gray-700/50 rounded-lg text-text-secondary font-medium text-sm hover:bg-accent-orange hover:text-white transition-all duration-300 cursor-default"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Web Technologies */}
            <div className="skill-category bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-accent-orange/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-2">
              <h3 className="text-xl font-bold text-text-light mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-blue-500 rounded"></span>
                Web Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.web.map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="skill-item px-4 py-2 bg-gray-700/50 rounded-lg text-text-secondary font-medium text-sm hover:bg-blue-500 hover:text-white transition-all duration-300 cursor-default"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* ML/AI */}
            <div className="skill-category bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-accent-orange/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-2">
              <h3 className="text-xl font-bold text-text-light mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-purple-500 rounded"></span>
                ML / AI
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.ml.map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="skill-item px-4 py-2 bg-gray-700/50 rounded-lg text-text-secondary font-medium text-sm hover:bg-purple-500 hover:text-white transition-all duration-300 cursor-default"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="skill-category bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-accent-orange/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-2">
              <h3 className="text-xl font-bold text-text-light mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-green-500 rounded"></span>
                Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="skill-item px-4 py-2 bg-gray-700/50 rounded-lg text-text-secondary font-medium text-sm hover:bg-green-500 hover:text-white transition-all duration-300 cursor-default"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Details Section */}
      <section ref={detailsRef} className="py-24 px-6 border-t border-text-secondary/10">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-black text-text-light mb-16 text-center"
          >
            Get In <span className="text-accent-orange">Touch</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              className="detail-item bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-accent-orange/50 transition-all duration-300 group"
              whileHover={{ scale: 1.02, x: 10 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent-orange/20 rounded-xl flex items-center justify-center group-hover:bg-accent-orange transition-colors duration-300">
                  <MdPhone size={24} className="text-accent-orange group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary font-bold tracking-widest mb-1">PHONE</p>
                  <a href={`tel:${CONFIG.contact.phone}`} className="text-text-light font-semibold hover:text-accent-orange transition-colors">
                    {CONFIG.contact.phone}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="detail-item bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-accent-orange/50 transition-all duration-300 group"
              whileHover={{ scale: 1.02, x: 10 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                  <MdEmail size={24} className="text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary font-bold tracking-widest mb-1">PERSONAL EMAIL</p>
                  <a href={`mailto:${CONFIG.social.email}`} className="text-text-light font-semibold hover:text-blue-400 transition-colors">
                    {CONFIG.social.email}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="detail-item bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-accent-orange/50 transition-all duration-300 group"
              whileHover={{ scale: 1.02, x: 10 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center group-hover:bg-purple-500 transition-colors duration-300">
                  <MdEmail size={24} className="text-purple-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary font-bold tracking-widest mb-1">COLLEGE EMAIL</p>
                  <a href={`mailto:${CONFIG.social.collegeEmail}`} className="text-text-light font-semibold hover:text-purple-400 transition-colors">
                    {CONFIG.social.collegeEmail}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="detail-item bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-accent-orange/50 transition-all duration-300 group"
              whileHover={{ scale: 1.02, x: 10 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                  <MdLocationOn size={24} className="text-green-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs text-text-secondary font-bold tracking-widest mb-1">LOCATION</p>
                  <p className="text-text-light font-semibold">{CONFIG.contact.location}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="detail-item flex justify-center gap-6 mt-12">
            <a
              href={CONFIG.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-accent-orange/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-2"
            >
              <SiGithub size={32} className="text-text-secondary group-hover:text-accent-orange transition-colors" />
              <span className="text-xs text-text-secondary font-bold tracking-widest group-hover:text-accent-orange">GitHub</span>
            </a>
            <a
              href={CONFIG.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-6 bg-gray-800/50 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-2"
            >
              <FaLinkedin size={32} className="text-text-secondary group-hover:text-blue-400 transition-colors" />
              <span className="text-xs text-text-secondary font-bold tracking-widest group-hover:text-blue-400">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Research Interests Section */}
      <section ref={interestsRef} className="py-24 px-6 border-t border-text-secondary/10">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-black text-text-light mb-16 text-center"
          >
            Research <span className="text-accent-orange">Interests</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchInterests.map((interest, i) => {
              const IconComponent = interest.icon;
              const color = colorVariants[interest.color];

              return (
                <motion.div
                  key={interest.title}
                  className={`interest-card bg-gradient-to-br ${color.bg} rounded-2xl p-6 border ${color.border} transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group cursor-pointer`}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 10,
                    boxShadow: `0 20px 40px ${interest.color === 'orange' ? 'rgba(255, 140, 0, 0.2)' : interest.color === 'blue' ? 'rgba(59, 130, 246, 0.2)' : interest.color === 'green' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(168, 85, 247, 0.2)'}`
                  }}
                  style={{ perspective: '1000px' }}
                >
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-gray-800/50 group-hover:bg-gray-700/50 transition-colors duration-300 ${color.badge}`}>
                    <IconComponent size={28} className={color.text} />
                  </div>
                  <h3 className="text-lg font-bold text-text-light mb-2">{interest.title}</h3>
                  <p className="text-text-secondary text-sm">{interest.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
