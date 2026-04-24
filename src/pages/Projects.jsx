import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SiGithub } from 'react-icons/si';
import { MdOpenInNew, MdCode, MdDataUsage, MdSmartToy, MdAttachMoney } from 'react-icons/md';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const headerRef = useRef(null);
  const projectsRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'Smart Expense Splitter',
      description:
        'A smart expense management system that splits expenses among users efficiently and tracks balances. Features intelligent bill splitting, real-time balance tracking, and an intuitive UI for managing group expenses.',
      features: [
        'Add and manage expenses',
        'Intelligent bill splitting',
        'Track who owes whom',
        'Clean, intuitive UI',
        'Real-time balance updates',
      ],
      techStack: ['React', 'JavaScript', 'CSS', 'Node.js'],
      category: 'web',
      featured: true,
      github: 'https://github.com/pavanmandapaka/Divido-.git',
      liveDemo: null,
      color: '#ff8c00',
      icon: MdAttachMoney,
    },
    {
      id: 2,
      title: 'Customer Churn Analysis',
      description:
        'A machine learning project to predict customer churn using classification models. Includes data preprocessing, feature engineering, and model training with Logistic Regression and Random Forest.',
      features: [
        'Data preprocessing & cleaning',
        'Feature engineering (15+ features)',
        'Multiple ML models comparison',
        'Accuracy metrics visualization',
        'Predictive analytics dashboard',
      ],
      techStack: ['Python', 'Pandas', 'Scikit-learn', 'NumPy', 'Matplotlib'],
      category: 'ml',
      featured: true,
      github: 'https://github.com/pavanmandapaka/Customer-Churn-LTV-Analysis.git',
      liveDemo: null,
      color: '#ff1493',
      icon: MdDataUsage,
    },
    {
      id: 3,
      title: 'AI Code Explainer Extension',
      description:
        'A browser extension that uses AI to explain code snippets in simple terms. Helps developers understand complex codebases quickly by providing contextual explanations.',
      features: [
        'AI-powered code analysis',
        'Multi-language support',
        'Inline explanations',
        'Browser integration',
      ],
      techStack: ['JavaScript', 'Python', 'TensorFlow', 'Chrome API'],
      category: 'ai',
      featured: false,
      github: 'https://github.com/pavanmandapaka',
      liveDemo: null,
      color: '#8b5cf6',
      icon: MdSmartToy,
    },
    {
      id: 4,
      title: 'OCR Text Detection',
      description:
        'An optical character recognition system that extracts text from images with high accuracy. Built for document digitization and automated text extraction.',
      features: [
        'Image preprocessing',
        'Text localization',
        'Character recognition',
        'Multi-language support',
      ],
      techStack: ['Python', 'OpenCV', 'Tesseract', 'NumPy'],
      category: 'ai',
      featured: false,
      github: 'https://github.com/pavanmandapaka',
      liveDemo: null,
      color: '#10b981',
      icon: MdSmartToy,
    },
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'web', label: 'Web' },
    { id: 'ml', label: 'ML' },
    { id: 'ai', label: 'AI' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const otherProjects = filteredProjects.filter((p) => !p.featured);

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        '.header-element',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
        }
      );

      // Filter buttons animation
      gsap.fromTo(
        '.filter-btn',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          delay: 0.5,
        }
      );

      // Featured projects animation
      gsap.fromTo(
        '.featured-project',
        { opacity: 0, x: (i) => (i % 2 === 0 ? -100 : 100) },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.featured-section',
            start: 'top 75%',
          },
        }
      );

      // Other projects animation
      gsap.fromTo(
        '.project-card',
        { opacity: 0, y: 80, rotateX: 20 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 75%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <div className="bg-dark-bg min-h-screen">
      {/* Hero Header */}
      <section ref={headerRef} className="min-h-[60vh] flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="header-element mb-6"
          >
            <span className="px-4 py-2 bg-accent-orange/20 rounded-full text-accent-orange font-bold text-sm tracking-widest">
              PORTFOLIO
            </span>
          </motion.div>

          <h1 className="header-element text-5xl md:text-7xl font-black text-text-light mb-6 leading-tight">
            Featured <span className="text-accent-orange">Work</span>
          </h1>

          <p className="header-element text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Here are some projects I've built combining full-stack development,
            machine learning, and AI to solve real-world problems.
          </p>

          {/* Filter Buttons */}
          <div className="header-element flex flex-wrap justify-center gap-4 mt-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`filter-btn px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-accent-orange text-white shadow-lg shadow-orange-500/30 scale-105'
                    : 'bg-gray-800 text-text-secondary hover:bg-gray-700 hover:text-text-light'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Featured Projects */}
          <div className="featured-section">
            {featuredProjects.length > 0 && (
              <>
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-3xl font-black text-text-light mb-12 flex items-center gap-4"
                >
                  <span className="w-12 h-1 bg-accent-orange rounded"></span>
                  Featured Projects
                </motion.h2>

                <div className="grid gap-12 mb-20">
                  <AnimatePresence mode="wait">
                    {featuredProjects.map((project, index) => (
                      <FeaturedProjectCard key={project.id} project={project} index={index} />
                    ))}
                  </AnimatePresence>
                </div>
              </>
            )}
          </div>

          {/* Other Projects */}
          {otherProjects.length > 0 && (
            <div className="other-section">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl font-black text-text-light mb-12 flex items-center gap-4"
              >
                <span className="w-12 h-1 bg-gray-600 rounded"></span>
                Other Projects
              </motion.h2>

              <div className="projects-grid grid md:grid-cols-2 gap-8">
                <AnimatePresence mode="wait">
                  {otherProjects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                  ))}
                </AnimatePresence>
              </div>
            </div>
          )}

          {featuredProjects.length === 0 && otherProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <p className="text-text-secondary text-xl">No projects found for this filter.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 border-t border-text-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-black text-text-light mb-6"
          >
            Want to Collaborate?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-text-secondary mb-10"
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <a
              href="mailto:pavansaimandapaka@gmail.com"
              className="group flex items-center gap-3 px-8 py-4 bg-accent-orange hover:bg-accent-orange-dark rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-1"
            >
              <MdOpenInNew size={20} className="group-hover:rotate-45 transition-transform" />
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/pavan-mandapaka/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-[#0A66C2] hover:bg-[#004182] rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1"
            >
              <SiGithub size={20} className="group-hover:rotate-12 transition-transform" />
              Connect on LinkedIn
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

// Featured Project Card Component
const FeaturedProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const IconComponent = project.icon;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: 15 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
          },
        }
      );

      // Floating animation for the visual side
      gsap.to(cardRef.current?.querySelector('.floating-icon'), {
        y: '+=20',
        rotation: 360,
        duration: 10,
        repeat: -1,
        ease: 'sine.inOut',
      });
    });

    return () => ctx.revert();
  }, [index]);

  return (
    <motion.div
      ref={cardRef}
      className="featured-project relative group"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="relative overflow-hidden rounded-3xl border-2 transition-all duration-500 hover:shadow-2xl"
        style={{
          borderColor: `${project.color}40`,
          background: `linear-gradient(135deg, ${project.color}10 0%, transparent 100%)`,
        }}
      >
        {/* Featured Badge */}
        <div className="absolute top-6 right-6 z-10">
          <span
            className="px-4 py-2 rounded-full text-xs font-black tracking-widest"
            style={{
              backgroundColor: project.color,
              color: '#fff',
              boxShadow: `0 4px 20px ${project.color}60`,
            }}
          >
            FEATURED
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Content */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            {/* Icon & Title */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                style={{
                  backgroundColor: `${project.color}20`,
                  border: `2px solid ${project.color}`,
                }}
              >
                <IconComponent size={28} style={{ color: project.color }} />
              </div>
              <span
                className="px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
                style={{
                  backgroundColor: `${project.color}20`,
                  color: project.color,
                }}
              >
                {project.category}
              </span>
            </div>

            <h3 className="text-3xl font-black text-text-light mb-4 group-hover:text-accent-orange transition-colors">
              {project.title}
            </h3>

            <p className="text-text-secondary leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Features List */}
            <div className="mb-8">
              <h4 className="text-sm font-bold text-text-secondary tracking-widest mb-4">
                KEY FEATURES
              </h4>
              <ul className="space-y-2">
                {project.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-text-secondary group hover:text-text-light transition-colors"
                  >
                    <span
                      className="w-2 h-2 rounded-full mt-2 flex-shrink-0 transition-transform group-hover:scale-150"
                      style={{ backgroundColor: project.color }}
                    ></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="mb-8">
              <h4 className="text-sm font-bold text-text-secondary tracking-widest mb-4">
                TECH STACK
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <motion.span
                    key={i}
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default"
                    style={{
                      backgroundColor: `${project.color}15`,
                      color: project.color,
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{
                  backgroundColor: project.color,
                  color: '#fff',
                  boxShadow: `0 4px 15px ${project.color}40`,
                }}
              >
                <SiGithub size={18} className="group-hover:rotate-12 transition-transform" />
                <span>View on GitHub</span>
              </a>
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-6 py-3 rounded-lg font-bold border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    borderColor: project.color,
                    color: project.color,
                  }}
                >
                  <MdOpenInNew size={18} className="group-hover:rotate-45 transition-transform" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Visual */}
          <div
            className="relative min-h-64 md:min-h-full flex items-center justify-center p-8 overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${project.color}20 0%, ${project.color}05 100%)`,
            }}
          >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full opacity-10"
                  style={{
                    backgroundColor: project.color,
                    width: `${Math.random() * 200 + 50}px`,
                    height: `${Math.random() * 200 + 50}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.1, 0.3, 0.1],
                    x: [0, Math.random() * 50 - 25],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>

            {/* Center Icon Display */}
            <motion.div
              className="floating-icon relative z-10"
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <div
                className="w-40 h-40 rounded-full flex items-center justify-center border-4 backdrop-blur-sm"
                style={{
                  borderColor: `${project.color}40`,
                  backgroundColor: `${project.color}10`,
                  boxShadow: `0 0 60px ${project.color}30`,
                }}
              >
                <IconComponent size={64} style={{ color: project.color }} />
              </div>
            </motion.div>

            {/* Corner decorations */}
            <div className="absolute top-4 left-4 w-20 h-20 border-l-2 border-t-2 rounded-tl-3xl opacity-30" style={{ borderColor: project.color }} />
            <div className="absolute bottom-4 right-4 w-20 h-20 border-r-2 border-b-2 rounded-br-3xl opacity-30" style={{ borderColor: project.color }} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Regular Project Card Component
const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const IconComponent = project.icon;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, scale: 0.8, rotate: -5 },
        {
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
          },
        }
      );

      // Hover animation
      const card = cardRef.current;
      const handleMouseEnter = () => {
        gsap.to(card, {
          borderColor: project.color,
          duration: 0.3,
        });
      };
      const handleMouseLeave = () => {
        gsap.to(card, {
          borderColor: `${project.color}30`,
          duration: 0.3,
        });
      };

      card?.addEventListener('mouseenter', handleMouseEnter);
      card?.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        card?.removeEventListener('mouseenter', handleMouseEnter);
        card?.removeEventListener('mouseleave', handleMouseLeave);
      };
    });

    return () => ctx.revert();
  }, [index, project.color]);

  return (
    <motion.div
      ref={cardRef}
      className="project-card group"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="h-full p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl"
        style={{
          backgroundColor: `${project.color}08`,
          borderColor: `${project.color}30`,
        }}
      >
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg"
          style={{
            backgroundColor: `${project.color}20`,
            border: `2px solid ${project.color}`,
            boxShadow: `0 0 20px ${project.color}20`,
          }}
        >
          <IconComponent size={24} style={{ color: project.color }} />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-text-light mb-3 group-hover:text-accent-orange transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 cursor-default"
              style={{
                backgroundColor: `${project.color}15`,
                color: project.color,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* GitHub Link */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-2 text-sm font-bold transition-all duration-300 hover:gap-3"
          style={{ color: project.color }}
        >
          <SiGithub size={16} className="group-hover/link:rotate-12 transition-transform" />
          <span>View on GitHub</span>
        </a>
      </div>
    </motion.div>
  );
};

export default Projects;
