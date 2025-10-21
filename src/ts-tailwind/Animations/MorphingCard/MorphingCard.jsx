import { useState, useRef } from 'react';

/**
 * MorphingCard - Premium 3D Morphing Card Animation
 * Ultra-modern card with smooth morphing effects and dark theme
 */
const MorphingCard = ({
  title = "Premium Feature",
  description = "Experience the next level of design",
  icon = "✨",
  gradient = "from-amber-500 via-orange-500 to-red-500",
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 25;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 25;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={`group relative w-80 h-96 perspective-1000 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Glow */}
      <div 
        className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${gradient} opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-75 group-hover:scale-110`}
      />
      
      {/* Main Card */}
      <div
        className="relative w-full h-full rounded-3xl overflow-hidden transition-all duration-700 ease-out bg-black border border-white/10"
        style={{
          transform: isHovered 
            ? `rotateX(${-mousePosition.y}deg) rotateY(${mousePosition.x}deg) scale(1.05)` 
            : 'rotateX(0deg) rotateY(0deg) scale(1)',
          transformStyle: 'preserve-3d',
          boxShadow: isHovered ? '0 25px 50px -12px rgba(0, 0, 0, 0.8)' : '0 10px 25px -5px rgba(0, 0, 0, 0.5)'
        }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 via-black to-zinc-900/50" />
        
        {/* Animated Accent Gradient */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 transition-opacity duration-700 group-hover:opacity-20`}
        />
        
        {/* Shimmer Effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
          style={{
            background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)`,
            backgroundSize: '200% 200%',
            animation: isHovered ? 'shimmer 2s infinite' : 'none'
          }}
        />

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
        }} />
        
        {/* Content */}
        <div className="relative h-full flex flex-col items-center justify-center p-8 text-white z-10">
          {/* Icon with Floating Animation */}
          <div 
            className="text-7xl mb-6 transition-all duration-700 filter drop-shadow-2xl"
            style={{
              animation: isHovered ? 'float 3s ease-in-out infinite' : 'none',
              transform: isHovered ? 'scale(1.2) rotate(12deg)' : 'scale(1) rotate(0deg)'
            }}
          >
            {icon}
          </div>
          
          {/* Title */}
          <h3 className={`text-3xl font-black mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r ${gradient} transition-all duration-500 group-hover:scale-110`}>
            {title}
          </h3>
          
          {/* Description */}
          <p className="text-center text-gray-400 text-sm leading-relaxed opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:text-gray-300">
            {description}
          </p>
          
          {/* Animated Button */}
          <button className={`mt-8 px-8 py-3 rounded-full bg-gradient-to-r ${gradient} relative overflow-hidden group/btn transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
            <span className="relative font-bold text-sm tracking-wide">EXPLORE MORE</span>
          </button>
        </div>
        
        {/* Corner Accents */}
        <div className={`absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-gradient-to-br ${gradient} rounded-tr-3xl transition-all duration-500 opacity-30 group-hover:w-20 group-hover:h-20 group-hover:opacity-60`} style={{borderImage: `linear-gradient(to bottom right, currentColor, transparent) 1`}} />
        <div className={`absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-gradient-to-br ${gradient} rounded-bl-3xl transition-all duration-500 opacity-30 group-hover:w-20 group-hover:h-20 group-hover:opacity-60`} style={{borderImage: `linear-gradient(to top left, currentColor, transparent) 1`}} />
        
        {/* Glowing Dots */}
        {isHovered && (
          <>
            <div className={`absolute top-8 left-8 w-2 h-2 rounded-full bg-gradient-to-r ${gradient} animate-pulse`} />
            <div className={`absolute bottom-8 right-8 w-2 h-2 rounded-full bg-gradient-to-r ${gradient} animate-pulse`} style={{animationDelay: '0.5s'}} />
          </>
        )}
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default MorphingCard;
