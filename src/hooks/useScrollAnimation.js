import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const {
      duration = 0.8,
      delay = 0,
      fromVars = { opacity: 0, y: 50 },
      toVars = { opacity: 1, y: 0 },
      trigger = ref.current,
      start = 'top 80%',
      end = 'top 50%',
      ...restOptions
    } = options;

    gsap.fromTo(
      ref.current,
      fromVars,
      {
        ...toVars,
        duration,
        delay,
        scrollTrigger: {
          trigger,
          start,
          end,
          scrub: false,
          ...restOptions,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [options]);

  return ref;
};

export default useScrollAnimation;
