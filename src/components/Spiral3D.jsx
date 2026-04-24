import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Spiral3D = ({ colors = ['#ff5a3d', '#ff1493', '#d4a574', '#1a1a1a'], delay = 0 }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const spirals = svgRef.current.querySelectorAll('circle, path');
    
    gsap.fromTo(
      spirals,
      { opacity: 0, scale: 0 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: delay,
        ease: 'back.out',
        stagger: 0.1,
      }
    );

    // Rotation animation
    gsap.to(svgRef.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none',
      transformOrigin: '50% 50%',
    });
  }, [delay]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 200 200"
      className="w-32 h-32 md:w-48 md:h-48"
      style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.1))' }}
    >
      {/* Outer spiral ring */}
      <circle
        cx="100"
        cy="100"
        r="90"
        fill="none"
        stroke={colors[0]}
        strokeWidth="12"
        opacity="0.9"
        style={{
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))',
        }}
      />
      {/* Middle spiral ring */}
      <circle
        cx="100"
        cy="100"
        r="65"
        fill="none"
        stroke={colors[1]}
        strokeWidth="10"
        opacity="0.85"
        style={{
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))',
        }}
      />
      {/* Inner spiral ring */}
      <circle
        cx="100"
        cy="100"
        r="40"
        fill="none"
        stroke={colors[2]}
        strokeWidth="8"
        opacity="0.8"
        style={{
          filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))',
        }}
      />
      {/* Center accent */}
      <circle
        cx="100"
        cy="100"
        r="12"
        fill={colors[3]}
        opacity="0.9"
      />
    </svg>
  );
};

export default Spiral3D;
