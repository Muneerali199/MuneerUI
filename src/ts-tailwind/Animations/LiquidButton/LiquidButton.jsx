import { useState, useRef, useEffect } from 'react';

/**
 * LiquidButton - Premium Liquid Morphing Button
 * Smooth liquid animation with blob effects - Dark Theme
 */
const LiquidButton = ({
  children = "Click Me",
  variant = "primary",
  size = "md",
  onClick,
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState([]);
  const buttonRef = useRef(null);

  const variants = {
    primary: "from-amber-500 via-orange-500 to-red-500",
    success: "from-emerald-500 to-green-600",
    danger: "from-red-500 to-rose-600",
    gold: "from-yellow-400 via-amber-500 to-orange-500",
    premium: "from-amber-500 via-orange-600 to-red-600"
  };

  const sizes = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
    xl: "px-12 py-5 text-xl"
  };

  const handleClick = (e) => {
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = {
      x,
      y,
      id: Date.now()
    };
    
    setRipples([...ripples, newRipple]);
    
    setTimeout(() => {
      setRipples(ripples => ripples.filter(r => r.id !== newRipple.id));
    }, 1000);
    
    onClick?.();
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative overflow-hidden rounded-full font-black
        ${sizes[size]}
        transition-all duration-500 ease-out
        transform hover:scale-110 active:scale-95
        shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)]
        ${className}
      `}
    >
      {/* Animated Gradient Background */}
      <div 
        className={`absolute inset-0 bg-gradient-to-r ${variants[variant]} transition-all duration-500`}
        style={{
          transform: isHovered ? 'scale(1.2)' : 'scale(1)',
          filter: isHovered ? 'blur(8px)' : 'blur(0px)'
        }}
      />
      
      {/* Inner Shadow for Depth */}
      <div className="absolute inset-0 rounded-full" style={{boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.4)'}} />
      
      {/* Noise Texture */}
      <div className="absolute inset-0 rounded-full opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
      }} />
      
      {/* Liquid Blob Effect */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-50"
        style={{ filter: 'url(#goo)' }}
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" 
              result="goo" 
            />
          </filter>
        </defs>
        
        {/* Animated Blobs */}
        <circle 
          cx="30%" 
          cy="50%" 
          r={isHovered ? "45" : "25"}
          fill="rgba(255,255,255,0.35)"
          className="transition-all duration-700"
        >
          <animate
            attributeName="cx"
            values="30%;70%;30%"
            dur="4s"
            repeatCount="indefinite"
          />
        </circle>
        
        <circle 
          cx="70%" 
          cy="50%" 
          r={isHovered ? "40" : "20"}
          fill="rgba(255,255,255,0.25)"
          className="transition-all duration-700"
        >
          <animate
            attributeName="cx"
            values="70%;30%;70%"
            dur="5s"
            repeatCount="indefinite"
          />
        </circle>
        
        <circle 
          cx="50%" 
          cy="30%" 
          r={isHovered ? "30" : "15"}
          fill="rgba(255,255,255,0.2)"
          className="transition-all duration-700"
        >
          <animate
            attributeName="cy"
            values="30%;70%;30%"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
      
      {/* Ripple Effects */}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0
          }}
        />
      ))}
      
      {/* Shine Effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full transition-transform duration-1000"
        style={{
          transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)'
        }}
      />
      
      {/* Glow Effect */}
      <div 
        className={`absolute -inset-1 rounded-full bg-gradient-to-r ${variants[variant]} blur-2xl opacity-0 transition-opacity duration-500 -z-10`}
        style={{ opacity: isHovered ? 0.7 : 0 }}
      />
      
      {/* Text Content */}
      <span className="relative z-10 text-white font-black tracking-wider drop-shadow-lg">
        {children}
      </span>

      <style jsx>{`
        @keyframes ripple {
          to {
            width: 500px;
            height: 500px;
            opacity: 0;
            transform: translate(-50%, -50%);
          }
        }
        
        .animate-ripple {
          animation: ripple 1s ease-out;
        }
      `}</style>
    </button>
  );
};

export default LiquidButton;
