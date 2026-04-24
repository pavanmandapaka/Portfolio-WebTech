import { motion } from 'framer-motion';
import {
  SiReact,
  SiFastapi,
  SiPostgresql,
  SiTailwindcss,
  SiPython,
  SiPandas,
  SiJavascript,
  SiNodedotjs,
  SiFlask,
  SiGit,
  SiDocker,
  SiGooglecloud,
  SiFigma,
  SiNumpy,
  SiGithub,
} from 'react-icons/si';
import { FaPython, FaDatabase, FaChartLine, FaLinkedin, FaAws, FaJava } from 'react-icons/fa';
import { MdDataArray } from 'react-icons/md';

const techStackMap = {
  React: { icon: SiReact, color: '#61DAFB', name: 'React' },
  FastAPI: { icon: SiFastapi, color: '#009688', name: 'FastAPI' },
  PostgreSQL: { icon: SiPostgresql, color: '#336791', name: 'PostgreSQL' },
  AWS: { icon: FaAws, color: '#FF9900', name: 'AWS' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4', name: 'Tailwind' },
  Razorpay: { icon: SiNodedotjs, color: '#02042B', name: 'Razorpay' },
  Python: { icon: SiPython, color: '#3776AB', name: 'Python' },
  pandas: { icon: SiPandas, color: '#150458', name: 'Pandas' },
  Pandas: { icon: SiPandas, color: '#150458', name: 'Pandas' },
  'scikit-learn': { icon: FaPython, color: '#F7931E', name: 'scikit-learn' },
  Streamlit: { icon: SiNodedotjs, color: '#FF2B2B', name: 'Streamlit' },
  Plotly: { icon: FaChartLine, color: '#3F4F75', name: 'Plotly' },
  JavaScript: { icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript' },
  Java: { icon: FaJava, color: '#007396', name: 'Java' },
  'Node.js': { icon: SiNodedotjs, color: '#339933', name: 'Node.js' },
  Flask: { icon: SiFlask, color: '#000000', name: 'Flask' },
  'Material-UI': { icon: MdDataArray, color: '#007FFF', name: 'Material-UI' },
  Git: { icon: SiGit, color: '#F1502F', name: 'Git' },
  Docker: { icon: SiDocker, color: '#2496ED', name: 'Docker' },
  GCP: { icon: SiGooglecloud, color: '#4285F4', name: 'GCP' },
  Figma: { icon: SiFigma, color: '#F24E1E', name: 'Figma' },
  NumPy: { icon: SiNumpy, color: '#013243', name: 'NumPy' },
  Matplotlib: { icon: FaChartLine, color: '#11557C', name: 'Matplotlib' },
  SARIMA: { icon: SiPython, color: '#3776AB', name: 'SARIMA' },
  GitHub: { icon: SiGithub, color: '#181717', name: 'GitHub' },
  LinkedIn: { icon: FaLinkedin, color: '#0A66C2', name: 'LinkedIn' },
};

const TechStackIcon = ({ tech, size = 40 }) => {
  const techInfo = techStackMap[tech] || { icon: SiReact, color: '#999999', name: tech };
  const IconComponent = techInfo.icon;

  return (
    <motion.div
      className="relative group"
      whileHover={{ scale: 1.15, rotateZ: 5 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      {/* Icon Container */}
      <div
        className="flex items-center justify-center p-3 rounded-lg bg-gradient-to-br from-beige to-beige/80 border-2 border-text-dark/10 group-hover:border-text-dark/30 transition-all duration-300 shadow-md group-hover:shadow-lg"
        style={{
          backgroundColor: `${techInfo.color}15`,
          borderColor: `${techInfo.color}40`,
        }}
      >
        <IconComponent size={size} color={techInfo.color} />
      </div>

      {/* Tooltip */}
      <motion.div
        className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1.5 bg-text-dark text-beige text-xs font-bold rounded-md whitespace-nowrap pointer-events-none"
        initial={{ opacity: 0, y: 4 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {techInfo.name}
      </motion.div>

      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 rounded-lg blur-lg pointer-events-none"
        style={{
          backgroundColor: techInfo.color,
          opacity: 0,
        }}
        whileHover={{ opacity: 0.15 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default TechStackIcon;
