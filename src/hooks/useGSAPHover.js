import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Hook for GSAP hover effects on elements
 * Provides smooth, interactive hover animations with 3D transforms
 */
export const useGSAPHover = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;
    const {
      scaleOnHover = 1.05,
      shadowIntensity = 30,
      duration = 0.4,
      rotation = 0,
      brightness = 1.1,
    } = options;

    // Mouse enter animation
    const handleMouseEnter = () => {
      gsap.to(element, {
        scale: scaleOnHover,
        filter: `brightness(${brightness}) drop-shadow(0 ${shadowIntensity}px ${shadowIntensity * 0.7}px rgba(255, 140, 0, 0.3))`,
        rotationY: rotation,
        duration,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    // Mouse leave animation
    const handleMouseLeave = () => {
      gsap.to(element, {
        scale: 1,
        filter: 'brightness(1) drop-shadow(0 0px 0px rgba(255, 140, 0, 0))',
        rotationY: 0,
        duration,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [options]);

  return ref;
};

export default useGSAPHover;
