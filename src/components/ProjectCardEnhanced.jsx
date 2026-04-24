import React from 'react';
import { motion } from 'framer-motion';
import TechStackIcon from './TechStackIcon';
import { SiGithub } from 'react-icons/si';
import { MdPayments, MdElectricBolt, MdAnalytics } from 'react-icons/md';

const ProjectCard = ({ project, index }) => {
  const colors = ['#ff8c00', '#ff9500', '#ff8c00'];
  const projectColor = colors[index % colors.length];

  const projectIcons = {
    1: { icon: MdPayments, label: 'Fintech', category: 'Full Stack' },
    2: { icon: MdElectricBolt, label: 'MLOps', category: 'Data Science' },
    3: { icon: MdAnalytics, label: 'Analytics', category: 'ML Pipeline' },
  };

  return (
    <div className="group relative">
      {/* Main Card Container */}
      <motion.div
        className="relative cursor-pointer"
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, type: 'spring', stiffness: 300, damping: 30 }}
      >
        {/* Left Content - Title & Info */}
        <div className="space-y-6">
          {/* Project Visual Banner */}
          <motion.div
            className="mb-8 relative h-48 rounded-2xl overflow-hidden group/banner"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Background Gradient */}
            <motion.div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(135deg, ${projectColor}20, ${projectColor}05)`,
                borderLeft: `6px solid ${projectColor}`,
              }}
              whileHover={{
                backgroundImage: `linear-gradient(135deg, ${projectColor}40, ${projectColor}15)`,
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Project Icon Display */}
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center gap-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Large Icon */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                className="relative"
              >
                <motion.div
                  className="w-20 h-20 flex items-center justify-center rounded-full"
                  style={{
                    background: `${projectColor}20`,
                    border: `2px solid ${projectColor}`,
                  }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  {React.createElement(projectIcons[project.id].icon, {
                    size: 40,
                    color: projectColor,
                  })}
                </motion.div>
              </motion.div>

              {/* Project Type Tags */}
              <motion.div
                className="flex gap-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.3 }}
              >
                <span
                  className="text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest"
                  style={{ backgroundColor: `${projectColor}25`, color: projectColor }}
                >
                  {projectIcons[project.id].label}
                </span>
                <span
                  className="text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: `${projectColor}10`, color: projectColor }}
                >
                  {projectIcons[project.id].category}
                </span>
              </motion.div>
            </motion.div>

            {/* Border Animation */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{ border: `2px solid ${projectColor}50` }}
              animate={{
                boxShadow: [
                  `inset 0 0 20px ${projectColor}10`,
                  `inset 0 0 40px ${projectColor}20`,
                  `inset 0 0 20px ${projectColor}10`,
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          {/* Project Number & Title */}
          <motion.div className="space-y-3">
            <motion.p
              className="text-xs font-bold text-text-secondary tracking-widest"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {String(index + 1).padStart(2, '0')} / PROJECT
            </motion.p>

            {/* Animated Title with Premium Styling */}
            <motion.h3
              className="text-4xl md:text-5xl font-black text-text-light relative overflow-hidden"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              <motion.span
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {project.title}
              </motion.span>

              {/* Underline animation on hover */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 bg-gradient-to-r"
                style={{
                  backgroundImage: `linear-gradient(to right, ${projectColor}, transparent)`,
                }}
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.4 }}
              />
            </motion.h3>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg text-text-secondary leading-relaxed max-w-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {project.description}
          </motion.p>

          {/* Tech Stack with Icons */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.25 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-bold text-text-secondary tracking-widest">
              TECH STACK
            </p>
            <motion.div
              className="flex flex-wrap gap-3"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.3,
                  },
                },
              }}
              viewport={{ once: true }}
            >
              {project.technologies.map((tech, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <TechStackIcon tech={tech} size={24} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* GitHub Link */}
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-orange text-text-light font-bold hover:bg-accent-orange-dark transition group/link"
            whileHover={{ scale: 1.05, x: 4 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
            viewport={{ once: true }}
          >
            <SiGithub size={20} />
            <span>View on GitHub</span>
          </motion.a>
        </div>

        {/* Right Side - Hover Card with Creative Animation */}
        <motion.div
          className="absolute left-0 top-0 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"
          initial={{ opacity: 0, x: -40, y: -40 }}
          whileHover={{
            opacity: 1,
            x: 'calc(100% + 60px)',
            y: 0,
          }}
          transition={{
            duration: 0.4,
            type: 'spring',
            stiffness: 200,
            damping: 20,
          }}
        >
          {/* Creative Card */}
          <motion.div
            className="relative overflow-hidden rounded-2xl shadow-2xl w-72 h-80"
            style={{ backgroundColor: `${projectColor}15` }}
            whileHover={{ rotateY: 5, rotateX: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Card Border Gradient */}
            <div
              className="absolute inset-0 rounded-2xl p-0.5 pointer-events-none"
              style={{
                background: `linear-gradient(135deg, ${projectColor}40, ${projectColor}10, ${projectColor}30)`,
              }}
            >
              <div className="absolute inset-0.5 rounded-2xl bg-beige" />
            </div>

            {/* Main Content */}
            <motion.div
              className="relative h-full flex flex-col items-center justify-center p-8 text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Premium Project Type Badge */}
              <motion.div
                className="mb-6 flex flex-col items-center gap-3"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Animated Icon Badge */}
                <motion.div
                  className="relative w-24 h-24 flex items-center justify-center rounded-full"
                  style={{
                    background: `linear-gradient(135deg, ${projectColor}30, ${projectColor}10)`,
                    border: `3px solid ${projectColor}`,
                    boxShadow: `0 0 30px ${projectColor}40`,
                  }}
                  animate={{
                    boxShadow: [`0 0 20px ${projectColor}30`, `0 0 40px ${projectColor}60`, `0 0 20px ${projectColor}30`],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {/* Icon */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    className="absolute"
                  >
                    {React.createElement(projectIcons[project.id].icon, {
                      size: 48,
                      color: projectColor,
                    })}
                  </motion.div>

                  {/* Pulse Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2"
                    style={{ borderColor: projectColor }}
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Category Label */}
                <motion.div className="text-center">
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: projectColor }}>
                    {projectIcons[project.id].label}
                  </p>
                  <p className="text-xs text-text-dark/50 font-semibold">
                    {projectIcons[project.id].category}
                  </p>
                </motion.div>
              </motion.div>

              {/* Project Name in Card */}
              <h4 className="text-xl font-black text-text-dark mb-4">
                {project.title}
              </h4>

              {/* Visual Tech Stack Grid */}
              <motion.div className="grid grid-cols-3 gap-2 w-full">
                {project.technologies.slice(0, 6).map((tech, i) => (
                  <motion.div
                    key={i}
                    className="text-xs"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <TechStackIcon tech={tech} size={20} />
                  </motion.div>
                ))}
              </motion.div>

              {/* View More Indicator */}
              <motion.div
                className="absolute bottom-4 text-xs font-bold text-text-dark/60 tracking-widest"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ↗ VIEW PROJECT
              </motion.div>

              {/* Spotlight Effect */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(600px at 50% 50%, ${projectColor}20, transparent)`,
                }}
              />
            </motion.div>

            {/* Animated Border */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                border: `2px solid ${projectColor}`,
                opacity: 0.5,
              }}
              animate={{ boxShadow: [`0 0 20px ${projectColor}40`, `0 0 40px ${projectColor}60`, `0 0 20px ${projectColor}40`] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
