import { useRef, useState } from 'react';

/**
 * MagneticButton - Premium Magnetic Button Effect
 * Button that follows mouse movement with smooth magnetic attraction
 */
const MagneticButton = ({
  children = "Magnetic Button",
  variant = "primary",
  size = "md",
  onClick,
  className = ""
}) => {
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const variants = {
    primary: "from-amber-500 via-orange-500 to-red-500",
    secondary: "from-zinc-700 to-zinc-900",
    success: "from-emerald-500 to-green-600",
    danger: "from-red-500 to-rose-600",
    gold: "from-yellow-400 via-amber-500 to-orange-500"
  };

  const sizes = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-base",
    lg: "px-10 py-4 text-lg",
    xl: "px-12 py-5 text-xl"
  };

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const distance = Math.sqrt(x * x + y * y);
    const maxDistance = 100;

    if (distance < maxDistance) {
      const strength = 1 - distance / maxDistance;
      setPosition({
        x: x * strength * 0.3,
        y: y * strength * 0.3
      });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      className="inline-block"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <button
        ref={buttonRef}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        className={`
          relative rounded-full font-bold text-white shadow-2xl
          ${sizes[size]}
          transition-all duration-300 ease-out
          ${className}
        `}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${isHovered ? 1.05 : 1})`
        }}
      >
        {/* Background Gradient */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${variants[variant]} transition-all duration-300`} />
        
        {/* Inner Shadow for Depth */}
        <div className="absolute inset-0 rounded-full" style={{boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)'}} />
        
        {/* Glow Effect */}
        <div 
          className={`absolute -inset-2 rounded-full bg-gradient-to-r ${variants[variant]} blur-2xl opacity-0 transition-opacity duration-300`}
          style={{ opacity: isHovered ? 0.8 : 0 }}
        />
        
        {/* Shine Effect */}
        <div 
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{
            background: `radial-gradient(circle at ${50 + position.x}% ${50 + position.y}%, rgba(255,255,255,0.4), transparent 50%)`,
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 0.3s'
          }}
        />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 rounded-full opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
        }} />
        
        {/* Ripple on Hover */}
        {isHovered && (
          <>
            <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-ping" />
            <div className="absolute inset-0 rounded-full border border-white/30" style={{animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'}} />
          </>
        )}
        
        {/* Content */}
        <span className="relative z-10 flex items-center gap-2 tracking-wide font-black">
          {children}
        </span>
      </button>
    </div>
  );
};

export default MagneticButton;
