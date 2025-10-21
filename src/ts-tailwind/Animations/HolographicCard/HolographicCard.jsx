import { useState, useRef } from 'react';

/**
 * HolographicCard - Premium Holographic Card Effect
 * Interactive card with holographic shine and 3D tilt - Dark Theme
 */
const HolographicCard = ({
  title = "Premium Card",
  description = "Hover to see the magic",
  image,
  className = ""
}) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -20;
    const rotateY = ((x - centerX) / centerX) * 20;
    
    setRotation({ x: rotateX, y: rotateY });
    setGlarePosition({ 
      x: (x / rect.width) * 100, 
      y: (y / rect.height) * 100 
    });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setGlarePosition({ x: 50, y: 50 });
    setIsHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative w-80 h-96 perspective-1000 group ${className}`}
    >
      <div
        className="relative w-full h-full rounded-3xl transition-all duration-500 ease-out transform-style-3d"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) ${isHovered ? 'scale(1.05)' : 'scale(1)'}`
        }}
      >
        {/* Card Base - Pure Black */}
        <div className="absolute inset-0 rounded-3xl bg-black border border-white/10 overflow-hidden shadow-2xl">
          {/* Holographic Layer - Warm Colors */}
          <div 
            className="absolute inset-0 opacity-70 mix-blend-screen transition-opacity duration-300"
            style={{
              background: `
                radial-gradient(
                  circle at ${glarePosition.x}% ${glarePosition.y}%,
                  rgba(255, 255, 255, 0.9),
                  rgba(255, 200, 0, 0.6) 15%,
                  rgba(255, 100, 0, 0.5) 30%,
                  rgba(255, 50, 100, 0.4) 50%,
                  rgba(200, 0, 255, 0.3) 70%,
                  transparent 100%
                )
              `
            }}
          />

          {/* Rainbow Gradient Overlay - Warm Spectrum */}
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              background: `
                linear-gradient(
                  ${glarePosition.x * 3.6}deg,
                  #ff0080,
                  #ff8c00,
                  #ffd700,
                  #ff6347,
                  #ff0080
                )
              `,
              backgroundSize: '200% 200%'
            }}
          />

          {/* Noise Texture */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
          }} />

          {/* Sparkle Effect */}
          <div className="absolute inset-0">
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-sparkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  opacity: Math.random() * 0.7 + 0.3,
                  boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)'
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-between p-8">
            {/* Top Section */}
            <div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 flex items-center justify-center mb-4 shadow-2xl shadow-orange-500/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h3 className="text-3xl font-black text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-orange-200 to-red-200 transition-all duration-500 group-hover:scale-105">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed transition-all duration-500 group-hover:text-gray-300">{description}</p>
            </div>

            {/* Bottom Section */}
            <div>
              <div className="flex items-center justify-between bg-white/5 backdrop-blur-sm rounded-xl p-3 border border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 animate-pulse shadow-lg shadow-orange-500/50" />
                  <span className="text-sm text-gray-300 font-semibold">Active</span>
                </div>
                <div className="text-sm font-mono text-gray-400 bg-black/30 px-3 py-1 rounded-lg">
                  #{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}
                </div>
              </div>
            </div>
          </div>

          {/* Shine Effect */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: `
                linear-gradient(
                  ${glarePosition.x * 3.6}deg,
                  transparent 40%,
                  rgba(255, 255, 255, 0.15) 50%,
                  transparent 60%
                )
              `
            }}
          />

          {/* Edge Glow */}
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
            boxShadow: `inset 0 0 60px rgba(255, 200, 0, 0.3)`
          }} />
        </div>

        {/* Outer Glow Effect */}
        <div 
          className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-2xl"
          style={{
            background: `
              radial-gradient(
                circle at ${glarePosition.x}% ${glarePosition.y}%,
                rgba(255, 150, 0, 0.6),
                rgba(255, 100, 100, 0.4),
                transparent
              )
            `
          }}
        />
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }
        
        .animate-sparkle {
          animation: sparkle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HolographicCard;
