import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

/**
 * Enhanced Interactive Button Component
 * Features GSAP hover effects with smooth animations
 */
const EnhancedButton = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
  download = false,
  icon: Icon = null,
  ...props
}) => {
  const buttonRef = useRef(null);
  const rippleRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    // Hover effect
    const handleMouseEnter = () => {
      gsap.to(button, {
        y: -4,
        boxShadow: '0 20px 40px rgba(255, 140, 0, 0.3)',
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        y: 0,
        boxShadow: '0 0px 0px rgba(255, 140, 0, 0)',
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    // Ripple effect on click
    const handleClick = (e) => {
      if (rippleRef.current) {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        rippleRef.current.appendChild(ripple);

        // Animate ripple
        gsap.fromTo(
          ripple,
          { scale: 0, opacity: 0.8 },
          {
            scale: 4,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out',
            onComplete: () => ripple.remove(),
          }
        );
      }

      onClick?.(e);
    };

    button.addEventListener('mouseenter', handleMouseEnter);
    button.addEventListener('mouseleave', handleMouseLeave);
    button.addEventListener('click', handleClick);

    return () => {
      button.removeEventListener('mouseenter', handleMouseEnter);
      button.removeEventListener('mouseleave', handleMouseLeave);
      button.removeEventListener('click', handleClick);
    };
  }, [onClick]);

  const baseStyles =
    'inline-flex items-center gap-2 font-semibold transition-all duration-300 relative overflow-hidden';

  const variants = {
    primary: 'bg-accent-orange hover:bg-accent-orange-dark text-text-light',
    secondary: 'border-2 border-accent-orange text-accent-orange hover:bg-accent-orange/10',
    outline: 'border-2 border-text-secondary text-text-secondary hover:text-text-light hover:border-accent-orange',
    ghost: 'text-text-secondary hover:text-accent-orange',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const Component = href ? 'a' : 'button';

  const componentProps = href
    ? {
        href,
        target: external ? '_blank' : undefined,
        rel: external ? 'noopener noreferrer' : undefined,
        download,
      }
    : {};

  return (
    <Component
      ref={buttonRef}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} rounded-lg`}
      {...componentProps}
      {...props}
    >
      <div ref={rippleRef} className="ripple-container absolute inset-0" />
      {Icon && <Icon size={20} className="transition-transform group-hover:rotate-12" />}
      <span>{children}</span>
    </Component>
  );
};

export default EnhancedButton;
