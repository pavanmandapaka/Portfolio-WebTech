import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loading screen after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  const textArray = ['L', 'o', 'a', 'd', 'i', 'n', 'g'];
  const totalLetters = textArray.length;
  const anglePerLetter = 360 / totalLetters;

  return (
    <motion.div
      className="fixed inset-0 bg-dark-bg flex items-center justify-center z-[9999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* 3D Rotating Container */}
      <div
        className="w-40 h-40 relative"
        style={{
          transformStyle: 'preserve-3d',
          perspective: '1000px',
        }}
      >
        {/* Rotating Cylinder */}
        <motion.div
          className="w-full h-full relative"
          style={{
            transformStyle: 'preserve-3d',
          }}
          animate={{ rotateX: 360 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Individual Letters in Circular Formation */}
          {textArray.map((letter, index) => {
            const angle = (index / totalLetters) * 360;
            const x = Math.cos((angle * Math.PI) / 180) * 60;
            const z = Math.sin((angle * Math.PI) / 180) * 60;

            return (
              <motion.div
                key={index}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 flex items-center justify-center"
                style={{
                  transform: `translateZ(${z}px) translateX(${x}px) translateY(-50%)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                <motion.span
                  className="text-5xl font-black text-accent-orange"
                  style={{
                    textShadow: `0 0 20px ${letter === 'L' ? '#ff8c00' : 'rgba(255, 140, 0, 0.6)'}`,
                  }}
                  animate={{
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: (index / totalLetters) * 0.5,
                    repeat: Infinity,
                  }}
                >
                  {letter}
                </motion.span>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Center Glowing Dot */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent-orange"
          style={{
            boxShadow: '0 0 20px #ff8c00, 0 0 40px #ff9500',
          }}
          animate={{
            boxShadow: [
              '0 0 20px #ff8c00, 0 0 40px #ff9500',
              '0 0 40px #ff8c00, 0 0 80px #ff9500',
              '0 0 20px #ff8c00, 0 0 40px #ff9500',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>

      {/* Subtitle */}
      <motion.p
        className="absolute bottom-32 text-text-secondary text-lg font-bold tracking-widest"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        Initializing Portfolio...
      </motion.p>

      {/* Background animated gradient */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle, #ff8c00 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />
    </motion.div>
  );
};

export default LoadingScreen;
