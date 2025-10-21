import { useState } from 'react';

/**
 * GlassCard - Premium Glassmorphism Card
 * Ultra-modern glass effect with dark theme
 */
const GlassCard = ({
  title = "Premium Feature",
  description = "Experience the future of design with our cutting-edge glassmorphism effects",
  icon = "✨",
  stats = [
    { label: "Users", value: "10K+" },
    { label: "Rating", value: "4.9" },
    { label: "Reviews", value: "2.5K" }
  ],
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative w-full max-w-md ${className}`}
    >
      {/* Animated Background Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-3xl opacity-0 group-hover:opacity-75 blur-3xl transition-all duration-700" />
      
      {/* Main Card */}
      <div className={`
        relative rounded-3xl overflow-hidden
        transition-all duration-700 ease-out
        ${isHovered ? 'scale-105 shadow-2xl' : 'scale-100'}
      `}>
        {/* Glass Background - Dark */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-2xl" />
        
        {/* Border */}
        <div className="absolute inset-0 rounded-3xl border border-white/10" />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20" />
        
        {/* Animated Mesh Gradient - Warm Colors */}
        <div 
          className="absolute inset-0 opacity-20 transition-opacity duration-700"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(251, 191, 36, 0.3), transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(249, 115, 22, 0.3), transparent 50%),
              radial-gradient(circle at 40% 20%, rgba(239, 68, 68, 0.3), transparent 50%)
            `,
            filter: isHovered ? 'blur(40px)' : 'blur(60px)'
          }}
        />

        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
        }} />

        {/* Content */}
        <div className="relative p-8 z-10">
          {/* Icon */}
          <div className={`
            inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6
            bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 backdrop-blur-xl
            border border-white/20 shadow-2xl shadow-orange-500/50
            transition-all duration-500
            ${isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}
          `}>
            <span className="text-3xl filter drop-shadow-lg">{icon}</span>
          </div>

          {/* Title */}
          <h3 className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-orange-200 to-red-200 mb-3 transition-all duration-300 group-hover:scale-105">
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 mb-6 leading-relaxed text-sm transition-all duration-300 group-hover:text-gray-300">
            {description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-3 rounded-xl bg-black/40 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:border-orange-500/30"
              >
                <div className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-orange-400 mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white font-bold hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 relative overflow-hidden group/btn">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
            <span className="relative z-10 tracking-wide">LEARN MORE</span>
          </button>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 5}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};

export default GlassCard;
