import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      gsap.to(imageRef.current, {
        scale: 1.1,
        duration: 0.6,
        ease: 'power2.out',
      });

      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(imageRef.current, {
        scale: 1,
        duration: 0.6,
        ease: 'power2.out',
      });

      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="project-card bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer group"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8 }}
    >
      <div className="relative w-full h-64 bg-gradient-to-br from-blue-100 to-blue-50 overflow-hidden">
        {project.image ? (
          <>
            <img
              ref={imageRef}
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div
              ref={overlayRef}
              className="absolute inset-0 bg-blue-600/20 backdrop-blur-sm opacity-0"
            />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">
                {project.title.split(' ')[0]}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies?.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="skill-badge text-xs px-3 py-1"
            >
              {tech}
            </span>
          ))}
          {project.technologies?.length > 3 && (
            <span className="text-xs text-gray-500 px-3 py-1">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block btn-primary text-sm"
        >
          View on GitHub →
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
