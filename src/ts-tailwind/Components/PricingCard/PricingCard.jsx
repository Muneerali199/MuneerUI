import { useState } from 'react';

/**
 * PricingCard - Premium Pricing Card Component
 * Modern pricing card with dark theme and premium feel
 */
const PricingCard = ({
  plan = "Pro",
  price = "49",
  period = "month",
  features = [
    "Unlimited Projects",
    "Priority Support",
    "Advanced Analytics",
    "Custom Domain",
    "Team Collaboration"
  ],
  highlighted = false,
  onSelect,
  className = ""
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative group w-full max-w-sm
        transition-all duration-500 ease-out
        ${isHovered ? 'scale-105 z-10' : 'scale-100'}
        ${className}
      `}
    >
      {/* Glow Effect */}
      {highlighted && (
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      
      {/* Card Container */}
      <div className={`
        relative h-full rounded-3xl overflow-hidden
        ${highlighted 
          ? 'bg-black border-2 border-orange-500/50' 
          : 'bg-zinc-950 border border-white/10'
        }
        backdrop-blur-xl shadow-2xl
      `}>
        {/* Popular Badge */}
        {highlighted && (
          <div className="absolute top-0 right-0 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white text-xs font-black px-5 py-2.5 rounded-bl-2xl shadow-lg">
            ⭐ MOST POPULAR
          </div>
        )}
        
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
            animation: isHovered ? 'slide 20s linear infinite' : 'none'
          }} />
        </div>
        
        {/* Noise Texture */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
        }} />
        
        {/* Gradient Overlay */}
        {highlighted && (
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-red-500/5" />
        )}

        {/* Content */}
        <div className="relative p-8">
          {/* Plan Name */}
          <h3 className={`text-2xl font-black mb-2 ${
            highlighted 
              ? 'bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-orange-200 to-red-200' 
              : 'text-white'
          }`}>{plan}</h3>
          
          {/* Price */}
          <div className="flex items-baseline mb-6">
            <span className={`text-6xl font-black ${
              highlighted
                ? 'bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent'
            }`}>
              ${price}
            </span>
            <span className="text-gray-500 ml-2 text-lg font-semibold">/{period}</span>
          </div>

          {/* Divider */}
          <div className={`h-px mb-6 ${
            highlighted
              ? 'bg-gradient-to-r from-transparent via-orange-500/50 to-transparent'
              : 'bg-gradient-to-r from-transparent via-gray-700 to-transparent'
          }`} />

          {/* Features List */}
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <li 
                key={index}
                className="flex items-center text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1"
              >
                <svg 
                  className={`w-5 h-5 mr-3 flex-shrink-0 ${
                    highlighted ? 'text-orange-500' : 'text-emerald-500'
                  }`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <button
            onClick={onSelect}
            className={`
              w-full py-4 rounded-xl font-black text-white text-sm tracking-wider
              relative overflow-hidden group/btn
              transition-all duration-300 hover:scale-105 active:scale-95
              ${highlighted 
                ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:shadow-2xl hover:shadow-orange-500/50' 
                : 'bg-gradient-to-r from-zinc-800 to-zinc-900 hover:from-zinc-700 hover:to-zinc-800 border border-white/10'
              }
            `}
          >
            {/* Button Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000" />
            
            {/* Inner Shadow */}
            <div className="absolute inset-0 rounded-xl" style={{boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)'}} />
            
            <span className="relative z-10 flex items-center justify-center gap-2">
              {highlighted ? (
                <>
                  <span>GET STARTED NOW</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </>
              ) : (
                'CHOOSE PLAN'
              )}
            </span>
          </button>
        </div>

        {/* Bottom Accent */}
        <div className={`
          h-1 bg-gradient-to-r
          ${highlighted 
            ? 'from-amber-500 via-orange-500 to-red-500' 
            : 'from-zinc-800 via-zinc-700 to-zinc-800'
          }
        `} />
      </div>

      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(0) translateY(0); }
          100% { transform: translateX(40px) translateY(40px); }
        }
      `}</style>
    </div>
  );
};

export default PricingCard;
