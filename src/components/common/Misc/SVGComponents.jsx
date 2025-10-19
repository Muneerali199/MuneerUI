import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export const Logo = () => {
  const svgRef = useRef(null);
  const iconRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const svgEl = svgRef.current;
    const iconEl = iconRef.current;
    const glowEl = glowRef.current;
    if (!svgEl || !iconEl) return;

    gsap.set(iconEl, { transformOrigin: 'center center' });
    gsap.set(glowEl, { transformOrigin: 'center center' });

    // Continuous subtle pulse animation
    gsap.to(glowEl, {
      scale: 1.2,
      opacity: 0.4,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    const handleEnter = () => {
      gsap.to(iconEl, { 
        rotation: 360, 
        scale: 1.15, 
        duration: 1.2, 
        ease: 'back.out(1.4)'
      });
      gsap.to(glowEl, {
        scale: 1.5,
        opacity: 0.8,
        duration: 0.6,
        ease: 'power2.out'
      });
    };

    const handleLeave = () => {
      gsap.to(iconEl, { 
        rotation: 0, 
        scale: 1, 
        duration: 0.8, 
        ease: 'power3.out'
      });
    };

    svgEl.addEventListener('mouseenter', handleEnter);
    svgEl.addEventListener('mouseleave', handleLeave);

    return () => {
      svgEl.removeEventListener('mouseenter', handleEnter);
      svgEl.removeEventListener('mouseleave', handleLeave);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <svg
      ref={svgRef}
      width="160"
      height="45"
      viewBox="0 0 160 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: 'pointer' }}
    >
      {/* Glow effect */}
      <g ref={glowRef} opacity="0.3">
        <circle cx="22.5" cy="22.5" r="18" fill="url(#glowGradient)" filter="url(#glow)" />
      </g>

      {/* Main icon group */}
      <g ref={iconRef}>
        {/* Outer ring */}
        <circle 
          cx="22.5" 
          cy="22.5" 
          r="14" 
          stroke="url(#ringGradient)" 
          strokeWidth="2.5" 
          fill="none"
          opacity="0.6"
        />
        
        {/* Inner geometric shape - Abstract M */}
        <path
          d="M15 28 L15 17 L22.5 24 L30 17 L30 28 M22.5 11 L22.5 24"
          stroke="url(#iconGradient)"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Accent dots */}
        <circle cx="22.5" cy="11" r="2.5" fill="url(#accentGradient)" />
        <circle cx="15" cy="17" r="1.8" fill="url(#accentGradient)" opacity="0.8" />
        <circle cx="30" cy="17" r="1.8" fill="url(#accentGradient)" opacity="0.8" />
        
        {/* Dynamic elements - orbiting particles */}
        <circle cx="22.5" cy="8" r="1.5" fill="#fbbf24" opacity="0.9">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 22.5 22.5"
            to="360 22.5 22.5"
            dur="8s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="36" cy="22.5" r="1.2" fill="#f59e0b" opacity="0.8">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 22.5 22.5"
            to="360 22.5 22.5"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
      
      {/* Text */}
      <g>
        <text 
          x="48" 
          y="21" 
          fontFamily="'Bricolage Grotesque', 'Inter', sans-serif" 
          fontSize="18" 
          fontWeight="800" 
          fill="url(#textGradient)"
          letterSpacing="-0.5"
        >
          MuneerUI
        </text>
        <text 
          x="48" 
          y="33" 
          fontFamily="'Figtree', 'Inter', sans-serif" 
          fontSize="8.5" 
          fontWeight="500" 
          fill="#a78bfa" 
          opacity="0.85"
          letterSpacing="1"
        >
          BY MUNEER ALI
        </text>
      </g>
      
      {/* Gradients and Effects */}
      <defs>
        {/* Glow effect */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        {/* Gradients */}
        <linearGradient id="glowGradient" x1="4.5" y1="4.5" x2="40.5" y2="40.5" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>

        <linearGradient id="ringGradient" x1="8.5" y1="8.5" x2="36.5" y2="36.5" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="50%" stopColor="#764ba2" />
          <stop offset="100%" stopColor="#667eea" />
        </linearGradient>

        <linearGradient id="iconGradient" x1="15" y1="11" x2="30" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="50%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>

        <linearGradient id="accentGradient" x1="0" y1="0" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#f59e0b" />
        </linearGradient>

        <linearGradient id="textGradient" x1="48" y1="13" x2="130" y2="21" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#e0e7ff" />
          <stop offset="100%" stopColor="#c7d2fe" />
        </linearGradient>
      </defs>
    </svg>
  );
};
